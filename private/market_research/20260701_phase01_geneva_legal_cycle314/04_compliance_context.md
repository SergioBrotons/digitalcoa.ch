# Compliance Context: Geneva Legal — C314 Phase 01

## Geneva / Switzerland Specific Regulatory (T-Minus 30 Days to EU AI Act Applicability, July 2026)

---

## Regulatory Architecture (C314)

The C314 Geneva legal AI regulatory architecture consists of three regimes that must be reconciled:

1. **Swiss national and cantonal regime** — Article 321 Swiss Criminal Code (professional secrecy / attorney-client privilege); nFADP (new Federal Act on Data Protection, revised 2023); OaF (Ordre des avocats de Genève) AI guidance; FSA cantonal directives; FDPIC guidance on AI

2. **Carrier regime** — Professional liability insurance attestation requirements (Swiss Re, Zurich Insurance, Allianz, Generali, AXA, etc.)

3. **EU AI Act regime** — Regulation (EU) 2024/1689, with high-risk applicability provisions operative approximately late August 2026

Each regime imposes obligations independently. None speaks to the others. The Geneva boutique must reconcile them manually — and the reconciliation is unnamed in current services.

---

## Regime 1: Swiss National and Cantonal Regime

### Article 321 Swiss Criminal Code (Professional Secrecy)

**Text (relevant provision):**
> "Les avocats, défenseurs, notaires, réviseurs ... qui auront révélé un secret à eux confié en raison de leur profession ou du mandat qui leur a été confié ... seront punis d'une peine privative de liberté ..."

**Translation:** Attorneys, advocates, notaries, auditors who reveal a secret confided to them by reason of their profession or the mandate entrusted to them shall be punished by a custodial sentence.

**AI implications (C314):**

1. **Disclosure to AI vendor as potential violation.** Submitting client content to a third-party AI vendor constitutes disclosure to a third party. If the disclosure is unauthorized by the client, it may constitute Article 321 violation. Even if the client has consented, the consent must be informed (the client must understand what they are consenting to). The C314 ICP who has been feeding client content into AI tools without informed consent documentation has been operating in Article 321 violation territory.

2. **AI vendor sub-processors as potential violation.** The AI vendor's sub-processors (logging, telemetry, authentication, monitoring) may receive client content. Each sub-processor receiving the content is a third-party disclosure. The firm must ensure all sub-processors are documented and that the vendor's processing is consistent with Article 321.

3. **Vendor human reviewers as potential violation.** Some AI vendors include human reviewers (for abuse detection, fine-tuning, quality assurance). If the firm's client content is reviewed by a vendor employee, that is a third-party disclosure. The vendor configuration must exclude human review of client content.

4. **Logging prohibition for attorney-client communications.** Article 321 prohibits the retention of attorney-client communication metadata by third parties. AI vendor logs that retain query content, timestamps, user identifiers, or query classifications constitute Article 321 violation. The vendor's logging configuration must be Article 321-compliant.

5. **Vendor succession as Article 321 exposure.** When the AI vendor goes bankrupt, gets acquired, or terminates service, the client matter data transfers with the asset sale. The new controller did not inherit the firm's Article 321 obligations. The firm remains accountable under Article 321. This exposure is documented (see C313 Finding 06) and is reinforced in C314 by the privilege-preservation documentation requirement.

### nFADP (New Federal Act on Data Protection, revised 2023)

**Key provisions:**
- Article 5 (lawfulness of processing) — processing requires lawful basis
- Article 6 (good faith and proportionality) — processing must be good-faith and proportionate
- Article 7 (transparency) — data subject must be informed about processing
- Article 8 (purpose limitation) — processing limited to stated purpose
- Article 9 (accuracy) — data must be accurate
- Article 16 (data security) — appropriate technical and organizational measures
- Article 25 (data protection by design and by default)
- Article 52 (sensitive personal data — including professional secrets)

**AI implications (C314):**

1. **Sensitive personal data processing.** Attorney-client communications contain sensitive personal data. AI processing of this data triggers Article 52 heightened obligations.

2. **Transparency to clients.** Clients must be informed about AI use in their matters. The disclosure must be specific (which AI tool, what processing, what data flows). Generic AI use policy is insufficient.

3. **Data subject rights.** Clients retain rights of access, rectification, erasure. The AI vendor's ability to honor these rights depends on its logging configuration and retention policy.

4. **Cross-border data transfer.** Transfer of client data outside Switzerland requires adequate protection or Standard Contractual Clauses. The AI vendor's sub-processor chain must be analyzed for cross-border data flows. CLOUD Act exposure (for U.S.-parented vendors) is a documented concern.

