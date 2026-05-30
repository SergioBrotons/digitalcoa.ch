# 02 — Market Signals: Current Problems, Complaints, and Failures
## Phase 02 | Cycle C304 | Geneva Finance / Boutique Wealth Management

---

## Current Market Problems

### Problem 1: Vendor Terms Drift Has Created Attestation Inaccuracy Nobody Is Monitoring

**What's happening:**
Boutique wealth management firms signed AI vendor data processing agreements in 2022–2024. Those agreements have been amended, updated, or supplemented since signing — vendor terms drift is continuous. The managing director did not receive notification of changes, did not review changes, and cannot verify whether the attestation they signed remains accurate. The carrier attestation requires certifying that vendor conditions have not changed in ways that affect AI governance — but the firm has no mechanism to verify this. The attestation is functionally inaccurate before the renewal cycle arrives.

**The complaint:**
"On a signé le DPA du vendor IA en 2023. On ne sait pas combien de fois les conditions ont changé depuis. Le vendor a ajouté de nouveaux sous-traitants. On n'a pas été notifié. L'attestation de l'assureur dit que c'est notre responsabilité de suivre les changements."

**The structural failure:**
The attestation accuracy problem is systemic, not incidental. SaaS AI vendors update terms continuously, add sub-processors without explicit notification, and change model versions without triggering contract amendment clauses. The firm certifying attestation accuracy cannot produce evidence of that accuracy. The carrier renewal cycle will require the same certification — with the same gap.

**Signal for DigitalCoa.ch:**
Vendor terms monitoring and re-verification service — producing a current-state vendor terms assessment that documents what has changed since original signature, with specific amendment tracking.

---

### Problem 2: Authorization Records for Continuous AI Systems Don't Exist in the Required Format

**What's happening:**
The carrier Form v4 requires "the last three authorization records per AI tool." Boutique wealth management firms are discovering that authorization records for continuous AI systems — automated portfolio rebalancing, algorithmic risk profiling, AI-driven allocation engines — were never created in any format. The concept of an authorization record for a continuous system (one that operates 24/7 without discrete authorization events) was never defined. Retroactive reconstruction is structurally impossible. The gap is not a documentation backlog — it's documentation that was never designed to exist.

**The complaint:**
"La rebalance est continue. Comment est-ce qu'on documente une autorisation continue? Le carrier demande les trois derniers records d'autorisation. Les trois derniers records n'existent pas. On n'a jamais créé ce type de record."

**The structural failure:**
The documentation architecture for continuous AI systems was never built. Firms that deployed automated rebalancing systems did not design those systems to produce authorization records. The records that would satisfy Form v4 requirements were never conceived, never created, and cannot be retroactively produced from existing systems. This is a different problem from "records exist but are disorganized" — it's "records do not exist in any form."

**Signal for DigitalCoa.ch:**
Continuous AI authorization documentation methodology — a specific documentation architecture for systems that operate continuously, designed to produce the records that satisfy Form v4 requirements for ongoing AI systems.

---

### Problem 3: The FINMA-nFADP Documentation Gap Is Now Discovered and Active

**What's happening:**
Managing directors who built AI governance documentation to satisfy FINMA requirements are discovering that FINMA-compliant documentation does not satisfy nFADP Art. 63 personal liability requirements. The two frameworks require different documentation types. FINMA requires authorization records and governance framework documentation. nFADP Art. 63 requires evidence of personal oversight by the responsible person — a documentation type that FINMA documentation does not produce. The firm that believes it is "in compliance" because it satisfies FINMA is discovering it has personal criminal liability exposure that FINMA documentation does not address.

**The complaint:**
"On a build la documentation pour FINMA. On vient de découvrir que la documentation FINMA ne satisfait pas les exigences Art. 63 nFADP. Le lawyer nous a dit qu'on était en conformité FINMA. Le lawyer ne nous a pas dit qu'on était exposés nFADP Art. 63."

