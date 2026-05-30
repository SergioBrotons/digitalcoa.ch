# 04 — Compliance Context: Geneva / Switzerland Specific Regulatory Landscape

## Phase 01 | Cycle C300 | Geneva Legal ICP

---

## Primary Compliance Obligations for Small Geneva Law Firms

### 1. Attorney-Client Privilege Under Swiss Law

#### Legal Basis
- **Swiss Criminal Code, Article 321**: Penalizes unauthorized disclosure of secrets entrusted in a professional capacity. For attorneys, this is perpetual and covers all information related to the attorney-client relationship.
- **Swiss Civil Code, Article 28**: Protects personality rights — relevant when client data processing affects client privacy.
- **Geneva Cantonal Code of Professional Conduct (CCRD — Code cantonal de residence professionnelle)**: Geneva-specific implementation of professional obligations for attorneys registered with the Geneva Bar.

#### AI-Specific Risk
Any AI tool that processes client-related data on servers outside of Switzerland or in jurisdictions that do not recognize attorney-client privilege protection creates a potential Article 321 exposure. The risk is not theoretical: once client data leaves a controlled environment, the privilege protection is effectively suspended.

#### Jurisdictional Nuances
- Switzerland is NOT part of the EU. The EU AI Act does not apply directly in Switzerland, but Swiss firms operating in cross-border EU contexts or processing EU client data must consider EU AI Act implications indirectly.
- Swiss data protection is governed by the **Swiss Federal Act on Data Protection (nFADP)**, revised as of September 2023 and aligned with GDPR but not identical. The nFADP's extraterritorial reach and AI-specific provisions are still being interpreted.
- **Geneva-specific**: Attorneys registered with ODAGE (Ordre des Avocats de Geneve) are bound by the CCRD's confidentiality obligations independently of contractual confidentiality. This creates a double-layer protection — and double-layer risk.
- **CLOUD Act risk now explicitly named**: US authorities can theoretically demand access to data held by US-based AI providers via the US CLOUD Act. This is now a stated concern, not an implicit one.

---

### 2. Swiss Data Protection (nFADP)

#### Legal Basis
- **Swiss Federal Act on Data Protection (nFADP / SR 235.1)**: Revised version in force since September 2023.
- **Geneva Cantonal Data Protection Ordinance**: Additional local requirements for data processing in Geneva.

#### AI-Specific Implications
- Article 6 nFADP: Data processing must have a lawful basis. For attorneys, the attorney-client relationship provides a specific lawful basis — but AI tool providers are separate entities with their own lawful basis requirements.
- **Data residency is non-negotiable**: Under nFADP, transferring personal data outside Switzerland requires either adequacy determination or appropriate safeguards. US-based AI tools rely on Standard Contractual Clauses (SCCs), but their efficacy for attorney-client data is entirely untested in Swiss courts.
- **Automated decision-making**: Article 21 nFADP provides data subjects (clients) the right not to be subject to solely automated decision-making that produces significant effects. If an AI tool generates a legal recommendation presented as attorney output, this provision may be implicated.

---

### 3. Professional Liability (PI) Insurance Obligations

#### Baseline Position
- All attorneys practicing in Geneva must carry **professional liability insurance** meeting minimum Geneva Bar requirements.
- The Geneva Bar sets minimum coverage amounts and policy terms; coverage is typically renewed annually.
- Geneva PI policies are typically "claims-made" — the timing of when a claim is made matters for coverage.

#### AI-Specific Developments (C300 Update)
- **Attestation debt identified**: Many firms have signed AI governance attestations without any underlying governance documentation — creating an uninsured period of exposure.
- **Carrier assessment incompetence confirmed**: No Swiss PI carrier has published an AI governance scoring rubric for small Geneva firms. Renewal questions are not backed by internal carrier AI governance competence.
- **Coverage gap risk growing**: Most existing PI policies were drafted before generative AI. Whether AI-assisted errors are covered remains highly fact-specific.
- The June 19 SBA event may produce the first Geneva bar-specific AI guidance that firms can reference as a standard of care.

---

### 4. The Swiss AI Policy Landscape — C300 Update

#### National AI Policy
- Switzerland does not have a comprehensive AI regulation statute as of mid-2026. The Swiss Federal Council has adopted an "AI monitoring" posture rather than passing a dedicated AI law.
- **Switzerland signed the Council of Europe's AI Convention on March 27, 2025** — legislative proposals for ratification are expected for consultation by end of 2026.This is the most significant pending regulatory signal for Geneva firms.
- **EU AI Act**: Full application expected August 2026 (though some deadlines have been delayed). Swiss firms with EU clients or EU-facing activities must consider EU AI Act implications for their AI tool usage.
- **Swiss Federal Council consultation draft**: Expected end of 2026 — this will be the first Swiss-specific horizontal AI regulation consultation.

