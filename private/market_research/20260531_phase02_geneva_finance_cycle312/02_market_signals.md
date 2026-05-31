# Phase 02 — Cycle 312 — Market Signals: Geneva Boutique Wealth Management

## Vertical: Finance / SMB — Boutique Wealth Management Firms
## Cycle: 312 | Date: 2026-05-31
## Status: 6 NET-NEW findings for Phase 02 — distinct from C312 Phase 01 (legal) and C214–C311 Phase 02

---

## Executive Summary

Geneva boutique wealth management firms at 50–200 employees face a dual-accountability convergence: institutional client AI governance DDQ arriving as a competitive gate (not just compliance exercise), while carrier attestation renewal creates personal liability exposure simultaneously. The same structural problems identified in Phase 01 (carrier form architecture, unauthorized delegation, vendor compliance assumption, "adequate" undefined) are now being experienced through the institutional client channel — and the boutique has no methodology for managing both tracks coherently. Six NET-NEW findings surface specific structural problems at the intersection of institutional DDQ, portfolio construction AI authorization chain, model drift monitoring, and multi-mandate coherence — all specific to the boutique WM vertical and distinct from the Phase 01 legal context.

---

## 6 NET-NEW Findings (Phase 02 — Distinct from Phase 01 Legal Context)

### Finding 01: Institutional DDQ as portfolio-specific competitive gate activating cross-mandate exposure visibility

**Mechanism:** Institutional clients sending AI governance DDQs to Geneva boutique WM firms are not treating the DDQ as a one-time compliance screening — they are using it as an operational intelligence instrument that reveals portfolio construction methodology, monitoring cadence, and authorization chain integrity across specific mandates. When a boutique manages multiple institutional mandates, the DDQ probes each mandate's AI methodology separately. Cross-mandate inconsistencies — where AI was used differently in Mandate A versus Mandate B, or where documentation exists for one mandate but not the other — become visible through the DDQ process. The institutional client is not just evaluating the boutique's AI governance policy; it is reconstructing the boutique's actual AI deployment pattern across its mandate book. This creates a compound exposure: the DDQ reveals undocumented AI use the boutique didn't know was visible, and cross-mandate inconsistencies the boutique didn't know existed. This is distinct from all prior institutional DDQ findings which named the DDQ as a competitive gate without isolating the specific cross-mandate exposure visibility mechanism where managing multiple institutional mandates simultaneously creates documentation consistency obligations across mandates that boutique WM firms did not design their AI governance for.

**Phase 01 bridge:** Phase 01 Finding (unauthorized delegation active and undocumented) extends here — associate-implemented AI tools activated for specific mandates create cross-mandate documentation inconsistency that institutional DDQ now makes visible.

**Market signal:** Boutique WM firms managing 3-5 institutional mandates are being evaluated for AI governance consistency across their mandate book, not just firm-level AI policy.

**ICP language:** "We have four institutional mandates. They all use AI differently. The client wants to know about our AI governance — but which one?" / "The DDQ asks about specific mandates. I couldn't give them a consistent answer across all four."

**FR:** "Nous avons plusieurs mandats institutionnels. Chaque client pose des questions différentes sur notre utilisation de l'IA. Je ne peux pas donner la même réponse pour tous."

---

### Finding 02: Portfolio construction AI authorization chain documentation gap creates compound evidence problem distinct from advisory recommendation documentation

**Mechanism:** Geneva boutiques using AI in portfolio construction face a multi-step authorization chain with distinct documentation obligations at each step: (1) AI generates allocation recommendation; (2) PM reviews recommendation with specific known-information checklist; (3) investment committee approves or modifies; (4) implementation with documented parameters; (5) monitoring and rebalancing authorization. Current AI governance documentation frameworks address the endpoint (AI-assisted recommendation approved) or the tool (vendor inventory, data processing agreements). None address the authorization chain as a discrete documentation requirement with its own sequential integrity standard. When the institutional client DDQ asks "how do you ensure human oversight of AI-assisted portfolio decisions?" or the carrier asks "can you document the human authorization moments preceding each AI-assisted portfolio decision?", the boutique must produce a sequential authorization record it never built. The documentation gap is specifically in the chaining between AI output and human authorization moments — not the content of the AI recommendation, not the vendor terms, but the specific sequential documentation of what human reviewed what AI output at what point in the mandate cycle, with what specific known information. This is distinct from Phase 01 Finding (OaF survey two-tier visibility) which named the gap between MD perception and operational reality without isolating the specific sequential authorization chain documentation architecture required for portfolio construction AI — where the evidence standard is not "did you review?" but "what did you know, when did you know it, and can you prove you reviewed it with specific known information at each decision point?"

