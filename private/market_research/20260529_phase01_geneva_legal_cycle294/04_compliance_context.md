# 04 — Compliance Context: Geneva / Switzerland Regulatory Landscape for AI in Small Law Firms

## Phase 01 | Cycle C294 | ICP: Geneva small law firm, 2–5 attorneys

---

## Overview

Switzerland does not have a single AI-specific law analogous to the EU AI Act. Instead, AI is regulated through a combination of:
1. Existing data protection law (revFADP, in force September 2023)
2. Professional conduct law for lawyers (BGFA, FMLA, SCPC)
3. Sector-specific adaptation through existing frameworks
4. International obligations (Council of Europe AI Convention, signed March 2025)

For small Geneva law firms, this means AI governance is not a single compliance exercise — it's a layered set of obligations that build on existing professional and data protection frameworks.

---

## Primary Regulatory Framework

### 1. Revised Federal Act on Data Protection (revFADP / nFADP)

**Status:** In force since 1 September 2023.  
**Applicability to AI:** Direct and immediate. The Federal Data Protection and Information Commissioner (FDPIC) confirmed in May 2025 that revFADP applies to AI-supported data processing with no regulatory gap.

**Key provisions for AI-using law firms:**

**Art. 6 — Principles of data processing**
Lawfulness, purpose limitation, and proportionality. Any AI system processing personal data must satisfy these principles. For a law firm, this means: client data in AI tools must have a defined, lawful purpose; the processing must be proportionate; and the tool must not use data beyond the defined purpose.

**Art. 9 — Commissioned data processing (central for AI vendors)**
When a law firm engages a third-party AI provider to process personal data, a Data Processing Agreement (DPA) under Art. 9 is a **statutory requirement** — not optional. The provider must apply the same data protection obligations as the law firm itself. Violations can trigger criminal sanctions under Art. 60-66 revFADP.

**Art. 61 lit. a — Specific sanction for commissioned processing failures**
Fines up to **CHF 250,000** for breaches of due diligence obligations in commissioned processing. For a small firm, this is material.

**Art. 16 — International data transfers**
When AI vendors transfer data outside Switzerland (typically US-hosted services), a legal basis under Art. 16 is required. Standard contractual clauses (SCCs) are the typical mechanism, but the FDPIC has indicated (in Schrems II context) that SCCs alone may be insufficient without additional technical measures providing equivalent protection.

**Practical implication for small firms:**
Using a US-hosted AI tool without a properly structured DPA and SCCs creates direct revFADP exposure — both at the firm level and potentially at the personal level for the responsible individual.

---

### 2. Professional Conduct Law for Lawyers

**Federal Act on the Free Movement of Lawyers (FMLA / LRPA)**

**Art. 12(a) — Duty of diligence**
Lawyers must exercise their profession with care and diligence. This applies to AI use: delegating contract drafting to AI does not diminish the lawyer's duty of care. If AI produces a deficient document, the lawyer cannot invoke the AI's error to escape professional responsibility.

**Art. 13 — Professional secrecy (secret professionnel)**
The core confidentiality provision. Art. 13 BGFA covers client matter data derived from profession-specific legal work. The duty extends to ensuring any auxiliary persons respect professional secrecy (Art. 13 para. 2).

**Art. 321 Swiss Criminal Code (StGB)**
Criminal liability for unauthorized disclosure of professional secrets. Extends professional secrecy protections to auxiliary persons — meaning AI vendors processing law firm data can fall under this provision.

**Federal Supreme Court precedent:**
The Federal Supreme Court has recognized that external providers (including AI vendors) can be classified as "auxiliary persons" within the meaning of Art. 13(2) BGFA. This means the engaging lawyer is liable for ensuring the vendor respects professional secrecy. This is not hypothetical — it is established Swiss law that predates AI but applies to it directly.

**Swiss Code of Professional Conduct (SCPC / RCC)**  
Art. 6 requires lawyers to exercise their profession with care and diligence — directly relevant to AI tool selection and output review.

---

### 3. Swiss Bar Association (SAV / SBA) Guidelines on AI

**Published:** June 2024 (adopted by SAV Council)  
**Status:** Non-binding guidance; a framework, not a regulation  
**Relevance:** Sets the standard of care against which a lawyer's AI decisions will be measured

**Three permissible approaches under SAV guidelines:**

**Option 1 — Internal solution (preferred)**
AI application installed and operated locally within the firm's own network. Data never leaves firm infrastructure. Considered the most appropriate approach for professional secrecy compliance. Requires technical expertise to implement.

**Option 2 — Compliant outsourcing**
External vendor with cloud infrastructure. Must strictly comply with SAV cloud services guidelines. Requires:
- SAV-compliant DPA (statutory under revFADP Art. 9)
- Contractual embedding of professional secrecy obligations for the vendor
- Swiss or EU hosting preferred; US hosting creates additional risk under Art. 16 revFADP
- Vendor classified as auxiliary person — lawyer liable for their compliance

**Option 3 — Informed client consent**
Obtain client's express and informed consent through formal declaration partially waiving professional secrecy and revFADP protections. Client must be fully informed of risks. Without all three safeguards, confidential information should not enter AI systems.

