# 04 — Compliance Context: Geneva / Switzerland Specific Regulatory
## Phase 04 C305 | Geneva Healthcare | Independent Physician / Small Group Practice (2–10 physicians)

---

## Regulatory Landscape: Geneva Independent Practice AI Accountability C305

### Primary Regulatory Frameworks

**1. Federal Act on Data Protection (FADP / nFADP)**
Active since 1 September 2023. Applies to all AI tools processing personal health data in independent practice context.

- **Art.5:** Lawful basis requirement — most AI tools activated through click-through vendor terms without evaluating which lawful basis applies to the practice's specific use case
- **Art.6:** Processing of sensitive personal data (health data under Art.5(c) nFADP) requires explicit consent or specific statutory basis. AI diagnostic support tools process health data — the statutory basis question is unresolved at independent practice scale
- **Art.8:** Profiling notification — AI documentation tools that infer patient characteristics trigger profiling obligations. The practice is the data controller. The obligation exists. The infrastructure to identify which records contain AI-inferred data does not
- **Art.9:** Third-party processor compliance — vendor sub-processor chains create Art.9 obligations the practice bears without having evaluated the processor chain. Vendor terms of service accepted by click-through do not satisfy Art.9 processor evaluation requirements
- **Art.21:** Automated decision obligations — AI diagnostic support tools may make or materially influence automated decisions. Patient right to: information that automated processing was used, right to explanation, right to request human review. Practice has no mechanism to identify which decisions were AI-influenced — making Art.21 compliance structurally inaccessible
- **Art.22:** Reversal right — patient can request reversal of AI-influenced decisions. Medical record integrity requirements conflict with casual record modification under Art.22. No Geneva protocol exists for managing this conflict in clinical documentation context
- **Art.63:** Personal criminal liability — willful FADP violations carry up to CHF 250,000 and imprisonment. Physician is personally liable for data protection decisions made by vendors on the physician's behalf through vendor terms accepted without review

**2. Medical Devices Ordinance (MedDO) + Swissdamed**
- **1 July 2026:** Mandatory registration deadline for medical devices placed on Swiss market under MedDO
- **Tier 1/Tier 2 classification thresholds:** Criteria written for manufacturers. Independent practices operating AI tools that may qualify as medical devices face a classification question with no proportionate assessment methodology at practice scale
- **Swissmedic enforcement:** No published enforcement protocol for independent practice non-registration. Deadline approaching with classification methodology absent
- **Voluntary registration:** Available since August 2025. Practices using AI diagnostic tools should assess registration obligation now, before mandatory deadline creates urgency pressure

**3. Therapeutic Products Act (TPA)**
- Governs AI-powered medical devices in Swiss market
- Swissmedic considers international guidelines (IMDRF, IVDR, EU MDR) when assessing AI tools
- Independent practices are "operators" in the supply chain — their obligations as operators vs. manufacturers' obligations as manufacturers is not clearly delineated for small practice scale

**4. FMH Professional Medical Standards**
- Human oversight principle stated: physician retains ultimate professional responsibility for all clinical decisions aided by AI
- **Critical gap:** Principle provides no operational endpoint — no documentation requirement, no review frequency, no competency definition, no audit trail expectation
- **Independent practice scale problem:** One person holds user, compliance, billing, and oversight roles simultaneously. FMH principle cannot be operationally fulfilled at small-practice scale without a documented methodology
- No FMH operational implementation guidance for 2-10 physician practice published as of C305 cycle date

**5. Article 321 Swiss Criminal Code (Professional Secrecy)**
- Professional secrecy obligation applies to all patient health data processed by the physician's practice
- AI tool data processing extends Art.321 CP obligations to data in vendor systems — data the physician cannot directly control
- **Vendor model training provision:** Vendor terms accepted by click-through often include provisions allowing vendor use of practice data for model training. This creates external data processing under Art.321 CP obligations the physician cannot evaluate or stop without losing AI tool functionality
- **Structural exposure:** The physician is criminally liable for professional secrecy violations in vendor systems they did not evaluate and cannot audit

**6. Council of Europe AI Convention (CAHAI)**
- Swiss Federal Council decided February 2025 to enable ratification
- Incorporation into Swiss law anticipated end of 2026
- Creates deployer obligations for AI systems in Geneva practice context
- **Present-tense exposure:** Obligations exist before implementing legislation — private law implications apply independently of criminal enforcement timeline
- **Dual compliance track:** AI Convention + nFADP creates two overlapping compliance tracks with potentially divergent evidence standards

**7. Medical Liability Carrier Attestation**
- Swiss medical liability carriers requesting AI governance attestation
- **Attestation designed for underwriting:** Carrier's evidence standard is designed for risk assessment, not professional liability defense
- **Personal liability creation:** Physician signature creates personal liability on carrier-defined terms without pre-signing review or Geneva-calibrated reference for what adequate governance means
- **Coverage ≠ personal protection:** Carrier may provide coverage for AI-related incidents while simultaneously using attestation evidence to challenge whether the physician's governance met the standard they certified to
- **Three-way evidence gap:** Attestation evidence standard ≠ FMH human oversight standard ≠ Art.63 criminal defense standard. No mapping service exists between these three evidentiary frameworks

