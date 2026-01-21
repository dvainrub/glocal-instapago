"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Filter,
  Sparkles,
} from "lucide-react";
import {
  tools,
  categoryLabels,
  departmentLabels,
  levelLabels,
  levelColors,
  type Category,
  type SkillLevel,
  type Tool,
} from "@/data/tools";
import DesignSwitcher from "@/components/design-switcher";

// Category badge colors with gradient style
const categoryColors: Record<Category, string> = {
  automatizacion: "from-purple-500 to-indigo-600",
  investigacion: "from-blue-500 to-cyan-600",
  presentaciones: "from-orange-500 to-amber-600",
  datos: "from-emerald-500 to-teal-600",
  nocode: "from-pink-500 to-rose-600",
  desarrollo: "from-slate-600 to-zinc-700",
  video: "from-red-500 to-orange-600",
  diseno: "from-fuchsia-500 to-purple-600",
};

// Level badge styles with modern look
const levelBadgeColors: Record<SkillLevel, string> = {
  principiante: "bg-gradient-to-r from-green-400 to-emerald-500 text-white",
  intermedio: "bg-gradient-to-r from-yellow-400 to-orange-500 text-white",
  avanzado: "bg-gradient-to-r from-red-400 to-rose-500 text-white",
};

function getPriceRange(tool: Tool): string {
  const prices = tool.precios;
  if (prices.length === 0) return "-";

  const first = prices[0].precio;
  const last = prices[prices.length - 1].precio;

  if (first === last) return first;
  return `${first} - ${last}`;
}

