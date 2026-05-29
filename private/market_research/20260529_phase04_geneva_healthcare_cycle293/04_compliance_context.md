# 04 — Compliance Context: Geneva Healthcare AI Regulatory Landscape

## Phase 04 — Cycle 293

---

## Geneva / Switzerland AI Regulatory Framework for Independent Medical Practices

---

## Federal Level: The Applicable Frameworks

### 1. nFADP (Bundesgesetz über den Datenschutz / Loi fédéral sur la protection des données)

**Status:** In force. Swiss Federal Act on Data Protection (nFADP / nFLPD) directly applicable to AI processing of personal health data in medical practices.

**Application to independent practice AI:**
- AI-assisted documentation processing patient health data triggers Art. 5(c) lawful basis requirement
- AI-generated inferences about patient health status may constitute profiling under Art. 8
- Automated decision obligations under Art. 21 apply when AIAssisted documentation affects patient care decisions
- AI model training on patient data may require separate lawful basis under Art. 6 (purpose limitation)
- Patient data transferred to AI vendor API processing creates Art. 9 third-party processor obligations
- Present-tense obligation: already applicable, no waiting for implementation

**Key provision:** Art. 63 — criminal liability for unauthorized processing of sensitive personal data. For physicians, AI processing without documented lawful basis may create personal criminal exposure.

**Enforcement posture:** FDPIC May 2025 shift to enforcement-live. Existing nFADP applies directly to AI. No regulatory gap to wait for. Enforcement is present-tense.

---

### 2. FMH Physician Oversight Requirements

**Source:** FMH (Foederatio Medicorum Helveticorum) — Swiss Medical Association

**Current state:** FMH has affirmed human oversight principle in AI-assisted medical practice. The principle is stated without operational definition.

**What FMH has said:**
- Human oversight of AI in medical practice is required
- Physician remains professionally responsible for decisions involving AI
- AI tool documentation does not substitute for physician review

**What FMH has NOT said:**
- What constitutes adequate documentation of human oversight
- What review frequency is required for AI-assisted decisions
- What competency standard AI-using physicians must demonstrate
- What the operational endpoint of "human oversight" looks like at independent practice scale
- How AI training should be documented for competency purposes

**Geneva coverage:** FMH guidance is national. No canton-specific Geneva FMH guidance exists for independent practice AI governance. FMH guidance de facto operative standard without proportionality filter for small practice.

---

### 3. Swissdamed — Swiss Medical Device and AI Classification Framework

**Status:** In force for medical devices. AI classification guidance under Swissdamed under development.

**Problem for independent practice:** Swissdamed classification criteria are written primarily for medical device manufacturers, not outpatient physicians. The Tier 1/Tier 2 classifications and SaMD (Software as a Medical Device) categories are not calibrated to independent practice scale.

**Practical consequence:** An independent physician using AI-assisted documentation in their EMR cannot determine whether their use falls under Swissdamed classification obligations. The framework structurally applies to manufacturers — the outpatient physician use case is not addressed.

**Status:** Compliance paralysis rather than compliance resolution. Independent practices cannot map themselves to the classification framework and receive no proportionate pathway for doing so.

---

### 4. HRA (Bundesgesetz über die Hilfe und die Leistungen der Krankenversicherung / Loi fédérale sur l'assurance-maladie) — Treatment Consent Framework

**Application:** HRA governs informed consent for medical treatment in Switzerland. Treatment consent forms are standard in independent practice.

**AI intersection:** AI-assisted treatment decisions may trigger enhanced consent obligations under HRA. When AI influences treatment recommendation, consent framework may require disclosure of AI involvement.

**Current state:** No published HRA guidance on AI-specific consent disclosure requirements for independent practice. No integration protocol between HRA treatment consent and AI-specific consent disclosure.

**Geneva coverage:** Canton-specific informed consent requirements under HRA framework exist. No Geneva guidance on AI-specific consent disclosure for independent practices.

---

### 5. MedDO (Medizinprodukteverordnung / Ordonnance sur les dispositifs médicaux) — Medical Device Ordinance

**Application:** Governs medical devices including AI-assisted diagnostic tools classified as medical devices. Applies when AI tool qualifies as medical device under MedDO classification.

**Key issue for independent practice:** Many EMR AI features may qualify as medical devices under MedDO without independent physician awareness. Unintended medical device deployment without proper documentation.

**Compliance gap:** Independent practices using AI features embedded in EMR without Swissdamed/MedDO classification evaluation are potentially operating non-compliant medical devices without awareness. No proportionate MedDO compliance pathway for independent practice AI use.

