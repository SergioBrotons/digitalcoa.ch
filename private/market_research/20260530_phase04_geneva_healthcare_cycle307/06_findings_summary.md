# Findings Summary: Geneva Healthcare — C307 Phase 04

## 6 NET-NEW Findings: Distinct from C214–C306

---

### Finding 01 — HIN Transport Security Misread as Comprehensive Protection

**The finding:** HIN (Health Info Net) provides transport security between systems. Managing directors assume this means comprehensive data protection. It does not. AI processing segments that fall outside HIN governance create invisible exposure — the transport is secured but the processing is not. The assumption that HIN equals compliance is widespread and active.

**Mechanism:** HIN transport encryption → assumed comprehensive protection → AI processing outside HIN scope → patient data processed without HIN governance → exposure invisible to the physician.

**Implication:** A systematic AI tool audit that maps which tools process data inside vs. outside HIN is a discrete service. The audit produces documentation of the actual protection state vs. the assumed protection state.

**Ready-to-use language:** "HIN secures transport. It doesn't tell you where your patient data actually goes when it leaves your systems. Most physicians assume HIN means comprehensive protection. It doesn't."

---

### Finding 02 — AI Tool Functional Boundary Crossing Without Physician Decision Event

**The finding:** AI vendors evolve their products. A tool that was approved for documentation assistance crosses into diagnostic support without the physician's knowledge or a documented decision. The vendor's product update crosses a functional boundary that the physician never authorized or documented. The physician is responsible for clinical decisions that the AI system is now influencing without governance applied.

**Mechanism:** Vendor product update → new AI functionality activated → physician unaware → clinical decisions now AI-influenced without documentation → physician accountable for decisions they don't know were AI-influenced.

**Implication:** A vendor product review protocol that documents functional boundaries and tracks boundary crossings is a discrete service. The protocol creates a governance record of what the tool is approved to do vs. what it is currently doing.

**Ready-to-use language:** "Your AI tool vendor updated their product last month. Did you know what changed? Did you document the decision to continue using it? Most physicians don't know they need to."

---

### Finding 03 — Patient Portal AI Report Delivery as Uncontrolled AI Governance Variable

**The finding:** Patients increasingly receive AI-generated reports directly through portal systems. The report enters the clinical record under the physician's authority and signature, but the AI governance applied to that report generation was determined by the vendor — not by the physician. The physician signs off on something they didn't produce and didn't govern. This is an uncontrolled variable in the clinical governance chain.

**Mechanism:** Vendor portal delivers AI-generated report → patient receives directly → report enters clinical record under physician authority → physician accountable for AI output they didn't review → no governance documentation exists.

**Implication:** A patient portal AI report governance protocol is a discrete service. The protocol defines which reports can be delivered via AI portal, what review is required before the report enters the record, and how to document the review decision.

**Ready-to-use language:** "Your patient portal is sending AI-generated reports directly to patients. You're accountable for those reports. Did you know that? Did you document your review process?"

---

### Finding 04 — Layered AI Interpretation Chain as Invisible Accountability Layer

**The finding:** AI systems increasingly interpret lab results and imaging before the physician sees them. Only the final human decision is documented. The AI interpretation layer — which influenced the physician's decision — is invisible in the documentation. When the physician's decision is reviewed, the AI's contribution to that decision is undocumented. The accountability layer that most needs documentation is the one that is least visible.

**Mechanism:** Lab/imaging AI interprets first → physician sees AI-influenced result → physician makes decision → only final decision documented → AI interpretation layer invisible in record → if challenged, cannot reconstruct AI's contribution to decision.

**Implication:** A layered AI interpretation documentation protocol is a discrete service. The protocol creates a traceable record of when AI interpreted first, what the AI suggested, and how the physician's decision related to that suggestion.

**Ready-to-use language:** "Before you saw that lab result, an AI system already looked at it. Before you made that decision, an AI influenced it. That's an accountability layer. It's not in your record."

---

### Finding 05 — Emergency AI Use as Systematic Documentation Exception at Highest-Liability Decisions

**The finding:** In emergency situations, AI tools are used without documentation. Time pressure creates a documentation gap at exactly the points where liability is highest. The emergency exception becomes a structural pattern — every emergency adds to the undocumented AI use record. The documentation debt from emergency use is invisible and compounding.

**Mechanism:** Emergency situation → AI used for decision support → no time to document → decision made → patient outcome → if challenged, cannot reconstruct AI's role in emergency decision → documentation debt compounds silently.

**Implication:** An emergency AI use documentation protocol is a discrete service. The protocol creates a minimal-friction documentation method for emergency AI use that satisfies the accountability requirement without impeding emergency care.

**Ready-to-use language:** "In an emergency, you used AI. You didn't document it. That's the documentation gap — at exactly the point where liability is highest. I can give you a system that takes thirty seconds."

---

### Finding 06 — FMH CME AI Evaluation Chain as Professional Credentialing AI Governance Problem

**The finding:** FMH continuing medical education is increasingly mediated through AI systems. The AI that delivers CME content also tracks completion, evaluates learning, and reports to FMH. The physician's professional identity — their CME record, their competency certifications — is managed through AI systems outside the clinical governance framework. If those AI systems are compromised or misconfigured, the physician's professional credentials are affected. No one has looked at this.

**Mechanism:** FMH CME delivered via AI platform → AI tracks completion → AI evaluates learning → AI reports to FMH → physician's professional identity mediated through AI system outside clinical governance → exposure active and unnamed.

**Implication:** An FMH CME AI governance review is a discrete service. The review maps which AI systems manage professional credentials, what data those systems hold, and whether the physician's professional identity is adequately protected.

**Ready-to-use language:** "Your CME record is managed by an AI system. Your competency certifications are tracked by an AI system. Have you reviewed those systems against your professional obligations? Most physicians haven't."

---

## ICP Profile (Geneva Healthcare)

Senior physician or practice director, 2–10 professionals, Geneva-based. Personally accountable for patient confidentiality, FMH human oversight obligations, and carrier attestation representations. Using AI tools daily with no documentation system. HIN assumed to provide comprehensive protection. Vendor products evolving without physician knowledge. Patient portal delivering AI-generated reports under physician authority. AI interpreting lab results before physician sees them. Emergency AI use undocumented. CME record managed through AI systems outside clinical governance.

The lead magnet opens the door. The briefing builds the evidence.

---

## Key Shift from C306 Phase 04

**C306:** Physician in discovery — "am I exposed?" awareness phase, FDPIC enforcement gap as primary hook.

**C307:** Physician in action phase — accountability inversion acknowledged, privilege exposure suspected, now needs sequenced action plan. The call comes when they need to act, not when they learn about the problem.

This is the decisive shift: the ICP has moved from "should I be worried?" to "what do I do now, in what order?"