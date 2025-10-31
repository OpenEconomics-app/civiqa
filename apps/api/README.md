# CIVIQA — API Service (Laravel 12)

**Purpose:** Backend for CIVIQA, designed with strict Separation of Concerns (SoC), Domain-Driven Design (DDD), Repository pattern, and CQRS read/write segregation.

## Quick Start

```bash
cd apps/api
cp .env.example .env
php artisan key:generate
docker compose -f docker-compose.dev.yml up -d   # Postgres 16 + pgAdmin
php artisan migrate
php artisan serve  # http://127.0.0.1:8000
```

## Database (PostgreSQL)

-   Local dev via Docker compose (user: `civiqa`, pass: `civiqa`, db: `civiqa`)
-   pgAdmin at http://localhost:8080 (admin@local / admin)
-   Extensions enabled: `uuid-ossp`, `pg_trgm`

## Folder Map (high level)

-   `app/Domain` — Entities, Value Objects, Domain Services, Policies, Specs, Events
-   `app/Application` — Use-cases (Commands), Queries (read models), DTOs
-   `app/Infrastructure` — Framework/IO: HTTP, Persistence (Eloquent), Cache, Mail, Event bus
-   `app/Support/Providers` — IoC bindings (Repositories, UnitOfWork, etc.)
-   `routes/api/v1` — Versioned API endpoints
-   `docs/api` — OpenAPI, Postman, diagrams

## Conventions

-   Controllers are **thin**; delegate to use-case handlers.
-   Domain is **pure PHP** (no Eloquent/HTTP).
-   Repositories are **interfaces in Domain**, implementations in Infrastructure.
-   Transactions via **Unit of Work** (Infrastructure), orchestrated by Application layer.
-   Versioned API: `/api/v1/...`
-   Update `.env.example` whenever adding new config.
