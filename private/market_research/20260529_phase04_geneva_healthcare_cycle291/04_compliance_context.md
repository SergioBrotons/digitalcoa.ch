# Phase 04 — Compliance Context: Geneva Healthcare — Cycle 291

# Phase: 04 — Geneva Healthcare
# Cycle: 291
# Date: 2026-05-29
# Status: COMPLETE

---

## The Geneva Healthcare AI Governance Regulatory Stack

The regulatory stack facing small Geneva medical practices in 2026:

```
Primary Layer: nFADP (Federal Act on Data Protection)
               ↓ Art. 5(c) — health data = highest protection category
               ↓ FDPIC May 8, 2025 — nFADP applies directly to AI-based processing
               ↓ Art. 26 — disclosure obligations
               ↓ Art. 32 — data security + vendor due diligence
               ↓ Art. 9 — sensitive data processor obligations (law firms equivalent)

Secondary Layer: Swissmedic / Therapeutic Products Act (TPA)
                ↓ AI tools as medical devices (SaMD)
                ↓ swissdamed mandatory registration July 1, 2026
                ↓ Operator obligations for devices in use

Tertiary Layer: FMH Professional Obligations
               ↓ Physician professional standards
               ↓ FMH guidelines on continuing professional development
               ↓ Human oversight requirements embedded in professional standards

Quaternary Layer: Geneva Cantonal Health Law
                ↓ Practice licensing — data security increasingly assessed
                ↓ Service de la santé publique audit authority
                ↓ No Geneva-specific AI regulation, but existing obligations apply

Background Layer: CoE AI Convention (signed March 2025)
                 ↓ Implementation expected end-2026
                 ↓ Creates deployer obligations for AI systems used by professionals
                 ↓ Human oversight + transparency obligations incoming
```

---

## Geneva-Specific Regulatory Texture

### What Makes Geneva Different From Other Cantons

**1. Geneva Canton Health Inspectorate (Service de la santé publique)**
- Has authority to inspect practice data security posture during licensing renewals
- No specific AI regulation, but data security obligations include AI tool governance
- Physician practices in Geneva are subject to cantonal inspection authority on patient data handling
- **Implication:** A Geneva practice with AI tools in use but no governance framework has a visible cantonal exposure if inspected

**2. AMGe (Association des Médecins-Genevois) as Reference Community**
- Geneva physicians look to AMGe, not just FMH national
- AMGe publications, events, and guidance are the Geneva-specific reference point
- AMGe has not published AI governance guidance for small practice
- **Implication:** AMGe-adjacent content positioning signals Geneva-specific credibility; AMGe membership network reaches the ICP

**3. Geneva Health Forum 2026 (May and November)**
- Major international healthcare event hosted in Geneva
- Attended by Geneva and Vaud physicians, hospital administrators, policy makers
- Thematic focus on institutional AI governance; small practice AI governance is absent
- **Implication:** GHF 2026 elevates AI governance awareness without addressing small practice; creates post-event content positioning opportunity

**4. International Organization Presence**
- WHO, ICRC, CERN, ITU create Geneva-specific professional culture
- Geneva physicians are more exposure-aware to international standards than other cantons
- International frameworks (ITU AI for Good, WHO AI governance) provide reference context
- **Implication:** Geneva physicians are more attuned to global AI governance discourse; framing advisory context within international Geneva framework resonates

**5. Highest Medical Assistant Wages in Switzerland**
- OFS 2024 confirmed: Geneva medical assistant wages highest in Switzerland
- Structural shortage; demographic driver, not cyclical
- Every remaining staff member is more critical (clause du besoin July 2025)
- **Implication:** Efficiency AI adoption has urgency in Geneva that does not exist equally in other cantons

---

## nFADP Operational Compliance for Small Medical Practice

### Art. 5(c) — The Sharpest Obligation

Health data under nFADP Art. 5(c) is the highest protection category in Swiss data protection law.

**What this means operationally for AI tools:**
- Any AI tool processing patient health data is processing sensitive data under Art. 5(c)
- Processing requires either explicit patient consent OR legal basis under Art. 6
- AI tools that assist diagnosis, treatment planning, patient monitoring = processing health data
- Dragon Medical (dictation): processes patient health information during transcription
- AI scheduling optimization: processes patient appointment/health data
- AI billing optimization: processes patient health service records

**The critical gap:**
Treatment consent forms do NOT satisfy nFADP Art. 5(c) data processing consent requirements. This distinction is not visible to most small practice physicians.

### Art. 26 — Disclosure Obligations

When patient data is collected from a source other than the data subject, disclosure obligations apply.

**What this means operationally:**
- If AI tool processes referrals or patient information sourced from other healthcare providers, Art. 26 disclosure obligations activate
- Privacy notices must reference AI tool usage in clinical and administrative workflows
- Most small practices have not updated privacy notices for AI tool usage

