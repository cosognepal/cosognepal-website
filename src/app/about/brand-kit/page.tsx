import type { Metadata } from "next";
import Image from "next/image";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import CosogLogo from "@/assets/logo.png";
import { theme } from "@/design/theme";

export const metadata: Metadata = {
  title: "Brand Kit | Cosog Nepal",
  description:
    "Official brand kit for Cosog Nepal: logos, color system, and typography.",
};

const COLOR_SWATCHES = [
  { name: "Ink", value: theme.colors.ink, textClass: "text-white" },
  { name: "Ink Muted", value: theme.colors.inkMuted, textClass: "text-white" },
  { name: "Paper", value: theme.colors.paper, textClass: "text-ink" },
  { name: "Surface", value: theme.colors.surface, textClass: "text-ink" },
  { name: "Rule", value: theme.colors.rule, textClass: "text-ink" },
  { name: "Brand", value: theme.colors.brand, textClass: "text-white" },
  { name: "Brand Hover", value: theme.colors.brandHover, textClass: "text-white" },
  { name: "Brand Wash", value: theme.colors.brandWash, textClass: "text-ink" },
  { name: "Accent", value: theme.colors.accent, textClass: "text-ink" },
  { name: "Accent Wash", value: theme.colors.accentWash, textClass: "text-ink" },
];

export default function BrandKitPage() {
  return (
    <main className="py-12 md:py-16 bg-paper">
      <Container className="space-y-12">
        <div className="space-y-4">
          <SectionHeading as="h1">Brand Kit</SectionHeading>
          <p className="text-base text-ink-muted max-w-lead">
            This page documents the Cosog Nepal identity system used across the
            site: our logo, type system, and tokenized color palette.
          </p>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-8 items-start">
          <div className="bg-surface border border-rule rounded-lg p-8 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand">
              Primary mark
            </p>
            <div className="flex items-center justify-center bg-paper rounded-lg p-8 border border-rule">
              <Image
                src={CosogLogo}
                alt="Cosog Nepal logo"
                width={180}
                height={180}
                className="h-auto w-auto"
              />
            </div>
            <p className="text-sm text-ink-muted max-w-prose">
              Use the full-color mark on `paper` or `surface` backgrounds. Keep
              generous whitespace around the mark and avoid placing it over
              busy photography.
            </p>
          </div>

          <div className="bg-surface border border-rule rounded-lg p-8 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand">
              Typography
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-ink-muted">Display / headings</p>
                <p className="font-display font-semibold text-display text-ink">
                  Rubik
                </p>
              </div>
              <div>
                <p className="text-sm text-ink-muted">Body / interface text</p>
                <p className="font-body text-base text-ink max-w-prose">
                  Open Sans is used for body copy, navigation, metadata, and
                  interface text to keep the site readable and straightforward.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-display font-semibold text-2xl text-ink tracking-[-0.015em]">
            Color swatches
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {COLOR_SWATCHES.map((swatch) => (
              <div
                key={swatch.name}
                className="rounded-lg border border-rule overflow-hidden bg-surface"
              >
                <div
                  className={`h-28 p-4 flex items-end ${swatch.textClass}`}
                  style={{ backgroundColor: swatch.value }}
                >
                  <span className="text-sm font-semibold">{swatch.name}</span>
                </div>
                <div className="p-4 space-y-1">
                  <p className="text-sm font-semibold text-ink">{swatch.name}</p>
                  <p className="text-sm text-ink-muted uppercase">{swatch.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-display font-semibold text-2xl text-ink tracking-[-0.015em]">
            Type specimen
          </h2>
          <div className="bg-surface border border-rule rounded-lg p-8 space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand">
              Heading styles
            </p>
            <div className="space-y-4">
              <p className="font-display font-bold text-display text-ink">
                Bringing Computer Science to every classroom in Nepal
              </p>
              <p className="font-display font-semibold text-3xl text-ink tracking-[-0.015em]">
                Programs, stories, and credibility all from one structured system
              </p>
              <p className="font-display font-semibold text-2xl text-ink tracking-[-0.015em]">
                A strict palette and two-font system create cohesion
              </p>
            </div>
            <div className="space-y-3 max-w-prose">
              <p className="text-lg text-ink">
                Open Sans is the primary body face. It carries long-form reading,
                card descriptions, and the core narrative content across the site.
              </p>
              <p className="text-base text-ink-muted">
                Accent is punctuation, not paint. It should appear sparingly for
                underlines, fills, and select emphasis points.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
