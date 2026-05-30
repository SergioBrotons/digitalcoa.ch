# Phase 02 — Geneva Finance (Boutique Wealth Management) — Compliance Context
## C302 Cycle | 2026-05-30 | Operator Agent

---

## Regulatory Context — Geneva Boutique Wealth Manager (50–200 Employees)

### Applicable Regulatory Framework

| Regulation | Scope | Status |
|---|---|---|
| **nFADP** (Fed. Act on Data Protection, 2020) | Data processing including AI | Operative since 2023 |
| **nFADP Art. 63** | Personal liability for responsible person | Operative |
| **FINMA Circ. 2018/3** (outsourcing) | Cloud, AI vendor outsourcing | Operative |
| **FINMA Guidance 08/2024** (AI governance) | AI risk management | Operative since Dec 2024 |
| **FINMA Circ. 2025/02** (FinSA/FinSO conduct) | Client conduct, suitability | Operative Jan 1, 2025 |
| **FINMA Circ. 2026/01** (nature-related risks) | Climate/nature risk | Staged from Jan 1, 2026 |
| **Revised AMLA** | AML due diligence for advisors | Expected mid-2026 |
| **LETA** (Transparency of Legal Entities) | Beneficial owner register | Expected H2 2026 |
| **CARF + CRS 2.0** | Crypto tax reporting | Effective Jan 1, 2026 |
| **FDPIC May 8, 2025** | nFADP + AI explicit confirmation | Confirmed |
| **CoE AI Convention** | Cross-sectoral AI governance | Signed March 2025; ratification pending |
| **Federal Council approach (Feb 2025)** | Sector-specific preferred | Consultation draft end-2026 |
| **EU AI Act** (extraterritorial) | Swiss WM serving EU clients | GPAI rules Aug 2025; full Aug 2026 |

---

## Finance-Specific Regulatory Obligations

### nFADP Art. 5(c) — Automated Decision-Making (HIGH RELEVANCE)
**Applies when:** AI systems make or significantly influence decisions with **legal or similarly significant effect** on clients.

**Finance-specific examples:**
- AI-driven portfolio rebalancing without human review
- Algorithmic suitability scoring for financial products
- Automated risk profiling determining advisory approach
- AI-generated investment recommendations without documented human approval
- Robo-advisory services with automated allocation decisions

**Obligations:**
- Client must be informed when automated decisions are made
- Right to request human review / manual intervention
- DPIA (Data Protection Impact Assessment) required before deployment
- FDPIC May 8, 2025 explicit confirmation: AI-based data processing falls directly under Art. 5(c)

**Finance-specific risk:** Investment decisions have direct financial consequences. A client who suffers loss and challenges the decision process will ask: was this human or AI? The managing director must be able to answer.

---

### nFADP Art. 26 — ADMD Disclosure (HIGH RELEVANCE)
**Art. 26 ADMD Disclosure:** Before deploying AI tools that process client data, wealth managers must:
- Inform clients about the AI tool's nature and purpose
- Document the legal basis for data processing
- Ensure vendor DPA (Data Processing Agreement) is in place

**Finance-specific vendor ecosystem:**
- InvestGlass AI, Additiv, Altoo, Neurons Lab, Nevis, Charles River, Aladdin
- All processing client financial data — all require signed DPAs
- Sub-processor chain must be documented

---

### nFADP Art. 63 — Personal Liability (PRIMARY CONCERN FOR FINANCE ICP)
**Art. 63 Personal Liability:** The "responsible person" (typically managing director or partner) bears personal liability for nFADP violations related to AI systems.

**Why this is the wake-up call for finance ICP:**
- Managing directors at wealth management firms are typically the signatories on regulatory filings
- Personal liability means personal assets at risk, not just firm liability
- AI-related data breach by a vendor processing client financial data = Art. 63 personal exposure
- The accountable person (senior partner) may not have technical fluency to understand the exposure

**Finance-specific amplification:**
- Wealth management firms process the most sensitive category of personal data: financial position, net worth, family circumstances, inheritance plans
- A breach involving AI tool vendor data sharing is the highest-risk scenario
- Institutional clients with AI governance questionnaires are effectively asking: "Can you protect our data if your AI vendor is breached?"

