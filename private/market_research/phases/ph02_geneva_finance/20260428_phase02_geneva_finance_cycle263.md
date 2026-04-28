# Phase 02 — Geneva Finance
## C263 | 2026-04-28 | Boutique Wealth Management: The Documentation Chain Architecture Nobody Built for AI-Generated Client Report Integrity

---

## 00 — Cycle Metadata

**ICP:** Managing director or senior advisor at boutique Geneva wealth management firm (50–200 employees), deploying AI for client reporting, portfolio analysis, and compliance documentation.
**Core Concerns:** Accountability for AI-generated recommendations. FINMA regulatory compliance. Client data confidentiality. Documentation standards at boutique scale.
**Phase:** 02/06
**Cycle:** 263
**Date:** 2026-04-28
**Language:** EN + FR throughout

---

## 01 — ICP Language

### English

How this ICP actually describes AI problems in conversation:

*"We send clients a quarterly report that's substantially assembled by AI. The AI pulls data, formats it, generates the narrative sections. Our advisor reviews it and sends it out. The question is what exactly the advisor is certifying when they send it. The report says 'prepared by [firm name].' Does that mean anything different now that 'prepared by' involves AI assembly? We've had clients ask us directly whether the report is AI-generated. We didn't have a policy for how to answer that question before they asked it."*

*"When a client's allocation changed and we had to explain why — in writing — we realized the AI's reasoning and our advisor's reasoning were not the same thing. The AI generated an analysis. The advisor approved it. But when we tried to reconstruct what the advisor actually evaluated versus what the AI produced independently, we couldn't produce a clean record. The two things had merged in the workflow."*

*"One of our clients has their own AI now. They've started sending us questions about our AI that we can't answer. Not because we're hiding anything — because we genuinely don't know what version of the model generated the report they're asking about. We can't reconstruct the exact version state at the time of that specific client's report. The client's AI is better at understanding our AI than we are."*

*"Our compliance team flags AI review items in committee. But they don't actually review the AI — they review whether the AI policy exists. Having the policy in place is treated as evidence of governance. Whether the policy is doing what it's supposed to do is a different question. Nobody is asking that second question systematically."*

*"We had an AI produce an error in a client report. Not a factual error in data — an interpretive error. The AI suggested a reallocation that was inconsistent with the client's actual risk profile. It was wrong. The advisor caught it before sending. The question nobody can answer is how many interpretive errors we haven't caught. We don't have a methodology for detecting AI interpretive errors that slip through advisor review."*

*"Our board wants to know what our AI is doing. We want to give them an answer they can actually use. The problem is that 'here's what our AI is doing' turns into a technical presentation that the board can't evaluate. The board approves things they don't understand. That's not a governance structure. That's a documentation exercise."*

---

### Français

Comment ce PIC décrit-il réellement les problèmes liés à l'IA en conversation :

*« Nous envoyons aux clients un rapport trimestriel largement assemblé par l'IA. L'IA extrait les données, les met en forme, génère les sections narratives. Notre conseiller le relit et l'envoie. La question est : qu'est-ce que le conseiller certifye exactement lorsqu'il l'envoie ? Le rapport indique 'préparé par [nom du cabinet].' Est-ce que cela signifie quelque chose de différent maintenant que 'préparé par' implique un assemblage par IA ? Des clients nous ont demandé directement si le rapport était généré par IA. Nous n'avions pas de politique pour répondre à cette question avant qu'ils ne la posent. »*

*« Quand l'allocation d'un client a changé et que nous avons dû expliquer pourquoi — par écrit — nous avons réalisé que le raisonnement de l'IA et celui de notre conseiller n'étaient pas la même chose. L'IA a généré une analyse. Le conseiller l'a approuvée. Mais lorsque nous avons essayé de reconstituer ce que le conseiller a réellement évalué par rapport à ce que l'IA a produit indépendamment, nous n'avons pas pu produire un enregistrement propre. Les deux choses avaient fusionné dans le flux de travail. »*

*« L'un de nos clients a sa propre IA maintenant. Ils ont commencé à nous poser des questions sur notre IA auxquelles nous ne pouvons pas répondre. Non pas parce que nous cachons quelque chose — parce que nous ne savons genuinely pas quelle version du modèle a généré le rapport qu'ils posent. Nous ne pouvons pas reconstituer l'état exact de la version au moment du rapport de ce client spécifique. L'IA du client est meilleur pour comprendre notre IA que nous ne le sommes. »*

