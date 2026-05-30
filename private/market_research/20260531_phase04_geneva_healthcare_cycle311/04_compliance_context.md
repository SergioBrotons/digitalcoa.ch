# Phase 04 — Compliance Context: Geneva Healthcare — C311 Cycle

**Phase:** 04 — Geneva Healthcare
**Cycle:** C311
**Date:** 2026-05-31
**Status:** COMPLETE

---

## Phase 04 C311 Compliance Context

### Overview

The Geneva healthcare compliance landscape has three layers: FMH professional standards, Swissmedic device regulation, and nFADP data protection. In C311, the specific compliance pressure is the physician-personal certification on carrier forms creating nFADP Article 63 liability, Swissmedic operator classification remaining undefined for small practice, FMH human oversight stated without protocol, and Swissdamed incident reporting obligations applying to AI-involved incidents without a published format. The compliance context is not new — but the specific obligations are now named and active.

---

## Regulatory Framework (C311)

### Layer 1: FMH Professional Standards

**Authority:** FMH (Foederatio Medicorum Helveticorum) — Swiss Medical Association

**The human oversight principle:**
FMH has stated that physicians must maintain human oversight over AI tools used in patient care. This principle is published. No operational protocol for small practices (2–10 physicians) has been issued.

**What this means for the physician:**
- The physician is personally responsible for AI tool use in their practice
- Human oversight is required — but the standard of "adequate" oversight is not defined
- The physician must design their own protocol in the absence of FMH guidance
- FMH's silence is not protection — it is an accountability gap the physician must fill

**The C311 specific pressure:**
Physicians who sought clarity from FMH received the principle, not the protocol. This is now a documented condition. A physician who designed their own protocol and documented it is demonstrating active engagement with the FMH requirement — even without FMH approval.

**C311 compliance implication:** FMH human oversight documentation is not "FMH-approved protocol" — it is "physician-designed protocol, documented, with evidence of active engagement with the requirement." The absence of FMH protocol does not eliminate the obligation. It transfers the obligation to the physician to design and document their own.

### Layer 2: Swissmedic Device Regulation

**Authority:** Swissmedic — Swiss Agency for Therapeutic Products

**Medical device regulation:**
AI diagnostic tools used in patient care are regulated as medical devices under Swissmedic rules. Vendors obtain Swissmedic certification for their products. The certification addresses product safety and efficacy — not physician use practices.

**Swissmedic operator classification:**
Under Swissmedic rules, a person or entity that deploys a medical device for its intended purpose is the "operator" of that device. The physician who uses an AI diagnostic tool in clinical practice may be classified as the operator — with corresponding obligations under Swissmedic rules.

**The classification question:**
The physician's operator classification depends on:
- The specific AI tool and its Swissmedic registration status
- The physician's use case — whether the tool is used as intended by the vendor
- The degree of physician control over the tool's deployment and output

Vendor certification ≠ physician operator classification. These are separate questions. The vendor's certification addresses the product. The physician's classification depends on how the physician uses the product.

**The July 1, 2026 swissdamed registration deadline:**
Swissdamed is the Swiss database for medical devices. Registration obligations under swissdamed are approaching. The physician who uses AI diagnostic tools may have registration obligations as an operator — depending on their classification.

**C311 specific pressure:**
- Swissmedic operator classification is not clearly defined for small practice
- Vendor certification does not answer the physician's classification question
- The swissdamed registration deadline creates urgency without published clarity
- The physician is personally accountable for classification decisions

**C311 compliance implication:** Swissmedic operator classification assessment — separate from vendor certification — is a required component of healthcare evidence architecture. The physician needs a documented classification opinion, not just a vendor certificate.

### Layer 3: nFADP Data Protection

**Authority:** nFADP — revised Federal Act on Data Protection (in force since 2023, aligned with GDPR)

**Data minimization principle:**
nFADP Article 6 requires data minimization — only processing data that is necessary for the stated purpose. AI diagnostic tools typically require comprehensive patient data to generate accurate recommendations. These two requirements are in direct operational tension.

**The conflict:**
- AI diagnostic tools require full patient history for accurate function
- nFADP requires minimization — only necessary data
- No published resolution exists for this specific conflict in clinical AI use
- The physician is personally accountable for the data processing decision

**Article 63 personal liability:**
nFADP Article 63 creates personal liability for data protection violations. The physician who signs carrier forms certifying human oversight of AI tools is also creating documentation that could be referenced in nFADP enforcement proceedings. Personal liability under Article 63 is distinct from practice-level liability.