**Phase 01 bridge:** Phase 01 Finding (post-attestation evidence reconstruction primary need) applies here — the boutique signed carrier attestation without the authorization chain documentation architecture; institutional DDQ now asks for the same evidence.

**Market signal:** FINMA Guidance 08/2024 expects documented human oversight of AI-assisted decisions. No Geneva methodology exists for building a sequential authorization chain documentation architecture proportionate to boutique investment committee process.

**ICP language:** "We have an investment committee. AI generates ideas. We discuss them. We approve or modify. But I can't document what the AI actually recommended at each step, and what I specifically knew when I approved." / "If someone asks me to show the trail from AI output to final decision — I don't have it."

**FR:** "L'IA propose, le comité approuve. Mais je ne peux pas prouver la séquence exacte de ce que l'IA a recommandé et ce que j'ai spécifiquement examiné à chaque étape."

---

### Finding 03: Model drift monitoring obligation now activated through institutional DDQ re-review practice creating retroactive documentation gap

**Mechanism:** Institutional clients that received first-generation AI governance DDQ responses from Geneva boutique WM firms in 2024-2025 are now conducting re-reviews — asking for updated responses, asking about model monitoring evidence, and specifically probing whether the boutique has documented model drift monitoring for the AI tools used in portfolio construction. Model drift monitoring is a specific documentation obligation: the boutique must be able to demonstrate that it has a system for detecting when an AI model's outputs begin to deviate from expected parameters, and that human review occurs at defined intervals. Few Geneva boutique WM firms have a documented model drift monitoring system. The institutional client's re-review question has made the monitoring obligation concrete and live. The boutique that responded to the 2024 DDQ with a firm-level AI governance policy is now being asked specifically: "What is your model monitoring practice? Show us evidence." The 12-24 months of undocumented AI operation (per Phase 01 Finding: unauthorized delegation active and undocumented) includes undocumented model monitoring — the boutique has been operating AI tools without a documented monitoring system and now must produce evidence of monitoring that was never documented. This is distinct from all prior model drift findings which named the theoretical risk without isolating the specific mechanism where institutional client re-review practice is activating the documentation obligation retroactively — converting a theoretical concern into a specific evidence requirement with a 12-24 month retroactive gap.

**Phase 01 bridge:** Phase 01 Finding (post-attestation evidence reconstruction primary need) is the general condition; this finding specifies the model drift monitoring sub-category as the specific evidence gap now being activated through institutional client re-review.

**Market signal:** Institutional clients are re-reviewing 2024 DDQ responses and specifically asking about model monitoring evidence — not just governance policy.

**ICP language:** "Our big client asked us to update our AI governance questionnaire response. One of the new questions is about model monitoring. We don't have a documented monitoring system." / "Model drift — I know it's a risk. I don't have a system to detect it."

**FR:** "Le client institutionnel nous a demandé des preuves de surveillance des dérivations du modèle. Je n'ai pas de système documenté pour cela."

---

### Finding 04: Carrier attestation renewal now including third-generation vendor processor chain questions creating undisclosed nFADP Art.9 exposure

