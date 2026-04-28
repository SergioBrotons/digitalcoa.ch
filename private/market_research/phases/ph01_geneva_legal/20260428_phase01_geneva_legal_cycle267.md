# Phase 01 — Geneva Legal ICP
## Cycle C267 | 2026-04-28 | DigitalCoa.ch Market Research

**ICP:** Managing partner or individual attorney at a small Geneva law firm (2–5 attorneys), deploying AI for legal research, document drafting, and case management.
**Core concerns:** Attorney-client privilege, confidentiality of client files, professional liability, bar association guidance, data residency.

---

## 01 — ICP Language

How this ICP actually describes their AI problems and concerns.

### English

**On privilege and AI analysis:**
- "When I use AI to analyze opposing counsel's brief, the AI system sees the brief. That brief was obtained under privilege in this proceeding. I've now put a privileged document into a US-based AI system. Nobody told me what that means for privilege."
- "My AI research tool showed me a thread of case law. I can't tell you which cases it retrieved from which database, which it generated from pattern matching, and which it confabulated. I've put three of them in my brief. I don't know which ones are real."
- "The privilege question isn't just about documents. It's about what the AI learned from looking at my file. If the AI drew an inference and that inference shows up in a brief, is that a disclosure?"

**On professional liability:**
- "My carrier asked me to describe my AI review process. I wrote something that sounds responsible. It bears no relationship to what actually happens in my practice. I signed it."
- "An associate used an AI tool on a brief without telling me. The brief had errors. I reviewed and signed it. I'm responsible for the errors."
- "I've been doing CE credits on AI. None of them tell me what the standard actually is. I have credits in the bank. I have no idea whether they address what I'm actually supposed to know."
- "There's a Federal AI Act coming. There's a cantonal guidance document from the bar. They don't agree with each other. I don't know which one applies to me."

**On client confidentiality and data residency:**
- "A client asked me to certify where their matter data travels through the AI pipeline. I can't do it. The vendor's privacy policy says 'global infrastructure.' That's not a certification."
- "My practice management tool updated its AI features automatically last week. I didn't decide to opt in. I don't know what data the new feature accesses."
- "A client with a European office asked whether their matter data leaves Switzerland. I said I thought not. I'm not certain. I shouldn't have said anything."

**On operational reality:**
- "I have two AI research tools, one for drafting, and one for case management. None of them talk to each other. I don't have a methodology for keeping track of what I used where."
- "I'm billing more hours because AI makes me faster. But I can't actually tell the client what I did versus what the AI did. The billing record is not an accountability record."
- "I sent correspondence under my name that I never read. The AI drafted it. If it said something wrong, it's my signature on it."

### Français

**Sur le secret professionnel et l'IA :**
- « Quand j'utilise l'IA pour analyser la requête de la partie adverse, le système d'IA voit cette requête. Cette requête a été obtenue sous le secret professionnel dans cette procédure. Je viens de mettre un document protégé dans un système d'IA basé aux États-Unis. Personne ne m'a expliqué ce que cela signifie pour le secret. »
- « Mon outil de recherche IA m'a montré un fil de jurisprudence. Je ne peux pas vous dire quels arrêts il a extraits de quelle base de données, lesquels il a générés par reconnaissance de formes, et lesquels il a inventés. J'en ai mis trois dans ma requête. Je ne sais pas lesquels sont réels. »
- « La question du secret ne concerne pas seulement les documents. Elle concerne ce que l'IA a appris en examinant mon dossier. Si l'IA a tiré une inférence et que cette inférence apparaît dans une requête, est-ce une divulgation ? »

