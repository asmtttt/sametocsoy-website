// Static project data — translatable content lives in lib/i18n/locales/
export type Project = {
  slug: string;
  year: string;
  company: string;
  tags: string[];
  videoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "avatar-chatbot",
    year: "2022 - 2023",
    company: "Meta Trade World",
    tags: ["Angular", "FastAPI", "Python", "TensorFlow", "NLTK", "NLP"],
    videoUrl: "https://www.youtube.com/embed/-EjCuHqlyRw",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
