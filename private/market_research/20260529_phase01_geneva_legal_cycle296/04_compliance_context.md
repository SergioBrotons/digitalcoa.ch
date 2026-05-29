# Compliance Context: Switzerland / Geneva AI Governance for Small Law Firms
## Phase 01 — C296 Cycle
**Date:** 2026-05-29
**Focus:** Geneva/Switzerland-specific regulatory landscape — updated with C296 new signals.

---

## Overview: The Regulatory Landscape Has Become More Complex Since C295

The Swiss AI regulatory posture in 2026 is no longer "awaiting legislation." Elements that seemed future-oriented in prior cycles are now live obligations or imminent developments:

- **FADP applies directly to AI** — enforcement posture shifted in May 2025 from guidance-first to enforcement-live
- **EU AI Act Article 4 active since February 2025** — extraterritorial obligations for Swiss firms with EU clients
- **CoE AI Convention implementation legislation due end 2026** — additional obligations arriving on a known timeline
- **Ordre des Avocats de Genève** has not published local guidance, creating a vacuum below the national FSA framework

---

## Key Regulatory Frameworks

### 1. Federal Act on Data Protection (FADP / DSG)

**Status:** In force since September 1, 2023. Now enforced actively per May 2025 FDPIC posture shift.

**Relevance to AI use in law firms — updated:**
- FADP applies directly to AI systems processing personal data — no new legislation required
- Data Processing Agreements (DPAs) with AI providers are a present-tense statutory obligation, not a future requirement
- The FDPIC has confirmed enforcement is live — firms relying on "we assumed FADP AI enforcement was a 2027 concern" have no defense

**DPA Requirement — The Problem Has Not Been Fixed:**
Most small firms using consumer AI tools still do not have compliant DPAs. The statutory violation is ongoing and present-tense.

**Art.63 Liability — The Unnamed Dual Track:**

| Track | Type | Who it applies to | Standard |
|-------|------|-------------------|----------|
| Administrative | FDPIC enforcement, civil fines | The firm | Administrative compliance evidence |
| Criminal | Personal criminal liability under Art.63 | The signing attorney personally | Criminal defense architecture |

**Why the dual track matters for documentation:**
Firms building AI governance documentation for carrier PI attestation are building administrative compliance evidence. If a criminal matter arises, that documentation may be architecturally inadequate for criminal defense. The evidence standard is different, and the orientation of the documentation is wrong.

---

### 2. Swiss Criminal Code — Articles 321 CP and 167a CPC

**Article 321 CP (Professional Secrecy for External Counsel):**
- Attorneys, advocates, notaries, clergymen, and their assistants may not disclose information entrusted or learned professionally
- Professional secrecy is personal, criminal, and cannot be waived by the firm

**Article 167a CPC (In-House Counsel Refusal Rights):**
- In-house counsel have refusal rights in civil proceedings (different from Art.321 CP external counsel obligations)
- The January 2025 CPC amendment creates a structural split between external and in-house counsel AI accountability obligations

**The Hybrid-Counsel Problem:**
An attorney operating in both roles is subject to two different accountability frameworks simultaneously — depending on which function they are performing at any given moment. AI tool choice and data flow decisions do not automatically track which function is active.

**No Authority Has Mapped AI Governance to This Split:**
- No Swiss guidance document addresses how AI obligations differ between Art.321 CP and Art.167a CPC functioning
- No tool vendor has designed their offering for this split
- No carrier attestation asks which function the attorney was acting in when AI was used on a matter

---

### 3. Swiss Hosting vs. Processing Location — The Hidden Conflation

**The Claim:** "Swiss hosted" → implies data stays in Switzerland → professional secrecy concern resolved

**The Reality:**
Data residency (where data is stored) and processing location (where computations occur) are different. A tool with Swiss storage and US-based API processing sends client data to a US server for processing. The "Swiss hosted" label covers only the storage. The data left Switzerland when it went to the US API endpoint.

**Professional Secrecy Implication:**
If data processing for an attorney-client matter occurs on a US server, the professional secrecy analysis must account for US jurisdiction — servers in Switzerland do not shield data that's been transmitted to the US for processing. "Swiss hosted" does not resolve the Article 321 CP question if the API processing occurs in the US.

**No Bright Line:**
- Swiss law has not published a definitive ruling on this point
- The FDPIC has not issued specific guidance on "Swiss hosting" vs. "processing location" for legal professionals
- The issue is not that the practice is illegal — it's that the assessment hasn't been made, and the market claim of "Swiss hosted compliance" is substituting for an actual assessment

---

### 4. Council of Europe AI Convention

**Status:** Signed by Switzerland March 2025. Implementation legislation due end 2026.

**What it adds:**
- Accountability and oversight obligations for deployers of AI systems
- Transparency requirements for AI-assisted decisions
- human oversight principles with proportionality requirements