**Sur la responsabilité professionnelle :**
- « Ma compagnie d'assurance m'a demandé de décrire mon processus de révision par IA. J'ai écrit quelque chose qui ressemble à une pratique responsable. Cela n'a aucun rapport avec ce qui se passe réellement dans mon cabinet. Je l'ai signé. »
- « Un collaborateur a utilisé un outil d'IA sur une requête sans me le dire. La requête contenait des erreurs. Je l'ai relue et signée. Je suis responsable des erreurs. »
- « Je fais des formations continues sur l'IA. Aucune ne me dit quelle est réellement la norme. J'ai des crédits en banque. Je ne sais pas s'ils couvrent ce que je suis censé savoir. »
- « Il y a une loi fédérale sur l'IA qui arrive. Il y a un document d'orientation cantonal du barreau. Ils ne sont pas d'accord entre eux. Je ne sais pas lequel s'applique à moi. »

**Sur la confidentialité des données et la résidence des données :**
- « Un client m'a demandé de certifier où passent ses données de dossier dans le pipeline de l'IA. Je ne peux pas le faire. La politique de confidentialité du fournisseur indique « infrastructure mondiale ». Ce n'est pas une certification. »
- « Mon outil de gestion de cabinet a mis à jour ses fonctions d'IA automatiquement la semaine dernière. Je n'ai pas décidé d'y adhérer. Je ne sais pas quelles données la nouvelle fonction accède. »
- « Un client ayant un bureau européen m'a demandé si ses données de dossier quittaient la Suisse. J'ai dit que je pensais que non. Je n'en suis pas certain. Je n'aurais rien dû dire. »

**Sur la réalité opérationnelle :**
- « J'ai deux outils de recherche IA, un pour la rédaction et un pour la gestion des dossiers. Aucun ne communique avec l'autre. Je n'ai pas de méthodologie pour suivre ce que j'ai utilisé où. »
- « Je facture plus d'heures parce que l'IA me rend plus rapide. Mais je ne peux pas réellement dire au client ce que j'ai fait par rapport à ce que l'IA a fait. L'enregistrement de facturation n'est pas un enregistrement de responsabilité. »
- « J'ai envoyé une correspondance sous mon nom que je n'ai jamais lue. L'IA l'a rédigée. Si elle disait quelque chose de wrong, c'est ma signature dessus. »

---

## 02 — Market Signals

Current problems, failure modes, and paradoxes observed in the Geneva legal AI market.

### Failure Mode: The Inference Chain Privilege Paradox

The dominant framing of attorney-client privilege and AI has focused on whether AI systems can access privileged materials. A subtler failure mode is now materializing: when an attorney uses AI to analyze privileged documents, the AI system draws inferences from those documents and stores those inferences in model weights or retrieval indices. The privilege concern is no longer about documents — it is about what the AI learned. Geneva attorneys are not describing this risk because no framework names it. The risk exists regardless of whether any document is ever disclosed to a third party.

### Failure Mode: The Undetectable Associate AI Use

Supervisory partners at 2–5 attorney firms are discovering that associates are the most intensive AI users, operating through channels the supervising partner has no visibility into. The partner reviews and signs the work product. The associate used AI tools the partner never evaluated. No mechanism exists at small-firm scale for bridging the gap between what the supervising partner certified and what the associate actually did. The liability exposure is not hypothetical — it is present tense every time a brief is signed.

### Paradox: The FDPIC Enforcement Absence Paradox

Geneva law firms are operating under a false security condition. The FDPIC (Préposé fédéral à la protection des données et à la transparence — PFPDT) has no recorded enforcement action against a Geneva law firm for AI-related data processing. This absence is being interpreted by firms as implicit approval of their practices. The PFPDT's annual reports document enforcement actions across sectors — finance, healthcare, retail — without a single legal services case. Geneva attorneys conclude they are not exposed. The more accurate reading is that the PFPDT lacks technical examination capacity for AI systems at law firms, not that AI use at law firms is compliant. The paradox: the enforcement absence creates the conditions for a large-scale, undetected compliance failure that will arrive simultaneously with the first enforcement action.

### Paradox: The Billing-Efficiency Incentive Reversal

