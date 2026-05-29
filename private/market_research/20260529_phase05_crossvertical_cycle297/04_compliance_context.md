# Compliance Context: Cross-Vertical Synthesis — C297 Phase 05

## Phase
Phase 05: Cross-Vertical Synthesis — patterns across legal, finance, consulting, and healthcare ICPs

## Cycle
C297 Phase 05 of continuous research rotation.

---

## Regulatory Framework Architecture

### Layer 1 — nFADP (revFADP, in force September 2023)

**Scope:** Swiss Federal Act on Data Protection as amended (revFADP / nFADP)

**Key provisions:**
- Art.9: Data processing agreements required for third-party processors (AI vendors are processors under Art.9)
- Art.63: Administrative penalties up to CHF 250,000 for intentional data protection breaches
- Art.61 lit.a: Administrative penalties for failure to implement required technical and organizational measures
- Personal liability exposure for managing officers (Art.63 criminal standard: intentional)

**Cross-vertical relevance:**
- Legal: Art.321 StGB privilege collision with vendor data retention and sub-processor disclosure obligations
- Finance: Art.9 processor chain obligations activated by carrier third-generation questions (disclosed Art.9 obligations through carrier interrogation)
- Consulting: Art.9 prime boutique liability for sub-consultant AI vendor compliance — no privity defense
- Healthcare: Patient health data as special category under Art.9 + Art.6 additional requirements

**Critical gap:** Standard commercial DPA templates do not embed Art.321 StGB (legal privilege), BGFA (banking secrecy), FMH professional obligations. Most AI vendors do not offer revFADP Art.9 compliant DPA for Swiss professional practices.

---

### Layer 2 — Professional Standards Bodies

**SAV (Swiss Lawyers Association) — Legal ICP**
- SAV AI Guidelines published June 2024
- Accountability standard: adequate human review required for AI-assisted work
- No decision tree for 2–5 attorney firms
- No SAV-validated AI register format
- SAV guidelines reference adequate governance without defining operational meaning

**FINMA/SRO — Finance ICP**
- FINMA Guidance on AI (asynchronous to specific wealth management application)
- SRO oversight frameworks referencing AI governance
- Multi-carrier attestation: no standardized instrument, different carriers using different forms
- Four-system documentation coherence paradox (FINMA + institutional questionnaires + nFADP + carrier attestation)

**FMH (Swiss Medical Association) — Healthcare ICP**
- No published AI competency standard operationally defined
- Swissdamed Tier 1/Tier 2 classification with criteria not calibrated for independent practice
- Medical professional liability standard implies human authorization for AI-influenced decisions
- Patient-override-of-AI documentation: no FMH guidance on this specific category

**Consulting ICP (no single body)**
- FINMA where applicable
- No specific consulting AI governance standard
- Client questionnaires substituting for professional body guidance

---

### Layer 3 — Carrier/Underwriter Attestation Instruments

**Mechanism:** Carrier provides attestation form to professional at renewal. Professional has 2–4 weeks to complete. Signature is personal. Attestation submitted to carrier.

**Cross-vertical pattern:** Urgency-driven documentation under deadline. Documentation produced does not satisfy underlying accountability standard. Evidence of attempt to comply ≠ evidence of adequate governance.

**Finance specific:** Multi-carrier variation — different carriers using materially different attestation instruments with different documentation requirements. Boutique managing multiple carrier relationships with compound non-standardized exposure simultaneously.

**Healthcare specific:** Carrier attestation stampede effect — vendor template adoption producing inaccurate self-representation signed by physician who has not evaluated accuracy.

---

### Layer 4 — Formation Layer (Bern Deliberations)

**Scope:** Federal Council AI regulation deliberation, AI Convention implementation preparation, sector-specific standard-setting in professional body committees.

**Critical distinction:** Formation participation generates intelligence about what standards will actually require and what regulators will accept — not available from published regulations. Participation produces pattern knowledge from which accurate positioning derives.

**Structural moat:** Independent practitioners excluded from formation rooms. Global consultancies cannot replicate informal circuit participation pattern knowledge. Participation is the moat itself — not intelligence extracted from participation.

