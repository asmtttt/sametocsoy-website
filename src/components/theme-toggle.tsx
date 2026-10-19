"use client"

import { useSyncExternalStore } from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
  return () => observer.disconnect()
}

const isDark = () => document.documentElement.classList.contains("dark")

export function ThemeToggle() {
  const { t } = useTranslation()
  const dark = useSyncExternalStore(subscribe, isDark, () => false)

  function toggle() {
    const next = !dark
    document.documentElement.classList.toggle("dark", next)
    try {
      localStorage.setItem("theme", next ? "dark" : "light")
    } catch {
      // Depolama kapalıysa tema yalnızca bu oturumda geçerli olur.
    }
  }

  const label = dark ? t.ui.toLight : t.ui.toDark
  return (
    <Button variant="outline" size="icon" onClick={toggle} aria-label={label} title={label} className="rounded-full">
      {dark ? <Sun /> : <Moon />}
    </Button>
  )
}
