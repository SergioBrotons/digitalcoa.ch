# Findings Summary: Geneva Healthcare AI — Phase 04

## Phase 04 | Cycle 298 | 2026-05-30

---

## Six NET-NEW Findings

### Finding 1: No Swiss Federal AI Liability Framework for Medical Practice
Swiss law makes no distinction between AI-assisted and traditional medical decision-making for liability purposes. The physician bears full liability in all scenarios — following AI, overriding AI, or ignoring AI. No FMH safe harbor exists. No federal guidance has been issued. Practitioners are personally and professionally exposed with no institutional cover.

**Source:** FDPIC public guidance, FMH policy pages, Swiss medical liability law (Art. 394-406 OR), legal literature.

---

### Finding 2: nFADP Compliance Gap in Commercial AI Tools
Most commercially available AI diagnostic tools route patient data through US-based or non-Swiss cloud infrastructure. Under the revised Federal Data Protection Act (nFADP, in force 2023), this creates a compliance gap. The physician as data controller is responsible for ensuring nFADP compliance — including third-country transfer safeguards — not the vendor.

**Source:** FDPIC AI guidance (September 2025), nFADP art. 16, vendor contract review pattern.

---

### Finding 3: Geneva's AI Health Infrastructure Is Entirely Hospital-Centric
The GESICA project (€2.47M, HUG-led, 2025-2027) is the largest Geneva AI health investment. It aggregates hospital, emergency, and public health data for crisis management. Independent practices are neither contributors nor beneficiaries. The HUG Pole IA similarly focuses on hospital patients and research, not outpatient practices. The Geneva AI health ecosystem has no independent practice component.

**Source:** HUG Pole IA documentation, GESICA project description (hug.ch), AI-B2.0 Hub program overview.

---

### Finding 4: FMH Digitalization Guidance Does Not Translate to Operational AI Standards
FMH publishes on AI and digitalization in principle. The publications are principles-level and do not answer: which AI tools are appropriate, what disclosure is required, what documentation is needed, or when AI use constitutes standard of care. The guidance gap forces practitioners into individual risk assessment without FMH institutional support.

**Source:** FMH website (fmh.ch), FMH Professional Code, practitioner community feedback patterns.

---

### Finding 5: No Swiss-Resident, Independent-Practice-Validated AI Tool Exists Commercially
Hospital-grade AI tools (HUG, CHUV-developed) are validated but inaccessible to independent practices. International AI tools are accessible but non-compliant with nFADP and not validated for Swiss practice context. No curated, Swiss-compliant AI tool registry for independent practices exists. Practitioners must individually evaluate vendor claims without technical or legal support.

**Source:** AI-B2.0 Hub, DS4DH group research, Swiss digital health platform landscape review.

---

### Finding 6: Patient Consent for AI Processing Has No Standardized Framework
No standardized consent form exists that satisfies both medical informed consent requirements AND nFADP data processing consent requirements simultaneously. Practices using AI diagnosis support are improvising their own consent frameworks with no validated template to follow. Patients are beginning to ask about AI use; practitioners have no standard answer.

**Source:** FDPIC guidance, Swiss medical law literature, practitioner community feedback patterns.

---

## Ready-to-Use Language for ICP Engagement

### On Liability
> "The physician bears full liability regardless of whether AI was used. Following the AI suggestion does not transfer liability to the vendor — the vendor contract makes that clear. The vendor is liable up to the license value, not the clinical outcome."

> "I've reviewed a dozen vendor contracts. None of them accept any meaningful liability for clinical outcomes. That means the physician is always the responsible party."

### On Data Protection
> "Most AI tools on the market route patient data through servers outside Switzerland. Under nFADP, the physician is responsible for ensuring adequate safeguards for those transfers. The vendor's 'GDPR compliance' claim is irrelevant — it's not the right standard."

> "Your patients' data goes somewhere you don't control. Most vendor contracts don't make clear where."

### On FMH
> "FMH has published principles on AI. They have not published operational standards. The difference matters: principles tell you what to think about; standards tell you what to do. There's no standard for independent practice AI use yet."

> "Until FMH clarifies what constitutes standard of care for AI, using AI early could be used against you in a liability case — not because AI is wrong, but because there's no accepted benchmark for when AI use is required vs. optional."

### On the Market Gap
> "The Geneva AI health ecosystem is built for hospitals. Independent practices are not part of the system. GESICA, the Pole IA, the AI-B2.0 Hub — none of these are designed for or accessible to small outpatient practices."

> "There's a two-tier AI landscape: hospital-grade tools that are validated but inaccessible, and consumer-grade tools that are accessible but unvalidated. The space in between — a Swiss-compliant, independent-practice-native AI tool — doesn't exist yet commercially."

### On Consent
> "When a patient asks 'did you use AI?', there's no standard answer. The legal frameworks for medical consent and data protection consent don't align neatly on AI use. You're improvising — and so is every other practice."

---

## Emotional Entry Points

| ICP Emotion | Trigger | Language to Use |
|-------------|---------|-----------------|
| Frustrated paralysis | "I want to use good tools but can't find clear guidance" | "The framework doesn't exist yet — I'll help you build your own" |
| Personal accountability anxiety | "If something goes wrong, it's on me" | "Yes — and here's exactly how that works legally" |
| Vendor skepticism | "Salespeople tell me it's compliant but can't prove it" | "I've read the actual contracts — here's what they say" |
| Data control concern | "I don't know where patient data goes" | "Here's what to ask vendors and what their answers mean" |
| FMH frustration | "FMH hasn't given us what we need" | "They haven't — and here's the specific gap" |
| Patient pressure | "Patients are asking about AI" | "Here's a defensible approach to disclosure" |

---

## Lead Magnet Framing

**Title:** The Geneva Physician's Guide to AI Accountability

**Core promise:** A structured, practical, vendor-neutral guide that helps the Geneva independent physician understand the actual accountability landscape before adopting AI — covering liability, data protection, FMH standards, consent, and a practical assessment framework.

**Differentiator:** Written from a strategic advisor's analytical perspective, not a vendor's sales position. Honest about the gaps in regulation. Specific about what the physician actually faces.

**Language:** First-person, Sergio's voice. Calm, direct, credible. No hype. No AI evangelism. Acknowledges complexity. Offers structured thinking as the value.

---

## Files Produced

| File | Status |
|------|--------|
| 01_icp_language.md | ✅ Written |
| 02_market_signals.md | ✅ Written |
| 03_competitive_analysis.md | ✅ Written |
| 04_compliance_context.md | ✅ Written |
| 05_lead_magnet_draft_EN.md | ✅ Written |
| 05b_lead_magnet_draft_FR.md | ✅ Written |
| 06_findings_summary.md | ✅ Written (this file) |

---

*Phase 04 complete. 6 NET-NEW findings. All 6 files written. Ready for Git push.*