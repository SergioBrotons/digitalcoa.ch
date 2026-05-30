# Compliance Context — Geneva Legal (Phase 01, C302)

## ICP Profile
Small law firm, 2–5 attorneys, Geneva-based. Managing partner or senior associate personally accountable for AI decisions. Concerned about attorney-client privilege in AI systems, carrier PI attestation, bar guidance gaps, and what "adequate" AI governance means at boutique scale.

---

## Geneva/Switzerland Specific Regulatory Environment

### Primary Legal Framework

#### Article 321 of the Swiss Criminal Code — Professional Secrecy

**What it says:**
Article 321 CP criminalizes the unauthorized disclosure of secrets that a person learns through their professional activity. For attorneys, this is a statutory obligation, not merely an ethical guideline.

**Why it matters for AI:**
Any AI tool that processes client information must be evaluated against Article 321 CP standards. The attorney is legally responsible for ensuring that any third party (including AI vendors) that handles client information maintains equivalent confidentiality obligations.

**The data processing agreement (DPA) requirement:**
Using an AI vendor without a signed DPA that includes equivalent confidentiality obligations may itself constitute a violation of Article 321 CP. The attorney cannot delegate confidentiality obligations to a vendor that doesn't match the attorney's statutory obligations.

**The Geneva cantonal layer:**
Geneva's local rules (LLCA — Loi sur la profession d'avocat) add additional obligations on top of Article 321 CP. Geneva attorneys are subject to both cantonal and federal professional secrecy requirements.

---

#### LLCA — Geneva Lawyers' Professional Act

**What it says:**
The LLCA governs the practice of law in Geneva. It establishes duties of confidentiality, competence, and proper supervision of any auxiliary persons (including AI tools and their outputs).

**Key provisions relevant to AI:**
- Attorneys are responsible for the work product of their firm, including AI-assisted work
- Supervision requirements extend to AI outputs, not just human employee outputs
- The "auxiliary person" concept in LLCA likely extends to AI tools used in client matters

**The attestation problem:**
When an attorney signs a carrier attestation, they are effectively representing that their AI governance meets the supervision standard required by LLCA. If the documentation doesn't exist, the signature creates personal exposure.

---

### Federal Data Protection Framework

#### revFADP (revised Federal Act on Data Protection)

**Effective date:** September 1, 2023

**What it means for AI use:**
The revFADP directly applies to AI processing of personal data. Law firms using AI tools to process client information (which frequently includes personal data) are subject to revFADP obligations, independent of any EU AI Act considerations.

**Key obligations:**
- Lawfulness of processing (typically consent or legitimate interest in legal services context)
- Data minimization (AI tools should only access information necessary for the task)
- Purpose limitation (data processed for one purpose cannot be repurposed)
- Storage limitation (data should not be retained beyond necessity)

**The vendor DPA requirement:**
revFADP requires that any third-party processor (including AI vendors) operate under a DPA that imposes equivalent data protection obligations. Vendor terms that permit data retention for training purposes may violate storage limitation and purpose limitation principles.

---

### Swiss Bar Association Guidelines — June 2024

**What they establish:**
The SBA published AI use guidelines for Swiss attorneys in June 2024. These are non-binding recommendations, not mandatory rules, but they define the standard of care the ICP is measured against.

**Key provisions:**
1. **Competence:** Attorneys using AI must understand the tool's capabilities and limitations
2. **Confidentiality:** AI tools must maintain client confidentiality equivalent to attorney obligations
3. **Supervision:** AI-generated output must be supervised, just like human employee output
4. **Client communication:** Clients should be informed when AI is used in their matter
5. **Billing:** AI-assisted work must be billed appropriately (not inflated through AI use)

**The documentation gap:**
The SBA guidelines create a supervision obligation but do not define what adequate supervision documentation looks like. The ICP is required to supervise but has no methodology for demonstrating supervision.

---

### The Carrier Attestation Layer

**Professional Indemnity (PI) Insurance Requirements**

Carrier forms (v4 as of C301/C302 cycle) now ask for evidence of AI governance, not just policy attestation. The specific evidence requirements include:

- **Last three authorization records:** Documentation showing who authorized which AI decisions
- **Vendor attestation:** Confirmation that AI vendors meet confidentiality and data protection requirements
- **Decision attribution:** Evidence that the firm can attribute specific AI-assisted decisions to named individuals
- **Audit trail:** Documentation that AI tool usage is tracked and reviewable

**Why this is new:**
Previous carrier forms asked whether the firm had an "AI policy." The new forms ask for evidence that the policy is actually being implemented. This shift from policy attestation to evidence attestation is the structural driver of ICP anxiety.