---

### 6. AI Convention (Council of Europe AI Convention)

**Status:** Ratification process ongoing in Switzerland. Deployer obligations may become applicable before Swiss domestic implementation legislation.

**For Geneva independent practices with EU nexus:** Convention deployer obligations may apply to Geneva medical practices rendering services to EU-resident patients or using EU-based AI vendors. Dual-compliance track (Convention + nFADP) creating compound accountability without Geneva-specific integration methodology.

**Current state:** Convention obligations unnamed in Geneva medical practice discourse. No Geneva medical association or canton guidance addressing AI Convention deployer obligations for independent practices.

---

### 7. Geneva Canton-Level Framework

**Service de la santé publique (Geneva Cantonal Health Office):** Primary cantonal health authority.

**Current state:** No canton-specific AI governance guidance issued for independent medical practices. No published guidance on carrier attestation evaluation, no AI documentation standard, no consent architecture protocol, no cantonal standard for physician AI oversight at independent practice scale.

**De facto effect:** FMH national guidance becomes the operative standard by default, with no Geneva calibration for independent practice scale. Institutional decisions at HUG/CHUV form effective standards through governance channels independent physicians do not access.

**Key cantonal gap:** The Service de la santé publique has issued no canton-specific guidance on:
- Carrier AI attestation evaluation for independent practices
- nFADP obligations specific to Geneva outpatient AI use
- Consent architecture for AI-assisted treatment in Geneva independent practice
- Documentation standard for AI-assisted medical records at independent practice scale
- Independent practice proportionate AI training documentation requirements

---

## Framework Interaction Map

```
Federal nFADP (data protection) — directly applicable
         ↓
Federal FMH (physician standards) — operative by default for physician accountability
         ↓
Federal Swissdamed/MedDO (device classification) — written for manufacturers, not independent practices
         ↓
Federal HRA (treatment consent) — consent framework without AI-specific integration guidance
         ↓
Canton de Genève Service de la santé publique — no independent practice AI guidance issued
         ↓
Geneva institutional (HUG/CHUV) — forming standards without independent practice participation
         ↓
Carrier attestation (underwriting-designed) — creates personal liability without Geneva-calibrated review
         ↓
Vendor AI terms (click-through acceptance) — activates AI features without physician evaluation
```

---

## Key Regulatory Gaps for Independent Practice

| Gap | Federal/Canton | Status |
|-----|---------------|--------|
| No independent-practice-proportionate AI oversight protocol | FMH (national, no canton-specific) | Guidance without operational definition |
| No carrier attestation pre-signing review pathway for physicians | Carriers + Canton | Service absent from market |
| No nFADP Art.21 response protocol for AI-assisted medical decisions | nFADP applicable | No Geneva physician-specific methodology |
| No three-consent integration protocol | HRA + nFADP + FMH | Structurally incompatible, no integration |
| No Swissdamed classification pathway for independent practice | Swissdamed + Canton | Framework inapplicable at practice scale |
| No AI Convention deployer guidance for EU-nexus independent practices | Council of Europe + Canton | Convention unnamed in Geneva medical discourse |
| No cantonal guidance on patient-generated AI content | Canton de Genève | Protocol absent for novel three-party category |
| No cantonal guidance on AI-assisted second opinion documentation | Canton de Genève | No documentation standard across practices |
| No institutional intelligence access path for independent practices | Canton de Genève + HUG/CHUV | Structural exclusion from standard formation |
| No AI training competency standard mapped to FMH requirements | FMH + Canton | Training standard absent, documentation standard absent |

---

## Compliance Context Key Warning

**The physician is personally named on the medical record. The accountability follows the name.**

This is the structural difference between this regulatory landscape and other sectors: the physician's personal professional license, personal reputation, and personal liability are directly engaged by AI-assisted documentation in ways that:
1. Are present-tense (nFADP, FMH obligations already operative)
2. Are personally enforceable (professional license at stake, not just corporate liability)
3. Cannot be delegated to vendor or carrier assessment frameworks designed for their own interests
4. Require documentation the frameworks do not provide methodology to produce
5. Apply in a multi-framework environment where no single authority has provided integration guidance

**The compliance question for Geneva independent practice is not "are we regulated?" — we are regulated by multiple frameworks simultaneously. The compliance question is "who is responsible for what when AI is involved, and what does the documentation that protects the physician's name on the record look like?"**

That question is unanswered by every applicable framework at independent practice scale.
