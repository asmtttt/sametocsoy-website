export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  year: string;
  company: string;
  tags: string[];
  videoUrl?: string;
  details: string[];
};

export const projects: Project[] = [
  {
    slug: "avatar-chatbot",
    title: "Sektör Tabanlı Avatar Chatbot",
    subtitle: "Sesli & Yazılı AI Asistan Sistemi",
    shortDescription:
      "4 farklı dilde çalışan, sektör odaklı yanıtlar veren web tabanlı sesli/yazılı Avatar Chatbot projesi.",
    description:
      "Farklı sektörlere özel bilgi tabanı üzerine eğitilmiş, sesli ve yazılı iletişim destekleyen çok dilli bir avatar chatbot sistemi. Kullanıcıyla gerçek zamanlı etkileşim kurarak sektöre özgü sorulara doğru ve bağlamsal yanıtlar üretmektedir. TensorFlow ve NLTK tabanlı NLP motoru, Angular frontend ve FastAPI backend altyapısıyla kurumsal kullanıma hazır bir çözüm sunmaktadır.",
    year: "2022 - 2023",
    company: "Meta Trade World",
    tags: ["Angular", "FastAPI", "Python", "TensorFlow", "NLTK", "NLP"],
    videoUrl: "https://www.youtube.com/embed/-EjCuHqlyRw",
    details: [
      "4 farklı dil desteği (Türkçe, İngilizce, Almanca, Fransızca) ile çok dilli kullanıcı deneyimi",
      "TensorFlow ve NLTK tabanlı doğal dil anlama ve intent sınıflandırma motoru",
      "Sektöre özel bilgi tabanı ile bağlamsal ve doğru yanıt üretimi",
      "Angular tabanlı modern web arayüzü ile gerçek zamanlı sesli etkileşim",
      "FastAPI ve Python ile yüksek performanslı, asenkron backend altyapısı",
      "Avatar animasyon entegrasyonu ile görsel ve sürükleyici kullanıcı deneyimi",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
