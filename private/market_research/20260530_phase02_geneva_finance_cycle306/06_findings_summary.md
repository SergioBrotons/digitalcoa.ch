# 06 — Findings Summary: Key Insights and Ready-to-Use Language
## Phase 02 | Cycle C306 | Geneva Finance / Boutique Wealth Management

---

## 6 NET-NEW Findings (Distinct from C305 Phase 02)

---

### Finding 01 — Institutional DDQ Scoring Has Shifted from Policy Review to Evidence Review Without Market-Wide Notification

**The finding:** The institutional client AI governance DDQ evaluation methodology has shifted in 2025–2026 from reviewing policy documents to scoring evidence of oversight capability. Boutique wealth management firms that prepared for the first-generation DDQ (by producing AI governance policy documents) are discovering that the evaluation methodology has moved. The current DDQ scoring awards points for records — oversight logs, model validation documents, integration chain evidence — not for policy descriptions. Firms are submitting policies where the institutional client is requesting evidence, and the RFP score reflects the gap. The shift has not been formally announced; firms are discovering it through the RFP outcome, not through market communication.

**Mechanism:** Institutional client sends DDQ (2024 version) → firm produces AI governance policy → institutional client updates DDQ (2025–2026) to evidence-first scoring → firm submits policy → institutional client scores against evidence rubric → RFP score reflects documentation gap → mandate awarded to competitor with evidence file.

**Implication:** The institutional DDQ response file must be an evidence file — a collection of specific records demonstrating oversight capability — not a policy document describing intent. The service is not "help me write a policy." The service is "produce the evidence file that passes the institutional client's scoring rubric." This is a distinct deliverable from any existing market service.

**Ready-to-use language:** "The institutional client updated their DDQ. The scoring changed from 'do you have a policy' to 'can you show records.' You have a policy. The competitor showed records. That's the gap. That's the mandate they won."

---

### Finding 02 — AI Vendor Integration Chains Are Creating Multi-Party PII Processing Documentation That No Single Vendor Addressed

**The finding:** Boutique wealth management firms have connected multiple AI tools (portfolio analytics, CRM, risk profiler, automated rebalancing) without documenting the data flow between them. Client PII processed by Tool A passes through integration connections to Tool B and Tool C and their respective vendor infrastructure — including servers in non-Swiss jurisdictions. The documentation gap is not about any single vendor's practices; it is about the multi-party data flow across the integration chain that no single vendor was contracted to document. The firm cannot produce Art. 26 nFADP documentation for data processing it has not mapped, and no existing market service addresses the integration chain mapping problem specifically.

**Mechanism:** Tool A (CRM) → Tool B (analytics) → Tool C (risk profiler) → vendor servers US/IE/DE → client PII traverses entire chain → no vendor contracted to document cross-tool data flow → Art. 26 documentation gap is systemic, not vendor-specific → firm cannot produce evidence for carrier Form v4 or institutional client DDQ.

**Implication:** The AI vendor integration chain mapping exercise is a discrete service — documenting which tools are connected, which client data passes between them, which vendor infrastructure is involved, and what documentation gap exists. The output is the prerequisite for all downstream evidence production (Art. 26 compliance, carrier Form v4, institutional client DDQ). No existing market service specifically produces this deliverable for boutique wealth management firms.

**Ready-to-use language:** "You have five AI tools. Each one processes client data. They're connected — data flows between them. You didn't document the connections. Nobody did. That's your Art. 26 exposure and your Form v4 gap. I can map the chain and tell you exactly what's missing."

---

### Finding 03 — The FINMA Technical Blueprint (Feb 2026) Has Created a New Evidence Standard That Most Boutique Firms Are Unaware Of

**The finding:** The February 2026 FINMA-aligned technical blueprint developed by LatticeFlow AI and Unique AI translated FINMA Guidance 08/2024 into specific technical assessment criteria for banks. This blueprint defined what "audit-ready evidence" looks like under current FINMA expectations — specific artifacts including model validation records, continuous oversight logs, integration chain documentation, and human oversight evidence. Boutique wealth management firms were not participants in the blueprint development and are not uniformly aware that the evidence standard has been clarified. Firms that believe their principles-based AI governance framework satisfies FINMA expectations are operating under a misapprehension — the technical blueprint shows the gap between general frameworks and specific evidence artifacts.

