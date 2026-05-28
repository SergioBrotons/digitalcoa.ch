# Compliance Context: Geneva/Switzerland AI in Healthcare
## Phase 04 — Cycle C286

---

## Regulatory Framework Overview

### 1. Federal Act on Data Protection (nFADP / nDSG)

**Status:** In force since September 1, 2023
**Scope:** Applies to all processing of personal data in Switzerland, including AI systems processing personal data
**Relevance to ICPs:** Primary compliance obligation for any AI tool handling patient data

**Key requirements for medical practices:**

| Requirement | What It Means for Your Practice |
|---|---|
| Legal basis for processing | Must have a valid legal basis — typically consent or legitimate interest for healthcare |
| Sensitive data rules | Health data is "sensitive" — heightened obligations apply |
| Data Protection Impact Assessment (DPIA) | Mandatory for high-risk automated processing of medical data |
| Hosted in Switzerland | For private healthcare providers, hosting in Switzerland is often mandatory |
| Breach notification | Must notify FDPIC when data breaches likely to result in high risk to individuals |
| Patient rights | Right to information, access, rectification, erasure, data portability |
| Privacy by Design / Privacy by Default | Must be embedded in any AI system from initial design |

**Key dates:**
- September 1, 2023: nFADP in force
- No specific AI standalone legislation yet — nFADP applies directly to AI processing

### 2. Federal Office of Public Health (FOPH)

**Role:** Competent authority for all public health aspects in Switzerland
**Relevance:** Defines what constitutes "digital health" applications; oversees public health policy that affects AI in medical practice

**Digital health definition (FOPH):**
Products that utilize digital technology to achieve medical objectives — including telemedicine, telemonitoring, and mobile applications — but NOT solely administrative tools.

**Key implication:** If an AI tool is classified as "digital health" with a medical purpose, it may fall under additional regulatory requirements.

### 3. Swissmedic — Therapeutic Products and Medical Devices

**Role:** Regulatory and supervisory authority for medicinal products and medical devices
**Relevance:** Any AI software that qualifies as a medical device falls under Swissmedic oversight

**Medical Devices Ordinance (MedDO) — AI classification:**
- AI software with a medical purpose may qualify as a medical device
- Different risk classes apply based on intended use and invasiveness
- Class I: self-declaration possible; higher classes require more rigorous conformity assessment
- **swissdamed** registration: voluntary since August 2025, mandatory from July 2026

**Key questions for physicians:**
1. Does your AI tool make clinically relevant decisions (diagnosis, treatment recommendation)?
2. Does it fall under the definition of a medical device under MedDO?
3. If yes, what class? Have you registered (or should you register) in swissdamed?

### 4. FMH (Foederatio Medicorum Helveticorum) — Professional Obligations

**Role:** Swiss Medical Association — sets professional standards and ethical guidance for physicians
**Relevance:** Determines what "physician responsibility" means in the context of AI adoption

**Key FMH positions on AI in medical practice:**

**Human oversight principle:**
> "AI is a supportive tool. Every medical decision remains human. The attending physician retains full responsibility for all clinical decisions."

**Digital competencies framework:**
FMH has published working papers on digital competencies for physicians, requiring:
- Information and communication technology proficiency
- Understanding of AI systems and their limitations
- Ability to critically appraise digital health instruments
- Understanding of ethical and regulatory frameworks, accountability, and liability

**Informed consent:**
- Specific consent required if AI makes clinically relevant decisions or supports decisions with particular risk
- Specific consent required if patient data transferred to third party or used for research
- Generally NOT required for purely administrative AI use (e.g., improving reports, managing appointments)

**Data protection obligations:**
- Patient data may not be shared with AI models/chatbots without explicit authorization
- Professional secrecy obligations remain in force
- Hosting in Switzerland strongly recommended/required for sensitive data

### 5. Council of Europe AI Convention

**Status:** Switzerland confirmed in February 2025 that it will ratify
**Scope:** Primarily affects state actors (government entities, public services)
**Relevance to private medical practices:** Limited — but signals future regulatory direction

**Key principle:** Human oversight requirements, transparency, accountability in AI systems

**Important distinction:** The Convention's primary obligations fall on state actors, not private medical practices. However, physicians should understand the direction of travel as Switzerland aligns with European AI governance principles.

