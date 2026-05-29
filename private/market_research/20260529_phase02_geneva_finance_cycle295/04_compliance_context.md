# 04_compliance_context.md — Phase 02 C295
# Geneva Finance ICP: Boutique Wealth Management (50–200 employees)

## Geneva/Switzerland Specific Regulatory Context

---

## FINMA Supervisory Framework

### FINMA Guidance 08/2024: Governance and Risk Management when using AI

**Status:** Published December 18, 2024. Operative now.

**Key content:** Seven-dimension framework requiring supervised institutions to address:
1. Governance — clear responsibilities, integrated into existing governance structures
2. Inventory — centralized register of all AI applications with risk classification
3. Data quality — ensuring data used in AI systems meets quality standards
4. Testing — robust testing and continuous monitoring of AI systems
5. Documentation — adequate documentation enabling transparency and accountability
6. Explainability — AI outputs explainable to foster transparency and trust
7. Independent review — periodic independent validation of AI systems and risk management

**Application to boutique WM:** Principles apply to all Swiss financial institutions supervised by FINMA. No separate small-institution proportionality framework published. Boutique WM (50–200 employees) subject to same seven-dimension framework as large banks, without proportionate methodology for implementation.

**What FINMA expects:** Proportionate implementation based on materiality and risk — but proportionality definition and operationalization left to institutions. No FINMA-calibrated small-institution playbook. MD responsible for determining what proportionate implementation means for their specific setup.

**Supervisory context:** FINMA conducted survey of ~400 Swiss financial institutions late 2024/early 2025 on AI adoption. Survey results informing supervisory priorities. FINMA AI Desk monitoring cross-sector AI regulations. Supervisory exchanges and on-site inspections ongoing for institutions heavily utilizing AI.

### FINMA Guidance 02/2026: Digital Fraud Risks

**Status:** Published 2026. AI-enabled automation and deepfake technologies increasing fraud exposure.

**Relevance to boutique WM:** AI governance intersects with fraud governance — AI tools used in portfolio management may be vectors for fraud or unauthorized access. FINMA expects institutions to strengthen governance, operational risk management, and controls in digital channels.

---

## SRO Framework

### SRO Silence as Structural Condition

**Status:** Asset management SROs (OARG, AVK, and sector-specific organizations) have not published Geneva-calibrated AI governance guidance proportionate to boutique WM scale. SRO guidance vacuum confirmed as structural condition, not temporary delay.

**What this means for boutique WM:** No SRO-provided safe harbor for AI governance decisions. Carrier questionnaires and institutional client DDQs become de facto operative standards in absence of SRO guidance. Boutique making AI governance decisions without SRO-calibrated benchmark.

**Implication:** SRO vacuum hands standard-setting to carriers and institutional clients — neither of whom are Geneva boutique WM advocates. Absence of SRO guidance is not neutral — it is structural accountability displacement.

---

## nFADP (Swiss Federal Act on Data Protection)

### nFADP Application to AI-Assisted WM

**Status:** nFADP fully operative since 2023. FDPIC has confirmed existing nFADP applies directly to AI processing — no regulatory gap requiring new legislation.

**Key articles for boutique WM AI use:**

**Art.6 — Lawful basis:** AI processing of client data requires identified lawful basis. Legitimate interest (Art.6(1)(c)) commonly relied upon but requires balancing test. AI inference about client financial behavior may exceed original purpose limitation — lawful basis for secondary use undocumented.

**Art.8 — Profiling notification:** AI-assisted portfolio construction constitutes profiling under Art.8. Data subjects (clients) have right to notification and human review when profiling produces legal effects or significantly affects them. AI-generated risk tolerance inferences, spending pattern analysis, and life stage projections used in recommendations clearly meet this threshold. Boutique WM not issuing profiling notifications as category.

**Art.13 — Data accuracy:** AI-inferred content about specific clients embedded in client-facing reports must be accurate. Inaccurate AI inference activating correction/erasure obligation when client relies on it. Different question from model performance accuracy — Art.13 applies to inferred content independently of model function.

**Art.15/16 — Access and correction rights:** Client right to access AI-processed data and request correction of inaccurate inferences. AI inference accuracy as discrete obligation category distinct from raw data accuracy.

**Art.20/21 — Explanation rights and automated decisions:** Client right to explanation of how AI affected specific decisions (Art.20). Specific right to not be subject to solely automated decisions with legal effects (Art.21) — AI-assisted portfolio recommendations may approach this threshold. Vague explanation does not satisfy legal standard; genuine explanation may require disclosing proprietary methodology. Structural conflict between explanation obligation and methodology confidentiality unnamed in Geneva market.

**Art.63 — Criminal liability:** Personal criminal liability for responsible persons operating AI systems with inadequate governance. Different evidentiary standard, different enforcement mechanism, different defense architecture than administrative compliance. Carrier attestation documentation architecture ≠ criminal defense documentation architecture.

### nFADP Enforcement Posture

**Status:** FDPIC confirmed enforcement posture live. Existing nFADP applies directly to AI — no regulatory gap. Enforcement possible now without new legislation.

