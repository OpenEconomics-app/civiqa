# CIVIQA Web (Next.js) — Architecture

## Folders
- `src/app` — routing, layouts, server components; minimal client components.
- `src/components` — presentational, reusable UI; no data access or side-effects.
- `src/lib` — pure utilities (formatters, mappers). No React, no I/O.
- `src/server` — server-only: API facades (`services/`), auth, cache, revalidation.
- `src/types` — app-local TS types only (shared types live in /packages/types).

## SoC rules
1) UI never imports from `src/server/**`.  
2) Data fetching happens in **server components** or `src/server/services`.  
3) Env usage: only `NEXT_PUBLIC_*` in client; others stay server-only.  
4) Routing groups: `(public)`, `(auth)`, `(dashboard)` to isolate concerns.  
5) Styling via Tailwind; tokens/utilities in `globals.css` (no ad-hoc globals).

## Build & quality
- Strict TypeScript, Prettier, ESLint (imports order + boundary checks).
- App Router + RSC by default; cache via `next` revalidate/tags (added later).
