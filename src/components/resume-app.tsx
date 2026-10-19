"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Briefcase, Code2, Download, FolderGit2, GraduationCap, Languages, Mail, MapPin, Phone, Users } from "lucide-react"

import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { PageShell } from "@/components/page-shell"
import ProjectCard from "@/components/projects/ProjectCard"
import { Reveal } from "@/components/reveal"
import { SectionTitle } from "@/components/section-title"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { resumes } from "@/data/resume"
import { useTranslation } from "@/lib/i18n"
import { projects } from "@/lib/projects"
import { cn } from "@/lib/utils"

const chipTones = ["bg-sage text-sage-foreground", "bg-salmon text-salmon-foreground"]

export function ResumeApp() {
  const { locale, t } = useTranslation()
  const { personal, experience, education, skills, languages, references, labels } = resumes[locale]

  return (
    <PageShell>
      <SiteHeader
        action={
          <Button asChild size="sm" className="rounded-full px-4 shadow-sm">
            <a href={personal.pdfUrl} download={personal.pdfFileName}>
              <Download />
              <span className="hidden sm:inline">{labels.download}</span>
            </a>
          </Button>
        }
      />

      {/* Header */}
      <Reveal>
        <header className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
          <Image
            src="/assets/sametocsoyprofile.jpg"
            alt={labels.photoAlt}
            width={256}
            height={256}
            priority
            draggable={false}
            className="size-28 shrink-0 rounded-full object-cover ring-4 ring-stone-300 ring-offset-4 ring-offset-background select-none sm:size-32"
          />
          <div className="min-w-0 space-y-3">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{personal.name}</h1>
              <p className="mt-1 text-lg text-muted-foreground">{personal.title}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-sm text-foreground/80 sm:justify-start">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4 shrink-0" />
                {personal.location}
              </span>
              <a href={`mailto:${personal.email}`} className="inline-flex items-center gap-1.5 hover:underline">
                <Mail className="size-4" />
                {personal.email}
              </a>
              <a href={`tel:${personal.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:underline">
                <Phone className="size-4" />
                {personal.phone}
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:justify-start print:hidden">
              <Button asChild size="sm" variant="outline" className="rounded-full">
                <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon className="size-4 text-[#0A66C2]" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="rounded-full">
                <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GithubIcon className="size-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="rounded-full">
                <a href={personal.socials.emailUrl} aria-label={labels.email}>
                  <Mail className="text-primary" />
                  {labels.email}
                </a>
              </Button>
            </div>
          </div>
        </header>
      </Reveal>

      <Reveal delay={0.1} className="mt-8">
        <Card className="bg-accent/50 py-0 shadow-none">
          <CardContent className="p-5 text-sm leading-relaxed sm:text-base">{personal.summary}</CardContent>
        </Card>
      </Reveal>

      {/* Experience */}
      <section className="mt-12">
        <SectionTitle icon={Briefcase}>{labels.experience}</SectionTitle>
        <ol className="ml-1 space-y-5 border-l border-border">
          {experience.map((item, i) => (
            <li key={i} className="relative break-inside-avoid pl-7">
              <span className="absolute top-6 -left-[5px] size-2.5 rounded-full bg-foreground ring-4 ring-background" />
              <Reveal delay={i * 0.08}>
                <Card className="py-0 shadow-xs">
                  <CardContent className="space-y-3 p-5">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <h3 className="font-semibold">{item.role}</h3>
                        <p className="flex flex-wrap items-center gap-x-1 text-sm text-muted-foreground">
                          {item.company}
                          <span aria-hidden>·</span>
                          {item.location}
                        </p>
                      </div>
                      {item.period && <Badge className="w-fit shrink-0 bg-sage font-normal text-sage-foreground">{item.period}</Badge>}
                    </div>
                    <ul className="list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-foreground/85 marker:text-muted-foreground">
                      {item.points.map((point, k) => (
                        <li key={k}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Education */}
      <section className="mt-12 break-inside-avoid">
        <SectionTitle icon={GraduationCap}>{labels.education}</SectionTitle>
        <ol className="ml-1 space-y-5 border-l border-border">
          {education.map((item, i) => (
            <li key={i} className="relative break-inside-avoid pl-7">
              <span className="absolute top-6 -left-[5px] size-2.5 rounded-full bg-foreground ring-4 ring-background" />
              <Reveal delay={i * 0.08}>
                <Card className="py-0 shadow-xs">
                  <CardContent className="p-5">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <h3 className="font-semibold">{item.degree}</h3>
                        <p className="flex flex-wrap items-center gap-x-1 text-sm text-muted-foreground">
                          {item.school}
                          <span aria-hidden>·</span>
                          {item.location}
                        </p>
                      </div>
                      {item.period && <Badge className="w-fit shrink-0 bg-sage font-normal text-sage-foreground">{item.period}</Badge>}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section className="mt-12 break-inside-avoid">
        <SectionTitle icon={Code2}>{labels.skills}</SectionTitle>
        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={(i % 2) * 0.08}>
              <Card className="h-full py-0 shadow-xs">
                <CardContent className="space-y-3 p-5">
                  <h3 className="text-sm font-semibold">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <Badge key={skill} className={cn("font-normal", chipTones[(Math.floor(i / 2) + i) % 2])}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mt-12">
        <SectionTitle icon={FolderGit2}>{labels.projects}</SectionTitle>
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <div className="mt-5 flex justify-center print:hidden">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/projects">
              {t.ui.seeAll}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      {/* Languages */}
      <section className="mt-12 break-inside-avoid">
        <SectionTitle icon={Languages}>{labels.languages}</SectionTitle>
        <Reveal>
          <Card className="py-0 shadow-xs">
            <CardContent className="flex flex-wrap gap-2 p-5">
              {languages.map((language) => (
                <Badge key={language} variant="outline" className="font-normal">
                  {language}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </Reveal>
      </section>

      {/* References */}
      <section className="mt-12 break-inside-avoid">
        <SectionTitle icon={Users}>{labels.references}</SectionTitle>
        <div className="grid gap-5 sm:grid-cols-2">
          {references.map((ref, i) => (
            <Reveal key={ref.email} delay={(i % 2) * 0.08}>
              <Card className="h-full py-0 shadow-xs">
                <CardContent className="flex h-full flex-col gap-4 p-5">
                  <div className="space-y-1">
                    <h3 className="font-semibold">{ref.name}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{ref.role}</p>
                  </div>
                  <div className="mt-auto print:hidden">
                    <Button asChild size="sm" variant="secondary" className="rounded-full">
                      <a href={`mailto:${ref.email}`}>
                        <Mail />
                        {labels.sendEmail}
                      </a>
                    </Button>
                  </div>
                  <a href={`mailto:${ref.email}`} className="hidden text-sm hover:underline print:block">
                    {ref.email}
                  </a>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
