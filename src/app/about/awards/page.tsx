import type { Metadata } from "next";
import Image from "next/image";

import { getAwards } from "@/content";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import type { Award } from "@/content/types";

export const metadata: Metadata = {
  title: "Awards & Recognition | Cosog Nepal",
  description:
    "Awards and recognition received by Cosog Nepal and our team members.",
};

const LEVEL_LABELS: Record<Award["level"], string> = {
  winner: "Winner",
  finalist: "Finalist",
  "semi-finalist": "Semi-finalist",
  awardee: "Awardee",
};

const SHORT_LABELS: Record<string, string> = {
  "estem-grant-2025": "E-STEM Grant",
  "ict-award-2025": "ICT Award",
  "cec-2023": "Citizen Entrepreneurship",
  "glocal-teen-hero-2024": "Glocal Teen Hero",
};

export default function AwardsPage() {
  const awards = getAwards();

  return (
    <main className="py-12 md:py-16">
      <Container className="space-y-10">
        <div className="space-y-4 max-w-2xl">
          <SectionHeading as="h1">Awards &amp; Recognition</SectionHeading>
          <p className="text-ink-muted leading-relaxed">
            Cosog Nepal and our team have been recognized nationally and
            internationally for youth-led innovation in technology education
            and social impact.
          </p>
        </div>

        <div className="border-t border-rule">
          {awards.map((award) => (
            <article
              key={award.id}
              className="grid grid-cols-1 md:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] gap-6 md:gap-12 py-10 md:py-12 border-b border-rule"
            >
              <div className="md:pt-1">
                <h2 className="font-display font-bold text-xl md:text-2xl text-ink leading-tight tracking-[-0.015em]">
                  {SHORT_LABELS[award.id] ?? award.title}
                </h2>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  {LEVEL_LABELS[award.level]} · {award.year}
                </p>
              </div>

              <div className="space-y-5">
                {award.imageUrl && (
                  <div className="relative w-full max-w-md aspect-[16/10] rounded-lg border border-rule bg-brand-wash overflow-hidden">
                    <Image
                      src={award.imageUrl}
                      alt={award.title}
                      fill
                      className="object-contain p-3"
                    />
                  </div>
                )}

                <div className="space-y-3">
                  <h3 className="font-display font-semibold text-lg text-ink">
                    {award.title}
                  </h3>
                  <p className="text-sm text-ink-muted">
                    {award.recipient} · {award.organization}
                  </p>
                  {award.description && (
                    <p className="text-base text-ink-muted leading-relaxed max-w-prose">
                      {award.description}
                    </p>
                  )}
                </div>

                {(award.link || award.sourceUrl) && (
                  <ul className="space-y-2 text-sm">
                    {award.link && (
                      <li>
                        <a
                          href={award.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-brand font-medium hover:underline underline-offset-4"
                        >
                          Read the full story
                        </a>
                      </li>
                    )}
                    {award.sourceUrl && (
                      <li>
                        <a
                          href={award.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-brand font-medium hover:underline underline-offset-4"
                        >
                          View official source
                        </a>
                      </li>
                    )}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
