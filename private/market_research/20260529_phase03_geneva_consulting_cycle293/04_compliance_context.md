# 04 — Compliance Context: Geneva / Switzerland Regulatory Landscape

**Phase:** 03 — Geneva Consulting (2–50 employees)
**Cycle:** 293
**Date:** 2026-05-29

---

## Switzerland's Regulatory Approach to AI

Switzerland does not have a standalone AI Act. Instead, it relies on:
- **Technology-neutral existing laws** adapted to AI contexts
- **Sector-specific guidance** (primarily for financial institutions)
- **International alignment** — Council of Europe AI Convention (pending ratification)
- **EU AI Act awareness** — given the EU is Switzerland's largest trading partner, EU AI Act compliance is de facto required for any firm serving EU-based clients

This creates a **regulatory complexity layer** that disproportionately affects small firms: they must track multiple frameworks simultaneously without the compliance department to do it.

---

## Key Regulatory Frameworks

### 1. New Federal Act on Data Protection (nFADP)

**Status:** In force since September 1, 2023
**Authority:** Federal Data Protection and Information Commissioner (FDPIC)

**Key provisions relevant to small consulting firms:**

**a) Personal Liability (Unique to Switzerland — Not Present in GDPR)**
- Executives, managers, and responsible individuals can be fined up to **CHF 250,000** for **intentional** breaches of data protection obligations
- If the specific individual cannot be identified, the **company** can be fined
- This is a direct personal risk for managing partners of small consulting firms
- Negligence is not covered by the personal fine (company fines apply for negligence), but the threshold for "intentional" can be lower than expected in practice

**b) Automated Processing and Profiling**
- When AI is used for profiling (automated data processing to evaluate personal characteristics), **explicit consent (opt-in)** is required
- This affects AI tools used to analyze client data, stakeholder feedback, or market research in an automated way
- Small firms using AI to synthesize client interview data or process personal information in bulk may be conducting "profiling" without realizing it

**c) Privacy by Design and Privacy by Default**
- Data protection must be integrated into product and service design from the outset
- Default settings must be privacy-friendly
- For consulting firms using AI tools, this means: the AI tools selected must have privacy-protective default settings; client data must not be used for training unless explicitly agreed

**d) Data Processing Agreements (DPAs)**
- Mandatory when third parties (including AI tool providers and sub-consultants) handle personal data
- Small firms using US-based AI tools (OpenAI, Anthropic via API) need DPAs with those providers
- Sub-consultants who process any personal data during an engagement need DPAs in place

**e) Data Protection Impact Assessments (DPIAs)**
- Required for processing activities likely to entail a high risk to data subjects' rights
- AI-assisted processing of client or stakeholder personal data likely qualifies
- No mandatory DPIA registry for firms under 250 employees (with exceptions), but best practice guidance recommends maintaining one regardless of size

**f) Data Breach Notification**
- Must notify FDPIC if a data breach is likely to pose a high risk to data subjects
- Notification must be made "without undue delay"
- AI-related breaches (e.g., a prompt injection attack on a client data set) would fall under this obligation

---

### 2. FINMA Guidance 08/2024 — AI Governance for Financial Institutions

**Status:** Published and in force
**Authority:** Swiss Financial Market Supervisory Authority (FINMA)

**Relevance to consulting firms:** FINMA regulates banks, insurers, and securities dealers — many of whom are clients of Geneva consulting boutiques. FINMA's expectations on AI governance therefore flow down to service providers:

- Financial institution clients are expected to conduct AI vendor due diligence
- This manifests as AI questionnaires sent to consulting firms (the "client AI DDQ" problem identified in Market Signals)
- Consulting firms serving FINMA-regulated clients should expect increasing scrutiny of their AI tool usage, data handling, and governance practices

**Key FINMA expectations relevant to consulting firms:**
- AI usage policies and documentation
- AI risk management frameworks (even for service providers)
- Model inventory and AI tool registration
- Human oversight of AI-assisted decisions
- Incident reporting mechanisms

