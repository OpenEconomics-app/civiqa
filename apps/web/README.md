# CIVIQA — Web Application (Next.js). 

The **CIVIQA Web App** is a modern frontend built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, designed for scalability and civic data transparency.  
It lives inside the **OpenEconomics / CIVIQA monorepo** and follows strict separation of concerns (SoC) principles.

---

## 🧩 Tech Stack

- **Framework:** Next.js 15 (App Router, SSR/ISR)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Validation:** Zod (runtime & schema validation)
- **Package Manager:** pnpm (workspace-managed)
- **Linting & Formatting:** ESLint + Prettier
- **Testing:** Vitest + React Testing Library (optional)

---

## ⚙️ Prerequisites

| Tool            | Required Version |
| --------------- | ---------------- |
| Node.js         | ≥ 20.x (LTS)     |
| pnpm            | ≥ 9.x            |
| Git             | Latest           |
| macOS/Linux/WSL | Recommended      |

Install pnpm if missing:

```bash
npm install -g pnpm@9
```

---

## 🚀 Getting Started

### 1. Clone the monorepo

```bash
git clone git@github.com:OpenEconomics/civiqa.git
cd civiqa
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Create your local env file from the template:

```bash
cp apps/web/.env.example apps/web/.env.local
```

Then edit values as needed.

**`.env.example`**

```bash
# Base URL of the API (safe for client)
NEXT_PUBLIC_API_BASE=https://api.example.com

# Runtime environment
NODE_ENV=development
```

> `.env.local` is used for local development only.  
> Do **not** commit it — only update `.env.example` when adding new variables.

---

## 🧱 Project Structure

```
apps/web/
├─ public/                   # Static assets (images, fonts, icons)
├─ src/
│  ├─ app/                   # Next.js App Router (layouts, routes)
│  │  ├─ (public)/           # Public route group
│  │  ├─ (auth)/             # Authentication route group
│  │  ├─ (dashboard)/        # Authenticated user routes
│  │  ├─ layout.tsx          # Root layout
│  │  └─ globals.css         # Global styles
│  ├─ components/            # UI components (presentational only)
│  ├─ lib/                   # Pure utilities & helpers (no React)
│  ├─ server/                # Server-only code
│  │  ├─ services/           # API facades / data access
│  │  ├─ auth/               # Auth/session utilities
│  │  └─ cache/              # Revalidation, caching logic
│  └─ types/                 # Local TS types
├─ tailwind.config.ts        # Tailwind configuration
├─ postcss.config.js         # PostCSS configuration
├─ tsconfig.json             # TypeScript config
└─ package.json
```

---

## 🧠 Separation of Concerns (SoC)

| Layer         | Purpose                           | Rules                                     |
| ------------- | --------------------------------- | ----------------------------------------- |
| `app/`        | Routing, layouts, page components | Minimal business logic                    |
| `components/` | Pure UI components                | No data fetching or side effects          |
| `lib/`        | Helpers, utilities                | Pure functions only                       |
| `server/`     | Server-only logic                 | Never imported by UI components           |
| `types/`      | Local types & DTOs                | Shared logic comes from `/packages/types` |

**Do not:**

- Import from `src/server/**` inside components.
- Use `NEXT_PUBLIC_*` vars on the server (use `process.env` directly).

---

## 🧪 Common Commands

| Command                               | Description                                            |
| ------------------------------------- | ------------------------------------------------------ |
| `pnpm --filter ./apps/web dev`        | Start local development server (http://localhost:3000) |
| `pnpm --filter ./apps/web build`      | Create production build                                |
| `pnpm --filter ./apps/web start`      | Start production server                                |
| `pnpm --filter ./apps/web lint`       | Run ESLint checks                                      |
| `pnpm --filter ./apps/web type-check` | Run TypeScript type checks                             |
| `pnpm --filter ./apps/web test`       | Run tests (if configured)                              |

---

## 🧰 Development Workflow

1. Create a feature branch:
   ```bash
   git checkout -b feature/web-header
   ```
2. Commit using Conventional Commits:
   ```
   feat(web): add header component
   ```
3. Push to `develop` and open a Pull Request.

---

## 🧑‍💻 Conventions

- **Branch naming:**  
  `feature/<scope>`, `fix/<scope>`, `chore/<scope>`

- **Commit style:**  
  `type(scope): message`  
  _(e.g., `feat(web): implement layout structure`)_

- **Lint & Format before PR:**
  ```bash
  pnpm lint && pnpm type-check
  ```

---

## 🔒 Environment & Security

- `.env` and `.env.local` are **ignored** (git-protected).
- `.env.example` is **committed** for documentation.
- All environment variables must be prefixed with `NEXT_PUBLIC_` if exposed to the browser.

---

## 🧱 Quality & CI

This app uses:

- **ESLint** for style/lint rules
- **Prettier** for formatting
- **TypeScript strict mode** for type safety
- **web-ci** workflow (GitHub Actions) for automated build/lint/test
- **Protected branches:** `integration` (preprod), `master` (prod)

---

## 🪄 Troubleshooting

| Issue                       | Fix                                                    |
| --------------------------- | ------------------------------------------------------ |
| `pnpm` not found            | `npm i -g pnpm@9`                                      |
| Node version error          | `nvm use 20` or install Node 20                        |
| Port already in use         | `PORT=3001 pnpm --filter ./apps/web dev`               |
| Tailwind styles not loading | Check `content` paths in `tailwind.config.ts`          |
| “Module not found @/\*”     | Run `pnpm dev` once after fixing `tsconfig.json` paths |

---

## 📚 License & Ownership

© OpenEconomics — All rights reserved.  
For internal team use under the **CIVIQA** project.

---

## 📩 Contact

For issues or inquiries:  
**Email:** [vlphadev@gmail.com](mailto:vlphadev@gmail.com)  
**Maintainers:** CIVIQA Dev Team / OpenEconomics
