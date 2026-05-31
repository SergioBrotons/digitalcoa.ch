# Phase 04 — Compliance Context: Geneva Healthcare — C312 Cycle

**Phase:** 04 — Geneva Healthcare
**Cycle:** C312
**Date:** 2026-05-31
**Status:** COMPLETE

---

## Compliance Context (C312 Phase 04)

### Switzerland Regulatory Landscape for Geneva Healthcare AI Accountability

The Geneva healthcare vertical operates within a multi-layered regulatory environment. Five regulatory frameworks interact in the C312 healthcare evidence architecture:

1. **FMH (Foederatio Medicorum Helveticorum)** — Professional medical standards, human oversight obligations
2. **Swissmedic** — Medical device regulation, AI diagnostic tool certification, operator classification
3. **nFADP (Swiss Federal Act on Data Protection)** — Patient data protection, automated decision-making rights
4. **HIN (Health Info Net)** — Secure health data transport infrastructure
5. **Carrier Attestation Requirements** — Private health insurer AI attestation forms

Each framework creates specific documentation requirements that interact with each other — and none of them provide an integrated evidence architecture.

---

### Framework 1: FMH Human Oversight Obligations

**Current Status:** FMH has stated the principle of human oversight for AI-assisted medical decisions. The principle is published. The operational protocol is not.

**C312 Regulatory Development:** FMH has not published specialty-specific human oversight protocols for AI-assisted diagnostic decisions. The question of what "adequate human oversight" means for a general practitioner using AI diagnostic support tools — versus a specialist using the same tool — has not been resolved at the FMH level.

**The Documentation Gap:** FMH's silence creates a documentation paradox for physicians: they are personally accountable for maintaining human oversight, but there is no FMH-defined standard against which their oversight can be measured. The physician must design their own oversight protocol — and document that they designed it, implemented it, and maintained it.

**C312 NET-NEW Compliance Dimension:** FMH has not addressed how specialty-specific AI authorization chains interact with human oversight obligations. The question "did you maintain adequate oversight of the AI tool you authorized within your specialty scope?" requires documentation of both the authorization and the oversight system.

**Practical Implication:** A physician-designed, documented, and implemented FMH human oversight protocol is evidence of active compliance engagement. It is not FMH-approved — FMH has not approved any protocol. It is the physician's protocol, demonstrating responsible self-regulation in the absence of official guidance.

---

### Framework 2: Swissmedic Device and Operator Regulation

**Current Status:** Swissmedic certifies AI-enabled medical devices. Swissmedic defines "operator" obligations for physicians who use certified devices. Vendor certification does not equal physician operator classification.

**The Operator Classification Question:** Swissmedic defines an "operator" as a person who uses a medical device for its intended purpose. The physician who uses an AI diagnostic tool is likely an operator under Swissmedic rules. However, the specific classification depends on: (1) the tool's Swissmedic certification status, (2) the physician's intended use within their FMH specialty scope, and (3) the data flow architecture of the AI tool deployment.

**C312 NET-NEW Compliance Dimension:** Swissmedic has not resolved how EMR-AI data flow architecture affects operator classification. If patient data routes through processing servers outside Switzerland, does that change the operator's classification obligations? Swissmedic's position at the federal level is: this question is under review.

**The Three-Dimensional Operator Classification (C312):**
1. **Use dimension:** How does the physician use the AI tool within their FMH specialty scope?
2. **Certification dimension:** Does the AI tool have valid Swissmedic certification for the intended use?
3. **Data flow dimension:** Where does patient data go for processing, and does the routing affect the operator's classification?

**C312 NET-NEW Compliance Dimension:** The data flow dimension is new in C312. Swissmedic has not issued guidance on whether EMR-AI data flow routing outside the HIN corridor affects the physician's operator classification.

**Practical Implication:** The Swissmedic operator classification assessment must now address all three dimensions. A classification opinion that addresses only the use and certification dimensions may be incomplete.

---

### Framework 3: nFADP (Swiss Federal Act on Data Protection)

**Current Status:** nFADP governs patient data protection in Switzerland. Article 6 requires data minimization. Article 63 creates personal liability for managing directors of organizations that process personal data. Articles related to automated decision-making give data subjects rights regarding AI-influenced decisions.

**The Data Minimization Conflict (C310 confirmed):** AI diagnostic tools require comprehensive patient data to function. nFADP Article 6 requires data minimization. No published resolution exists for clinical AI use in Switzerland. This is not resolved — it is an active compliance tension that physicians must document a resolution for.

**C312 NET-NEW nFADP Dimension — Patient Conversation Activation:** nFADP Article 63 personal liability is activating through patient conversations, not just carrier forms. When a patient asks whether AI was involved in their diagnosis, and the physician responds, that response creates a documented record in the patient's file. If the patient later asserts nFADP rights regarding the AI-assisted decision, the physician's documented response is evidence of either adequate disclosure or inadequate consent architecture.

**The Three nFADP Pressure Points for Healthcare:**
1. **Data processing authorization:** Can the physician document the legal basis for processing comprehensive patient data through AI tools? (Article 6 question)
2. **Automated decision-making rights:** Does the patient have rights regarding AI-influenced diagnostic decisions? Has the physician provided appropriate disclosure? (Article related to automated decisions)
3. **Patient conversation documentation:** Does the physician have a documented response protocol for patient questions about AI involvement? (Article 63 activation point)

**C312 NET-NEW Compliance Dimension:** The patient consent architecture for AI-assisted diagnostic decisions must address all three nFADP pressure points simultaneously. No published consent form language exists for this specific use case in Geneva primary care.

---

### Framework 4: HIN (Health Info Net)

