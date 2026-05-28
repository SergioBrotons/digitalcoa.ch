# Findings Summary: Geneva Healthcare AI Accountability
## Phase 04 — Cycle C287

---

## NET-NEW Findings (Distinct from C286 Phase 04)

**C286 Phase 04 covered:** Swiss clinical decision support tool accountability, nFADP DPIA obligation, MedDO classification and swissdamed registration thresholds, FMH physician responsibility operationalization gap, consent form obsolescence, "Swiss hosted" vs. full data chain transparency gap, human oversight documentation as discrete service category, entry point as anxiety not aspiration, market tool-saturated/governance-starved, Geneva cantonal institutional caution signal.

**C287 Phase 04 adds 6 NET-NEW findings:**

---

### Finding 1: Incremental AI Adoption Without Governance Architecture

Geneva physicians using AI tools have experienced a specific failure mode: AI usage has integrated into daily practice through vendor software updates, embedded features in existing EMR systems, and staff activation of new functions — before any governance decision was made. The physician cannot identify when AI adoption occurred because no adoption decision was made; the software simply added AI features through routine updates.

**The gap:** The governance architecture problem is not primarily about AI adoption choices — it's about accumulated exposure from AI features that arrived without a governance decision. The physician is now responsible for AI usage they did not consciously authorize.

**The implication:** The relevant service question is not "should you adopt AI?" but "what AI are you already responsible for, and what governance architecture do you need to document that responsibility?"

---

### Finding 2: Vendor Contract Signature as Professional Liability Acceptance

Swiss medical AI vendors operate under commercial terms (Terms of Service, Data Processing Agreements, subscription agreements) that systematically transfer risk to the physician through liability limitations, indemnification clauses, and data processing authorizations. These terms are presented as standard agreements to be accepted with a signature — and physicians do not have a protocol for evaluating whether accepting these terms conflicts with their professional liability obligations under Swiss medical law.

**The gap:** The vendor's commercial terms and the physician's professional liability obligations may be structurally incompatible. The physician's signature on a vendor agreement may constitute acceptance of conditions that create conflict with the FMH professional code requirement that physicians maintain personal accountability for clinical decisions.

**The implication:** Vendor contract review for physician professional liability compatibility is a discrete service category that no Geneva advisory currently provides. The physician signs the vendor agreement without understanding what professional liability exposure they have accepted.

---

### Finding 3: AI Attribution Problem in Legal Threshold Proceedings

If an AI-assisted clinical decision becomes the subject of a legal proceeding — malpractice claim, disciplinary action, insurance dispute, or cantonal medical board inquiry — the physician faces a specific evidentiary problem distinct from the "AI recommendation vs. physician decision" question. AI tools do not produce reasoning chains that survive in a reviewable format. The physician can describe their own decision process but cannot show the AI's contribution to that process in a way that can be audited post-hoc.

**The gap:** The attribution problem operates even when the physician made the correct clinical decision. The legal question in a proceeding may be about what process was followed, not what outcome was reached. A physician who followed good clinical judgment but relied on AI-generated information without a documented reasoning trail may be unable to demonstrate the process that produced the decision.

**The implication:** This is not primarily a medical quality problem — it is a documentation and evidence architecture problem. The physician needs a methodology for producing records that show human reasoning even when AI contributed to the information environment.

---

### Finding 4: Adaptive AI Output Drift in Medical Records

AI tools with adaptive or learning components (including AI scribes that learn from physician corrections and feedback patterns) create a specific medical records problem: outputs may change over time without the physician's knowledge or approval, creating a situation where the same patient data processed at different times produces different documented conclusions. The medical record is medically authoritative at the time of writing but algorithmically unstable across time.

**The gap:** The physician who relied on an AI-generated note six months ago may find that the same AI tool, processing similar data today, produces a different conclusion — with no notification, no version lock, and no audit trail. The medical record that seemed authoritative when written may reflect an algorithmic state that has since changed. The physician cannot confirm that historical records would be reproduced identically if reviewed today.

**The implication:** Medical record integrity under adaptive AI is a discrete governance concern that no Swiss guidance document addresses. The physician has no methodology for tracking output stability or identifying when an adaptive tool has modified its behavior in a clinically relevant way.

---

### Finding 5: Regulatory Change Without Practitioner Notification Infrastructure

