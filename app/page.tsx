"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";
import BackgroundBlur from "@/components/ui/BackgroundBlur";

function PortfolioContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") ?? "about";
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 selection:bg-blue-500/30 selection:text-blue-200 font-sans tracking-tight">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {activeTab === "about" && (
          <AboutSection onViewDetails={() => setActiveTab("resume")} />
        )}
        {activeTab === "resume" && <ResumeSection />}
        {activeTab === "contact" && <ContactSection />}
      </main>

      <BackgroundBlur />
    </div>
  );
}

export default function Portfolio() {
  return (
    <Suspense>
      <PortfolioContent />
    </Suspense>
  );
}
