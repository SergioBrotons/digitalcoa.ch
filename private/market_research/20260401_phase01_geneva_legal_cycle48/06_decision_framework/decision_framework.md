# Phase 01 Geneva Legal — Cycle 48 Decision Framework
**Created: 2026-04-01 02:25 UTC**

# The Small Law Firm AI Governance Decision Framework
## Six Decisions Every Geneva Law Firm Must Make

---

## Framework Overview

This framework organizes the AI governance decision space into six discrete decisions. Each decision has a specific trigger, a minimum viable response, and a "beyond minimum" enhancement. The framework is designed for small and solo law firms — not enterprises — and assumes no existing AI governance infrastructure.

The six decisions follow the order in which they should be addressed:

| Decision | Topic | Urgency |
|----------|-------|---------|
| Decision 0 | Shadow AI Audit — What AI is already in use? | NOW |
| Decision 1 | Data Processing Agreements — Are vendor relationships compliant? | NOW → May 2026 |
| Decision 2 | Art. 21 Automated Decisions — Do you have a human review process? | NOW |
| Decision 3 | DPIA Obligation — Is any AI processing high-risk? | May 2026 |
| Decision 4 | Swiss Data Residency — Is your data staying in Switzerland? | May 2026 |
| Decision 5 | Staff Guidelines — Do you have documented AI use policies? | May 2026 |

---

## Decision 0: Shadow AI Audit

**Question:** What AI tools is your firm currently using, and what data do they access?

**Trigger:** Every law firm should conduct this audit immediately. The FADP applies to AI tools already in use — not just to tools you plan to deploy.

**Minimum Viable Response:**
Conduct the Envelope Test for every tool used in your firm:
- List every AI-adjacent tool your staff use (include tools that may not be labeled "AI" — grammar checkers, auto-complete, translation tools, document scanners with text recognition, calendar scheduling tools)
- For each tool, determine: does it read document content (letter) or does it only move/route/format documents (envelope)?
- Document the results in a simple spreadsheet: Tool name | User(s) | Data accessed | Envelope or Letter?

**Beyond Minimum:**
- Conduct a formal inventory with staff interviews
- Include personal devices and browser extensions
- Map data flows: where does data go when entered into each tool?
- Check vendor privacy policies for data retention and training data use

**Why This Decision Comes First:**
You cannot govern tools you do not know exist. The Shadow AI audit is the foundation for every subsequent decision. Without this inventory, your FADP compliance is structurally incomplete.

---

## Decision 1: Data Processing Agreements

**Question:** Do you have signed DPAs with every AI vendor that processes personal data from your firm?

**Trigger:** The FADP requires DPAs with any vendor processing personal data on your behalf (Art. 5(c) and Art. 16). This obligation is already operative.

**Minimum Viable Response:**
For every tool identified in Decision 0 that processes personal data:
1. Check if the vendor offers a DPA (most reputable AI vendors have standard agreements)
2. Sign and execute the DPA
3. File the executed DPA with your AI tool inventory
4. For vendors that do not offer DPAs: consider discontinuing use, or document the risk decision at partner level

**Beyond Minimum:**
- Review DPAs for data residency clauses (Swiss or EU jurisdiction preferred)
- Review DPAs for data retention periods
- Review DPAs for training data use (client data must not be used for model training without explicit consent)
- Negotiate DPAs that include Art. 21 response obligations

**Key Question for Geneva Law Firms:**
Does the DPA keep data in Switzerland or EU? If the vendor uses US servers, the CLOUD Act creates US government access rights that may conflict with attorney-client confidentiality obligations.

---

## Decision 2: Art. 21 Automated Decisions

**Question:** If a client or counterparty requests explanation of an automated decision, can your firm respond within the FADP timeframe?

**Trigger:** Art. 21 FADP gives data subjects the right to: (a) be informed if automated decisions are made; (b) state their point of view; (c) request human review. This right is already operative.

**Minimum Viable Response:**
1. Determine whether any AI tool in your firm produces automated decisions with legal effects on data subjects (this is a lower threshold than it sounds — scheduling a client meeting is not a legal effect; producing a legal opinion or contract analysis likely is)
2. If any AI tool produces legally significant outputs: document this in your AI tool inventory
3. Create a simple internal procedure: who reviews the AI output? how is the human review documented? what is the response timeframe?
4. Ensure client-facing communications indicate when AI has been used in matter work

**Beyond Minimum:**
- Formalize the human review documentation process
- Train staff on what constitutes an automated decision with legal effects
- Create template responses for Art. 21 requests
- Review matter management system for automated workflow outputs

---

## Decision 3: DPIA Obligation

**Question:** Does any AI processing in your firm require a formal Data Protection Impact Assessment?

**Trigger:** Art. 22 FADP requires a DPIA when data processing carries high risk to personality rights or fundamental rights. The FDPIC has indicated this applies to AI processing. A DPIA should ideally be completed before deploying high-risk AI tools — and assessed for existing tools as part of Decision 0.

**Minimum Viable Response:**
1. Assess every "Letter" tool (Decision 0) for DPIA obligation:
   - Does it process sensitive data categories (health, financial, biometric)?
   - Does it make or significantly influence decisions about individuals?
   - Does it process data at scale?
   - Is there a risk of significant personality rights impact?
2. If DPIA is required: the assessment must be conducted and documented. This can be done internally for low-complexity tools, or with specialist support for higher-risk deployments.
3. High-risk AI tools that cannot be brought into compliance should be discontinued.

**Beyond Minimum:**
- Proactive DPIA for all new AI tool deployments (Privacy by Design)
- Annual DPIA review for ongoing AI processing
- Documentation of risk mitigation measures and residual risk acceptance

