# Phase 04 — Compliance Context: Geneva Healthcare — Cycle 4

**Phase:** 04 — Geneva Healthcare
**Cycle:** 4
**Date:** 2026-05-30
**Status:** COMPLETE

---

## Regulatory Framework Overview

**Healthcare AI Governance Stack for Small Geneva Practices (C302 timing context):**

```
Primary Layer: nFADP (Swiss Federal Data Protection Act)
               ↓ Art. 5(c) — sensitive health data = highest protection category
               ↓ FDPIC May 8, 2025 explicit: nFADP applies directly to AI-based processing
               ↓ Art. 63 — personal liability for responsible individuals

Secondary Layer: Swissmedic / Therapeutic Products Act (TPA)
                ↓ AI tools as medical devices → swissdamed registration July 1, 2026
                ↓ EU AI Act medical device extension: Aug 2027 (if EU market relevance)

Tertiary Layer: FMH Professional Standards
               ↓ Human oversight stated without operational definition
               ↓ Personal professional accountability explicit

Quaternary Layer: Cantonal Health Law (Geneva + Vaud)
                 ↓ Practice licensing includes data security requirements
                 ↓ DGVS (Vaud) analogous to Geneva canton health dept
```

---

## Primary Layer: nFADP (Federal Act on Data Protection)

### Key Provisions for Small Medical Practices

**Art. 5(c) — Sensitive Data Processing**
Health data is explicitly categorized as "sensitive" under nFADP Art. 5(c). Processing requires:
- Explicit consent from data subject OR
- Specific legal basis under Art. 6 (e.g., preventive medicine, public health, legal claims)
- For AI tools: Most health data processing requires explicit consent framework OR legal basis analysis
- **Carrier attestation implications:** AI tools processing patient data must have documented legal basis

**FDPIC May 8, 2025 Confirmation:**
- FDPIC explicitly confirmed that nFADP applies directly to AI-based data processing
- AI tools that process patient health data = data processing under nFADP
- DPIA (Data Protection Impact Assessment) required for high-risk processing
- Practices using AI tools without DPIA = potential non-compliance
- **Carrier form implication:** Attestation questions about AI governance map directly to nFADP obligations

**Art. 26 — Disclosure Obligations**
- When data is collected from a source other than the data subject (e.g., AI tool processing referrals), disclosure obligations apply
- Privacy notices must be updated to reflect AI tool usage
- **Carrier form implication:** AI tool disclosure in privacy notices is a documentation requirement

**Art. 32 — Data Security**
- Appropriate technical + organizational measures required
- AI tool due diligence = vendor assessment, DPA, security measures
- **Carrier form implication:** Data Processing Agreements with AI vendors are evidence of Art. 32 compliance

**Art. 63 — Personal Liability for Responsible Individuals**
- Responsible person designation means personal assets at risk
- For physicians: FMH certification holder is typically the responsible person
- Breach involving AI vendor data sharing = highest-risk personal liability scenario
- **Carrier form implication:** Personal liability exposure is named on the carrier form

### Carrier Attestation Mapping to nFADP Obligations

The carrier AI attestation form typically asks:
1. "What AI tools does your practice use?"
2. "Do you have governance processes for AI tool use?"
3. "Can you provide documentation of human oversight of AI decisions?"
4. "Do you have Data Processing Agreements with AI vendors?"

These map directly to nFADP obligations:
- AI tool inventory → Art. 5(c) + Art. 32 inventory requirement
- Governance processes → Art. 32 organizational measures
- Human oversight documentation → FMH professional standard (undefined) + Art. 32 documentation
- DPA with vendors → Art. 32 contractual measures

**The gap:** The physician cannot answer these questions because no one has provided the framework to answer them. This is the advisory entry point.

---

## Secondary Layer: Swissmedic / Therapeutic Products Act (TPA)

### AI as Medical Device — Key Rules

**Legal Framework:**
- Therapeutic Products Act (TPA / LPTh): governs medical devices in Switzerland
- Medical Devices Ordinance (MedDO / ODiméd): implements EU MDR-equivalent rules
- Swissmedic: Swiss regulatory authority for therapeutic products

