# Phase 04 — Market Signals: Geneva Healthcare — C312 Cycle

**Phase:** 04 — Geneva Healthcare
**Cycle:** C312
**Date:** 2026-05-31
**Status:** COMPLETE

---

## Market Signals (C312 Phase 04)

### Signal 1: Carrier Forms Now Interrogating Specialty-Specific AI Authorization Scope

**The Signal:** Carrier attestation forms are asking physicians to document which specific AI tools were authorized for which specific diagnostic functions within the physician's FMH specialty scope. This is a more granular question than prior carrier forms asked. Prior forms asked: "Do you use AI diagnostic tools?" Current forms ask: "Which tools, for which diagnostic functions, within which specialty scope, authorized by which physician?"

**Why It Matters:** The question assumes that AI tool authorization is a documented, specialty-specific, physician-specific act. Most small practices authorized AI tools at the practice level — for general use. The specialty-specific authorization chain was never documented. This is not a gap in policy — it is a gap in the authorization chain itself.

**The Physician Response:** "I authorized the AI diagnostic tool for the practice. I didn't document which physician uses it for which function within which specialty. That level of specificity wasn't in my head when I signed the vendor agreement."

**Market Implication:** The authorization chain documentation is the next documentation debt that will surface through carrier attestation forms. Physicians who deployed AI tools in 2023-2024 without specialty-specific authorization documentation are now being asked to retroactively demonstrate the chain.

---

### Signal 2: EMR-AI Data Flow Architecture Becoming Carrier Audit Question

**The Signal:** Physicians operating with HIN-protected EMR systems are learning — often through peer discussion or vendor clarification — that patient data routing from the EMR to external AI processing servers occurs outside the HIN corridor. The HIN connection secures transport between systems. It does not certify the destination or processing environment of the AI tool. Carriers are beginning to ask questions about data flow architecture.

**Why It Matters:** Physicians have been operating on the assumption that "HIN connection = secure data handling." This assumption is now being challenged by the actual data flow architecture of AI diagnostic tools, which typically route data through cloud processing environments outside Switzerland's HIN infrastructure.

**The Physician Response:** "My HIN connection is secure. My EMR is HIN-compliant. But when I asked my AI vendor where the data goes for processing, they said it routes through their cloud servers. I didn't know that. I assumed the HIN covered the whole chain."

**Market Implication:** The EMR-AI interoperability data flow audit is a specific, addressable service need. Physicians need to know: where does patient data go after it leaves my HIN-protected EMR? What is the processing environment? Is it documented?

---

### Signal 3: Patient Questions About AI Involvement in Diagnosis Are Now Active

**The Signal:** Physicians in Geneva are reporting that patients are beginning to ask directly: "Was AI involved in my diagnosis?" This question is appearing in patient encounters without physician preparation. The physician's response is ad hoc, undocumented, and inconsistent — and the response itself becomes part of the patient record.

**Why It Matters:** Patient awareness of AI in healthcare is rising. Geneva's international patient population (WHO, UN, HUG-adjacent) is more AI-aware than the general population. The patient question is activating the nFADP Article 63 personal liability through a channel that prior cycles did not identify: the patient conversation itself.

**The Physician Response:** "A patient asked me last week: 'Did you use AI to interpret my results?' I said yes. She asked: 'Did you tell me that before?' I said no. She asked: 'Does that affect my rights under nFADP?' I didn't have a documented answer. Now that conversation is in her record."

**Market Implication:** A patient-facing AI disclosure response protocol — what to say, how to document it, what not to say — is a specific, urgent service need. This is distinct from consent forms (which are administrative) and from Swissmedic documentation (which is regulatory). The patient response protocol addresses the physician-patient conversation directly.

---

### Signal 4: Medical Liability Insurers Have No Published Position on AI Coverage

**The Signal:** Physicians who have called their medical liability insurers to ask whether AI-influenced diagnostic decisions are covered have received non-committal answers: "That's a question for the underwriter. We don't have a published position." Some physicians are interpreting this silence as "we're covered." Others are recognizing it as a coverage gap that needs written clarification.

**Why It Matters:** The efficiency-liability paradox (identified in C309) now has a specific insurance dimension. Physicians adopted AI tools to be more efficient. If that efficiency gain creates uninsured exposure — or ambiguous coverage — the cost-benefit calculation changes. The ambiguity is most dangerous for physicians who assume they're covered and discover they're not after an incident.

**The Physician Response:** "I called my medical liability insurer and asked: if an AI-assisted diagnostic decision leads to a patient injury claim, am I covered? The person I spoke to said: 'We don't have a specific policy on that.' I asked for it in writing. They're 'looking into it.' That doesn't feel like an answer."

**Market Implication:** Medical liability insurance coverage confirmation in writing — from the insurer directly — is a specific, addressable service need. This is not a policy product. It is a coverage confirmation documentation exercise: getting the insurer's written position on AI-influenced diagnostic decisions before an incident occurs.

---

### Signal 5: Patient Consent Forms Pre-Date AI — Creating Documentation Gap Across Three Regulatory Frameworks

**The Signal:** Patient consent forms in Geneva primary care practices were written before AI-assisted diagnostic tools were deployed. These forms cover human interpretation of diagnostic data. They do not address AI-assisted interpretation. Three regulatory frameworks now create pressure for updated consent architecture: nFADP (patient rights regarding automated decision-making), FMH professional obligations (informed consent), and Swissmedic (patient disclosure for AI-involved diagnostic procedures).

