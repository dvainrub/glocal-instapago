// Shared UI constants for tool catalog and comparison views

import { type Category, type RecommendationTier, type SkillLevel } from "@/data/tools";
import {
  Zap,
  Bot,
  Search,
  Presentation,
  Code2,
  Layers,
} from "lucide-react";
import React from "react";

// Category icons
export const categoryIcons: Record<Category, React.ReactNode> = {
  automatizacion: React.createElement(Zap, { className: "h-3.5 w-3.5" }),
  agentes: React.createElement(Bot, { className: "h-3.5 w-3.5" }),
  conocimiento: React.createElement(Search, { className: "h-3.5 w-3.5" }),
  creatividad: React.createElement(Presentation, { className: "h-3.5 w-3.5" }),
  nocode: React.createElement(Layers, { className: "h-3.5 w-3.5" }),
  desarrollo: React.createElement(Code2, { className: "h-3.5 w-3.5" }),
};

// Category colors (Tailwind classes)
export const categoryColors: Record<Category, string> = {
  automatizacion: "bg-amber-50 text-amber-700 border-amber-200",
  agentes: "bg-teal-50 text-teal-700 border-teal-200",
  conocimiento: "bg-blue-50 text-blue-700 border-blue-200",
  creatividad: "bg-purple-50 text-purple-700 border-purple-200",
  nocode: "bg-pink-50 text-pink-700 border-pink-200",
  desarrollo: "bg-slate-100 text-slate-700 border-slate-200",
};

// Tier styling
export const tierStyles: Record<NonNullable<RecommendationTier>, { bg: string; text: string; border: string }> = {
  tier1: {
    bg: "bg-gradient-to-r from-amber-50 to-yellow-50",
    text: "text-amber-700",
    border: "border-amber-200",
  },
  tier2: {
    bg: "bg-gradient-to-r from-emerald-50 to-green-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
  },
  tier3: {
    bg: "bg-gradient-to-r from-orange-50 to-amber-50",
    text: "text-orange-700",
    border: "border-orange-200",
  },
};

// Skill level styling
export const levelStyles: Record<SkillLevel, string> = {
  principiante: "bg-emerald-50 text-emerald-700 border-emerald-200",
  intermedio: "bg-yellow-50 text-yellow-700 border-yellow-200",
  avanzado: "bg-red-50 text-red-700 border-red-200",
};
