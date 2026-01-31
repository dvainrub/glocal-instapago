"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  X,
  Plus,
  Search,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Check,
} from "lucide-react";
import { tools, type Tool } from "@/data/tools";
import { ui } from "@/data/translations";
import { useLang } from "@/lib/useLang";
import { type Lang } from "@/lib/i18n";
import { categoryIcons, categoryColors, tierStyles, levelStyles } from "@/lib/ui-config";
import { LanguageToggle } from "@/components/LanguageToggle";

interface ToolColumnProps {
  tool: Tool;
  lang: Lang;
  onRemove: () => void;
  expandedSections: Record<string, boolean>;
  onToggleSection: (section: string) => void;
}

function ToolColumn({ tool, lang, onRemove, expandedSections, onToggleSection }: ToolColumnProps) {
  const tierStyle = tool.tier ? tierStyles[tool.tier] : null;

  return (
    <div className="min-w-[280px] max-w-[320px] flex-shrink-0 border-r border-gray-100 last:border-r-0">
      {/* Header with name and remove button */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white p-4">
        <h3 className="font-semibold text-gray-900">{tool.nombre}</h3>
        <button
          onClick={onRemove}
          className="rounded-md p-1 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600"
          title={ui.compare.removeFromCompare[lang]}
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Key Fields - Always visible */}
      <div className="space-y-4 p-4">
        {/* Tier */}
        {tierStyle && tool.tier && (
          <div>
            <span className="mb-1 block text-[10px] font-medium uppercase tracking-wider text-gray-400">
              Tier
            </span>
            <span
              className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-semibold ${tierStyle.bg} ${tierStyle.text} ${tierStyle.border}`}
            >
              {tool.tier === "tier1" && <Sparkles className="h-3 w-3" />}
              {ui.tiers[tool.tier][lang]}
            </span>
          </div>
        )}

        {/* Category */}
        <div>
          <span className="mb-1 block text-[10px] font-medium uppercase tracking-wider text-gray-400">
            {ui.filters.category[lang].replace(":", "")}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-medium ${categoryColors[tool.categoria]}`}
          >
            {categoryIcons[tool.categoria]}
            {ui.categories[tool.categoria][lang]}
          </span>
        </div>

        {/* Level */}
        <div>
          <span className="mb-1 block text-[10px] font-medium uppercase tracking-wider text-gray-400">
            {ui.filters.level[lang].replace(":", "")}
          </span>
          <span
            className={`inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xs ${levelStyles[tool.nivel]}`}
          >
            {ui.levels[tool.nivel][lang]}
          </span>
        </div>

        {/* Pricing */}
        <div>
          <span className="mb-2 block text-[10px] font-medium uppercase tracking-wider text-gray-400">
            {ui.card.pricing[lang]}
          </span>
          <div className="space-y-1">
            {tool.precios.map((tier, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-2 py-1.5 text-xs"
              >
                <span className="font-medium text-gray-700">{tier.plan}</span>
                <span className="font-mono font-semibold text-violet-600">{tier.precio}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Short description */}
        <div>
          <span className="mb-1 block text-[10px] font-medium uppercase tracking-wider text-gray-400">
            {ui.compare.description[lang]}
          </span>
          <p className="text-sm text-gray-600">{tool.descripcionCorta[lang]}</p>
        </div>
      </div>

      {/* Collapsible Sections */}
      <div className="border-t border-gray-100">
        {/* Description Section */}
        <button
          onClick={() => onToggleSection("description")}
          className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-gray-50"
        >
          <span className="text-xs font-medium text-gray-600">
            {ui.compare.details[lang]}
          </span>
          {expandedSections.description ? (
            <ChevronUp className="h-4 w-4 text-gray-400" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-400" />
          )}
        </button>
        <AnimatePresence>
          {expandedSections.description && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="space-y-4 px-4 pb-4">
                <p className="text-sm leading-relaxed text-gray-600">
                  {tool.descripcion[lang]}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Use Cases Section */}
        <button
          onClick={() => onToggleSection("useCases")}
          className="flex w-full items-center justify-between border-t border-gray-100 px-4 py-3 text-left transition-colors hover:bg-gray-50"
        >
          <span className="text-xs font-medium text-gray-600">
            {ui.card.useCases[lang]}
          </span>
          {expandedSections.useCases ? (
            <ChevronUp className="h-4 w-4 text-gray-400" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-400" />
          )}
        </button>
        <AnimatePresence>
          {expandedSections.useCases && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <ul className="space-y-1.5 px-4 pb-4">
                {tool.casosDeUso[lang].map((caso, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-violet-500" />
                    <span>{caso}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Why It's Good Section */}
        <button
          onClick={() => onToggleSection("whyItsGood")}
          className="flex w-full items-center justify-between border-t border-gray-100 px-4 py-3 text-left transition-colors hover:bg-gray-50"
        >
          <span className="text-xs font-medium text-gray-600">
            {ui.card.whyItsGood[lang]}
          </span>
          {expandedSections.whyItsGood ? (
            <ChevronUp className="h-4 w-4 text-gray-400" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-400" />
          )}
        </button>
        <AnimatePresence>
          {expandedSections.whyItsGood && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="space-y-2 px-4 pb-4">
                {tool.porQueEsBueno[lang].map((razon, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50 px-2 py-2"
                  >
                    <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                      <Check className="h-2.5 w-2.5 text-emerald-600" />
                    </div>
                    <span className="text-xs text-emerald-800">{razon}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

interface AddToolColumnProps {
  lang: Lang;
  excludeIds: string[];
  onAdd: (toolId: string) => void;
  disabled: boolean;
}

function AddToolColumn({ lang, excludeIds, onAdd, disabled }: AddToolColumnProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const availableTools = useMemo(() => {
    return tools.filter((t) => !excludeIds.includes(t.id));
  }, [excludeIds]);

  const filteredTools = useMemo(() => {
    if (!searchQuery) return availableTools.slice(0, 10);
    const query = searchQuery.toLowerCase();
    return availableTools.filter(
      (t) =>
        t.nombre.toLowerCase().includes(query) ||
        t.descripcionCorta[lang].toLowerCase().includes(query)
    );
  }, [availableTools, searchQuery, lang]);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  if (disabled) {
    return (
      <div className="flex min-w-[200px] flex-shrink-0 items-center justify-center border-r border-gray-100 bg-gray-50 p-4">
        <span className="text-center text-sm text-gray-400">
          {ui.compare.maxTools[lang]}
        </span>
      </div>
    );
  }

  return (
    <div className="min-w-[280px] max-w-[320px] flex-shrink-0 border-r border-gray-100 bg-gray-50">
      <div className="sticky top-0 z-10 border-b border-gray-200 bg-gray-50 p-4">
        <button
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-600 transition-all hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
        >
          <Plus className="h-4 w-4" />
          {ui.compare.addTool[lang]}
        </button>
      </div>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4">
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={ui.compare.searchTools[lang]}
                  className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-100"
                />
              </div>
              <div className="max-h-[300px] space-y-1 overflow-y-auto">
                {filteredTools.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => {
                      onAdd(tool.id);
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="flex w-full items-center gap-3 rounded-lg border border-gray-100 bg-white px-3 py-2 text-left transition-colors hover:border-violet-200 hover:bg-violet-50"
                  >
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded ${categoryColors[tool.categoria]}`}
                    >
                      {categoryIcons[tool.categoria]}
                    </span>
                    <div className="flex-1 overflow-hidden">
                      <span className="block truncate text-sm font-medium text-gray-900">
                        {tool.nombre}
                      </span>
                      <span className="block truncate text-xs text-gray-500">
                        {tool.descripcionCorta[lang]}
                      </span>
                    </div>
                  </button>
                ))}
                {filteredTools.length === 0 && (
                  <p className="py-4 text-center text-sm text-gray-500">
                    {ui.empty.noTools[lang]}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CompareView() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { lang, toggleLang } = useLang();

  // Get tool IDs from URL
  const toolIds = useMemo(() => {
    const toolsParam = searchParams.get("tools");
    if (!toolsParam) return [];
    return toolsParam.split(",").filter((id) => tools.some((t) => t.id === id));
  }, [searchParams]);

  // Get actual tool objects
  const selectedTools = useMemo(() => {
    return toolIds
      .map((id) => tools.find((t) => t.id === id))
      .filter((t): t is Tool => t !== undefined);
  }, [toolIds]);

  // Shared expanded sections state
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    description: false,
    useCases: false,
    whyItsGood: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Update URL when tools change
  const updateUrl = (newToolIds: string[]) => {
    const params = new URLSearchParams(searchParams.toString());
    if (newToolIds.length > 0) {
      params.set("tools", newToolIds.join(","));
    } else {
      params.delete("tools");
    }
    const queryString = params.toString();
    router.push(queryString ? `/compare?${queryString}` : "/compare");
  };

  const removeTool = (toolId: string) => {
    updateUrl(toolIds.filter((id) => id !== toolId));
  };

  const addTool = (toolId: string) => {
    if (toolIds.length < 5 && !toolIds.includes(toolId)) {
      updateUrl([...toolIds, toolId]);
    }
  };

  const goBack = () => {
    const params = new URLSearchParams();
    if (lang !== "en") {
      params.set("lang", lang);
    }
    const queryString = params.toString();
    router.push(queryString ? `/?${queryString}` : "/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <button
            onClick={goBack}
            className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 transition-all hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
          >
            <ArrowLeft className="h-4 w-4" />
            {ui.compare.backToCatalog[lang]}
          </button>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-gray-400">
              {selectedTools.length}/5 {lang === "en" ? "tools" : "herramientas"}
            </span>
            <LanguageToggle lang={lang} toggleLang={toggleLang} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-6">
        {selectedTools.length === 0 ? (
          // Empty state
          <div className="flex min-h-[400px] flex-col items-center justify-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              {ui.compare.noToolsSelected[lang]}
            </h2>
            <p className="mb-6 text-gray-500">
              {ui.compare.selectFromCatalog[lang]}
            </p>
            <button
              onClick={goBack}
              className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-700"
            >
              <ArrowLeft className="h-4 w-4" />
              {ui.compare.backToCatalog[lang]}
            </button>
          </div>
        ) : (
          // Comparison table
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="flex min-w-max">
              {selectedTools.map((tool) => (
                <ToolColumn
                  key={tool.id}
                  tool={tool}
                  lang={lang}
                  onRemove={() => removeTool(tool.id)}
                  expandedSections={expandedSections}
                  onToggleSection={toggleSection}
                />
              ))}
              <AddToolColumn
                lang={lang}
                excludeIds={toolIds}
                onAdd={addTool}
                disabled={selectedTools.length >= 5}
              />
            </div>
          </div>
        )}

        {/* Minimum tools warning */}
        {selectedTools.length > 0 && selectedTools.length < 2 && (
          <p className="mt-4 text-center text-sm text-amber-600">
            {ui.compare.minTools[lang]}
          </p>
        )}
      </main>
    </div>
  );
}