### Art. 32 — Data Security and Vendor Due Diligence

Appropriate technical and organizational measures required; vendor due diligence mandatory.

**What this means operationally:**
- AI tool vendors must sign Data Processing Agreements (DPAs) meeting nFADP Art. 32 requirements
- Most small practices have NOT received DPAs from AI tool vendors
- Vendor security measures must be assessed — but small practices have no framework to do this
- "My IT vendor handles this" assumption is prevalent and frequently incorrect

### FDPIC May 8, 2025 — nFADP Explicit Confirmation

FDPIC explicitly confirmed nFADP applies directly to AI-based data processing:
- AI tools processing patient data = data processing under nFADP
- DPIA required for high-risk processing
- Practices using AI without DPIA = potential non-compliance

**For small practice specifically:**
- DPIA (Data Protection Impact Assessment) is the most frequently absent governance document
- Small practice physicians do not know what a DPIA is, how to conduct one, or when it is required
- The concept must be translated from regulatory language to operational Tuesday language

---

## Swissmedic / swissdamed Operational Compliance

### AI Tools as Medical Devices (SaMD)

**Key question every medical practice should be able to answer:**
"Is any AI tool used in my practice a medical device under Swissmedic rules?"

**Software as a Medical Device (SaMD) examples in small practice contexts:**
- AI diagnostic support tools (dermatology image analysis, radiology, pathology)
- AI treatment planning systems
- AI patient monitoring systems with decision support
- Dragon Medical One: voice capture for clinical documentation (lower risk; generally not medical device in pure dictation use; higher risk if clinical decision support function active)
- AI scheduling tools with clinical prioritization elements

**swissdamed registration (July 1, 2026):**
- Mandatory registration for medical devices placed on Swiss market
- For practices: If an AI tool in use is a medical device, the practice as "operator" may have obligations to verify swissdamed registration status
- Most small practices are unaware they may have operator obligations
- The administrative filing is happening; substantive compliance review is not

### The swissdamed Compliance Gap

**What practices are doing:**
- Receiving Swissmedic communications about AI tool registration
- Forwarding to IT person or vendor
- vendor files something
- Practice assumes compliance is addressed

**What should be happening:**
- Independent determination of whether each AI tool qualifies as a medical device
- Verification of swissdamed registration status for each tool in use
- Documentation of the classification analysis
- If non-registered device in use: assessment of obligations and remediation path

**The gap:**
The independent advisory function that would perform this classification analysis is not being performed. No Geneva boutique advisory is offering this as a specific service to small practices. Vendors have conflicts of interest. IT vendors lack competence. Legal firms lack Swissmedic technical expertise.

---

## FMH Professional Obligations — The Missing Link

### Why FMH Is the Reference Authority for Physicians

Physicians look to FMH (Foederatio Medicorum Helveticorum) for professional standards guidance, not to FDPIC or Swissmedic. This is the distinct authority reference pattern for the healthcare vertical.

**FMH AI-related publications (current state):**
- FMH has published principles on AI in healthcare
- FMH continuing professional development requirements do not yet include specific AI governance categories
- FMH has not published operational guidance on what AI governance means for small practice

**The FMH Gap:**
FMH's mandate is physician professional standards, not AI administration guidance. The gap between FMH principles and operational small practice implementation is structural. Until FMH gap-fills (which is not happening urgently), this creates the advisory opportunity.

### Human Oversight Requirement

The operative FMH principle: physicians bear ultimate accountability for clinical decisions, regardless of AI assistance. This principle requires:
- Physician review of AI-generated outputs before clinical action
- Documentation of AI assistance in clinical records
- Ability to override AI recommendations
- Understanding of when AI assistance does not satisfy standard of care requirements

**The operational translation problem:**
These principles sound reasonable in principle. In practice, physicians need to know: what documentation satisfies human oversight requirements? What is the minimum audit trail? What constitutes "reviewed by physician" in operational terms? FMH has not answered these Tuesday-level questions.

---

## Carrier Attestation — Healthcare Variant

### Physician Professional Liability Insurance Carriers

The carrier attestation wave is arriving in healthcare with distinct features:

**What carriers are asking (as of 2025-2026):**
- General AI governance questions embedded in renewal questionnaires
- Questions about which AI tools are in use in the practice
- Questions about patient data handling protocols for AI-assisted services
- Questions about consent frameworks

**What physicians are doing:**
- Signing without understanding what they committed to
- Receiving carrier questions without frameworks to answer them accurately
- Discovering the attestation requires them to represent compliance they do not have

