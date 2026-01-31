"use client";

import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ExternalLink,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import {
  tools,
  type Category,
  type Tool,
  type RecommendationTier,
} from "@/data/tools";
import { ui } from "@/data/translations";
import { useLang } from "@/lib/useLang";
import { type Lang } from "@/lib/i18n";

// Monospace tier badges with minimal styling
const tierLabels: Record<NonNullable<RecommendationTier>, { en: string; es: string }> = {
  tier1: { en: "01", es: "01" },
  tier2: { en: "02", es: "02" },
  tier3: { en: "03", es: "03" },
};

// Category abbreviations for minimal display
const categoryAbbr: Record<Category, string> = {
  automatizacion: "AUT",
  agentes: "AGT",
  conocimiento: "KNW",
  creatividad: "CRE",
  nocode: "NCO",
  desarrollo: "DEV",
};

function LanguageToggle({ lang, toggleLang }: { lang: Lang; toggleLang: () => void }) {
  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500 transition-colors hover:text-neutral-900"
      title={lang === "en" ? "Switch to Spanish" : "Cambiar a Ingles"}
    >
      <Globe className="h-3.5 w-3.5" />
      <span className={lang === "en" ? "text-neutral-900" : ""}>EN</span>
      <span className="text-neutral-300">/</span>
      <span className={lang === "es" ? "text-neutral-900" : ""}>ES</span>
    </button>
  );
}

