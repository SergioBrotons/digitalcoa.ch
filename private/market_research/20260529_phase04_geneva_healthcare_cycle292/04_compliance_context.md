# Compliance Context: Geneva Healthcare AI Accountability
## Phase 04 C292 — Geneva Independent Practice

---

## Geneva / Switzerland Specific Regulatory Landscape

### 1. FMH Professional Obligations for AI

**The principle:** The FMH (Foederatio Medicorum Helveticorum) has stated that human oversight must be maintained over AI in clinical practice. Physicians remain professionally accountable for decisions assisted by AI tools.

**The gap:** Human oversight is stated as a principle without an operational endpoint. No FMH guidance defines:
- What documentation constitutes evidence of human oversight
- What review frequency constitutes adequate oversight
- What competency the physician must demonstrate regarding AI tools they use
- How AI's role in a clinical decision should be documented in the medical record

**The consequence:** The FMH principle provides no operational guidance for the independent physician. Compliance with the principle cannot be evaluated because no one knows what compliance looks like. The principle is real (enforceable through professional liability) but provides no roadmap.

**Geneva-specific dimension:** No canton-specific FMH guidance exists for Geneva independent practices. The de facto operative standard is whatever the carrier's questionnaire asks for — which is designed by underwriting teams, not calibrated to FMH professional obligations.

### 2. nFADP Application to Medical AI

**The regulation:** The Swiss Federal Act on Data Protection (nFADP, in force since September 2023) applies to all personal data processing, including AI-assisted clinical decisions.

**Key obligations relevant to independent practices:**

**Art. 6 — Lawful basis:** Processing must have a valid legal basis. For AI tools processing patient data, the basis is typically the treatment relationship (contract) or legitimate interest. The physician must be able to demonstrate which basis applies and that it has been evaluated.

**Art. 8 — Profiling notification:** AI-assisted clinical decision-making may constitute profiling under nFADP. Patients have the right to be notified when automated profiling significantly affects them. For diagnostic AI, this likely applies.

**Art. 13 — Explanation obligation:** Patients have the right to request an explanation of how AI assisted in a decision about them. The physician must have a pre-built response architecture — they cannot construct it at the moment of request.

**Art. 21 — Automated decision-making:** Patients have the right not to be subject to solely automated decisions that significantly affect them. AI diagnostic support likely triggers this right. The physician must have a documentation system demonstrating human involvement in the decision.

**The consequence:** Each obligation requires pre-built architecture. Retroactive construction is structurally impossible. The physician who has not built these systems is in present-tense non-compliance.

**Geneva-specific dimension:** The FDPIC (Federal Data Protection and Information Commissioner) posture shifted in May 2025 from guidance-first to enforcement-live. The nFADP applies directly to AI — no regulatory gap. Enforcement is possible now. Independent practices are not in a grace period.

### 3. Swissdamed Classification for Medical AI Tools

**The framework:** Swissdamed is Switzerland's medical device registry. AI clinical decision support tools may be classified as medical devices requiring Swissdamed registration depending on their intended use and risk profile.

**The gap:** Tier 1/Tier 2 classification criteria are written for manufacturers, not for outpatient physicians who use AI tools. The independent physician cannot determine whether their AI scribe, diagnostic support tool, or triage system requires Swissdamed classification. The classification question creates compliance paralysis rather than compliance resolution.

**The consequence:** Most independent practices have not evaluated whether their AI tools require Swissdamed classification. Carrier questionnaires are beginning to ask about this. The physician who cannot answer has an exposure they don't know how to categorize.

**Geneva-specific dimension:** No Geneva cantonal authority has published guidance on Swissdamed classification for independent practices using AI tools. The classification decision must be made by the physician without local support.

### 4. Medical Device Ordinance (MedDO) and AI

**The ordinance:** The Medical Device Ordinance (MedDO) implements EU Medical Device Regulation concepts in Swiss law. AI tools used in clinical contexts may fall under MedDO classification requirements.

**The intersection:** If an AI tool is classified as a medical device, the physician using it has supplier/processor obligations in addition to their clinical accountability. The dual-role — clinical user and device operator — creates overlapping accountability structures the physician has not mapped.

**The gap:** No Geneva service offers MedDO compliance mapping for independent practices. The physician does not know which of their AI tools trigger MedDO obligations.

### 5. Carrier Medical Malpractice AI Attestation

**The instrument:** Medical malpractice carriers are deploying AI governance questionnaires as part of renewal processes. The questionnaire asks about AI tool inventory, human oversight practices, documentation systems, and consent architecture.

