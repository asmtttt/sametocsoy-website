"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation();
  const content = t.projects.items[project.slug as keyof typeof t.projects.items];

  if (!content) return null;

  return (
    <div className="group relative p-8 rounded-3xl bg-sand/40 border border-sand-dark hover:border-bronze/40 transition-all duration-500 hover:bg-sand/60 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(165,127,98,0.12)]">
      <div className="flex flex-col gap-5">
        <div>
          <div className="flex items-center gap-3 flex-wrap mb-2">
            <p className="text-[10px] font-black tracking-widest uppercase text-bronze">
              {project.company} • {project.year}
            </p>
            {project.isLive && (
              <span className="inline-flex items-center gap-1 text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full bg-emerald-600/10 border border-emerald-600/20 text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                {t.projects.live}
              </span>
            )}
          </div>
          <h3 className="text-2xl font-black text-navy tracking-tight leading-tight group-hover:text-bronze transition-colors duration-300">
            {content.title}
          </h3>
          <p className="text-navy-muted text-sm font-medium mt-1 italic">{content.subtitle}</p>
        </div>

        <p className="text-brown text-sm leading-relaxed">{content.shortDescription}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2.5 py-1 rounded-lg bg-bronze/5 border border-bronze/10 text-bronze uppercase font-bold tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-bronze hover:text-navy transition-colors duration-300 group/link w-fit"
        >
          {t.projects.cta}
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}
