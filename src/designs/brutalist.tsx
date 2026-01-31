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
  Check,
  ArrowRight,
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

// Neo-Brutalist category colors - solid, bold
const categoryColors: Record<Category, { bg: string; shadow: string; text: string }> = {
  automatizacion: { bg: "bg-yellow-400", shadow: "shadow-[4px_4px_0px_0px_#000]", text: "text-black" },
  agentes: { bg: "bg-cyan-400", shadow: "shadow-[4px_4px_0px_0px_#000]", text: "text-black" },
  conocimiento: { bg: "bg-blue-400", shadow: "shadow-[4px_4px_0px_0px_#000]", text: "text-black" },
  creatividad: { bg: "bg-pink-400", shadow: "shadow-[4px_4px_0px_0px_#000]", text: "text-black" },
  nocode: { bg: "bg-lime-400", shadow: "shadow-[4px_4px_0px_0px_#000]", text: "text-black" },
  desarrollo: { bg: "bg-orange-400", shadow: "shadow-[4px_4px_0px_0px_#000]", text: "text-black" },
};

// Neo-Brutalist tier badges
const tierStyles: Record<NonNullable<RecommendationTier>, { bg: string; border: string; icon: React.ReactNode }> = {
  tier1: {
    bg: "bg-yellow-300",
    border: "border-2 border-black",
    icon: <Star className="h-3.5 w-3.5 fill-black" />
  },
  tier2: {
    bg: "bg-white",
    border: "border-2 border-black",
    icon: <Check className="h-3.5 w-3.5" />
  },
  tier3: {
    bg: "bg-gray-200",
    border: "border-2 border-black",
    icon: null
  },
};

// Level badges - brutalist style
const levelStyles: Record<string, string> = {
  principiante: "bg-lime-300 border-2 border-black",
  intermedio: "bg-yellow-300 border-2 border-black",
  avanzado: "bg-red-400 border-2 border-black text-white",
};

const categoryIcons: Record<Category, React.ReactNode> = {
  automatizacion: <Zap className="h-4 w-4" />,
  agentes: <Code2 className="h-4 w-4" />,
  conocimiento: <Search className="h-4 w-4" />,
  creatividad: <Presentation className="h-4 w-4" />,
  nocode: <Layers className="h-4 w-4" />,
  desarrollo: <Code2 className="h-4 w-4" />,
};

function LanguageToggle({ lang, toggleLang }: { lang: Lang; toggleLang: () => void }) {
  return (
    <motion.button
      onClick={toggleLang}
      whileHover={{ x: -2, y: -2 }}
      whileTap={{ x: 0, y: 0 }}
      className="flex items-center gap-2 border-[3px] border-black bg-white px-4 py-2 font-bold uppercase tracking-wide shadow-[4px_4px_0px_0px_#000] transition-shadow hover:shadow-[2px_2px_0px_0px_#000]"
      title={lang === "en" ? "Switch to Spanish" : "Cambiar a Ingles"}
    >
      <Globe className="h-4 w-4" />
      {lang === "en" ? "ES" : "EN"}
    </motion.button>
  );
}