### 6. EU AI Act Influence (Non-Direct)

**Status:** EU AI Act in force since August 2024, with provisions rolling out through 2027
**Relevance to Switzerland:** Does NOT directly apply in Switzerland — but affects market access

**Key implication:** AI-powered medical devices seeking EU market access must comply with EU AI Act requirements. Many Swiss vendors therefore build toward EU compliance, creating a de facto alignment with EU standards even in Switzerland.

**What this means for physicians:** Vendors marketing "EU AI Act compliant" may be conflating EU market access requirements with Swiss legal obligations. Physicians should distinguish between:
- EU requirements (for devices seeking EU market access)
- Swiss requirements (nFADP, MedDO, FMH guidelines)

---

## Geneva-Specific Context

### Canton of Geneva Healthcare Regulation

Geneva operates within the Swiss federal framework but has specific considerations:

**Geneva cantonal hospital (HUG) AI Hub:**
- Innovation hub at Campus Biotech developing AI tools for clinical applications
- Focus on neurotechnology and AI-informed care
- NOT directly relevant to independent practice but signals Canton investment in healthcare AI

**City of Geneva AI Use Policy:**
- Municipal employees must not enter confidential/personal/protected data into AI tools without explicit approval
- Employees responsible for independently verifying accuracy, legality, and appropriateness of AI outputs
- **Implication:** City of Geneva's cautious approach signals broader Geneva institutional caution about AI deployment

**Professional licensing:**
- Physicians in Geneva must be licensed by the Canton
- Cantonal medical associations may develop specific guidance on AI — currently limited

---

## Compliance Checklist for Geneva Independent Practice (2-10 physicians)

### Before Adopting Any AI Tool

- [ ] Determine if the AI tool qualifies as a medical device under MedDO
- [ ] If yes, determine risk class and registration obligation in swissdamed
- [ ] Verify data hosting location — must be in Switzerland for sensitive patient data
- [ ] Assess whether a DPIA (Data Protection Impact Assessment) is required
- [ ] Review vendor's FADP compliance documentation
- [ ] Confirm vendor has a Business Associate Agreement (BAA) or equivalent if handling US-based LLM providers

### Before Using AI on Patients

- [ ] Update patient consent form to address AI-assisted documentation
- [ ] Document what AI does and does not do in your practice
- [ ] Create internal protocol for human oversight of AI outputs
- [ ] Ensure FMH digital competency requirements are met by responsible staff
- [ ] Review insurance coverage for AI-assisted clinical decisions

### Ongoing Obligations

- [ ] Monitor swissdamed registration deadlines (voluntary now, mandatory July 2026)
- [ ] Stay informed of FMH guidance updates on AI
- [ ] Review and update consent forms as AI tool capabilities change
- [ ] Document any incidents or near-misses with AI tools

---

## Key Regulatory Risks for Geneva ICPs

| Risk | Regulatory Basis | Consequence |
|---|---|---|
| Using AI on patient data without valid legal basis | nFADP | Fines up to CHF 250,000; legal liability |
| Using unclassified medical device without registration | MedDO / swissdamed | Non-compliance; potential regulatory action |
| Missing DPIA for high-risk processing | nFADP | Breach of mandatory requirement |
| Inadequate consent for AI-assisted documentation | nFADP / FMH | Patient complaint; liability exposure |
| Sharing patient data with non-compliant AI vendor | nFADP / professional secrecy | Criminal sanctions for breach of professional secrecy |
| Over-reliance on AI leading to substandard care | FMH professional obligations | Medical malpractice liability |

---

## Key Distinction: What's NOT Regulated (Yet)

- Purely administrative AI use (scheduling, billing, appointment reminders) with no clinical decision component
- AI tools that only provide information (not recommendations) to physicians
- Internal administrative automation that doesn't process patient data

**But:** The boundary between "administrative" and "clinical" AI is contested — particularly for AI scribes that generate clinical notes from consultations.

---

*Context compiled from: FOPH documentation, Swissmedic guidance, FMH publications, nFADP text, Council of Europe AI Convention, Swiss Federal Council decisions February 2025, Geneva cantonal guidance, Sidley/Clifford Chance legal analysis.*