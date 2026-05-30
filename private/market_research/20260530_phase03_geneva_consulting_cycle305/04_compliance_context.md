# Compliance Context: Geneva Consulting — C305 Phase 03

## Geneva / Switzerland Regulatory Environment

---

### Primary Regulatory Framework

#### nFADP — Swiss Federal Act on Data Protection (as revised)

**Applicability to Geneva consulting firms:** Universal. All consulting firms processing client data in the course of client engagements are subject to nFADP. The revised nFADP (in force September 1, 2023) applies to all processing of personal data relating to identifiable persons in Switzerland.

**Article 63 — Personal Criminal Liability (Critical for Managing Directors)**

Article 63 of nFADP creates personal criminal liability for unauthorized data processing. Key elements:

- **Who is liable:** Any person who, in violation of data protection obligations, deliberately processes personal data and obtains a financial benefit or intends to cause harm.
- **Why it is specific to managing directors:** A managing director who signed carrier attestations about AI governance, and whose firm processes client data through AI tools without documented authorization, may have made representations that constitute the personal exposure trigger under Article 63.
- **The specific configuration for consulting firms:** Client data enters AI tools during consulting engagements → processing occurs without documented client consent or legal basis → managing director is personally accountable for the firm's data processing → personal criminal liability exposure is active and specific.
- **No corporate shield:** The corporate structure does not protect the managing director from personal liability under Article 63. The liability attaches to the individual who made the unauthorized processing decision or signed the attestation that authorized it.

**Article 26 — Data Processing by Third Parties**

When consulting firms use external AI vendor tools, the vendor is a "third party" processing data under the managing director's instruction. Article 26 requires: a legal basis for the processing, contractual obligations on the vendor, and documentation that the legal basis exists. Most consulting firms have accepted vendor terms of service without verifying whether a legal basis for client data processing exists.

**Article 5(c) — Processing Principles**

Data must be processed lawfully, fairly, and in a transparent manner. "Lawfully" requires a legal basis. For consulting firms using AI tools on client data, the legal basis question (consent, contract performance, legitimate interest, or legal obligation) is not systematically addressed.

**Article 9 — Sensitive Personal Data**

If consulting engagements involve sensitive personal data (health, financial situation, union membership), additional processing restrictions apply. AI tools processing such data require explicit legal basis documentation. Most consulting firms have not assessed which client data categories their AI tools process.

---

### Professional Secrecy — Article 321 Swiss Criminal Code

**Applicability:** Article 321 CC creates professional secrecy obligations for persons who, by profession, receive secrets entrusted to them. Consulting advisors who receive client-confidential information are subject to Article 321.

**AI vendor contract conflict:** AI vendor terms of service — accepted by consulting firms without review — define what the vendor can do with data uploaded to their servers. If client data processed through AI tools reaches vendor servers in non-Swiss jurisdictions, the professional secrecy obligation under Article 321 may be in conflict with the vendor's contractual data rights.

**The specific consulting exposure:** The consulting firm does not know whether Article 321 is violated because it has not reviewed vendor contracts against Article 321 obligations. The exposure is active, unknown, and undocumented.

**Implication for Geneva consulting:** A systematic Article 321 vendor contract review is a Geneva-specific compliance requirement. The review produces documentation of: where client data goes, what vendor contracts permit, whether Article 321 obligations are contractually protected.

---

### Professional Liability Insurance — Carrier Attestation Requirements

**The attestation architecture:** Professional liability carriers serving Geneva consulting firms are requiring AI governance attestations as part of policy renewals. The attestation form asks the managing director to represent that the firm has adequate AI governance, adequate supervision of AI tools, and adequate controls on AI tool use by sub-consultants.

**The evidence assumption:** The attestation form does not require evidence at signing. It assumes evidence exists. The evidence becomes relevant at renewal (when the carrier asks what changed) or at claim (when the carrier asks whether adequate governance existed at the time of the incident).

**The personal signature:** The managing director signs personally. The signature is not a corporate act — it is a personal representation. If the evidence does not support the representation, the personal signature creates personal exposure.

**What the carrier form does not define:** "Adequate." No carrier has published a Geneva-calibrated, firm-size-calibrated, consulting-specific definition of adequate AI governance. The managing director signs an attestation to an undefined standard.

---

### Client AI Governance Questionnaires — Regulatory and Contractual Dimensions

**RFP AI governance checklists:** Large corporate clients procuring consulting services include AI governance questionnaires as standard procurement documents. The legal basis for these questionnaires is: contractual (as part of the engagement contract formation), regulatory (where clients are themselves regulated and must document AI governance in their supply chain), and fiduciary (where clients have their own obligations to their stakeholders).

**The consulting firm's obligation:** Responding to a client AI governance questionnaire creates a documented record. An incomplete or inconsistent response becomes evidence of inadequate governance. A response that cannot be supported with documentation becomes evidence of misrepresentation.

