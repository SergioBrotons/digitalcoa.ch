# Compliance Context: Geneva Legal — Switzerland Regulatory Environment

**Cycle:** C303 Phase 01  
**Date:** 2026-05-30  

---

## Switzerland-Specific Regulatory Framework

### 1. Swiss Bar Association (FSA/SBA) — Attorney Professional Obligations

**Key Regulation:** Federal Act on the Professional Practice of Law (Bundesgesetz über die Ausübung der Anwaltschaft / Loi sur la profession d'avocat)

**AI-Specific Position (as of 2024):**
- FSA acknowledged AI governance as a professional obligation
- General guidance: "attorneys remain responsible for AI tool usage in their practice"
- No specific documentation requirement defined
- No specific tool approval or prohibition issued
- "Best practices" standard referenced but not operationalized

**What this means for the ICP:**
- Attorney remains personally responsible for AI tool outputs and their effect on client matters
- The obligation to supervise AI usage is acknowledged but undefined
- Documentation of supervision practice is the gap — no standard exists to measure it
- The personal license risk is real but unspecified

**Regulatory gap:** No Geneva-specific standard definition. No documentation requirement specification. No attestation guidance.

---

### 2. Professional Liability Insurance (PI) — Carrier Attestation

**Context:** Swiss attorneys must carry professional liability insurance (Haftpflichtversicherung / assurance responsabilité civile).

**Current carrier behavior (2025):**
- AI-specific questions added to PI renewal attestation forms
- Questions ask about: which AI tools used, how output is supervised, what documentation exists
- Attestation completion is required for renewal
- Gap between attestation language and documentation is now a known issue

**What carriers are actually asking:**
1. "Which AI tools does the firm use in client matters?"
2. "How does the attorney supervise AI-generated output?"
3. "What documentation exists regarding AI usage in client files?"
4. "Has the firm implemented an AI governance policy?"

**ICP reality:** Answers exist in the attorney's head. No documentation exists in the file.

**Carrier form evolution (C302):** Form v4 shifted from declaration standard to evidence standard. The carrier now implies documentation should exist. The ICP signed something they cannot evidence.

---

### 3. Federal Act on Data Protection (DSG/FDAP) — Data Processing Context

**Key Regulation:** Revised Federal Act on Data Protection (in force since 2023 / in effect January 1, 2024)

**AI-relevant provisions:**
- Lawfulness of data processing (consent, legitimate interest, contractual necessity)
- Data processor obligations when using cloud-based AI tools
- Cross-border data transfer restrictions
- Client data processed through AI tools may trigger FDAP obligations

**Attorney-specific tension:**
- Attorney's duty of confidentiality (professional secrecy / Anwaltsgeheimnis) is broader than data protection law
- Client data sent to AI tool providers via cloud processing may constitute disclosure under confidentiality obligations
- The AI vendor's data handling (retention, access, jurisdiction) may conflict with professional secrecy requirements

**What this means for the ICP:**
- "Internal" tool usage may not be as safe as believed
- Cloud-based AI processing of client data may conflict with confidentiality obligations
- Vendor contract terms (data retention, access, jurisdiction) create potential conflicts with professional secrecy

**The Geneva legal specific tension:**
- AI tool providers typically process data on servers outside Switzerland
- Professional secrecy extends to preventing any unauthorized disclosure
- The gap between what attorneys believe is "internal" and what their vendor contract allows is undocumented

---

### 4. EU AI Act / Swiss Regulatory Context

**EU AI Act (in force August 2024, full compliance August 2026):**
- High-risk AI system provisions affect legal services
- No specific legal professional exemption
- Risk classification: legal AI tools used in client matters likely fall under high-risk category
- Documentation requirements for high-risk AI systems

**Swiss regulatory trajectory:**
- Swiss Federal Council AI consultation draft — end of 2026
- No specific AI regulation for legal professions currently in force
- Swiss approach tends toward principles-based rather than prescriptive
- First-mover window: Geneva-standard definition opportunity exists before Swiss-specific law defines it

**Timeline note:**
- EU AI Act full enforcement: August 2026 (~14 months)
- Swiss Federal Council AI consultation: end 2026
- The regulatory vacuum creates an advisory window that will close through future law

---

### 5. Swiss Criminal Code — Professional Secrecy (Art. 321 StGB / CP)

**Key provision:** Swiss Criminal Code Article 321 — Violation of Professional Secrecy

**AI-relevant interpretation:**
- Attorneys are subject to professional secrecy obligations
- Disclosure of client information to unauthorized third parties is a criminal offense
- Cloud-based AI processing may constitute disclosure depending on:
  - Where data is processed (jurisdiction)
  - What vendor contract says about data access
  - Whether vendor employees can access client data
  - Data retention by vendor after processing

**What this means for the ICP:**
- Using AI tools without understanding vendor data handling may constitute a professional secrecy violation
- The "I didn't send client data to a third party" belief may be incorrect if cloud processing is involved
- Documentation of AI tool data handling decisions is the evidence that demonstrates good faith compliance

---

### 6. Attorney-Client Privilege in AI Context

**Swiss privilege framework:**
- Professional secrecy is a duty, not just a right
- Privilege protection extends to attorney work product
- AI-mediated research may not be covered under traditional privilege
- The chain of custody from AI tool to work product is not defined

**The Geneva-specific privilege vulnerability:**
- AI research tool processes queries on external servers
- Research methodology (search terms, exclusion criteria, scope) is not logged by the tool
- Attorney cannot reconstruct the research path to demonstrate privilege was maintained
- If privilege is challenged, the attorney cannot show the research was conducted under privilege protections

**What the ICP needs:**
- A privilege protocol that documents AI research usage in a way that can demonstrate privilege protection was maintained
- Tool selection criteria that account for privilege protection requirements
- Documentation of how AI tools were used in the research process

---

### 7. Geneva Canton-Specific Considerations

**Geneva Bar Association (Ordre des Avocats de Genève):**
- Local bar association with additional professional standards
- FSA membership required for practice in Geneva
- Local rules may supplement federal requirements

**Geneva legal market characteristics:**
- High concentration of international organizations and multinational clients
- Client data often subject to additional confidentiality requirements
- Cross-border data flows common in Geneva legal practice
- AI tool usage patterns may differ from other Swiss cantons (more international clients = more cloud tool usage)

**Implication:** Geneva attorneys may face higher AI privilege risk due to client profile and data type. The documentation requirement for Geneva-specific practice may be higher than generic Swiss guidance suggests.

---

## Regulatory Timeline and Trigger Events

| Date | Event | ICP Urgency |
|---|---|---|
| June 19, 2026 | SBA Day of Lawyers (Geneva) | Acute — ~2 weeks away |
| July 1, 2026 | Swissdamed — medical devices only | Not applicable to general AI |
| August 2026 | EU AI Act full enforcement | Medium — 14 months |
| End 2026 | Swiss Federal Council AI consultation | Medium — future |
| Ongoing | Carrier PI renewal cycle | Continuous trigger |

**Key observation:** June 19 is the immediate trigger. No other regulatory event creates the same acute near-term urgency for Geneva legal ICPs.

---

## Compliance Gap Summary

| Regulatory Area | Current State | Gap |
|---|---|---|
| Bar AI guidance | General acknowledgment, no definition | No Geneva-standard definition exists |
| Carrier attestation | Form v4 requires evidence | No evidence production system available |
| Professional secrecy | Obligation applies to AI usage | No AI-specific protocol exists |
| Data protection | FDAP in force, AI processing covered | No attorney-specific guidance |
| Privilege protection | Traditional framework | AI research path not protected |
| Vendor contracts | Terms accepted without review | No conflict analysis available |
| Personal liability | Attorney personally exposed | No protection system exists |

---

*Next: 05_lead_magnet_draft.md (EN + FR)*