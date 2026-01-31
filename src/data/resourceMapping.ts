// Resource mapping linking existing use cases to researched resources
// Read from tmp/research/*.json

export interface ResourceLink {
  title: string;
  url: string;
  type: string;
}

export interface NewUseCase {
  department: string;
  useCase: { en: string; es: string };
  resources: ResourceLink[];
}

export interface ToolResourceMapping {
  // Index matches casosDeUso array position - null means no resource found
  existingUseCases: (ResourceLink[] | null)[];
  // New use cases from research not in catalog
  newUseCases: NewUseCase[];
}

export const resourceMapping: Record<string, ToolResourceMapping> = {
  // AUTOMATIZACION
  make: {
    existingUseCases: [
      // 0: Finance: Automatic bank reconciliation
      [{ title: "Invoice Data Extraction with Make.com", url: "https://www.dumplingai.com/blog/how-to-extract-invoice-data-from-emails-using-dumpling-ai-and-make-com", type: "tutorial" }],
      // 1: Admin: Generate contracts from forms
      [{ title: "Mastering DocuSign Module in Make.com", url: "https://community.make.com/t/mastering-the-docusign-module-in-make-com-with-airtable-google-docs/94045", type: "tutorial" }],
      // 2: HR: Complete onboarding workflow
      [{ title: "Automated Onboarding with Make.com", url: "https://scalevise.com/resources/automated-onboarding-with-make-com-save-time-cut-costs-scale-faster/", type: "guide" }],
      // 3: Tech: Sync Jira tickets with Slack
      [{ title: "Jira + Slack Integration", url: "https://www.make.com/en/integrations/jira/slack", type: "guide" }],
      // 4: Sales: Enrich leads with LinkedIn/Clearbit
      [{ title: "Automated Lead Generation System", url: "https://www.classcentral.com/course/youtube-steal-this-powerful-make-com-lead-generation-system-489808", type: "video" }],
      // 5: Marketing: Segment audiences and campaigns
      [{ title: "Email Marketing Segmentation", url: "https://www.make.com/en/how-to-guides/how-to-automate-data-collection-part-two-email-marketing-segmentation", type: "tutorial" }],
    ],
    newUseCases: [
      {
        department: "Marketing",
        useCase: { en: "Marketing: AI-powered campaign automation with GPT integration", es: "Marketing: Automatizacion de campanas con IA y GPT" },
        resources: [{ title: "Blend Make.com with GPTs for Campaign Automation", url: "https://www.growth-rocket.com/blog/how-to-blend-make-com-with-gpts-for-end-to-end-campaign-automation/", type: "blog" }],
      },
    ],
  },

  zapier: {
    existingUseCases: [
      // 0: Finance: Notify Stripe/QuickBooks payments
      [{ title: "Email notifications for Stripe charges", url: "https://zapier.com/apps/email/integrations/stripe/3368/get-email-notifications-for-stripe-charges", type: "template" }],
      // 1: Admin: Create tasks in Asana/Monday from emails
      [{ title: "Create Asana tasks from Gmail", url: "https://zapier.com/apps/asana/integrations/gmail/9207/create-asana-tasks-for-labeled-gmail-emails-business-gmail-accounts-only", type: "template" }],
      // 2: HR: Post job offers to multiple platforms
      [{ title: "AI Job Recruitment Automation", url: "https://zapier.com/automation/job-automation/ai-job-recruitment", type: "guide" }],
      // 3: Sales: Add Calendly contacts to HubSpot
      [{ title: "Calendly HubSpot Integration", url: "https://zapier.com/apps/calendly/integrations/hubspot", type: "template" }],
      // 4: Marketing: Sync subscribers Mailchimp/Sheets
      [{ title: "Google Sheets Mailchimp Integration", url: "https://zapier.com/apps/google-sheets/integrations/mailchimp", type: "template" }],
    ],
    newUseCases: [
      {
        department: "Marketing",
        useCase: { en: "Marketing: AI social media posting across platforms", es: "Marketing: Publicacion automatica en redes con IA" },
        resources: [{ title: "AI Social Media Posting Automation", url: "https://zapier.com/automation/social-media-automation/ai-social-media-posting", type: "guide" }],
      },
    ],
  },

  n8n: {
    existingUseCases: [
      // 0: Tech: Data pipelines with JavaScript
      [{ title: "JavaScript Data Processing with Code Node", url: "https://n8n.io/workflows/5729-learn-javascript-data-processing-with-code-node-filtering-analysis-and-export-examples/", type: "template" }],
      // 1: Operations: Privacy/compliance automations
      [{ title: "Automating GDPR Requests with n8n", url: "https://medium.com/@Nexumo_/automating-gdpr-requests-with-n8n-without-leaks-12e6b96f425e", type: "blog" }],
      // 2: Finance: Internal processes on own infra
      [{ title: "Invoice Processing with GPT-4 and Airtable", url: "https://n8n.io/workflows/9744-automate-invoice-processing-and-weekly-spending-reports-with-gpt-4-and-airtable/", type: "template" }],
      // 3: Marketing: LangChain AI integrations
      [{ title: "AI Automation with n8n and LangChain", url: "https://medium.com/@aleksej.gudkov/introduction-to-ai-automation-with-n8n-and-langchain-9b6f4c4ca675", type: "blog" }],
      // 4: Admin: High-volume workflows
      [{ title: "Why E-commerce Sellers Choose n8n", url: "https://medium.com/aimonks/why-e-commerce-sellers-are-ditching-expensive-automation-tools-for-n8n-the-complete-guide-9794db535afa", type: "blog" }],
    ],
    newUseCases: [
      {
        department: "Tech",
        useCase: { en: "Tech: Build autonomous AI agents with multi-agent workflows", es: "Tech: Construir agentes IA autonomos con flujos multi-agente" },
        resources: [{ title: "How to Build AI Agents with n8n", url: "https://www.codecademy.com/article/build-ai-agents-with-n8n", type: "tutorial" }],
      },
    ],
  },

  // CONOCIMIENTO
  perplexity: {
    existingUseCases: [
      // 0: Finance: Research financial regulations
      [{ title: "Getting Started With Perplexity AI For Finance", url: "https://www.f9finance.com/perplexity-ai-for-finance/", type: "guide" }],
      // 1: HR: Search salary benchmarks
      null, // Limited HR-specific resources
      // 2: Legal: Research case law
      [{ title: "Using Perplexity AI for Legal Research", url: "https://www.theaienterprise.io/p/using-perplexity-ai-for-legal-research", type: "guide" }],
      // 3: Marketing: Analyze market trends
      [{ title: "Perplexity AI Market Research Guide", url: "https://digitalmarketingsage.in/perplexity-ai-market-research-a-proven-5-step-guide/", type: "guide" }],
      // 4: Sales: Research prospects
      [{ title: "Perplexity for Market Research & Sales", url: "https://marketingguys.com/blog/effectively-use-perplexity-ai/", type: "guide" }],
    ],
    newUseCases: [
      {
        department: "Content",
        useCase: { en: "Content: Write articles backed by real-time research", es: "Contenido: Escribir articulos con investigacion en tiempo real" },
        resources: [{ title: "How I Use Perplexity AI to Write Articles", url: "https://medium.com/gigonomics/how-i-use-perplexity-ai-to-write-articles-step-by-step-b95338ceccff", type: "tutorial" }],
      },
      {
        department: "Legal",
        useCase: { en: "Legal: Patent search and intellectual property research", es: "Legal: Busqueda de patentes e investigacion de propiedad intelectual" },
        resources: [{ title: "Introducing Perplexity Patents", url: "https://www.perplexity.ai/hub/blog/introducing-perplexity-patents", type: "blog" }],
      },
    ],
  },

  notebooklm: {
    existingUseCases: [
      // 0: Legal: Upload contracts for team queries
      [{ title: "How To Analyze Legal Contracts In NotebookLM", url: "https://www.youtube.com/watch?v=Nq8Xxxi_WFM", type: "video" }],
      // 1: HR: Chatbot about policies/manuals
      [{ title: "Say Goodbye to Overwhelming Onboarding Docs", url: "https://medium.com/@sahil_tah/say-goodbye-to-overwhelming-onboarding-docs-with-notebooklm-8d81e597dc8a", type: "blog" }],
      // 2: Finance: Analyze annual reports
      [{ title: "Using NotebookLM to Track Finances", url: "https://www.xda-developers.com/using-notebooklm-as-finance-tracker/", type: "blog" }],
      // 3: Tech: Technical documentation assistant
      [{ title: "How to Use NotebookLM for Developers", url: "https://clickup.com/blog/how-to-use-notebooklm-for-developers/", type: "guide" }],
      // 4: Operations: Queryable procedure manuals
      [{ title: "NotebookLM for Project Management", url: "https://www.geeky-gadgets.com/notebooklm-project-management-guide-2025/", type: "guide" }],
    ],
    newUseCases: [
      {
        department: "All",
        useCase: { en: "All: Create AI podcasts discussing your documents", es: "Todos: Crear podcasts IA sobre tus documentos" },
        resources: [{ title: "Create Custom Educational Podcasts with NotebookLM", url: "https://www.kdnuggets.com/how-to-create-custom-educational-podcasts-with-notebooklm", type: "tutorial" }],
      },
    ],
  },

  "notion-ai": {
    existingUseCases: [
      // 0: Finance: Summarize reports for presentations
      [{ title: "Notion AI for Financial Documentation", url: "https://circuitintellect.com/notion-ai-can-help-in-financial-documentation/", type: "guide" }],
      // 1: HR: Create job descriptions
      [{ title: "Notion for HR Professionals", url: "https://www.landmarklabs.co/blog/notion-for-hr-professionals-ultimate-guide-2024", type: "guide" }],
      // 2: Marketing: Generate drafts, brainstorming
      [{ title: "Marketing and Sales with Notion AI", url: "https://www.notion.com/es-es/help/guides/how-marketing-and-sales-teams-can-enhance-creativity-and-productivity-with", type: "guide" }],
      // 3: Tech: Document code and processes
      [{ title: "Notion For API Documentation", url: "https://www.landmarklabs.co/blog/notion-for-api-documentation", type: "guide" }],
      // 4: Operations: Create automated SOPs
      [{ title: "AI Prompts for Notion AI: SOPs Guide", url: "https://gptprompts.ai/ai-prompts-notion-ai", type: "guide" }],
    ],
    newUseCases: [],
  },

  rows: {
    existingUseCases: [
      // 0: Marketing: Connect Analytics for dashboards
      [{ title: "Custom Traffic Report with Google Analytics", url: "https://rows.com/docs/website-traffic-report-analytics", type: "tutorial" }],
      // 1: Finance: Integrate Stripe for revenue reports
      [{ title: "Stripe Integration", url: "https://rows.com/integrations/stripe", type: "guide" }],
      // 2: Sales: Sync HubSpot/Salesforce pipeline
      [{ title: "Salesforce Integration", url: "https://rows.com/integrations/salesforce", type: "guide" }],
      // 3: Tech: Monitor Mixpanel/Amplitude metrics
      [{ title: "BigQuery Integration", url: "https://rows.com/integrations/bigquery", type: "guide" }],
      // 4: Operations: Consolidate data from sources
      [{ title: "How to import data from Notion", url: "https://rows.com/blog/post/how-to-import-data-from-spreadsheets-in-notion", type: "blog" }],
    ],
    newUseCases: [
      {
        department: "All",
        useCase: { en: "All: Use AI to analyze, classify, and extract data from spreadsheets", es: "Todos: Usar IA para analizar, clasificar y extraer datos de hojas de calculo" },
        resources: [{ title: "How to use Rows AI functions", url: "https://rows.com/docs/using-rowsai", type: "tutorial" }],
      },
    ],
  },

  // AGENTES
  genspark: {
    existingUseCases: [
      // 0: Marketing: Generate visual market research
      [{ title: "Genspark AI: Next Generation of Search & Research", url: "https://techbullion.com/genspark-ai-the-next-generation-of-search-research-creative-tools-2026-guide/", type: "guide" }],
      // 1: Operations: Compare vendors with tables
      [{ title: "Top 5 Laptop Brands Comparison Sparkpage", url: "https://www.genspark.ai/spark/top-5-laptop-brands-in-2025-comprehensive-comparison/feef381c-69f0-41ee-a6da-a75dee7d460e", type: "example" }],
      // 2: HR: Create guides from best practices
      [{ title: "HR Workforce Optimization Sparkpage", url: "https://www.genspark.ai/spark/empowering-hr-maximizing-organizational-effectiveness-and-workforce-optimization/d81c99af-97e9-466e-9bb0-cd924463916f", type: "example" }],
      // 3: Tech: Research tech stacks
      [{ title: "GenSpark AI Browser Review", url: "https://mejba.me/blog/genspark-ai-browser-comprehensive-review-2025", type: "blog" }],
      // 4: Sales: Prospect research ready to present
      [{ title: "Automate Lead Gen with Genspark", url: "https://dicloak.com/blog-detail/this-new-ai-tool-automates-lead-gen--data-analysis-with-one-prompt-gensparkai", type: "tutorial" }],
    ],
    newUseCases: [
      {
        department: "All",
        useCase: { en: "All: Automate browser tasks (calls, emails, bookings) with Super Agent", es: "Todos: Automatizar tareas del navegador con Super Agent" },
        resources: [{ title: "Genspark AI Tutorial - Meet the AI Super Agent", url: "http://kevinstratvert.com/2025/09/19/genspark-ai-tutorial-meet-the-ai-super-agent/", type: "video" }],
      },
    ],
  },

  manus: {
    existingUseCases: [
      // 0: Tech: Automate code research, prototypes
      [{ title: "Manus AI Full Tutorial - Build Websites & Apps", url: "https://www.youtube.com/watch?v=2q6iTrbLWVk", type: "video" }],
      // 1: Marketing: Competitor reports with graphs
      [{ title: "AI Agent Showdown: ChatGPT vs Manus for Competitive Intelligence", url: "https://lisapeyton.com/the-ai-agent-showdown-chatgpt-vs-manus-ai-for-content-marketing-competitive-intelligence/", type: "blog" }],
      // 2: Operations: Multi-step processes
      [{ title: "Build Custom AI Workflows with Manus", url: "https://manus.im/features/agent-skills", type: "guide" }],
      // 3: Sales: Research prospects, generate briefings
      [{ title: "11 Practical Use Cases of Manus AI in Marketing", url: "https://blusteak.com/blog/manus-ai-in-marketing", type: "guide" }],
      // 4: Finance: Compile data into structured reports
      [{ title: "No-Hallucination Financial AI Assistant with Manus", url: "https://medium.com/@bwzheng2010/i-built-myself-a-no-hallucination-financial-data-ai-assistant-88a43961f104", type: "tutorial" }],
    ],
    newUseCases: [
      {
        department: "Tech",
        useCase: { en: "Tech: Build full-stack websites without coding", es: "Tech: Crear sitios web full-stack sin programar" },
        resources: [{ title: "AI Website Builder - Build Full-Stack Web Apps", url: "https://manus.im/features/webapp", type: "guide" }],
      },
    ],
  },

  // CREATIVIDAD
  gamma: {
    existingUseCases: [
      // 0: Finance: Quarterly reports/presentations
      [{ title: "Gamma Pitch Deck Template", url: "https://gamma.app/docs/Pitch-Deck-35p6ez16vi5fvlg", type: "guide" }],
      // 1: Sales: Commercial proposals/pitch decks
      [{ title: "SaaStr AI App: Gamma Sales Deck Generator", url: "https://www.saastr.com/saastr-ai-app-of-the-week-gamma-the-ai-sales-deck-generator-thats-converting-our-biggest/", type: "blog" }],
      // 2: Marketing: Campaign presentations
      [{ title: "AI Marketing Tools - Create Campaign Decks", url: "https://gamma.app/solutions/marketing", type: "guide" }],
      // 3: HR: Onboarding decks and culture
      [{ title: "Training and Developing Employees", url: "https://gamma.app/docs/Training-and-Developing-Employees-7x9ka7kr82yb67e", type: "guide" }],
      // 4: Tech: Document architectures/roadmaps
      [{ title: "Gamma AI for Project Management", url: "https://pmpwithray.com/blogs/gamma-ai-for-project-management/", type: "guide" }],
      // 5: Operations: Visual SOPs/manuals
      [{ title: "Ultimate SOP Creation Framework", url: "https://gamma.app/docs/The-Ultimate-SOP-Creation-Framework-10-8h8vxihm881vunp", type: "guide" }],
    ],
    newUseCases: [],
  },

  canva: {
    existingUseCases: [
      // 0: Marketing: Social content, banners, flyers
      [{ title: "Social Media Mastery Course", url: "https://www.canva.com/design-school/courses/social-media-mastery", type: "course" }],
      // 1: HR: Job offers, certificates, branding
      [{ title: "Canva for HR Communications", url: "https://www.visionfactory.org/post/leveraging-canva-for-hr-communications-and-employer-branding", type: "guide" }],
      // 2: Sales: Visual proposals, one-pagers
      [{ title: "Business Proposals with Canva", url: "https://www.canva.com/docs/business-proposals/", type: "guide" }],
      // 3: Finance: Data infographics, visual reports
      [{ title: "Infographics for Financial Data", url: "https://lite14.net/blog/2024/12/04/how-to-create-infographics-for-financial-data-visualization/", type: "guide" }],
      // 4: Admin: Internal communications
      [{ title: "Internal Company Newsletter Template", url: "https://hivo.co/templates/how-to-create-a-canva-template-for-a-internal-company-newsletter", type: "template" }],
      // 5: Operations: Process diagrams, checklists
      [{ title: "Flowchart Design Tips", url: "https://www.canva.com/learn/flowchart-design-tips/", type: "guide" }],
    ],
    newUseCases: [],
  },

  heygen: {
    existingUseCases: [
      // 0: Marketing: Promotional videos/UGC ads
      [{ title: "Ultimate Guide to AI UGC Ads with HeyGen", url: "https://community.heygen.com/public/resources/ai-ugc-ads-with-heygen", type: "guide" }],
      // 1: Sales: Personalized prospecting videos
      [{ title: "HeyGen for Personalized Sales Outreach", url: "https://community.heygen.com/public/resources/how-to-use-heygen-for-personalized-sales-outreach", type: "guide" }],
      // 2: HR: Welcome and training videos
      [{ title: "HeyGen for HR and Onboarding Training", url: "https://community.heygen.com/public/resources/how-to-use-heygen-for-hr-and-onboarding-training", type: "guide" }],
      // 3: Training: Compliance training
      [{ title: "HeyGen for Compliance Training", url: "https://community.heygen.com/public/resources/how-to-use-heygen-for-compliance-training", type: "guide" }],
      // 4: Communication: Leadership messages translated
      [{ title: "Translate and Localize Videos in HeyGen", url: "https://community.heygen.com/public/resources/how-to-translate-and-localize-your-existing-videos-in-heygen", type: "guide" }],
    ],
    newUseCases: [
      {
        department: "Social",
        useCase: { en: "Social: Platform-optimized videos for LinkedIn, Instagram, TikTok", es: "Social: Videos optimizados para LinkedIn, Instagram, TikTok" },
        resources: [{ title: "Create Social Media Videos with HeyGen", url: "https://community.heygen.com/public/resources/how-to-create-social-media-videos-using-heygen", type: "guide" }],
      },
    ],
  },

  elevenlabs: {
    existingUseCases: [
      // 0: Marketing: Voices for ads/videos
      [{ title: "How to Make AI Ads with ElevenLabs", url: "https://www.youtube.com/watch?v=aVLU6Fj7o0w", type: "video" }],
      // 1: Content: Narration for podcasts/audiobooks
      [{ title: "Producing AI-Narrated Audiobooks", url: "https://www.thecreativepenn.com/2025/06/27/producing-ai-narrated-audiobooks-using-elevenlabs-with-simon-patrick/", type: "guide" }],
      // 2: Training: E-learning with natural voices
      [{ title: "AI Voice Creation for Every Industry", url: "https://www.udemy.com/course/ai-voice-creation-for-every-industry-with-elevenlabs/", type: "tutorial" }],
      // 3: Support: Voice conversational agents
      [{ title: "Deploy Conversational AI Agents", url: "https://elevenlabs.io/agents", type: "guide" }],
      // 4: Accessibility: Text to audio conversion
      [{ title: "ElevenLabs Partners with NFB", url: "https://elevenlabs.io/blog/nfb-elevenlabs", type: "blog" }],
    ],
    newUseCases: [
      {
        department: "Localization",
        useCase: { en: "Localization: Dub videos into 29+ languages preserving original voice", es: "Localizacion: Doblar videos a 29+ idiomas manteniendo la voz original" },
        resources: [{ title: "ElevenLabs Dubbing Studio", url: "https://www.maginative.com/article/elevenlabs-unveils-dubbing-studio-professional-video-localization/", type: "blog" }],
      },
    ],
  },

  // NO-CODE
  lovable: {
    existingUseCases: [
      // 0: Finance: Expense tracking dashboard
      [{ title: "Expense Management Tools with Lovable", url: "https://lovable.dev/solutions/use-case/expense-management-tools", type: "guide" }],
      // 1: HR: Onboarding portal
      [{ title: "AI Hiring Platform with Lovable", url: "https://lovable.dev/blog/ai-hiring-platform-recruiter", type: "blog" }],
      // 2: Sales: Simplified internal CRM
      [{ title: "Building a Personal CRM in Lovable", url: "https://maa1.medium.com/building-a-personal-crm-in-lovable-76ae99c2c800", type: "tutorial" }],
      // 3: Marketing: Landing pages with forms
      [{ title: "Build $10K Landing Page in 1 Hour", url: "https://lovable.dev/video/can-ai-build-a-10k-landing-page-in-1-hour-we-tried-it-live", type: "video" }],
      // 4: Tech: Functional prototypes
      [{ title: "How to Validate a Business Idea", url: "https://lovable.dev/guides/bloghow-to-validate-a-business-idea", type: "guide" }],
    ],
    newUseCases: [
      {
        department: "Tech",
        useCase: { en: "Tech: Convert Figma designs into full-stack applications", es: "Tech: Convertir disenos Figma en aplicaciones full-stack" },
        resources: [{ title: "Turn Figma Designs into Full Stack Apps", url: "https://www.builder.io/blog/lovable-builder", type: "tutorial" }],
      },
    ],
  },

  base44: {
    existingUseCases: [
      // 0: Finance: Expense approval with workflows
      [{ title: "Enterprise AI Workflow Automations", url: "https://www.udemy.com/course/base44-mastery-build-enterprise-ai-workflow-automations/", type: "course" }],
      // 1: Admin: Asset management/room booking
      [{ title: "Build Internal Apps in Under 10 Minutes", url: "https://www.nocode.mba/articles/base44-build-internal-apps", type: "tutorial" }],
      // 2: HR: Request portal with approvals
      [{ title: "Multi-User Apps with Roles and Permissions", url: "https://medium.com/@edneequaye/how-i-build-multi-user-apps-in-base44-and-how-you-can-too-c8eed6390d04", type: "blog" }],
      // 3: Operations: Order tracking/vendor mgmt
      [{ title: "E-commerce and Retail Apps", url: "https://base44.com/use-cases/categories/ecommerce-retail", type: "guide" }],
      // 4: Legal: Contract database with reminders
      [{ title: "Scheduling Tasks in Your App", url: "https://docs.base44.com/Building-your-app/Scheduling-tasks", type: "guide" }],
    ],
    newUseCases: [
      {
        department: "Tech",
        useCase: { en: "Tech: Combine Base44 with n8n for AI automation workflows", es: "Tech: Combinar Base44 con n8n para flujos de automatizacion IA" },
        resources: [{ title: "AI Automation with Base44 and n8n", url: "https://www.aifire.co/p/a-no-code-guide-to-ai-automation-with-base44-and-n8n", type: "guide" }],
      },
    ],
  },

  // DESARROLLO
  "claude-code": {
    existingUseCases: [
      // 0: Refactor legacy code
      [{ title: "Ultimate Code Modernization Prompt for Claude Code", url: "https://alirezarezvani.medium.com/the-ultimate-code-modernization-refactoring-prompt-for-your-subagent-in-claude-code-codex-cli-or-d9f9a417eed3", type: "blog" }],
      // 1: Implement features in natural language
      [{ title: "Claude Code Tutorial for Beginners", url: "https://www.youtube.com/watch?v=6q8joS_592k", type: "video" }],
      // 2: Debug complex errors
      [{ title: "50 Claude Code Prompts That Fix Bugs", url: "https://sider.ai/blog/ai-tools/claude-code-prompts-that-actually-fix-bugs-refactor-messes-and-ship-prs", type: "guide" }],
      // 3: Create unit/integration tests
      [{ title: "Create Reliable Unit Tests with Claude Code", url: "https://dev.to/alfredoperez/create-reliable-unit-tests-with-claude-code-4e8p", type: "tutorial" }],
      // 4: Automatic code reviews
      [{ title: "Claude Code Review Action", url: "https://github.com/owengretzinger/claude-code-review-action", type: "tool" }],
      // 5: Migrate projects/update dependencies
      [{ title: "Using Claude to Migrate Node Versions", url: "https://medium.com/@mol_96553/using-claude-to-migrate-to-a-newer-version-of-node-6e0d7f44143e", type: "blog" }],
    ],
    newUseCases: [
      {
        department: "Tech",
        useCase: { en: "Tech: Security audits and vulnerability scanning", es: "Tech: Auditorias de seguridad y escaneo de vulnerabilidades" },
        resources: [{ title: "Claude Code Security Review Action", url: "https://github.com/anthropics/claude-code-security-review", type: "tool" }],
      },
    ],
  },

  cursor: {
    existingUseCases: [
      // 0: Tech: Feature development with context
      [{ title: "Cursor AI - 10 Practical Examples", url: "https://www.datacamp.com/tutorial/cursor-ai-code-editor", type: "tutorial" }],
      // 1: Tech: Refactor legacy code
      [{ title: "6 Ways to Speed Up Refactoring with Cursor AI", url: "https://fireup.pro/blog/6-ways-to-speed-up-code-refactoring-with-cursor-ai", type: "guide" }],
      // 2: Tech: Debugging with context
      [{ title: "Demo Debugging with AI", url: "https://notes.kodekloud.com/docs/Cursor-AI/Inline-Editing-and-Debugging/Demo-Debugging-with-AI", type: "tutorial" }],
      // 3: Tech: Onboarding via chat
      [{ title: "Cursor AI Integration Guide 2026", url: "https://monday.com/blog/rnd/cursor-ai-integration/", type: "guide" }],
      // 4: Tech: Auto test generation
      [{ title: "Write Unit Tests with Cursor AI", url: "https://lilys.ai/en/notes/cursor-ai-20251026/write-unit-tests-cursor-ai", type: "guide" }],
      // 5: Product/Tech: Rapid MVP prototyping
      [{ title: "Rapid-Build MVPs with Cursor + AI", url: "https://medium.com/@agi_brad/how-i-use-cursor-ai-to-rapid-build-mvps-without-losing-the-plot-b32ed06868fb", type: "blog" }],
    ],
    newUseCases: [
      {
        department: "Tech",
        useCase: { en: "Tech: Automated code review and PR workflow with GitHub MCP", es: "Tech: Revision de codigo y PRs automatizados con GitHub MCP" },
        resources: [{ title: "Supercharge Code Review with Cursor and GitHub MCP", url: "https://medium.com/ni-tech-talk/supercharge-your-code-review-process-with-cursor-and-github-mcp-c55b7b1ddc91", type: "blog" }],
      },
    ],
  },

  "claude-cowork": {
    existingUseCases: [
      // 0: Execute database migrations
      [{ title: "Headless Mode CI/CD Integration", url: "https://code.claude.com/docs/en/headless", type: "documentation" }],
      // 1: Generate project documentation
      [{ title: "Subagents in Claude Code", url: "https://www.eesel.ai/blog/subagents-in-claude-code", type: "guide" }],
      // 2: Refactor multiple files in parallel
      [{ title: "Multi-Agent Orchestration: 10+ Claude Instances", url: "https://dev.to/bredmond1019/multi-agent-orchestration-running-10-claude-instances-in-parallel-part-3-29da", type: "tutorial" }],
      // 3: Run test suites and receive results
      [{ title: "Playwright Agents with Claude Code", url: "https://shipyard.build/blog/playwright-agents-claude-code/", type: "tutorial" }],
      // 4: Create PRs automatically
      [{ title: "Auto-generate PRs with Claude API", url: "https://dev.to/toyama0919/auto-generate-pull-requests-with-claude-api-and-shell-function-fp2", type: "tutorial" }],
      // 5: Analyze codebase for vulnerabilities
      [{ title: "Claude Code Security Review", url: "https://github.com/anthropics/claude-code-security-review", type: "tool" }],
    ],
    newUseCases: [
      {
        department: "Tech",
        useCase: { en: "Tech: Continuous automated development loop (create PR, wait CI, merge)", es: "Tech: Ciclo de desarrollo automatizado continuo (crear PR, esperar CI, merge)" },
        resources: [{ title: "Continuous Claude - Autonomous PR Loop", url: "https://github.com/AnandChowdhary/continuous-claude", type: "tool" }],
      },
    ],
  },
};
