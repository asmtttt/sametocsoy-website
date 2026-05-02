// Static data — no translation needed (tech names, URLs, colors)

export const skills = [
  "Angular", "React", ".NET CORE", "Python", "FastAPI",
  "NLP", "TensorFlow", "MongoDB", "PostgreSQL", "Docker",
  "Leaflet.js", "Redis", "Kafka",
] as const;

export const jobMeta = {
  fullstack: {
    companies: [
      { name: "Aras Kargo", url: "https://www.araskargo.com.tr/" },
      { name: "ArasDx", url: "https://www.arasdx.com/" },
    ],
    isCurrent: true,
    techStack: [] as string[],
  },
  chatbot: {
    companies: [
      { name: "Meta Trade World", url: "https://www.linkedin.com/company/meta-trade-world-bilisim-a-s/?originalSubdomain=tr" },
    ],
    isCurrent: false,
    techStack: ["Angular", "FastAPI", "Python", "TensorFlow", "NLTK"],
  },
  ai: {
    companies: [
      { name: "Caretta Yazılım", url: "https://www.caretta.net/" },
    ],
    isCurrent: false,
    techStack: ["Angular", "TypeScript", "FastAPI", "Python", "TensorFlow"],
  },
} as const;

export const schoolMeta = {
  itu: {
    url: "https://be.itu.edu.tr/hakkimizda/enstitu-hakkinda/bilgi-guvenligi-muhendisligi-ve-kriptografi-programi-lisansustu-dersleri",
    accent: "blue" as const,
  },
  topkapi: {
    url: "https://www.topkapi.edu.tr/tr-TR/ana-sayfa/48193",
    accent: "emerald" as const,
  },
};

export const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/samet.ocsy/",
    iconKey: "Instagram" as const,
    hoverText: "group-hover:text-pink-500",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(225,48,108,0.2)]",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sametocsoy/",
    iconKey: "Linkedin" as const,
    hoverText: "group-hover:text-blue-500",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(0,119,181,0.2)]",
  },
  {
    name: "GitHub",
    href: "https://github.com/asmtttt",
    iconKey: "Github" as const,
    hoverText: "group-hover:text-white",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@sametocsy",
    iconKey: "Youtube" as const,
    hoverText: "group-hover:text-red-500",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(255,0,0,0.2)]",
  },
];
