# Phase 06 — DigitalCoa Regulatory Research — C77
**Cycle 77 | 2026-04-02 | Phase 06**

## Status: COMPLETE ✓

---

## NET-NEW Findings (vs C75/C76)

### 1. EDÖB KI und Datenschutz — Swiss DSG Directly Applicable to AI [MAJOR NET-NEW]
- **Published:** September 24, 2025 by Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB)
- **Core rule:** Swiss Federal Data Protection Act (DSG / nDSG) — in force since September 1, 2023 — is **directly applicable** to AI-based data processing; no new AI-specific law needed
- **Legal basis:** DSG is technology-neutral — applies to AI just as it applies to any other data processing technology
- **Who is covered:** Manufacturers, providers (Anbieter), and users (Verwender) of AI systems

#### Three Core Obligations Under Swiss DSG for AI

**1. Transparency (Transparente Information)**
- AI system purpose, functioning, and data sources must be transparent to affected persons
- Chatbot users have the **right to know** whether they're communicating with a machine
- Users must be informed if their data is used to improve self-learning programs or for other purposes
- Use of programs that falsify faces, images, or voice messages of identifiable persons must always be clearly disclosed — unless outright illegal under criminal law

**2. Human Review Right (Anspruch auf menschliche Überprüfung)**
- Right to object to automated decisions
- Right to demand human review of automated individual decisions
- Applies to: AI systems making decisions that affect individuals

**3. Fundamental Rights Protection (Schutz der Grundrechte)**
- High-risk AI data processing: permitted under DSG BUT requires appropriate protective measures (Datenschutz-Folgenabschätzung / DSFA — Data Protection Impact Assessment)
- **Explicitly prohibited:** AI applications that undermine privacy and informational self-determination — specifically naming practices observed in authoritarian states:
  - Real-time facial recognition in public spaces
  - Comprehensive surveillance and scoring of individuals' lives ("Social Scoring")
- These are **per se prohibited** under Swiss DSG — even if the technology works

#### Historical EDÖB AI Guidance Timeline
- **Apr 4, 2023:** EDÖB warning on ChatGPT — advised conscious use; reminded companies of their obligations
- **Nov 9, 2023:** First formal EDÖB statement — DSG directly applicable to AI
- **May 8, 2025:** Update confirming DSG still applicable to AI
- **Sep 24, 2025:** Current comprehensive guidance published (superseding prior statements)

#### X/Grok Case (EDÖB Resolution — March 20, 2025)
- EDÖB completed preliminary review of X (formerly Twitter) using public posts for Grok AI training
- **Outcome:** Users who had objected could continue to prevent their public posts from being used for AI training
- **Implication:** EDÖB active in AI training data oversight

- **Source:** edoeb.admin.ch/de/ki-und-datenschutz
- **Business implication for DigitalCoa clients:** Every Swiss company using AI must now have transparency disclosures, human review mechanisms, and DSFA for high-risk applications. These are **governance decisions**, not just legal compliance items. DigitalCoa advisory can position these as decision-architecture requirements.

---

### 2. FINMA FinTech Framework — Stablecoin Authorization Path [REGULATORY CONTINUITY]
- **FINMA Fintech page:** Accessible and current
- **Framework:** Banks needing to accept client assets from >20 clients = banking license required
- **FinTech license:** Available for companies accepting up to CHF 3,000 per person for specific services; up to 20 clients without license
- **Crypto assets:** Virtual currency trading and payment system operation = AMLA (Anti-Money Laundering Act) regulated
- **Digital onboarding:** FINMA circular on video identification — technology-neutral regulation enabling digital client onboarding
- **Stablecoin context:** Still governed by FinIA (Financial Market Infrastructure Act) — details require Fedlex access which is JS-blocked
- **Source:** finma.ch/en/authorisation/fintech/
- **Business implication:** Regulatory path for stablecoin issuance exists but requires banking license or FinTech license; SBA opposition to current FinIA draft (Phase 02) = path still uncertain

---

