import { readFile } from "node:fs/promises"
import { join } from "node:path"

import { ImageResponse } from "next/og"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

// Arka planı temizlenmiş portre; sekmede şeffaf zemin üzerinde görünür.
export default async function Icon() {
  const photo = await readFile(join(process.cwd(), "public", "assets", "sametocsoyprofile-cutout.png"))
  const src = `data:image/png;base64,${photo.toString("base64")}`

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "transparent" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" width={64} height={64} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    ),
    { ...size }
  )
}