---

### FINMA Guidance 08/2024 — AI Governance Obligations (Operative)
**Operative since December 2024.** Key requirements:
- Maintain AI tool inventory (all AI systems in use)
- Risk-classify each AI tool
- Define accountability and responsibility per AI application
- Implement risk mitigation measures
- Monitor AI system performance and drift
- Report material AI incidents to FINMA

**Finance-specific inventory items:**
- Portfolio management systems with AI components (Charles River, Aladdin)
- CRM with AI-driven client scoring
- AI-powered risk modeling tools
- Automated rebalancing tools
- AI meeting summaries and client communication tools (Nevis)
- Third-party AI APIs integrated into workflows

**Reality check:** Most mid-size boutiques are in early stages of establishing formal AI governance per FINMA's own assessment.

---

### FINMA Circ. 2025/02 — FinSA Conduct Rules (Operative)
**Effective Jan 1, 2025** (transition to June 30, 2025):
- Duty to provide information on financial instruments and risks
- Suitability and appropriateness tests
- Conflict of interest management
- Third-party compensation disclosure

**AI relevance:** When AI tools generate recommendations or support suitability assessments, the firm remains responsible for FinSA compliance. AI does not transfer liability. The managing director signs off on suitability — AI assists but does not replace accountability.

---

### Institutional Client AI Governance Questionnaires — de facto Standard
**What they are:** Institutional clients (corporate treasuries, family offices, endowments, institutional investors) sending detailed AI governance questionnaires to wealth managers as part of vendor due diligence.

**What they ask about:**
- AI tool inventory and authorization records
- Data access controls and sub-processor chain
- Decision attribution and human oversight mechanisms
- Vendor DPA documentation
- nFADP compliance evidence
- FINMA 08/2024 AI governance framework documentation

**Why they matter:** Institutional mandates (RFPs) now include AI governance as a scored evaluation criterion. A firm without documented AI governance loses institutional mandates to a competitor who has it.

**The documentation gap:** Wealth managers receiving these questionnaires cannot produce the required evidence. The systems were never built to capture authorization records, decision attribution, and human oversight documentation.

---

### Carrier Attestation Form v4 — Evidence Standard Shift
**What changed:** Insurance carriers have shifted from simple attestation to evidence-based documentation requirements.

**Form v4 requirements:**
- "Last three authorization records" per AI tool
- When each AI tool was authorized
- Who approved it
- What client data it accesses
- Sub-processor chain documentation

**Why this matters:** Carrier attestation is no longer a checkbox — it requires supporting documentation. Wealth managers realizing that attestation ≠ compliance are seeking evidence management solutions.

---

## Regulatory Timeline — Geneva WM (50–200 Employees)

| Date | Obligation |
|---|---|
| **Dec 2024** | FINMA Guidance 08/2024 AI governance operative |
| **Jan 1, 2025** | FINMA Circ. 2025/02 (FinSA conduct) operative |
| **Jan 1, 2026** | CARF + CRS 2.0 (crypto reporting) effective |
| **Jan 1, 2026** | FINMA Circ. 2026/01 (nature risks) staged |
| **Mid2026** | Revised AMLA expected force |
| **H2 2026** | LETA expected force |
| **2026** | SIF AI Report expected (financial sector AI regulatory mapping) |
| **End 2026** | Federal Council consultation draft for cross-sectoral AI rules |
| **Aug 2026** | EU AI Act full compliance deadline (for EU client exposure) |

---

## First-Mover Window Assessment

**Stable — 18–24 months** before potential boutique entry.

Supporting evidence (C302 Phase 02):
- No boutique AI governance competitor confirmed for mid-size WM firms (50–200 employees)
- Institutional client RFP pressure creating urgency independent of regulatory enforcement
- Carrier attestation shift to evidence standard active
- FINMA's own assessment: most Swiss institutions still in early AI governance establishment
- Regulatory landscape still developing (Federal Council consultation draft not until end-2026)
- Multiple overlapping new obligations (FinSA 2025/02, AMLA, LETA, CARF) create urgency without clarity

---

## Last Updated: 2026-05-30 (C302 Phase 02 — NET-NEW findings)
## Previous: Cycle 4 (2026-03-29)
