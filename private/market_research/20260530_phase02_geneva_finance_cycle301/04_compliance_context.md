# 04 — Compliance Context: Geneva / Switzerland Regulatory
## Phase 02 | Cycle C301 | Geneva Finance ICP

---

## Applicable Regulatory Framework (Late May 2026)

### Layer 1: FINMA Circular 08/2024 — AI Risk Management
**What it is**: FINMA's guidance on the use of AI in financial services, published December 2024. Applies to all FINMA-supervised institutions including boutique WM firms. Sets expectations for AI risk management, model oversight, human accountability, and disclosure.

**What it says operationally**:
- AI systems used in financial services must have documented risk management frameworks
- Human oversight of AI-influenced decisions must be demonstrable
- AI vendors must be assessed for operational risk and data governance compliance
- AI-related incidents must be reportable through existing incident reporting channels

**The problem for Geneva boutique WM**: No implementation checklist. No specific documentation requirements. No enforcement clarity. The guidance sets a standard of "adequate" AI governance without defining what adequate means for a boutique WM firm. This ambiguity is the problem — not the guidance itself.

**Current status**: 17+ months old. No updated guidance. No implementation toolkit. Managing directors are guessing.

**Regulatory silence as market signal**: FINMA's silence after Circular 08/2024 is itself a signal. FINMA is allowing supervised institutions to develop their own governance frameworks — which means the institutions that develop credible frameworks now will not be held to a standard defined later. First-mover advantage in governance documentation is a real regulatory asset.

---

### Layer 2: nFADP (Swiss Federal Act on Data Protection) — Articles 63 and 9
**What it is**: Switzerland's revised data protection act, fully operational since 2023. The nFADP introduced Article 63 with personal criminal liability for compliance failures involving automated decision-making — a specific provision directly relevant to WM firms using AI for portfolio construction, client scoring, and reporting.

**Article 63 — Personal Criminal Liability**:
- Directly applicable to managing directors who sign off on AI deployment
- Personal criminal liability for failures in automated decision-making oversight
- FDPIC can pursue the individual, not just the firm
- Carrier D&O coverage may not cover Art. 63 criminal liability — this is a named gap
- The documentation that would defend in an Art. 63 challenge does not exist in most firms

**Article 9 — Processor Chain Disclosure**:
- Requires disclosure of all sub-processors in AI vendor relationships
- Years of click-through acceptance on vendor terms have been accumulating undisclosed Art. 9 obligations
- Carrier's third-generation attestation explicitly probes vendor sub-processors — activating Art. 9 obligations the managing director may not know they have
- The vendor's terms of service may have transferred oversight responsibility to the firm without the firm knowing

**Article 6 — Automated Decision-Making Rights**:
- Clients have the right to know when automated decision-making affects them
- Portfolio construction AI directly triggers Art. 6 obligations
- Documentation of the human authorization chain is required for Art. 6 compliance

**Regulatory enforcement trajectory**: The FDPIC has been building enforcement capacity throughout 2025-2026. The June 19 SBA Day of Lawyers event surfaces AI governance accountability as a professional responsibility issue — indicating that legal and financial professionals are increasingly subject to Art. 63 scrutiny through their professional associations.

---

### Layer 3: Swissdamed (Swiss Medical Devices Authorisation and Documentation)
**What it is**: Switzerland's regulatory framework for medical devices, implementing elements of the EU Medical Device Regulation. **Important clarification**: Swissdamed is specifically for medical DEVICES — it does not apply to general AI governance for wealth management firms. However, it activates on July 1, 2026 and creates regulatory cluster pressure that is affecting how managing directors think about all regulatory deadlines.

**For Geneva boutique WM firms**: Swissdamed is NOT directly applicable to AI governance in wealth management. It is applicable to WM firms that also provide health-related services or use AI diagnostic tools in a medical context. The confusion about Swissdamed's scope is itself a market signal — managing directors are conflating Swissdamed with general AI regulatory compliance, creating additional anxiety without proportionate understanding.

**Why it still matters for WM**: The Swissdamed activation on July 1, 2026 creates a regulatory cluster with EU AI Act (also weeks away). Managing directors who are confusing Swissdamed's scope are allocating anxiety to the wrong framework. The advisory must clarify: Swissdamed ≠ AI governance for WM firms. EU AI Act ≠ AI governance for Swiss WM firms (unless EU nexus). The applicable framework for Swiss WM is FINMA + nFADP + SRO rules.

---

### Layer 4: EU AI Act — Nexus Determination
**What it is**: The European Union's AI Act, with high-risk provisions activating in 2026. Applies to firms with EU nexus — firms that serve EU clients, have EU operations, or place AI systems on the EU market.

**The nexus problem for Geneva WM**: Most Geneva boutique WM firms have some EU clients. The EU AI Act nexus determination is not a binary yes/no — it is a spectrum based on the nature and extent of EU involvement. A Geneva WM firm with 10 EU-based family office clients has a different nexus profile than a firm with 200 EU HNW clients. The published criteria do not provide WM-calibrated guidance for this determination.

**What happens without nexus determination**: If the managing director cannot determine their EU AI Act nexus, they cannot take proportionate compliance action. They are in compliance paralysis — not because the framework is too onerous, but because they can't determine whether they are in scope.

