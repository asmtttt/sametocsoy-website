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
          <div className="inline-block px-3 py-1 rounded-full bg-bronze/10 border border-bronze/20 text-bronze text-xs font-bold mb-6 tracking-widest uppercase cursor-default">
            {h.badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-navy leading-[1.1] cursor-default">
            {h.headlineStart} <span className="text-bronze">{h.headlineAccent}</span>{" "}
            {h.headlineEnd}
          </h1>
          <p className="text-lg text-navy-muted leading-relaxed mb-6 cursor-default">
            {h.descPrefix}{" "}
            <span className="text-navy font-semibold">{h.descAI}</span>{" "}
            {h.descMid}{" "}
            <span className="text-bronze font-semibold italic">{h.descMap}</span>{" "}
            {h.descSuffix}
          </p>
          <div className="flex items-center gap-4 text-navy-muted italic border-l-2 border-sand-dark pl-4 mb-8 cursor-default font-medium">
            &quot;{h.quote}&quot;
          </div>
          <div className="flex gap-4">
            <button
              onClick={onViewDetails}
              className="cursor-pointer bg-navy hover:bg-navy/90 text-sand-light px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg shadow-navy/20 active:scale-95"
            >
              {h.cta}
            </button>
            <a
              href="/resume-2026-last-version.pdf"
              download="Samet_Ocsoy_CV.pdf"
              className="cursor-pointer flex items-center gap-2 border border-bronze/40 hover:border-bronze px-8 py-3 rounded-full font-bold transition-all duration-300 active:scale-95 text-brown"
            >
              <Icons.Download /> {h.downloadCV}
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-bronze/10 blur-[100px] rounded-full" />
          <div className="relative w-72 h-72 rounded-3xl overflow-hidden border border-sand-dark bg-sand/60 shadow-2xl flex items-center justify-center text-bronze transition-all duration-700 ease-in-out transform hover:scale-105 hover:text-navy cursor-pointer">
            <Icons.Rocket size={140} />
          </div>
        </div>
      </div>
    </section>
  );
}
