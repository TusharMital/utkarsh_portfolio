import { Reveal, SectionLabel } from "./Reveal";
import { PROFILE } from "@/lib/portfolio-data";
import { ShieldCheck, Terminal, Code2, AlertCircle } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
      <Reveal>
        <SectionLabel n="01">About Utkarsh</SectionLabel>
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        <Reveal
          as="h2"
          className="display text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:col-span-7"
        >
          Computer Science engineering student passionate about{" "}
          <em className="text-primary not-italic">cybersecurity</em>, systems thinking, and building{" "}
          <span className="text-outline">reliable</span> software.
        </Reveal>

        <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground lg:col-span-5 lg:pt-2">
          <Reveal delay={100}>{PROFILE.bio[0]}</Reveal>
          <Reveal delay={200}>{PROFILE.bio[1]}</Reveal>
          <Reveal delay={300}>{PROFILE.bio[2]}</Reveal>
          <Reveal
            delay={400}
            className="border-l-2 border-primary pl-5 text-foreground italic font-medium"
          >
            "{PROFILE.approach}"
          </Reveal>
        </div>
      </div>

      <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: ShieldCheck,
            title: "Cybersecurity Focus",
            desc: "Learning defensive security concepts, common vulnerability patterns (OWASP), and safe system architecture.",
          },
          {
            icon: Terminal,
            title: "Python & Development",
            desc: "Building clean implementations, algorithmic scripts, and interactive web tools with disciplined coding standards.",
          },
          {
            icon: Code2,
            title: "Systematic Debugging",
            desc: "Diagnosing logic bugs, boundary conditions, and writing unit tests using the RED → FIX → GREEN methodology.",
          },
          {
            icon: AlertCircle,
            title: "Secure Coding Mindset",
            desc: "Treating input validation, boundary checking, and state integrity as foundational engineering principles.",
          },
        ].map((item, idx) => (
          <Reveal
            key={item.title}
            delay={idx * 100}
            className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
          >
            <item.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
            <h3 className="font-sans text-lg font-semibold text-foreground mt-4">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
