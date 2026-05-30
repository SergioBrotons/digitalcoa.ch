# Phase 04 — Compliance Context: Geneva Healthcare — C308

**Phase:** 04 — Geneva Healthcare
**Cycle:** C308
**Date:** 2026-05-30
**Status:** COMPLETE

---

## Geneva/Switzerland Specific Regulatory Framework

### The Five-Layer Regulatory Stack for Geneva Small Practice AI

| Layer | Authority | Relevance | Status |
|---|---|---|---|
| **nFADP** | Federal | Health data = sensitive; Art.5(c) highest protection; Art.63 personal liability | Operative |
| **Swissmedic / swissdamed** | Federal | AI tools as medical devices; operator obligations | July 1, 2026 deadline |
| **FMH Professional Standards** | FMH (private body) | Human oversight of AI-assisted decisions | Stated; operationally undefined |
| **Geneva Cantonal Health Law** | Canton Geneva | Medical practice standards; licensing | Operative |
| **CoE AI Convention** | Council of Europe | Human oversight, transparency obligations | Implementation expected end-2026 |

---

## Layer 1: nFADP — Personal Liability is Individual

### Key Articles for Small Practice Physicians

**Art. 5(c) — Sensitive Data (Health)**
- Health data = "sensitive" category; highest protection standard
- AI-based processing of health data is squarely covered (FDPIC May 8, 2025 confirmation)
- Processing requires: explicit consent OR statutory obligation (Art. 6(c)) OR public interest (Art. 6(e))
- Medical practice: Art. 6(c) statutory obligation likely applies for treatment data
- AI tools processing patient health data outside treatment context: no clear legal basis in most small practices

**Art. 63 — Personal Liability**
- Controllers are "natural or legal persons" — the individual physician can be the controller
- Personal liability activates: when the individual physician determines the purpose and means of AI processing
- Small practice reality: the physician who decides to use an AI tool is the de facto controller
- FDPIC enforcement: health data breaches are highest enforcement priority

**Art. 9 — Automated Decision-Making**
- Right to know when automated processing is used
- Right to human review of automated decisions
- Small practice implication: patients can ask whether an AI was used in their care decision

**Art. 28 — Data Processing Agreements**
- Vendor contracts must include required nFADP terms
- Small practice reality: standard vendor contracts do not include these terms; physicians do not know to ask

---

## Layer 2: Swissmedic / swissdamed — The Device Classification Gap

### Swissdamed Mandatory Registration (July 1, 2026)

**What it covers:**
- Medical devices placed on the Swiss market
- Economic operators (including "operators" who use devices in their practice)
- Swissmedic is the competent authority

**The AI tool classification question:**
- AI-enabled diagnostic tools may qualify as medical devices under Swissmedic rules
- CE marking (EU) does not automatically transfer to Swissdamed registration
- The physician who uses a qualifying AI tool in their practice is the "operator" — with independent compliance obligations

**The accountability gap:**
- Most small practice physicians believe: if the vendor says the tool is registered, that is sufficient
- Reality: the physician as operator has obligations regarding proper use, maintenance, and adverse event reporting — independent of vendor registration

**What a small practice physician should verify:**
1. Is the AI tool registered in Swissdamed? (verify independently, not just vendor word)
2. Is the registration current and covers the tool version being used?
3. Does the physician's specific use context fall within the registered intended purpose?
4. Does the physician have a documented operator agreement with the vendor?

---

## Layer 3: FMH Human Oversight — The Operational Definition Problem

### What FMH Has Said
FMH has stated that AI-assisted medical decisions require human oversight. This aligns with international medical ethics standards (WMA Declaration of Helsinki, etc.).

### What FMH Has NOT Said
- What constitutes adequate human oversight in a small practice
- Whether reviewing AI output after the fact is sufficient
- Whether the physician needs to document their review process
- What the documentation trail should look like
- How to operationalize oversight for different risk levels

### The Small Practice Reality
- The physician already believes they are providing oversight ("I review everything")
- There is no defined documentation standard for AI-assisted decisions in Swiss primary care
- When a challenge arises, the physician must reconstruct their reasoning without a defined protocol
- The gap is not the absence of oversight — it is the absence of documented oversight

### What "Adequate Oversight" Likely Requires (Practical Interpretation)
Until FMH publishes a specific protocol:
1. **Documented tool selection:** Which AI tool, why, what risk level
2. **Defined review process:** What the physician reviews, at what point in the workflow
3. **Exception handling:** What happens when AI output seems incorrect
4. **Record of review:** Timestamp + physician identifier + what was reviewed
5. **Patient notification:** Whether and how patients are informed of AI use

---

## Layer 4: Geneva Cantonal Health Law

### AMGe (Association des Médecins-Genevois)
- Geneva-specific professional standards
- Cantonal medical license requirement for all practicing physicians
- AMGe provides peer standards, guidance, and representation
- Key resource for reach into the Geneva physician community

### Key Cantonal Obligations
- Medical practice license (issued by Canton; renewed periodically)
- Duty of care (Art der Sorgfalt) — physician standard of care applies to AI-assisted decisions
- Documentation obligations — medical records must be complete, accurate, contemporaneous
- The AI-assisted decision documentation gap is a cantonal compliance issue

---

## Layer 5: CoE AI Convention — Implementation Timeline

### Council of Europe AI Convention
- Signed; implementation expected end-2026
- Will add obligations for human oversight and transparency in AI systems
- Healthcare sector amendments included
- Switzerland is a signatory; implementation will create new documentation requirements

### Timeline Impact
- **Now:** nFADP + Swissmedic + FMH (stated) = operative standard
- **July 1, 2026:** Swissdamed mandatory registration deadline
- **End 2026:** CoE AI Convention implementation expected; new human oversight documentation obligations likely
- **Window:** ~6–12 months to establish compliant protocols before CoE implementation creates a specific documentation standard

---

## The Regulatory Convergence Map

```
Now                              July 2026                    End 2026
nFADP operative                  swissdamed deadline          CoE AI Convention
(nFADP Art.63 personal           (AI tool operator             implementation
liability active)                obligations active)            (new human oversight
                                                                documentation required)

Current gap:                     Current gap:                  Current gap:
- No documented oversight        - Unverified Swissdamed       - No AI decision
  protocol                        registration status            documentation
- Staff AI use invisible         - Operator obligations          standard in primary
- Carrier attestation             undefined                     care
  misread as practice-level
```

---

## The Personal Liability Architecture

**Who is personally liable, under what authority:**

| Event | Liability Basis | Individual at Risk |
|---|---|---|
| AI-assisted decision harm | Art. 321 CC (physician duty of care) + cantonal liability | Treating physician |
| nFADP data breach | nFADP Art. 63 | Controller (physician if independent practice) |
| Swissdamed operator failure | Swissmedic ordinances | Operator (physician if using device) |
| FMH oversight failure | FMH professional standards | Physician's cantonal license |
| Carrier attestation misrepresentation | Insurance contract law | Signing physician personally |

**The convergence:** All five liability pathways can activate simultaneously from one event — an AI-assisted decision that is wrong, involves patient data processed outside a compliant framework, and was made using an unregistered device.

---

*Compliance Context — Phase 04 C308 complete. Five regulatory layers, four liability pathways, one physician personally accountable.*
