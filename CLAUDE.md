# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

- **Astro** (latest) with TypeScript — static output, no server
- **Tailwind CSS** + CSS custom properties from `plan/styles.css`
- **MDX** via Astro Content Collections
- **Shiki** for syntax highlighting (built into Astro)
- **Google Fonts**: Fraunces, Source Serif 4, IBM Plex Sans, JetBrains Mono

## Commands

Once scaffolded (tasks in `plan/tasks/`):

```bash
npm run dev       # dev server at localhost:4321
npm run build     # static build → dist/
npm run preview   # preview dist/
npm run lint      # eslint + prettier check
```

## Architecture

### i18n Routing

All pages exist under `/pt/...` and `/en/...`. There is no root `/` page — the root redirects to `/pt`. Language is persisted in `localStorage`. The `translationKey` frontmatter field links PT and EN versions of the same article.

### Content Collections

Articles live in `src/content/pt/articles/*.mdx` and `src/content/en/articles/*.mdx`. The collection schema is defined in `src/content/config.ts`.

Frontmatter fields: `title`, `description`, `date`, `tags`, `readingTime`, `language`, `slug`, `category`, `translationKey`.

### Design System

All CSS tokens live in `src/styles/tokens.css` (ported from `plan/styles.css`). Colors use OKLCH. Accent hue is controlled by `--accent-h` (default `144` — green). Dark mode via `[data-theme="dark"]`. Density via `[data-density="compact|regular|comfy"]`.

Key breakpoints: `1024px` (collapse TOC and hero side card) and `720px` (mobile menu, single-column).

### Component Conventions

- Astro components for static markup (`.astro`)
- No React/Vue unless a component needs client-side interactivity
- Client-side JS limited to: navbar scroll behavior, TOC active section, copy button, dark mode toggle, mobile menu, lang switcher slide animation
- All UI strings come from `src/i18n/strings.ts` — never hardcode text

### Pages

| Route | File |
|---|---|
| `/pt`, `/en` | `src/pages/[lang]/index.astro` |
| `/pt/posts/[slug]`, `/en/posts/[slug]` | `src/pages/[lang]/posts/[slug].astro` |
| `/pt/categories`, `/en/categories` | `src/pages/[lang]/categories/index.astro` |
| `/pt/categories/[id]`, `/en/categories/[id]` | `src/pages/[lang]/categories/[id].astro` |
| `/pt/about`, `/en/about` | `src/pages/[lang]/about.astro` |

### Design Reference

The `plan/` directory contains the authoritative design. Do not modify it.

- `plan/styles.css` — all tokens, components, utilities (source of truth for CSS)
- `plan/components.jsx` — React reference for component markup
- `plan/pages.jsx` — React reference for page layouts
- `plan/data.js` — all articles, categories, timeline, education, stack data
- `plan/i18n.js` — all UI strings (PT and EN)

Recreate the design pixel-perfectly from these references. Do not invent UI patterns.

## Key Constraints

- Zero hardcoded text — use `src/i18n/strings.ts`
- Zero unnecessary client JS — use Astro's partial hydration (`client:load` only when needed)
- Static output only — `output: 'static'` in `astro.config.ts`
- Reading time computed from word count, not stored
- TOC sections use `id="sec-<slug>"` with `scroll-margin-top: 96px`
