"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import BackgroundBlur from "@/components/ui/BackgroundBlur";
import ProjectVideo from "@/components/projects/ProjectVideo";
import ProjectScreenshots from "@/components/projects/ProjectScreenshots";
import { useTranslation } from "@/lib/i18n";
import type { Project } from "@/lib/projects";

function DownloadSection({ project, t }: { project: Project; t: any }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === project.downloadPassword) {
      setError(false);
      setUnlocked(true);
      window.location.href = project.downloadUrl!;
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <div className="border border-blue-500/10 rounded-2xl bg-blue-500/5 p-6 space-y-4">
      <div className="space-y-1">
        <h2 className="text-lg font-bold text-white">{t.projects.downloadTitle}</h2>
        <p className="text-sm text-slate-400">{t.projects.downloadSubtitle}</p>
      </div>

      {unlocked ? (
        <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          İndirme başladı...
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-3 items-start">
          <div className="flex flex-col gap-1.5">
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder={t.projects.passwordPlaceholder}
              className={`bg-white/5 border rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 outline-none focus:ring-1 transition-all w-56 ${
                error
                  ? "border-red-500/50 focus:ring-red-500/30"
                  : "border-white/10 focus:ring-blue-500/30 focus:border-blue-500/30"
              }`}
            />
            {error && (
              <span className="text-xs text-red-400 font-medium">{t.projects.passwordError}</span>
            )}
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 text-blue-300 font-semibold text-sm px-4 py-2.5 rounded-xl transition-all duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {t.projects.downloadStart}
          </button>
        </form>
      )}
    </div>
  );
}

export default function ProjectDetailContent({ project }: { project: Project }) {
  const { t, locale } = useTranslation();
  const content = t.projects.items[project.slug as keyof typeof t.projects.items];

  if (!content) return null;

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 selection:bg-blue-500/30 selection:text-blue-200 font-sans tracking-tight">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out space-y-12">

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-400 transition-colors duration-300 font-medium group"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            {t.projects.back}
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <p className="text-[10px] font-black tracking-widest uppercase text-blue-400/70">
                {project.company} • {project.year}
              </p>
              {project.isLive && (
                <span className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {t.projects.live}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
              {content.title}
            </h1>
            <p className="text-xl text-slate-400 italic font-medium">{content.subtitle}</p>
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

          <div className="space-y-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200 cursor-pointer group w-fit"
              >
                Uygulama
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            )}
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
              {content.description}
            </p>
          </div>

          {project.screenshots && (
            <ProjectScreenshots screenshots={project.screenshots} lang={locale} />
          )}
          {project.videoUrl && <ProjectVideo url={project.videoUrl} />}

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">{t.projects.features}</h2>
            <ul className="space-y-3">
              {content.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          {project.downloadUrl && project.downloadUrl !== "GITHUB_RELEASE_URL_BURAYA" && (
            <DownloadSection project={project} t={t} />
          )}

        </div>
      </main>

      <BackgroundBlur />
    </div>
  );
}