**Key limitation:** The SAV guidelines do not provide:
- An approved tool list
- A certification mechanism
- A clear definition of "adequate" governance for small firms
- Specific guidance on AI tools currently in the market

---

### 4. Council of Europe AI Convention

**Signed by Switzerland:** March 2025  
**Status:** Switzerland has signed; ratification and legislative incorporation pending  
**Relevance for small firms:** Will require future legislative amendments to align Swiss law with Convention requirements. The Convention addresses AI systems that pose risks to fundamental rights, including data protection. Small firms should monitor implementation — but existing revFADP and SAV guidelines already address most near-term concerns.

**Key point:** The Convention is not yet binding in a way that creates immediate compliance obligations for small law firms. The more pressing issue is revFADP and SAV guideline compliance, which are already in effect.

---

### 5. EU AI Act Relevance for Swiss Firms

**Direct applicability:** None, for purely Swiss-focused firms.  
**Indirect relevance:** Firms with EU clients, EU matter involvement, or data processed through EU-based systems will encounter EU AI Act principles in practice. The Act's Article 4 (AI competence obligation) and risk categorization are referenced in Swiss legaltech discussions even where not directly applicable.

**Practical note:** Swiss firms that ignore the EU AI Act entirely do so at their own risk if they have any EU footprint. The regulatory logic is similar across jurisdictions, and a firm that can demonstrate EU AI Act compliance will be well-positioned for any future Swiss equivalent.

---

## Geneva-Specific Considerations

### Cantonal legal framework
Geneva's legal market is regulated at both federal and cantonal levels. Geneva's Canton-specific rules on legal practice apply alongside federal professional conduct law. The interaction between cantonal rules and federal AI/data protection obligations is still being worked out in practice.

### In-house counsel privilege (CPC amendment, January 2025)
A recent development: amendment to the Swiss Civil Procedure Code granting in-house counsel legal privilege in civil litigation. This aligns Swiss law with international standards and may affect how AI tools are used by in-house legal teams — a consideration for firms advising corporate clients.

### Geneva as AI governance hub
Geneva is increasingly a center for international AI governance discussions. Firms operating in Geneva are more likely to encounter sophisticated clients with AI governance expectations — raising the bar for what "adequate" AI practice looks like in client relationships.

---

## Compliance Timeline for Small Firms

| Immediate (now) | Short-term (3–6 months) | Medium-term (6–18 months) |
|---|---|---|
| Assess current AI tool usage | Establish formal AI policy | Monitor Council of Europe AI Convention implementation |
| Identify any US-hosted AI tools | Sign compliant DPAs with all AI vendors | Review and update AI policy as Swiss law evolves |
| Check for shadow AI usage by staff | Document internal solution or compliant outsourcing for each AI tool | Assess EU AI Act relevance if any EU footprint |
| Review Microsoft 365 Copilot / any Microsoft AI data retention | Consider client consent framework for specific AI uses | Update DPA templates as regulatory guidance evolves |
| Verify revFADP Art. 9 compliance for all AI vendors | Assess Art. 16 revFADP exposure for international data transfers | |

---

## Key Compliance Risks for This ICP

**Highest risk:** Using US-hosted AI tools (including major consumer platforms) without a compliant DPA and proper international transfer mechanism. The FDPIC's position on SCCs plus additional technical measures means "we signed a DPA" is not sufficient for US-based tools.

**High risk:** Allowing shadow AI without any firm awareness or policy. If an associate uses ChatGPT for a client matter and that data is used for model training, the firm has no protection — and the professional secrecy breach may not become visible until litigation or a complaint.

**Medium-high risk:** Using AI outputs without lawyer review. The duty of diligence under Art. 12(a) FMLA and Art. 6 SCPC requires professional oversight of AI-generated content. Firms that treat AI output as final without review are exposed.

**Medium risk:** Failing to maintain a documented AI policy. If challenged by the SAV, the absence of any documented AI governance is more damaging than a policy that is imperfect but thoughtful and documented.

---

## What "Adequate" Actually Means for This ICP

The SAV guidelines use "adequate" without defining it for small firms. A practical definition:

**Adequate AI governance for a 2–5 person Geneva firm means:**
1. Written AI policy (even one page) that reflects SAV guidelines and revFADP requirements
2. A compliant DPA with every AI vendor that processes client data
3. No use of consumer-grade AI tools for client matter data without documented informed consent process
4. All AI outputs reviewed by a qualified lawyer before inclusion in client deliverables
5. Annual review of AI tool portfolio and policy
6. Clear internal designation of who is responsible for AI governance decisions

This is achievable for a small firm. It does not require an IT department or external compliance team. It does require deliberate attention and someone willing to take ownership — typically the managing partner or most senior lawyer.

---

## Source References

- revFADP (nFADP): Federal Act on Data Protection, in force 1 September 2023
- FDPIC confirmation on AI applicability: May 2025
- SAV Guidelines on AI: adopted June 2024, published Anwaltsrevue 9/2024
- Federal Supreme Court precedent on auxiliary persons: DSFC 145 II 229
- Council of Europe AI Convention: signed by Switzerland March 2025
- Swiss Civil Procedure Code amendment: in force January 2025