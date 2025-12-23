# Copilot / AI Agent Instructions — Liminal Arc Media

This file captures the essential, discoverable facts an AI coding agent needs to be immediately productive in this repository.

Summary
- Project: Next.js (App Router) static site with TypeScript and Tailwind.
- Build: `npm run dev` (local), `npm run build` + `npm run start` (prod).
- Key decision: `next.config.ts` sets `output: 'export'` and `images.unoptimized = true` — this project targets a static/exportable site and serves media from `public/`.

Quick entry points
- App root/layout: app/layout.tsx — global fonts and CSS variables (`next/font` usage).
- Home/intro: app/page.tsx — client component; contains `use client` and uses `next/navigation` router.push.
- Public assets: `public/` — video and static media are expected here (e.g. `/lam-hero-intro.mp4`).
- Configs: [next.config.ts](next.config.ts), [package.json](package.json), [tsconfig.json](tsconfig.json#L1)

Important project constraints & patterns (do not violate)
- Static export: Because `output: 'export'`, avoid adding server-only Node APIs, server-side runtime code, or features that require a running Node server (API routes, on-demand server functions). Prefer static-friendly implementations.
- Images & media: `images.unoptimized = true` and the app uses public assets. Prefer placing large media in `public/` and referencing them by path (e.g. `/lam-hero-intro.mp4`). Avoid relying on `next/image` optimizations that assume dynamic server processing.
- App Router conventions: Default to server components (no `use client`), and only mark a file `use client` when it uses state/hooks/dom or `next/navigation`. Example: [app/page.tsx](app/page.tsx) is a client component and uses `router.push('/home')`.
- Fonts & CSS: `app/layout.tsx` uses `next/font` to set CSS variables; follow that pattern for global font variables and reference them in `app/globals.css`.
- Routing structure: Create routes under `app/<route>/page.tsx`. Place nested layouts under `app/<route>/layout.tsx` when needed.
- TypeScript path alias: `@/*` maps to `./*` (see `tsconfig.json`). Use `@/` imports for repo-local absolute paths when present.

Developer workflows & commands
- Dev server: `npm run dev` — starts Next dev server on localhost:3000.
- Build (static export): `npm run build` then `npm run start` — produces static export artifacts per `output: 'export'`.
- Lint: `npm run lint` (project uses ESLint via `eslint.config.mjs`).
- If adding heavy media or large files, commit only pointers or add to large-file storage — static export bundles public assets.

Conventions & code patterns (examples)
- Client components must include `use client` at the top. See [app/page.tsx](app/page.tsx#L1-L3).
- For navigation from a client component use `useRouter` from `next/navigation` and `router.push('/path')` (see [app/page.tsx](app/page.tsx#L4-L13)).
- For global fonts, use `next/font` and set `variable` then apply the CSS variable on `<body>` (see [app/layout.tsx](app/layout.tsx#L1-L20)).
- Tailwind utilities are used throughout. Global Tailwind setup is in `app/globals.css` and PostCSS config is present at `postcss.config.mjs`.

Integration points & external dependencies
- Next.js (v16+) + React 19, Tailwind v4, PostCSS. See `package.json` dependencies.
- No serverless functions or external server APIs are present by default — network integrations (if added) should be static-friendly.

When editing/adding features — checklist for PRs
- Confirm the change still allows static export (does not require server runtime).
- Put any large media assets in `public/` and reference them by path.
- Add `use client` only where required (hooks, state, router). Prefer server components otherwise.
- Run `npm run lint` and `npm run build` locally to catch config/type issues.

If you're unsure
- Inspect `next.config.ts` first — it defines the export behavior.
- Check `app/layout.tsx` and `app/page.tsx` to see font/CSS + client/server component patterns.
- Ask the repo owner which external integrations (CDN, analytics, forms) are acceptable for static export.

Contact
- For ambiguities, ask the repository maintainer in a PR comment and reference this file.

---
This file was generated/updated by an AI assistant. If anything here is out-of-date, update the specific sections rather than removing the entire file.
