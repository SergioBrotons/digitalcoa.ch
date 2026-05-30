# 04 — Compliance Context: Geneva / Switzerland Specific Regulatory Landscape

## Phase 01 | Cycle C299 | Geneva Legal ICP

---

## Primary Compliance Obligations for Small Geneva Law Firms

### 1. Attorney-Client Privilege Under Swiss Law

#### Legal Basis
- **Swiss Criminal Code, Article 321**: Penalizes unauthorized disclosure of secrets entrusted in a professional capacity. For attorneys, this is perpetual and covers all information related to the attorney-client relationship.
- **Swiss Civil Code, Article 28**: Protects personality rights — relevant when client data processing affects client privacy.
- **Geneva Cantonal Code of Professional Conduct (CCRD — Code cantonal de résidence professionnelle)**: Geneva-specific implementation of professional obligations for attorneys registered with the Geneva Bar.

#### AI-Specific Risk
Any AI tool that processes client-related data on servers outside of Switzerland or in jurisdictions that do not recognize attorney-client privilege protection creates a potential Article 321 exposure. The risk is not theoretical: once client data leaves a controlled environment, the privilege protection is effectively suspended.

#### Jurisdictional Nuances
- Switzerland is NOT part of the EU. The EU AI Act does not apply directly in Switzerland, but Swiss firms operating in cross-border EU contexts or processing EU client data must consider EU AI Act implications indirectly.
- Swiss data protection is governed by the **Swiss Federal Act on Data Protection (nFADP)**, revised as of 2022/2023 and aligned with GDPR but not identical. The nFADP's extraterritorial reach and AI-specific provisions are still being interpreted.
- **Geneva-specific**: Attorneys registered with ODAGE (Ordre des Avocats de Genève) are bound by the CCRD's confidentiality obligations independently of contractual confidentiality. This creates a double-layer protection — and double-layer risk.

---

### 2. Swiss Data Protection (nFADP)

#### Legal Basis
- **Swiss Federal Act on Data Protection (nFADP / SR 235.1)**: Revised version in force since 2023, with direct applicability in Geneva.
- **Geneva Cantonal Data Protection Ordinance**: Additional local requirements for data processing in Geneva.

#### AI-Specific Implications
- Article 6 nFADP: Data processing must have a lawful basis. For attorneys, the attorney-client relationship provides a specific lawful basis — but AI tool providers are separate entities with their own lawful basis requirements.
- **Data residency matters**: Under nFADP, transferring personal data outside Switzerland requires either adequacy determination or appropriate safeguards (standard contractual clauses). Most US-based AI tools rely on SCCs, but their efficacy for attorney-client data is entirely untested in Swiss courts.
- **Automated decision-making**: Article 21 nFADP provides data subjects (clients) the right not to be subject to solely automated decision-making that produces significant effects. If an AI tool generates a legal recommendation presented as attorney output, this provision may be implicated.

#### Geneva-Specific Considerations
- Geneva's cantonal data protection authority (Cantonal Commission for Data Protection) can investigate complaints — and increasingly, attorneys are being asked by clients about where their case data goes when AI is used.
- No Geneva-specific AI tool certification body currently exists. Firms are entirely dependent on their own legal analysis.

---

### 3. Professional Liability (PI) Insurance Obligations

#### Baseline Position
- All attorneys practicing in Geneva must carry **professional liability insurance** meeting minimum Geneva Bar requirements.
- The Geneva Bar sets minimum coverage amounts and policy terms; coverage is typically renewed on an annual basis.
- Geneva PI policies are typically "claims-made" — the timing of when a claim is made matters for coverage.

#### AI-Specific Developments (2025–2026)
- PI carriers are beginning to add AI-specific questions to renewal applications — but the questions are not standardized and often inapplicable to small firms.
- The Geneva Bar has not issued any guidance on whether AI-assisted work constitutes "standard professional activity" or requires additional coverage riders.
- **Coverage gap risk**: Most existing PI policies were drafted before generative AI existed. Whether AI-assisted errors are covered depends entirely on policy language — and the ambiguity is real.
- No carrier currently offers a specific "AI governance attestation" product or coverage pathway for small Geneva firms.

#### Practical PI Risk Scenarios
- **Scenario A**: Attorney uses AI tool to draft contract summary; AI hallucinates a key clause; attorney misses it; client suffers loss. **Question**: Is this a covered professional error? **Current status**: Unknown — depends on carrier and policy language.
- **Scenario B**: Client data is inadvertently processed by an AI tool provider due to a system error. **Question**: Does the policy cover the data breach? **Current status**: Likely yes, but the AI-specific cause may create coverage disputes.
- **Scenario C**: Attorney recommends an AI tool to client; tool fails; client blames attorney. **Question**: Does E&O cover this? **Current status**: Highly fact-specific, no clear precedent.

---

### 4. The Swiss AI Policy Landscape

