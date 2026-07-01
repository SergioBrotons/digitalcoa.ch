# Compliance Context: Geneva Consulting — C314 Phase 03

## Geneva / Switzerland Specific Regulatory Architecture for the EU AI Act 30-Day Window, Applied to the Consulting Vertical

---

## Overview

The Geneva boutique consulting firm (2-10 professionals) with EU corporate clients and sub-consultant engagement structures operates under four concurrent regulatory regimes that converge on the EU AI Act late August 2026 deadline. Each regime imposes obligations the senior partner must satisfy. The regimes overlap, conflict in specific named articles, and are not coordinated by any single supervisory authority. The senior partner is named personally in three of the four regimes (nFADP Art.63, EU AI Act Article 26, carrier attestation). The senior partner is the named deployer under the EU AI Act for AI used on client deliverables. The senior partner is the named responsible person under nFADP for the documented client conversation.

This document maps the four regimes as they apply specifically to the consulting vertical, identifies the named obligations, specifies the conflicts, and produces the C314 P03 compliance architecture for the 30-day window. The architecture is structurally similar to the C314 P02 (finance) compliance architecture in form, but the substance is distinct — the consulting senior partner's obligations attach to the named deliverable and the named sub-consultant, not to the named mandate and the named deployer at the firm level.

---

## Regime 1 — EU AI Act (Regulation 2024/1689) — Consulting Vertical Application

### Applicability to the Geneva Boutique Consulting Firm

The EU AI Act applies to the Geneva boutique consulting firm through Article 3 (deployer status). Article 3 defines a deployer as "a natural or legal person using an AI system under its authority in a professional capacity." For the consulting firm, "under its authority" applies in three distinct ways:

1. **Direct deployer status.** The senior partner uses AI tools (ChatGPT, Claude, Copilot, internal firm LLM wrappers) directly on client deliverables. The senior partner is the deployer for these tools.

2. **Sub-consultant deployer status by extension.** The senior partner engages sub-consultants on client engagements. The sub-consultants use AI tools on the client deliverable under the senior partner's authority (per the engagement letter). The senior partner is the deployer for the sub-consultant's AI use because the sub-consultant is "handling the operation and use of AI systems on [the senior partner's] behalf" per Article 4's language, which is mirrored in Article 26.

3. **Documented client conversation deployer status.** The senior partner conducts kickoff calls, steering committee meetings, and methodology reviews with EU clients. AI transcription tools (Otter, Fireflies, Read AI, Microsoft Teams Copilot) process the conversation. The senior partner is the deployer for the AI transcription tools because the senior partner authorized their use (or did not authorize but is accountable for them).

### Specific Obligations Triggered by Deployer Status (Consulting Vertical)

- **Article 4 — AI Literacy:** The deployer must take measures to ensure "a sufficient level of AI literacy" of its staff AND any other person handling AI systems on its behalf. For the consulting firm, "staff" includes the 2-10 professionals. "Any other person handling AI systems on its behalf" includes the sub-consultants. The literacy obligation extends to the entire sub-consultant engagement base, which can be 5-50 active sub-consultants at any time. The senior partner cannot personally train every sub-consultant. The delegation of literacy training re-creates the Article 4 gap in a new form.

- **Article 14 — Human Oversight:** The deployer of a high-risk AI system must implement human oversight measures. For the consulting firm, the high-risk classification depends on Article 6(3) analysis applied to specific consulting deliverables (regulatory mapping, market sizing, risk assessment, compliance review). The human oversight measures must specify: who reviews the AI-assisted deliverable, what review criteria are applied, when override is exercised, how override is recorded, how oversight is tested, how incidents are escalated.

- **Article 26 — Deployer Obligations:** Deployers of high-risk AI systems must use the system in accordance with the instructions for use, assign human oversight to natural persons with the necessary competence, ensure the input data is relevant and sufficiently representative, monitor the operation, and inform the provider of serious incidents. For the consulting firm, this includes:
  - **Sub-consultant AI use monitoring.** The senior partner must monitor the sub-consultant's AI use on the client deliverable. The monitoring must be documented. The senior partner cannot delegate the monitoring — the deployer obligations attach to the senior partner by name.
  - **Documented client conversation AI use.** The senior partner must inform the EU client that AI transcription, summarization, and analysis were used in the documented client conversation. Article 50's transparency obligation applies to the conversation as an interaction with AI.

