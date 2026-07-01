# Compliance Context: Geneva Healthcare — C313 Phase 04

## Geneva / Switzerland Specific Regulatory Environment (Post-31-Day Pause, July 2026)

---

## Regulatory Framework Layers (Geneva Private Practice)

The Geneva independent physician operating in July 2026 is governed by the following overlapping regulatory layers. Each layer intersects the others at the patient encounter, the AI tool, the EMR, the consent form, the carrier attestation, the médecin remplaçant convention, and the vendor succession event. C313 Phase 04 healthcare compliance context requires mapping all layers to the specific AI governance evidence architecture.

### 1. Swiss Criminal Code — Article 321 CP (Medical Secrecy)

**The provision:** Art. 321 of the Swiss Criminal Code (Code pénal suisse) establishes medical secrecy as a criminal offense. Physicians, their aides, and persons in training who disclose confidential information entrusted to them in their professional capacity face criminal prosecution. The penalty is a fine or imprisonment up to three years (in severe cases).

**Why it matters for C313:**
- **Patient encounter transcripts produced by AI scribes** are patient confidences under Art. 321 CP. The transcript is a confidential disclosure to the physician and the physician's professional environment. Disclosure of the transcript to third parties (including AI vendor sub-processors) without patient consent or statutory authorization is a potential Art. 321 CP violation.
- **Patient consent forms that don't mention AI tool processing** do not satisfy Art. 321 CP if AI tools process confidential patient information outside the original consent scope.
- **AI vendor sub-processors outside Switzerland** (US-based AI scribe vendor cloud, US-based clinical decision support cloud) may have access to patient confidences through infrastructure. Art. 321 CP applies to disclosure by the physician, but infrastructure access can constitute disclosure under some readings.
- **AI vendor succession events** transfer patient confidences to a successor controller. The successor's possession of patient confidences may itself constitute unauthorized disclosure under Art. 321 CP.
- **Médecin remplaçant coverage** involves the replacing physician having access to patient confidences under the replaced physician's medical secrecy obligation. If the Convention de remplacement is not properly drafted, the patient confidences may be disclosed without proper consent framework.

**C313 implications:**
- The carrier attestation evidence architecture must produce documentation that demonstrates the physician understood, assessed, and managed Art. 321 CP exposure for each AI tool used.
- The patient consent form must disclose all AI tools that process patient confidences, with explicit disclosure of sub-processor chains where Art. 321 CP may be invoked.
- The Convention de remplacement must include an AI governance clause that addresses the replacing physician's Art. 321 CP obligations during the coverage period.
- The AI vendor contract must include succession terms that preserve Art. 321 CP confidentiality protection during vendor exit events.

**Distinct from C313 P01–P03:** Legal professional secrecy (CP Art. 321 for attorneys), banking client confidentiality (Banking Act Art. 47), consulting confidentiality (contractual) — and now physician medical secrecy (CP Art. 321 specifically applied to medical practice). The criminal exposure (penalty) is the same class but specifically tied to medical confidences.

### 2. Swiss Federal Act on Data Protection (nFADP) — Article 63

**The provision:** Art. 63 of the revised Swiss Federal Act on Data Protection (nFADP, in force since September 2023) establishes personal liability for the data controller (or persons within the controller organization) who violate data processing obligations. The personal liability applies when the violation occurs through an act or omission attributable to the natural person within the controller organization.

**Why it matters for C313:**
- The Geneva physician is the data controller for patient personal data processed through the EMR and through AI tools (AI scribe, clinical decision support, drug-interaction checker, sub-specialty AI delegation).
- nFADP Art.63 personal liability applies to the physician as the controller (or a person within the controller organization).
- AI tool processing of patient personal data creates Art.63 exposure when the data flow crosses the nFADP's protection threshold (e.g., disclosure to undisclosed sub-processors, AI vendor sub-processor data flow to US-based infrastructure without proper cross-border protection).
- The médecin remplaçant coverage scenario creates joint controller (or joint processor) arrangements where both physicians are accountable.
- The AI vendor succession scenario creates new controller arrangements where the successor is not bound by the original Art.63 obligations.

**C313 implications:**
- The carrier attestation evidence architecture must document that the physician has identified all AI tools used, mapped all personal data flows, evaluated cross-border data transfer protection (nFADP Art.16 + cross-border transfer provisions), and documented sub-processor chain attribution per AI tool.
- The patient consent form must address nFADP Art.16 cross-border transfer provisions for any AI tool that operates outside Switzerland.
- The Convention de remplacement AI clause must include Art.63 personal liability allocation between replaced and replacing physicians.
- The AI vendor contract must include nFADP Art.63 successor-controller documentation requirements.