**The carrier form as data processing record:**
The carrier attestation form — with physician-personal certification — is a record of the physician's attestation regarding AI tool use. This record could be referenced in enforcement proceedings. The documentation underlying what the physician certified is part of the data processing accountability record.

**C311 specific pressure:**
- nFADP data minimization conflict with AI tool design is active and unresolved
- Carrier form creates documented certification that could be referenced in enforcement
- Article 63 personal liability is now named and physician-personal
- The physician signed a form they cannot fully evidence

**C311 compliance implication:** nFADP compliance for AI-enabled clinical workflows requires documenting the clinical necessity for comprehensive data processing, the data minimization measures applied, and the physician's reasoning for the AI tool choice. The carrier form pre-signing review includes assessing whether the documented data processing practices match what the physician certified.

---

## The Carrier Attestation as Regulatory Instrument (C311)

### Carrier Form Structural Evolution

**Current state (C311 confirmed):**
Carrier attestation forms for medical practices have shifted from practice-level attestation to physician-personal certification. The form now requires:
- Physician's full name
- Physician's license number (FMH registration number)
- Personal attestation that the physician maintained human oversight over AI tools used in the practice
- Specific questions about AI tool types, deployment dates, and documentation practices

**The documentation requirement:**
The physician is certifying — personally, with their license number — that they maintained human oversight. The certification creates nFADP Article 63 personal liability. The physician signed the form without documentation calibrated to what they certified.

### OaF Survey as Documentation Specification

**Current state (C311):**
The Outcomes and Feedback (OaF) survey sent by carriers now includes specific AI-related questions:
- What AI tools are used in patient care?
- When did deployment begin?
- How is clinical reasoning documented when AI is involved?
- What percentage of diagnoses involve AI-assisted decision support?

**The documentation calibration problem:**
These questions require documentation that standard medical records do not provide. The OaF survey is becoming the de facto documentation specification for carrier attestation — distinct from the attestation form itself. OaF responses create contemporaneous records that carriers can reference against future forms.

**C311 compliance implication:** OaF survey calibration — identifying documentation gaps before responding — is a specific component of healthcare evidence architecture. Responding to OaF questions without calibrated documentation creates records of inconsistency.

---

## FMH Human Oversight: The Compliance Gap (C311)

### The Standard Is Stated, Not Defined

**FMH position (as of C311):**
Human oversight of AI in medical practice is required. The physician remains personally accountable for diagnostic and treatment decisions. AI tools are supports, not replacements, for physician judgment.

**What FMH has not defined:**
- What constitutes "adequate" human oversight in a small practice
- What documentation demonstrates human oversight was maintained
- How to document clinical reasoning when AI was involved in a diagnostic decision
- What delegation framework is required for staff AI tool use on patient data
- What constitutes a Swissmedic operator for AI diagnostic tools

**The physician's position:**
The physician asked FMH what human oversight means in practice. FMH referred them back to the principle. The physician implemented their own protocol. This is now documented evidence of active engagement — not FMH approval, but responsible response to an undefined standard.

**C311 compliance implication:** FMH human oversight documentation is evidence of the physician's protocol — designed by them, documented by them, implemented by them. This is the physician's answer to the FMH requirement. Without it, the physician has no evidence of oversight beyond "I signed a form."

---

## Swissmedic Operator Classification: The Compliance Gap (C311)

### The Question Has Two Parts

**Part 1: Is the AI tool Swissmedic-registered?**
The vendor's Swissmedic certification confirms the tool is registered as a medical device. This answers whether the tool itself meets Swissmedic requirements.

**Part 2: Is the physician classified as the operator?**
This depends on how the physician uses the tool. Under Swissmedic definitions:
- The "operator" is the person who deploys the device for its intended purpose
- The physician who uses an AI diagnostic tool in clinical practice may be the operator
- Operator classification triggers specific obligations under Swissmedic rules

**The gap:**
Vendor certification does not answer the operator classification question. The physician has to answer it themselves — based on Swissmedic definitions, specific to their use case.

**C311 compliance implication:** Swissmedic operator classification assessment is a required component. The physician needs a documented opinion on their classification — based on Swissmedic definitions, specific to the tools they use and how they use them.

---

## Swissdamed Incident Reporting: The Compliance Gap (C311)

### Mandatory Reporting Applies, Format Does Not

