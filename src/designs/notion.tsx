"use client";

import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ExternalLink,
  Globe,
  Sparkles,
  Zap,
  Search,
  Bot,
  Lightbulb,
  Palette,
  Blocks,
  Terminal,
  Circle,
  MoreHorizontal,
  Link2,
  DollarSign,
  Target,
  Star,
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

// Notion-style category icons (emoji-like)
const categoryIcons: Record<Category, React.ReactNode> = {
  automatizacion: <Zap className="h-4 w-4" />,
  agentes: <Bot className="h-4 w-4" />,
  conocimiento: <Lightbulb className="h-4 w-4" />,
  creatividad: <Palette className="h-4 w-4" />,
  nocode: <Blocks className="h-4 w-4" />,
  desarrollo: <Terminal className="h-4 w-4" />,
};

// Notion-style category colors (muted, warm)
const categoryColors: Record<Category, string> = {
  automatizacion: "bg-amber-100/80 text-amber-700",
  agentes: "bg-teal-100/80 text-teal-700",
  conocimiento: "bg-blue-100/80 text-blue-700",
  creatividad: "bg-purple-100/80 text-purple-700",
  nocode: "bg-pink-100/80 text-pink-700",
  desarrollo: "bg-slate-100/80 text-slate-600",
};

// Notion-style tier dot colors
const tierDotColors: Record<NonNullable<RecommendationTier>, string> = {
  tier1: "bg-yellow-500",
  tier2: "bg-gray-400",
  tier3: "bg-orange-400",
};

function LanguageToggle({ lang, toggleLang }: { lang: Lang; toggleLang: () => void }) {
  return (
    <button
      onClick={toggleLang}
      className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm text-gray-500 transition-colors hover:bg-gray-100"
      title={lang === "en" ? "Switch to Spanish" : "Cambiar a Ingles"}
    >
      <Globe className="h-3.5 w-3.5" />
      {lang === "en" ? "ES" : "EN"}
    </button>
  );
}

