import { CYBERSECURITY_PILLARS, LEARNING_ROADMAP } from "@/lib/portfolio-data";
import { Reveal, SectionLabel } from "./Reveal";
import { Shield, Lock, Terminal, Network, Compass, ArrowRight } from "lucide-react";

export function Process() {
  const pillarIcons = [Lock, Shield, Terminal, Network];

  return (
    <section
      id="cybersecurity"
      className="relative overflow-hidden border-t border-hairline bg-card/60"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <SectionLabel n="04">Cybersecurity Focus & Learning</SectionLabel>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal as="h2" className="display text-4xl sm:text-5xl md:text-7xl lg:col-span-8">
            Defensive security, <em className="text-primary not-italic">secure coding</em>, &
            systems discipline.
          </Reveal>
          <Reveal
            delay={120}
            className="text-muted-foreground lg:col-span-4 text-sm md:text-base leading-relaxed"
          >
            Cybersecurity is my primary interest and learning direction. Rather than superficial
            hacking tropes, I focus on defensive engineering: how input validation, boundary tests,
            and network architecture protect software integrity.
          </Reveal>
        </div>

        {/* Pillars Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {CYBERSECURITY_PILLARS.map((pillar, i) => {
            const Icon = pillarIcons[i % pillarIcons.length];
            return (
              <Reveal
                key={pillar.code}
                delay={i * 100}
                className="group relative flex flex-col justify-between rounded-lg border border-border bg-card p-6 md:p-8 transition-colors hover:border-primary/50"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 font-mono text-xs font-semibold text-primary">
                      <Icon className="h-4 w-4" />
                      {pillar.code}
                    </span>
                    <span className="label-mono text-[10px] text-muted-foreground">
                      Core Principle
                    </span>
                  </div>
                  <h3 className="display mt-5 text-2xl md:text-3xl text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-hairline">
                  <p className="font-mono text-xs text-primary/90 flex items-start gap-1.5">
                    <span className="text-muted-foreground select-none">// Connection:</span>
                    <span>{pillar.practicalLink}</span>
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Learning Roadmap */}
        <div className="mt-20 pt-16 border-t border-border">
          <Reveal>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary mb-3">
              <Compass className="h-4 w-4" />
              Learning Roadmap & Active Goals
            </div>
            <h3 className="display text-3xl sm:text-4xl md:text-5xl">Structured learning path.</h3>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              These are deliberate learning targets and study milestones, not claims of professional
              certification.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LEARNING_ROADMAP.map((item, idx) => (
              <Reveal
                key={item.stage}
                delay={idx * 100}
                className="flex flex-col justify-between rounded-lg border border-border bg-card/80 p-5 transition-colors hover:border-foreground/30"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="label-mono text-xs text-primary font-bold">
                      Stage {item.stage}
                    </span>
                    <span className="label-mono rounded bg-primary/10 px-2 py-0.5 text-[9px] text-primary border border-primary/20">
                      {item.status}
                    </span>
                  </div>
                  <div className="label-mono text-muted-foreground text-[10px] mt-3">
                    {item.area}
                  </div>
                  <h4 className="font-sans text-base font-semibold text-foreground mt-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-hairline flex items-center gap-1 text-[11px] font-mono text-muted-foreground">
                  <span>Track progress</span>
                  <ArrowRight className="h-3 w-3 text-primary" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
