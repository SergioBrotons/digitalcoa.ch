# Compliance Context: Geneva Boutique Wealth Management — C310 Phase 02

## Switzerland and Geneva-Specific Regulatory Landscape

---

## The Regulatory Layer Cake

The Geneva boutique wealth management firm operates in a multi-layered regulatory environment for AI accountability. Each layer has a different enforcement mechanism, a different standard, and a different consequence for the managing director personally.

### Layer 01: FINMA Supervisory Authority

**What it is:** The Swiss Financial Market Supervisory Authority (FINMA) supervises Swiss financial institutions including asset managers and wealth managers subject to the Banking Act. FINMA's December 2024 AI guidance establishes principles-based expectations for AI use in supervised entities.

**The guidance:** FINMA's AI guidance (December 2024) requires supervised entities to implement AI governance frameworks covering: (1) risk management, (2) transparency and explainability, (3) data quality and integrity, (4) security and access controls, (5) human oversight, and (6) accountability. The guidance is principles-based — it establishes what should be achieved, not how to achieve it operationally.

**The gap:** The guidance does not define what "adequate" means for a boutique WM firm (50–200 employees). The guidance does not specify the documentation requirements. The guidance does not define human oversight operationally for portfolio construction AI. The guidance is currently being interpreted by supervised entities without FINMA having issued compliance specifications — creating uncertainty about what constitutes adequate implementation.

**Enforcement mechanism:** FINMA examination (annual risk-based examination cycle). FINMA can request documentation during examination. Inadequate AI governance can trigger supervisory measures — including enhanced supervision, capital requirements, or in extreme cases, license review. FINMA examination questions are becoming more specific about AI at each cycle.

**The structural problem:** The boutique WM firm that interprets FINMA's principles-based guidance by producing a written policy has addressed the surface question — "do you have an AI governance policy?" — without addressing the operational questions FINMA is beginning to ask in examinations: "how do you document human oversight in specific portfolio decisions? What is your AI authorization chain? How do you monitor AI model performance?"

### Layer 02: nFADP Article 63 — Personal Liability for Data Protection in AI Systems

**What it is:** The Swiss Federal Act on Data Protection (nFADP, revised 2023/2024) Article 63 establishes personal liability for the responsible body — and by extension, the managing director personally — for AI systems processing personal data. The managing director of a WM firm using AI to process client financial data is a responsible body under Article 63.

**The specific exposure:** Article 63 creates personal liability for failures in AI system governance that affect client data protection. The managing director who authorized — or failed to supervise — AI systems that process client financial data without documented human oversight, without adequate data protection measures, and without the required DPIA documentation is personally exposed. The exposure is not corporate — it is personal. Fines up to CHF 250,000 for individuals. More significantly: the reputational and professional consequences of a data protection violation finding are personal and career-affecting.

**The operational gap:** The managing director of a boutique WM firm typically does not know they are personally responsible under Article 63 for the AI systems processing client data. The Article 63 question has been surfacing through institutional DDQ scrutiny and internal counsel conversations — not through FINMA guidance or regulatory communication. The managing director discovers the exposure when the institutional client asks a question they cannot answer, or when internal counsel flags it during a contract review.

**The DPIA obligation:** Article 39 nFADP requires a data protection impact assessment (DPIA) for high-risk data processing, including AI systems processing client financial data. The boutique WM firm running AI-assisted portfolio construction has an Article 39 DPIA obligation. Most boutique WM firms have not conducted one. The DPIA documents: what data the AI system processes, what risks it creates, what measures are in place. The absence of a DPIA is a documentation gap — and a personal liability gap.

### Layer 03: Institutional Client AI Governance Requirements

**What it is:** Institutional clients (pension funds, insurance companies, family offices, sovereign wealth funds) are imposing AI governance requirements on their investment managers through AI governance DDQs. These requirements are contractually binding — they are part of the investment management agreement. DDQ failure can trigger contract review, mandate suspension, or mandate termination.

**The specific requirements:** Institutional AI governance DDQs typically require evidence of: (1) AI inventory — what AI systems are used in managing the client's assets; (2) human authorization documentation — who authorized each AI system, when, on what basis; (3) human oversight protocol — how does the managing director review AI recommendations before they reach the client; (4) model performance monitoring — how is AI model drift detected and addressed; (5) vendor AI governance assessment — what is the vendor's AI governance posture; (6) incident response — what happens when the AI system produces an unexpected result.

**The competitive dimension:** The institutional DDQ is not just a compliance requirement — it is a competitive gate. Institutional clients are comparing their investment managers' AI governance responses. The manager with better-documented AI governance is differentiated positively. The manager with incomplete documentation is flagged for review. The DDQ has become a competitive intelligence document — the firm's AI governance documentation affects their standing with institutional clients regardless of investment performance.

**The standard-setting dimension:** Institutional clients are setting AI governance standards that exceed current FINMA requirements in specific respects. The institutional DDQ asks for human authorization documentation that FINMA has not yet specified. The institutional DDQ asks for model performance monitoring evidence that FINMA has not yet examined. The boutique WM firm that aligns to FINMA requirements alone is not aligned to what their institutional clients actually require.

### Layer 04: SRO Self-Regulation

**What it is:** Asset managers and wealth managers in Switzerland are subject to self-regulatory organizations (SROs) under the Anti-Money Laundering Act. SROs including the Swiss Asset Management Association (SAAM/SFAMA) have been issuing guidance on AI use. The SRO framework is a supervisory layer above FINMA for some boutique WM structures.

