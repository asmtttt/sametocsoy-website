import { readFile } from "node:fs/promises"
import { join } from "node:path"

import { ImageResponse } from "next/og"

// Ana ekran ikonları (iOS/Android) şeffaflığı desteklemez ve köşeleri sistem yuvarlar.
// Bu yüzden zemin ikonun tamamını kaplar, kesilmiş portre alt kenara oturur; daire/çerçeve yok.
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
          alignItems: "flex-end",
          justifyContent: "center",
          background: "linear-gradient(160deg, #d9e6dc 0%, #f1ddd2 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" width={456} height={456} style={{ width: 456, height: 456, objectFit: "cover" }} />
      </div>
    ),
    { ...size }
  )
}
