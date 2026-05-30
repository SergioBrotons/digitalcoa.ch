# Phase 04 — Compliance Context: Geneva Healthcare — C310 Cycle

**Phase:** 04 — Geneva Healthcare
**Cycle:** C310
**Date:** 2026-05-31
**Status:** COMPLETE

---

## Compliance Context Overview

The Geneva healthcare AI accountability compliance environment has five intersecting regulatory frameworks: FMH human oversight requirements, Swissmedic medical device regulation, nFADP data protection obligations, carrier attestation requirements, and the personal liability exposure under multiple frameworks simultaneously. The compliance environment is complex, overlapping, and lacks a unified small practice guide.

---

## Framework 1: FMH Human Oversight Requirements

### Regulatory Text

FMH (Foederatio Medicorum Helveticorum) has published guidance on AI in medical practice stating that human oversight of AI tools is required. The guidance is principles-based, not procedure-based.

### The Gap

No FMH-published protocol exists for what human oversight means operationally in a 2–10 physician practice. The guidance states the principle without defining the procedure.

### What This Means for Small Practice

Physicians are required to maintain human oversight of AI tools but have no reference standard for what that means in practice. The physician must:
1. Define what human oversight means for their specific practice
2. Implement a protocol for maintaining that oversight
3. Document that the oversight was maintained

None of these three steps have a FMH-provided reference. The physician's protocol must be self-designed and self-documented.

### Personal Liability Structure

If Swissmedic or a carrier makes inquiry about AI tool use, the physician must demonstrate:
- What human oversight meant in their practice
- How it was maintained
- What documentation existed

The absence of FMH guidance does not eliminate the oversight obligation — it transfers the protocol design to the physician.

### Key Compliance Implication

**Physician-developed human oversight protocol is evidence.** The FMH has not provided a standard protocol — but it has stated the requirement. A physician who designed, documented, and implemented their own oversight protocol is in a stronger position than one who did nothing.

---

## Framework 2: Swissmedic Medical Device Regulation

### Regulatory Text

Swissmedic regulates medical devices in Switzerland. AI tools used for diagnostic purposes may qualify as medical devices under the Therapeutic Products Act (HMG). The swissdamed database is the Swiss registration system for medical devices.

### The July 1, 2026 Deadline

The swissdamed registration system became operational with a transition period ending July 1, 2026. After this date, medical devices must be registered in swissdamed.

### The Operator Classification Question

Under Swissmedic rules, medical device "operators" (Betreiber) have specific compliance obligations. The classification question for small practice physicians is:

**Is a Geneva physician who uses an AI diagnostic tool classified as a device operator, and if so, what are their operator obligations?**

This question is unanswered for small practice in published Swissmedic guidance. The vendor's CE mark or "Swissmedic compliant" claim addresses the device, not the physician's operator status.

### What Operator Obligations Would Mean

If a physician is classified as a device operator for their AI diagnostic tool:
- Registration obligations in swissdamed
- Ongoing compliance documentation
- Incident reporting obligations
- Operator compliance record maintenance

None of these obligations have a published small practice guide.

### The Retroactive Risk

Physicians who deployed AI diagnostic tools in 2023-2024 may have been operating as unregistered device operators since deployment. The July 1, 2026 deadline creates retroactive exposure:
- Tools deployed in 2023-2024 without registration
- No documentation of operator compliance obligations
- July 1, 2026 deadline now visible
- Carrier attestation forms asking about AI use from that period

### Key Compliance Implication

**Swissmedic operator classification assessment is the first action.** Before determining what documentation is needed, the physician needs to know whether they are classified as a device operator and what obligations that creates.

---

## Framework 3: nFADP Data Protection

### Regulatory Text

The Swiss Federal Act on Data Protection (nFADP), revised and in force, requires data minimization (Article 6), purpose limitation, and data protection by design. Article 63 creates personal liability for managing directors of companies that violate data protection obligations.

### The Healthcare Data Processing Specificity

Healthcare data is special category data under nFADP. Processing of health data requires specific legal basis and heightened protection measures.

