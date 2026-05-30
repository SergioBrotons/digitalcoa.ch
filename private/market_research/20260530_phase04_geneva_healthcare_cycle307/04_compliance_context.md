# 04 — Compliance Context: Geneva/Switzerland Specific Regulatory Landscape

## Phase 04 C307 | Geneva Healthcare ICP | 2026-05-30

---

## Regulatory Architecture for Geneva Independent Practice AI Accountability

### Layer 01: FMH Physician Ethics — The Principle Without Operational Endpoint

**What it says:**
FMH (Foederatio Medicorum Helveticorum) physician ethics principles require "appropriate human oversight" of AI systems used in clinical decision-making. The principle is correctly stated.

**What it does not say:**
The principle does not define what "appropriate oversight" means operationally. It does not specify what documentation evidence of oversight adequacy looks like. It does not address the specific structural constraint of the dual-role independent physician (AI user + compliance officer + billing administrator simultaneously).

**The compliance gap:**
Every independent physician is expected to demonstrate "appropriate oversight" with no operational definition of what that looks like at their practice scale. The documentation built to satisfy this implied standard is built to nobody's definition — and collapses under substantive challenge.

**Relevant FMH publications:**
- FMH Guidelines on Medical Ethics (Art. 8 — Use of Technical Aids)
- FMH Continuing Medical Education regulations on AI competency modules
- FMH position statements on digital health and AI in physician practice

**What to look for:**
Whether FMH issues operational guidance on AI oversight documentation proportionate to independent practice before or after market implementation of carrier attestation requirements. If not, the attestation requirements will effectively define the operational standard by default — carrier underwriting criteria become the de facto FMH oversight standard.

---

### Layer 02: nFADP — Federal Act on Data Protection

**What it says:**
The nFADP (revised Federal Act on Data Protection, in force since 2023) governs processing of personal data, including health data. It requires lawful basis for processing, transparency, data subject rights, and specific obligations for automated decision-making.

**What it means for AI in medical practice:**
Medical records containing AI-generated or AI-assisted content are personal data (health data, special category). The physician practice is the data controller. AI tool vendors are data processors. The DPA between practice and vendor defines the processing relationship — but the physician's professional obligations run independently of the vendor's contractual commitments.

**Art. 21 — Automated Individual Decision-Making:**
nFADP Art. 21 gives data subjects the right not to be subject to solely automated decisions with legal effect. AI-generated diagnostic recommendations that flow into medical records may constitute automated decision-making. The physician's review and signature on the record is the human intervention point — but only if documented as such.

**The compliance gap:**
The physician's nFADP obligations and FMH human oversight obligations overlap but are not aligned. nFADP requires documented human review of automated decisions. FMH requires appropriate oversight. Neither requirement specifies what documentation evidence satisfies both simultaneously at independent practice scale.

**The nFADP Art. 9 (Third-Party Data Processor) dimension:**
AI tools processing patient data are third-party data processors. The physician practice must have a compliant DPA with each AI tool vendor. The question of which AI tools in a typical practice have compliant DPAs — and whether the vendor's standard terms satisfy nFADP requirements — is largely unexamined at independent practice scale.

---

### Layer 03: Swissdamed — Medical Device Registration

**What it says:**
Swissdamed is Switzerland's registration system for medical devices, administered by Swissmedic. From July 1, 2026, mandatory registration for medical devices placed on the Swiss market applies under MedDO (Medical Device Ordinance).

**The classification structure:**
- **Tier 1:** Low-risk medical devices
- **Tier 2:** Higher-risk medical devices

**The compliance gap for independent practices:**
The classification criteria were designed for medical device manufacturers, not outpatient physician practices. AI diagnostic support tools may qualify as medical devices at different tiers depending on intended use, claims made, and integration with clinical workflow.

**The structural problem:**
Independent practices do not have access to a classification methodology proportionate to their specific AI tool configurations. The vendor (who has commercial interest in registration) is the only guidance source. The physician faces a regulatory deadline with no proportionate independent assessment pathway.

**What this means for Geneva independent practices:**
- Determine whether AI tools in use qualify as medical devices under MedDO
- If yes, determine applicable tier (Tier 1 or Tier 2)
- If Tier 2, register with Swissmedic before July 1, 2026
- Document classification determination methodology defensibly

**Key regulatory texts:**
- MedDO (SR 812.213) — Medical Device Ordinance
- Swissdamed registration portal — swissmedic.ch/swissdamed
- MEDMED guidance documents (to the extent available for AI tools)

---

### Layer 04: Carrier AI Attestation — The De Facto Operative Standard

**What it is:**
Medical liability insurers and health insurers in Switzerland are requiring AI governance attestations from physician practices as part of renewal and risk assessment processes. These attestations ask practices to describe their AI governance, AI tools in use, and human oversight mechanisms.

