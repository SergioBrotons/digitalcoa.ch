# Compliance Context: Geneva / Switzerland Healthcare AI Regulation

## Phase 04 | Cycle 298 | 2026-05-30

---

## Regulatory Framework Overview

### Switzerland's AI Governance Structure (No AI-Specific Law)

Switzerland does not have a federal AI Act. The Federal Council's approach to AI regulation is principles-based and sector-specific, relying on existing legal frameworks rather than a dedicated AI statute.

**Key regulatory layers applying to AI in healthcare:**

1. **Federal Data Protection Act (nFADP)** — Applies to all AI processing of personal data. The FDPIC issued guidance (September 2025) confirming that AI systems are subject to nFADP regardless of whether the AI provider is Swiss or foreign.

2. **Medical Liability Law (Art. 394-406 OR)** — Physician liability for damages caused by treatment. No distinction made for AI-assisted vs. traditional care. The physician's liability exposure is unchanged by AI use.

3. **Cantonal Medical Practice Permits** — Geneva cantonal permit holders (médecins praticiens) are subject to cantonal professional standards. No Geneva-specific AI guidance exists.

4. **FMH Professional Code** — FMH membership is voluntary but covers the majority of Swiss physicians. The FMH Professional Code requires practice according to the "state of the art" (état de l'art). Whether AI-assisted care constitutes "state of the art" is unresolved.

5. **HIPAA / International standards** — Not directly applicable in Switzerland, but frequently cited by vendors as compliance benchmarks (irrelevant for Swiss nFADP compliance).

---

## Key Regulatory Bodies

### FDPIC (Federal Data Protection and Information Commissioner)
- **Role:** Supervisory authority for federal data protection compliance
- **AI Guidance (September 2025):** Confirmed that nFADP applies directly to AI-supported data processing. No Safe Harbor provisions for AI.
- **Key requirement:** AI systems processing personal data must have a valid legal basis (consent or legitimate interest per art. 6 nFADP). Third-country data transfers require adequate safeguards.
- **Enforcement:** Complaints-based. No proactive AI audit authority.

### FMH (Foederatio Medicorum Helveticorum)
- **Role:** Swiss Medical Association — largest physician body, issues professional standards
- **AI Position:** Publishes on digitalization and AI in principle, but has not issued specific AI practice standards, liability guidance, or an approved AI tool list
- **Key gap:** No distinction between "appropriate AI use" and "standard of care" in FMH guidance

### canton of Geneva — Service de la Santé (Médical cantonal)
- **Role:** Issues practice permits, handles physician discipline for Geneva
- **AI Position:** No Geneva-specific AI guidance issued to date
- **Key gap:** Independent practitioners have no local regulatory guidance on AI

### Swissmedic
- **Role:** Swiss therapeutic products authority — regulates medical devices
- **AI relevance:** AI-enabled medical devices may fall under Swissmedic oversight. Software classified as a medical device requires Swissmedic authorization.
- **Key gap:** No Swissmedic guidance specifically on low-risk AI tools used by independent practices

---

## Data Protection: nFADP and Third-Country Transfers

### The Core Problem for Independent Practices

The nFADP (revised Federal Data Protection Act, in force since 2023) requires:
- A legal basis for all personal data processing (including AI processing of patient data)
- For third-country transfers: adequate safeguards and, for certain transfers, explicit consent or adequacy decision
- A Data Processing Agreement (DPA) between the practice (data controller) and the AI vendor (data processor)

### The US Data Transfer Problem

Most commercial AI diagnostic tools are US-based or use US cloud infrastructure:
- Standard Contractual Clauses (SCCs) are the main safeguard mechanism
- The EU-US Data Privacy Framework does not directly apply to Switzerland but is referenced by FDPIC guidance
- Swiss-US data transfers without adequate safeguards violate nFADP art. 16

**Practical implication:** A Geneva independent practice using a US-based AI tool without a proper DPA and transfer mechanism is potentially in violation of nFADP, regardless of the tool's medical utility.

### FDPIC AI Guidance (September 2025) — Key Points

From publicly available FDPIC statements:
- AI systems processing personal data are subject to nFADP in full
- No exemptions for AI used in medical contexts
- Data controllers (physicians/practices) are responsible for ensuring nFADP compliance of their AI tools
- The AI vendor's claims of "GDPR compliance" do not automatically satisfy nFADP requirements
- The FDPIC has called for clear AI governance but no specific legislation has been enacted

---

## Medical Liability: The Physician's Position

### No Safe Harbor

Swiss medical liability (Art. 394 OR) holds physicians liable for damages caused by treatment. The presence of AI in the treatment process does not create a legal safe harbor:

- **If AI suggests a diagnosis and physician agrees:** Physician is liable if wrong — no different from traditional care
- **If AI suggests a diagnosis and physician overrides successfully:** Physician is not liable (correct diagnosis, good outcome)
- **If AI suggests a diagnosis and physician overrides unsuccessfully:** Physician is liable — the AI suggestion does not relieve the physician of independent judgment responsibility
- **If AI suggests a diagnosis and physician follows it, and it is wrong:** Physician is liable — following AI does not transfer liability to the vendor

### The AI Vendor's Liability Position

AI vendors typically limit their liability to the contract value of the software license — a standard limitation of liability clause that effectively means:
- The vendor is not liable for clinical outcomes from AI suggestions
- The physician bears full liability for any clinical decision informed by AI
- Patient claims for damages from AI-assisted misdiagnosis fall on the physician, not the vendor

This vendor liability limitation is standard in AI vendor contracts and is not prohibited by any Swiss regulation.

---

## FMH Professional Standards: The "State of the Art" Question

The FMH Professional Code requires physicians to practice according to the current "state of the art" (état de l'art). The unresolved question:

**Is AI-assisted diagnosis now part of the state of the art, or does it represent elevated risk?**

Arguments that AI IS part of the state of the art:
- Some AI tools have superior diagnostic accuracy to traditional methods for specific tasks
- Academic hospitals use AI routinely
- International medical literature increasingly references AI

Arguments that AI is NOT (yet) standard of care:
- No FMH endorsement of specific AI tools
- No FMH standard establishing when AI use is required vs. optional
- Independent practices do not generally have AI in use
- Liability frameworks are unresolved

**For the independent practitioner:** The ambiguity creates a rational wait-and-see posture. Without FMH clarity, adopting AI early could be seen as deviating from standard practice — which, if something goes wrong, could be used against the physician in a liability claim.

---

## The GESICA Project: What It Means for Compliance

The GESICA AI crisis management project (€2.47M, 2025-2027, HUG-led) is the most concrete AI health infrastructure in Geneva. It is:
- Cross-border (France-Switzerland)
- Funded by Interreg France-Switzerland program
- Not designed for independent practices
- Data governance structured for institutional data sharing

**Compliance relevance:** GESICA's existence shows that Swiss-French regulatory coordination on AI in healthcare is technically feasible at the institutional level. The same coordination does not exist for independent practice AI use.

---

## Practical Compliance Checklist (What Geneva Practices Actually Face)

| Requirement | Status for Independent Practice | Gap |
|-------------|-------------------------------|-----|
| nFADP-compliant DPA with AI vendor | Depends on vendor — often missing | No vendor product designed for this |
| Third-country transfer safeguards | Usually missing for US-based tools | No clear guidance on acceptable SCCs |
| FMH state-of-the-art clarity | Missing — FMH has not defined | No FMH AI standard exists |
| Patient consent for AI processing | No standard form exists | Must be improvised |
| Swissmedic device classification | Not clear for most tools | No independent practice guidance |
| Geneva cantonal guidance | None | No local standard |
| Professional liability insurance coverage for AI | Not explicitly addressed by insurers | Coverage ambiguity |

---

## Key Regulatory Gap

The Geneva independent practitioner faces a multi-layered regulatory vacuum:
1. No Swiss AI Act or medical AI-specific law
2. nFADP applies but has no AI-specific implementing guidance
3. FMH has no operational AI standards
4. No Geneva cantonal guidance
5. No Swissmedic guidance for independent practice AI tools
6. Liability remains 100% with the physician, not the AI vendor

The practical effect: the practitioner who adopts AI without a structured compliance framework is exposed on multiple fronts simultaneously, with no institutional support to navigate the exposure.