**AI Tools Qualifying as Medical Devices:**
If an AI tool is used for:
- Diagnosis, monitoring, or treatment support
- Medical image analysis
- Clinical decision support
→ It may qualify as a Software as a Medical Device (SaMD)
→ Registration + compliance obligations apply

**The Small Practice Problem:**
- Most small practices do not know whether their AI tools qualify as medical devices
- Dragon Medical (Nuance) is used for dictation — is it a medical device when used for clinical documentation?
- Doctolib handles scheduling — is AI-assisted appointment management a medical device function?
- ChatGPT drafts patient communications — where is the line between productivity tool and medical device?
- **No one has provided practical classification guidance for small practices**

**swissdamed — Mandatory Registration (July 1, 2026)**
- Swissmedic's national medical devices database (swissdamed)
- Mandatory registration for all medical devices placed on the Swiss market
- For small practices: If your AI tool is a medical device, YOU (as operator/user) may have obligations
- **Most small practices are completely unaware of this requirement**
- Deadline: July 1, 2026 — 13 months away

**Carrier Form + Swissmedic Connection:**
The carrier form may ask about medical device compliance. If the physician's AI tool is a medical device and is not registered in swissdamed, this creates a coverage issue. The carrier is effectively asking: "are your AI tools compliant with applicable medical device regulations?" The physician cannot answer this without understanding Swissmedic classification.

---

## Tertiary Layer: FMH Professional Standards

### Human Oversight — Stated Without Definition

**The Problem:**
- FMH has stated that human oversight of AI is required in clinical practice
- FMH has NOT provided an operational definition of what human oversight means in a small practice context
- No FMH section has published practical guidance for what "documented human oversight" looks like for a 2–5 physician practice
- Physicians report: "I asked at the FMH section meeting and nobody had clear answers"

**What Human Oversight Should Mean (Operational Definition):**
For a small Geneva medical practice, human oversight of AI should include:

1. **AI Tool Inventory:** Written record of AI tools used in clinical workflow
2. **Vendor Documentation:** DPA + DPIA (or vendor security documentation) on file
3. **Usage Log:**记录 of which AI outputs were reviewed (not every output, but categories)
4. **Physician Sign-Off:** Clinical AI outputs reviewed and approved by responsible physician before patient action
5. **Breach Procedure:** Documented procedure for what happens when AI output appears incorrect or anomalous

**This definition does not exist in any FMH publication.** The advisory opportunity is to provide it.

**Carrier Form + FMH Human Oversight Connection:**
The carrier form asks for "evidence of human oversight of AI decisions." The physician has no document to provide because no one has defined what the document should contain. Providing the operational definition + documentation template is the advisory entry point.

---

## Quaternary Layer: Cantonal Health Law

### Geneva (Canton de Genève)
- **Loi sur la santé (Geneva Health Act)** — practice licensing requirements
- **Service de la santé publique (Geneva)** — cantonal health authority
- Data security increasingly part of practice licensing renewal
- No specific AI regulations, but existing obligations (nFADP + Swissmedic) apply at cantonal level
- **Carrier form + cantonal connection:** Cantonal audit could review AI tool compliance; carrier form creates awareness of this risk

### Vaud (Canton de Vaud)
- **DGVS** (Direction générale de la santé) — analogous to Geneva
- **CMPR** (Corps Médical du Prataticien du canton de Vaud) — professional body
- Same regulatory logic applies; minor procedural differences
- **Carrier form + Vaud connection:** Same carrier form applies; same FMH standards apply

---

## Regulatory Timeline (Healthcare AI — 2025-2027)

| Date | Event | Impact on Small Practices |
|---|---|---|
| Sep 2023 | nFADP in force | Operative now |
| May 8, 2025 | FDPIC explicit: nFADP applies to AI processing | Operative now; enforcement risk real |
| July 2025 | Clause du besoin effective | Operative now; efficiency investment justified |
| Feb 2025 | Federal Council: no comprehensive AI law | Confirms sector-specific approach |
| March 2025 | Switzerland signs CoE AI Convention | Implementation 2026-2027 |
| **July 1, 2026** | **swissdamed mandatory registration** | **Compliance deadline for AI medical device users** |
| End 2026 | CoE AI Convention consultation draft | Healthcare amendments expected |
| Aug 2027 | EU AI Act medical device extended deadline | Indirect relevance for Swiss practices using EU-market tools |
| 2026+ | CoE AI Convention implementation in CH | Enhanced obligations expected |

