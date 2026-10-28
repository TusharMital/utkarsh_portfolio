import { ArrowUpRight, Copy, Check, Github, Mail, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { LINKS } from "@/lib/portfolio-data";
import { Reveal, SectionLabel } from "./Reveal";

export function Contact() {
  const [copyError, setCopyError] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      setCopyError(false);
      await navigator.clipboard.writeText(LINKS.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopyError(true);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-hairline">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <SectionLabel n="05">Contact & Connect</SectionLabel>
        </Reveal>
        <Reveal as="h2" className="display mt-8 text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
          Let's connect & <br />
          explore <em className="text-primary not-italic">secure systems.</em>
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <Reveal className="text-base md:text-lg leading-relaxed text-muted-foreground lg:col-span-5">
            I'm a Computer Science engineering student continuously learning about cybersecurity,
            Python development, and debugging reliable code. Whether discussing defensive security
            concepts or collaborating on software projects, I'd welcome the opportunity to connect.
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7 space-y-6">
            {/* GitHub Card */}
            <Reveal>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/60 hover:bg-card/80"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background group-hover:border-primary group-hover:text-primary">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                      GitHub Profile
                    </div>
                    <div className="font-sans text-base font-semibold text-foreground mt-0.5">
                      utkarsh25bcon2341-ship-it
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>

            {/* Email Card */}
            <Reveal delay={100}>
              <div className="rounded-lg border border-border bg-card p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${LINKS.email}`}
                        className="font-mono text-sm md:text-base text-foreground hover:text-primary transition-colors break-all"
                      >
                        {LINKS.email}
                      </a>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copy}
                    aria-label="Copy email address"
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border hover:border-primary hover:text-primary"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-signal" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <p role="status" className="mt-3 text-xs text-muted-foreground">
                  {copied
                    ? "Email address copied to clipboard."
                    : copyError
                      ? "Copy unavailable — click the link to send an email."
                      : "Official student email for contact, queries, and technical collaboration."}
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground pt-2">
                <Shield className="h-3.5 w-3.5 text-primary" />
                <span>Open to technical discussions, projects, and academic collaboration.</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <footer className="relative border-t border-hairline bg-card/20">
        <div className="font-mono text-xs mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-8 text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
          <div className="flex items-center gap-2 text-foreground">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/20 text-primary font-bold text-[10px]">
              U
            </span>
            <span>© {new Date().getFullYear()} Utkarsh</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            <span>Computer Science Engineering Student · Cybersecurity Focus</span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a href="#work" className="hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#cybersecurity" className="hover:text-primary transition-colors">
              Cybersecurity
            </a>
            <a href="#home" className="hover:text-primary transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
