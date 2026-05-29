# Compliance Context: Geneva Healthcare — C290 Phase 04

## Geneva / Switzerland Specific Regulatory Environment

---

## Regulatory Landscape Overview

### Primary Regulatory Frameworks

**1. FMH — Swiss Medical Association**
The primary professional standards-setting body for Swiss physicians. Issues professional codes, ethical guidelines, and guidance on professional conduct.

Key AI-relevant positions:
- FMH has published guiding principles on AI in medicine, affirming physician responsibility for AI-assisted decisions
- Oversight obligation is principle-level without operational endpoint: the FMH states physicians must maintain oversight but provides no methodology for what oversight looks like at small independent practice level
- FMH circulars reference AI oversight in the context of hospital and institutional settings, leaving independent practices without calibrated guidance
- FMH is not a regulatory authority with enforcement power; its guidance informs carrier and cantonal interpretation
- No FMH guidance specifically addresses AI attribution in medical records or how to document AI-assisted clinical decisions

Medical-ethical dimension:
- The FMH code requires physicians to maintain professional authority over medical decisions
- AI assistance does not change the physician's accountability under this principle
- The principle does not translate to a documentation requirement for AI-assisted decisions
- This creates an accountability gap: the physician is responsible without a defined documentation pathway

---

**2. Swissdamed — Swiss Federal Council Medical Device Framework**
The Swiss regulatory framework implementing aspects of EU MDR for medical devices used in Switzerland.

Key AI-relevant positions:
- Swissdamed classifies AI-based medical devices as software-based medical devices
- Registration thresholds apply primarily to manufacturers and device distributors, not outpatient independent physician practices using AI tools for clinical decision support
- The Tier 1/Tier 2 distinction has operational consequences for AI tool classification that are inaccessible to independent practices — the classification criteria are designed for manufacturers
- No published pathway exists for an independent Geneva physician to determine whether their AI tools require Swissdamed registration
- Compliance pathway is manufacturer-oriented, not physician-practice-oriented

Implication for independent practices:
- Swissdamed creates a compliance paralysis rather than a compliance pathway for independent physicians
- The framework assumes a compliance department, legal counsel, and technical documentation capacity that no small independent practice has
- The physician is technically covered by the framework but cannot navigate it without external expertise
- Using an AI tool that "should be" Swissdamed-registered without registration creates exposure the physician cannot assess

---

**3. MedDO — Medical Device Ordinance (Medizinprodukteverordnung)**
Swiss ordinance implementing EU medical device regulations for Switzerland, applicable to AI-based clinical decision support tools used by physicians.

Key AI-relevant positions:
- AI-based clinical decision support tools may qualify as MedDO-classified devices depending on intended use and risk classification
- Professional use of MedDO-classified devices creates obligations on the professional user that are distinct from the manufacturer's obligations
- No clear Geneva-calibrated interpretation exists for what MedDO obligations apply to an independent physician using an AI tool in their outpatient practice
- The ordinance creates obligations without providing a compliance pathway accessible to independent practices
- Verification of vendor regulatory status (whether the AI tool has appropriate MedDO clearance) is technically the physician's responsibility — no practical mechanism exists for independent physicians to independently verify

---

**4. nFADP — Swiss Federal Act on Data Protection (revised)**
Switzerland's data protection framework, aligning with GDPR-equivalent standards. In force since September 2023.

Key AI-relevant positions:
- nFADP applies to all processing of personal data, including patient data processed through AI systems
- Art.6 lawful basis requirements for data processing are relevant when AI tools process patient data — the physician is the data controller
- Art.9 creates processor obligations when a third party processes patient data on the physician's behalf — cloud AI service providers are third-party processors
- DPIA (Data Protection Impact Assessment) obligations apply to high-risk processing — AI-assisted medical records likely qualify but no prescriptive threshold has been published for physician practices
- No Geneva-calibrated DPIA template or methodology exists for small independent medical practices
- nFADP Art.21 addresses automated decisions — medical decisions are likely outside the scope of mandatory human review (Art.21 para 2 exceptions for medical purposes), but the interaction with professional liability creates accountability without clear data protection guidance
- The nFADP/FMH professional secrecy intersection creates dual-framework exposure: physician is simultaneously bound by FMH professional secrecy obligations and nFADP data protection obligations without a synthesis document

---

**5. Service de la santé publique — Geneva Cantonal Health Authority**
The Genevan cantonal authority responsible for health policy, professional practice oversight, and public health coordination.

Key AI-relevant positions:
- No canton-specific guidance has been published on AI deployment for independent medical practices
- No Geneva cantonal practical standard exists for small practice AI governance
- Geneva institutional AI governance (through the Medical AI Gateway) creates effective standards for institutional actors that are not transmitted to independent practices
- No Geneva protocol addresses physician AI accountability for small practice scale
- The canton directs independent physicians to federal guidance (FMH, Swissdamed, MedDO) — creating an information loop with no Geneva-calibrated interpretation

