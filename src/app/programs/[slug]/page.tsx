import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  getProgramBySlug,
  getPrograms,
} from "@/content";
import ProgramPageTemplate from "@/components/ProgramPageTemplate";

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

  return {
    title: `${program.title} | Cosog Nepal`,
    description: program.summary,
    ...(program.noindex ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function ProgramPage({ params }: PageProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) notFound();

  return <ProgramPageTemplate program={program} />;
}
