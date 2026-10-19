import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { resumes } from "@/data/resume"
import { LanguageProvider } from "@/lib/i18n"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// Başlık ve açıklama resume.ts'teki ad/unvandan üretilir.
const { name, title } = resumes.en.personal

export const metadata: Metadata = {
  metadataBase: new URL("https://sametocsoy.com"),
  title: `${name} | ${title}`,
  description: `${name} - ${title}. Resume and portfolio website.`,
}

// Tema, ilk boyamadan önce kaydedilmiş tercihe (yoksa sisteme) göre ayarlanır; yanıp sönme olmaz.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
