"use client";

import Navbar from "@/components/layout/Navbar";
import BackgroundBlur from "@/components/ui/BackgroundBlur";
import ProjectCard from "@/components/projects/ProjectCard";
import { useTranslation } from "@/lib/i18n";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-sand-light text-brown selection:bg-tangerine/25 selection:text-brown font-sans tracking-tight">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          <div className="mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-bronze/10 border border-bronze/20 text-bronze text-xs font-bold mb-6 tracking-widest uppercase">
              {t.projects.badge}
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-navy leading-[1.1]">
              {t.projects.title}
            </h1>
            <p className="text-lg text-navy-muted leading-relaxed max-w-2xl">
              {t.projects.subtitle}
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
