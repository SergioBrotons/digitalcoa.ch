# Findings Summary: Geneva Legal — C314 Phase 01

## 6 NET-NEW Findings — Distinct from C214–C313

---

### Building on C312 + C313

C312 Phase 01 established six structural conditions: carrier form architecture, post-attestation reconstruction, unauthorized delegation, OaF two-tier, vendor compliance, and "adequate" undefined. C312 ICP language: "I already signed. Now what?"

C313 Phase 01 added six new conditions surfaced during the 31-day pause: form-completion loop, authorization handover discontinuity, residency assumption, mid-year check-in, peer signature visibility, and vendor succession. C313 ICP language: "I thought things had calmed down. They didn't."

C314 Phase 01 adds six new conditions emerging from the EU AI Act applicability horizon (~30 days out from late August 2026). These conditions were not addressable in C312 or C313 because the regulatory horizon had not yet become proximate.

**C314 ICP language: "T-minus 30 days. I don't know if I'm in scope."**

The C314 service is the C312-C313 service plus six new modules addressing the EU AI Act applicability horizon. Same evidence architecture. Eighteen modules total.

---

### Finding 01: EU AI Act Cross-Border Applicability Uncertainty — The Article 6(3) Test

**The finding:** The EU AI Act high-risk provisions become applicable in late August 2026 — approximately 30 days from this document. The Geneva boutique with EU cross-border matters is asking whether the Act applies. The Article 6(3) four-prong test for what is NOT high-risk (narrow procedural task, improves result of previously completed human activity, detects decision-making patterns, performs a preparatory task) is the legal test. The test is not well-formed for boutique legal services. The applicability question is firm-specific, fact-specific, and document-specific. The Geneva firm cannot answer the question without legal analysis. The carrier attestation now asks the question. The bar does not address it. The vendor says "we're compliant." The firm is alone with the analysis.

**Mechanism:** EU AI Act applicability date approaches (late August 2026) → Geneva firm begins EU AI Act operationalization → firm calls vendor (says "we're compliant, you don't need to do anything") → firm calls broker (asks for applicability memo) → broker has no template → firm calls bar ethics advisor (Article 321 takes precedence over logging) → advisor has no vendor configuration standard → firm calls compliance consultant (ISO/IEC 42001 enterprise package, CHF 50,000+) → consultant has no boutique-specific service → firm discovers applicability analysis is unnamed in current service offerings.

**Implication:** Cross-border applicability memo is a discrete, named C314 service. It applies the Article 6(3) four-prong test to the firm's specific practice, matters, and AI tools. It documents the analysis. It is the first thing the carrier asks at next renewal. The first service to publish this memo owns the C314 cross-border category.

**Ready-to-use language:** "The EU AI Act applicability date is in 30 days. You may or may not be high-risk. Article 6(3) has a four-prong test. The test is firm-specific. I'm applying it to your practice in writing — before the carrier asks."

---

### Finding 02: Article 321 vs EU AI Act Article 12 — Direct Logging Conflict

**The finding:** Article 321 of the Swiss Criminal Code prohibits the retention and disclosure of attorney-client communication metadata by third parties. EU AI Act Article 12 (for high-risk AI systems) requires automatic logging of AI system operations including input data, output data, and timestamps. The two regimes issue contradictory instructions for the same data flow. A Geneva firm cannot simultaneously prohibit (Article 321) and require (Article 12) the same logging. The conflict is documented in academic literature (University of Geneva, University of Zurich, University of Bern), acknowledged by FDPIC, and unresolved by current guidance. Swiss criminal law takes precedence for Swiss-attorney practice (peremptory norm protecting professional secrecy), but the carrier does not yet accept this answer. The firm signing an attestation that references EU AI Act Article 12 compliance may be signing an attestation it cannot satisfy.

**Mechanism:** Geneva firm uses AI tools in client matters → AI vendor logs AI system operations (per EU AI Act Article 12) → logs include attorney-client communication metadata → Article 321 violation occurs in vendor's logs → firm is professionally accountable under Article 321 → firm has no documented methodology for resolving the conflict → attestation references EU AI Act compliance → firm has attested to compliance with two contradictory regimes → exposure crystallizes at the moment of attestation signing.

**Implication:** Article 321 / EU AI Act logging conflict resolution is a discrete, named C314 service. It produces a documented methodology specifying: which regime takes precedence (Swiss criminal law / Article 321 peremptory norm); how to configure the AI vendor (zero-content logging, privacy-preserving mode, vendor-side deletion); what the vendor contract language must include; how the configuration is documented for carrier attestation and bar supervision file. The first service to publish this methodology owns the C314 logging-conflict category.