**Distinct from C313 P01–P03:** Legal Art. 12 (data subject rights enforcement), Finance Art. 9 (data processing), Consulting Art. 52 (legal obligations general). Healthcare Art. 63 personal liability for patient data is specifically tied to medical practice data processing (EMR, AI scribe, clinical decision support, sub-specialty AI delegation).

### 3. Federal Act on Medical Professions (MedBG / LPMéd)

**The provision:** The Federal Act on Medical Professions (Medizinalberufegesetz, MedBG) and the corresponding Geneva cantonal law (Loi genevoise sur la santé, K 1 03) regulate who may practice as a physician in Switzerland. The physician's professional authorization (autorisation de pratiquer) is granted by the Geneva cantonal physician authority (Service du médecin cantonal, Geneva Department of Health) and is conditioned on specialty authorization (FMH specialty title or equivalent), continuing medical education compliance, and good professional standing.

**Why it matters for C313:**
- The Geneva physician's authorization to practice is personally held. Loss of authorization (criminal conviction under Art. 321 CP, professional misconduct findings under MedBG, nFADP Art.63 enforcement action with criminal referral) directly affects the physician's ability to practice.
- FMH specialty title (médecine interne, cardiologie, oncologie, psychiatrie, pédiatrie, gynécologie, etc.) is granted through the FMH (Foederatio Medicorum Helveticorum) Specialty Societies. Specialty authorization limits the physician's scope of authorized practice.
- Continuing medical education (CME / formation continue) is required by FMH and by SGAO (Swiss Society for Quality Assurance in Medicine). AI governance is increasingly a CME category requirement.
- Carrier attestation review may trigger professional authorization review by the médecin cantonal if disclosure reveals authorization scope issues.

**C313 implications:**
- The carrier attestation evidence architecture must produce documentation that demonstrates the physician's specialty authorization is intact, AI tool use is within FMH specialty scope, CME compliance is current, and nFADP Art.63 / Art. 321 CP exposure is documented and managed.
- The Convention de remplacement must include specialty authorization verification for the replacing physician (replacing physicians must hold FMH specialty title in the relevant specialty for the coverage to be valid).
- The sub-specialty referral AI delegation documentation must confirm that the sub-specialist holds the FMH specialty title for the AI-enabled interpretation (radiology for imaging AI, pathology for pathology AI).

**Distinct from C313 P01–P03:** No equivalent in legal or financial practice. The physician license + FMH specialty authorization is unique to healthcare. The carrier attestation personal authorization aspect is more directly consequential than in other professions because of the personal authorization to practice.

### 4. Cantonal Geneva Physician Practice Law

**The provision:** Geneva cantonal law (Loi genevoise sur la santé, K 1 03; regulations of the Service du médecin cantonal) governs private medical practice in Geneva. The Geneva physician practice authorization is processed through the Direction générale de la santé, with the médecin cantonal as the authorizing authority.

**Why it matters for C313:**
- Geneva private practice authorization is process-specific (location authorization, equipment authorization, supervision authorization, continuing medical education authorization).
- EMR usage is regulated through cantonal physician practice law — the EMR must support nFADP compliance, Art. 321 CP medical secrecy compliance, and MedFM (medizinische Praxis-Führerschein or médecin praticien formal authorization) compliance.
- AI tool adoption is not directly regulated at the cantonal level, but cantonal physician practice requires that the physician be able to justify all clinical decisions, including AI-assisted clinical decisions.

**C313 implications:**
- The carrier attestation evidence architecture must demonstrate Geneva cantonal physician practice compliance (authorization current, EMR compliant, continuing medical education current).
- The patient consent form must include Geneva-specific consent provisions (research consent, teaching consent, canton-specific data sharing consent).

**Distinct from C313 P01–P03:** Cantonal variation is more significant in healthcare than in legal/finance practice. Geneva physician practice law has specific requirements that don't map to Vaud, Zurich, or Basel physician practice. The Geneva-specific physician practice layer is one of the regulatory dimensions that makes cross-cantonal scalability complex.

### 5. Medical Liability Insurance (Assurance responsabilité civile médicale)

**The provision:** Medical liability insurance (responsabilité civile médicale) is not legally mandatory in Switzerland for independent physicians, but is practically mandatory — hospitals require it, group practices require it, and most patient contract acceptance requires it. Medical liability insurance is offered through Swiss insurers (Zurich, Allianz Suisse, Mobilière, Generali, AXA Winterthur, Bâloise, etc.) and through médecin-conseil brokers.

