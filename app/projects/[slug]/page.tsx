import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/lib/projects";
import ProjectDetailContent from "@/components/projects/ProjectDetailContent";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.slug} | Samet Öçsoy`,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectDetailContent project={project} />;
}
