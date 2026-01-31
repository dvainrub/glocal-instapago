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

// Categories: automatizacion, agentes, investigacion, creatividad, nocode, desarrollo
export type Category =
  | "automatizacion"
  | "agentes"
  | "investigacion"
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
  investigacion: "Investigacion",
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
      "Plataforma de automatizacion visual que permite crear flujos de trabajo complejos conectando mas de 1,800 aplicaciones. Destaca por su interfaz tipo canvas con logica avanzada (condicionales, loops, routers) y manejo nativo de datos JSON/XML.",
    descripcionCorta: "Automatizacion visual con logica avanzada",
    categoria: "automatizacion",
    nivel: "intermedio",
    tier: "tier1",
    departamentos: ["finanzas", "admin", "tech", "operaciones", "rrhh"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "1,000 ops/mes, 2 escenarios" },
      { plan: "Core", precio: "$9/mes", caracteristicas: "10,000 ops/mes, ilimitados" },
      { plan: "Pro", precio: "$16/mes", caracteristicas: "Ejecucion prioritaria, tiempo real" },
      { plan: "Teams", precio: "$29/mes", caracteristicas: "Colaboracion, permisos" },
    ],
    casosDeUso: [
      "Finanzas: Conciliacion bancaria automatica cruzando extractos con facturas",
      "Admin: Generar contratos desde formularios y enviar a firma digital",
      "RRHH: Flujo de onboarding completo (alta en sistemas, cuentas, equipos)",
      "Tech: Sincronizar tickets Jira con Slack, alertas de monitoreo",
      "Ventas: Enriquecer leads con datos de LinkedIn/Clearbit al CRM",
      "Marketing: Segmentar audiencias y activar campañas personalizadas",
    ],
    porQueEsBueno: [
      "Precio por operacion 4-6x mas barato que Zapier en alto volumen",
      "Logica avanzada: routers, iteradores, manejo de errores granular",
      "Interfaz visual superior que muestra datos en tiempo real",
      "Ideal para automatizaciones complejas con multiples ramas",
    ],
  },
  {
    id: "zapier",
    nombre: "Zapier",
    url: "https://zapier.com",
    descripcion:
      "La plataforma de automatizacion mas popular y facil de usar, conectando mas de 6,000+ aplicaciones. Perfecta para usuarios no tecnicos que necesitan crear automatizaciones rapidas con la biblioteca de integraciones mas amplia del mercado.",
    descripcionCorta: "Automatizacion simple con mas integraciones",
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
      "RRHH: Publicar ofertas de empleo en multiples plataformas",
      "Ventas: Añadir contactos de Calendly a HubSpot automaticamente",
      "Marketing: Sincronizar suscriptores entre Mailchimp y Google Sheets",
    ],
    porQueEsBueno: [
      "Biblioteca de integraciones mas grande del mercado (6,000+ apps)",
      "Curva de aprendizaje minima: automatizaciones en minutos",
      "Mejor documentacion y soporte con templates pre-construidos",
      "Marca establecida, ideal para empresas que priorizan estabilidad",
    ],
  },
  {
    id: "n8n",
    nombre: "n8n",
    url: "https://n8n.io",
    descripcion:
      "Plataforma de automatizacion open-source con opcion self-hosted para control total de datos. Soporta JavaScript/Python nativo y tiene 70+ nodos dedicados a IA via LangChain. Modelo de precios por workflow que resulta mas economico en alto volumen.",
    descripcionCorta: "Automatizacion open-source con self-hosting",
    categoria: "automatizacion",
    nivel: "avanzado",
    tier: "tier3",
    departamentos: ["tech", "operaciones", "finanzas"],
    precios: [
      { plan: "Self-hosted", precio: "$0", caracteristicas: "Gratis, ilimitado, tu infra" },
      { plan: "Starter Cloud", precio: "$22/mes", caracteristicas: "2,500 ejecuciones" },
      { plan: "Pro Cloud", precio: "$57/mes", caracteristicas: "10,000 ejecuciones, colaboracion" },
      { plan: "Enterprise", precio: "Personalizado", caracteristicas: "SSO, SLA, soporte" },
    ],
    casosDeUso: [
      "Tech: Pipelines de datos con transformaciones complejas en JavaScript",
      "Operaciones: Automatizaciones con requisitos estrictos de privacidad/compliance",
      "Finanzas: Procesos internos que no pueden salir de la infraestructura propia",
      "Marketing: Integraciones de IA con LangChain para contenido personalizado",
      "Admin: Workflows de alto volumen donde el costo por ejecucion importa",
    ],
    porQueEsBueno: [
      "Self-hosting: control total de datos para compliance y privacidad",
      "1,000+ integraciones con 70+ nodos de IA via LangChain",
      "Codigo JavaScript/Python nativo para transformaciones avanzadas",
      "Precio por workflow (no por tarea) - mas economico en alto volumen [VERIFICAR]",
    ],
  },

  // INVESTIGACION (includes former "datos" tools)
  {
    id: "perplexity",
    nombre: "Perplexity AI",
    url: "https://perplexity.ai",
    descripcion:
      "Motor de busqueda conversacional impulsado por IA que proporciona respuestas directas con citas de fuentes verificadas. Combina modelos como GPT-4 y Claude con busqueda web en tiempo real, eliminando la necesidad de revisar multiples enlaces.",
    descripcionCorta: "Busqueda con IA y fuentes verificadas",
    categoria: "investigacion",
    nivel: "principiante",
    tier: "tier2",
    departamentos: ["todos", "legal", "finanzas", "marketing", "ventas"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "5 busquedas Pro/dia" },
      { plan: "Pro", precio: "$20/mes", caracteristicas: "300+ Pro/dia, GPT-4/Claude" },
      { plan: "Enterprise", precio: "Personalizado", caracteristicas: "SSO, ilimitado" },
    ],
    casosDeUso: [
      "Finanzas: Investigar regulaciones financieras con fuentes citadas",
      "RRHH: Buscar benchmarks salariales por industria y region",
      "Legal: Investigar jurisprudencia y cambios normativos",
      "Marketing: Analizar tendencias de mercado en tiempo real",
      "Ventas: Investigar prospectos y noticias antes de reuniones",
    ],
    porQueEsBueno: [
      "Respuestas incluyen citas con enlaces a fuentes originales",
      "Combina multiples LLMs (GPT-4, Claude, Llama) en una interfaz",
      "Busqueda en tiempo real supera a ChatGPT para info actual",
      "Interfaz limpia y rapida - muy valorada por su simplicidad",
    ],
  },
  {
    id: "genspark",
    nombre: "Genspark",
    url: "https://genspark.ai",
    descripcion:
      "Motor de busqueda con IA que genera 'Sparkpages' - paginas informativas personalizadas que sintetizan informacion de multiples fuentes en un formato visual estructurado. Diseñado para eliminar SEO spam y contenido publicitario.",
    descripcionCorta: "Busqueda que genera paginas informativas",
    categoria: "agentes",
    nivel: "principiante",
    tier: "tier1",
    departamentos: ["marketing", "ventas", "operaciones", "rrhh", "tech"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "Busquedas ilimitadas, basico" },
      { plan: "Plus", precio: "$20/mes", caracteristicas: "Agentes premium, velocidad" },
      { plan: "Pro", precio: "$199/mes", caracteristicas: "API access [VERIFICAR]" },
    ],
    casosDeUso: [
      "Marketing: Generar researches de mercado visuales para stakeholders",
      "Operaciones: Comparar proveedores con tablas comparativas automaticas",
      "RRHH: Crear guias sintetizando mejores practicas de la industria",
      "Tech: Investigar stacks tecnologicos con pros/contras estructurados",
      "Ventas: Research de prospectos listo para presentar",
    ],
    porQueEsBueno: [
      "Sparkpages eliminan necesidad de abrir multiples pestañas",
      "Filtra activamente contenido SEO spam y publicitario",
      "Agentes especializados por dominio dan resultados relevantes",
      "Alternativa fresca a motores de busqueda tradicionales",
    ],
  },
  {
    id: "notebooklm",
    nombre: "NotebookLM",
    url: "https://notebooklm.google.com",
    descripcion:
      "Asistente de investigacion de Google que permite subir documentos propios (PDFs, Docs, webs) y generar un 'experto virtual' sobre ese contenido. Famoso por generar podcasts de audio donde dos voces IA discuten tus documentos.",
    descripcionCorta: "Tu experto virtual sobre tus documentos",
    categoria: "investigacion",
    nivel: "principiante",
    tier: "tier3",
    departamentos: ["legal", "finanzas", "rrhh", "tech", "operaciones"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "50 notebooks, Audio Overviews" },
      { plan: "Plus", precio: "$10/mes", caracteristicas: "Ilimitados, 500 fuentes" },
      { plan: "Enterprise", precio: "Incluido", caracteristicas: "Via Google Workspace" },
    ],
    casosDeUso: [
      "Legal: Subir contratos para que el equipo pregunte sin leer todo",
      "RRHH: Chatbot interno sobre politicas, manuales y beneficios",
      "Finanzas: Analizar reportes anuales con resumenes en audio",
      "Tech: Documentacion tecnica convertida en asistente consultable",
      "Operaciones: Manuales de procedimientos consultables por chat",
    ],
    porQueEsBueno: [
      "Audio Overviews: podcasts de 10-15 min discutiendo tus documentos",
      "Respuestas grounded: solo de TUS documentos, reduce alucinaciones",
      "Integracion nativa con Google Workspace",
      "Completamente gratuito para uso basico",
    ],
  },
  {
    id: "notion-ai",
    nombre: "Notion AI",
    url: "https://notion.so/product/ai",
    descripcion:
      "Asistente de IA integrado en Notion que puede escribir, resumir, traducir y responder preguntas sobre tu espacio de trabajo. Utiliza tu base de conocimiento interna para generar contenido contextualizado y automatizar tareas de documentacion.",
    descripcionCorta: "Asistente de escritura integrado en Notion",
    categoria: "investigacion",
    nivel: "principiante",
    tier: "tier2",
    departamentos: ["todos", "admin", "operaciones", "rrhh", "marketing"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "20 respuestas limitadas" },
      { plan: "AI Add-on", precio: "$10/mes", caracteristicas: "Ilimitado, por usuario" },
      { plan: "Business + AI", precio: "$18/mes", caracteristicas: "Incluido, por usuario" },
    ],
    casosDeUso: [
      "Finanzas: Resumir reportes y generar narrativas para presentaciones",
      "RRHH: Crear descripciones de puestos, resumir evaluaciones",
      "Marketing: Generar borradores, brainstorming, traducir materiales",
      "Tech: Documentar codigo y procesos, crear templates de RFCs",
      "Operaciones: Crear SOPs automatizados, generar actas de reuniones",
    ],
    porQueEsBueno: [
      "Contexto integrado: conoce todo tu workspace para respuestas especificas",
      "Flujo de trabajo unificado: todo donde ya trabajas",
      "Q&A permite encontrar informacion en segundos",
      "Ideal para equipos que usan Notion como sistema operativo central",
    ],
  },
  {
    id: "rows",
    nombre: "Rows.com",
    url: "https://rows.com",
    descripcion:
      "Spreadsheet moderno con IA nativa que permite analizar datos, automatizar tareas y conectarse a 50+ integraciones (Google Analytics, HubSpot, Stripe) sin codigo. Combina familiaridad de Excel con poder de IA y APIs.",
    descripcionCorta: "Spreadsheet con IA e integraciones nativas",
    categoria: "investigacion",
    nivel: "intermedio",
    tier: "tier3",
    departamentos: ["finanzas", "ventas", "operaciones", "marketing", "tech"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "5 spreadsheets, 10 AI/mes" },
      { plan: "Plus", precio: "$9/mes", caracteristicas: "Ilimitados, 250 AI/mes" },
      { plan: "Pro", precio: "$18/mes", caracteristicas: "1,000 AI/mes, embeds" },
      { plan: "Team", precio: "$49+/mes", caracteristicas: "AI ilimitado, SSO" },
    ],
    casosDeUso: [
      "Marketing: Conectar Analytics y redes para dashboards en vivo",
      "Finanzas: Integrar Stripe/PayPal para reportes de ingresos automaticos",
      "Ventas: Sincronizar HubSpot/Salesforce para pipeline en tiempo real",
      "Tech: Monitorear metricas de Mixpanel/Amplitude con alertas",
      "Operaciones: Consolidar datos de multiples fuentes automaticamente",
    ],
    porQueEsBueno: [
      "Integraciones nativas: conecta a herramientas sin Zapier",
      "AI Analyst: pregunta en lenguaje natural, obtiene analisis",
      "Familiar para usuarios de Excel/Google Sheets",
      "Colaboracion en tiempo real con controles de acceso",
    ],
  },
  {
    id: "manus",
    nombre: "Manus",
    url: "https://manus.im",
    descripcion:
      "Agente de IA autonomo capaz de ejecutar tareas complejas de forma independiente: navegar por internet, escribir codigo, crear documentos y completar workflows multi-paso sin supervision constante. Posicionado como 'el primer agente de IA verdaderamente general'.",
    descripcionCorta: "Agente autonomo que ejecuta tareas complejas",
    categoria: "agentes",
    nivel: "intermedio",
    tier: "tier2",
    departamentos: ["tech", "operaciones", "marketing", "ventas", "finanzas"],
    precios: [
      { plan: "Credits", precio: "$39/mes aprox", caracteristicas: "Sistema de creditos [VERIFICAR]" },
      { plan: "Enterprise", precio: "Contactar", caracteristicas: "Acceso dedicado, sin colas" },
    ],
    casosDeUso: [
      "Tech: Automatizar investigacion de codigo, crear prototipos, scraping",
      "Marketing: Generar reportes de competencia completos con graficos",
      "Operaciones: Automatizar procesos multi-paso con varias herramientas",
      "Ventas: Investigar empresas prospectas y generar briefings automaticos",
      "Finanzas: Compilar datos de multiples fuentes en reportes estructurados",
    ],
    porQueEsBueno: [
      "Autonomia real: ejecuta tareas de 10-30 min sin intervencion",
      "Navegacion web real: abre paginas, hace clicks, extrae datos",
      "Genera entregables completos: documentos, spreadsheets, codigo",
      "Pionero en agentes autonomos accesibles al publico",
    ],
  },

  // CREATIVIDAD (merged: presentaciones + diseño + video)
  {
    id: "gamma",
    nombre: "Gamma",
    url: "https://gamma.app",
    descripcion:
      "Plataforma de IA que genera presentaciones, documentos y sitios web de forma automatica a partir de texto o prompts. Transforma ideas en contenido visual profesional en segundos, sin necesidad de diseño manual.",
    descripcionCorta: "Presentaciones con IA automaticas",
    categoria: "creatividad",
    nivel: "principiante",
    tier: "tier2",
    departamentos: ["ventas", "finanzas", "marketing", "rrhh", "tech", "operaciones", "todos"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "400 creditos, con marca" },
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
      "Ideal para crear contenido rapido sin depender de diseñadores",
    ],
  },
  {
    id: "canva",
    nombre: "Canva",
    url: "https://canva.com",
    descripcion:
      "Plataforma de diseño visual todo-en-uno que democratiza la creacion grafica. Permite crear desde posts para redes hasta presentaciones, videos y materiales impresos con templates profesionales. Incluye herramientas de IA para generar y editar imagenes, textos y diseños.",
    descripcionCorta: "Diseño visual para todos",
    categoria: "creatividad",
    nivel: "principiante",
    tier: "tier3",
    departamentos: ["marketing", "admin", "rrhh", "ventas", "finanzas", "operaciones", "todos"],
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
      "Operaciones: Diagramas de procesos, checklists visuales",
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
      "Plataforma de generacion de video con IA que permite crear videos profesionales utilizando avatares digitales realistas y voces sintetizadas en mas de 175 idiomas. Ofrece traduccion automatica de videos con sincronizacion labial, clonacion de voz, y avatares personalizados.",
    descripcionCorta: "Videos con avatares IA y traduccion automatica",
    categoria: "creatividad",
    nivel: "intermedio",
    tier: "tier2",
    departamentos: ["marketing", "ventas", "rrhh", "operaciones", "todos"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "3 videos/mes, 3 min, 720p con marca" },
      { plan: "Creator", precio: "$29/mes", caracteristicas: "Ilimitados 30 min, 1080p, clonacion voz" },
      { plan: "Team", precio: "$39/usuario", caracteristicas: "4K, colaboracion, min 2 usuarios" },
      { plan: "Enterprise", precio: "Personalizado", caracteristicas: "SSO, soporte dedicado [VERIFICAR]" },
    ],
    casosDeUso: [
      "Marketing: Videos promocionales y anuncios UGC a escala sin produccion tradicional",
      "Ventas: Videos personalizados de prospeccion con nombre del cliente dinamico",
      "RRHH: Videos de bienvenida y formacion para onboarding de empleados",
      "Formacion: Capacitacion en compliance y uso de software actualizable al instante",
      "Comunicacion: Mensajes de liderazgo traducidos automaticamente a multiples idiomas",
    ],
    porQueEsBueno: [
      "Traduccion con lip-sync en 175+ idiomas para empresas globales",
      "Crear videos profesionales solo con texto, sin camaras ni edicion",
      "Escalabilidad: generar cientos de videos personalizados simultaneamente",
      "Valoracion alta (4.7/5 estrellas) por calidad de avatares y soporte",
    ],
  },
  {
    id: "elevenlabs",
    nombre: "ElevenLabs",
    url: "https://elevenlabs.io",
    descripcion:
      "Plataforma de IA especializada en generacion de voz, clonacion vocal y doblaje automatico. Ofrece texto a voz ultrarrealista en mas de 70 idiomas con control emocional avanzado, ideal para podcasts, videos, e-learning y atencion al cliente.",
    descripcionCorta: "Generacion de voz y clonacion con IA",
    categoria: "creatividad",
    nivel: "intermedio",
    tier: "tier2",
    departamentos: ["marketing", "rrhh", "operaciones", "tech", "todos"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "10,000 creditos (~10 min), no comercial" },
      { plan: "Starter", precio: "$5/mes", caracteristicas: "30,000 creditos, uso comercial" },
      { plan: "Creator", precio: "$22/mes", caracteristicas: "100,000 creditos, clonacion pro" },
      { plan: "Pro", precio: "$99/mes", caracteristicas: "500,000 creditos, API avanzada" },
    ],
    casosDeUso: [
      "Marketing: Voces para anuncios y videos promocionales en multiples idiomas",
      "Contenido: Narracion de podcasts, audiolibros y videos de YouTube",
      "Formacion: Materiales de e-learning y cursos online con voces naturales",
      "Soporte: Agentes conversacionales de voz para atencion automatizada",
      "Accesibilidad: Conversion de texto a audio para personas con discapacidades",
    ],
    porQueEsBueno: [
      "Calidad de voz ultrarrealista con control de emociones avanzado",
      "70+ idiomas y 30+ opciones de doblaje con sincronizacion labial",
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
      "Plataforma de desarrollo de aplicaciones web con IA que permite crear apps fullstack completas a partir de descripciones en lenguaje natural. Genera codigo React/TypeScript real y desplegable, con integracion a Supabase para backend y autenticacion.",
    descripcionCorta: "Apps fullstack con IA conversacional",
    categoria: "nocode",
    nivel: "intermedio",
    tier: "tier3",
    departamentos: ["operaciones", "rrhh", "ventas", "finanzas", "marketing", "tech"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "Proyectos limitados" },
      { plan: "Starter", precio: "$20/mes", caracteristicas: "Mas mensajes IA, dominios" },
      { plan: "Launch", precio: "$50/mes", caracteristicas: "Prioridad, soporte" },
      { plan: "Scale", precio: "$100+/mes", caracteristicas: "Equipo, SLA" },
    ],
    casosDeUso: [
      "Finanzas: Dashboard de seguimiento de gastos con graficos interactivos",
      "RRHH: Portal de onboarding con formularios y checklist",
      "Ventas: CRM interno simplificado para seguimiento de leads",
      "Marketing: Landing pages para campañas con formularios de captura",
      "Tech: Prototipos funcionales para validar ideas antes de desarrollo",
    ],
    porQueEsBueno: [
      "Genera codigo React/TypeScript real que puedes exportar y modificar",
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
      "Plataforma no-code para crear aplicaciones de negocio internas rapidamente. Enfocada en herramientas operativas y de gestion con capacidades de base de datos, formularios y automatizaciones integradas.",
    descripcionCorta: "Apps de negocio internas sin codigo",
    categoria: "nocode",
    nivel: "intermedio",
    tier: "tier1",
    departamentos: ["finanzas", "admin", "operaciones", "rrhh", "legal"],
    precios: [
      { plan: "Free", precio: "$0", caracteristicas: "Proyectos limitados" },
      { plan: "Pro", precio: "$25-50/mes", caracteristicas: "Ilimitados, integraciones" },
      { plan: "Enterprise", precio: "Contactar", caracteristicas: "SSO, soporte dedicado" },
    ],
    casosDeUso: [
      "Finanzas: Sistema de aprobacion de gastos con flujos automatizados",
      "Admin: Gestion de activos de oficina y reserva de salas",
      "RRHH: Portal de solicitudes (vacaciones, permisos) con aprobaciones",
      "Operaciones: Seguimiento de pedidos y gestion de proveedores",
      "Legal: Base de datos de contratos con recordatorios de vencimiento",
    ],
    porQueEsBueno: [
      "Diseñado para herramientas internas de negocio (no landing pages)",
      "Base de datos relacional integrada sin configurar backend",
      "Flujos de trabajo y automatizaciones nativas para aprobaciones",
      "Curva de aprendizaje mas corta que alternativas como Retool",
    ],
  },

  // DESARROLLO
  {
    id: "claude-code",
    nombre: "Claude Code",
    url: "https://claude.ai",
    descripcion:
      "CLI oficial de Anthropic que integra Claude directamente en el flujo de trabajo de programacion. Ofrece capacidades agenticas para editar archivos, ejecutar comandos, navegar codebases y realizar tareas de desarrollo complejas de forma autonoma en la terminal.",
    descripcionCorta: "CLI agentico para desarrollo de software",
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
      "Refactorizar codigo legacy y modernizar arquitecturas automaticamente",
      "Implementar features describiendo requisitos en lenguaje natural",
      "Debuggear errores complejos analizando logs y stack traces",
      "Crear tests unitarios y de integracion para codigo existente",
      "Code reviews automaticos con sugerencias de mejora",
      "Migrar proyectos entre frameworks o actualizar dependencias",
    ],
    porQueEsBueno: [
      "Integra en terminal sin cambiar flujo de trabajo existente",
      "Lee, escribe y ejecuta codigo con contexto completo del proyecto",
      "Modelo Claude mas avanzado con razonamiento extendido",
      "Aumentos de productividad 2-5x segun testimonios de desarrolladores",
    ],
  },
  {
    id: "cursor",
    nombre: "Cursor",
    url: "https://cursor.com",
    descripcion:
      "Editor de codigo basado en VS Code con inteligencia artificial nativa que acelera el desarrollo mediante generacion inteligente de codigo, refactorizacion automatica y comprension contextual completa del codebase. Incluye un agente de IA que ejecuta tareas de programacion de forma autonoma.",
    descripcionCorta: "Editor de codigo con IA integrada",
    categoria: "desarrollo",
    nivel: "intermedio",
    tier: "tier1",
    departamentos: ["tech"],
    precios: [
      { plan: "Hobby", precio: "$0", caracteristicas: "Requests limitados, autocompletado Tab" },
      { plan: "Pro", precio: "$20/mes", caracteristicas: "Tab ilimitado, agentes background" },
      { plan: "Pro+", precio: "$60/mes", caracteristicas: "3x creditos en todos los modelos" },
      { plan: "Teams", precio: "$40/usuario", caracteristicas: "Chats compartidos, SSO, analytics" },
    ],
    casosDeUso: [
      "Tech: Desarrollo de features nuevas entendiendo contexto del proyecto",
      "Tech: Refactorizar codigo legacy manteniendo funcionalidad",
      "Tech: Debugging identificando problemas con contexto del codebase",
      "Tech: Onboarding - nuevos devs exploran codebase via chat",
      "Tech: Generacion automatica de tests unitarios",
      "Product/Tech: Prototipado rapido de MVPs con generacion asistida",
    ],
    porQueEsBueno: [
      "Indexa todo el codebase para sugerencias con contexto arquitectonico completo",
      "Modo agente autonomo: edita multiples archivos y ejecuta comandos",
      "Transicion sin friccion desde VS Code (mismo ecosistema de extensiones)",
      "Flexibilidad de modelos: GPT-4, Claude, modelos propios segun tarea",
    ],
  },
  {
    id: "claude-cowork",
    nombre: "Claude Co-Work",
    url: "https://claude.ai",
    descripcion:
      "Funcionalidad de tareas en segundo plano de Claude Code que permite ejecutar trabajos autonomos mientras el desarrollador continua con otras actividades. Ideal para tareas largas como migraciones, generacion de documentacion o refactorizaciones extensas.",
    descripcionCorta: "Tareas autonomas en segundo plano",
    categoria: "agentes",
    nivel: "intermedio",
    tier: "tier2",
    departamentos: ["tech", "operaciones"],
    precios: [
      { plan: "Pro", precio: "$20/mes", caracteristicas: "Tareas background limitadas" },
      { plan: "Max", precio: "$100/mes", caracteristicas: "Multiples simultaneas, prioridad" },
    ],
    casosDeUso: [
      "Ejecutar migraciones de base de datos mientras trabajas en otro",
      "Generar documentacion completa del proyecto de forma asincrona",
      "Refactorizar multiples archivos en paralelo sin bloquear terminal",
      "Ejecutar suites de tests completas y recibir resultados al terminar",
      "Crear PRs automaticamente tras completar cambios de codigo",
      "Analizar codebase completo para detectar vulnerabilidades",
    ],
    porQueEsBueno: [
      "Multitasking real: seguir trabajando mientras Claude ejecuta tareas largas",
      "Reduce tiempos de espera en tareas que requieren procesamiento extenso",
      "Notificaciones inteligentes cuando tareas se completan o requieren atencion",
      "Maximiza productividad sin supervision constante de tareas de IA",
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
