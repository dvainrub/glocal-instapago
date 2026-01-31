"use client";

import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ExternalLink,
  Sparkles,
  Zap,
  Search,
  Presentation,
  Code2,
  Layers,
  Globe,
  Star,
  Award,
  CheckCircle2,
} from "lucide-react";
import {
  tools,
  levelColors,
  type Category,
  type Tool,
  type RecommendationTier,
} from "@/data/tools";
import { ui } from "@/data/translations";
import { useLang } from "@/lib/useLang";
import { type Lang } from "@/lib/i18n";

const categoryIcons: Record<Category, React.ReactNode> = {
  automatizacion: <Zap className="h-3.5 w-3.5" />,
  agentes: <Code2 className="h-3.5 w-3.5" />,
  conocimiento: <Search className="h-3.5 w-3.5" />,
  creatividad: <Presentation className="h-3.5 w-3.5" />,
  nocode: <Layers className="h-3.5 w-3.5" />,
  desarrollo: <Code2 className="h-3.5 w-3.5" />,
};

const categoryColors: Record<Category, string> = {
  automatizacion: "bg-amber-50 text-amber-600 border-amber-200",
  agentes: "bg-teal-50 text-teal-600 border-teal-200",
  conocimiento: "bg-blue-50 text-blue-600 border-blue-200",
  creatividad: "bg-purple-50 text-purple-600 border-purple-200",
  nocode: "bg-pink-50 text-pink-600 border-pink-200",
  desarrollo: "bg-slate-50 text-slate-600 border-slate-200",
};

const tierIcons: Record<NonNullable<RecommendationTier>, React.ReactNode> = {
  tier1: <Star className="h-3.5 w-3.5" />,
  tier2: <Award className="h-3.5 w-3.5" />,
  tier3: <CheckCircle2 className="h-3.5 w-3.5" />,
};

const tierStyles: Record<NonNullable<RecommendationTier>, string> = {
  tier1: "text-amber-600",
  tier2: "text-slate-500",
  tier3: "text-orange-500",
};

function LanguageToggle({ lang, toggleLang }: { lang: Lang; toggleLang: () => void }) {
  return (
    <button
      onClick={toggleLang}
      className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-sm font-medium text-gray-700 backdrop-blur-sm transition-all hover:bg-black/10"
      title={lang === "en" ? "Switch to Spanish" : "Cambiar a Ingles"}
    >
      <Globe className="h-4 w-4" />
      <span>{lang === "en" ? "ES" : "EN"}</span>
    </button>
  );
}