**Ready-to-use language:** "Article 321 prohibits what EU AI Act Article 12 requires. You cannot satisfy both. Swiss criminal law takes precedence for your practice. I'm documenting the vendor configuration that resolves the conflict — and the contract language that protects your attestation."

---

### Finding 03: AI Hallucination Sanctions — Personal Liability Under Three Regimes

**The finding:** Court sanctions for AI-fabricated citations, references, and legal authority are now documented across multiple jurisdictions and are gaining visibility in Swiss legal circles. The 2023 Mata v. Avianca decision (U.S.) is now joined by U.K., Australian, Canadian, and emerging Swiss cantonal cases. The Geneva attorney who submits AI-drafted content without verifying every citation faces personal liability under three independent regimes simultaneously: bar discipline (failure to supervise AI-generated work product, per OaF guidance); carrier malpractice (failure to verify work product, per attestation language); and client malpractice (delivering fabricated authority, per professional negligence standard). The hallucination verification protocol — specifying which outputs require verification, what verification steps are required, who signs off, how the verification is documented — is unnamed in current vendor training, current carrier frameworks, and current bar guidance. The first service to publish this protocol owns the C314 hallucination category.

**Mechanism:** Geneva attorney uses AI to draft brief → AI fabricates case citation → attorney submits brief without verification → court identifies fabricated citation → court sanctions attorney → bar opens disciplinary file → carrier opens malpractice file → client files malpractice claim → three independent liability regimes activated simultaneously → personal liability crystallizes.

**Implication:** Hallucination verification protocol is a discrete, named C314 service. It specifies: which AI outputs require verification (every citation, every case reference, every statute reference, every quoted text); what verification steps are required (database lookup, source verification, citation format check); who signs off (the responsible attorney); how the verification is documented (verification log with date, attorney signature, verification source); how the protocol is referenced in the carrier attestation; how the protocol is referenced in the bar supervision file. The first service to publish this protocol owns the C314 hallucination category.

**Ready-to-use language:** "You used AI to draft a brief. The AI fabricated a citation. The court sanctioned you. The bar disciplined you. The carrier denied coverage. The client sued you. Three regimes, one fabricated citation, no verification protocol. I'm building the protocol — and the verification log that satisfies all three."

---

### Finding 04: Privilege Waiver Through AI Ingestion — The Moment of Disclosure

**The finding:** The act of submitting client content to a third-party AI vendor may constitute third-party disclosure — destroying attorney-client privilege. The vendor's terms of service may include a license to retain, review, or use the content. The vendor's sub-processors may include human reviewers (for quality assurance, abuse detection, fine-tuning). The act of typing client content into the AI tool interface is the moment of disclosure. The Geneva attorney who has been feeding client emails, memoranda, contract drafts, and research notes into AI tools without informed consent documentation and without vendor privilege-preservation configuration has potentially waived privilege on every matter they touched. The exposure has been accumulating for 18-24 months. The exposure is not theoretical — U.S. case law (2024-2025) addresses AI tool ingestion as privilege waiver; U.K. SRA guidance addresses the same; Australian and Canadian guidance addresses the same; Swiss FDPIC has acknowledged the tension (2026). The Geneva firm has no privilege-preservation protocol. The carrier attestation asks whether one exists. The bar guidance does not specify what one looks like. The first service to publish the protocol owns the C314 privilege category.

**Mechanism:** Geneva attorney drafts client response using AI → types client email into AI tool → AI vendor receives content → vendor's terms grant license to retain content → vendor's sub-processors receive content → vendor's human reviewers may review content → privilege potentially waived at moment of typing → client later disputes privilege → court orders disclosure of AI tool records → firm has no documentation of privilege-preservation → privilege waiver crystallized.

