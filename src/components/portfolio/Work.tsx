import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";
import { ArrowUpRight, Github, Globe, ExternalLink, Search, X } from "lucide-react";
import { CATEGORIES, PROJECTS, type Category } from "@/lib/portfolio-data";
import { filterProjects } from "@/lib/project-filter";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal, SectionLabel } from "./Reveal";

export function Work() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<Category | null>(null);
  const results = useMemo(() => filterProjects(PROJECTS, query, cat), [query, cat]);
  const filtered = query.trim() !== "" || cat !== null;

  return (
    <section id="work" className="relative border-t border-hairline">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <SectionLabel n="03">Featured Projects</SectionLabel>
        </Reveal>
        <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <Reveal as="h2" className="display text-5xl md:text-7xl lg:text-8xl">
            Projects<span className="text-primary">.</span>
          </Reveal>

          <Reveal delay={100} className="w-full lg:max-w-xl">
            <label className="flex items-center gap-3 border-b border-border pb-3 focus-within:border-primary">
              <Search className="h-4 w-4 text-muted-foreground" />
              <span className="sr-only">Search projects</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects by name, language, or keyword…"
                className="w-full bg-transparent text-base md:text-lg outline-none placeholder:text-muted-foreground"
              />
            </label>
            <div
              className="mt-4 flex flex-wrap items-center gap-2"
              role="group"
              aria-label="Filter by category"
            >
              {CATEGORIES.map((c) => (
                <Button
                  variant="ghost"
                  key={c}
                  aria-pressed={cat === c}
                  onClick={() => setCat(cat === c ? null : c)}
                  className={`label-mono rounded-full border px-3 py-1.5 transition-colors ${
                    cat === c
                      ? "border-primary bg-primary text-primary-foreground font-semibold"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </Button>
              ))}
              {filtered && (
                <Button
                  variant="ghost"
                  onClick={() => {
                    setQuery("");
                    setCat(null);
                  }}
                  className="label-mono ml-1 flex items-center gap-1 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3 w-3" /> Clear
                </Button>
              )}
            </div>
            <p className="label-mono mt-3 text-muted-foreground" aria-live="polite">
              Showing {results.length} of {PROJECTS.length} verified projects
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-24 md:space-y-36">
          {results.length === 0 && (
            <div className="rounded-lg border border-dashed border-border py-20 text-center">
              <p className="display text-3xl">No projects match that search.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try searching for “python”, “javascript”, “react”, or “debugging”.
              </p>
            </div>
          )}
          {results.map((p, i) => {
            const flip = i % 2 === 1;

            return (
              <article key={p.id} className="group grid gap-10 md:grid-cols-12 md:gap-12">
                <Reveal
                  className={`relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-card md:col-span-7 ${
                    flip ? "md:order-2 md:col-start-6" : ""
                  }`}
                >
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]">
                    <ProjectVisual id={p.id} />
                  </div>
                  <span className="display absolute right-5 top-3 text-7xl text-foreground/10 select-none">
                    {p.index}
                  </span>
                </Reveal>

                <div
                  className={`flex flex-col justify-center md:col-span-5 ${
                    flip ? "md:order-1 md:col-start-1" : ""
                  }`}
                >
                  <Reveal className="label-mono text-primary font-semibold flex items-center gap-2">
                    <span>{p.index}</span>
                    <span className="text-border">/</span>
                    <span>{p.label}</span>
                  </Reveal>
                  <Reveal
                    as="h3"
                    delay={80}
                    className="display mt-3 text-4xl sm:text-5xl md:text-6xl text-foreground"
                  >
                    {p.title}
                  </Reveal>
                  <Reveal
                    delay={160}
                    className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground"
                  >
                    {p.description}
                  </Reveal>
                  <Reveal delay={220} className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="label-mono rounded border border-border bg-card/50 px-2 py-1 text-[11px] text-foreground/80 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </Reveal>
                  <Reveal delay={280} className="mt-7 flex flex-wrap items-center gap-3">
                    {p.live && (
                      <Button asChild className="h-auto">
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                          <Globe className="h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    )}
                    {p.deployment && (
                      <Button asChild variant="outline" className="h-auto">
                        <a
                          href={p.deployment}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                        >
                          <ExternalLink className="h-4 w-4" /> Deployment Project
                        </a>
                      </Button>
                    )}
                    {p.repo && (
                      <Button asChild variant="outline" className="h-auto">
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-foreground"
                        >
                          <Github className="h-4 w-4" /> View Source
                        </a>
                      </Button>
                    )}
                  </Reveal>

                  <div className="mt-7 border-t border-hairline pt-4 flex items-center justify-between">
                    <p className="label-mono text-muted-foreground text-[11px]">
                      Learning Project · Verified Source
                    </p>
                    <Button
                      asChild
                      variant="link"
                      className="px-0 text-sm font-mono text-primary hover:text-primary/80"
                    >
                      <Link to="/projects/$projectId" params={{ projectId: p.id }}>
                        Read Case Study <ArrowUpRight className="ml-1 h-3.5 w-3.5 inline" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
