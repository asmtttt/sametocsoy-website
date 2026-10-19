import type { MetadataRoute } from "next"

import { resumes } from "@/data/resume"

export default function manifest(): MetadataRoute.Manifest {
  const { name, title } = resumes.en.personal

  return {
    name: `${name} | ${title}`,
    short_name: name,
    description: `${name} - ${title}. Resume and portfolio.`,
    lang: "en",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f3ea",
    theme_color: "#f7f3ea",
    icons: [{ src: "/apple-icon", sizes: "512x512", type: "image/png", purpose: "any" }],
  }
}