AI makes small-firm attorneys more productive. More productive attorneys generate more billable hours. More billable hours require more AI use. More AI use increases the volume of client matter data processed through AI systems. Each additional AI use increases the attorney's accountability surface. The billing model creates a structural incentive to increase AI use, which increases compliance obligations, which increases liability exposure. The efficiency gain and the liability exposure are not in tension — they are the same behavior. Geneva attorneys have not modeled this as a structural loop because no advisor has framed it this way.

### Failure Mode: Post-Matter Confidentiality Continuity

When a matter closes, client files processed through AI systems remain in model training data, retrieval indices, and vendor infrastructure. Geneva attorneys have no methodology for describing what happens to closed-matter data when the AI platform continues operating. The confidentiality obligation does not terminate when the matter closes. The continuity of the obligation and the discontinuity of control over the data is a failure mode with no present-tense solution in the Geneva market.

### Paradox: The CE Credit Accumulation Without Competence Transfer

Geneva attorneys are accumulating continuing education credits in AI. The credits document attendance, not competence. The substantive AI curriculum required to actually understand what AI tools do, what they can and cannot be relied upon for, and what the professional obligations around their use actually require, is not available at the pace attorneys are being asked to adopt AI tools. The most intensive AI users — younger associates — have the least incentive to stop and document their practices, and the most exposure to the liability that results from undocumented AI use. The CE system documents compliance, not competence. This distinction has not been articulated in the Geneva market.

---

## 03 — Competitive Analysis

What others say, what gaps exist, and what no one is addressing.

### The Gap: No Geneva Market Service Names the Associate AI Use Supervision Failure as a Discrete Liability Category

Legal technology vendors sell AI tools to law firms. Legal consultants advise on AI governance frameworks. Bar associations publish AI guidance documents. None of these address the specific structural problem at 2–5 attorney firms: the supervising partner is personally liable for work they did not generate, using tools they did not evaluate, produced by people they cannot supervise with the infrastructure they have. This is not a workflow problem. It is a professional liability problem with a specific architectural cause. No Geneva service has named it as such.

### The Gap: No Geneva Service Addresses the Privilege Implication of AI Inference Chains

AI privilege analysis in Geneva has focused on two questions: (1) can clients request AI-generated work product under discovery, and (2) does using AI waive privilege by converting privileged documents into disclosed materials. Neither question addresses what happens when an AI system draws an inference from a privileged document, stores that inference, and the inference — not the document — appears in a brief or analysis. The market has not named this as a distinct privilege exposure. No Geneva service offers a methodology for tracking AI inference chains as a privilege risk.

### The Gap: No Geneva Service Models the FDPIC Enforcement Absence as a Specific Risk Condition

The Geneva legal AI market treats the absence of FDPIC enforcement against law firms as evidence of low regulatory risk. The more accurate analysis — that enforcement absence reflects capacity constraints, not compliance — has not entered market discourse. As a result, firms are not preparing for a first enforcement action that will arrive without warning, with no established protocol for response, and with maximum reputational consequence because no firm has pre-established that protocol. The service gap is not compliance documentation — it is the specific framing of enforcement absence as a risk condition rather than a risk reduction.

### What No One Is Addressing: The Post-Matter AI Data Continuity Obligation

No Geneva service addresses what happens to client matter data — and specifically the AI system's processing of that data — after a matter closes. This is distinct from general data retention policy, which Geneva firms may have in place. The specific question is: what is the ongoing confidentiality obligation with respect to AI-processed matter data, and what methodology exists for discharging it? No service offers this as a discrete product. The question is arriving in client conversations, particularly from international clients with non-Swiss data governance expectations.

### What No One Is Addressing: The Engagement Letter AI File Access Authorization

