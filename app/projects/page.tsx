import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import BackgroundBlur from "@/components/ui/BackgroundBlur";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projeler | Samet Öçsoy",
  description: "Samet Öçsoy'un geliştirdiği yazılım projeleri.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 selection:bg-blue-500/30 selection:text-blue-200 font-sans tracking-tight">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          <div className="mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 tracking-widest uppercase">
              Portföy
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white leading-[1.1]">
              Projelerim
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Geliştirdiğim projeler; yapay zeka, doğal dil işleme ve modern web teknolojilerinin
              kesişiminde şekilleniyor.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </main>

      <BackgroundBlur />
    </div>
  );
}
