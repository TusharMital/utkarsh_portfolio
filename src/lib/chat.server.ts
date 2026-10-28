import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { z } from "zod";
import { buildAssistantKnowledge } from "./portfolio-data";

const BodySchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().trim().min(1).max(2000),
      }),
    )
    .min(1)
    .max(24),
});

const RUN_ID = "X-Lovable-AIG-Run-ID";

export async function handleChat(request: Request): Promise<Response> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) {
    return Response.json(
      { error: "The assistant is not configured yet.", code: "unconfigured" },
      { status: 503 },
    );
  }

  let parsed;
  try {
    parsed = BodySchema.safeParse(await request.json());
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!parsed.success || parsed.data.messages.at(-1)?.role !== "user") {
    return Response.json(
      { error: "Please send a message under 2000 characters." },
      { status: 400 },
    );
  }
  // strip control chars
  const messages = parsed.data.messages.map((m) => ({
    role: m.role,
    // eslint-disable-next-line no-control-regex
    content: m.content.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, ""),
  }));

  let runId: string | undefined = request.headers.get(RUN_ID)?.trim() || undefined;
  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
      const headers = new Headers(init?.headers);
      if (runId && !headers.has(RUN_ID)) headers.set(RUN_ID, runId);
      const res = await fetch(input, { ...init, headers });
      runId ??= res.headers.get(RUN_ID)?.trim() || undefined;
      return res;
    },
  });

  const result = streamText({
    model: provider.responses("openai/gpt-6-astra"),
    system: buildAssistantKnowledge(),
    messages,
    maxRetries: 0,
    abortSignal: request.signal,
    providerOptions: {
      openai: {
        forceReasoning: true,
        reasoningEffort: "low",
        reasoningSummary: "auto",
        store: false,
        include: ["reasoning.encrypted_content"],
      },
    },
  });

  // Pull the first chunk before sending headers so upstream failures map to real statuses.
  const iterator = result.textStream[Symbol.asyncIterator]();
  let first: IteratorResult<string>;
  try {
    first = await iterator.next();
  } catch (err) {
    const status = (err as { statusCode?: number }).statusCode ?? 502;
    const upstream = err as { responseBody?: string };
    let safeMessage: string | undefined;
    try {
      const data = JSON.parse(upstream.responseBody ?? "{}");
      safeMessage = data.error?.message ?? data.message;
    } catch {
      /* Only expose a structured upstream message. */
    }
    const message =
      safeMessage ??
      (status === 429
        ? "The assistant is busy right now. Please try again in a moment."
        : status === 402
          ? "The assistant has run out of AI credits for now."
          : status === 403
            ? "Access to the assistant is currently denied."
            : "The assistant couldn't respond. Please try again.");
    console.error("chat error status", status);
    return Response.json({ error: message }, { status });
  }

  const encoder = new TextEncoder();
  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        if (!first.done) controller.enqueue(encoder.encode(first.value));
        while (true) {
          const next = await iterator.next();
          if (next.done) break;
          controller.enqueue(encoder.encode(next.value));
        }
        controller.close();
      } catch (err) {
        controller.error(err);
      }
    },
    cancel() {
      iterator.return?.();
    },
  });

  const headers = new Headers({
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control": "no-store",
  });
  if (runId) headers.set(RUN_ID, runId);
  return new Response(body, { headers });
}