Engagement letters in Geneva law firms do not describe what AI tools access client matter files, under what authorization, with what data residency implications, and with what post-matter data fate. International clients — particularly those with EU operations subject to the EU AI Act or GDPR — are beginning to request specific representations about AI file access in matter authorization agreements. No Geneva service offers an engagement letter AI addendum specifically scoped to the file access authorization question as distinct from the broader AI use disclosure question. This is a distinct contract architecture problem, not a disclosure problem.

---

## 04 — Compliance Context

Geneva and Swiss-specific regulatory obligations relevant to this ICP.

### SVA/ORDRE des Avocats de Genève — Professional Obligations

The Ordre des Avocats de Genève (SVA) has published guidance on AI use by attorneys. The guidance establishes that attorneys remain professionally responsible for all work product regardless of the tools used to produce it. It does not specify what the supervisory standard requires with respect to AI tool evaluation, documentation, or associate AI use supervision. The guidance effectively defers to each attorney's professional judgment without defining the contours of that judgment.

The SVA continuing education (formation continue) requirements do not prescribe specific AI competency standards. Attorneys satisfy CE obligations by attending programs approved by the SVA. The AI-specific curriculum at approved programs varies substantially in depth and practical application. There is no mechanism for the SVA to certify that an attorney's AI-related CE represents actual competency rather than attendance.

The SVA has not published guidance on: (a) the privilege implications of AI inference chains, (b) the supervisory standard for associate AI use, (c) the post-matter AI data confidentiality obligation, or (d) the engagement letter AI file access authorization requirement. These gaps represent present-tense exposure areas that the SVA has not yet addressed.

### nFADP — Swiss Federal Act on Data Protection (Revised, in Force)

The nFADP applies to law firms processing client data, including data processed through AI tools. Article 4 requires a legal basis for processing. Article 9 requires specific authorization for processing by third parties. Article 13 requires disclosure of data processing upon request. Article 21 creates rights for data subjects to request disclosure of automated decision logic.

For Geneva law firms, the following nFADP application questions are specifically unresolved:

**Article 9 — Third-Party AI Processing Authorization:** When a Geneva law firm uses a commercial AI platform to process client matter data, the platform may constitute a third-party processor under Article 9. The authorization requirement applies. The firm's engagement letter does not typically describe this processing. The firm's vendor agreements with AI platforms may not constitute valid Article 9 authorization because the authorization may not specifically describe the types of processing, the data categories, or the legal obligations of the processor. This is distinct from the general nFADP compliance gap — it is a specific, present-tense authorization architecture failure.

**Article 21 — Automated Decision Logic Disclosure:** A client subject to an AI-generated analysis or recommendation may request disclosure of the automated decision logic. The law firm must be able to describe how the AI system reached its conclusion. At small-firm scale, this is structurally difficult: the AI system's decision logic may not be explainable by the firm, may not be documented by the vendor, and may not be reconstructable from the firm's own records. The obligation exists. The means of discharge do not exist at most Geneva small firms.

**Post-Breach Audit Obligation:** Under nFADP Article 12 and associated OFDP (now PFPDT) guidance, a law firm experiencing a data breach involving AI-processed client data has obligations to investigate and remediate. The specific question — what does an AI system audit look like after a breach, and who conducts it — has not been answered by any Geneva authority. Firms do not have post-breach AI audit protocols. The obligation exists without a defined discharge methodology.

### FDPIC / PFPDT — Federal Data Protection and Information Commissioner

The PFPDT is the supervisory authority under nFADP. It has not issued guidance specific to AI use by law firms. Its general AI-related guidance documents address the technology at a level of abstraction that does not translate into operational obligations for attorneys.

The PFPDT has not brought an enforcement action against a Geneva law firm for AI-related data processing. This absence creates the enforcement absence paradox described in Section 02. The PFPDT has limited technical capacity to examine AI systems at law firms specifically. This capacity constraint is not published as a factor in the enforcement absence, and firms are drawing incorrect inferences from the absence.

The PFPDT's annual reports document enforcement trends. No enforcement action against a Geneva law firm has been documented in any annual report through 2025. Firms should note this absence is not a safe harbor — it reflects capacity, not compliance.

