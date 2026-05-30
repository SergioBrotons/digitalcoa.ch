# 04 — Compliance Context: Geneva/Switzerland Specific Regulatory Landscape

## Phase 04 C304 | Geneva Healthcare ICP | Independent Physician / Small Group Practice (2–10 physicians)

---

## Purpose
This document provides the Geneva/Switzerland-specific regulatory context required to serve this ICP accurately. It is the factual foundation for all compliance-adjacent service design and lead magnet content.

---

## Regulatory Layer 1: FMH Physician Ethics — Human Oversight Requirement

### What Exists
FMH (Foederatio Medicorum Helveticorum) physician ethics principles include AI-related obligations. The FMH requires human oversight of AI-assisted medical decision-making. This is stated as a principle.

### What Is Missing
FMH does not provide an operational definition of documented human oversight at independent practice scale. The requirement exists. The translation into Tuesday morning practice operations does not exist.

### The Structural Problem
"Human oversight" is interpreted differently by different practices:
- Some document AI input as notes in the record
- Some document the final decision only
- Some create separate AI use logs
- None have a consistent protocol that satisfies both FMH principle and carrier attestation evidence requirements

### FMH Intent vs. Carrier Evidence Standard
The FMH standard is intent-based: the physician intended to oversee the AI. The carrier attestation evidence standard is output-based: the physician can produce documentation showing what oversight occurred. These are different standards. The documentation gap between them is where personal liability exposure lives.

### Key Principle
Human oversight must be documentable before the record is signed — not reconstructed after. Retroactive documentation of oversight does not produce the evidence the carrier attestation represents exists.

---

## Regulatory Layer 2: Article 321 CC — Professional Secrecy

### What Exists
Article 321 of the Swiss Criminal Code establishes professional secrecy for physicians. Patient information may not be disclosed to third parties without patient consent or legal authorization. Violation is a criminal offense carrying up to 3 years imprisonment or a fine.

### The AI Vendor Data Flow Problem
When a physician uses an AI tool to process patient data, the patient data flows through the AI vendor's infrastructure. This creates a disclosure to a third party — the AI vendor — without explicit patient consent for that specific disclosure.

### The Vendor Contract Gap
Most AI vendor contracts do not:
- Explicitly address Article 321 CC professional secrecy obligations
- Provide for professional secrecy-compliant data processing agreements
- Specify where patient data is processed, stored, or accessed
- Address sub-consultant AI vendor data flows within the vendor's supply chain

### The Physician's Personal Exposure
The physician is personally accountable for Article 321 CC violations, including violations that occur through third-party AI vendors. The vendor's standard terms of service do not satisfy Article 321 CC obligations. The physician signs vendor contracts without professional secrecy review.

### Key Principle
Article 321 CC review of AI vendor contracts is a discrete legal obligation. It is not covered by general nFADP data protection agreements. It requires specific professional secrecy analysis of data flows, vendor infrastructure, and sub-consultant relationships.

---

## Regulatory Layer 3: nFADP — Swiss Federal Act on Data Protection

### What Exists
The revised nFADP (in force since 2024) governs the processing of personal data in Switzerland. It applies to AI tools used in independent medical practices. Key obligations include:
- Lawful basis for processing (consent or legitimate interest)
- Data processing agreements with vendors
- Data subject rights (access, correction, deletion)
- Data breach notification obligations

### The AI-Specific Gap
nFADP does not specifically address:
- AI-generated content in medical records (authorship and attribution)
- AI system state documentation at time of clinical decision
- Retroactive reconstruction of AI contribution to physician-signed records
- Patient-provided AI content evaluation documentation

### The Intersection with FMH and Article 321 CC
nFADP compliance alone does not satisfy FMH oversight obligations or Article 321 CC professional secrecy requirements. The ICP needs a compliance approach that addresses all three regulatory layers simultaneously — not sequential compliance that leaves gaps between frameworks.

### Key Principle
nFADP is necessary but not sufficient. The AI accountability service must address nFADP, FMH, and Article 321 CC as an integrated framework — not as separate compliance workstreams.

---

## Regulatory Layer 4: Swissdamed — Medical Device Registration

### What Exists
Swissdamed is Switzerland's registration system for medical devices, operated by Swissmedic. It has two tiers:
- Tier 1: Basic registration for all medical devices
- Tier 2: Enhanced registration for higher-risk devices

### The AI Tool Classification Question
AI-enabled diagnostic tools used by independent practices may qualify as medical devices under Swissdamed. The classification depends on:
- Intended use of the AI tool (diagnostic, therapeutic, monitoring)
- The tool's risk classification under Swissdamed criteria
- Whether the tool makes autonomous decisions or supports physician decisions

### The Framework Mismatch
Swissdamed classification criteria were designed for medical device manufacturers, not independent physician practices. The framework does not describe what independent physicians do. This creates:
- Compliance paralysis: physician concludes "this doesn't apply to me" without basis
- Compliance assumption: physician concludes "I need to comply" without pathway to determine what compliance means

