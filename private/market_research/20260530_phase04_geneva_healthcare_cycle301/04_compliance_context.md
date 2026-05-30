# Compliance Context: Geneva Healthcare — Phase 04 C301

## Geneva / Switzerland Specific Regulatory Landscape

---

## 1. The Regulatory Architecture

Switzerland does not have a standalone AI Act. The Federal Council confirmed in February 2025 a sector-specific approach: AI considerations are integrated into existing legal frameworks rather than creating new horizontal legislation.

**Key regulatory layers applying to Geneva physician practices:**

| Framework | Authority | Applies to AI |
|---|---|---|
| New Federal Act on Data Protection (nFADP) | FDPIC | All AI processing personal data |
| Medical Devices Ordinance (MedDO) | Swissmedic | AI qualifying as medical devices |
| Therapeutic Products Act (TPA) | Swissmedic | AI-powered therapeutic products |
| FMH Professional Guidelines | FMH | Physician conduct with AI |
| Council of Europe AI Convention | CH government (pending) | Fundamental rights compliance |

**EU AI Act**: Not directly applicable in Switzerland. Relevant extraterritorially for practices whose AI outputs affect EU patients or whose vendors operate in the EU.

---

## 2. nFADP Requirements for AI in Medical Practice

**nFADP** (in force September 1, 2023) is the primary data protection law. It is technology-neutral — it applies directly to AI systems processing personal data without requiring AI-specific legislation.

**Key obligations for the Geneva physician practice:**

### Data Classification
- Patient health data is **sensitive data** under nFADP Art. 5(c)
- Genetic and biometric data are also explicitly sensitive
- Heightened protection requirements apply

### Lawful Basis
- Processing must have a lawful basis (consent, contract, legal obligation, vital interest, public interest, legitimate interests)
- For AI-assisted care: likely legal obligation (professional duties) or legitimate interest with balancing test
- Consent for AI specifically is debated — consent may not be freely given if refusing AI affects care quality

### Transparency (Art. 19)
- Must inform patients when AI is used in their care if there is relevant risk or impact on decision-making
- Patients have the right to know when AI is involved in diagnosis or treatment
- No explicit consent仪式 required for all AI use, but transparency is mandatory

### Data Protection Impact Assessment (DPIA)
- **Required** when processing is likely to result in high risk to individuals
- Large-scale sensitive health data processing by AI **triggers mandatory DPIA**
- Must consult FDPIC if significant risks cannot be mitigated
- Most AI documentation tools used across multiple patients likely require DPIA

### Privacy by Design and Default (Art. 6)
- Data protection must be built into AI system design, not added after
- Maximum privacy settings by default
- Applies to AI vendor selection — vendors must meet this standard

### Data Processor Agreements (Art. 9)
- Where AI vendor processes patient data on behalf of practice → data processor agreement required
- nFADP requirements differ from GDPR — BAAs must be nFADP-aligned, not just GDPR-aligned
- Vendor claims of "GDPR compliance" are **not sufficient** for nFADP compliance

### Breach Notification
- Mandatory notification to FDPIC if breach likely to result in high risk to individuals
- No public disclosure requirement, but documentation obligations apply

---

## 3. FMH Human Oversight Requirements

**FMH position**: The physician remains the central decision-maker and accountable party when using AI. Human oversight is required.

**The gap**: No operational definition. No minimum procedure. No documentation standard specified.

**What FMH has published:**
- Brochure: "Künstliche Intelligenz im ärztlichen Alltag" (AI in Medical Practice)
- Position paper on digital technology and medical profession evolution
- Recommendations on LLM use in everyday medical practice (August 14, 2025)

**What this means for the Geneva practice:**
- FMH expects physicians to exercise independent judgment
- Physician is liable for errors where AI is used without adequate oversight
- No specific audit trail format or review protocol is defined by FMH
- The physician must define and document their own oversight procedure