5. **Data protection by design.** The AI vendor must implement data protection by design. The Geneva firm must verify this through vendor documentation review.

### OaF (Ordre des avocats de Genève) AI Guidance

**Key publications (2024-2026):**
- OaF AI guidance (2024) — general principles for AI use in legal practice
- OaF supervision guidance (2025) — attorney's duty to supervise AI-generated work product
- OaF AI use disclosure (2026) — when and how to disclose AI use to clients and courts

**C314 specific implications:**

1. **Supervision obligation.** The attorney must supervise AI-generated work product. The supervision obligation is personal — it cannot be delegated to the AI vendor. The C314 ICP who has not implemented hallucination verification protocol has been operating below OaF supervision standard.

2. **Disclosure obligation.** AI use in client matters must be disclosed. Generic firm-wide AI policy is insufficient. Matter-specific disclosure may be required when AI use is material to the matter.

3. **Court disclosure obligation.** AI use in court submissions may require disclosure to the court. The OaF has not specified whether AI use must be disclosed in every filing or only when the AI's role is material. The C314 ICP faces this ambiguity.

### FSA (Fédération Suisse des Avocats) Cantonal Directives

**Key elements:**
- Cantonal bar AI guidance (varies by canton)
- Disciplinary framework for AI-related violations
- Continuing legal education requirements for AI competence

**C314 specific implications:**

1. **Cantonal variation.** Geneva bar directives may differ from Vaud, Zurich, or other cantons. The Geneva boutique must follow Geneva-specific directives, which may be more or less prescriptive than other cantons.

2. **Continuing legal education.** Some cantonal bars require AI competence hours. The Geneva boutique managing partner must track AI-related CLE and document it.

3. **Disciplinary exposure.** Cantonal bar discipline for AI violations is now documented. The Geneva boutique's exposure includes bar discipline in addition to carrier malpractice and client malpractice.

### FDPIC (Federal Data Protection and Information Commissioner) Guidance

**Key publications (2024-2026):**
- FDPIC AI guidance (2024) — general principles
- FDPIC guidance on AI vendors and data protection (2025)
- FDPIC preliminary guidance on AI tool ingestion and professional secrecy (2026)

**C314 specific implications:**

1. **Vendor processing documentation.** FDPIC requires documented vendor processing. The Geneva boutique's vendor processing documentation must be current and complete.

2. **AI tool ingestion and professional secrecy.** FDPIC has acknowledged the tension between AI tool ingestion and professional secrecy. The FDPIC has not yet resolved the conflict. The Geneva boutique operates in unresolved territory.

3. **Cross-border data transfer.** FDPIC monitors cross-border data transfers. The Geneva boutique's AI vendor cross-border data flows (through sub-processors, parent company infrastructure) are within FDPIC scope.

---

## Regime 2: Carrier Regime (Professional Liability Insurance)

### Carrier Attestation Architecture (Swiss Market)

**Major carriers serving Geneva law firms:**
- Swiss Re (corporate)
- Zurich Insurance
- Allianz
- Generali
- AXA
- Bâloise
- Helvetia
- Mobilière

**Attestation structure (typical 2026):**
- Annual AI governance attestation
- Mid-year check-in (added in 2024-2025)
- Ad hoc inquiries (e.g., post-incident, post-vendor-change)
- Renewal attestation (separate from annual)

**C314 attestation categories that touch the EU AI Act:**
- "Describe your firm's compliance with applicable AI regulations"
- "List your firm's AI tools and their regulatory classifications"
- "Describe your firm's process for AI hallucination verification"
- "Describe your firm's process for AI vendor privilege-preservation"
- "Describe your firm's training data documentation for AI tools"

**Carrier's emerging position on EU AI Act:**
- Carriers are beginning to ask whether the firm has assessed EU AI Act applicability
- Carriers are asking whether the firm has reconciled Article 321 with EU AI Act logging requirements
- Carriers are asking about hallucination verification protocols
- Carriers are asking about privilege-preservation through AI ingestion

**Implication:** The carrier attestation is becoming the integrating mechanism across the three regimes. The firm that answers "yes" to the EU AI Act applicability question with documented analysis (bar + carrier + EU AI Act) satisfies the carrier. The firm that answers "I don't know" or "I'm not in scope" without documented analysis creates exposure at next renewal.

---

## Regime 3: EU AI Act Regime

### Regulation (EU) 2024/1689 — High-Risk AI Systems

**Applicability date:** Approximately late August 2026 for high-risk AI system provisions (Article 6 classification and Articles 8-15 obligations for high-risk systems).

**Key provisions for legal services:**

