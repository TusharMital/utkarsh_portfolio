import { MessageSquare, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionLabel } from "./Reveal";

export function AssistantSection({ onOpenChat }: { onOpenChat: () => void }) {
  return (
    <section id="assistant" className="border-t border-hairline bg-card">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-24 md:grid-cols-2 md:px-10">
        <Reveal>
          <SectionLabel n="06">Portfolio Assistant</SectionLabel>
          <h2 className="display mt-8 text-5xl md:text-6xl">Ask Utkarsh’s portfolio.</h2>
        </Reveal>
        <Reveal className="flex flex-col items-start justify-center gap-6">
          <p className="text-lg text-muted-foreground">
            Projects, cybersecurity learning, Python development — explore verified facts about
            Utkarsh's work.
          </p>
          <Button onClick={onOpenChat} size="lg">
            <MessageSquare /> Start a conversation <ArrowUpRight />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
