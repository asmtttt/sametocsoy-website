"use client";

import { Icons } from "@/components/icons/Icons";
import { useTranslation } from "@/lib/i18n";

type AboutSectionProps = {
  onViewDetails: () => void;
};

export default function AboutSection({ onViewDetails }: AboutSectionProps) {
  const { t } = useTranslation();
  const h = t.hero;

  return (
    <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 tracking-widest uppercase cursor-default">
            {h.badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-white leading-[1.1] cursor-default">
            {h.headlineStart} <span className="text-blue-500">{h.headlineAccent}</span>{" "}
            {h.headlineEnd}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-6 cursor-default">
            {h.descPrefix}{" "}
            <span className="text-slate-200 font-semibold">{h.descAI}</span>{" "}
            {h.descMid}{" "}
            <span className="text-blue-400 font-semibold italic">{h.descMap}</span>{" "}
            {h.descSuffix}
          </p>
          <div className="flex items-center gap-4 text-slate-500 italic border-l-2 border-slate-800 pl-4 mb-8 cursor-default font-medium">
            &quot;{h.quote}&quot;
          </div>
          <div className="flex gap-4">
            <button
              onClick={onViewDetails}
              className="cursor-pointer bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg shadow-blue-600/20 active:scale-95"
            >
              {h.cta}
            </button>
            <a
              href="/resume.pdf"
              download="Samet_Ocsoy_CV.pdf"
              className="cursor-pointer flex items-center gap-2 border border-slate-700 hover:border-slate-500 px-8 py-3 rounded-full font-bold transition-all duration-300 active:scale-95 text-slate-200"
            >
              <Icons.Download /> {h.downloadCV}
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
          <div className="relative w-72 h-72 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 shadow-2xl flex items-center justify-center text-8xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out transform hover:scale-105 cursor-pointer">
            🚀
          </div>
        </div>
      </div>
    </section>
  );
}
