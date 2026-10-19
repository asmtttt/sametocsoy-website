import type { Locale } from "@/lib/i18n"

export interface Experience {
  role: string
  company: string
  location: string
  period: string
  points: string[]
}

export interface Education {
  degree: string
  school: string
  location: string
  period: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Reference {
  name: string
  role: string
  email: string
}

export interface ResumeLabels {
  summary: string
  experience: string
  education: string
  skills: string
  projects: string
  languages: string
  references: string
  download: string
  sendEmail: string
  email: string
  photoAlt: string
  pdfTitle: string
}

export interface ResumeData {
  personal: {
    name: string
    title: string
    location: string
    phone: string
    email: string
    summary: string
    pdfUrl: string
    pdfFileName: string
    socials: {
      linkedin: string
      github: string
      emailUrl: string
    }
  }
  experience: Experience[]
  education: Education[]
  skills: SkillGroup[]
  languages: string[]
  references: Reference[]
  labels: ResumeLabels
}

/** Sabit site adresi: PDF'i alanlar siteye de ulaşabilsin. */
export const WEBSITE = "sametocsoy.com"
export const WEBSITE_URL = `https://${WEBSITE}`

const socials = {
  linkedin: "https://linkedin.com/in/sametocsoy",
  github: "https://github.com/asmtttt",
  emailUrl: "mailto:abdulsamet.ocsoy@gmail.com",
}

const en: ResumeData = {
  personal: {
    name: "Samet Öçsoy",
    title: "Senior Software Engineer / Basketball Coach",
    location: "Istanbul, Turkey",
    phone: "+90 537 012 40 65",
    email: "abdulsamet.ocsoy@gmail.com",
    summary:
      "Full-stack software engineer with 4+ years of experience building microservice-based enterprise systems (Angular, .NET Core, FastAPI, MongoDB, Kafka, Docker) at a national logistics company, alongside independent product development. Founder of qrder.net, a live SaaS platform for digital QR menus. Background in machine learning / NLP and data engineering (ETL pipelines, text mining, chatbots). Also active as a basketball coach.",
    pdfUrl: "/samet_ocsoy_ats_resume.pdf",
    pdfFileName: "samet_ocsoy_ats_resume.pdf",
    socials,
  },
  experience: [
    {
      role: "Senior Software Engineer (Full-Stack Developer)",
      company: "Aras Kargo – ArasDx",
      location: "Istanbul, Turkey",
      period: "Jan 2022 – Present",
      points: [
        "Developed a ticket and dashboard application to manage operational issues, track employees and tasks, and improve process efficiency, using Angular 16, MongoDB, and FastAPI (Python) for REST API services.",
        "Built a courier locker application with Angular 16, Ionic, and Cordova for cross-platform mobile delivery, using C# and LINQ for backend data processing with MongoDB.",
        "Migrated legacy data formats (MIP, TIF, CIF) into a modern .NET-based infrastructure using C# and LINQ for Eurodis Cargonet integration.",
        "Designed and developed map-based functionalities using Leaflet.js on a containerized microservice architecture (Docker, Rancher); implemented distributed logging with Graylog, message queues with Kafka, and caching with Redis; tested APIs with Postman.",
        "Integrated geographic databases and built map tools enabling users to define locations and draw polygons, managing backend operations with C# and MongoDB.",
        "Built an SMS and notification microservice system in C# for real-time updates, validated with Postman.",
        "Developed task management and performance-tracking dashboards in .NET/C#, enabling managers to monitor real-time updates via LINQ-based reporting.",
        "Built ETL pipelines to transfer data from MongoDB to PostgreSQL using Airflow and Python, and set up reporting with Metabase.",
        "Developed NLP solutions for text classification, data scraping, similarity detection, and chatbot functionality using Python, NLTK, spaCy, scikit-learn, TensorFlow/PyTorch, FastAPI, and Angular.",
      ],
    },
    {
      role: "Founder & Full-Stack Developer",
      company: "qrder.net (Live Product)",
      location: "Istanbul, Turkey — Independent Project",
      period: "2024 – Present",
      points: [
        "Founded and built qrder.net, a live, web-based QR menu and table-ordering SaaS platform for restaurants, cafes, and bars, requiring no app download or login for guests.",
        "Designed a self-service menu builder allowing business owners to create and publish a digital QR menu in minutes, supporting up to 10 categories and 100 products on the free tier.",
        "Own the product end-to-end: development, hosting/deployment, pricing, and go-to-market, including outbound lead generation and outreach to restaurant and cafe owners.",
        "Built with a modern web stack (Next.js/React, cloud database, Tailwind CSS) focused on fast load times and mobile-first guest experience.",
      ],
    },
    {
      role: "Freelance — Data Scientist / Full-Stack Developer",
      company: "Meta Trade World",
      location: "Istanbul, Turkey",
      period: "2022 – 2023",
      points: [
        "Built a web-based metaverse avatar chatbot that detects and processes user input in four languages via text or voice, categorizing input by industry-specific context and responding via voice, text, and visual output, using Angular, TypeScript, FastAPI, Python, TensorFlow, scikit-learn, and NLTK.",
      ],
    },
    {
      role: "Freelance — Data Scientist / Full-Stack Developer",
      company: "Caretta Yazılım",
      location: "Istanbul, Turkey",
      period: "Apr 2022 – Jul 2022",
      points: [
        "Developed a web-based AI chatbot that categorized user input by industry-specific context and generated sector-specific responses, using Angular, TypeScript, FastAPI, Python, TensorFlow, scikit-learn, and NLTK.",
      ],
    },
    {
      role: "Personal Basketball Coach",
      company: "Independent",
      location: "Istanbul, Turkey",
      period: "",
      points: [
        "Coached basketball teams, developing players' skills, teamwork, and game strategy; organized training sessions and guided teams during matches.",
      ],
    },
  ],
  education: [
    {
      degree: "Master's Degree, Information Security Engineering and Cryptography",
      school: "Istanbul Technical University",
      location: "Istanbul, Turkey",
      period: "2024 – Present",
    },
    {
      degree: "Bachelor's Degree, Computer Engineering (GPA: 3.46)",
      school: "Istanbul Topkapı University",
      location: "Istanbul, Turkey",
      period: "2018 – 2022",
    },
  ],
  skills: [
    { category: "Frontend", items: ["Angular 16", "TypeScript", "HTML5", "CSS3", "Bootstrap", "PrimeNG", "RxJS", "Leaflet.js", "Ionic", "Cordova"] },
    { category: "Backend", items: [".NET Core", "C#", "LINQ", "Python", "FastAPI", "REST API"] },
    { category: "Databases", items: ["MongoDB", "PostgreSQL", "Redis", "SQL"] },
    { category: "DevOps & Tools", items: ["Docker", "Rancher", "Kafka", "Graylog", "Git", "Postman"] },
    { category: "Data & ETL", items: ["Airflow", "Metabase", "Pandas", "NumPy", "Matplotlib"] },
    { category: "ML & NLP", items: ["TensorFlow", "PyTorch", "scikit-learn", "NLTK", "spaCy"] },
    { category: "Web Scraping", items: ["Requests", "BeautifulSoup"] },
    { category: "Product / SaaS", items: ["Next.js", "Supabase", "Vercel", "React Native (Expo)", "Tailwind CSS", "RevenueCat"] },
  ],
  languages: ["Turkish (Native)", "English (Professional Working Proficiency)"],
  references: [
    { name: "Prof. Dr. Metin Zontul", role: "Dean of Engineering, Sivas University of Science and Technology", email: "metinzontul@gmail.com" },
    { name: "Nadir Can Kavkas", role: "Senior Software Engineer", email: "nadircankavkas@gmail.com" },
    { name: "Onur Adıgüzel", role: "Senior Software Engineer", email: "onuradiguzelll@gmail.com" },
  ],
  labels: {
    summary: "Professional Summary",
    experience: "Professional Experience",
    education: "Education",
    skills: "Technical Skills",
    projects: "Projects",
    languages: "Languages",
    references: "References",
    download: "Download Resume",
    sendEmail: "Send Email",
    email: "Email",
    photoAlt: "Samet Öçsoy profile photo",
    pdfTitle: "Resume",
  },
}

const tr: ResumeData = {
  personal: {
    name: "Samet Öçsoy",
    title: "Kıdemli Yazılım Mühendisi / Basketbol Antrenörü",
    location: "İstanbul, Türkiye",
    phone: "+90 537 012 40 65",
    email: "abdulsamet.ocsoy@gmail.com",
    summary:
      "Ulusal bir lojistik şirketinde mikroservis tabanlı kurumsal sistemler (Angular, .NET Core, FastAPI, MongoDB, Kafka, Docker) geliştiren, bunun yanında bağımsız ürünler üreten 4+ yıl deneyimli Full-Stack yazılım mühendisi. Dijital QR menüler için canlı bir SaaS platformu olan qrder.net'in kurucusu. Makine öğrenmesi / NLP ve veri mühendisliği (ETL süreçleri, metin madenciliği, chatbotlar) alanlarında geçmişe sahip. Aynı zamanda basketbol antrenörlüğü yapıyor.",
    pdfUrl: "/samet_ocsoy_ats_resume_tr.pdf",
    pdfFileName: "samet_ocsoy_ats_resume_tr.pdf",
    socials,
  },
  experience: [
    {
      role: "Kıdemli Yazılım Mühendisi (Full-Stack Developer)",
      company: "Aras Kargo – ArasDx",
      location: "İstanbul, Türkiye",
      period: "Ocak 2022 – Halen",
      points: [
        "Operasyonel sorunları yönetmek, çalışan ve görevleri takip etmek ve süreç verimliliğini artırmak için Angular 16, MongoDB ve FastAPI (Python) REST API servisleriyle bir ticket ve dashboard uygulaması geliştirdim.",
        "Platformlar arası mobil teslimat için Angular 16, Ionic ve Cordova ile bir kurye dolap uygulaması geliştirdim; arka uçta MongoDB üzerinde C# ve LINQ ile veri işleme yaptım.",
        "Eurodis Cargonet entegrasyonu için eski veri formatlarını (MIP, TIF, CIF) C# ve LINQ kullanarak modern bir .NET altyapısına taşıdım.",
        "Konteynerleştirilmiş mikroservis mimarisi (Docker, Rancher) üzerinde Leaflet.js ile harita tabanlı özellikler tasarlayıp geliştirdim; Graylog ile dağıtık loglama, Kafka ile mesaj kuyrukları ve Redis ile önbellekleme uyguladım; API'leri Postman ile test ettim.",
        "Coğrafi veritabanlarını entegre edip kullanıcıların lokasyon tanımlayıp poligon çizebildiği harita araçları geliştirdim; arka uç işlemlerini C# ve MongoDB ile yönettim.",
        "Gerçek zamanlı güncellemeler için C# ile SMS ve bildirim mikroservis sistemi geliştirdim ve Postman ile doğruladım.",
        "Yöneticilerin gerçek zamanlı güncellemeleri LINQ tabanlı raporlamayla izleyebildiği görev yönetimi ve performans takibi panelleri geliştirdim (.NET/C#).",
        "Airflow ve Python ile MongoDB'den PostgreSQL'e veri aktaran ETL süreçleri kurdum ve Metabase ile raporlama oluşturdum.",
        "Python, NLTK, spaCy, scikit-learn, TensorFlow/PyTorch, FastAPI ve Angular ile metin sınıflandırma, veri kazıma, benzerlik tespiti ve chatbot çözümleri geliştirdim.",
      ],
    },
    {
      role: "Kurucu ve Full-Stack Developer",
      company: "qrder.net (Canlı Ürün)",
      location: "İstanbul, Türkiye — Bağımsız Proje",
      period: "2024 – Halen",
      points: [
        "Restoran, kafe ve barlar için misafirlerin uygulama indirmesine veya giriş yapmasına gerek duymayan, web tabanlı canlı bir QR menü ve masa siparişi SaaS platformu olan qrder.net'i kurdum ve geliştirdim.",
        "İşletme sahiplerinin dakikalar içinde dijital QR menü oluşturup yayınlayabildiği, ücretsiz pakette 10 kategori ve 100 ürüne kadar destekleyen self-servis menü oluşturucu tasarladım.",
        "Ürünü uçtan uca yönetiyorum: geliştirme, barındırma/yayınlama, fiyatlandırma ve pazara açılma; restoran ve kafe sahiplerine yönelik potansiyel müşteri bulma ve iletişim çalışmaları dahil.",
        "Hızlı yükleme süreleri ve mobil öncelikli misafir deneyimine odaklanan modern bir web yığınıyla (Next.js/React, bulut veritabanı, Tailwind CSS) geliştirdim.",
      ],
    },
    {
      role: "Freelance — Veri Bilimci / Full-Stack Developer",
      company: "Meta Trade World",
      location: "İstanbul, Türkiye",
      period: "2022 – 2023",
      points: [
        "Kullanıcı girdisini metin veya ses yoluyla dört dilde algılayıp işleyen, girdiyi sektöre özgü bağlama göre kategorize edip ses, metin ve görsel çıktıyla yanıtlayan web tabanlı bir metaverse avatar chatbot geliştirdim (Angular, TypeScript, FastAPI, Python, TensorFlow, scikit-learn, NLTK).",
      ],
    },
    {
      role: "Freelance — Veri Bilimci / Full-Stack Developer",
      company: "Caretta Yazılım",
      location: "İstanbul, Türkiye",
      period: "Nis 2022 – Tem 2022",
      points: [
        "Kullanıcı girdisini sektöre özgü bağlama göre kategorize edip sektörel yanıtlar üreten web tabanlı bir yapay zeka chatbotu geliştirdim (Angular, TypeScript, FastAPI, Python, TensorFlow, scikit-learn, NLTK).",
      ],
    },
    {
      role: "Özel Basketbol Antrenörü",
      company: "Bağımsız",
      location: "İstanbul, Türkiye",
      period: "",
      points: [
        "Basketbol takımlarını çalıştırarak oyuncuların becerilerini, takım çalışmasını ve oyun stratejisini geliştirdim; antrenmanlar düzenledim ve maçlarda takımlara yön verdim.",
      ],
    },
  ],
  education: [
    {
      degree: "Yüksek Lisans, Bilgi Güvenliği Mühendisliği ve Kriptografi",
      school: "İstanbul Teknik Üniversitesi",
      location: "İstanbul, Türkiye",
      period: "2024 – Halen",
    },
    {
      degree: "Lisans, Bilgisayar Mühendisliği (GPA: 3.46)",
      school: "İstanbul Topkapı Üniversitesi",
      location: "İstanbul, Türkiye",
      period: "2018 – 2022",
    },
  ],
  skills: [
    { category: "Frontend", items: en.skills[0].items },
    { category: "Backend", items: en.skills[1].items },
    { category: "Veritabanları", items: en.skills[2].items },
    { category: "DevOps ve Araçlar", items: en.skills[3].items },
    { category: "Veri ve ETL", items: en.skills[4].items },
    { category: "ML ve NLP", items: en.skills[5].items },
    { category: "Web Scraping", items: en.skills[6].items },
    { category: "Ürün / SaaS", items: en.skills[7].items },
  ],
  languages: ["Türkçe (Ana dil)", "İngilizce (Profesyonel çalışma yeterliliği)"],
  references: [
    { name: "Prof. Dr. Metin Zontul", role: "Mühendislik Fakültesi Dekanı, Sivas Bilim ve Teknoloji Üniversitesi", email: "metinzontul@gmail.com" },
    { name: "Nadir Can Kavkas", role: "Kıdemli Yazılım Mühendisi", email: "nadircankavkas@gmail.com" },
    { name: "Onur Adıgüzel", role: "Kıdemli Yazılım Mühendisi", email: "onuradiguzelll@gmail.com" },
  ],
  labels: {
    summary: "Profil Özeti",
    experience: "İş Deneyimi",
    education: "Eğitim",
    skills: "Teknik Yetkinlikler",
    projects: "Projeler",
    languages: "Diller",
    references: "Referanslar",
    download: "Özgeçmişi İndir",
    sendEmail: "E-posta Gönder",
    email: "E-posta",
    photoAlt: "Samet Öçsoy profil fotoğrafı",
    pdfTitle: "Özgeçmiş",
  },
}

export const resumes: Record<Locale, ResumeData> = { en, tr }