**Why it matters for C313:**
- Coverage attestation is typically physician-personal — the attestation is signed personally by the physician and the coverage is granted to the physician individually.
- AI tool disclosure is now carrier-attested. The attestation asks for AI tool inventory, AI tool sub-processor chain, AI tool data residency, encounter-level AI use documentation.
- Coverage gap risk is high if the attestation response is generic, or if encounter-level AI use is not documented, or if patient consent forms are not updated for new AI tools.
- Mid-year carrier check-ins now ask for encounter-level AI use documentation and patient consent form freshness attestation.
- Convention de remplacement coverage may not extend to the replacing physician's AI tool use. The replaced physician's coverage does not necessarily cover the remplaçant's AI tool use — coverage gap risk for both physicians.

**C313 implications:**
- The C313 Phase 04 evidence architecture must produce carrier-ready documentation that addresses encounter-level attestation, patient consent form freshness, médecin remplaçant AI governance, EMR-AI extension vendor residency, AI vendor succession planning.
- The Convention de remplacement AI clause must address coverage gap risk for both replaced and replacing physicians.
- The AI vendor contract succession terms must address patient records continuity in coverage event.

**Distinct from C313 P01–P03:** Medical liability insurance is contractually structured differently than legal professional liability. Coverage gap risk is higher because medical liability is insurance-product-based while legal liability is more often firm-funded. Coverage gap risk activates through the physician personally, not through the firm.

### 6. Swissmedic Medical Device Framework (Swissdamed) — Voluntary from July 2026

**The provision:** Swissmedic's Swissdamed (Swiss Database of Medical Devices) becomes operational in July 2026 with voluntary compliance for medical device manufacturers, importers, and distributors. The framework requires CH-REP (Swiss Authorized Representative) registration for non-Swiss medical devices, UDI (Unique Device Identification) registration, and field safety corrective action reporting.

**Why it matters for C313:**
- AI-enabled medical devices (AI imaging for radiology, AI pathology, AI ECG interpretation, AI drug-interaction checkers) fall under Swissdamed scope when they have a medical device classification under the Medical Devices Ordinance (MedDO / ODim).
- The Geneva physician who uses AI-enabled medical devices is potentially an "operator" under Swissmedic terminology, with operator obligations distinct from the device manufacturer obligations.
- Operator obligations include: device verification (the operator must verify the device is being used in accordance with manufacturer instructions), incident reporting (the operator must report device incidents to Swissmedic within defined timeframes), recordkeeping (the operator must maintain records of device use).
- Swissmedic operator obligations for AI-enabled devices are not specifically addressed by Swissmedic for private practice — the framework is calibrated for hospital and clinic operators.

**C313 implications:**
- The carrier attestation evidence architecture must produce Swissmedic operator compliance documentation for AI-enabled medical devices used in practice.
- The AI tool inventory must include Swissmedic operator status per device, CH-REP status for non-Swiss devices, incident reporting procedures, and recordkeeping procedures.
- The Convention de remplacement must address Swissmedic operator obligations during the coverage period (the replacing physician inherits operator obligations during coverage).

**Distinct from C313 P01–P03:** Swissmedic operator obligations are healthcare-specific. The medical device framework is unique to medical practice. The voluntary compliance from July 2026 creates a Swissdamed baseline that the carrier attestation may now reference.

### 7. EU AI Act — Public Awareness Spike Q3 2026

**The provision:** EU AI Act (Regulation 2024/1689) — general-purpose AI provisions, high-risk system obligations. The EU AI Act does not apply directly to Switzerland, but may apply to EU suppliers and EU-based patients. The ~14-month public awareness spike (August 2026) affects Swiss AI vendor services that serve EU markets.

**Why it matters for C313:**
- Swiss AI vendors serving EU markets (AI scribe, clinical decision support) may adopt EU AI Act standards that exceed nFADP requirements.
- AI vendor self-certification may reference EU AI Act obligations that don't apply to Swiss practice but signal vendor maturity.
- Patient inquiries about EU AI Act compliance may arise for Geneva physicians treating EU-based patients or processing EU-based patient data.

**C313 implications:**
- The carrier attestation evidence architecture may reference EU AI Act cross-border impact for AI tools serving EU markets.
- The patient consent form may include EU AI Act compliance language for AI tools with EU service components.

