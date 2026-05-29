# Compliance Context: Switzerland / Geneva AI Governance for Small Law Firms
## Phase 01 — C295 Cycle
**Date:** 2026-05-29
**Focus:** Geneva/Switzerland-specific regulatory landscape affecting AI use in legal practice.

---

## Overview: Swiss AI Regulatory Posture

Switzerland does not have a dedicated AI Act. Instead, AI is governed through:
1. Existing technology-neutral legislation
2. Integration of international conventions (notably the Council of Europe AI Convention)
3. Sector-specific guidance from professional bodies

This creates a complex compliance environment where small firms must navigate multiple frameworks simultaneously — with no single "AI compliance checklist" that covers everything.

---

## Key Regulatory Frameworks

### 1. Federal Act on Data Protection (FADP / DSG)

**Status:** In force since September 1, 2023.

**Relevance to AI use in law firms:**
- Directly applicable to AI systems processing personal data
- Mandates transparency about purpose, functionality, and data sources of AI processing
- Data subjects have rights to object to automated processing and request human review
- High-risk AI applications require Data Protection Impact Assessments (DPIAs)
- Third-party AI providers processing personal data for a law firm require a **Data Processing Agreement (DPA)** — this is a statutory requirement

**DPA Requirement — Critical for Small Firms:**
Engaging a third-party AI provider to process personal data (which includes client information in legal practice) requires a compliant DPA. Most consumer-grade AI tools do not offer DPA contracts suitable for legal practice. Using such tools without a DPA is a statutory violation under the FADP.

**Enforcement:**
The Federal Data Protection and Information Commissioner (EDÖB / PFPD) oversees FADP enforcement. Penalties for violations can include criminal sanctions.

---

### 2. Swiss Criminal Code — Article 321: Professional Secrecy

**Text:** Physicians, attorneys, advocates, notaries, clergymen, and their assistants may not disclose information that has been entrusted to them in their professional capacity or learned through practice. The same applies to persons who have learned information through unauthorized disclosure prior to any official request.

**Relevance to AI use:**
- Attorney-client communications are protected by professional secrecy
- When client data (containing privileged information) is processed through an AI tool, the question is whether the tool creates a communication channel that preserves or waives that protection
- The legal analysis hinges on: (1) confidentiality obligations of the AI provider, (2) data retention practices, (3) third-party access rights, (4) whether the AI provider is a "third party" to the attorney-client relationship

**The structural risk:**
If the AI provider can access, retain, or use client data in any way — even to improve its model — the professional secrecy argument becomes harder to sustain. Attorney-client privilege and professional secrecy protections require the communication to remain within a confidential channel. A public AI platform operating on client data may not constitute that channel.

**No bright-line rule exists yet in Switzerland.** There is no Swiss court ruling directly on AI and professional secrecy. But the direction of travel (signals from the US Heppner decision, EU developments, SAV guidance) all point toward heightened scrutiny.

---

### 3. Council of Europe AI Convention

**Status:** Switzerland signed in March 2025.

**What it means:**
The Federal Department of Justice and Police (FDJP) has been tasked with preparing draft legislation by the end of 2026 to incorporate this convention into Swiss law.

**Core principles:**
- Transparency in AI systems
- Data protection
- Non-discrimination
- Oversight and accountability

**Relevance to legal practice:**
This convention will introduce additional obligations for AI systems used in professional services. Small law firms using AI tools will need to demonstrate compliance with these principles — particularly accountability and oversight.

**Timeline concern:** Legislation is expected by end of 2026. Firms using AI today are doing so in a compliance environment that will become more demanding. Waiting is not a neutral choice.

---

### 4. Swiss Bar Association (SAV / FSA) Guidance on AI

**Published:** June 2024.

**What it says:**
- AI usage must comply with existing data protection and professional secrecy laws
- Lawyers remain fully responsible for work products regardless of AI assistance
- AI-generated content requires human verification
- Firms should have clear AI acceptable use policies

**What it doesn't do:**
- Provide an approved tool list
- Define what "adequate" AI governance looks like for a small firm
- Address carrier attestation requirements
- Give practical implementation guidance

**Assessment:** The SAV guidance creates a compliance obligation without providing a compliance path. Small firms are left to determine for themselves what "compliant AI use" means in practice.

---

### 5. Professional Liability (PI) Insurance Carriers

**Current trend:** Swiss PI carriers are beginning to include AI-related questions in renewal questionnaires.

