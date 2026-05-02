"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useTranslation, type Locale } from "@/lib/i18n";

const languages: { code: Locale; label: string; flagCode: string }[] = [
  { code: "tr", label: "Türkçe", flagCode: "tr" },
  { code: "en", label: "English", flagCode: "gb" },
];

function Flag({ code }: { code: string }) {
  return (
    <Image
      src={`https://flagcdn.com/20x15/${code}.png`}
      width={20}
      height={15}
      alt={code}
      className="rounded-[2px]"
    />
  );
}

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = languages.find((l) => l.code === locale)!;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="cursor-pointer flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/50 hover:border-slate-600 transition-all duration-300 text-sm font-medium text-slate-300"
      >
        <Flag code={current.flagCode} />
        <span className="hidden sm:inline">{current.label}</span>
        <svg
          className={`w-3 h-3 text-slate-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-xl border border-slate-800 bg-[#030712]/95 backdrop-blur-lg shadow-2xl overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => { setLocale(lang.code); setOpen(false); }}
              className={`cursor-pointer w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-200 ${
                locale === lang.code
                  ? "text-blue-400 bg-blue-500/10"
                  : "text-slate-300 hover:bg-slate-800/60"
              }`}
            >
              <Flag code={lang.flagCode} />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