**The gap:** The SRO guidance on AI is emerging and not yet definitive. SROs have not issued compliance specifications for AI governance at boutique WM scale. The managing director subject to SRO supervision has the same problem as the FINMA-supervised managing director: principles-based guidance without operational definition. The SRO is a potential enforcement pathway for AI governance standards — but it has not yet activated this pathway in a way that creates clear obligations for boutique firms.

### Layer 05: Carrier Professional Liability Insurance

**What it is:** Professional liability insurance for wealth managers includes coverage for claims arising from AI-assisted decisions. Insurance carriers have begun requiring AI governance attestations as a condition of coverage. The carrier attestation is a condition of insurance — and the attestation requires accurate documentation of AI use.

**The documentation shift (C310 finding):** Carrier AI attestation forms are shifting from firm-level questions ("do you have an AI governance policy?") to matter-level questions ("what AI was used in this specific matter, with what authorization?"). This shift is documented in C310 Phase 01 for legal ICPs and applies equally to WM ICPs. The carrier form is the design specification for the firm's documentation architecture — the form's question type determines what documentation is required.

**The two-document problem:** The boutique WM firm completing the carrier attestation believes they are preparing for AI governance scrutiny. The institutional DDQ arrives with different questions. The firm discovers they have answered one document while the institutional client is asking another. The carrier attestation and the institutional DDQ are not interchangeable — they require different documentation architectures.

---

## The Documentation Architecture Required

### What Each Layer Requires

| Regulatory Layer | Question Type | Documentation Required | Enforcement |
|---|---|---|---|
| FINMA guidance | Principles-based ("adequate") | AI governance policy, oversight framework | Examination, supervisory measures |
| nFADP Art. 63 | Personal liability | DPIA, authorization chain, data protection measures | Personal fines, reputational |
| Institutional DDQ | Matter-level evidence | Authorization for specific decisions, model monitoring, vendor assessment | Contract — mandate retention |
| SRO | Emerging | General compliance framework | Membership conditions |
| Carrier attestation | Firm-level / matter-level hybrid | AI use documentation, authorization evidence | Insurance coverage conditions |

### The Architecture Problem

The boutique WM firm needs a documentation architecture that simultaneously serves: (1) FINMA examination readiness, (2) nFADP Article 63 personal liability containment, (3) institutional DDQ response, (4) carrier attestation accuracy, and (5) ongoing AI governance coherence. These five requirements are not the same — they have different question types, different documentation standards, and different audiences. The firm producing documentation for one requirement without an underlying coherent architecture produces responses that are inconsistent with each other.

### The Architecture Solution

The documentation architecture required is not a policy document — it is a system that generates evidence. The system has: (1) an AI inventory that answers all five requirement layers consistently, (2) an authorization chain documentation practice that produces evidence for each AI system, (3) a model performance monitoring record that is both FINMA-examination-ready and institutional-DDQ-responsive, (4) a DPIA that is current and specific to each AI system processing client data, and (5) a carrier attestation preparation process that reviews the carrier's specific form against the underlying architecture before signing.

The architecture must be: (1) coherent — one set of facts produces consistent evidence across all requirement layers; (2) retroactive — it must address 12–24 months of undocumented AI use, not only forward-looking practice; (3) bilingual EN/FR — English for institutional clients, French for FINMA/SRO proceedings; (4) scale-appropriate — designed for 50–200 person firms without dedicated AI compliance officers.

---

## The Geneva-Specific Dimension

### Geneva as a Financial Center

Geneva is the largest wealth management center in Switzerland and among the top three globally. The Geneva financial center includes: (1) large private banks (USB, Credit Suisse successor entities, Lombard Odier, Pictet), (2) boutique asset managers and wealth managers (50–500 employees, CHF 100M–10B AUM), and (3) family offices and single-family offices. The boutique WM segment is specifically concentrated in Geneva.

### The Geneva Bilingual Regulatory Environment

Geneva financial institutions operate in a bilingual environment: (1) institutional clients — predominantly English-speaking (global pension funds, sovereign wealth funds, family offices), (2) Swiss regulators — FINMA and SROs operate in German and French, with Geneva-specific proceedings in French, (3) domestic Swiss clients — French-speaking. The documentation architecture must serve all three contexts: English for institutional clients, French for Swiss regulatory proceedings, with consistency between the two.

### The Geneva Institutional Client Concentration

Geneva-based boutique WM firms have institutional client concentrations that include: Swiss pension funds (institutional, French-speaking), international pension funds (institutional, English-speaking), insurance companies (mixed), family offices (mixed), and sovereign wealth funds (English). The institutional client base is diverse in language and geography — which means the AI governance documentation must serve multiple documentation standards simultaneously.

---

## The Personal Liability Convergence

The structural finding of C310 Phase 02: the managing director of a Geneva boutique WM firm faces a convergence of personal accountability sources — none of which they have adequately prepared for, and all of which are activating simultaneously.

**FINMA examination:** Personal accountability for AI governance failures discovered during examination.

**nFADP Article 63:** Personal liability for AI systems processing client financial data without adequate documentation.

**Institutional DDQ:** Personal accountability for AI governance gaps discovered during the client's review of the manager relationship.

**Carrier attestation:** Personal signature on AI governance attestation — attestation inaccuracy is personal exposure.

**Associate delegation:** Personal liability for associate-implemented AI use — the authorization chain is the MD's accountability chain.

The convergence is the story. The managing director who thought they were managing a regulatory compliance problem is discovering they are managing a personal liability situation across multiple simultaneous fronts.

---

*C310 Phase 02 — Compliance Context File — Switzerland and Geneva-specific regulatory landscape for boutique wealth management AI accountability. Five regulatory layers identified: FINMA guidance, nFADP Article 63, institutional client requirements, SRO self-regulation, and carrier professional liability. The documentation architecture required must serve all five layers simultaneously with a coherent evidence system.*