function TierBadge({ tier, lang }: { tier: RecommendationTier; lang: Lang }) {
  if (!tier) return null;
  const style = tierStyles[tier];

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-black uppercase tracking-wider ${style.bg} ${style.border}`}>
      {style.icon}
      {ui.tiers[tier][lang]}
    </span>
  );
}

function ToolCard({ tool, lang }: { tool: Tool; lang: Lang }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const colors = categoryColors[tool.categoria];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ x: -4, y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`border-[3px] border-black bg-white ${isExpanded ? "shadow-[8px_8px_0px_0px_#000]" : "shadow-[6px_6px_0px_0px_#000]"} transition-shadow`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-start justify-between p-5 text-left"
      >
        <div className="flex-1 pr-4">
          {/* Badges row */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <TierBadge tier={tool.tier} lang={lang} />
            <span className={`inline-flex items-center gap-1.5 border-2 border-black px-3 py-1 text-xs font-bold uppercase ${colors.bg} ${colors.text}`}>
              {categoryIcons[tool.categoria]}
              {ui.categories[tool.categoria][lang]}
            </span>
          </div>

          {/* Tool name - UPPERCASE for brutalist feel */}
          <h3 className="text-xl font-black uppercase tracking-tight text-black">
            {tool.nombre}
          </h3>

          {/* Short description */}
          <p className="mt-2 text-sm font-medium text-gray-700">
            {tool.descripcionCorta[lang]}
          </p>

          {/* Level badge */}
          <div className="mt-3">
            <span className={`inline-block px-3 py-1 text-xs font-bold uppercase ${levelStyles[tool.nivel]}`}>
              {ui.levels[tool.nivel][lang]}
            </span>
          </div>
        </div>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center border-2 border-black bg-black text-white"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t-[3px] border-black px-5 pb-5 pt-5">
              {/* Full description */}
              <p className="text-sm leading-relaxed text-gray-800">
                {tool.descripcion[lang]}
              </p>

              {/* Pricing Table */}
              <div className="mt-6">
                <h4 className="mb-3 border-b-2 border-black pb-2 text-sm font-black uppercase tracking-wider">
                  {ui.card.pricing[lang]}
                </h4>
                <div className="space-y-2">
                  {tool.precios.map((tier, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between border-2 border-black bg-gray-50 px-4 py-3"
                    >
                      <span className="font-bold uppercase">{tier.plan}</span>
                      <div className="text-right">
                        <span className="font-black text-lg">{tier.precio}</span>
                        <span className="ml-2 text-xs text-gray-600">
                          {tier.caracteristicas[lang]}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="mt-6">
                <h4 className="mb-3 border-b-2 border-black pb-2 text-sm font-black uppercase tracking-wider">
                  {ui.card.useCases[lang]}
                </h4>
                <ul className="space-y-2">
                  {tool.casosDeUso[lang].map((caso, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>{caso}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why It's Good */}
              <div className="mt-6">
                <h4 className="mb-3 border-b-2 border-black pb-2 text-sm font-black uppercase tracking-wider">
                  {ui.card.whyItsGood[lang]}
                </h4>
                <div className="grid gap-2">
                  {tool.porQueEsBueno[lang].map((razon, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 border-2 border-black bg-lime-200 px-4 py-3"
                    >
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center border-2 border-black bg-lime-400">
                        <Sparkles className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm font-medium">{razon}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* External Link */}
              <motion.a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: -2, y: -2 }}
                whileTap={{ x: 0, y: 0 }}
                className="mt-6 inline-flex items-center gap-2 border-[3px] border-black bg-black px-6 py-3 font-bold uppercase tracking-wide text-white shadow-[4px_4px_0px_0px_#000] transition-shadow hover:shadow-[2px_2px_0px_0px_#000]"
              >
                {ui.card.visit[lang]} {tool.nombre}
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
  color = "white"
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ x: -2, y: -2 }}
      whileTap={{ x: 0, y: 0 }}
      className={`border-2 border-black px-4 py-2 text-sm font-bold uppercase tracking-wide transition-all ${
        active
          ? "bg-black text-white shadow-[2px_2px_0px_0px_#000]"
          : `bg-${color} text-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000]`
      }`}
    >
      {children}
    </motion.button>
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
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Header - Bold brutalist style */}
      <header className="border-b-4 border-black bg-yellow-400">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex items-start justify-between">
            <div>
              <motion.h1
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="text-4xl font-black uppercase tracking-tight text-black md:text-5xl"
              >
                {ui.header.title[lang]}
              </motion.h1>
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mt-3 text-lg font-medium text-black/80"
              >
                {ui.header.subtitle[lang]}
              </motion.p>
            </div>
            <LanguageToggle lang={lang} toggleLang={toggleLang} />
          </div>
        </div>
      </header>

      {/* Filter Section */}
      <div className="sticky top-0 z-10 border-b-4 border-black bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6">
          {/* Tier Filters */}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="font-black uppercase tracking-wider text-sm">
              {ui.filters.recommendation[lang]}
            </span>
            <FilterButton
              active={selectedTier === "all"}
              onClick={() => setSelectedTier("all")}
            >
              {ui.filters.all[lang]}
            </FilterButton>
            {tiers.map((tier) => {
              const count = tools.filter((t) => t.tier === tier).length;
              if (count === 0) return null;
              return (
                <FilterButton
                  key={tier}
                  active={selectedTier === tier}
                  onClick={() => setSelectedTier(tier)}
                >
                  {ui.tiers[tier][lang]} ({count})
                </FilterButton>
              );
            })}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-black uppercase tracking-wider text-sm">
              {ui.filters.category[lang]}
            </span>
            <FilterButton
              active={selectedCategory === null}
              onClick={() => setSelectedCategory(null)}
            >
              {ui.filters.all[lang]} ({tools.length})
            </FilterButton>
            {categories.map((cat) => {
              const count = tools.filter((t) => t.categoria === cat).length;
              const colors = categoryColors[cat];
              return (
                <motion.button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  whileHover={{ x: -2, y: -2 }}
                  whileTap={{ x: 0, y: 0 }}
                  className={`flex items-center gap-2 border-2 border-black px-4 py-2 text-sm font-bold uppercase tracking-wide transition-all ${
                    selectedCategory === cat
                      ? "bg-black text-white shadow-[2px_2px_0px_0px_#000]"
                      : `${colors.bg} ${colors.text} shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000]`
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
      <main className="mx-auto max-w-7xl px-6 py-10">
        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {sortedTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} lang={lang} />
            ))}
          </AnimatePresence>
        </motion.div>

        {sortedTools.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <div className="inline-block border-4 border-black bg-white px-10 py-8 shadow-[8px_8px_0px_0px_#000]">
              <p className="text-xl font-black uppercase">{ui.empty.noTools[lang]}</p>
            </div>
          </motion.div>
        )}
      </main>

      {/* Footer accent */}
      <div className="h-4 bg-black" />
    </div>
  );
}

export default function BrutalistDesign() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#f5f5f5]">
        <div className="border-b-4 border-black bg-yellow-400 py-10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="h-12 w-64 bg-black/10 animate-pulse" />
          </div>
        </div>
      </div>
    }>
      <CatalogContent />
    </Suspense>
  );
}
