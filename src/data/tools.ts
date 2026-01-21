// Datos centralizados de herramientas IA para Instapago/Glocal Solution

export type SkillLevel = "principiante" | "intermedio" | "avanzado";

export type Department =
  | "finanzas"
  | "admin"
  | "rrhh"
  | "tech"
  | "ventas"
  | "marketing"
  | "legal"
  | "operaciones"
  | "todos";

export type Category =
  | "automatizacion"
  | "investigacion"
  | "presentaciones"
  | "datos"
  | "nocode"
  | "desarrollo"
  | "video"
  | "diseno";

export interface PricingTier {
  plan: string;
  precio: string;
  caracteristicas: string;
}

export interface Tool {
  id: string;
  nombre: string;
  url: string;
  descripcion: string;
  descripcionCorta: string;
  categoria: Category;
  nivel: SkillLevel;
  departamentos: Department[];
  precios: PricingTier[];
  casosDeUso: string[];
  porQueEsBueno: string[];
}

export const categoryLabels: Record<Category, string> = {
  automatizacion: "Automatizacion",
  investigacion: "Investigacion",
  presentaciones: "Presentaciones",
  datos: "Analisis de Datos",
  nocode: "No-Code",
  desarrollo: "Desarrollo",
  video: "Video",
  diseno: "Diseno",
};

export const departmentLabels: Record<Department, string> = {
  finanzas: "Finanzas",
  admin: "Admin",
  rrhh: "RRHH",
  tech: "Tech",
  ventas: "Ventas",
  marketing: "Marketing",
  legal: "Legal",
  operaciones: "Operaciones",
  todos: "Todos",
};

export const levelLabels: Record<SkillLevel, string> = {
  principiante: "Principiante",
  intermedio: "Intermedio",
  avanzado: "Avanzado",
};

export const levelColors: Record<SkillLevel, string> = {
  principiante: "bg-green-100 text-green-800",
  intermedio: "bg-yellow-100 text-yellow-800",
  avanzado: "bg-red-100 text-red-800",
};

