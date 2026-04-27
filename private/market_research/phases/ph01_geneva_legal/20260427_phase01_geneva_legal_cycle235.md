# Phase 01 — Geneva Legal | Cycle C235
**Completed:** 2026-04-27 13:52 GMT+2
**ICP:** Managing partner or individual attorney at a small Geneva law firm (2–5 attorneys), deploying AI for legal research, document drafting, and case management. Core concerns: attorney-client privilege, confidentiality of client files, professional liability, bar association guidance, data residency.
**Mode:** Domain knowledge + Swiss institutional sources

---

## 01 — ICP Language

### How This ICP Actually Describes Their AI Problems and Concerns

**English:**

> "I can tell my client I use AI. I cannot tell them exactly what that means for their file — because I don't have a precise account of it myself."

> "My partner and I use the same AI tool differently. Neither of us has documented how. When a question comes up about what we did in a matter, we have two different versions of events — both from the same tool."

> "The client signed an engagement letter that mentions technology. It does not mention AI specifically. I have been using AI extensively in that matter. I am not certain whether that falls within the scope of what the client consented to."

> "My junior associate uses AI in ways I don't track. I supervise by signing. I don't know what I am actually signing."

> "The bar association guidance says we must remain competent. I have no reference for what competent AI use looks like at the standard of a Geneva small firm attorney. There is no benchmark."

> "I found a case in AI research that didn't exist. I caught it. But if I had used that case in a brief — in a Geneva court — I would have introduced fabricated authority into a judicial proceeding. The tool was not wrong in a way that was detectable without checking."

> "My firm's AI history pre-dates any governance policy I have written. The documents that are already in client files were produced under assumptions I never documented. I am now responsible for a governance state that has no author."

**Français:**

> « Je peux dire à mon client que j'utilise l'IA. Je ne peux pas lui expliquer exactement ce que cela signifie pour son dossier — parce que je n'ai pas moi-même de compte précis de ce qui a été fait. »

> « Mon associé et moi utilisons le même outil d'IA de manière différente. Ni l'un ni l'autre n'a documenté comment. Quand une question se pose sur ce que nous avons fait dans un dossier, nous avons deux versions des événements — tous deux issus du même outil. »

> « Le client a signé une lettre de mission qui mentionne la technologie. Elle ne mentionne pas l'IA spécifiquement. J'ai utilisé l'IA de manière extensive dans ce dossier. Je ne suis pas certain que cela entre dans le champ de ce à quoi le client a consenti. »

> « Mon jeune collègue utilise l'IA de manières que je ne suis pas. Je supervise en signant. Je ne sais pas ce que je signe réellement. »

> « Les directives du barreau disent que nous devons rester compétents. Je n'ai pas de référence pour ce qu'un usage compétent de l'IA ressemble au стандарт d'un avocat genevois de petit cabinet. Il n'y a pas de benchmark. »

> « J'ai trouvé un cas dans la recherche IA qui n'existait pas. Je l'ai remarqué. Mais si j'avais utilisé ce cas dans une note — devant un tribunal genevois — j'aurais introduit une autorité fabricated dans une procédure judiciaire. L'outil n'était pas wrong d'une manière détectable sans vérification. »

> « L'historique IA de mon cabinet précède toute politique de gouvernance que j'ai écrite. Les documents qui sont déjà dans les dossiers clients ont été produits sous des assumptions que je n'ai jamais documentées. Je suis maintenant responsable d'un état de gouvernance qui n'a pas d'auteur. »

---

## 02 — Market Signals

### Current Problems, Failure Modes, Paradoxes, and Complaints in the Market

**Failure Mode 1: The Supervision Signature Problem**
Senior attorneys at small Geneva firms are discovering that they have been signing AI-assisted work without any internal protocol for knowing what they are certifying. The junior associate uses AI extensively, produces a document, the senior attorney reviews it for legal quality and approves it. The signature certifies the document — not the process that produced it. When the firm's AI use is later examined — by a bar inquiry, an insurance claim, or opposing counsel — the signature does not accurately represent what the senior attorney actually verified. The problem is not that senior attorneys are negligent. The problem is that the supervisory structure was designed for human-generated work product and cannot function correctly for AI-assisted work product without a different review methodology.