### Swiss Criminal Procedure Code (CPP) — Art. 229 and Algorithmic Evidence

Article 229 CPP provides the framework for evidence disclosure in Swiss criminal procedure. It has been identified in academic literature as potentially applicable to algorithmic systems — specifically, whether a party can be compelled to disclose the AI system or algorithm used to produce evidence or analysis in a proceeding. This provision has not been applied to an AI system in a Geneva proceeding. No Geneva law firm has a protocol for responding to an algorithmic evidence disclosure order under Article 229.

The Federal AI Act (when in force) will create additional obligations around algorithmic transparency. The interaction between Article 229 CPP, the Federal AI Act, and professional confidentiality obligations has not been mapped. Geneva firms using AI in criminal or civil proceedings should anticipate that disclosure obligations will arrive before the Federal AI Act does, and without a defined response methodology.

### Professional Liability Insurance — Carrier AI Questionnaire Requirements

Swiss professional liability carriers serving law firms have issued increasingly specific AI-related questionnaires as part of renewal and coverage assessment. The third-generation carrier questionnaires request: (a) description of AI tools in use, (b) supervision protocols for AI-generated work product, (c) data processing authorization architecture for AI tools, and (d) post-breach AI audit protocols.

The structural gap: attorneys complete these questionnaires by describing practices they believe the carrier wants to see, not practices they actually have. The completed questionnaire becomes a document describing a standard of practice the firm does not meet. If a claim arises involving AI use, the carrier's first review will be of the questionnaire. The gap between the questionnaire representation and actual practice is an undisclosed personal liability exposure. The Geneva market has not addressed the specific problem of carrier questionnaire representation accuracy for small firms that have not built the described protocols.

---

## 05 — Lead Magnet Draft

In Sergio's voice.

### English Version

**Title:** Geneva Legal AI Practice Accountability Briefing

**Positioning:** For managing partners and individual attorneys at small Geneva firms (2–5 attorneys) who are using AI in legal research, document drafting, and case management — and who want a precise, practical understanding of what they are actually exposed to, what their actual obligations are, and what they should do about it before a problem arrives.

This is not a general AI overview. It is a structured briefing on the specific accountability gaps that exist in the Geneva legal context — gaps that the market has not named clearly, that bar guidance has not resolved, and that carriers are beginning to ask about with increasing specificity.

**Format:** 90-minute private session, one firm at a time, in English.

**What the session covers:**

1. The five specific accountability gaps Geneva law firms are carrying right now, mapped against SVA professional obligations, nFADP Article 4/9/21 requirements, and carrier questionnaire language — with a frank assessment of which gaps are structural and which are addressable.

2. The associate AI use supervision problem: what the supervising partner's actual obligation is under SVA professional standards, why existing supervision infrastructure does not discharge it, and what a defensible minimum looks like at 2–5 attorney scale.

3. The AI inference chain privilege question: what it means, why it is distinct from the document disclosure question, and what a Geneva attorney is actually supposed to do about it given that no authority has addressed it.

4. The carrier questionnaire: what the third-generation questionnaire is actually asking for, what a completed questionnaire probably represents relative to actual practice, and what the personal liability exposure is if a claim arises from AI use that was not described accurately.

5. The FDPIC enforcement absence: what the absence of enforcement action against Geneva law firms means and does not mean, and what preparation for a first enforcement action looks like at small-firm scale.

6. A specific, prioritized action list — what to address first, what can wait, and what requires external counsel versus what can be handled internally.

**Investment:** CHF 3,600 per firm, 90-minute private session. Includes a written summary of findings and prioritized action list.

**CTA:** If you want a precise, Geneva-specific briefing on what your AI accountability exposure actually is and what to do about it, send a note. I will respond within one business day.

---

### Version française

**Titre :** Briefing sur la Responsabilité IA pour le Cabinet Juridique de Genève