*« Notre équipe de conformité signale les points liés à l'IA en comité. Mais ils ne révisent pas réellement l'IA — ils révisent si la politique d'IA existe. Avoir la politique en place est traité comme une preuve de gouvernance. Si la politique fait ce qu'elle est censée faire, c'est une autre question. Personne ne pose systématiquement cette deuxième question. »*

*« Nous avons eu une erreur d'IA dans un rapport client. Pas une erreur factuelle dans les données — une erreur d'interprétation. L'IA a suggéré un rééquilibrage incohérent avec le profil de risque réel du client. C'était faux. Le conseiller l'a repérée avant l'envoi. La question à laquelle personne ne peut répondre est combien d'erreurs d'interprétation de l'IA nous n'avons pas repérées. Nous n'avons pas de méthodologie pour détecter les erreurs d'interprétation de l'IA qui échappent à la relecture du conseiller. »*

*« Notre conseil d'administration veut savoir ce que notre IA fait. Nous voulons leur donner une réponse qu'ils peuvent réellement utiliser. Le problème est que 'voici ce que notre IA fait' se transforme en présentation technique que le conseil ne peut pas évaluer. Le conseil approuve des choses qu'il ne comprend pas. Ce n'est pas une structure de gouvernance. C'est un exercice de documentation. »*

---

## 02 — Market Signals

### Current Problems and Failure Modes

**Client report AI assembly review adequacy gap: advisors reviewing AI-assembled client reports cannot reliably distinguish AI interpretive errors from acceptable analytical variation, with no methodology for calibrating what advisor review should catch.**

Geneva wealth management firms using AI to assemble client reports — data extraction, narrative generation, performance attribution — face a structural review adequacy problem: the advisor reviewing the AI-assembled report cannot reliably determine whether the AI's interpretive framing of the data represents an acceptable analytical variation within professional judgment or an actual interpretive error that should be corrected before transmission. The advisor reviews at the output level — the finished report — without a methodology for knowing what the AI contributed independently versus what the advisor's review would have produced if starting from the data directly. When the advisor approves the report, the approval record documents that a review occurred; it does not document that the review was substantively adequate as a check against AI interpretive error. No Geneva protocol exists for calibrating what advisor review must detect in an AI-assembled report, or for documenting the review adequacy of the human-in-the-loop in this specific workflow context.

**AI-advisor reasoning merge in approval workflow creating reconstruction-resistant record of what the human actually evaluated versus what the AI produced.**

Geneva wealth management firms are discovering that the AI-advisor workflow — AI generates analysis, advisor reviews and approves — is producing records that cannot cleanly disaggregate what the advisor actually evaluated from what the AI independently produced. The advisor's approval merges with the AI's output in the workflow record. When a question arises about what the advisor specifically assessed — the quality of the advisor's judgment at the moment of approval — the record does not support reconstruction. This is distinct from the version-state documentation problem (which addresses which model version generated an output) and from the override record asymmetry problem (which addresses documentation of decisions made against AI recommendations). The specific problem — reconstruction-resistant approval records that merge AI generation with human evaluation — has not been named as a discrete documentation architecture failure mode in the Geneva market.

**Client-side AI capability outpacing firm AI transparency creating reverse information asymmetry where clients can interrogate firm AI better than the firm can.**

Geneva wealth management firms are encountering a structural reversal: clients who have their own AI tools are beginning to ask pointed questions about the firm's AI that the firm cannot answer — specifically around model version state at the time of specific client reports, data processing logic, and derivation paths. The firm's own AI documentation is less complete than what a sophisticated client AI can reconstruct from the outputs the firm has provided. This reverse information asymmetry — where the client can understand the firm's AI better than the firm can explain it — creates a new category of credibility exposure that no Geneva communication protocol has been designed to address. When clients receive AI-generated outputs from their own tools that challenge or are inconsistent with the firm's AI-generated reports, the firm has no response framework for this specific scenario.

**AI policy existence treated as governance adequacy evidence, with no systematic inquiry into whether policy is producing its intended governance effect.**

Geneva wealth management firm compliance teams are reviewing AI-related items in committee by checking whether AI policy exists, not by evaluating whether the AI policy is producing its intended effect. The existence of a documented AI governance policy is being used as evidence of governance adequacy, effectively substituting policy existence for governance performance. This creates a documentation-architecture paradox: firms with well-documented AI policies may be producing better governance evidence than governance outcomes, while firms with effective governance practices that have not been fully documented may appear less adequate in review. No Geneva compliance committee review protocol distinguishes between policy existence and policy performance as separate governance evaluation dimensions.

