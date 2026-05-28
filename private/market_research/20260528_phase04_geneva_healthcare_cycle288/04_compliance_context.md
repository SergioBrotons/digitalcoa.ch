# Phase 04 Geneva Healthcare — Compliance Context (Cycle 288)

## Research Framework Note
6 NET-NEW findings distinct from C214–C287 Phase 04. Building on prior cycle findings on Swissdamed deadline, nFADP Art.22 DPIA obligation, MedDO classification, FMH physician responsibility guidance gap, Swiss hosted vs full data chain transparency, human oversight documentation as discrete category.

---

## Compliance Context 1: Swissdamed SaMD Classification Produces Three-Tier Independent Practice Exposure Map

**Framework:** Swissmedic Ordinance on In Vitro Medical Devices and Medical Devices (MedDO) + Swissdamed implementation

Swissdamed creates three-tier exposure classification for AI tools used by independent practices:

**Tier 1 — SaMD with serious incident obligations (HIGH risk):** AI tools intended to treat or diagnose diseases, provide critical treatment recommendations, or support clinical decision-making in serious conditions. No December 31, 2026 grace period. Immediate July 1, 2026 registration required. Independent practices using AI diagnostic imaging tools, AI symptom triage tools, or AI-assisted clinical decision support for serious conditions face immediate registration obligations.

**Tier 2 — SaMD without serious incident obligations (MEDIUM risk):** AI tools providing information to support clinical decisions without serious condition treatment or diagnosis. December 31, 2026 grace period applies. AI scheduling tools, AI documentation assistants, AI patient communication tools may fall here.

**Tier 3 — Non-SaMD AI tools (LOW risk):** AI tools that do not meet SaMD definition because they do not provide information用于医疗目的. AI billing tools, AI administrative tools generally do not require Swissdamed action.

**Geneva-specific compliance burden:** The classification determination requires technical analysis that independent practices cannot perform without external support. The practical exposure: practices using Tier 1 AI tools without Swissdamed registration face enforcement exposure from July 1, 2026. Practices using Tier 2 AI tools may be operating in compliance uncertainty during the grace period. No accessible Geneva service offers classification analysis proportionate to independent practice scale.

**NET-NEW finding:** Swissdamed three-tier exposure map produces specific compliance burden distribution that creates structural service opportunity. Prior cycles identified the Swissdamed deadline and the classification question; this finding provides the specific three-tier framework for mapping independent practice AI tool portfolios against registration obligations — enabling advisory service architecture that prior cycles could not support without the tier structure.

---

## Compliance Context 2: FMH Professional Standards for AI-Assisted Diagnosis Have No Operational Definition

**Framework:** FMH Physician Code of Conduct + FMH guidelines on medical devices and digital health

FMH has published principle-level acknowledgment that physicians are accountable for AI-assisted clinical decisions. The professional standards framework requires: (a) physician responsibility for clinical decisions cannot be delegated to AI systems; (b) physician must maintain ability to independently evaluate AI-generated recommendations; (c) documentation must allow reconstruction of physician's analytical contribution.

However, FMH has not published operational definitions of what these principles require at the level of specific clinical workflows, specific AI tool configurations, or specific practice scales. The gap between principle and implementation creates a specific compliance exposure: physicians following FMH guidance cannot confirm their compliance because the guidance does not define the compliance endpoint.

**Geneva-specific compliance burden:** FMH is the national professional body. Its standards apply in Geneva and Vaud without Geneva-specific calibration. Independent practices have no access to Geneva-canton-specific interpretation of FMH's AI accountability principles. The compliance determination must be made by each practice independently, against standards that do not define their own application.

**NET-NEW finding:** FMH operational definition gap creates specific compliance architecture burden distinct from prior cycle findings about FMH guidance absence. C287 Phase 04 Finding 4 named FMH guidance absence; this finding provides the specific compliance architecture mechanism — principle without operational definition produces unmeasurable compliance that nevertheless creates professional liability exposure when something goes wrong.

---

## Compliance Context 3: nFADP Art.22 DPIA Obligation Activation Chain for AI Medical Documentation Tools

**Framework:** Swiss Federal Act on Data Protection (nFADP) + FDPIC guidance

nFADP Art.22 requires Data Protection Impact Assessment (DPIA) before processing that presents high risk to privacy. AI tools processing patient data in medical practice contexts present high risk by definition: patient health data is special category data under Art. 5(c) nFADP, and AI processing that influences clinical decisions adds additional risk factors.

The DPIA obligation activation chain for independent practices:

1. **Trigger determination:** Does the AI tool process patient data? (Yes, if AI assists with diagnosis, documentation, or clinical decision support involving patient information)
2. **Risk assessment:** Does the processing present high risk to privacy? (Patient health data + AI inference + automated decision influence = high risk by standard FDPIC criteria)
3. **DPIA requirement:** If high risk, DPIA must be completed before processing begins
4. **Documentation:** DPIA must be documented, maintained, updated when processing changes
5. **FDPIC notification:** High-risk processing may require FDPIC notification before commencing

**Geneva-specific compliance burden:** The FDPIC has identified healthcare as a priority enforcement sector in its 2024/2025 annual report. Independent practices with AI-assisted documentation tools are processing patient data through AI systems that may not have been evaluated against the Art.22 DPIA obligation before use began. The enforcement priority signal means FDPIC is actively looking for non-compliance in healthcare — not as a future concern but as present-tense enforcement focus.

**NET-NEW finding:** DPIA activation chain mapping for AI medical documentation tools connecting patient data → health data special category → AI inference → high risk → mandatory DPIA → enforcement priority healthcare sector produces specific compliance architecture requirement distinct from prior cycle DPIA obligation naming. C287 Phase 04 identified the DPIA obligation; this finding provides the specific activation chain enabling advisory service to structure DPIA review against documented obligation pathway.

