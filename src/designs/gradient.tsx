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
  Trophy,
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

// Vibrant gradient colors for categories
const categoryGradients: Record<Category, string> = {
  automatizacion: "from-amber-400 via-orange-500 to-rose-500",
  agentes: "from-teal-400 via-cyan-500 to-blue-500",
  conocimiento: "from-blue-400 via-indigo-500 to-purple-500",
  creatividad: "from-purple-400 via-pink-500 to-rose-500",
  nocode: "from-pink-400 via-rose-500 to-orange-500",
  desarrollo: "from-slate-400 via-zinc-500 to-gray-600",
};

const categoryIcons: Record<Category, React.ReactNode> = {
  automatizacion: <Zap className="h-4 w-4" />,
  agentes: <Code2 className="h-4 w-4" />,
  conocimiento: <Search className="h-4 w-4" />,
  creatividad: <Presentation className="h-4 w-4" />,
  nocode: <Layers className="h-4 w-4" />,
  desarrollo: <Code2 className="h-4 w-4" />,
};

// Tier gradients and icons
const tierConfig: Record<
  NonNullable<RecommendationTier>,
  { gradient: string; icon: React.ReactNode; shadow: string }
> = {
  tier1: {
    gradient: "from-amber-400 via-yellow-500 to-orange-500",
    icon: <Trophy className="h-3.5 w-3.5" />,
    shadow: "shadow-amber-500/30",
  },
  tier2: {
    gradient: "from-slate-300 via-gray-400 to-zinc-500",
    icon: <Award className="h-3.5 w-3.5" />,
    shadow: "shadow-gray-500/30",
  },
  tier3: {
    gradient: "from-orange-300 via-amber-400 to-yellow-500",
    icon: <Star className="h-3.5 w-3.5" />,
    shadow: "shadow-orange-500/30",
  },
};