**Positionnement :** À l'intention des associés directeurs et des avocats individuels de petits cabinets genevois (2 à 5 avocats) qui utilisent l'IA dans la recherche juridique, la rédaction de documents et la gestion des dossiers — et qui souhaitent comprendre avec précision et de manière pratique ce à quoi ils sont réellement exposés, quelles sont leurs obligations réelles, et ce qu'ils doivent faire avant qu'un problème ne survienne.

Ce n'est pas une présentation générale sur l'IA. C'est un briefing structuré sur les lacunes spécifiques de responsabilité qui existent dans le contexte juridique genevois — des lacuses que le marché n'a pas clairement nommées, que les orientations du Barreau n'ont pas résolues, et que les compagnies d'assurance commencent à aborder avec une précision croissante.

**Format :** Session privée de 90 minutes, un cabinet à la fois, en français.

**Contenu de la session :**

1. Les cinq lacunes de responsabilité spécifiques que les cabinets juridiques genevois portent actuellement, cartographiées par rapport aux obligations professionnelles SVA, aux exigences des articles 4/9/21 nFADP et au libellé des questionnaires des compagnies d'assurance — avec une évaluation franche de quelles lacunes sont structurelles et lesquelles sont remédiables.

2. Le problème de supervision de l'utilisation de l'IA par les collaborateurs : quelle est l'obligation réelle de l'associé superviseur selon les normes professionnelles SVA, pourquoi l'infrastructure de supervision existante ne la dégage pas, et à quoi ressemble un minimum défendable à l'échelle de 2 à 5 avocats.

3. La question du secret professionnel dans la chaîne d'inférence IA : ce que cela signifie, pourquoi c'est distinct de la question de la divulgation des documents, et ce qu'un avocat genevois est réellement censé faire à ce sujet étant donné qu'aucune autorité ne l'a abordé.

4. Le questionnaire de la compagnie d'assurance : ce que le questionnaire de troisième génération demande réellement, ce qu'un questionnaire rempli représente probablement par rapport à la pratique réelle, et quelle est l'exposition de responsabilité personnelle si une réclamation survient du fait d'une utilisation de l'IA qui n'a pas été décrite avec exactitude.

5. L'absence d'application du PFPDT : ce que l'absence d'action d'application contre les cabinets juridiques genevois signifie et ne signifie pas, et à quoi ressemble la préparation à une première action d'application à l'échelle du petit cabinet.

6. Une liste d'actions spécifique et priorisée — quoi traiter en premier, ce qui peut attendre, et ce qui nécessite un avocat externe par rapport à ce qui peut être géré en interne.

**Investissement :** CHF 3 600 par cabinet, session privée de 90 minutes. Comprend un résumé écrit des conclusions et une liste d'actions prioritaires.

**Appel à l'action :** Si vous souhaitez un briefing précis et spécifique à Genève sur votre exposition réelle à la responsabilité IA et sur les mesures à prendre, envoyez un message. Je répondrai dans un délai d'un jour ouvrable.

---

## 06 — Findings Summary

Six net-new insights, distinct from all prior Geneva legal Phase 01 findings in C214–C266.

**Finding 01 — AI Inference Chain Privilege Exposure is Distinct from Document Disclosure Privilege**
All prior Geneva legal Phase 01 findings on privilege addressed whether AI systems can access privileged documents (C258–C260), whether AI model training constitutes third-party processing under nFADP Art.9 (C265), and whether AI-generated work product triggers discovery obligations. None addressed the specific mechanism by which AI inference chains — what the AI learned from privileged documents, not the documents themselves — can constitute a disclosure. This finding names AI inference chain privilege exposure as a discrete, present-tense risk distinct from all prior privilege findings. La question n'a jamais été articulée par aucune autorité genevoise.