**The design problem:** The questionnaire is designed by carrier underwriting teams to evaluate risk, not to help the physician document adequate governance. Answering the questionnaire requires governance infrastructure the physician has not built. The questionnaire creates evidence of non-compliance for the carrier without providing a path to compliance.

**The personal liability problem:** The MD signs the attestation personally. The signature commits to "adequate AI governance controls" without defining what adequate means. The physician is personally committing to an undefined standard with no Geneva-calibrated definition available.

**The coverage problem:** Carrier attestation and carrier coverage are different questions. Signing the attestation does not confirm that AI-assisted clinical decisions are covered under the physician's existing policy. The gap between attestation adequacy and coverage adequacy is unexamined by most independent practices.

### 6. EU AI Act Extraterritorial Application

**The regulation:** The EU AI Act applies to AI systems used in EU contexts. Geneva practices with EU patient populations or EU institutional connections may fall under EU AI Act obligations.

**The gap:** EU AI Act Article 4 requires deployers of high-risk AI systems to ensure adequate AI literacy. This obligation has been live since February 2025. No Swiss equivalent exists. The Geneva independent physician with EU nexus may have an unnamed extraterritorial obligation.

**The timing:** The EU AI Act literacy obligation is present-tense, not future. Geneva practices that have not evaluated whether their AI tools constitute high-risk AI systems under EU classification may be non-compliant with an obligation that is already active.

### 7. Geneva Cantonal Health Authority Guidance Vacuum

**The absence:** The Service de la santé publique (Geneva cantonal health authority) has issued no canton-specific AI guidance for independent medical practices.

**The consequence:** Institutional decisions at HUG (Hôpitaux Universitaires de Genève) and CHUV (Centre Hospitalier Universitaire Vaudois) are forming effective standards without methodology transmission to independent practices. The standards are being set by governed rooms the independent physician does not have access to.

**The mechanism:** Institutional AI governance decisions at major hospitals create precedent that carriers, patients, and legal challengers can reference. Independent practices are building AI governance in isolation from the institutional decisions that are shaping the operative standard.

### 8. The Three-Consent Architecture Problem

**The structural gap:** Informed consent for treatment, informed consent for data processing under nFADP, and AI-specific consent disclosure are treated as a single consent category. They require structurally different architecture.

**Treatment consent:** What the patient agrees to clinically — procedures, interventions, risks.

**nFADP data processing consent:** What the patient agrees to regarding how their data is processed by AI systems — rights under data protection law.

**AI-specific consent:** What the patient should understand about how AI assisted in their care — the role of AI, its limitations, what happens if AI is wrong.

**The gap:** No Geneva consent form integrates all three. Standard practice consent forms do not address AI's role. nFADP consent forms do not address clinical context. The structural gap means the physician cannot demonstrate that the patient understood what AI did in their care.

**The liability consequence:** When a patient challenges an AI-assisted decision, the physician cannot produce evidence that the patient understood AI's role. The absence of integrated three-consent architecture is a present-tense evidentiary gap.

---

## Compliance Timeline Reality

| Obligation | Status | Enforcement Posture |
|------------|--------|---------------------|
| nFADP Art.6 lawful basis | Active | FDPIC enforcement-live since May 2025 |
| nFADP Art.8 profiling notification | Active | FDPIC enforcement-live |
| nFADP Art.13 explanation | Active | FDPIC enforcement-live |
| nFADP Art.21 automated decisions | Active | FDPIC enforcement-live |
| FMH human oversight principle | Active | Professional liability |
| Swissdamed classification | Active | Manufacturer-focused, physician access unclear |
| EU AI Act Art.4 literacy | Active (EU nexus) | EnforcementLive for applicable firms |
| Carrier AI attestation | Active | Carrier renewal requirement |

---

## Key Compliance Insight

**The documentation window is present-tense.** Every obligation above requires architecture built before the accountability moment arrives. The physician who waits for enforcement action or carrier inquiry to build documentation is building after the window closes.

**Retroactive construction is structurally impossible.** Medical records are authoritative. AI's role in their creation is not documented. The physician cannot reconstruct what AI contributed when challenged — the reconstruction window closed when the record was signed.

**The Geneva guidance vacuum amplifies exposure.** Without canton-specific guidance, the physician operates without a local standard. Carrier questionnaires become the de facto operative standard — designed by underwriting, not by FMH or cantonal authority.

---

*Document: Compliance Context — Phase 04 C292*
*Output: /digitalcoa_staging/private/market_research/20260529_phase04_geneva_healthcare_cycle292/*