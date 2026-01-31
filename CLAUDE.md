# Glocal Instapago

AI Tools Catalog for Instapago/Glocal Solution - showcasing recommended AI tools organized by category and tier.

## Stack
- Next.js 16 + React 19
- Tailwind CSS 4
- Framer Motion
- Lucide React icons

## Commands
```bash
npm run dev    # Start dev server (localhost:3000)
npm run build  # Production build
```

## Project Structure
```
src/
├── app/           # Next.js app router
├── components/    # UI components
├── data/
│   └── tools.ts   # Main data source - ALL tool definitions here
├── designs/
│   └── catalog2.tsx  # Main catalog UI component
└── lib/           # Utilities
```

## Code Quality
When making changes, use these Claude Code skills:
- `/vercel-react-best-practices` - React/Next.js performance optimization
- `/web-design-guidelines` - Accessibility and UI best practices

## Deployment
- **Live:** https://glocal-instapago.vercel.app
- **GitHub:** https://github.com/dvainrub/glocal-instapago
- Auto-deploys from `main` branch to Vercel
- **Always commit and push changes to trigger deployment**

---

## Tool Catalog Structure

### Categories (6 total)
| Category | Description | Icon Color |
|----------|-------------|------------|
| `automatizacion` | Workflow automation (Make, Zapier, n8n) | Amber |
| `agentes` | Autonomous AI agents (Genspark, Manus, Claude Co-Work) | Teal |
| `conocimiento` | Knowledge & data tools (Perplexity, NotebookLM, Notion AI, Rows) | Blue |
| `creatividad` | Content creation (Gamma, Canva, HeyGen, ElevenLabs) | Purple |
| `nocode` | App builders (Lovable, Base44) | Pink |
| `desarrollo` | Developer tools (Claude Code, Cursor) | Slate |

### Tiers
| Tier | Label | Description |
|------|-------|-------------|
| `tier1` | Top Pick | Altamente Recomendado (gold badge) |
| `tier2` | Great | Recomendado (silver badge) |
| `tier3` | Good | Opcional (bronze badge) |

### Tool Interface
```typescript
interface Tool {
  id: string;                    // Unique identifier (lowercase, hyphenated)
  nombre: string;                // Display name
  url: string;                   // Official website
  descripcion: string;           // Full description (2-3 sentences, Spanish)
  descripcionCorta: string;      // Short tagline (5-7 words, Spanish)
  categoria: Category;           // One of 6 categories
  nivel: SkillLevel;             // principiante | intermedio | avanzado
  tier: RecommendationTier;      // tier1 | tier2 | tier3
  departamentos: Department[];   // Target departments
  precios: PricingTier[];        // Pricing plans
  casosDeUso: string[];          // Use cases prefixed by department
  porQueEsBueno: string[];       // Why it's good (4 bullet points)
}
```

---

## Adding New Tools

### 1. Research Phase (Parallel Agents)
Use parallel agents to research multiple tools simultaneously:

```
Launch 3 agents in parallel:
- Agent 1: Research Tool A
- Agent 2: Research Tool B
- Agent 3: Research Tool C
```

Each agent should gather:
- **descripcion**: 2-3 sentences explaining what it does
- **descripcionCorta**: 5-7 word tagline
- **precios**: Current pricing tiers from official site
- **casosDeUso**: 5-6 use cases prefixed by department (e.g., "Marketing: ...")
- **porQueEsBueno**: 4 real differentiators based on reviews/community

### 2. Pricing Verification
- Always check official pricing pages
- If pricing is uncertain or may have changed, add `[VERIFICAR]` tag:
  ```typescript
  { plan: "Pro", precio: "$29/mes", caracteristicas: "Feature X [VERIFICAR]" }
  ```
- Enterprise pricing is often "Personalizado" or "Contactar"

### 3. Research Sources
- **Official sites**: Pricing, features
- **G2, Capterra**: Real user reviews and use cases
- **Reddit**: Community sentiment and real-world usage
- **Product Hunt**: Launch info and early reviews
- **YouTube**: Tutorials showing actual usage

### 4. Adding to tools.ts
1. Find the appropriate category section (marked with comments like `// CREATIVIDAD`)
2. Add the new tool object following the interface
3. Use Spanish for all text fields with proper accents (á, é, í, ó, ú, ñ)
4. Run `npm run build` to verify TypeScript compiles
5. Commit and push to deploy

### 5. Adding New Categories
**IMPORTANT: Always confirm new category suggestions with the user before implementing.**

If adding a new category (after user approval):
1. Update `Category` type in `tools.ts`
2. Add to `categoryLabels` in `tools.ts`
3. Add icon in `categoryIcons` in `catalog2.tsx`
4. Add color in `categoryColors` in `catalog2.tsx`

---

## Content Guidelines

### Spanish Text Style
- **Use proper Spanish accents**: á, é, í, ó, ú, ñ (e.g., "automatización", "información", "diseño")
- Keep descriptions concise and professional
- Use department prefixes for use cases: "Finanzas:", "RRHH:", "Tech:", etc.

### Departments Available
`finanzas`, `admin`, `rrhh`, `tech`, `ventas`, `marketing`, `legal`, `operaciones`, `todos`

### Skill Levels
- `principiante`: No technical skills needed
- `intermedio`: Some familiarity with tools/concepts
- `avanzado`: Technical expertise required
