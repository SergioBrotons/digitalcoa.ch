# Phase 06 — Regulatory & Compliance Intelligence

**Cycle:** 34  
**Date:** 2026-03-31  
**Vertical:** Geneva Real Estate / Small Agencies + Property Managers

---

## Applicable Regulatory Framework

### Active Regulation (NOW)

#### nFADP — Federal Act on Data Protection (revised)
- **Status:** In force (replaced 1992 Act)
- **Art. 5(c):** High-risk automated decision-making, including AI-assisted processing of personal data
- **Real estate application:** Tenant data, client financial information, property applicant data processed through AI tools
- **Obligation:** Legal basis assessment, DPA requirements, data subject rights
- **Risk:** Fines, complaints, reputational exposure

#### Canton de Genève — LC AMF (Loi sur le commerce et les métiers)
- Real estate agency registration and professional conduct
- AI use in client-facing communication touches cantonal professional standards

#### Commercial Register obligations
- Basic disclosure requirements; AI governance not yet required but trending

---

### Imminent Regulation (2026)

#### Andermatt Agreement / EU AI Act bilateral
- **Date:** May 26, 2026 (~8 weeks)
- **Effect:** Switzerland's treaty obligation to mirror certain EU AI Act outcomes
- **Phase 06 exposure:** Cross-border AI tool use; EU-origin AI vendors
- **Impact on Geneva real estate:** Indirect unless using EU-based AI tools that process Swiss personal data under EU AI Act classification

#### Swissdamed (Selbstregulierungsorganisation Komplementärmedizin)
- **Date:** July 1, 2026 (~13 weeks)
- **Scope:** Advertising and commercial communication in the medicinal products / health-adjacent space
- **Real estate angle:** Property marketing that touches health-adjacent claims (e.g., "wellness apartments," "healthy living" AI-generated content)
- **Impact:** AI-generated marketing content must be accurate and compliant; AI tools used for such content need review

#### EU AI Act — Full Application
- **Date:** August 2, 2026 (~19 weeks)
- **Scope:** Primarily institutional and high-risk AI within EU
- **Switzerland exposure:** Indirect via bilateral agreements; cross-border AI use
- **Phase 06 impact:** Minimal for Geneva SMB real estate directly — but signals regulatory direction of travel

---

### Future Regulation

#### GAIGI — Federal AI Oversight Body
- **Status:** Being established; est. operative ~October 2026 (~7–10 months)
- **Scope:** Institutional AI; high-risk systemic AI deployments
- **gaigi.ch status:** Institutional confirmed 404 — no public/SMB guidance available
- **Phase 06 impact:** GAIGI will NOT be accessible or relevant to small real estate firms at launch
- **Strategic note:** GAIGI operative date creates urgency for self-governance NOW — no external authority will provide SMB-specific guidance

---

## FADP Art. 5(c) — Detailed Application to Phase 06

### What Art. 5(c) Requires

> Art. 5(c) nFADP: Automated decision-making with legal or similarly significant effects requires:
> - Explicit consent OR legal basis
> - Right to human review
> - Information obligations
> - Proportionality assessment

### Real Estate Use Cases Triggering Art. 5(c)

| Use Case | Personal Data Involved | Automated Element | Risk Level |
|----------|----------------------|-------------------|------------|
| AI-generated tenant screening | Name, income, references | Scoring/ranking | High |
| AI-assisted rent pricing models | Property + tenant data | Price determination | High |
| AI chatbot for property inquiries | Name, contact, preferences | Response generation | Medium |
| AI-generated property descriptions | Property data (not personal) | Content generation | Low |
| AI-scheduled viewing appointments | Contact data | Scheduling automation | Low |
| AI analysis of buyer preferences | Name, financial profile | Recommendation engine | High |

### Practical FADP Art. 5(c) Obligations for Small Real Estate Firms

1. **Inventory AI use** — what automated processing is occurring?
2. **Assess legal/significant effects** — does any AI use produce legal or similar effects on individuals?
3. **Identify legal basis** — consent, legitimate interest, contract, or legal obligation
4. **Implement human review** — for high-risk automated decisions (e.g., tenant screening)
5. **Update DPAs** — ensure AI tool vendors have FADP-compliant DPAs
6. **Document** — maintain processing records per Art. 12 nFADP

---

## Shadow AI Risk Assessment

### Shadow AI Definition
AI tools used by employees without explicit organizational authorization or knowledge — also called "unsanctioned AI" or "bring your own AI."

### Why Shadow AI Is Pervasive in Real Estate SMBs
- Tools are free or low-cost (ChatGPT free tier, Claude, etc.)
- Easy to adopt without IT involvement
- WhatsApp-based communication encourages quick AI tool adoption
- No internal policy communicating what is/isn't allowed
- No procurement process for AI tools

