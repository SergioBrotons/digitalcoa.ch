# Phase 06 — DigitalCoa.ch Audit | Cycle 95
**Findings Summary**

## NET-NEW Findings: 6

---

## F1: DigitalCoa.ch Status — UNCHANGED FROM C94 (French Version Still Broken)
**Source:** C94 audit, direct observation
**Signal:** Technical deficiency requiring owner attention

DigitalCoa.ch remains:
- English homepage only (digitalcoa.ch/en)
- French version (/fr) still broken — redirects to /en since C93
- 2 indexed pages total (root + services)
- No blog / insights / articles
- No sitemap.xml
- Staging is DNS alias to production (not isolated staging)

**Open item since C93:** French version fix — NOT addressed.
**Open item since C93:** Staging isolation — NOT addressed.

This is a known issue from C93 and C94. No progress has been made. These are blocking issues for content publishing.

---

## F2: DigitalCoa.ch Should Publish 4 Priority Content Pieces from C95 Research
**Source:** C95 Phase 01-05 synthesis
**Signal:** HIGH — content + lead generation opportunity

DigitalCoa.ch's role: executive-facing advisory positioning, lead acquisition. The 30 C95 NET-NEW findings yield 4 high-priority pieces for DigitalCoa.ch:

**Piece 1: "SECO Enforcement Is Accelerating: Is Your Geneva Company Ready?"**
- Core CTA: enforcement readiness assessment
- Evidence: 68 penalty proceedings, 24 final fines, 9 convictions since Sept 2024
- Audience: Geneva executives, compliance officers, board members
- Tone: DigitalCoa.ch voice — calm, authoritative, executive-grade
- Format: insights post with checklist / readiness self-assessment

**Piece 2: "The NUFG Corporate Liability Law: What 30 Swiss Companies Must Do Now"**
- Core CTA: NUFG compliance readiness assessment
- Evidence: Bundesrat counter-proposal (April 2, 2026), 30 companies affected, 3% turnover penalties, civil liability
- Audience: C-suite, legal, compliance of affected Swiss companies
- Tone: DigitalCoa.ch voice — precise, compliance-focused
- Format: insights post with threshold guide + compliance steps

**Piece 3: "US Section 301 Investigations: Geneva Exporters' Exposure Map"**
- Core CTA: Section 301 exposure audit
- Evidence: 2 open investigations (industrial overcapacity + forced labor), bilateral trade negotiations ongoing
- Audience: Geneva exporters to US market, trade compliance teams
- Tone: DigitalCoa.ch voice — direct, actionable
- Format: insights post with exposure checklist

**Piece 4: "AI Agents Are Recording Everything: Compliance Implications for Swiss Companies"**
- Core CTA: AI compliance review
- Evidence: Claude Code leak revealed systematic data collection by AI agents, nDSG implications
- Audience: compliance officers, legal, IT security
- Tone: DigitalCoa.ch voice — technical, precise
- Format: insights post with AI tool audit framework

---

## F3: DigitalCoa.ch SEO Opportunity — 4 New Content Pages
**Source:** SEO analysis
**Signal:** MEDIUM-HIGH — discoverability

With 4 new insights pieces, DigitalCoa.ch would have:
- Total indexed pages: 2 → 6 (4 insights + 2 existing)
- Target keywords:
  - "Switzerland sanctions enforcement" (~800/mo)
  - "Swiss corporate liability NUFG" (~400/mo)
  - "Section 301 Switzerland" (~500/mo growing)
  - "AI compliance Switzerland" (~200/mo growing)

No current content on DigitalCoa.ch targets any of these queries. First-mover advantage is available.

---

## F4: DigitalCoa.ch CTA Funnel — Research to Lead
**Source:** Market research synthesis
**Signal:** HIGH — business development

The 4 content pieces map to a CTA funnel:

| Piece | CTA | Lead Type |
|-------|-----|-----------|
| SECO Enforcement | Enforcement readiness assessment | Compliance officer, CLO |
| NUFG Corporate Liability | NUFG compliance readiness | General counsel, CFO |
| Section 301 | Section 301 exposure audit | Export compliance, trade |
| AI Compliance | AI compliance review | CISO, compliance, legal |

Each piece drives a specific service offering. Combined, they establish DigitalCoa.ch as the authority on the intersection of Swiss regulatory change and executive risk.

---

## F5: DigitalCoa.ch Staging Requirement — Prerequisites for Publishing
**Source:** C94 audit findings
**Signal:** HIGH — operational blocker

Before any content can be published:
1. **French version fix** (/fr redirect to /en — blocking since C93)
2. **Staging isolation** (staging.digitalcoa.ch is DNS alias, not isolated staging)
3. **Content management** (need a way to create/manage insights pages — currently no blog infrastructure)

These are blocking issues. Owner approval + technical implementation required.

---

## F6: DigitalCoa.ch Bilingual Opportunity — French Market
**Source:** Market research synthesis
**Signal:** MEDIUM — market opportunity

DigitalCoa.ch currently has a broken French version. The French-language Swiss market (Geneva, Vaud, Jura, Neuchâtel, Fribourg) is significant. The research has substantial French-language source material (Le Temps). Publishing content in French as well as English would:
- Capture French-speaking Geneva executives who prefer FR content
- Differentiate from English-only competitors
- Build SEO in French-language Swiss market

**Recommendation:** Fix the French version AND publish bilingual content.

---

## Cross-Phase Bridge
F2 (4 content pieces) draws from:
- Phase 01 C95 F1 (SECO enforcement statistics)
- Phase 02 C95 F2 (NUFG corporate liability law)
- Phase 03 C95 F2 (Section 301 investigations)
- Phase 04 C95 F1 (AI agent security)

F4 (CTA funnel) maps all 4 pieces to specific service offerings and lead types.

## Unresolved Items (Carried from C93, C94)
1. French version fix — STILL NOT ADDRESSED
2. Staging isolation — STILL NOT ADDRESSED
3. Blog/insights infrastructure — NOT BUILT

## Skipped Items (Owner Approval Required)
- French version fix (technical — requires hosting/dev)
- Staging environment setup (requires hosting/dev)
- Publishing 4 priority content pieces (owner approval per IDENTITY.md)
- GitHub push — no credentials confirmed
