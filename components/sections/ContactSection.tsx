"use client";

import { useState } from "react";
import { Icons } from "@/components/icons/Icons";
import { socialLinks } from "@/lib/data";

const iconMap = {
  Instagram: Icons.Instagram,
  Linkedin: Icons.Linkedin,
  Github: Icons.Github,
  Youtube: Icons.Youtube,
};

const EMAIL = "abdulsamet.ocsoy@gmail.com";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out text-center py-10">
      <h2 className="text-4xl font-black mb-4 text-white tracking-tighter uppercase cursor-default">
        Bağlantıda Kalalım
      </h2>
      <p className="text-slate-400 mb-12 max-w-lg mx-auto italic cursor-default">
        Yeni projeler veya sadece basketbol konuşmak için bana ulaşın.
      </p>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.iconKey];
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`cursor-pointer group p-6 rounded-full bg-slate-900 border border-slate-800 hover:-translate-y-2 transition-all duration-500 ${link.hoverShadow}`}
            >
              <div className={`text-slate-400 transition-colors duration-300 ${link.hoverText}`}>
                <Icon />
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-20 flex justify-center items-center">
        <div className="inline-flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-all duration-300 group bg-slate-900/50 px-6 py-3 rounded-2xl border border-slate-800 hover:border-blue-500/30">
          <Icons.Mail />
          <span className="font-bold text-lg md:text-xl italic tracking-tight transition-all duration-300">
            {EMAIL}
          </span>
          <div
            onClick={copyToClipboard}
            className={`cursor-pointer p-2 rounded-lg transition-all duration-300 ${
              copied ? "text-emerald-400" : "text-slate-500 hover:text-white hover:bg-slate-800"
            }`}
          >
            {copied ? <Icons.Check /> : <Icons.Copy />}
          </div>
        </div>
      </div>
    </section>
  );
}