**AI interpretive error survival rate through advisor review unknown, creating unreviewed quality variance in client-facing communications that compounds over time.**

Geneva wealth management firms are sending AI-assembled client reports with interpretive content — allocation reasoning, performance attribution framing, outlook language — that advisors review at output level without calibrated error detection methodology. The rate at which AI interpretive errors survive advisor review is unknown to the firm because no measurement methodology exists for this specific failure mode. Each quarter's reports that pass advisor review without detection may be introducing interpretive errors into client relationships that compound in the client's mental model of their portfolio. The errors are not detected because the review methodology is not calibrated to catch them. No Geneva quality assurance architecture addresses the specific question of AI interpretive error survival rate through human review in client report assembly workflows.

**Board-level AI governance review structurally dependent on whatever format the technical team produces, with no board-usable AI governance review standard.**

Geneva wealth management firm boards are requesting and approving AI governance documentation without a review standard calibrated to board-level comprehension. The information the board receives is whatever format the technical team produces, which tends to be either too technical for board evaluation or insufficiently detailed to serve as governance evidence. No Geneva market participant has produced a board-level AI governance review format — a documentation standard that defines what a board should be able to evaluate, what questions it should be able to ask, and what answers it should receive — that would allow board members to provide genuine governance oversight of AI systems rather than approving technical documentation they cannot substantively evaluate. The board approval record is formally complete; the substantive governance review is structurally absent.

---

### Paradoxes and Structural Failures

- **Client report certification paradox:** The advisor certifies the client report as a firm communication. The report was assembled by AI. The advisor reviewed it without a methodology for knowing what the AI contributed versus what the advisor's independent review would have produced. The certification record documents that the report was sent; it does not document what the advisor substantively evaluated before certifying it.

- **AI-advisor reasoning merge paradox:** The approval record shows that the advisor reviewed and approved the AI-generated analysis. The record does not allow reconstruction of what the advisor actually assessed versus what the AI independently contributed to the approved output. The record is formally complete; it is substantively opaque as a reconstruction artifact.

- **Reverse information asymmetry paradox:** The client with AI tools can interrogate the firm's AI outputs more precisely than the firm can explain them. The firm's own AI documentation is less complete than what the client's AI can reconstruct from the firm's outputs. The information advantage has inverted: clients are now sometimes better equipped to evaluate the firm's AI than the firm itself.

- **Policy existence versus policy performance paradox:** Compliance committee review confirms that AI governance policy exists. Whether the policy is producing its intended governance effect is not reviewed. Firms with well-documented policies may have worse governance outcomes than firms with less documentation. The documentation system rewards documentation existence over governance performance.

- **AI interpretive error survival paradox:** AI generates interpretive content in client reports. Advisors review and approve the content. The review catches some errors. The rate of survival of errors that are not caught is unknown and unmeasured. Each quarter, unreviewed interpretive errors may be compounding in client mental models without the firm's awareness. No measurement methodology exists for this specific failure mode.

- **Board review format paradox:** Boards approve AI governance documentation. The format they receive is whatever the technical team produces. The technical team produces documentation that is either too technical for board evaluation or insufficiently detailed for governance oversight. No board-usable review standard exists. The board approval record is formally complete; the substantive governance review it implies is structurally absent.

---

## 03 — Competitive Analysis

### What No One Is Addressing

**1. Client report AI assembly review methodology as a discrete calibration instrument for advisor review adequacy in AI-assisted client communications.**

No Geneva market participant has produced a methodology for calibrating what human advisor review must detect in AI-assembled client reports — a review adequacy standard that would allow firms to document what advisor review is expected to catch, how review quality should be measured, and what constitutes adequate versus inadequate review of AI-generated interpretive content in client communications. This is distinct from the override record asymmetry problem (which addresses documentation of human decisions made against AI recommendations, not review adequacy for AI-assisted client reports) and from the compliance committee AI review protocol problem (C262 Phase 02), which addressed committee-level AI approval rather than ongoing advisor review of AI-assisted client outputs. The specific product — an AI-assisted client report review calibration methodology for Geneva boutique wealth management firms — has not been built. Advisors are reviewing AI-generated reports without a defined standard for what their review should detect or how review adequacy should be documented.

