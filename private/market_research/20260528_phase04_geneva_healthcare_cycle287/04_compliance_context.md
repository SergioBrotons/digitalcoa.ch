# Compliance Context: Geneva Healthcare AI Accountability
## Phase 04 — Cycle C287

---

## Geneva/Switzerland Specific Regulatory Framework

### 1. FMH Professional Obligations and AI

**The professional obligation framework:**
- FMH (Foederatio Medicorum HELveticorum) is the Swiss Medical Association — the peak professional body for Swiss physicians
- FMH professional code requires physicians to maintain competence in their practice, including digital tools used in clinical work
- FMH has published working papers on digital competencies that establish AI literacy as a professional expectation
- The core FMH position on AI: **physicians retain full personal responsibility for all clinical decisions, including those informed by AI tools**

**The operational gap:**
- FMH guidance on responsibility is a principle, not a procedure
- No FMH-published protocol exists for how physicians should document human oversight of AI-assisted decisions in clinical practice
- No FMH guidance exists on what constitutes adequate human review of AI-generated clinical documentation
- The gap between "you are responsible" (FMH statement) and "here is how to document that responsibility" (no FMH guidance) is the primary governance gap for independent practitioners

**What this means for the ICP:**
- Attending FMH briefings satisfies the awareness obligation
- But FMH does not provide the documentation architecture that would allow a physician to demonstrate compliance post-hoc
- The physician is left to design their own documentation protocol — or operate without one

### 2. nFADP: Data Protection in Medical AI Context

**The revised Federal Act on Data Protection (nFADP):**
- In force since September 1, 2023
- Aligns Swiss data protection with a standard comparable to GDPR (not identical, but broadly convergent)
- Creates specific obligations relevant to medical practices using AI

**Key obligations for medical AI users:**

**Art. 22 — Data Protection Impact Assessment (DPIA):**
- Mandatory for high-risk automated processing
- Medical data (health information) qualifies as sensitive data under Art. 5(c) nFADP
- AI-assisted clinical documentation processing of patient health data qualifies as high-risk automated processing
- **Implication:** Most Swiss medical practices using AI for clinical documentation likely require a DPIA — but the vast majority have not conducted one

**Art. 9 — Fines:**
- Administrative fines up to CHF 250,000 for violations
- Personal liability for responsible individuals (not just organizational fines)
- **Implication:** The practice principal may face personal fines in addition to organizational liability

**Art. 6 — Lawfulness of processing:**
- Processing must have a legal basis — consent, contract performance, legal obligation, vital interests, or public task
- Medical practices using AI for documentation need a clear legal basis for processing patient data through AI systems
- Existing patient consent forms were drafted before AI tools existed and do not address AI-assisted processing

**Art. 13 — Right to explanation:**
- Data subjects (patients) have the right to understand how decisions affecting them were made, including automated decisions
- AI-generated clinical conclusions communicated to patients create an explanation obligation
- **Implication:** If a patient asks "how did the AI factor into my diagnosis?", the practice must be able to explain — not just the AI's conclusion, but the human validation of it

**Art. 17 — Data breach notification:**
- Unconditional 72-hour notification to FDPIC for high-risk data breaches
- Medical data breaches are presumed high-risk
- **Implication:** If an AI vendor has a breach affecting patient data, the practice has 72 hours to notify — regardless of whether the breach occurred at the vendor level

### 3. MedDO and Swissmedic: Medical Device Classification

**Medical Devices Ordinance (MedDO):**
- Switzerland's implementation of the EU Medical Device Regulation framework
- Governs software that qualifies as a medical device
- Classifies devices by risk level (I, IIa, IIb, III)

**AI tools that may qualify:**
- AI clinical decision support software
- AI diagnostic tools
- AI tools that provide treatment recommendations
- AI scribes that generate clinical documentation (potentially — classification depends on intended use and risk profile)

**swissdamed registration:**
- Voluntary registration opened August 2025
- Mandatory registration from July 2026 for devices meeting the threshold
- Registration requires technical documentation, quality management evidence, and post-market surveillance planning
- The burden of documentation is designed for device manufacturers — not independent physician practices using AI tools

**The classification question:**
- Most AI vendors marketing to Swiss physicians claim their tools do not qualify as medical devices
- But classification depends on intended use claims and risk profile — not just the vendor's characterization
- A physician using an AI tool that is later determined to qualify as a medical device, without registration, faces regulatory exposure
- **No Geneva advisory service currently offers MedDO classification evaluation for independent practices**