**Article 6 — High-Risk Classification**
- Paragraph 1: AI systems listed in Annex III are high-risk
- Paragraph 2: AI systems listed in Annex I are high-risk (safety components of regulated products)
- Paragraph 3: AI systems not listed in Annex III may still be high-risk if they (a) are intended to be used as safety components, OR (b) their profile/characteristics suggest they may pose risk to health, safety, or fundamental rights
- Article 6(3) includes a carve-out: AI systems not listed in Annex III are not high-risk if they (i) perform a narrow procedural task, (ii) improve the result of a previously completed human activity, (iii) detect decision-making patterns without replacing human judgment, or (iv) perform a preparatory task

**Implications for legal services:**
- AI tools used for legal research may fall under Article 6(3)(iv) — preparatory task — and not be high-risk
- AI tools used for automated contract drafting may fall under Article 6(3)(ii) — improving a previously completed human activity — and not be high-risk
- AI tools used for outcome prediction (e.g., case outcome prediction, sentencing prediction) may be high-risk under Article 6(3)(b) — profile suggests risk to fundamental rights
- AI tools used for legal aid allocation or judicial administration may be high-risk under Annex III

**The applicability test for the Geneva boutique:**
- Does the firm's AI use perform a narrow procedural task? (likely yes — research, drafting assistance)
- Does it improve the result of a previously completed human activity? (likely yes — drafting assistance)
- Does it detect decision-making patterns? (possible — some legal AI tools)
- Does it perform a preparatory task? (likely yes — research, analysis)

If any of these four conditions applies, the firm's AI tool may NOT be high-risk under Article 6(3). The analysis is fact-specific.

**However:** The EU AI Act still applies to non-high-risk AI systems under other provisions (transparency, classification, market surveillance). The Geneva boutique cannot assume "I'm not high-risk, so the EU AI Act doesn't apply."

**Articles 8-15 — High-Risk AI System Obligations (if applicable):**

**Article 9 — Risk Management System**
- Continuous risk management throughout AI system lifecycle
- Documented risk assessment and mitigation

**Article 10 — Data Governance**
- Training, validation, and testing data must be relevant, sufficiently representative, and free of errors
- Data governance practices must address biases, privacy, and data quality

**Article 11 — Technical Documentation**
- Documented technical documentation demonstrating compliance

**Article 12 — Record-Keeping (Logging)**
- Automatic logging of AI system operations
- Logs must enable traceability of system functioning
- Logs must be retained for appropriate period

**Article 13 — Transparency**
- Information to deployers about system capabilities, limitations, and foreseeable misuse
- Clear instructions for use

**Article 14 — Human Oversight**
- Effective human oversight during AI system use
- Oversight measures proportionate to risks

**Article 15 — Accuracy, Robustness, Cybersecurity**
- Appropriate levels of accuracy
- Robustness against errors and attacks
- Cybersecurity measures

**Article 16-29 — Provider, Deployer, Importer, Distributor Obligations**
- Provider obligations (developing the AI system)
- Deployer obligations (using the AI system)
- Importer obligations (placing non-EU AI systems on EU market)
- Distributor obligations (making AI systems available on EU market)

**Article 50 — Transparency for AI Systems Interacting with Natural Persons**
- Users must be informed they are interacting with AI (where applicable)
- Applies to chatbot, voice assistant, etc.

**Penalties:**
- Up to EUR 35 million or 7% of global annual turnover for prohibited practices
- Up to EUR 15 million or 3% for non-compliance with high-risk obligations
- Up to EUR 7.5 million or 1% for providing incorrect information

**Territorial scope (Article 2):**
- Providers placing AI systems on EU market
- Deployers of AI systems located in EU
- Providers and deployers outside EU if output is used in EU

**Implication for Geneva boutique:**
- The Geneva boutique is NOT in EU. However, if the firm's AI tool output is used in EU (e.g., contract drafted for French client), the firm may be a deployer under Article 2.
- The AI tool vendor (likely U.S.-based) may be a provider placing the AI system on EU market — triggering provider obligations that affect the Geneva boutique through the vendor's terms.

---

## Three-Regime Reconciliation (C314 Service Module)

The reconciliation memo addresses the following conflicts:

### Conflict 01: Article 321 vs EU AI Act Article 12 Logging

**Article 321:** Prohibits retention of attorney-client communication metadata by third parties.

**EU AI Act Article 12:** Requires automatic logging of AI system operations.

**Resolution methodology:**
1. For high-risk AI systems used in legal services, configure logging to exclude attorney-client communication content while logging operational metadata (timestamps, user IDs, system events)
2. Use zero-content logging configurations where available
3. Document the configuration in the carrier attestation and bar supervision file
4. Where configuration is not possible, argue Swiss criminal law precedence (Article 321 is a peremptory norm protecting professional secrecy)

