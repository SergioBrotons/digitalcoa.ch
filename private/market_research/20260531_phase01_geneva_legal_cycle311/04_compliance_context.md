# 04 — Compliance Context: Switzerland / Geneva Regulatory Environment

**Phase:** C311 Phase 01 | **ICP:** Geneva Boutique, 2–5 Attorneys | **Date:** 2026-05-31

---

## Switzerland's Regulatory Architecture for AI in Professional Services

### Layer 1: Federal AI Strategy (Digitalswitzerland / Fedpol)

Switzerland does not have a standalone AI law equivalent to the EU AI Act. The federal approach has been:
- Principled rather than prescriptive
- Ecosystem-oriented rather than compliance-oriented
- Focused on positioning Switzerland as an AI-friendly jurisdiction

**The implication for Geneva law firms:** There is no federal mandate requiring law firms to document AI use. The obligation comes from elsewhere — primarily from carriers and bar associations.

---

### Layer 2: The OaF (Ordre des Avocats de Genève) — The Guidance Vacuum

The Ordre des Avocats de Genève is the Geneva bar association. It regulates professional conduct for attorneys in the canton of Geneva.

**Current state (Q2 2026):**
- No formal AI governance guidance has been issued
- A voluntary survey was circulated in mid-2025 regarding AI tool usage among members
- No mandatory disclosure requirements
- No standards for AI use in client matters
- No ethics opinions addressing AI-assisted legal work

**The vacuum is not benign:** The OaF is building a knowledge base (via the survey) that will form the basis of future guidance. The firms that participated in the survey are visible to the bar. The firms that did not are not. When guidance eventually comes, the OaF will know who prepared and who did not.

**For the ICP:** The OaF guidance is the most important single regulatory event that will shape AI governance requirements for Geneva law firms. It is coming. The question is when — and whether the firm's documentation will be ready when it arrives.

---

### Layer 3: The Carrier Attestation as de Facto Regulatory Instrument

Switzerland's professional liability insurance market for law firms is competitive but carrier-specific. Each carrier has its own form. There is no standardized bar-approved AI attestation.

**What carriers are doing (Q2 2026):**
- Adding AI-related questions to renewal forms
- Shifting from binary yes/no to descriptive responses
- Using answers to underwrite risk and set premiums
- Sharing attestation responses with reinsurers

**The critical dynamic:** The carrier attestation has become the most consequential regulatory instrument in the Geneva boutique AI governance space — not because it is law, but because it directly affects cost (premiums), coverage (policy terms), and personal liability (individual signature on the form).

**The structural problem:** Each carrier uses different language, different definitions, different scopes. A firm that completed one carrier's attestation may not satisfy another's requirements. There is no harmonized standard.

---

### Layer 4: Attorney-Client Privilege in the AI Context

Swiss attorney-client privilege is governed by:
- Article 321 Swiss Criminal Code (professional secrecy)
- Cantonal rules (Geneva: RPC/Code de procédure civile)
- Federal Attorney Privilege (in specific contexts)

**The AI-specific privilege question:**
When an attorney uses an AI tool to assist with a matter, several privilege questions arise:

1. **Data to third party:** Does using ChatGPT or Claude mean client data is transmitted to a US server? If yes — is this a breach of privilege? The answer depends on the tool, the model, the data classification, and the client's instructions. No Geneva bar guidance exists on this question.

2. **Work product:** If an AI tool generates a draft — is that draft covered by work product protection? If the AI tool retains the input for model training — is privilege waived?

3. **Documentation:** Can the firm demonstrate which AI tools were used, on which matters, with which data? If the firm cannot — can they assert privilege over work they cannot describe?

**The practical exposure:** The Geneva boutique that uses AI without a documented protocol is not just exposed on the carrier attestation — it may be exposed on the privilege question as well. These are two separate liability vectors that happen to converge in the same gap: no documentation of AI use.

---

### Layer 5: Swiss Data Protection (nDSG / Revised FADP)

The revised Federal Act on Data Protection (nDSG) entered into force on 1 September 2023, with a two-year transition period ending 1 September 2025.

**Relevance to Geneva law firms using AI:**
- Article 6: Lawfulness of processing (consent, contract, legal obligation, vital interest, public task, legitimate interest)
- Article 9: Processing of special categories (including attorney-client communications)
- Article 28: Data breach notification obligations
- Article 30+: Data protection impact assessment requirements for high-risk processing

