import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  getProgramBySlug,
  getPrograms,
} from "@/content";
import ProgramPageTemplate from "@/components/ProgramPageTemplate";
import TechPailaPage from "@/app/programs/_components/TechPailaPage";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPrograms().map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};

  const keywords =
    slug === "summer-camp"
      ? [
          "E-STEM Summer Camp Nepal",
          "summer coding camp Nepal",
          "Cosog Nepal summer camp",
          "environmental STEM fellowship",
          "student tech projects Nepal",
        ]
      : slug === "techpaila"
        ? [
            "TechPaila",
            "TechPaila Nepal",
            "technical vocational schools Nepal",
            "technical vocational education map Nepal",
            "SEE technical education",
            "Cosog Nepal TechPaila",
            "vocational high schools Nepal",
            "CTEVT schools list",
            "techpaila.cosognepal.org",
          ]
        : undefined;

  return createPageMetadata({
    title: program.title,
    description: program.summary,
    path: `/programs/${program.slug}`,
    noindex: program.noindex,
    keywords,
  });
}

export default async function ProgramPage({ params }: PageProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) notFound();

  if (slug === "techpaila") {
    return <TechPailaPage />;
  }

  return <ProgramPageTemplate program={program} />;
}
