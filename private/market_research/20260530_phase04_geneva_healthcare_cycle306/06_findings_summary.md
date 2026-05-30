# 06 — Findings Summary: Key Insights and Ready-to-Use Language
## Phase 04 C306 | Geneva Healthcare | Independent Physician / Small Group Practice (2–10 physicians)

---

## Six NET-NEW Findings: Phase 04 C306

### Finding 1 of 6: HIN Corridor Scope Limitation as Unrecognized Data Protection Alibi

**The finding:** HIN (Health Info Net) certification is the dominant data protection reference for Geneva independent practices. Physicians treat HIN certification as comprehensive data protection coverage. HIN certification actually covers only the transport security of data transmission between covered healthcare entities — one segment of the patient data lifecycle. AI processing occurring before data enters the HIN corridor, or after data leaves it, is not HIN-governed. The physician's mental model (HIN = data protection) and the actual scope of HIN protection (transport security for one data segment) are fundamentally misaligned.

**The mechanism:** Transport security certification has been substituted for comprehensive data protection in physician mental models. The HIN badge provides a false sense of complete protection while AI tools process patient data in segments outside HIN governance scope.

**Why this is distinct from C214–C305:**
This finding names HIN scope limitation as a discrete data protection alibi — distinct from all prior Phase 04 findings addressing nFADP obligations, carrier attestation, staff delegation, or vendor updates. The HIN paradox has not been named as a distinct market failure mechanism in any prior C306 Phase 04 cycle. Prior cycles addressed HIN as a general transport security measure without isolating the specific gap between HIN scope and physician expectation.

---

### Finding 2 of 6: AI Tool Functional Boundary Crossing as Ungoverned Governance Event

**The finding:** AI tools adopted by independent practices for one function (documentation, scheduling) are expanding into adjacent clinical functions (diagnostic suggestions, treatment flags, outcome predictions) through vendor product development decisions — not through physician governance decisions. The physician has no framework for detecting when an AI tool's functional scope has crossed from non-clinical support into clinical decision support. The accountability line between "AI helped me document" and "AI influenced my clinical decision" is defined by where the physician drew it — and the physician did not know they needed to draw it.

**The mechanism:** Vendor product evolution creates governance events without physician decision events. The physician cannot enumerate their AI governance scope because that scope is partially defined by a vendor's product roadmap they did not agree to review.

**Why this is distinct from C214–C305:**
This finding names AI tool functional boundary crossing as a discrete governance event type — distinct from C305 Finding 1 which addressed EHR vendor post-sale AI feature activation (EHR-specific, system-level) and from all prior tool adoption findings which address the initial adoption decision. This finding addresses the specific mechanism of functional scope drift in third-party AI tools post-adoption, without any physician governance awareness or documentation.

---

### Finding 3 of 6: Patient Portal AI Report Delivery as Uncontrolled AI Governance Variable in Clinical Record

**The finding:** Patient portals in Geneva independent practices deliver AI-generated reports directly to patients. Patients receive, read, and react to AI-generated clinical content, then bring questions, concerns, or the report itself back into the clinical consultation. The AI-generated content enters the clinical record under the physician's professional authority — without any AI governance framework having been applied to the patient-side AI interaction. The patient has become an uncontrolled AI governance variable whose AI-mediated contributions bear the physician's professional signature.

**The mechanism:** AI tool output flows to patient → patient-authored AI content enters record → physician accountable for content they did not generate, using an AI tool they did not evaluate, for a purpose the AI tool was not governed for.

**Why this is distinct from C214–C305:**
This finding names patient-as-AI-output-co-author as a discrete accountability surface expansion — distinct from all prior Phase 04 findings addressing physician AI use, staff AI delegation, or EHR vendor updates. No prior cycle named the patient as an uncontrolled AI governance variable in the clinical record. This finding extends the accountability surface beyond the physician's own AI tool choices to include AI interactions the physician did not initiate, evaluate, or govern.

---

### Finding 4 of 6: Layered AI Interpretation Chain as Invisible Accountability Layer in Clinical Data Review

**The finding:** Laboratory results, imaging outputs, and diagnostic data increasingly arrive at the independent practice physician pre-interpreted by AI systems. The AI interpretation layer is invisible in the record — the physician receives interpreted data as if it were raw data, makes a clinical decision based on the interpreted result, and documents the decision. The record shows the physician's decision. It does not show the AI interpretation that preceded it. The physician cannot review, validate, or document what the AI system interpreted before presenting the result.

**The mechanism:** The clinical decision chain has become AI-to-AI-to-physician: raw clinical data → AI interpretation → physician decision → record. Only the final human step is documented. The AI interpretation layer is invisible and unaccounted for.

**Why this is distinct from C214–C305:**
This finding names the layered AI interpretation chain as a specific accountability gap — distinct from all prior Phase 04 findings addressing physician AI decision support (which assumes the physician sees raw data) or AI documentation voids (which address records of physician decisions). This finding addresses the specific gap created when AI interpretation precedes physician review, making the AI contribution invisible in the documented decision chain.