### Conflict 02: EU AI Act Article 10 Training Data vs Article 321 Vendor Confidentiality

**Article 321:** Prohibits disclosure of client content to third parties, including AI training.

**EU AI Act Article 10:** Requires training data governance documentation.

**Resolution methodology:**
1. Configure AI vendor with zero-retention and no-training-on-customer-data option
2. Document vendor configuration in vendor compliance file
3. For vendors that train on customer data, switch to vendors that do not (or configure exclusion)
4. Where no alternative vendor exists, document the exposure in the carrier attestation

### Conflict 03: EU AI Act Article 14 Human Oversight vs OaF Supervision

**EU AI Act Article 14:** Effective human oversight during AI system use.

**OaF supervision:** Attorney's duty to supervise AI-generated work product.

**Resolution methodology:**
1. Document the firm's human oversight protocol (who reviews AI output, how, when)
2. Document the supervision protocol in the OaF compliance file
3. Cross-reference the human oversight protocol in the EU AI Act documentation
4. The two regimes align in principle — OaF supervision is the implementation of Article 14 human oversight

### Conflict 04: Carrier Attestation vs EU AI Act Risk Management

**Carrier attestation:** Asks specific questions about AI governance.

**EU AI Act Article 9:** Requires continuous risk management.

**Resolution methodology:**
1. Use the carrier attestation as the documented evidence of Article 9 risk management implementation
2. Map each attestation question to the corresponding Article 9 risk management component
3. Maintain the attestation currency as the Article 9 documentation currency

---

## Compliance Documentation Architecture (C314)

The Geneva boutique's compliance documentation should include:

1. **Bar supervision file** — OaF / FSA compliance documentation
2. **Carrier attestation** — annual + mid-year attestation cycle
3. **EU AI Act applicability memo** — Article 6(3) analysis specific to the firm's practice
4. **Three-regime reconciliation memo** — bar + carrier + EU AI Act reconciliation
5. **Logging conflict resolution documentation** — Article 321 vs Article 12 configuration
6. **Hallucination verification protocol** — Article 14 + OaF supervision alignment
7. **Privilege-preservation documentation** — Article 321 + nFADP Article 52 alignment
8. **Cross-matter contamination audit** — EU AI Act Article 10 + Article 321 alignment
9. **Authorization documentation** — refresh at personnel change cadence
10. **Vendor succession terms** — pre-vendor-selection + mid-vendor-relationship + post-vendor-exit

These ten documentation components form the C314 evidence architecture. The C314 DigitalCoa service produces each component as a discrete, named module.

---

## Regulatory Calendar (T-Minus 30 Days)

**Late August 2026 (T-day):**
- EU AI Act high-risk provisions become applicable
- Article 9-15 obligations for high-risk AI systems become operative
- Penalties for non-compliance become enforceable

**T-30 to T-day (current window):**
- Geneva boutiques have approximately 30 days to operationalize
- Carrier attestation cycle may trigger before T-day (mid-year check-in cadence)
- Bar supervision file may trigger before T-day (OaF annual review)
- FDPIC guidance may update before T-day

**T-day to T+90:**
- EU AI Act market surveillance begins
- First enforcement actions likely against providers (not deployers)
- Deployer obligations (Geneva boutique) come under increasing scrutiny

**T+90 to T+180:**
- Deployer enforcement actions begin
- Carrier attestation cycle incorporating EU AI Act compliance evidence
- Bar discipline cases incorporating EU AI Act obligations

**Implication:** The Geneva boutique has a 30-day window to operationalize. The first mover publishes the C314 six-module architecture before T-day. The window closes in 30 days.

---

## Compliance Asymmetry (C314)

The compliance market has oversaturated systematization (frameworks, policies, controls) and undersaturated accountability (evidence, transaction logs, named document trails).

**Systematization offerings:**
- ISO/IEC 42001 implementation
- NIST AI RMF implementation
- Vendor compliance packages
- Bar guidance templates
- Carrier frameworks

**Accountability offerings (undersaturated):**
- EU AI Act applicability memo for Geneva boutique (specific to Article 6(3) test)
- Article 321 vs Article 12 logging conflict resolution
- Hallucination verification protocol (named, documentable)
- Privilege-preservation documentation
- Cross-matter contamination audit
- Three-regime reconciliation memo

The C314 DigitalCoa service is the accountability layer for the EU AI Act applicability horizon. The first mover publishes the six-module architecture and owns the C314 category.

---

*— Geneva Legal compliance context, C314 Phase 01, 2026-07-01*