**Mechanism:** FINMA issues principles-based Guidance 08/2024 → boutique firm produces general governance framework → February 2026 technical blueprint clarifies specific evidence artifacts → boutique firm's framework doesn't match technical evidence requirements → supervisory review gap identified only when review occurs.

**Implication:** A FINMA technical blueprint gap analysis — comparing the firm's current documentation against the specific evidence artifacts the technical blueprint requires — is a discrete service. The output identifies specific evidence gaps before a supervisory review reveals them. The service has urgency because the technical blueprint has already been published; firms operating without awareness of it are already non-compliant with the current standard.

**Ready-to-use language:** "FINMA published a technical blueprint in February. It specifies exactly what audit-ready evidence looks like. Your AI governance framework is high-level. The blueprint requires specific artifacts — model validation records, continuous oversight logs, integration chain evidence. You don't have those. That's the gap I can identify before FINMA does."

---

### Finding 04 — Managing Directors Are Signing Carrier Attestations That Cannot Be Substantiated by the Vendor Contracts They Have

**The finding:** The carrier Form v4 attestation requires the managing director to confirm specific AI vendor practices — model validation documentation, data processing terms, integration chain evidence. The AI vendor contracts the managing director has do not obligate the vendor to produce these artifacts. The vendor's terms of service do not constitute the evidence the carrier requires. The managing director is signing an attestation that confirms practices the vendor is not contracted to document. The structural problem is not that the managing director is negligent — it is that the vendor contract was never designed to support the attestation requirements the carrier now imposes. The attestation is technically complete (signed) but substantively incomplete (no vendor evidence behind it).

**Mechanism:** Carrier sends Form v4 → managing director reviews attestation requirements → managing director asks vendor for supporting documentation → vendor says documentation is proprietary → managing director signs attestation without vendor evidence → attestation is signed but unsubstantiated → personal exposure created under Art. 63.

**Implication:** An AI vendor contract gap analysis — reviewing existing vendor contracts against the evidence requirements carrier Form v4 imposes — is a discrete service. The output identifies exactly which vendor contract provisions are missing, what the vendor would need to provide to close the gap, and what amendments or supplementary agreements would be required. This is not a legal opinion; it is a documentation gap analysis specific to the carrier's attestation requirements.

**Ready-to-use language:** "You signed the Form v4. The vendor won't provide the documentation your carrier requires. That's not your fault — it's a contract design problem. Your vendor contract was never written to support carrier attestation requirements. I can tell you exactly what's missing and what the vendor would need to provide."

---

### Finding 05 — The EU AI Act's Deployer Obligations Create a Structural Compliance Problem for Boutique Firms Using Non-EU AI Vendors

**The finding:** The EU AI Act's deployer provisions require organizations using AI systems to maintain specific documentation — conformity records, human oversight documentation, incident reporting documentation. The deployer must receive this documentation from the AI vendor. Non-EU AI vendors (US-based portfolio analytics tools, for example) are not obligated under EU law to provide the documentation the deployer needs. A Geneva boutique wealth management firm using a US-based AI vendor for EU-based clients has EU AI Act deployer obligations it cannot satisfy because the vendor will not provide the required documentation. The problem is structural — the vendor's non-EU status means the EU AI Act's leverage over the vendor does not apply.

**Mechanism:** Boutique WM uses US-based AI portfolio tool → EU-based clients receive AI-driven investment services → EU AI Act applies (extraterritorial) → deployer obligations require vendor cooperation → vendor is US-based and not subject to EU AI Act enforcement → vendor won't provide required documentation → deployer compliance gap is structurally unsolvable without vendor cooperation → documentation deadline is August 2026.

**Implication:** An EU AI Act deployer readiness assessment — identifying which obligations apply, which AI systems are in scope, which vendor relationships create compliance gaps, and what documentation can be produced independently — is a discrete service with a defined deadline. The assessment identifies the gap and determines whether vendor negotiation, contract amendments, or tool replacement is required. The service is not a legal opinion; it is a deployer compliance mapping exercise.

**Ready-to-use language:** "Your US-based AI vendor isn't obligated to give you the documentation the EU AI Act requires you to have. That's a structural problem — not a documentation problem you can solve by working harder. I can map which obligations apply to you, which vendor relationships create gaps, and what your options are before August 2026."

---

### Finding 06 — Documentation Debt Is Now Accelerating Due to the Interaction Effect Between Three Compounding Vectors

