# 04 — Compliance Context: Cross-Vertical Regulatory Patterns
## Phase 05 C307 | Cross-Vertical Synthesis | All Four Verticals

---

## Cross-Vertical Regulatory Architecture

The regulatory patterns that govern AI governance are different in each vertical, but they share structural characteristics that create the same documentation demands across all four. This file maps the universal structural patterns and the vertical-specific calibrations.

---

## Universal Structural Pattern 01: The Signature Creates Personal Accountability

**The pattern:** In every vertical, signing a carrier attestation, a professional association declaration, or a regulatory form creates personal accountability that is separate from and not discharged by firm-level coverage.

| Vertical | Personal Accountability Source | Separation from Firm Coverage |
|---|---|---|
| Legal | Art.321 CC (criminal: professional secrecy breach) + Art.63 nFADP (personal administrative) | Carrier E&O covers firm civil liability; does not cover personal criminal or administrative exposure |
| Finance | Art.63 nFADP (personal administrative) + carrier attestation misrepresentation | FINMA enforcement is personal; carrier coverage depends on attestation accuracy |
| Consulting | Art.52 nFADP (personal administrative: CHF 250,000 for intentional violations) | Managing partner personal exposure not covered by professional liability policy |
| Healthcare | Art.321 CC (personal criminal: professional secrecy breach) + HRA personal administrative | Carrier malpractice coverage does not cover criminal or administrative personal exposure |

**The structural implication:** The signature is not a firm-level compliance act — it is a personal accountability act. The documentation that follows the signature must serve two separate tracks: firm-level compliance and personal exposure protection. These require different documentation.

---

## Universal Structural Pattern 02: Vendor Terms Partially Define Professional Accountability

**The pattern:** In every vertical, the AI vendor's contract terms create or modify professional accountability obligations. The ICP accepted vendor terms without reviewing them against their professional obligations. The accountability exposure is embedded in contract language — not in the ICP's intentions.

| Vertical | Vendor Accountability Mechanism | Professional Obligation at Risk |
|---|---|---|
| Legal | Vendor DPA grants vendor access to submitted client data for model training | Art.321 CC: disclosure of privileged communications to third party may constitute waiver |
| Finance | Vendor Terms of Service include sub-processor provisions for client financial data | Art.26 nFADP: data processing relationships must be documented; vendor terms create undocumented relationships |
| Consulting | Sub-consultant AI vendor terms not reviewed; managing partner accountable for entire service chain | Art.52 nFADP: managing partner responsible for processing activities throughout service delivery chain |
| Healthcare | Vendor model training provisions allow de-identified patient data use for AI model improvement | Art.321 CC: professional secrecy obligations extend to data processed through AI tools; model training may breach secrecy |

**The structural implication:** Vendor contract review is not a general due diligence exercise — it is a professional obligation review. The specific question is: where do these vendor terms conflict with my professional obligations under the applicable regulatory framework? This is a discrete bounded service with a specific deliverable.

---

## Universal Structural Pattern 03: Delegation Creates Unconditional Personal Accountability

**The pattern:** In every vertical, the professional is accountable for AI-assisted work performed by people they supervise or systems they deploy, regardless of whether they directly controlled the AI output. The delegation of task and the delegation of accountability do not align — and the accountability is personal.

| Vertical | Delegation Scenario | Accountability Consequence |
|---|---|---|
| Legal | Associate uses AI tool; managing partner signs off | Managing partner accountable for AI-assisted work product bearing their signature |
| Finance | CIO is sole AI governance knowledge holder; no redundancy | Firm's AI governance capability has single point of failure |
| Consulting | Sub-consultant uses AI for research; managing partner signs deliverable | Managing partner accountable for AI contribution they cannot enumerate |
| Healthcare | Staff use AI tools; physician accountable for all outputs | Physician accountable for AI-influenced clinical decisions they did not directly make |

**The structural implication:** The delegation accountability documentation system does not require the ICP to personally review every AI use event — it requires documenting the delegation structure and the ICP's oversight practice. The evidence standard is: demonstrate the ICP had a defensible oversight structure, not: document every individual AI use decision.

