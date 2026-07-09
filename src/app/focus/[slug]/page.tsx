import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

import {
  getFocusAreaBySlug,
  getProgramsByFocus,
  type FocusSlug,
} from "@/content";
import ProgramCard from "@/components/ProgramCard";
import Container from "@/components/ui/Container";

const VALID_SLUGS: FocusSlug[] = ["schools", "skills"];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const focus = getFocusAreaBySlug(slug as FocusSlug);
  if (!focus) return {};

  return {
    title: `${focus.title} | Cosog Nepal`,
    description: focus.summary,
  };
}

export default async function FocusAreaPage({ params }: PageProps) {
  const { slug } = await params;

  if (!VALID_SLUGS.includes(slug as FocusSlug)) notFound();

  const focus = getFocusAreaBySlug(slug as FocusSlug);
  if (!focus) notFound();

  const programs = getProgramsByFocus(focus.slug);

  return (
    <main className="py-12 space-y-12">
      <Container className="space-y-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">
            Focus area
          </p>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-near-black">
            {focus.title}
          </h1>
          <p className="text-lg text-muted max-w-3xl">{focus.summary}</p>
        </div>

        <div className="space-y-4 max-w-3xl">
          {focus.body.map((para, i) => (
            <p key={i} className="text-muted leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <section className="space-y-6">
          <h2 className="font-display font-bold text-xl text-near-black">
            Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </section>

        <p className="text-sm text-muted">
          <Link href="/programs" className="text-accent hover:underline">
            ← All programs
          </Link>
        </p>
      </Container>
    </main>
  );
}