**2. AI-advisor reasoning disaggregation architecture for approval records as a discrete documentation engineering problem.**

No Geneva market participant has produced an architecture for approval records that disaggregates AI generation from human evaluation — a documentation engineering approach that would preserve, for any AI-assisted client communication or recommendation, a reconstruction-capable record of what the AI independently contributed and what the human specifically evaluated and assessed. This is distinct from the version-state documentation problem (which addresses which model version generated an output) and from the attribution chain disaggregation problem (C262 Phase 02), which addressed the question of what the AI contributed versus what the human contributed to a recommendation rather than the specific problem of approval record reconstruction for ongoing client communications. The specific product — an AI-advisor reasoning disaggregation architecture for approval records in boutique-scale wealth management contexts — has not been built. The merge between AI generation and human evaluation in approval workflows is structural and unrecoverable without deliberate documentation engineering at the workflow design stage.

**3. Client-facing AI transparency response protocol as a discrete client communication and credibility management product for the reverse information asymmetry scenario.**

No Geneva market participant has produced a client communication protocol for the scenario where sophisticated clients — those with their own AI tools — begin interrogating the firm's AI outputs and asking version-specific and methodology-specific questions that the firm's documentation cannot answer. This is distinct from the nFADP Article 21 client derivation request problem (C262 Phase 02 and earlier cycles), which addresses the formal legal obligation to explain AI-derived recommendations, and from the AI confidence language disclosure problem (C262 Phase 02), which addresses the communication of uncertainty signals in recommendations. The specific product — a client-facing AI transparency response protocol for Geneva boutique wealth management firms encountering clients with superior AI interrogatory capability — has not been built. The reverse information asymmetry is a new structural condition that existing client communication frameworks were not designed to address.

**4. AI governance policy performance measurement as a discrete monitoring instrument separate from policy existence documentation.**

No Geneva market participant has produced a methodology for measuring whether AI governance policy is producing its intended governance effect — a monitoring instrument that would allow compliance committees to distinguish between policy existence and policy performance as separate evaluation dimensions, and to document substantive governance review rather than mere policy existence review. This is distinct from the compliance committee AI review protocol problem (C262 Phase 02), which addressed the committee's initial approval review process rather than the ongoing monitoring of whether approved policy is actually operating as intended. The specific product — an AI governance policy performance measurement methodology for Geneva boutique wealth management firm compliance committees — has not been built. The substitution of policy existence for policy performance in compliance review is structural and self-reinforcing: the more review focuses on existence, the less capacity exists for performance evaluation.

**5. AI interpretive error detection and measurement methodology as a discrete quality assurance product for AI-assisted client communications.**

No Geneva market participant has produced a methodology for measuring the survival rate of AI interpretive errors through human advisor review in client report assembly workflows — a quality assurance instrument that would allow firms to estimate what proportion of AI interpretive errors are detected versus survive advisor review, and to document the error detection performance of human review in this specific context. This is distinct from the AI confidence language non-integration problem (C262 Phase 02), which addressed the use of uncertainty signals as professional judgment inputs, and from the version-state documentation problem (C259 Phase 02), which addressed model version tracking rather than interpretive error detection. The specific product — an AI interpretive error detection and measurement methodology for Geneva boutique wealth management firm quality assurance — has not been built. Firms are transmitting AI-generated interpretive content in client reports without any mechanism for knowing how often that content is incorrect and undetected.

**6. Board-level AI governance review format standard as a discrete governance product separating comprehension-dependent approval from evidence-dependent approval.**

No Geneva market participant has produced a board-level AI governance review format standard — a documentation and review framework calibrated to board-level comprehension — that would define what questions boards should be able to ask, what answers they should receive, and what evidence of substantive governance review they should be able to document. This is distinct from the compliance committee AI review protocol problem (C262 Phase 02), which addressed the compliance committee's review of AI system approval rather than the board's governance oversight of AI governance documentation, and from the board-level AI governance literacy problem (C255 Phase 02), which identified board AI literacy as a bottleneck without producing a specific review format standard. The specific product — a board-level AI governance review format standard for Geneva boutique wealth management firms — has not been built. Board approvals of AI governance documentation are structurally dependent on whatever format the technical team produces, with no standard defining what board-level governance review should look like.

---

## 04 — Compliance Context

### Geneva / Swiss Regulatory Obligations

**FINMA**

