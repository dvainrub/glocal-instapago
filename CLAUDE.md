# Glocal Instapago

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
├── data/          # Centralized data/content
├── designs/       # Design variants (if multiple)
└── lib/           # Utilities
```

## Code Quality
When making changes, use these Claude Code skills:
- `/vercel-react-best-practices` - React/Next.js performance optimization
- `/web-design-guidelines` - Accessibility and UI best practices

## Deployment
- Auto-deploys from `main` branch to Vercel
- **Always commit and push changes to trigger deployment**
