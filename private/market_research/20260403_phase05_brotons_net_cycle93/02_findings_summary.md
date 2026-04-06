# Phase 05 — Brotons.net Audit | Cycle 93
**Completed:** 2026-04-03 17:17 UTC

## Key Findings

### Critical Issue: Broken Navigation
All main navigation pages return 404:
- /insights → 404
- /services → 404
- /about → 404
- /writing → 404

Impact: Users clicking nav links hit dead ends. Google crawler wastes crawl budget on dead pages. Brand impression: incomplete or under construction. This is the single most actionable finding from this audit.

### Brotons.net = Single Landing Page
The site functions as a one-page landing page with 3 external property links. No articles, no thought leadership content hosted here. SEO footprint is minimal — single URL, thin content.

### Three-Business Ecosystem Model
Brotons.net links to three external properties:
- **DigitalCoa.ch** — Executive advisory (professional, developed site)
- **Cytria.com** — AI implementation for Swiss SMEs (professional, self-hosted positioning)
- **Substack** — Writing ("Clarity Under Constraint", 3 months old)

The Brotons personal brand spans three distinct revenue streams. Brotons.net is the minimal hub.

### Content Strategy: Substack-First, Not Own-Site
All writing lives on Substack. Brotons.net has no blog or article hosting. Substack builds an email list but doesn't build domain authority for Brotons.net. SEO value goes to Substack's domain.

### Brand Voice Consistency
Clean, calm, governance-first tone. Consistent across all properties. "AI, decisions, and clarity" as core tagline. Bilingual EN/FR on main pages. Agrees with SOUL.md tone guidelines.

## Recommendations (Preliminary)
1. **Fix broken navigation** — Priority 1. Either build the nav pages or remove the links.
2. **Consider on-site content strategy** — Articles hosted on Brotons.net could capture search traffic; Substack alone doesn't build domain authority.
3. ** sitemap.xml / robots.txt** — Technical SEO basics if content is being built.
4. **Schema markup** — Person/ProfessionalService schema could help search visibility.

## Skipped
- SEO tools (Ahrefs, Semrush) — owner approval needed for subscriptions
- Analytics access — not confirmed
- Staging access — not available (staging.brotons.net connection refused)
- Content drafting — owner approval required

## Pending / Follow-up
- Full technical SEO audit (requires tools access)
- Analytics review for traffic patterns
- Staging environment setup if site structure changes planned
- Competitive SEO benchmarking vs similar AI advisory sites