**Mechanism:** Third-generation carrier attestation questionnaires sent to Geneva boutique WM firms in 2026 are beginning to ask not just about the boutique's own AI governance but about the AI vendor processor chain: what AI vendors does the boutique use for portfolio construction and client data processing, what data do those vendors process, what are the sub-processor arrangements, and what happens to data if the vendor is acquired or enters insolvency proceedings. These questions probe nFADP Art.9 third-party processor obligations that the boutique's vendor contracts either don't address or address through click-through terms the boutique never evaluated (per Phase 01 Finding: vendor compliance assumption creates hidden exposure). The carrier is functioning as a de facto nFADP enforcement instrument requiring the boutique to disclose processor chain details the boutique may not have — because the vendor terms create undisclosed processing the boutique accepted without evaluation. Carrier third-generation evidence targeting vendor processor chain = undisclosed third-party nFADP compliance obligation the MD did not know existed when vendor terms were accepted. This is distinct from Phase 01 Finding (vendor compliance assumption creates hidden exposure) which named the general vendor terms problem without isolating the specific mechanism where third-generation carrier questions probe the processor chain creating Art.9 disclosure obligations that the vendor contracts never anticipated the boutique would be required to satisfy.

**Phase 01 bridge:** Phase 01 Finding (vendor compliance assumption creates hidden exposure) is the general condition; this finding specifies the third-generation carrier attestation as the specific activation mechanism that is making the hidden exposure live and documentable.

**Market signal:** Carriers are now asking about vendor sub-processors, data termination protocols, and model training data use — not just internal AI governance policy.

**ICP language:** "The carrier renewal form asked about our AI vendors' sub-processors. I didn't know we were supposed to know that." / "What does our vendor do if they're acquired? What happens to our client data? I have no idea what the contract says."

---

### Finding 05: Multi-mandate boutique WM firms creating cross-institutional-client coherence exposure now visible through Geneva peer network

**Mechanism:** Geneva boutique WM firms managing multiple institutional mandates from different institutional clients are providing non-identical AI governance DDQ responses to different institutional clients — not because the governance architecture is different, but because the boutique responded to each DDQ independently without a cross-document coherence methodology. Each institutional client asked slightly different questions, the boutique answered each question set independently, and the resulting responses are inconsistent in framing, specificity, and commitment level when read in comparison. Geneva's tight professional network means that institutional clients — who talk to each other about manager selection — are beginning to compare DDQ responses across boutiques. When Boutique A's DDQ response mentions "regular model monitoring reviews" and Boutique B's response mentions "systematic model drift detection with quarterly reporting," the institutional client doing due diligence across both sees the inconsistency. Multi-mandate coherence is not just an internal documentation problem — it is becoming a visible external problem as institutional clients share DDQ response patterns through peer networks and selection processes. This is distinct from all prior cross-mandate coherence findings which named the internal documentation coherence problem without isolating the specific mechanism where Geneva peer networks are making cross-institutional-client inconsistency externally visible in a way that affects competitive positioning.

**Phase 01 bridge:** Phase 01 Finding ("adequate" undefined and universally paralyzing) is the reason boutiques can't calibrate their responses — without a definition of adequate, each DDQ response is built on a different implicit standard.

**Market signal:** Institutional clients in Geneva's tight network are comparing DDQ responses across boutiques and noting inconsistencies in AI governance framing and commitment level.

**ICP language:** "We have three institutional clients. They all asked slightly different questions. We answered each one separately. I don't know if the responses are consistent." / "I heard one institutional client was comparing how different managers responded to the same question. That made me nervous."

**FR:** "Nos trois clients institutionnels ont posé des questions différentes. Nous avons répondu à chacun séparément. Je ne sais pas si les réponses sont cohérentes entre elles."

---

### Finding 06: Institutional client AI governance DDQ reading as competitive intelligence practice unnamed in boutique WM market

**Mechanism:** The most sophisticated Geneva boutique WM firms — and their institutional clients — are beginning to use the AI governance DDQ as a competitive intelligence document, not just a compliance screening instrument. Reading the DDQ carefully reveals: (1) what the institutional client actually requires for mandate continuation, (2) what competing managers have committed to in their DDQ responses, (3) what the client's investment committee specifically cares about regarding AI methodology, and (4) where the client's own AI governance standard is escalating toward. No Geneva boutique WM firm is using the DDQ as competitive intelligence systematically. The firms that read the DDQ as intelligence — before answering it — are gaining competitive positioning advantages: they know what the client actually wants, they calibrate their response to the client's specific concern set, and they use the DDQ to understand where the client's standard is moving. The firms that answer the DDQ as a compliance exercise are submitting responses calibrated to the questions asked, not the intelligence embedded in the questions. This is distinct from all prior DDQ findings which named the DDQ as a competitive gate without isolating the specific competitive intelligence practice of DDQ reading — where the questions themselves are intelligence, not just the response criteria.