**Distinct from C313 P01–P03:** EU AI Act is broadly cross-vertical (C313 P03 mentioned this). Healthcare-specific application is via AI scribe vendors with EU service components and via EU-based patient data processing.

---

## HIN Corridor — What It Protects and What It Doesn't

The HIN (Health Info Net) corridor is a Swiss secure transport infrastructure for healthcare data in transit. The HIN corridor protects data in transit between:
- Geneva physician practice and Swiss-hosted EMR server
- Geneva physician practice and cantonal physician referral services
- Geneva physician practice and HUG (Hôpitaux Universitaires de Genève)
- Geneva physician practice and other HIN-connected Swiss healthcare organizations

The HIN corridor does NOT protect:
- Data at rest in non-Swiss AI vendor cloud (AI scribe vendor US servers, US-based clinical decision support servers, US-based drug-interaction checker servers)
- Data at rest in non-Swiss sub-processor infrastructure (logging, telemetry, authentication, monitoring)
- Data in transit between the EMR and the AI extension vendor (often non-Swiss connection)
- Data processed by AI extensions that operate entirely outside the EMR (standalone AI scribe with cloud-native architecture)

**C313 implication:** The HIN corridor marketing claim is not equivalent to the AI tool data residency attestation. The carrier attestation may ask for per-tool data residency attestation — the HIN corridor does not provide that attestation for AI extensions.

---

## Physician Patient Relationship Layer

The Geneva physician operates within a defined physician-patient relationship framework that intersects all regulatory layers:

- **Professional secrecy (Art. 321 CP)** — applies to every physician-patient communication
- **Patient consent (nFADP)** — applies to every personal data processing activity
- **Informed consent for clinical decisions** — applies to every clinical intervention including AI-assisted decisions
- **Documentation obligation (Geneva cantonal medical practice law)** — applies to every patient encounter
- **Carrier attestation obligation** — applies annually and mid-year
- **Specialty scope (FMH)** — applies to every clinical decision
- **Continuing medical education (FMH / SGAO)** — applies triennially

The C313 Phase 04 evidence architecture must address all of these simultaneously for each patient encounter that involves AI tool use.

---

## Regulatory Coherence Layer Architecture

| Regulatory Layer | Primary Application to Geneva Physician + AI Tool Use | C313 Phase 04 Compliance Documentation Required |
|---|---|---|
| Swiss Criminal Code Art. 321 CP | Patient confidences; AI tool processing of patient data | Carrier attestation + patient consent form + Convention de remplacement AI clause |
| Swiss Criminal Code Art. 122 (negligent homicide / bodily harm) | Clinical decision errors with AI assistance | Carrier attestation + AI tool incident reporting + Swissmedic operator documentation |
| Swiss Criminal Code Art. 261 (penalty for false certificate) | False carrier attestations or false documentation | Carrier attestation accuracy audit + retroactive attestation accuracy check |
| nFADP Art. 4 (data processing principles) | Patient personal data processing through AI tools | Patient consent form update + AI tool inventory with per-tool processing basis |
| nFADP Art. 9 (data security) | Patient data security through AI tools | AI tool data security audit + sub-processor chain disclosure |
| nFADP Art. 16 (cross-border data transfer) | AI tools processing patient data outside Switzerland | EMR-AI extension vendor data residency audit + Standard Contractual Clauses or equivalent |
| nFADP Art. 63 (personal liability) | Physician personal data controller exposure | Carrier attestation + Convention de remplacement AI clause + AI vendor succession terms |
| MedBG / LPMéd | Medical professional practice authorization | FMH specialty title attestation + CME compliance attestation |
| Canton of Geneva physician practice law | Geneva-specific practice authorization | Cantonal physician practice authorization renewal + EMR compliance attestation |
| Medical liability insurance | AI tool use disclosure | Carrier attestation with encounter-level AI use documentation |
| Swissmedic Swissdamed (voluntary from July 2026) | AI-enabled medical device operator compliance | Swissmedic operator attestation + CH-REP verification + incident reporting procedure |
| FMH specialty scope | AI-assisted clinical decisions within specialty | Specialty scope attestation + AI tool specialty alignment review |
| FMH CME (formation continue) | AI governance as CME category | CME compliance attestation for AI governance category |
| EU AI Act (cross-border impact) | AI vendor services with EU component | EU AI Act compliance cross-reference for EU service AI tools |

The C313 Phase 04 evidence architecture produces 14 regulatory layer documentation outputs, all anchored to the same encounter-level AI governance evidence base per Geneva physician.

