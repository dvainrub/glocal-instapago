"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

// Lazy load designs
const Catalog2Design = dynamic(() => import("@/designs/catalog2"), {
  loading: () => <div className="min-h-screen bg-gray-50" />,
});
const GradientDesign = dynamic(() => import("@/designs/gradient"), {
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-pink-50 to-orange-100" />
  ),
});
const BentoDesign = dynamic(() => import("@/designs/bento"), {
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100" />
  ),
});
const MinimalDesign = dynamic(() => import("@/designs/minimal"), {
  loading: () => <div className="min-h-screen bg-white" />,
});

type DesignKey = "catalog2" | "gradient" | "bento" | "minimal";

const designs: Record<DesignKey, { component: React.ComponentType; label: string }> = {
  catalog2: { component: Catalog2Design, label: "Default" },
  minimal: { component: MinimalDesign, label: "Swiss Minimal" },
  gradient: { component: GradientDesign, label: "Gradient Mesh" },
  bento: { component: BentoDesign, label: "Bento Grid" },
};

function DesignSwitcher() {
  const searchParams = useSearchParams();
  const currentDesign = (searchParams.get("design") as DesignKey) || "catalog2";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    const newDesign = e.target.value;
    if (newDesign === "catalog2") {
      params.delete("design");
    } else {
      params.set("design", newDesign);
    }
    const queryString = params.toString();
    window.location.href = queryString ? `?${queryString}` : "/";
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <select
        value={currentDesign}
        onChange={handleChange}
        className="rounded-lg border border-gray-300 bg-white/90 px-3 py-2 text-sm font-medium text-gray-700 shadow-lg backdrop-blur-sm transition-all hover:border-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
      >
        {Object.entries(designs).map(([key, { label }]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

function HomeContent() {
  const searchParams = useSearchParams();
  const designKey = (searchParams.get("design") as DesignKey) || "catalog2";
  const designConfig = designs[designKey] || designs.catalog2;
  const DesignComponent = designConfig.component;

  return (
    <>
      <DesignComponent />
      <DesignSwitcher />
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <HomeContent />
    </Suspense>
  );
}
