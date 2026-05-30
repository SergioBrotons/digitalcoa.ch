# Phase 04 — Compliance Context: Geneva Healthcare — C309 Cycle

**Phase:** 04 — Geneva Healthcare
**Cycle:** C309
**Date:** 2026-05-30
**Status:** COMPLETE

---

## Regulatory Framework (C309)

### The Healthcare AI Governance Stack

```
Primary Layer: nFADP (Swiss Federal Data Protection Act)
               ↓ Art. 5(c) — sensitive health data = highest protection
               ↓ FDPIC May 8, 2025 explicit: nFADP applies directly to AI-based processing
               ↓ Personal liability for physician under Art. 63 (managing director equivalent)

Secondary Layer: Swissmedic / Therapeutic Products Act (TPA)
                ↓ AI tools as medical devices → swissdamed registration July 1, 2026
                ↓ "Operator" obligations for physician using medical device AI
                ↓ EU AI Act medical device extension: Aug 2027 (indirect relevance)

Tertiary Layer: FMH (Foederatio Medicorum Helveticorum)
               ↓ Human oversight stated as principle; no operational protocol published
               ↓ Professional standards: physician bears ultimate clinical responsibility
               ↓ Carrier attestation: physician-personal certification language activating

Quaternary Layer: Cantonal Health Law (Geneva)
                 ↓ Practice licensing includes data security requirements
                 ↓ No specific AI regulations; existing obligations apply

Additional: CoE AI Convention (signed March 2025; implementation 2026-2027)
            ↓ Healthcare amendments expected to add transparency + human oversight obligations
```

---

## nFADP Compliance (C309)

### Art. 5(c) — Sensitive Data Processing

Health data is explicitly "sensitive" under nFADP Art. 5(c). AI tool processing of patient data = highest protection category.

**Key obligations:**
- Explicit consent OR specific legal basis under Art. 6
- Data Processing Agreement (DPA) with AI tool vendors meeting Art. 32 requirements
- Privacy notice disclosure: Art. 26 — when data collected from source other than data subject
- DPIA (Data Protection Impact Assessment): required for high-risk AI processing

### FDPIC May 8, 2025 Confirmation

FDPIC explicitly confirmed that nFADP applies directly to AI-based data processing. Healthcare data processing by AI tools is squarely covered.

**C309 signal:** Carrier forms are now asking physician-personal attestation questions calibrated to nFADP compliance. Physicians who signed carrier attestation without documentation matching their signature = exposed.

### Art. 63 — Personal Liability

nFADP Art. 63 creates personal liability for managing director-level decisions. In small medical practice, the physician-owner functions as managing director.

**Healthcare-specific application:** When physician signs carrier AI attestation personally, they are certifying nFADP compliance at the personal level. Documentation gap = personal exposure.

**C309 signal:** The carrier form language is shifting from practice-level to physician-personal certification. This aligns with Art. 63 personal liability — carriers are effectively requiring personal attestation.

---

## Swissmedic Compliance (C309)

### AI Tools as Medical Devices (SaMD)

If an AI tool is used for:
- Diagnosis, monitoring, or treatment support
- Medical image analysis
- Clinical decision support

→ It may qualify as Software as a Medical Device (SaMD)
→ Swissmedic registration + compliance obligations apply

### swissdamed — Mandatory Registration (July 1, 2026)

Swissmedic's national medical device database. Mandatory registration for all medical devices placed on the Swiss market.

**For small practices:**
- If your AI tool is a medical device, the physician is an "operator" under Swissmedic rules
- Operator has independent compliance obligations, separate from vendor certification
- Most small practices are unaware of operator status

**C309 signal:** Physicians report receiving "certification" letters from AI tool vendors but don't understand:
- Whether they are classified as operators
- What operator compliance documentation is required
- Whether vendor certification satisfies their obligations

### Operator Classification for Small Practice (C309 New Pressure)

**The physician as operator question:**
- Is a solo GP using Dragon Medical One a "device operator"?
- Is a 3-physician practice using AI scheduling tools a "device operator"?
- Does the answer change based on what the AI tool does with patient data?

**The gap:** Swissmedic guidance is written for medical device manufacturers, not small practice operators. No practical classification guide exists for small medical practice AI tool operators.

---

## FMH Human Oversight (C309)

### The Gap: Principle Without Protocol

FMH has stated human oversight as a requirement. No operational protocol exists for small practice implementation.

**What FMH guidance says:** "Physicians must maintain human oversight of AI-assisted decisions."

**What FMH guidance doesn't say:** What constitutes "human oversight" in a 3-physician practice using AI tools. What documentation proves oversight was maintained.

**C309 signal:** Physicians read FMH guidance and find it principles-based, not operational. They don't know what to document or how to prove oversight.

### Professional Standards Implication

Under FMH professional standards:
- Physician bears ultimate responsibility for patient care decisions
- AI tool recommendation does not transfer liability to the tool or vendor
- Physician must demonstrate they evaluated AI output with appropriate clinical judgment

**Evidence architecture application:** Documentation that shows physician reviewed AI output, understood the basis, and made a clinical decision with the AI information as input.

---

## Carrier Attestation — Physician-Personal Certification (C309)

### The Shift from Practice-Level to Physician-Level

**C309 observation:** Carrier forms are now naming the physician personally in AI attestation requirements.

**What this means:**
- The physician signs personally, not just as practice owner
- Carrier is creating a record of physician certification
- Documentation must match what the physician certified
- If carrier asks for evidence of compliance, the physician must produce it

**C309 signal:** This shift has created a new documentation requirement that physicians are only beginning to recognize. Physicians who signed physician-personal carrier attestation without documentation = personal exposure.

### What Carrier Forms Are Now Asking (C309)

