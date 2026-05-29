# 04 — Compliance Context: Geneva/Switzerland Healthcare AI

## Phase 04 | Cycle 295 | Geneva Healthcare ICP

---

## Geneva/Switzerland-Specific Regulatory Framework

### Primary Regulatory Framework Layer

**Layer 1: Federal Regulatory Foundation**

| Framework | Relevance to Independent Practice | Current Status |
|---|---|---|
| nFADP (SR 235.1) | Directly applicable; physician as data controller for patient records | In force; FDPIC Sept 2025 statement confirms AI treatments covered by existing nFADP without need for AI-specific legislation |
| MedDO (SR 810.31) | Governs medical devices including SaMD; AI clinical decision support tools may qualify | In force; Swissmedic implementing |
| IvDO (SR 812.21) | In vitro diagnostic medical devices; AI-assisted diagnostic tools may qualify | In force; Swissmedic implementing |
| HMG (SR 812.1) | Therapeutic products law; AI drug interaction tools may qualify | In force |
| FMH Professional Code | Physician professional conduct standards; human oversight obligations derived from here | FMH Code in force; AI-specific guidance minimal |
| Art.321 CP | Professional secrecy; AI systems processing patient data activate Art.321 obligations | In force; AI processing in vendor systems creates Art.321 exposure |

**Layer 2: Cantonal Regulatory Layer**

| Framework | Relevance to Independent Practice | Current Status |
|---|---|---|
| Canton de Genève — Profession médicale (K 3 03) | Genevan medical practice licensing and conduct | In force; no AI-specific cantonal guidance issued for independent practices |
| Service de la santé publique (Geneva) | Public health oversight; AI use in outpatient settings | No canton-specific AI guidance issued for independent practices |
| HUG Institutional Standards | De facto operative standards forming through institutional governance rooms | Independent practices measured against standards formed without their participation |

**Layer 3: Carrier/Insurance Layer**

| Framework | Relevance to Independent Practice | Current Status |
|---|---|---|
| Professional Liability Insurance | Carrier AI attestation emerging as coverage condition | Third-generation attestation arriving in healthcare 6–12 months behind legal/finance |
| FMH Professional Liability | Personal physician liability for AI-assisted decisions | No FMH-calibrated standard defining what AI oversight documentation satisfies obligations |
| Carrier Underwriting Standards | Carrier AI questionnaires defining "adequate AI governance" | Underwriting-designed standard; no Geneva-medical-calibrated pre-signing review service |

**Layer 4: Institutional Standard-Formation Layer (Informal)**

| Standard-Formation Channel | How Standards Form | Independent Practice Access |
|---|---|---|
| HUG AI Governance Decisions | Formed through institutional governance rooms | Not transmitted to independent sector; decisions accessible to carriers/legal proceedings |
| CHUV AI Decisions | Same as HUG | Same exclusion |
| FMH Working Groups | FMH guidance documents | General guidance without operational endpoint for small practice |
| GHF 2026 Conference | Awareness event; no operational output | Participation limited; outcomes not transmitted through formal channels |
| Geneva Medical Society Discussions | Informal circuit | Participation requires physical presence in Geneva institutional circles |

---

## Key Regulatory Tensions for Geneva Independent Practice

### Tension 1: Human Oversight Principle vs. Operational Impossibility

**The regulatory text:** FMH has stated that physicians must maintain "human oversight" of AI tools in clinical practice.

**The structural problem:** Human oversight requires operational definition — what does it mean in a two-physician independent practice running 30 patient encounters per day with AI embedded in the EHR system? The FMH principle provides no endpoint, no documentation requirement, no review frequency, no competency standard.

**Why this is specifically a Geneva independent practice problem:** In institutional settings, human oversight can be operationalized through role differentiation (AI user, AI supervisor, AI governance committee). In a two-physician practice where the same physician is the AI user, the AI supervisor, the billing responsible, and the compliance responsible, human oversight is structurally impossible to operationalize under current guidance.

**The regulatory gap:** No Geneva authority has published proportionate human oversight requirements for independent medical practice scale. The guidance vacuum creates a compliance impossibility paradox: physicians are professionally obligated to provide human oversight but have no defined pathway to satisfy that obligation at their practice scale.

---

### Tension 2: Swissdamed Classification vs. Independent Practice Capacity

**The regulatory text:** Swissdamed establishes a tiered classification system for AI/ML-based medical devices (Tier 1: low risk, Tier 2: elevated risk).

**The structural problem:** Classification criteria are written for manufacturers and institutional deployers. The tier thresholds — what constitutes Tier 1 vs. Tier 2 vs. mandatory Swissmedic review — have operational consequences that independent outpatient physicians cannot navigate without specialized regulatory expertise.

**The compliance paralysis:** An independent Geneva physician using an AI clinical decision support tool cannot determine with confidence whether their tool is Tier 1 (no further action), Tier 2 (certain obligations), or requires Swissmedic engagement. The classification pathway is inaccessible to independent practice scale.

**The regulatory gap:** No Geneva-calibrated Swissdamed classification pathway exists for independent outpatient practice. Physicians are defaulting to either ignoring the classification question or assuming their vendor's "CE/FDA cleared" status resolves the question — which it does not for Swissdamed purposes.

