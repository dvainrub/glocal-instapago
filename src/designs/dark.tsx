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
  Bot,
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

// Dark mode color schemes
const categoryIcons: Record<Category, React.ReactNode> = {
  automatizacion: <Zap className="h-4 w-4" />,
  agentes: <Bot className="h-4 w-4" />,
  conocimiento: <Search className="h-4 w-4" />,
  creatividad: <Presentation className="h-4 w-4" />,
  nocode: <Layers className="h-4 w-4" />,
  desarrollo: <Code2 className="h-4 w-4" />,
};

// Neon colors for categories
const categoryColors: Record<Category, { bg: string; text: string; glow: string; border: string }> = {
  automatizacion: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    glow: "shadow-amber-500/20",
    border: "border-amber-500/30"
  },
  agentes: {
    bg: "bg-teal-500/10",
    text: "text-teal-400",
    glow: "shadow-teal-500/20",
    border: "border-teal-500/30"
  },
  conocimiento: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    glow: "shadow-cyan-500/20",
    border: "border-cyan-500/30"
  },
  creatividad: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    glow: "shadow-purple-500/20",
    border: "border-purple-500/30"
  },
  nocode: {
    bg: "bg-pink-500/10",
    text: "text-pink-400",
    glow: "shadow-pink-500/20",
    border: "border-pink-500/30"
  },
  desarrollo: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    glow: "shadow-emerald-500/20",
    border: "border-emerald-500/30"
  },
};

// Tier colors with gradients
const tierStyles: Record<NonNullable<RecommendationTier>, { bg: string; text: string; border: string; glow: string }> = {
  tier1: {
    bg: "bg-gradient-to-r from-yellow-500/20 to-orange-500/20",
    text: "text-yellow-300",
    border: "border-yellow-500/40",
    glow: "shadow-yellow-500/30"
  },
  tier2: {
    bg: "bg-gradient-to-r from-slate-400/20 to-slate-300/20",
    text: "text-slate-300",
    border: "border-slate-400/40",
    glow: "shadow-slate-400/20"
  },
  tier3: {
    bg: "bg-gradient-to-r from-orange-500/15 to-amber-500/15",
    text: "text-orange-300",
    border: "border-orange-500/30",
    glow: "shadow-orange-500/20"
  },
};

// Dark mode level colors
const darkLevelColors: Record<string, string> = {
  principiante: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  intermedio: "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",
  avanzado: "bg-red-500/15 text-red-400 border border-red-500/30",
};

function LanguageToggle({ lang, toggleLang }: { lang: Lang; toggleLang: () => void }) {
  return (
    <motion.button
      onClick={toggleLang}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-gray-300 backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
      title={lang === "en" ? "Switch to Spanish" : "Cambiar a Ingles"}
    >
      <Globe className="h-4 w-4" />
      {lang === "en" ? "ES" : "EN"}
    </motion.button>
  );
}

