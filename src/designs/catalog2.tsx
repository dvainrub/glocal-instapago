"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ExternalLink,
  Sparkles,
  Zap,
  Search,
  Presentation,
  BarChart3,
  Code2,
  Layers,
  Star,
} from "lucide-react";
import {
  tools,
  categoryLabels,
  levelLabels,
  levelColors,
  tierLabels,
  tierDescriptions,
  tierColors,
  type Category,
  type Tool,
  type RecommendationTier,
} from "@/data/tools";

const categoryIcons: Record<Category, React.ReactNode> = {
  automatizacion: <Zap className="h-4 w-4" />,
  agentes: <Code2 className="h-4 w-4" />,
  conocimiento: <Search className="h-4 w-4" />,
  creatividad: <Presentation className="h-4 w-4" />,
  nocode: <Layers className="h-4 w-4" />,
  desarrollo: <Code2 className="h-4 w-4" />,
};

const categoryColors: Record<Category, string> = {
  automatizacion: "bg-amber-100 text-amber-800",
  agentes: "bg-teal-100 text-teal-800",
  conocimiento: "bg-blue-100 text-blue-800",
  creatividad: "bg-purple-100 text-purple-800",
  nocode: "bg-pink-100 text-pink-800",
  desarrollo: "bg-slate-100 text-slate-800",
};

function ToolCard({ tool }: { tool: Tool }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className={`rounded-xl bg-white shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md ${
        isExpanded ? "ring-gray-300" : ""
      }`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-start justify-between p-5 text-left"
      >
        <div className="flex-1 pr-4">
          {/* Tier badge + Category badge */}
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {tool.tier && (
              <span
                className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium ${tierColors[tool.tier]}`}
                title={tierDescriptions[tool.tier]}
              >
                {tierLabels[tool.tier]}
              </span>
            )}
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${categoryColors[tool.categoria]}`}
            >
              {categoryIcons[tool.categoria]}
              {categoryLabels[tool.categoria]}
            </span>
          </div>

          {/* Tool name */}
          <h3 className="text-lg font-semibold text-gray-900">{tool.nombre}</h3>

          {/* Short description */}
          <p className="mt-1 text-sm text-gray-600">{tool.descripcionCorta}</p>

          {/* Skill level badge */}
          <div className="mt-3">
            <span
              className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${levelColors[tool.nivel]}`}
            >
              {levelLabels[tool.nivel]}
            </span>
          </div>
        </div>

        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="border-t border-gray-100 px-5 pb-5 pt-4">
              {/* Full description */}
              <p className="text-sm leading-relaxed text-gray-700">
                {tool.descripcion}
              </p>

              {/* Pricing Table */}
              <div className="mt-5">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Precios
                </h4>
                <div className="grid gap-2">
                  {tool.precios.map((tier, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2"
                    >
                      <span className="text-sm font-medium text-gray-900">
                        {tier.plan}
                      </span>
                      <div className="text-right">
                        <span className="text-sm font-semibold text-gray-900">
                          {tier.precio}
                        </span>
                        <span className="ml-2 text-xs text-gray-500">
                          {tier.caracteristicas}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="mt-5">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Casos de Uso
                </h4>
                <ul className="space-y-2">
                  {tool.casosDeUso.map((caso, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                      {caso}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why It's Good - styled like Dashboard */}
              <div className="mt-5">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Por Que Es Bueno
                </h4>
                <div className="grid gap-2">
                  {tool.porQueEsBueno.map((razon, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-lg bg-emerald-50 px-3 py-2.5"
                    >
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                        <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                      </div>
                      <span className="text-sm text-emerald-900">{razon}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* External Link */}
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
              >
                Visitar {tool.nombre}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Catalog2Design() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedTier, setSelectedTier] = useState<RecommendationTier | "all">("all");

  const categories = Object.keys(categoryLabels) as Category[];
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Stack IA Recomendado por Rebundle
          </h1>
          <p className="mt-2 text-gray-600">
            Explora las mejores herramientas de inteligencia artificial para tu organización
          </p>
        </div>
      </header>

      {/* Filter Chips */}
      <div className="sticky top-0 z-10 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-4">
          {/* Tier Filters */}
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-500">Recomendacion:</span>
            <button
              onClick={() => setSelectedTier("all")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedTier === "all"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Todas
            </button>
            {tiers.map((tier) => {
              const count = tools.filter((t) => t.tier === tier).length;
              if (count === 0) return null;
              return (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selectedTier === tier
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tierLabels[tier]} ({count})
                </button>
              );
            })}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-500">Categoria:</span>
            <button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Todas ({tools.length})
            </button>
            {categories.map((cat) => {
              const count = tools.filter((t) => t.categoria === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {categoryIcons[cat]}
                  {categoryLabels[cat]} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <main className="mx-auto max-w-6xl px-4 py-8">
        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {sortedTools.map((tool) => (
              <motion.div
                key={tool.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <ToolCard tool={tool} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {sortedTools.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-gray-500">No hay herramientas con estos filtros</p>
          </div>
        )}
      </main>
    </div>
  );
}
