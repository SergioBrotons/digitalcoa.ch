# 04 — Compliance Context: Geneva / Switzerland Specific Regulatory
## Phase 04 C300 | Geneva Healthcare | Independent Physician / Small Group Practice (2–10 physicians)

---

## Regulatory Landscape — May 2026 State

The compliance environment for Geneva independent practice AI accountability has entered an acute phase. The convergence of an approaching medical device registration deadline with present-tense data protection enforcement creates a compound pressure environment that did not exist in prior cycles. What follows is the specific regulatory state as it applies to the Geneva independent physician as of May 30, 2026.

---

### Key Regulatory Frameworks

**1. Medical Devices Ordinance (MedDO) — Swissdamed Deadline (IMMINENT)**

From July 1, 2026: mandatory Swissdamed registration for medical devices placed on the Swiss market. Swissdamed is the Swiss database based on the EU EUDAMED system.

**The regulation applies to medical devices — not all AI systems. The critical question for independent practices is whether their AI tools qualify as medical devices.**

The classification question is the central compliance problem for Geneva independent practices as of May 2026:
- Tier 1: Lower-risk medical devices — registration required
- Tier 2: Higher-risk medical devices — registration + notified body involvement

The classification criteria are written for manufacturers. The independent practice physician using a vendor-provided AI tool is not a manufacturer — but may be an "operator" with device-related obligations. The regulation does not provide proportionate methodology for determining whether a 3-physician outpatient practice's use of a vendor-provided AI documentation tool meets the Tier 1 or Tier 2 threshold.

**Critical clarification (C300 Timing Context):** Swissdamed July 1, 2026 applies to MEDICAL DEVICES — not to general AI systems or AI attestation. AI-enabled medical devices DO fall under Swissdamed. Independent practices using AI-enabled diagnostic tools may have active classification obligations. Distinguishing between AI tool as such and AI tool qualifying as medical device is the proportionate compliance question — and no Geneva-calibrated methodology currently exists for making this determination at independent practice scale.

**Timeline pressure:** 5 weeks from now. Practices that have not conducted AI tool classification assessment are now in the acute implementation window.

---

**2. Federal Act on Data Protection (nFADP) — Present-Tense Enforcement**

Active since September 1, 2023 (revised version). FDPIC enforcement posture as of May 2025 is present-tense, not future-prospect. The law applies directly to AI-assisted practice operations.

Key provisions active for independent practice:
- Art.5: Lawful basis — AI tool activation typically occurs through click-through acceptance with implicit, undocumented lawful basis
- Art.6: Sensitive data processing — health data processed by AI tools requires explicit consent or statutory basis
- Art.8: Profiling notification — AI inference may trigger profiling obligations
- Art.9: Third-country processor chain — vendor sub-processors outside Switzerland create Art.9 obligations the practice has not evaluated
- Art.21: Automated decision obligations — AI diagnostic decision support may trigger Art.21 right to explanation
- Art.22: Reversal right — patient can request reversal of AI-influenced decisions, conflicting with medical record integrity requirements
- Art.63: Criminal liability — maximum CHF 250,000 + imprisonment for willful violations; enforcement present-tense

---

**3. Article 321 Swiss Criminal Code — Professional Secrecy Extension**

Art.321 CP establishes physician professional secrecy obligations. The extension of these obligations through AI vendor data processing is the dimension most independent physicians have not evaluated.

When the physician activates an AI tool that sends patient data to vendor servers for processing, model training, or inference, the physician is extending Art.321 CP obligations to vendor-accessible data. The vendor terms accepted in click-through agreements may establish data processing the physician has not authorized under any physician-specific legal framework.

The critical gap: the physician's Art.321 CP obligations cover everything they control in the practice context — but the AI tool creates data flows to parties the physician does not control, outside any medical secrecy framework the physician has in place.

---

**4. FMH Human Oversight Standard**