---

### Finding 5 of 6: Emergency AI Use as Systematic Documentation Exception at Highest-Liability Decision Points

**The finding:** In urgent and emergency care settings within independent practices, AI tools are used without any documentation of the AI's role in the decision. The justification is time pressure. The result is that the highest-stakes decisions — those made under the greatest time pressure, where AI assistance is most likely to be used — are exactly the decisions least likely to show any AI contribution in the record. The documentation gap is structurally largest at precisely the points where liability exposure is highest.

**The mechanism:** Emergency conditions create a systematic exception to documentation requirements. The exception is invisible in the record — post-incident review cannot distinguish an emergency AI-assisted decision from a non-AI emergency decision. The documentation gap and the liability concentration coincide geographically.

**Why this is distinct from C214–C305:**
This finding names emergency AI use as a discrete documentation failure pattern — distinct from all prior Phase 04 findings addressing general documentation voids (which assume non-emergency conditions) or post-incident evidence gaps (which do not isolate the specific role of time pressure in creating undocumented AI use). Prior findings do not address the structural correlation between AI use under time pressure and complete documentation absence at highest-liability decisions.

---

### Finding 6 of 6: FMH CME Credit AI Evaluation Chain as Professional Credentialing AI Governance Problem

**The finding:** FMH continuing medical education requirements are increasingly administered through AI evaluation platforms. Physicians earn, track, and report CME credits through systems that use AI to assess competency, generate recommendations, and report to FMH. The physician cannot enumerate what AI systems process their professional development data, what conclusions those systems reach about their competency, or how those conclusions might affect FMH recertification. The AI governance gap extends to the physician's professional identity management infrastructure — not just clinical care, but the systems that establish their right to practice.

**The mechanism:** Professional credentialing is mediated through AI evaluation chains outside clinical governance frameworks. The physician's professional standing depends on AI systems they cannot govern, review, or correct — creating accountability exposure at the professional identity level distinct from clinical liability.

**Why this is distinct from C214–C305:**
This finding names FMH CME AI evaluation as a discrete AI governance problem outside clinical care — distinct from all prior Phase 04 findings addressing clinical AI use, patient data obligations, or carrier attestation. No prior cycle addressed the physician's professional credentialing infrastructure as an AI accountability surface. This finding extends the accountability scope from clinical decision-making to professional identity management through AI systems.

---

## Ready-to-Use Language for ICP Engagement

### Opening Recast: The Structural Problem

**What the ICP says:** "I think I have a problem with AI governance"
**What they actually mean:** "My AI tools have changed without my knowledge, my patients interact with AI tools outside my control, and I cannot enumerate any of it"
**Recast:** "Ce que vous décrivez est quelque chose que je vois systématiquement dans les cabinets indépendants genevois. Ce n'est pas une failure personnelle — c'est un problème structurel. Les cadres n'ont pas été écrits pour des cabinets de votre taille. Et le problème que vous décrivez — des outils qui changent sans votre décision, des patients qui apportent du contenu généré par IA dans la consultation, des systèmes qui vous évaluent sans que vous puissiez les réviser — c'est quelque chose que presque personne à Genève ne nomme clairement."

### The HIN Paradox

**What the ICP says:** "We have HIN — our data is protected"
**What they actually mean:** "The transport security badge means I don't have to think about data protection"
**Recast:** "HIN protège le corridor de transmission. HIN ne protège pas ce qui se passe à l'intérieur du corridor — le traitement IA appliqué à vos données avant ou après la transmission HIN. Vous avez sécurisé la porte. L'outil IA qui traite les données à l'intérieur n'est pas couvert par cette sécurité."

### The AI Boundary Crossing Problem

**What the ICP says:** "The AI tool we use for documentation started making diagnostic suggestions"
**What they actually mean:** "The tool changed its relationship to clinical decisions without my governance awareness or decision"
**Recast:** "L'outil a traversé une ligne fonctionnelle — de la documentation au soutien diagnostique — sans que vous ayez pris de décision à ce sujet. Vous êtes maintenant responsable de décisions cliniques assistées par un outil que vous avez adopté pour une fonction différente. La ligne a été tracée par le vendor. Vous en êtes responsable des deux côtés."

### The Patient Variable Problem

**What the ICP says:** "The patient brought in an AI report from the portal"
**What they actually mean:** "AI-generated content is entering my record through a channel I don't control"
**Recast:** "Le patient a reçu un rapport généré par IA par le portail. Ce contenu entre maintenant dans le dossier sous votre responsabilité professionnelle — sans que vous ayez évalué l'outil qui l'a généré, sans cadre de gouvernance IA appliqué à l'interaction patient-outil. Le patient est devenu une variable de gouvernance IA que vous ne contrôlez pas."

### The Interpretation Layer Problem

