# Phase 06 — DigitalCoa.ch Audit | Cycle 93 — Sources

## Sources Accessed (Read-Only Production)

| URL | Status | Content |
|-----|--------|---------|
| digitalcoa.ch | 200 | Redirects to /en; serves homepage |
| digitalcoa.ch/en/ | ✅ 200 | Homepage: value prop, segments, services |
| digitalcoa.ch/en/services | ✅ 200 | Service tiers, descriptions, durations |
| digitalcoa.ch/en/about | ✅ 200 | Sergio Brotons personal story |
| digitalcoa.ch/en/contact | ✅ 200 | Contact page, email, booking CTA |
| digitalcoa.ch/fr/ | ❌ 302 | Redirects to /en — French version broken |

## Research Method
- Read-only production access (per IDENTITY.md)
- web_fetch tool used for all page access
- Text-only extraction (readability mode)
- Staging: not confirmed accessible

## Data Quality Notes
- Findings accurate at time of fetch (2026-04-03 17:16-17:18 UTC)
- DigitalCoa.ch appears to be a Next.js site (based on routing patterns)
- French version confirmed non-functional via 302 redirect
- All pages load cleanly; no 404s found (unlike Brotons.net)
- Email confirmed: sergio@digitalcoa.ch (different from Brotons.net contact)

## Site Technology
- Framework: Likely Next.js (clean routing, /en/ paths suggest i18n)
- No visible CMS indicators in text-only fetch
- Booking/contact: embedded system (Calendly or similar — not confirmed)