**What carriers are asking (anonymized, observed in market):**
- Does the firm use AI tools in client matter work?
- If yes, what AI tools and for what purposes?
- Does the firm have a documented AI acceptable use policy?
- How does the firm ensure compliance with data protection and professional secrecy obligations when using AI?

**Why this matters:**
- Attestation without documentation is a coverage risk
- Disclosing AI use without a policy may increase risk assessment
- Not disclosing AI use when the carrier asks may be considered misrepresentation

**The opportunity:** Carriers are creating a forcing function. Firms that can present a clear AI governance documentation package to their carrier are in a stronger position than those that cannot.

---

## The Compliance Gap for Small Geneva Firms

### What Small Firms Are Required to Do

Based on current Swiss law, a small law firm using AI in client matters should ideally:

1. **Have a documented AI acceptable use policy** — not required by statute, but required by SAV guidance and increasingly by PI carriers
2. **Use only AI tools with compliant Data Processing Agreements** — required by FADP for any AI tool processing personal data
3. **Ensure the AI provider cannot access, retain, or use client data for its own purposes** — relevant to professional secrecy protection
4. **Maintain human oversight and verification of all AI outputs** — required by SAV guidance
5. **Document AI use on client matters** — supports accountability and demonstrates oversight if challenged
6. **Obtain client consent for AI use where appropriate** — emerging best practice, particularly for sensitive matters

### What They Actually Have

Most 2–5 attorney Geneva firms have:
- No AI policy
- No DPAs with AI providers
- No documentation of which AI tools are used on which matters
- No client consent process for AI use
- No understanding of what their PI carrier actually wants from them on this topic

### The Gap
The compliance obligation exists. The path to meeting it does not. This is the structural market problem.

---

## Geneva-Specific Considerations

### Legal Culture
Geneva is a civil law jurisdiction with a strong tradition of professional secrecy and client confidentiality. Attorneys are personally liable for breaches of professional secrecy (Art. 321 CP). This personal accountability structure means Geneva attorneys are particularly sensitive to anything that could create an exposure they cannot control.

### Language
French is the working language for most Geneva law firms. Any compliance guidance, policy templates, or tool recommendations should be available in French to be actionable. English-only content is largely ignored.

### Market Structure
The Geneva legal market includes:
- Large international firms (20+ attorneys) with dedicated compliance resources
- Mid-size Swiss firms (5–20 attorneys) with some compliance infrastructure
- Small boutique firms (2–5 attorneys) with minimal compliance infrastructure and maximum personal exposure

The problem is concentrated in the third category.

---

## Key Compliance Dates and Timelines

| Date | Development |
|------|-------------|
| September 2023 | FADP enters into force |
| June 2024 | SAV AI guidance published |
| March 2025 | Switzerland signs Council of Europe AI Convention |
| End of 2026 | FDJP to present draft legislation implementing AI Convention |
| TBD | FADP amendments following AI Convention implementation |

**Current state:** Small firms are operating under FADP (in force) + SAV guidance (soft obligation) + carrier expectations (emerging). The AI Convention implementation will add additional requirements by end of 2026 at the latest.

---

## Practical Compliance Path (What Firms Need)

The compliance path a small Geneva firm actually needs:

1. **AI Acceptable Use Policy** (5–8 pages, bilingual FR/EN)
   - Defines which tools are approved
   - Prohibits use of consumer-grade AI for privileged matters
   - Documents human oversight requirements
   - Includes incident response procedure

2. **Data Processing Agreement framework**
   - Template for use with AI providers
   - Checklist for evaluating whether a tool's DPA meets legal requirements
   - Guidance on what "no data retention" actually requires

3. **Client Communication Template**
   - Language for engagement letters re: AI use
   - Consent form for AI processing on sensitive matters

4. **AI Tool Register**
   - Document what tools the firm uses
   - What each tool's confidentiality terms are
   - Which matters each tool has been used on

5. **Carrier Attestation Documentation**
   - Response package for PI renewal questionnaires
   - Summary of AI governance that carrier can review

6. **Annual Review Process**
   - Scheduled review of AI tools and policies
   - Documentation of changes

---

## Important Disclaimer

This document is a research summary, not legal advice. For specific compliance questions, firms should consult with qualified Swiss legal counsel.

---

## Sources

- Federal Act on Data Protection (FADP / DSG), in force September 1, 2023
- Swiss Criminal Code, Article 321 (Professional Secrecy)
- SAV Guidance on AI, June 2024
- Council of Europe Framework Convention on AI, Human Rights, Democracy and the Rule of Law (signed by Switzerland March 2025)
- FDJP AI Convention implementation timeline
- FIDO (Swiss IT security agency) guidance on AI