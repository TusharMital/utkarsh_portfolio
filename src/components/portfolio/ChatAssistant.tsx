import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp, RotateCcw, MessageSquare, X, Shield } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What are your core cybersecurity focus areas?",
  "Tell me about the Interactive Quiz application.",
  "How did you implement the Reading List App?",
  "How do you approach debugging and boundary test cases?",
  "Tell me about the Python programs collection.",
];

function linkify(text: string): ReactNode[] {
  return text.split(/(https?:\/\/[^\s)]+[^\s).,;:!?])/g).map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noreferrer"
        className="break-all text-primary underline underline-offset-2"
      >
        {part.replace(/^https?:\/\/(www\.)?/, "")}
      </a>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function ChatAssistant({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [retryable, setRetryable] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, loading, error]);

  useEffect(() => {
    const previous = document.activeElement;
    const timer = open ? setTimeout(() => inputRef.current?.focus(), 50) : undefined;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onOpenChange(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (timer) clearTimeout(timer);
      if (open && previous instanceof HTMLElement) previous.focus();
    };
  }, [open, onOpenChange]);

  const send = async (history: Msg[]) => {
    setError(null);
    setRetryable(false);
    setLoading(true);
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history.filter((m) => m.content.trim()).slice(-23) }),
        signal: ctrl.signal,
      });
      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => ({}));
        setRetryable((res.status === 429 || res.status >= 500) && data.code !== "unconfigured");
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let text = "";
      setMessages([...history, { role: "assistant", content: "" }]);
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        setMessages([...history, { role: "assistant", content: text }]);
      }
      if (!text.trim()) throw new Error("The assistant returned an empty reply. Please try again.");
    } catch (e) {
      if ((e as Error).name === "AbortError") return;
      if (e instanceof TypeError) setRetryable(true);
      setMessages(history);
      setError(
        e instanceof TypeError ? "Network error — check your connection." : (e as Error).message,
      );
    } finally {
      setLoading(false);
      abortRef.current = null;
    }
  };

  const submit = (text: string) => {
    const t = text.trim();
    if (!t || loading) return;
    if (t.length > 2000) {
      setError("Please keep messages under 2000 characters.");
      return;
    }
    setInput("");
    const next = [...messages, { role: "user" as const, content: t }];
    setMessages(next);
    send(next);
  };

  return (
    <>
      <Button
        variant="ghost"
        onClick={() => onOpenChange(!open)}
        aria-label={open ? "Close portfolio assistant" : "Open Ask Utkarsh’s Portfolio Assistant"}
        className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-foreground py-3 pl-4 pr-5 text-background shadow-2xl transition-all hover:bg-primary hover:text-primary-foreground md:bottom-8 md:right-8"
      >
        {open ? <X className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />}
        <span className="label-mono">{open ? "Close" : "Ask my portfolio"}</span>
      </Button>

      {open && (
        <div
          role="dialog"
          aria-label="Ask Utkarsh’s Portfolio"
          className="fade-in fixed inset-x-3 bottom-20 top-20 z-50 flex flex-col overflow-hidden rounded-lg border border-border bg-popover shadow-2xl sm:inset-x-auto sm:right-5 sm:top-auto sm:h-[600px] sm:max-h-[calc(100vh-8rem)] sm:w-[420px] md:bottom-24 md:right-8"
          style={{ ["--d" as string]: "0ms" }}
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded bg-primary font-mono text-xs font-bold text-primary-foreground">
                U
              </span>
              <div>
                <div className="text-sm font-semibold">Ask Utkarsh’s Portfolio</div>
                <div className="label-mono text-[10px] text-muted-foreground flex items-center gap-1">
                  <Shield className="h-2.5 w-2.5 text-primary" /> Verified Portfolio Knowledge
                </div>
              </div>
            </div>
            {messages.length > 0 && (
              <Button
                variant="ghost"
                onClick={() => {
                  abortRef.current?.abort();
                  setMessages([]);
                  setError(null);
                }}
                aria-label="Start a new conversation"
                className="grid h-8 w-8 place-items-center rounded hover:bg-secondary"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div
            ref={scrollRef}
            className="flex-1 space-y-5 overflow-y-auto px-5 py-5"
            aria-live="polite"
          >
            {messages.length === 0 && (
              <div>
                <p className="display text-3xl">
                  Hi — ask me about Utkarsh’s projects & cybersecurity focus.
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  {SUGGESTIONS.map((s) => (
                    <Button
                      variant="ghost"
                      key={s}
                      onClick={() => submit(s)}
                      className="rounded border border-hairline px-3 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                    >
                      {s}
                    </Button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m, i) =>
              m.role === "user" ? (
                <div
                  key={i}
                  className="ml-auto max-w-[85%] rounded-lg bg-primary px-4 py-2.5 text-sm text-primary-foreground"
                >
                  {m.content}
                </div>
              ) : (
                <div key={i} className="whitespace-pre-wrap text-sm leading-relaxed">
                  {linkify(m.content)}
                </div>
              ),
            )}
            {loading && (
              <div className="label-mono flex items-center gap-2 text-muted-foreground">
                <span className="caret text-primary">▍</span> thinking
              </div>
            )}
            {error && (
              <div
                role="alert"
                className="rounded border border-destructive/40 bg-destructive/10 p-3 text-sm"
              >
                <p>{error}</p>
                {retryable && (
                  <Button
                    variant="ghost"
                    onClick={() => send(messages)}
                    className="label-mono mt-2 flex items-center gap-1.5 text-destructive hover:underline"
                  >
                    <RotateCcw className="h-3 w-3" /> Retry
                  </Button>
                )}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit(input);
            }}
            className="flex items-end gap-2 border-t border-border p-3"
          >
            <label htmlFor="chat-input" className="sr-only">
              Message
            </label>
            <textarea
              id="chat-input"
              ref={inputRef}
              rows={1}
              value={input}
              maxLength={2000}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  submit(input);
                }
              }}
              placeholder="Ask about projects, cybersecurity, Python…"
              className="max-h-32 min-h-[44px] min-w-0 flex-1 resize-none rounded border border-input bg-transparent px-3 py-2.5 text-sm outline-none focus:border-primary"
            />
            <Button
              variant="ghost"
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="grid h-11 w-11 shrink-0 place-items-center rounded bg-primary text-primary-foreground transition-opacity disabled:opacity-40"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
