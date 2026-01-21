"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const designs = [
  { id: "catalog", label: "Catalogo", description: "Tabs + Cards expandibles" },
  { id: "dashboard", label: "Dashboard", description: "Tabla comparativa" },
  { id: "explorer", label: "Explorer", description: "Busqueda + Cards" },
];

export default function DesignSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentDesign = searchParams.get("design") || "catalog";

  const current = designs.find((d) => d.id === currentDesign) || designs[0];

  const switchDesign = (designId: string) => {
    router.push(`?design=${designId}`);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-lg ring-1 ring-gray-200 transition-all hover:bg-gray-50"
        >
          <span className="text-xs text-gray-400">Diseno:</span>
          <span>{current.label}</span>
          <ChevronDown
            className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="absolute bottom-full right-0 mb-2 w-56 rounded-lg bg-white p-2 shadow-xl ring-1 ring-gray-200">
            {designs.map((design) => (
              <button
                key={design.id}
                onClick={() => switchDesign(design.id)}
                className={`flex w-full flex-col rounded-md px-3 py-2 text-left transition-colors ${
                  design.id === currentDesign
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="font-medium">{design.label}</span>
                <span className="text-xs text-gray-500">{design.description}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
