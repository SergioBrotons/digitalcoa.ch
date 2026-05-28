# Compliance Context — Geneva Legal AI Governance

## Cycle
C288 Phase 01

## Geneva / Switzerland Regulatory Framework for AI in Small Law Firms

---

## 1. Federal Act on Data Protection (nFADP / revDSG) — Article 9

### What it says:
The revised Federal Act on Data Protection (nFADP, in force since September 1, 2023) directly applies to AI-supported data processing. Article 9 governs commissioned processing — when a data controller (the law firm) engages a third party (an AI vendor) to process personal data on its behalf.

### Key obligations for small law firms using AI tools:

**Data Processing Agreement (DPA):**
- A DPA is a statutory requirement — not optional
- Must be in place before any AI tool processes client personal data
- Must specify: scope of processing, security obligations, audit rights, sub-processing restrictions, and data deletion/return rules
- Must be signed by both parties (law firm + AI vendor)

**Sub-processing restrictions:**
- AI vendors cannot sub-contract processing without prior written approval from the law firm
- Attorneys must verify whether their AI vendor uses sub-processors and document this

**Data hosting:**
- Law firms must know where AI vendor data centers are located
- Swiss or EU hosting is generally viewed as lower risk for professional secrecy
- US-hosted tools create additional compliance complexity

**Data use for model training:**
- This is the highest-risk clause for law firms
- Most commercial AI vendors use inputs to train models unless explicitly contracted otherwise
- Using an AI tool with training data enabled on client matters is likely incompatible with attorney-client privilege under Art. 13 BGFA
- Attorneys must verify training data opt-out status for every AI tool in use

**Data Protection Impact Assessment (DPIA):**
- Required for high-risk AI processing activities
- Likely required for AI tools processing sensitive personal data (health, financial, legal cases)
- Small firms must at minimum conduct a structured self-assessment

### Penalties:
- Up to CHF 250,000 for breaches of due diligence in commissioned processing (Art. 61 lit. a nFADP)
- Unlike GDPR, nFADP allows for personal liability of private individuals — the managing partner can be personally fined

---

## 2. Federal Act on the Free Movement of Lawyers (BGFA / LRPA) — Article 13

### What it says:
Article 13 establishes professional secrecy (secret professionnel) for Swiss attorneys. Client matter information is protected. This obligation sits above and beyond data protection obligations.

### AI-specific implications:
- Using an AI tool that sends client data to servers outside Switzerland without explicit client consent may violate professional secrecy
- The question is not just legal compliance (nFADP) but professional conduct (BGFA)
- The FDPIC position (May 2025) that nFADP applies directly to AI processing is consistent with BGFA obligations, but BGFA adds a layer of professional accountability
- When AI tool vendors update terms or privacy policies, the law firm may need to reassess whether continued use is consistent with professional secrecy obligations

### The training data problem:
- If an AI vendor uses client data to train or improve models, this is arguably a disclosure of client information to a third party
- Under BGFA Art. 13, this disclosure would require explicit client consent or a legal exception
- The default settings on most commercial AI tools do not meet this standard

---

## 3. Swiss Bar Association (SBA) Guidelines on AI Use — June 2024

### What they say:
The SBA Council adopted comprehensive AI guidelines in June 2024. These apply to all Swiss attorneys, including those in Geneva. Key principles:

**Competence:**
- Attorneys must understand both capabilities and limitations of AI systems
- Cannot rely solely on AI for legal advice or tasks requiring specialized expertise
- Must stay vigilant regarding AI's evolution

**Confidentiality and Data Security:**
- Must not input confidential client information into AI systems lacking adequate security/confidentiality protections
- Must not use AI systems that may share information with third parties without informed client consent
- Law firms must establish clear AI policies

**Transparency and Disclosure:**
- Must inform clients when AI outputs will significantly influence decisions
- Must inform clients when AI affects billing
- Must disclose if confidential information is used in an open AI system

**Accuracy and Verification:**
- Attorneys remain responsible for all work product, regardless of AI contribution
- Must diligently review and verify all AI-generated content including legal citations
- "Hallucinations" in AI outputs are the attorney's responsibility

**Reasonable Fees:**
- AI efficiencies should lead to fair, transparent billing — not inflated hours for work completed faster with AI

**Supervision:**
- Supervising attorneys are responsible for developing AI use policies and training staff

### For small Geneva firms:
- These guidelines establish the accountability framework
- They do not provide implementation tools or templates
- The phrase "attorneys remain responsible" is load-bearing — it means the individual attorney bears personal risk for AI governance failures