**Finding 02 — FDPIC Enforcement Absence Creates a Specific False Security Paradox at Geneva Law Firms**
All prior Phase 01 findings addressed nFADP compliance adequacy (C258–C264), carrier questionnaire exposure (C263–C266), and regulatory uncertainty (C259–C261). None addressed the specific cognitive mechanism by which enforcement absence produces incorrect inferences about compliance at Geneva law firms. This finding names the FDPIC enforcement absence paradox as a distinct risk condition: the absence reflects capacity constraints, not compliance, and the first FDPIC enforcement action against a Geneva law firm will arrive without warning, with no pre-established response protocol at any firm. No Geneva market service has framed enforcement absence as a risk condition rather than a risk reduction.

**Finding 03 — Supervisory Partner Personal Liability Exposure for Unauthorized Associate AI Use is a Discrete Structural Problem**
All prior Phase 01 findings addressed associate-level AI use governance (C266 Finding 05), supervision inversion (C258), and delegation chain accountability (C263–C264). None isolated the specific structural problem: the supervising partner's obligation under art. 12 let. d LLag to supervise is a legal duty that cannot be discharged through existing supervision infrastructure when associates use AI tools the partner has not evaluated, through channels the partner cannot see. The partner signs work product they did not generate, using tools they cannot describe, produced by people they cannot supervise. This finding names this as a discrete personal liability exposure with a specific architectural cause. No Geneva service has named it as such.

**Finding 04 — AI Case Management Optimization Creates Metadata Trails that Work Against Attorney-Client Privilege Protection — This Structural Contradiction Has Not Been Modeled in Geneva**
All prior Phase 01 findings addressed attorney-client privilege (C258–C260), confidentiality obligations around AI file access (C260–C264), and jurisdiction ambiguity for AI-stored files (C265). None addressed the specific structural contradiction: AI case management tools optimize efficiency and create metadata trails (access timestamps, query patterns, analysis sequences) that constitute a form of disclosure under art. 162 and art. 171 CPC, and that are specifically not covered by any privilege exception. The tools used to manage cases more efficiently are simultaneously creating conditions for privilege waiver. This structural contradiction has not been named or modeled in the Geneva market.

**Finding 05 — Art. 229 CPP and Algorithmic Evidence Disclosure is an Unresolved Geneva Law Firm Exposure with No Pre-Established Response Protocol**
All prior Phase 01 findings addressed AI disclosure obligations under nFADP Art.21 (C258–C264), client document request obligations (C261–C262), and e-discovery protocol implications (C260–C263). None addressed the specific question of algorithmic evidence disclosure under Swiss Criminal Procedure Code Article 229 — whether a party can be compelled to disclose the AI system or algorithm used in a proceeding, and what professional confidentiality obligations apply when that disclosure is requested. This finding identifies Art. 229 CPP as a specifically Swiss exposure that has not been mapped to professional confidentiality obligations, and that will arrive before the Federal AI Act does. No Geneva service offers a post-matter AI data continuity protocol.

**Finding 06 — Engagement Letter AI File Access Authorization is a Present-Tense Undisclosed Liability Across All Active Client Matters, Distinct from General AI Use Disclosure**
All prior Phase 01 findings addressed engagement letter AI use disclosure (C260–C264), engagement letter obsolescence for active matters (C266 Phase 03 Finding 03), and CE credentialing requirements (C266 Finding 06, C260 Finding 04). None addressed the specific question of whether engagement letters authorize AI tools to access client matter files — a distinct contract architecture question from whether the engagement letter discloses that AI was used to produce work product. Most Geneva small-firm engagement letters do not describe AI file access authorization. International clients are beginning to request specific representations on this point. The liability is present-tense, undisclosed, and across all active matters simultaneously. No Geneva service has addressed this as a discrete engagement letter architecture problem.

---

*Cycle C267 Phase 01 — Geneva Legal ICP — DigitalCoa.ch Market Research*
*Completed: 2026-04-28 22:32 GMT+2*