export default function DashboardDesign() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<Category | "all">("all");
  const [levelFilter, setLevelFilter] = useState<SkillLevel | "all">("all");

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      if (categoryFilter !== "all" && tool.categoria !== categoryFilter)
        return false;
      if (levelFilter !== "all" && tool.nivel !== levelFilter) return false;
      return true;
    });
  }, [categoryFilter, levelFilter]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const categories = Object.keys(categoryLabels) as Category[];
  const levels = Object.keys(levelLabels) as SkillLevel[];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Sparkles className="h-8 w-8 text-cyan-400" />
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Catalogo de Herramientas IA
              </span>
            </h1>
          </div>
          <p className="mt-2 text-slate-400">
            Compara y selecciona las mejores herramientas de IA para tu
            organizacion
          </p>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="sticky top-0 z-40 border-b border-slate-700/50 bg-slate-800/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400">
              <Filter className="h-5 w-5" />
              <span className="text-sm font-medium">Filtros:</span>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="category-filter"
                className="text-sm text-slate-400"
              >
                Categoria:
              </label>
              <select
                id="category-filter"
                value={categoryFilter}
                onChange={(e) =>
                  setCategoryFilter(e.target.value as Category | "all")
                }
                className="rounded-lg border border-slate-600 bg-slate-700 px-3 py-1.5 text-sm text-white shadow-sm transition-colors focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              >
                <option value="all">Todas</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {categoryLabels[cat]}
                  </option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div className="flex items-center gap-2">
              <label htmlFor="level-filter" className="text-sm text-slate-400">
                Nivel:
              </label>
              <select
                id="level-filter"
                value={levelFilter}
                onChange={(e) =>
                  setLevelFilter(e.target.value as SkillLevel | "all")
                }
                className="rounded-lg border border-slate-600 bg-slate-700 px-3 py-1.5 text-sm text-white shadow-sm transition-colors focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              >
                <option value="all">Todos</option>
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {levelLabels[level]}
                  </option>
                ))}
              </select>
            </div>

            {/* Results count */}
            <div className="ml-auto text-sm text-slate-400">
              {filteredTools.length} herramienta
              {filteredTools.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/50 shadow-2xl backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Sticky Header */}
              <thead className="sticky top-[73px] z-30 bg-gradient-to-r from-slate-800 to-slate-700">
                <tr className="border-b border-slate-600/50">
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Herramienta
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Categoria
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Nivel
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Departamentos
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Precio
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Detalles
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/30">
                {filteredTools.map((tool) => (
                  <TableRow
                    key={tool.id}
                    tool={tool}
                    isExpanded={expandedId === tool.id}
                    onToggle={() => toggleExpand(tool.id)}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {filteredTools.length === 0 && (
            <div className="py-12 text-center text-slate-400">
              No se encontraron herramientas con los filtros seleccionados.
            </div>
          )}
        </div>
      </div>

      {/* Design Switcher */}
      <DesignSwitcher />
    </div>
  );
}

function TableRow({
  tool,
  isExpanded,
  onToggle,
}: {
  tool: Tool;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <>
      <tr
        className={`transition-colors hover:bg-slate-700/30 ${isExpanded ? "bg-slate-700/50" : ""}`}
      >
        {/* Tool Name */}
        <td className="px-6 py-4">
          <div className="flex items-center gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">{tool.nombre}</span>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 transition-colors hover:text-cyan-300"
                  aria-label={`Visitar ${tool.nombre}`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-0.5 text-sm text-slate-400">
                {tool.descripcionCorta}
              </p>
            </div>
          </div>
        </td>

        {/* Category */}
        <td className="px-6 py-4">
          <span
            className={`inline-flex rounded-full bg-gradient-to-r ${categoryColors[tool.categoria]} px-3 py-1 text-xs font-medium text-white shadow-sm`}
          >
            {categoryLabels[tool.categoria]}
          </span>
        </td>

        {/* Skill Level */}
        <td className="px-6 py-4">
          <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-medium shadow-sm ${levelBadgeColors[tool.nivel]}`}
          >
            {levelLabels[tool.nivel]}
          </span>
        </td>

        {/* Departments */}
        <td className="px-6 py-4">
          <div className="flex flex-wrap gap-1">
            {tool.departamentos.slice(0, 3).map((dept) => (
              <span
                key={dept}
                className="inline-flex rounded-md border border-slate-600 bg-slate-700/50 px-2 py-0.5 text-xs text-slate-300"
              >
                {departmentLabels[dept]}
              </span>
            ))}
            {tool.departamentos.length > 3 && (
              <span className="inline-flex rounded-md border border-slate-600 bg-slate-700/50 px-2 py-0.5 text-xs text-slate-400">
                +{tool.departamentos.length - 3}
              </span>
            )}
          </div>
        </td>

        {/* Price Range */}
        <td className="px-6 py-4">
          <span className="font-medium text-emerald-400">
            {getPriceRange(tool)}
          </span>
        </td>

        {/* Expand Button */}
        <td className="px-6 py-4 text-center">
          <button
            onClick={onToggle}
            className="inline-flex items-center gap-1 rounded-lg bg-slate-700 px-3 py-1.5 text-sm text-slate-300 transition-all hover:bg-slate-600 hover:text-white"
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Contraer detalles" : "Expandir detalles"}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4" />
                <span className="hidden sm:inline">Cerrar</span>
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                <span className="hidden sm:inline">Ver mas</span>
              </>
            )}
          </button>
        </td>
      </tr>

      {/* Expanded Row */}
      <AnimatePresence>
        {isExpanded && (
          <tr>
            <td colSpan={6} className="p-0">
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="border-t border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-700/50 px-6 py-6">
                  <div className="grid gap-6 md:grid-cols-3">
                    {/* Description & Use Cases */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                          Descripcion
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">
                          {tool.descripcion}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                          Casos de Uso
                        </h4>
                        <ul className="mt-2 space-y-1">
                          {tool.casosDeUso.map((caso, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-slate-300"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500" />
                              {caso}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Pricing Tiers */}
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                        Planes y Precios
                      </h4>
                      <div className="mt-2 space-y-2">
                        {tool.precios.map((precio, i) => (
                          <div
                            key={i}
                            className="rounded-lg border border-slate-600/50 bg-slate-700/30 p-3"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-white">
                                {precio.plan}
                              </span>
                              <span className="font-semibold text-emerald-400">
                                {precio.precio}
                              </span>
                            </div>
                            <p className="mt-1 text-xs text-slate-400">
                              {precio.caracteristicas}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Why it's good */}
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                        Por Que Es Bueno
                      </h4>
                      <ul className="mt-2 space-y-2">
                        {tool.porQueEsBueno.map((razon, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300"
                          >
                            <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                            {razon}
                          </li>
                        ))}
                      </ul>

                      {/* All Departments */}
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                          Departamentos
                        </h4>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {tool.departamentos.map((dept) => (
                            <span
                              key={dept}
                              className="inline-flex rounded-md border border-slate-600 bg-slate-700/50 px-2 py-0.5 text-xs text-slate-300"
                            >
                              {departmentLabels[dept]}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </td>
          </tr>
        )}
      </AnimatePresence>
    </>
  );
}
