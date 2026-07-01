# DigitalCoa.ch: Tech Stack Architecture and Refactor Recommendations

**Status:** Working reference for the site refactor
**Audience:** Owner, refactor engineer, operator
**Last updated:** 2026-07-01

---

## 1. Current State (Baseline)

Confirmed from production headers and live inspection:

| Layer | Current state |
|---|---|
| Framework | Next.js (App Router, middleware-based locale routing) |
| Languages | French (default) and English |
| Hosting | Hostinger managed Node.js hosting |
| CDN | Hostinger hcdn (in front, `x-hcdn-cache-status: DYNAMIC`) |
| Source repo | `SergioBrotons/digitalcoa.ch` (public, default branch `main`) |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Asset pipeline | Next.js built-in (no custom bundler config) |
| Middleware | Present (locale rewriting: `/fr`) |
| Analytics | Google Tag Manager (`GT-KDZ9XN2K`), GA4 |
| Contact flow | Calendly via referenced asset |

Strategic observations:

- The site is small in surface, content-led, conversion-oriented, bilingual.
- Hostinger's Node.js hosting is fine for this profile but it is the constrained tier (no edge runtime, finite memory, no custom images, Passenger-based process manager).
- Current staging is **not** isolated from production — both hostnames resolve to the same deployment.
- Content is currently authored as TSX components, not as a separate content layer.

## 2. Refactor Goals

The refactor is not a feature expansion. It is a structural reset that prepares the site for:

1. Clean operator handover (post-refactor: I maintain and optimize, you stay out of routine work).
2. Content authored as data, not as components.
3. SEO and metadata handled consistently across both languages.
4. Performance baseline that survives on Hostinger's tier.
5. A separable site logic layer so future lead magnets, gated content, and bilingual microsites do not require rewrites.

## 3. Recommended Stack

### 3.1 Core (keep)

| | Why |
|---|---|
| Next.js (App Router) | Already in use, future-aligned, supports middleware, SSR, ISR, server actions |
| TypeScript (strict) | Non-negotiable — operator will read and modify this code |
| Tailwind CSS v3 or v4 | Already in use, low overhead, predictable output |
| Node.js 20 LTS | Hostinger supports it; matches Next.js requirements |

### 3.2 Strong recommendations (adopt)

| | Why | Notes |
|---|---|---|
| `next-intl` for i18n | Mature, middleware-friendly, App Router native, good ICU message support | Replace the current custom `middleware.ts` + `messages/` pattern |
| MDX as primary content format | Content separated from layout, versionable, drop-in for blog posts, lead magnets, service pages | Use `next-mdx-remote` or `@next/mdx` with RSC support |
| `zod` for form and config validation | Runtime safety without TS bloat | Especially for lead magnet intake forms |
| `next-sitemap` | Auto-generated `sitemap.xml` and `robots.txt` for both locales | One of the cheapest SEO wins |
| `next/image` with strict dimensions | Avoid CLS, lean on Hostinger's hcdn for `/_next/image/*` | Set `remotePatterns` if any remote images persist |
| `@vercel/analytics` is unnecessary — keep GA4 via GTM | You already have GTM, no need for a second tracker |

### 3.3 Avoid

| | Reason |
|---|---|
| `output: 'export'` static export | Loses middleware (needed for FR/EN routing), no SSR/ISR |
| Headless CMS in this phase | Adds an external dependency to maintain; MDX owns content well for this site volume |
| Server-side actions for content CRUD | Hosting tier is not built for that; authoring stays Git-based |
| Aggressive client-side state libraries | No need — sites this size are mostly static + RSC |
| Native binaries (`sharp` extras, etc.) without testing | Hostinger Node.js hosting has constrained native deps |

## 4. Target Architecture

### 4.1 Folder layout

