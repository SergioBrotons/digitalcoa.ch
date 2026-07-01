# Compliance Context: Geneva Finance — C314 Phase 02

## Geneva / Switzerland Specific Regulatory Architecture for the EU AI Act 30-Day Window

---

## Overview

The Geneva boutique wealth management (WM) firm with EU-domiciled institutional clients operates under four concurrent regulatory regimes that converge on the EU AI Act late August 2026 deadline. Each regime imposes obligations the managing director (MD) must satisfy. The regimes overlap, conflict in specific named articles, and are not coordinated by any single supervisory authority. The MD is named personally in three of the four regimes (nFADP Art.63, FINMA operational resilience, carrier attestation). The MD is the named deployer under the EU AI Act.

This document maps the four regimes, identifies the named obligations, specifies the conflicts, and produces the C314 P02 compliance architecture for the 30-day window.

---

## Regime 1 — EU AI Act (Regulation 2024/1689)

### Applicability to the Geneva Boutique WM

The EU AI Act applies to the Geneva boutique WM through Article 3 (deployer status). Article 3 defines a deployer as "a natural or legal person using an AI system under its authority in a professional capacity." The geographic test is the location of the affected person, not the location of the deployer.

**Triggering scenario:** A Geneva boutique WM manages a portfolio for an EU-domiciled pension fund. The portfolio construction uses AI (e.g., allocation optimization, rebalancing logic, scenario analysis). The AI use affects the EU pension fund's mandate outcomes. The Geneva boutique WM meets the Article 3 deployer definition for that mandate.

**Specific obligations triggered by deployer status:**

- **Article 4 — AI Literacy:** The deployer must take measures to ensure "a sufficient level of AI literacy" of its staff and any other person handling the operation and use of AI systems on its behalf. The literacy must be appropriate to technical knowledge, experience, education, and training, and to the context the AI systems are used in.
- **Article 14 — Human Oversight:** The deployer of a high-risk AI system must implement human oversight measures "to the extent that they can be exercised by them." For portfolio construction AI, the high-risk classification depends on Article 6(3) analysis (whether the AI performs a narrow procedural task, improves previously completed human activity, detects decision-making patterns, or performs a preparatory task).
- **Article 26 — Deployer Obligations:** Deployers of high-risk AI systems must use the system in accordance with the instructions for use, assign human oversight to natural persons with the necessary competence, ensure the input data is relevant and sufficiently representative, monitor the operation, and inform the provider of serious incidents.
- **Article 50 — Transparency:** Providers and deployers of certain AI systems must inform natural persons that they are interacting with an AI system, where the AI system is not obvious from the perspective of a reasonably well-informed natural person exercising due care. For portfolio construction AI used on institutional mandates, the institutional client's investment committee is the natural person affected.

### Deadline

