# Findings Summary: Geneva Boutique Wealth Management — C310 Phase 02

## 6 NET-NEW Findings — Distinct from All Prior Cycles C214–C309

---

## Building on C309 Phase 02

C309 Phase 02 established: institutional DDQ as competitive gate (commercial consequence, not just compliance cost), nFADP Article 63 personal liability for investment decisions (distinct from carrier attestation exposure), FINMA human oversight operationalization gap (principles without procedure), vendor AI governance contract gap, portfolio AI shadow systems (associate-implemented without MD authorization), and FINMA "adequate" gap (undefined at boutique scale).

C310 Phase 02 builds on C309. The ICP at C310 has received the institutional DDQ — or expects to receive it — and discovered the questions have changed structure since C309. The DDQ has shifted from firm-level to matter-level. The authorization chain is not just absent — it runs through vendor implementation and associate activation in a way that creates compound liability. The model drift documentation obligation has become visible. The two-document problem (carrier attestation vs. institutional DDQ) is creating false security. And the multi-mandate coherence problem is specific to WM firms managing multiple institutional relationships.

The structural insight of C310 Phase 02: **the institutional DDQ is not a compliance document — it is a competitive intelligence document. No one is reading it as such.**

---

### Finding 01: The Institutional DDQ Has Shifted from Firm-Level to Matter-Level — The Documentation Design Problem

**The finding:** The institutional AI governance DDQ has structurally shifted from asking firm-level questions ("do you have an AI governance policy?") to asking matter-level questions ("provide evidence of human authorization for the AI systems used in managing our assets — who authorized each system, when, on what basis, and what was reviewed before recommendations reached us?"). This is the same structural shift documented in C310 Phase 01 for legal carrier forms — applied here to the institutional DDQ. The boutique WM firm has been producing firm-level documentation (policy, vendor list, framework statement) while the institutional DDQ requires matter-level documentation (specific authorization evidence for specific AI systems in specific portfolio decisions). The documentation architecture required to answer the current DDQ is fundamentally different from what the market has built.

**Mechanism:** Initial DDQ (firm-level) → firm produces policy → DDQ evolves at next cycle to matter-level questions → policy cannot answer authorization evidence questions → firm has no matter-level documentation → institutional client flags the gap in their review of the manager relationship → mandate review initiated.

**Implication:** The DDQ reading is the design specification function. The service that reads the DDQ and maps it to the firm's documentation architecture — before the response is submitted — is the service that prevents the mandate review. The pre-response DDQ review is the equivalent of the pre-signing carrier form review (C310 Phase 01) for the WM ICP.

**Ready-to-use language:** "The institutional DDQ isn't asking if you have a policy. It's asking what happened in specific portfolio decisions. These are different questions. Your documentation architecture needs to answer both."

---

### Finding 02: The Authorization Chain Runs Through Vendor Implementation and Associate Activation — Compound Liability

**The finding:** The boutique WM authorization chain for portfolio AI has a compound structure that creates layered liability: managing director selects the portfolio system → vendor implements the system → associate activates the AI module → AI module generates client-facing recommendations. The MD authorized step one. The MD did not authorize steps two and three. Steps two and three generated recommendations with the MD's name on them. The authorization chain documentation required at each step is absent. The associate who activated the AI module is not accountable under Article 63 — the managing director is. The vendor has no obligation to document the MD's authorization. The compound authorization chain creates a documentation gap that is structurally invisible to the MD until the institutional DDQ asks for evidence.

**Mechanism:** MD selects system (authorized) → vendor implements AI module (unauthorized by MD) → associate activates module (unauthorized by MD) → recommendations go to clients → institutional DDQ asks for authorization evidence → MD cannot produce evidence for steps 2 and 3 → mandate review → Article 63 personal liability confirmed.

**Implication:** The authorization chain documentation is not a single document — it is a multi-step documentation practice covering vendor implementation, associate activation, and MD review. The service that maps this chain and produces the required documentation at each step is the service the C310 WM ICP needs.

**Ready-to-use language:** "Your associate activated the AI module. Your name is on the recommendation. That is your authorization chain — and it has three steps, not one."

---

### Finding 03: Model Drift Documentation Is Now a Live Obligation — The Continuous Operation Problem

**The finding:** The institutional DDQ is beginning to ask for evidence of AI model performance monitoring — not just whether the model exists, but whether its performance is being tracked and reviewed over time. AI models drift: the model that was generating recommendations 18 months ago is not the model generating recommendations today. The boutique WM firm running AI-assisted portfolio construction has been generating recommendations from a model that has changed without documented human review. The model drift documentation obligation is now live — it is not a future concern. The institutional client asking for evidence of AI performance monitoring will receive no defensible documentation from the typical boutique WM firm.