function ToolRow({ tool, lang }: { tool: Tool; lang: Lang }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      className="border-b border-gray-100 last:border-b-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main row - Database-like */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`group flex w-full items-center gap-4 px-4 py-3 text-left transition-colors ${
          isHovered || isExpanded ? "bg-gray-50/80" : ""
        }`}
      >
        {/* Toggle arrow */}
        <ChevronRight
          className={`h-4 w-4 flex-shrink-0 text-gray-400 transition-transform ${
            isExpanded ? "rotate-90" : ""
          }`}
        />

        {/* Tool name */}
        <div className="min-w-[180px] flex-shrink-0">
          <span className="font-medium text-gray-900">{tool.nombre}</span>
        </div>

        {/* Short description */}
        <div className="flex-1 truncate text-sm text-gray-500">
          {tool.descripcionCorta[lang]}
        </div>

        {/* Properties inline */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Tier indicator */}
          {tool.tier && (
            <div
              className="flex items-center gap-1.5"
              title={ui.tierDescriptions[tool.tier][lang]}
            >
              <Circle className={`h-2.5 w-2.5 fill-current ${tierDotColors[tool.tier].replace("bg-", "text-")}`} />
              <span className="text-xs text-gray-500">{ui.tiers[tool.tier][lang]}</span>
            </div>
          )}

          {/* Category tag */}
          <span
            className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs ${categoryColors[tool.categoria]}`}
          >
            {categoryIcons[tool.categoria]}
            {ui.categories[tool.categoria][lang]}
          </span>

          {/* Level badge */}
          <span
            className={`rounded px-2 py-0.5 text-xs ${levelColors[tool.nivel]}`}
          >
            {ui.levels[tool.nivel][lang]}
          </span>
        </div>

        {/* Hover actions */}
        <div className={`flex items-center gap-2 transition-opacity ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="rounded p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-600"
            title={`${ui.card.visit[lang]} ${tool.nombre}`}
          >
            <Link2 className="h-4 w-4" />
          </a>
          <button className="rounded p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-600">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </button>

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-6 pl-12">
              {/* Full description */}
              <p className="mb-6 max-w-3xl leading-relaxed text-gray-600">
                {tool.descripcion[lang]}
              </p>

              {/* Mobile properties */}
              <div className="mb-6 flex flex-wrap gap-2 md:hidden">
                {tool.tier && (
                  <div className="flex items-center gap-1.5 rounded bg-gray-100 px-2 py-1">
                    <Circle className={`h-2 w-2 fill-current ${tierDotColors[tool.tier].replace("bg-", "text-")}`} />
                    <span className="text-xs text-gray-600">{ui.tiers[tool.tier][lang]}</span>
                  </div>
                )}
                <span className={`inline-flex items-center gap-1 rounded px-2 py-1 text-xs ${categoryColors[tool.categoria]}`}>
                  {categoryIcons[tool.categoria]}
                  {ui.categories[tool.categoria][lang]}
                </span>
                <span className={`rounded px-2 py-1 text-xs ${levelColors[tool.nivel]}`}>
                  {ui.levels[tool.nivel][lang]}
                </span>
              </div>

              {/* Content in Notion block style */}
              <div className="grid gap-6 lg:grid-cols-3">
                {/* Pricing */}
                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-900">
                    <DollarSign className="h-4 w-4 text-gray-400" />
                    {ui.card.pricing[lang]}
                  </h4>
                  <div className="space-y-1.5">
                    {tool.precios.map((tier, idx) => (
                      <div
                        key={idx}
                        className="flex items-baseline justify-between rounded-md bg-gray-50 px-3 py-2"
                      >
                        <span className="text-sm font-medium text-gray-700">{tier.plan}</span>
                        <div className="text-right">
                          <span className="text-sm font-semibold text-gray-900">{tier.precio}</span>
                          <span className="ml-2 text-xs text-gray-400">{tier.caracteristicas[lang]}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-900">
                    <Target className="h-4 w-4 text-gray-400" />
                    {ui.card.useCases[lang]}
                  </h4>
                  <ul className="space-y-1.5">
                    {tool.casosDeUso[lang].slice(0, 4).map((caso, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gray-300" />
                        <span>{caso}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why it's good */}
                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-900">
                    <Star className="h-4 w-4 text-gray-400" />
                    {ui.card.whyItsGood[lang]}
                  </h4>
                  <div className="space-y-1.5">
                    {tool.porQueEsBueno[lang].map((razon, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 rounded-md bg-amber-50/50 px-3 py-2"
                      >
                        <Sparkles className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-amber-500" />
                        <span className="text-sm text-gray-700">{razon}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visit button */}
              <div className="mt-6">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
                >
                  {ui.card.visit[lang]} {tool.nombre}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function CategorySection({
  category,
  tools,
  lang,
  isExpanded,
  onToggle,
}: {
  category: Category;
  tools: Tool[];
  lang: Lang;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  // Sort tools by tier within category
  const sortedTools = [...tools].sort((a, b) => {
    const tierOrder = { tier1: 0, tier2: 1, tier3: 2 };
    const aOrder = a.tier ? tierOrder[a.tier] : 3;
    const bOrder = b.tier ? tierOrder[b.tier] : 3;
    return aOrder - bOrder;
  });

  return (
    <div className="mb-4">
      {/* Section header - Notion toggle style */}
      <button
        onClick={onToggle}
        className="group flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left transition-colors hover:bg-gray-100"
      >
        <ChevronRight
          className={`h-4 w-4 text-gray-400 transition-transform ${
            isExpanded ? "rotate-90" : ""
          }`}
        />
        <span className={`rounded p-1 ${categoryColors[category]}`}>
          {categoryIcons[category]}
        </span>
        <span className="font-medium text-gray-900">
          {ui.categories[category][lang]}
        </span>
        <span className="text-sm text-gray-400">
          {tools.length}
        </span>
      </button>

      {/* Section content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden"
          >
            <div className="ml-6 mt-1 rounded-lg border border-gray-200 bg-white">
              {/* Table header */}
              <div className="flex items-center gap-4 border-b border-gray-100 px-4 py-2 text-xs font-medium uppercase tracking-wider text-gray-400">
                <div className="w-4" /> {/* Toggle placeholder */}
                <div className="min-w-[180px]">Name</div>
                <div className="flex-1">Description</div>
                <div className="hidden w-48 md:block" /> {/* Properties placeholder */}
                <div className="w-16" /> {/* Actions placeholder */}
              </div>

              {/* Tool rows */}
              {sortedTools.map((tool) => (
                <ToolRow key={tool.id} tool={tool} lang={lang} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NotionContent() {
  const { lang, toggleLang } = useLang();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Set<Category>>(
    new Set(["automatizacion", "agentes", "conocimiento", "creatividad", "nocode", "desarrollo"])
  );
  const [selectedTier, setSelectedTier] = useState<RecommendationTier | "all">("all");

  const categories = Object.keys(ui.categories) as Category[];
  const tiers: NonNullable<RecommendationTier>[] = ["tier1", "tier2", "tier3"];

  // Filter tools
  const filteredTools = tools.filter((t) => {
    if (selectedTier !== "all" && t.tier !== selectedTier) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        t.nombre.toLowerCase().includes(query) ||
        t.descripcionCorta[lang].toLowerCase().includes(query) ||
        t.descripcion[lang].toLowerCase().includes(query)
      );
    }
    return true;
  });

  // Group by category
  const toolsByCategory = categories.reduce((acc, cat) => {
    acc[cat] = filteredTools.filter((t) => t.categoria === cat);
    return acc;
  }, {} as Record<Category, Tool[]>);

  const toggleCategory = (category: Category) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedCategories(new Set(categories));
  };

  const collapseAll = () => {
    setExpandedCategories(new Set());
  };

  return (
    <div className="min-h-screen bg-[#FFFAF5]">
      {/* Notion-style sidebar accent */}
      <div className="fixed left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-200 via-orange-200 to-pink-200 opacity-50" />

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-gray-200/50 bg-[#FFFAF5]/95 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Notion-style icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-100 to-orange-100">
                <Sparkles className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  {ui.header.title[lang]}
                </h1>
                <p className="text-sm text-gray-500">
                  {ui.header.subtitle[lang]}
                </p>
              </div>
            </div>
            <LanguageToggle lang={lang} toggleLang={toggleLang} />
          </div>

          {/* Search and filters */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={lang === "en" ? "Search tools..." : "Buscar herramientas..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md border border-gray-200 bg-white/80 py-2 pl-9 pr-3 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>

            {/* Tier filter */}
            <div className="flex items-center gap-1 rounded-md border border-gray-200 bg-white/80 p-1">
              <button
                onClick={() => setSelectedTier("all")}
                className={`rounded px-2.5 py-1 text-xs font-medium transition-colors ${
                  selectedTier === "all"
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {ui.filters.all[lang]}
              </button>
              {tiers.map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  className={`flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-medium transition-colors ${
                    selectedTier === tier
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Circle className={`h-2 w-2 fill-current ${selectedTier === tier ? "text-white" : tierDotColors[tier].replace("bg-", "text-")}`} />
                  {ui.tiers[tier][lang]}
                </button>
              ))}
            </div>

            {/* Expand/Collapse */}
            <div className="flex items-center gap-1">
              <button
                onClick={expandAll}
                className="rounded px-2 py-1 text-xs text-gray-500 hover:bg-gray-100"
              >
                {lang === "en" ? "Expand all" : "Expandir todo"}
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={collapseAll}
                className="rounded px-2 py-1 text-xs text-gray-500 hover:bg-gray-100"
              >
                {lang === "en" ? "Collapse all" : "Colapsar todo"}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-6 py-6">
        {/* Tool count */}
        <div className="mb-4 text-sm text-gray-500">
          {filteredTools.length} {lang === "en" ? "tools" : "herramientas"}
        </div>

        {/* Categories */}
        <div>
          {categories.map((category) => {
            const categoryTools = toolsByCategory[category];
            if (categoryTools.length === 0) return null;

            return (
              <CategorySection
                key={category}
                category={category}
                tools={categoryTools}
                lang={lang}
                isExpanded={expandedCategories.has(category)}
                onToggle={() => toggleCategory(category)}
              />
            );
          })}
        </div>

        {filteredTools.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-gray-500">{ui.empty.noTools[lang]}</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200/50 py-8">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-gray-400">
          {lang === "en" ? "Curated by" : "Curado por"} Rebundle
        </div>
      </footer>
    </div>
  );
}

export default function NotionDesign() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FFFAF5]" />}>
      <NotionContent />
    </Suspense>
  );
}