Implication:
- Physicians are left to navigate federal frameworks with no local practical reference point
- Institutional decisions at cantonal level form standards that apply to independent practices without methodology transmission
- The cantonal guidance vacuum makes FMH guidance the de facto operative standard for independent physicians — where no proportional interpretation exists

---

**6. Carrier AI Attestation Instruments**
Private insurance carriers operating in Geneva professional liability market.

Key AI-relevant positions:
- No Geneva carrier has published a specific AI coverage adequacy standard
- AI attestation questionnaires are designed for underwriting risk evaluation, not professional accountability protection
- The forms are written by carrier legal teams, designed to minimize carrier risk, with no input from FMH or cantonal medical authorities
- Carrier AI attestation operates as de facto operative standard without professional body validation
- Pre-signing review service is absent from the Geneva market — no service offers independent analysis of carrier forms before physician signature
- The attestation creates personal liability exposure without defining what adequate governance looks like

---

## Key Compliance Intersection Points

### Intersection 1: FMH + nFADP + Swissdamed
Physician deploys AI tool in practice:
- FMH: physician remains responsible for medical decision oversight
- nFADP: physician is data controller for patient data processed through AI tool — requires lawful basis, likely processor agreement with AI vendor
- Swissdamed: AI tool may require registration or classification pathway the physician cannot independently verify

Three frameworks creating simultaneous obligations with no coordinated methodology for small practice compliance.

### Intersection 2: FMH + Carrier Attestation
Carrier sends AI attestation form:
- FMH: no published standard defining what adequate AI oversight looks like at small practice level
- Carrier: form requires physician to attest to AI governance adequacy with no reference standard
- Physician: signs personal attestation without pre-signing review mechanism

Creates structural exposure: physician signs personal attestation to undefined adequacy standard written by carrier legal team.

### Intersection 3: MedDO + Vendor Contract Terms
Vendor provides software with AI features:
- MedDO: physician responsible for verifying device regulatory status — technically
- Vendor: contract terms activate AI terms through click-through acceptance
- Physician: cannot independently verify vendor regulatory compliance AND cannot practically opt out of AI features without losing functionality

Creates de facto AI authorization through technical inability to opt out, with no documentation pathway.

### Intersection 4: FMH + Patient-Initiated AI Content
Patient brings AI-generated health analysis to consultation:
- FMH: physician professional responsibility for medical record content extends to AI-generated patient input documented in record
- nFADP: patient data protection obligations apply to what is documented, regardless of source
- No Swiss guidance: defines obligations for physician documenting patient-initiated AI content in clinical record

Creates physician accountability for AI output they did not request, cannot evaluate, and has no documentation standard for.

---

## Regulatory Timeline Outlook

| Framework | Current Status | Projected Development | Independent Practice Impact |
|-----------|---------------|----------------------|----------------------------|
| FMH AI guidance | Principle-level, no operational endpoint | Likely to remain principle-level without specific small-practice methodology | Guidance vacuum structural |
| Swissdamed | Manufacturer-oriented classification | Registration pathway unlikely to be calibrated for physician practices | Compliance paralysis remains |
| nFADP DPIA | No physician-specific threshold guidance | FDPIC likely to publish guidance but not physician-specific | DPIA obligation defaults to physician's own risk assessment |
| Carrier AI attestation | First-generation forms circulating | Forms will iterate toward second/third generation as claims data emerges | Immediate urgency: pre-signing review not available in market |
| Geneva cantonal guidance | No guidance published | Cantonal guidance unlikely without federal foundation | Institutional decisions form standards without methodology transmission |

---

## Compliance Gray Zones With Immediate Exposure

1. **AI medical record authorship** — No Swiss standard defines AI attribution requirements for physician records. Records authoritative in physician's name include potentially undocumented AI contribution.

2. **Swissdamed classification pathway** — No accessible pathway for independent physician to determine whether their AI tool requires registration. Framework structurally inapplicable at practice scale.

3. **FMH oversight operationalization** — Principle exists without methodology definition at small practice scale. Same person holds user/compliance/billing roles. Oversight architecture structurally impossible with current guidance.

4. **Carrier attestation adequacy standard** — No reference standard exists. Form requires signature to undefined adequacy. Pre-signing review absent from market.

5. **nFADP processor obligations** — Cloud AI services create Art.9 processor obligations for the physician. No Geneva protocol for what processor agreement AI tool vendor terms must satisfy.

6. **Cantonal institutional intelligence access** — Institutional decisions at CHUV and HUG form effective standards without transmission pathway to independent practices. Independent physicians building AI governance in isolation from governance formation rooms.

---

## What This Means for Positioning

The regulatory environment creates an accountability architecture that:
- Assigns responsibility to physicians for AI oversight without providing operational methodology
- Creates compliance obligations in frameworks designed for actors with compliance departments
- Establishes carrier attestation as de facto operative standard without professional body validation
- Leaves independent Geneva practices isolated from institutional governance intelligence
- Provides no pre-signing review mechanism for carrier AI attestation instruments

The physician is accountable without access to the tools, methodology, or intelligence that would make accountability manageable at their scale.