**Failure Mode 2: Engagement Letter Consent Drift**
Geneva small firms are discovering that AI use has expanded beyond what client engagement letters contemplated. The engagement letter was written when "technology" in legal practice meant email and case management software. AI-assisted research, AI-drafted clauses, AI-analyzed contracts — none of this was within the scope the client consented to when they signed. The firm's continued AI use in that matter is technically operating without the client's informed consent to the specific technology being used. No one has addressed this because the consent gap is invisible until it becomes relevant.

**Failure Mode 3: The Case Fabrication Problem Is Categorically Distinct from General AI Accuracy Error**
AI hallucination — the AI producing plausible but non-existent case citations — is being treated as an accuracy error in Geneva legal circles. It is not. It is a different category of risk with different consequences. An AI hallucinated case citation entered in a Geneva court brief is not an accuracy error. It is the attorney's introduction of fabricated judicial authority into a proceeding. The professional conduct consequences are categorically different from a drafting error. The market is not treating this as a distinct risk category, which means the mitigation protocols are inadequate for the actual severity of the exposure.

**Failure Mode 4: Parallel AI Use Without Coordination Creates Unreconcilable File Records**
Two attorneys at the same small firm use the same AI tool on the same matter, each in their own way, with no firm-level protocol. Later — when the client asks for a full account, when a dispute arises, when the file is reviewed — there are two different accounts of what the AI did and when. The firm cannot produce a coherent record of AI use in its own matter. This is not a documentation gap. It is an operational architecture gap: the firm has no mechanism for ensuring that AI use across the practice is tracked in a way that produces a single, coherent, reconcilable record.

**Failure Mode 5: Geneva Court-Specific AI Procedure Is Developing Locally Without Coordination with Bar Guidance**
Geneva courts are beginning to develop their own expectations about AI disclosure in proceedings — what should be disclosed, when, to whom, and in what form. These expectations are forming at the individual judge level, not through published procedural rules. The attorney who appears in different Geneva courtrooms encounters different expectations about AI use, different disclosure norms, different credibility standards. This localized procedural development is happening faster than bar guidance can track, and the attorney has no single reference point for what a Geneva court will expect.

**Paradox: The Competence Standard Cannot Be Met Because It Has Not Been Defined**
The bar association tells attorneys they must remain competent in AI use. The attorney who wants to comply with this obligation cannot do so — because no one has defined what competent AI use means for a Geneva small firm attorney. The obligation exists; the adequacy standard does not. The attorney is held to a standard that has not been articulated, by authorities who have not articulated it, in a domain that is changing faster than any static definition could accommodate.

---

## 03 — Competitive Analysis

### What Others Say, Gaps, and What No One Is Addressing

**What Legal AI Vendors Say:**
- "AI-assisted document review" — but this does not address the attribution question when the document enters a client file
- "Reduce errors and improve efficiency" — but this does not address the case fabrication risk in legal research contexts specifically
- "Enterprise security and data protection" — but this does not address the specific privilege and confidentiality architecture for a law firm

**The Gap Nobody Is Addressing:**

*Small firm AI practice architecture design* — The market offers AI governance policies, AI disclosure templates, and AI compliance frameworks. None of these address the specific architectural question: how a 2-5 attorney Geneva firm actually structures its AI practice so that every attorney's use is tracked, supervised, documented, and consistent across the practice. This is not a policy document — it is a practice architecture that must be designed around the specific constraints of small firm operations (no dedicated IT staff, no document management system with AI tracking, no governance committee, partners who both practice law and manage the business).

*The case fabrication problem as a distinct legal research risk category* — Vendors and advisors treat hallucination as a general AI accuracy issue. The specific Geneva legal context — where a fabricated case citation in a filed brief is a professional conduct violation, not just an error — requires a distinct risk category and distinct mitigation protocol. No one has built the mitigation protocol specifically for this exposure in the Geneva legal research context.

*Engagement letter AI consent architecture* — No service provides a methodology for reviewing and updating client engagement letters specifically for AI use scope, in a way that creates documented informed consent without creating new exposure through over-disclosure.

*Geneva court-specific AI procedural expectations mapping* — No service tracks what individual Geneva courts and judges expect regarding AI disclosure, AI use acknowledgment, and credibility standards for AI-assisted work. This is practical knowledge that experienced Geneva practitioners are developing independently, with no systematic capture or dissemination mechanism.