FINMA Circular 2016/1 suitability obligations require that client reports and portfolio recommendations reflect appropriate analysis for the specific client. When AI assembles client reports — generating interpretive framing, performance attribution narrative, and outlook language — the suitability of the AI-generated interpretive content at the time of transmission is the firm's responsibility. FINMA has not published guidance on what human review adequacy is required for AI-assembled client reports, leaving firms without a compliance reference standard for the specific review task that advisors are performing when they approve AI-generated client communications.

FINMA best execution obligations require that firms document execution reasoning through the execution chain. AI-generated interpretive content in client reports — framing language, attribution statements, outlook projections — may contain execution reasoning that the firm is transmitting to clients without a documented methodology for what human review of AI-generated interpretive content is expected to detect. No published FINMA guidance addresses this specific documentation requirement for AI-assisted client communications.

FINMA examination practice has begun distinguishing between AI governance documentation existence and AI governance documentation performance. The question — "how do you know your AI governance policy is producing what it says it should produce" — is appearing in examination conversations alongside the documentation adequacy questions that preceded it. No Geneva standard defines what policy performance measurement for AI governance requires at boutique scale.

**ASIP (Swiss Pension Fund Association)**

ASIP member BVG pension funds with AI-assisted portfolio management face compounded documentation obligations when the AI generates interpretive content in client communications — framing language, attribution narrative, and outlook language that BVG trustee boards are beginning to request documentation for. ASIP has not published guidance on what AI interpretive content documentation BVG trustees can require from asset managers, creating a documentation gap between trustee governance obligations and the firm's AI-generated client communication records.

**SFAMA (Swiss Fund and Asset Management Association)**

SFAMA peer circuit standard formation has begun addressing the question of what human review is required for AI-generated client communications — a documentation adequacy question distinct from AI system approval. The informal SFAMA standard for human review of AI-assisted client outputs may be developing toward a requirement for documented review substance, not merely review occurrence. This emerging standard is not yet published but is circulating through the peer circuit. Geneva wealth management firms should anticipate that SFAMA peer circuit expectations for client report review may soon require documentation of what the human reviewer actually evaluated, not merely that review occurred.

**ISSB Sustainability Disclosure Standards**

ISSB-aligned sustainability disclosures assembled by AI for client reports require documentation of the AI assembly process for sustainability attribution data — what sources were accessed, what assumptions were applied, what human review occurred before transmission. When AI assembles both financial and sustainability content in the same client report, the ISSB evidentiary requirement for sustainability claims intersects with the AI interpretive error detection problem: if the AI generates interpretive framing for sustainability data that is inaccurate, the ISSB documentation obligation and the FINMA suitability obligation both apply to the same erroneous content without a methodology for detecting the error before transmission.

**nFADP (Swiss Data Protection Act)**

nFADP Article 21 right of clients to request explanation of how automated decision-making was produced about them applies to AI-generated content in client reports — interpretive framing, attribution language, and outlook projections that AI assembled. The firm's obligation to explain AI derivation applies to the interpretive content in client reports, not only to formal recommendation derivation. When AI generates framing language for client reports that the firm cannot disaggregate from human review, the nFADP Article 21 response capability for this specific content category is structurally compromised.

nFADP Article 6 lawful basis requirements for AI processing of client portfolio data apply when AI assembles client reports — the processing purpose documentation (generating client reports) must be demonstrably proportionate to the data processed, and data minimization principles must be documented in AI system configuration. No Geneva authority has published guidance on what Article 6 documentation specific to AI client report assembly requires at boutique scale.

---

## 05 — Lead Magnet Draft

### In Sergio's Voice — EN

---

**Client Report AI Assembly Briefing: The Review Chain Nobody Calibrated**

*Managing Director, DigitalCoa.ch*

---

Boutique Geneva wealth management firms are generating client reports that are substantially assembled by AI — and then sending those reports after a review that has no defined standard for what it is supposed to detect. The review occurs. The report goes out. The question of what the review actually accomplished in terms of catching AI interpretive errors is not asked, because no methodology exists for asking it.

This briefing addresses five specific documentation and review chain problems that no Geneva market participant has mapped as discrete structural failures requiring specific architectural responses.

**What we will address:**

1. **The AI-advisor reasoning merge problem in approval records.** When your advisor approves an AI-assembled client report, can you reconstruct what they specifically evaluated versus what the AI independently produced? Most Geneva boutiques cannot. We will address what an AI-advisor reasoning disaggregation architecture for approval records would require and how to implement it.