**What it does:**
The carrier form creates an acute documentation occasion. It does not define what adequate governance requires — it asks the physician to document governance that already exists (or should exist). The form is designed for carrier risk evaluation, not physician professional liability protection.

**The misalignment:**
What satisfies the carrier's underwriting requirement does not equal what protects the physician's professional liability position. The carrier wants to know: is this practice's AI usage a carrier risk? The physician needs to document: can I demonstrate adequate oversight of AI contribution to medical records bearing my name?

**The pre-signing review gap:**
No independent review service exists to analyze carrier attestation forms from the physician's personal liability perspective before signature. Physicians sign instruments written by carrier legal teams without understanding what they are committing to personally.

**What to document:**
- Which carrier forms have been received and signed
- What each form certifies the physician to personally
- Whether the practice's actual AI governance can support the certifications made
- What documentation exists to support each certification point

---

### Layer 05: Medical Record Integrity Requirements

**What they say:**
Swiss cantonal health authorities (Geneva: OC Santés) and FMH require medical records to be accurate, complete, and attributable. The physician's signature attests to record accuracy.

**What AI does to record integrity:**
AI-generated content in medical records makes record authorship ambiguous. AI analytical contributions to physician decisions are not documented. The physician's signature on a record containing AI-generated content creates an attestation to accuracy the physician cannot fully support — because the physician cannot explain what the AI contributed.

**The retrospective accountability problem:**
Records created in the past 24 months with AI-assisted content are now active medical records bearing the physician's authoritative signature. The physician cannot retrospectively reconstruct AI contribution to those records. The accountability gap is already embedded in active records.

**What must exist going forward:**
A medical record AI attribution protocol that establishes at time of record creation: what the physician documented directly, what the AI contributed analytically, what the physician reviewed and decided. This is documentation architecture, not documentation improvement — it establishes the evidentiary record of human oversight at the moment of signature.

---

### Layer 06: Professional Liability — The Physician License Standard

**What it means:**
The physician's professional license is the irreplaceable asset. Professional liability exposure is personal and not transferable. Carrier professional liability insurance covers damages awards — it does not protect the physician's license when the physician's personal conduct is at issue.

**The accountability chain:**
1. Physician signs medical record containing AI-generated content → physician attests to record accuracy
2. Physician signs carrier AI attestation → physician certifies to governance adequacy personally
3. Patient adverse outcome occurs involving AI → physician's personal conduct reviewed
4. FMH or cantonal medical authority investigates → physician must demonstrate adequate oversight

**The physician license standard:**
At each step, the physician's personal professional conduct is evaluated. The question is not "did the AI tool malfunction" — the question is "did the physician exercise adequate human oversight." Evidence of that oversight is what the physician needs to produce.

**What this means for service design:**
Every service delivered to a Geneva independent physician practice must ultimately produce documentation that protects the physician's personal professional liability position — not just satisfies carrier forms, not just complies with FMH principle.

---

### Layer 07: HIN — Health Info Net Network

**What it is:**
HIN is the secure healthcare network in Switzerland enabling confidential electronic communication between healthcare providers. HIN membership is required for many cantonal health data exchange systems.

**What it means for AI tools:**
AI tools processing patient data through HIN-connected systems have a specific compliance context. The HIN subscription agreement defines the vendor's data processing obligations within the HIN ecosystem. Independent practices using AI tools through HIN-connected EHR systems have a specific vendor accountability structure.

**The compliance dimension:**
HIN itself does not audit AI tools or certify their compliance. HIN membership means the vendor has passed HIN security requirements — not that the vendor's AI output meets FMH human oversight standards or that the physician's use of the tool meets nFADP requirements.

---

## Regulatory Timeline Reference

| Date | Requirement | Action Required |
|------|-------------|-----------------|
| Ongoing | FMH human oversight principle | No operational definition; build documentation to implied standard |
| Ongoing | nFADP obligations | Ensure compliant DPA with each AI vendor; document AI review |
| July 1, 2026 | Swissdamed mandatory registration (MedDO) | Determine classification for AI tools in use; register if Tier 2 |
| Ongoing | Carrier AI attestation | Pre-signing review before any carrier form signature |
| Ongoing | Medical record integrity | Contemporaneous AI attribution documentation at point of record creation |

---

## The Compliance Architecture Problem

These seven regulatory layers do not form a coherent accountability system. They are different authorities with different mandates using different language. The physician navigates them simultaneously, with no integration pathway, no unified documentation standard, and no guidance calibrated to independent practice scale.

**The service opportunity:**
Design documentation architecture that simultaneously satisfies FMH human oversight evidence requirements, nFADP Art. 21 automated decision documentation, Swissdamed classification determination, carrier attestation certification points, and medical record integrity — without requiring the physician to operate seven parallel documentation systems.

**The framing for ICP engagement:**
> "Seven regulatory authorities have a stake in your AI governance. No one has told you how to make them work together at your practice scale. That's the problem I'm solving."