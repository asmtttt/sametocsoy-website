import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samet Öçsoy | Software Engineer",
  description: "AI & Full Stack Developer Portfolio",
  icons: {
    icon: [
      { url: "/assets/logos/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/logos/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/logos/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/assets/logos/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/assets/logos/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/assets/logos/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/logos/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/assets/logos/favicon-32x32.png",
    apple: "/assets/logos/favicon-180x180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