```
digitalcoa.ch/
├── app/
│   ├── [locale]/
│   │   ├── (marketing)/
│   │   │   ├── page.tsx                  # Home
│   │   │   ├── about/page.tsx
│   │   │   ├── services/page.tsx
│   │   │   └── contact/page.tsx
│   │   ├── (content)/
│   │   │   ├── insights/page.tsx         # Index
│   │   │   └── insights/[slug]/page.tsx
│   │   └── leads/
│   │       └── [leadMagnet]/page.tsx
│   ├── api/
│   │   └── contact/route.ts              # Form intake (validates with zod, posts to email/webhook)
│   ├── layout.tsx
│   └── not-found.tsx
├── components/
│   ├── ui/                               # Buttons, sections, primitives (RSC + minimal client)
│   ├── sections/                         # Composed page sections (Hero, CTA, Manifesto)
│   ├── forms/                            # Client components, isolated
│   └── analytics/                        # GTM provider, Consent gate
├── content/
│   ├── en/
│   │   ├── site.json                     # Brand string table (replaces hardcoded copy)
│   │   ├── services/
│   │   │   ├── executive-diagnostic.mdx
│   │   │   ├── decision-architecture.mdx
│   │   │   └── personal-infrastructure.mdx
│   │   ├── insights/
│   │   └── leads/
│   └── fr/
│       └── ... (mirrored structure, native FR phrasing — not translation)
├── lib/
│   ├── i18n.ts                           # next-intl config
│   ├── content.ts                        # MDX loaders, frontmatter parser, type-safe access
│   ├── seo.ts                            # Metadata helpers per locale
│   └── analytics.ts
├── messages/
│   ├── en.json
│   └── fr.json                           # UI strings; long-form lives in content/[locale]
├── public/
│   ├── media/                            # Images, og image cache
│   └── og/                               # Generated OG images per route
├── middleware.ts                         # next-intl locale detection + rewrite
├── next.config.mjs
├── app.js                                # Hostinger entry point (boots standalone server)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── .htaccess                             # Passenger routing
├── .env.example
├── README.md
└── ARCHITECTURE.md                       # This file
```

### 4.2 i18n model

- Two locales: `fr` (default), `en`.
- Path prefix strategy: prefix everything with `/fr` and `/en`. NO unprefixed default.
- Server components use `next-intl`'s `useTranslations` and `useLocale` via an awaited server config.
- Client components get messages via a small provider; ship minimal client JS.
- All brand, marketing, and SEO copy is native-authored in each language. Never translate. Mechanical 1:1 translation is rejected at review.

### 4.3 Content layer

- MDX is the source of truth for: service pages, insight articles, lead-magnet landing pages.
- Frontmatter per MDX file:
  ```yaml
  title: string
  description: string
  slug: string
  date?: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
  audience?: "executive" | "founder" | "board" | "advisor"
  ```
- Loader functions are typed; missing frontmatter throws at build.
- Lead magnets have a separate intake flow via MDX + form component pair.

### 4.4 Forms and lead capture

- Single contact form posts to `/api/contact`.
- Validation via `zod`.
- Submission flows go to either an SMTP relay (configured by env) OR a webhook into the operator agent pipeline (preferred — gives the operator a known intake signal).
- Calendly link stays external, never embedded inline if Hostinger CSP allows.

### 4.5 Analytics and consent

- One GTM container (`GT-KDZ9XN2K`).
- Page view + outbound link events + form submission events (named explicitly).
- Consent: lightweight, GDPR/FADP-compliant banner. Default to denied until accepted. Persist choice in a single cookie.

### 4.6 SEO

- Per-page metadata via Next.js `generateMetadata` helper at `lib/seo.ts`.
- Default OG image per locale, plus per-route overrides.
- `hreflang` for every page via `alternates.languages`.
- `sitemap.xml` generated by `next-sitemap` post-build, with both locales.
- Canonical: every page declares self-referential canonical; lead magnets can opt-out with `noindex` for paid landing variants.

### 4.7 Performance

- All `/_next/static/*` cached immutable (Hostinger hcdn handles this).
- HTML pages: SSR for marketing and contact, ISR (revalidate 60-3600s) for insights.
- Avoid client components for first paint — only forms, analytics gate, and a slim consent banner ship JS.
- Use `next/font` (subset, display swap) — kill any render-blocking webfont <link>.
- Images: `next/image`, all dimensions declared, `priority` only on LCP element.

## 5. Hosting and Deployment (Hostinger Node.js)

### 5.1 Configuration required

- `package.json` `engines.node`: `>=20.0.0`
- `package.json` `scripts.start`: `node app.js`
- `app.js` at root (Hostinger Passenger looks for it):
  ```js
  const nextServer = require('./.next/standalone/server.js');
  const port = process.env.PORT || 3000;
  nextServer.listen(port, () => console.log(`Ready on :${port}`));
  ```