---

### Tension 3: nFADP Professional Obligations vs. Vendor System Architecture

**The regulatory text:** Art.321 CP creates professional secrecy obligations for patient data. nFADP creates data controller obligations for patient records. Physicians bear both simultaneously.

**The structural problem:** AI tools processing patient data operate through vendor infrastructure — servers, model training pipelines, inference systems — outside the physician's direct control. The physician's Art.321 CP obligations extend to data they process, including through vendor systems. Vendor terms accepted through click-through often include data usage provisions for model training and benchmarking that the physician has not evaluated against Art.321 CP obligations.

**The regulatory gap:** No Geneva-calibrated analysis maps the interaction between physician Art.321 CP obligations and vendor AI system architecture for independent practice. The FDPIC has stated that nFADP applies directly to AI treatments but has not published guidance for physicians on how to evaluate vendor AI system architecture against professional secrecy obligations.

---

### Tension 4: Patient nFADP Rights vs. Medical Record Integrity

**The regulatory text:** nFADP Art.22 grants patients the right to request reversal of automated decisions. Art.20 grants access rights. Art.5 requires lawful basis for processing.

**The structural problem:** AI-assisted clinical documentation creates records where specific decisions were AI-influenced. If a patient exercises Art.22 reversal rights requesting that an AI-assisted decision be reversed in their record, the physician faces:
1. Art.22 obligation to execute the reversal
2. Medical record integrity obligation requiring that records not be casually altered without clinical process
3. No Geneva protocol for proportionate clinical notation satisfying Art.22 without altering medical record architecture

**The regulatory gap:** No Geneva medical body or FDPIC guidance has resolved how Art.22 reversal rights interact with medical record integrity requirements for AI-assisted clinical decisions. The two obligations are simultaneously applicable and structurally incompatible at the independent practice level.

---

### Tension 5: Carrier Attestation vs. FMH Professional Standards

**The regulatory text:** Carrier AI attestation forms require physicians to warrant "adequate AI governance controls" in their practice.

**The structural problem:** Carrier attestation is designed for underwriting risk evaluation. FMH professional standards require human oversight. The two frameworks use different definitions of adequate, different evidence standards, and different accountability logics. A physician satisfying carrier attestation may not satisfy FMH obligations. A physician satisfying FMH obligations may not satisfy carrier attestation requirements.

**The regulatory gap:** No Geneva authority has published an analysis of how carrier AI attestation requirements interact with FMH professional accountability standards for independent practice. Physicians are signing carrier instruments committing to undefined adequacy standards without understanding the relationship between carrier and professional accountability frameworks.

---

### Tension 6: Data Processing Register Obligation vs. Unknown AI Surface

**The regulatory text:** nFADP does not explicitly require a data processing register for practices below the 250-employee threshold, but Art.5 accountability obligations require physicians to know what data processing occurs in their practice.

**The structural problem:** In an independent practice where AI arrived through vendor updates, staff activation, and EHR feature roll-outs — without a conscious governance decision — the physician cannot accurately complete a data processing register because they do not fully know what AI is processing patient data.

**The regulatory gap:** No Geneva guidance addresses the specific problem of data processing register construction for practices where AI accumulation occurred without governance decision. The standard register-building methodology assumes knowledge of processing activities; independent practices often lack this knowledge.

---

## FDPIC September 2025 Enforcement Posture Signal

**Key statement:** "En Suisse aussi, l'intelligence artificielle (IA) investit de plus en plus le quotidien de la population. Le PFPDT rappelle que le droit suisse de la protection des données est directement applicable aux traitements de données recourant à l'IA."

**What this means for independent practice:**
- Existing nFADP applies directly to AI treatments; no regulatory gap exists that AI-specific legislation would fill
- Enforcement is possible now under existing framework — FDPIC is not waiting for AI-specific legislation
- The "guidance first" posture has shifted toward live enforcement possibility
- Independent practices using AI tools are subject to existing nFADP obligations without Geneva-calibrated implementation guidance

**What this signal creates for independent practice:**
The FDPIC signal removes the "we're waiting for AI-specific rules" defense. Independent practices now face the combination of:
1. FDPIC enforcement possibility (existing nFADP applies directly)
2. No Geneva-calibrated AI governance pathway for independent practice
3. Carrier attestation arriving with personal signature requirements
4. FMH professional accountability obligations with no operational definition

The gap between existing obligations and available implementation guidance is now acute — and the FDPIC has signaled enforcement is live.

---

## Timeline Intelligence

**Currently arriving (Q2 2026):**
- Carrier AI attestation in Geneva healthcare (6–12 months behind legal/finance)
- FDPIC enforcement posture live under existing nFADP
- Swissdamed classification pathway accessible but not calibrated for independent practice

**Building (H2 2026):**
- HUG/CHUV institutional AI governance decisions forming standards independent practices will be measured against
- FMH working group outputs (if any) — timeline unclear
- Carrier iteration on healthcare attestation — standards crystallizing through carrier underwriting evolution

**Unresolved (no timeline):**
- Geneva cantonal AI guidance for independent practice
- FMH operational endpoint definition for human oversight at small-practice scale
- Geneva-calibrated pre-signing review service for medical practitioners
- Patient AI consent framework for independent practice