**What existing practice means:**
Law firms using AI today are operating in a window before implementation legislation arrives. This is not a neutral position — using AI without the governance framework the Convention will require means the documentation being built now may not satisfy the arriving standard.

**Timeline pressure:**
End of 2026 is not far. Firms that have been waiting for regulatory clarity before building documentation are approaching the implementation deadline with no documentation built.

---

### 5. EU AI Act Article 4 — Extraterritorial Effect

**Status:** In force since February 2025.

**The obligation:**
Article 4 requires providers and deployers of AI systems to have sufficient AI literacy — knowledge, skills, and understanding to use AI appropriately. For organizations deploying AI in professional services.

**The Swiss firm question:**
Does a Geneva law firm with EU clients have AI literacy obligations under Article 4? The provision applies to deployers of AI systems — not exclusively to EU-incorporated entities. A Swiss firm deploying AI to serve EU clients is likely within scope if the AI system's outputs affect EU data subjects or decisions concerning EU matters.

**What "sufficient AI literacy evidence" means for a boutique:**
- Documented AI training for personnel
- Proof of understanding AI tool limitations and capabilities
- Evidence of human oversight processes
- Records of AI tool evaluation

**No Swiss equivalent:**
Switzerland has no domestic AI literacy obligation equivalent to Article 4. Firms with EU nexus that haven't evaluated this exposure may have a live obligation they don't know they have.

---

### 6. Ordre des Avocats de Genève vs. National FSA Guidance

**The national vs. local split:**
The FSA/SAV (national Swiss Bar Association) guidance published June 2024 is the only national-level reference. It is too general for practical decisions.

The Ordre des Avocats de Genève has not published local AI guidance. Unlike some cantons that have begun developing canton-specific guidance, Geneva remains in a local vacuum.

**What firms experience:**
The local bar does not provide a hotline for AI governance questions. The national guidance doesn't answer canton-specific questions. Firms are making operative decisions about AI governance in a vacuum — without knowing what the Ordre considers mandatory, recommended, or acceptable.

**The practical consequence:**
When carrier attestation asks what "adequate AI governance" looks like for a Geneva firm, there is no published Ordre standard against which that firm's governance can be measured.

---

## The Documentation Standard Problem

### What Small Firms Are Actually Required to Show

Based on current obligations, a small Geneva law firm using AI in client matters should be able to demonstrate:

1. **Data Processing Agreements** with all AI providers processing client data — present-tense FADP requirement
2. **AI tool register** documenting which tools used on which matters — supports accountability when challenged
3. **Human oversight evidence** — SAV guidance requires human verification of all AI outputs; documentation demonstrates this occurred
4. **Client consent** for AI use on sensitive matters — emerging best practice, not yet a published requirement but the direction of travel
5. **Professional secrecy compliance assessment** for each AI tool — documented analysis of data flows, processing locations, third-party access
6. **Art.4 AI literacy evidence** (for EU-nexus firms) — training records, competency documentation
7. **Criminal defense-oriented documentation architecture** — not just administrative compliance evidence

### What Most Small Firms Have

Most 2–5 attorney Geneva firms have:
- No DPAs with any AI provider
- No AI tool register
- No documentation of human oversight
- No client AI consent process
- No professional secrecy compliance analysis for their AI tools
- No AI literacy documentation
- Documentation built for carrier questionnaires (administrative evidence) — may be inadequate for criminal defense

---

## Key Compliance Dates

| Date | Development | Status |
|------|-------------|--------|
| September 2023 | FADP enters into force | Past |
| June 2024 | FSA AI guidance published | Past |
| February 2025 | EU AI Act Art.4 in force | Past (likely overlooked) |
| May 2025 | FDPIC enforcement posture shift | Past (likely underappreciated) |
| March 2025 | Switzerland signs CoE AI Convention | Past |
| End of 2026 | CoE AI Convention implementation legislation due | Imminent |
| TBD | FADP amendments post-Convention implementation | Pending |

**Current compliance window assessment:**
The enforcement posture shift means firms that have been waiting for regulatory clarity are no longer in a "future risk" posture. The FADP applies directly to AI now. The FDPIC is enforcing. The Attorney-Client privilege + FADP intersection is a present-tense exposure, not a prospective one.

---

## Sources

- Federal Act on Data Protection (FADP/DSG), in force September 1, 2023
- FDPIC May 2025 enforcement posture communication
- Swiss Criminal Code, Articles 167a CPC and 321 CP
- January 2025 CPC amendment (Art.167a)
- FSA/SAV Guidance on AI Guidance, June 2024
- CoE Framework Convention on AI, Human Rights, Democracy and the Rule of Law (Swiss signature March 2025)
- EU AI Act Article 4 (AI literacy), in force February 2025
- Ordre des Avocats de Genève (no published AI guidance as of research date)

---
