# 04 — Compliance Context: Geneva / Switzerland Regulatory Landscape
## Phase 04 C306 | Geneva Healthcare | Independent Physician / Small Group Practice (2–10 physicians)

---

## Switzerland / Geneva Regulatory Framework for AI in Medical Practice

### The Four-Layer Regulatory Stack

**Layer 1: Professional Accountability (FMH)**

The Swiss Medical Association (FMH) sets professional standards for physician conduct. AI use in medical practice falls under FMH's human oversight requirement: the physician must maintain "human oversight" of AI-assisted decisions. The FMH standard is stated as principle without operational definition — no Geneva-calibrated protocol defines what human oversight means in practice for a 2-10 physician office.

Critical point: FMH oversight is stated as obligation. There is no published endpoint for what constitutes adequate FMH human oversight. The physician is accountable to a standard that has been stated without being defined.

**Layer 2: Data Protection (nFADP)**

The revised Federal Act on Data Protection (nFADP) establishes obligations for automated decision-making (Art.21) and reversal rights (Art.22). For clinical documentation, these obligations create a compound problem:

- Art.21: Patient must be informed when AI-influenced decisions are made about them
- Art.22: Patient must be able to request reversal/review of AI-influenced decisions
- The conflict: Art.22 reversal rights require modifying the record, which conflicts with medical record integrity requirements

Independent practices have no mechanism to identify which decisions in their records are AI-influenced. The obligations are simultaneously active. The infrastructure to meet them does not exist.

**Layer 3: Professional Criminal Liability (Art.321 CP + Art.63 nFADP)**

Art.321 of the Swiss Criminal Code establishes physician professional secrecy obligations. Violation is a criminal offense with penalties up to imprisonment.

Art.63 nFADP creates personal criminal exposure — up to CHF 250,000 and imprisonment for willful violations of professional secrecy in data processing contexts.

The critical compound mechanism (C305 Finding 6): Vendor terms of service accepted by click-through in AI tool activation include provisions allowing vendor use of de-identified or aggregate patient data for AI model training. The physician cannot eliminate model training provisions without losing AI tool functionality — creating structurally enforced choice between operational necessity and criminal exposure.

**Layer 4: Medical Device Regulation (Swissdamed)**

Swissdamed is Switzerland's medical device registration system, administered by Swissmedic. Swissdamed becomes operational for medical DEVICES on July 1, 2026.

Critical clarification: Swissdamed July 2026 applies to medical DEVICES — not to general AI attestation for service provision. Swissdamed applies to AI tools classified as medical devices. Most general-practice AI documentation and scheduling tools are not medical devices. Swissdamed July 2026 is not the AI governance deadline that independent practices believe it is.

Market confusion: Many independent practices believe Swissdamed July 2026 is the relevant compliance deadline for their AI tools. This belief is causing misallocated attention and potential gap in actual compliance preparation for the nFADP obligations that are already active.

---

## Geneva-Specific Regulatory Considerations

### Canton Geneva Health Directorate (DGS)

Canton Geneva has additional data protection requirements for health data under Genevan health law. The interaction between Canton-level health data obligations and nFADP creates a compound compliance environment. Canton-specific requirements may impose additional documentation obligations that are not addressed in general nFADP guidance.

Critical gap: No Geneva-specific AI governance guidance exists for independent medical practice. The regulatory environment is national (nFADP, FMH) and canton-specific (Geneva health law), with no published integration document for independent practice.

### HIN (Health Info Net) Certification Scope

HIN certification covers the transmission of patient data between covered healthcare entities. HIN certification is required for data transmission in Swiss healthcare contexts.

The HIN paradox (new in C306): HIN certification does not cover AI processing of data. If an AI tool is interposed in the data flow — or if AI processing occurs before or after HIN-protected transmission — HIN does not cover that processing. The physician's HIN certification provides a false sense of comprehensive data protection. In practice: HIN covers one segment of the data flow. AI tools process data in segments HIN does not cover.

### Medical Record Retention Requirements

Swiss medical record retention requirements vary by canton. In Geneva, medical records must be retained for a minimum period after the last patient contact. The retention requirement creates a long-tail liability period: records created with AI tools today remain subject to potential review for years or decades. The physician's AI governance documentation must be adequate for review under whatever standard exists at the time of review — not just the current standard.

---

## The EU AI Act Intersection (for Geneva Practice)

### August 2026: EU AI Act Becomes Applicable

The EU AI Act becomes applicable in August 2026 (~14 months from current date). For Geneva independent practices, the EU AI Act creates potential exposure through:

