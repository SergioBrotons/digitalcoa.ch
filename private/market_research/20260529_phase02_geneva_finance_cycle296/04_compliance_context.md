# Phase 02 — Cycle 296 — Compliance Context: Geneva Boutique Wealth Management

## Vertical: Finance / SMB — Boutique Wealth Management Firms
## Cycle: 296 | Date: 2026-05-29
## Status: 6 NET-NEW FINDINGS — distinct from C214–C295 Phase 02

---

## Regulatory Framework Summary

Geneva boutique WM firms at 50–200 employees face a compound regulatory accountability structure: FINMA Guidance 08/2024 as primary AI governance reference, nFADP as active data protection obligation with FDPIC May 2025 enforcement confirmation, SRO regulatory silence on AI creating structural vacuum, institutional client questionnaires as operative standard-setting instrument, and carrier attestation operating as personal liability instrument with undefined adequacy standard. The six NET-NEW findings in this cycle surface specific structural intersections between these regulatory frameworks that are creating compound accountability exposure for Geneva boutique WM firms at a moment when institutional clients, carriers, and the documentation window are all converging simultaneously.

---

## 6 NET-NEW Compliance Findings (Distinct from C214–C295 Phase 02)

### Finding 01: FINMA Guidance 08/2024 proportionality principle without operational calibration creates documentation adequacy illusion

**Mechanism:** FINMA Guidance 08/2024 states that AI governance frameworks must be proportionate to firm size and risk profile—but does not define what proportionality means operationally for a 50–200 person Geneva boutique WM firm. The proportionality principle is aspirational in the Guidance, not operational. This creates a documentation adequacy illusion: boutiques producing documentation feel they are satisfying FINMA's proportionate framework requirement because their documentation is appropriately scaled to their firm size. But there is no external benchmark defining what "proportionate to boutique WM firm" documentation actually requires—and if a boutique faces a FINMA inquiry or enforcement action, the question is not "is this proportionate to your firm size" but "is this adequate for your AI risk profile," and the adequacy standard is defined by the specific governance decisions the boutique made, not by the size of the firm. A boutique that built a proportionate documentation architecture may still have inadequate governance for its specific AI risk exposure because proportionality was evaluated against firm size rather than against AI-specific risk factors. The proportionality principle without operational calibration creates false comfort: boutiques believe proportionate size = adequate governance, when the two are not equivalent under FINMA's risk-based supervision framework. This is distinct from C286/C287 Finding 05 proportionality framing which named the principle without isolating the specific documentation adequacy illusion mechanism where size-proportionate documentation satisfies the proportionality language but not the adequacy standard.

**Regulatory intersection:** FINMA Guidance 08/2024 proportionality + FINMA risk-based supervision doctrine + no boutique-scale operational definition = boutiques cannot determine whether their proportionate documentation is actually adequate for their AI risk profile.

**ICP language:** "We built a proportionate framework. It's the right size for our firm. I think it meets FINMA's expectations." / "Proportionate means we don't have to do everything a bank does. But what does proportionate actually require of us?"

**IMO compliance angle:** Proportionate AI governance adequacy assessment — evaluating whether a boutique's size-proportionate documentation actually covers its specific AI risk exposure to an evidential standard that would survive FINMA inquiry.

---

### Finding 02: nFADP Art.26 automated decision disclosure compounding with institutional client methodology questions creating dual disclosure architecture requirement

**Mechanism:** nFADP Art.26 requires that firms disclose when AI-based processing produces automated decisions that significantly affect data subjects (clients)—and clients have the right to request human review of those decisions. Institutional clients sending AI governance questionnaires to Geneva boutiques are simultaneously asking how AI was used in portfolio construction and what human review occurred at key decision points. These are parallel disclosure obligations with different legal bases, different audiences, different disclosure scopes, and different response timelines: Art.26 disclosure obligations are toward the client as data subject; institutional client methodology questions are toward the institutional client as counterparty to the mandate relationship. The obligations compound because satisfying an institutional client's methodology questions may require disclosure of the same decision process that Art.26 requires disclosing to the client as data subject. If the institutional client asks about AI-assisted decisions and the boutique explains the AI decision architecture, the explanation may constitute an Art.26 disclosure the boutique was required to provide independently. Conversely: if the boutique provided Art.26 disclosure to the client but the institutional client methodology question requires different framing or additional detail, the Art.26 disclosure does not discharge the institutional client obligation. No Geneva methodology exists for managing this dual disclosure architecture requirement—where Art.26 obligations toward clients as data subjects and institutional client methodology obligations toward the same clients as mandate counterparties operate in parallel with different disclosure standards. This is distinct from C292 Finding 03 Art.21 + Circular 2016/01 compound disclosure finding which named the multi-framework disclosure intersection without isolating the specific Art.26 + institutional client methodology dual obligation as its own compound requirement with different disclosure scopes for the same underlying decision architecture.

