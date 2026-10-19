import { cn } from "@/lib/utils"

export function PageShell({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <main className={cn("mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 print:max-w-none print:p-0", className)}>
      {children}
    </main>
  )
}
