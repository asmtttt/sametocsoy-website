"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

/**
 * Hafif fade-in-up girişi. Sayfa yüklendiğinde oynar (viewport'a bağlı değildir),
 * böylece yazdırma/PDF çıktısında hiçbir içerik gizli kalmaz.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: Math.min(delay, 0.8) }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
