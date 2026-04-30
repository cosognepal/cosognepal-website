import { Quote } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PlaceholderAvatar from "@/components/ui/PlaceholderAvatar";
import { cn } from "@/lib/utils";
import SectionTitle from "@/components/SectionTitle";

type FounderTone = "primary" | "accent";

type Founder = {
  name: string;
  title: string;
  message: string;
  tone: FounderTone;
};

const founders: Founder[] = [
  {
    name: "Founder One",
    title: "Co-founder of Coding for Social Good Nepal",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget mauris ut sapien tincidunt eleifend. Nulla facilisi. Phasellus a leo non sapien dictum tristique. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tone: "primary",
  },
  {
    name: "Founder Two",
    title: "Co-founder of Coding for Social Good Nepal",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ipsum non urna fermentum suscipit eu nec lectus. Aenean a elit nec massa congue blandit. Cras non massa quis ipsum laoreet vehicula.",
    tone: "accent",
  },
];

export default function FoundersMessage() {
  return (
    <Section spacing="block" className="bg-white">
      <Container className="space-y-block">
      <SectionTitle title="From our founders" />


        <div className="space-y-section">
          {founders.map((founder, index) => (
            <FounderCard
              key={founder.name}
              founder={founder}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FounderCard({
  founder,
  reversed,
}: {
  founder: Founder;
  reversed: boolean;
}) {
  const isPrimary = founder.tone === "primary";

  return (
    <div className="relative">
      <article
        className={cn(
          "grid grid-cols-1 md:grid-cols-[minmax(220px,40%)_1fr] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.06)]",
          isPrimary ? "bg-primary text-white" : "bg-accent_yellow-200 text-black-dark"
        )}
      >
        <div
          className={cn(
            "relative min-h-[280px] md:min-h-[380px] overflow-hidden",
            reversed && "md:order-2"
          )}
        >
          <PlaceholderAvatar
            name={founder.name}
            className="absolute inset-0 h-full w-full rounded-none"
          />
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-0",
              isPrimary
                ? "bg-gradient-to-br from-primary/10 to-primary/30 mix-blend-multiply"
                : "bg-gradient-to-br from-accent_yellow-100/30 to-accent_yellow-400/20 mix-blend-multiply"
            )}
          />
        </div>

        <div className="relative p-standard md:p-block flex flex-col justify-center gap-4 md:gap-5">
          <Quote
            className={cn(
              "h-8 w-8 shrink-0",
              isPrimary ? "text-white/40" : "text-accent_yellow-600/70"
            )}
            aria-hidden
          />

          <p className="text-para md:text-sub-title leading-relaxed">
            {founder.message}
          </p>

          <p
            className={cn(
              "italic text-sub-para",
              isPrimary ? "text-white/85" : "text-black-mid"
            )}
          >
            — {founder.title}
          </p>
        </div>
      </article>

      <div
        className={cn(
          "absolute bottom-0 translate-y-1/2 z-10",
          reversed
            ? "right-4 md:right-[8%]"
            : "left-4 md:left-[8%]"
        )}
      >
        <span className="inline-flex items-center bg-blue-blue text-white px-6 md:px-8 py-3 rounded-md text-sub-para font-bold uppercase tracking-[0.12em] shadow-md">
          {founder.name}
        </span>
      </div>
    </div>
  );
}