2. **The client report AI assembly review adequacy calibration.** What should your advisor's review of an AI-assembled client report be expected to detect? How do you document that review as substantively adequate? We will address what a client report AI assembly review calibration methodology would require and how to document review adequacy for this specific workflow.

3. **The reverse information asymmetry scenario.** Clients with their own AI are beginning to ask questions about your AI that you cannot answer — model version state, derivation paths, data processing logic. We will address what a client-facing AI transparency response protocol would require for this specific scenario.

4. **The AI governance policy performance measurement gap.** Your compliance committee reviews whether AI governance policy exists. It does not review whether the policy is producing its intended effect. We will address what an AI governance policy performance measurement methodology would require for boutique-scale compliance committees.

5. **The AI interpretive error survival rate measurement.** You don't know how often AI interpretive errors survive advisor review in client reports, because no measurement methodology exists for this specific failure mode. We will address what an AI interpretive error detection and measurement methodology would require and how to begin estimating your firm's error survival rate.

**Format:** 90-minute executive briefing, video or in-person. English and French. Questions welcome throughout.

**Investment:** CHF 2,800 per firm. Limited to two executives per session.

**Outcome:** A named review chain map identifying which of the five documentation and review chain problems your firm has architectural gaps in, with specific methodology recommendations for each identified gap.

---

*To schedule: sergio@digitalcoa.ch*

---

### In Sergio's Voice — FR

---

**Briefing sur l'Assemblage de Rapports Clients par l'IA : La Chaîne de Révision Que Personne N'a Calibrée**

*Directeur Général, DigitalCoa.ch*

---

Les cabinets de gestion de fortune genevois de taille boutique génèrent des rapports clients largement assemblés par l'IA — puis les envoient après une relecture qui n'a pas de norme définie pour ce qu'elle est censée détecter. La relecture a lieu. Le rapport part. La question de ce que la relecture a réellement accompli en termes de détection des erreurs d'interprétation de l'IA n'est pas posée, parce qu'aucune méthodologie n'existe pour la poser.

Ce briefing aborde cinq problèmes spécifiques de documentation et de chaîne de révision que aucun acteur du marché genevois n'a cartographiés comme des échecs structurels discrets nécessitant des réponses architecturales spécifiques.

**Ce que nous aborderons :**

1. **Le problème de la fusion des raisonnements IA-conseiller dans les enregistrements d'approbation.** Quand votre conseiller approuve un rapport client assemblé par l'IA, pouvez-vous reconstituer ce qu'il a spécifiquement évalué par rapport à ce que l'IA a produit indépendamment ? La plupart des cabinets genevois ne le peuvent pas. Nous aborderons ce qu'une architecture de désagrégation des raisonnements IA-conseiller pour les enregistrements d'approbation exigerait et comment la mettre en œuvre.

2. **Le calibrage de l'adéquation de la relecture pour l'assemblage de rapports clients par l'IA.** Qu'est-ce que la relecture de votre conseiller pour un rapport client assemblé par l'IA devrait être censée détecter ? Comment documentez-vous cette relecture comme substantiellement adéquate ? Nous aborderons ce qu'une méthodologie de calibrage de la relecture pour l'assemblage de rapports clients par l'IA exigerait et comment documenter l'adéquation de la relecture pour ce flux de travail spécifique.

3. **Le scénario d'asymétrie d'information inversée.** Les clients ayant leur propre IA commencent à poser des questions sur votre IA auxquelles vous ne pouvez pas répondre — état de version du modèle, chemins de dérivation, logique de traitement des données. Nous aborderons ce qu'un protocole de réponse de transparence IA face aux clients exigerait pour ce scénario spécifique.

4. **L'écart de mesure de la performance de la politique de gouvernance de l'IA.** Votre comité de conformité examine si la politique de gouvernance de l'IA existe. Il n'examine pas si la politique produit l'effet qu'elle est censée produire. Nous aborderons ce qu'une méthodologie de mesure de la performance de la politique de gouvernance de l'IA exigerait pour les comités de conformité de taille boutique.

5. **La mesure du taux de survie des erreurs d'interprétation de l'IA.** Vous ne savez pas à quelle fréquence les erreurs d'interprétation de l'IA survivent à la relecture du conseiller dans les rapports clients, parce qu'aucune méthodologie de mesure n'existe pour ce mode de défaillance spécifique. Nous aborderons ce qu'une méthodologie de détection et de mesure des erreurs d'interprétation de l'IA exigerait et comment commencer à estimer le taux de survie des erreurs de votre cabinet.

