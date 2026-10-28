import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Work } from "@/components/portfolio/Work";
import { Process } from "@/components/portfolio/Process";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { ChatAssistant } from "@/components/portfolio/ChatAssistant";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Utkarsh — Computer Science & Cybersecurity Portfolio" },
      {
        name: "description",
        content:
          "Personal portfolio of Utkarsh, a Computer Science engineering student focused on cybersecurity, Python programming, debugging, and secure application development.",
      },
      { property: "og:title", content: "Utkarsh — Computer Science & Cybersecurity Portfolio" },
      {
        property: "og:description",
        content:
          "Portfolio of Utkarsh, Computer Science student exploring cybersecurity, Python development, debugging, and secure coding.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="grain">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground font-mono text-xs"
      >
        Skip to content
      </a>
      <Nav onOpenChat={() => setChatOpen(true)} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Process />
        <Contact />
      </main>
      <ChatAssistant open={chatOpen} onOpenChange={setChatOpen} />
    </div>
  );
}