**Boutique WM exposure:** Every boutique WM using AI in client portfolio management is operating under nFADP obligations that may not be formally mapped to their specific AI use cases. Non-compliance is present-tense exposure, not future risk.

---

## CoE AI Convention

### Convention Status and Application

**Status:** Switzerland signed March 27, 2025. Consultation draft for Swiss implementation expected end of 2026.

**Key provision:** Convention creates "deployer" obligations for organizations using AI in professional contexts. Deployer obligations operate through existing contracts and commercial relationships — private law obligations flow before implementing legislation arrives.

**Application to boutique WM:** Existing client mandates may already contain AI governance commitments accepted through contract terms. Carrier insurance terms may incorporate Convention compliance as coverage condition. Boutique unaware may already be contractually committed to AI governance standards through contracts predating AI adoption.

**Private law mechanism:** Convention obligations operate as contractual commitments through existing mandate language — not through Swiss administrative enforcement. Boutique facing compliance questions through civil law mechanisms (contract breach claims, carrier coverage disputes) before administrative enforcement arrives.

---

## EU AI Act Extraterritorial Effect

### EU AI Act Application to Swiss Boutique WM

**Status:** EU AI Act initial obligations effective February 2025 (prohibited AI practices, AI literacy). High-risk system provisions fully applicable August 2026.

**Extraterritorial reach:** Swiss companies with users or operations in EU affected. Any institution using AI outputs affecting EU data subjects within scope.

**Relevance to Geneva boutique WM:** EU AI Act creates compliance consideration for Swiss WM with EU client base. Not direct Swiss law obligation, but practical compliance standard for cross-border operations. EU AI Act high-risk AI provisions (credit scoring, insurance risk assessment) may apply to WM advisory services.

**Boutique WM challenge:** EU AI Act compliance requires enterprise-grade governance infrastructure. No proportionate methodology exists for boutique WM to assess EU AI Act obligations or demonstrate compliance at their scale.

---

## Swiss Banking Ombudsman Jurisdiction

### Jurisdiction for AI-Adjacent Disputes

**Status:** Unclear. Swiss Banking Ombudsman handles disputes between banks and clients. Jurisdiction for AI-adjacent disputes not formally established.

**Issue for boutique WM:** If client challenges AI-assisted recommendation, unclear which venue governs — Banking Ombudsman, FINMA supervisory process, civil court, or nFADP FDPIC complaint. Different venues have different evidence standards, different remedies, different procedural rules.

**Ambiguity consequence:** Boutique WM cannot map AI-adjacent dispute to specific venue with confidence. Jurisdictional uncertainty creates additional exposure layer for AI-assisted decisions.

---

## Carrier/Insurance Framework

### Carrier AI Attestation Architecture

**Current state:** PI and D&O carriers circulating AI-specific attestation instruments in renewal processes. Three generations observable:
- First generation: policy acknowledgment ("we have an AI policy")
- Second generation: tool inventory and governance framework attestation
- Third generation: specific evidence of human authorization moments for AI-assisted decisions, performance evidence of governance in operation

**Carrier design logic:** Attestation instruments designed for underwriting risk evaluation — not for professional accountability documentation or criminal defense architecture. MD signature creates personal liability exposure against undefined carrier-defined adequacy standard.

**Documentation mismatch:** Carrier evidence requirements assume discrete authorization events (human reviewed X, then AI executed Y). Agentic AI operating continuously does not produce these discrete moments. Boutique with continuous AI portfolio management cannot satisfy carrier third-generation evidence requirements through documentation improvement — gap is architectural.

### PI Coverage Position Ambiguity

**Current state:** No Swiss carrier has proactively disclosed AI coverage position in writing. Coverage question treated as answered with policy acceptance. Gap between assumed coverage and explicit coverage only visible post-incident.

**Boutique WM exposure:** If AI-assisted professional decision triggers claim, coverage determination may be post-hoc and unfavorable. No pre-incident pathway for boutique WM to confirm explicit AI coverage scope at proportionate cost.

---

## Key Compliance Timing Variables

### Documentation Window Close

**Timing property:** Carrier third-generation attestation requirements crystallizing now. Documentation built during current window produces evidence of window-period reasoning. Documentation built after window closes attempts retroactive reconstruction — which reveals itself as retroactive under examination.

**Irreversibility:** New documentation cannot retroactively reconstruct window-period authorization. Positioning effect is irreversible — firms deferring documentation investment accumulating exposure that cannot be discharged through subsequent effort.

### SIF Q2 2026 Regulatory Gap Analysis

**Expected timing:** State Secretariat for International Finance (SIF) expected to publish comprehensive financial market AI regulatory gap analysis Q2 2026.

**Market effect:** Results will inform Bern's regulatory approach and may clarify what Swiss law specifically requires vs. what is market practice. Boutique WM currently operating in ambiguity that Q2 2026 analysis may partially resolve.

### EU AI Act High-Risk Provisions — August 2026

**Timing:** EU AI Act provisions for high-risk AI systems become fully applicable August 2026.

**Swiss WM effect:** Firms with EU operations subject to EU AI Act high-risk requirements from this date. May trigger accelerated Swiss regulatory response. Creates external deadline for Swiss WM with EU nexus to have EU AI Act compliance posture defined.