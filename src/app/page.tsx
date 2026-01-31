"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

// Lazy load designs
const Catalog2Design = dynamic(() => import("@/designs/catalog2"), {
  loading: () => <div className="min-h-screen bg-gray-50" />,
});
const LinearDesign = dynamic(() => import("@/designs/linear"), {
  loading: () => <div className="min-h-screen bg-gray-50" />,
});

type DesignKey = "catalog2" | "linear";

const designs: Record<DesignKey, React.ComponentType> = {
  catalog2: Catalog2Design,
  linear: LinearDesign,
};

function HomeContent() {
  const searchParams = useSearchParams();
  const designKey = (searchParams.get("design") as DesignKey) || "catalog2";
  const DesignComponent = designs[designKey] || designs.catalog2;

  return <DesignComponent />;
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <HomeContent />
    </Suspense>
  );
}