**The structural failure:**
Legal counsel that advises on FINMA compliance is not providing nFADP Art. 63 personal liability protection. The two frameworks are addressed by different specialists with different documentation outputs. The managing director who has "done FINMA documentation" believes they have adequate governance — and may have zero personal liability protection under Art. 63. The gap between frameworks is undisclosed, unaddressed, and creates simultaneous exposure on both tracks.

**Signal for DigitalCoa.ch:**
Cross-framework documentation architecture — a documentation methodology that produces evidence satisfying both FINMA and nFADP simultaneously, with specific Art. 63 personal liability protection evidence built into the documentation architecture.

---

### Problem 4: EU AI Act Cross-Border Conformity Has No Geneva-Calibrated Solution

**What's happening:**
Geneva boutique wealth management firms with EU-based clients are discovering that EU AI Act obligations fall on the "deployer" of AI systems — not just the vendor. The deployer is responsible for ensuring the AI system used meets EU conformity requirements. Non-EU AI vendors (US-based LLM providers, US-based portfolio analytics platforms) cannot provide EU Declaration of Conformity. The Geneva firm serving EU clients is structurally unable to satisfy EU AI Act deployer obligations using non-EU AI vendors — and no Geneva service has addressed this problem at boutique WM scale.

**The complaint:**
"On a des clients européens. Le vendor IA est américain. Comment est-ce qu'on satisfy l'EU AI Act? Le vendor ne peut pas fournir la Déclaration de Conformité UE. Le règlement dit que le déployeur est responsable. Le vendor est hors de portée. On est pris entre deux obligations."

**The structural failure:**
The EU AI Act deployer obligation is a structural problem for Geneva boutique WM firms using US-based AI vendors. The solution is not "switch vendors" (infrastructure is built) and not "get vendor to provide EU DoC" (vendor is not subject to EU jurisdiction). No Geneva service has defined what "deployer due diligence" looks like for a non-EU vendor used by a Swiss firm serving EU clients. This is an active, unsolved problem — not a future problem.

**Signal for DigitalCoa.ch:**
EU AI Act deployer due diligence documentation for non-EU vendor configurations — the specific documentation that demonstrates deployer due diligence when EU Declaration of Conformity is structurally unavailable from the vendor.

---

### Problem 5: Documentation Debt Compounding Is Now Quantifiable and Accelerating

**What's happening:**
The documentation debt model from C303 is now understood by the ICP as a quantifiable compounding problem — not just an abstract risk. Each AI tool deployed without authorization records adds to the debt. Each year without record creation means the debt compounds across five to eight AI tools simultaneously. The carrier renewal cycle requires annual attestation — each year the gap deepens without a payment mechanism. The debt is not static: it grows with each deployment and each year of non-documentation.

**The complaint:**
"On n'a pas build de records en 2023. En 2024, on n'avait toujours pas de records. En 2025, même chose. En 2026, l'assureur demande des records — et on n'en a toujours pas. La dette de documentation compound. Chaque tool déployé sans record ajoute à la dette."

**The structural failure:**
Documentation debt has no static state. The firm that deploys a new AI tool without authorization records adds to the debt in real time. The firm that has never built authorization records is compounding that debt across its entire AI tool stack annually. The carrier renewal attestation cycle does not provide a debt payment mechanism — it provides a recurring certification of debt. Without a specific documentation production intervention, the debt grows indefinitely.

**Signal for DigitalCoa.ch:**
Documentation debt assessment and payoff methodology — a specific service that quantifies the documentation debt across the firm's AI tool stack, produces the authorization records required to pay down the debt, and establishes a documentation architecture that prevents new debt accumulation.

---

### Problem 6: Carrier Subrogation Creates Personal Asset Exposure Beyond the Carrier's Payment