FMH has published that human oversight of AI tools is required. The standard has no operational definition for independent practice scale. "Human oversight" as interpreted at 8:30 AM Wednesday by a solo physician with twelve patients and no compliance staff is not the FMH standard being described in the publications — but the publications do not define what it is instead.

The gap: FMH created a principle. The principle does not translate to what "adequate human oversight" looks like for a 3-physician practice where one physician holds the compliance role by default. No FMH working group has published operational AI oversight standards for Geneva independent practice.

The structural problem: "human oversight" is an intent standard (the physician intends to oversee) — but in practice, AI tools are producing outputs that enter records without the physician's deliberative involvement in a way that can be documented as oversight.

---

**5. Carrier Medical Liability Attestation — Current Instrument**

Swiss medical liability carriers are actively sending AI attestation questionnaires. The instrument format has evolved from prior cycles — current versions now ask version-specific and audit-trail-demanding questions designed to identify whether the practice has infrastructure for AI governance tracking.

What the physician signs: "I confirm that AI governance in our practice is adequate." "Adequate" is not defined in the attestation document. The physician is certifying to a standard they cannot enumerate.

The critical dynamic (distinguished from finance/legal sector): Medical practice carrier attestation is at an earlier stage of market development. The service infrastructure that might help physicians understand what they are certifying before signing does not yet exist. The medical practice market is arriving at the same problem the finance sector discovered 12 months ago, without having developed the response infrastructure.

---

## Specific Intersection Points — Where Compliance Framework Convergence Creates Compound Exposure

### Critical Intersection 1: Swissdamed + nFADP — Classification Triggers Data Protection Obligations

**The mechanism:** If an AI tool qualifies as a medical device requiring Swissdamed registration, it simultaneously has patient data processing dimensions triggering nFADP obligations. The classification question is not separate from the data protection question — a medical device classification creates a documented basis for data protection obligations that must be addressed.

**The compound exposure:** The physician who determines their tool requires registration must also determine what patient data processing the device creates, what lawful basis applies, what Art.9 processor chain disclosures have been provided, and what automated decision obligations follow. These are not separate compliance questions — they are the same AI tool with multiple regulatory lenses applied simultaneously.

**The independent practice problem:** The regulation does not provide a comprehensive methodology for conducting this assessment at independent practice scale. The classification question is separate from the obligation question in the regulation — but in practice, the physician confronting Swissdamed classification must simultaneously confront nFADP compliance.

### Critical Intersection 2: Carrier Attestation + nFADP Art.63 Criminal Liability — Evidence Standard Misalignment

**The mechanism:** The carrier attestation is designed by underwriting logic. The documentation produced to satisfy the carrier may not satisfy Art.63 criminal defense evidence standards. The physician does not know which evidence standard applies to their attestation representations under which enforcement scenario.

**The compound exposure:** The physician who produces documentation satisfying the carrier at signing may have created evidence that does not survive Art.63 challenge. The documentation that looks adequate to underwriting is not necessarily adequate to criminal defense. No Geneva service exists for mapping this relationship.

**Why this matters more for medical practice than finance/legal:** The physician's professional license is at stake — not just a financial penalty. The carrier attestation evidence standard and the Art.63 criminal defense evidence standard are different frameworks, and the physician is currently operating without knowing which one their documentation is intended to satisfy.

### Critical Intersection 3: FMH Human Oversight + Art.321 CP + Vendor Contract — Conflicting Accountability Frameworks

**The mechanism:** FMH requires human oversight. Art.321 CP extends professional secrecy obligations to data the physician controls. Vendor contracts accept data processing terms the physician has not evaluated in context of either FMH oversight or Art.321 CP obligations. The physician who activates an AI tool through vendor click-through acceptance may be simultaneously violating Art.321 CP (by extending patient data to uncontrolled parties), failing human oversight requirements (by not evaluating AI tool outputs for each use), and creating documentation they cannot produce (by not tracking what the AI tool did).

**This is not a hypothetical scenario.** This is the actual operational state of most Geneva independent practices using AI tools.