- **Article 50 — Transparency:** Providers and deployers of certain AI systems must inform natural persons that they are interacting with an AI system, where the AI system is not obvious from the perspective of a reasonably well-informed natural person exercising due care. For the consulting firm, Article 50 applies in two distinct ways:
  1. **Deliverable disclosure.** The deliverable is the interaction with AI when AI is used to produce the deliverable. The natural persons in the interaction are the EU client's investment committee, C-suite, or project sponsor. The disclosure must be made in the deliverable cover page, the engagement letter, or the methodology documentation. Undisclosed AI use in the deliverable is a violation after August 2026.
  2. **Documented client conversation disclosure.** The kickoff call, steering committee meeting, or methodology review is an interaction with AI when AI transcription, summarization, or analysis is used. The natural persons in the interaction are the EU client's representatives. The disclosure must be made at the start of the conversation or in the meeting confirmation.

### Deadline

The EU AI Act provisions on AI literacy (Article 4) and general applicability become enforceable on **2 August 2026** (the two-year anniversary of the Regulation's entry into force, per Article 113(a)). The high-risk system provisions (Articles 9–15, 26) become applicable on **2 August 2026** for high-risk systems already on the market. The transparency provisions (Article 50) become applicable on **2 August 2026**. Some provisions have later dates, but the August 2026 deadline is the dominant operational lever.

### The Consulting-Specific Gap

The Geneva boutique consulting senior partner has not operationalized the EU AI Act. The senior partner has been focused on client delivery, sub-consultant management, engagement letter architecture, and carrier attestation cycles. The EU AI Act has been a "regulatory horizon" the senior partner keeps deferring. The deferral window closes on 2 August 2026.

The consulting-specific gap is more acute than the legal or finance gaps because:

1. **The senior partner is the deliverable.** The consulting senior partner's name is on the deliverable. The EU AI Act deployer status attaches to the named individual, not the firm. The senior partner cannot delegate the deployer obligations to operations or compliance.
2. **The sub-consultant is invisible.** The sub-consultant's AI use on the client deliverable is invisible to the senior partner. EU AI Act Article 26 deployer obligations apply to the sub-consultant's AI use because the sub-consultant is operating under the senior partner's authority.
3. **The documented client conversation is a new personal liability vector.** The AI transcription + summarization of client conversations is a new category of nFADP Art.63 personal exposure that did not exist before AI transcription tools became pervasive.
4. **The deliverable disclosure changes the commercial conversation.** Article 50's transparency obligation reframes AI as a deliverable attribute. The disclosure changes the value proposition for the client.

---

## Regime 2 — Swiss Federal Act on Data Protection (nFADP / DSG) — Consulting Vertical Application

### Applicability to the Geneva Boutique Consulting Firm

The nFADP (in force since 1 September 2023) applies to all data processing by private persons and federal bodies in Switzerland, with extraterritorial scope for processing that has effects in Switzerland. For the Geneva boutique consulting firm, nFADP applies directly because the firm processes personal data of Swiss and EU clients on Swiss territory. The firm is the data controller for client engagement data, sub-consultant engagement data, and documented client conversation data.

**Specific obligations relevant to AI governance in consulting:**

- **Article 4 — Lawfulness of Processing:** Personal data must be processed lawfully, in good faith, proportionately, and for a specific purpose. For AI-processed client methodology flowing through AI transcription, summarization, and analysis tools, the lawfulness requires either client consent or legitimate interest with documented proportionality assessment.

- **Article 6 — Data Subject Rights:** Data subjects have rights of access, rectification, deletion, and objection. For AI-processed client methodology, these rights must be operationally satisfiable. The senior partner must be able to produce all AI-processed versions of client data on request, including AI-generated summaries, AI-generated analyses, and AI-generated methodology drafts.

- **Article 9 — Cross-Border Data Transfer:** Cross-border disclosure of personal data is permitted only if the destination country ensures an adequate level of data protection, or with appropriate safeguards. For the consulting firm using AI transcription tools with US-based sub-processors, Article 9 requires either adequate country determination (US is not adequate under nFADP without enhanced safeguards) or standard contractual clauses with documented transfer impact assessment.

- **Article 12 — Data Security:** The data controller must implement appropriate technical and organizational measures to ensure data security. For AI-processed client methodology, this includes AI tool configuration (zero-retention mode, privacy-preserving mode), AI vendor selection criteria, and AI tool sub-processor disclosure.

- **Article 16 — Data Protection by Design and by Default:** The data controller must implement data protection by design and by default in the processing of personal data. For AI-processed client conversations, this requires AI transcription tools that do not retain audio by default and AI summarization tools that delete source documents after summarization.

- **Article 63 — Personal Liability:** The natural person responsible for data processing at the data controller is personally liable for breaches of the nFADP. For the Geneva boutique consulting firm, this is the senior partner or managing partner. Art.63 attaches to every documented client conversation that flowed through AI, every AI-processed deliverable, and every sub-consultant AI use on the client deliverable. The Art.63 personal liability is now visible because the EU AI Act deployer status forces the senior partner to personally attest to AI governance claims that cover AI-processed client conversations.

### Personal Liability Under nFADP Art.63 (Consulting Vertical Specificity)

Art.63 creates personal liability for the responsible person at the data controller. The FDPIC guidance issued in Q4 2025 clarified that Art.63 applies to the natural person who makes decisions about data processing purposes and means — the senior partner or managing partner for a 2-10 person Geneva boutique consulting firm.

The consulting-vertical-specific Art.63 exposure extends to:

1. **AI-processed deliverable content.** Every AI-assisted deliverable that contains personal data is processed under the senior partner's authority. Art.63 attaches to the named senior partner for each AI-assisted deliverable.

2. **AI-transcribed client conversations.** Every kickoff call, steering committee meeting, or methodology review that is transcribed by AI and contains personal data is processed under the senior partner's authority. Art.63 attaches to the named senior partner for each AI-transcribed conversation.

3. **AI-analyzed client methodology.** Every AI-assisted analysis of client methodology (market positioning, regulatory posture, operational details) is processed under the senior partner's authority. Art.63 attaches to the named senior partner for each AI-analyzed methodology artifact.

4. **Sub-consultant AI use on client deliverables.** Every sub-consultant AI use on the client deliverable is processed under the senior partner's authority (per the engagement letter). Art.63 attaches to the named senior partner for each sub-consultant AI use.

The Art.63 personal liability is now visible because the EU AI Act deployer status forces the senior partner to personally attest to AI governance claims across all four categories. The attestation links the senior partner's name to AI governance documentation that covers AI-processed deliverables, AI-transcribed conversations, AI-analyzed methodology, and sub-consultant AI use.

### nFADP + EU AI Act Reconciliation Point (Consulting Vertical)

**nFADP Article 9 (Cross-Border Data Transfer) and EU AI Act Article 10 (Data Governance) both govern the same AI-processed client methodology but from different regulatory lenses.** nFADP Art.9 asks whether the data can cross borders. EU AI Act Art.10 asks whether the training data and input data are relevant, sufficiently representative, and free of errors. The Geneva boutique consulting firm must satisfy both simultaneously. The reconciliation is not addressed by either regulation; it is the senior partner's responsibility to produce documentation showing both are satisfied.

The consulting-vertical-specific reconciliation challenge is that the senior partner must satisfy both regimes for the deliverable content, the documented client conversation, the AI-analyzed methodology, AND the sub-consultant AI use. The reconciliation documentation must be engagement-specific, sub-consultant-specific, and deliverable-specific. Generic reconciliation documentation does not satisfy the consulting senior partner's obligations.

---

## Regime 3 — EU AI Act Sub-Consultant AI Authorization (Article 26 Reading)

### Applicability to the Geneva Boutique Consulting Firm

EU AI Act Article 26 deployer obligations apply to the consulting firm's sub-consultant AI use. The Article 26 framework specifies that deployers must:

- Use the AI system in accordance with the instructions for use
- Assign human oversight to natural persons with the necessary competence
- Ensure the input data is relevant and sufficiently representative
- Monitor the operation for risks
- Inform the provider of serious incidents

For the consulting senior partner, Article 26 extends to:

1. **Sub-consultant AI tool selection.** The senior partner must ensure the sub-consultant's AI tools are used in accordance with instructions for use. The senior partner must have visibility into which AI tools the sub-consultant uses. The senior partner must have authorization records for the sub-consultant's AI tool selection.

2. **Sub-consultant human oversight assignment.** The senior partner must ensure human oversight is assigned to natural persons with the necessary competence for AI-assisted deliverables. The senior partner must have a record of who at the sub-consultant organization provides the human oversight.

3. **Sub-consultant input data relevance.** The senior partner must ensure the input data (client methodology) is relevant and sufficiently representative for the AI-assisted deliverable. The senior partner must document the input data scope.

4. **Sub-consultant operation monitoring.** The senior partner must monitor the sub-consultant's AI use on the client deliverable. The monitoring must be documented. The senior partner must have a record of sub-consultant AI use incidents.

5. **Sub-consultant incident reporting.** The senior partner must inform the AI provider of serious incidents involving the sub-consultant's AI use. The senior partner must have an incident reporting protocol that includes sub-consultant incidents.

### Deadline

Article 26 obligations become applicable on **2 August 2026**. The senior partner must have sub-consultant AI authorization chain documentation in place by that date to demonstrate Article 26 compliance.

### The Sub-Consultant Authorization Gap

The Geneva boutique consulting senior partner has not documented sub-consultant AI authorization. Sub-consultant engagement letters do not include AI-specific authorization language. Sub-consultant AI tool use is invisible to the senior partner. The senior partner signs the EU client's RFP response attesting to Article 26 deployer obligations covering the engagement, including sub-consultant workstreams. The attestation covers an undocumented chain.

The sub-consultant authorization gap is structurally permanent because sub-consultant engagements turn over monthly for some Geneva boutique consulting firms. The authorization chain documentation must be refreshed at the rate of sub-consultant engagement change, not at annual attestation cadence. The documentation system must be designed for this turnover rate.

---

## Regime 4 — Carrier Attestation (Professional Indemnity / Operational Risk Insurance) — Consulting Vertical Application

### Applicability to the Geneva Boutique Consulting Firm

The Geneva boutique consulting firm carries professional indemnity insurance through a Swiss or EU carrier. The carrier attestation is the annual form in which the firm attests to its AI governance posture. The attestation is the carrier's documentation of the insured's risk profile.

### Current Carrier Attestation Language on AI (2025–2026)

Carrier attestation forms in 2025-2026 now include specific AI governance questions for consulting firms:

- "Identify all AI systems used in the operation of the firm. Classify by use case and decision impact."
- "Describe the firm's AI governance framework for client deliverables. Include policy approval date, review cycle, and responsible individual."
- "Describe the firm's process for AI output verification on client deliverables. Include verification steps, sign-off, and documentation."
- "Describe the firm's AI vendor management. Include vendor due diligence, contract review, and sub-processor disclosure. Address AI transcription, AI summarization, and AI analysis tools separately."
- "Describe the firm's sub-consultant AI authorization process. Include engagement letter AI clauses, sub-consultant AI tool disclosure, and sub-consultant AI supervision architecture."
- "Describe the firm's documented client conversation AI handling. Include AI transcription consent language, AI summarization data flow, and AI analysis retention policy."
- "Describe the firm's client deliverable AI use disclosure. Include engagement letter disclosure, deliverable cover page disclosure, and methodology documentation."
- "Describe the firm's AI incident response protocol. Include escalation, remediation, and reporting. Address sub-consultant incidents separately."

### The Carrier Attestation Gap for Consulting Firms

The Geneva boutique consulting senior partner has been answering these questions with generic language. The carrier attestation cycle is annual. The EU client's RFP EU AI Act section is per-engagement. The carrier broker does not address the consulting-specific sub-consultant AI authorization chain. The carrier broker does not address the consulting-specific documented client conversation AI handling. The carrier broker does not address the consulting-specific Article 50 deliverable transparency language.

The carrier attestation gap is the consulting firm's annual disclosure exposure to professional liability under-insurance. If the carrier discovers, through a claim, that the firm has not disclosed sub-consultant AI use, documented client conversation AI handling, or Article 50 deliverable disclosure, the carrier may deny coverage. The senior partner's professional liability exposure is now visible in the carrier's claim file.

---

## Regime 5 (Adjacent) — FINMA Circular 2026/03 §7.4 Through Fintech Client Channel

### Applicability to the Geneva Boutique Consulting Firm

The Geneva boutique consulting firm is not FINMA-supervised. But the firm's fintech clients (FINMA-supervised banks, securities firms, fund managers, insurance groups, FinTech license holders) are subject to FINMA Circular 2026/03 §7.4. The §7.4 obligation now asks the fintech client about sub-advisor and sub-contractor AI governance. The consulting firm is the sub-advisor. The client's FINMA filing now references the consulting firm's AI governance.

### The FINMA-Adjacent Trigger

The consulting firm's fintech client receives a FINMA supervisory review request asking about §7.4 compliance. The client's compliance officer asks the consulting firm for AI governance documentation. The consulting firm produces the documentation. The documentation enters the client's FINMA filing package. The consulting firm's AI governance posture is now visible to FINMA indirectly.

If the consulting firm cannot produce AI governance documentation at §7.4 specificity, the client's FINMA filing is inadequate. The client's FINMA supervisory action reflects on the consulting firm. The consulting firm loses the fintech engagement. The consulting firm's fintech-adjacent revenue base erodes.

### The §7.4 Sub-Advisor Documentation Requirements

For the consulting firm to satisfy the fintech client's §7.4 sub-advisor documentation requirement, the firm must produce:

1. **AI system inventory.** Named AI systems used on the fintech client engagement, with materiality classification, deployment scope, and risk classification.

2. **Named deployer accountability.** Named individuals with accountability for AI use on the fintech client engagement, with role description and decision authority.

3. **Human oversight documentation.** Documented human oversight protocol for AI-assisted deliverables on the fintech client engagement, specifying who reviews the deliverables, what review criteria are applied, when override is exercised, how oversight is recorded.

4. **Incident response protocol.** Documented protocol for AI-related incidents on the fintech client engagement, including escalation, remediation, and reporting to the fintech client's compliance officer.

5. **Sub-consultant AI authorization.** Documentation of sub-consultant AI authorization chain for the fintech client engagement, including sub-consultant AI tool disclosure and supervision architecture.

### Deadline

The §7.4 documentation is required for the fintech client's FINMA filing. The filing cycle is annual. The 2026 filing cycle references the 2026 engagement year. The consulting firm's AI governance documentation must be in place by the 2026 filing cycle deadline.

### The FINMA-Adjacent Gap

The Geneva boutique consulting senior partner has not read FINMA Circular 2026/03. The senior partner is not FINMA-supervised. The senior partner does not address the fintech client's §7.4 sub-advisor documentation requirement. The senior partner signs the fintech client's engagement letter without §7.4 documentation. The §7.4 documentation gap is now visible in the fintech client's FINMA filing package. The senior partner's reputation is now visible to FINMA indirectly.

---

## Concurrent Jurisdiction Reconciliation — Consulting Vertical

The Geneva boutique consulting senior partner operates under five concurrent obligation regimes:

1. **EU AI Act** — Article 3 deployer status, Article 4 literacy (extending to sub-consultants), Article 14 oversight, Article 26 deployer obligations (extending to sub-consultant AI use), Article 50 transparency (deliverable + documented client conversation)
2. **nFADP** — Article 63 personal liability, Article 9 cross-border data transfer, Article 12 data security, Article 16 data protection by design and by default
3. **Carrier attestation** — annual + mid-year AI governance questions, sub-consultant AI authorization, documented client conversation AI handling, Article 50 deliverable disclosure
4. **Client contractual confidentiality** — engagement letter AI clauses, methodology confidentiality, deliverable confidentiality
5. **FINMA-adjacent** (through fintech client channel) — Circular 2026/03 §7.4 sub-advisor documentation

The five regimes do not coordinate. Each imposes obligations the consulting senior partner must satisfy. The obligations overlap, conflict, and are not addressed by any integrated reconciliation service.

### Specific Reconciliation Points

**Reconciliation Point 1: Article 50 (EU AI Act) vs. Client Confidentiality (Contractual)**

Article 50 requires informing natural persons they are interacting with AI. Client confidentiality requires not disclosing client methodology. The reconciliation is that Article 50 disclosure is about AI use, not about client methodology. The disclosure can be made without disclosing the methodology. But the disclosure must be specific enough to satisfy Article 50's "reasonably well-informed natural person exercising due care" standard. Generic AI use disclosure ("we use AI tools") does not satisfy Article 50. Specific disclosure ("we use ChatGPT to draft market sizing analyses with named human review at specific checkpoints") does.

**Reconciliation Point 2: Article 4 (EU AI Act) vs. Sub-Consultant Engagement (Contractual)**

Article 4 requires AI literacy for staff AND any person handling AI on the firm's behalf. Sub-consultant engagement letters typically do not include AI literacy requirements. The reconciliation is that the senior partner must extend the Article 4 literacy requirement to sub-consultants through engagement letter addenda. The addenda must specify: what AI literacy is required, how literacy is verified, what happens if the sub-consultant's staff fail the literacy requirement. The addenda must be signed by the sub-consultant.

**Reconciliation Point 3: Article 26 (EU AI Act) vs. nFADP Art.63 (Personal Liability)**

Article 26 deployer obligations include monitoring AI use. nFADP Art.63 personal liability attaches to the senior partner for data processing. The reconciliation is that the senior partner's monitoring of AI use (per Article 26) is the operational mechanism by which the senior partner discharges Art.63 personal liability. Documented monitoring is the defense against Art.63 enforcement. Undocumented monitoring is the exposure.

**Reconciliation Point 4: Carrier Attestation vs. EU AI Act**

The carrier attestation asks for AI oversight documentation. The EU AI Act asks for Article 14 oversight documentation. The reconciliation is that Article 14 documentation satisfies the carrier attestation question if it is dated, named, scoped to specific AI tools and specific engagements. Generic AI oversight documentation does not satisfy either.

**Reconciliation Point 5: FINMA-Adjacent (Through Fintech Client) vs. EU AI Act**

The fintech client's §7.4 documentation requirement mirrors Article 14 + Article 26 obligations. The reconciliation is that the consulting firm's Article 14 + Article 26 documentation satisfies the §7.4 documentation requirement if it is named, dated, scoped to the fintech client engagement, and referenced in the engagement letter.

### The Concurrent Jurisdiction Reconciliation Memo

The consulting senior partner must produce a reconciliation memo that addresses all five reconciliation points above. The memo is engagement-specific, deliverable-specific, and sub-consultant-specific. The memo is dated, senior-partner-signed, and attached to the EU client's RFP response, the carrier attestation, the nFADP ROPA, the engagement letter, and the fintech client's FINMA filing package.

The memo is the single document the senior partner can attach to any regulatory filing or client engagement to establish consistent AI governance accountability across all five regimes. The first consulting senior partner to publish this reconciliation memo owns the concurrent jurisdiction reconciliation category for the consulting vertical.

---

## C314 P03 Compliance Architecture — The 30-Day Window

The Geneva boutique consulting senior partner has 30 days before EU AI Act deployer obligations, AI literacy requirements, sub-consultant AI authorization obligations, human oversight documentation requirements, and client transparency obligations become applicable.

The senior partner needs:

1. **Article 3 deployer applicability memo** — engagement-specific, deliverable-named, senior-partner-signed
2. **Sub-consultant AI authorization chain documentation system** — engagement letter addendum template, sub-consultant AI tool disclosure form, per-engagement authorization record, sub-consultant supervision architecture, sub-consultant disengagement documentation
3. **Documented client conversation protocol** — AI transcription + summarization consent language, sub-processor chain disclosure, nFADP Art.63 framing, AI tool configuration requirements
4. **Article 50 deliverable transparency language** — engagement letter addendum, deliverable cover page, methodology disclosure, reproducibility disclosure
5. **FINMA-adjacent AI governance pack** — for the fintech client channel through FINMA Circular 2026/03 §7.4
6. **Concurrent jurisdiction reconciliation memo** — engagement-specific, addressing all five reconciliation points

These six modules are the C314 P03 compliance architecture for the consulting vertical. They are the C312 + C313 + C314 P03 service, applied to the consulting senior partner's named deliverable and named sub-consultant obligations under the EU AI Act 30-day window. Eighteen modules total. One evidence architecture. 30-day delivery.

---

*Document: 04_compliance_context.md | Phase C314 Geneva Consulting | Output: /20260701_phase03_geneva_consulting_cycle314/*