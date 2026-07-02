import { notFound } from "next/navigation";
import ProjectModal from "@/app/events/summerprogram/_components/ProjectModal";
import { getProjectBySlug } from "@/app/events/summerprogram/_data/projects";

type ProjectModalPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function InterceptedProjectModalPage({
  params,
}: ProjectModalPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectModal project={project} closeMode="back" />;
}