**DPIA Triggers Specific to Law Firms:**
- AI processing client case files (financial distress, litigation, employment, family law — all sensitive categories)
- AI analyzing employee data (HR matters, employment disputes)
- AI processing third-party data in transactions (counterparties, targets, witnesses)

---

## Decision 4: Swiss Data Residency

**Question:** Is the data your firm enters into AI tools staying in Switzerland or EU jurisdiction?

**Trigger:** The FADP requires adequate data security (Art. 16). The US CLOUD Act creates enforceable US government access rights to data held by US-based cloud providers. For law firms with attorney-client confidentiality obligations, data residency is both a compliance and a professional responsibility issue.

**Minimum Viable Response:**
1. For every AI tool in your inventory: identify the data center location(s)
2. Prioritize Swiss or EU-based vendors for tools processing client data
3. For US-based vendors: assess CLOUD Act exposure and document the risk decision
4. Flag any tool that uses client data for AI model training (this is disqualifying for most law firm use cases)

**Beyond Minimum:**
- Negotiate data residency commitments into DPAs
- Conduct a CLOUD Act legal analysis for US-based tools processing highly sensitive data
- Implement a vendor hierarchy: Swiss-first, EU-second, US-require-justification

**Swiss-Hosted AI Options Confirmed:**
- FABIAN PRIVACY LEGAL (fabian-legal.ch): Swiss-hosted, SMB-accessible
- CASUS (getcasus.com): Swiss DSG/GDPR compliant
- Meikai (meikai.ch): Swiss nFADP/FADP compliant + EU GDPR standards
- DeepLaw (deepcloud.swiss): ISO 27001:2022, FADP/GDPR compliant, Swiss-only processing

---

## Decision 5: Staff Guidelines

**Question:** Does your firm have a documented, one-page policy that tells staff what they can and cannot do with AI tools?

**Trigger:** Privacy by Design (Art. 7 FADP) requires that data protection be considered from the earliest stages. A one-page staff guideline document is the minimum viable expression of this principle for a small law firm.

**Minimum Viable Response:**
A one-page document covering:
1. What AI tools are approved for firm use (per Decision 0 inventory)
2. The Envelope Test: what can be entered into approved tools (envelope = routing, formatting, scheduling) and what cannot (letter = document content, legal analysis, client data interpretation)
3. The training data rule: no client names, matter details, contract content, or case information may be entered into AI tools that use inputs for model training
4. What to do if an AI tool produces an unexpected output (hallucination protocol: always verify before using)
5. How to document AI use in matter files (for Art. 21 response purposes)

**Beyond Minimum:**
- Annual staff training on AI governance and FADP obligations
- AI use clause in onboarding documentation for new staff
- Periodic review and update of the AI tool inventory and approved tool list
- Incident response procedure for AI-related data breaches

---

## Decision Framework Summary

| Decision | Priority | Deadline | Owner |
|----------|----------|----------|-------|
| Decision 0: Shadow AI Audit | NOW | Immediate | Managing Partner |
| Decision 1: Data Processing Agreements | NOW → May 2026 | Rolling | Office Manager / IT |
| Decision 2: Art. 21 Response Procedure | NOW | Immediate | Managing Partner |
| Decision 3: DPIA Obligation | May 2026 | Before new tool deployment | External DP specialist |
| Decision 4: Swiss Data Residency | May 2026 | Before new tool deployment | Managing Partner / IT |
| Decision 5: Staff Guidelines | May 2026 | Before end-2026 | Managing Partner |

---

## How to Sequence the Decisions

**Week 1–2 (Immediate):**
- Conduct Decision 0 Shadow AI Audit (Envelope Test)
- Identify Art. 21 exposure (Decision 2)

**Month 1 (April 2026):**
- Execute DPAs for all identified tools (Decision 1)
- Draft one-page staff guidelines (Decision 5)
- Assess data residency for all tools (Decision 4)

**May 2026 (digitalswitzerland deadline):**
- Complete DPIA assessments for Letter tools (Decision 3)
- Update policies based on First Draft AI Action Plan
- Document compliance posture for external reference

**End of 2026 (Federal Council deadline):**
- Full framework review against new legislation
- Update DPA requirements based on new law
- Renew staff training

---

## When to Use Outside Help

The six-decision framework is designed to be executable internally for most small and solo law firms. Outside help is recommended for:

- **DPIA for high-risk AI processing**: Legal AI tools analyzing case files, client financial data, or employee information require specialist assessment
- **DPA negotiation with US vendors**: If CLOUD Act exposure is material to your practice, a legal analysis is warranted
- **Formal policy documentation**: If your firm needs defensible documentation for a specific client or matter, outside review strengthens the compliance record
- **FADP Art. 21 response procedure**: If a data subject has requested explanation of an automated decision, specialist support is recommended for the first response

---

## The Competitive Timing Question

The firms that act now — in the 12–18 month window before enforcement arrives and the market professionalizes — will have three structural advantages:

1. **Documentation of good-faith compliance effort** when enforcement comes (FADP mitigation factor)
2. **Established internal practices** that don't need to be built under pressure
3. **Case studies and client trust** built before the market realizes AI governance is a compliance requirement

The firms that wait will be building under pressure, with less time, and with the added cost of urgency.

The decision framework above is the minimum viable path. The question is not whether to start — the FADP obligations are already operative. The question is whether to start on your terms, with documentation, structure, and time — or to start reactively, under enforcement pressure, with less control over the outcome.

---

*This framework does not constitute legal advice. For specific FADP compliance questions, consult with a qualified data protection specialist.*