### Critical Intersection 4: Reversal Right (Art.22) + Medical Record Integrity — Legally Incompatible Simultaneous Obligations

**The mechanism:** nFADP Art.22 grants patients the right to reversal of automated decisions. In clinical context, this would mean the right to request reversal of AI-influenced clinical decisions. Medical records require integrity — changes to clinical records require documented clinical process, not data subject requests.

**The conflict:** Two incompatible obligations are simultaneously active. No Geneva protocol exists for managing this. Neither the FDPIC guidance nor FMH professional standards address the Art.22/medical record integrity intersection. The physician ignores the conflict because addressing it requires a protocol that does not exist.

**Why this matters acutely:** As carrier attestation requirements become more specific, the physician is being asked to document their AI usage in clinical records. Every AI-influenced decision documented creates potential Art.22 exposure — yet the documentation is being required precisely now.

### Critical Intersection 5: Swissdamed Registration + Vendor Exit Barrier — Compliance Resolution Creates Operational Trap

**The mechanism:** The physician who correctly determines their AI tool requires Swissdamed registration develops a compliance resolution plan. The plan may include switching to a tool with better classification standing — but the vendor contract creates exit barriers (data portability limitations, model training data retention) that make switching operationally complex.

**The trap:** The compliance resolution the physician needs (alternative tool selection) is structurally blocked by the vendor contract they accepted without evaluation when they initially adopted the tool. The action required to resolve the compliance problem cannot be taken because of accumulated dependencies.

**This is a new C300 finding:** The Swissdamed compliance question exposes the vendor exit barrier at the precise moment when vendor exit is needed as a compliance resolution path. These two problems were not connected in the market's understanding before C300.

---

## Enforcement Reality as of May 2026

**FDPIC:** Present-tense enforcement active. Not a future risk — present-tense exposure for practices that have not evaluated nFADP compliance for their AI tools.

**MedDO / Swissdamed:** Deadline July 1, 2026. Approximately 5 weeks away. Enforcement mechanism for independent practice non-registration not yet tested. The market is operating under the assumption that non-registration consequences will materialize.

**Carrier attestation:** Active and evolving. Current instrument requires version-specific documentation infrastructure. Practices that cannot produce requested documentation exist in a visible compliance gap.

**FMH:** Principle-level guidance only. Operational endpoint non-existent. Physician operates under principle without actionable path.

**Art.321 CP:** Active obligation. No enforcement focus on AI vendor data processing at independent practice scale — yet. Market assumes this will eventually become enforcement focus when the circuit connects Art.321 CP obligations to AI vendor data flows.

---

## What Is Not Regulated (The Named Gaps)

These gaps are distinct from prior cycle identification — each has gained specificity through the Swissdamed deadline proximity and market evolution:

- No proportionate Swissdamed classification methodology for independent practice use of vendor-provided AI tools (not manufacturer context)
- No comprehensive methodology for determining whether a specific AI tool at independent practice scale qualifies as MedDO Tier 1/Tier 2
- No FMH operational standard for what "human oversight" looks like at 3-physician practice for Tuesday 8:30 AM use case
- No carrier pre-signing review for medical practice AI attestation (unlike finance sector)
- No Art.22/medical record integrity intersection protocol
- No vendor contract exit barrier assessment methodology or service
- No nFADP Art.9 processor chain disclosure verification service calibrated for independent practice
- No comprehensive Swiss regulatory + medical professional liability integrated advisory for independent practice AI adoption

The compliance environment is severe, multi-framework, and actively converging. No Geneva-calibrated, independent-practice-specific methodology exists for navigating it.

---

*Compliance context documented. Five critical intersection points (Swissdamed+nFADP, attestation+Art.63, FMH+Art.321+vendor, Art.22+record integrity, Swissdamed+vendor exit) are distinct from C214–C299 through naming of specific multi-framework compound exposure mechanisms rather than individual framework gaps. C300 compliance context reflects acute phase state — Swissdamed 5 weeks from now, nFADP present-tense enforcement active, carrier format evolved.*
