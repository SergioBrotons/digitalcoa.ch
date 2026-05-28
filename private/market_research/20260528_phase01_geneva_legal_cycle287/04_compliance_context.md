# 04 — Compliance Context: Geneva / Switzerland Regulatory Framework

**Phase:** C287 Phase 01
**ICP:** Small law firm, 2–5 attorneys, Geneva
**Cycle:** 2026-05-28

---

## Applicable Regulatory Framework

### 1. New Federal Act on Data Protection (nFADP / revDSG)

**Effective:** September 1, 2023
**Relevance:** High — governs all personal data processing by law firms

**Key Provisions for AI Use:**

#### Art. 9 — Third-Party Processors
When a law firm uses an AI tool as a third-party processor:
- Must have a data processing agreement (DPA) in place
- Processor may only process data in ways the controller (law firm) is permitted to
- Processor must guarantee data security
- Sub-processor use requires prior authorization from the controller
- Data must not leave Switzerland without equivalent protection assessment

**Practical implication for small firms:**
Using a US-based AI vendor (ChatGPT, Claude, etc.) without a compliant DPA = potential nFADP breach. The vendor's standard terms typically do not meet nFADP Art. 9 requirements.

#### Art. 6 — Lawfulness of Processing
Personal data may only be processed on a valid legal basis. For law firms:
- Client data processing likely falls under "contract fulfillment" or "legitimate interest"
- But third-party AI processing requires additional legal basis assessment

#### Privacy by Design and Default (Art. 6 para  2)
Data protection must be integrated from the outset — not added after. AI tool selection must consider this.

#### Automated Decision-Making (Art. 16)
If AI-assisted processing produces decisions significantly affecting data subjects, they must be informed and given the right to human review. Client-facing AI decisions require disclosure.

**Enforcement:**
- Fine up to CHF 250,000
- Unlike GDPR, sanctions can target responsible individuals directly
- Not hypothetical — FDPIC (Swiss data protection authority) has enforcement authority

---

### 2. Attorney Professional Obligations

#### Art. 321 Swiss Criminal Code — Professional Secrecy
Criminal obligation for Swiss attorneys. Breach = up to 3 years imprisonment or fine.

**Application to AI:**
- Uploading client data to a non-compliant AI tool may constitute unauthorized disclosure
- "Anonymization" defense is legally untested — no Swiss court has ruled on this
- The confidentiality expectation of privilege requires the communication be to a party obligated to maintain secrecy — most AI vendors' terms of service do not meet this standard

#### Federal Act on Free Movement of Lawyers (LLCA / BGFA)
Art. 12 et seq. — Professional obligations including:
- Duty of diligence
- Duty of confidentiality
- Duty to maintain professional competence

AI use does not diminish these obligations — attorneys remain responsible for AI-assisted work product.

#### Geneva Bar (OAG) Rules
OAG is the cantonal regulatory body for attorneys practicing in Geneva.
- OAG has organized AI-focused events (signaling priority)
- OAG has not issued operational guidance for small firms
- OAG would be the body handling any disciplinary complaint related to AI misuse

---

### 3. Swiss Bar Association (SBA/FSA) AI Guidelines

**Published:** June 2024
**Authority:** Soft law — not legally binding but sets professional standard

**Core requirements:**
1. Professional secrecy must be maintained when using AI
2. AI tools must guarantee data confidentiality
3. Data processing agreements required when using third-party AI
4. Attorneys remain responsible for AI-assisted work product
5. Client consent may be required before using AI in a matter
6. nFADP compliance required for data protection aspects
7. Attorneys must understand the AI tools they use (competence obligation)

**What the guidelines don't do:**
- Define "adequate" for small firms
- Provide a checklist or implementation framework
- Address carrier attestation
- Provide contract language for vendor DPAs

**Interpretation:** The guidelines establish that AI use by attorneys is permitted but must meet professional standards. The SBA expects attorneys to self-assess. For small firms without compliance staff, self-assessment is challenging and uncertain.

---

### 4. The Council of Europe AI Convention (Treaty No. 225)

**Status:** Signed by Switzerland, ratification process ongoing
**Relevance:** Will become binding international law for Switzerland

**Key obligations for law firms as "deployers" of AI systems:**
- Transparency in AI use where required
- Human oversight of AI decisions with legal effects
- Accountability for AI outcomes
- Non-discrimination requirements
- Data protection obligations (aligned with nFADP)

**Implication:** Small firms will need to document their AI governance as evidence of compliance. The Convention creates an accountability framework that carriers and bar regulators will reference.

**Timeline:** Enforcement approaches as ratification completes — firms should not wait.

---

### 5. EU AI Act — Cross-Border Relevance

Switzerland has significant EU trade relationships. Many Geneva firms have EU-based clients or conduct proceedings with EU nexus.

**EU AI Act applicability:**
- "Deployers" of AI systems have obligations under the AI Act
- High-risk AI system categories include those used in legal services
- Deployer obligations: transparency, human oversight, accountability documentation

**Practical implication:** If a Geneva firm uses an AI tool for EU client matters, the EU AI Act's deployer obligations may apply regardless of Swiss domestic law. This creates a dual compliance requirement.

---

### 6. Carrier (PI) Insurance Attestation

**Current state:**
Swiss PI insurers are increasingly including AI governance attestation in renewal questionnaires.

**Typical attestation questions:**
- Does the firm have a documented AI use policy?
- What AI tools are used in client matter work?
- Are data processing agreements in place with AI vendors?
- Has the firm conducted due diligence on AI tool vendors?
- Can the firm produce its AI governance documentation on request?

**Small firm reality:**
Most 2–5 attorney Geneva firms cannot answer these questions with "yes" and evidence. The attestation is being completed by default (often unchecked boxes) or with inaccurate information.

**Risk:** If an incident occurs (data breach, privilege waiver, client harm) and the attestation was inaccurate or incomplete, the carrier may deny coverage. The attestation itself becomes evidence of misrepresentation.

**What carriers want:**
- Evidence of a documented, operational AI governance framework
- A clear policy that covers what AI tools can be used, by whom, on what data
- Vendor due diligence documentation
- Staff training acknowledgments
- A periodic review process

---

## Compliance Matrix for Small Geneva Firm (2–5 attorneys)

| Obligation | Source | Requirement | Small Firm Gap |
|---|---|---|---|
| Professional secrecy | Art. 321 CP | Maintain confidentiality of client information | No AI-specific protocol |
| Data processing agreements | nFADP Art. 9 | DPA with all AI vendors | No standard DPA template exists |
| Data security guarantees | nFADP Art. 9 | Documented security from vendors | No vendor assessment process |
| AI use policy | SBA Guidelines | Documented AI governance | No policy exists |
| Staff training | SBA / LLCA | Attorneys understand tools they use | Ad hoc, no formal training |
| Carrier attestation | PI Insurance | Documented governance on request | Blank or inaccurate |
| nFADP compliance | revDSG | Privacy by design, legal basis for processing | Not assessed for AI tools |
| AI Convention | CoE Treaty | Accountability, oversight, transparency | Not addressed |
| Client consent | SBA Guidelines | May be required for AI processing | No standard process |

---

## The Compliance Gap in Practice

Small firms are subject to a complex, multi-source compliance landscape with no single guidance document, no standard implementation path, and no affordable, specialized support.

The result:
- Most small firms do nothing systematic
- They use AI informally without documentation
- They cannot satisfy carrier attestation
- They have no evidence of compliance if challenged
- They are exposed in multiple directions simultaneously

**This is the addressable problem.**