**What the ICP says:** "The lab results came in with an interpretation"
**What they actually mean:** "An AI system made a determination before I saw the data — and the record doesn't show that"
**Recast:** "Vous recevez des données déjà interprétées par un système IA. Vous prenez une décision clinique sur la base de cette interprétation. Le dossier montre votre décision. Il ne montre pas l'interprétation de l'IA qui l'a précédée. La chaîne de décision est devenue : donnée brute → interprétation IA → votre décision → dossier. L'étape intermédiaire est invisible. Votre responsabilité ne l'est pas."

### The Emergency Exception Problem

**What the ICP says:** "In an emergency, I use whatever tools are available"
**What they actually mean:** "The highest-stakes decisions are exactly the ones I document least when AI is involved"
**Recast:** "Les décisions prises en urgence sont les décisions les moins susceptibles de montrer une contribution IA dans le dossier. Parce qu'il n'y avait pas le temps de documenter. Parce que la documentation de l'assistance IA n'était pas la priorité. Mais c'est exactement dans ces conditions — pression temporelle, enjeux élevés, décision rapide — que l'écart de documentation est le plus grand et que votre exposition est la plus élevée."

### The CME AI Evaluation Problem

**What the ICP says:** "My CME platform tracks everything automatically"
**What they actually mean:** "My professional credentialing is mediated through AI systems I cannot review or govern"
**Recast:** "Votre formation continue est évaluée par des systèmes IA. Ces systèmes tirent des conclusions sur votre compétence. Vous ne pouvez pas enumerate ces conclusions. Vous ne pouvez pas réviser comment elles circulent vers la FMH. La gouvernance IA que vous appliquez à votre pratique clinique ne s'étend pas à l'infrastructure qui gère votre droit d'exercer."

---

## Summary Table: 6 NET-NEW Findings Phase 04 C306

| # | Finding | Mechanism | Distinct From |
|---|---|---|---|
| 1 | HIN corridor scope limitation as unrecognized data protection alibi | Transport security misread as comprehensive protection; AI processing segments not HIN-governed | All prior HIN references without scope limitation isolation |
| 2 | AI tool functional boundary crossing as ungoverned governance event | Vendor product evolution creates governance events without physician decision | C305 Finding 1 (EHR post-sale activation); all tool adoption findings |
| 3 | Patient portal AI report delivery as uncontrolled AI governance variable | Patient-AI interaction creates record content the physician cannot govern | All prior findings on physician and staff AI use |
| 4 | Layered AI interpretation chain as invisible accountability layer | AI-to-AI-to-physician decision chain with only final step documented | All prior AI decision support findings (physician sees raw data assumption) |
| 5 | Emergency AI use as systematic documentation exception at highest-liability decisions | Time pressure creates structural documentation gap at maximum liability points | All prior documentation void findings without emergency-specific isolation |
| 6 | FMH CME AI evaluation chain as professional credentialing AI governance problem | Professional identity management mediated through AI systems outside clinical governance | All prior clinical care AI governance findings |

---

## Positioning Anchor

**"For physicians, evidence is personal."**

The physician's name is on the record. The physician's license is on the line. The carrier covers financial consequence. Evidence architecture is the only protection for the personal consequence.

The Geneva independent practice AI accountability service positions around this anchor: not compliance, not regulatory box-checking, but personal professional protection through evidence architecture.

---

## Six NET-NEW Findings: Cross-Phase Integration with C306 Phases 01–03

C306 Phase 01 (legal): broker accountability gap, tool sprawl organic proliferation, evidence architecture vs policy documentation, multi-authority documentation sequencing, bilingual client communication bifurcation, post-attestation evidence reconstruction.

C306 Phase 02 (finance): institutional DDQ evidence-first scoring shift, multi-party integration chain PII exposure, FINMA technical blueprint awareness gap, carrier attestation vendor contract misalignment, EU AI Act deployer structural problem, three-vector documentation debt acceleration.

C306 Phase 03 (consulting): client questionnaires as commercial gate, carrier attestation accuracy risk, proposal methodology two-dimensional challenge, sub-consultant AI delegation structural gap, nFADP Art.52 personal exposure, EU AI Act GPAI documentation cascade.

C306 Phase 04 (healthcare — this document): HIN scope limitation, AI boundary crossing, patient AI variable, layered AI interpretation, emergency AI documentation gap, FMH CME AI evaluation chain.

**Healthcare-specific positioning refinement:** "For physicians, evidence is personal" — the personal stakes are highest in healthcare because the physician's license is on the line personally, and no amount of carrier coverage or vendor attestation protects the personal professional consequence of an accountability gap in clinical care.

---

*Findings summary complete. 6 NET-NEW findings distinct from C214–C305 Phase 04. ICP language ready-to-use recasts documented. Positioning anchor confirmed. Cross-phase integration with C306 Phases 01–03 noted.*

**Phase 04 C306 COMPLETE** ✅