"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

export default function LaptopCarousel({ images }: { images: string[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: false,
    duration: 22,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync initial state from the embla instance before its own listeners take over
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative flex items-center gap-3 w-full mx-auto">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="cursor-pointer shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-foreground hover:bg-accent disabled:opacity-20 disabled:cursor-not-allowed transition-all"
          aria-label="Previous"
        >
          ←
        </button>

        <div className="overflow-hidden rounded-2xl border border-border shadow-md bg-muted/40 flex-1" ref={emblaRef}>
          <div className="flex items-start">
            {images.map((src, i) => (
              <div key={src} className="relative flex-[0_0_100%] min-w-0">
                <div
                  className={`max-h-[520px] overflow-y-auto scroll-smooth transition-all duration-300 ease-in-out
                    [&::-webkit-scrollbar]:w-1.5
                    [&::-webkit-scrollbar-track]:bg-transparent
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-border
                    ${i === selectedIndex ? "opacity-100 scale-100" : "opacity-60 scale-[0.98]"}`}
                >
                  <Image
                    src={src}
                    alt={`Laptop screenshot ${i + 1}`}
                    width={1800}
                    height={1125}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    className="rounded-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="cursor-pointer shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-foreground hover:bg-accent disabled:opacity-20 disabled:cursor-not-allowed transition-all"
          aria-label="Next"
        >
          →
        </button>
      </div>

      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => scrollTo(i)}
              className={`cursor-pointer h-2 rounded-full transition-all duration-300 ease-in-out ${
                i === selectedIndex ? "bg-primary w-4" : "bg-border hover:bg-primary/50 w-2"
              }`}
              aria-label={`Go to screenshot ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
