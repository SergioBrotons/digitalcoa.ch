# Phase 02 Geneva Finance — Cycle 48 Decision Framework
**Created: 2026-04-01 02:28 UTC**

# The Wealth Manager's AI Governance Decision Framework
## Five Decisions for Independent Advisors and Boutique Wealth Managers

---

## Framework Overview

This framework organizes the AI governance decision space into five discrete decisions specific to wealth managers and independent advisors. Each decision has a specific trigger, a minimum viable response, and a "beyond minimum" enhancement.

The five decisions follow the order in which they should be addressed:

| Decision | Topic | Urgency |
|----------|-------|---------|
| Decision 0 | AI Tool Inventory — Envelope Test | NOW |
| Decision 1 | Data Processing Agreements and Swiss Residency | NOW → May 2026 |
| Decision 2 | FINMA Human Accountability Chain | NOW |
| Decision 3 | Agentic AI Assessment — DPIA and Oversight | May 2026 |
| Decision 4 | FATF Examination Readiness | May 2026 |

---

## Decision 0: AI Tool Inventory — Envelope Test

**Question:** What AI tools does your firm use, and which of them reads client financial data?

**Trigger:** CARF/CRS 2.0 is live. FATF examiners will ask about AI tools. FADP obligations are already operative. You cannot govern what you do not know exists.

**Minimum Viable Response — The Envelope Test:**
- List every AI-adjacent tool used in your firm
- Apply the Envelope Test: does this AI read client financial data and interpret it, or does it only route/format/aggregate it?
- Envelope (low risk): scheduling, formatting, routing, calendar management, KYC checklist tracking, billing preparation
- Letter (high risk): portfolio analysis, investment recommendation drafting, client communication that interprets financial data, CARF/CRS report generation from raw data, transaction monitoring

**Beyond Minimum:**
- Interview all staff (including support staff) for AI tool use
- Include personal devices and browser extensions
- Map data flows for each tool: where does client data go?
- Check vendor privacy policies for data retention and training data use

**Why This Decision Comes First:**
You cannot answer FATF examination questions without this inventory. You cannot manage FADP obligations without knowing which tools access personal data. The inventory is the foundation for every subsequent decision.

---

## Decision 1: Data Processing Agreements and Swiss Residency

**Question:** Do you have signed DPAs with every AI vendor processing client financial data — and are those vendors keeping your data in Switzerland or EU jurisdiction?

**Trigger:** FADP Art. 5(c), Art. 16, and Privacy by Design are already operative. The US CLOUD Act creates enforceable US government access rights to data held by US-based cloud providers.

**Minimum Viable Response:**
1. For every "letter" tool (Decision 0): identify the vendor and the data center location(s)
2. Request and execute a DPA from every vendor that processes client financial data
3. Confirm Swiss or EU data residency in the DPA — if US-based, assess CLOUD Act exposure
4. Confirm: vendor does not use client input data for AI model training

**The CLOUD Act Filter:**
- US-headquartered AI vendors (Google, Microsoft, OpenAI, Amazon) are subject to the US CLOUD Act
- Client financial data processed through US-based AI tools may be accessible to US government authorities
- For wealth managers with US clients, US-connected assets, or US beneficial ownership interests, this is not theoretical
- Swiss-hosted alternatives: FABIAN (enterprise), CASUS and Meikai (SMB-accessible) — all confirmed Swiss/FADP compliant

**Beyond Minimum:**
- Negotiate DPAs that include AI-specific provisions (output ownership, error liability, Art. 21 response)
- Review DPAs annually for data residency and retention changes
- Maintain a DPA register alongside the AI tool inventory

---

## Decision 2: FINMA Human Accountability Chain

**Question:** For every AI tool in your firm, is there a named FINMA-licensed human who is accountable for its outputs?

**Trigger:** FINMA Circular 08/2024 articulates AI governance expectations for Swiss financial institutions. As a FINMA-licensed advisor, you bear personal responsibility for investment recommendations — AI-assisted or not. The FADP's Art. 21 human review right means clients can request explanation of any automated decision.