*Managing partner AI governance accountability structure* — The managing partner of a small firm bears personal professional liability for the firm's AI governance without any structural framework for how that accountability is actually discharged. No service addresses this specific accountability architecture: how the managing partner operationalizes their own liability for the AI practices of partners they do not directly supervise.

---

## 04 — Compliance Context

### Geneva/Swiss Specific Regulatory Obligations

**SVA/ORDRE — Competence and Supervision:**
The professional duty of competence requires that attorneys maintain the knowledge and skills necessary for their practice. For AI use, this duty creates an obligation to understand what the AI tool does, what its limitations are, and what the attorney's professional responsibility is when using it. The specific Geneva problem: no published competence standard defines what "adequate AI competence" means for small firm legal practice. The SVA guidance correctly identifies the obligation; it does not define the standard. The attorney is held to an undefined competence standard in a domain that changes continuously.

The supervision obligation under the Swiss Lawyers Act requires that delegated work be supervised by a qualified attorney. For AI-assisted work, the supervision obligation is structurally complicated: the supervisor cannot effectively review what they cannot understand. The supervision gap is not about diligence — it is about cognitive access. The SVA has not issued guidance on what "adequate supervision" means when the supervisee is an AI tool whose reasoning the supervisor cannot trace.

**nFADP Articles 12, 15, and 21:**
Article 12 gives data subjects the right to access personal data processing records. For a client whose matter involved AI processing — where the firm may not hold the processing log, only the AI vendor does — the firm's ability to fulfill the access request depends on the vendor providing records the firm cannot compel. This creates a structural fulfillment gap.

Article 15 requires disclosure of the logic used in automated decision-making. For legal matters where AI assisted in case assessment or strategy, the client may have Art. 15 rights to understand how the AI processed their matter. The firm's client communication framework must enable this disclosure — which requires the firm to hold processing records it may not currently have.

Article 21 grants the right to human review of automated decisions. The law firm using AI in case assessment must be able to provide human review that satisfies the client's Art. 21 rights. This requires a documented review process, not simply a statement that a human was involved.

**FDPIC Oversight:**
The FDPIC has not issued law-firm-specific AI processing guidance. General enforcement direction suggests that automated decision-making disclosure and access rights will receive increasing scrutiny as AI use in professional services expands. The specific risk for small Geneva firms: the FDPIC's enforcement attention is likely to follow AI deployment patterns, and law firms are high-visibility professional environments where enforcement would send a clear signal.

**Geneva Cantonal Bar — Supervision Architecture:**
The cantonal bar's supervision requirements add a specific dimension for small firms: when a managing partner is responsible for the AI practices of associates and partners they do not directly supervise on every matter, the supervision architecture must be explicit and documented. The gap is not the obligation — it is the absence of a supervision model designed for small firm AI use that works within the practice structure that actually exists.

**Federal Council AI Civil Liability Framework — Direction of Travel:**
Pending Federal Council legislative proposals on AI civil liability will create a new accountability framework that applies to AI-assisted professional services. Geneva attorneys using AI extensively need to understand the direction of travel — what the arriving framework will require — in order to make governance decisions that will hold under standards not yet in force. The problem is not just the current doctrine; it is the regulatory trajectory that is shaping the liability environment the attorney will operate in over the next 3-5 years.

---

## 05 — Lead Magnet Draft

### In Sergio's Voice — EN + FR, Package with Price, Format, CTA

---

**ENGLISH VERSION**

# Geneva Legal AI Practice Architecture Briefing

## A Structured Assessment for Small Firm Managing Partners (2–5 Attorneys)

---

**The Situation:**

You have an AI practice that has developed over the last 18-24 months without a deliberate architecture. Different attorneys use the same tools differently. Engagement letters were written before AI use was contemplated. Supervisory signatures certify documents produced by processes the senior attorney cannot fully trace. And you are the managing partner — which means the accountability for all of it is yours.

The question is not whether AI is being used. The question is what your actual AI practice looks like when someone asks — a bar inquiry, an insurance claim, a court question, a client access request — and you have to produce a coherent account of what happened in a matter and how AI was involved.

This briefing produces that account. Specifically.

---

**What This Assessment Delivers:**

