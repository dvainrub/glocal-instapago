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
  | "operaciónes"
  | "todos";

// Categories: automatizacion, agentes, conocimiento, creatividad, nocode, desarrollo
export type Category =
  | "automatizacion"
  | "agentes"
  | "conocimiento"
  | "creatividad"
  | "nocode"
  | "desarrollo";

// Recommendation tiers: tier1=Top Pick, tier2=Great, tier3=Good
export type RecommendationTier = "tier1" | "tier2" | "tier3" | null;

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
  tier: RecommendationTier;
  departamentos: Department[];
  precios: PricingTier[];
  casosDeUso: string[];
  porQueEsBueno: string[];
}

export const categoryLabels: Record<Category, string> = {
  automatizacion: "Automatizacion",
  agentes: "Agentes",
  conocimiento: "Conocimiento",
  creatividad: "Creatividad",
  nocode: "No-Code",
  desarrollo: "Desarrollo",
};

export const departmentLabels: Record<Department, string> = {
  finanzas: "Finanzas",
  admin: "Admin",
  rrhh: "RRHH",
  tech: "Tech",
  ventas: "Ventas",
  marketing: "Marketing",
  legal: "Legal",
  operaciónes: "Operaciones",
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

export const tierLabels: Record<NonNullable<RecommendationTier>, string> = {
  tier1: "Top Pick",
  tier2: "Great",
  tier3: "Good",
};

export const tierDescriptions: Record<NonNullable<RecommendationTier>, string> = {
  tier1: "Altamente Recomendado",
  tier2: "Recomendado",
  tier3: "Opcional",
};

export const tierColors: Record<NonNullable<RecommendationTier>, string> = {
  tier1: "bg-yellow-100 text-yellow-800 border-yellow-400",
  tier2: "bg-gray-200 text-gray-700 border-gray-400",
  tier3: "bg-orange-100 text-orange-800 border-orange-400",
};

export const tools: Tool[] = [
  // AUTOMATIZACION
  {
    id: "make",
    nombre: "Make.com",
    url: "https://make.com",
    descripcion:
      "Plataforma de automatización visual que permite crear flujos de trabajo complejos conectando másde 1,800 aplicaciónes. Destaca por su interfaz tipo canvas con lógica avanzada (condicionales, loops, routers) y manejo nativo de datos JSON/XML.",
    descripcionCorta: "Automatizacion visual con lógica avanzada",
    categoria: "automatizacion",
    nivel: "intermedio",
    tier: "tier1",
    departamentos: ["finanzas", "admin", "tech", "operaciónes", "rrhh"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "1,000 ops/mes, 2 escenarios" },
      { plan: "Core", precio: "$9/mes", caracteristicas: "10,000 ops/mes, ilimitados" },
      { plan: "Pro", precio: "$16/mes", caracteristicas: "Ejecucion prioritaria, tiempo real" },
      { plan: "Teams", precio: "$29/mes", caracteristicas: "Colaboracion, permisos" },
    ],
    casosDeUso: [
      "Finanzas: Conciliacion bancaria automática cruzando extractos con facturas",
      "Admin: Generar contratos desde formularios y enviar a firma digital",
      "RRHH: Flujo de onboarding completo (alta en sistemas, cuentas, equipos)",
      "Tech: Sincronizar tickets Jira con Slack, alertas de monitoreo",
      "Ventas: Enriquecer leads con datos de LinkedIn/Clearbit al CRM",
      "Marketing: Segmentar audiencias y activar campañas personalizadas",
    ],
    porQueEsBueno: [
      "Precio por operación 4-6x másbarato que Zapier en alto volumen",
      "Logica avanzada: routers, iteradores, manejo de errores granular",
      "Interfaz visual superior que muestra datos en tiempo real",
      "Ideal para automatizaciones complejas con múltiples ramas",
    ],
  },
  {
    id: "zapier",
    nombre: "Zapier",
    url: "https://zapier.com",
    descripcion:
      "La plataforma de automatización más popular y fácil de usar, conectando másde 6,000+ aplicaciónes. Perfecta para usuarios no técnicos que necesitan crear automatizaciones rápidas con la biblioteca de integraciónes másamplia del mercado.",
    descripcionCorta: "Automatizacion simple con másintegraciónes",
    categoria: "automatizacion",
    nivel: "principiante",
    tier: "tier3",
    departamentos: ["finanzas", "admin", "ventas", "marketing", "todos"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "100 tareas/mes, 5 Zaps" },
      { plan: "Starter", precio: "$20/mes", caracteristicas: "750 tareas/mes, multi-paso" },
      { plan: "Professional", precio: "$49/mes", caracteristicas: "2,000 tareas/mes, paths" },
      { plan: "Team", precio: "$69/mes", caracteristicas: "Por usuario, compartido" },
    ],
    casosDeUso: [
      "Finanzas: Notificar pagos de Stripe/QuickBooks y enviar a contabilidad",
      "Admin: Crear tareas en Asana/Monday desde emails entrantes",
      "RRHH: Publicar ofertas de empleo en múltiples plataformas",
      "Ventas: Añadir contactos de Calendly a HubSpot automáticamente",
      "Marketing: Sincronizar suscriptores entre Mailchimp y Google Sheets",
    ],
    porQueEsBueno: [
      "Biblioteca de integraciónes másgrande del mercado (6,000+ apps)",
      "Curva de aprendizaje mínima: automatizaciones en minutos",
      "Mejor documentación y soporte con templates pre-construidos",
      "Marca establecida, ideal para empresas que priorizan estabilidad",
    ],
  },
  {
    id: "n8n",
    nombre: "n8n",
    url: "https://n8n.io",
    descripcion:
      "Plataforma de automatización open-source con opción self-hosted para control total de datos. Soporta JavaScript/Python nativo y tiene 70+ nodos dedicados a IA via LangChain. Modelo de precios por workflow que resulta máseconómico en alto volumen.",
    descripcionCorta: "Automatizacion open-source con self-hosting",
    categoria: "automatizacion",
    nivel: "avanzado",
    tier: "tier3",
    departamentos: ["tech", "operaciónes", "finanzas"],
    precios: [
      { plan: "Self-hosted", precio: "$0", caracteristicas: "Gratis, ilimitado, tu infra" },
      { plan: "Starter Cloud", precio: "$22/mes", caracteristicas: "2,500 ejecuciónes" },
      { plan: "Pro Cloud", precio: "$57/mes", caracteristicas: "10,000 ejecuciónes, colaboración" },
      { plan: "Enterprise", precio: "Personalizado", caracteristicas: "SSO, SLA, soporte" },
    ],
    casosDeUso: [
      "Tech: Pipelines de datos con transformaciónes complejas en JavaScript",
      "Operaciones: Automatizaciones con requisitos estrictos de privacidad/compliance",
      "Finanzas: Procesos internos que no pueden salir de la infraestructura propia",
      "Marketing: Integraciones de IA con LangChain para contenido personalizado",
      "Admin: Workflows de alto volumen donde el costo por ejecución importa",
    ],
    porQueEsBueno: [
      "Self-hosting: control total de datos para compliance y privacidad",
      "1,000+ integraciónes con 70+ nodos de IA via LangChain",
      "Codigo JavaScript/Python nativo para transformaciónes avanzadas",
      "Precio por workflow (no por tarea) - máseconómico en alto volumen [VERIFICAR]",
    ],
  },

  // INVESTIGACION (includes former "datos" tools)
  {
    id: "perplexity",
    nombre: "Perplexity AI",
    url: "https://perplexity.ai",
    descripcion:
      "Motor de búsqueda conversacional impulsado por IA que proporciona respuestas directas con citas de fuentes verificadas. Combina modelos como GPT-4 y Claude con búsqueda web en tiempo real, eliminando la necesidad de revisar múltiples enlaces.",
    descripcionCorta: "Busqueda con IA y fuentes verificadas",
    categoria: "conocimiento",
    nivel: "principiante",
    tier: "tier2",
    departamentos: ["todos", "legal", "finanzas", "marketing", "ventas"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "5 búsquedas Pro/dia" },
      { plan: "Pro", precio: "$20/mes", caracteristicas: "300+ Pro/dia, GPT-4/Claude" },
      { plan: "Enterprise", precio: "Personalizado", caracteristicas: "SSO, ilimitado" },
    ],
    casosDeUso: [
      "Finanzas: Investigar regulaciones financieras con fuentes citadas",
      "RRHH: Buscar benchmarks salariales por industria y región",
      "Legal: Investigar jurisprudencia y cambios normativos",
      "Marketing: Analizar tendencias de mercado en tiempo real",
      "Ventas: Investigar prospectos y noticias antes de reuniones",
    ],
    porQueEsBueno: [
      "Respuestas incluyen citas con enlaces a fuentes originales",
      "Combina múltiples LLMs (GPT-4, Claude, Llama) en una interfaz",
      "Busqueda en tiempo real supera a ChatGPT para info actual",
      "Interfaz limpia y rápida - muy valorada por su simplicidad",
    ],
  },
  {
    id: "genspark",
    nombre: "Genspark",
    url: "https://genspark.ai",
    descripcion:
      "Motor de búsqueda con IA que genera 'Sparkpages' - páginas informativas personalizadas que sintetizan información de múltiples fuentes en un formato visual estructurado. Diseñado para eliminar SEO spam y contenido publicitario.",
    descripcionCorta: "Busqueda que genera páginas informativas",
    categoria: "agentes",
    nivel: "principiante",
    tier: "tier1",
    departamentos: ["marketing", "ventas", "operaciónes", "rrhh", "tech"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "Busquedas ilimitadas, básico" },
      { plan: "Plus", precio: "$20/mes", caracteristicas: "Agentes premium, velocidad" },
      { plan: "Pro", precio: "$199/mes", caracteristicas: "API access [VERIFICAR]" },
    ],
    casosDeUso: [
      "Marketing: Generar researches de mercado visuales para stakeholders",
      "Operaciones: Comparar proveedores con tablas comparativas automáticas",
      "RRHH: Crear guias sintetizando mejores prácticas de la industria",
      "Tech: Investigar stacks tecnológicos con pros/contras estructurados",
      "Ventas: Research de prospectos listo para presentar",
    ],
    porQueEsBueno: [
      "Sparkpages eliminan necesidad de abrir múltiples pestañas",
      "Filtra activamente contenido SEO spam y publicitario",
      "Agentes especializados por dominio dan resultados relevantes",
      "Alternativa fresca a motores de búsqueda tradicionales",
    ],
  },
  {
    id: "notebooklm",
    nombre: "NotebookLM",
    url: "https://notebooklm.google.com",
    descripcion:
      "Asistente de investigación de Google que permite subir documentos propios (PDFs, Docs, webs) y generar un 'experto virtual' sobre ese contenido. Famoso por generar podcasts de audio donde dos voces IA discuten tus documentos.",
    descripcionCorta: "Tu experto virtual sobre tus documentos",
    categoria: "conocimiento",
    nivel: "principiante",
    tier: "tier3",
    departamentos: ["legal", "finanzas", "rrhh", "tech", "operaciónes"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "50 notebooks, Audio Overviews" },
      { plan: "Plus", precio: "$10/mes", caracteristicas: "Ilimitados, 500 fuentes" },
      { plan: "Enterprise", precio: "Incluido", caracteristicas: "Via Google Workspace" },
    ],
    casosDeUso: [
      "Legal: Subir contratos para que el equipo pregunte sin leer todo",
      "RRHH: Chatbot interno sobre políticas, manuales y beneficios",
      "Finanzas: Analizar reportes anuales con resumenes en audio",
      "Tech: Documentacion técnica convertida en asistente consultable",
      "Operaciones: Manuales de procedimientos consultables por chat",
    ],
    porQueEsBueno: [
      "Audio Overviews: podcasts de 10-15 min discutiendo tus documentos",
      "Respuestas grounded: solo de TUS documentos, reduce alucinaciones",
      "Integracion nativa con Google Workspace",
      "Completamente gratuito para uso básico",
    ],
  },
  {
    id: "notion-ai",
    nombre: "Notion AI",
    url: "https://notion.so/product/ai",
    descripcion:
      "Asistente de IA integrado en Notion que puede escribir, resumir, traducir y responder preguntas sobre tu espacio de trabajo. Utiliza tu base de conocimiento interna para generar contenido contextualizado y automatizar tareas de documentación.",
    descripcionCorta: "Asistente de escritura integrado en Notion",
    categoria: "conocimiento",
    nivel: "principiante",
    tier: "tier2",
    departamentos: ["todos", "admin", "operaciónes", "rrhh", "marketing"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "20 respuestas limitadas" },
      { plan: "AI Add-on", precio: "$10/mes", caracteristicas: "Ilimitado, por usuario" },
      { plan: "Business + AI", precio: "$18/mes", caracteristicas: "Incluido, por usuario" },
    ],
    casosDeUso: [
      "Finanzas: Resumir reportes y generar narrativas para presentaciones",
      "RRHH: Crear descripciónes de puestos, resumir evaluaciones",
      "Marketing: Generar borradores, brainstorming, traducir materiales",
      "Tech: Documentar código y procesos, crear templates de RFCs",
      "Operaciones: Crear SOPs automatizados, generar actas de reuniones",
    ],
    porQueEsBueno: [
      "Contexto integrado: conoce todo tu workspace para respuestas específicas",
      "Flujo de trabajo unificado: todo donde ya trabajas",
      "Q&A permite encontrar información en segúndos",
      "Ideal para equipos que usan Notion como sistema operativo central",
    ],
  },
  {
    id: "rows",
    nombre: "Rows.com",
    url: "https://rows.com",
    descripcion:
      "Spreadsheet moderno con IA nativa que permite analizar datos, automatizar tareas y conectarse a 50+ integraciónes (Google Analytics, HubSpot, Stripe) sin código. Combina familiaridad de Excel con poder de IA y APIs.",
    descripcionCorta: "Spreadsheet con IA e integraciónes nativas",
    categoria: "conocimiento",
    nivel: "intermedio",
    tier: "tier3",
    departamentos: ["finanzas", "ventas", "operaciónes", "marketing", "tech"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "5 spreadsheets, 10 AI/mes" },
      { plan: "Plus", precio: "$9/mes", caracteristicas: "Ilimitados, 250 AI/mes" },
      { plan: "Pro", precio: "$18/mes", caracteristicas: "1,000 AI/mes, embeds" },
      { plan: "Team", precio: "$49+/mes", caracteristicas: "AI ilimitado, SSO" },
    ],
    casosDeUso: [
      "Marketing: Conectar Analytics y redes para dashboards en vivo",
      "Finanzas: Integrar Stripe/PayPal para reportes de ingresos automáticos",
      "Ventas: Sincronizar HubSpot/Salesforce para pipeline en tiempo real",
      "Tech: Monitorear métricas de Mixpanel/Amplitude con alertas",
      "Operaciones: Consolidar datos de múltiples fuentes automáticamente",
    ],
    porQueEsBueno: [
      "Integraciones nativas: conecta a herramientas sin Zapier",
      "AI Analyst: pregunta en lenguaje natural, obtiene análisis",
      "Familiar para usuarios de Excel/Google Sheets",
      "Colaboracion en tiempo real con controles de acceso",
    ],
  },
  {
    id: "manus",
    nombre: "Manus",
    url: "https://manus.im",
    descripcion:
      "Agente de IA autónomo capaz de ejecutar tareas complejas de forma independiente: navegar por internet, escribir código, crear documentos y completar workflows multi-paso sin supervisión constante. Posicionado como 'el primer agente de IA verdaderamente general'.",
    descripcionCorta: "Agente autónomo que ejecuta tareas complejas",
    categoria: "agentes",
    nivel: "intermedio",
    tier: "tier2",
    departamentos: ["tech", "operaciónes", "marketing", "ventas", "finanzas"],
    precios: [
      { plan: "Credits", precio: "$39/mes aprox", caracteristicas: "Sistema de créditos [VERIFICAR]" },
      { plan: "Enterprise", precio: "Contactar", caracteristicas: "Acceso dedicado, sin colas" },
    ],
    casosDeUso: [
      "Tech: Automatizar investigación de código, crear prototipos, scraping",
      "Marketing: Generar reportes de competencia completos con gráficos",
      "Operaciones: Automatizar procesos multi-paso con varias herramientas",
      "Ventas: Investigar empresas prospectas y generar briefings automáticos",
      "Finanzas: Compilar datos de múltiples fuentes en reportes estructurados",
    ],
    porQueEsBueno: [
      "Autonomia real: ejecuta tareas de 10-30 min sin intervención",
      "Navegacion web real: abre páginas, hace clicks, extrae datos",
      "Genera entregables completos: documentos, spreadsheets, código",
      "Pionero en agentes autónomos accesibles al público",
    ],
  },

  // CREATIVIDAD (merged: presentaciones + diseño + video)
  {
    id: "gamma",
    nombre: "Gamma",
    url: "https://gamma.app",
    descripcion:
      "Plataforma de IA que genera presentaciones, documentos y sitios web de forma automática a partir de texto o prompts. Transforma ideas en contenido visual profesional en segúndos, sin necesidad de diseño manual.",
    descripcionCorta: "Presentaciones con IA automáticas",
    categoria: "creatividad",
    nivel: "principiante",
    tier: "tier2",
    departamentos: ["ventas", "finanzas", "marketing", "rrhh", "tech", "operaciónes", "todos"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "400 créditos, con marca" },
      { plan: "Plus", precio: "$10/mes", caracteristicas: "Sin marca, export PDF/PPT" },
      { plan: "Pro", precio: "$20/mes", caracteristicas: "Ilimitados, analiticas" },
    ],
    casosDeUso: [
      "Finanzas: Reportes trimestrales y presentaciones de resultados",
      "Ventas: Propuestas comerciales y pitch decks personalizados",
      "Marketing: Presentaciones de campañas para stakeholders",
      "RRHH: Onboarding decks y presentaciones de cultura",
      "Tech: Documentar arquitecturas y roadmaps de producto",
      "Operaciones: Manuales visuales de procesos y SOPs",
    ],
    porQueEsBueno: [
      "IA genera contenido completo (texto + diseño + imagenes)",
      "Diseños modernos y profesionales sin habilidades de diseño",
      "Formato web interactivo supera a PowerPoint en engagement",
      "Ideal para crear contenido rápido sin depender de diseñadores",
    ],
  },
  {
    id: "canva",
    nombre: "Canva",
    url: "https://canva.com",
    descripcion:
      "Plataforma de diseño visual todo-en-uno que democratiza la creación gráfica. Permite crear desde posts para redes hasta presentaciones, videos y materiales impresos con templates profesionales. Incluye herramientas de IA para generar y editar imagenes, textos y diseños.",
    descripcionCorta: "Diseño visual para todos",
    categoria: "creatividad",
    nivel: "principiante",
    tier: "tier3",
    departamentos: ["marketing", "admin", "rrhh", "ventas", "finanzas", "operaciónes", "todos"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "250,000+ templates, 5GB" },
      { plan: "Pro", precio: "$15/mes", caracteristicas: "100M+ elementos, Brand Kit" },
      { plan: "Teams", precio: "$10/usuario", caracteristicas: "Colaboracion, permisos" },
      { plan: "Enterprise", precio: "Personalizado", caracteristicas: "SSO, admin" },
    ],
    casosDeUso: [
      "Marketing: Contenido para redes, banners, flyers, materiales",
      "RRHH: Ofertas de empleo atractivas, certificados, employer branding",
      "Ventas: Propuestas visuales, one-pagers de producto",
      "Finanzas: Infografias de datos financieros, reportes visuales",
      "Admin: Comunicados internos, invitaciones, materiales corporativos",
      "Operaciones: Diagramásde procesos, checklists visuales",
    ],
    porQueEsBueno: [
      "Curva de aprendizaje casi nula: diseños profesionales en minutos",
      "Biblioteca masiva de templates, fotos, iconos para cualquier necesidad",
      "Herramientas de IA integradas (Magic Write, Eraser, Text to Image)",
      "Brand Kit mantiene consistencia de marca en todos los materiales",
    ],
  },
  {
    id: "heygen",
    nombre: "HeyGen",
    url: "https://heygen.com",
    descripcion:
      "Plataforma de generación de video con IA que permite crear videos profesionales utilizando avatares digitales realistas y voces sintetizadas en másde 175 idiomas. Ofrece traducción automática de videos con sincronización labial, clonación de voz, y avatares personalizados.",
    descripcionCorta: "Videos con avatares IA y traducción automática",
    categoria: "creatividad",
    nivel: "intermedio",
    tier: "tier2",
    departamentos: ["marketing", "ventas", "rrhh", "operaciónes", "todos"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "3 videos/mes, 3 min, 720p con marca" },
      { plan: "Creator", precio: "$29/mes", caracteristicas: "Ilimitados 30 min, 1080p, clonación voz" },
      { plan: "Team", precio: "$39/usuario", caracteristicas: "4K, colaboración, min 2 usuarios" },
      { plan: "Enterprise", precio: "Personalizado", caracteristicas: "SSO, soporte dedicado [VERIFICAR]" },
    ],
    casosDeUso: [
      "Marketing: Videos promocionales y anuncios UGC a escala sin producción tradicional",
      "Ventas: Videos personalizados de prospeccion con nombre del cliente dinámico",
      "RRHH: Videos de bienvenida y formación para onboarding de empleados",
      "Formacion: Capacitacion en compliance y uso de software actualizable al instante",
      "Comunicacion: Mensajes de liderazgo traducidos automáticamente a múltiples idiomas",
    ],
    porQueEsBueno: [
      "Traduccion con lip-sync en 175+ idiomáspara empresas globales",
      "Crear videos profesionales solo con texto, sin camaras ni edición",
      "Escalabilidad: generar cientos de videos personalizados simultaneamente",
      "Valoracion alta (4.7/5 estrellas) por calidad de avatares y soporte",
    ],
  },
  {
    id: "elevenlabs",
    nombre: "ElevenLabs",
    url: "https://elevenlabs.io",
    descripcion:
      "Plataforma de IA especializada en generación de voz, clonación vocal y doblaje automático. Ofrece texto a voz ultrarrealista en másde 70 idiomáscon control emocional avanzado, ideal para podcasts, videos, e-learning y atención al cliente.",
    descripcionCorta: "Generacion de voz y clonación con IA",
    categoria: "creatividad",
    nivel: "intermedio",
    tier: "tier2",
    departamentos: ["marketing", "rrhh", "operaciónes", "tech", "todos"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "10,000 créditos (~10 min), no comercial" },
      { plan: "Starter", precio: "$5/mes", caracteristicas: "30,000 créditos, uso comercial" },
      { plan: "Creator", precio: "$22/mes", caracteristicas: "100,000 créditos, clonación pro" },
      { plan: "Pro", precio: "$99/mes", caracteristicas: "500,000 créditos, API avanzada" },
    ],
    casosDeUso: [
      "Marketing: Voces para anuncios y videos promocionales en múltiples idiomas",
      "Contenido: Narracion de podcasts, audiolibros y videos de YouTube",
      "Formacion: Materiales de e-learning y cursos online con voces naturales",
      "Soporte: Agentes conversacionales de voz para atención automatizada",
      "Accesibilidad: Conversión de texto a audio para personas con discapacidades",
    ],
    porQueEsBueno: [
      "Calidad de voz ultrarrealista con control de emociones avanzado",
      "70+ idiomásy 30+ opciónes de doblaje con sincronización labial",
      "Clonacion de voz precisa para mantener consistencia de marca",
      "API robusta con SDKs para Python y TypeScript",
    ],
  },

  // NO-CODE
  {
    id: "lovable",
    nombre: "Lovable",
    url: "https://lovable.dev",
    descripcion:
      "Plataforma de desarrollo de aplicaciónes web con IA que permite crear apps fullstack completas a partir de descripciónes en lenguaje natural. Genera código React/TypeScript real y desplegable, con integración a Supabase para backend y autenticacion.",
    descripcionCorta: "Apps fullstack con IA conversacional",
    categoria: "nocode",
    nivel: "intermedio",
    tier: "tier3",
    departamentos: ["operaciónes", "rrhh", "ventas", "finanzas", "marketing", "tech"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "Proyectos limitados" },
      { plan: "Starter", precio: "$20/mes", caracteristicas: "Mas mensajes IA, dominios" },
      { plan: "Launch", precio: "$50/mes", caracteristicas: "Prioridad, soporte" },
      { plan: "Scale", precio: "$100+/mes", caracteristicas: "Equipo, SLA" },
    ],
    casosDeUso: [
      "Finanzas: Dashboard de seguimiento de gastos con gráficos interactivos",
      "RRHH: Portal de onboarding con formularios y checklist",
      "Ventas: CRM interno simplificado para seguimiento de leads",
      "Marketing: Landing pages para campañas con formularios de captura",
      "Tech: Prototipos funciónales para validar ideas antes de desarrollo",
    ],
    porQueEsBueno: [
      "Genera código React/TypeScript real que puedes exportar y modificar",
      "Integracion nativa con Supabase para auth, DB y storage",
      "Interfaz conversacional: describes y la IA construye iterativamente",
      "Comunidad activa con ejemplos y templates compartidos",
    ],
  },
  {
    id: "base44",
    nombre: "Base44",
    url: "https://base44.com",
    descripcion:
      "Plataforma no-code para crear aplicaciónes de negocio internas rápidamente. Enfocada en herramientas operativas y de gestión con capacidades de base de datos, formularios y automatizaciones integradas.",
    descripcionCorta: "Apps de negocio internas sin código",
    categoria: "nocode",
    nivel: "intermedio",
    tier: "tier1",
    departamentos: ["finanzas", "admin", "operaciónes", "rrhh", "legal"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "Proyectos limitados" },
      { plan: "Pro", precio: "$25-50/mes", caracteristicas: "Ilimitados, integraciónes" },
      { plan: "Enterprise", precio: "Contactar", caracteristicas: "SSO, soporte dedicado" },
    ],
    casosDeUso: [
      "Finanzas: Sistema de aprobación de gastos con flujos automatizados",
      "Admin: Gestion de activos de oficina y reserva de salas",
      "RRHH: Portal de solicitudes (vacaciones, permisos) con aprobaciónes",
      "Operaciones: Seguimiento de pedidos y gestión de proveedores",
      "Legal: Base de datos de contratos con recordatorios de vencimiento",
    ],
    porQueEsBueno: [
      "Diseñado para herramientas internas de negocio (no landing pages)",
      "Base de datos relacional integrada sin configurar backend",
      "Flujos de trabajo y automatizaciones nativas para aprobaciónes",
      "Curva de aprendizaje máscorta que alternativas como Retool",
    ],
  },

  // DESARROLLO
  {
    id: "claude-code",
    nombre: "Claude Code",
    url: "https://claude.ai",
    descripcion:
      "CLI oficial de Anthropic que integra Claude directamente en el flujo de trabajo de programacion. Ofrece capacidades agenticas para editar archivos, ejecutar comandos, navegar codebases y realizar tareas de desarrollo complejas de forma autonoma en la terminal.",
    descripcionCorta: "CLI agéntico para desarrollo de software",
    categoria: "desarrollo",
    nivel: "avanzado",
    tier: "tier2",
    departamentos: ["tech"],
    precios: [
      { plan: "Pro", precio: "$20/mes", caracteristicas: "Incluido con limites" },
      { plan: "Max", precio: "$100/mes", caracteristicas: "Uso extendido, prioridad" },
      { plan: "API Usage", precio: "Por tokens", caracteristicas: "Pago por uso" },
    ],
    casosDeUso: [
      "Refactorizar código legacy y modernizar arquitecturas automáticamente",
      "Implementar features describiendo requisitos en lenguaje natural",
      "Debuggear errores complejos analizando logs y stack traces",
      "Crear tests unitarios y de integración para código existente",
      "Code reviews automáticos con sugerencias de mejora",
      "Migrar proyectos entre frameworks o actualizar dependencias",
    ],
    porQueEsBueno: [
      "Integra en terminal sin cambiar flujo de trabajo existente",
      "Lee, escribe y ejecuta código con contexto completo del proyecto",
      "Modelo Claude másavanzado con razonamiento extendido",
      "Aumentos de productividad 2-5x según testimonios de desarrolladores",
    ],
  },
  {
    id: "cursor",
    nombre: "Cursor",
    url: "https://cursor.com",
    descripcion:
      "Editor de código basado en VS Code con inteligencia artificial nativa que acelera el desarrollo mediante generación inteligente de código, refactorización automática y comprensión contextual completa del codebase. Incluye un agente de IA que ejecuta tareas de programacion de forma autonoma.",
    descripcionCorta: "Editor de código con IA integrada",
    categoria: "desarrollo",
    nivel: "intermedio",
    tier: "tier1",
    departamentos: ["tech"],
    precios: [
      { plan: "Hobby", precio: "$0", caracteristicas: "Requests limitados, autocompletado Tab" },
      { plan: "Pro", precio: "$20/mes", caracteristicas: "Tab ilimitado, agentes background" },
      { plan: "Pro+", precio: "$60/mes", caracteristicas: "3x créditos en todos los modelos" },
      { plan: "Teams", precio: "$40/usuario", caracteristicas: "Chats compartidos, SSO, analytics" },
    ],
    casosDeUso: [
      "Tech: Desarrollo de features nuevas entendiendo contexto del proyecto",
      "Tech: Refactorizar código legacy manteniendo funciónalidad",
      "Tech: Debugging identificando problemáscon contexto del codebase",
      "Tech: Onboarding - nuevos devs exploran codebase via chat",
      "Tech: Generacion automática de tests unitarios",
      "Product/Tech: Prototipado rápido de MVPs con generación asistida",
    ],
    porQueEsBueno: [
      "Indexa todo el codebase para sugerencias con contexto arquitectonico completo",
      "Modo agente autónomo: edita múltiples archivos y ejecuta comandos",
      "Transicion sin fricción desde VS Code (mismo ecosistema de extensiones)",
      "Flexibilidad de modelos: GPT-4, Claude, modelos propios según tarea",
    ],
  },
  {
    id: "claude-cowork",
    nombre: "Claude Co-Work",
    url: "https://claude.ai",
    descripcion:
      "Funcionalidad de tareas en segúndo plano de Claude Code que permite ejecutar trabajos autónomos mientras el desarrollador continua con otras actividades. Ideal para tareas largas como migraciónes, generación de documentación o refactorizaciónes extensas.",
    descripcionCorta: "Tareas autonomásen segúndo plano",
    categoria: "agentes",
    nivel: "intermedio",
    tier: "tier2",
    departamentos: ["tech", "operaciónes"],
    precios: [
      { plan: "Pro", precio: "$20/mes", caracteristicas: "Tareas background limitadas" },
      { plan: "Max", precio: "$100/mes", caracteristicas: "Multiples simultaneas, prioridad" },
    ],
    casosDeUso: [
      "Ejecutar migraciónes de base de datos mientras trabajas en otro",
      "Generar documentación completa del proyecto de forma asíncrona",
      "Refactorizar múltiples archivos en paralelo sin bloquear terminal",
      "Ejecutar suites de tests completas y recibir resultados al terminar",
      "Crear PRs automáticamente tras completar cambios de código",
      "Analizar codebase completo para detectar vulnerabilidades",
    ],
    porQueEsBueno: [
      "Multitasking real: seguir trabajando mientras Claude ejecuta tareas largas",
      "Reduce tiempos de espera en tareas que requieren procesamiento extenso",
      "Notificaciones inteligentes cuando tareas se completan o requieren atención",
      "Maximiza productividad sin supervisión constante de tareas de IA",
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

export function getToolsByTier(tier: RecommendationTier): Tool[] {
  return tools.filter((t) => t.tier === tier);
}

export function getCategories(): Category[] {
  return [...new Set(tools.map((t) => t.categoria))];
}

export function getTiers(): NonNullable<RecommendationTier>[] {
  return ["tier1", "tier2", "tier3"];
}