---

## Compliance Context 4: Carrier Third-Generation AI Attestation Produces Physician Personal Liability Against Undefined Standard

**Framework:** Professional liability insurance carrier underwriting requirements

Carrier third-generation AI attestation questionnaires require physician signature committing to adequacy against carrier-defined standards — without publishing what those standards require. The physician's personal liability exposure:

1. **Attestation signature:** Physician signs personal commitment to AI governance adequacy
2. **Undefined standard:** Carrier does not publish criteria defining adequate AI governance for independent practices
3. **Personal liability:** Signature creates personal liability for commitments made without defined compliance endpoint
4. **Enforcement pathway:** Carrier enforces attestation through questionnaire updates on renewal schedule — not through published guidance
5. **Professional liability interaction:** Carrier attestation commitments interact with FMH professional standards, potentially creating exposure that FMH guidance does not address

**Geneva-specific compliance burden:** No Geneva market service offers pre-signing review of carrier attestation from the physician's personal liability perspective. The physician signs the attestation as a condition of insurance renewal without understanding what personal commitments they are making, what the undefined adequacy standard requires, or how the attestation interacts with their FMH professional obligations.

**NET-NEW finding:** Carrier third-gen attestation creating personal liability against undefined standard produces specific compliance architecture burden distinct from prior cycle carrier attestation findings. C287 Phase 04 identified carrier attestation as de facto operative standard; this finding provides the specific mechanism — undefined adequacy standard + personal signature + no pre-signing review = physician personal liability instrument — enabling advisory service to structure pre-signing review methodology.

---

## Compliance Context 5: Swiss Hosted Platform ≠ Swiss Data Chain Transparency for Medical Records

**Framework:** nFADP Art.4 data processing principles + FMH medical record integrity standards

"Swiss-hosted" AI platform selection has emerged as a primary due diligence criterion for Geneva independent practices concerned about patient data protection. The assumption: Swiss server location = compliance with Swiss data protection obligations.

The assumption is structurally incorrect. Swiss server location addresses one element of data residency — where data is stored. It does not address:
- Where data is processed (AI model inference may route data through third-party processing infrastructure)
- Who has access to data within the vendor organization
- What data is used for model training or improvement
- What third-party sub-processors are involved in the AI processing chain
- How data flows between the vendor's Swiss infrastructure and global AI processing systems

A "Swiss-hosted" platform may route patient data through non-Swiss infrastructure for AI processing without disclosing this to the independent practice. The practice selecting on data residency grounds may be operating under false adequacy assumptions about their patient data protection.

**Geneva-specific compliance burden:** Swiss medical record integrity standards under FMH require that patient data processing be documented and verifiable. An AI documentation tool that routes patient data through undisclosed third-party processing infrastructure may be in violation of FMH's medical record integrity requirements without the practice's knowledge.

**NET-NEW finding:** Swiss hosted platform ≠ full data chain transparency creates specific documentation gap distinct from prior cycle data residency findings. C287 Phase 04 Finding 5 identified the "Swiss hosted" vs full data chain transparency gap; this finding provides the specific mechanism — Swiss server location only covers data-at-rest, not processing chain — enabling advisory service to structure data chain transparency review methodology for independent practices.

---

## Compliance Context 6: Human Oversight Documentation Requirements Not Defined in Swiss Medical Law

**Framework:** FMH professional standards + MedDO + Swissdamed

"Human oversight" of AI-assisted medical decisions is required by Swiss medical professional standards and is referenced in Swissdamed registration requirements for SaMD. However, Swiss medical law does not define what constitutes adequate human oversight for AI-assisted diagnosis, what documentation human oversight must produce, or what the physician's documentation obligation is when AI output is reviewed and either accepted or overridden.

The practical compliance gap: independent physicians using AI diagnostic support tools cannot document their human oversight in a way that satisfies any published Swiss standard, because no published Swiss standard defines what documentation is required. When an incident occurs and patient records are reviewed, the records will be evaluated against standards that Swiss courts and FMH disciplinary bodies will define retroactively — based on what the physician should have done, not based on what any published guidance said to do.

**Geneva-specific compliance burden:** No Geneva-based service offers human oversight documentation protocol for independent practices. The documentation gap is not addressable through generic AI governance policy documents — it requires specific methodology for how a physician documents their independent evaluation of AI-generated diagnostic suggestions in a way that will survive retrospective review against standards defined after the fact.

**NET-NEW finding:** Human oversight documentation absence creating present-tense accountability exposure with retroactive standard definition is distinct from prior cycle human oversight findings. C287 Phase 04 identified human oversight documentation as a discrete service category; this finding provides the specific mechanism — no published Swiss standard defines what human oversight documentation must contain — enabling advisory service to structure proportionate methodology for independent practice human oversight documentation without waiting for regulatory definition.

---

## Summary: 6 NET-NEW Compliance Context Findings (Cycle 288)

1. Swissdamed three-tier exposure map enabling independent practice AI tool portfolio classification
2. FMH operational definition gap creating unmeasurable compliance with retroactive accountability
3. nFADP Art.22 DPIA activation chain mapping for AI medical documentation tools
4. Carrier third-gen attestation personal liability mechanism against undefined adequacy standard
5. Swiss hosted platform vs full data chain transparency as structural documentation gap
6. Human oversight documentation requirements absent from Swiss medical law creating retroactive accountability

All 6 findings are distinct from C214–C287 Phase 04 compliance context by providing specific mechanism identification enabling advisory service architecture development.