function ToolCard({ tool, lang }: { tool: Tool; lang: Lang }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="group rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
      style={{
        boxShadow: isExpanded
          ? "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
          : "0 4px 20px -4px rgba(0, 0, 0, 0.08)",
      }}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-start justify-between p-6 text-left"
      >
        <div className="flex-1 pr-4">
          {/* Top row: Category pill and tier */}
          <div className="mb-4 flex items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${categoryColors[tool.categoria]}`}
            >
              {categoryIcons[tool.categoria]}
              {ui.categories[tool.categoria][lang]}
            </span>
            {tool.tier && (
              <span
                className={`inline-flex items-center gap-1 text-xs font-medium ${tierStyles[tool.tier]}`}
                title={ui.tierDescriptions[tool.tier][lang]}
              >
                {tierIcons[tool.tier]}
                {ui.tiers[tool.tier][lang]}
              </span>
            )}
          </div>

          {/* Tool name - large and bold */}
          <h3 className="text-xl font-semibold tracking-tight text-gray-900">
            {tool.nombre}
          </h3>

          {/* Short description - thin text */}
          <p className="mt-2 text-base font-light text-gray-500">
            {tool.descripcionCorta[lang]}
          </p>

          {/* Skill level - subtle */}
          <div className="mt-4">
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${levelColors[tool.nivel]}`}
            >
              {ui.levels[tool.nivel][lang]}
            </span>
          </div>
        </div>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="mt-1 flex-shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-gray-300 transition-colors group-hover:text-gray-500" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-gray-100 px-6 pb-6 pt-5">
              {/* Full description */}
              <p className="text-base font-light leading-relaxed text-gray-600">
                {tool.descripcion[lang]}
              </p>

              {/* Pricing - Clean table */}
              <div className="mt-8">
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {ui.card.pricing[lang]}
                </h4>
                <div className="space-y-2">
                  {tool.precios.map((tier, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3"
                    >
                      <span className="text-sm font-medium text-gray-900">
                        {tier.plan}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-gray-900">
                          {tier.precio}
                        </span>
                        <span className="text-xs text-gray-400">
                          {tier.caracteristicas[lang]}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="mt-8">
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {ui.card.useCases[lang]}
                </h4>
                <ul className="space-y-3">
                  {tool.casosDeUso[lang].map((caso, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm font-light text-gray-600"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-300" />
                      {caso}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why It's Good */}
              <div className="mt-8">
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {ui.card.whyItsGood[lang]}
                </h4>
                <div className="space-y-3">
                  {tool.porQueEsBueno[lang].map((razon, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-xl bg-gradient-to-r from-blue-50/80 to-blue-50/30 px-4 py-3"
                    >
                      <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#007AFF]" />
                      <span className="text-sm font-light text-gray-700">{razon}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button - Apple blue */}
              <div className="mt-8">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#007AFF] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#0066CC] hover:shadow-lg hover:shadow-blue-500/25"
                >
                  {ui.card.visit[lang]} {tool.nombre}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function AppleCatalogContent() {
  const { lang, toggleLang } = useLang();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedTier, setSelectedTier] = useState<RecommendationTier | "all">("all");

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

  const sortedTools = [...filteredTools].sort((a, b) => {
    const tierOrder = { tier1: 0, tier2: 1, tier3: 2 };
    const aOrder = a.tier ? tierOrder[a.tier] : 3;
    const bOrder = b.tier ? tierOrder[b.tier] : 3;
    return aOrder - bOrder;
  });

  return (
    <div className="min-h-screen bg-[#FBFBFD]" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', sans-serif" }}>
      {/* Hero Header */}
      <header className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-12">
          {/* Language toggle in corner */}
          <div className="flex justify-end">
            <LanguageToggle lang={lang} toggleLang={toggleLang} />
          </div>

          {/* Hero text - centered, large */}
          <div className="mt-12 text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                {ui.header.title[lang]}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl font-light text-gray-500">
              {ui.header.subtitle[lang]}
            </p>
          </div>
        </div>
      </header>

      {/* Filters - Sticky, minimal */}
      <div className="sticky top-0 z-10 border-b border-gray-200/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-5xl px-6 py-4">
          {/* Tier Filters */}
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-400">
              {ui.filters.recommendation[lang]}
            </span>
            <button
              onClick={() => setSelectedTier("all")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                selectedTier === "all"
                  ? "bg-[#007AFF] text-white shadow-md shadow-blue-500/20"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {ui.filters.all[lang]}
            </button>
            {tiers.map((tier) => {
              const count = tools.filter((t) => t.tier === tier).length;
              if (count === 0) return null;
              return (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    selectedTier === tier
                      ? "bg-[#007AFF] text-white shadow-md shadow-blue-500/20"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {tierIcons[tier]}
                  {ui.tiers[tier][lang]}
                  <span className="ml-1 text-xs opacity-60">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-400">
              {ui.filters.category[lang]}
            </span>
            <button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                selectedCategory === null
                  ? "bg-[#007AFF] text-white shadow-md shadow-blue-500/20"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {ui.filters.all[lang]}
              <span className="ml-1 text-xs opacity-60">({tools.length})</span>
            </button>
            {categories.map((cat) => {
              const count = tools.filter((t) => t.categoria === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-[#007AFF] text-white shadow-md shadow-blue-500/20"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {categoryIcons[cat]}
                  {ui.categories[cat][lang]}
                  <span className="ml-1 text-xs opacity-60">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <main className="mx-auto max-w-5xl px-6 py-12">
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {sortedTools.map((tool) => (
              <motion.div
                key={tool.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <ToolCard tool={tool} lang={lang} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {sortedTools.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-lg font-light text-gray-400">
              {ui.empty.noTools[lang]}
            </p>
          </div>
        )}
      </main>

      {/* Footer spacer */}
      <div className="h-16" />
    </div>
  );
}

export default function AppleDesign() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FBFBFD]" />}>
      <AppleCatalogContent />
    </Suspense>
  );
}