**The practical exposure**: A physician can demonstrate FMH-compliant oversight by documenting their review process — but the specific minimum content of that documentation is undefined. This is a due-diligence standard, not a compliance checklist.

---

## 4. Swissdamed: July 1, 2026

**Swissdamed** = Swiss Database on Medical Devices, managed by Swissmedic. Mandatory registration begins July 1, 2026 for medical devices placed on the Swiss market.

**Key dates:**
- Actors Module: mandatory since August 6, 2024
- UDI Devices Module: voluntary since August 2025, **mandatory July 1, 2026**
- Transitional period extends to December 31, 2026 for registration (but incidents must be reported immediately from July 1)

**Who is affected in independent practice:**
- If the practice **manufactures** a medical device → registration required
- If the practice **uses** a medical device → generally not required to register (the placing-on-market actor registers)
- If the practice uses an AI tool that qualifies as a medical device → the **vendor** is the responsible actor, not the practice

**The uncertainty for AI tools:**
- Swissmedic classification criteria for AI as a medical device are evolving
- Software that meets the medical device definition under MedDO (aligned with EU MDR) must be registered
- Most general AI documentation tools for practices are **not** currently classified as medical devices
- AI-enabled clinical decision support tools may cross the threshold
- Practices cannot definitively self-classify — legal review is often required

**Practical guidance for the Geneva practice:**
- Document which AI tools you use and their current Swissmedic classification status
- For AI tools with clinical decision support functionality, seek vendor classification documentation
- The July 1, 2026 date applies to vendors placing devices on market — monitor vendor communications
- Practices using non-classified AI tools are not currently required to register but should track regulatory developments

---

## 5. Carrier Attestation Context

**The forcing function is commercial, not regulatory.**

Swiss health insurance carriers are beginning to request AI attestations from physician practices as part of:
- Contract renewals
- Reimbursement reviews
- Risk assessments for AI-assisted care delivery

**What carriers are asking:**
- Confirmation that AI use is known and authorized within the practice
- Confirmation that a licensed physician maintains oversight
- Confirmation that patient data protection requirements are met
- Some carriers are asking for documentation of AI use policies

**The problem:**
- No standardized Swiss carrier attestation form exists
- Each carrier may ask different questions
- No regulatory body has defined what a compliant attestation response looks like
- Signing without understanding creates personal liability exposure

**The physician's position:**
- Attestation is being requested by a commercial counterparty (the carrier), not a regulator
- The physician's liability is to their professional obligations, not to the carrier's form
- Signing an attestation that misrepresents practice operations could constitute professional misconduct

---

## 6. Liability Structure for the Geneva Practice

**Physician liability is personal and irreplaceable.**

Key liability principles:

**Primary liability**: The physician is the accountable decision-maker. AI use does not transfer liability. Under the principle of *Hilfspersonenhaftung* (auxiliary person liability), the physician is responsible for errors made by tools they deploy.

**Standard of care**: The standard is not "did you use AI?" but "did you exercise appropriate clinical judgment?" Blind reliance on AI can constitute negligence. Failure to use validated AI (where it becomes standard of care) may also constitute negligence in future.

**Documentation as evidence**: In any future dispute, the physician must demonstrate their reasoning process. AI-generated documentation without evidence of physician review is evidence against, not for, the physician.

**The documentation debt problem**: Efficient AI documentation can create the appearance of less physician involvement. Without structured proof of review, the documentation trail undermines rather than supports the physician's position.

---

## 7. Key Dates and Deadlines

| Date | What |
|---|---|
| Ongoing | nFADP applies to all AI processing patient data |
| Ongoing | FMH human oversight principle in effect |
| July 1, 2026 | Swissdamed mandatory registration for medical devices |
| December 31, 2026 | End of Swissdamed transitional period for registration |
| End 2026 | Expected: FOPH healthcare AI measures (binding and non-binding) |
| End 2026 | Expected: Consultation draft for Council of Europe AI Convention implementation |
| August 2027 | EU AI Act full compliance deadline for AI in medical devices |