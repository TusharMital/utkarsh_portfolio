import { SKILL_GROUPS } from "@/lib/portfolio-data";
import { Reveal, SectionLabel } from "./Reveal";
import { CheckCircle2, BookOpen, Layers } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="border-t border-hairline bg-card/40">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <SectionLabel n="02">Skills & Knowledge</SectionLabel>
        </Reveal>

        <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal as="h2" className="display text-4xl sm:text-5xl md:text-7xl">
            Technical skills <span className="text-muted-foreground">— & active learning.</span>
          </Reveal>
          <Reveal delay={100} className="max-w-md text-sm text-muted-foreground">
            A clear view of tools demonstrated in genuine project code alongside cybersecurity
            topics currently being explored. No invented proficiency percentages or unverified
            claims.
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, gi) => {
            const isLearning = group.category.includes("Cybersecurity");
            const isPractice = group.category.includes("Practices");
            const Icon = isLearning ? BookOpen : isPractice ? Layers : CheckCircle2;

            return (
              <Reveal
                key={group.category}
                delay={gi * 120}
                className="flex flex-col justify-between rounded-lg border border-border bg-card p-6 md:p-8 transition-colors hover:border-primary/40"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                      <Icon className="h-4 w-4" />
                      {group.tag}
                    </span>
                    <span
                      className={`label-mono px-2 py-0.5 rounded text-[10px] ${
                        isLearning
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "bg-signal/10 text-signal border border-signal/20"
                      }`}
                    >
                      {isLearning ? "Active Exploration" : "Demonstrated in Projects"}
                    </span>
                  </div>

                  <h3 className="display mt-6 text-3xl md:text-4xl text-foreground">
                    {group.category}
                  </h3>

                  <ul className="mt-8 space-y-4">
                    {group.skills.map((skill) => (
                      <li key={skill.name} className="border-b border-border/60 pb-3 last:border-0">
                        <div className="font-mono text-sm font-medium text-foreground flex items-center justify-between">
                          <span>{skill.name}</span>
                          <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">{skill.status}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-hairline font-mono text-[11px] text-muted-foreground flex items-center justify-between">
                  <span>Scope: {group.skills.length} core topics</span>
                  <span className="text-primary/70">Verified focus</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Preserve export if any tests or routes reference Milestones
export function Milestones() {
  return null;
}