**Regulatory intersection:** nFADP Art.26 (client-as-data-subject disclosure) + institutional client AI methodology questionnaire (client-as-counterparty disclosure) — two different disclosure obligations to the same underlying AI decision architecture with no Geneva methodology for integration.

**ICP language:** "We disclosed to the client that AI was used. That probably covers it." / "The client asked a detailed question about portfolio construction AI. We answered. I'm not sure which disclosure standard we were supposed to be applying."

**FR:** "Nous avons informé le client de l'utilisation de l'IA. Je ne sais pas si cela couvrait aussi les questions méthodologiques du client institutionnel."

---

### Finding 03: nFADP Art.63 personal criminal liability framing conflict with carrier attestation indemnification architecture creating undisclosed legal exposure

**Mechanism:** nFADP Art.63 establishes personal criminal liability for managing directors who knowingly violate data protection obligations in ways that cause harm or expose individuals to risk. Carrier professional liability insurance is designed to indemnify the MD against claims arising from professional errors—but carrier indemnification architecture is not calibrated to criminal defense. When a carrier pays out a professional liability claim, it is resolving a civil/administrative exposure. When an MD faces personal criminal liability under Art.63, carrier indemnification does not discharge the criminal exposure—the criminal standard is different and personal. The structural conflict: the MD is managing personal criminal exposure through an insurance product that is not designed to address it. If an AI governance failure rises to the level of Art.63 criminal conduct, the MD's carrier insurance provides no criminal defense. The MD who signed carrier attestation documents attesting to AI governance controls does not have an indemnification pathway for the scenario those documents are most directly relevant to. Carrier attestation documents may actually increase Art.63 exposure by creating documented evidence of MD knowledge and commitment that supports the "knowingly" element of Art.63 if a data breach or client harm occurs. The carrier contract and the criminal exposure are structured in different legal frameworks with no Geneva methodology for managing their interaction. This is distinct from C292/C293 Art.63 naming which identified the personal criminal liability framing without isolating the specific architectural conflict between carrier indemnification designed for civil/administrative claims and the criminal defense standard under Art.63 where the same documented evidence can simultaneously satisfy carrier underwriting evidence requirements and increase criminal exposure.

**Regulatory intersection:** nFADP Art.63 criminal liability framework + carrier PI insurance indemnification architecture — two incompatible legal frameworks addressing the same MD decision record with different standards, different evidentiary requirements, and no integrated management methodology.

**ICP language:** "I have professional liability insurance. That covers me if something goes wrong." / "Article 63 — that's personal criminal liability. My carrier doesn't cover criminal. I'm not sure what does."

**IMO documentation angle:** Carrier attestation pre-signing review must evaluate criminal exposure separately from civil/administrative exposure — documentation that satisfies carrier underwriting requirements may increase criminal exposure without providing criminal defense.

---

### Finding 04: SRO AI guidance vacuum creating structural accountability displacement by carrier questionnaire operating as uncodified operative standard