**The healthcare variant of the Phase 01-03 pattern:**
Legal: Attorney signs SBA attestation on undefined adequacy standard
Finance: WM principal signs FINMA attestation on undefined adequacy standard
Consulting: Principal signs SRO/advisory attestation on undefined adequacy standard
Healthcare: Physician signs professional liability carrier attestation on undefined adequacy standard + standard of care ambiguity

**The structural uniqueness:**
In healthcare, the undefined adequacy standard intersects with the undefined AI-assisted standard of care standard. Physicians are not just signing an attestation with an undefined compliance standard — they are also uncertain whether their clinical decisions with AI assistance meet a professional standard that does not yet exist in documented form. This creates compound uncertainty no other vertical has.

---

## Geneva Cantonal Health Law — Operational Impact

### Practice Licensing Data Security Expectations

Geneva practice license renewal involves assessments that increasingly include patient data security:
- No specific AI regulation, but general patient protection obligations apply
- Cantonal health inspectorate can review AI tool compliance posture during licensing review
- Geneva practices with AI tools but no governance documentation have visible exposure

### No Geneva-Specific AI Regulation

**What physicians hear:**
"Geneva doesn't have specific AI rules for practices, so I don't need to worry about Geneva specifically."

**Why this is incorrect:**
The absence of Geneva-specific AI regulation means the national framework (nFADP + Swissmedic + FMH) applies directly in Geneva, not that no regulation applies. The cantonal layer adds inspection authority and AMGe peer network effects. The practical implication: Geneva practices face the same nFADP + Swissmedic obligations as everywhere in Switzerland, plus cantonal inspection authority and Geneva peer community accountability.

---

## What the Regulatory Stack Requires on a Tuesday

### Minimum Operative Requirements (What Physicians Actually Need to Do)

**Within 30 days:**
1. Identify every AI tool in use (including staff shadow AI)
2. Determine for each: does this process patient health data? (nFADP Art. 5(c) trigger)
3. Execute DPAs with each AI vendor (or document why one is not required)
4. Check if each AI tool may qualify as a medical device (Swissmedic SaMD assessment)
5. Verify swissdamed registration for medical device tools (July 1, 2026 deadline)

**Within 90 days:**
6. Update patient privacy notices to disclose AI tool usage (Art. 26)
7. Assess consent framework for AI-assisted processing (treatment consent vs. data processing consent)
8. Document AI governance policy (who can adopt AI tools, approval process, staff training)
9. Review existing professional liability policy: does it cover AI-assisted decisions?
10. Check FMH CPD requirements: is AI governance a category for continuing education?

**Within 12 months:**
11. Conduct formal DPIA for highest-risk AI processing activities
12. Establish breach response procedure
13. Document human oversight process for AI-assisted clinical decisions
14. Assess CoE AI Convention implementation obligations as international law develops
15. Attend at least one AI governance relevant FMH or AMGe event (GHF 2026 positions advisory positioning)

---

## NET-NEW Findings (6 distinct from C214-C289 Phase 04)

1. **Cantonal inspection authority creates immediate practice-level risk** — Geneva Service de la santé publique has licensing audit authority that includes patient data security; AI tools without governance create visible cantonal exposure; this is the most immediate external forcing function for Geneva practices.

2. **nFADP Art. 5(c) + treatment consent structural conflation** — treatment consent forms do not satisfy data processing consent requirements; structural gap is not a knowledge gap; physicians believe their existing consent framework covers AI governance; no market solution addresses three consent forms simultaneously.

3. **swissdamed operator obligation unawareness** — practices using AI medical devices have operator obligations under Swissmedic rules; most small practices are unaware they may qualify as operators with registration verification duties; the compliance theater of filing something is being mistaken for substantive compliance.

4. **FMH human oversight principle has no Tuesday translation** — physician accountability for AI-assisted clinical decisions requires human oversight; FMH has stated the principle without translating it to operational minimums; audit trail, documentation, and override documentation standards are undefined in FMH guidance.

5. **Carrier attestation intersects with undefined AI-assisted standard of care** — healthcare carriers are asking AI governance attestation questions at the same time the medical standard of care for AI-assisted diagnosis is undefined; physicians are signing attestations committing to undefined standards for undefined clinical liability; compound uncertainty structurally unique to healthcare.

6. **Geneva peer circuit operates through AMGe, not FMH national** — Geneva physicians look primarily to AMGe for Geneva-specific professional community; AMGe-adjacent positioning is load-bearing for advisory credibility in ways that FMH national publications are not; AMGe has not published AI governance guidance; Geneva-specific positioning requires AMGe-adjacent content, not general FMH content.

---

*Compliance context — Phase 04 Cycle 291 complete. Regulatory stack mapped; Geneva-specific texture named; FMH human oversight Tuesday-gap identified; carrier attestation compound uncertainty highlighted; AMGe as primary community reference confirmed.*