### The AI Data Minimization Conflict

AI diagnostic tools require comprehensive patient data to function:
- Full patient history
- Complete lab results
- All available imaging data
- Full medication records

nFADP Article 6 requires data minimization: collection limited to what is necessary for the stated purpose.

**The conflict:** The AI tool requires comprehensive data to generate accurate recommendations. nFADP requires minimizing data collection to what is necessary. These requirements are in direct tension for AI-enabled diagnostic workflows.

### The Resolution Question

The nFADP conflict for clinical AI has no published resolution. Possible resolution approaches:
1. **Clinical necessity argument:** Comprehensive data processing is necessary for clinical diagnostic accuracy — documented as clinical necessity
2. **Purpose limitation approach:** AI diagnostic support as a distinct purpose with explicit patient consent
3. **Data retention minimization:** AI processes data but retains only the output, not the input data

Each approach has documentation requirements. None have been tested in published Swissmedic or PFPDT guidance specifically for clinical AI.

### Article 63 Personal Liability for Physicians

Article 63 nFADP creates personal liability for "persons responsible" for data processing operations. For a small practice physician:
- The physician controls the practice's data processing
- AI tool use is data processing under nFADP
- Violations create personal liability under Article 63

This is parallel to the FINMA Article 63 exposure documented in C310 Phase 02 (finance) — same article, different regulatory context, same personal liability structure.

### Key Compliance Implication

**Data minimization conflict resolution must be documented.** The AI tool's data requirements vs. nFADP minimization is an active compliance question. The physician's resolution approach must be documented before a carrier or PFPDT inquiry.

---

## Framework 4: Carrier Attestation Requirements

### The Shift to Physician-Personal Attestation

Carrier attestation forms for Geneva medical practices have shifted from practice-level attestation (the practice signed) to physician-personal attestation (the individual physician signed). This was confirmed in C309 Phase 04.

### The Carrier Form as Design Specification

As documented in C310 Phase 01 (legal), the carrier form is the design specification for the evidence architecture. In healthcare, the carrier form now:
1. Names the individual physician personally
2. Asks about AI tools in use since 2023
3. Creates documented certification the physician must support
4. Activates personal liability under carrier terms and nFADP

### The Carrier Form Question Sequence (Healthcare)

Typical carrier attestation questions for medical practices now include:
- What AI tools does the practice use?
- Since what date has each tool been in use?
- Who has access to AI tools on patient data?
- How is human oversight of AI tools maintained?
- Has any AI tool been used in patient care decisions?
- What documentation exists for AI-assisted clinical decisions?

### The Retroactive Gap and Carrier Forms

The carrier form asks about AI use since 2023. The physician who deployed AI tools in 2023 without documentation now faces:
- A form that requires specific answers about 2023-2024 use
- No documentation from that period
- Physician-personal signature creating personal certification
- No retroactive reconstruction methodology

### Key Compliance Implication

**Pre-signing carrier form review is the highest-value intervention point.** The physician needs to know what the form actually requires before signing — not after. Retroactive reconstruction of undocumented AI use must happen before the form is signed, not after.

---

## Framework 5: Personal Liability Accumulation

### The Stacked Liability Structure

Geneva physicians face stacked personal liability across multiple frameworks simultaneously:

1. **FMH license accountability** — Human oversight obligation with no reference standard
2. **Swissmedic operator accountability** — Possible device operator obligations, classification undefined
3. **nFADP Article 63 personal liability** — Personal liability for data processing violations
4. **Carrier attestation personal certification** — Physician-personal attestation creates documented standard
5. **Patient harm liability** — If AI-assisted decision contributes to adverse outcome

### Why This Is Distinct From Other Verticals

In legal (C310 Phase 01): Personal liability is through attorney license and professional obligations — significant, but the regulatory framework has published procedures.

In finance (C310 Phase 02): Personal liability under nFADP Article 63 and FINMA requirements — significant, but institutional DDQ provides a reference standard.

