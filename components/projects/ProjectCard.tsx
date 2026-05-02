"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation();
  const content = t.projects.items[project.slug as keyof typeof t.projects.items];

  if (!content) return null;

  return (
    <div className="group relative p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/40 transition-all duration-500 hover:bg-slate-900/60 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(59,130,246,0.07)]">
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-[10px] font-black tracking-widest uppercase text-blue-400/70 mb-2">
            {project.company} • {project.year}
          </p>
          <h3 className="text-2xl font-black text-white tracking-tight leading-tight group-hover:text-blue-300 transition-colors duration-300">
            {content.title}
          </h3>
          <p className="text-slate-400 text-sm font-medium mt-1 italic">{content.subtitle}</p>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed">{content.shortDescription}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2.5 py-1 rounded-lg bg-blue-500/5 border border-blue-500/10 text-blue-400/80 uppercase font-bold tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-white transition-colors duration-300 group/link w-fit"
        >
          {t.projects.cta}
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}
