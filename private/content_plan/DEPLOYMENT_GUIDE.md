# Deployment Guide — DigitalCoa.ch Content Package
## Generated: 2026-03-31

---

## Status

**WordPress REST API blocked on staging** — returns 404 on all `/wp-json/` routes.
All content generated as draft-ready WordPress files in staging format.
Manual publish via WP Admin required, or API unblocking needed.

---

## Content Generated: 24 files

**6 verticals x 4 files each = 24 total**

Each vertical: 2 landing pages (EN + FR) + 2 blog posts (EN + FR)

---

## Publishing Sequence

### Phase 1: Healthcare (URGENT — Swissdamed Jul 1 ~13 weeks)

1. **Blog post EN** → Publish first as SEO foundation
   - `swissdamed-13-weeks-small-medical-practices`
   - Category: AI Governance / Swiss Regulatory Compliance
   - Link to: `/ai-governance-medical-practices/`

2. **Blog post FR** → Publish same day
   - `swissdamed-13-semaines-petits-cabinets-medicaux`
   - Link to: `/fr/gouvernance-ia-cabinets-medicaux/`

3. **Landing page EN** → Publish as draft, review
   - `ai-governance-medical-practices`
   - Template: landing-page (or page with lead magnet)
   - CTA: Book a 30-Minute AI Governance Briefing

4. **Landing page FR** → After EN approved
   - `gouvernance-ia-cabinets-medicaux`
   - CTA: Reserver un Echange de Diagnostic IA

### Phase 2: Legal (URGENT — 46-point gap + FDPIC window)

5. **Blog post EN** → `46-point-gap-small-law-firms-ai-governance`
6. **Blog post FR** → `ecart-46-points-petits-cabinets-gouvernance-ia`
7. **Landing page EN** → `ai-governance-small-law-firms`
8. **Landing page FR** → `gouvernance-ia-petits-cabinets-avocats`

### Phase 3: Finance / WM

9. **Blog post EN** → `carf-live-geneva-wealth-managers-ai-governance`
10. **Blog post FR** → `carf-en-vigueur-gestionnaires-patrimoine-genevois-gouvernance-ia`
11. **Landing page EN** → `ai-governance-boutique-wealth-managers`
12. **Landing page FR** → `gouvernance-ia-gestionnaires-patrimoine-boutique`

### Phase 4: Real Estate

13. **Blog post EN** → `67-percent-geneva-real-estate-ai-governance-gap`
14. **Blog post FR** → `67-pourcent-agences-immobilieres-genevoises-ia`
15. **Landing page EN** → `ai-governance-real-estate-agencies`
16. **Landing page FR** → `gouvernance-ia-agences-immobilieres`

### Phase 5: Consulting

17. **Blog post EN** → `gpai-obligations-active-8-months-small-consulting-firms`
18. **Blog post FR** → `obligations-gpai-actives-8-mois-cabinets-conseil`
19. **Landing page EN** → `ai-governance-small-consulting-firms`
20. **Landing page FR** → `gouvernance-ia-petits-cabinets-conseil`

### Phase 6: Cross-Vertical Synthesis

21. **Blog post EN** → `2026-geneva-ai-governance-portfolio-six-verticals`
22. **Blog post FR** → `portefeuille-gouvernance-ia-geneve-2026-six-verticales`
23. **Landing page EN** → `geneva-professional-services-ai-governance`
24. **Landing page FR** → `services-professionnels-geneve-gouvernance-ia`

---

## Publishing Rules

- Blog posts: publish directly to staging (within policy)
- Landing pages: create as drafts first, review, then publish
- All EN pages before FR equivalents
- Blog posts before landing pages (blog establishes SEO foundation)
- Internal links between blog posts and relevant landing pages
- Canonical URLs set on all pages
- Featured image: none (per brand rules — no stock photos)
- Categories: AI Governance, Swiss Regulatory Compliance

---

## CTA Consistency

All CTAs across all 6 verticals point to:
- Primary: "Book a 30-Minute AI Governance Briefing" / "Reserver un Echange de Diagnostic IA"
- Links to: contact/onboarding page with embedded Calendly or form

---

## WordPress API Fix

The staging site REST API returns 404 on all `/wp-json/` routes.
Possible causes:
1. Pretty permalinks not enabled (go to Settings → Permalinks → Post Name)
2. REST API disabled by plugin or .htaccess rule
3. WordPress address/site address misconfigured

Fix: Go to WP Admin → Settings → Permalinks → select "Post Name" → Save.
If API routes still return 404, check for security plugins blocking REST API.