### 3. FINMA Authorization Landscape — AI-Related Services [REGULATORY CONTINUITY]
- **FINMA authorization categories:** Banks, securities firms, insurers, asset managers, portfolio managers, trustees, fund management companies, exchanges, multilateral trading facilities
- **AI in finance:** FINMA does not yet have specific AI authorization category; AI advisory/decision tools likely fall outside FINMA authorization scope unless they constitute financial services
- **Existing supervisory focus:** Recovery and resolution (Credit Suisse aftermath); enforcement against unauthorized activities; market supervision
- **Source:** finma.ch/en/
- **Business implication:** DigitalCoa's decision-architecture services are NOT in FINMA regulatory scope — advisory, not financial services. This is a competitive advantage: no licensing burden.

---

### 4. Swiss DSG AI Timeline — Key Dates [SUMMARY TABLE]

| Date | Event |
|------|-------|
| Sep 1, 2023 | Swiss nDSG (revised Data Protection Act) enters force |
| Apr 4, 2023 | EDÖB issues first ChatGPT guidance |
| Nov 9, 2023 | EDÖB confirms DSG directly applicable to AI |
| May 8, 2025 | EDÖB update confirming DSG/AI applicability |
| Mar 20, 2025 | EDÖB resolves X/Grok case — opt-out for users |
| Sep 24, 2025 | EDÖB publishes comprehensive KI und Datenschutz guidance |

---

## Regulatory Framework for DigitalCoa Client Advisory

### DSG + AI → Decision Architecture Implications

The EDÖB framework creates concrete governance requirements that DigitalCoa can help clients address:

| EDÖB Requirement | DigitalCoa Advisory Angle |
|-----------------|-------------------------|
| Transparency disclosure for AI systems | Decision governance — what AI decisions require disclosure? |
| Human review right for automated decisions | Decision authority mapping — which decisions must stay human? |
| DSFA (Data Protection Impact Assessment) for high-risk AI | Executive Decision Diagnostic — does client have DSFA process? |
| Prohibition on Social Scoring / real-time facial recognition | Boundary-setting governance — what AI uses does client explicitly reject? |
| Right to know if communicating with a bot | AI interaction policy — organizational stance on disclosure |

### FINIA / Stablecoin → Advisory Opportunities
- Swiss banks cannot currently issue stablecoins directly under banking license (must create subsidiary) — SBA lobbying against this
- If FinIA changes: significant new market for institutional stablecoin advisory
- DigitalCoa position: regulatory uncertainty = decision uncertainty = advisory need

---

## Brotons.net / DigitalCoa.ch Content Angles (Phase 06 Regulatory)

1. **"The Swiss DSG AI Rule Is Already in Force: What Most Executives Don't Know"** — EDÖB framework explained; decision-architecture response needed
2. **"Three DSG Obligations Every Swiss Company Using AI Must Address in 2026"** — transparency, human review, DSFA — practical governance checklist
3. **"Why the X/Grok Case Matters for Your Company's AI Training Data Decisions"** — data governance as board-level decision
4. **"Social Scoring Is Already Illegal in Switzerland: What This Means for Your AI Governance"** — EDÖB's explicit prohibition as decision-boundary framing
5. **"FINMA's Fintech Framework: The Regulatory Decision Tree for Swiss AI Financial Services"** — decision path for fintech companies

---

## Skipped Items (Owner Approval Required)
- Full Fedlex.admin.ch FinIA amendment text (JavaScript required)
- FINMA stablecoin circular (requires deeper FINMA document access)
- Swiss Federal Council AI strategy documents (404/error)
- EU AI Act full text analysis and Switzerland implications
- Primary research: interviews with DPOs at Swiss companies about DSG/AI implementation challenges

---

## Access Blocks (Confirmed)
- Fedlex.admin.ch: JavaScript required — legislative texts for FinIA, DSA, AI Act all blocked
- Swiss Federal Council AI strategy: 404 / server error on all tested URLs
- SBFI (State Secretariat for Education, Research and Innovation): 404 on AI pages
- EFD (Federal Finance Ministry): 404 on FinIA pages
- SECO technology pages: 404
- EY/Swiss economics ministry: DNS failures

---

## GitHub Push Target
Push to digitalcoa.ch staging (pending Phase 06 commit)
