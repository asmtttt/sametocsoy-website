import { readFile } from "node:fs/promises"
import { join } from "node:path"

import { ImageResponse } from "next/og"

// Ana ekran ikonları (iOS/Android) şeffaflığı desteklemez; krem zemin üzerine yuvarlak içinde kesilmiş portre.
export const size = { width: 512, height: 512 }
export const contentType = "image/png"

export default async function AppleIcon() {
  const photo = await readFile(join(process.cwd(), "public", "assets", "sametocsoyprofile-cutout.png"))
  const src = `data:image/png;base64,${photo.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f3ea",
        }}
      >
        <div
          style={{
            width: 400,
            height: 400,
            display: "flex",
            borderRadius: "50%",
            border: "8px solid #d6d3d1",
            overflow: "hidden",
            background: "#e7e5e4",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" width={384} height={384} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>
    ),
    { ...size }
  )
}