**Phase 01 bridge:** Phase 01 Finding (carrier form architecture creates documented standard) extends here — the same principle applies to institutional DDQ: the instrument is a specification document, not just a questionnaire.

**Market signal:** Boutique WM firms that read institutional DDQ as competitive intelligence before responding are gaining positioning advantages over firms that respond to the DDQ as a compliance exercise.

**ICP language:** "I started reading the DDQ as a document about what the client actually wants to know — not just a checklist of questions. That changed how I think about responding." / "The questions in the DDQ tell you where the client's investment committee is focusing. That's useful information before you answer."

**IMO differentiation angle:** Pre-DDQ reading as competitive intelligence — reviewing the DDQ before answering is the highest-value intervention point for institutional DDQ management, distinct from pre-signing carrier form review (Phase 01).

---

## Additional Context from Prior Research (Carried Forward)

### Market Baseline (C214–C311 Phase 02 findings)

- **FINMA Guidance 08/2024:** Primary AI governance reference; proportionate framework expected; published December 18, 2024
- **nFADP (Swiss FADP):** Effective September 2023; applies to AI-based data processing per FDPIC May 8, 2025 clarification; Art.63 personal criminal liability active
- **Institutional AI governance DDQ:** Primary acute wake-up call for Geneva WM firms; 40-page questionnaires; competitive gate, not just compliance screening
- **SRO silence on AI:** Confirmed structural condition; VQF, FINIA issuing no AI guidance to member firms
- **First-mover window:** No boutique-specific AI governance competitor serving 50–200 person Geneva WM firms

### Phase 01 Context (C312 Legal — carried into Phase 02)

- Carrier form architecture creates documented standard (binary to open-form descriptive)
- Post-attestation evidence reconstruction primary need
- Unauthorized delegation active and undocumented
- OaF survey two-tier visibility
- Vendor compliance assumption creates hidden exposure
- "Adequate" undefined and universally paralyzing

### Findings Extended from Phase 01 into Phase 02

1. **Vendor compliance assumption → vendor processor chain questions:** Phase 01 named the assumption; Phase 02 specifies third-generation carrier attestation as the activation mechanism making it live
2. **Unauthorized delegation → cross-mandate inconsistency:** Phase 01 named the delegation; Phase 02 specifies cross-mandate documentation inconsistency as the boutique WM manifestation
3. **Post-attestation evidence reconstruction → model drift monitoring:** Phase 01 named the general evidence gap; Phase 02 specifies model drift monitoring as the specific evidence category now being activated through institutional client re-review
4. **"Adequate" undefined → cross-institutional-client coherence:** Phase 01 named the paralysis; Phase 02 specifies how undefined "adequate" creates cross-client response inconsistency becoming externally visible

---

## ICP Emotional State at Point of Contact

The Geneva boutique WM managing director is managing two simultaneous accountability tracks (institutional DDQ + carrier attestation renewal) with no cross-document coherence methodology, while carrying 12-24 months of undocumented AI use (Phase 01 problem) that is now being activated through institutional client re-review and carrier third-generation questions. The competitive consequence of DDQ failure is more immediately felt than regulatory consequences. The MD is in execution mode, not discovery mode.

**Primary emotion:** Overwhelmed by dual-track accountability (client + carrier) with no Geneva-calibrated methodology for managing either coherently, while carrying undocumented AI history that is now becoming visible.

**Trigger pattern:** Institutional DDQ deadline or carrier renewal. Competitive consequence attached. The MD acts when the mandate is at risk, not when regulatory guidance is abstract.

**Decision threshold:** "Does this person understand that the institutional DDQ is a competitive intelligence document, not just a compliance exercise? And do they have a methodology for the authorization chain documentation I never built?"

---

## Status
- Phase 02 of C312 (Geneva Finance — boutique wealth management)
- 6 NET-NEW findings distinct from C312 Phase 01 (legal)
- All findings bridge from Phase 01 structural problems to Phase 02 boutique WM-specific manifestation
- GitHub push: PENDING — all 6 files must be complete before push
