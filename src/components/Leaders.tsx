import Container from "@/components/ui/Container";
import LeaderCard, {
  type LeaderCardVariant,
  type LeaderPortraitStyle,
} from "@/components/LeaderCard";
import { getLeaders, type Leader } from "@/content/leaders";

export type LeaderColorScheme = "full-accent" | "restrained";

type LeadersProps = {
  leaders?: Leader[];
  colorScheme?: LeaderColorScheme;
  portraitStyle?: LeaderPortraitStyle;
  heading?: string;
};

function getCardVariant(
  index: number,
  colorScheme: LeaderColorScheme
): LeaderCardVariant {
  if (index === 0) return "brand";
  return colorScheme === "full-accent" ? "accent" : "surface";
}

export default function Leaders({
  leaders = getLeaders(),
  colorScheme = "full-accent",
  portraitStyle = "cutout",
  heading = "From Our Leaders",
}: LeadersProps) {
  const sorted = [...leaders].sort((a, b) => a.order - b.order);

  return (
    <section aria-labelledby="leaders-heading" className="py-16 md:py-24 bg-paper">
      <Container className="max-w-[1200px] space-y-16 md:space-y-24">
        <h2
          id="leaders-heading"
          className="font-display text-2xl font-semibold text-ink text-center"
        >
          {heading}
        </h2>

        <div className="space-y-24 md:space-y-28">
          {sorted.map((leader, index) => (
            <LeaderCard
              key={leader.slug}
              leader={leader}
              align={index === 0 ? "left" : "right"}
              variant={getCardVariant(index, colorScheme)}
              portraitStyle={portraitStyle}
              animationDelay={index * 120}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