**Format :** Briefing exécutif de 90 minutes, vidéo ou en personne. Anglais et français. Questions bienvenues tout au long.

**Investissement :** CHF 2 800 par cabinet. Limité à deux dirigeants par session.

**Résultat :** Une carte de la chaîne de révision identifiant lesquels des cinq problèmes de documentation et de chaîne de révision votre cabinet a des écarts architecturaux, avec des recommandations méthodologiques spécifiques pour chaque écart identifié.

---

*Pour planifier : sergio@digitalcoa.ch*

---

## 06 — Findings Summary

### Six Net-New Insights — Distinct from C214–C262 Phase 02

**Finding 01: The Client Report AI Assembly Review Adequacy Calibration Problem Is a Discrete Structural Documentation Failure Nobody Has Named — Advisors Review AI-Assembled Client Reports Without a Defined Standard for What Their Review Should Detect or How Review Adequacy Should Be Documented**

Geneva wealth management firms using AI to assemble client reports — generating interpretive framing, performance attribution narrative, and outlook language — are performing human advisor review on outputs that have no defined review adequacy standard. The advisor reviewing the AI-generated report cannot reliably determine whether the AI's interpretive framing represents an acceptable analytical variation within professional judgment or an actual interpretive error that should be corrected before transmission. The review occurs; the question of what it is supposed to catch is not defined; the review adequacy is not documented. This is distinct from the compliance committee AI review protocol problem (C262 Phase 02), which addressed committee-level AI system approval rather than ongoing advisor review of AI-assisted client communications, and from the override record asymmetry problem (C251 Phase 02), which addressed documentation of human decisions made against AI recommendations rather than the quality of human review of AI-generated content in client reports. The specific product — a client report AI assembly review calibration methodology for Geneva boutique wealth management firms — has not been built. The review gap is structural: without a defined standard, review adequacy cannot be documented, and without documentation, review adequacy cannot be measured or improved.

**Finding 02: AI-Advisor Reasoning Merge in Approval Workflows Creates Reconstruction-Resistant Records That Cannot Disaggregate What the Human Actually Evaluated From What the AI Independently Produced — a Documentation Architecture Failure Mode Distinct From All Prior Documentation Gap Namings**

Geneva wealth management firm approval records for AI-assisted client communications are merging AI generation with human evaluation in a way that makes post-hoc reconstruction of what the advisor specifically assessed impossible. The approval record shows that the advisor reviewed and approved the AI-generated output. The record does not support reconstruction of whether the advisor caught an AI interpretive error, whether the advisor independently agreed with the AI's framing, or whether the advisor reviewed at output level without substantive engagement with the analytical content. This is distinct from the version-state documentation problem (which addresses which model version generated an output) and from the attribution chain disaggregation problem (C262 Phase 02), which addressed what the AI contributed versus what the human contributed to a recommendation rather than the specific documentation architecture question of approval record reconstruction for ongoing client communications. The specific product — an AI-advisor reasoning disaggregation architecture for approval records in boutique-scale wealth management contexts — has not been built. The merge is structural and unrecoverable without deliberate documentation engineering at workflow design stage; it cannot be resolved by improving documentation after the fact.

**Finding 03: Client-Side AI Capability Outpacing Firm AI Documentation Is Creating a Reverse Information Asymmetry Where Sophisticated Clients Can Interrogate the Firm's AI Outputs More Precisely Than the Firm Can Explain Them — a New Structural Credibility Exposure Category Without a Geneva Market Response**

Geneva wealth management firms are encountering a structural information reversal: clients who have their own AI tools are beginning to ask version-specific and methodology-specific questions about the firm's AI — model version state at the time of specific client reports, data processing logic, derivation paths — that the firm's documentation cannot answer. The firm's own AI documentation is less complete than what a sophisticated client AI can reconstruct from the outputs the firm has provided. This creates a credibility exposure category that no Geneva communication framework has been designed to address: when clients can demonstrate inconsistencies between the firm's AI-generated reports and what their own AI tools determine from the same data, the firm's credibility is exposed not through bad faith but through documentation incompleteness. This is distinct from the nFADP Article 21 formal derivation request problem (C262 Phase 02), which addresses the legal obligation to explain AI-derived recommendations, and from the AI confidence language non-integration problem (C262 Phase 02), which addresses uncertainty signal communication. The specific product — a client-facing AI transparency response protocol for Geneva boutique firms encountering clients with superior AI interrogatory capability — has not been built. The reverse asymmetry is a new structural condition that existing client communication frameworks were not designed to manage.