---

## Universal Structural Pattern 04: Multi-Authority Documentation Demands Are Non-Aligned

**The pattern:** In every vertical, the ICP faces simultaneous documentation demands from multiple authorities. The documentation that satisfies one authority may create exposure in another authority's proceedings. No unified documentation system exists that serves all authorities simultaneously.

| Vertical | Authority Documentation Demands | Conflict Point |
|---|---|---|
| Legal | Carrier attestation + Ordre disciplinary + litigation discovery + FINMA (if applicable) + FDPIC | Documentation built for carrier creates record usable in Ordre proceedings |
| Finance | FINMA Guidance + institutional client DDQ + carrier attestation + nFADP ROPA + Art.63 personal due diligence | Documentation satisfying FINMA may be architecturally inadequate for Art.63 personal defense |
| Consulting | Client RFP AI criteria + carrier attestation + nFADP Art.52 + EU AI Act GPAI documentation | Client questionnaire responses create commercial exposure; carrier attestation creates insurance exposure |
| Healthcare | FMH human oversight documentation + carrier attestation + nFADP Art.63 personal + FADP Art.21/22 patient disclosure + HIN compliance | FMH documentation creates records usable in liability proceedings |

**The structural implication:** Cross-authority documentation architecture is not a document production problem — it is a systems design problem. The solution is not more documents but a different architecture: documentation that simultaneously satisfies multiple authority demands without creating cross-exposure.

---

## Universal Structural Pattern 05: Evidence Standard Differs from Policy Standard

**The pattern:** In every vertical, carriers and regulators request evidence of actual AI governance practice — not evidence of the existence of a policy. The documentation paradigm in use is built for policy production (what should happen) rather than evidence production (what actually happened).

| Vertical | Policy Standard | Evidence Standard |
|---|---|---|
| Legal | "Our firm has an AI supervision policy" | "Here is the record of how this specific matter's AI use was supervised" |
| Finance | "Our firm has an AI governance framework" | "Here is the contemporaneous record of what our AI systems did between annual reviews" |
| Consulting | "Our firm monitors sub-consultant AI use" | "Here is the record of what AI each sub-consultant used on this specific engagement" |
| Healthcare | "Our practice has human oversight of AI" | "Here is the record of the AI interpretation layer before the physician's decision" |

**The structural implication:** The documentation paradigm must shift from policy documents to evidence records. Policy documents are necessary but insufficient — they demonstrate the existence of a framework. Evidence records demonstrate what actually happened. The carrier or client who asks for evidence is asking for something fundamentally different from a policy document.

---

## Vertical-Specific Regulatory Calibration

### Legal (Geneva Small Law Firms)
- **Primary:** Art.321 CC (professional secrecy — criminal), Art.63 nFADP (personal administrative)
- **Secondary:** OFL guidance (undefined), EU AI Act (if EU matters), carrier attestation
- **Documentation trigger:** Carrier attestation signature, Ordre inquiry, client complaint, FDPIC investigation
- **Key calibration:** Privilege waiver through vendor access is the distinctive legal exposure; vendor contract review against Art.321 CC is the distinctive service response

### Finance (Geneva Boutique Wealth Management)
- **Primary:** Art.63 nFADP (personal administrative), FINMA Guidance 08/2024 (proportionate framework)
- **Secondary:** SRO standards (undefined on AI), institutional client DDQ (competitive gate), carrier attestation
- **Documentation trigger:** Institutional DDQ response, carrier attestation renewal, FINMA inquiry
- **Key calibration:** Institutional DDQ as competitive gatekeeper; pre-signing carrier form review as the distinctive intervention point

### Consulting (Geneva Boutique Advisory)
- **Primary:** Art.52 nFADP (personal administrative: up to CHF 250,000 for intentional violations), EU AI Act GPAI cascade
- **Secondary:** Client RFP AI criteria (commercial gate), carrier attestation, sub-consultant delegation chain
- **Documentation trigger:** Client RFP with AI governance scoring, carrier attestation signature, EU AI Act GPAI compliance deadline
- **Key calibration:** Client RFP as commercial entry point; sub-consultant delegation documentation as distinctive structural need

