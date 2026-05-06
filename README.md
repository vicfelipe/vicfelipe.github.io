# Victor Alencastro — Blog & Portfolio

Personal blog and portfolio of Victor Alencastro, Software Developer with 12+ years of experience in backend, databases, and platform engineering.

Live at **[victorcode.dev](https://victorcode.dev)**

---

## Contact

| | |
|---|---|
| Email | vicfelipe@live.com |
| LinkedIn | [linkedin.com/in/victor-alencastro](https://www.linkedin.com/in/victor-alencastro) |
| GitHub | [github.com/vicfelipe](https://github.com/vicfelipe) |

---

## Stack

| Layer | Technology |
|---|---|
| Framework | [Astro 5](https://astro.build) — static output |
| Content | MDX via Astro Content Collections |
| Styling | Tailwind CSS + CSS custom properties (OKLCH tokens) |
| Syntax highlighting | Shiki (dual-theme light/dark) |
| Fonts | Fraunces, Source Serif 4, IBM Plex Sans, JetBrains Mono (Google Fonts) |
| OG images | Satori + @resvg/resvg-js (generated at build time per article) |
| CMS | Decap CMS (Netlify Identity + Git Gateway) |
| Hosting | Netlify |
| i18n | PT-BR and EN, routed under `/pt/` and `/en/` |

---

## Commands

```bash
npm run dev       # dev server at localhost:4321
npm run build     # static build → dist/
npm run preview   # preview dist/
npm run cms       # local Decap CMS proxy (run alongside dev)
npm run lint      # eslint + prettier check
```

---

## Content

Articles live in `src/content/pt-articles/` and `src/content/en-articles/` as `.mdx` files.

### Frontmatter fields

```yaml
title: ""
description: ""
date: YYYY-MM-DD
category: platform | backend | databases | observability | data | career | ai
tags: []
translationKey: ""   # links PT and EN versions of the same article
language: pt | en
readingTime: 8       # minutes (optional)
coverImage: ""       # optional — see cover image spec below
draft: false
```

### Cover images

**Standard size: 1200 × 480 px (5:2 ratio)**

- Matches the exact aspect-ratio used for the cover inside the article page
- On the featured card the `object-fit: cover` centers and crops horizontally without distortion
- On the compact card strip the crop is minimal
- Save as **JPG or WebP at ~85% quality** — target 150–250 KB

If `coverImage` is omitted, a cover is generated automatically from the article category (dot-pattern SVG).

---

## Project structure

```
src/
  components/       # Astro components
  content/
    pt-articles/    # PT-BR MDX articles
    en-articles/    # EN MDX articles
  i18n/             # UI strings (PT + EN)
  layouts/          # BaseLayout, ArticleLayout
  lib/              # utils, categories, about data
  pages/
    [lang]/         # index, about, categories, posts/[slug]
    og/[lang]/      # OG image generation
  styles/           # tokens.css, global.css
public/
  admin/            # Decap CMS (index.html, config.yml)
```
