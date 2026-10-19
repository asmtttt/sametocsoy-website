import path from "node:path"

import PDFDocument from "pdfkit"

import { WEBSITE, WEBSITE_URL, type ResumeData } from "@/data/resume"

/**
 * ATS uyumlu özgeçmiş PDF'i: tek sütun, gerçek (seçilebilir) metin, standart başlıklar,
 * ikon/tablo/görsel yok. Noto Sans TrueType olarak gömülür; Türkçe karakterler (ğ ü ş ı ö ç İ)
 * Unicode eşlemesiyle yazıldığı için metin çıkarımında bozulmaz.
 */

const FONT_DIR = path.join(process.cwd(), "src", "assets", "fonts")
const font = (file: string) => path.join(FONT_DIR, file)

const INK = "#2b2d33"
const MUTED = "#5b5e66"
const RULE = "#b9b6ad"

const PAGE_W = 595.28
const PAGE_H = 841.89
const MARGIN_X = 56.7
const MARGIN_TOP = 48
const MARGIN_BOTTOM = 46
const W = PAGE_W - MARGIN_X * 2
const LEFT = MARGIN_X
const RIGHT = PAGE_W - MARGIN_X
const BOTTOM = PAGE_H - MARGIN_BOTTOM

type Face = "Regular" | "Bold" | "Italic"

