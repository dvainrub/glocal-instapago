"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import dynamic from "next/dynamic";

// Lazy load designs for better performance
const CatalogDesign = dynamic(() => import("@/designs/catalog"), {
  loading: () => <DesignLoading />,
});
const DashboardDesign = dynamic(() => import("@/designs/dashboard"), {
  loading: () => <DesignLoading />,
});
const ExplorerDesign = dynamic(() => import("@/designs/explorer"), {
  loading: () => <DesignLoading />,
});

function DesignLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-gray-500">Cargando...</div>
    </div>
  );
}

function DesignRouter() {
  const searchParams = useSearchParams();
  const design = searchParams.get("design") || "catalog";

  switch (design) {
    case "dashboard":
      return <DashboardDesign />;
    case "explorer":
      return <ExplorerDesign />;
    case "catalog":
    default:
      return <CatalogDesign />;
  }
}

export default function Home() {
  return (
    <Suspense fallback={<DesignLoading />}>
      <DesignRouter />
    </Suspense>
  );
}
