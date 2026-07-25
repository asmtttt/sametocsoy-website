"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import BackgroundBlur from "@/components/ui/BackgroundBlur";
import ProjectVideo from "@/components/projects/ProjectVideo";
import ProjectScreenshots from "@/components/projects/ProjectScreenshots";
import LaptopCarousel from "@/components/projects/LaptopCarousel";
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
    <div className="border border-bronze/15 rounded-2xl bg-bronze/5 p-6 space-y-4">
      <div className="space-y-1">
        <h2 className="text-lg font-bold text-navy">{t.projects.downloadTitle}</h2>
        <p className="text-sm text-navy-muted">{t.projects.downloadSubtitle}</p>
      </div>

      {unlocked ? (
        <div className="flex items-center gap-2 text-emerald-700 text-sm font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-600" />
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
              className={`bg-sand-light border rounded-xl px-4 py-2.5 text-sm text-brown placeholder:text-navy-muted outline-none focus:ring-1 transition-all w-56 ${
                error
                  ? "border-red-500/50 focus:ring-red-500/30"
                  : "border-sand-dark focus:ring-bronze/30 focus:border-bronze/40"
              }`}
            />
            {error && (
              <span className="text-xs text-red-600 font-medium">{t.projects.passwordError}</span>
            )}
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-bronze/10 hover:bg-bronze/20 border border-bronze/20 hover:border-bronze/40 text-bronze font-semibold text-sm px-4 py-2.5 rounded-xl transition-all duration-200"
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
    <div className="min-h-screen bg-sand-light text-brown selection:bg-tangerine/25 selection:text-brown font-sans tracking-tight">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out space-y-12">

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-navy-muted hover:text-bronze transition-colors duration-300 font-medium group"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            {t.projects.back}
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <p className="text-[10px] font-black tracking-widest uppercase text-bronze">
                {project.company} • {project.year}
              </p>
              {project.isLive && (
                <span className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full bg-emerald-600/10 border border-emerald-600/20 text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  {t.projects.live}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-navy leading-[1.1]">
              {content.title}
            </h1>
            <p className="text-xl text-navy-muted italic font-medium">{content.subtitle}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2.5 py-1 rounded-lg bg-bronze/5 border border-bronze/10 text-bronze uppercase font-bold tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {project.liveUrl && (
              <div className="flex items-center gap-2 flex-wrap text-base">
                <span className="font-medium text-navy-muted">Uygulama →</span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-bronze hover:text-navy hover:underline underline-offset-4 transition-colors duration-200 cursor-pointer w-fit"
                >
                  {new URL(project.liveUrl).hostname.replace(/^www\./, "")}
                </a>
              </div>
            )}
            <p className="text-brown text-lg leading-relaxed max-w-3xl">
              {content.description}
            </p>
          </div>

          {project.screenshots && (
            project.slug === "qrder" ? (
              <LaptopCarousel images={project.screenshots.laptop} />
            ) : (
              <ProjectScreenshots screenshots={project.screenshots} lang={locale} />
            )
          )}
          {project.videoUrl && <ProjectVideo url={project.videoUrl} />}

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-navy">{t.projects.features}</h2>
            <ul className="space-y-3">
              {content.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3 text-brown text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-bronze shrink-0" />
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
