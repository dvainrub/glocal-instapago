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
  Check,
  ArrowUpRight,
  Bot,
} from "lucide-react";
import {
  tools,
  type Category,
  type Tool,
  type RecommendationTier,
  type SkillLevel,
} from "@/data/tools";
import { ui } from "@/data/translations";
import { useLang } from "@/lib/useLang";
import { type Lang } from "@/lib/i18n";

// Linear-inspired category icons
const categoryIcons: Record<Category, React.ReactNode> = {
  automatizacion: <Zap className="h-3.5 w-3.5" />,
  agentes: <Bot className="h-3.5 w-3.5" />,
  conocimiento: <Search className="h-3.5 w-3.5" />,
  creatividad: <Presentation className="h-3.5 w-3.5" />,
  nocode: <Layers className="h-3.5 w-3.5" />,
  desarrollo: <Code2 className="h-3.5 w-3.5" />,
};

// Light theme category colors
const categoryColors: Record<Category, string> = {
  automatizacion: "bg-amber-50 text-amber-700 border-amber-200",
  agentes: "bg-teal-50 text-teal-700 border-teal-200",
  conocimiento: "bg-blue-50 text-blue-700 border-blue-200",
  creatividad: "bg-purple-50 text-purple-700 border-purple-200",
  nocode: "bg-pink-50 text-pink-700 border-pink-200",
  desarrollo: "bg-slate-100 text-slate-700 border-slate-200",
};

// Tier styling for light theme
const tierStyles: Record<NonNullable<RecommendationTier>, { bg: string; text: string; border: string }> = {
  tier1: {
    bg: "bg-gradient-to-r from-amber-50 to-yellow-50",
    text: "text-amber-700",
    border: "border-amber-200",
  },
  tier2: {
    bg: "bg-gradient-to-r from-emerald-50 to-green-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
  },
  tier3: {
    bg: "bg-gradient-to-r from-orange-50 to-amber-50",
    text: "text-orange-700",
    border: "border-orange-200",
  },
};

// Skill level styling
const levelStyles: Record<string, string> = {
  principiante: "bg-emerald-50 text-emerald-700 border-emerald-200",
  intermedio: "bg-yellow-50 text-yellow-700 border-yellow-200",
  avanzado: "bg-red-50 text-red-700 border-red-200",
};