In consulting (C310 Phase 03): Personal liability under nFADP Article 52 — significant, but client DDQ provides a commercial reference.

In healthcare (C310 Phase 04): Personal liability stacks across FMH (no published standard), Swissmedic (classification undefined), nFADP Article 63 (parallel to finance but no DDQ reference), and carrier attestation (physician-personal). The physician license is irreplaceable.

### The Efficiency-Liability Paradox (Confirmed C310)

AI tool adoption is necessary for practice sustainability:
- Staffing crisis requires AI administrative tools
- Competitive pressure requires AI efficiency tools
- Clinical quality expectations require AI diagnostic support

But each AI adoption creates:
- Retroactive documentation gap
- FMH oversight obligation
- Swissmedic operator question
- nFADP data processing obligations
- Carrier attestation requirements

More AI = more efficient and more exposed simultaneously.

### Key Compliance Implication

**The evidence architecture is the liability containment system.** Evidence architecture does not prevent AI adoption — it contains the liability exposure that comes with adoption. The solution is not "use less AI" — it is "document AI use in a way that demonstrates oversight, clinical reasoning, and compliance with FMH, Swissmedic, and nFADP simultaneously."

---

## The Documentation Standard Question

### What Standard Applies?

No single authority has published a documentation standard for small practice clinical AI use. The physician is managing five framework requirements simultaneously without a unified standard:

- FMH: Human oversight documentation — no published standard
- Swissmedic: Operator compliance documentation — no published small practice guide
- nFADP: Data processing documentation — general framework, not clinical AI specific
- Carrier forms: Attestation-specific documentation — specific to each carrier
- Medical records: Clinical documentation — standard format, not AI-specific

### The Physician's Documentation Challenge

The physician must produce documentation that simultaneously:
1. Matches carrier form attestation questions
2. Demonstrates FMH human oversight was maintained
3. Satisfies Swissmedic operator obligations if classified as operator
4. Documents nFADP data minimization compliance
5. Integrates with standard medical record format

No published guide tells the physician how to do this. The evidence architecture is the operational solution.

---

## Timeline and Deadlines

### July 1, 2026 — Swissdamed Registration Deadline

- Transition period ends
- Medical devices must be registered in swissdamed
- Operator obligations activate for unregistered devices
- Retroactive exposure for devices deployed since 2023 without registration

### Carrier Attestation Renewal Windows

- Annual or biennial renewal depending on carrier
- Physician-personal attestation required
- Retroactive documentation gap visible at renewal

### FMH Ongoing Obligation

- Human oversight requirement ongoing
- No published protocol — obligation continuous
- Documentation requirement continuous

### nFADP Enforcement Activating

- PFPDT increasing enforcement activity
- Carrier forms asking nFADP-related questions
- Article 63 personal liability exposure active

---

## Compliance Context Summary

| Framework | Requirement | Documentation Gap | Personal Exposure |
|---|---|---|---|
| FMH | Human oversight | No published protocol | License accountability |
| Swissmedic | Device registration | Classification undefined for small practice | Operator obligations |
| nFADP | Data minimization | No clinical AI resolution | Article 63 personal liability |
| Carrier forms | Physician-personal attestation | Retroactive gap (2023-2024) | Personal certification |
| Patient harm | Duty of care | Clinical reasoning documentation | Malpractice liability |

---

## Compliance Action Sequence

1. **Swissmedic operator classification assessment** — determine whether physician is classified as device operator
2. **Retroactive AI use reconstruction** — document 2023-2024 AI deployment before carrier form signing
3. **FMH human oversight protocol design** — physician-designed, documented, implemented protocol
4. **nFADP data minimization resolution** — documented approach to AI tool data requirements vs. minimization
5. **Clinical reasoning documentation format** — real-time format for AI-assisted diagnostic decisions
6. **Carrier form pre-signing review** — documentation to match attestation before signature

---

*Compliance context — Phase 04 Geneva Healthcare C310 Cycle complete. FMH + Swissmedic + nFADP + carrier forms + personal liability stack documented.*