**Mechanism:** AI model deployed → model begins to drift (gradual recommendation pattern change) → MD not monitoring for drift → no documentation of model performance review → 18 months of AI-assisted recommendations from a model that changed without documented human oversight → institutional DDQ asks for model performance evidence → no documentation exists → mandate review triggered.

**Implication:** Model drift documentation is a bounded, specific deliverable: periodic human review of AI model recommendation consistency, documented against the benchmark, with findings and any resulting action recorded. It is not a monitoring platform — it is the documentation of the review practice. The retroactive reconstruction of the undocumented period is part of the service.

**Ready-to-use language:** "You've been running AI-assisted portfolio construction for 18 months. The model has drifted. You have no record of reviewing it. That is what the institutional DDQ is asking about."

---

### Finding 04: The Institutional Client Standard Exceeds FINMA Requirements — Competitive Gate Set Above Regulatory Floor

**The finding:** The institutional client's AI governance requirements are more specific and more demanding than FINMA's current requirements in specific respects. The institutional DDQ asks for human authorization documentation that FINMA has not specified. The institutional DDQ asks for model performance monitoring evidence that FINMA has not examined. The institutional DDQ asks for vendor AI governance assessment that FINMA has not required. The boutique WM firm that aligns their AI governance documentation to FINMA's principles-based guidance — without reviewing the institutional DDQ's specific requirements — is misaligned to what their institutional clients actually require. The competitive gate is set higher than the regulatory floor.

**Mechanism:** FINMA guidance (principles-based, undefined at boutique scale) → firm produces FINMA-aligned policy → institutional DDQ arrives with more specific requirements → FINMA-aligned policy cannot answer institutional DDQ questions → institutional client flags governance gap → mandate review initiated while FINMA examination shows no issue.

**Implication:** The DDQ reading service is not optional — it is the primary design specification function. The firm that reads FINMA guidance and produces a FINMA-aligned policy, without reading the institutional DDQ, has addressed the wrong standard. The institutional DDQ is the competitive intelligence document that determines which standard actually applies.

**Ready-to-use language:** "The standard your institutional client is setting is higher than what FINMA requires. FINMA alignment is not the same as institutional readiness."

---

### Finding 05: Carrier Attestation and Institutional DDQ Are Different Documents — The Two-Document False Security Problem

**The finding:** The boutique WM firm has completed the carrier's AI attestation form and believes they are prepared for AI governance scrutiny. The institutional DDQ arrives with materially different questions. The firm discovers they have answered one document while the institutional client is asking another. The carrier attestation asks firm-level questions about AI governance policy. The institutional DDQ asks matter-level questions about specific portfolio decisions. The two documents are not interchangeable. The firm that completed the carrier attestation without reviewing the institutional DDQ has false security — they believe they are prepared; they have not answered the question that determines mandate retention.

**Mechanism:** Carrier attestation (firm-level, policy) → firm completes attestation → believes prepared → institutional DDQ arrives (matter-level, authorization evidence) → firm cannot answer DDQ questions → discovers carrier attestation and institutional DDQ are different documents → gap confirmed → institutional client aware of gap.

**Implication:** The two-document gap analysis is a discrete service deliverable: read both documents, map the questions against each other, identify what the carrier attestation covers and what the institutional DDQ requires that the carrier attestation does not address. The gap between the two documents is the documentation that needs to be produced.

**Ready-to-use language:** "You completed the carrier attestation. The institutional DDQ is a different document. You haven't answered it yet."

---

### Finding 06: Multiple Institutional Mandates Require Coherent Documentation Architecture — The WM-Specific Coherence Problem

**The finding:** The boutique WM firm managing multiple institutional mandates faces a specific problem the legal ICP does not face: multiple institutional clients, multiple DDQ versions, one underlying documentation architecture. The firm has been producing client-specific AI governance documentation without a coherent underlying system — resulting in inconsistent responses across mandates, evidence of different documentation levels for different clients, and in some cases conflicting statements about AI use across different institutional DDQ responses. As institutional clients share AI governance expectations through industry networks, the inconsistency is becoming visible and creating competitive liability.

**Mechanism:** Multiple institutional clients → multiple DDQ versions received → firm produces separate responses per DDQ without underlying architecture → responses are inconsistent across mandates → clients compare documentation standards → one client flags inconsistency → institutional relationship review expanded.

**Implication:** The multi-mandate coherence architecture is the WM-specific documentation architecture: one underlying AI inventory, one authorization chain documentation system, one model drift review record, one DPIA — producing consistent evidence regardless of which institutional client asks. It is not a one-time DDQ response service. It is an ongoing documentation coherence practice.

