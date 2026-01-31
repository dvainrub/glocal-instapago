"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const LinearDesign = dynamic(() => import("@/designs/linear"), {
  loading: () => <div className="min-h-screen bg-gray-50" />,
});

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <LinearDesign />
    </Suspense>
  );
}
