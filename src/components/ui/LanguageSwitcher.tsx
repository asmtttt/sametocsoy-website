"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTranslation, type Locale } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const languages: { code: Locale; label: string; flagCode: string }[] = [
  { code: "tr", label: "Türkçe", flagCode: "tr" },
  { code: "en", label: "English", flagCode: "gb" },
]

function Flag({ code }: { code: string }) {
  // Vektör bayraklar yerel SVG olarak tutulur; her ekran yoğunluğunda keskin görünür.
  return <Image src={`/assets/flags/${code}.svg`} width={24} height={16} alt="" unoptimized className="h-4 w-6 rounded-[3px] object-cover shadow-[0_0_0_1px_rgba(0,0,0,0.12)]" />
}

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = languages.find((l) => l.code === locale)!

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onDown)
    return () => document.removeEventListener("mousedown", onDown)
  }, [])

  return (
    <div ref={ref} className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen((v) => !v)}
        aria-label={t.ui.language}
        aria-expanded={open}
        className="rounded-full"
      >
        <Flag code={current.flagCode} />
        <span className="hidden sm:inline">{current.label}</span>
        <ChevronDown className={cn("transition-transform", open && "rotate-180")} />
      </Button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border bg-popover p-1 text-popover-foreground shadow-md">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => {
                setLocale(lang.code)
                setOpen(false)
              }}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                locale === lang.code && "bg-accent text-accent-foreground"
              )}
            >
              <Flag code={lang.flagCode} />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
