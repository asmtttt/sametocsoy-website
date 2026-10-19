import { Play } from "lucide-react"

import { SectionTitle } from "@/components/section-title"

export default function ProjectVideo({ url }: { url: string }) {
  return (
    <section>
      <SectionTitle icon={Play}>Demo</SectionTitle>
      <div className="aspect-video w-full overflow-hidden rounded-xl border shadow-xs">
        <iframe
          src={url}
          title="Project demo video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    </section>
  )
}
