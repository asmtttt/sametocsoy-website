"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/lib/i18n"
import type { Project } from "@/lib/projects"

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation()
  const content = t.projects.items[project.slug as keyof typeof t.projects.items]

  if (!content) return null

  return (
    <Card className="h-full py-0 shadow-xs">
      <CardContent className="flex h-full flex-col gap-4 p-5">
        <div className="space-y-1">
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
          <h3 className="pt-1 font-semibold">{content.title}</h3>
          <p className="text-sm text-muted-foreground">{content.subtitle}</p>
        </div>

        <p className="text-sm leading-relaxed text-foreground/85">{content.shortDescription}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-auto">
          <Button asChild size="sm" variant="secondary" className="rounded-full">
            <Link href={`/projects/${project.slug}`}>
              {t.projects.cta}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
