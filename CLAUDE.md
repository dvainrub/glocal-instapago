# Rebundle Tools

AI Tools Catalog for Rebundle - showcasing recommended AI tools organized by category and tier.

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
├── components/
│   └── LanguageToggle.tsx  # Shared language toggle component
├── data/
│   ├── tools.ts           # Tool definitions (bilingual)
│   ├── translations.ts    # UI strings (bilingual)
│   ├── resourceMapping.ts # Use case resource links
│   └── research/          # Research JSON files
├── designs/
│   ├── linear.tsx         # Main catalog UI
│   └── compare.tsx        # Tool comparison view
└── lib/
    ├── i18n.ts            # Localized<T> type
    ├── useLang.ts         # Language hook
    └── ui-config.ts       # Shared UI constants (icons, colors)
```

## Code Quality
- `/vercel-react-best-practices` - React/Next.js optimization
- `/web-design-guidelines` - Accessibility and UI best practices

## Deployment
- **Live:** https://rebundle-tools.vercel.app
- **GitHub:** https://github.com/dvainrub/rebundle-tools
- Auto-deploys from `main` branch

---

## Internationalization

- **English:** Default (rebundle-tools.vercel.app)
- **Spanish:** ?lang=es

All content uses `Localized<T>` type to enforce both languages exist. See `src/lib/i18n.ts`.

### Files for Content Changes
| Content Type | File |
|-------------|------|
| Tool data | `src/data/tools.ts` |
| Resources | `src/data/resourceMapping.ts` |
| UI strings | `src/data/translations.ts` |
| UI styling | `src/lib/ui-config.ts` |

---

## Adding New Tools

1. **Research** (use parallel agents for multiple tools):
   - descripcion/descripcionCorta (bilingual)
   - precios from official site
   - 5-6 casosDeUso with department prefix
   - 4 porQueEsBueno differentiators
   - One resource link per use case

2. **Add to `tools.ts`**: Find category section, add tool object

3. **Add to `resourceMapping.ts`**: Match use case indices

4. **Verify**: `npm run build` catches missing translations

5. **Deploy**: `git commit && git push`

### Pricing Verification
- Add `[VERIFY]`/`[VERIFICAR]` if pricing uncertain
- Enterprise often "Custom"/"Contactar"

### Adding Categories
Confirm with user first, then update:
1. `Category` type in `tools.ts`
2. `ui.categories` in `translations.ts`
3. Icons/colors in `src/lib/ui-config.ts`

---

## Resource Mapping

Every use case needs a resource link. Index in `existingUseCases` matches `casosDeUso` array position.

Resource types: `guide`, `tutorial`, `video`, `blog`, `template`, `tool`, `course`

Use `null` for missing resources (shows X icon with Resources toggle ON).

---

## Content Guidelines

- **Spanish**: Use proper accents (a, e, i, o, u, n)
- **Use cases**: Prefix with department (Finance:/Finanzas:, HR:/RRHH:, etc.)
- **Departments**: finanzas, admin, rrhh, tech, ventas, marketing, legal, operaciones, todos
- **Levels**: principiante, intermedio, avanzado

---

## UI Features

### Compare Mode
Click "Compare" button, select 2-5 tools, view side-by-side at /compare

### Resources Toggle
Footer toggle shows/hides resource links next to each use case

### Filters
- Recommendation (tier1/tier2/tier3)
- Category (6 categories)
- Level (beginner/intermediate/advanced)
