# 04 — Compliance Context: Geneva/Switzerland Specific Regulatory

## Phase 04 C289 | Geneva Healthcare ICP | 2026-05-28

---

## Applicable Regulatory Framework

### 1. FMH Physician Ethics — The Principle Without Practice

**The Framework:**
FMH (Foederatio Medicorum Helveticorum) physician ethics obligations apply to all Swiss physicians, including independent practitioners. Current FMH guidance on AI states that AI must be used appropriately, that physician professional responsibility cannot be delegated to AI, and that appropriate human oversight must be maintained.

**The Structural Problem:**
FMH guidance produces principle without operational endpoint. The guidance does not:
- Define what documentation constitutes adequate human oversight at small-practice scale
- Specify what AI governance decisions must be documented and how
- Establish which AI systems meet FMH appropriateness criteria
- Provide evidence standards for FMH oversight compliance
- Create a Geneva-calibrated methodology for the 2–10 physician independent practice

**Operational Reality for Independent Practices:**
The same physician simultaneously holds the role of AI system user, AI governance compliance officer, and billing administrator. FMH oversight obligations are not operationalized for this structural reality. A principle requiring "appropriate oversight" provides no guidance when the person responsible for oversight is the person who also needs oversight.

**Geneva Institutional Calibration Signal:**
CHUV and HUG AI governance decisions reflect internally developed oversight standards built through adequately resourced committee processes. FMH does not transmit these standards to independent practices. Independent practices lack access to operational intelligence about what "appropriate FMH oversight" means in institutional versus independent practice contexts.

---

### 2. Swissdamed — The Classification Inaccessibility Problem

**The Framework:**
Swissdamed is the Swiss database for medical devices, operated by Swissmedic. It requires registration of medical devices based on classification tiers (Tier 1 lower risk / Tier 2 higher risk). AI-assisted medical devices or AI systems used in clinical contexts may fall under Swissdamed requirements depending on classification.

**The Structural Problem for Independent Practices:**
Swissdamed classification criteria were designed for medical device manufacturers applying for market authorization. The classification framework describes:
- Device risk categories for market entry
- Technical specifications for device approval
- Manufacturer registration requirements

Independent physician practices are not manufacturers. They are outpatient care providers using AI-assisted tools in clinical workflows. The Swissdamed framework does not:
- Provide a classification pathway specifically for independent practice AI tool use
- Translate manufacturer-oriented criteria into practice operational obligations
- Define which AI-assisted documentation or clinical support tools require Swissdamed registration
- Establish what registration looks like for a physician practice versus a device manufacturer

**Compliance Paralysis Mechanism:**
Independent practices reading Swissdamed guidance encounter a framework that describes a different category of actor performing a different category of activity. The Tier 1/Tier 2 distinction has operational consequences — but those consequences are designed for manufacturers, not outpatient care providers. Compliance officers and physicians cannot determine whether their AI tool use requires registration, and if so, at which tier.

**Geneva Operational Impact:**
Swissdamed registration timelines are active and approaching deadlines. Independent practices are operating in a state of compliance paralysis — not because they have chosen not to comply, but because the framework's classification criteria are not accessible to their operational context.

---

### 3. nFADP — AI-Assisted Documentation and DPIA Obligations

**The Framework:**
The Swiss Federal Act on Data Protection (nFADP) sets obligations for processing personal health data. AI-assisted medical records processing activates multiple nFADP provisions:
- **Art. 6 Legitimate Interest / Consent Basis** — Processing of health data requires appropriate legal basis
- **Art. 8 Automated Decision Processing** — Profiling and automated decision obligations apply when AI influences medical records
- **Art. 9 Third-Party Processor** — AI vendors processing patient data are third-party processors requiring appropriate contractual arrangements
- **Art. 13 Data Subject Rights** — Rights to access, correction, and explanation apply to AI-inferred content
- **DPIA Requirement** — Data protection impact assessment obligations may activate for AI-assisted clinical documentation at certain scales

**The Structural Problem for Independent Practices:**
nFADP applies to all independent practices using AI-assisted medical records. However, no Geneva service has published a methodology for:
- Conducting a DPIA at independent practice scale
- Mapping AI vendor data flows in medical record contexts
- Managing Art. 8 automated decision obligations for AI-assisted clinical notes
- Establishing consent or legitimate interest bases for AI-assisted documentation
- Responding to data subject requests involving AI-inferred content