#### National AI Policy
- Switzerland does not have a comprehensive AI regulation statute as of mid-2026. The Swiss Federal Council has adopted an "AI monitoring" posture rather than passing a dedicated AI law.
- **Swiss position**: Preferring innovation-friendly, sector-specific guidance over horizontal AI regulation — consistent with Switzerland's general regulatory philosophy.
- This means: **there is no Swiss AI statute that tells small law firms what "adequate AI governance" means**. Practitioners are in a regulatory vacuum.

#### International Influence
- **EU AI Act**: Switzerland is not an EU member; Swiss firms with EU clients or EU-facing activities must consider EU AI Act implications for their AI tool usage.
- **FDA / US AI regulation**: Not directly relevant for Swiss domestic practice but important for firms with US clients.
- **OECD AI Principles**: Switzerland is a member; OECD AI principles are frequently cited by Swiss policy discussions.

#### Geneva Cantonal AI Activity
- The Canton of Geneva has launched several digital transformation initiatives, including AI-related pilot programs in public administration — but nothing specifically targeting the legal profession.
- Geneva's "数字 Genf" (Digital Geneva) strategy mentions AI as a cross-sector theme but with no legal profession-specific recommendations.

---

### 5. The Geneva Bar (ODAGE) — Current State

#### What ODAGE Has Said About AI (as of May 2026)
- **Nothing practical**: No AI-specific guidance, no model policies, no tool evaluations, no attestation templates.
- The Geneva Bar published a general statement on technology and confidentiality in 2023 that pre-dated generative AI — widely seen as insufficient.
- ODAGE has been asked about AI guidance at its annual general meeting (2025, 2026); the response has consistently been "under review."

#### What ODAGE Should Produce (Market Opportunity)
- A practical AI evaluation checklist for member firms
- Model attestation language for PI carrier renewal conversations
- An internal data processing agreement template for AI tool agreements
- A simple incident reporting protocol for AI-assisted errors
- A FAQ addressing the most common AI questions from members

---

### 6. Cross-Border Considerations for Geneva Firms

#### EU Client Data
- The EU AI Act's "high-risk AI" provisions apply to AI systems used in EU contexts. Geneva firms with EU-based clients must consider whether their AI usage falls within scope.
- GDPR's Article 22 (automated decision-making) applies when processing EU client data — creates an additional layer of obligation.

#### US Client Data
- US attorney-client privilege is not recognized in Swiss law, though Swiss law provides its own equivalent protections.
- For US-facing practice (M&A advisory, cross-border disputes), firms must navigate two privilege regimes simultaneously.
- The US CLOUD Act means US authorities can theoretically demand access to data held by US-based AI providers — a real privilege risk for Swiss attorneys with US clients.

#### Banking / Financial Clients
- Geneva firms with banking client work face additional Swiss banking secrecy obligations (LB; Article 47 BankPG) — adding another layer of AI data processing restriction.
- FINMA-regulated entities in client portfolios impose additional AI procurement due diligence requirements.

---

### 7. Key Regulatory Contacts and Resources

| Body | Role | Current AI Policy | Contact/Reference |
|---|---|---|---|
| ODAGE (Geneva Bar) | Attorney licensing/conduct | None (under review) | odage.ch |
| SADV/FSA (Swiss Bar) | National bar advocacy | 2024 position paper (insufficient) | savsda.ch |
| EDÖB (Federal Data Protection) | Data protection oversight | Monitoring AI; no specific guidance | edoeb.admin.ch |
| Geneva DP Authority | Cantonal DP oversight | No AI-specific guidance | etat-de-geneve.ch |
| Swiss Federal Council | National AI policy | Monitoring posture | admin.ch |
| FINMA | Financial sector AI oversight | Limited guidance | finma.ch |

---

## Key Compliance Risk Summary

| Risk | Severity | Certainty | Geneva-Specific |
|---|---|---|---|
| Attorney-client privilege breach via AI tool | High | High | Article 321 CC — perpetual obligation |
| nFADP data transfer violation | High | High | Strict data residency requirements |
| PI coverage loss for AI-assisted error | High | Medium | Policy language ambiguity |
| No "adequate governance" standard | High | High | No Swiss or Geneva definition exists |
| Bar disciplinary exposure | Medium | Medium | No ODAGE guidance = defensive practice |
| EU AI Act extraterritorial reach | Medium | Medium | Depends on EU client exposure |
| Banking secrecy overlap | Medium | High | Additional layer for financial client work |

---

## The Compliance Gap as Market Opportunity

The Geneva small firm attorney faces a multi-layer compliance challenge:
1. **Swiss professional confidentiality** (Article 321) — perpetual, attorney-centric
2. **nFADP data protection** — revised but AI-implications still untested
3. **PI carrier expectations** — AI questions without standards
4. **Bar guidance vacuum** — ODAGE silent, SADV insufficient
5. **No regulatory safety net** — Swiss government in monitoring posture

**There is no single resource that maps all these layers to the 2–5 attorney practice context.** This represents both the most significant market gap and the most significant trust-building opportunity for a provider that can produce a practical, integrated compliance guide for Geneva small firms.