Based on Phase 01 (legal) findings about carrier form sophistication escalation, healthcare carrier forms are now including:
- Which AI tools are used in the practice
- By whom (staff role)
- On what patient data
- How human oversight is documented
- Whether Swissmedic device classification has been assessed

---

## Medical Assistant AI Delegation Accountability (C309)

### The Gap

Physicians have authorized AI tools for practice use. Medical assistants use those tools on patient data. The physician is personally liable for AI-assisted decisions made by staff.

**No tracking system exists** to document:
- What AI tools staff are using
- What patient data is being processed
- How physician oversight is maintained
- What decisions were AI-assisted

**C309 signal:** Physicians know this is a gap but don't know how to create a tracking system without creating operational burden.

### Evidence Architecture Solution

The evidence architecture creates a documentation system that:
- Captures AI tool use without requiring real-time physician review
- Demonstrates oversight without creating operational burden
- Produces carrier-ready documentation matching what the physician certified

---

## Post-Incident Documentation Protocol (C309)

### The Gap

No standardized Swiss primary care protocol exists for documenting AI-assisted decisions when a patient incident occurs.

**What physicians face:**
- Swissmedic inquiry about AI tool use
- Patient record audit
- Carrier investigation
- Potential liability proceeding

**What they need:**
- Standardized documentation format for AI tool use
- Clear record of physician oversight
- Evidence that AI was used appropriately within FMH standards

**C309 signal:** Physicians are managing post-incident documentation ad hoc. No standard format exists.

---

## Regulatory Timeline (C309)

| Date | Event | Impact on Small Practices |
|---|---|---|
| Sep 2023 | nFADP in force | Operative now |
| May 8, 2025 | FDPIC explicit: nFADP applies to AI processing | Operative now; carrier attestation activating |
| July 2025 | Clause du besoin effective | Operative now; efficiency investment justified |
| March 2025 | Switzerland signs CoE AI Convention | Implementation 2026-2027 |
| July 1, 2026 | swissdamed mandatory registration | Compliance deadline; operator obligations active |
| End 2026 | CoE AI Convention consultation draft | Healthcare amendments expected |
| Aug 2027 | EU AI Act medical device extended deadline | Indirect relevance for Swiss practices using EU-market tools |
| 2026+ | CoE AI Convention implementation in CH | Enhanced human oversight + transparency obligations |

---

## C309 NET-NEW Compliance Findings

1. **Physician-personal carrier attestation creates nFADP Art. 63 personal liability** — physician signing personally = documentation must match signature personally
2. **Swissmedic operator classification for small practice is undefined** — no practical guide exists for physician as device operator under 3-person practice conditions
3. **FMH human oversight has no operational protocol for small practice** — principle without procedure; physician operates without reference standard
4. **Medical assistant AI delegation accountability creates physician liability with no tracking system** — staff using AI on patient data = physician personally exposed with no documentation
5. **Post-incident documentation protocol is absent** — no standardized Swiss primary care AI incident documentation format exists
6. **Carrier form physician-personal certification is activating physician-level nFADP exposure** — documentation must match what physician certified personally

---

## Compliance Checklist for Small Geneva Medical Practice (C309)

### Minimum Required (Operative Now)
- [ ] Identify all AI tools processing patient data (including staff-used tools)
- [ ] Determine which AI tools qualify as medical devices under Swissmedic (SaMD assessment)
- [ ] Verify swissdamed registration status for all AI tool vendors
- [ ] Execute Data Processing Agreements (DPAs) with all AI vendors meeting nFADP Art. 32
- [ ] Assess physician-operator status: am I an operator under Swissmedic rules for my AI tools?
- [ ] Update privacy notices to disclose AI tool usage (Art. 26)
- [ ] Review carrier attestation form: what did you certify personally?
- [ ] Ensure documentation exists to match what you certified

### Recommended (Within 12 Months)
- [ ] Document FMH human oversight protocol (even if undefined by FMH)
- [ ] Create medical assistant AI tool use tracking system
- [ ] Establish post-incident documentation format for AI-assisted decisions
- [ ] Conduct DPIA for high-risk AI processing
- [ ] Review consent framework for AI-assisted processing
- [ ] Assess professional liability insurance coverage for AI-assisted decisions

### Strategic (2026+)
- [ ] Monitor CoE AI Convention implementation requirements for healthcare
- [ ] Assess FMH human oversight protocol evolution
- [ ] Review swissdamed enforcement posture after July 2026

---

## Why Healthcare Is the Strongest nFADP Vertical (C309 Confirmed)

| Factor | Legal | Finance | Consulting | Healthcare |
|---|---|---|---|---|
| nFADP Art. 5 relevance | Medium | High | Medium | **Very High (health data)** |
| Personal liability intensity | High (professional) | High (managing director) | High (personal exposure) | **Very High (physician license)** |
| Carrier attestation shift | High | High | High | **Very High (physician-personal now)** |
| Swissmedic layer | No | No | No | **Yes** |
| swissdamed deadline | No | No | No | **Yes (July 2026)** |
| Staff delegation gap | Yes | Yes | Yes | **Yes + personal liability** |
| Evidence architecture need | High | High | High | **Very High (license on line)** |

**Conclusion:** Healthcare combines highest data sensitivity (Art. 5(c)), physician-personal carrier certification, Swissmedic operator obligations, staff delegation accountability, and physician license stakes. The evidence architecture in healthcare serves physician license protection — not just regulatory compliance.

**Positioning anchor confirmed:** "For physicians, evidence is personal."

---

*Compliance context — Phase 04 Geneva Healthcare C309 Cycle complete. Six NET-NEW findings. Physician-personal certification + Swissmedic operator obligations + FMH undefined oversight + medical assistant delegation accountability + post-incident protocol absence.*