---

## Compliance Checklist for Small Geneva Medical Practice

### Minimum Required (Operative Now)
- [ ] Identify all AI tools processing patient data (carrier form question1)
- [ ] Execute Data Processing Agreements (DPAs) with AI vendors (carrier form question 4)
- [ ] Update privacy notices to disclose AI tool usage (Art. 26)
- [ ] Assess whether AI tools qualify as medical devices (Swissmedic classification)
- [ ] If medical device: verify swissdamed registration status (July 1, 2026 deadline)
- [ ] Document human oversight procedure (carrier form question 3)
- [ ] Implement basic data security measures for AI tool access (Art. 32)
- [ ] Train staff on AI tool governance basics (Art. 32 organizational measure)

### Recommended (Within 12 Months)
- [ ] Conduct formal DPIA (Data Protection Impact Assessment) for high-risk AI processing
- [ ] Document AI tool governance policy in writing (carrier form question 2)
- [ ] Establish breach response procedure ("as soon as possible" notification obligation)
- [ ] Assess personal liability implications under nFADP Art. 63
- [ ] Review insurance coverage for AI-assisted decisions

### Strategic (2026+)
- [ ] Monitor CoE AI Convention implementation requirements
- [ ] Assess FMH human oversight standard when published
- [ ] Review Geneva Health Forum 2026 recommendations
- [ ] Evaluate Vaud expansion implications

---

## Why Healthcare Is the Strongest nFADP Vertical

| Factor | Legal | Finance | Consulting | Healthcare |
|---|---|---|---|---|
| nFADP Art. 5 relevance | Medium (client data) | High (financial data) | Medium | **Very High (health data)** |
| nFADP enforcement risk | Medium | Medium | Low-Medium | **Very High** |
| FDPIC priority area | No | No | No | **Yes (health data breaches)** |
| Swissmedic layer | No | No | No | **Yes** |
| swissdamed deadline | No | No | No | **Yes (July 2026)** |
| FMH human oversight | No | No | No | **Yes (stated, undefined)** |
| Carrier attestation | No | Yes (FINMA) | No | **Yes (malpractice)** |
| Personal liability stakes | High (bar) | High (FINMA) | Medium | **Highest (license irreplaceable)** |
| Staff urgency | Low | Low | Medium | **Very High (shortage)** |
| Peer trust requirement | High | High | High | **Very High** |

**Conclusion:** Healthcare combines highest data sensitivity (Art. 5(c)), highest personal stakes (irreplaceable license), the most undefined regulatory requirement (FMH human oversight), and the most acute forcing function (carrier attestation form). The nFADP Art. 5(c) entry point is the sharpest across all 4 verticals.

---

## Cycle 4 Additions vs Cycle 3

| Item | Cycle 3 | Cycle 4 Addition |
|---|---|---|
| Carrier form | Not named as primary trigger | **Carrier form mapped to nFADP obligations — specific documentation requirements identified** |
| FMH human oversight | General requirement | **Operational definition gap identified — advisory opportunity confirmed** |
| Swissmedic classification | General guidance | **Small practice confusion confirmed — "where is the line" question unanswered** |
| nFADP Art. 63 | General liability | **Personal liability for physician named as carrier form concern** |
| Compliance checklist | General | **Carrier form questions mapped to checklist items** |
| Dual-layer paralysis | Not identified | **nFADP + Swissmedic dual-layer identified as specific small practice problem** |
| swissdamed | July 2026 deadline | **Still current; 13 months remaining** |

---

*Compliance context — Phase 04 Cycle 4 complete. Carrier form mapped to nFADP obligations + FMH undefined oversight + Swissmedic classification confusion + dual-layer paralysis + Art. 63 personal liability identified.*
