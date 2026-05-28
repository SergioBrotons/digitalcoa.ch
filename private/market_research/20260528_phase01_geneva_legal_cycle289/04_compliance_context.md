# 04 — Compliance Context: Geneva/Switzerland Specific Regulatory

*Phase 01 · Cycle 289 · 2026-05-28*

---

## Regulatory Framework Map for Geneva Small-Law AI Accountability

### The Three Parallel Ungoverned Tracks

Geneva small-law attorneys with AI accountability obligations operate under **three parallel tracks** that are not coherent between each other:

1. **Bar ethics** (SBA / Ordre des Avocats) — attorney conduct obligations, Art.321 CP professional secrecy
2. **Data protection** (nFADP / FDPIC) — personal data processing obligations, processor agreements
3. **Carrier underwriting** (PI insurers) — third-generation AI attestation for PI policy renewals

Each track operates independently:
- Different institutions set standards
- Different languages describe obligations
- Different timing drives compliance moments
- Different consequences follow from non-compliance

**No Geneva market participant has produced a three-track coherence mapping for small law firms.** Firms are managing three systems without a map between them.

---

## Track 1: Bar Ethics — What Applies Specifically to Geneva Small Law

### Art.321 CP — Professional Secrecy

Art.321 CP establishes attorney-client privilege in Swiss law. In AI contexts, this creates specific structural questions:

**Query metadata exposure:** AI research tool query trails — what was searched, on whose behalf, at what date — are retained by AI vendors under vendor terms. Traditional legal research produces notes under Art.321 CP protection. AI research trails may be on non-Swiss vendor servers under vendor terms. **No Geneva authority has published whether query metadata constitutes attorney work product under Art.321 CP.**

**AI inference confidentiality:** When AI tools process client matter data and produce outputs, the question is whether AI-inferred conclusions about the client are covered by professional secrecy. The legal analysis is specific to architecture — whether the AI is processing client data inside or outside firm-controlled infrastructure affects the privilege question. **No Swiss-hosted AI platform has published Art.321 CP compatibility analysis addressing this.**

**Vendor infrastructure jurisdiction:** Swiss-hosted platforms may satisfy data residency requirements while remaining outside Art.321 CP jurisdiction for analytical processes. The questions are structurally different. Attorneys selecting on data residency grounds may not be evaluating professional secrecy compatibility.

---

### SBA AI Guidelines (June 2024)

The SBA published AI guidance in June 2024. The document:
- States principles ("adequate supervision," "attorney responsibility," "client disclosure")
- Does not define an operational endpoint for implementation
- Does not describe minimum viable implementation for a 2–5 attorney firm
- Creates obligation without methodology for Small-Firm discharge

**The principle-without-practice gap:** The SBA AI document produces compliant appearance while the specific documentation architecture required for a 2–5 attorney firm remains unbuilt. At small-firm scale, one person holds user/compliance/billing/client manager roles simultaneously. The principle "adequate supervision" does not define what that looks like in practice.

**The Geneva interpretation vacuum:** The SBA guidance is published by a national body without Geneva-specific calibration. Geneva attorneys cannot cite what constitutes adequate supervision under Geneva practice conditions. No mechanism exists to trigger a binding formal interpretation on specific questions.

---

### Ordre des Avocats — Formal Interpretation Mechanism Absence

The Ordre des Avocats de Genève operates under a governance structure where:
- **Formal opinions** require a formal request process with defined timelines
- **Informal guidance** is provided through educational programming and committee work
- **No urgent AI accountability question** from a small firm has been resolved through a formal Ordre opinion in a timeline that allows operational use

**Structural consequence:** The absence of formal interpretation mechanism makes the guidance vacuum structurally permanent, not temporary. The system is not designed to generate timely formal interpretations on emerging AI accountability questions regardless of how valid or urgent the question is. This is a structural property, not an oversight.

---

## Track 2: nFADP — Data Protection Obligations Specific to Law Firms

### Art.9 — Third-Party Processor Compliance

Art.9 nFADP requires that data controllers have documented legal basis for processing personal data and that third-party processors have appropriate data processing agreements. For small law firms using AI tools:

**The processor compliance gap:** Many AI vendors used by small law firms process client matter data on their infrastructure. The question of whether appropriate processor agreements exist, whether the scope of processing is within what the firm authorized, and what the firm's disclosure obligations to clients are — **has not been evaluated at most Geneva small-law firms.**

**The specific legal risk:** AI processor compliance under nFADP Art.9 is distinct from general GDPR-adjacent data protection. Law firm AI processor flows involve client confidential information — the consequence of a compliance failure is not regulatory notice but client privilege breach. **The stakes are different from general data protection, and the standard review frameworks do not account for this.**

---

### Anonymization as Legally Untested Safe Harbor