### Shadow AI Risk Matrix — Geneva Real Estate

| Tool Type | Example | Personal Data Risk | Vendor DPA Status | Priority |
|-----------|---------|-------------------|-------------------|----------|
| AI writing assistants | ChatGPT, Claude | High if client data entered | Usually absent or inadequate | P1 |
| AI image generation | Midjourney, DALL-E | Low (property photos) | Usually absent | P2 |
| AI scheduling | Calendly AI | Medium | Usually adequate | P3 |
| AI translation | DeepL | High if personal data | Variable | P2 |
| WhatsApp AI features | Meta AI | High | Meta DPA often inadequate for FADP | P1 |
| CRM AI features | HubSpot AI | High | Usually adequate if enterprise tier | P2 |
| Property valuation AI | Specialty tools | High | Variable | P1 |

---

## Vendor DPA Gap Analysis

### The Problem
Most AI tool vendors (especially free tiers) do not offer FADP-compliant Data Processing Agreements. Using these tools to process personal data without a DPA = potential nFADP violation.

### Minimum DPA Requirements (FADP)
1. **Processing scope:** Clear description of what data is processed and how
2. **Purpose limitation:** Data used only for stated purpose
3. **Retention:** Defined retention period; deletion obligation
4. **Sub-processors:** Disclosure of third-party AI infrastructure providers
5. **Security:** Technical and organizational measures
6. **Breach notification:** Timely notification of data breaches
7. **Compliance attestation:** FADP / GDPR compliance certification

### Practical Steps for Small Firms
1. Identify all AI tools in use (Shadow AI Audit)
2. For each: request vendor DPA or privacy notice
3. Flag: free tools = typically no DPA available
4. Decision: either (a) upgrade to paid tier with DPA, or (b) prohibit use for personal data
5. Document the decision and enforce internally

---

## Compliance Timeline Summary

```
NOW                   May 26, 2026          Jul 1, 2026          Aug 2, 2026         ~Oct 2026
 │                         │                    │                    │                 │
 FADP Art.5(c)        Andermatt             Swissdamed            EU AI Act         GAIGI
 ACTIVE               ~8 WEEKS              ~13 WEEKS             Full app          operative
                     
 HIGH RISK:           MEDIUM RISK:          MEDIUM RISK:          LOW RISK:         FUTURE RISK:
 - Shadow AI         - EU AI vendor         - AI marketing        - Cross-border    - Monitor
 - Art.5(c)            compliance             content              AI use            GAIGI guidance
 - DPA gaps          - Cross-border         - Swissdamed          - Institutional   - Assess scope
                       AI tools               compliance           alignment         when published
```

---

## Immediate Action Items (Priority Order)

### P1 — Immediate (This Week / Next Week)
- [ ] Conduct Shadow AI Audit (Decision 0) — inventory all AI tools in use
- [ ] Flag AI tools processing personal data without vendor DPA
- [ ] Brief owner/manager on FADP Art. 5(c) active status
- [ ] Document current AI use cases

### P2 — Short-Term (April–May)
- [ ] FADP Art. 5(c) gap assessment for identified high-risk use cases
- [ ] Vendor DPA review — request DPAs or upgrade to compliant tiers
- [ ] Implement WhatsApp AI usage policy (WhatsApp = highest DPA risk)
- [ ] Prepare for Andermatt (May 26) — EU-origin AI tool review

### P3 — Mid-Term (May–July)
- [ ] Swissdamed compliance review for AI-generated marketing content
- [ ] Lightweight formal AI usage policy (1–2 pages; firm-specific)
- [ ] Staff training (30-minute briefing on AI do's and don'ts)
- [ ] Client communication AI policy (email AI, WhatsApp AI)

### P4 — Ongoing
- [ ] Monitor GAIGI guidance publications
- [ ] Annual Shadow AI audit refresh
- [ ] Quarterly AI tool vendor review
- [ ] FADP Art. 5(c) compliance documentation update

---

## Key Regulatory Insight for Phase 06

> **The regulatory landscape for Phase 06 is characterized by:**
> 1. **Active risk NOW** (FADP Art. 5(c)) — no preparation time remaining
> 2. **No SMB-accessible guidance** (GAIGI institutional 404)
> 3. **Near-term deadlines** (Andermatt 8 weeks, Swissdamed 13 weeks)
> 4. **Retroactive compliance framing** — govern the AI you already have
>
> **The combination of 75% AI adoption + near-zero governance + active FADP Art. 5(c) = the widest compliance risk window in the portfolio.**
