"use client";

import { Icons } from "@/components/icons/Icons";

type AboutSectionProps = {
  onViewDetails: () => void;
};

export default function AboutSection({ onViewDetails }: AboutSectionProps) {
  return (
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
            Teknolojinin sınırlarını zorlamayı seven bir mühendis olarak;{" "}
            <span className="text-slate-200 font-semibold">
              Yapay Zeka (AI), Doğal Dil İşleme (NLP)
            </span>{" "}
            ve akıllı chatbot sistemleri üzerine uzmanlaşıyorum. Veriyi{" "}
            <span className="text-blue-400 font-semibold italic">
              Haritalama API&apos;ları (Leaflet.js)
            </span>{" "}
            ile görselleştirerek kullanıcı deneyimini bir üst seviyeye taşımak benim tutkum.
          </p>
          <div className="flex items-center gap-4 text-slate-500 italic border-l-2 border-slate-800 pl-4 mb-8 cursor-default font-medium">
            &quot;Sahadaki stratejiyi koda, kodun hızını hayata yansıtıyorum.&quot;
          </div>
          <div className="flex gap-4">
            <button
              onClick={onViewDetails}
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
  );
}
