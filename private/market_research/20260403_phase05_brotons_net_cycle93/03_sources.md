# Phase 05 — Brotons.net Audit | Cycle 93 — Sources

## Sources Accessed (Read-Only Production)

| URL | Status | Content |
|-----|--------|---------|
| brotons.net | ✅ 200 | Landing page: hero + 3 CTAs + contact |
| brotons.net/insights | ❌ 404 | Broken nav link |
| brotons.net/services | ❌ 404 | Broken nav link |
| brotons.net/about | ❌ 404 | Broken nav link |
| brotons.net/writing | ❌ 404 | Broken nav link |
| brotons.net/fr/ | ✅ 200 | French version (redirects to /fr/accueil-2/) |
| digitalcoa.ch/en/ | ✅ 200 | Executive advisory homepage |
| cytria.com | ✅ 200 | AI implementation platform |
| sergioch.substack.com | ✅ 200 | Writing: "Clarity Under Constraint" |

## Research Method
- Read-only production access only (per IDENTITY.md)
- web_fetch tool used for all page access
- Text-only extraction (readability mode) — structural details may be incomplete
- Staging environment: staging.brotons.net does not exist (connection refused)

## Data Quality Notes
- Findings are accurate at time of fetch (2026-04-03 17:14 UTC)
- Navigation 404 status confirmed across all main nav pages
- French version exists at /fr/ but redirects to /fr/accueil-2/ (WP page naming)
- Brotons.net is a WordPress site (evidenced by wp-content references in 404 pages)
- All three linked properties (DigitalCoa, Cytria, Substack) are functional and professional

## Constraints
- No analytics access (not confirmed)
- No CMS/staging access (staging not available)
- No SEO tool subscriptions (no access confirmed)
- Findings limited to what web_fetch can extract from public pages