function ToolRow({ tool, lang, isLast }: { tool: Tool; lang: Lang; isLast: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`${!isLast ? "border-b border-neutral-200" : ""}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group flex w-full items-center gap-6 py-6 text-left transition-colors hover:bg-neutral-50 px-6 -mx-6"
      >
        {/* Tier number */}
        <div className="w-8 flex-shrink-0">
          {tool.tier && (
            <span className="font-mono text-sm text-neutral-400">
              {tierLabels[tool.tier][lang]}
            </span>
          )}
        </div>

        {/* Tool name */}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors truncate">
            {tool.nombre}
          </h3>
          <p className="mt-1 text-sm text-neutral-500 truncate">
            {tool.descripcionCorta[lang]}
          </p>
        </div>

        {/* Category badge */}
        <div className="hidden sm:block flex-shrink-0">
          <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 border border-neutral-200 px-2 py-1">
            {categoryAbbr[tool.categoria]}
          </span>
        </div>

        {/* Level */}
        <div className="hidden md:block w-20 flex-shrink-0 text-right">
          <span className="font-mono text-xs text-neutral-400">
            {ui.levels[tool.nivel][lang]}
          </span>
        </div>

        {/* Expand icon */}
        <ChevronRight
          className={`h-4 w-4 flex-shrink-0 text-neutral-300 transition-transform duration-200 ${
            isExpanded ? "rotate-90" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 pt-2">
              {/* Full description */}
              <p className="text-base leading-relaxed text-neutral-700 max-w-3xl">
                {tool.descripcion[lang]}
              </p>

              {/* Two column layout for details */}
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                {/* Left column */}
                <div className="space-y-8">
                  {/* Pricing */}
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-4">
                      {ui.card.pricing[lang]}
                    </h4>
                    <div className="space-y-2">
                      {tool.precios.map((tier, idx) => (
                        <div
                          key={idx}
                          className="flex items-baseline justify-between border-b border-dashed border-neutral-200 pb-2"
                        >
                          <span className="font-mono text-sm text-neutral-600">
                            {tier.plan}
                          </span>
                          <div className="text-right">
                            <span className="font-mono text-sm font-medium text-neutral-900">
                              {tier.precio}
                            </span>
                            <span className="ml-3 text-xs text-neutral-400">
                              {tier.caracteristicas[lang]}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Why it's good */}
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-4">
                      {ui.card.whyItsGood[lang]}
                    </h4>
                    <ul className="space-y-3">
                      {tool.porQueEsBueno[lang].map((razon, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700">
                          <span className="font-mono text-[10px] text-neutral-400 mt-1">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span>{razon}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right column */}
                <div>
                  {/* Use Cases */}
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-4">
                      {ui.card.useCases[lang]}
                    </h4>
                    <ul className="space-y-3">
                      {tool.casosDeUso[lang].map((caso, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-neutral-600">
                          <span className="text-neutral-300">-</span>
                          <span>{caso}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* External Link */}
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-600 transition-colors hover:text-neutral-900"
                >
                  {ui.card.visit[lang]} {tool.nombre}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Grid card for alternative view
function ToolCard({ tool, lang }: { tool: Tool; lang: Lang }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="border border-neutral-200 bg-white"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full flex-col p-6 text-left transition-colors hover:bg-neutral-50"
      >
        {/* Header */}
        <div className="flex items-start justify-between w-full mb-4">
          {tool.tier && (
            <span className="font-mono text-2xl font-light text-neutral-300">
              {tierLabels[tool.tier][lang]}
            </span>
          )}
          <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 border border-neutral-200 px-2 py-1">
            {categoryAbbr[tool.categoria]}
          </span>
        </div>

        {/* Tool name */}
        <h3 className="text-lg font-medium text-neutral-900 mb-2">
          {tool.nombre}
        </h3>

        {/* Short description */}
        <p className="text-sm text-neutral-500 mb-4 line-clamp-2">
          {tool.descripcionCorta[lang]}
        </p>

        {/* Level */}
        <div className="flex items-center justify-between w-full pt-4 border-t border-neutral-100">
          <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
            {ui.levels[tool.nivel][lang]}
          </span>
          <ChevronRight
            className={`h-4 w-4 text-neutral-300 transition-transform duration-200 ${
              isExpanded ? "rotate-90" : ""
            }`}
          />
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-neutral-200 p-6 pt-4">
              {/* Full description */}
              <p className="text-sm leading-relaxed text-neutral-700 mb-6">
                {tool.descripcion[lang]}
              </p>

              {/* Pricing */}
              <div className="mb-6">
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-3">
                  {ui.card.pricing[lang]}
                </h4>
                <div className="space-y-2">
                  {tool.precios.slice(0, 3).map((tier, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="font-mono text-neutral-600">{tier.plan}</span>
                      <span className="font-mono font-medium text-neutral-900">{tier.precio}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why it's good - first 2 */}
              <div className="mb-6">
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-3">
                  {ui.card.whyItsGood[lang]}
                </h4>
                <ul className="space-y-2">
                  {tool.porQueEsBueno[lang].slice(0, 2).map((razon, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600">
                      <span className="font-mono text-[10px] text-neutral-300 mt-0.5">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="line-clamp-2">{razon}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* External Link */}
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-neutral-600 transition-colors hover:text-neutral-900"
              >
                {ui.card.visit[lang]}
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function MinimalCatalogContent() {
  const { lang, toggleLang } = useLang();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedTier, setSelectedTier] = useState<RecommendationTier | "all">("all");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  const categories = Object.keys(ui.categories) as Category[];
  const tiers: NonNullable<RecommendationTier>[] = ["tier1", "tier2", "tier3"];

  const filteredTools = tools.filter((t) => {
    if (selectedCategory && t.categoria !== selectedCategory) return false;
    if (selectedTier !== "all") {
      if (selectedTier === null && t.tier !== null) return false;
      if (selectedTier !== null && t.tier !== selectedTier) return false;
    }
    return true;
  });

  // Sort by tier
  const sortedTools = [...filteredTools].sort((a, b) => {
    const tierOrder = { tier1: 0, tier2: 1, tier3: 2 };
    const aOrder = a.tier ? tierOrder[a.tier] : 3;
    const bOrder = b.tier ? tierOrder[b.tier] : 3;
    return aOrder - bOrder;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-light tracking-tight text-neutral-900">
                {ui.header.title[lang]}
              </h1>
              <p className="mt-4 text-base text-neutral-500 max-w-xl">
                {ui.header.subtitle[lang]}
              </p>
            </div>
            <LanguageToggle lang={lang} toggleLang={toggleLang} />
          </div>

          {/* Stats */}
          <div className="mt-12 flex items-center gap-12">
            <div>
              <span className="font-mono text-4xl font-light text-neutral-900">
                {tools.length}
              </span>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                {lang === "en" ? "Tools" : "Herramientas"}
              </p>
            </div>
            <div className="h-12 w-px bg-neutral-200" />
            <div>
              <span className="font-mono text-4xl font-light text-neutral-900">
                {categories.length}
              </span>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                {lang === "en" ? "Categories" : "Categorias"}
              </p>
            </div>
            <div className="h-12 w-px bg-neutral-200" />
            <div>
              <span className="font-mono text-4xl font-light text-neutral-900">
                {tools.filter((t) => t.tier === "tier1").length}
              </span>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                Top Picks
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="sticky top-0 z-10 border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <div className="flex flex-wrap items-center gap-6">
            {/* Tier filters */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                {ui.filters.recommendation[lang]}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setSelectedTier("all")}
                  className={`px-3 py-1.5 font-mono text-xs transition-colors ${
                    selectedTier === "all"
                      ? "bg-neutral-900 text-white"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  {ui.filters.all[lang]}
                </button>
                {tiers.map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setSelectedTier(tier)}
                    className={`px-3 py-1.5 font-mono text-xs transition-colors ${
                      selectedTier === tier
                        ? "bg-neutral-900 text-white"
                        : "text-neutral-500 hover:text-neutral-900"
                    }`}
                  >
                    {tierLabels[tier][lang]}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-4 w-px bg-neutral-200" />

            {/* Category filters */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                {ui.filters.category[lang]}
              </span>
              <div className="flex items-center gap-1 flex-wrap">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-3 py-1.5 font-mono text-xs transition-colors ${
                    selectedCategory === null
                      ? "bg-neutral-900 text-white"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  {ui.filters.all[lang]}
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 font-mono text-xs transition-colors ${
                      selectedCategory === cat
                        ? "bg-neutral-900 text-white"
                        : "text-neutral-500 hover:text-neutral-900"
                    }`}
                  >
                    {categoryAbbr[cat]}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1" />

            {/* View toggle */}
            <div className="flex items-center gap-1 border border-neutral-200">
              <button
                onClick={() => setViewMode("list")}
                className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors ${
                  viewMode === "list"
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-400 hover:text-neutral-900"
                }`}
              >
                List
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors ${
                  viewMode === "grid"
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-400 hover:text-neutral-900"
                }`}
              >
                Grid
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tools */}
      <main className="mx-auto max-w-5xl px-6 py-8">
        {/* Results count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="font-mono text-xs text-neutral-400">
            {lang === "en" ? "Showing" : "Mostrando"} {sortedTools.length} {lang === "en" ? "tools" : "herramientas"}
          </p>
        </div>

        {viewMode === "list" ? (
          /* List View */
          <div className="border-t border-neutral-200">
            {sortedTools.map((tool, idx) => (
              <ToolRow
                key={tool.id}
                tool={tool}
                lang={lang}
                isLast={idx === sortedTools.length - 1}
              />
            ))}
          </div>
        ) : (
          /* Grid View */
          <motion.div
            layout
            className="grid gap-4 sm:grid-cols-2"
          >
            <AnimatePresence mode="popLayout">
              {sortedTools.map((tool) => (
                <motion.div
                  key={tool.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <ToolCard tool={tool} lang={lang} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {sortedTools.length === 0 && (
          <div className="py-24 text-center">
            <p className="font-mono text-sm text-neutral-400">
              {ui.empty.noTools[lang]}
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
            {lang === "en" ? "Curated by" : "Curado por"} Rebundle
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function MinimalDesign() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <MinimalCatalogContent />
    </Suspense>
  );
}