**Timeline:** AI Convention implementation pending. Federal Council deliberation ongoing. Formation standards will apply to practitioners who had no voice in their creation.

---

## Cross-Vertical Compliance Pattern Map

| Framework | Legal | Finance | Consulting | Healthcare |
|---|---|---|---|---|
| nFADP Art.9 DPA | Required | Required | Required | Required (special category) |
| nFADP Art.63 Liability | Yes (attorney personal) | Yes (executive personal) | Yes (executive personal) | Yes (physician personal) |
| Professional Secrecy Collision | Art.321 StGB + vendor retention | BGFA + sub-processor | Less direct | FMH + patient data |
| Carrier Attestation | PI renewal | Multiple carriers | 6–12 months | NOW + Swissdamed |
| Formation Participation | SAV committee | FINMA/SRO | None | FMH standards |
| Evidence Standard | SAV adequate review | FINMA documentation | Client questionnaire | FMH clinical authorization |

---

## Documentation Architecture Gap: Structural Not Procedural

**The problem:** Attestation forms imply evidence standard: contemporaneous documented human authorization for each AI-assisted decision. Boutique processes were designed for human decision workflows — not this evidence standard.

**Why adding forms does not help:** The gap is architectural. Current process: AI recommendation → professional considers → implements → documents implementation. Required: documented human authorization decision made before implementation. Current process never produces this documentation because the authorization decision is implicit, not documented.

**Implication:** The documentation architecture problem requires a different documentation architecture — designed to produce contemporaneous evidence of authorization from the moment AI is used, not retrospective reconstruction.

---

## Swissdamed Classification Problem (Healthcare-Specific)

**Deadline:** 1 July 2026

**Problem:** Tier 1/Tier 2 classification criteria not calibrated for independent practice scale. No proportionate assessment methodology exists. Practices either over-comply (excessive cost and process) or under-comply (regulatory risk).

**Structural gap:** Classification assessment service proportionate to independent practice does not exist in Geneva market. Carrier attestation + Swissdamed deadline creating simultaneous dual pressure on independent practices.

---

## Agentic AI Authorization Architecture Incompatibility (Finance-Specific)

**Problem:** Authorization frameworks designed for discrete decisions are architecturally incompatible with continuous AI operation. No proportionate methodology for documenting continuous authorization in wealth management context.

**Why this matters:** Agentic AI (portfolio management, rebalancing, risk monitoring) operates continuously. Traditional authorization documentation assumes discrete decision moments. The evidence standard implied by carrier attestation forms cannot be satisfied for continuous AI operation with discrete-authorization documentation frameworks.

**Implication:** This is a structural incompatibility, not an operational gap. Cannot be cured by improving documentation quality. Requires different authorization architecture designed for continuous operation.

---

## Privilege Architecture and Vendor Data Retention Collision (Legal-Specific)

**Problem:** nFADP Art.9 DPA + Art.321 StGB privilege + vendor data retention provisions create a specific unresolved three-party intersection no Geneva authority has mapped.

**Mechanism:** Attorney-client communication protected by Art.321 StGB. AI vendor processing client data through DPA. Vendor's data retention provisions may conflict with privilege protection. No Geneva authority has published guidance on this specific three-party collision.

**Implication:** Attorney using AI on privileged matters faces unresolved legal exposure at the intersection of three frameworks designed without reference to each other.

---

## Cross-Vertical Compliance Timeline

**NOW (Q2 2026):**
- Legal: PI carrier renewal with AI attestation
- Finance: Institutional DDQ second-generation
- Healthcare: Carrier attestation + Swissdamed deadline 1 July 2026
- All verticals: nFADP Art.9 DPA obligations running without proportionate compliant DPAs available

**6–12 months:**
- Consulting: Client AI DDQ wave arriving
- Healthcare: Carrier attestation pressure intensifying
- Finance: Multi-carrier attestation evolution continuing
- Legal: SAV AI register requirement possibly formalizing

**12–24 months:**
- AI Convention implementation
- FINMA guidance update cycle
- Federal Council AI regulation
- Swissdamed enforcement phase