Market guidance in Geneva legal AI discourse often cites anonymization as a sufficient protection measure for using AI with client data. The structural problem:

**No published Geneva authority analysis confirms that anonymized AI outputs satisfy:**
- Attorney work product doctrine under Art.321 CP
- Law firm AI processor compliance obligations under nFADP Art.9
- Carrier AI governance attestation requirements

**Anonymization may be creating false adequacy:** Firms using anonymized AI tools on client matters may believe they have resolved the AI governance problem when they have merely obscured it. The legal sufficiency of anonymization in this context has not been tested or confirmed by any published Geneva authority. The safe harbor may not protect against the specific risks it is intended to address.

---

### Art.21 — Automated Decision Obligations

nFADP Art.21 creates obligations for automated decisions significantly affecting data subjects. For law firms using AI in client-facing recommendation or document production:

- **The question is whether AI-assisted legal documents constitute automated decisions** with legal effects on clients
- **No Geneva authority has published** whether Art.21 applies to AI-assisted legal work product at small firm scale
- **The uncertainty is present-tense:** As AI tools become more integrated into legal document production, the Art.21 question is increasingly live

---

## Track 3: Carrier Underwriting — PI Insurance Third-Generation Attestation

### Third-Generation Attestation as Personal Liability Instrument

The third-generation carrier AI questionnaire is structurally different from earlier versions:
- **Personal attestation** by the MD/partner signing, not firm-level compliance
- **No defined adequacy standard** — the signatory commits to undefined carrier-defined adequacy
- **Immediate personal liability consequences** in the event of a claim triggered by AI-assisted work

**The Geneva market failure:** No pre-signing review service for this specific instrument from the signatory's perspective. The form is written by the carrier's legal team. No independent Geneva counsel reviews it from the personal liability standpoint before signing.

---

### SRO Silence as Structural Amplification Mechanism

FINMA-regulated financial institutions face AI-specific SRO guidance. Non-FINMA-regulated small law firms:
- Have no equivalent SRO structure
- Have no AI-specific sector guidance
- Face carrier AI governance questions without the sector-specific calibration that SROs provide for financial institutions

The result: **carrier AI questionnaires function as de facto sector standard for small Geneva law firms** – designed without Geneva legal community input, signed by attorneys who had no participation in their formation.

---

## The Geneva Specific Regulatory Environment

### Federal AI Coordination Office Function

The Federal AI Coordination Office (FAIO) is the primary federal AI coordination body. The critical question not yet resolved:
- **Is the FAIO a coordination mechanism or a new standard-setting authority?**
- **How will Geneva-institutional decisions be evaluated against FAIO standards?**
- **What evidence standard should Geneva small firms build toward?**

No published guidance connects FAIO function crystallization to specific evidence requirements for small law firms about what "adequate Geneva AI governance" means.

---

### Geneva Institutional Standard Formation

Geneva AI accountability standards are forming through mechanisms Bern formal process does not control:
- **Carrier underwriting iteration** responding to Geneva institutional signals
- **Institutional client requirements** shaping what Geneva attorneys must demonstrate
- **Geneva informal circuit intelligence** circulating among practitioners not published

Small Geneva law firms cannot observe these mechanisms. They are arriving at accountability moments governed by standards they had no mechanism to see forming. This is a structurally distinct feature of the Geneva regulatory landscape — informal formation mechanisms operating faster than formal process produces obligations the small firm must satisfy without having participated in their creation.

---

## The July 2026 Geneva Accountability Window

Sustained market research indicates that July 2026 is a significant accountability formation occasion in Geneva:
- Federal Council AI deliberation
- Geneva institutional event concentration
- Carrier questionnaire iteration cycles

The documentation window close produces a **burden-of-proof reversal:** Firms that built proportionate documentation during the window are evaluated against forming standards. Firms that did not are evaluated against arrived standards with no retroactive reconstruction methodology.

For Geneva small-law attorneys, the window is not an abstract timing concept — it is a specific deadline after which the explanation for absent documentation will be different and less favorable.

---

## Summary: Structural Features of Geneva Regulatory Landscape

| Feature | Consequence for Small Law |
|---------|--------------------------|
| Three parallel ungoverned tracks | No coherence mapping, firms manage three systems without a map |
| SBA principle-without-practice gap | Compliance appearance without operational substance |
| Ordre formal interpretation absence | Guidance vacuum is structurally permanent |
| nFADP Art.9 processor gap | Legally distinct from general data protection, stakes are privilege not regulatory |
| Anonymization false adequacy | May create false protection without legal confirmation |
| Carrier third-gen as personal instrument | MD personal liability without pre-signing review |
| Geneva informal formation faster than Bern | Standards form without small-firm participation |
| July 2026 window close | Burden-of-proof reversal creating documentation imperative |
