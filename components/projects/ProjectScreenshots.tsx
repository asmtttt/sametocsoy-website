"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { ProjectScreenshots as Screenshots } from "@/lib/projects";

type DeviceTab = "phone" | "tablet" | "laptop";

const TABS: { key: DeviceTab; labelTr: string; labelEn: string }[] = [
  { key: "phone", labelTr: "Telefon", labelEn: "Phone" },
  { key: "tablet", labelTr: "Tablet", labelEn: "Tablet" },
  { key: "laptop", labelTr: "Laptop", labelEn: "Laptop" },
];

const DEVICE_CONFIG: Record<DeviceTab, { containerClass: string; imgWidth: number }> = {
  phone:  { containerClass: "max-w-[300px]", imgWidth: 488  },
  tablet: { containerClass: "max-w-[600px]", imgWidth: 960  },
  laptop: { containerClass: "w-full",        imgWidth: 1800 },
};

export default function ProjectScreenshots({
  screenshots,
  lang = "en",
}: {
  screenshots: Screenshots;
  lang?: "en" | "tr";
}) {
  const [activeTab, setActiveTab]       = useState<DeviceTab>("phone");
  const [index, setIndex]               = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx]   = useState(0);

  const handleTabChange = (tab: DeviceTab) => {
    setActiveTab(tab);
    setIndex(0);
  };

  const images = screenshots[activeTab];
  const { containerClass, imgWidth } = DEVICE_CONFIG[activeTab];

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(images.length - 1, i + 1));

  const openLightbox = () => {
    setLightboxIdx(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const lbPrev = useCallback(() => setLightboxIdx((i) => Math.max(0, i - 1)), []);
  const lbNext = useCallback(
    () => setLightboxIdx((i) => Math.min(images.length - 1, i + 1)),
    [images.length]
  );

  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape")      closeLightbox();
      if (e.key === "ArrowLeft")   lbPrev();
      if (e.key === "ArrowRight")  lbNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen, lbPrev, lbNext]);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxOpen]);

  return (
    <>
      <div className="space-y-5">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {TABS.map((tab) => {
            const imgs = screenshots[tab.key];
            if (!imgs || imgs.length === 0) return null;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`cursor-pointer px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
                  activeTab === tab.key
                    ? "bg-bronze text-brown font-black"
                    : "bg-sand text-navy-muted hover:text-navy hover:bg-sand-dark"
                }`}
              >
                {lang === "tr" ? tab.labelTr : tab.labelEn}
              </button>
            );
          })}
        </div>

        {/* Carousel */}
        <div className="flex flex-col items-center gap-4">
          <div className={`relative flex items-center gap-3 ${containerClass} w-full mx-auto`}>
            {images.length > 1 && (
              <button
                onClick={prev}
                disabled={index === 0}
                className="cursor-pointer shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-sand text-navy hover:bg-sand-dark disabled:opacity-20 disabled:cursor-not-allowed transition-all"
                aria-label="Previous"
              >
                ←
              </button>
            )}

            <div
              onClick={openLightbox}
              className="group/thumb flex-1 overflow-y-auto max-h-[520px] rounded-2xl border border-sand-dark hover:border-bronze/50 shadow-2xl hover:shadow-[0_0_40px_rgba(165,127,98,0.12)] bg-sand/30 scroll-smooth cursor-pointer transition-all duration-300
                [&::-webkit-scrollbar]:w-1.5
                [&::-webkit-scrollbar-track]:bg-transparent
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-sand-dark"
            >
              <Image
                key={`${activeTab}-${index}`}
                src={images[index]}
                alt={`Screenshot ${index + 1}`}
                width={imgWidth}
                height={2000}
                style={{ width: "100%", height: "auto", display: "block" }}
                className="rounded-2xl transition-all duration-300 group-hover/thumb:brightness-110"
                priority={index === 0}
              />
            </div>

            {images.length > 1 && (
              <button
                onClick={next}
                disabled={index === images.length - 1}
                className="cursor-pointer shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-sand text-navy hover:bg-sand-dark disabled:opacity-20 disabled:cursor-not-allowed transition-all"
                aria-label="Next"
              >
                →
              </button>
            )}
          </div>

          {images.length > 1 && (
            <div className="flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`cursor-pointer h-2 rounded-full transition-all duration-200 ${
                    i === index ? "bg-bronze w-4" : "bg-sand-dark hover:bg-bronze/50 w-2"
                  }`}
                  aria-label={`Go to screenshot ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="cursor-pointer absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-lg transition-all z-10"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Prev */}
          {lightboxIdx > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); lbPrev(); }}
              className="cursor-pointer absolute left-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl transition-all z-10"
              aria-label="Previous"
            >
              ←
            </button>
          )}

          {/* Image */}
          <div
            className="overflow-auto rounded-2xl"
            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIdx]}
              alt={`Screenshot ${lightboxIdx + 1}`}
              width={imgWidth}
              height={3000}
              style={{ width: "auto", height: "auto", maxWidth: "90vw", maxHeight: "90vh", display: "block" }}
              className="rounded-2xl"
            />
          </div>

          {/* Next */}
          {lightboxIdx < images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); lbNext(); }}
              className="cursor-pointer absolute right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl transition-all z-10"
              aria-label="Next"
            >
              →
            </button>
          )}

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs font-medium tracking-widest">
            {lightboxIdx + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
