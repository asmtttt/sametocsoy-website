export const skills = [
  "Angular", "React", ".NET CORE", "Python", "FastAPI",
  "NLP", "TensorFlow", "MongoDB", "PostgreSQL", "Docker",
  "Leaflet.js", "Redis", "Kafka",
] as const;

export const education = [
  {
    university: "İstanbul Teknik Üniversitesi",
    url: "https://be.itu.edu.tr/hakkimizda/enstitu-hakkinda/bilgi-guvenligi-muhendisligi-ve-kriptografi-programi-lisansustu-dersleri",
    degree: "Bilgi Güvenliği Mühendisliği ve Kriptografi",
    detail: "Tezli Yüksek Lisans • 2024 - Devam ediyor",
    accent: "blue" as const,
  },
  {
    university: "Topkapı Üniversitesi",
    url: "https://www.topkapi.edu.tr/tr-TR/ana-sayfa/48193",
    degree: "Bilgisayar Mühendisliği",
    detail: "Lisans • 3.46 GPA • 2018 - 2022",
    accent: "emerald" as const,
  },
];

export const experience = [
  {
    title: "Full Stack Developer",
    companies: [
      { name: "Aras Kargo", url: "https://www.araskargo.com.tr/" },
      { name: "ArasDx", url: "https://www.arasdx.com/" },
    ],
    period: "2022 - Devam ediyor",
    isCurrent: true,
    bullets: [
      { title: "Ticket & Dashboard", text: "Operasyon, çalışan ve görev takibi için Angular 16, MongoDB ve FastAPI kullanarak geliştirilen sistem." },
      { title: "Kurye Dolap Uygulaması", text: "Kurye operasyonlarını hızlandıran, Ionic ve Cordova ile yazılmış mobil çözüm." },
      { title: "Eurodis Cargonet Entegrasyonu", text: "MIP, TIF, CIF gibi eski veri formatlarını .NET, C# ve LINQ ile modern altyapıya taşıma." },
      { title: "Harita & Mikroservis", text: "Leaflet.js, Docker, Kafka, Redis ve Graylog ile kapsayıcı mimaride geliştirilen harita tabanlı uygulamalar." },
      { title: "Coğrafi Veri Araçları", text: "Leaflet.js, MongoDB and C# kullanılarak poligon çizim ve lokasyon belirleme sistemleri." },
      { title: "Bildirim & SMS Sistemi", text: "Postman ile test edilen, C# mikroservis tabanlı gerçek zamanlı bildirim altyapısı." },
      { title: "Görev Yönetim Paneli", text: "Çalışan performansı takibi için LINQ sorgularıyla oluşturulan raporlama sistemleri." },
      { title: "ETL Süreçleri", text: "Airflow ve Python ile MongoDB'den PostgreSQL'e veri aktarımı ve Metabase raporlamaları." },
      { title: "Metin Madenciliği & NLP", text: "Python, TensorFlow, scikit-learn ve spaCy ile metin sınıflandırma, veri kazıma ve chatbot sistemleri." },
    ],
    techStack: [] as string[],
    description: "",
  },
  {
    title: "Avatar Chatbot Developer (Freelance)",
    companies: [
      { name: "Meta Trade World", url: "https://www.linkedin.com/company/meta-trade-world-bilisim-a-s/?originalSubdomain=tr" },
    ],
    period: "2022 - 2023",
    isCurrent: false,
    bullets: [],
    description: "4 farklı dilde çalışan, sektör odaklı yanıtlar veren web tabanlı sesli/yazılı Avatar Chatbot projesi.",
    techStack: ["Angular", "FastAPI", "Python", "TensorFlow", "NLTK"],
  },
  {
    title: "AI Developer (Freelance)",
    companies: [
      { name: "Caretta Yazılım", url: "https://www.caretta.net/" },
    ],
    period: "2022",
    isCurrent: false,
    bullets: [],
    description: "Sektörel bağlama göre girdileri kategorize eden yapay zeka chatbotları geliştirilmesi.",
    techStack: ["Angular", "TypeScript", "FastAPI", "Python", "TensorFlow"],
  },
];

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
