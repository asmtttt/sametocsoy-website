"use client"

import { FolderGit2 } from "lucide-react"

import { PageShell } from "@/components/page-shell"
import ProjectCard from "@/components/projects/ProjectCard"
import { Reveal } from "@/components/reveal"
import { SectionTitle } from "@/components/section-title"
import { SiteHeader } from "@/components/site-header"
import { useTranslation } from "@/lib/i18n"
import { projects } from "@/lib/projects"

export default function ProjectsPage() {
  const { t } = useTranslation()

  return (
    <PageShell>
      <SiteHeader />
      <Reveal>
        <SectionTitle icon={FolderGit2}>{t.projects.title}</SectionTitle>
        <p className="-mt-2 mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{t.projects.subtitle}</p>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </PageShell>
  )
}