### The July 2026 Timeline
Swissdamed registration timelines are active. The classification determination for AI tools used in independent practice is an immediate obligation — not a future planning item. Most independent practices have not conducted this determination.

### Key Principle
Swissdamed classification determination is a discrete, bounded service. The output is a definitive answer: applies / does not apply / partially applies with specific obligations. This is not a compliance framework — it is a regulatory determination.

---

## Regulatory Layer 5: Medical Liability Carrier Attestation

### What Exists
Medical liability carriers are sending AI governance questionnaires at policy renewal. These forms ask for:
- Evidence of AI governance structures
- Human oversight documentation
- AI tool inventory
- Staff AI supervision protocols

### The Evidence Gap
The attestation creates a documented standard. The physician signs personal attestation to AI governance adequacy. The documentation gap is now an evidentiary problem: the physician cannot produce evidence of what they attested to.

### The Self-Incrimination Risk
Urgency-driven documentation creation produces self-incriminating evidence. The attempt to comply under time pressure creates documentation that:
- Does not accurately represent actual AI practice
- Creates commercial representations to the carrier
- Is signed by physicians who have not evaluated whether the documentation is accurate

### The Pre-Signing Review Gap
No independent pre-signing review service exists in the Geneva market. Physicians sign personal liability instruments written by carrier legal teams without understanding:
- What the attestation commits them to personally
- What evidence is required to support the representations made
- What documentation gaps exist before signing

### Key Principle
Carrier attestation is a critical intervention point. Pre-signing review is the service that protects the physician's personal liability position before the documentation becomes evidence.

---

## Regulatory Layer 6: Medical Record Law

### What Exists
Medical records in Switzerland are governed by:
- Cantonal health laws (Geneva: Loi sur la santé)
- FMH medical record guidelines
- nFADP data protection obligations
- Insurance contract documentation requirements

Medical records must be:
- Accurate and complete
- Dated and signed by the responsible physician
- Retained for minimum periods (cantonal variation, typically 10+ years)
- Protected from unauthorized access

### The AI Authorship Problem
When AI generates content that appears in a medical record under the physician's name:
- The record is legally authoritative
- The AI's analytical contribution is zero-documented
- The physician cannot reconstruct what the AI contributed versus what they decided
- The physician's evidentiary position on every AI-assisted record: "My name is on this record. I cannot explain the AI's contribution."

### The Retroactive Reconstruction Problem
Retroactive reconstruction of AI contribution to physician-signed medical records is structurally impossible. The documentation that would enable reconstruction must be created at time of record creation — not after.

### Key Principle
Medical record AI attribution must be established at time of record creation. The protocol must document: what the physician documented independently, what the AI contributed, what the physician reviewed and decided — before the record is signed.

---

## Regulatory Layer 7: EU AI Act — Indirect Application

### What Exists
The EU AI Act (Regulation (EU) 2024/1689) establishes requirements for AI systems in the EU. Full application begins August 2026. It classifies AI systems by risk level.

### The Non-EU Vendor Problem
EU AI Act compliance requires EU Declaration of Conformity from the AI system provider. Non-EU-based AI vendors cannot provide this declaration. For independent practices using non-EU AI tools (most US-based AI vendors), the EU AI Act deployer obligation is structurally unsolvable at boutique scale.

### The Relevance to Switzerland
Switzerland is not an EU member. The EU AI Act does not directly apply. However:
- Geneva practices serving EU clients may face indirect EU AI Act exposure
- AI vendors serving Geneva practices may be EU-based and subject to the Act
- The EU AI Act creates a de facto standard that Geneva practices are measured against

### Key Principle
EU AI Act deployer obligations are a structural problem for independent practices using non-EU AI tools. The solution is not compliance with the Act — it is documented evidence of human oversight that satisfies FMH and carrier requirements regardless of EU AI Act classification.

---

## The Integrated Compliance Picture

The ICP faces simultaneous exposure across six regulatory layers:

1. **FMH** — Human oversight requirement without operational definition
2. **Article 321 CC** — Professional secrecy obligations for AI vendor data flows
3. **nFADP** — Data protection obligations not covering AI-specific documentation gaps
4. **Swissdamed** — Medical device classification determination for AI tools
5. **Carrier attestation** — Personal signature creating documented evidence standard
6. **Medical record law** — Authorship and attribution requirements for AI-generated content

No single existing service addresses all six layers simultaneously. The service that addresses this ICP must be an integrated compliance architecture — not sequential compliance workstreams that leave gaps between frameworks.

---

## Key Regulatory Dates

| Date | Event | Relevance |
|---|---|---|
| July 1, 2026 | Swissdamed medical device registration timelines | Classification determination active for AI diagnostic tools |
| August 2026 | EU AI Act full application begins | De facto standard for Geneva practices serving EU clients |
| End 2026 | Swiss Federal Council AI consultation draft | Future Swiss AI regulatory framework |
| Ongoing | Carrier attestation at renewal | Current trigger for documentation evidence requirements |

---

## Bilingual Note
This document is English-primary. Regulatory references are to Swiss law. French-language compliance documents should reference the equivalent French legal terms.