**The AI-specific question:** Using an AI tool that processes client data likely requires:
- A data processing agreement with the AI vendor
- A documented legal basis for processing
- A DPIA if the processing is high-risk

**The boutique reality:** A 3-attorney Geneva firm is unlikely to have:
- Data processing agreements with AI vendors
- Documented legal basis analysis for AI use
- A DPIA for AI processing

**The intersection with carrier attestation:** The carrier form asks about AI governance. The nDSG requires data protection compliance. The documentation gap is the same. A firm that can demonstrate AI governance compliance to the carrier is also demonstrating nDSG compliance. These are not separate workstreams — they are one documentation system.

---

### Layer 6: The Personal Liability Stack

The Geneva managing partner who signed the carrier attestation in their own name has the following liability vectors:

| Vector | Source | Exposure Type |
|--------|--------|---------------|
| Carrier attestation | Signed form | Personal liability on the form |
| Professional liability insurance | Policy terms | Coverage for AI-related claims depends on documentation |
| OaF professional rules | Future bar guidance | Disciplinary exposure if guidance is violated |
| nDSG compliance | Data processing | Fines, breach notification, civil liability |
| Attorney-client privilege | 321 StGB / cantonal rules | Waiver, breach, malpractice |

**The critical insight:** These vectors are not independent. A malpractice claim arising from an AI-assisted error triggers: the carrier (attestation), the insurance (coverage), the bar (guidance violation), the privilege (waiver). The documentation gap is the common denominator across all of them.

---

## Geneva-Specific Institutional Landscape

| Institution | Role | Current State |
|-------------|------|---------------|
| OaF (Ordre des Avocats de Genève) | Geneva bar, regulation | Survey in progress, no guidance issued |
| SAV (Schweizerische Anwaltsverband) | Swiss Bar Association, national | No AI governance guidance |
| FINMA | Financial market regulator | Relevant for certain firm types (Berner Oberland context) | 
| Carriers (Helsana,Generali, Axa, others) | Professional liability insurers | AI attestation questions added to renewal forms, varying by carrier |
| Swiss Federal Institute of Technology (ETH Zurich) | AI policy research | Provides thought leadership, not regulatory |
| Digitalswitzerland | Industry coalition | AI strategy advocacy, not law |
| SWITCH | Swiss research network | Handles .ch domain, not AI governance |

---

## The Compliance Gap: What Exists vs. What the ICP Needs

**What exists:**
- EU AI Act (not applicable in Switzerland directly, but influential)
- nDSG (data protection — general, not AI-specific)
- OaF survey (data collection, no guidance yet)

**What the ICP needs:**
- Geneva-specific AI governance requirements for small law firms
- OaF endorsement of a documentation standard
- Carrier-harmonized attestation language
- A clear definition of "adequate" for a 3-attorney firm

**The gap:** Switzerland's regulatory environment is intentionally principles-based and market-driven. The OaF is building toward guidance but has not issued it. Carriers are acting unilaterally. The Geneva boutique has no authoritative source to consult — which means they are all waiting, and none of them are preparing.

---

## NET-NEW Compliance Findings for C311

1. **OaF survey = future guidance foundation:** Participation gap creates a two-tier visibility structure; when guidance comes, the bar will know who is prepared and who is not
2. **nDSG and carrier attestation converge:** The documentation gap required for nDSG compliance is identical to the documentation gap required for carrier attestation compliance — one system satisfies both
3. **Privilege question unaddressed:** Attorney-client privilege implications of AI tool usage (data to US servers, work product protection, model training) have zero Geneva bar guidance — a liability time bomb
4. **Carrier fragmentation:** Each carrier uses different AI attestation language; no harmonized standard exists for Geneva boutiques
5. **Personal liability stack:** The managing partner's individual signature creates exposure across carrier attestation, bar rules (future), nDSG, and privilege — the documentation system is the common denominator
6. **Regulatory vacuum as permission structure:** The absence of mandatory requirements is being interpreted by firms as "no urgency" — when the OaF guidance arrives, retroactive compliance will be vastly more expensive than proactive compliance

---

*Document: 04_compliance_context.md | Phase C311 Geneva Legal | Output: /20260531_phase01_geneva_legal_cycle311/*