---

## 4. Council of Europe AI Convention — Switzerland Signature March 2025

### What happened:
In March 2025, Switzerland signed the Council of Europe Convention on Artificial Intelligence and Human Rights, Democracy and the Rule of Law. The Federal Council announced that necessary Swiss legal amendments would be made to enable ratification.

### Current status:
- Signed but not yet ratified
- Required amendments not yet drafted
- No timeline for implementation formally established
- FDPIC has stated that existing data protection law (nFADP) applies directly to AI regardless of future regulation

### Implications for small law firms:
- No immediate new obligations from the Convention signature alone
- Should build governance frameworks that will be durable when amendments are enacted
- The Convention's risk-based approach is consistent with nFADP principles — existing compliance work is not wasted
- When the Swiss AI Act (following the EU AI Act model) is eventually enacted, the framework built now should remain relevant

### What attorneys should do:
- Monitor for ratification and implementation timeline
- Build AI governance on existing nFADP obligations now — this is consistent with Convention principles
- No need to wait, but no need to act on Convention-specific requirements until implementing legislation is drafted

---

## 5. Geneva Bar Association (SVA) — Cantonal Guidance

### Current state:
- No Geneva-specific AI governance guidance has been published
- The SVA organizes events and continuing education on AI topics
- Geneva attorneys look to SBA national guidelines as the primary reference
- The cantonal dimension creates a gap: attorneys feel the SBA guidelines don't address Geneva-specific professional contexts

### What this means:
- The SVA has not published operational guidance specific to Geneva practice
- No Geneva-specific template documentation, checklists, or frameworks exist from the SVA
- The University of Geneva offers a 2 ECTS micro-credential on AI legal and privacy issues (CHF 1,300) — the most substantial Geneva-level educational resource
- This gap is an opportunity for a credible Geneva-caliber resource to fill it

---

## 6. Professional Liability Insurance (RC Pro) — AI Attestation

### Current state:
- Swiss RC pro (professional liability) carriers are increasingly including AI-related questions in policy renewals
- Questions reference: data processing agreements with AI vendors, vendor due diligence documentation, AI tool inventory, internal AI governance policies
- The attestation is a signed document — the attorney is confirming their firm's AI governance meets professional standards
- Without documentation, an attorney cannot demonstrate compliance even if good governance practices are in place

### Why this matters:
- The carrier renewal is now a concrete trigger point for AI governance action
- The attestation creates immediate personal exposure for the managing partner or responsible attorney
- It is the most actionable "deadline" in the regulatory landscape for small firms

### What attorneys need:
- Documentation of AI tool inventory
- Data processing agreements with AI vendors
- Internal AI use policy (even if simple)
- Evidence of periodic review of AI vendor compliance status

---

## 7. The FDPIC Position — May 2025

### What the FDPIC said:
The Federal Data Protection and Information Commissioner confirmed in May 2025 that nFADP is directly applicable to AI-supported data processing. Key points:

- No regulatory gap for AI — existing principles apply
- Manufacturers, providers, and users of AI systems must ensure data subjects have the highest possible degree of digital self-determination
- Purpose, functionality, and data sources of AI-based processing must be transparent
- Users of AI systems have a right to know if they're interacting with a machine and whether their data is used for training
- DPIAs are required for high-risk AI processing

### Implications:
- The nFADP framework is the current AI governance foundation — no waiting for new law
- The FDPIC position aligns with BGFA professional secrecy obligations
- Attorney-client privilege concerns are addressed through existing nFADP obligations, but the BGFA layer adds personal professional accountability

---

## Compliance Context Summary for Small Geneva Firms

| Obligation | Source | Status | Action Required |
|-----------|--------|--------|----------------|
| DPA with AI vendors | nFADP Art. 9 | In force | Execute DPAs now |
| Sub-processor approval | nFADP Art. 9 | In force | Review vendor sub-processing |
| Training data opt-out | BGFA Art. 13 + nFADP | In force | Verify each AI tool |
| DPIA for high-risk AI | nFADP | In force | Conduct structured self-assessment |
| AI governance policy | SBA Guidelines | In force (June 2024) | Develop internal policy |
| Carrier attestation | RC Pro insurers | Triggered now | Prepare documentation |
| AI register / tool inventory | SBA + carriers | Expected | Build and maintain register |
| Swiss AI law / Convention implementation | Future | Pending | Monitor — no immediate action |

---

*Generated: C288 Phase 01 — Geneva Legal Compliance Context*