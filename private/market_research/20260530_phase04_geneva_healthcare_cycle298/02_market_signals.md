# Market Signals: Geneva Healthcare AI — Current Problems & Failures

## Phase 04 | Cycle 298 | 2026-05-30

---

## NET-NEW Finding 1: No Clear Swiss Federal Guidance on AI Liability for Physicians

Switzerland has no federal law specifically addressing AI liability in medical practice. The Federal Data Protection Act (nFADP) applies to AI processing under FDPIC guidance, but there is no explicit medical AI liability framework.

**What practitioners experience:**
- No distinction in Swiss law between "AI-assisted" and "traditional" medical decision-making for liability purposes
- Physicians are liable under existing cantonal and federal medical liability frameworks, regardless of whether AI was used
- No FMH-issued safe harbor for AI-assisted diagnosis — FMH has published guidance on digitalization but not specific AI liability rules
- Individual cantons (Geneva, Vaud) have not issued local guidance tailored to independent practices

**Signal source:** FDPIC public statements 2024-2025, FMH policy pages, legal analysis by Swiss medical associations

**What this means:** Practitioners adopting AI tools are operating in a legal grey zone that has not been formally resolved at federal level.

---

## NET-NEW Finding 2: AI Vendors Cannot Satisfy Basic Patient Data Residency Requirements

Cloud-based AI diagnostic support tools typically route data through servers outside Switzerland or through US-based cloud infrastructure. For Geneva practitioners subject to both Swiss federal data protection law and professional confidentiality obligations, this creates an unresolved conflict.

**What practitioners experience:**
- Vendor contracts contain data processing clauses that transfer data to third countries (US, Ireland, Germany) without clear Swiss-compatible safeguards
- Standard DPA agreements (art. 9 nFADP) are often boilerplate and not adapted to medical data
- No Swiss-certified AI diagnostic tool market for independent practices — most validated tools are hospital-grade (HUG-developed or international)
- Patients have no explicit mechanism to consent to their data being processed by AI systems outside Switzerland

**Signal source:** FDPIC guidance on AI and data protection (September 2025), practitioner community forums, vendor contract reviews

**What this means:** Using many commercially available AI diagnostic tools creates an unresolved data protection compliance gap for independent Geneva practitioners.

---

## NET-NEW Finding 3: GESICA Crisis AI System Is Hospital-Centric — Independent Practices Are Excluded

The GESICA project ( Franco-Swiss AI for crisis management, €2.47M, 2025-2027) represents the most concrete Swiss AI health infrastructure investment in the Geneva region. However, it is designed for hospital crisis management, not independent practice support.

**What practitioners experience:**
- GESICA aggregates data from hospital systems, emergency services, and public health authorities — independent practices are not data contributors or beneficiaries
- No equivalent AI crisis-response tool exists for outpatient clinics in Geneva
- The Wyss Center Geneva, while technically accessible, focuses on neurotechnology and complex hospital research, not primary care AI
- The Geneva Pole IA (Pôle IA) at Campus Biotech is explicitly hospital-research oriented, not practice-oriented

**Signal source:** HUG Pole IA documentation, GESICA project description, Wyss Center Geneva publicly available programs

**What this means:** Geneva's AI health infrastructure investment is entirely hospital-centered. Independent practices receive no direct benefit and are not integrated into the system.

---

## NET-NEW Finding 4: FMH Digitalization Guidance Does Not Translate Into Actionable AI Standards

FMH (Swiss Medical Association) publishes on digitalization and AI. However, the guidance is principles-level, not operational. Practitioners report that FMH materials do not answer their practical questions.

**What practitioners experience:**
- FMH website has a "Digitalisierung und Telemedizin" section that discusses AI in general terms but provides no standards for independent practice AI use
- No FMH-endorsed AI tool certification or whitelist exists
- No FMH guidance on what constitutes appropriate AI use in diagnosis support vs. autonomous AI decision-making
- No FMH liability position: when a physician uses AI for decision support, does FMH consider this standard practice or elevated risk?

**Signal source:** FMH website content review, practitioner community feedback, Swiss medical law literature

**What this means:** FMH's lack of specific AI guidance forces practitioners into a de facto personal risk assessment without institutional support.

---

## NET-NEW Finding 5: Independent Practices Cannot Integrate Hospital-Grade AI Tools

Hospital-developed AI tools (HUG, CHUV, other university hospitals) are not accessible to independent practices. This creates a two-tier AI landscape: hospital-grade precision versus practice-grade approximation.

**What practitioners experience:**
- AI tools validated at HUG or other university hospitals are not available for independent practice licensing
- Small vendors marketing to independent practices often lack clinical validation, creating a quality/trust gap
- No independent practice-focused AI tool registry or quality standard exists in Geneva or Switzerland
- The AI-B2.0 Hub at HUG develops tools for hospital use, not outpatient practices

**Signal source:** AI-B2.0 Hub program description, DS4DH group research focus, publicly available Swiss AI health initiatives

**What this means:** The validation gap means independent practices either use unvalidated tools (liability risk) or do not use AI at all (competitive/clinical disadvantage).

---

## NET-NEW Finding 6: Patient Consent for AI Processing Is Not Standardized in Geneva Practices

Swiss law requires informed consent for medical procedures. AI-assisted diagnosis support blurs the line between standard care and data processing requiring separate consent under nFADP.

**What practitioners experience:**
- No standardized patient consent form for AI-assisted diagnosis exists in Geneva
- Practices do not know whether AI use must be disclosed to patients as part of care consent or separately as data processing consent
- The Federal Data Protection Act requires different consent mechanisms than medical informed consent
- Patients are increasingly asking about AI use, but practitioners have no framework for answering

**Signal source:** FDPIC AI guidance, Swiss medical law literature, practitioner community forums

**What this means:** Every Geneva independent practice using AI diagnosis support is improvising its own consent framework — with no clear standard to follow.

---

## Summary of Market Failures

| Failure | Gap | Who It Affects |
|---------|-----|----------------|
| No AI liability law | Legal grey zone | All independent practitioners |
| Data residency conflict | Vendor contracts fail nFADP | All independent practitioners |
| Hospital-centric AI investment | Practices excluded from GESICA | All independent practices |
| No FMH actionable AI standards | Guidance without standards | All practitioners seeking FMH cover |
| Validation gap | Hospital tools inaccessible | Practitioners wanting credible tools |
| No consent framework | Consent for AI processing undefined | Practitioners using AI diagnosis |

---

## Context: What the HUG Pole IA Actually Does

HUG's Pole IA (Campus Biotech, Coralie Fournier) operates four missions:
1. **Care and consultations** — for hospital patients, not independent practices
2. **Research and development** — Wyss Center translation, neurotechnology
3. **AI integrated into care and prevention** — hospital process optimization, infection risk tools
4. **Training and dialogue** — public engagement, not practitioner operational guidance

No mission targets independent outpatient practice AI deployment. The Geneva AI health ecosystem is structurally hospital-centric.