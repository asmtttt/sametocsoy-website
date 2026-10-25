"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Download, ExternalLink, ListChecks, Loader2 } from "lucide-react"

import { PageShell } from "@/components/page-shell"
import ProjectVideo from "@/components/projects/ProjectVideo"
import ProjectScreenshots from "@/components/projects/ProjectScreenshots"
import { Reveal } from "@/components/reveal"
import { SectionTitle } from "@/components/section-title"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/lib/i18n"
import type { Project } from "@/lib/projects"

function DownloadSection({ project }: { project: Project }) {
  const { t } = useTranslation()
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [unlocked, setUnlocked] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === project.downloadPassword) {
      setError(false)
      setUnlocked(true)
      window.location.href = project.downloadUrl!
    } else {
      setError(true)
      setPassword("")
    }
  }

  return (
    <Card className="bg-accent/50 py-0 shadow-none print:hidden">
      <CardContent className="space-y-4 p-5">
        <div className="space-y-1">
          <h2 className="font-semibold">{t.projects.downloadTitle}</h2>
          <p className="text-sm text-muted-foreground">{t.projects.downloadSubtitle}</p>
        </div>

        {unlocked ? (
          <p className="inline-flex items-center gap-2 text-sm font-medium text-sage-foreground">
            <Loader2 className="size-4 animate-spin" />
            {t.projects.downloadStarted}
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-wrap items-start gap-3">
            <div className="flex flex-col gap-1.5">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError(false)
                }}
                placeholder={t.projects.passwordPlaceholder}
                aria-invalid={error}
                className="h-9 w-56 rounded-md border border-input bg-background px-3 text-sm outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive"
              />
              {error && <span className="text-xs font-medium text-destructive">{t.projects.passwordError}</span>}
            </div>
            <Button type="submit" className="rounded-full">
              <Download />
              {t.projects.downloadStart}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}

export default function ProjectDetailContent({ project }: { project: Project }) {
  const { t, locale } = useTranslation()
  const content = t.projects.items[project.slug as keyof typeof t.projects.items]

  if (!content) return null

  return (
    <PageShell>
      <SiteHeader />

      <div className="space-y-10">
        <Reveal>
          <Button asChild variant="ghost" size="sm" className="-ml-3 rounded-full print:hidden">
            <Link href="/projects">
              <ArrowLeft />
              {t.projects.back}
            </Link>
          </Button>

          <div className="mt-3 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-sage font-normal text-sage-foreground">
                {project.company} · {project.year}
              </Badge>
              {project.isLive && (
                <Badge className="bg-salmon font-normal text-salmon-foreground">
                  <span className="size-1.5 animate-pulse rounded-full bg-current" />
                  {t.projects.live}
                </Badge>
              )}
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{content.title}</h1>
            <p className="text-lg text-muted-foreground">{content.subtitle}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
            {project.liveUrl && (
              <Button asChild size="sm" variant="outline" className="rounded-full print:hidden">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink />
                  {new URL(project.liveUrl).hostname.replace(/^www\./, "")}
                </a>
              </Button>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="bg-accent/50 py-0 shadow-none">
            <CardContent className="p-5 text-sm leading-relaxed sm:text-base">{content.description}</CardContent>
          </Card>
        </Reveal>

        {project.screenshots && <ProjectScreenshots screenshots={project.screenshots} lang={locale} />}
        {project.videoUrl && <ProjectVideo url={project.videoUrl} />}

        <section className="break-inside-avoid">
          <SectionTitle icon={ListChecks}>{t.projects.features}</SectionTitle>
          <Card className="py-0 shadow-xs">
            <CardContent className="p-5">
              <ul className="list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-foreground/85 marker:text-muted-foreground">
                {content.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {project.downloadUrl && project.downloadUrl !== "GITHUB_RELEASE_URL_BURAYA" && <DownloadSection project={project} />}
      </div>
    </PageShell>
  )
}