#### Geneva Bar Event: June 19, 2026
- The SADV/FSA (Swiss Bar Association) is dedicating its 2026 "Day of Lawyers" on June 19, 2026 to the application of AI in lawyers' and notaries' work.
- First observable regulatory signal in C300: firms now have a community-level deadline to prepare for.
- The event is expected to produce — for the first time — a practical AI guidance document from the Swiss bar. The critical question is whether it will be actionable.
- Firms attending the event are preparing specific questions: what does adequate governance mean, what should a tool evaluation look like, who bears responsibility.

#### Cross-Border Considerations for Geneva Firms
- **EU Client Data**: GDPR's Article 22 (automated decision-making) applies when processing EU client data. EU AI Act high-risk provisions apply to AI systems used in EU contexts.
- **US CLOUD Act**: Explicitly named as a threat in C300 language. US authorities can theoretically demand access to data held by US-based AI providers — a real privilege risk for Swiss attorneys with US clients.
- **Banking / Financial Clients**: Geneva firms with banking client work face additional Swiss banking secrecy obligations (LB; Article 47 BankPG).

---

### 5. The Geneva Bar (ODAGE) — Current State

#### What ODAGE Has Said About AI (as of May 2026)
- **Nothing practical**: No AI-specific guidance, no model policies, no tool evaluations, no attestation templates.
- The Geneva Bar published a general statement on technology and confidentiality in 2023 that pre-dated generative AI — widely seen as insufficient.
- ODAGE has been asked about AI guidance at its annual general meeting (2025, 2026); the response has consistently been "under review."

#### The SBA Day of Lawyers: June 19, 2026 — The First Real Signal
- The SADV/FSA has dedicated its 2026 Day of Lawyers to the application of AI in lawyers' and notaries' work.
- June 19 is acting as a community forcing function — firms are preparing questions and peer conversations now revolve around what to ask.
- **Market opportunity**: Regardless of what the SBA publishes on June 19, firms that arrive with a pre-built governance framework are in a materially stronger position than firms that wait for guidance.

---

## Key Regulatory Timeline

| Date | Event | Impact |
|---|---|---|
| September 2023 | nFADP in force | AI processing now directly covered by data protection law |
| March 2025 | Switzerland signs Council of Europe AI Convention | Ratification consultation expected end 2026 |
| August 2026 (expected) | EU AI Act full application | Firms with EU clients must assess their AI tool usage |
| June 19, 2026 | SBA Day of Lawyers — AI focus | First practical SBA AI guidance expected |
| End 2026 (expected) | Swiss Federal Council AI consultation draft | First horizontal Swiss AI regulation consultation |
| December 2026 | nFADP 1-year review milestone | First assessment of AI-specific nFADP interpretation |

---

## Key Compliance Risk Summary

| Risk | Severity | Certainty | Geneva-Specific |
|---|---|---|---|
| Attestation debt — signed without documentation | High | High | Documented in practitioner interviews |
| Attorney-client privilege breach via US-based AI tool | High | High | CLOUD Act explicitly named in C300 |
| nFADP data transfer violation | High | High | SCCs untested for attorney-client data |
| Carrier assessment incompetence | High | High | Bidirectional gap confirmed |
| No "adequate governance" standard | High | High | No Swiss or Geneva definition exists |
| June 19 gap — arriving unprepared | High | Medium | Community event creates peer pressure |
| Client-initiated AI disclosure pressure | Medium | Medium | Emerging lateral exposure |
| EU AI Act extraterritorial reach | Medium | Medium | Depends on EU client exposure |
| Shadow AI inventory gap | Medium | High | 4–8 tools per firm, unevaluated |

---

## The Compliance Gap as Market Opportunity

The Geneva small firm attorney faces a multi-layer compliance challenge:
1. **Swiss professional confidentiality** (Article 321) — perpetual, attorney-centric
2. **nFADP data protection** — revised but AI-implications still untested
3. **PI carrier attestation** — AI questions without substantive evaluation criteria
4. **Bar guidance vacuum** — June 19 event may or may not produce actionable guidance
5. **Attestation debt** — signed but not documented — insurers and firms both exposed
6. **Shadow AI inventory** — multiple ungoverned tools across the firm

**There is no single resource that maps all these layers to the 2–5 attorney practice context in a time-bound, actionable format.** This represents both the most significant market gap and the most significant trust-building opportunity for a provider that can deliver a Geneva-specific, time-sensitive, proportionate solution.
