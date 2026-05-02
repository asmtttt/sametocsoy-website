"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

type NavbarProps = {
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
};

const HOME_TABS = [
  { key: "about", label: "Hakkımda" },
  { key: "resume", label: "Özgeçmiş" },
  { key: "contact", label: "İletişim" },
];

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isOnProjects = pathname.startsWith("/projects");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeTab = (key: string) => {
    if (isOnProjects) {
      router.push("/");
    } else {
      setActiveTab?.(key);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-[#030712]/90 backdrop-blur-lg border-slate-800 py-4 shadow-2xl"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent cursor-pointer"
        >
          Samet Öçsoy
        </Link>
        <div className="flex gap-6 md:gap-8 text-sm font-medium">
          {HOME_TABS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleHomeTab(key)}
              className={`cursor-pointer transition-all duration-300 ${
                !isOnProjects && activeTab === key
                  ? "text-blue-400 scale-105"
                  : "text-slate-400 hover:text-blue-300"
              }`}
            >
              {label}
            </button>
          ))}
          <Link
            href="/projects"
            className={`cursor-pointer transition-all duration-300 ${
              isOnProjects
                ? "text-blue-400 scale-105"
                : "text-slate-400 hover:text-blue-300"
            }`}
          >
            Projeler
          </Link>
        </div>
      </div>
    </nav>
  );
}
