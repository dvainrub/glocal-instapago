"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ExternalLink,
  X,
  Sparkles,
  Filter,
  SearchX,
} from "lucide-react";
import {
  tools,
  categoryLabels,
  levelLabels,
  levelColors,
  departmentLabels,
  getCategories,
  type Tool,
  type Category,
  type SkillLevel,
} from "@/data/tools";
import DesignSwitcher from "@/components/design-switcher";

const skillLevels: SkillLevel[] = ["principiante", "intermedio", "avanzado"];

export default function ExplorerDesign() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [selectedLevel, setSelectedLevel] = useState<SkillLevel | null>(null);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  const categories = getCategories();

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch =
        searchQuery === "" ||
        tool.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.descripcion.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.descripcionCorta.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === null || tool.categoria === selectedCategory;

      const matchesLevel =
        selectedLevel === null || tool.nivel === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchQuery, selectedCategory, selectedLevel]);

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedCategory !== null ||
    selectedLevel !== null;

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedLevel(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Gradient */}
      <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-4 top-1/4 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-4 top-1/2 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl" />
          <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4" />
              <span>Herramientas para ejecutivos</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Explora Herramientas IA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl text-lg text-white/80"
            >
              Descubre las mejores soluciones de inteligencia artificial para
              potenciar tu organizacion
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto max-w-2xl"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar por nombre o descripcion..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-2xl border-0 bg-white py-4 pl-12 pr-4 text-gray-900 shadow-xl ring-1 ring-white/20 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Filter Chips Section */}
      <div className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Filter className="h-4 w-4 flex-shrink-0 text-gray-400" />

            {/* Scrollable chips container */}
            <div className="flex flex-1 gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {/* Category chips */}
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === category ? null : category
                    )
                  }
                  className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {categoryLabels[category]}
                </button>
              ))}

              {/* Divider */}
              <div className="mx-2 h-8 w-px flex-shrink-0 bg-gray-200" />

              {/* Skill level chips */}
              {skillLevels.map((level) => (
                <button
                  key={level}
                  onClick={() =>
                    setSelectedLevel(selectedLevel === level ? null : level)
                  }
                  className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    selectedLevel === level
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {levelLabels[level]}
                </button>
              ))}
            </div>

            {/* Clear filters button */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex-shrink-0 rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-100"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Results count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            {filteredTools.length} herramienta
            {filteredTools.length !== 1 ? "s" : ""} encontrada
            {filteredTools.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Empty State */}
        {filteredTools.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center rounded-2xl bg-white p-12 text-center shadow-sm"
          >
            <div className="mb-4 rounded-full bg-gray-100 p-4">
              <SearchX className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              No se encontraron herramientas
            </h3>
            <p className="mb-6 max-w-md text-gray-500">
              No hay herramientas que coincidan con los filtros seleccionados.
              Intenta ajustar tu busqueda o limpia los filtros.
            </p>
            <button
              onClick={clearFilters}
              className="rounded-lg bg-purple-600 px-6 py-2 font-medium text-white transition-colors hover:bg-purple-700"
            >
              Limpiar filtros
            </button>
          </motion.div>
        ) : (
          /* Card Grid */
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredTools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <ToolCard tool={tool} onClick={() => setSelectedTool(tool)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>

      {/* Modal */}
      <AnimatePresence>
        {selectedTool && (
          <ToolModal
            tool={selectedTool}
            onClose={() => setSelectedTool(null)}
          />
        )}
      </AnimatePresence>

      {/* Design Switcher */}
      <DesignSwitcher />
    </div>
  );
}

function ToolCard({ tool, onClick }: { tool: Tool; onClick: () => void }) {
  const displayedDepartments = tool.departamentos.slice(0, 3);
  const remainingCount = tool.departamentos.length - 3;
  const startingPrice = tool.precios[0]?.precio || "Consultar";

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 12px 40px -12px rgba(0, 0, 0, 0.15)" }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:ring-purple-200"
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex-1">
          <div className="mb-1 flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600">
              {tool.nombre}
            </h3>
            <ExternalLink className="h-4 w-4 text-gray-300 transition-colors group-hover:text-purple-400" />
          </div>
          <p className="text-sm text-gray-500">{tool.descripcionCorta}</p>
        </div>
      </div>

      {/* Badges */}
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
          {categoryLabels[tool.categoria]}
        </span>
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${levelColors[tool.nivel]}`}
        >
          {levelLabels[tool.nivel]}
        </span>
      </div>

      {/* Department tags */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {displayedDepartments.map((dept) => (
          <span
            key={dept}
            className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600"
          >
            {departmentLabels[dept]}
          </span>
        ))}
        {remainingCount > 0 && (
          <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-500">
            +{remainingCount} mas
          </span>
        )}
      </div>

      {/* Price */}
      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="text-xs text-gray-400">Desde</span>
        <span className="text-lg font-bold text-gray-900">{startingPrice}</span>
      </div>
    </motion.div>
  );
}

function ToolModal({ tool, onClose }: { tool: Tool; onClose: () => void }) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-4 z-50 mx-auto max-w-3xl overflow-auto rounded-3xl bg-white shadow-2xl sm:inset-8 md:inset-y-12"
      >
        {/* Header with gradient */}
        <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 px-6 py-8 text-white sm:px-8">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-purple-400/20 blur-2xl" />

          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative">
            <div className="mb-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                {categoryLabels[tool.categoria]}
              </span>
              <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                {levelLabels[tool.nivel]}
              </span>
            </div>
            <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
              {tool.nombre}
            </h2>
            <p className="text-white/80">{tool.descripcion}</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 p-6 sm:p-8">
          {/* Departments */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Departamentos
            </h3>
            <div className="flex flex-wrap gap-2">
              {tool.departamentos.map((dept) => (
                <span
                  key={dept}
                  className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700"
                >
                  {departmentLabels[dept]}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing Table */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Precios
            </h3>
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                      Plan
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                      Precio
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                      Caracteristicas
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tool.precios.map((precio, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {precio.plan}
                      </td>
                      <td className="px-4 py-3 text-sm font-semibold text-purple-600">
                        {precio.precio}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {precio.caracteristicas}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Casos de Uso
            </h3>
            <ul className="space-y-2">
              {tool.casosDeUso.map((caso, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                  <span className="text-gray-700">{caso}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why it's good */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Por que es bueno
            </h3>
            <ul className="space-y-2">
              {tool.porQueEsBueno.map((punto, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                  <span className="text-gray-700">{punto}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-4 font-semibold text-white shadow-lg transition-all hover:from-violet-700 hover:to-purple-700 hover:shadow-xl"
            >
              Visitar {tool.nombre}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
