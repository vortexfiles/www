# Testing Best Practices — Unit, E2E & CI/CD Integration

This document describes how we write unit tests and end-to-end (E2E) tests in this
project, and the conventions that keep them fast, reliable, and seamlessly integrated
with our CI/CD pipeline.

## Stack overview

| Layer | Tool | Location | CI workflow |
|---|---|---|---|
| Unit / component tests | [Vitest](https://vitest.dev) + [Testing Library](https://testing-library.com) | `__tests__/` | `.github/workflows/test.yml` |
| E2E tests | [Playwright](https://playwright.dev) | `e2e/` | `.github/workflows/e2e.yml` |
| Lint & type-check | ESLint + `tsc --noEmit` | — | `.github/workflows/lint.yml` |
| Build | Next.js | — | `.github/workflows/build.yml` |
| Deploy | Docker on self-hosted runner | — | `.github/workflows/deploy.yml` (main only) |

Commands:

```bash
npm run test           # unit tests, single run
npm run test:watch     # unit tests, watch mode
npm run test:coverage  # unit tests + V8 coverage report
npm run test:e2e       # Playwright E2E (starts the app automatically)
npm run test:e2e:ui    # Playwright interactive UI mode (local debugging)
```

---

## The testing pyramid

Keep the ratio roughly pyramid-shaped:

- **Many unit tests** — fast (milliseconds), isolated, run on every change.
- **Some component/integration tests** — render real components with Testing Library.
- **Few E2E tests** — slow (seconds), high confidence, cover critical user journeys only.

A failing unit test should point you at a specific function. A failing E2E test tells
you "the product is broken for users." Both signals matter; don't try to get one from
the other. Don't reproduce every unit-level edge case in E2E — that only makes the
pipeline slow and flaky.

---

## Unit tests (Vitest)

### Structure & naming

- Mirror the source tree inside `__tests__/` (e.g. `lib/utils.ts` → `__tests__/lib/utils.test.ts`).
- Name files `*.test.ts` / `*.test.tsx`.
- One `describe` block per unit under test; test names describe **behavior**, not implementation:
  - ✅ `it("returns the formatted price in EUR")`
  - ❌ `it("calls formatCurrency with the right args")`

### Writing good unit tests

1. **Test behavior, not implementation details.** Query the DOM the way a user would
   (`getByRole`, `getByText`, `getByLabelText`) instead of class names or test IDs.
   Reserve `data-testid` for elements with no accessible role.
2. **Arrange–Act–Assert.** Keep the three phases visually distinct; one logical
   assertion per test where practical.
3. **No shared mutable state between tests.** Use `beforeEach` for setup; Vitest runs
   files in isolation, but tests within a file share module state.
4. **Mock at the boundary, not the middle.** Mock network calls, timers, and browser
   APIs (`vi.mock`, `vi.useFakeTimers`) — not your own internal modules. Over-mocking
   makes tests pass while the app is broken.
5. **Use `@testing-library/user-event` over `fireEvent`** — it simulates real
   interaction sequences (pointer, focus, keyboard).
6. **Test the edges**: empty arrays, `null`/`undefined`, error states, loading states —
   not just the happy path.
7. **Keep tests deterministic.** No real network, no real time (`vi.setSystemTime`),
   no `Math.random` without seeding.

### Coverage

Coverage is enforced in `vitest.config.ts` (currently `lines: 60`). Coverage is a
floor, not a target — 100% coverage of trivial code is worth less than 60% coverage of
business logic. Raise the threshold gradually as coverage improves; never lower it to
make a PR pass.

The `e2e/` directory is excluded from Vitest so the two runners never overlap.

---

## E2E tests (Playwright)

### Structure & naming

- Tests live in `e2e/`, named `*.spec.ts` (distinct from unit `*.test.ts`).
- Group by user journey, not by page: `checkout.spec.ts`, not `button.spec.ts`.

### Writing good E2E tests

1. **Test critical user journeys only**: page loads, navigation works, forms submit,
   nothing crashes. If it can be a unit test, it should be.
2. **Use web-first assertions** (`await expect(locator).toBeVisible()`) — they
   auto-retry until timeout. Never use `page.waitForTimeout()` (hard sleeps) —
   it's the #1 source of both flakiness and slowness.
3. **Prefer role/text locators** (`page.getByRole("button", { name: "Envoyer" })`)
   over CSS selectors; they survive refactors and verify accessibility for free.
4. **Each test must be independent** — it should pass when run alone and in any order.
   Never depend on state left behind by a previous test.
5. **Test against the production build** (`next build` + `next start`), not the dev
   server — CI does this via the `webServer` block in `playwright.config.ts`.
   Locally the config falls back to `npm run dev` for convenience.
6. **Keep the suite fast.** Total E2E time should stay under ~5 minutes; if it grows,
   shard (`--shard`) or prune tests that duplicate unit coverage.

### Flakiness policy

- CI retries failed E2E tests up to 2× (`retries: 2` in config). A test that only
  passes on retry is **flaky** — fix or delete it, don't ignore it.
- On failure, CI uploads the Playwright HTML report (with traces and screenshots) as
  an artifact — download it from the workflow run to debug.
- `forbidOnly: true` in CI fails the build if someone commits `test.only`.

---

## CI/CD integration

### Pipeline layout

Four parallel checks run on every push/PR to `main` and `dev`; deploy runs only on
`main` after a push:

```
push / PR ──┬── Lint & Type-check   (lint.yml)
            ├── Unit tests + coverage (test.yml)
            ├── E2E tests            (e2e.yml)
            └── Build                (build.yml)

push to main ──── Docker build & deploy (deploy.yml, self-hosted runner)
```

### Principles that keep CI seamless

1. **Same commands locally and in CI.** CI only ever calls `npm run <script>` —
   never bespoke CI-only commands. If it fails in CI, `npm run test` /
   `npm run test:e2e` reproduces it locally.
2. **Pin and cache dependencies.** `npm ci` (not `npm install`) for reproducible
   installs; `actions/setup-node` caches the npm cache; Playwright browsers are
   cached keyed on `package-lock.json`.
3. **Fail fast, in parallel.** Lint, unit, E2E, and build run as independent
   workflows so a slow E2E run doesn't delay lint feedback.
4. **Deterministic environments.** CI pins Node 22 — keep your local version aligned.
   Playwright pins its browser versions to the installed package version.
5. **Artifacts for debugging, not logs archaeology.** Coverage reports and Playwright
   traces/reports are uploaded as workflow artifacts with retention limits.
6. **Timeouts everywhere.** The E2E job has `timeout-minutes: 20` so a hung server
   can't burn runner minutes.
7. **Branch protection.** Make all four checks required on `main` so nothing
   unverified reaches the deploy workflow.

### Adding a new test to CI

You usually don't have to do anything: any `*.test.ts(x)` under `__tests__/` is picked
up by `test.yml`, and any `*.spec.ts` under `e2e/` is picked up by `e2e.yml`. Only
touch the workflows when adding a new *kind* of check (e.g. visual regression, a11y
audit) — add it as a separate workflow following the same pattern.

### Pre-merge checklist

- [ ] `npm run lint && npm run type-check` passes
- [ ] `npm run test:coverage` passes and coverage didn't drop
- [ ] `npm run test:e2e` passes against a production build
- [ ] New logic has unit tests; new user-facing flows have (or reuse) an E2E journey
- [ ] No `test.only` / `describe.only` / skipped tests left behind
