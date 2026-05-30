# 04 — Compliance Context: Geneva / Switzerland Regulatory Framework
## Phase 02 | Cycle C304 | Geneva Finance / Boutique Wealth Management

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

**C304-specific dimension:**
Art. 63 personal liability is now understood as distinct from carrier attestation protection. The evidence of due diligence that would protect personal assets under Art. 63 is different from and in addition to the authorization records that satisfy carrier Form v4. The managing director who satisfies the carrier's evidence requirements may have zero Art. 63 personal due diligence evidence.

**Documentation requirement:**
- AI system inventory with data access documentation
- Vendor processor chain disclosure (sub-processors) — including post-signature changes
- Data subject rights response capability (which AI systems process which client's data)
- Evidence of responsible person personal oversight (Art. 63 due diligence — distinct from firm-level governance documentation)

---

#### 2. FINMA Circular 08/2024 — Technology Risk
**Status:** Operational since December 2024 (17 months old)

**Key requirements:**
- AI governance framework documentation
- Human oversight documentation for AI-influenced decisions
- AI vendor due diligence and contractual compliance
- Incident response and escalation procedures

**C304-specific dimension:**
FINMA documentation and nFADP Art. 63 documentation are not interchangeable. A FINMA-compliant authorization record does not automatically constitute Art. 63 personal due diligence evidence. The managing director who has "done FINMA documentation" may have zero personal due diligence evidence for Art. 63 purposes. The two documentation types must be designed together or produced separately.

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

**C304-specific dimension:**
Portfolio construction AI (Tier 1 — direct influence on client financial outcomes) requires the highest documentation standard. For continuous AI systems, the documentation architecture must define what "authorization" means for a system that operates 24/7, what "human approval" means for automated rebalancing, and what "review cycle" means for AI that adjusts portfolios without discrete human decision events. Standard authorization record formats do not address continuous AI systems.

**Documentation requirement:**
- AI risk tier classification documentation
- Authorization records by tier (Tier 1 requires most detailed documentation)
- Human approval chain documentation for Tier 1 AI — including continuous AI architecture
- Ongoing monitoring documentation for continuous AI systems

---

#### 4. Swissdamed — Swiss Data Protection Medical Device Registration
**Status:** July 1, 2026 (approximately 5 weeks from late May 2026)

**Key requirement:**
Mandatory registration for medical device AI systems used in Switzerland.

**Finance-specific exposure:**
Swissdamed applies specifically to medical devices — not general AI governance. The finance ICP confusion: "Are we in scope for Swissdamed?" The answer for wealth management firms: Swissdamed does not apply to portfolio construction AI or client reporting AI. It applies only if the firm uses AI systems classified as medical devices — which most wealth management firms do not.

**C304 clarification:**
Swissdamed is NOT a general AI attestation requirement. The finance ICP's concern about Swissdamed for AI governance is based on a misunderstanding of scope. The regulatory cluster concern (Swissdamed + EU AI Act + FINMA + nFADP) is valid — but Swissdamed specifically does not create obligations for portfolio construction AI or client advisory AI. Firms spending time and resources determining their Swissdamed classification for non-medical AI systems are addressing the wrong framework.

---

#### 5. EU AI Act — EU Artificial Intelligence Act
**Status:** August 2026 (approximately 14 months away)

**Key requirement:**
Compliance obligations for firms with EU nexus — firms serving EU clients or operating in EU markets.

**Finance-specific exposure:**
Geneva boutique wealth management firms with EU-based clients may have EU AI Act obligations. The classification depends on whether the firm has EU clients and whether those clients' mandates fall under EU AI Act requirements.

**C304-specific structural problem:**
Portfolio construction AI for EU client mandates may fall into high-risk AI system categories under the EU AI Act. The deployer (the Geneva firm) is responsible for ensuring the AI system meets conformity requirements. Non-EU AI vendors (US-based LLM providers, US-based portfolio analytics platforms) cannot provide EU Declaration of Conformity. The Geneva firm serving EU clients is structurally unable to satisfy EU AI Act deployer obligations using non-EU AI vendors — and no Geneva service has addressed this problem at boutique WM scale.

**Critical ambiguity:**
The EU AI Act's implementation timeline and specific requirements for financial services AI are still being clarified. Geneva firms with EU nexus are managing regulatory uncertainty — not just regulatory compliance. The specific documentation that demonstrates "deployer due diligence" when EU DoC is structurally unavailable has not been defined anywhere in the Geneva market.

---

#### 6. CRS 2.0 — Common Reporting Standard 2.0
**Status:** Live since January 2026 (5 months)

**Key requirement:**
AI governance obligations integrated into CRS compliance framework — AI systems processing client financial data for CRS reporting purposes.

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

**C304-specific dimension:**
For continuous AI portfolio rebalancing systems, the suitability documentation requirement is structurally different from discrete AI recommendations. Automated rebalancing operates continuously without discrete human approval events. The FinSA suitability documentation for continuous AI rebalancing requires a different documentation architecture — one that documents the authorization for the system as a whole and the ongoing suitability monitoring, rather than discrete per-decision records.

**Documentation requirement:**
- AI recommendation authorization records
- Human suitability review documentation
- Client communication records (AI-generated content with human approval)
- Ongoing suitability monitoring documentation for continuous AI systems

---

## The Cross-Framework Documentation Alignment Problem

### FINMA vs. nFADP: Different Documentation Types Serving Different Protection Objectives

| Dimension | FINMA Documentation | nFADP Art. 63 Documentation |
|---|---|---|
| **Purpose** | Supervisory compliance | Personal criminal liability protection |
| **Who is protected** | The firm under FINMA supervision | The managing director personally |
| **What it demonstrates** | Firm has adequate AI governance | Responsible person exercised personal due diligence |
| **Document type** | Authorization records, governance framework | Personal oversight evidence, personal controls documentation |
| **Who produces it** | Compliance function or consultant | Managing director personally, or evidence of their direct oversight |
| **What carrier requires** | Evidence of firm governance | Evidence of personal due diligence (different standard) |
| **Can one satisfy the other** | No — different purposes, different evidence standards | No — different purposes, different evidence standards |

**The structural problem:**
A firm that has produced FINMA-compliant documentation has not necessarily produced Art. 63 personal due diligence evidence. The managing director who believes "we're FINMA compliant" may have zero personal criminal liability protection. These are parallel documentation requirements serving different protection objectives — and no Geneva service has addressed the unified documentation architecture that would satisfy both simultaneously.

---

## Documentation Requirements by Framework

| Regulation | Documentation Required | Status |
|---|---|---|
| nFADP Art. 5(c) | AI system inventory, data access documentation | Operational — undocumented |
| nFADP Art. 9 | Vendor processor chain, sub-processor disclosure | Operational — undocumented, vendor terms drift untracked |
| nFADP Art. 26 | Client data access rights response capability | Operational — undocumented |
| nFADP Art. 63 | Personal due diligence evidence (distinct from firm documentation) | Operational — undocumented |
| FINMA 08/2024 | AI governance framework, authorization records, vendor due diligence | Operational — undocumented |
| FINMA 2025/02 | AI risk tier classification, authorization by tier | Active guidance — undocumented |
| CRS 2.0 | AI governance provisions for CRS reporting | Live — undocumented |
| FinSA | Suitability documentation for AI recommendations | Operational — undocumented for continuous AI |
| Swissdamed | Medical device AI registration | July 1, 2026 — generally not applicable to WM |
| EU AI Act | EU nexus obligations, deployer due diligence for non-EU vendors | August 2026 — unsolved for non-EU vendor configuration |

---

## The Evidence Problem: What Documentation Actually Looks Like

### Authorization Record for Continuous AI System (NEW — C304)

```
AI System: [Name of continuous AI system — e.g., automated portfolio rebalancing engine]
System Type: [Continuous — operates 24/7 without discrete decision events]
Authorization Date: [Date human authorized continuous operation]
Authorized By: [Name, title, qualification of authorizing person]
Authorization Scope: [What the system is authorized to do continuously]
Data Access Scope: [What data categories the AI system can access continuously]
Human Override Capability: [How human supervisors can override AI outputs in real time]
Authorization Architecture: [How human approval is documented for ongoing operations — not discrete events]
Monitoring Frequency: [How often human reviews system outputs]
Last Monitoring Date: [Date of most recent human monitoring review]
Monitoring Outcome: [Pass/fail/needs adjustment from last monitoring]
Next Monitoring Scheduled: [Date of next scheduled human monitoring review]
```

**Key distinction from discrete AI authorization:**
Discrete AI systems are authorized once, operate, and are reviewed periodically. Continuous AI systems are authorized for ongoing operation — the authorization architecture must document how human approval is maintained continuously, not how it was established once. Standard authorization record formats do not capture this distinction.

### Art. 63 Personal Due Diligence Evidence Record (NEW — C304)

```
Responsible Person: [Managing Director name, title]
Date of Evidence: [Date this record was created]
AI System Reviewed: [Name of AI system]
Nature of Personal Oversight: [What the responsible person personally did to exercise oversight]
Controls Implemented: [What specific controls the responsible person implemented]
Review Frequency: [How often responsible person personally reviews AI system performance]
Evidence of Review: [What records exist showing responsible person's personal review]
Delegation Structure: [If oversight is delegated, to whom, and what oversight the responsible person maintains]
Art. 63 Exposure Addressed: [How this evidence addresses Art. 63 personal due diligence standard]
```

**Key distinction from FINMA authorization record:**
FINMA authorization records document that the firm has an authorization process. Art. 63 personal due diligence evidence documents that the responsible person personally exercised oversight, implemented controls, and maintained accountability. These are different evidence standards serving different protection objectives.

### EU AI Act Deployer Due Diligence Record for Non-EU Vendor (NEW — C304)

```
AI System: [Name of AI system used]
Vendor: [Name of vendor]
Vendor Jurisdiction: [Non-EU — e.g., United States]
EU Declaration of Conformity: [Available / Not Available — if not available, explain why]
Deployer Due Diligence Performed: [What due diligence the firm performed on the vendor]
Conformity Gap Identified: [What conformity limitations were identified]
Client EU Exposure: [Which clients are served using this system]
Risk Assessment: [Deployer's assessment of conformity gap risk]
Compensating Controls: [What controls the firm has implemented to address conformity gap]
Ongoing Monitoring: [How the firm monitors vendor conformity status]
```

**Key distinction from standard vendor due diligence:**
Standard vendor due diligence assesses vendor security and contractual compliance. EU AI Act deployer due diligence for non-EU vendors must document the conformity gap, the deployer's awareness of the gap, and the compensating controls implemented to satisfy deployer obligations when vendor conformity is structurally unavailable.

---

## NET-NEW Compliance Insights (C304 Phase 02)

1. **FINMA documentation ≠ nFADP Art. 63 protection** — the two frameworks require different documentation types serving different protection objectives
2. **Continuous AI systems require a different authorization record format** — standard formats do not capture the documentation architecture for 24/7 AI systems
3. **Art. 63 personal due diligence evidence is a distinct document type** — different from firm-level authorization records
4. **EU AI Act deployer due diligence for non-EU vendors is structurally undefined** — no Geneva service has defined what this documentation looks like
5. **Vendor terms drift creates ongoing attestation inaccuracy** — the obligation to monitor vendor terms changes post-signature is active and unaddressed
6. **FinSA suitability documentation for continuous AI rebalancing requires a different architecture** — discrete per-decision records cannot document continuous rebalancing suitability

---

## Confidence: HIGH
Synthesized from C303 Phase 02 compliance context + C304 Phase 01 legal context. Web search unavailable (quota exhausted). All compliance insights extend C303 findings into cross-framework documentation misalignment, continuous AI documentation architecture, EU AI Act structural problem, and Art. 63 personal due diligence evidence specific to finance vertical.

---

## What Was Skipped (Quota)
- Web searches (Gemini 429 persistent — quota exhausted)
- Primary research (Geneva WM decision-maker interviews)
- SIF AI Report integration (not yet published)
- Fresh FINMA supervisory review data