**Minimum Viable Response:**
1. For every "letter" AI tool: assign a named FINMA-licensed individual as the responsible party
2. Document this assignment: AI Tool | Responsible Party (FINMA license #) | Scope of responsibility
3. Ensure the responsible party reviews AI outputs before client-facing use (or has a documented procedure for when review is not required)
4. Brief all staff: the AI tool does not replace the licensed individual's judgment — it supports it

**The Agentic AI Acceleration Risk:**
If any AI tool takes autonomous action (rebalances, executes, sends client communications) without human approval at each step, the accountability chain breaks down. Decision 3 addresses this specifically.

**Beyond Minimum:**
- Formal accountability chain documentation as part of AI governance policy
- Periodic review of whether the responsible party has sufficient understanding of the AI tool's logic and outputs
- Training for FINMA-licensed staff on AI-assisted decision documentation

---

## Decision 3: Agentic AI Assessment — DPIA and Human Oversight

**Question:** Does any AI tool in your firm take autonomous action without human approval at each step?

**Trigger:** 78% of wealth management firms are exploring agentic AI. Agentic AI (autonomous portfolio rebalancing, AI-driven client communication, automated compliance reporting) creates substantially higher regulatory exposure than passive AI tools.

**Minimum Viable Response:**
1. Assess every AI tool for autonomous action capability: does it take action without a human approving each specific action?
2. If agentic AI is identified:
   - Conduct a DPIA (Data Protection Impact Assessment) for that tool
   - Establish a documented human oversight procedure: how does a human review what the AI has done?
   - Assess FINMA suitability: can the AI make or influence suitability determinations without human review?
   - Assess FATF AML: can the AI flag suspicious transactions in a way that FATF examiners can review?
   - Assess CARF/CRS: can the AI generate reports with a clear accountability chain?
3. If agentic AI cannot meet the above requirements, discontinue deployment until it can

**The DPIA Triggers for Wealth Management:**
- AI processing client financial data at scale
- AI involved in investment recommendations or suitability assessments
- AI generating CARF/CRS or AML reports
- AI involved in portfolio rebalancing or trade execution

**Beyond Minimum:**
- Proactive DPIA before any new agentic AI deployment
- Annual DPIA review for ongoing agentic AI deployments
- Formal human oversight documentation for each agentic AI system

---

## Decision 4: FATF Examination Readiness

**Question:** Can your firm answer these five questions clearly — and does your documentation support your answers?

1. What AI tools does your firm use?
2. Who is the FINMA-licensed human responsible for each AI tool's outputs?
3. How do you ensure AI-generated recommendations meet FATF AML standards?
4. How is AI involved in your CARF/CRS reporting?
5. What documentation exists for your AI governance framework?

**Trigger:** FATF 2026–2027/2028 review cycle means FATF examiners will assess Swiss financial institutions' AI governance. CARF/CRS 2.0 has been live since January 1 2026.

**Minimum Viable Response:**
1. Self-assess against the five questions above using your Decision 0–3 documentation
2. Identify gaps: where you cannot answer a question clearly, build the documentation
3. Prepare a one-page AI governance summary document for FATF examiners: AI tool inventory, responsible parties, oversight procedures
4. Ensure CARF/CRS reports clearly document any AI involvement in data processing

**The CARF/CRS AI Connection:**
CARF/CRS 2.0 requires documented data processing for real-time transaction reporting. If AI tools are involved in generating or processing CARF/CRS reports, the AI's logic and data sources must be attributable and reviewable. FATF examiners will examine this.

**Beyond Minimum:**
- Mock FATF examination review against the five questions
- External review of AI governance documentation before FATF examiners arrive
- CARF/CRS-specific AI documentation audit

---

## Decision Framework Summary

| Decision | Priority | Deadline | Owner |
|----------|----------|---------|-------|
| Decision 0: AI Tool Inventory | NOW | Immediate | FINMA-Licensed Advisor |
| Decision 1: DPAs + Swiss Residency | NOW → May 2026 | Rolling | Office Manager / IT |
| Decision 2: FINMA Accountability Chain | NOW | Immediate | FINMA-Licensed Advisor |
| Decision 3: Agentic AI DPIA | May 2026 | Before deployment | External DP Specialist |
| Decision 4: FATF Readiness | May 2026 | Before FATF review | FINMA-Licensed Advisor |

---

## When to Use Outside Help

The five-decision framework is designed to be executable internally for most boutique wealth managers with FINMA-licensed staff. Outside help is recommended for:

- **DPIA for agentic AI**: Agentic systems involved in portfolio management, trading, or compliance reporting require specialist DPIA support
- **CARF/CRS AI documentation**: External review of AI involvement in CARF/CRS reporting strengthens FATF examination posture
- **FINMA examination preparation**: Mock FATF review by specialists who understand both Swiss AI governance and FATF examination standards
- **DPA negotiation with US vendors**: CLOUD Act legal analysis for AI tools processing sensitive client financial data

---

## The Competitive Timing Question

The boutique wealth management firms that act now — in the 12–18 month window before FATF examinations conclude and the market professionalizes — will have three structural advantages:

1. **Documentation of FATF-ready AI governance** when examiners arrive (CARF/CRS 2.0 is already live)
2. **Established client trust** built before clients ask their advisors about AI governance
3. **First-mover credibility** as a firm that understood AI governance before it became mandatory

The firms that wait will be building under FATF examination pressure, with less time, and with the added cost of urgency.

The decision framework above is the minimum viable path. The question is not whether to start — CARF/CRS 2.0 is already operative and FATF examiners are already in the review cycle. The question is whether to start on your terms, with documentation, structure, and time — or to start reactively, under examination pressure, with less control over the outcome.

---

*This framework does not constitute legal or financial advice. For specific FADP, FINMA, CARF/CRS, or FATF compliance questions, consult with qualified specialists.*