### Healthcare (Geneva Physicians)
- **Primary:** Art.321 CC (professional secrecy — criminal), HRA personal administrative, FMH professional standards
- **Secondary:** nFADP Art.63 (personal), carrier attestation, HIN compliance (transport only)
- **Documentation trigger:** FMH credentialing inquiry, carrier attestation, patient complaint, HRA audit
- **Key calibration:** HIN transport security ≠ comprehensive protection; AI interpretation layer documentation is the distinctive clinical governance need

---

## Regulatory Timeline (Cross-Vertical)

| Date | Event | Cross-Vertical Impact |
|---|---|---|
| **June 19, 2026** | SBA Day of Lawyers (Geneva) | Acute legal engagement trigger; carrier attestation urgency spikes for attorneys |
| **July 1, 2026** | Swissdamed (medical devices scope) | Limited AI attestation; healthcare awareness raising continues |
| **August 2026** | EU AI Act public awareness (~14 months after Feb 2025) | GPAI documentation cascade; consulting and legal firms with EU exposure activate |
| **End 2026** | Swiss Federal Council AI consultation results (~6 months) | Potential Swiss AI governance framework definition; reduces multi-standard confusion |
| **2027** | nFADP enforcement maturation | FDPIC enforcement becomes more systematic; personal exposure accelerates |

---

## Cross-Vertical Documentation Architecture

### The Single Evidence Architecture Across Verticals

The evidence architecture is structurally identical across all four verticals. The architecture has four components:

1. **Tool Inventory Documentation** — what AI tools process client/patient data, under what authorization, with what vendor terms
2. **Supervision Record Production** — how AI-assisted decisions are reviewed, by whom, with what documentation
3. **Vendor Contract Gap Analysis** — where vendor terms create exposure under the applicable professional obligation framework
4. **Cross-Authority Documentation Mapping** — how evidence records simultaneously serve multiple authority demands

### The Vertical Calibration Layer

The evidence architecture methodology is the same in every vertical. The calibration layer differs:

| Component | Legal | Finance | Consulting | Healthcare |
|---|---|---|---|---|
| Tool inventory | Attorney-client privilege scope | FINMA + institutional client scope | Client commercial scope | Patient data scope |
| Supervision record | Matter-specific AI use documentation | Portfolio-level AI decision documentation | Engagement-level AI contribution documentation | Clinical AI interpretation layer documentation |
| Vendor contract review | Art.321 CC privilege waiver assessment | Art.26 data processing documentation | Sub-consultant chain accountability | Art.321 CC model training exposure |
| Cross-authority mapping | Carrier + Ordre + litigation | FINMA + institutional + carrier + nFADP | Client DDQ + carrier + nFADP + EU AI Act | FMH + carrier + nFADP + HRA |

---

## The Multi-Standard Problem: A Cross-Vertical Structural Issue

The Geneva ICP in every vertical operates in a multi-standard regulatory environment where the applicable standard is undefined and varies by context:

- **nFADP** applies to all processing of Swiss resident personal data (universally applicable)
- **EU AI Act** applies to AI systems with EU nexus (client matters, EU-intended outputs, GPAI use)
- **FINMA Guidance** applies to FINMA-supervised entities (finance vertical)
- **OFL** has not defined adequate AI governance standards (legal vertical)
- **FMH** has not defined specific AI governance standards (healthcare vertical)
- **Carrier standards** vary by carrier and are not publicly defined

The multi-standard environment creates:
1. **Documentation incoherence** — documents built for one standard may not satisfy another
2. **Decision paralysis** — the ICP cannot act because the standard is undefined
3. **Exposure invisibility** — the ICP doesn't know which standard applies to their situation

The service response is to:
1. Define the applicable standard for the ICP's specific situation
2. Document the standard with rationale (defensible even if challenged)
3. Build evidence that demonstrates compliance with the defined standard
4. Map the evidence to multiple authority demands simultaneously