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
      phone: [
        "/projects/qrder/phone1.jpeg",
        "/projects/qrder/phone2.jpeg",
        "/projects/qrder/phone3.jpeg",
        "/projects/qrder/phone4.jpeg",
        "/projects/qrder/phone5.jpeg",
        "/projects/qrder/phone6.jpeg",
      ],
      tablet: [
        "/projects/qrder/tablet1.jpeg",
        "/projects/qrder/tablet2.jpeg",
        "/projects/qrder/tablet3.jpeg",
        "/projects/qrder/tablet4.jpeg",
        "/projects/qrder/tablet5.jpeg",
        "/projects/qrder/tablet6.jpeg",
      ],
      laptop: [
        "/projects/qrder/laptop1.jpeg",
        "/projects/qrder/laptop2.jpeg",
        "/projects/qrder/laptop3.jpeg",
        "/projects/qrder/laptop4.jpeg",
        "/projects/qrder/laptop5.jpeg",
        "/projects/qrder/laptop6.jpeg",
      ],
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