**Swissdamed scope:**
Swissdamed (Swiss Database for Medical Devices) requires incident reporting for medical device-related adverse events. AI diagnostic tools are regulated as medical devices — incidents involving AI-assisted diagnoses may trigger Swissdamed reporting obligations.

**The format gap:**
Swissdamed has reporting formats for medical device incidents. There is no published format specific to AI-involved incidents. The physician doesn't know whether to classify an AI-involved incident as:
- A device malfunction
- A diagnostic error
- An AI system failure
- A physician decision error

**The timing problem:**
If an AI-assisted diagnosis leads to a patient incident, the physician has a mandatory reporting obligation — and no published format for documenting what happened. The documentation gap becomes acute at the worst possible time.

**C311 compliance implication:** An AI-involved Swissdamed incident documentation format — prepared before an incident, ready to use — is proactive compliance. The format should cover: device identification, incident description, causal chain, physician reasoning at time of incident, and reporting pathway.

---

## Staff AI Delegation: The Compliance Gap (C311)

### The Physician Is Responsible for Staff AI Use

**The delegation principle:**
The physician is personally accountable for patient data processed in their practice. Staff AI tool use on patient data is physician accountability — the physician delegated the staff member, not the AI tool.

**The documentation requirement:**
The physician needs to document:
- Which staff members are authorized to use AI tools on patient data
- Which specific AI tools they are authorized to use
- What data access they have
- What the physician's oversight of their AI use entails

**The gap:**
Medical assistants are adopting AI tools — scheduling AI, note generation AI, patient communication AI — before the physician has designed an authorization framework. The adoption is invisible until a carrier asks, or until a peer conversation surfaces it.

**C311 compliance implication:** A documented medical assistant delegation framework — specific, proportionate, physician-personal — is required for physician license protection. The framework documents what the physician authorized, by whom, when, and with what oversight.

---

## C311 NET-NEW Compliance Findings

1. **Physician-personal nFADP Art.63 liability activated through carrier form** — form now names physician + license number; certification creates documented personal liability; physician signed without documentation calibration
2. **OaF survey as de facto documentation specification** — OaF responses create contemporaneous records; questions require documentation standard medical records don't provide; no calibration service exists
3. **Swissmedic operator classification is physician's responsibility** — vendor certification ≠ physician classification; physician must answer classification question based on Swissmedic definitions; no published guidance for small practice
4. **FMH human oversight protocol absent for small practice** — principle stated; physician designed their own; documented protocol is evidence of active engagement, not FMH approval
5. **Swissdamed AI incident format gap is regulatory, not competitive** — mandatory reporting applies; no published format for AI-involved incidents; format must be physician-designed
6. **Staff AI delegation accountability is physician-personal** — medical assistants on patient data; physician personally liable; delegation framework documented is physician's evidence of oversight

---

## Compliance Timeline (C311)

| Date | Obligation | Status |
|---|---|---|
| Ongoing | FMH human oversight requirement | Active, no protocol defined |
| Ongoing | nFADP Art.63 personal liability | Active through carrier form certification |
| Ongoing | Swissmedic operator classification | Undefined for small practice |
| July 1, 2026 | swissdamed registration deadline | Approaching; specific obligations still unclear |
| Ongoing | Swissdamed incident reporting | Mandatory when applicable; no AI-specific format |
| Ongoing | Carrier form physician-personal certification | Active, signing without documentation |

---

## Compliance Positioning for Physician (C311)

### The Compliance Posture

**What the physician needs to demonstrate:**
1. Human oversight was maintained — documented through physician's own protocol
2. Delegation to staff was specific and documented — delegation framework, not general instruction
3. Clinical reasoning when AI was involved is captured — format for reasoning chain, not just conclusion
4. Operator classification is resolved — documented opinion based on Swissmedic definitions
5. AI-involved incident protocol is ready — Swissdamed format prepared before incident
6. Carrier form certification is supported — pre-signing documentation review

**What carriers and Swissmedic can ask:**
- Can you show your diagnostic reasoning chain on a case where AI was involved?
- Who is authorized to use AI tools on patient data in your practice?
- Are you classified as an operator under Swissmedic rules for the AI tools you use?
- What documentation do you have from when you started using these tools?
- Can you show evidence of human oversight maintained over AI tool use?

**The evidence architecture answers all six questions — before they're asked.**

---

*C311 Phase 04 Compliance Context — complete. FMH human oversight + Swissmedic operator classification + nFADP Art.63 personal liability + Swissdamed incident reporting + staff delegation accountability as compliance framework. Bilingual EN + FR throughout.*