**Current status**: Weeks away from activation. No WM-calibrated nexus determination guidance available in Geneva. This is a named market failure (see Finding C301-P2-F3).

---

### Layer 5: SRO Obligations (VQF, FINIA, others)
**What it is**: Self-Regulatory Organizations in the Swiss financial industry. Geneva boutique WM firms that are not directly FINMA-supervised are typically members of an SRO, which provides regulatory cover and AML/KYC oversight.

**The silence problem**: SROs have been completely silent on AI governance since FINMA Circular 08/2024. This silence is a specific pain point for managing directors — SROs are supposed to provide practical operational guidance to their members, and the AI governance guidance that members need most has not been provided.

**The managing director's experience**: "Mon OQR n'a rien dit sur la gouvernance IA. C'est censé être leur rôle — nous donner des orientations pratiques."

**Implication**: SRO silence creates a vacuum that the advisory can fill. The advisory that translates SRO expectations (what SROs should be saying, even if they aren't) into practical frameworks for boutique WM firms occupies a position of significant trust and authority.

---

### Layer 6: AML/KYC — CRS 2.0 and AMLA/LETA
**What it is**: The Common Reporting Standard 2.0 and the Anti-Money Laundering Act / Liechtenstein LEAutonomy provisions that affect Swiss financial institutions.

**CRS 2.0**: In effect since 2024. AI governance obligations are structurally absent from existing AML programs — the two frameworks have not been integrated at the operational level.

**AMLA/LETA**: H2 2026 implementation wave. Creates additional documentation requirements for Swiss financial institutions. The AI governance documentation built for other frameworks should be reviewed against AMLA/LETA requirements — another track in the four-track documentation problem.

---

### Layer 7: Carrier Attestation Requirements
**What it is**: Insurance carriers — particularly D&O and professional liability — have introduced AI governance attestations as part of renewal documentation. The third-generation attestation form is now standard.

**What the third-generation form asks**:
- AI system inventory (all AI tools processing client data)
- Vendor sub-processor inventory (Art. 9 nFADP activation)
- Data retention and termination protocols
- Model change management procedures
- Human override and oversight documentation
- Algorithmic bias testing evidence
- AI-influenced portfolio decision authorization chain
- Acquisition scenario documentation (what happens to AI governance in a sale)

**The pre-signing review gap**: The managing director signs this form with a personal signature. The form requires attestation to undefined "adequate" standards. No Geneva service offers pre-signing review for personal liability exposure under nFADP Art. 63.

**Current status**: Third-generation attestation is the standard renewal document. All Geneva WM carriers are using it. The pre-signing review gap is a present-tense problem.

---

## NET-NEW Finding C301-P2-F5

**The regulatory cluster creates documentation architecture confusion, not just urgency**: The proximity of Swissdamed (July 1), EU AI Act (weeks away), and the existing FINMA/nFADP obligations creates not just urgency but architectural confusion. Managing directors are attempting to build a single documentation framework that satisfies all frameworks simultaneously — which is architecturally impossible because each framework has different disclosure scopes, evidence standards, and update cycles. The documentation architecture question is distinct from the documentation content question: managing directors are asking "what should we document?" when they should first be asking "which documentation architecture can we actually operate?" The advisory that answers the architecture question first — proportionate to boutique WM operational capacity — solves the paralysis. This is distinct from C300's "classification paralysis" finding: C300 named the classification blocker; C301 names the documentation architecture paralysis that results from trying to satisfy all frameworks simultaneously.

---

## Regulatory Timing Summary (Late May 2026)

| Framework | Deadline | WM Applicability | Status |
|---|---|---|---|
| FINMA Circular 08/2024 | Ongoing | Directly applicable | 17+ months live, no implementation checklist |
| nFADP Art. 63 | Fully operational | Directly applicable | Personal criminal liability active |
| nFADP Art. 9 | Fully operational | Directly applicable for AI vendors | Retrospective obligation accumulation |
| CRS 2.0 | Live since 2024 | Applicable | AI governance structurally absent from AML programs |
| Swissdamed | July 1, 2026 | NOT applicable to WM AI governance | Regulatory cluster pressure, creates confusion |
| EU AI Act | Weeks away | Only if EU nexus | Nexus determination paralyzed |
| AMLA/LETA | H2 2026 wave | Applicable | Implementation approaching |
| SRO Guidance | Ongoing vacuum | Applicable | Complete silence on AI governance |

---

## What the Geneva Boutique WM Managing Director Needs from This Regulatory Stack

1. **Immediate (weeks)**: Swissdamed/EU AI Act classification determination — which applies to their firm and what does it require?
2. **Immediate (weeks)**: Carrier pre-signing review — what did they actually sign, and what personal exposure did they accept?
3. **Short-term (1–3 months)**: Institutional questionnaire response methodology — how to respond without competitive exposure?
4. **Short-term (1–3 months)**: Four-track coherence assessment — are carrier, FINMA, nFADP, and institutional questionnaire documentation consistent?
5. **Ongoing**: Continuous authorization documentation for portfolio construction AI — how to document a continuous process?
6. **Ongoing**: Vendor governance within existing deployments — how to govern what you've already chosen?

---

## Phase 02 Complete — C301

*C301-P2-F5 contributed here. F1-F4 across previous files. F6 in remaining files.*