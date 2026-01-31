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
  X,
  Star,
} from "lucide-react";
import {
  tools,
  levelColors,
  tierColors,
  type Category,
  type Tool,
  type RecommendationTier,
} from "@/data/tools";
import { ui } from "@/data/translations";
import { useLang } from "@/lib/useLang";
import { type Lang } from "@/lib/i18n";

// Category icons
const categoryIcons: Record<Category, React.ReactNode> = {
  automatizacion: <Zap className="h-4 w-4" />,
  agentes: <Code2 className="h-4 w-4" />,
  conocimiento: <Search className="h-4 w-4" />,
  creatividad: <Presentation className="h-4 w-4" />,
  nocode: <Layers className="h-4 w-4" />,
  desarrollo: <Code2 className="h-4 w-4" />,
};

// Category gradient colors for bento cards
const categoryGradients: Record<Category, string> = {
  automatizacion: "from-amber-500/20 to-orange-500/10",
  agentes: "from-teal-500/20 to-cyan-500/10",
  conocimiento: "from-blue-500/20 to-indigo-500/10",
  creatividad: "from-purple-500/20 to-pink-500/10",
  nocode: "from-pink-500/20 to-rose-500/10",
  desarrollo: "from-slate-500/20 to-gray-500/10",
};

// Category accent colors
const categoryAccents: Record<Category, string> = {
  automatizacion: "text-amber-600",
  agentes: "text-teal-600",
  conocimiento: "text-blue-600",
  creatividad: "text-purple-600",
  nocode: "text-pink-600",
  desarrollo: "text-slate-600",
};

const categoryBorders: Record<Category, string> = {
  automatizacion: "border-amber-200/50",
  agentes: "border-teal-200/50",
  conocimiento: "border-blue-200/50",
  creatividad: "border-purple-200/50",
  nocode: "border-pink-200/50",
  desarrollo: "border-slate-200/50",
};

function LanguageToggle({ lang, toggleLang }: { lang: Lang; toggleLang: () => void }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLang}
      className="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-4 py-2 text-sm font-medium text-gray-700 backdrop-blur-md transition-all hover:bg-white/80 border border-white/50 shadow-sm"
      title={lang === "en" ? "Switch to Spanish" : "Cambiar a Ingles"}
    >
      <Globe className="h-4 w-4" />
      {lang === "en" ? "ES" : "EN"}
    </motion.button>
  );
}

