"use client";

import { Globe } from "lucide-react";
import { type Lang } from "@/lib/i18n";

interface LanguageToggleProps {
  lang: Lang;
  toggleLang: () => void;
}

export function LanguageToggle({ lang, toggleLang }: LanguageToggleProps) {
  return (
    <button
      onClick={toggleLang}
      className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 transition-all hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
      title={lang === "en" ? "Switch to Spanish" : "Cambiar a Ingles"}
    >
      <Globe className="h-4 w-4 transition-transform group-hover:rotate-12" />
      <span className="font-mono text-xs">{lang === "en" ? "ES" : "EN"}</span>
    </button>
  );
}
