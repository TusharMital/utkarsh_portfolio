import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, Globe } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/portfolio/Nav";
import { ProjectVisual } from "@/components/portfolio/ProjectVisual";
import { ChatAssistant } from "@/components/portfolio/ChatAssistant";

export const Route = createFileRoute("/projects/$projectId")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.id === params.projectId);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} — Utkarsh` : "Project unavailable — Utkarsh";
    const description = loaderData?.description ?? "This portfolio project is unavailable.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const project = Route.useLoaderData();
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="grain">
      <Nav detail onOpenChat={() => setChatOpen(true)} />
      <main className="mx-auto max-w-[1400px] px-5 pb-28 pt-32 md:px-10">
        <Button
          asChild
          variant="link"
          className="px-0 font-mono text-sm text-primary hover:text-primary/80"
        >
          <Link to="/" hash="work">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all projects
          </Link>
        </Button>

        <p className="label-mono mt-10 text-primary font-semibold">
          Project {project.index} · Learning Project · Source Verified
        </p>
        <h1 className="display mt-4 max-w-5xl text-4xl sm:text-6xl md:text-7xl">{project.title}</h1>
        <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          {project.live && (
            <Button asChild className="h-auto">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                <Globe className="h-4 w-4" />
                Live Demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.deployment && (
            <Button asChild variant="outline" className="h-auto">
              <a
                href={project.deployment}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary"
              >
                <ExternalLink className="h-4 w-4" />
                Deployment Project
              </a>
            </Button>
          )}
          {project.repo && (
            <Button asChild variant="outline" className="h-auto">
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-foreground"
              >
                <Github className="h-4 w-4" />
                View Source
              </a>
            </Button>
          )}
        </div>

        <div className="mt-16 grid gap-12 border-t border-border pt-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <div
              className="aspect-[4/3] overflow-hidden rounded-lg border border-border bg-card shadow-sm"
              role="img"
              aria-label={`Visual presentation of ${project.title}`}
            >
              <ProjectVisual id={project.id} />
            </div>
            <h2 className="label-mono mt-8 text-primary font-semibold">Technology & Tools</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded border border-border bg-card/60 px-3 py-1 text-xs font-mono text-foreground/90"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            {[
              ["Overview", project.description],
              ["Objective", project.caseStudy.objective],
              ["Implementation", project.caseStudy.implementation],
              ["Lessons & Documented Result", project.caseStudy.outcome],
            ].map(([title, content]) => (
              <section key={title} className="rounded-lg border border-border/60 bg-card/40 p-6">
                <h2 className="display text-2xl md:text-3xl text-foreground">{title}</h2>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">
                  {content}
                </p>
              </section>
            ))}
          </div>
        </div>

        <Button
          asChild
          variant="outline"
          className="mt-16 font-mono text-xs uppercase tracking-wider"
        >
          <Link to="/" hash="work">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to projects
          </Link>
        </Button>
      </main>
      <ChatAssistant open={chatOpen} onOpenChange={setChatOpen} />
    </div>
  );
}
