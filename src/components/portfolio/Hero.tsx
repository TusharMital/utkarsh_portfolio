import { ArrowDownRight, ArrowUpRight, Github, Shield, Terminal } from "lucide-react";
import { ParticleField } from "./ParticleField";
import { Button } from "@/components/ui/button";
import { PROFILE, LINKS } from "@/lib/portfolio-data";
import type { CSSProperties } from "react";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[calc(100svh-48px)] flex-col overflow-hidden">
      <ParticleField />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-5 pb-10 pt-28 md:px-10 md:pb-12">
        <div
          className="label-mono fade-in mb-6 flex flex-wrap items-center gap-3 text-muted-foreground"
          style={d(200)}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
            <span className="relative h-2 w-2 rounded-full bg-signal" />
          </span>
          <span className="text-foreground/90 font-medium flex items-center gap-1.5">
            <Shield className="h-3 w-3 text-primary inline" /> Cybersecurity & Defensive Software
            Development
          </span>
          <span className="hidden sm:inline text-border">|</span>
          <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
            <Terminal className="h-3 w-3 text-primary/70" /> Python · Debugging · Secure Systems
          </span>
        </div>

        <div className="space-y-2">
          <p
            className="label-mono text-primary uppercase tracking-widest text-xs font-semibold"
            style={d(150)}
          >
            Hi, I'm
          </p>
          <h1 className="display hero-name">
            <span className="name-line">
              <span style={d(100)}>
                Utkarsh<span className="text-primary">.</span>
              </span>
            </span>
          </h1>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
          <div
            className="label-mono fade-in text-muted-foreground md:col-span-4 space-y-1.5"
            style={d(600)}
          >
            <div className="text-foreground font-semibold text-sm">Computer Science Student</div>
            <div className="text-primary flex items-center gap-1.5">
              Aspiring Cybersecurity Professional
            </div>
            <p className="text-xs text-muted-foreground/80 pt-1">
              Exploring secure architectures, Python logic, and hands-on debugging.
            </p>
          </div>

          <p
            className="fade-in text-base leading-relaxed text-foreground/90 md:col-span-5 md:text-lg"
            style={d(750)}
          >
            {PROFILE.intro}
          </p>

          <div className="fade-in flex flex-col gap-3 md:col-span-3 md:items-end" style={d(900)}>
            <Button asChild className="h-auto w-full sm:w-auto">
              <a
                href="#work"
                className="group inline-flex items-center justify-between sm:justify-center gap-4 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                <span>Explore My Projects</span>
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:rotate-[-45deg]" />
              </a>
            </Button>
            <div className="flex w-full sm:w-auto gap-2">
              <Button asChild variant="outline" className="h-auto flex-1 sm:flex-initial">
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-xs font-mono uppercase tracking-wider transition-colors hover:border-primary hover:text-primary"
                >
                  <Github className="h-3.5 w-3.5" />
                  View GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="h-auto flex-1 sm:flex-initial">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-xs font-mono uppercase tracking-wider transition-colors hover:border-foreground"
                >
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div
          className="fade-in mt-12 flex items-center justify-between border-t border-hairline pt-5"
          style={d(1050)}
        >
          <div className="flex items-center gap-6">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="label-mono link-underline flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <Github className="h-3.5 w-3.5 text-primary" /> GitHub Profile
              <ArrowUpRight className="h-3 w-3 opacity-60" />
            </a>
            <span className="hidden sm:inline text-xs text-muted-foreground/60 font-mono">
              // Focus: Cybersecurity & Software Reliability
            </span>
          </div>
          <a
            href="#about"
            className="label-mono flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to About"
          >
            Scroll
            <span className="scroll-cue relative block h-10 w-px overflow-hidden bg-border" />
          </a>
        </div>
      </div>
    </section>
  );
}