**The personal liability dimension:**
When the managing partner or senior associate signs the carrier form, they are personally attesting to the accuracy of the information provided. If the documentation doesn't exist or is inadequate, the signature creates personal exposure — not just firm exposure.

---

### EU AI Act (Indirect Application for Geneva Firms)

**Effective date:** August 2, 2026 (full enforcement)

**Why it matters for Geneva legal ICP:**
Switzerland is not bound by the EU AI Act. However:
- Geneva firms with EU client exposure are subject to EU AI Act deployer obligations
- The Act's "high-risk" categorization includes legal services AI systems
- Even without mandatory compliance, EU AI Act creates a de facto standard that carriers and clients reference

**The deployer obligation:**
Firms using high-risk AI systems must maintain technical documentation, conduct conformity assessments, and ensure human oversight. For a small Geneva firm, the documentation requirements are substantial.

**The Swiss consultation draft:**
The Federal Council is expected to present a draft for Swiss AI regulation by end of 2026. This will create a domestic framework that may overlap with or diverge from EU AI Act. The ICP faces potential dual regulatory pressure — EU AI Act for EU-facing work, Swiss framework for domestic work.

---

### The Council of Europe AI Convention

**Status:** Switzerland has ratified the Framework Convention on Artificial Intelligence, Human Rights, Democracy and the Rule of Law.

**What it means:**
The Convention will apply primarily to state actors initially. Private sector implementation will come through sector-specific amendments. The implementation timeline is slow, but the Convention establishes principles that will eventually influence professional standards.

**Relevance to Geneva legal ICP:**
The Convention's emphasis on human oversight, transparency, and accountability aligns with SBA guidelines. The ICP operating to SBA guidelines is likely operating in compliance with Convention principles — but this is not yet tested.

---

### June 19 SBA Day of Lawyers — Engagement Trigger

**What it is:**
The SBA Day of Lawyers (Journée des avocat·e·s) on June 19, 2026 is the annual gathering of Swiss legal professionals. It is the most significant single-date engagement opportunity for Geneva legal ICP.

**Why it's acute:**
This is approximately two weeks from the research date (May 30, 2026). The event creates a forcing function for self-assessment — attorneys who attend will be surrounded by peers discussing AI governance, attestation, and supervision obligations.

**What the ICP is thinking:**
*"I should probably have my documentation in order before June 19. I'm going to be in a room with colleagues who might have already dealt with carrier attestation. If I haven't, that's a problem."*

**The conversion window:**
The 2–3 weeks before June 19 represent the acute conversion window. The ICP who has been avoiding the problem will be forced to confront it in a peer context. This is the moment when abstract concern converts to purchase intent.

---

### Key Compliance Dates

| Date | Event | ICP Relevance |
|------|-------|----------------|
| June 19, 2026 | SBA Day of Lawyers | Acute engagement trigger |
| July 1, 2026 | Swissdamed launch | Medical device scope confusion (secondary advisory problem) |
| August 2, 2026 | EU AI Act full enforcement | Firms with EU exposure face deployer obligations |
| End 2026 | Swiss Federal Council AI consultation draft | Domestic AI framework coming |
| ~14 months | EU AI Act enforcement | Cross-border pressure building |

---

## Compliance Gap Summary

### What the ICP Must Satisfy

1. **Article 321 CP** — professional secrecy, vendor DPA requirement
2. **LLCA** — supervision obligations, auxiliary person accountability
3. **revFADP** — data protection compliance for AI processing
4. **SBA Guidelines** — supervision, confidentiality, competence standards
5. **Carrier Form v4** — evidence attestation, authorization records, decision attribution
6. **EU AI Act (if applicable)** — deployer obligations for high-risk systems

### The Documentation Problem

No existing guidance defines what "Geneva-standard documentation" looks like for a 2–5 person firm trying to meet all of the above simultaneously. The compliance requirements exist in separate silos — professional obligations, data protection, carrier attestation, EU AI Act — without an integrated methodology.

### The Personal Exposure Dimension

The ICP is personally named on carrier attestations. The SBA guidelines are non-binding but define the standard of care. Article 321 CP is criminal. The combination creates personal liability exposure that the ICP is acutely aware of and has no clear solution for.

---

## Net-New Finding: The "Adequate" Definition Vacuum

**What exists:**
- SBA guidelines: principles, not methodology
- Carrier forms: evidence requirements, not production methods
- revFADP: data protection principles, not AI-specific documentation requirements
- EU AI Act: compliance obligations, not small-firm-specific implementation guidance

**What's missing:**
A definition of "adequate AI governance documentation" specifically calibrated for a 2–5 person Geneva law firm subject to Article 321 CP, LLCA, revFADP, SBA guidelines, and carrier form v4 simultaneously.

This definition vacuum is the compliance market opportunity.

---

*Phase 01, C302 — Geneva legal compliance context*