**Current Status:** HIN provides secure health data transport infrastructure in Switzerland. HIN-connected systems can exchange health data securely. HIN certification means transport security meets Swiss standards.

**The HIN Corridor Scope:** HIN covers transport security — the transmission of health data between HIN-connected systems. HIN does not cover: (1) AI tool certification, (2) processing environment security of AI tools, (3) data routing from HIN-connected systems to external processing servers.

**C312 NET-NEW Compliance Dimension:** The EMR-AI data flow gap is the critical HIN-related compliance issue for C312. When patient data leaves the HIN-protected EMR and routes to AI processing servers outside the HIN corridor, the physician's HIN connection does not cover that data flow. The question carriers are beginning to ask: where does the data go after it leaves the HIN corridor?

**The Practical Implication:** A HIN connection does not equal comprehensive data protection for AI-assisted diagnostic workflows. The physician needs a data flow diagram showing: (1) HIN-protected EMR, (2) routing path to AI processing servers, (3) processing environment, (4) data retention and deletion policy. This diagram is a specific evidence architecture component.

---

### Framework 5: Carrier Attestation Requirements

**Current Status:** Private health insurers in Switzerland send AI attestation forms to physicians. These forms have evolved from practice-level attestation to physician-personal attestation — requiring the physician's name, FMH license number, and personal certification of human oversight.

**The Carrier Form Evolution (C308 → C312):**
- **C308:** Carrier forms asked about AI tool use at the practice level
- **C309:** Carrier forms began requiring physician-personal attestation
- **C310:** Carrier forms began asking about 2023-2024 AI deployment dates
- **C311:** Carrier forms began asking about staff AI delegation, OaF survey calibration, clinical reasoning documentation
- **C312:** Carrier forms are beginning to ask about specialty-specific authorization scope and EMR-AI data flow architecture

**C312 NET-NEW Carrier Dimension:** The carrier form is now interrogating the architecture of AI deployment — not just whether AI was used, but how it was authorized, where data flows, and what the physician's specialty scope was at the time of authorization. This is a more sophisticated set of questions than prior carrier forms asked.

**The Pre-Signing Intervention Point:** The highest-value intervention point is still pre-signing — reviewing the carrier form before the physician signs, identifying documentation gaps, and calibrating the physician's evidence to the specific questions asked. This service has not been built by any competitor.

---

## Compliance Cross-Reference Table

| Compliance Question | FMH | Swissmedic | nFADP | HIN | Carrier |
|---|---|---|---|---|---|
| Human oversight standard | Principle stated, protocol absent | Operator obligation | Automated decision rights | Transport security | Attestation requirement |
| AI tool authorization | Specialty scope relevant | Device certification required | Data processing authorization | Data flow architecture | Authorization chain |
| Patient consent for AI | Informed consent standard | Disclosure obligation | Article automated decisions | Not covered | Not asked |
| EMR-AI data flow | Not addressed | Operator classification relevant | Data minimization conflict | HIN corridor gap | Carrier question emerging |
| Medical liability coverage | Not addressed | Not addressed | Not addressed | Not addressed | Not addressed |
| Patient AI questions | Not addressed | Not addressed | Article 63 activation | Not covered | Not asked |

---

## The Five Regulatory Frameworks and Their Documentation Gaps

### Gap 1: No FMH-Defined Specialty-Specific AI Authorization Protocol

FMH has stated human oversight obligations. FMH has not defined what specialty-specific AI authorization documentation looks like. The physician must design this themselves.

### Gap 2: No Swissmedic Guidance on Data Flow Architecture and Operator Classification

Swissmedic has not issued guidance on whether EMR-AI data flow routing outside the HIN corridor affects operator classification. This is under review at the federal level.

### Gap 3: No Published nFADP Consent Architecture for AI-Assisted Diagnostics

nFADP gives patients rights regarding automated decisions. No published consent form language addresses AI-assisted diagnostic decisions in primary care. The physician must design their own consent architecture.

### Gap 4: No HIN Corridor Coverage for EMR-AI Processing Data Flows

HIN covers transport security. HIN does not cover AI processing environments or data routing paths. The physician's HIN connection does not certify the AI tool's processing security.

### Gap 5: No Carrier Form Pre-Signing Documentation Review Service

Carrier attestation forms now require physician-personal certification. No competitor offers pre-signing documentation review that identifies specific gaps before the physician signs.

---

## C312 Phase 04 Compliance Context — Core Insight

Five regulatory frameworks interact in the C312 healthcare evidence architecture — and all five have documentation gaps that are the physician's responsibility to close:

1. **FMH:** Human oversight principle stated; specialty-specific authorization protocol absent; physician designs their own
2. **Swissmedic:** Operator classification multi-dimensional (use + certification + data flow); data flow dimension unresolved at federal level
3. **nFADP:** Data minimization conflict active; patient conversation is Article 63 activation point; consent architecture absent
4. **HIN:** Transport security covered; processing environment and routing path not covered; physician responsible for knowing where data goes
5. **Carrier:** Form sophistication escalating (authorization scope + data flow architecture); pre-signing review service unoccupied

The C312 compliance context is distinct from prior cycles because the regulatory questions are now architectural — they concern the structure of the AI deployment, not just whether AI was used. Authorization scope, data flow routing, patient consent architecture, and insurance coverage confirmation are structural questions that require structural documentation.

---

*C312 Phase 04 Compliance Context — complete. Five regulatory frameworks analyzed. FMH, Swissmedic, nFADP, HIN, Carrier attestation all have specific documentation gaps the physician must close personally. Data flow architecture as new C312 compliance dimension.*
