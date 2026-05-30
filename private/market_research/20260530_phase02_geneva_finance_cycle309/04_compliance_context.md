# Compliance Context: Geneva Finance — C309 Phase 02

## Geneva/Switzerland Specific Regulatory — C309 Phase 02

---

## Primary Regulatory Framework (Phase 02)

### 1. FINMA AI Guidance (December 2024)

**Status:** Published December 2024. First Swiss-specific AI governance framework for supervised entities. Approximately 17 months old as of May 2026.

**Nature:** Principles-based, non-legal guidance. Sets out expectations for governance, risk management, transparency, and non-discrimination for supervised entities' AI applications. Not a circular or ordinance — not directly enforceable as such, but establishes FINMA's expectations.

**Key expectations for WM firms:**
- Board-level accountability for AI systems: documented AI inventory, governance framework
- Risk management: nFADP DPIA for AI processing personal data, ongoing monitoring
- Transparency: client disclosure of AI-assisted decisions, explainability where feasible
- Non-discrimination: testing for algorithmic bias, fairness audit procedures

**Boutique WM relevance:** The FINMA AI guidance is the primary regulatory reference for Geneva WM firms. It establishes the baseline expectation. The problem: "adequate" is not defined at boutique scale. The guidance does not specify what AI governance looks like for a 50–200 person Geneva WM firm. The principles-based nature creates the "adequate" gap that the Phase 02 ICP faces.

**Current status:** No updated guidance published as of May 2026. The gap is structural — FINMA has not operationalized "adequate" for boutique WM scale.

---

### 2. nFADP Article 63 — Personal Liability

**Status:** Operative. Swiss Federal Act on Data Protection, Article 63.

**Nature:** Personal liability provision. Those responsible for data processing bear personal liability for compliance failures. "Responsible" includes natural persons — managing directors, partners.

**Boutique WM relevance:** For a Geneva WM firm using AI in portfolio decisions, the managing director is personally responsible for ensuring AI systems processing client data comply with nFADP. Article 63 creates personal liability for:
- AI-influenced investment decisions that result in client harm
- Failure to implement adequate data protection measures for AI systems
- Breach of AI vendor data processing agreements
- Failure to conduct nFADP DPIA for AI systems processing personal data

**The specific exposure:** The managing director who signs off on AI-assisted investment recommendations without documented human oversight, without a nFADP DPIA for the AI system, and without adequate vendor contract governance is personally exposed under Article 63. This is distinct from FINMA regulatory exposure — it is a personal liability exposure under Swiss data protection law.

**Key question:** "I didn't know Article 63 applied to me personally." This is the question the Phase 02 ICP is now asking, prompted by institutional DDQ scrutiny and internal counsel conversations.

---

### 3. Institutional Client AI Governance DDQ

**Nature:** Due Diligence Questionnaire sent by institutional clients (family offices, institutional funds, international HNW clients) to Geneva WM firms as part of manager selection and retention processes.

**Current state (May 2026):** Institutional AI governance DDQs are now more sophisticated than FINMA's December 2024 guidance in specific respects. Institutional clients are asking:
- Evidence of human oversight of AI portfolio decisions
- AI inventory: which AI systems process client data and how
- nFADP compliance documentation for AI systems
- Vendor contract and data processing agreement status
- Personal accountability mapping: who is responsible for AI-influenced investment decisions
- Documentation of human review of AI output before client communication

**Boutique WM relevance:** The institutional DDQ is the operative accountability document for the Phase 02 ICP. DDQ failure is a mandate retention event — a direct revenue consequence. The institutional client is setting a higher standard than FINMA requires. The DDQ is the competitive gate.

**DDQ as design specification:** The institutional AI governance DDQ functions as a design specification for the WM firm's AI governance documentation — it defines what evidence the client actually needs. No competitor has positioned DDQ reading as a discrete service.

---

### 4. CARF/CRS 2.0

**Status:** Operative since January 1, 2026. Already live obligation.

**Nature:** OECD standard for automatic exchange of financial account information. CRS 2.0 introduces new data fields (financial account balances, UUIDs), expanded automated exchanges, and pre-population of forms by tax authorities.

