// Static project data — translatable content lives in lib/i18n/locales/
export type ProjectScreenshots = {
  phone: string[];
  tablet: string[];
  laptop: string[];
};

export type Project = {
  slug: string;
  year: string;
  company: string;
  tags: string[];
  videoUrl?: string;
  screenshots?: ProjectScreenshots;
  isLive?: boolean;
  liveUrl?: string;
  downloadUrl?: string;
  downloadPassword?: string;
};

export const projects: Project[] = [
  {
    slug: "scrapex",
    year: "2025",
    company: "Personal Project",
    tags: ["Electron", "React", "Playwright", "SQLite", "Google Maps", "WhatsApp"],
    isLive: false,
    downloadUrl: "https://drive.google.com/uc?export=download&id=1wQEesBqSb2H603oxXM17VDe0OZunIgox",
    downloadPassword: "scrapex2025",
  },
  {
    slug: "qrder",
    year: "2025",
    company: "Personal Project",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Supabase", "PostgreSQL", "QR Code"],
    isLive: true,
    liveUrl: "https://www.qrder.net/",
    screenshots: {
      phone: [1, 2, 3, 4, 5, 6].map((i) => `/projects/qrder/phone${i}.png`),
      tablet: [1, 2, 3, 4, 5, 6].map((i) => `/projects/qrder/tablet${i}.png`),
      laptop: [1, 2, 3, 4, 5, 6].map((i) => `/projects/qrder/laptop${i}.png`),
    },
  },
  {
    slug: "meister-basketball",
    year: "2026",
    company: "Personal Project",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Shopier", "Resend"],
    isLive: true,
    liveUrl: "https://www.meisterbasketball.club/",
    screenshots: {
      phone: [1, 2, 3, 4, 5, 6].map((i) => `/projects/meister-basketball/phone${i}.png`),
      tablet: [1, 2, 3, 4, 5, 6].map((i) => `/projects/meister-basketball/tablet${i}.png`),
      laptop: [1, 2, 3, 4, 5, 6].map((i) => `/projects/meister-basketball/laptop${i}.png`),
    },
  },
  {
    slug: "avatar-chatbot",
    year: "2022 - 2023",
    company: "Meta Trade World",
    tags: ["Angular", "FastAPI", "Python", "TensorFlow", "NLTK", "NLP"],
    videoUrl: "https://www.youtube.com/embed/-EjCuHqlyRw",
  },
  {
    slug: "disaster-management",
    year: "2025",
    company: "Personal Project",
    tags: ["IoT", "Leaflet.js", "FastAPI", "Python", "PostgreSQL", "Real-Time", "Mapping"],
    videoUrl: "https://www.youtube.com/embed/s9CRZeMbEXA",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