The Swiss institutional environment — FMH professional guidance, FOPH regulatory positions, Swissmedic classification updates, cantonal medical board standards, and AI Convention implementation — is producing AI governance changes at a rate higher than any prior period. The regulatory environment is moving faster than the communication infrastructure reaches independent practitioners.

**The gap:** A Geneva physician who attended an FMH AI briefing in 2024 and took no further action is operating under a regulatory landscape that has materially changed since that briefing. The AI Convention ratification in February 2025, swissdamed registration opening in August 2025, and evolving carrier AI attestation requirements have all arrived without practitioner-specific notification. The physician may be compliant at one point in time and non-compliant six months later without any action on their part.

**The implication:** Regulatory monitoring as a discrete service function is not available to independent physicians in the Geneva market. The physician bears personal responsibility for obligations they may not know exist.

---

### Finding 6: Carrier AI Attestation as Geneva Market Standard Without Geneva Input

Professional liability insurance carriers are evolving their questionnaires toward AI-specific attestation requirements. These carrier-designed questionnaires are functioning as de facto operative standards for AI governance in medical practice — without Geneva medical practice input into what "adequate" means under Swiss physician liability law.

**The gap:** The carrier attestation commits the physician to an undefined adequacy standard designed by an insurance carrier, not by a medical professional body. The physician signs the attestation without understanding what obligations they are accepting, what evidence they must be able to produce, or how the carrier's adequacy definition relates to FMH professional requirements. No Geneva advisory service currently offers pre-signing review specifically for medical practice PI renewal with AI attestation components.

**The implication:** The carrier's questionnaire is forming the market's understanding of what AI governance compliance requires — without medical professional body validation, without Geneva-specific calibration, and without appeal mechanism for the signing physician.

---

## Summary: 6 NET-NEW Findings Distinct from C286 Phase 04

| # | Finding | What It Adds |
|---|---|---|
| 1 | Incremental AI adoption accumulation without governance decision | Beyond tool saturation — the governance gap exists because adoption was invisible, not because tools were chosen |
| 2 | Vendor contract signature as professional liability acceptance | Beyond consent form obsolescence — the signature on vendor terms may create professional liability conflict independent of patient consent |
| 3 | AI attribution problem in legal threshold proceedings | Beyond human oversight documentation gap — the evidentiary problem operates even when the physician made the right decision |
| 4 | Adaptive AI output drift in medical records | Beyond "Swiss hosted" transparency — the algorithmic instability problem makes records authoritative today but unverifiable tomorrow |
| 5 | Regulatory change without practitioner notification | Beyond FMH guidance vacuum — the change itself is arriving faster than any communication channel reaches independent practitioners |
| 6 | Carrier AI attestation as market standard without Geneva input | Beyond documentation window framing — the carrier questionnaire is forming the operative standard for the sector without professional body validation |

---

## ICP Language (EN + FR)

**Lead magnet:** The Geneva Physician's Guide to AI Accountability: What You're Actually Responsible For (updated from C286)

**English:** "Most Geneva physicians I work with don't have an AI governance problem they chose to have — they have one that arrived through software updates, embedded features, and staff activation of new functions. The question isn't whether you should use AI. The question is what AI you're already responsible for, and whether you can show what you did about it if something goes wrong."

**French:** "La plupart des médecins genevois avec qui je travaille n'ont pas un problème de gouvernance IA qu'ils ont choisi d'avoir — ils en ont un qui est arrivé par des mises à jour logicielles, des fonctionnalités intégrées et l'activation par le personnel de nouvelles fonctions. La question n'est pas de savoir si vous devriez utiliser l'IA. La question est de savoir pour quelle IA vous êtes déjà responsable, et si vous pouvez montrer ce que vous avez fait si quelque chose tourne mal."

**Pricing:** CHF 2,200 practice 90-min EN+FR
**Format:** Structured briefing — what you're already responsible for, what your documentation gaps are, what your next 90 days should address
**ICP language:** EN+FR

---

*Findings derived from: physician community context, FMH professional code and digital competency framework, nFADP Art. 22 DPIA obligations, MedDO classification and swissdamed registration framework, AI Convention ratification (February 2025), Swissmedic regulatory communications, PI insurance carrier market evolution, Swiss medical practice governance patterns, Geneva institutional accountability formation mechanism.*

*Phase 04 C287 — Geneva Healthcare AI Accountability — 6 NET-NEW findings distinct from C214–C286 Phase 04.*