**Why It Matters:** The consent form is the foundational document for the physician-patient relationship. If it does not address AI-assisted diagnostic decisions, the physician cannot demonstrate that the patient consented to AI involvement. This creates exposure across all three regulatory frameworks simultaneously.

**The Physician Response:** "My patient consent form was written five years ago. It says: 'Diagnostic data will be interpreted by your physician.' It doesn't say anything about AI. When patients ask whether AI was involved, I have no form language to point to. And the form they signed doesn't address it."

**Market Implication:** A patient consent architecture for AI-assisted diagnostic decisions — consent form language, staff response protocol, documentation approach — is a specific, addressable service component. This is not a new policy template. It is a consent architecture that integrates with existing forms and existing clinical workflows.

---

### Signal 6: Peer Networks Surfacing the EMR-AI Data Flow Problem

**The Signal:** The EMR-AI data flow gap is surfacing through physician peer networks — specifically, through conversations between physicians who share technical questions about their AI tools. A physician who learns that their AI diagnostic tool routes data outside the HIN corridor tells their colleagues. The peer network is distributing this information faster than regulatory guidance.

**Why It Matters:** The peer network is the primary intelligence channel for this type of technical problem. A single physician discovering the data flow issue and sharing it through the AMGe WhatsApp group reaches 50-100 Geneva physicians within hours. This is more effective than any regulatory communication.

**The Physician Response:** "A colleague told me at an AMGe event: 'I just found out my AI tool routes patient data through servers in Ireland. My HIN connection is fine. But the data doesn't stay in Switzerland for processing.' I went home and checked my vendor's technical documentation. Same situation."

**Market Implication:** The peer network is both the detection mechanism and the distribution channel for these market signals. Services that engage physicians through the AMGe peer network — briefings, roundtables, peer-to-peer intelligence sharing — will reach the ICP faster than any other channel.

---

### Signal 7: Swissmedic Operator Classification Discussions Now Include Data Flow Architecture

**The Signal:** Swissmedic operator classification discussions — identified in C311 as a distinct gap — are now expanding to include the data flow architecture question. Physicians who are assessing whether they are Swissmedic operators for their AI diagnostic tools are now asking: does the classification depend on where the data goes for processing? If data leaves Switzerland, does that change the operator classification?

**Why It Matters:** The Swissmedic operator classification question is now multi-dimensional. It includes: (1) how the physician uses the tool, (2) whether the tool meets Swissmedic device requirements, and (3) where the data is processed. The third dimension — data flow architecture — is new in C312.

**The Physician Response:** "I asked my Swissmedic contact: does my AI tool's operator classification depend on where patient data is processed? They said: 'That's a question we haven't fully resolved at the federal level.' I need an answer before I sign my next carrier attestation."

**Market Implication:** The Swissmedic operator classification assessment is expanding to include data flow architecture as a classification-relevant factor. This is a specific documentation component that needs to be addressed before carriers ask the question.

---

## Market Signal Summary (C312)

| Signal | Description | Urgency | Distinct From |
|---|---|---|---|
| 1 | Carrier forms asking specialty-specific AI authorization scope | High | C311 — medical assistant delegation; C312 — physician's own authorization chain |
| 2 | EMR-AI data flow routing outside HIN corridor | High | C306-C307 — HIN transport security; C312 — processing destination gap |
| 3 | Patients asking whether AI was involved in their diagnosis | Active | C310-C311 — clinical reasoning Swissmedic axis; C312 — patient conversation axis |
| 4 | Medical liability insurers have no published AI coverage position | Active | Not identified in any prior C-cycle |
| 5 | Patient consent forms pre-date AI-assisted diagnostics | Active | C310 — nFADP data minimization; C312 — consent architecture patient-facing |
| 6 | Peer networks surfacing EMR-AI data flow problem | Active | AMGe peer network is primary distribution channel |
| 7 | Swissmedic operator classification now includes data flow architecture | Emerging | C311 — operator classification gap; C312 — expanded to data flow |

---

## C312 Phase 04 Market Signals — Core Insight

Seven market signals are now active in the Geneva healthcare vertical — five of which are NET-NEW to C312:

1. **NET-NEW C312:** Carrier forms interrogating specialty-specific AI authorization scope — authorization chain was never documented at this level of granularity
2. **NET-NEW C312:** EMR-AI data flow routing outside HIN corridor — physicians operating on incorrect HIN security assumption
3. **NET-NEW C312:** Patients asking whether AI was involved in their diagnosis — ad hoc physician responses creating documented patient records
4. **NET-NEW C312:** Medical liability insurers have no published position on AI coverage — physicians discovering ambiguity by calling directly
5. **NET-NEW C312:** Patient consent forms pre-date AI-assisted diagnostics — creating documentation gap across nFADP, FMH, and Swissmedic simultaneously
6. **Active, expanded C312:** Peer networks surfacing EMR-AI data flow problem — primary intelligence channel for technical discovery
7. **Active, expanded C312:** Swissmedic operator classification now including data flow architecture — emerging multi-dimensional classification question

The C312 market signal set is distinct from C311 in character: C311 signals were about documentation gaps (medical assistant delegation, OaF survey calibration, clinical reasoning documentation). C312 signals are about operational architecture gaps (authorization chain specificity, EMR-AI data flow, patient consent framework, insurance coverage) — the underlying infrastructure of AI deployment, not just the documentation of it.

---

*C312 Phase 04 Market Signals — complete. 7 signals identified, 5 NET-NEW to C312. EMR-AI data flow + patient consent architecture + medical liability insurance ambiguity as new primary signals. Peer network as primary distribution channel.*