---

## FMH Specialty Authorization Scope (Geneva Specific)

The Geneva physician's FMH specialty title is granted by the FMH and recognized by the Geneva cantonal authority (médecin cantonal). The specialty title scopes the physician's authorized clinical practice:

| Specialty Title | French Title | Authorization Scope |
|---|---|---|
| Specialist in Internal Medicine | Spécialiste en médecine interne générale | Primary care, internal medicine consultation, AI scribe for internal medicine encounters |
| Specialist in Cardiology | Spécialiste en cardiologie | Cardiology consultation, ECG interpretation, AI ECG interpretation (under specialty scope) |
| Specialist in Oncology-Hematology | Spécialiste en oncologie-hématologie | Oncology consultation, AI-assisted oncology decision support (under specialty scope) |
| Specialist in Psychiatry-Psychotherapy | Spécialiste en psychiatrie-psychothérapie | Psychiatric consultation, AI-assisted psychiatric evaluation (under specialty scope) |
| Specialist in Pediatrics | Spécialiste en pédiatrie | Pediatric consultation, AI scribe for pediatric encounters |
| Specialist in Gynecology-Obstetrics | Spécialiste en gynécologie-obstétrique | Gynecological consultation, AI-assisted obstetrics interpretation |
| Specialist in Dermatology-Venereology | Spécialiste en dermatologie-vénérologie | Dermatological consultation, AI dermatology image analysis (potentially) |
| Specialist in Orthopedic Surgery | Spécialiste en chirurgie orthopédique | Orthopedic consultation, AI-assisted orthopedic image interpretation (potentially) |
| Specialist in Ophthalmology | Spécialiste en ophtalmologie | Ophthalmological consultation, AI ophthalmology image analysis (potentially) |
| Specialist in Otorhinolaryngology | Spécialiste en oto-rhino-laryngologie (ORL) | ORL consultation, AI-assisted ORL diagnostics (potentially) |
| Specialist in Gastroenterology | Spécialiste en gastro-entérologie | Gastroenterology consultation, AI-assisted GI endoscopy image analysis (potentially) |
| Specialist in Neurology | Spécialiste en neurologie | Neurology consultation, AI-assisted neurology interpretation |
| Specialist in Rheumatology | Spécialiste en rhumatologie | Rheumatology consultation, AI-assisted rheumatology interpretation |
| Specialist in Endocrinology-Diabetology | Spécialiste en endocrinologie-diabétologie | Endocrine consultation, AI-assisted endocrine interpretation |
| Specialist in Anesthesiology | Spécialiste en anesthésiologie | Anesthesia, AI-assisted anesthesia monitoring |

The specialty scope intersection with AI tool use is a C313 trigger event. When the Geneva physician uses an AI tool that has specialty-scope implications (e.g., a radiologist using radiology AI, an internist using cardiology AI decision support), the authorization scope documentation must include the specialty scope attestation.

**Distinct from C313 P01–P03:** Specialty scope is healthcare-specific. Legal practice has scope (barreau admission, canton of admission), but it's not granular the way FMH specialty title is granular. The Geneva physician's specialty scope is a documented authorization that intersects AI tool use and carrier attestation disclosure.

---

## Sub-Specialty AI Delegation Layer

The Geneva physician who refers a patient to a sub-specialist (e.g., a radiologist for image interpretation, a pathologist for histology interpretation) delegates part of the clinical interpretation to the sub-specialist. When the sub-specialist uses AI for the interpretation (radiology AI for image analysis, pathology AI for histology), the AI tool use is authorized by the sub-specialist (not by the referring physician) but the patient data flows from the referring physician's records to the sub-specialist's AI tool.

The C313 Phase 04 sub-specialty AI delegation documentation must address:
- Whether the referring physician's patient consent form covers sub-specialty AI use
- Whether the sub-specialty AI vendor's data residency is documented in the referring physician's AI tool inventory
- Whether the carrier attestation requires the referring physician to disclose sub-specialty AI use

This layer is distinct from C313 P03 sub-consultant delegation: the sub-consultant delivers a client deliverable under the boutique's name; the sub-specialist delivers a clinical interpretation under the sub-specialist's professional authorization. The accountability structure is different (the sub-specialist is professionally independent), but the patient data flow documentation requirement is the same.

---

## Files in this Cycle

This file (04) maps the regulatory context.
Files 05–06 build the response and findings summary.

*— Geneva Healthcare research, C313 Phase 04, 2026-07-01*