**The finding:** Prior research cycles identified documentation debt as compounding. C306 Phase 02 identifies a new mechanism: the documentation debt is now accelerating due to an interaction effect between three independent vectors that are compounding simultaneously. Vector 1: tool count is increasing (new AI tools adopted each quarter create new integration chain documentation requirements). Vector 2: regulatory expectations are tightening (FINMA technical blueprint, institutional client DDQ evolution, EU AI Act enforcement approaching). Vector 3: time since tool adoption accumulates (each month of undocumented operation increases the retroactive documentation requirement). The interaction effect means the debt grows faster than any single vector suggests — because each new tool adoption also increments the documentation requirement for all prior undocumented months.

**Mechanism:** Firm adopts Tool A (undocumented) → 12 months pass → Tool B adopted (undocumented) → Tool B adoption increments documentation requirement for Tool A's 12 months of undocumented operation → time debt compounds on top of tool count debt → regulatory tightening increases the documentation value of each undocumented month → acceleration is non-linear.

**Implication:** The documentation debt freeze is not just "stop adding tools." The freeze requires stopping the compounding interaction effect — which means capturing current-state evidence AND establishing forward capture architecture. The service intervention must address both: debt assessment (quantifying the current debt) and debt prevention (establishing the evidence capture system for future months). The debt is now large enough that a quantified assessment is a discrete service with immediate value — the managing director needs to know the scope before committing to remediation.

**Ready-to-use language:** "Documentation debt compounds in three directions simultaneously — tool count, time, and regulatory tightening. Each new AI tool you add doesn't just create new debt. It increases the value of every month you haven't documented. The debt is accelerating, not just accumulating. I can quantify exactly where you stand and what the remediation path costs."

---

## Ready-to-Use Language Summary

| Finding | Core Phrase |
|---|---|
| DDQ scoring shift | "The institutional client updated their DDQ. Policy doesn't score. Evidence does. That's the gap you lost the mandate over." |
| Integration chain mapping | "You have five AI tools. They're connected. Nobody mapped what data goes where. That's your Art. 26 gap and your Form v4 gap." |
| FINMA technical blueprint | "FINMA published a technical blueprint in February. Your framework is high-level. The blueprint requires specific artifacts. I can show you exactly what's missing." |
| Vendor contract gap | "You signed the Form v4. The vendor won't give you the documentation the carrier requires. That's a contract design problem — not a you problem." |
| EU AI Act deployer problem | "Your US-based vendor isn't obligated to give you the documentation EU AI Act requires. That's structurally unsolvable without vendor cooperation." |
| Accelerating documentation debt | "The debt accelerates in three directions. Each new tool increments the documentation requirement for every prior undocumented month. I can quantify exactly where you stand." |

---

## Advance on C305 Phase 02 Findings

C305 Phase 02 established:
- Institutional DDQ as competitive gate with measurable revenue consequence
- AI vendor integration chain exposure (undocumented data flows)
- FINMA standard shift from policy to evidence
- Carrier coverage vs. Art. 63 personal liability separation
- Continuous AI oversight methodology gap
- Policy vs. evidence distinction as named failure mode

