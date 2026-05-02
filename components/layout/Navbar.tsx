"use client";

type NavbarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  scrolled: boolean;
};

const tabs = [
  { key: "about", label: "Hakkımda" },
  { key: "resume", label: "Özgeçmiş" },
  { key: "contact", label: "İletişim" },
];

export default function Navbar({ activeTab, setActiveTab, scrolled }: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-[#030712]/90 backdrop-blur-lg border-slate-800 py-4 shadow-2xl"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent cursor-pointer">
          Samet Öçsoy
        </span>
        <div className="flex gap-6 md:gap-8 text-sm font-medium">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`cursor-pointer transition-all duration-300 ${
                activeTab === key
                  ? "text-blue-400 scale-105"
                  : "text-slate-400 hover:text-blue-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