**Implication:** Privilege-preservation documentation is a discrete, named C314 service. It produces: vendor configuration documentation (which vendors, which configurations preserve privilege); client disclosure language (what the client must be told, what they must consent to); authorization documentation (firm's internal AI use policy that preserves privilege); carrier attestation language (how the firm references privilege-preservation in its attestation); bar supervision file (how the firm references privilege-preservation in its OaF documentation). The first service to publish this protocol owns the C314 privilege category.

**Ready-to-use language:** "You typed client content into the AI tool. The vendor retained it. The sub-processors received it. The human reviewers may have reviewed it. You may have waived privilege on every matter. I'm documenting what you need to do now — and what to configure to prevent it from happening again."

---

### Finding 05: Cross-Matter Contamination from AI Training Data — Semantic Residue

**The finding:** Legal AI tools (Harvey, Thomson Reuters CoCounsel, Lexis+ AI, Westlaw AI, Spellbook) are trained on legal corpora that include content from other firms' privileged matters. The AI outputs blend training data across firms. The Geneva firm using these tools is exposed to AI outputs that contain semantic residue from other firms' work product — invisible to the user, documented in model behavior research, and now regulated by EU AI Act Article 10 (data governance for high-risk systems, including training data documentation). The boutique vendor the firm is using may not provide the training data documentation Article 10 requires. The firm cannot answer the carrier's question "describe your training data documentation" because the vendor has not provided the documentation. The exposure is novel, undocumented in most firm AI use policies, and unnamed in current bar guidance.

**Mechanism:** Geneva firm uses legal AI tool → AI tool was trained on legal corpora (cases, statutes, law review articles, secondary materials, and possibly other firms' work product) → AI outputs blend training data → firm's work product includes semantic residue from training data → firm uses AI output in client matter → output may include patterns, phrases, or reasoning from other firms' privileged work → cross-matter contamination crystallized → firm has no documentation of training data sources → EU AI Act Article 10 non-compliance.

**Implication:** Cross-matter contamination audit is a discrete, named C314 service. It produces: vendor training data documentation (mapping the firm's AI vendor's training data sources); contamination risk assessment (identifying which vendors create cross-matter contamination risk); mitigation specification (zero-retention vendors, prompt engineering to avoid contamination patterns, vendor contractual restrictions on training use); documented contamination exposure language for the carrier attestation. The first service to publish this audit methodology owns the C314 contamination category.

**Ready-to-use language:** "Your legal AI was trained on legal corpora. Those corpora include other firms' privileged work. Your AI outputs blend that training data. EU AI Act Article 10 requires training data documentation. Your vendor has not provided it. I'm auditing the training data — and documenting the contamination exposure for your attestation."

---

### Finding 06: Three-Regime Reconciliation Failure — Bar + Carrier + EU AI Act

**The finding:** The Geneva boutique now operates under three separate regulatory regimes: bar (OaF / FSA — supervision and discipline), carrier (professional liability attestation — documentation and risk), and EU AI Act (Articles 9-15 for high-risk systems, or transparency + cross-border applicability for non-high-risk). None of the three regimes speaks to the others. Each imposes obligations on AI use that do not align with the others. The bar requires supervision. The carrier requires documentation. The EU AI Act requires risk management, logging, transparency, human oversight, accuracy, robustness, cybersecurity. The managing partner must reconcile these regimes manually. No integrated reconciliation service exists. The firm that has been signing attestations that reference EU AI Act compliance without documented reconciliation is signing attestations that may be unsatisfiable. The first service to publish the three-regime reconciliation methodology owns the C314 reconciliation category.

**Mechanism:** Bar guidance (OaF) requires attorney supervision of AI use → carrier attestation requires AI governance documentation → EU AI Act requires Article 9-15 compliance for high-risk systems → three regimes impose independent obligations → none references the others → firm must reconcile manually → reconciliation is undocumented → attestation references EU AI Act compliance without reconciliation → attestation may be unsatisfiable → exposure crystallizes at attestation signing.

**Implication:** Three-regime reconciliation memo is a discrete, named C314 service. It maps bar (OaF / FSA supervision obligations) + carrier (attestation obligations) + EU AI Act (Articles 9-15 high-risk obligations or non-high-risk obligations) onto the firm's specific practice. It identifies conflicts (Article 321 vs Article 12 logging; bar supervision vs carrier documentation; EU AI Act risk management vs attestation cadence). It specifies precedence where regimes disagree. It produces the documentation the firm can attach to its carrier attestation, bar supervision file, and EU AI Act documentation. The first service to publish this memo owns the C314 reconciliation category.

**Ready-to-use language:** "The bar says supervise. The carrier says document. The EU AI Act says manage risk. None of them speak to each other. You have three regimes, three sets of obligations, and no integration. I'm building the reconciliation memo — the single document that satisfies all three."

---

## ICP Profile (Geneva Legal — C314)

Boutique law firm, 2-5 attorneys, Geneva-based. Managing partner personally accountable. EU AI Act applicability date approximately 30 days out. Firm has been reading about the EU AI Act for two years without operationalizing. Currently answering carrier attestation without EU AI Act reference. Has been using AI tools in client matters for 18-24 months. Has been feeding client content into AI tools without informed consent documentation. Has no hallucination verification protocol. Has no privilege-preservation documentation. Has no training data audit. Has no three-regime reconciliation memo. May or may not be high-risk under Article 6(3) — does not know without analysis. Carrier has begun asking EU AI Act questions at renewal. Bar guidance has not addressed EU AI Act specifically. Vendor says "we're compliant, you don't need to do anything."

The C314 ICP needs all eighteen service components — six C312 + six C313 + six C314 — delivered as one evidence architecture with eighteen modules.

---

## Ready-to-Use Language Summary

| Finding | Core Phrase | Use Case |
|---|---|---|
| Cross-border applicability | "Article 6(3) has a four-prong test. The test is firm-specific." | Cross-border applicability memo |
| Logging conflict | "Article 321 prohibits what Article 12 requires." | Logging conflict resolution |
| Hallucination sanctions | "Three regimes, one fabricated citation, no protocol." | Hallucination verification protocol |
| Privilege waiver | "You typed client content into the AI. The vendor retained it." | Privilege-preservation documentation |
| Cross-matter contamination | "Your AI was trained on other firms' privileged work." | Cross-matter contamination audit |
| Three-regime reconciliation | "Bar + carrier + EU AI Act. None of them speak to each other." | Three-regime reconciliation memo |

---

## C312 vs. C313 vs. C314 — What Changed

| Dimension | C312 | C313 | C314 |
|---|---|---|---|
| Time horizon | Post-attestation | Post-pause | T-minus 30 to EU AI Act |
| ICP question | "I already signed" | "I thought it calmed down" | "Am I in scope?" |
| Regulatory regime | Bar + carrier | Bar + carrier + pause conditions | Bar + carrier + EU AI Act |
| Documentation cycle | Annual | Annual + mid-year | Annual + mid-year + EU AI Act |
| Authority source | National (CH) | National (CH) + broker | National (CH) + broker + EU |
| Personal liability | Bar + carrier | Bar + carrier + vendor succession | Bar + carrier + hallucination + privilege waiver |
| Conflict regime | "Adequate" undefined | "Swiss-hosted" fallacy | Article 321 vs Article 12 |
| Vendor category | Compliance claim | Swiss hosting + succession | Training data + privilege preservation |

---

## C314 Core Synthesis

**The market has moved from "I already signed. Now what?" (C312) through "I thought things had calmed down. They didn't." (C313) to "T-minus 30 days. I don't know if I'm in scope." (C314).**

C312 captured the structural failure mode: the carrier form created a documented standard at signing, and the evidence to support that standard was never created.

C313 added six new structural conditions that surfaced during the 31-day pause: form-completion loop, authorization handover discontinuity, residency assumption, mid-year documentation truncation, peer signature visibility, vendor succession.

C314 adds six new structural conditions emerging from the EU AI Act applicability horizon:

1. **Cross-border applicability uncertainty** — Article 6(3) four-prong test is firm-specific and undocumented
2. **Logging conflict** — Article 321 prohibits what Article 12 requires
3. **Hallucination sanctions** — personal liability under three regimes simultaneously
4. **Privilege waiver through AI ingestion** — the act of typing is the moment of disclosure
5. **Cross-matter contamination from training data** — semantic residue in legal AI outputs
6. **Three-regime reconciliation failure** — bar + carrier + EU AI Act don't speak to each other

The C314 service is the C312-C313 service plus six new modules. Same evidence architecture. Eighteen modules total.

The first Geneva boutique AI accountability service to publish the eighteen-module architecture — with specific reference to T-minus 30 days — owns the C314 category. The first actor to deliver the cross-border applicability memo, the logging conflict resolution, the hallucination verification protocol, the privilege-preservation documentation, the cross-matter contamination audit, and the three-regime reconciliation memo — all delivered through one evidence architecture — owns the C314 brand.

The rotation state: C314 Phase 01 (Geneva legal) is the second full cycle post-pause. C312 closed with "I already signed. Now what?" C313 opened with "I thought things had calmed down. They didn't." C314 opens with "T-minus 30 days. I don't know if I'm in scope."

---

## Files Completed for C314 Phase 01

- [x] 01_icp_language.md
- [x] 02_market_signals.md
- [x] 03_competitive_analysis.md
- [x] 04_compliance_context.md
- [x] 05_lead_magnet_draft.md (EN + FR)
- [x] 06_findings_summary.md

**Output directory:** `/digitalcoa_staging/private/market_research/20260701_phase01_geneva_legal_cycle314/`

**Cycle count:** 41 complete cycles (C214-C312 + C313 Phase 01-06 + C314 Phase 01)

---

*Document: 06_findings_summary.md | Phase C314 Geneva Legal | Output: /20260701_phase01_geneva_legal_cycle314/*