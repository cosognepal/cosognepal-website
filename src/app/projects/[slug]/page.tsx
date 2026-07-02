import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SummerProgramContent from "@/app/events/summerprogram/_components/SummerProgramContent";
import ProjectModal from "@/app/events/summerprogram/_components/ProjectModal";
import {
  getProjectBySlug,
  summerProjects,
} from "@/app/events/summerprogram/_data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return summerProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found | Summer Program",
    };
  }

  return {
    title: `${project.name} | Summer Camp`,
    description: project.hook,
    metadataBase: new URL("https://summercamp.cosognepal.org/"),
    openGraph: {
      title: `${project.name} | Coding for Social Good Nepal Summer Camp`,
      description: project.hook,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${project.name} | Summer Camp`,
      description: project.hook,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <SummerProgramContent />
      <ProjectModal project={project} closeMode="home" />
    </>
  );
}
