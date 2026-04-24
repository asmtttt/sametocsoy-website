"use client";

import React, { useState, useEffect } from "react";

const Icons = {
  Github: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  ),
  Linkedin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  ),
  Instagram: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  ),
  Download: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
  ),
  Briefcase: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
  ),
  GraduationCap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
  ),
  Rocket: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3l1 1"/><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5l-1-1"/></svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  )
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 selection:bg-blue-500/30 selection:text-blue-200 font-sans tracking-tight">
      
      {/* Navigasyon Barı */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled ? "bg-[#030712]/90 backdrop-blur-lg border-slate-800 py-4 shadow-2xl" : "bg-transparent border-transparent py-6"
      }`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent cursor-pointer">
            Samet Öçsoy
          </span>
          <div className="flex gap-6 md:gap-8 text-sm font-medium">
            <button onClick={() => setActiveTab("about")} className={`cursor-pointer transition-all duration-300 ${activeTab === "about" ? "text-blue-400 scale-105" : "text-slate-400 hover:text-blue-300"}`}>Hakkımda</button>
            <button onClick={() => setActiveTab("resume")} className={`cursor-pointer transition-all duration-300 ${activeTab === "resume" ? "text-blue-400 scale-105" : "text-slate-400 hover:text-blue-300"}`}>Özgeçmiş</button>
            <button onClick={() => setActiveTab("contact")} className={`cursor-pointer transition-all duration-300 ${activeTab === "contact" ? "text-blue-400 scale-105" : "text-slate-400 hover:text-blue-300"}`}>İletişim</button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        
        {/* HAKKIMDA BÖLÜMÜ */}
        {activeTab === "about" && (
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 tracking-widest uppercase cursor-default">
                  Software Engineer
                </div>
                <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-white leading-[1.1] cursor-default">
                  Geleceği <span className="text-blue-500">Kodla</span> Şekillendir.
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed mb-6 cursor-default">
                  Teknolojinin sınırlarını zorlamayı seven bir mühendis olarak; 
                  <span className="text-slate-200 font-semibold"> Yapay Zeka (AI), Doğal Dil İşleme (NLP)</span> ve akıllı chatbot sistemleri üzerine uzmanlaşıyorum. 
                  Veriyi <span className="text-blue-400 font-semibold italic">Haritalama API'ları (Leaflet.js)</span> ile görselleştirerek kullanıcı deneyimini bir üst seviyeye taşımak benim tutkum.
                </p>
                <div className="flex items-center gap-4 text-slate-500 italic border-l-2 border-slate-800 pl-4 mb-8 cursor-default font-medium">
                  "Sahadaki stratejiyi koda, kodun hızını hayata yansıtıyorum."
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setActiveTab('resume')} 
                    className="cursor-pointer bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg shadow-blue-600/20 active:scale-95"
                  >
                    Detayları Gör
                  </button>
                  <a 
                    href="/resume.pdf" 
                    download="Samet_Ocsoy_CV.pdf"
                    className="cursor-pointer flex items-center gap-2 border border-slate-700 hover:border-slate-500 px-8 py-3 rounded-full font-bold transition-all duration-300 active:scale-95 text-slate-200"
                  >
                    <Icons.Download /> CV İndir
                  </a>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>
                <div className="relative w-72 h-72 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 shadow-2xl flex items-center justify-center text-8xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out transform hover:scale-105 cursor-pointer">
                  🚀
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ÖZGEÇMİŞ BÖLÜMÜ */}
        {activeTab === "resume" && (
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-12">
                <div>
                  <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 italic text-white cursor-default">
                    <Icons.Briefcase /> Deneyim
                  </h2>
                  <div className="space-y-8 border-l-2 border-slate-800 ml-3 pl-8 relative">
                    <div className="relative group">
                      <div className="absolute -left-[39px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#030712] transition-transform duration-300 group-hover:scale-125"></div>
                      <h4 className="text-lg font-bold text-white cursor-default">Full Stack Developer</h4>
                      <div className="text-blue-400 text-sm mb-2 font-semibold tracking-wide flex gap-2 cursor-default">
                        <a href="https://www.araskargo.com.tr/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors cursor-pointer">Aras Kargo</a>
                        <span>-</span>
                        <a href="https://www.arasdx.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors cursor-pointer">ArasDx</a>
                        <span>• 2022 - Günümüz</span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed cursor-default">
                        FastAPI ve MongoDB mimarileri ile biletleme/dashboard sistemleri geliştirme. 
                        Locker ve Harita tabanlı mikroservis uygulamaları (C#, Redis, Kafka, Docker).
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 italic text-white cursor-default">
                    <Icons.GraduationCap /> Eğitim
                  </h2>
                  <div className="grid gap-4">
                    <a 
                      href="https://be.itu.edu.tr/hakkimizda/enstitu-hakkinda/bilgi-guvenligi-muhendisligi-ve-kriptografi-programi-lisansustu-dersleri" 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group block"
                    >
                      <h4 className="font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">İTÜ - Bilgi Güvenliği Mühendisliği (Yüksek Lisans)</h4>
                      <p className="text-slate-400 text-sm italic">2024 - Günümüz</p>
                    </a>
                    <a 
                      href="https://www.topkapi.edu.tr/tr-TR/ana-sayfa/48193" 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer group block"
                    >
                      <h4 className="font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">Topkapı Üni. - Bilgisayar Mühendisliği (Lisans)</h4>
                      <p className="text-slate-400 text-sm italic">3.46 GPA • 2018 - 2022 [cite: 12, 13]</p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl font-bold flex items-center gap-3 italic text-white cursor-default">
                  <Icons.Rocket /> Yetenekler
                </h2>
                <div className="flex flex-wrap gap-2">
                  {["Angular", "React", ".NET CORE", "Python", "FastAPI", "NLP", "TensorFlow", "MongoDB", "PostgreSQL", "Docker", "Leaflet.js", "Redis", "Kafka"].map((skill) => (
                    <span key={skill} className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm hover:border-blue-500/50 hover:text-white transition-all duration-300 cursor-pointer text-slate-300 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* İLETİŞİM BÖLÜMÜ */}
        {activeTab === "contact" && (
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out text-center py-10">
            <h2 className="text-4xl font-black mb-4 text-white tracking-tighter uppercase cursor-default">Bağlantıda Kalalım</h2>
            <p className="text-slate-400 mb-12 max-w-lg mx-auto italic cursor-default">
              Yeni projeler veya sadece basketbol konuşmak için bana ulaşın. [cite: 91, 92]
            </p>
            
            <div className="flex justify-center gap-8 md:gap-12">
              <a href="https://www.instagram.com/samet.ocsy/" target="_blank" rel="noreferrer" className="cursor-pointer group p-6 rounded-full bg-slate-900 border border-slate-800 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_40px_rgba(225,48,108,0.2)]">
                <div className="text-slate-400 group-hover:text-pink-500 transition-colors duration-300">
                  <Icons.Instagram />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/sametocsoy/" target="_blank" rel="noreferrer" className="cursor-pointer group p-6 rounded-full bg-slate-900 border border-slate-800 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,119,181,0.2)]">
                <div className="text-slate-400 group-hover:text-blue-500 transition-colors duration-300">
                  <Icons.Linkedin />
                </div>
              </a>
              <a href="https://github.com/asmtttt" target="_blank" rel="noreferrer" className="cursor-pointer group p-6 rounded-full bg-slate-900 border border-slate-800 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                <div className="text-slate-400 group-hover:text-white transition-colors duration-300">
                  <Icons.Github />
                </div>
              </a>
            </div>

            <div className="mt-20">
               <div className="cursor-pointer inline-flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-all duration-300 group active:scale-95">
                  <Icons.Mail />
                  <span className="font-bold text-xl italic tracking-tight group-hover:tracking-wider transition-all duration-300">abdulsamet.ocsoy@gmail.com</span>
               </div>
            </div>
          </section>
        )}

      </main>

      {/* Arka Plan Dekoratif Işıklar */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-emerald-900/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
}