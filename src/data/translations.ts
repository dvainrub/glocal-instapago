// UI translations - all static strings in colocated format
import { type Localized } from "@/lib/i18n";

export const ui = {
  // Header
  header: {
    title: {
      en: "AI Stack Recommended by Rebundle",
      es: "Stack IA Recomendado por Rebundle",
    } as Localized<string>,
    subtitle: {
      en: "Explore the best artificial intelligence tools for your organization",
      es: "Explora las mejores herramientas de inteligencia artificial para tu organización",
    } as Localized<string>,
  },

  // Filters
  filters: {
    recommendation: {
      en: "Recommendation:",
      es: "Recomendación:",
    } as Localized<string>,
    category: {
      en: "Category:",
      es: "Categoría:",
    } as Localized<string>,
    level: {
      en: "Level:",
      es: "Nivel:",
    } as Localized<string>,
    all: {
      en: "All",
      es: "Todas",
    } as Localized<string>,
  },

  // Tool card sections
  card: {
    pricing: {
      en: "Pricing",
      es: "Precios",
    } as Localized<string>,
    useCases: {
      en: "Use Cases",
      es: "Casos de Uso",
    } as Localized<string>,
    whyItsGood: {
      en: "Why It's Good",
      es: "Por Qué Es Bueno",
    } as Localized<string>,
    visit: {
      en: "Visit",
      es: "Visitar",
    } as Localized<string>,
  },

  // Empty state
  empty: {
    noTools: {
      en: "No tools match these filters",
      es: "No hay herramientas con estos filtros",
    } as Localized<string>,
  },

  // Language toggle
  langToggle: {
    en: {
      en: "EN",
      es: "EN",
    } as Localized<string>,
    es: {
      en: "ES",
      es: "ES",
    } as Localized<string>,
  },

  // Category labels
  categories: {
    automatizacion: {
      en: "Automation",
      es: "Automatización",
    } as Localized<string>,
    agentes: {
      en: "Agents",
      es: "Agentes",
    } as Localized<string>,
    conocimiento: {
      en: "Knowledge",
      es: "Conocimiento",
    } as Localized<string>,
    creatividad: {
      en: "Creativity",
      es: "Creatividad",
    } as Localized<string>,
    nocode: {
      en: "No-Code",
      es: "No-Code",
    } as Localized<string>,
    desarrollo: {
      en: "Development",
      es: "Desarrollo",
    } as Localized<string>,
  },

  // Tier labels
  tiers: {
    tier1: {
      en: "Top Pick",
      es: "Top Pick",
    } as Localized<string>,
    tier2: {
      en: "Great",
      es: "Great",
    } as Localized<string>,
    tier3: {
      en: "Good",
      es: "Good",
    } as Localized<string>,
  },

  // Tier descriptions
  tierDescriptions: {
    tier1: {
      en: "Highly Recommended",
      es: "Altamente Recomendado",
    } as Localized<string>,
    tier2: {
      en: "Recommended",
      es: "Recomendado",
    } as Localized<string>,
    tier3: {
      en: "Optional",
      es: "Opcional",
    } as Localized<string>,
  },

  // Skill levels
  levels: {
    principiante: {
      en: "Beginner",
      es: "Principiante",
    } as Localized<string>,
    intermedio: {
      en: "Intermediate",
      es: "Intermedio",
    } as Localized<string>,
    avanzado: {
      en: "Advanced",
      es: "Avanzado",
    } as Localized<string>,
  },
} as const;