---

## Specific Geneva Compliance Intersections

### Compound Exposure Points

**1. Art.21 + Art.22 (Automated Decision + Reversal Right)**
AI diagnostic support creates AI-influenced decisions. Art.21 requires disclosure and explanation. Art.22 requires reversal capability. Medical record integrity requirements prevent casual modification of clinical records. Two incompatible obligations exist simultaneously for every AI-influenced decision in the record. No Geneva protocol for managing this conflict. Practice is violating at least one obligation for every AI-assisted decision documented.

**2. Art.321 CP + Vendor Model Training + Art.63 Criminal**
Vendor terms accepted through click-through allow vendor use of patient data for model training. This extends Art.321 CP professional secrecy obligations to vendor-accessible data. The physician did not evaluate this provision. The physician cannot stop it without losing AI tool functionality. Art.63 personal criminal liability applies to willful violations. Physician's signature on AI tool acceptance creates personal criminal exposure for data processing decisions made by vendors.

**3. Carrier Attestation + FMH Human Oversight + Art.63**
Carrier attestation asks physician to certify adequate AI governance. Carrier's standard is undefined by the carrier. FMH human oversight standard is undefined by FMH. Art.63 criminal standard is defined by law but has not been tested in AI medical context. Three accountability frameworks with non-aligned evidence standards. One physician signature. No Geneva service mapping between them.

**4. Swissdamed + Vendor Contract Terms + Art.321 CP**
Swissdamed registration requires classification of AI tools as medical devices. Classification answer does not resolve vendor contract law exposure. Vendor terms may include data processing provisions creating Art.321 CP exposure independent of device classification. The registration obligation and the professional secrecy obligation are separate questions that the practice must answer independently.

**5. EHR Vendor Update + Physician Accountability Surface**
EHR vendors activating AI features through software updates. The physician's accountability surface expands through vendor product development decisions. No notification requirement exists. No update review protocol exists at independent practice scale. The physician is accountable for AI governance surface modifications they did not make and may not know about.

**6. Staff Delegation + AI Tool Decision Logic + FMH Personal Accountability**
Medical assistants using AI tools under physician supervision. FMH holds physician personally accountable for all decisions under their supervision. AI tool decision logic is not transparent to the supervising physician. "Adequate supervision" of AI-assisted staff work is not defined. The physician is accountable for AI decisions they cannot review or enumerate.

---

## Enforcement Reality

**FDPIC (present-tense active):** Enforcement posture active since May 2025 shift. FADP applies directly to AI systems processing personal data. No new legislation required for present-tense enforcement. Most independent practices operating under assumption that FADP enforcement is future risk — this assumption is now incorrect.

**Swissmedic:** July 2026 mandatory Swissdamed registration. Enforcement protocol for independent practice non-registration unpublished. Classification methodology absent at practice scale.

**FMH:** Human oversight principle stated. No enforcement mechanism published for independent practice. The principle creates accountability expectation without operational definition — generating maximum physician anxiety without providing actionable path.

**Carrier attestation:** Active in present-tense. Signing deadline creates urgency pressure. Pre-signing review absent from market. Physicians signing without understanding what they are certifying.

**Art.63 criminal:** Maximum exposure: CHF 250,000 + imprisonment for willful violations. Willfulness analysis under FADP in AI context involving vendor-accepted terms has not been tested. The question of whether accepting vendor terms without review constitutes "willful" non-compliance is open.

---

## Named Compliance Gaps

- No operational definition of "adequate human oversight" for independent practice
- No Art.21 automated decision disclosure infrastructure for independent practice
- No Art.22 reversal right protocol for clinical documentation context
- No Art.9 processor chain evaluation methodology proportionate to practice scale
- No FMH-compliant staff AI delegation supervision protocol
- No AI system update review protocol at practice scale
- No carrier pre-signing review calibrated to physician professional liability
- No Swissdamed classification assessment methodology for practice-operated AI tools
- No AI tool discontinuation documentation protocol
- No AI availability contingency plan for practice scale
- No Art.321 CP + vendor model training provision analysis service
- No mapping between carrier attestation standard, FMH human oversight standard, and Art.63 criminal standard

---

*Compliance context documented. Key C305 additions distinct from C214–C304 Phase 04: Art.21 + Art.22 automated decision conflict in clinical documentation, Art.321 CP + vendor model training + Art.63 criminal intersection, EHR vendor update as accountability expansion event, staff delegation + AI tool decision logic gap, and AI tool discontinuation documentation absence as compliance gap. Prior cycles named regulatory obligations without these specific compound intersection mechanisms and named compliance gaps.*