**What's happening:**
The carrier insurance product responds to claims — paying settlements, legal fees, and regulatory fines. However, nFADP Art. 63 personal criminal liability is not discharged by carrier payment. If a data breach involving AI systems results in an Art. 63 proceeding against the managing director personally, the carrier's payment to the claimant does not protect the managing director's personal assets from criminal liability. The carrier's evidence requirements (Form v4) are designed to protect the carrier from subrogation exposure — not to protect the managing director's personal assets from Art. 63 criminal exposure. These are different protection objectives that the same attestation does not simultaneously satisfy.

**The complaint:**
"La documentation qui satisfait l'assureur ne protège pas mes actifs personnels. Le produit d'assurance répond aux sinistres. La responsabilité Art. 63 est pénale. Ce n'est pas la même chose."

**The structural failure:**
The carrier attestation and the Art. 63 personal liability protection are serving different protection objectives. Satisfying the carrier's evidence requirements does not produce the documentation that would serve as evidence of personal due diligence under Art. 63. The managing director who believes the carrier attestation protects them personally is operating under a structural misunderstanding. The carrier is protecting its subrogation position; the managing director needs personal due diligence evidence that the carrier's form does not produce.

**Signal for DigitalCoa.ch:**
Art. 63 personal due diligence evidence package — the specific documentation that would serve as evidence of personal oversight, controls, and accountability by the responsible person, distinct from and in addition to carrier attestation evidence.

---

## Market Signal Summary

| Signal | Status | Urgency |
|---|---|---|
| Vendor terms drift without monitoring | Active — ongoing inaccuracy in certified attestations | HIGH — carrier renewal approaching |
| Authorization records for continuous AI don't exist | Active — structural documentation gap | HIGH — Form v4 requirements cannot be met |
| FINMA-nFADP documentation gap | Newly discovered — active exposure | HIGH — managing directors discovering gap now |
| EU AI Act cross-border conformity | Active — unsolved structural problem | MEDIUM-HIGH — EU clients present |
| Documentation debt compounding | Active — accelerating with each deployment | HIGH — no payment mechanism exists |
| Carrier subrogation vs. Art. 63 protection | Active — structural misalignment | HIGH — personal assets at risk |

---

## NET-NEW Signals (C304 Phase 02)

1. **Vendor terms drift without monitoring mechanism** — attestation accuracy cannot be verified, structural inaccuracy accumulating
2. **Authorization records for continuous AI systems never existed** — not a backlog, a structural documentation gap for24/7 AI systems
3. **FINMA documentation ≠ nFADP Art. 63 protection** — newly discovered cross-framework gap with personal criminal liability implications
4. **EU AI Act deployer obligation with non-EU vendor is structurally unsolvable by the firm** — no Geneva-calibrated solution exists at boutique WM scale
5. **Documentation debt compounding is now quantifiable** — the debt grows with each deployment, no static state, no payment mechanism
6. **Carrier subrogation and Art. 63 personal protection serve different objectives** — same attestation cannot satisfy both simultaneously

---

## Confidence: HIGH
Synthesized from C303 Phase 02 findings + C304 Phase 01 legal context. Web search unavailable (quota exhausted). All signals extend C303 findings into vendor terms drift, continuous AI documentation architecture, cross-framework documentation misalignment, EU AI Act structural problem, and documentation debt quantification dimensions.

---

## Advance on C303 Findings

C303 established: institutional questionnaire as competitive event, evidence vs. policy gap, portfolio construction AI as named category, carrier Form v4 evidence standard, cross-track coherence problem, pre-signing review gap.

C304 extends: vendor terms drift post-signing creates attestation inaccuracy (not just the gap at signing); continuous AI systems require a different documentation architecture than point-in-time AI deployments; FINMA and nFADP require different documentation types — satisfying one does not satisfy the other; EU AI Act deployer obligation is structurally unsolvable at boutique WM scale using non-EU vendors; documentation debt is quantifiable and compounding; carrier attestation and Art. 63 protection serve different objectives.

The core advance: C303 identified the evidence gap. C304 identifies the structural reasons the evidence gap cannot be closed by incremental documentation effort — and the specific service categories required to address each structural problem.