### 4. Council of Europe AI Convention

**Status:**
- Switzerland signed in September 2023, ratified February 2025
- The AI Convention is an international treaty establishing AI governance obligations for signatory states
- Primary obligations fall on state actors (public sector, government AI systems)
- Private sector obligations flow through national implementation

**Implications for private medical practices:**
- The Convention creates a framework that informs but does not directly impose obligations on private medical practices
- As Switzerland implements the Convention through national law, private sector obligations may crystallize
- **The more immediate implication is that Geneva physicians are operating in an environment where regulatory expectations are being set higher, faster, than the communication infrastructure reaches them**
- Geneva institutional actors (cantonal government, hospitals) are adjusting to higher standards — independent practitioners often remain unaware of these shifts

**The accountability formation mechanism:**
- Geneva medical community does not operate in isolation — professional discussions, hospital privilege requirements, cantonal medical association standards, and institutional buyer behavior all create expectations that flow down to independent practices
- When a major Geneva hospital updates its AI governance standards, the standard propagates through referral networks, professional associations, and informal professional pressure — even if no formal obligation was imposed on independent practitioners

### 5. FOPH (Federal Office of Public Health) and AI in Healthcare

**Current position:**
- FOPH is the competent authority for health policy in Switzerland
- FOPH has published general AI principles for healthcare but has not issued detailed guidance specific to independent medical practices
- FOPH's AI work is primarily focused on system-level policy, not individual practice governance

**The guidance vacuum:**
- FOPH has not provided specific guidance on what independent medical practices must do to use AI compliantly
- Cantonal health authorities (Geneva: OCSP) are cautious and have not issued practitioner-specific AI governance standards
- The vacuum means physician responsibility is personal and undefined — the physician bears accountability for decisions that no authority has clearly told them how to make correctly

### 6. swissdamed: The Registration Timeline

**Current state:**
- Voluntary registration: open since August 2025
- Mandatory registration: July 2026

**What physicians need to know:**
- Whether their AI tool qualifies as a medical device under MedDO
- What classification level applies
- What documentation is required for registration
- What quality management system evidence is needed

**The practical gap:**
- Most independent physicians do not have the regulatory expertise to determine whether their AI tool requires registration
- Vendors have commercial incentive to claim their tools do not require registration
- No neutral Geneva advisory service provides classification evaluation specifically for independent practices

---

## Regulatory Timeline Overview

| Date | Event | Relevance |
|---|---|---|
| Sept 1, 2023 | nFADP enters force | Data protection obligations active for all medical practices |
| Sept 2023 | Switzerland signs AI Convention | Framework established for future AI governance obligations |
| Feb 2025 | Switzerland ratifies AI Convention | Implementation obligations begin to crystallize |
| Aug 2025 | swissdamed voluntary registration opens | First compliance window for AI medical device users |
| July 2026 | swissdamed mandatory registration | Compliance deadline for AI tools qualifying as medical devices |
| Q2 2026 | SIF regulatory gap analysis (anticipated) | Regulatory clarity expected from Swiss financial regulator |
| 2026+ | AI Convention implementation legislation | Private sector obligations may crystallize through national law |

---

## The Documentation Window Problem

**The structural pattern:**
- Documentation built after a regulatory event cannot retroactively reconstruct what was known or decided before the event
- A physician who waits for regulatory clarity before building documentation will find that building documentation after the obligation arrived does not demonstrate the reasoning that preceded the obligation

**The specific Geneva healthcare implication:**
- The swissdamed July 2026 deadline creates a documentation window that closes on that date
- A physician who begins documenting their AI governance architecture after July 2026 cannot retroactively demonstrate the governance reasoning that should have preceded the deadline
- The documentation window is a burden-of-proof reversal: before July 2026, a physician building governance is evaluated against forming standards; after July 2026, a physician without documentation is evaluated against arrived standards

**No physician in the Geneva market currently has a structured protocol for navigating this window.**

---

*Compliance context derived from: nFADP text, FMH professional code and digital competency framework, MedDO text and Swissmedic guidance, Council of Europe AI Convention (ratification February 2025), FOPH publications, OCSP (Geneva cantonal health authority) guidance, Swissmedic swissdamed framework documentation.*

*6 NET-NEW findings distinct from C286 Phase 04 compliance context (which covered: nFADP DPIA obligation, FOPH AI framework, AI Convention ratification as primarily state-actor obligation, Swissmedic/MedDO registration thresholds, consent form obsolescence, human oversight documentation gap as unnamed service category).*