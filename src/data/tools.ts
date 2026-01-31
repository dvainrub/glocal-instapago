// Centralized AI tools data for Rebundle - Bilingual (EN/ES)

import { type Localized } from "@/lib/i18n";

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
  | "agentes"
  | "conocimiento"
  | "creatividad"
  | "nocode"
  | "desarrollo";

export type RecommendationTier = "tier1" | "tier2" | "tier3" | null;

export interface PricingTier {
  plan: string;
  precio: string;
  caracteristicas: Localized<string>;
}

export interface Tool {
  id: string;
  nombre: string;
  url: string;
  descripcion: Localized<string>;
  descripcionCorta: Localized<string>;
  categoria: Category;
  nivel: SkillLevel;
  tier: RecommendationTier;
  departamentos: Department[];
  precios: PricingTier[];
  casosDeUso: Localized<string[]>;
  porQueEsBueno: Localized<string[]>;
}

export const tools: Tool[] = [
  // AUTOMATIZACION
  {
    id: "make",
    nombre: "Make.com",
    url: "https://make.com",
    descripcion: {
      en: "Visual automation platform that lets you create complex workflows connecting over 1,800 applications. Stands out for its canvas-style interface with advanced logic (conditionals, loops, routers) and native JSON/XML data handling.",
      es: "Plataforma de automatización visual que permite crear flujos de trabajo complejos conectando más de 1,800 aplicaciones. Destaca por su interfaz tipo canvas con lógica avanzada (condicionales, loops, routers) y manejo nativo de datos JSON/XML.",
    },
    descripcionCorta: {
      en: "Visual automation with advanced logic",
      es: "Automatización visual con lógica avanzada",
    },
    categoria: "automatizacion",
    nivel: "principiante",
    tier: "tier1",
    departamentos: ["finanzas", "admin", "tech", "operaciones", "rrhh"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: { en: "1,000 ops/month, 2 scenarios", es: "1,000 ops/mes, 2 escenarios" } },
      { plan: "Core", precio: "$9/mo", caracteristicas: { en: "10,000 ops/month, unlimited", es: "10,000 ops/mes, ilimitados" } },
      { plan: "Pro", precio: "$16/mo", caracteristicas: { en: "Priority execution, real-time", es: "Ejecución prioritaria, tiempo real" } },
      { plan: "Teams", precio: "$29/mo", caracteristicas: { en: "Collaboration, permissions", es: "Colaboración, permisos" } },
    ],
    casosDeUso: {
      en: [
        "Finance: Automatic bank reconciliation matching statements with invoices",
        "Admin: Generate contracts from forms and send for digital signature",
        "HR: Complete onboarding workflow (system access, accounts, equipment)",
        "Tech: Sync Jira tickets with Slack, monitoring alerts",
        "Sales: Enrich leads with LinkedIn/Clearbit data to CRM",
        "Marketing: Segment audiences and trigger personalized campaigns",
        "Marketing: AI-powered campaign automation with GPT integration",
      ],
      es: [
        "Finanzas: Conciliación bancaria automática cruzando extractos con facturas",
        "Admin: Generar contratos desde formularios y enviar a firma digital",
        "RRHH: Flujo de onboarding completo (alta en sistemas, cuentas, equipos)",
        "Tech: Sincronizar tickets Jira con Slack, alertas de monitoreo",
        "Ventas: Enriquecer leads con datos de LinkedIn/Clearbit al CRM",
        "Marketing: Segmentar audiencias y activar campañas personalizadas",
        "Marketing: Automatización de campañas con IA e integración GPT",
      ],
    },
    porQueEsBueno: {
      en: [
        "Cost per operation 4-6x cheaper than Zapier at high volume",
        "Advanced logic: routers, iterators, granular error handling",
        "Superior visual interface showing real-time data flow",
        "Ideal for complex automations with multiple branches",
      ],
      es: [
        "Precio por operación 4-6x más barato que Zapier en alto volumen",
        "Lógica avanzada: routers, iteradores, manejo de errores granular",
        "Interfaz visual superior que muestra datos en tiempo real",
        "Ideal para automatizaciones complejas con múltiples ramas",
      ],
    },
  },
  {
    id: "zapier",
    nombre: "Zapier",
    url: "https://zapier.com",
    descripcion: {
      en: "The most popular and easy-to-use automation platform, connecting 6,000+ applications. Perfect for non-technical users who need to create quick automations with the market's largest integration library.",
      es: "La plataforma de automatización más popular y fácil de usar, conectando más de 6,000+ aplicaciones. Perfecta para usuarios no técnicos que necesitan crear automatizaciones rápidas con la biblioteca de integraciones más amplia del mercado.",
    },
    descripcionCorta: {
      en: "Simple automation with most integrations",
      es: "Automatización simple con más integraciones",
    },
    categoria: "automatizacion",
    nivel: "principiante",
    tier: "tier3",
    departamentos: ["finanzas", "admin", "ventas", "marketing", "todos"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: { en: "100 tasks/month, 5 Zaps", es: "100 tareas/mes, 5 Zaps" } },
      { plan: "Starter", precio: "$20/mo", caracteristicas: { en: "750 tasks/month, multi-step", es: "750 tareas/mes, multi-paso" } },
      { plan: "Professional", precio: "$49/mo", caracteristicas: { en: "2,000 tasks/month, paths", es: "2,000 tareas/mes, paths" } },
      { plan: "Team", precio: "$69/mo", caracteristicas: { en: "Per user, shared", es: "Por usuario, compartido" } },
    ],
    casosDeUso: {
      en: [
        "Finance: Notify Stripe/QuickBooks payments and send to accounting",
        "Admin: Create tasks in Asana/Monday from incoming emails",
        "HR: Post job offers to multiple platforms",
        "Sales: Add Calendly contacts to HubSpot automatically",
        "Marketing: Sync subscribers between Mailchimp and Google Sheets",
        "Marketing: AI social media posting across platforms",
      ],
      es: [
        "Finanzas: Notificar pagos de Stripe/QuickBooks y enviar a contabilidad",
        "Admin: Crear tareas en Asana/Monday desde emails entrantes",
        "RRHH: Publicar ofertas de empleo en múltiples plataformas",
        "Ventas: Añadir contactos de Calendly a HubSpot automáticamente",
        "Marketing: Sincronizar suscriptores entre Mailchimp y Google Sheets",
        "Marketing: Publicación automática en redes sociales con IA",
      ],
    },
    porQueEsBueno: {
      en: [
        "Largest integration library in the market (6,000+ apps)",
        "Minimal learning curve: automations in minutes",
        "Best documentation and support with pre-built templates",
        "Established brand, ideal for companies prioritizing stability",
      ],
      es: [
        "Biblioteca de integraciones más grande del mercado (6,000+ apps)",
        "Curva de aprendizaje mínima: automatizaciones en minutos",
        "Mejor documentación y soporte con templates pre-construidos",
        "Marca establecida, ideal para empresas que priorizan estabilidad",
      ],
    },
  },
  {
    id: "n8n",
    nombre: "n8n",
    url: "https://n8n.io",
    descripcion: {
      en: "Open-source automation platform with self-hosted option for total data control. Supports native JavaScript/Python and has 70+ AI-dedicated nodes via LangChain. Workflow-based pricing model that's more economical at high volume.",
      es: "Plataforma de automatización open-source con opción self-hosted para control total de datos. Soporta JavaScript/Python nativo y tiene 70+ nodos dedicados a IA via LangChain. Modelo de precios por workflow que resulta más económico en alto volumen.",
    },
    descripcionCorta: {
      en: "Open-source automation with self-hosting",
      es: "Automatización open-source con self-hosting",
    },
    categoria: "automatizacion",
    nivel: "avanzado",
    tier: "tier3",
    departamentos: ["tech", "operaciones", "finanzas"],
    precios: [
      { plan: "Self-hosted", precio: "$0", caracteristicas: { en: "Free, unlimited, your infra", es: "Gratis, ilimitado, tu infra" } },
      { plan: "Starter Cloud", precio: "$22/mo", caracteristicas: { en: "2,500 executions", es: "2,500 ejecuciones" } },
      { plan: "Pro Cloud", precio: "$57/mo", caracteristicas: { en: "10,000 executions, collaboration", es: "10,000 ejecuciones, colaboración" } },
      { plan: "Enterprise", precio: "Custom", caracteristicas: { en: "SSO, SLA, support", es: "SSO, SLA, soporte" } },
    ],
    casosDeUso: {
      en: [
        "Tech: Data pipelines with complex JavaScript transformations",
        "Operations: Automations with strict privacy/compliance requirements",
        "Finance: Internal processes that can't leave your infrastructure",
        "Marketing: Build AI agents with LangChain for multi-step content workflows",
        "Admin: High-volume workflows where cost per execution matters",
        "Tech: Build autonomous AI agents with multi-agent orchestration workflows",
      ],
      es: [
        "Tech: Pipelines de datos con transformaciones complejas en JavaScript",
        "Operaciones: Automatizaciones con requisitos estrictos de privacidad/compliance",
        "Finanzas: Procesos internos que no pueden salir de la infraestructura propia",
        "Marketing: Construir agentes IA con LangChain para flujos de contenido multi-paso",
        "Admin: Workflows de alto volumen donde el costo por ejecución importa",
        "Tech: Construir agentes IA autónomos con flujos de orquestación multi-agente",
      ],
    },
    porQueEsBueno: {
      en: [
        "Self-hosting: total data control for compliance and privacy",
        "70+ AI nodes for building autonomous agents with multi-agent orchestration",
        "Native JavaScript/Python code for advanced transformations",
        "Workflow-based pricing (not per task) - more economical at high volume",
      ],
      es: [
        "Self-hosting: control total de datos para compliance y privacidad",
        "70+ nodos de IA para construir agentes autónomos con orquestación multi-agente",
        "Código JavaScript/Python nativo para transformaciones avanzadas",
        "Precio por workflow (no por tarea) - más económico en alto volumen",
      ],
    },
  },

  // CONOCIMIENTO
  {
    id: "perplexity",
    nombre: "Perplexity AI",
    url: "https://perplexity.ai",
    descripcion: {
      en: "Conversational AI search engine that provides direct answers with citations from verified sources. Features Deep Research mode for comprehensive multi-step analysis, plus specialized tools like Perplexity Finance and Perplexity Patents for domain-specific research.",
      es: "Motor de búsqueda conversacional con IA que proporciona respuestas directas con citas de fuentes verificadas. Incluye modo Deep Research para análisis exhaustivo multi-paso, además de herramientas especializadas como Perplexity Finance y Perplexity Patents para investigación por dominio.",
    },
    descripcionCorta: {
      en: "AI search with verified sources",
      es: "Búsqueda con IA y fuentes verificadas",
    },
    categoria: "conocimiento",
    nivel: "principiante",
    tier: "tier2",
    departamentos: ["todos", "legal", "finanzas", "marketing", "ventas"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: { en: "5 Pro searches/day", es: "5 búsquedas Pro/día" } },
      { plan: "Pro", precio: "$20/mo", caracteristicas: { en: "300+ Pro/day, GPT-4/Claude", es: "300+ Pro/día, GPT-4/Claude" } },
      { plan: "Enterprise", precio: "Custom", caracteristicas: { en: "SSO, unlimited", es: "SSO, ilimitado" } },
    ],
    casosDeUso: {
      en: [
        "Finance: Research financial regulations with cited sources",
        "HR: Research competitor hiring practices and employer branding strategies",
        "Legal: Research case law and regulatory changes",
        "Marketing: Analyze market trends in real-time",
        "Sales: Research prospects and news before meetings",
        "Legal: Patent search and intellectual property research with Perplexity Patents",
        "Content: Write articles backed by real-time research",
      ],
      es: [
        "Finanzas: Investigar regulaciones financieras con fuentes citadas",
        "RRHH: Investigar prácticas de contratación de competidores y estrategias de employer branding",
        "Legal: Investigar jurisprudencia y cambios normativos",
        "Marketing: Analizar tendencias de mercado en tiempo real",
        "Ventas: Investigar prospectos y noticias antes de reuniones",
        "Legal: Búsqueda de patentes e investigación de propiedad intelectual con Perplexity Patents",
        "Contenido: Escribir artículos con investigación en tiempo real",
      ],
    },
    porQueEsBueno: {
      en: [
        "Responses include citations with links to original sources",
        "Deep Research mode: comprehensive analysis with 50+ sources in one report",
        "Specialized tools: Perplexity Finance for investors, Patents for IP research",
        "Combines multiple LLMs (GPT-4, Claude, Llama) in one interface",
      ],
      es: [
        "Respuestas incluyen citas con enlaces a fuentes originales",
        "Modo Deep Research: análisis exhaustivo con 50+ fuentes en un reporte",
        "Herramientas especializadas: Perplexity Finance para inversores, Patents para investigación IP",
        "Combina múltiples LLMs (GPT-4, Claude, Llama) en una interfaz",
      ],
    },
  },
  {
    id: "genspark",
    nombre: "Genspark",
    url: "https://genspark.ai",
    descripcion: {
      en: "AI search engine with specialized agents that generates 'Sparkpages' - informative pages synthesizing multiple sources. Includes Super Agent for autonomous browser tasks, AI Slides for presentations, AI Sheets for data analysis, and AI Developer for no-code apps.",
      es: "Motor de búsqueda con agentes especializados que genera 'Sparkpages' - páginas informativas sintetizando múltiples fuentes. Incluye Super Agent para tareas autónomas del navegador, AI Slides para presentaciones, AI Sheets para análisis de datos y AI Developer para apps sin código.",
    },
    descripcionCorta: {
      en: "Search that generates informative pages",
      es: "Búsqueda que genera páginas informativas",
    },
    categoria: "agentes",
    nivel: "principiante",
    tier: "tier1",
    departamentos: ["marketing", "ventas", "operaciones", "rrhh", "tech"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: { en: "Unlimited searches, basic", es: "Búsquedas ilimitadas, básico" } },
      { plan: "Plus", precio: "$20/mo", caracteristicas: { en: "Premium agents, speed", es: "Agentes premium, velocidad" } },
      { plan: "Pro", precio: "$199/mo", caracteristicas: { en: "API access [VERIFY]", es: "API access [VERIFICAR]" } },
    ],
    casosDeUso: {
      en: [
        "Marketing: Generate visual market research for stakeholders",
        "Operations: Compare vendors with automatic comparison tables",
        "HR: Create guides synthesizing industry best practices",
        "Tech: Research tech stacks with structured pros/cons",
        "Sales: Automate lead generation with prospect lists, contact details, and outreach templates",
        "All: Automate browser tasks (scheduling calls, sending emails, making bookings) with Super Agent",
      ],
      es: [
        "Marketing: Generar researches de mercado visuales para stakeholders",
        "Operaciones: Comparar proveedores con tablas comparativas automáticas",
        "RRHH: Crear guías sintetizando mejores prácticas de la industria",
        "Tech: Investigar stacks tecnológicos con pros/contras estructurados",
        "Ventas: Automatizar generación de leads con listas de prospectos, datos de contacto y plantillas de outreach",
        "Todos: Automatizar tareas del navegador (programar llamadas, enviar emails, hacer reservas) con Super Agent",
      ],
    },
    porQueEsBueno: {
      en: [
        "Sparkpages eliminate need to open multiple tabs",
        "Super Agent executes browser tasks autonomously: calls, emails, bookings",
        "Multi-tool suite: AI Slides, Sheets, Docs, Developer, Designer in one platform",
        "Actively filters SEO spam and advertising content",
      ],
      es: [
        "Sparkpages eliminan necesidad de abrir múltiples pestañas",
        "Super Agent ejecuta tareas del navegador de forma autónoma: llamadas, emails, reservas",
        "Suite multi-herramienta: AI Slides, Sheets, Docs, Developer, Designer en una plataforma",
        "Filtra activamente contenido SEO spam y publicitario",
      ],
    },
  },
  {
    id: "notebooklm",
    nombre: "NotebookLM",
    url: "https://notebooklm.google.com",
    descripcion: {
      en: "Google's research assistant that lets you upload your own documents (PDFs, Docs, websites) and generate a 'virtual expert' about that content. Famous for generating audio podcasts where two AI voices discuss your documents.",
      es: "Asistente de investigación de Google que permite subir documentos propios (PDFs, Docs, webs) y generar un 'experto virtual' sobre ese contenido. Famoso por generar podcasts de audio donde dos voces IA discuten tus documentos.",
    },
    descripcionCorta: {
      en: "Your virtual expert on your documents",
      es: "Tu experto virtual sobre tus documentos",
    },
    categoria: "conocimiento",
    nivel: "principiante",
    tier: "tier3",
    departamentos: ["legal", "finanzas", "rrhh", "tech", "operaciones"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: { en: "50 notebooks, Audio Overviews", es: "50 notebooks, Audio Overviews" } },
      { plan: "Plus", precio: "$10/mo", caracteristicas: { en: "Unlimited, 500 sources", es: "Ilimitados, 500 fuentes" } },
      { plan: "Enterprise", precio: "Included", caracteristicas: { en: "Via Google Workspace", es: "Via Google Workspace" } },
    ],
    casosDeUso: {
      en: [
        "Legal: Upload contracts for the team to query without reading everything",
        "HR: Internal chatbot about policies, manuals and benefits",
        "Finance: Analyze annual reports with audio summaries",
        "Tech: Technical documentation converted to queryable assistant",
        "Operations: Procedure manuals queryable via chat",
        "All: Create AI podcasts where two hosts discuss and explain your documents",
      ],
      es: [
        "Legal: Subir contratos para que el equipo pregunte sin leer todo",
        "RRHH: Chatbot interno sobre políticas, manuales y beneficios",
        "Finanzas: Analizar reportes anuales con resúmenes en audio",
        "Tech: Documentación técnica convertida en asistente consultable",
        "Operaciones: Manuales de procedimientos consultables por chat",
        "Todos: Crear podcasts IA donde dos presentadores discuten y explican tus documentos",
      ],
    },
    porQueEsBueno: {
      en: [
        "Audio Overviews: 10-15 min podcasts discussing your documents",
        "Grounded responses: only from YOUR documents, reduces hallucinations",
        "Native integration with Google Workspace",
        "Completely free for basic use",
      ],
      es: [
        "Audio Overviews: podcasts de 10-15 min discutiendo tus documentos",
        "Respuestas grounded: solo de TUS documentos, reduce alucinaciones",
        "Integración nativa con Google Workspace",
        "Completamente gratuito para uso básico",
      ],
    },
  },
  {
    id: "notion-ai",
    nombre: "Notion AI",
    url: "https://notion.so/product/ai",
    descripcion: {
      en: "AI assistant integrated into Notion that can write, summarize, translate and answer questions about your workspace. Uses your internal knowledge base to generate contextualized content and automate documentation tasks.",
      es: "Asistente de IA integrado en Notion que puede escribir, resumir, traducir y responder preguntas sobre tu espacio de trabajo. Utiliza tu base de conocimiento interna para generar contenido contextualizado y automatizar tareas de documentación.",
    },
    descripcionCorta: {
      en: "Writing assistant integrated in Notion",
      es: "Asistente de escritura integrado en Notion",
    },
    categoria: "conocimiento",
    nivel: "principiante",
    tier: "tier2",
    departamentos: ["todos", "admin", "operaciones", "rrhh", "marketing"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: { en: "20 limited responses", es: "20 respuestas limitadas" } },
      { plan: "AI Add-on", precio: "$10/mo", caracteristicas: { en: "Unlimited, per user", es: "Ilimitado, por usuario" } },
      { plan: "Business + AI", precio: "$18/mo", caracteristicas: { en: "Included, per user", es: "Incluido, por usuario" } },
    ],
    casosDeUso: {
      en: [
        "Finance: Summarize reports and generate narratives for presentations",
        "HR: Create job descriptions, summarize evaluations",
        "Marketing: Generate drafts, brainstorming, translate materials",
        "Tech: Document code and processes, create RFC templates",
        "Operations: Create automated SOPs, generate meeting notes",
      ],
      es: [
        "Finanzas: Resumir reportes y generar narrativas para presentaciones",
        "RRHH: Crear descripciones de puestos, resumir evaluaciones",
        "Marketing: Generar borradores, brainstorming, traducir materiales",
        "Tech: Documentar código y procesos, crear templates de RFCs",
        "Operaciones: Crear SOPs automatizados, generar actas de reuniones",
      ],
    },
    porQueEsBueno: {
      en: [
        "Integrated context: knows your entire workspace for specific answers",
        "Unified workflow: everything where you already work",
        "Q&A lets you find information in seconds",
        "Ideal for teams using Notion as their central operating system",
      ],
      es: [
        "Contexto integrado: conoce todo tu workspace para respuestas específicas",
        "Flujo de trabajo unificado: todo donde ya trabajas",
        "Q&A permite encontrar información en segundos",
        "Ideal para equipos que usan Notion como sistema operativo central",
      ],
    },
  },
  {
    id: "rows",
    nombre: "Rows.com",
    url: "https://rows.com",
    descripcion: {
      en: "Modern spreadsheet with native AI that lets you analyze data, automate tasks and connect to 50+ integrations (Google Analytics, HubSpot, Stripe) without code. Combines Excel familiarity with AI and API power.",
      es: "Spreadsheet moderno con IA nativa que permite analizar datos, automatizar tareas y conectarse a 50+ integraciones (Google Analytics, HubSpot, Stripe) sin código. Combina familiaridad de Excel con poder de IA y APIs.",
    },
    descripcionCorta: {
      en: "Spreadsheet with AI and native integrations",
      es: "Spreadsheet con IA e integraciones nativas",
    },
    categoria: "conocimiento",
    nivel: "intermedio",
    tier: "tier3",
    departamentos: ["finanzas", "ventas", "operaciones", "marketing", "tech"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: { en: "5 spreadsheets, 10 AI/month", es: "5 spreadsheets, 10 AI/mes" } },
      { plan: "Plus", precio: "$9/mo", caracteristicas: { en: "Unlimited, 250 AI/month", es: "Ilimitados, 250 AI/mes" } },
      { plan: "Pro", precio: "$18/mo", caracteristicas: { en: "1,000 AI/month, embeds", es: "1,000 AI/mes, embeds" } },
      { plan: "Team", precio: "$49+/mo", caracteristicas: { en: "Unlimited AI, SSO", es: "AI ilimitado, SSO" } },
    ],
    casosDeUso: {
      en: [
        "Marketing: Connect Analytics and social for live dashboards",
        "Finance: Integrate Stripe/PayPal for automatic revenue reports",
        "Sales: Sync HubSpot/Salesforce for real-time pipeline",
        "Tech: Monitor Mixpanel/Amplitude metrics with alerts",
        "Operations: Consolidate data from multiple sources automatically",
        "All: Use AI to analyze, classify, and extract data from spreadsheets",
      ],
      es: [
        "Marketing: Conectar Analytics y redes para dashboards en vivo",
        "Finanzas: Integrar Stripe/PayPal para reportes de ingresos automáticos",
        "Ventas: Sincronizar HubSpot/Salesforce para pipeline en tiempo real",
        "Tech: Monitorear métricas de Mixpanel/Amplitude con alertas",
        "Operaciones: Consolidar datos de múltiples fuentes automáticamente",
        "Todos: Usar IA para analizar, clasificar y extraer datos de hojas de cálculo",
      ],
    },
    porQueEsBueno: {
      en: [
        "Native integrations: connect to tools without Zapier",
        "AI Analyst: ask in natural language, get analysis",
        "Familiar for Excel/Google Sheets users",
        "Real-time collaboration with access controls",
      ],
      es: [
        "Integraciones nativas: conecta a herramientas sin Zapier",
        "AI Analyst: pregunta en lenguaje natural, obtiene análisis",
        "Familiar para usuarios de Excel/Google Sheets",
        "Colaboración en tiempo real con controles de acceso",
      ],
    },
  },
  {
    id: "manus",
    nombre: "Manus",
    url: "https://manus.im",
    descripcion: {
      en: "Autonomous AI agent that builds full-stack websites, creates presentations, analyzes data, and executes complex multi-step workflows. Features Wide Research mode running 100+ agents in parallel for comprehensive analysis, plus built-in website builder with database and Stripe integration.",
      es: "Agente de IA autónomo que construye sitios web full-stack, crea presentaciones, analiza datos y ejecuta workflows complejos multi-paso. Incluye modo Wide Research ejecutando 100+ agentes en paralelo para análisis exhaustivo, además de constructor de sitios web integrado con base de datos e integración Stripe.",
    },
    descripcionCorta: {
      en: "Autonomous agent that executes complex tasks",
      es: "Agente autónomo que ejecuta tareas complejas",
    },
    categoria: "agentes",
    nivel: "principiante",
    tier: "tier2",
    departamentos: ["tech", "operaciones", "marketing", "ventas", "finanzas"],
    precios: [
      { plan: "Credits", precio: "~$39/mo", caracteristicas: { en: "Credit system [VERIFY]", es: "Sistema de créditos [VERIFICAR]" } },
      { plan: "Enterprise", precio: "Contact", caracteristicas: { en: "Dedicated access, no queues", es: "Acceso dedicado, sin colas" } },
    ],
    casosDeUso: {
      en: [
        "Tech: Automate code research, create prototypes, scraping",
        "Marketing: Generate complete competitor reports with graphs",
        "Operations: Automate multi-step processes with various tools",
        "Sales: Research prospect companies and generate automatic briefings",
        "Finance: Compile data from multiple sources into structured reports",
        "Tech: Build full-stack websites and web applications without writing code",
      ],
      es: [
        "Tech: Automatizar investigación de código, crear prototipos, scraping",
        "Marketing: Generar reportes de competencia completos con gráficos",
        "Operaciones: Automatizar procesos multi-paso con varias herramientas",
        "Ventas: Investigar empresas prospectas y generar briefings automáticos",
        "Finanzas: Compilar datos de múltiples fuentes en reportes estructurados",
        "Tech: Crear sitios web y aplicaciones full-stack sin escribir código",
      ],
    },
    porQueEsBueno: {
      en: [
        "Wide Research: 100 parallel agents for comprehensive analysis in minutes",
        "Built-in website builder with database, Stripe, SEO, and analytics",
        "Generates complete deliverables: documents, spreadsheets, presentations, code",
        "Real web navigation: opens pages, clicks, fills forms, extracts data",
      ],
      es: [
        "Wide Research: 100 agentes en paralelo para análisis exhaustivo en minutos",
        "Constructor de sitios web integrado con base de datos, Stripe, SEO y analytics",
        "Genera entregables completos: documentos, spreadsheets, presentaciones, código",
        "Navegación web real: abre páginas, hace clicks, llena formularios, extrae datos",
      ],
    },
  },

  // CREATIVIDAD
  {
    id: "gamma",
    nombre: "Gamma",
    url: "https://gamma.app",
    descripcion: {
      en: "AI platform that automatically generates presentations, documents and websites from text or prompts. Transforms ideas into professional visual content in seconds, without manual design.",
      es: "Plataforma de IA que genera presentaciones, documentos y sitios web de forma automática a partir de texto o prompts. Transforma ideas en contenido visual profesional en segundos, sin necesidad de diseño manual.",
    },
    descripcionCorta: {
      en: "AI-powered automatic presentations",
      es: "Presentaciones con IA automáticas",
    },
    categoria: "creatividad",
    nivel: "principiante",
    tier: "tier2",
    departamentos: ["ventas", "finanzas", "marketing", "rrhh", "tech", "operaciones", "todos"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: { en: "400 credits, with branding", es: "400 créditos, con marca" } },
      { plan: "Plus", precio: "$10/mo", caracteristicas: { en: "No branding, PDF/PPT export", es: "Sin marca, export PDF/PPT" } },
      { plan: "Pro", precio: "$20/mo", caracteristicas: { en: "Unlimited, analytics", es: "Ilimitados, analíticas" } },
    ],
    casosDeUso: {
      en: [
        "Finance: Quarterly reports and results presentations",
        "Sales: Commercial proposals and personalized pitch decks",
        "Marketing: Campaign presentations for stakeholders",
        "HR: Onboarding decks and culture presentations",
        "Tech: Document architectures and product roadmaps",
        "Operations: Visual process manuals and SOPs",
      ],
      es: [
        "Finanzas: Reportes trimestrales y presentaciones de resultados",
        "Ventas: Propuestas comerciales y pitch decks personalizados",
        "Marketing: Presentaciones de campañas para stakeholders",
        "RRHH: Onboarding decks y presentaciones de cultura",
        "Tech: Documentar arquitecturas y roadmaps de producto",
        "Operaciones: Manuales visuales de procesos y SOPs",
      ],
    },
    porQueEsBueno: {
      en: [
        "AI generates complete content (text + design + images)",
        "Modern professional designs without design skills",
        "Interactive web format beats PowerPoint in engagement",
        "Ideal for creating quick content without depending on designers",
      ],
      es: [
        "IA genera contenido completo (texto + diseño + imágenes)",
        "Diseños modernos y profesionales sin habilidades de diseño",
        "Formato web interactivo supera a PowerPoint en engagement",
        "Ideal para crear contenido rápido sin depender de diseñadores",
      ],
    },
  },
  {
    id: "canva",
    nombre: "Canva",
    url: "https://canva.com",
    descripcion: {
      en: "All-in-one visual design platform that democratizes graphic creation. Create everything from social posts to presentations, videos and print materials with professional templates. Includes AI tools for generating and editing images, text and designs.",
      es: "Plataforma de diseño visual todo-en-uno que democratiza la creación gráfica. Permite crear desde posts para redes hasta presentaciones, videos y materiales impresos con templates profesionales. Incluye herramientas de IA para generar y editar imágenes, textos y diseños.",
    },
    descripcionCorta: {
      en: "Visual design for everyone",
      es: "Diseño visual para todos",
    },
    categoria: "creatividad",
    nivel: "principiante",
    tier: "tier3",
    departamentos: ["marketing", "admin", "rrhh", "ventas", "finanzas", "operaciones", "todos"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: { en: "250,000+ templates, 5GB", es: "250,000+ templates, 5GB" } },
      { plan: "Pro", precio: "$15/mo", caracteristicas: { en: "100M+ elements, Brand Kit", es: "100M+ elementos, Brand Kit" } },
      { plan: "Teams", precio: "$10/user", caracteristicas: { en: "Collaboration, permissions", es: "Colaboración, permisos" } },
      { plan: "Enterprise", precio: "Custom", caracteristicas: { en: "SSO, admin", es: "SSO, admin" } },
    ],
    casosDeUso: {
      en: [
        "Marketing: Content for social, banners, flyers, materials",
        "HR: Attractive job offers, certificates, employer branding",
        "Sales: Visual proposals, product one-pagers",
        "Finance: Financial data infographics, visual reports",
        "Admin: Internal communications, invitations, corporate materials",
        "Operations: Process diagrams, visual checklists",
      ],
      es: [
        "Marketing: Contenido para redes, banners, flyers, materiales",
        "RRHH: Ofertas de empleo atractivas, certificados, employer branding",
        "Ventas: Propuestas visuales, one-pagers de producto",
        "Finanzas: Infografías de datos financieros, reportes visuales",
        "Admin: Comunicados internos, invitaciones, materiales corporativos",
        "Operaciones: Diagramas de procesos, checklists visuales",
      ],
    },
    porQueEsBueno: {
      en: [
        "Almost zero learning curve: professional designs in minutes",
        "Massive library of templates, photos, icons for any need",
        "Integrated AI tools (Magic Write, Eraser, Text to Image)",
        "Brand Kit maintains brand consistency across all materials",
      ],
      es: [
        "Curva de aprendizaje casi nula: diseños profesionales en minutos",
        "Biblioteca masiva de templates, fotos, iconos para cualquier necesidad",
        "Herramientas de IA integradas (Magic Write, Eraser, Text to Image)",
        "Brand Kit mantiene consistencia de marca en todos los materiales",
      ],
    },
  },
  {
    id: "heygen",
    nombre: "HeyGen",
    url: "https://heygen.com",
    descripcion: {
      en: "AI video generation platform that creates professional videos using realistic digital avatars and synthesized voices in 175+ languages. Offers automatic video translation with lip sync, voice cloning, and custom avatars.",
      es: "Plataforma de generación de video con IA que permite crear videos profesionales utilizando avatares digitales realistas y voces sintetizadas en más de 175 idiomas. Ofrece traducción automática de videos con sincronización labial, clonación de voz, y avatares personalizados.",
    },
    descripcionCorta: {
      en: "Videos with AI avatars and auto-translation",
      es: "Videos con avatares IA y traducción automática",
    },
    categoria: "creatividad",
    nivel: "intermedio",
    tier: "tier2",
    departamentos: ["marketing", "ventas", "rrhh", "operaciones", "todos"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: { en: "3 videos/month, 3 min, 720p with branding", es: "3 videos/mes, 3 min, 720p con marca" } },
      { plan: "Creator", precio: "$29/mo", caracteristicas: { en: "Unlimited 30 min, 1080p, voice cloning", es: "Ilimitados 30 min, 1080p, clonación voz" } },
      { plan: "Team", precio: "$39/user", caracteristicas: { en: "4K, collaboration, min 2 users", es: "4K, colaboración, min 2 usuarios" } },
      { plan: "Enterprise", precio: "Custom", caracteristicas: { en: "SSO, dedicated support [VERIFY]", es: "SSO, soporte dedicado [VERIFICAR]" } },
    ],
    casosDeUso: {
      en: [
        "Marketing: Promotional videos and UGC ads at scale without traditional production",
        "Sales: Personalized prospecting videos with dynamic client name",
        "HR: Welcome and training videos for employee onboarding",
        "Training: HIPAA, GDPR, workplace safety videos instantly updatable across languages",
        "Communication: Leadership messages automatically translated to multiple languages",
        "Social: Create platform-optimized videos for LinkedIn, Instagram, and TikTok",
      ],
      es: [
        "Marketing: Videos promocionales y anuncios UGC a escala sin producción tradicional",
        "Ventas: Videos personalizados de prospección con nombre del cliente dinámico",
        "RRHH: Videos de bienvenida y formación para onboarding de empleados",
        "Formación: Videos de HIPAA, GDPR, seguridad laboral actualizables al instante en múltiples idiomas",
        "Comunicación: Mensajes de liderazgo traducidos automáticamente a múltiples idiomas",
        "Social: Crear videos optimizados por plataforma para LinkedIn, Instagram y TikTok",
      ],
    },
    porQueEsBueno: {
      en: [
        "Translation with lip-sync in 175+ languages for global companies",
        "Create professional videos with text only, no cameras or editing",
        "Enterprise-proven: Komatsu, Equity Trust, Wurth Group use for global training",
        "Interactive Avatars: adaptive learning experiences that respond to viewer input",
      ],
      es: [
        "Traducción con lip-sync en 175+ idiomas para empresas globales",
        "Crear videos profesionales solo con texto, sin cámaras ni edición",
        "Probado en enterprise: Komatsu, Equity Trust, Wurth Group lo usan para formación global",
        "Avatares Interactivos: experiencias de aprendizaje adaptativas que responden al espectador",
      ],
    },
  },
  {
    id: "elevenlabs",
    nombre: "ElevenLabs",
    url: "https://elevenlabs.io",
    descripcion: {
      en: "AI platform specialized in voice generation, voice cloning and automatic dubbing. Offers ultra-realistic text-to-speech in 70+ languages with advanced emotional control, ideal for podcasts, videos, e-learning and customer service.",
      es: "Plataforma de IA especializada en generación de voz, clonación vocal y doblaje automático. Ofrece texto a voz ultrarrealista en más de 70 idiomas con control emocional avanzado, ideal para podcasts, videos, e-learning y atención al cliente.",
    },
    descripcionCorta: {
      en: "Voice generation and cloning with AI",
      es: "Generación de voz y clonación con IA",
    },
    categoria: "creatividad",
    nivel: "intermedio",
    tier: "tier2",
    departamentos: ["marketing", "rrhh", "operaciones", "tech", "todos"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: { en: "10,000 credits (~10 min), non-commercial", es: "10,000 créditos (~10 min), no comercial" } },
      { plan: "Starter", precio: "$5/mo", caracteristicas: { en: "30,000 credits, commercial use", es: "30,000 créditos, uso comercial" } },
      { plan: "Creator", precio: "$22/mo", caracteristicas: { en: "100,000 credits, pro cloning", es: "100,000 créditos, clonación pro" } },
      { plan: "Pro", precio: "$99/mo", caracteristicas: { en: "500,000 credits, advanced API", es: "500,000 créditos, API avanzada" } },
    ],
    casosDeUso: {
      en: [
        "Marketing: Voices for ads and promotional videos in multiple languages",
        "Content: Narration for podcasts, audiobooks and YouTube videos",
        "Training: E-learning materials and online courses with natural voices",
        "Support: Deploy conversational AI agents in minutes for 24/7 customer service",
        "Accessibility: Text to audio conversion for people with disabilities",
        "Localization: Dub videos into 29+ languages while preserving the original speaker's voice",
      ],
      es: [
        "Marketing: Voces para anuncios y videos promocionales en múltiples idiomas",
        "Contenido: Narración de podcasts, audiolibros y videos de YouTube",
        "Formación: Materiales de e-learning y cursos online con voces naturales",
        "Soporte: Desplegar agentes conversacionales IA en minutos para atención 24/7",
        "Accesibilidad: Conversión de texto a audio para personas con discapacidades",
        "Localización: Doblar videos a 29+ idiomas manteniendo la voz original del hablante",
      ],
    },
    porQueEsBueno: {
      en: [
        "Ultra-realistic voice quality with advanced emotion control",
        "ElevenReader app: listen to PDFs, articles, and ebooks on the go",
        "Precise voice cloning to maintain brand consistency",
        "Voice Design: create custom voices from text descriptions without recordings",
      ],
      es: [
        "Calidad de voz ultrarrealista con control de emociones avanzado",
        "App ElevenReader: escuchar PDFs, artículos y ebooks en movimiento",
        "Clonación de voz precisa para mantener consistencia de marca",
        "Voice Design: crear voces personalizadas desde descripciones de texto sin grabaciones",
      ],
    },
  },

  // NO-CODE
  {
    id: "lovable",
    nombre: "Lovable",
    url: "https://lovable.dev",
    descripcion: {
      en: "AI-powered web application development platform that lets you create complete fullstack apps from natural language descriptions. Generates real, deployable React/TypeScript code with Supabase integration for backend and authentication.",
      es: "Plataforma de desarrollo de aplicaciones web con IA que permite crear apps fullstack completas a partir de descripciones en lenguaje natural. Genera código React/TypeScript real y desplegable, con integración a Supabase para backend y autenticación.",
    },
    descripcionCorta: {
      en: "Fullstack apps with conversational AI",
      es: "Apps fullstack con IA conversacional",
    },
    categoria: "nocode",
    nivel: "intermedio",
    tier: "tier3",
    departamentos: ["operaciones", "rrhh", "ventas", "finanzas", "marketing", "tech"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: { en: "Limited projects", es: "Proyectos limitados" } },
      { plan: "Starter", precio: "$20/mo", caracteristicas: { en: "More AI messages, domains", es: "Más mensajes IA, dominios" } },
      { plan: "Launch", precio: "$50/mo", caracteristicas: { en: "Priority, support", es: "Prioridad, soporte" } },
      { plan: "Scale", precio: "$100+/mo", caracteristicas: { en: "Team, SLA", es: "Equipo, SLA" } },
    ],
    casosDeUso: {
      en: [
        "Finance: Expense tracking dashboard with interactive charts",
        "HR: Onboarding portal with forms and checklist",
        "Sales: Simplified internal CRM for lead tracking",
        "Marketing: Landing pages for campaigns with capture forms",
        "Tech: Functional prototypes to validate ideas before development",
        "Tech: Convert Figma designs directly into full-stack applications",
      ],
      es: [
        "Finanzas: Dashboard de seguimiento de gastos con gráficos interactivos",
        "RRHH: Portal de onboarding con formularios y checklist",
        "Ventas: CRM interno simplificado para seguimiento de leads",
        "Marketing: Landing pages para campañas con formularios de captura",
        "Tech: Prototipos funcionales para validar ideas antes de desarrollo",
        "Tech: Convertir diseños de Figma directamente en aplicaciones full-stack",
      ],
    },
    porQueEsBueno: {
      en: [
        "Generates real React/TypeScript code you can export and modify",
        "Native Supabase integration for auth, DB and storage",
        "Conversational interface: describe and AI builds iteratively",
        "Active community with shared examples and templates",
      ],
      es: [
        "Genera código React/TypeScript real que puedes exportar y modificar",
        "Integración nativa con Supabase para auth, DB y storage",
        "Interfaz conversacional: describes y la IA construye iterativamente",
        "Comunidad activa con ejemplos y templates compartidos",
      ],
    },
  },
  {
    id: "base44",
    nombre: "Base44",
    url: "https://base44.com",
    descripcion: {
      en: "No-code platform for quickly creating internal business applications. Focused on operational and management tools with integrated database, forms and automation capabilities.",
      es: "Plataforma no-code para crear aplicaciones de negocio internas rápidamente. Enfocada en herramientas operativas y de gestión con capacidades de base de datos, formularios y automatizaciones integradas.",
    },
    descripcionCorta: {
      en: "Internal business apps without code",
      es: "Apps de negocio internas sin código",
    },
    categoria: "nocode",
    nivel: "intermedio",
    tier: "tier1",
    departamentos: ["finanzas", "admin", "operaciones", "rrhh", "legal"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: { en: "Limited projects", es: "Proyectos limitados" } },
      { plan: "Pro", precio: "$25-50/mo", caracteristicas: { en: "Unlimited, integrations", es: "Ilimitados, integraciones" } },
      { plan: "Enterprise", precio: "Contact", caracteristicas: { en: "SSO, dedicated support", es: "SSO, soporte dedicado" } },
    ],
    casosDeUso: {
      en: [
        "Finance: Expense approval system with automated workflows",
        "Admin: Office asset management and room booking",
        "HR: Request portal (vacations, permits) with approvals",
        "Operations: Order tracking and vendor management",
        "Legal: Contract database with expiration reminders",
        "Tech: Combine Base44 with n8n for AI automation workflows",
      ],
      es: [
        "Finanzas: Sistema de aprobación de gastos con flujos automatizados",
        "Admin: Gestión de activos de oficina y reserva de salas",
        "RRHH: Portal de solicitudes (vacaciones, permisos) con aprobaciones",
        "Operaciones: Seguimiento de pedidos y gestión de proveedores",
        "Legal: Base de datos de contratos con recordatorios de vencimiento",
        "Tech: Combinar Base44 con n8n para flujos de automatización IA",
      ],
    },
    porQueEsBueno: {
      en: [
        "Designed for internal business tools (not landing pages)",
        "Integrated relational database without backend setup",
        "Native workflows and automations for approvals",
        "Shorter learning curve than alternatives like Retool",
      ],
      es: [
        "Diseñado para herramientas internas de negocio (no landing pages)",
        "Base de datos relacional integrada sin configurar backend",
        "Flujos de trabajo y automatizaciones nativas para aprobaciones",
        "Curva de aprendizaje más corta que alternativas como Retool",
      ],
    },
  },

  // DESARROLLO
  {
    id: "claude-code",
    nombre: "Claude Code",
    url: "https://claude.ai",
    descripcion: {
      en: "Anthropic's official CLI that integrates Claude directly into the programming workflow. Offers agentic capabilities to edit files, execute commands, navigate codebases and perform complex development tasks autonomously in the terminal.",
      es: "CLI oficial de Anthropic que integra Claude directamente en el flujo de trabajo de programación. Ofrece capacidades agénticas para editar archivos, ejecutar comandos, navegar codebases y realizar tareas de desarrollo complejas de forma autónoma en la terminal.",
    },
    descripcionCorta: {
      en: "Agentic CLI for software development",
      es: "CLI agéntico para desarrollo de software",
    },
    categoria: "desarrollo",
    nivel: "avanzado",
    tier: "tier2",
    departamentos: ["tech"],
    precios: [
      { plan: "Pro", precio: "$20/mo", caracteristicas: { en: "Included with limits", es: "Incluido con límites" } },
      { plan: "Max", precio: "$100/mo", caracteristicas: { en: "Extended use, priority", es: "Uso extendido, prioridad" } },
      { plan: "API Usage", precio: "Per tokens", caracteristicas: { en: "Pay per use", es: "Pago por uso" } },
    ],
    casosDeUso: {
      en: [
        "Refactor legacy code and modernize architectures automatically",
        "Implement features describing requirements in natural language",
        "Debug complex errors analyzing logs and stack traces",
        "Create unit and integration tests for existing code",
        "Automatic code reviews with improvement suggestions",
        "Migrate projects between frameworks or update dependencies",
        "Tech: Security audits and vulnerability scanning integrated with GitHub Actions",
      ],
      es: [
        "Refactorizar código legacy y modernizar arquitecturas automáticamente",
        "Implementar features describiendo requisitos en lenguaje natural",
        "Debuggear errores complejos analizando logs y stack traces",
        "Crear tests unitarios y de integración para código existente",
        "Code reviews automáticos con sugerencias de mejora",
        "Migrar proyectos entre frameworks o actualizar dependencias",
        "Tech: Auditorías de seguridad y escaneo de vulnerabilidades integrado con GitHub Actions",
      ],
    },
    porQueEsBueno: {
      en: [
        "Integrates in terminal without changing existing workflow",
        "Official Security Review GitHub Action for automated vulnerability detection",
        "Git workflow automation: smart commits, parallel development with worktrees",
        "2-5x productivity increases according to developer testimonials",
      ],
      es: [
        "Integra en terminal sin cambiar flujo de trabajo existente",
        "GitHub Action oficial de Security Review para detección automática de vulnerabilidades",
        "Automatización de flujos git: commits inteligentes, desarrollo paralelo con worktrees",
        "Aumentos de productividad 2-5x según testimonios de desarrolladores",
      ],
    },
  },
  {
    id: "cursor",
    nombre: "Cursor",
    url: "https://cursor.com",
    descripcion: {
      en: "VS Code-based code editor with native AI that accelerates development through intelligent code generation, automatic refactoring and complete codebase contextual understanding. Includes an AI agent that executes programming tasks autonomously.",
      es: "Editor de código basado en VS Code con inteligencia artificial nativa que acelera el desarrollo mediante generación inteligente de código, refactorización automática y comprensión contextual completa del codebase. Incluye un agente de IA que ejecuta tareas de programación de forma autónoma.",
    },
    descripcionCorta: {
      en: "Code editor with integrated AI",
      es: "Editor de código con IA integrada",
    },
    categoria: "desarrollo",
    nivel: "avanzado",
    tier: "tier3",
    departamentos: ["tech"],
    precios: [
      { plan: "Hobby", precio: "$0", caracteristicas: { en: "Limited requests, Tab autocomplete", es: "Requests limitados, autocompletado Tab" } },
      { plan: "Pro", precio: "$20/mo", caracteristicas: { en: "Unlimited Tab, background agents", es: "Tab ilimitado, agentes background" } },
      { plan: "Pro+", precio: "$60/mo", caracteristicas: { en: "3x credits on all models", es: "3x créditos en todos los modelos" } },
      { plan: "Teams", precio: "$40/user", caracteristicas: { en: "Shared chats, SSO, analytics", es: "Chats compartidos, SSO, analytics" } },
    ],
    casosDeUso: {
      en: [
        "Tech: New feature development understanding project context",
        "Tech: Refactor legacy code maintaining functionality",
        "Tech: Debugging identifying issues with codebase context",
        "Tech: Onboarding - new devs explore codebase via chat",
        "Tech: Automatic unit test generation",
        "Product/Tech: Rapid MVP prototyping with assisted generation",
        "Tech: Automated code review and PR workflow with GitHub MCP integration",
      ],
      es: [
        "Tech: Desarrollo de features nuevas entendiendo contexto del proyecto",
        "Tech: Refactorizar código legacy manteniendo funcionalidad",
        "Tech: Debugging identificando problemas con contexto del codebase",
        "Tech: Onboarding - nuevos devs exploran codebase via chat",
        "Tech: Generación automática de tests unitarios",
        "Product/Tech: Prototipado rápido de MVPs con generación asistida",
        "Tech: Revisión de código automatizada y flujo de PRs con integración GitHub MCP",
      ],
    },
    porQueEsBueno: {
      en: [
        "Indexes entire codebase for suggestions with complete architectural context",
        "Agent mode with AGENTS.md: configure autonomous multi-file coding without prompting",
        "Frictionless transition from VS Code (same extension ecosystem)",
        "Model flexibility: GPT-4, Claude, custom models per task",
      ],
      es: [
        "Indexa todo el codebase para sugerencias con contexto arquitectónico completo",
        "Modo agente con AGENTS.md: configura codificación autónoma multi-archivo sin prompting",
        "Transición sin fricción desde VS Code (mismo ecosistema de extensiones)",
        "Flexibilidad de modelos: GPT-4, Claude, modelos propios según tarea",
      ],
    },
  },
  {
    id: "claude-cowork",
    nombre: "Claude Co-Work",
    url: "https://claude.ai",
    descripcion: {
      en: "Background task functionality of Claude Code that allows executing autonomous jobs while the developer continues with other activities. Ideal for long tasks like migrations, documentation generation or extensive refactoring.",
      es: "Funcionalidad de tareas en segundo plano de Claude Code que permite ejecutar trabajos autónomos mientras el desarrollador continúa con otras actividades. Ideal para tareas largas como migraciones, generación de documentación o refactorizaciones extensas.",
    },
    descripcionCorta: {
      en: "Autonomous background tasks",
      es: "Tareas autónomas en segundo plano",
    },
    categoria: "agentes",
    nivel: "principiante",
    tier: "tier2",
    departamentos: ["tech", "operaciones"],
    precios: [
      { plan: "Pro", precio: "$20/mo", caracteristicas: { en: "Limited background tasks", es: "Tareas background limitadas" } },
      { plan: "Max", precio: "$100/mo", caracteristicas: { en: "Multiple simultaneous, priority", es: "Múltiples simultáneas, prioridad" } },
    ],
    casosDeUso: {
      en: [
        "Run headless CI/CD pipelines and automated deployments in background",
        "Generate complete project documentation asynchronously",
        "Refactor multiple files in parallel without blocking terminal",
        "Run complete test suites and receive results when done",
        "Create PRs automatically after completing code changes",
        "Analyze entire codebase to detect vulnerabilities",
        "Tech: Continuous automated development loop (create PR, wait CI, merge)",
      ],
      es: [
        "Ejecutar pipelines CI/CD headless y despliegues automatizados en segundo plano",
        "Generar documentación completa del proyecto de forma asíncrona",
        "Refactorizar múltiples archivos en paralelo sin bloquear terminal",
        "Ejecutar suites de tests completas y recibir resultados al terminar",
        "Crear PRs automáticamente tras completar cambios de código",
        "Analizar codebase completo para detectar vulnerabilidades",
        "Tech: Ciclo de desarrollo automatizado continuo (crear PR, esperar CI, merge)",
      ],
    },
    porQueEsBueno: {
      en: [
        "Real multitasking: keep working while Claude executes long tasks",
        "Reduces wait times on tasks requiring extensive processing",
        "Smart notifications when tasks complete or need attention",
        "Maximizes productivity without constant AI task supervision",
      ],
      es: [
        "Multitasking real: seguir trabajando mientras Claude ejecuta tareas largas",
        "Reduce tiempos de espera en tareas que requieren procesamiento extenso",
        "Notificaciones inteligentes cuando tareas se completan o requieren atención",
        "Maximiza productividad sin supervisión constante de tareas de IA",
      ],
    },
  },
];

// Filter tools by any combination of criteria
export interface FilterCriteria {
  category?: Category;
  department?: Department;
  level?: SkillLevel;
  tier?: RecommendationTier;
}

export function filterTools(criteria: FilterCriteria): Tool[] {
  return tools.filter((t) => {
    if (criteria.category && t.categoria !== criteria.category) return false;
    if (criteria.department && !t.departamentos.includes(criteria.department)) return false;
    if (criteria.level && t.nivel !== criteria.level) return false;
    if (criteria.tier !== undefined && t.tier !== criteria.tier) return false;
    return true;
  });
}

export function getCategories(): Category[] {
  return [...new Set(tools.map((t) => t.categoria))];
}

export function getTiers(): NonNullable<RecommendationTier>[] {
  return ["tier1", "tier2", "tier3"];
}