// Expanded Modal for tool details
function ToolModal({
  tool,
  lang,
  onClose
}: {
  tool: Tool;
  lang: Lang;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white/95 backdrop-blur-xl shadow-2xl border border-white/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100/80 hover:bg-gray-200/80 transition-colors z-10"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        {/* Header with gradient */}
        <div className={`bg-gradient-to-br ${categoryGradients[tool.categoria]} p-8 pb-6`}>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {tool.tier && (
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold ${tierColors[tool.tier]}`}
              >
                <Star className="h-3.5 w-3.5" />
                {ui.tiers[tool.tier][lang]}
              </span>
            )}
            <span
              className={`inline-flex items-center gap-1.5 rounded-full bg-white/60 backdrop-blur-sm px-3 py-1.5 text-xs font-medium ${categoryAccents[tool.categoria]}`}
            >
              {categoryIcons[tool.categoria]}
              {ui.categories[tool.categoria][lang]}
            </span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-2">{tool.nombre}</h2>
          <p className="text-gray-700 leading-relaxed">{tool.descripcion[lang]}</p>

          <div className="mt-4">
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${levelColors[tool.nivel]}`}
            >
              {ui.levels[tool.nivel][lang]}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 pt-6 space-y-6">
          {/* Pricing Table */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
              {ui.card.pricing[lang]}
            </h4>
            <div className="grid gap-2">
              {tool.precios.map((tier, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-xl bg-gray-50/80 backdrop-blur-sm px-4 py-3 border border-gray-100"
                >
                  <span className="text-sm font-medium text-gray-900">
                    {tier.plan}
                  </span>
                  <div className="text-right">
                    <span className="text-sm font-bold text-gray-900">
                      {tier.precio}
                    </span>
                    <span className="ml-2 text-xs text-gray-500">
                      {tier.caracteristicas[lang]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
              {ui.card.useCases[lang]}
            </h4>
            <ul className="space-y-2">
              {tool.casosDeUso[lang].map((caso, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                  {caso}
                </li>
              ))}
            </ul>
          </div>

          {/* Why It's Good */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
              {ui.card.whyItsGood[lang]}
            </h4>
            <div className="grid gap-2">
              {tool.porQueEsBueno[lang].map((razon, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-xl bg-emerald-50/80 backdrop-blur-sm px-4 py-3 border border-emerald-100"
                >
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <Sparkles className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-sm text-emerald-900">{razon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* External Link */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 w-full"
          >
            {ui.card.visit[lang]} {tool.nombre}
            <ExternalLink className="h-4 w-4" />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Bento Card Component
function BentoCard({
  tool,
  lang,
  isLarge,
  onClick
}: {
  tool: Tool;
  lang: Lang;
  isLarge: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 }
      }}
      onClick={onClick}
      className={`
        relative cursor-pointer group
        rounded-2xl overflow-hidden
        bg-white/60 backdrop-blur-md
        border ${categoryBorders[tool.categoria]}
        shadow-sm hover:shadow-xl
        transition-shadow duration-300
        ${isLarge ? "md:col-span-2" : "col-span-1"}
      `}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${categoryGradients[tool.categoria]} opacity-60 group-hover:opacity-80 transition-opacity`} />

      {/* Content */}
      <div className="relative p-6 h-full flex flex-col">
        {/* Badges row */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {tool.tier && (
            <span
              className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold ${tierColors[tool.tier]} backdrop-blur-sm`}
            >
              {tool.tier === "tier1" && <Star className="h-3 w-3" />}
              {ui.tiers[tool.tier][lang]}
            </span>
          )}
          <span
            className={`inline-flex items-center gap-1.5 rounded-full bg-white/50 backdrop-blur-sm px-2.5 py-1 text-xs font-medium ${categoryAccents[tool.categoria]}`}
          >
            {categoryIcons[tool.categoria]}
            {ui.categories[tool.categoria][lang]}
          </span>
        </div>

        {/* Tool name */}
        <h3 className={`font-bold text-gray-900 mb-2 ${isLarge ? "text-2xl" : "text-lg"}`}>
          {tool.nombre}
        </h3>

        {/* Description */}
        <p className={`text-gray-600 leading-relaxed flex-grow ${isLarge ? "text-base" : "text-sm line-clamp-2"}`}>
          {isLarge ? tool.descripcion[lang] : tool.descripcionCorta[lang]}
        </p>

        {/* Bottom row */}
        <div className="mt-4 flex items-center justify-between">
          <span
            className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${levelColors[tool.nivel]}`}
          >
            {ui.levels[tool.nivel][lang]}
          </span>

          <div className="flex items-center gap-1 text-gray-400 text-xs group-hover:text-gray-600 transition-colors">
            <span>{lang === "en" ? "View details" : "Ver detalles"}</span>
            <ChevronDown className="h-4 w-4 -rotate-90" />
          </div>
        </div>

        {/* Large card extras - key features */}
        {isLarge && (
          <div className="mt-4 pt-4 border-t border-gray-200/50">
            <div className="flex flex-wrap gap-2">
              {tool.porQueEsBueno[lang].slice(0, 2).map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-gray-700"
                >
                  <Sparkles className="h-3 w-3 text-emerald-500 flex-shrink-0" />
                  <span className="line-clamp-1">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Filter Chip Component
function FilterChip({
  active,
  onClick,
  children,
  count
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  count?: number;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium
        transition-all duration-200 border
        ${active
          ? "bg-gray-900 text-white border-gray-900 shadow-md"
          : "bg-white/60 text-gray-700 border-white/50 hover:bg-white/80 backdrop-blur-sm"
        }
      `}
    >
      {children}
      {count !== undefined && (
        <span className={`text-xs ${active ? "text-gray-300" : "text-gray-400"}`}>
          ({count})
        </span>
      )}
    </motion.button>
  );
}

function BentoContent() {
  const { lang, toggleLang } = useLang();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedTier, setSelectedTier] = useState<RecommendationTier | "all">("all");
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>

      {/* Header with glassmorphism */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/70 border-b border-white/50 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent"
              >
                {ui.header.title[lang]}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-2 text-gray-600"
              >
                {ui.header.subtitle[lang]}
              </motion.p>
            </div>
            <LanguageToggle lang={lang} toggleLang={toggleLang} />
          </div>

          {/* Filter Chips */}
          <div className="space-y-3">
            {/* Tier Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-gray-500 mr-2">
                {ui.filters.recommendation[lang]}
              </span>
              <FilterChip
                active={selectedTier === "all"}
                onClick={() => setSelectedTier("all")}
              >
                {ui.filters.all[lang]}
              </FilterChip>
              {tiers.map((tier) => {
                const count = tools.filter((t) => t.tier === tier).length;
                if (count === 0) return null;
                return (
                  <FilterChip
                    key={tier}
                    active={selectedTier === tier}
                    onClick={() => setSelectedTier(tier)}
                    count={count}
                  >
                    {ui.tiers[tier][lang]}
                  </FilterChip>
                );
              })}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-gray-500 mr-2">
                {ui.filters.category[lang]}
              </span>
              <FilterChip
                active={selectedCategory === null}
                onClick={() => setSelectedCategory(null)}
                count={tools.length}
              >
                {ui.filters.all[lang]}
              </FilterChip>
              {categories.map((cat) => {
                const count = tools.filter((t) => t.categoria === cat).length;
                return (
                  <FilterChip
                    key={cat}
                    active={selectedCategory === cat}
                    onClick={() => setSelectedCategory(cat)}
                    count={count}
                  >
                    <span className={categoryAccents[cat]}>
                      {categoryIcons[cat]}
                    </span>
                    {ui.categories[cat][lang]}
                  </FilterChip>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Bento Grid */}
      <main className="relative mx-auto max-w-7xl px-4 py-8">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {sortedTools.map((tool) => (
              <BentoCard
                key={tool.id}
                tool={tool}
                lang={lang}
                isLarge={tool.tier === "tier1"}
                onClick={() => setSelectedTool(tool)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {sortedTools.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg">{ui.empty.noTools[lang]}</p>
          </motion.div>
        )}
      </main>

      {/* Tool Detail Modal */}
      <AnimatePresence>
        {selectedTool && (
          <ToolModal
            tool={selectedTool}
            lang={lang}
            onClose={() => setSelectedTool(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BentoDesign() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <BentoContent />
    </Suspense>
  );
}