**Ready-to-use language:** "You have four institutional clients, four DDQ versions, and no coherent underlying architecture. That is the problem — not the individual responses."

---

## Ready-to-Use Language Summary

| Finding | Core Phrase | Use Case |
|---|---|---|
| DDQ matter-level shift | "The questions changed from firm-level to matter-level." | Documentation design conversation |
| Authorization chain compound | "Your associate activated it. Your name is on the recommendation." | Authorization chain audit |
| Model drift obligation | "The model has drifted. You have no record of reviewing it." | Retroactive reconstruction pitch |
| Institutional > FINMA | "Your client sets a higher standard than FINMA." | Positioning, DDQ reading service |
| Two-document problem | "You completed the carrier form. The DDQ is different." | Two-document gap analysis |
| Multi-mandate coherence | "Four clients, one architecture — not four responses." | Multi-mandate WM engagement |

---

## ICP Profile (Geneva Boutique WM — C310)

Boutique Geneva wealth manager, 50–200 employees, CHF 200M–2B AUM. Managing director personally accountable under FINMA, nFADP Article 63, and institutional client contract. Received institutional AI governance DDQ — or expects to receive it. Has completed carrier attestation. Has AI-assisted portfolio construction running. Has not documented the authorization chain, model drift review, or human oversight protocol. Believes carrier attestation prepares them for institutional DDQ — false security. Multiple institutional mandates, multiple DDQ versions, no coherent underlying architecture. Article 63 personal liability now salient. Revenue urgency: mandate retention.

The ICP needs: institutional DDQ reading, authorization chain documentation, model drift documentation, two-document gap analysis, multi-mandate coherence architecture, and retroactive reconstruction of the undocumented period.

---

## C310 Phase 02 vs. C309 Phase 02 — What Changed

| Dimension | C309 Phase 02 | C310 Phase 02 |
|---|---|---|
| Primary question | "Can I keep the mandate?" | "Why doesn't my documentation answer the DDQ?" |
| DDQ status | Competitive gate, new awareness | Matter-level shift, documentation design problem |
| Authorization chain | Shadow AI identified | Compound chain (vendor + associate), more complex |
| Model drift | Not surfaced as live obligation | Institutional DDQ is asking for monitoring evidence |
| FINMA vs. institutional | Institutional gate identified | Institutional exceeds FINMA in specific respects |
| Two-document problem | Not identified | Carrier attestation ≠ institutional DDQ |
| Multi-mandate | Not addressed | WM-specific coherence problem, no competitor addresses it |
| Retroactive gap | 12–24 month window identified | Model drift makes retroactive reconstruction more urgent |

---

## C310 Phase 02 Core Synthesis

**The institutional DDQ is a competitive intelligence document. No one is reading it as such.**

C309 Phase 02 identified the institutional DDQ as a competitive gate — a commercial consequence, not just a compliance requirement. C310 Phase 02 reveals the structural layer: the DDQ has changed question type (firm-level to matter-level), the authorization chain is compound and undocumented, model drift documentation is now a live obligation, the institutional standard exceeds FINMA in specific respects, the carrier attestation and institutional DDQ are different documents, and multiple mandates require a coherent documentation architecture.

The six C310 Phase 02 findings define the structural problem layer:

1. **DDQ matter-level shift requires different documentation architecture** — not a policy, an evidence system
2. **Authorization chain is compound (vendor + associate) and undocumented** — creates layered personal liability
3. **Model drift is a live documentation obligation** — 18 months of undocumented drift
4. **Institutional client standard exceeds FINMA** — competitive gate set above regulatory floor
5. **Carrier attestation and institutional DDQ are not interchangeable** — two-document false security
6. **Multi-mandate coherence requires WM-specific architecture** — consistent evidence across mandates

The service that reads the institutional DDQ as market intelligence, maps the authorization chain, produces model drift documentation, runs the two-document gap analysis, and builds the multi-mandate coherence architecture — with retroactive reconstruction of the undocumented period — is the service the C310 Phase 02 ICP needs.

---

## Rotation State Update

After completing C310 Phase 02:
- C310 Phase 02 (Geneva finance): COMPLETE ✅
- 6 NET-NEW findings documented
- 6 files written to /20260531_phase02_geneva_finance_cycle310/
- Bilingual EN + FR in files 01 (ICP language) and 05 (lead magnet)
- Cycle count: C310 Phase 02

---

*C310 Phase 02 findings — six NET-NEW findings distinct from C309 Phase 02. Institutional DDQ matter-level shift, compound authorization chain liability, model drift documentation obligation, institutional exceeds FINMA standard, two-document false security, and multi-mandate coherence architecture are the C310 Phase 02 contributions. Core insight: the institutional DDQ is a competitive intelligence document. No one is reading it as such.*