**Finding 04: AI Governance Policy Existence Substituting for AI Governance Policy Performance in Compliance Committee Review Is a Structural Paradox That Self-Reinforces Without Any Market-Participant-Named Correction Mechanism**

Geneva wealth management firm compliance committees are reviewing AI governance by checking whether policy exists rather than whether policy is performing its intended governance function. The documentation system records policy existence review — the committee confirmed that AI governance policy is documented. The documentation system does not record policy performance review — whether the documented policy is actually producing the governance outcomes it describes. This creates a structural paradox: firms with well-documented AI policies may be producing better governance documentation than governance outcomes, while firms with effective governance practices that have not been fully documented may appear less adequate in review. The paradox is self-reinforcing: the more review focuses on existence, the less capacity develops for performance evaluation, and the less pressure exists to build the monitoring instruments that performance evaluation would require. This is distinct from the compliance committee AI review protocol problem (C262 Phase 02), which addressed the committee's initial approval of AI systems rather than the ongoing monitoring of whether approved policy is operating as intended, and from the board-level AI governance literacy problem (C255 Phase 02), which identified the literacy bottleneck without addressing the specific substitution paradox. The specific product — an AI governance policy performance measurement methodology for boutique-scale compliance committees — has not been built. No Geneva market participant has named the substitution paradox as a distinct structural phenomenon requiring a specific correction mechanism.

**Finding 05: AI Interpretive Error Survival Rate Through Human Advisor Review in Client Report Assembly Workflows Is Unmeasured and Unmeasured Because No Measurement Methodology Exists — Creating Compounding Undetected Error Exposure in Client Relationships**

Geneva wealth management firms transmitting AI-generated interpretive content — allocation reasoning, performance attribution framing, outlook language — in client reports have no methodology for measuring the rate at which AI interpretive errors survive human advisor review. Each quarter's reports that pass advisor review without detection may be introducing interpretive errors into client mental models of their portfolios — errors that compound over time as clients form investment beliefs based on AI-generated framing that was incorrect when generated. The errors are not detected because the review methodology is not calibrated to catch them; the failure mode is invisible because no measurement instrument exists for it. This is distinct from the AI confidence language non-integration problem (C262 Phase 02), which addressed the use of uncertainty signals as professional judgment inputs rather than the specific question of interpretive error detection in client communications, and from the quality assurance gap in prior cycles, which addressed quality assurance for AI systems generally without isolating the specific failure mode of AI interpretive error survival through human review in client report workflows. The specific product — an AI interpretive error detection and measurement methodology for AI-assisted client communications — has not been built. The compounding of undetected interpretive errors in client relationships is a structural exposure that operates below firm detection threshold precisely because no measurement methodology exists to detect it.

**Finding 06: Board-Level AI Governance Review Is Structurally Dependent on Whatever Format the Technical Team Produces, With No Board-Usable Review Standard Defining What Substantive Board Governance Review of AI Should Look Like at Boutique Scale**

Geneva wealth management firm boards requesting AI governance documentation receive whatever format the technical team produces — documentation that tends toward either excessive technical detail that prevents board comprehension or insufficient governance-relevant content that fails to support substantive oversight. No Geneva market participant has produced a board-level AI governance review format standard — a documentation and review framework defining what questions boards should be able to ask, what answers they should receive, and what evidence of substantive governance review they should be able to document — that would allow board members to provide genuine governance oversight rather than approving technical documentation they cannot substantively evaluate. The board approval record is formally complete; the substantive governance review it implies is structurally absent. This is distinct from the compliance committee AI review protocol problem (C262 Phase 02), which addressed compliance committee initial approval rather than board-level ongoing governance oversight, and from the board-level AI governance literacy problem (C255 Phase 02), which identified the comprehension bottleneck as a training problem without addressing the specific structural dependency on technical team documentation format as the real failure mode. The specific product — a board-level AI governance review format standard for Geneva boutique wealth management firms — has not been built. The structural dependency persists because no alternative format standard exists that would allow boards to perform governance review without requiring technical AI expertise on the board itself.