export const tools: Tool[] = [
  // AUTOMATIZACION
  {
    id: "make",
    nombre: "Make.com",
    url: "https://make.com",
    descripcion:
      "Plataforma visual de automatizacion que conecta aplicaciones y automatiza flujos de trabajo complejos. Interfaz tipo canvas donde arrastras y conectas modulos para crear automatizaciones sin codigo.",
    descripcionCorta: "Automatizacion visual sin codigo",
    categoria: "automatizacion",
    nivel: "intermedio",
    departamentos: ["finanzas", "admin", "tech", "operaciones"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "1,000 ops/mes" },
      { plan: "Core", precio: "$9/mes", caracteristicas: "10,000 ops/mes" },
      { plan: "Pro", precio: "$16/mes", caracteristicas: "Ejecucion prioritaria" },
      { plan: "Teams", precio: "$29/mes", caracteristicas: "Roles de equipo" },
    ],
    casosDeUso: [
      "Automatizar reconciliacion de facturas",
      "Sincronizar datos entre CRM y hojas de calculo",
      "Alertas de pagos vencidos",
      "Onboarding automatico de empleados",
    ],
    porQueEsBueno: [
      "Interfaz visual tipo diagrama de flujo",
      "Miles de integraciones preconfiguradas",
      "Templates listos para casos comunes",
    ],
  },
  {
    id: "zapier",
    nombre: "Zapier",
    url: "https://zapier.com",
    descripcion:
      "La plataforma de automatizacion mas popular del mercado. Conecta mas de 6,000 aplicaciones con automatizaciones llamadas 'Zaps'. Ideal para automatizaciones simples.",
    descripcionCorta: "Automatizacion simple para todos",
    categoria: "automatizacion",
    nivel: "principiante",
    departamentos: ["finanzas", "admin", "ventas", "todos"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "100 tareas/mes" },
      { plan: "Starter", precio: "$20/mes", caracteristicas: "750 tareas/mes" },
      { plan: "Professional", precio: "$49/mes", caracteristicas: "2,000 tareas/mes" },
      { plan: "Team", precio: "$69/mes", caracteristicas: "Por usuario" },
    ],
    casosDeUso: [
      "Notificaciones de nuevas transacciones",
      "Guardar adjuntos de email automaticamente",
      "Agregar leads de formularios a CRM",
      "Sincronizar contabilidad",
    ],
    porQueEsBueno: [
      "La interfaz mas simple del mercado",
      "Documentacion y tutoriales extensos",
      "AI integrada para sugerir automatizaciones",
    ],
  },

  // INVESTIGACION
  {
    id: "perplexity",
    nombre: "Perplexity AI",
    url: "https://perplexity.ai",
    descripcion:
      "Motor de busqueda potenciado por IA que proporciona respuestas directas con citas de fuentes. Combina busqueda con modelos de lenguaje para respuestas precisas y verificables.",
    descripcionCorta: "Busqueda IA con fuentes citadas",
    categoria: "investigacion",
    nivel: "principiante",
    departamentos: ["todos", "legal", "finanzas"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "5 busquedas Pro/dia" },
      { plan: "Pro", precio: "$20/mes", caracteristicas: "Busquedas ilimitadas" },
      { plan: "Enterprise", precio: "Personalizado", caracteristicas: "SSO, admin" },
    ],
    casosDeUso: [
      "Buscar informacion de mercado con fuentes",
      "Investigar regulaciones con referencias",
      "Analisis competitivo actualizado",
    ],
    porQueEsBueno: [
      "Respuestas directas sin filtrar webs",
      "Cita fuentes automaticamente",
      "Interfaz conversacional natural",
    ],
  },
  {
    id: "genspark",
    nombre: "Genspark",
    url: "https://genspark.ai",
    descripcion:
      "Motor de busqueda IA que genera 'Sparkpages' - paginas personalizadas que compilan informacion de multiples fuentes en formato organizado.",
    descripcionCorta: "Paginas de investigacion compiladas",
    categoria: "investigacion",
    nivel: "principiante",
    departamentos: ["marketing", "ventas", "operaciones"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "Sparkpages limitados" },
      { plan: "Plus", precio: "$20/mes", caracteristicas: "Ilimitados" },
      { plan: "Pro", precio: "$199/mes", caracteristicas: "API access" },
    ],
    casosDeUso: [
      "Generar briefs de mercado",
      "Research de prospectos presentable",
      "Analisis de competencia estructurado",
    ],
    porQueEsBueno: [
      "Formato visual organizado",
      "Compila multiples fuentes automaticamente",
      "Facil de compartir",
    ],
  },
  {
    id: "notebooklm",
    nombre: "NotebookLM",
    url: "https://notebooklm.google.com",
    descripcion:
      "Herramienta de Google que permite subir documentos y hacer preguntas sobre ellos. El IA solo responde basandose en TUS documentos, eliminando alucinaciones.",
    descripcionCorta: "Q&A sobre tus propios documentos",
    categoria: "investigacion",
    nivel: "principiante",
    departamentos: ["legal", "finanzas", "rrhh"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "100 notebooks" },
      { plan: "Plus", precio: "$20/mes", caracteristicas: "Cuotas ampliadas" },
      { plan: "Enterprise", precio: "Incluido", caracteristicas: "Via Workspace" },
    ],
    casosDeUso: [
      "Analizar contratos y documentos legales",
      "Extraer insights de reportes financieros",
      "Responder preguntas sobre politicas internas",
    ],
    porQueEsBueno: [
      "Solo responde de TUS documentos",
      "Genera podcasts automaticos",
      "Integrado con Google Workspace",
    ],
  },
  {
    id: "notion-ai",
    nombre: "Notion AI",
    url: "https://notion.so/product/ai",
    descripcion:
      "IA integrada dentro de Notion que ayuda a escribir, resumir, traducir y organizar contenido. Tiene acceso a todo tu workspace para respuestas contextualizadas.",
    descripcionCorta: "IA dentro de tu workspace Notion",
    categoria: "investigacion",
    nivel: "principiante",
    departamentos: ["todos", "admin", "operaciones"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "20 respuestas" },
      { plan: "AI Add-on", precio: "$10/mes", caracteristicas: "Por usuario" },
      { plan: "Business + AI", precio: "$18/mes", caracteristicas: "Por usuario" },
    ],
    casosDeUso: [
      "Resumir meeting notes automaticamente",
      "Generar action items de documentos",
      "Q&A sobre base de conocimiento",
    ],
    porQueEsBueno: [
      "Integrado donde ya trabajas",
      "Conoce tu contexto organizacional",
      "Multiples funciones IA en uno",
    ],
  },

  // PRESENTACIONES
  {
    id: "gamma",
    nombre: "Gamma",
    url: "https://gamma.app",
    descripcion:
      "Plataforma que genera presentaciones, documentos y sitios web completos a partir de texto. Describe lo que quieres y Gamma crea slides profesionales automaticamente.",
    descripcionCorta: "Presentaciones generadas por IA",
    categoria: "presentaciones",
    nivel: "principiante",
    departamentos: ["ventas", "finanzas", "marketing", "todos"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "400 creditos" },
      { plan: "Plus", precio: "$10/mes", caracteristicas: "400/mes" },
      { plan: "Pro", precio: "$20/mes", caracteristicas: "Ilimitados" },
    ],
    casosDeUso: [
      "Generar pitch decks rapidamente",
      "Presentaciones de resultados trimestrales",
      "Informes board-ready en minutos",
    ],
    porQueEsBueno: [
      "Texto a presentacion completa",
      "Diseno profesional automatico",
      "Edicion facil tipo Notion",
    ],
  },

  // ANALISIS DE DATOS
  {
    id: "chatgpt",
    nombre: "ChatGPT Code Interpreter",
    url: "https://chat.openai.com",
    descripcion:
      "Funcionalidad de ChatGPT que permite subir archivos y ejecutar codigo Python para analisis. Puede procesar Excel, CSV, imagenes, PDFs y generar visualizaciones.",
    descripcionCorta: "Analisis de datos con IA conversacional",
    categoria: "datos",
    nivel: "principiante",
    departamentos: ["finanzas", "operaciones", "todos"],
    precios: [
      { plan: "Plus", precio: "$20/mes", caracteristicas: "Incluido" },
      { plan: "Team", precio: "$25/mes", caracteristicas: "Por usuario" },
      { plan: "Enterprise", precio: "Personalizado", caracteristicas: "SSO" },
    ],
    casosDeUso: [
      "Analisis de hojas de calculo complejas",
      "Limpieza y transformacion de datos",
      "Generacion automatica de graficos",
    ],
    porQueEsBueno: [
      "Preguntas en espanol natural",
      "Genera graficos automaticamente",
      "Explica resultados en lenguaje simple",
    ],
  },
  {
    id: "rows",
    nombre: "Rows.com",
    url: "https://rows.com",
    descripcion:
      "Hoja de calculo moderna con IA integrada y conexiones a APIs. Combina la familiaridad de Excel con funciones que conectan a bases de datos y tienen IA nativa.",
    descripcionCorta: "Excel moderno con IA y APIs",
    categoria: "datos",
    nivel: "intermedio",
    departamentos: ["finanzas", "ventas", "operaciones"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "10 integraciones" },
      { plan: "Plus", precio: "$59/mes", caracteristicas: "50 integraciones" },
      { plan: "Pro", precio: "$249/mes", caracteristicas: "Ilimitadas" },
    ],
    casosDeUso: [
      "Dashboards que se actualizan desde APIs",
      "CRM ligero con datos de multiples fuentes",
      "Reportes automatizados",
    ],
    porQueEsBueno: [
      "Familiar como Excel",
      "Conecta a APIs sin codigo",
      "IA nativa para formulas",
    ],
  },

  // NO-CODE
  {
    id: "lovable",
    nombre: "Lovable",
    url: "https://lovable.dev",
    descripcion:
      "Plataforma que convierte descripciones en texto en aplicaciones web funcionales. Describe tu app, Lovable genera el codigo y la despliega automaticamente.",
    descripcionCorta: "Apps web desde texto",
    categoria: "nocode",
    nivel: "intermedio",
    departamentos: ["operaciones", "rrhh", "ventas"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "5 creditos" },
      { plan: "Starter", precio: "$20/mes", caracteristicas: "100 creditos" },
      { plan: "Launch", precio: "$50/mes", caracteristicas: "500 creditos" },
      { plan: "Scale", precio: "$100/mes", caracteristicas: "Ilimitados" },
    ],
    casosDeUso: [
      "Crear herramientas internas rapidamente",
      "Portales de empleados custom",
      "Calculadoras para clientes",
    ],
    porQueEsBueno: [
      "Describe en espanol, obtiene app completa",
      "Sin necesidad de entender codigo",
      "Deployment automatico",
    ],
  },
  {
    id: "base44",
    nombre: "Base44",
    url: "https://base44.com",
    descripcion:
      "Plataforma no-code asistida por IA que permite construir aplicaciones full-stack sin escribir codigo. El IA traduce requerimientos en lenguaje natural a apps funcionales.",
    descripcionCorta: "Apps full-stack sin codigo",
    categoria: "nocode",
    nivel: "intermedio",
    departamentos: ["finanzas", "admin", "operaciones"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "25 mensajes/mes" },
      { plan: "Starter", precio: "$20/mes", caracteristicas: "100 mensajes" },
      { plan: "Builder", precio: "$50/mes", caracteristicas: "250 mensajes" },
      { plan: "Pro", precio: "$100/mes", caracteristicas: "500 mensajes" },
    ],
    casosDeUso: [
      "Sistemas de gestion de gastos internos",
      "Portales de solicitudes",
      "Apps de tracking de inventario",
    ],
    porQueEsBueno: [
      "IA traduce texto a codigo",
      "Integraciones con 100+ servicios",
      "Deploy incluido",
    ],
  },
  {
    id: "claude-artifacts",
    nombre: "Claude Artifacts",
    url: "https://claude.ai",
    descripcion:
      "Funcionalidad de Claude que genera contenido interactivo y funcional en tiempo real. Crea apps web, visualizaciones, documentos interactivos y componentes que se ejecutan en el chat.",
    descripcionCorta: "Herramientas interactivas instantaneas",
    categoria: "nocode",
    nivel: "avanzado",
    departamentos: ["finanzas", "rrhh", "todos"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "Limites de uso" },
      { plan: "Pro", precio: "$20/mes", caracteristicas: "Uso expandido" },
      { plan: "Business", precio: "$25/mes", caracteristicas: "Por usuario" },
      { plan: "Max", precio: "$100/mes", caracteristicas: "Cuotas mayores" },
    ],
    casosDeUso: [
      "Calculadoras de ROI interactivas",
      "Dashboards de presupuesto",
      "Quizzes y simulaciones de formacion",
    ],
    porQueEsBueno: [
      "Herramienta funcional inmediata",
      "Sin deployment ni configuracion",
      "Compartir con un click",
    ],
  },

  // DESARROLLO
  {
    id: "claude-code",
    nombre: "Claude Code",
    url: "https://claude.ai",
    descripcion:
      "CLI de desarrollo de Anthropic que convierte a Claude en un asistente de programacion en tu terminal. Lee tu codebase, ejecuta comandos, edita archivos y gestiona git.",
    descripcionCorta: "Asistente de desarrollo en terminal",
    categoria: "desarrollo",
    nivel: "avanzado",
    departamentos: ["tech"],
    precios: [
      { plan: "Pro", precio: "$20/mes", caracteristicas: "Incluido" },
      { plan: "Business Premium", precio: "$150/mes", caracteristicas: "Por usuario" },
    ],
    casosDeUso: [
      "Desarrollo asistido por IA",
      "Refactoring automatico de codigo",
      "Debugging conversacional",
    ],
    porQueEsBueno: [
      "Entiende todo tu proyecto",
      "Ejecuta y edita directamente",
      "Gestiona git automaticamente",
    ],
  },

  // VIDEO
  {
    id: "loom",
    nombre: "Loom",
    url: "https://loom.com",
    descripcion:
      "Plataforma de grabacion de pantalla y video messaging. Graba tu pantalla con camara, edita y comparte instantaneamente. Ideal para comunicacion asincrona.",
    descripcionCorta: "Videos rapidos para comunicar",
    categoria: "video",
    nivel: "principiante",
    departamentos: ["todos", "admin", "finanzas"],
    precios: [
      { plan: "Starter", precio: "$0", caracteristicas: "25 videos, 5 min" },
      { plan: "Business", precio: "$12.50/mes", caracteristicas: "Ilimitados" },
      { plan: "Enterprise", precio: "Personalizado", caracteristicas: "SSO" },
    ],
    casosDeUso: [
      "Tutoriales paso a paso sin reuniones",
      "Explicar procesos complejos visualmente",
      "Comunicar cambios de politicas",
    ],
    porQueEsBueno: [
      "Un click para grabar",
      "Transcripcion automatica",
      "Links compartibles instantaneos",
    ],
  },

  // DISENO
  {
    id: "canva",
    nombre: "Canva",
    url: "https://canva.com",
    descripcion:
      "Plataforma de diseno con IA (Magic Studio) que democratiza la creacion visual. Templates profesionales, generacion de imagenes IA, y edicion inteligente sin conocimientos de diseno.",
    descripcionCorta: "Diseno profesional para todos",
    categoria: "diseno",
    nivel: "principiante",
    departamentos: ["marketing", "admin", "rrhh", "todos"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "Templates basicos" },
      { plan: "Pro", precio: "$13/mes", caracteristicas: "500 usos IA/mes" },
      { plan: "Teams", precio: "$15/mes", caracteristicas: "Primeros 5 usuarios" },
      { plan: "Enterprise", precio: "Personalizado", caracteristicas: "SSO" },
    ],
    casosDeUso: [
      "Infografias de presupuesto",
      "Manuales y comunicacion interna",
      "Contenido para redes sociales",
    ],
    porQueEsBueno: [
      "Cero experiencia de diseno necesaria",
      "Magic Write genera texto",
      "Arrastrar y soltar intuitivo",
    ],
  },
];

// Helpers
export function getToolsByCategory(category: Category): Tool[] {
  return tools.filter((t) => t.categoria === category);
}

export function getToolsByDepartment(department: Department): Tool[] {
  return tools.filter((t) => t.departamentos.includes(department));
}

export function getToolsByLevel(level: SkillLevel): Tool[] {
  return tools.filter((t) => t.nivel === level);
}

export function getCategories(): Category[] {
  return [...new Set(tools.map((t) => t.categoria))];
}
