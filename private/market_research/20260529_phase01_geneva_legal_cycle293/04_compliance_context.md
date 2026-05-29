# Compliance Context: Geneva/Switzerland AI Regulatory Landscape
## C293 Phase 01 | Regulatory Framework for Small Geneva Law Firms

---

## Applicable Law and Regulatory Framework

### 1. Federal Act on Data Protection (FADP / revDSG)

**Status**: In force since September 1, 2023
**Relevance**: Highest daily operational impact for AI use

The revised FADP applies whenever AI systems process personal data — which is essentially every use case in a law firm. Key obligations:

- **Lawfulness**: Processing must have a legal basis (consent, contract, legal obligation, vital interest, public interest, legitimate interest)
- **Purpose limitation**: Data collected for one purpose cannot be repurposed without additional legal basis
- **Data subject rights**: Right to access, correction, deletion — must be technically feasible to fulfill
- **Data processing agreements (DPAs)**: Mandatory when commissioning third-party AI providers
- **Data breach notification**: 72-hour notification obligation to FDPIC for high-risk breaches
- **Fines**: Up to CHF 250,000 for individuals for violations of due diligence obligations

**Practical implication**: Every AI tool used in the firm that processes client data requires a DPA. Firms must assess whether the AI provider's contractual commitments are backed by actual technical and organizational measures.

**FDPIC guidance (May 2025)**: The Federal Data Protection and Information Commissioner confirmed that the FADP **directly applies to AI-supported data processing** — no new law needed. This closes the "AI is unregulated" misunderstanding.

### 2. Professional Secrecy: Article 13 BGFA and Article 321 SCC

**Status**: Absolute, codified obligation — no exceptions without court order

For Swiss attorneys, professional secrecy is not merely a best practice. It is a **criminal statute**:

- **Article 13 of the Lawyers Act (BGFA)**: Establishes the duty of professional secrecy for admitted attorneys
- **Article 321 of the Swiss Criminal Code (SCC)**: Criminalizes intentional breach of professional secrecy — applies to attorneys AND their auxiliary persons
- **Auxiliary persons**: AI systems used by law firm staff qualify as auxiliary persons — making the attorney responsible for the AI's compliance with professional secrecy

**Critical risk**: Voluntarily disclosing privileged client information to a third-party AI provider without proper safeguards may constitute a **waiver of privilege** — the privilege cannot be reclaimed once waived. The privilege does not survive careless disclosure.

**Anonymization mitigation**: Anonymizing documents before AI processing can mitigate FADP risk — but:
- Anonymization is time-consuming and error-prone
- Anonymization does not eliminate all privilege risk (context matters)
- A proper anonymization standard (k-anonymity, l-diversity) must be applied — informal redaction is insufficient

### 3. Swiss Bar Association (SBA) Guidelines on AI Use

**Adopted**: June 14, 2024
**Published**: Anwaltsrevue 9/2024
**Status**: Soft law — not directly enforceable, but constitutes the professional standard

The SBA Guidelines provide the only Swiss-specific professional framework for AI use by attorneys. Key principles:

1. **Competence**: Attorneys must understand AI capabilities and limitations — not as technologists, but as professionals responsible for outputs
2. **Confidentiality and data protection**: Client data processed by AI must be protected; DPA with AI provider required; data residency matters
3. **Professional judgment**: AI augments, does not replace, professional judgment
4. **Human in the loop**: AI outputs are drafts requiring human review — "AI-generated content must be considered a fictional starting point" (translated from German: "als fiktives Ausgangsmaterial zu betrachten")
5. **Transparency**: Consider disclosing AI use to clients, particularly for significant work product
6. **Documentation**: Maintain records that demonstrate professional oversight of AI outputs

**Limitation**: The Guidelines are principles-based, not prescriptive. They tell attorneys *what* to care about, not *how* to implement it operationally. This is the gap small firms experience.

### 4. Council of Europe's AI Convention

**Signed by Switzerland**: March 27, 2025
**Status**: Not yet incorporated into Swiss law; ratification expected after 2026
**Consultation draft**: Expected by end of 2026 for necessary legislative amendments

The AI Convention is a cross-sector international treaty focused on:
- Accountability for AI systems
- Transparency obligations
- Human oversight requirements
- Protection of fundamental rights

**Relevance for small firms**: The principles will eventually influence how courts and bar authorities interpret "adequate governance." Firms that align with the Convention's spirit before it becomes law will be better positioned. However, the Convention is principles-based — so the implementation gap remains.

### 5. Federal Council's Technology-Neutral Approach