export function buildAtsPdf(data: ResumeData, lang: "tr" | "en"): Promise<Buffer> {
  const regular = font("NotoSans-Regular.ttf")
  const { personal: p, labels } = data
  const upper = (s: string) => s.toLocaleUpperCase(lang === "tr" ? "tr" : "en")

  const doc = new PDFDocument({
    size: "A4",
    margins: { top: MARGIN_TOP, bottom: MARGIN_BOTTOM, left: MARGIN_X, right: MARGIN_X },
    font: regular,
    lang: lang === "tr" ? "tr-TR" : "en-US",
    info: {
      Title: `${p.name} - ${labels.pdfTitle}`,
      Author: p.name,
      Subject: p.title,
    },
  })

  doc.registerFont("Regular", regular)
  doc.registerFont("Bold", font("NotoSans-Bold.ttf"))
  doc.registerFont("Italic", font("NotoSans-Italic.ttf"))

  const chunks: Buffer[] = []
  const done = new Promise<Buffer>((resolve, reject) => {
    doc.on("data", (c: Buffer) => chunks.push(c))
    doc.on("end", () => resolve(Buffer.concat(chunks)))
    doc.on("error", reject)
  })

  const set = (face: Face, size: number, color = INK) => doc.font(face).fontSize(size).fillColor(color)

  /** Blok sığmıyorsa yeni sayfaya geçer (başlık/içerik ayrı sayfalara düşmesin). */
  const need = (height: number) => {
    if (doc.y + height > BOTTOM) doc.addPage()
  }

  const heightOf = (text: string, face: Face, size: number, width: number, gap = 1.2) => {
    set(face, size)
    return doc.heightOfString(text, { width, lineGap: gap })
  }

  const write = (
    text: string,
    face: Face,
    size: number,
    opts: { color?: string; x?: number; width?: number; align?: "left" | "center"; gap?: number } = {}
  ) => {
    set(face, size, opts.color)
    doc.text(text, opts.x ?? LEFT, doc.y, {
      width: opts.width ?? W,
      align: opts.align ?? "left",
      lineGap: opts.gap ?? 1.2,
    })
  }

  const bulletHeight = (text: string) => heightOf(text, "Regular", 9.6, W - 12) + 1.5
  const bullet = (text: string) => {
    doc.y += 1.5
    const y = doc.y
    set("Regular", 9.6)
    doc.text("•", LEFT, y, { width: 12, lineBreak: false })
    doc.text(text, LEFT + 12, y, { width: W - 12, lineGap: 1.2 })
  }

  const section = (title: string, firstBlockHeight: number) => {
    need(40 + firstBlockHeight)
    doc.y += 10
    write(upper(title), "Bold", 11, { align: "center" })
    const y = doc.y + 2
    doc.moveTo(LEFT, y).lineTo(RIGHT, y).lineWidth(0.8).strokeColor(RULE).stroke()
    doc.y = y + 7
  }

  /** Ortalanmış tek satır; parçalardan link olanlar tıklanabilir. */
  const centeredLine = (segments: { text: string; link?: string }[], size: number) => {
    set("Regular", size)
    const widths = segments.map((s) => doc.widthOfString(s.text))
    let x = LEFT + (W - widths.reduce((a, b) => a + b, 0)) / 2
    const y = doc.y
    segments.forEach((s, i) => {
      doc.text(s.text, x, y, {
        lineBreak: false,
        link: s.link,
        underline: Boolean(s.link),
      })
      x += widths[i]
    })
    doc.y = y + size * 1.5
  }

  // Başlık bloğu
  write(upper(p.name), "Bold", 24, { align: "center", gap: 0 })
  doc.y += 2
  write(p.title, "Regular", 11.5, { align: "center", color: MUTED })
  doc.y += 5
  const sep = { text: "  |  " }
  const contact = [
    { text: p.location },
    sep,
    { text: p.phone, link: `tel:${p.phone.replace(/\s/g, "")}` },
    sep,
    { text: p.email, link: `mailto:${p.email}` },
    sep,
    { text: WEBSITE, link: WEBSITE_URL },
  ]
  set("Regular", 9.5)
  const contactWidth = contact.reduce((sum, c) => sum + doc.widthOfString(c.text), 0)
  if (contactWidth <= W) {
    centeredLine(contact, 9.5)
  } else {
    // Tek satıra sığmazsa web sitesi ikinci satıra geçer.
    centeredLine(contact.slice(0, 5), 9.5)
    centeredLine([contact[6]], 9.5)
  }
  centeredLine(
    [
      { text: "LinkedIn", link: p.socials.linkedin },
      sep,
      { text: "GitHub", link: p.socials.github },
    ],
    9.5
  )

  // Profil özeti
  section(labels.summary, heightOf(p.summary, "Regular", 9.8, W))
  write(p.summary, "Regular", 9.8)

  // İş deneyimi
  section(labels.experience, 70)
  data.experience.forEach((e, i) => {
    const meta = [e.company, e.location].join(" • ") + (e.period ? ` (${e.period})` : "")
    const total =
      7 +
      heightOf(e.role, "Bold", 10.5, W) +
      heightOf(meta, "Italic", 9.3, W) +
      e.points.reduce((sum, pt) => sum + bulletHeight(pt), 0)
    if (i > 0) need(Math.min(total, 120))
    doc.y += 7
    write(e.role, "Bold", 10.5)
    write(meta, "Italic", 9.3, { color: MUTED })
    e.points.forEach((pt) => {
      need(bulletHeight(pt))
      bullet(pt)
    })
  })

  // Eğitim
  section(labels.education, 45)
  data.education.forEach((ed, i) => {
    const meta = [ed.school, ed.location].join(" • ") + (ed.period ? ` (${ed.period})` : "")
    const total = 7 + heightOf(ed.degree, "Bold", 10.5, W) + heightOf(meta, "Italic", 9.3, W)
    if (i > 0) need(total)
    doc.y += 7
    write(ed.degree, "Bold", 10.5)
    write(meta, "Italic", 9.3, { color: MUTED })
  })

  // Yetkinlikler
  section(labels.skills, 30)
  data.skills.forEach((group, i) => {
    const line = `${group.category}: ${group.items.join(", ")}`
    need(heightOf(line, "Regular", 9.8, W) + 4)
    if (i > 0) doc.y += 3
    set("Bold", 9.8)
    doc.text(`${group.category}: `, LEFT, doc.y, { width: W, continued: true, lineGap: 1.2 })
    set("Regular", 9.8)
    doc.text(group.items.join(", "), { lineGap: 1.2 })
  })

  // Diller
  section(labels.languages, bulletHeight(data.languages[0] ?? ""))
  data.languages.forEach((l) => {
    need(bulletHeight(l))
    bullet(l)
  })

  // Referanslar
  section(labels.references, 50)
  data.references.forEach((r) => {
    const line = `${r.name} — ${r.role}`
    need(bulletHeight(line) + 14)
    bullet(line)
    const y = doc.y + 1
    set("Regular", 9.6)
    const prefix = `${labels.email}: `
    doc.text(prefix, LEFT + 12, y, { lineBreak: false, continued: false })
    doc.text(r.email, LEFT + 12 + doc.widthOfString(prefix), y, {
      lineBreak: false,
      link: `mailto:${r.email}`,
      underline: true,
    })
    doc.y = y + 14
  })

  doc.end()
  return done
}
