"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

type NavbarProps = {
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
};

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation();
  const menuRef = useRef<HTMLDivElement>(null);
  const isOnProjects = pathname.startsWith("/projects");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const handleHomeTab = (key: string) => {
    setMenuOpen(false);
    if (isOnProjects) {
      router.push(`/?tab=${key}`);
    } else {
      setActiveTab?.(key);
    }
  };

  const navItems = [
    { key: "about", label: t.nav.about, type: "tab" as const },
    { key: "resume", label: t.nav.resume, type: "tab" as const },
    { key: "projects", label: t.nav.projects, type: "link" as const, href: "/projects" },
    { key: "contact", label: t.nav.contact, type: "tab" as const },
  ];

  const isActive = (item: (typeof navItems)[number]) => {
    if (item.type === "link") return isOnProjects;
    return !isOnProjects && activeTab === item.key;
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
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
        >
          Samet Öçsoy
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 text-sm font-medium">
            {navItems.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item.key}
                  href={item.href!}
                  className={`transition-all duration-300 ${
                    isActive(item) ? "text-blue-400 scale-105" : "text-slate-400 hover:text-blue-300"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.key}
                  onClick={() => handleHomeTab(item.key)}
                  className={`cursor-pointer transition-all duration-300 ${
                    isActive(item) ? "text-blue-400 scale-105" : "text-slate-400 hover:text-blue-300"
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
          <LanguageSwitcher />
        </div>

        {/* Mobile: language + hamburger */}
        <div className="flex md:hidden items-center gap-3" ref={menuRef}>
          <LanguageSwitcher />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="cursor-pointer p-2 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-300 hover:border-slate-600 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 mx-4 rounded-2xl border border-slate-800 bg-[#030712]/95 backdrop-blur-lg shadow-2xl overflow-hidden">
              {navItems.map((item) =>
                item.type === "link" ? (
                  <Link
                    key={item.key}
                    href={item.href!}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center px-6 py-4 text-sm font-medium border-b border-slate-800/50 last:border-0 transition-colors duration-200 ${
                      isActive(item) ? "text-blue-400 bg-blue-500/5" : "text-slate-300 hover:bg-slate-800/40"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.key}
                    onClick={() => handleHomeTab(item.key)}
                    className={`cursor-pointer w-full text-left flex items-center px-6 py-4 text-sm font-medium border-b border-slate-800/50 last:border-0 transition-colors duration-200 ${
                      isActive(item) ? "text-blue-400 bg-blue-500/5" : "text-slate-300 hover:bg-slate-800/40"
                    }`}
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