**Boutique WM relevance:** WM firms with international client bases must comply with CRS 2.0 reporting for 2025 data (due 2026). AI systems processing client financial data for reporting purposes create nFADP obligations. The CARF/CRS 2.0 reporting obligation is already live — no excuse for non-compliance.

**AI intersection:** AI systems used for client financial data analysis and reporting must comply with nFADP data processing obligations. CRS2.0 data reporting obligations intersect with AI governance in that AI systems processing the relevant client data trigger DPIA requirements.

---

### 5. AMLA Revision / LETA

**Status:** H2 2026 implementation wave. Consultation on implementing ordinances (LETO, AMLO) concluded January 30, 2026. Referendum period ongoing as of May 2026.

**Nature:** AMLA revision extends obligations to advisors — wealth managers providing investment advice, estate planning, or family office services. Must join FINMA-recognized SRO. Stronger beneficial ownership verification. 30-day reporting of discrepancies between KYC records and Transparency Register.

**LETA:** Central non-public beneficial ownership register. Must identify, verify, and file UBO information. 30-day discrepancy reporting to FINMA.

**Boutique WM relevance:** WM firms with advisory component face dual SRO pressure under expanded "advisor" scope. The30-day discrepancy reporting obligation is a new specific procedural requirement. AI systems used in KYC and client onboarding processes trigger nFADP obligations.

**AI intersection:** AMLA/LETA compliance requires enhanced KYC procedures that increasingly use AI tools. The AI tools processing client beneficial ownership data trigger nFADP obligations. The expanded advisor scope means more WM firms are in scope for SRO obligations — and therefore in scope for FINMA AI guidance.

---

### 6. Swissdamed (July 1, 2026)

**Status:** July 1, 2026 (~5 weeks from May 30, 2026).

**Nature:** Cross-sector data governance framework. Federal Act on the Swiss Health Data Namespace. Primarily healthcare data, but establishes precedent for data governance standards.

**Boutique WM relevance:** If the WM firm processes any health-related data — family office context, estate planning, wealth transfer planning for clients with health-related assets — Swissdamed data governance standards may apply. More broadly, Swissdamed establishes the regulatory trajectory: data governance standards are tightening across Swiss law. The WM firm should anticipate that nFADP enforcement and data governance standards will continue to tighten.

**AI intersection:** Swissdamed reinforces the broader pattern: AI systems processing personal data will face increasing Swiss data governance regulation. The WM firm using AI for client data processing should treat nFADP compliance as a baseline, with Swissdamed as a signal of what is coming.

---

### 7. EU AI Act (August 2, 2026)

**Status:** August 2, 2026 (~14 months from May 30, 2026). Extraterritorial for firms with EU market nexus.

**Nature:** EU AI Act establishes requirements for AI systems placed on the EU market or producing EU-intended output. GPAI obligations already operative since August 2, 2025.

**Boutique WM relevance:** If the Geneva WM firm has EU market nexus — manages assets for EU-based clients, produces investment output intended for EU markets, or acts as importer/distributor of AI systems into the EU — EU AI Act obligations apply. GPAI systems used by the WM firm may trigger EU AI Act obligations.

**AI intersection:** EU AI Act Article 5 GPAI obligations (already operative since August 2025) require providers to have policies for GPAI system use, document copyright and training data, and publish technical documentation. If the WM firm uses GPAI systems (e.g., cloud-based AI tools with EU market nexus), EU AI Act obligations apply.

---

## Regulatory Urgency Stack (Phase 02 — May 2026)

| Regulation | Status | Timeline | Primary Concern for WM |
|---|---|---|---|
| FINMA AI Guidance | Live | Ongoing | Baseline expectation; "adequate" undefined |
| nFADP Art.63 | Live | Ongoing | Personal liability for managing director |
| Institutional DDQ | Live | Ongoing | Competitive gate; mandate retention |
| CARF/CRS 2.0 | Live | January 1, 2026 | Already operative; no excuse |
| AMLA/LETA | Incoming | H2 2026 (~2-3 months) | Advisor scope expansion; SRO obligations |
| Swissdamed | Incoming | July 1, 2026 (~5 weeks) | Cross-sector data governance precedent |
| EU AI Act | Incoming | August 2, 2026 (~14 months) | Extraterritorial if EU market nexus |