**Practical impact:** A Geneva consulting firm working with a Swiss private bank or insurance company is effectively being held to FINMA-adjacent standards because the client must demonstrate supply chain AI compliance.

---

### 3. EU AI Act (Indirect but Material Relevance)

**Status:** In force since August 1, 2024; phased enforcement through 2025–2027
**Relevance:** Switzerland is not in the EU, but the EU AI Act applies extraterritorially to firms providing services to EU-based organizations.

**For Geneva consulting firms:**
- If a client is an EU-based company or has EU-based subsidiaries, the consulting firm's AI practices may be implicated in the client's EU AI Act compliance
- The February 2025 enforcement date (bans on unacceptable-risk AI systems and AI literacy requirements) has triggered increased AI due diligence across supply chains
- Geneva firms with French, German, or other EU clients are experiencing direct EU AI Act pressure

**Key provisions:**
- **AI literacy:** Organizations deploying AI must ensure staff have sufficient AI literacy — applies to consulting firms using AI tools
- **Transparency:** Users of AI systems must be informed when they are interacting with AI — relevant for client engagement AI tools
- **High-risk AI classification:** Systems used in employment decisions, education, essential services, law enforcement, or migration management face the strictest requirements — less directly relevant for general consulting but may apply in specific contexts

---

### 4. ISO/IEC 42001 — AI Management System Standard

**Status:** Published December 2023
**Relevance:** First international standard for AI management systems; designed to help organizations govern AI responsibly.

**For small consulting firms:**
- ISO 42001 is enterprise-scale and certification-oriented
- The standard is not designed for SMEs but its principles can be selectively applied
- KPMG and other large firms reference ISO 42001 in their AI governance frameworks
- Small firms don't need certification but benefit from understanding the standard's structure: AI policy → risk assessment → controls → monitoring → improvement

**Practical relevance:** When a client AI DDQ asks about AI governance frameworks, a small firm can reference ISO 42001 as an aligned structure without actually being certified.

---

### 5. Council of Europe AI Convention

**Status:** Switzerland is in the process of ratifying
**Relevance:** Will add an international treaty layer to Swiss AI governance obligations once ratified.

**Note:** This is still evolving and not yet a binding compliance requirement for most small firms. Monitor for ratification progress.

---

## Regulatory Interaction Map for Small Geneva Consulting Firms

```
Client sends AI DDQ (driven by FINMA / EU AI Act obligations)
        ↓
Small consulting firm must respond with:
        - AI usage policy
        - Data handling documentation (nFADP)
        - Sub-consultant AI oversight (nFADP DPA requirement)
        - AI tool inventory
        - Methodology defensibility documentation
        - Privacy by Design evidence
        ↓
If not done properly → client loses confidence / engagement
                OR
If AI-related incident occurs → personal liability (nFADP, CHF 250,000)
                OR
At insurance renewal → AI exclusions added to policy
```

---

## NET-NEW Findings (C293 Phase 03)

1. **nFADP personal liability is the sharpest regulatory sword** — CHF 250,000 for intentional breaches is a realistic personal exposure for a managing partner who has made AI tool decisions without documentation or governance.

2. **FINMA Guidance 08/2024 creates an indirect compliance cascade** — Geneva consulting firms may not be regulated by FINMA, but their clients are, meaning client AI DDQs are a form of regulatory pressure transmission that consulting firms cannot ignore.

3. **The combination of nFADP + FINMA + EU AI Act creates a three-layer compliance stack** — no single framework governs the small consulting firm's AI obligations; they must navigate all three simultaneously.

4. **Data Processing Agreements are the most immediate nFADP action item** — most small Geneva consulting firms are not in compliance with DPA requirements for their AI tool providers and sub-consultants.

5. **AI literacy is an underestimated obligation** — EU AI Act (and its de facto extraterritorial influence) requires AI literacy for all staff using AI tools; small firms have no infrastructure to document this.

6. **Swiss technology-neutral approach creates interpretation risk** — unlike the EU AI Act's clear classification system, Switzerland's approach means small firms cannot easily determine their regulatory obligations, increasing reliance on external advisors who often over-sell enterprise solutions.