**Position confirmed**: February 12, 2025
**Meaning**: Switzerland will NOT enact a standalone "Swiss AI Act." Instead, existing laws will be interpreted and amended sector-by-sector.

**Implication**: No comprehensive Swiss AI law is coming in 2025 or 2026. Small firms must act under existing frameworks (FADP, BGFA, professional responsibility) rather than waiting for AI-specific legislation.

### 6. FINMA Guidance 08/2024 (Contextual Relevance)

**Issued**: December 2024
**Applies to**: Financial institutions supervised by FINMA
**Relevance for law firms**: Sets a benchmark for what "AI governance" looks like in Swiss professional services

FINMA's AI governance principles for financial institutions include:
- Model risk management
- Operational resilience
- Data quality
- Explainability
- Cybersecurity
- Accountability

While not legally binding on law firms, FINMA's framework is increasingly cited as a reference point by carriers and advisors. A boutique firm that can demonstrate alignment with these principles has a defensible position.

### 7. EU AI Act (Indirect Relevance)

**Status**: In force; phased applicability through 2026–2027
**Direct applicability to Swiss firms**: None (Switzerland is not in the EU)

However:
- Firms with EU-based clients or EU data processing obligations will encounter EU AI Act principles
- The EU AI Act's "AI competence obligation" (February 2025) signals a broader trend: professionals using AI are expected to understand it
- EU AI Act high-risk AI categories (Annex III) do not currently include legal services — but this may be reviewed

---

## Geneva-Specific Considerations

### The Geneva Bar Context

- Geneva is Switzerland's largest legal market by firm count and by foreign/corporate client concentration
- Geneva law firms have a higher-than-average proportion of international corporate clients — who are more likely to ask about AI use, data residency, and to impose their own AI governance requirements
- The Geneva Law Network (Réseau Romand des Avocats) is an active professional community — word-of-mouth about AI problems spreads quickly and credibly
- Geneva's French-language legal culture means that AI guidance must be available in French to be operationally useful

### Data Residency and Cross-Border Considerations

Geneva law firms frequently handle:
- Cross-border transactions involving EU data
- US-based clients and counterparties
- Multi-jurisdictional disputes

This creates layered data residency requirements that generic AI tools do not accommodate:
- FADP requires Swiss or equivalent data protection for personal data
- EU clients may impose GDPR requirements
- US clients may impose US data law considerations
- An AI tool that works for a domestic Swiss matter may not be appropriate for a matter involving EU personal data

---

## Compliance Checklist: What a Small Geneva Firm Actually Needs

Based on the regulatory landscape above, a minimum viable compliance posture for a 2–5 attorney Geneva firm includes:

- [ ] **AI Policy**: Written internal policy stating what AI tools may be used, for what purposes, and what may not be entered into them
- [ ] **Vendor Inventory**: Documented list of AI tools used in the firm, with vendor name, data residency, and DPA status
- [ ] **DPA Coverage**: Data processing agreements in place with all third-party AI providers that handle client data
- [ ] **Human Review Process**: Documented process for reviewing AI outputs before use in client matters
- [ ] **Attestation Response**: A prepared, defensible answer to carrier AI questions — ready before renewal
- [ ] **Client Communication**: Internal consensus on whether and how to disclose AI use to clients
- [ ] **Associate Onboarding**: AI policy communicated to new associates; signed acknowledgment
- [ ] **Matter-Level AI Restrictions**: A system for flagging matters where clients have instructed no AI use

---

## NET-NEW Findings for C293 Phase 01

1. **FDPIC's May 2025 confirmation that FADP applies directly to AI closes the "AI is unregulated" defense**: Small firms that believed AI use was in a regulatory void now have clear direction — the revised FADP is the operative law.

2. **The DPA requirement is operationally underestimated**: Most small Geneva firms using AI do not have formal DPAs with their AI vendors. This is a compliance gap with real legal and financial exposure.

3. **FINMA's AI governance framework is becoming the de facto reference standard for Swiss professional services**: Even though it technically applies only to financial institutions, carriers and advisors are citing it. A small firm that aligns with its principles has a credible defense.

4. **The EU AI Act is creating compliance anxiety even without direct applicability**: Swiss firms working with EU clients are encountering EU AI Act expectations through their clients' procurement and compliance processes.

5. **The 72-hour FADP breach notification obligation creates urgency for AI incident response planning**: Small firms have no internal capability to detect, assess, and notify within 72 hours — but the obligation exists regardless of firm size.

6. **The Geneva market's international client base creates layered data residency requirements** that no single AI tool fully addresses — and that small firms are currently navigating without guidance.