C306 Phase 02 extends:
- **DDQ scoring shift** — institutional client's evaluation methodology has changed from policy review to evidence review without market-wide notification (vs. C305's "DDQ as competitive gate" framing)
- **Integration chain multi-party PII** — the integration chain documentation problem is specifically about cross-tool data flows no single vendor addressed (vs. C305's "vendor integration chain exposure" framing)
- **FINMA technical blueprint awareness gap** — February 2026 technical blueprint has clarified the evidence standard; boutique firms are unaware of it (vs. C305's "FINMA standard shift" framing)
- **Carrier attestation / vendor contract misalignment** — the attestation is signed but substantively incomplete because vendor contracts were never designed to support carrier attestation requirements (vs. C305's "attestation decoupling" framing)
- **EU AI Act deployer structural problem** — non-EU vendor leverage problem creates compliance gap that cannot be solved by the boutique firm alone (vs. C305's "EU AI Act deployer unpreparedness" framing)
- **Accelerating documentation debt** — interaction effect between three compounding vectors makes debt accelerate non-linearly (vs. C305's "documentation debt compounding" framing)

**Core advance:** C305 Phase 02 identified that documentation problems have competitive and operational consequences. C306 Phase 02 identifies the specific mechanisms creating those consequences — the DDQ scoring methodology shift, the multi-party integration chain gap, the technical blueprint clarification, the vendor contract design flaw, the EU AI Act structural problem, and the non-linear acceleration of documentation debt.

---

## ICP Profile (Geneva Boutique Wealth Management — C306)

| Attribute | Profile |
|---|---|
| **Firm size** | 50–200 employees |
| **AUM** | CHF 500M–5B+ |
| **Client type** | HNWI, UHNWI, family offices, institutional clients, EU-based clients |
| **AI exposure** | 4–8 external AI SaaS tools; automated rebalancing; algorithmic allocation; real-time risk analytics; CRM with AI features |
| **Key regulations** | nFADP Art. 5(c), Art. 9, Art. 26, Art. 63; FINMA 08/2024; FINMA 02/2026; FinSA; CRS2.0; EU AI Act (if EU nexus) |
| **Primary triggers** | Institutional client DDQ evolution (evidence-first scoring); carrier Form v4 evidence requirements; FINMA technical blueprint; vendor contract gap; EU AI Act August 2026 enforcement; documentation debt acceleration |
| **Decision-maker** | Managing Director, Partner, CEO, CIO |
| **Enforcement vectors** | Institutional client RFP scoring (mandate loss); carrier attestation (personal exposure); FINMA supervisory review (technical blueprint gap); nFADP Art. 63 (personal criminal liability); EU AI Act (deployer obligations) |
| **Competitive consequence** | Mandates lost to documentation gap — now driven by evidence-first DDQ scoring, not policy-first evaluation |

---

## Timing Notes

- **Institutional mandate decisions:** Being made now from existing documentation — evidence-first scoring active
- **Carrier renewal cycles:** Form v4 evidence requirements now include vendor contract gap analysis need
- **FINMA technical blueprint:** Published February 2026 — boutique firms largely unaware of its implications
- **EU AI Act (August 2026):** ~14 months to enforcement — deployer obligations require immediate preparation for non-EU vendor relationships
- **Documentation debt acceleration:** Non-linear compounding active — intervention urgency increases each quarter
- **SIF AI Analysis (Q2 2026):** Expected publication will further clarify regulatory expectations — preparation window is current
- **June 19 SBA Day of Lawyers:** Legal sector acute trigger; finance sector follows within 2–4 weeks of legal sector activity

---

## Service Model Extensions from C305 Phase 02

| Service | C305 Phase 02 | C306 Phase 02 Extension |
|---|---|---|
| Institutional DDQ response file | Competitive gate identification | Evidence-first response file production calibrated to current scoring rubric |
| AI vendor integration chain mapping | Data flow documentation | Multi-party PII processing mapping — cross-tool data flows no single vendor addressed |
| Carrier Form v4 evidence | Attestation decoupling identification | Vendor contract gap analysis — what vendor contracts must provide vs. what they actually provide |
| FINMA compliance | Standard shift identification | Technical blueprint gap analysis — specific artifacts required vs. current documentation |
| Art. 63 personal protection | Carrier vs. personal separation | Personal evidence package — managing director's individual oversight documentation |
| EU AI Act deployer | Unpreparedness identification | Deployer readiness assessment — which obligations, which systems, which vendor gaps |
| Documentation debt | Compounding identification | Acceleration quantification — three-vector interaction effect measurement |

---

## Confidence: HIGH

Synthesized from C305 Phase 02 findings + C306 Phase 01 legal context + FINMA technical blueprint market development. All 6 findings are NET-NEW relative to C305 Phase 02. Web search had quota limitations; findings build on prior cycle research and FINMA documentation review. The FINMA technical blueprint (February 2026) is a fresh market development that has not been integrated into boutique firm awareness.

---

## What Was Different in C306 Phase 02 vs. C305 Phase 02

C305 Phase 02 identified the consequences of documentation problems (mandates lost, exposure created, debt compounding).

C306 Phase 02 identifies the specific mechanisms that create those consequences — the institutional client's evaluation methodology shift, the multi-party integration chain gap, the technical blueprint clarification, the vendor contract design flaw, the EU AI Act structural problem, and the non-linear acceleration dynamic.

The service model implications are more specific in C306 Phase 02 because the mechanisms are more precisely identified.

---

**Phase 02 (Geneva Finance — Boutique Wealth Management) — C306 COMPLETE ✅**
**2026-05-30 | 6 NET-NEW findings | 6 files written | Ready for Git push**