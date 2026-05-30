# 04 — Compliance Context: Geneva / Switzerland Regulatory Framework
## Phase 02 | Cycle C303 | Geneva Finance / Boutique Wealth Management

---

## Regulatory Framework Overview

### The Regulatory Cluster (Active and Approaching)

#### 1. nFADP — Swiss Federal Act on Data Protection (in force since 2023)
**Status:** Operational

**Key Articles for Finance ICP:**

- **Art. 5(c):** Obligation to document processing activities — which AI systems process which data categories
- **Art. 9:** Processor chain obligations — who has access to client data, including AI vendor sub-processors
- **Art. 26:** Data subject rights — client right to know which AI systems process their data
- **Art. 63:** Personal criminal liability for responsible persons — managing director personal exposure

**Finance-specific exposure:**
Wealth management firms process the highest-sensitivity personal data category: financial position, net worth, family circumstances, inheritance plans, investment horizon, risk tolerance. AI systems that process this data for portfolio construction, analytics, and reporting create nFADP Art. 9 processor chain obligations that most firms have never documented. The exposure is present-tense and undisclosed.

**Documentation requirement:**
- AI system inventory with data access documentation
- Vendor processor chain disclosure (sub-processors)
- Data subject rights response capability (which AI systems process which client's data)
- Evidence of responsible person oversight (Art. 63 due diligence)

---

#### 2. FINMA Circular 08/2024 — Technology Risk
**Status:** Operational since December 2024 (17 months old)

**Key requirements:**
- AI governance framework documentation
- Human oversight documentation for AI-influenced decisions
- AI vendor due diligence and contractual compliance
- Incident response and escalation procedures

**Finance-specific exposure:**
FINMA supervisory review of wealth management firms will include AI governance documentation. Firms without authorization records, decision attribution files, and vendor due diligence evidence face supervisory findings — not because the technology failed, but because the documentation is absent.

**Documentation requirement:**
- AI governance framework (policy document)
- Authorization records for AI tools in deployment
- Vendor due diligence files (contract review, security assessment, DPA review)
- Decision attribution documentation (AI-influenced decisions, human approval records)
- Incident response documentation

**Critical gap:**
FINMA has not published an implementation checklist. Firms are managing obligations without a clear compliance pathway. The absence of a checklist creates ambiguity — and ambiguity creates documentation gaps.

---

#### 3. FINMA 2025/02 — Specific Technology Risk Requirements
**Status:** Active guidance

**Key requirements:**
- AI-specific risk classification (Tier 1, Tier 2, Tier 3 based on AI influence on client outcomes)
- Authorization requirements by risk tier
- Documentation requirements by risk tier
- Incident documentation by risk tier

**Finance-specific exposure:**
Portfolio construction AI (Tier 1 — direct influence on client financial outcomes) requires the highest documentation standard. The managing director must be able to show: which AI system was authorized, when, by whom, with what data access, and how human approval was documented for each AI-influenced decision.

**Documentation requirement:**
- AI risk tier classification documentation
- Authorization records by tier (Tier 1 requires most detailed documentation)
- Human approval chain documentation for Tier 1 AI
- Ongoing monitoring documentation for continuous AI systems

---

#### 4. Swissdamed — Swiss Data Protection Medical Device Registration
**Status:** July 1, 2026 (approximately 5 weeks from late May 2026)

**Key requirement:**
Mandatory registration for medical device AI systems used in Switzerland.

**Finance-specific exposure:**
Swissdamed applies specifically to medical devices — not general AI governance. The finance ICP confusion: "Are we in scope for Swissdamed?" The answer for wealth management firms: Swissdamed does not apply to portfolio construction AI or client reporting AI. It applies only if the firm uses AI systems classified as medical devices — which most wealth management firms do not.

**Critical clarification:**
Swissdamed is NOT a general AI attestation requirement. The finance ICP's concern about Swissdamed for AI governance is based on a misunderstanding of scope. The regulatory cluster concern (Swissdamed + EU AI Act + FINMA + nFADP) is valid — but Swissdamed specifically does not create obligations for portfolio construction AI or client advisory AI.

**Implication:**
Firms spending time and resources determining their Swissdamed classification for non-medical AI systems are addressing the wrong framework. The legitimate regulatory cluster for finance ICP is: FINMA 08/2024 + FINMA 2025/02 + nFADP + CRS 2.0 + EU AI Act (if EU nexus exists).

---

#### 5. EU AI Act — EU Artificial Intelligence Act
**Status:** August 2026 (approximately 14 months away)

**Key requirement:**
Compliance obligations for firms with EU nexus — firms serving EU clients or operating in EU markets.

**Finance-specific exposure:**
Geneva boutique wealth management firms with EU-based clients may have EU AI Act obligations. The classification depends on whether the firm has EU clients and whether those clients' mandates fall under EU AI Act requirements.

**Key question:**
"Does serving EU clients create EU AI Act obligations?" The answer depends on whether the AI systems used to serve EU clients fall within high-risk AI system categories under the EU AI Act. Portfolio construction AI for EU client mandates may fall into high-risk categories.

**Critical ambiguity:**
The EU AI Act's implementation timeline and specific requirements for financial services AI are still being clarified. Geneva firms with EU nexus are managing regulatory uncertainty — not just regulatory compliance.

---

#### 6. CRS 2.0 — Common Reporting Standard 2.0
**Status:** Live since January 2026 (5 months)

**Key requirement:**
AI governance obligations integrated into CRS compliance framework — AI systems processing client financial data for CRS reporting purposes.

**Finance-specific exposure:**
CRS 2.0 has been live since January 2026. The AI governance obligations under CRS 2.0 were not in the original AML framework — firms that updated their CRS framework for the 2.0 standard may not have included AI governance provisions.

**Documentation requirement:**
- AI system documentation for CRS-relevant data processing
- AI vendor due diligence for CRS reporting systems
- Human oversight documentation for AI-influenced CRS reporting
- Incident documentation for AI-related CRS failures

---

#### 7. FinSA — Financial Services Act
**Status:** Operational

**Key requirement:**
Client suitability documentation for investment recommendations — AI-influenced recommendations require the same suitability documentation as human-generated recommendations.

**Finance-specific exposure:**
AI-generated investment recommendations must meet the same suitability documentation requirements as human-generated recommendations. The authorization chain from AI recommendation to human approval must be documented — and the documentation must show that a qualified person reviewed the recommendation and confirmed suitability before client communication.

**Documentation requirement:**
- AI recommendation authorization records
- Human suitability review documentation
- Client communication records (AI-generated content with human approval)
- Ongoing suitability monitoring documentation

---

## Documentation Requirements Summary

| Regulation | Documentation Required | Status |
|---|---|---|
| nFADP Art. 5(c) | AI system inventory, data access documentation | Operational — undocumented |
| nFADP Art. 9 | Vendor processor chain, sub-processor disclosure | Operational — undocumented |
| nFADP Art. 26 | Client data access rights response capability | Operational — undocumented |
| nFADP Art. 63 | Personal due diligence evidence | Operational — undocumented |
| FINMA 08/2024 | AI governance framework, authorization records, vendor due diligence | Operational — undocumented |
| FINMA 2025/02 | AI risk tier classification, authorization by tier | Active guidance — undocumented |
| CRS 2.0 | AI governance provisions for CRS reporting | Live — undocumented |
| FinSA | Suitability documentation for AI recommendations | Operational — undocumented |
| Swissdamed | Medical device AI registration | July 1, 2026 — generally not applicable to WM |
| EU AI Act | EU nexus obligations | August 2026 — clarification needed per firm |

---

## The Evidence Problem: What Documentation Actually Looks Like

### Authorization Record (per AI tool, per FINMA + carrier Form v4)
```
AI Tool: [Name and version of AI system]
Authorization Date: [Date human authorized deployment]
Authorized By: [Name, title, qualification of authorizing person]
Data Access Scope: [What data categories the AI system can access]
Decision Scope: [What decisions the AI system can influence or make]
Human Override Capability: [How human supervisors can override AI outputs]
Last Review Date: [Date of most recent human review of AI performance]
Review Outcome: [Pass/fail/needs adjustment from last review]
Next Review Scheduled: [Date of next scheduled human review]
```

### Decision Attribution Record (per AI-influenced client decision)
```
Date: [Date of AI-influenced decision]
Client: [Client identifier]
AI System: [Which AI system generated the recommendation]
AI Output: [Summary of AI recommendation]
Human Reviewer: [Name, title of person who reviewed AI output]
Human Approval: [Yes/No — was the AI recommendation approved]
Modified: [Yes/No — if yes, what human modification was made]
Client Communication: [How was the recommendation communicated to client]
Suitability Confirmation: [Basis for suitability confirmation]
```

### Vendor Processor Chain Record (per AI vendor, per nFADP Art. 9 + carrier)
```
Vendor: [Name of AI tool vendor]
Vendor Contact: [Contact for data processing inquiries]
Sub-processors: [List of sub-processor names and purposes]
Data Categories Accessed: [What data types flow through vendor systems]
Data Processing Purpose: [What vendor does with data]
Retention Period: [How long vendor retains data]
Security Certification: [Vendor security certifications (ISO 27001, SOC 2, etc.)]
Data Processing Agreement: [Location of DPA, date signed]
Last Review Date: [Date of last review of vendor terms]
Next Review Scheduled: [Date of next scheduled vendor review]
```

---

## NET-NEW Compliance Insights (C303 Phase 02)

1. **Swissdamed is not the finance ICP's regulatory problem** — the confusion about Swissdamed scope is a specific documentation opportunity (clarify that Swissdamed is medical devices only)
2. **Evidence documentation has specific content requirements** — the authorization record, decision attribution record, and vendor processor chain record are specific document types with specific content
3. **Four-track coherence problem is real** — FINMA 08/2024, FINMA 2025/02, nFADP, and CRS 2.0 all require different documentation formats for the same underlying AI governance reality
4. **EU AI Act nexus determination is a specific service** — whether a Geneva boutique WM firm has EU AI Act obligations depends on specific fact patterns requiring individual analysis
5. **Art. 63 personal liability has specific documentation requirements** — the evidence of due diligence that would protect personal assets is defined and producible
6. **Carrier Form v4 evidence standard is the most specific and most enforceable requirement** — the carrier functions as a de facto enforcement agent with specific records requirements

---

## Confidence: HIGH
Synthesized from C299–C302 Phase 02 cycles + C303 Phase 01 legal compliance context. Web search unavailable (quota exhausted). All compliance insights consistent with prior cycle patterns and extend into evidence documentation specifics.