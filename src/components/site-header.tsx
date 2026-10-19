"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import LanguageSwitcher from "@/components/ui/LanguageSwitcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

/** Tüm sayfalarda aynı üst çubuk: gezinme solda, dil/tema ve isteğe bağlı eylem sağda. */
export function SiteHeader({ action }: { action?: React.ReactNode }) {
  const { t } = useTranslation()
  const pathname = usePathname()
  const onProjects = pathname.startsWith("/projects")

  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-3 print:hidden">
      <nav className="flex items-center gap-1">
        <Button asChild variant={onProjects ? "ghost" : "secondary"} size="sm" className="rounded-full">
          <Link href="/">{t.ui.home}</Link>
        </Button>
        <Button asChild variant={onProjects ? "secondary" : "ghost"} size="sm" className="rounded-full">
          <Link href="/projects">{t.ui.projects}</Link>
        </Button>
      </nav>
      <div className="flex items-center gap-2">
        {action}
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </div>
  )
}
