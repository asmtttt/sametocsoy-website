import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import BackgroundBlur from "@/components/ui/BackgroundBlur";
import ProjectVideo from "@/components/projects/ProjectVideo";
import { getProjectBySlug, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Samet Öçsoy`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 selection:bg-blue-500/30 selection:text-blue-200 font-sans tracking-tight">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out space-y-12">

          {/* Back link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-400 transition-colors duration-300 font-medium group"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Tüm Projeler
          </Link>

          {/* Header */}
          <div className="space-y-4">
            <p className="text-[10px] font-black tracking-widest uppercase text-blue-400/70">
              {project.company} • {project.year}
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
              {project.title}
            </h1>
            <p className="text-xl text-slate-400 italic font-medium">{project.subtitle}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2.5 py-1 rounded-lg bg-blue-500/5 border border-blue-500/10 text-blue-400/80 uppercase font-bold tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Video */}
          {project.videoUrl && <ProjectVideo url={project.videoUrl} />}

          {/* Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">Özellikler</h2>
            <ul className="space-y-3">
              {project.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </main>

      <BackgroundBlur />
    </div>
  );
}