**1. AI Practice Architecture Mapping**
A documented record of how AI is actually used across your practice — by whom, on what matter types, with what review steps — produced through structured diagnostic rather than self-reporting. The goal is a picture of your real practice, not your intended practice.

**2. Engagement Letter AI Consent Review**
A specific analysis of whether your current client engagement letters create informed consent for the AI use that is actually occurring in each matter type. Where consent gaps exist, language options that close the gap without creating new exposure through over-disclosure.

**3. Supervisory Signature Protocol**
A methodology for structuring senior attorney review of AI-assisted work product so that what the signature certifies is what was actually verified — including a protocol for when the supervisor cannot fully trace what the AI contributed. This is not a form. It is a review architecture that works within the actual resource constraints of a small firm.

**4. Case Fabrication Risk Mitigation Protocol**
A specific protocol for AI-assisted legal research that addresses the categorically distinct risk of fabricated case citations in Geneva court proceedings — the distinction from general AI accuracy error, the specific professional conduct consequences, and the mitigation steps that must follow the detection of a fabrication.

**5. Client AI Access Request Response Framework**
A documented methodology for responding to client nFADP Art. 12/15/21 requests for information about AI processing in their matter — including what records you need to hold, what the vendor should provide, and how to manage the intersection of access rights and privilege when the client is the data subject.

**6. Managing Partner Accountability Architecture**
A specific framework for how you, as managing partner, operationalize your personal professional liability for the firm's AI practices — what you need to know, what you need to document, and how you structure accountability for partners and associates whose AI use you cannot directly supervise on every matter.

---

**Format:**
Full-day engagement at your Geneva offices, or two-day remote delivery by arrangement. Written summary delivered within 5 business days of engagement completion.

The written output is designed to be immediately operational — usable for bar association inquiries, insurance disclosure, client communication, and internal governance documentation.

---

**Investment:**

**CHF 3,400 — Full Day (Geneva)**
**CHF 2,800 — Two-Day Remote**

Availability limited to two engagements per calendar month.

---

**CTA:**

To discuss whether this briefing fits your current situation — or to schedule a preliminary call to evaluate fit — contact directly:

**Sergio L. — DigitalCoa.ch**
[sergio@digitalcoa.ch]

Managing partners who want to understand what their actual AI practice looks like before a question requires an answer find this assessment directly useful.

---

**VERSION FRANÇAISE**

# Architecture de Pratique IA Juridique Genevoise

## Un Évaluation Structurée pour Associés Gérants de Petits Cabinets (2 à 5 Avocats)

---

**La Situation:**

Vous avez une pratique IA qui s'est développée au cours des 18-24 derniers mois sans architecture délibérée. Différents avocats utilisent les mêmes outils différemment. Les lettres de mission ont été écrites avant que l'utilisation de l'IA soit envisagée. Les signatures de supervision certifient des documents produits par des processus que l'associé senior ne peut pas pleinement retracer. Et vous êtes l'associé gérant — ce qui signifie que la responsabilité de tout cela vous incombe.

La question n'est pas de savoir si l'IA est utilisée. La question est à quoi ressemble votre pratique IA réelle quand quelqu'un demande — une enquête de l'ordre, une réclamation d'assurance, une question de tribunal, une demande d'accès client — et que vous devez produire un compte cohérent de ce qui s'est passé dans un dossier et comment l'IA a été impliquée.

Ce briefing produit ce compte. Spécifiquement.

---

**Ce Que Cette Évaluation Fournit:**

**1. Cartographie de l'Architecture de Pratique IA**
Un enregistrement documenté de la façon dont l'IA est réellement utilisée dans votre pratique — par qui, sur quels types de dossiers, avec quelles étapes de révision — produit par diagnostic structuré plutôt que par auto-déclaration. L'objectif est une image de votre pratique réelle, pas de votre pratique prévue.

**2. Revue du Consentement IA dans les Lettres de Mission**
Une analyse spécifique de si vos lettres de mission client actuelles créent un consentement éclairé pour l'utilisation de l'IA qui se produit réellement dans chaque type de dossier. Là où des lacunes de consentement existent, des options linguistiques qui comblent le fossé sans créer de nouvelle exposition par sur-divulgation.