---

## Key Geneva/Switzerland Regulatory Intersections (Phase 02)

### FINMA + nFADP Art.63
The managing director faces dual accountability: FINMA expects board-level AI governance; nFADP Art.63 creates personal liability for data processing compliance failures. These are distinct but overlapping obligations. The documentation that satisfies FINMA (board-level AI governance) is not the same as the documentation that makes Article 63 personal liability defensible (evidence of reasonable oversight of AI-influenced decisions). The WM firm needs both.

### FINMA + Institutional DDQ
The institutional client DDQ often asks for more than FINMA requires. The WM firm that builds AI governance to satisfy FINMA may not satisfy institutional clients. The institutional DDQ is a higher standard in specific respects: human oversight documentation, AI inventory, vendor contract status, personal accountability mapping. The WM firm needs to build to the higher standard.

### nFADP + AMLA/LETA
The expanded AMLA advisor scope means more WM firms are in scope for SRO obligations. SRO membership requires enhanced KYC procedures that increasingly use AI tools. AI tools processing client beneficial ownership data trigger nFADP DPIA requirements. The AMLA/LETA compliance process intersects with nFADP AI obligations.

### Swissdamed + nFADP
Swissdamed (July 1, 2026) establishes cross-sector data governance precedent. The WM firm should treat Swissdamed as a signal of tightening data governance standards. nFADP compliance is the current baseline; Swissdamed is the trajectory.

---

## What "Adequate" Means (Phase 02 Synthesis)

The Phase 02 ICP asks: "What does adequate AI governance mean for a50–200 person Geneva boutique WM firm?"

**The answer (synthesized from regulatory context):**

"Adequate" for the Geneva boutique WM firm means:
1. A documented AI inventory covering all AI systems processing client data (FINMA baseline)
2. A nFADP DPIA for each AI system (nFADP Art.35 equivalent)
3. A human oversight protocol for AI-influenced investment decisions (FINMA + institutional DDQ)
4. Vendor contract AI governance review (nFADP Art.28; institutional DDQ)
5. Article 63 personal liability mapping for the managing director (nFADP Art.63)
6. Institutional DDQ readiness documentation (competitive gate)
7. AMLA/LETA KYC AI compliance integration (H2 2026 wave)

The documentation architecture that addresses all seven dimensions is the "adequate" AI governance framework for the Geneva boutique WM firm. No competitor offers this as a single integrated product.

---

## Geneva-Specific Factors (Phase 02)

### Scale Factor
The Geneva boutique WM firm (50–200 employees, CHF 200M–2B AUM) is too large for the micro-firm exemptions that apply to very small firms, and too small for enterprise-scale compliance infrastructure. The "adequate" standard must be defined at boutique scale — with proportionate documentation requirements, proportionate oversight protocols, and proportionate personal liability frameworks.

### Institutional Client Factor
Geneva WM firms serving institutional clients face a higher standard than those serving only private clients. The institutional DDQ is the operative accountability document. The WM firm serving institutional clients must build to the institutional standard, not just the FINMA minimum.

### nFADP Enforcement Factor
The FDPIC has not yet targeted WM firms for nFADP AI enforcement, but the enforcement trajectory is established (Phase 01 data). The WM firm should anticipate that nFADP enforcement will expand to financial services. "Adequate" AI governance is the defensive position.

### Peer Network Factor
Geneva WM is a close-knit community. Word-of-mouth carries. First-mover advantage in AI governance positioning is amplified by peer referral dynamics. The WM firm that gets AI governance right becomes the peer reference that others point to.

---

*C309 Phase 02 compliance context — Geneva/Switzerland specific regulatory framework for boutique wealth management. FINMA AI guidance, nFADP Art.63 personal liability, institutional DDQ as competitive gate, CARF/CRS 2.0, AMLA/LETA H2 2026, Swissdamed July 2026, and EU AI Act August 2026 define the regulatory stack. "Adequate" defined as seven-dimension documentation architecture at boutique WM scale.*