function ToolCard({ tool, lang, index }: { tool: Tool; lang: Lang; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const catColor = categoryColors[tool.categoria];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <div className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 opacity-0 blur-sm transition-all duration-500 group-hover:from-cyan-500/30 group-hover:via-purple-500/30 group-hover:to-pink-500/30 group-hover:opacity-100`} />

      <div
        className={`relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#111111] transition-all duration-300 ${
          isExpanded ? "border-white/20" : "hover:border-white/15"
        }`}
      >
        {/* Subtle grid pattern overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50" />

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative flex w-full items-start justify-between p-5 text-left"
        >
          <div className="flex-1 pr-4">
            {/* Tier badge + Category badge */}
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {tool.tier && (
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold shadow-lg ${tierStyles[tool.tier].bg} ${tierStyles[tool.tier].text} ${tierStyles[tool.tier].border} ${tierStyles[tool.tier].glow}`}
                  title={ui.tierDescriptions[tool.tier][lang]}
                >
                  {tool.tier === "tier1" && <Sparkles className="h-3 w-3" />}
                  {ui.tiers[tool.tier][lang]}
                </motion.span>
              )}
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${catColor.bg} ${catColor.text} ${catColor.border}`}
              >
                {categoryIcons[tool.categoria]}
                {ui.categories[tool.categoria][lang]}
              </span>
            </div>

            {/* Tool name with gradient */}
            <h3 className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-lg font-bold text-transparent">
              {tool.nombre}
            </h3>

            {/* Short description */}
            <p className="mt-1.5 font-mono text-sm text-gray-400">{tool.descripcionCorta[lang]}</p>

            {/* Skill level badge */}
            <div className="mt-3">
              <span
                className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${darkLevelColors[tool.nivel]}`}
              >
                {ui.levels[tool.nivel][lang]}
              </span>
            </div>
          </div>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-5 w-5 flex-shrink-0 text-gray-500 transition-colors group-hover:text-gray-300" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="relative border-t border-white/[0.06] px-5 pb-5 pt-4">
                {/* Full description */}
                <p className="text-sm leading-relaxed text-gray-300">
                  {tool.descripcion[lang]}
                </p>

                {/* Pricing Table */}
                <div className="mt-5">
                  <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    {ui.card.pricing[lang]}
                  </h4>
                  <div className="grid gap-2">
                    {tool.precios.map((tier, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2"
                      >
                        <span className="font-mono text-sm font-medium text-gray-200">
                          {tier.plan}
                        </span>
                        <div className="text-right">
                          <span className="font-mono text-sm font-bold text-cyan-400">
                            {tier.precio}
                          </span>
                          <span className="ml-2 text-xs text-gray-500">
                            {tier.caracteristicas[lang]}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mt-5">
                  <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-purple-400">
                    {ui.card.useCases[lang]}
                  </h4>
                  <ul className="space-y-2">
                    {tool.casosDeUso[lang].map((caso, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                        {caso}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Why It's Good */}
                <div className="mt-5">
                  <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    {ui.card.whyItsGood[lang]}
                  </h4>
                  <div className="grid gap-2">
                    {tool.porQueEsBueno[lang].map((razon, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-2.5"
                      >
                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                          <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                        </div>
                        <span className="text-sm text-emerald-200">{razon}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* External Link */}
                <motion.a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-5 inline-flex items-center gap-2 rounded-lg border border-cyan-500/30 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-2 text-sm font-semibold text-cyan-300 shadow-lg shadow-cyan-500/10 transition-all hover:border-cyan-400/50 hover:shadow-cyan-500/20"
                >
                  {ui.card.visit[lang]} {tool.nombre}
                  <ExternalLink className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function CatalogContent() {
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

  // Sort by tier (tier1 first, then tier2, then tier3, then null)
  const sortedTools = [...filteredTools].sort((a, b) => {
    const tierOrder = { tier1: 0, tier2: 1, tier3: 2 };
    const aOrder = a.tier ? tierOrder[a.tier] : 3;
    const bOrder = b.tier ? tierOrder[b.tier] : 3;
    return aOrder - bOrder;
  });

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-pink-500/10 blur-[120px]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
      </div>

      {/* Header */}
      <header className="relative border-b border-white/[0.06] bg-black/30 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex items-start justify-between">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text font-mono text-3xl font-bold tracking-tight text-transparent md:text-4xl">
                {ui.header.title[lang]}
              </h1>
              <p className="mt-2 text-gray-400">
                {ui.header.subtitle[lang]}
              </p>
            </motion.div>
            <LanguageToggle lang={lang} toggleLang={toggleLang} />
          </div>
        </div>
      </header>

      {/* Filter Chips */}
      <div className="sticky top-0 z-10 border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 py-4">
          {/* Tier Filters */}
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="font-mono text-sm font-medium text-gray-500">{ui.filters.recommendation[lang]}</span>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedTier("all")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                selectedTier === "all"
                  ? "border border-cyan-500/50 bg-cyan-500/20 text-cyan-300 shadow-lg shadow-cyan-500/20"
                  : "border border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:bg-white/10 hover:text-gray-300"
              }`}
            >
              {ui.filters.all[lang]}
            </motion.button>
            {tiers.map((tier) => {
              const count = tools.filter((t) => t.tier === tier).length;
              if (count === 0) return null;
              return (
                <motion.button
                  key={tier}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedTier(tier)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    selectedTier === tier
                      ? `border ${tierStyles[tier].border} ${tierStyles[tier].bg} ${tierStyles[tier].text} shadow-lg ${tierStyles[tier].glow}`
                      : "border border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:bg-white/10 hover:text-gray-300"
                  }`}
                >
                  {tier === "tier1" && selectedTier === tier && <Sparkles className="h-3 w-3" />}
                  {ui.tiers[tier][lang]} ({count})
                </motion.button>
              );
            })}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-sm font-medium text-gray-500">{ui.filters.category[lang]}</span>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                selectedCategory === null
                  ? "border border-cyan-500/50 bg-cyan-500/20 text-cyan-300 shadow-lg shadow-cyan-500/20"
                  : "border border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:bg-white/10 hover:text-gray-300"
              }`}
            >
              {ui.filters.all[lang]} ({tools.length})
            </motion.button>
            {categories.map((cat) => {
              const count = tools.filter((t) => t.categoria === cat).length;
              const catColor = categoryColors[cat];
              return (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? `border ${catColor.border} ${catColor.bg} ${catColor.text} shadow-lg ${catColor.glow}`
                      : "border border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:bg-white/10 hover:text-gray-300"
                  }`}
                >
                  {categoryIcons[cat]}
                  {ui.categories[cat][lang]} ({count})
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <main className="relative mx-auto max-w-6xl px-4 py-8">
        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {sortedTools.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} lang={lang} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {sortedTools.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center"
          >
            <p className="font-mono text-gray-500">{ui.empty.noTools[lang]}</p>
          </motion.div>
        )}
      </main>

      {/* Footer gradient fade */}
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </div>
  );
}

export default function DarkDesign() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-gray-500"
        >
          Loading...
        </motion.div>
      </div>
    }>
      <CatalogContent />
    </Suspense>
  );
}