**Mechanism:** SRO silence on AI creates a regulatory vacuum that is being filled by carrier AI governance questionnaires functioning as de facto operative standards for Geneva boutique WM firms. This is structural displacement: the standard-setting function that should belong to the SRO (as the boutique's primary regulatory interface) has been displaced to carrier underwriting questionnaires. The boutique is being governed by insurance industry standard-setting rather than regulatory standard-setting—and carrier standards are designed to solve carrier risk evaluation problems, not boutique WM governance problems. When a carrier sends an AI governance questionnaire, its operative standard is shaped by what the carrier needs to evaluate risk—not what FINMA expects of the boutique, not what nFADP requires, not what proportionate governance means at boutique scale. The displacement is ongoing: each carrier iteration of the AI governance questionnaire further codifies what "adequate AI governance" means for the boutique in the market's eyes, without any Geneva-calibrated input into what that standard should be. SRO regulatory vacuum + carrier questionnaire displacement = boutique governed by insurance underwriting standard for AI governance rather than by regulatory standards specifically designed for WM firms. This is distinct from C288/C289 SRO vacuum findings which named the vacuum without isolating the specific carrier questionnaire displacement as active uncodified operative standard-setting mechanism operating because of the SRO vacuum, creating a regulatory environment shaped by insurance underwriting logic rather than WM regulatory doctrine.

**Regulatory intersection:** SRO regulatory silence + carrier questionnaire structural displacement + FINMA Guidance operative as future expectation + nFADP obligations creating active compliance requirement = four-track regulatory environment where the most operationally immediate standard (carrier questionnaire) is the least Geneva-calibrated.

**ICP language:** "The carrier form is effectively asking us what our AI governance standard is. We're filling it out without knowing what standard we're being measured against." / "The carrier knows more about what they want than our SRO does."

**IMO advisory angle:** Cross-carrier AI governance questionnaire mapping service — which carriers are sending which instruments, what adequacy standard is embedded in each, what cross-carrier coherence requires — is effectively the boutique's de facto Geneva WM AI governance standard-setting activity in the absence of SRO guidance.

---

### Finding 05: Geneva AML/KYC AI tools creating undisclosed compliance intersection where SRO AML obligations are being partially discharged through AI tools that are undisclosed in any AI governance documentation

**Mechanism:** Geneva boutique WM firms affiliated with SROs are required to maintain AML/KYC compliance programs. Many are using AI-assisted tools for AML/KYC purposes—transaction monitoring, client onboarding verification, sanctions screening—without recognizing that AI tool use for AML/KYC simultaneously creates AI governance obligations under FINMA Guidance 08/2024,FADP, and institutional client questionnaire frameworks that are not being addressed. The SRO is requiring AML/KYC compliance and not addressing AI. The boutique is satisfying SRO AML/KYC obligations using AI tools while not documenting the AI tool use in any AI governance framework. When institutional clients ask about AI governance or a carrier form includes AI governance questions, the AML/KYC AI tool use—which is regulatory-required activity—is not included in the boutique's AI governance inventory because the boutique treats it as SRO compliance activity rather than AI governance activity. This creates a compliance intersection gap: required SRO AML/KYC AI tool use is undisclosed in AI governance documentation that is being provided to institutional clients, carriers, and potentially FINMA in an AI governance context. The undisclosed intersection between SRO-required AML/KYC AI tools and AI governance documentation creates a documentation gap that is simultaneously a regulatory disclosure exposure and a competitive intelligence exposure if the institutional client discovers that the boutique's AI governance documentation does not include the AI tools the boutique actually uses for regulatory-required client monitoring. This is distinct from all prior SRO compliance findings which addressed SRO silence on AI generally without isolating the specific compliance intersection where required SRO AML/KYC AI tool use creates undisclosed AI governance disclosure obligations in parallel documentation streams.

**Regulatory intersection:** SRO AML/KYC obligations + FINMA Guidance AI governance obligations + institutional client AI questionnaire obligations + nFADP AI data processing obligations = simultaneous multi-framework compliance requirement where required activity (AML/KYC AI) is undocumented in the compliance stream that addresses a different framework (AI governance).

**ICP language:** "We're using AI for AML screening. That's required by our SRO. I never thought of it as an AI governance question." / "Our SRO expects us to use AI for client onboarding. But our AI governance documentation doesn't mention it."

**IMO advisory angle:** SRO-required AI tool inventory as discrete compliance sub-category — identifying which AI tools are required by SRO AML/KYC obligations vs. discretionary AI tools, and managing the documentation intersection between SRO compliance and AI governance disclosure.

---

### Finding 06: Documentation window temporal compression creating evidence standard escalation paradox where current documentation is being evaluated against standards that have escalated since the documentation was produced

**Mechanism:** The documentation window for Geneva boutique WM AI governance is not just that documentation must be built before an inquiry arrives—it is that documentation standards are escalating faster than documentation cycles can respond. A boutique that produced AI governance documentation in Q4 2024 in response to the institutional client questionnaire wave is being evaluated against 2025-2026 standards that have materially escalated. The carrier questionnaires sent in 2024 asked about AI governance policy. The carrier questionnaires being sent in 2026 ask about vendor processor chains, sequential authorization documentation, and sub-processor disclosures. Documentation produced for the 2024 questions does not satisfy the 2026 questions. The boutique that was an early responder and built documentation quickly is now in a worse position than a boutique that built documentation later—the early responder built to a lower standard and is now being evaluated against a higher standard. Documentation window is compressing: the window is not just "build before the questions arrive" but "build against a standard that is escalating faster than your documentation cycle." This is distinct from all prior documentation window findings which named the window close generally without isolating the specific temporal compression mechanism where early documentation production creates a lower-evidence-standard reference point that is actively disadvantaged compared to later production as the standard escalates in real time.

**Regulatory intersection:** Documentation standard escalation velocity > boutique documentation update cycle + carrier questionnaire escalation cadence + institutional client re-review practice = present-tense documentation inadequacy even for boutiques that acted early.

**ICP language:** "We moved quickly. We built our AI governance documentation last year. Now it looks like it's not enough." / "The standard keeps moving. Every time we update, they're asking about something new."

**IMO advisory angle:** Documentation cadence calibration — advising boutiques on documentation update frequency calibrated to carrier questionnaire and institutional client re-review cadence, not to annual review cycles.

---

## Additional Regulatory Context (Carried Forward from C214–C295)

### Operative Framework (Updated May 2026)

| Regulation | Relevance | Status |
|---|---|---|
| **FINMA Guidance 08/2024** | AI governance primary reference; proportionate framework expected; published Dec 18, 2024 | ✅ Operative |
| **nFADP** | ROPA, DPIA, Art.26 disclosure, Art.63 personal criminal liability | ✅ Operative since Sep 2023; enforcement live per FDPIC May 2025 |
| **nFADP Art.63** | Personal criminal liability for MD; unnamed in boutique WM market | ✅ Operative; unnamed exposure |
| **SRO (VQF, FINIA)** | AML/KYC; entirely silent on AI; structural vacuum | ✅ Operative vacuity |
| **FDPIC May 8, 2025** | nFADP applies to AI-based data processing; enforcement live | ✅ Operative clarification |
| **Federal Council AI Strategy (Feb 2025)** | Framework direction; 2026+ implementation | ⏳ Building |
| **CoE AI Convention (signed Mar 2025)** | Human rights-based AI framework; Switzerland signed | ⏳ Ratification pending |

### FINMA Guidance 08/2024 — Key Obligations for Boutiques

1. **AI inventory** — written inventory of all AI tools, purposes, client data processed
2. **Governance policy** — named responsible person, human oversight documentation
3. **Vendor due diligence** — contractual and technical controls for external AI SaaS (91% of Swiss FIs)
4. **Human oversight documentation** — reviewable AI-assisted decisions with evidence of human review
5. **Incident response** — 72-hour FDPIC breach notification for AI-related incidents
6. **DPIA** — for high-risk AI processing (including AI-assisted portfolio construction)

### nFADP WM-Specific Obligations

| Article | Obligation | WM Relevance |
|---|---|---|
| Art. 5 | Lawful basis | Client financial data AI processing must have legal basis |
| Art. 6–8 | Data subject rights | Client access, correction, profiling notification |
| Art. 9 | Data processing agreements | External AI SaaS vendors; sub-processor chains |
| Art. 14–15 | ROPA | AI tool inventory required in processing register |
| Art. 22 | DPIA | High-risk AI processing including portfolio construction |
| Art. 26 | Automated decision disclosure | AI-assisted portfolio decisions client disclosure |
| Art. 29 | Breach notification (72 hours) | AI incident + client data breach |
| Art. 63 | Personal criminal liability | MD personally accountable for knowingly violating nFADP |

---

## Bilingual Compliance Terminology (EN + FR)

| EN | FR | Note |
|---|---|---|
| FINMA Guidance 08/2024 | Guidance FINMA 08/2024 | BRAND term; not regulatory circular |
| nFADP | RaP (Recueil des lois sur la protection des données) | Swiss FADP in FR legal register |
| Art.63 personal liability | Responsabilité personnelle Art.63 | MD-specific criminal exposure |
| ROPA | Registre des activités de traitement | Record of Processing Activities |
| DPIA | Analyse d'impactprivacy | Privacy Impact Assessment |
| SRO | OAR (Organisme d'autorégulation) | VQF, FINIA in Swiss context |
| Carrier attestation | Attestation de l'assureur | Insurance underwriting instrument |
| Documentation window | Fenêtre de documentation | Tactical positioning term |
| Proportionate framework | Cadre proportionné | "Adapté à la taille du cabinet" |
| Vendor due diligence | Examen des fournisseurs | Practical operational framing |
| Authorization chain | Chaîne d'autorisation | Sequential AI-to-human authorization |
| Processor chain | Chaîne de sous-traitants | Vendor sub-processor disclosure |

---

## Status
- Framework version: 01 (Cycle 296 — initial)
- 6 NET-NEW findings distinct from C214–C295 Phase 02
- GitHub push: PENDING — all 6 files must be complete before push
