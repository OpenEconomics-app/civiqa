# CIVIQA API — Architecture & SoC

## Layers

1. **Domain** (business rules, pure PHP)
2. **Application** (use-cases, DTOs, orchestration; CQRS handlers)
3. **Infrastructure** (DB/HTTP/cache/mail/adapters, Eloquent models + repositories)
4. **Interface Adapters** (Controllers, Requests, Resources under Infrastructure/Http)

## Design Patterns

-   **Repository**: Domain contracts, Infra implementations (Eloquent/Postgres)
-   **Unit of Work**: transactional consistency for aggregates
-   **CQRS**: Commands (write) vs Queries (read models)
-   **Specification**: composable business filters
-   **Domain Events + Outbox**: reliable integration events
-   **Value Objects**: Email, Name, etc., immutable
-   **Policy/Gate**: fine-grained authorization

## Folder Structure

```
app/
  Domain/
    Shared/{Contracts,Exceptions,ValueObjects,Specification,Events}
    <Context>/{Entity,Repository,Service,Policy}
  Application/
    Shared/{Bus,Contracts}
    <Context>/{DTO,Command,Query}
  Infrastructure/
    Persistence/{Eloquent/{Models,Repositories,Mappers},Migrations,Seeders,Transactions}
    Http/{Controllers,Requests,Resources,Middleware}
    {Cache,Mail,Event/Bus}
  Support/Providers
routes/
  api/v1/
docs/api
```

## Rules for PR Review

-   No Eloquent/HTTP in **Domain/Application**.
-   Controllers ≤ ~30 LOC; no business logic.
-   Repositories injected via interfaces (Domain contracts).
-   Transactions only through **UnitOfWork** in Application handlers.
-   DTOs at boundaries; no raw arrays crossing layers.
-   Specs used for non-trivial filtering.
-   Events for meaningful state changes (persisted via outbox pattern).
f