"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Search,
  Presentation,
  BarChart3,
  Code2,
  Terminal,
  Video,
  Palette,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import {
  tools,
  categoryLabels,
  departmentLabels,
  levelLabels,
  levelColors,
  type Category,
  type Tool,
} from "@/data/tools";
import DesignSwitcher from "@/components/design-switcher";

const categoryIcons: Record<Category, React.ReactNode> = {
  automatizacion: <Zap className="h-4 w-4" />,
  investigacion: <Search className="h-4 w-4" />,
  presentaciones: <Presentation className="h-4 w-4" />,
  datos: <BarChart3 className="h-4 w-4" />,
  nocode: <Code2 className="h-4 w-4" />,
  desarrollo: <Terminal className="h-4 w-4" />,
  video: <Video className="h-4 w-4" />,
  diseno: <Palette className="h-4 w-4" />,
};

const categories: Category[] = [
  "automatizacion",
  "investigacion",
  "presentaciones",
  "datos",
  "nocode",
  "desarrollo",
  "video",
  "diseno",
];

function ToolCard({ tool }: { tool: Tool }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const startingPrice = tool.precios[0]?.precio || "Consultar";

  return (
    <motion.div
      layout
      className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-5 text-left"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{tool.nombre}</h3>
            <p className="mt-1 text-sm text-gray-600">{tool.descripcionCorta}</p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-5 w-5 flex-shrink-0 text-gray-400" />
          </motion.div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${levelColors[tool.nivel]}`}
          >
            {levelLabels[tool.nivel]}
          </span>
          {tool.departamentos.slice(0, 3).map((dept) => (
            <span
              key={dept}
              className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700"
            >
              {departmentLabels[dept]}
            </span>
          ))}
          {tool.departamentos.length > 3 && (
            <span className="text-xs text-gray-500">
              +{tool.departamentos.length - 3}
            </span>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">
            Desde {startingPrice}
          </span>
        </div>
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
            <div className="border-t border-gray-100 bg-gray-50 p-5">
              <div className="space-y-5">
                {/* Full Description */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Descripcion
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">{tool.descripcion}</p>
                </div>

                {/* Pricing Table */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Precios</h4>
                  <div className="mt-2 overflow-hidden rounded-lg border border-gray-200 bg-white">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                            Plan
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                            Precio
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                            Caracteristicas
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {tool.precios.map((tier, idx) => (
                          <tr key={idx}>
                            <td className="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-900">
                              {tier.plan}
                            </td>
                            <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-700">
                              {tier.precio}
                            </td>
                            <td className="px-3 py-2 text-sm text-gray-600">
                              {tier.caracteristicas}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Casos de Uso
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {tool.casosDeUso.map((caso, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                        {caso}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why It's Good */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Por Que es Bueno
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {tool.porQueEsBueno.map((razon, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                        {razon}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visit Link */}
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
                >
                  Visitar {tool.nombre}
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

export default function CatalogDesign() {
  const [activeCategory, setActiveCategory] = useState<Category>("automatizacion");

  const filteredTools = tools.filter((tool) => tool.categoria === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Catalogo de Herramientas IA
          </h1>
          <p className="mt-2 text-gray-600">
            Herramientas seleccionadas para optimizar procesos en tu organizacion
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <div className="overflow-x-auto">
            <div className="flex gap-2 pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`inline-flex flex-shrink-0 items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {categoryIcons[category]}
                  {categoryLabels[category]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tool Grid */}
        <motion.div
          layout
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool) => (
              <motion.div
                key={tool.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <ToolCard tool={tool} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredTools.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-gray-500">
              No hay herramientas en esta categoria todavia.
            </p>
          </div>
        )}
      </div>

      {/* Design Switcher */}
      <DesignSwitcher />
    </div>
  );
}
