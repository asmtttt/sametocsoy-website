import { cacheLife } from "next/cache"

import { resumes } from "@/data/resume"
import { buildAtsPdf } from "@/lib/ats-pdf"

// resume.ts verisinden üretilir ve önbelleğe alınır; her yayınlamada güncel veriyle yenilenir.
async function getPdf() {
  "use cache"
  cacheLife("max")

  const pdf = await buildAtsPdf(resumes.en, "en")
  return pdf.toString("base64")
}

export async function GET() {
  const pdf = Buffer.from(await getPdf(), "base64")

  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="samet_ocsoy_ats_resume.pdf"',
    },
  })
}