**No Geneva-specific guidance:** There is no Geneva Bar or consulting industry association guidance on how consulting firms should respond to client AI governance questionnaires. Firms are producing ad hoc responses without a defensible methodology.

---

### EU AI Act — Deployer Obligations for Geneva Consulting Firms

**Applicability trigger:** The EU AI Act applies to firms deploying AI systems in the EU or serving EU-regulated clients. Geneva consulting firms serving EU-based clients may have EU AI Act deployer obligations regardless of whether they have EU operations.

**The structural problem for consulting firms using non-EU AI vendors:** EU AI Act deployer obligations require conformity assessments and EU Declaration of Conformity from AI system providers. Non-EU AI vendors (the majority of current AI tools used by consulting firms) cannot provide EU Declaration of Conformity. The consulting firm using non-EU AI tools cannot satisfy EU AI Act deployer obligations regardless of internal governance quality.

**The Geneva-specific dimension:** Switzerland is not in the EU. The EU AI Act deployer obligations are extraterritorial for Swiss firms serving EU clients. The structural exposure cannot be closed by documentation effort alone — it requires vendor stack evaluation and potential vendor substitution.

---

### FINMA — Supervisory Expectations for AI Governance

**Applicability:** FINMA directly supervises banks and insurers, not consulting firms. However, consulting firms serving FINMA-regulated clients (banks, insurers, securities dealers) may receive AI governance questionnaires as part of those clients' regulatory compliance requirements.

**Indirect applicability:** A Geneva consulting firm advising a FINMA-regulated bank on risk management may receive a FINMA-influenced AI governance questionnaire from the bank client. The questionnaire reflects FINMA's expectations for AI governance in the bank's supply chain.

**The evidence standard:** FINMA's supervisory expectations have shifted from policy documents to evidence of oversight capability. A consulting firm receiving FINMA-influenced questionnaires from bank clients must produce evidence — not just policy descriptions.

---

### Engagement Letter Framework — Swiss Code of Obligations Art. 2

**Contractual ambiguity:** Under Swiss Code of Obligations Art. 2, contract ambiguity is interpreted against the drafting party. The consulting firm's engagement letter — silent on AI — creates contractual ambiguity about the scope of services, the methodology used, and the liability allocation for AI-assisted work.

**AI clause absence:** The engagement letter governs the consulting relationship. It does not currently address: what AI tools will be used, what data will be processed, what client consent is obtained, how AI-related errors are allocated, what documentation will be produced.

**The risk:** If a client challenges a consulting recommendation and the engagement letter is silent on AI, the ambiguity is interpreted against the consulting firm. The firm bears liability for circumstances it did not anticipate or allocate.

---

### Regulatory Timeline Summary

| Date | Regulatory Event | Consulting Firm Impact |
|---|---|---|
| September 1, 2023 | Revised nFADP in force | Active personal criminal liability under Art. 63 |
| July 1, 2026 | Swissdamed in force | Medical devices only — not applicable to consulting AI |
| August 2026 | EU AI Act fully applicable | Deployer obligations for firms with EU nexus |
| End 2026 | Swiss Federal Council AI consultation draft | Potential Swiss AI regulatory framework |
| Ongoing | Carrier attestation renewals | Personal signature exposure active at each renewal |
| Ongoing | Client AI governance questionnaires | Ad hoc responses creating documented evidence gaps |

---

## Geneva-Specific Considerations

### Geneva Bar Association
No published guidance on AI governance for member consulting firms. No AI governance attestation guidance. No engagement letter AI clause framework. The gap between regulatory reality and professional guidance is wide and active.

### Swiss Business Federation (economiesuisse)
General AI governance guidance for member companies. Not calibrated for consulting boutiques. Does not address methodology provenance documentation or sub-consultant delegation.

### Carrier Market
Three to four major professional liability carriers serving Geneva consulting market. All requiring AI governance attestations. None providing Geneva-calibrated, consulting-specific definitions of "adequate." All assuming evidence exists without specifying what evidence is required.

---

## Compliance Gap Summary

| Compliance Obligation | Current State | Gap |
|---|---|---|
| nFADP Art. 63 personal liability | Managing directors unaware of personal exposure | No personal structuring review |
| nFADP Art. 26 vendor processing | Vendor contracts accepted without review | No Article 321/26 vendor review |
| Article 321 CC professional secrecy | Client data processed on vendor servers | No vendor contract review against Art. 321 |
| Carrier attestation | Form completed without evidence | No evidence production methodology |
| Client AI governance questionnaire | Ad hoc responses without methodology | No defensible response framework |
| Engagement letter AI clause | Engagement letters silent on AI | No AI clause framework for consulting |
| EU AI Act deployer | Non-EU vendor use creates structural exposure | No vendor stack evaluation |
| Sub-consultant delegation | No authorization framework | No delegation documentation architecture |
| Methodology provenance | No documentation standard | No AI methodology documentation standard |
