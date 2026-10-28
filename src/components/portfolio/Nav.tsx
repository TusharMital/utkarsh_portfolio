import { useEffect, useState } from "react";
import { Menu, Moon, Sun, MessageSquare, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Projects" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "contact", label: "Contact" },
];

export function Nav({ onOpenChat, detail = false }: { onOpenChat: () => void; detail?: boolean }) {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const next = localStorage.getItem("theme") === "light";
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-20% 0px -60% 0px" },
    );
    ITEMS.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const href = (id: string) => `${detail ? "/" : ""}#${id}`;

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-hairline bg-background/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex h-20 max-w-[1400px] items-center justify-between gap-4 px-5 md:px-10"
        aria-label="Main"
      >
        <Button asChild variant="link" className="display px-0 text-foreground hover:no-underline">
          <a href={href("home")} className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded border border-primary/40 bg-primary/10 font-mono text-sm font-bold text-primary">
              U
            </span>
            <span className="font-sans text-xl font-semibold tracking-tight text-foreground">
              Utkarsh<span className="text-primary">.</span>
            </span>
          </a>
        </Button>
        <ul className="hidden items-center gap-1 md:flex">
          {ITEMS.map((i) => (
            <li key={i.id}>
              <Button
                asChild
                variant="link"
                className={`px-3 text-xs uppercase tracking-wider font-mono ${
                  active === i.id && !detail
                    ? "text-primary underline underline-offset-8"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <a
                  href={href(i.id)}
                  aria-current={active === i.id && !detail ? "location" : undefined}
                >
                  {i.label}
                </a>
              </Button>
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 items-center gap-2">
          <Button
            onClick={onOpenChat}
            variant="outline"
            className="hidden sm:inline-flex items-center gap-2 border-border hover:border-primary/50 text-xs font-mono uppercase"
          >
            <MessageSquare className="h-3.5 w-3.5 text-primary" />
            Ask Assistant
          </Button>
          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
            title={light ? "Dark theme" : "Light theme"}
          >
            {light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
          <Button
            onClick={() => setOpen(true)}
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            className="md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90svh] max-w-md overflow-y-auto">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded border border-primary/40 bg-primary/10 font-mono text-base font-bold text-primary">
              U
            </span>
            <div>
              <DialogTitle className="display text-3xl">Utkarsh</DialogTitle>
              <DialogDescription className="label-mono text-primary flex items-center gap-1 mt-0.5">
                <Shield className="h-3 w-3 inline" /> Computer Science · Cybersecurity
              </DialogDescription>
            </div>
          </div>
          <ul className="mt-6 grid gap-1 border-t border-border pt-4">
            {ITEMS.map((i) => (
              <li key={i.id}>
                <Button
                  asChild
                  variant="ghost"
                  className="h-auto w-full justify-start py-3 text-lg"
                >
                  <a href={href(i.id)} onClick={() => setOpen(false)}>
                    {i.label}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </header>
  );
}