- `next.config.mjs`: `output: 'standalone'`
- `.htaccess`:
  ```
  RewriteEngine On
  RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]
  ```
- Environment variables set in hPanel, never committed.

### 5.2 Build/deploy flow

1. Local build verification: `npm run build`
2. Push to GitHub `main`
3. hPanel: pull / build (`npm install && npm run build`)
4. hPanel: restart Node app
5. Verify headers (`hcdn`, `x-powered-by`) at production hostname

### 5.3 Constraints to design for

- Limited concurrent requests; no auto-scaling.
- No edge runtime — middleware runs on Node, plan for ~50-200ms cold routes.
- No native binaries beyond what Hostinger ships (Node, sharp minimal).
- No websockets, no long-lived connections.
- All caching via `Cache-Control` headers — Hostinger hcdn respects these.

## 6. Repository and Operations Model

### 6.1 Branches

- `main` → production deploy
- `staging` → preview / operator-prepared content work (NOT an isolated environment today — see note below)
- `feature/*` → refactor work in progress

### 6.2 Environments

| | URL | Behavior |
|---|---|---|
| Production | `https://digitalcoa.ch` | Current live site |
| Staging | `https://staging.digitalcoa.ch` | Currently DNS alias to production. Treat as production-equivalent until isolated. Refactor should fix this so staging maps to a separate deploy. |
| Local | `localhost:3000` | Engineer + operator work |

### 6.3 Operator handover contract

The site owner is the only entity that publishes to production. The operator:

- May create and update MDX content, copy fixes, metadata, internal links, sections.
- May publish to staging directly.
- May prepare production-ready changes via PR.
- Must escalate on: navigation restructure, page deletion, pricing/offer changes, legal copy, brand-positioning changes.

The refactor should make these boundaries obvious in the codebase (clear `content/` directory, isolated `sections/` for changeable UI).

## 7. Risks and Open Decisions

| Item | Decision needed from owner |
|---|---|
| Keep Hostinger Node.js or move to VPS/Vercel for refactor | Hostinger is feasible for this site; switching later is more expensive |
| Isolate staging from production (separate deployment) | Yes during refactor; aligns with operator model |
| Replace custom middleware with `next-intl` | Recommended; reduces maintenance |
| Lead magnet content as MDX pages or external PDFs | MDX pages — measurable, linkable, indexable |
| What happens to the existing `research/` and `private/` directories in the repo | Migrate if still relevant; archive in a `legacy/` subfolder if not |
| Analytics consent banner required | Yes, before any non-cookie-less analytics. FADP applies |
| Newsletter / email capture beyond Calendly | Decision deferred |

## 8. Refactor Delivery Sequence (Recommended)

1. **Freeze current production as `legacy-2026-Q2` tag** for rollback.
2. **Stand up refactor skeleton** in `feature/refactor` branch — same routes, empty components.
3. **Bring pages over one route group at a time** — `(marketing)` first, then `(content)`, then `leads`, then `api/contact`.
4. **Migrate content** — copy from current TSX to MDX, author fresh in both languages.
5. **Cut over** — merge `feature/refactor` to `main`, deploy, verify.
6. **Isolate staging** — point `staging.digitalcoa.ch` to a separate deployment.
7. **Hand over** — operator assumes maintenance, owner steps out of routine work.

## 9. Out of Scope (for this refactor)

- Blog migration from external sources (none today).
- Move to a CMS (MDX is sufficient).
- Server actions / API-heavy features.
- A/B testing infrastructure.
- Tailwind v4 migration (unless the refactor naturally picks it up).
- New routes / content pillars.

## 10. Pointers for the Operator

After handover, this site is in scope for the operator's standard optimization work:

- Metadata completion per page and per locale.
- Internal linking improvements across insights and services.
- Performance audits post-deploy.
- Content refreshes on stale MDX files (frontmatter flag: `last_reviewed`).
- Lead magnet SEO experiments (placements, copy, links).
- Form intake monitoring via webhook.

Out of operator scope:

- Changing navigation, IA, or services tier names.
- Changing pricing or commercial terms.
- Editing legal pages.
- Touching analytics implementation beyond GA4 events.

---

*Owner of this file: Sergio. Approver of structural changes: Sergio. Operator (post-handover): assists maintenance and optimization within this contract.*