function LanguageToggle({ lang, toggleLang }: { lang: Lang; toggleLang: () => void }) {
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

function ToolCard({ tool, lang }: { tool: Tool; lang: Lang }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const tierStyle = tool.tier ? tierStyles[tool.tier] : null;

  return (
    <motion.div
      layout
      className={`group relative overflow-hidden rounded-xl border bg-white transition-all duration-300 ${
        isExpanded
          ? "border-violet-300 shadow-lg shadow-violet-100"
          : "border-gray-200 hover:border-gray-300 hover:shadow-md"
      }`}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-transparent to-transparent" />
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative flex w-full items-start justify-between p-5 text-left"
      >
        <div className="flex-1 pr-4">
          {/* Tier + Category badges */}
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {tool.tier && tierStyle && (
              <span
                className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${tierStyle.bg} ${tierStyle.text} ${tierStyle.border}`}
                title={ui.tierDescriptions[tool.tier][lang]}
              >
                {tool.tier === "tier1" && <Sparkles className="h-3 w-3" />}
                {ui.tiers[tool.tier][lang]}
              </span>
            )}
            <span
              className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${categoryColors[tool.categoria]}`}
            >
              {categoryIcons[tool.categoria]}
              {ui.categories[tool.categoria][lang]}
            </span>
          </div>

          {/* Tool name */}
          <h3 className="text-base font-semibold text-gray-900 transition-colors group-hover:text-violet-700">
            {tool.nombre}
          </h3>

          {/* Short description */}
          <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
            {tool.descripcionCorta[lang]}
          </p>

          {/* Skill level badge */}
          <div className="mt-3">
            <span
              className={`inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[10px] ${levelStyles[tool.nivel]}`}
            >
              {ui.levels[tool.nivel][lang]}
            </span>
          </div>
        </div>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-gray-400 transition-colors group-hover:border-violet-200 group-hover:bg-violet-50 group-hover:text-violet-600"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="relative border-t border-gray-100 px-5 pb-5 pt-4">
              {/* Full description */}
              <p className="text-sm leading-relaxed text-gray-600">
                {tool.descripcion[lang]}
              </p>

              {/* Pricing Table */}
              <div className="mt-5">
                <h4 className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                  <span className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
                  {ui.card.pricing[lang]}
                  <span className="h-px flex-1 bg-gradient-to-l from-gray-200 to-transparent" />
                </h4>
                <div className="grid gap-1.5">
                  {tool.precios.map((tier, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 transition-colors hover:border-gray-200 hover:bg-gray-100"
                    >
                      <span className="font-mono text-xs font-medium text-gray-700">
                        {tier.plan}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-semibold text-violet-600">
                          {tier.precio}
                        </span>
                        <span className="max-w-[160px] truncate text-[11px] text-gray-500">
                          {tier.caracteristicas[lang]}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="mt-5">
                <h4 className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                  <span className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
                  {ui.card.useCases[lang]}
                  <span className="h-px flex-1 bg-gradient-to-l from-gray-200 to-transparent" />
                </h4>
                <ul className="space-y-1.5">
                  {tool.casosDeUso[lang].map((caso, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-violet-500" />
                      {caso}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why It's Good */}
              <div className="mt-5">
                <h4 className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                  <span className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
                  {ui.card.whyItsGood[lang]}
                  <span className="h-px flex-1 bg-gradient-to-l from-gray-200 to-transparent" />
                </h4>
                <div className="grid gap-2">
                  {tool.porQueEsBueno[lang].map((razon, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2.5"
                    >
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                        <Check className="h-3 w-3 text-emerald-600" />
                      </div>
                      <span className="text-sm text-emerald-800">{razon}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* External Link */}
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link mt-5 inline-flex items-center gap-2 rounded-lg border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700 transition-all hover:border-violet-300 hover:bg-violet-100 hover:text-violet-800"
              >
                {ui.card.visit[lang]} {tool.nombre}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FilterPill({
  active,
  onClick,
  children,
  count,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  count?: number;
  icon?: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-all ${
        active
          ? "border-violet-300 bg-violet-100 text-violet-700 shadow-sm"
          : "border-gray-200 bg-white text-gray-600 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
      }`}
    >
      {icon}
      {children}
      {count !== undefined && (
        <span className={`font-mono text-xs ${active ? "text-violet-600" : "text-gray-400"}`}>
          {count}
        </span>
      )}
    </button>
  );
}

function CatalogContent() {
  const { lang, toggleLang } = useLang();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedTier, setSelectedTier] = useState<RecommendationTier | "all">("all");
  const [selectedLevel, setSelectedLevel] = useState<SkillLevel | "all">("all");

  const categories = Object.keys(ui.categories) as Category[];
  const tiers: NonNullable<RecommendationTier>[] = ["tier1", "tier2", "tier3"];
  const levels: SkillLevel[] = ["principiante", "intermedio", "avanzado"];

  const filteredTools = tools.filter((t) => {
    if (selectedCategory && t.categoria !== selectedCategory) return false;
    if (selectedTier !== "all") {
      if (selectedTier === null && t.tier !== null) return false;
      if (selectedTier !== null && t.tier !== selectedTier) return false;
    }
    if (selectedLevel !== "all" && t.nivel !== selectedLevel) return false;
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
    <div className="relative min-h-screen bg-gray-50">
      {/* Subtle ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-violet-100/50 blur-[120px]" />
        <div className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-100/40 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-indigo-100/30 blur-[80px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
                {ui.header.title[lang]}
              </h1>
              <p className="mt-2 text-gray-500">
                {ui.header.subtitle[lang]}
              </p>
            </div>
            <LanguageToggle lang={lang} toggleLang={toggleLang} />
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="sticky top-0 z-20 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 py-4">
          {/* Tier Filters */}
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-gray-400">
              {ui.filters.recommendation[lang]}
            </span>
            <FilterPill
              active={selectedTier === "all"}
              onClick={() => setSelectedTier("all")}
            >
              {ui.filters.all[lang]}
            </FilterPill>
            {tiers.map((tier) => {
              const count = tools.filter((t) => t.tier === tier).length;
              if (count === 0) return null;
              return (
                <FilterPill
                  key={tier}
                  active={selectedTier === tier}
                  onClick={() => setSelectedTier(tier)}
                  count={count}
                  icon={tier === "tier1" ? <Sparkles className="h-3 w-3" /> : undefined}
                >
                  {ui.tiers[tier][lang]}
                </FilterPill>
              );
            })}
          </div>

          {/* Category Filters */}
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-gray-400">
              {ui.filters.category[lang]}
            </span>
            <FilterPill
              active={selectedCategory === null}
              onClick={() => setSelectedCategory(null)}
              count={tools.length}
            >
              {ui.filters.all[lang]}
            </FilterPill>
            {categories.map((cat) => {
              const count = tools.filter((t) => t.categoria === cat).length;
              return (
                <FilterPill
                  key={cat}
                  active={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                  count={count}
                  icon={categoryIcons[cat]}
                >
                  {ui.categories[cat][lang]}
                </FilterPill>
              );
            })}
          </div>

          {/* Level Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-gray-400">
              {ui.filters.level[lang]}
            </span>
            <FilterPill
              active={selectedLevel === "all"}
              onClick={() => setSelectedLevel("all")}
            >
              {ui.filters.all[lang]}
            </FilterPill>
            {levels.map((level) => {
              const count = tools.filter((t) => t.nivel === level).length;
              return (
                <FilterPill
                  key={level}
                  active={selectedLevel === level}
                  onClick={() => setSelectedLevel(level)}
                  count={count}
                >
                  {ui.levels[level][lang]}
                </FilterPill>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 py-8">
        {/* Results count */}
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-xs text-gray-400">
            {sortedTools.length} {sortedTools.length === 1 ? "tool" : "tools"}
          </span>
        </div>

        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {sortedTools.map((tool) => (
              <motion.div
                key={tool.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              >
                <ToolCard tool={tool} lang={lang} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {sortedTools.length === 0 && (
          <div className="py-16 text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <p className="text-gray-500">{ui.empty.noTools[lang]}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default function LinearDesign() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <CatalogContent />
    </Suspense>
  );
}
