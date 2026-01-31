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
      es: "Mejor Opcion",
    } as Localized<string>,
    tier2: {
      en: "Great",
      es: "Excelente",
    } as Localized<string>,
    tier3: {
      en: "Good",
      es: "Bueno",
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

  // Footer / Resources toggle
  footer: {
    resources: {
      en: "Resources",
      es: "Recursos",
    } as Localized<string>,
    noResource: {
      en: "No resource linked",
      es: "Sin recurso vinculado",
    } as Localized<string>,
  },

  // Compare feature
  compare: {
    toggle: {
      en: "Compare",
      es: "Comparar",
    } as Localized<string>,
    addToCompare: {
      en: "Add to compare",
      es: "Agregar",
    } as Localized<string>,
    removeFromCompare: {
      en: "Remove",
      es: "Quitar",
    } as Localized<string>,
    compareButton: {
      en: "Compare",
      es: "Comparar",
    } as Localized<string>,
    addTool: {
      en: "Add tool",
      es: "Agregar herramienta",
    } as Localized<string>,
    searchTools: {
      en: "Search tools...",
      es: "Buscar herramientas...",
    } as Localized<string>,
    maxTools: {
      en: "Maximum 5 tools",
      es: "Maximo 5 herramientas",
    } as Localized<string>,
    minTools: {
      en: "Select at least 2 tools",
      es: "Selecciona al menos 2 herramientas",
    } as Localized<string>,
    backToCatalog: {
      en: "Back to catalog",
      es: "Volver al catalogo",
    } as Localized<string>,
    description: {
      en: "Description",
      es: "Descripcion",
    } as Localized<string>,
    details: {
      en: "Details",
      es: "Detalles",
    } as Localized<string>,
    noToolsSelected: {
      en: "No tools selected for comparison",
      es: "No hay herramientas seleccionadas para comparar",
    } as Localized<string>,
    selectFromCatalog: {
      en: "Select tools from the catalog to compare them",
      es: "Selecciona herramientas del catalogo para compararlas",
    } as Localized<string>,
  },
} as const;
