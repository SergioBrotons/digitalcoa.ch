# Phase 06 — Vertical Deep Dive: Geneva Real Estate / Small Agencies + Property Managers

**Cycle:** 34  
**Date:** 2026-03-31

---

## Vertical Overview

### Market Context
Geneva's real estate market is among the most expensive and active in Switzerland. Small agencies (2–15 employees) dominate the market alongside large franchises (RE/MAX, Orpi, etc.). Property management is a distinct but related vertical — managing rental stock, condo associations, and commercial leases.

### Geneva-Specific Regulatory Environment
- **Cantonal:** Canton de Genève —房地产中介 registration (art. 22 ss LC AMF)
- **Federal:** DFRI Federal Act on Commercial Register; LAIP (transparency)
- **FADP:** nFADP in force; Art. 5(c) active (high-risk AI processing)
- **Swissdamed:** Effective Jul 1, 2026 — advertising and commercial communication rules tightening
- **Andermatt bilateral:** EU AI Act spillover via Switzerland-CH treaty obligation — May 26, 2026

### AI Tool Landscape in Real Estate (SMB)

| Use Case | Common Tools | Governance Risk |
|----------|-------------|-----------------|
| Property listings / descriptions | ChatGPT, Claude, Midjourney | Generated content accuracy, FADP (photos = personal data) |
| Customer communication | WhatsApp AI, ChatGPT | Client data in AI systems, no DPA |
| Pricing / market analysis | ChatGPT + spreadsheets | Hallucination risk in financial estimates |
| Marketing copy | Canva AI, ChatGPT | Swissdamed compliance, accuracy |
| Scheduling / CRM | Calendly, HubSpot AI | Vendor AI sub-processing |
| Property valuation | ChatGPT, specialized tools | Accuracy, liability |

### Property Management Specific Risks
- Tenant data (names, financial info) processed through AI tools → FADP Art. 5(c)
- Maintenance requests processed via AI → decision automation risk
- Rent adjustment modeling → potential discriminatory outcomes
- Communication in French/German/Italian → AI translation accuracy gaps

---

## Governance Gap Analysis

### Current State Assessment

```
AI Adoption Rate:  ████████████████████ 75%  (Phase 01 Cycle 33 — HIGHEST vertical)
Formal Governance: █ 1–5%               (estimated; no Geneva SMB data)
GAIGI Accessibility: ✗ Institutional 404 (gaigi.ch not SMB-accessible)
FADP Compliance:   ░░░░░░░░░░░░░░░░░░░░ Low–moderate baseline
```

### The Gap in Numbers

| Dimension | Adoption | Governance | Gap |
|-----------|----------|------------|-----|
| Individual AI use | 75% | <5% formal | 70+ pp |
| FADP awareness | Moderate | Low | Gap |
| GAIGI knowledge | Near-zero | N/A (404) | Gap |
| Shadow AI inventory | High | None | Gap |
| Vendor AI due diligence | Low | None | Gap |

**This is the widest governance gap in the DigitalCoa.ch portfolio.**

---

## Retroactive Compliance: The Unique Entry Point

### Why Retroactive Framing Works Here

Most verticals receive: "Prepare for AI — here's what to adopt."
Phase 06 receives: **"Govern the AI you already have — here's where to start."**

This works because:
1. Adoption is already high (75%) — no convincing needed
2. Governance is near-zero — low baseline, large delta
3. Risk is already present — no future hypothetical
4. Concrete starting point: Shadow AI audit (Decision 0)
5. No need to change behavior — just document and govern existing behavior

### Decision 0: Shadow AI Audit

The first conversation is not about adopting AI governance — it's about **inventorying what you already have.**

**Shadow AI Audit Framework:**
1. List all AI tools used by staff (spontaneous, no judgment)
2. Categorize by: communication, content, analysis, client data
3. Identify which tools process personal data (FADP trigger)
4. Assess vendor DPAs (exist? adequate? recent update?)
5. Document current practices before building formal policy

**Output:** Shadow AI inventory — the foundation of any governance framework.

---

## Regulatory Timeline for Phase 06

```
NOW ──────────────── May 26 ─────────────── Jul 1 ─────────────── Aug 2 ────────── ~Oct 2026
 │                    │                     │                     │                  │
 FADP                Andermatt            Swissdamed             EU AI Act        GAIGI
 Art.5(c)            (EU AI bilateral)    (advertising AI)       (institutional   (est.
 ACTIVE              ~8 WEEKS             ~13 WEEKS             /cross-border)   operative
                     
 Phase 06: Active    Phase 06: Indirect   Phase 06: Marketing   Phase 06:        GAIGI
 risk NOW            exposure check       AI compliance         Minimal SMB      Still not
                                        |                       direct           SMB-accessible
```

---

## Competitive Landscape

### Who Is NOT Serving This Gap

| Actor | Why They Don't Serve Phase 06 Gap |
|-------|-----------------------------------|
| Large consulting firms | Minimum engagement too large for 2–15 person firms |
| Cantonal associations (IMA, USPI) | No published AI governance guidance for members |
| FADP supervisory (OFDO/PRIV) | No sector-specific AI guidance for real estate |
| GAIGI | Institutional scope; not SMB-accessible |
| Generic IT providers | Compliance gap; not FADP specialists |
| Individual lawyers | No bundled product; cost barrier |

### First-Mover Opportunity
DigitalCoa.ch can be the **first** to publish a Geneva SMB-specific AI governance framework for real estate agencies and property managers — connecting FADP Art. 5(c) compliance to practical Shadow AI audit tools.

---

## Geneva Real Estate: Key Decision Points

1. **Decision 0:** Shadow AI audit — what AI tools are already in use?
2. **Decision 1:** FADP Art. 5(c) gap assessment — is personal data being processed by AI?
3. **Decision 2:** Vendor DPA review — do AI tool vendors have adequate DPAs?
4. **Decision 3:** Staff AI usage policy (lightweight, practical)
5. **Decision 4:** Client communication AI policy (WhatsApp, email AI assistants)
6. **Decision 5:** Swissdamed-ready marketing AI compliance (by Jul 1, 2026)

---

## Risk Prioritization

| Risk | Likelihood | Impact | Urgency | Priority |
|------|------------|--------|---------|----------|
| FADP Art. 5(c) violation (AI + personal data) | High | High | NOW | P1 |
| Shadow AI — no inventory | High | High | NOW | P1 |
| Swissdamed non-compliance (marketing AI) | Moderate | Medium | Jul 1 | P2 |
| Andermatt bilateral spillover | Low–moderate | Medium | May 26 | P3 |
| GAIGI non-awareness (no risk today; future) | Low | Low | Future | P4 |
