# JuveniQ Refactor Checklist (UI-Invariant)

## Module Boundaries
- `src/lib/content/*`: domain-specific content data and types.
- `src/lib/data.ts`: compatibility barrel to keep existing import contracts stable.
- `src/lib/contact-form.ts`: contact form constants and validation logic.
- `src/hooks/use-scroll-to-top.ts`: route entry scroll behavior.
- `src/hooks/use-pointer-capability.ts`: reusable pointer capability detection.
- `src/lib/analytics/loaders.ts`: script injection and idempotent analytics loading.

## Naming Standards
- Boolean state uses intent-first naming (`isMenuOpen`, `isRouteActive`).
- Event handlers use `handle*` prefixes (`handleFieldChange`, `handleFormSubmit`).
- Collections and loop variables use descriptive nouns (`activeCategory`, `article`).

## Runtime Safety
- `AppErrorBoundary` wraps route shell to prevent full app crashes.
- Consent storage reads/writes are wrapped in `try/catch` for restricted browser modes.
- Analytics script loading is guarded and idempotent to avoid duplicate script injection.

## UI Invariance Rule
- Preserve class names and visual hierarchy while refactoring.
- No route, CTA, color, spacing, or interaction-flow changes in this pass.
- Validate representative pages after refactor:
  - Home
  - Services
  - Portfolio
  - Contact
  - Articles