**Geneva Institutional Calibration Signal:**
Larger institutional actors (CHUV, HUG) are building nFADP-compliant AI governance frameworks through adequately resourced legal and compliance functions. Independent practices have no Geneva-calibrated methodology for the same obligation. The nFADP DPIA question is particularly acute — larger institutions can conduct formal DPIAs; independent practices have neither methodology nor budget for formal assessment.

---

### 4. MedDO — Medical Device Obligations for Clinical AI Tools

**The Framework:**
The Swiss Medical Devices Ordinance (MedDO) implements device classification and market authorization requirements for medical devices used in Swiss clinical contexts. AI systems used for clinical decision support may fall under MedDO classification requirements depending on their function and risk profile.

**The Structural Problem for Independent Practices:**
MedDO classification determines which AI clinical support tools require formal market authorization in Switzerland. For independent practices, this creates questions about:
- Whether the AI tools they use have appropriate MedDO authorization
- What documentation the practice must maintain regarding device authorization status
- How to document AI clinical support tool usage in the context of MedDO obligations
- Whether AI-generated diagnostic suggestions activate MedDO oversight obligations beyond the tool's own authorization

**Geneva Operational Impact:**
The question of whether a specific AI tool used in an independent practice is appropriately authorized under MedDO is difficult to answer without specialized regulatory knowledge. No Geneva service provides MedDO compliance mapping for independent practice AI tool usage.

---

### 5. Professional Liability Carrier Underwriting Standards

**The Emerging Framework:**
Carrier third and fourth-generation AI attestation forms are forming an operative standard for physician AI governance outside of formal regulatory doctrine. This happens through:
- Carrier questionnaires requiring personal physician signature on AI governance attestation
- Questions about AI oversight documentation, AI system registration, and AI governance frameworks
- Carrier underwriting risk evaluation based on AI governance completeness

**The Structural Problem for Independent Practices:**
Carrier attestation is currently the most operationally specific AI governance standard affecting Geneva independent practices. However:
- The standard is defined by carrier risk evaluation logic, not physician professional liability doctrine
- No Geneva service offers pre-signing review of carrier AI attestation forms
- The documentation that satisfies carrier underwriting may not protect physician professional liability position
- Carrier iteration rate means the standard is moving faster than physician awareness

**Geneva Operational Impact:**
Independent practices face carrier attestation requirements with personal liability implications and no pre-signing review mechanism. The carrier form functions as the physician's de facto AI governance framework — but was written by carrier legal teams without Geneva medical professional input.

---

### 6. Geneva Institutional Standard Formation

**The Structural Phenomenon:**
Geneva institutional actors (CHUV, HUG, cantonal health authorities, Geneva-based hospital insurance carriers, institutional clinical networks) are forming effective AI governance standards through internal governance processes. These standards are not published in FMH guidance or Bern regulatory doctrine — they emerge through institutional decision-making, peer review, insurance carrier requirements, and informal circuit exchanges.

**The Access Problem:**
Independent practices cannot observe:
- What institutional AI governance decisions are being made
- What documentation standards institutional actors maintain
- What carrier AI governance requirements institutional actors satisfy
- What Geneva-calibrated oversight methodology institutions have developed

**The Timing Problem:**
Institutional standards are forming now, before published formal doctrine from Bern. Independent practices building AI governance frameworks based on current published guidance are building against standards that may not reflect what will be evaluated as adequate when accountability moment arrives. The documentation window is already closing.

---

## Summary: The Six Regulatory Pressure Points

| # | Regulatory Domain | Core Obligation | Access Problem for Independent Practice |
|---|---|---|---|
| 1 | FMH Physician Ethics | Appropriate oversight of AI | Principle without operational endpoint |
| 2 | Swissdamed | Device registration / tier classification | Criteria manufacturer-oriented, not practice-calibrated |
| 3 | nFADP | Health data processing compliance | DPIA methodology absent at practice scale |
| 4 | MedDO | Clinical AI device authorization | Tool authorization status unclear for practices |
| 5 | Carrier Underwriting | Attestation on AI governance | Pre-signing review structurally absent from market |
| 6 | Institutional Standards | Informal formation mechanism | Operating in isolation from practice awareness |

---

## Key Geneva Regulatory Insight

**The accountability pressure on independent practices comes from six directions simultaneously, with no single Geneva-calibrated methodology for coordinating them.**

FMH defines principle without providing operational translation. Swissdamed applies with classification criteria inaccessible to physician context. nFADP activates obligations that Geneva has not mapped for small-practice scale. MedDO creates authorization questions without practice-level guidance. Carrier attestation functions as the most operationally specific standard while remaining structurally un-reviewed. Institutional standards form without transmission to independent practices.

The regulatory burden exists. The coordination architecture does not.