// Animated gradient mesh background
function GradientMeshBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-pink-50 to-orange-100" />

      {/* Animated mesh blobs */}
      <motion.div
        className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-purple-400/40 via-pink-400/30 to-transparent blur-3xl"
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-blue-400/40 via-cyan-400/30 to-transparent blur-3xl"
        animate={{
          x: [0, -80, -40, 0],
          y: [0, 80, 40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-1/4 left-1/3 h-[700px] w-[700px] rounded-full bg-gradient-to-tr from-orange-400/40 via-amber-400/30 to-transparent blur-3xl"
        animate={{
          x: [0, -60, 60, 0],
          y: [0, -80, -40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-1/4 -bottom-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-tl from-rose-400/40 via-pink-400/30 to-transparent blur-3xl"
        animate={{
          x: [0, 70, 35, 0],
          y: [0, -60, -30, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle noise overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />
    </div>
  );
}

// Frosted language toggle
function LanguageToggle({
  lang,
  toggleLang,
}: {
  lang: Lang;
  toggleLang: () => void;
}) {
  return (
    <motion.button
      onClick={toggleLang}
      className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-semibold text-gray-800 shadow-lg shadow-purple-500/10 ring-1 ring-white/50 backdrop-blur-md transition-all hover:bg-white/80 hover:shadow-xl hover:shadow-purple-500/20"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={lang === "en" ? "Switch to Spanish" : "Cambiar a Ingles"}
    >
      <Globe className="h-4 w-4 text-purple-600" />
      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        {lang === "en" ? "ES" : "EN"}
      </span>
    </motion.button>
  );
}

// Tool card with frosted glass effect
function ToolCard({ tool, lang }: { tool: Tool; lang: Lang }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const categoryGradient = categoryGradients[tool.categoria];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      className="group relative"
    >
      {/* Glow effect behind card */}
      <div
        className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${categoryGradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40`}
      />

      {/* Card content */}
      <div
        className={`relative rounded-2xl bg-white/70 shadow-xl shadow-purple-500/5 ring-1 ring-white/50 backdrop-blur-xl transition-all ${
          isExpanded ? "ring-white/70" : ""
        }`}
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full items-start justify-between p-6 text-left"
        >
          <div className="flex-1 pr-4">
            {/* Badges row */}
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {/* Tier badge with gradient */}
              {tool.tier && (
                <motion.span
                  className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${tierConfig[tool.tier].gradient} px-3 py-1.5 text-xs font-bold text-white shadow-lg ${tierConfig[tool.tier].shadow}`}
                  whileHover={{ scale: 1.05 }}
                  title={ui.tierDescriptions[tool.tier][lang]}
                >
                  {tierConfig[tool.tier].icon}
                  {ui.tiers[tool.tier][lang]}
                </motion.span>
              )}

              {/* Category badge with gradient */}
              <motion.span
                className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${categoryGradient} px-3 py-1.5 text-xs font-bold text-white shadow-lg`}
                whileHover={{ scale: 1.05 }}
              >
                {categoryIcons[tool.categoria]}
                {ui.categories[tool.categoria][lang]}
              </motion.span>
            </div>

            {/* Tool name with gradient text on hover */}
            <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent">
              {tool.nombre}
            </h3>

            {/* Short description */}
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {tool.descripcionCorta[lang]}
            </p>

            {/* Skill level pill */}
            <div className="mt-4">
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${levelColors[tool.nivel]} shadow-sm`}
              >
                {ui.levels[tool.nivel][lang]}
              </span>
            </div>
          </div>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10"
          >
            <ChevronDown className="h-5 w-5 text-purple-600" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="overflow-hidden"
            >
              <div className="border-t border-white/40 px-6 pb-6 pt-5">
                {/* Full description */}
                <p className="text-sm leading-relaxed text-gray-700">
                  {tool.descripcion[lang]}
                </p>

                {/* Pricing cards */}
                <div className="mt-6">
                  <h4 className="mb-3 inline-block rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-700">
                    {ui.card.pricing[lang]}
                  </h4>
                  <div className="grid gap-2">
                    {tool.precios.map((tier, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between rounded-xl bg-white/50 px-4 py-3 shadow-sm ring-1 ring-white/50"
                      >
                        <span className="text-sm font-semibold text-gray-900">
                          {tier.plan}
                        </span>
                        <div className="text-right">
                          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-sm font-bold text-transparent">
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
                <div className="mt-6">
                  <h4 className="mb-3 inline-block rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
                    {ui.card.useCases[lang]}
                  </h4>
                  <ul className="space-y-2">
                    {tool.casosDeUso[lang].map((caso, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        className="flex items-start gap-3 text-sm text-gray-700"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                        {caso}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Why It's Good */}
                <div className="mt-6">
                  <h4 className="mb-3 inline-block rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700">
                    {ui.card.whyItsGood[lang]}
                  </h4>
                  <div className="grid gap-2">
                    {tool.porQueEsBueno[lang].map((razon, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-emerald-50/80 to-teal-50/80 px-4 py-3 shadow-sm ring-1 ring-emerald-200/50"
                      >
                        <motion.div
                          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/30"
                          whileHover={{ rotate: 180 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Sparkles className="h-3.5 w-3.5 text-white" />
                        </motion.div>
                        <span className="text-sm font-medium text-emerald-900">
                          {razon}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Visit button */}
                <motion.a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/40"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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

// Filter pill button component
function FilterPill({
  active,
  onClick,
  children,
  gradient,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  gradient?: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
        active
          ? gradient
            ? `bg-gradient-to-r ${gradient} text-white shadow-lg`
            : "bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white shadow-lg shadow-purple-500/30"
          : "bg-white/60 text-gray-700 shadow-md ring-1 ring-white/50 backdrop-blur-sm hover:bg-white/80 hover:shadow-lg"
      }`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}

function GradientCatalogContent() {
  const { lang, toggleLang } = useLang();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [selectedTier, setSelectedTier] = useState<RecommendationTier | "all">(
    "all"
  );

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
    <div className="relative min-h-screen">
      <GradientMeshBackground />

      {/* Header */}
      <header className="relative">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-start justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                  {ui.header.title[lang]}
                </span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-gray-600">
                {ui.header.subtitle[lang]}
              </p>
            </motion.div>
            <LanguageToggle lang={lang} toggleLang={toggleLang} />
          </div>
        </div>
      </header>

      {/* Filters - Frosted glass sticky bar */}
      <div className="sticky top-0 z-10">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-white/60 p-4 shadow-xl shadow-purple-500/5 ring-1 ring-white/50 backdrop-blur-xl"
          >
            {/* Tier Filters */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-gray-600">
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
                    gradient={tierConfig[tier].gradient}
                  >
                    <span className="inline-flex items-center gap-1.5">
                      {tierConfig[tier].icon}
                      {ui.tiers[tier][lang]} ({count})
                    </span>
                  </FilterPill>
                );
              })}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-gray-600">
                {ui.filters.category[lang]}
              </span>
              <FilterPill
                active={selectedCategory === null}
                onClick={() => setSelectedCategory(null)}
              >
                {ui.filters.all[lang]} ({tools.length})
              </FilterPill>
              {categories.map((cat) => {
                const count = tools.filter((t) => t.categoria === cat).length;
                return (
                  <FilterPill
                    key={cat}
                    active={selectedCategory === cat}
                    onClick={() => setSelectedCategory(cat)}
                    gradient={categoryGradients[cat]}
                  >
                    <span className="inline-flex items-center gap-1.5">
                      {categoryIcons[cat]}
                      {ui.categories[cat][lang]} ({count})
                    </span>
                  </FilterPill>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tools Grid */}
      <main className="relative mx-auto max-w-6xl px-4 py-8">
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {sortedTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  delay: index * 0.02,
                }}
              >
                <ToolCard tool={tool} lang={lang} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {sortedTools.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20">
              <Search className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-lg font-medium text-gray-600">
              {ui.empty.noTools[lang]}
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
}

export default function GradientDesign() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-violet-100 via-pink-50 to-orange-100" />
      }
    >
      <GradientCatalogContent />
    </Suspense>
  );
}