The EU AI Act provisions on AI literacy (Article 4) and general applicability become enforceable on **2 August 2026** (the two-year anniversary of the Regulation's entry into force, per Article 113(a)). The high-risk system provisions (Articles 9–15, 26) become applicable on **2 August 2026** for high-risk systems already on the market. Some provisions have later dates, but the August 2026 deadline is the dominant operational lever.

### The Geneva-Specific Gap

The Geneva boutique WM has not read the EU AI Act. The MD has been focused on nFADP compliance, FINMA supervisory letters, carrier attestation cycles, and institutional DDQ responses. The EU AI Act has been a "regulatory horizon" the MD keeps deferring. The deferral window closes on 2 August 2026.

---

## Regime 2 — Swiss Federal Act on Data Protection (nFADP / DSG)

### Applicability to the Geneva Boutique WM

The nFADP (in force since 1 September 2023) applies to all data processing by private persons and federal bodies in Switzerland, with extraterritorial scope for processing that has effects in Switzerland. For the Geneva boutique WM, nFADP applies directly because the firm processes personal data of Swiss and EU clients on Swiss territory.

**Specific obligations relevant to AI governance:**

- **Article 4 — Lawfulness of Processing:** Personal data must be processed lawfully, in good faith, proportionately, and for a specific purpose.
- **Article 6 — Data Subject Rights:** Data subjects have rights of access, rectification, deletion, and objection. For AI-processed portfolio data, these rights must be operationally satisfiable.
- **Article 9 — Cross-Border Data Transfer:** Cross-border disclosure of personal data is permitted only if the destination country ensures an adequate level of data protection, or with appropriate safeguards (binding corporate rules, standard contractual clauses, etc.).
- **Article 12 — Data Security:** The data controller must implement appropriate technical and organizational measures to ensure data security.
- **Article 16 — Data Protection by Design and by Default:** The data controller must implement data protection by design and by default in the processing of personal data.
- **Article 63 — Personal Liability:** The natural person responsible for data processing at the data controller is personally liable for breaches of the nFADP. For a Geneva boutique WM, this is the MD or managing partner.

### Personal Liability Under nFADP Art.63

Art.63 creates personal liability for the responsible person at the data controller. The FDPIC guidance issued in Q4 2025 clarified that Art.63 applies to the natural person who makes decisions about data processing purposes and means — the MD or managing partner for a 50–200 employee boutique WM. The personal liability is independent of the firm's corporate liability; the MD can be sanctioned personally even if the firm is sanctioned separately.

The Art.63 personal liability is now visible because the EU AI Act deployer status forces the MD to personally attest to AI governance claims. The attestation links the MD's name to AI governance documentation across multiple regimes simultaneously.

### nFADP + EU AI Act Reconciliation Point

**nFADP Article 9 (Cross-Border Data Transfer) and EU AI Act Article 10 (Data Governance) both govern the same AI-processed portfolio data but from different regulatory lenses.** nFADP Art.9 asks whether the data can cross borders. EU AI Act Art.10 asks whether the training data and input data are relevant, sufficiently representative, and free of errors. The Geneva boutique WM must satisfy both simultaneously. The reconciliation is not addressed by either regulation; it is the MD's responsibility to produce documentation showing both are satisfied.

---

## Regime 3 — FINMA Circular 2026/03 Operational Risks and Resilience

### Applicability to the Geneva Boutique WM

FINMA Circular 2026/03 "Operational Risks and Resilience — Banks" was published in March 2026. It applies to all FINMA-supervised institutions, including:

- **Banks** under the Federal Act on Banks and Savings Institutions (BankG)
- **Securities firms** under the Financial Institutions Act (FinIA)
- **Fund management companies** under the Collective Investment Schemes Act (CISA)

A Geneva boutique WM with a FINMA license (as a bank, securities firm, or fund manager) is subject to Circular 2026/03. The MD is the FINMA-supervised responsible person.

### Section 7.4 — AI Governance Requirements

Section 7.4 of Circular 2026/03 establishes baseline AI governance obligations for FINMA-supervised institutions using AI in material operations. Material operations are defined by:

- Usage frequency (regular, recurring use in portfolio management, mandate compliance, client reporting)
- Decision-impact (AI recommendations that influence investment decisions)
- Data sensitivity (AI processing of personal data, transaction data, portfolio data)

A Geneva boutique WM using portfolio construction AI typically meets the materiality threshold. The MD is required to produce:

- **AI System Inventory:** A documented inventory of all AI systems used, classified by material/non-material, with deployment scope (which mandates, which functions) and risk classification.
- **Deployer Accountability:** Named individuals with accountability for each AI system, with role description and decision authority.
- **Human Oversight Documentation:** Documented human oversight protocol for material AI systems, specifying who reviews AI outputs, what review criteria are applied, when override is exercised, how oversight is recorded.
- **Incident Response Protocol:** Documented protocol for AI-related incidents (model failure, data breach, hallucination, unauthorized output), including escalation, remediation, and reporting to FINMA where required.

### Deadline

Circular 2026/03 includes a 12-month transition period from publication. Substantial compliance is required by **March 2027**. However, FINMA supervisory reviews in 2026 are already referencing Section 7.4 — the supervisory expectation is that documentation is in development, not waiting for the deadline.

### FINMA + EU AI Act Reconciliation Point

**FINMA Circular 2026/03 Section 7.4 (Human Oversight Documentation) and EU AI Act Article 14 (Human Oversight for High-Risk AI) both require documented human oversight but specify different documentation requirements.** FINMA asks for named individuals with decision authority and incident response protocol. EU AI Act asks for human oversight measures to the extent exercisable by the deployer, with the oversight persons having the necessary competence, authority, and resources. The two regimes are compatible but not identical. The MD must produce documentation that satisfies both simultaneously. The reconciliation is the MD's responsibility.

---

## Regime 4 — Carrier Attestation (Professional Indemnity / Operational Risk Insurance)

### Applicability to the Geneva Boutique WM

The Geneva boutique WM carries professional indemnity insurance and/or operational risk insurance through a Swiss or EU carrier. The carrier attestation is the annual or mid-year form in which the firm attests to its AI governance posture. The attestation is the carrier's documentation of the insured's risk profile.

### Current Carrier Attestation Language on AI (2025–2026)

Carrier attestation forms in 2025–2026 now include specific AI governance questions:

- "Identify all AI systems used in the operation of the firm. Classify by use case and decision impact."
- "Describe the firm's AI governance framework. Include policy approval date, review cycle, and responsible individual."
- "Describe the firm's process for AI output verification. Include verification steps, sign-off, and documentation."
- "Describe the firm's AI vendor management. Include vendor due diligence, contract review, and sub-processor disclosure."
- "Describe the firm's AI training data audit. Include data source documentation, bias review, and contamination mitigation."
- "Describe the firm's AI incident response protocol. Include escalation, remediation, and reporting."

The MD signs the attestation personally. The signature attests to the truthfulness and completeness of the responses. The carrier relies on the attestation for risk pricing.

### Mid-Year Carrier Check-In

Carriers have introduced mid-year check-ins in 2026, asking specifically "what changed in your AI governance in the last 90 days." The mid-year check-in is calibrated to the FINMA supervisory cycle and the institutional client mid-year questionnaire cadence. The mid-year check-in is now structural in 70%+ of Geneva boutique WM carrier relationships.

### Carrier + EU AI Act Reconciliation Point

**The carrier attestation asks for AI governance documentation. The EU AI Act Article 14 requires human oversight documentation. The two are not aligned.** The carrier accepts the firm's own framework description; the EU AI Act requires documentation that satisfies Article 14 specificity. A firm that answers the carrier attestation with a generic "we have an AI governance framework" response has not satisfied Article 14. The MD must produce carrier attestation language that is consistent with EU AI Act Article 14 documentation, or risk carrier attestation inaccuracy (which is itself a carrier-grade issue) and Article 14 non-compliance (which is an EU AI Act enforcement issue).

---

## The Four-Regime Conflict Map

The following table identifies the named conflict points between the four regulatory regimes. Each conflict is the MD's responsibility to reconcile; no regime coordinates with the others.

| Conflict Point | Regime A | Regime B | Nature of Conflict | Reconciliation Required |
|---|---|---|---|---|
| Cross-border data routing | nFADP Art.9 (adequacy or safeguards) | EU AI Act Art.10 (data governance for training and input) | nFADP asks if data can cross; EU AI Act asks if data is relevant/representative. Different questions. | Single sub-processor audit memo satisfying both |
| Human oversight documentation | FINMA Circular 2026/03 §7.4 | EU AI Act Art.14 | FINMA asks for named accountable individuals + incident response; EU AI Act asks for competence, authority, resources + oversight measures exercisable by deployer. Different specificity levels. | Single oversight documentation system satisfying both |
| AI literacy requirement | EU AI Act Art.4 | Carrier attestation (training question) | EU AI Act specifies literacy appropriate to technical knowledge, experience, education, training, context; carrier attestation asks "do you train staff on AI risks?" — lower specificity. | Article 4-compliant literacy program attached to carrier attestation response |
| AI use disclosure to clients | EU AI Act Art.50 | nFADP (data subject rights) | EU AI Act requires disclosure of AI interaction to natural persons; nFADP requires data subject information about automated decision-making. Different triggers, overlapping scope. | Single transparency protocol satisfying both |
| Personal accountability | nFADP Art.63 (named responsible person) | EU AI Act Art.26 (deployer obligations) | nFADP names the responsible person at the data controller; EU AI Act names the deployer. For Geneva boutique WM, both are the MD. | Single named-MD accountability statement satisfying both |
| Vendor sub-processor disclosure | nFADP Art.9 (cross-border transfer disclosure) | EU AI Act Art.10 (data governance for high-risk) + FINMA Circular 2026/03 (AI system inventory) | nFADP asks about destination country adequacy; EU AI Act asks about training data sources; FINMA asks about AI system inventory. Different scopes. | Single sub-processor + AI system inventory satisfying all three |
| AI incident reporting | FINMA Circular 2026/03 (incident response protocol) | EU AI Act Art.26 (deployer obligation to report serious incidents to provider) | FINMA asks for FINMA-reportable incident protocol; EU AI Act asks for provider-reportable incident protocol. Different report recipients. | Single incident response protocol with named report recipients per regime |
| AI training data documentation | EU AI Act Art.10 (data governance for high-risk) | Carrier attestation (training data audit question) | EU AI Act asks for training, validation, testing dataset documentation; carrier asks for "training data audit." Different specificity. | Article 10-compliant data governance documentation attached to carrier attestation |

The conflict map identifies eight specific reconciliation points. Each is a named documentation deliverable the MD must produce. The eight reconciliation points are the operational content of the C314 P02 service.

---

## The C314 P02 Compliance Architecture — Six Named Modules

The six C314 P02 modules are designed to satisfy the four regulatory regimes simultaneously. Each module produces a named deliverable the MD can attach to the relevant regulatory filing, attestation, or questionnaire response.

### Module 1 — Article 3 Deployer Applicability Memo

**What it does:** Produces a firm-specific deployer applicability analysis. Identifies which of the boutique's mandates are in scope of EU AI Act Article 3 by virtue of EU-affected natural persons on the mandate. Classifies each in-scope AI use case by Article 6(3) high-risk analysis (narrow procedural task, improves previously completed human activity, detects decision-making patterns, preparatory task). Documents the analysis with named individuals, dated analysis, and supporting rationale.

**Satisfies:** EU AI Act Article 3 (deployer status identification), Article 6(3) (high-risk classification analysis), Article 26 (deployer obligations).

**Used in:** EU institutional client readiness questionnaire response, carrier attestation AI systems question, FINMA Circular 2026/03 §7.4 AI system inventory.

### Module 2 — Article 4 AI Literacy Program

**What it does:** Produces a documented AI literacy program tailored to the boutique's AI use cases. Specifies the curriculum (what associates need to know about AI systems they operate), the assessment methodology (how literacy is measured), the certification record (how compliance is demonstrated), and the refresh cycle. Names the individuals with literacy program oversight. Dated, signed by the MD.

**Satisfies:** EU AI Act Article 4 (sufficient level of AI literacy), carrier attestation AI training question, FINMA Circular 2026/03 §7.4 named individuals with accountability.

**Used in:** EU institutional client readiness questionnaire response, carrier attestation, FINMA supervisory documentation.

### Module 3 — Article 14 Human Oversight Documentation System

**What it does:** Produces a system-level human oversight documentation template for portfolio construction AI and other material AI use cases. Specifies: who reviews AI outputs, what review criteria are applied, when override is exercised, how override is recorded, how oversight measures are tested, how incidents are escalated. Names the individuals with human oversight responsibility. Dated, signed by the MD.

**Satisfies:** EU AI Act Article 14 (human oversight for high-risk AI), FINMA Circular 2026/03 §7.4 (human oversight documentation), carrier attestation AI output verification question.

**Used in:** EU institutional client readiness questionnaire response, FINMA supervisory documentation, carrier attestation.

### Module 4 — Article 50 Transparency Protocol

**What it does:** Produces a client-facing AI use disclosure protocol. Specifies: when AI use is disclosed to institutional clients, how it is disclosed (engagement letter language, annual disclosure statement, ad hoc disclosure), what the disclosure language is, how the disclosure is recorded in the engagement file, how the disclosure is updated when AI use changes. Names the individuals with transparency protocol oversight. Dated, signed by the MD.

**Satisfies:** EU AI Act Article 50 (transparency to natural persons), nFADP data subject information obligations, carrier attestation client communication questions.

**Used in:** EU institutional client engagement letter, annual disclosure, EU AI Act readiness questionnaire response.

### Module 5 — nFADP Art.63 Personal Liability Map

**What it does:** Produces a personal liability mapping document naming the MD as the responsible person under nFADP Art.63, the deployer under EU AI Act, the named accountable individual under FINMA Circular 2026/03 §7.4, and the named insured under carrier attestation. Cross-references each regime's specific obligations to the MD's role. Documents the personal accountability structure with named individuals, dated signatures, and supporting documentation.

**Satisfies:** nFADP Art.63 personal liability documentation, EU AI Act Art.26 deployer obligations, FINMA Circular 2026/03 §7.4 named individuals with accountability, carrier attestation personal accountability.

**Used in:** FDPIC filing, EU AI Act deployer disclosure, FINMA supervisory documentation, carrier attestation.

### Module 6 — Concurrent Jurisdiction Reconciliation Memo

**What it does:** Produces a single reconciliation memo mapping the four regulatory regimes' obligations to the boutique's specific practice. Identifies duplicative requirements (e.g., supervision records under both nFADP and EU AI Act), additive requirements (e.g., AI literacy + professional training), and conflicts (e.g., EU AI Act Art.50 disclosure + nFADP data subject confidentiality). Specifies precedence rules. Dated, signed by the MD.

**Satisfies:** All four regimes' cross-referencing obligations, MD's reconciliation responsibility, EU institutional client readiness questionnaire reconciliation questions.

**Used in:** EU institutional client readiness questionnaire response, FDPIC filing, FINMA supervisory documentation, carrier attestation, internal MD briefing.

---

## The 30-Day Compliance Timeline

| Day | Deliverable | Recipient |
|---|---|---|
| Day 1–3 | Engagement, MD briefing, current state review | MD + compliance officer |
| Day 4–7 | Article 3 deployer applicability analysis | MD sign-off |
| Day 8–12 | Article 4 AI literacy program design | MD + Head of Investments |
| Day 13–17 | Article 14 human oversight documentation | MD + portfolio managers |
| Day 18–21 | Article 50 transparency protocol | MD + client services |
| Day 22–25 | nFADP Art.63 personal liability map | MD sign-off |
| Day 26–28 | Concurrent jurisdiction reconciliation memo | MD sign-off |
| Day 29–30 | Final pack assembly, MD review, delivery | MD + EU institutional client |

The 30-day timeline assumes the MD provides current state information and decision-maker access on a within-24-hour response cycle. The timeline assumes no major scope changes after Day 3.

---

## Carrier-Specific Implications

The carrier's mid-year check-in and annual attestation both ask for AI governance documentation. The C314 P02 service produces documentation that satisfies the carrier's specific questions:

- "Identify all AI systems used" → Module 1 (deployer applicability memo) + Module 3 (human oversight documentation)
- "Describe AI governance framework" → Module 6 (concurrent jurisdiction reconciliation memo)
- "Describe AI output verification process" → Module 3 (human oversight documentation)
- "Describe AI vendor management" → Module 1 (vendor sub-processor disclosure) + Module 6
- "Describe AI training data audit" → Module 6 (cross-reference to Module 1)
- "Describe AI incident response protocol" → Module 3 (human oversight documentation — incident escalation section)

The C314 P02 service is the carrier attestation response template. The first mover publishes this template. The carrier broker references this template when asking boutique WMs for documentation. The boutique WM that produces this template is the carrier's preferred risk.

---

## FINMA-Specific Implications

FINMA supervisory reviews in 2026 are referencing Section 7.4 of Circular 2026/03. The C314 P02 service produces documentation that addresses each Section 7.4 requirement:

- **AI System Inventory** → Module 1 (deployer applicability memo — AI systems by mandate)
- **Deployer Accountability** → Module 5 (nFADP Art.63 personal liability map — named individuals)
- **Human Oversight Documentation** → Module 3
- **Incident Response Protocol** → Module 3 (incident escalation section) + Module 6 (incident reporting per regime)

A FINMA supervisory letter requesting Section 7.4 documentation can be answered with the C314 P02 service output. The boutique WM that already has the C314 P02 pack responds within days, not months.

---

## FDPIC-Specific Implications

The FDPIC filing for nFADP compliance identifies the responsible person at the data controller. Module 5 of the C314 P02 service produces the documentation linking the MD's name to the responsible person role with named AI tools, dated signatures, and cross-referenced obligations. The FDPIC can request this documentation under nFADP enforcement authority. The boutique WM that already has Module 5 responds immediately.

---

## EU Institutional Client Implications

The EU pension fund's EU AI Act readiness questionnaire asks specific questions about deployer status, AI literacy, human oversight, transparency, and accountability. The C314 P02 service produces documentation that answers each questionnaire question with named, dated, signed documentation. The boutique WM that already has the C314 P02 pack responds to the questionnaire in 14 days. The boutique WM without the pack responds in 30+ days with partial, generic, or backdated documentation.

---

## Compliance Context Summary

The Geneva boutique WM operates under four concurrent regulatory regimes that converge on the EU AI Act late August 2026 deadline. The regimes overlap, conflict in named articles, and are not coordinated by any supervisory authority. The MD is personally named in three of the four regimes. The C314 P02 service produces six named modules that satisfy all four regimes simultaneously, in 30 days, with MD-signed deliverables the boutique can attach to the EU institutional client questionnaire, the carrier attestation, the FDPIC filing, and the FINMA supervisory documentation.

The first Geneva boutique WM service to publish the C314 P02 six-module 30-day readiness pack owns the C314 P02 compliance architecture category. The compliance architecture becomes the benchmark. The second mover adapts the architecture. The third mover benchmarks against the architecture.

The architecture is publishable now. The regulatory framework is stable. The deadline is 30 days. The first mover's window is open.

---

*Document: 04_compliance_context.md | Phase C314 Geneva Finance | Output: /20260701_phase02_geneva_finance_cycle314/*