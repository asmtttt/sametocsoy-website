import { Separator } from "@/components/ui/separator"

export function SectionTitle({
  icon: Icon,
  children,
}: {
  icon?: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      {Icon && <Icon className="size-5 text-muted-foreground" />}
      <h2 className="text-xl font-semibold tracking-tight">{children}</h2>
      <Separator className="flex-1" />
    </div>
  )
}