1. **AI tools classified as high-risk under Annex III** — medical AI tools fall under high-risk classification, requiring conformity assessment, technical documentation, and human oversight provisions
2. **Deployer obligations** — organizations deploying high-risk AI systems have documentation, oversight, and incident reporting obligations
3. **EU market AI providers** — most Swiss healthcare AI tool providers serve EU markets and must comply with EU AI Act requirements; the physician's accountability for their vendor's EU AI Act compliance is unclear

Critical gap: Whether the EU AI Act applies to Swiss independent practices directly is not definitively settled. What is certain: Swiss AI tool providers serving EU markets will pass EU AI Act requirements back to Swiss users through contract terms. The physician's AI tool contracts will increasingly include EU AI Act deployer obligations — obligations the physician has not evaluated and cannot enumerate.

### GPAI Provider Obligations (Article 53)

General Purpose AI providers under EU AI Act Article 53 must provide technical documentation, comply with transparency requirements, and maintain copyright compliance for training data. The cascade: GPAI provider obligations are passed to deployers through terms of service. The physician accepts GPAI terms by clicking through vendor contracts — terms that include obligations the physician has not evaluated.

---

## C306 Compliance Context: What's New vs. C305

### New in C306 Phase 04 Compliance Context

**1. Swissdamed July 2026 clarification as non-general-AI-attestation deadline**

The market confusion about Swissdamed's scope is creating a compliance attention misallocation. The actual deadline that matters (nFADP obligations already active) is being displaced by the more visible but less applicable Swissdamed deadline. The compliance positioning opportunity: name the confusion, clarify the actual obligations, provide proportionate guidance.

**2. EU AI Act deployer obligation cascade through vendor contracts**

The EU AI Act creates a new category of contractual obligation that will be passed to independent practice users through AI tool terms of service. The physician will be agreeing to EU AI Act deployer obligations without knowing it — obligations that include conformity assessment cooperation, incident reporting, and technical documentation maintenance.

**3. HIN scope limitation as unrecognized compliance gap**

HIN certification is being relied upon as comprehensive data protection when it covers only transport security. The gap between what HIN provides and what physicians believe it provides is a structural compliance blind spot.

**4. Art.321 CP model training provision compound exposure**

The Art.321 CP + vendor model training + Art.63 intersection (identified in C305 Finding 6) becomes more acute as AI tool providers update their terms to reflect EU AI Act obligations. Each contract update potentially adds new model training provisions that extend physician criminal exposure.

---

## The Structural Compliance Problem

The compliance environment for Geneva independent practice AI governance has four characteristics that make adequate self-compliance impossible:

**1. Multiple non-aligned standards** — carrier attestation, FMH human oversight, and Art.63 criminal standard do not share a common definition of what adequate AI governance means. The physician must simultaneously satisfy three non-aligned standards.

**2. Standards without operational endpoints** — FMH human oversight is stated as principle. No published protocol defines what adequate FMH human oversight means in independent practice operations.

**3. Obligations without infrastructure** — Art.21 + Art.22 are active obligations. No mechanism exists to identify AI-influenced decisions in clinical records, disclose them to patients, or handle Art.22 reversal requests in clinical documentation context.

**4. Vendor terms defining physician criminal exposure** — The physician's Art.321 CP criminal exposure is partially defined by vendor contract provisions the physician has not evaluated and cannot stop without losing AI tool functionality.

---

## Compliance Positioning Language

**When ICP raises Swissdamed concern:**
*"Swissdamed July 2026 applies to medical devices — most general practice AI tools are not classified as medical devices. The obligations that are already active — nFADP Art.21 and Art.22 — are not tied to Swissdamed. You may be preparing for the wrong deadline while the actual obligations accumulate silently."*

**When ICP raises HIN confidence:**
*"HIN certification protects the transmission channel between healthcare entities. It does not protect AI processing that occurs before or after that transmission. The corridor is secured. The AI tool interposed in the corridor is not HIN-governed."*

**When ICP raises EU AI Act:**
*"The EU AI Act applies to your AI tool vendors — who must then pass their obligations to you through terms of service. You are agreeing to EU AI Act deployer obligations every time you accept a vendor update without review. The obligations are real. The awareness of accepting them is not."*

---

*Compliance context documented. Four-layer regulatory stack (FMH, nFADP, Art.321 CP + Art.63, Swissdamed), Geneva-specific considerations (DGS, HIN scope, record retention), EU AI Act intersection, and structural compliance problems named. New C306 elements: Swissdamed scope clarification, EU AI Act deployer cascade, HIN paradox, Art.321 model training exposure.*