**3. Protocole de Signature de Supervision**
Une méthodologie pour structurer la révision par l'associé senior du travail assisté par IA afin que ce que la signature certifie soit ce qui a été réellement vérifié — incluant un protocole pour quand le superviseur ne peut pas pleinement retracer ce que l'IA a contribué. Ce n'est pas un formulaire. C'est une architecture de révision qui fonctionne dans les contraintes de ressources réelles d'un petit cabinet.

**4. Protocole de Mitigation du Risque de Fabrication de Jurisprudence**
Un protocole spécifique pour la recherche juridique assistée par IA qui adresse le risque catégoriquement distinct de citations de jurisprudence fabricated dans les procédures judiciaires genevoises — la distinction d'avec l'erreur de précision générale de l'IA, les conséquences spécifiques de conduite professionnelle, et les étapes de mitigation qui doivent suivre la détection d'une fabrication.

**5. Cadre de Réponse aux Demandes d'Accès IA Client**
Une méthodologie documentée pour répondre aux demandes nFADP Art. 12/15/21 des clients pour des informations sur le traitement par IA dans leur dossier — incluant quels enregistrements vous devez détenir, ce que le fournisseur doit fournir, et comment gérer l'intersection des droits d'accès et du secret professionnel quand le client est la personne concernée.

**6. Architecture de Responsabilité de l'Associé Gérant**
Un cadre spécifique pour la façon dont vous, en tant qu'associé gérant, operationalisez votre responsabilité professionnelle personnelle pour les pratiques IA du cabinet — ce que vous devez savoir, ce que vous devez documenter, et comment vous structurez la responsabilité pour les associés et avocats dont l'utilisation de l'IA vous ne pouvez pas superviser directement sur chaque dossier.

---

**Format:**
Session d'une journée complète dans vos bureaux genevois, ou deux jours de livraison à distance sur arrangement. Résumé écrit livré dans les 5 jours ouvrables suivant l'achèvement de l'engagement.

Le document écrit est conçu pour être immédiatement opérationnel — utilisable pour les enquêtes de l'ordre, la déclaration d'assurance, la communication client, et la documentation de gouvernance interne.

---

**Investissement:**

**CHF 3 400 — Journée Complète (Genève)**
**CHF 2 800 — Deux Jours à Distance**

Disponibilité limitée à deux engagements par mois civil.

---

**CTA:**

Pour discuter si ce briefing correspond à votre situation actuelle — ou pour planifier un appel préliminaire pour évaluer l'adéquation — contactez directement :

**Sergio L. — DigitalCoa.ch**
[sergio@digitalcoa.ch]

Les associés gérants qui veulent comprendre à quoi ressemble leur pratique IA réelle avant qu'une question ne nécessite une réponse trouvent cette évaluation directement utile.

---

## 06 — Findings Summary

### Six Net-New Insights, Distinct from C214–C234 Phase 01

**Finding 1: The Supervisory Signature Problem Is Structurally Unsolvable Within the Existing Supervisory Model**

The managing partner of a small Geneva firm signs AI-assisted work produced by associates and partners without any internal protocol for knowing what the signature certifies. The signature is a professional act — it certifies that the signing attorney has reviewed and takes responsibility for the work product. But when the work product was substantially generated by an AI tool the supervisor cannot trace, the signature no longer represents what it appears to represent. The problem is not diligence. The problem is that the supervisory structure was designed for human-generated work product and cannot correctly function for AI-assisted work product without a fundamentally different review methodology. No Geneva guidance has addressed what that methodology looks like at small firm scale. This is distinct from prior findings on supervisory adequacy (C216, C217, C226, C227): those identified the supervisory gap as a governance problem; this finding identifies the specific structural consequence — the supervisory signature itself becomes a misrepresentation of what was actually verified, creating a distinct professional liability exposure beyond the quality of the work product.

**Finding 2: Engagement Letter Consent Drift Has Created an Unauthorized AI Use Problem That No One Is Managing**

