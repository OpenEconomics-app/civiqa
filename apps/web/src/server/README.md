# server/ (server-only code)
- services/: API facades, data access (fetch, caching)
- auth/: route guards, session helpers
- cache/: revalidation/tag helpers
UI (`src/components`) must **not** import from `src/server/**`.