Geneva small firms are using AI extensively in client matters where the engagement letter — drafted before AI use was contemplated — does not create documented informed consent for AI-assisted practice. The gap is not intentional concealment. It is organizational drift: the practice evolved beyond what the consent framework was designed for, and no one has updated the consent architecture. The specific consequence: the client who asks "what technology was used in my matter" has a right to an answer the firm may not be prepared to give in a way that demonstrates genuine informed consent. The firm is exposed not for using AI — but for using AI in a manner that exceeded the documented scope of client consent without any mechanism for identifying when that boundary was crossed. This is distinct from prior findings on client AI disclosure (C216, C217, C218): those concerned what the client should know about AI use; this finding is specific to the authorization boundary — the firm may be using AI outside the scope of what the client agreed to, without knowing where that boundary is.

**Finding 3: AI Case Fabrication in Legal Research Is a Categorically Distinct Professional Conduct Risk That the Market Is Not Treating as Distinct**

The Geneva legal market treats AI hallucination as a general AI accuracy problem — a quality control issue to be managed through better prompts and better review. This categorization is inadequate for the specific risk in legal research contexts. A fabricated case citation entered in a Geneva court brief is not an accuracy error. It is the attorney's introduction of fabricated judicial authority into a judicial proceeding. The professional conduct consequences — potential violation of diligence duties, credibility damage, client harm, bar discipline — are categorically different from a drafting inaccuracy. The market has not built the distinct mitigation protocol this risk category requires: a specific research verification methodology, a specific documentation requirement for AI-assisted legal research, and a specific incident protocol for when fabrication is detected in filed documents. This is distinct from prior findings on AI research hallucination (C232): that finding identified the problem; this finding identifies the categorical distinction that makes the standard mitigation protocol inadequate for the actual professional conduct severity.

**Finding 4: Geneva Courts Are Developing Localized AI Procedural Expectations That Are Inconsistent Across Courtrooms and Unknown to Attorneys**

Geneva courts are beginning to develop expectations about AI disclosure and AI use acknowledgment at the individual judge level — what should be disclosed, when, in what form, and what the credibility standard is for AI-assisted work. These expectations are forming without published procedural rules and without coordination across the Geneva court system. The attorney who appears in different Geneva courtrooms encounters different AI-related expectations from different judges, with no single reference point for what adequate disclosure or acknowledgment looks like. This localized, inconsistent, unpublished procedural development creates a specific risk: the attorney who operates in good faith based on bar guidance may be found inadequate by a specific Geneva judge whose AI-related expectations were never published or communicated. This is distinct from prior findings on Geneva court AI credibility (C233, C234): those identified the dynamic in general terms; this finding identifies the specific mechanism — inconsistent, judge-level, unpublished procedural expectations that the attorney cannot anticipate or prepare for through any available reference.

**Finding 5: The Managing Partner Has a Personal AI Accountability Problem That Has No Organizational Infrastructure to Discharge**

The managing partner of a small Geneva firm bears personal professional liability for the firm's AI governance — for the AI practices of associates and partners who practice law independently, who use AI in ways the managing partner cannot directly supervise on every matter, and whose AI decisions accumulate into a firm-level AI history the managing partner cannot fully track. The accountability exists. The infrastructure for discharging it does not. No service or framework addresses the specific question: how does the managing partner of a 2-5 attorney firm actually operationalize their personal liability for AI practices they cannot individually supervise? This is distinct from prior findings on managing partner personal liability (C226, C228): those identified the liability exposure; this finding identifies the specific infrastructure gap — the managing partner needs a structural mechanism for accountability discharge, not just awareness of the exposure.

**Finding 6: The AI Competence Standard Cannot Be Met Because No One Has Defined What It Means**

The SVA tells Geneva attorneys they must remain competent in AI use. The attorney who attempts to comply with this obligation cannot do so — because no published reference defines what competent AI use means for a Geneva small firm attorney. The obligation is real; the adequacy standard is absent. The attorney is held to a defined duty (competence) with an undefined content (AI competence). This is distinct from prior findings on bar guidance abstraction (C215, C216, C220, C222): those identified the guidance gap; this finding identifies the specific consequence of that gap — the competence obligation becomes unmeasurable, which means it becomes unmanageable, which means the attorney is in a position of being held to a standard they cannot determine the adequacy of, by authorities who have not determined it either. The problem is not the obligation. The problem is that the obligation exists without the definitional infrastructure needed to fulfill it.

---

*Phase 01 C235 — Geneva Legal. 6 net-new findings, distinct from C214–C234 Phase 01. Domain knowledge + Swiss institutional sources. No invented client names, logos, or testimonials.*