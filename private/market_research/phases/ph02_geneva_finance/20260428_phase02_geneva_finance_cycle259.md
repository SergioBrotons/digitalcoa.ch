# Phase 02 — Geneva Finance
## C259 | 2026-04-28 | Geneva Wealth Management AI Accountability

---

## 00 — Cycle Metadata

**ICP:** Managing director or senior advisor at boutique Geneva wealth management firm (50–200 employees), deploying AI for client reporting, portfolio analysis, and compliance documentation.
**Core Concerns:** Accountability for AI-generated recommendations. FINMA regulatory compliance. Client data confidentiality. Documentation standards at boutique scale.
**Phase:** 02/06
**Cycle:** 259
**Date:** 2026-04-28
**Language:** EN + FR throughout

---

## 01 — ICP Language

### English

How this ICP actually describes AI problems in conversation:

*"The client asked us to explain how their portfolio allocation was determined — specifically what role the AI played, what data it used, and who reviewed it. We had a general answer. We didn't have a specific one. That's a gap."*

*"We're mid-renewal with our PI insurer. They've added AI-specific questions to the questionnaire. One of them asks us to describe our AI review protocol. I signed a form saying we have one. The protocol doesn't exist in any written form."*

*"We had a family office client request access to their data processing records — specifically, which AI systems handled their information and for what purposes. This felt like a nFADP Article 13 or Article 20 request. We didn't have a clean answer about which systems had processed their data."*

*"The BVG pension assets and the private client assets run on the same AI platform. The ASIP obligations and the FINMA obligations aren't the same. I don't think we've reconciled them — I'm not sure it's possible to reconcile them."*

*"We had a question from a UHNWI client about whether we could decompose their portfolio performance attribution — what portion was AI-assisted versus human-directed. This is a reasonable question. We couldn't answer it."*

*"A peer at another Geneva firm mentioned their carrier asked about model version documentation at renewal. This hadn't been on our radar. Now it is."*

*"The problem isn't that we're hiding anything. The problem is that we can't be precise about what we're actually doing — and precision is increasingly what's being asked for."*

---

### Français

Comment ce PIC décrit-il réellement les problèmes liés à l'IA en conversation :

*« Le client nous a demandé d'expliquer comment l'allocation de son portefeuille avait été déterminée — spécifiquement quel rôle l'IA a joué, quelles données elle a utilisées, et qui l'a examinée. Nous avions une réponse générale. Nous n'avions pas de réponse spécifique. C'est un écart. »*

*« Nous sommes en cours de renouvellement avec notre assureur RC. Ils ont ajouté des questions spécifiques à l'IA au questionnaire. L'une d'elles nous demande de décrire notre protocole d'examen de l'IA. J'ai signé un formulaire disant que nous en avons un. Le protocole n'existe sous aucune forme écrite. »*

*« Un client family office a demandé l'accès à ses enregistrements de traitement des données — spécifiquement, quels systèmes d'IA ont traité ses informations et à quelles fins. Cela ressemblait à une demande au sens des articles 13 ou 20 de la nFADP. Nous n'avions pas de réponse claire sur quels systèmes avaient traité leurs données. »*

*« Les actifs du BVG et les actifs des clients privés fonctionnent sur la même plateforme d'IA. Les obligations ASIP et les obligations FINMA ne sont pas les mêmes. Je ne pense pas que nous les ayons réconciliées — je ne suis pas sûr qu'il soit possible de les réconcilier. »*

*« Un client UHNWI nous a posé une question sur la possibilité de décomposer l'attribution de performance de leur portefeuille — quelle partie était assistée par l'IA versus dirigée par l'homme. C'est une question raisonnable. Nous ne pouvions pas y répondre. »*

*« Un pair d'un autre cabinet genevois a mentionné que leur assureur avait posé des questions sur la documentation de version du modèle lors du renouvellement. Ce n'était pas sur notre radar. Maintenant ça l'est. »*

*« Le problème n'est pas que nous cachons quelque chose. Le problème est que nous ne pouvons pas être précis sur ce que nous faisons réellement — et la précision est de plus en plus ce qui est demandé. »*

---

## 02 — Market Signals

### Current Problems and Failure Modes

**Client transparency request vs. compliance constraint as discrete unnamed tension.**
Sophisticated UHNWI clients are increasingly requesting detailed explanations of AI role in portfolio management — not just "was AI used" but "what exactly did it contribute, how, and with what human review." When clients ask for this level of transparency, firms face a structural dilemma: detailed explanations of AI methodology may reveal proprietary system information that creates competitive exposure if disclosed broadly. The client requesting transparency is contractually entitled to understand their own portfolio management — but the explanation itself creates information that may travel beyond the client relationship. No Geneva market participant has named this as a discrete tension requiring its own documentation architecture.

**Post-rebalancing human review adequacy documentation as unnamed compliance surface.**
AI-triggered systematic rebalancing — where the AI initiates a rebalancing action and a human reviews and approves it — creates a discrete documentation obligation that has not been named in the Geneva market. The human review step occurs, but what constitutes adequate review of an AI-initiated rebalancing decision is undefined. The review record typically documents that review occurred, not that the review was substantively adequate. This is distinct from the override record asymmetry problem (named in C257) — it addresses the review step specifically, not the override step.

**Group structure AI infrastructure shared across multiple entities as structurally unnamed accountability boundary problem.**
Geneva wealth management firms operating as part of larger group structures often run AI infrastructure shared across multiple group entities — parent company, sister subsidiaries, regional offices. Client data for Geneva-based clients may be processed by AI systems operated by group entities elsewhere. The accountability boundary between Geneva entity obligations and group-level AI governance decisions is undefined and unnamed. The Geneva firm is accountable for outcomes under Swiss law, but the AI decisions affecting those outcomes may be made at group level with no Geneva-level governance participation.

**BVG pension and private client AI obligations creating regulatory framework collision for the same AI system.**
Wealth managers managing both BVG occupational pension assets and private client assets face a structural problem: the same AI system serving both asset categories creates documentation obligations under two different regulatory frameworks with non-identical requirements. ASIP BVG oversight and FINMA private client oversight impose different documentation standards, different review protocols, and different accountability mechanisms for the same AI-assisted recommendation. No Geneva service has addressed the specific problem of AI system dual-framework compliance for wealth managers serving both client categories simultaneously.

**UHNWI client-initiated model access request as nFADP Article 21 trigger distinct from regulatory activation.**
When a UHNWI client requests access to the AI model used for their portfolio, or requests explanation of how the model reached specific decisions, this may constitute a nFADP Article 21 automated decision explanation request — triggered directly by the client, not by a regulator. The firm's obligation to provide model-level explanation arises from client request, not regulatory demand. This creates a disclosure obligation the firm may not be prepared to meet: providing model access to clients raises competitive concerns, while providing inadequate explanation creates nFADP compliance exposure.

**AI-generated portfolio performance attribution decomposition as emerging client expectation.**
Sophisticated clients are beginning to ask whether portfolio performance can be decomposed — what portion of returns is attributable to AI-assisted decisions versus human judgment. This is distinct from general AI governance disclosure: it requires a methodology for decomposing outcomes into AI-contributed and human-contributed components. No Geneva boutique wealth management firm has such a methodology, and no Geneva service has produced one. The expectation exists in the client community without a supply-side response.

**SFAMA informal AI guidance circuit operating as distinct standard-formation pathway from FINMA examination practice.**
SFAMA member firms exchange AI governance intelligence through association channels — peer practice discussions, working group outputs, informal member briefings. This informal circuit forms operative AI governance standards for asset managers that are distinct from FINMA's examination-practice standard formation (named in C258). A Geneva wealth management firm can be aligned with FINMA's operative expectations and misaligned with the SFAMA peer circuit's informal standard — and may face commercial consequences from that misalignment that regulatory compliance doesn't address.

---

### Paradoxes and Structural Failures

- **Transparency paradox:** The more sophisticated the client, the more likely they are to request detailed AI transparency — and the more potentially damaging that transparency may be if it reveals system architecture beyond the client relationship.

- **Dual-framework collision:** Serving both BVG pension clients and private clients with the same AI system creates compliance documentation requirements that cannot simultaneously satisfy both ASIP and FINMA standards without reconciliation methodology that doesn't exist.

- **Carrier renewal attestation paradox:** Compliance officer signing AI governance attestation for PI renewal without underlying protocol — the signature creates personal liability without the documentation architecture that would make the signature defensible.

- **Attribution decomposition expectation gap:** Clients increasingly expecting portfolio performance decomposition by AI vs. human contribution — a reasonable expectation — while no Geneva boutique has methodology to provide it.

---

## 03 — Competitive Analysis

### What No One Is Addressing

**1. Client transparency vs. competitive exposure documentation architecture.**
No Geneva service has addressed the specific tension that arises when a client requests detailed AI methodology transparency — not because the firm is hiding something, but because detailed explanation of proprietary AI systems creates information that travels beyond the client relationship. The documentation architecture for managing this tension — what to disclose, in what form, with what protections — is unnamed in the Geneva market.

**2. Post-rebalancing review adequacy protocol.**
No Geneva service has produced a protocol for what constitutes substantively adequate human review of AI-triggered rebalancing decisions. The documentation standard for this specific human-in-the-loop moment is absent from market offerings, despite being a routine operational scenario at boutique wealth management firms.

**3. Group AI infrastructure accountability boundary mapping for Geneva entities.**
No Geneva service has addressed the accountability boundary between Geneva-based wealth management firms and group-level AI infrastructure decisions. The specific question — what the Geneva entity is and is not accountable for with respect to AI decisions made at group level — has not been mapped as a discrete documentation architecture problem.

**4. BVG/FINMA dual-framework AI compliance reconciliation for the same AI system.**
No market participant has produced a reconciliation methodology for Geneva wealth management firms serving both BVG pension clients and private clients with the same AI system. The problem is not that firms are unaware of the two frameworks — it is that the frameworks impose non-identical requirements on the same AI-assisted process with no established reconciliation methodology.

**5. AI portfolio performance attribution decomposition methodology for boutique scale.**
No Geneva service has developed a methodology that boutique wealth management firms can use to decompose portfolio performance attribution into AI-assisted and human-directed components. This is distinct from AI governance documentation: it requires a specific analytical methodology for outcome decomposition that doesn't exist at boutique scale.

**6. UHNWI client-initiated model access request response protocol.**
No Geneva service has produced guidance specifically for how a Geneva wealth management firm should respond when a UHNWI client directly requests model access or detailed AI explanation — the nFADP Article 21 trigger arising from client request rather than regulatory demand. This is distinct from regulatory examination preparation and requires its own specific protocol.

---

## 04 — Compliance Context

### Geneva / Swiss Regulatory Obligations

**FINMA**

FINMA applies existing conduct obligations to AI-assisted wealth management without AI-specific published standards. The primary operative standard-formation mechanism for Geneva wealth management firms is examination practice: what FINMA examiners ask, what documentation they request, and what responses they accept in individual examinations. This informal standard formation (named in C258 Phase 02) continues as the primary mechanism by which operative expectations are communicated to the market.

FINMA Circular 2016/1 (investment mandate suitability) requires documentation of investment recommendations and suitability assessments. AI-generated recommendations fall under this framework without AI-specific provisions. The documentation that satisfies 2016/1 for human-generated recommendations may not satisfy it for AI-generated recommendations where the AI's analytical contribution cannot be reconstructed from available records.

Asset managers under FINMA oversight using AI for portfolio management must apply SFAMA guidelines where applicable. The intersection of FINMA conduct oversight and SFAMA peer circuit standard formation creates two simultaneous operative standards — one from examination practice, one from peer practice exchange — that may not be aligned.

**ASIP (Swiss Pension Fund Association)**

ASIP oversight of BVG occupational pension funds using AI for member suitability assessments imposes documentation requirements that are distinct from and may conflict with FINMA private client obligations. For Geneva wealth management firms managing both BVG pension assets and private client assets through the same AI system, ASIP BVG documentation requirements and FINMA private client documentation requirements may impose different review protocols, different evidence standards, and different accountability mechanisms on the same AI-assisted process.

The ASIP AI governance guidance for occupational pension funds does not address the dual-framework compliance problem for wealth managers serving both BVG and private client categories. No published resolution pathway exists for this specific structural collision.

**SFAMA (Swiss Fund and Asset Management Association)**

SFAMA member firms exchange AI governance intelligence through association channels — working groups, peer practice meetings, informal member briefings. This informal circuit forms operative AI governance standards for asset managers that are distinct from FINMA's examination-practice formation mechanism.

A Geneva wealth management firm that is compliant with FINMA's operative expectations may be misaligned with SFAMA peer circuit informal standards — and may face commercial consequences (client counterparty concerns, peer network information asymmetry) that regulatory compliance does not address.

SFAMA has not published AI-specific guidance for wealth management member firms that would reconcile SFAMA informal standards with FINMA examination-based standards. The two standard-formation pathways operate independently without published reconciliation.

**ISSB Sustainability Disclosure Standards**

ISSB standards require sustainability-related disclosures that AI systems increasingly assemble for wealth managers. The mid-2027 operative timeline is advancing. For Geneva wealth management firms compiling client-level sustainability data, the AI assembly process — how sustainability data is compiled, what sources are used, what assumptions are applied — creates documentation obligations that parallel investment recommendation documentation in evidentiary structure.

The AI sustainability claim documentation problem (named in prior cycles) has not been addressed with a boutique-scale methodology. Additionally, the performance attribution decomposition expectation — clients asking what portion of portfolio performance is AI-attributable — intersects with ISSB disclosure obligations in ways that have not been mapped for Geneva boutique wealth management firms.

**nFADP (Swiss Data Protection Act)**

nFADP Article 21 automated decision processing requires that data subjects can request explanation of automated decisions affecting them. Two distinct activation pathways exist:

1. **Regulatory activation:** FINMA or another authority requests AI decision explanation as part of examination or investigation.
2. **Client-initiated activation:** UHNWI clients directly requesting model access or detailed AI explanation, which constitutes Article 21 trigger independent of regulatory activation.

The client-initiated activation pathway has not been addressed as a discrete compliance scenario in the Geneva market. Responding to client-initiated Article 21 requests requires model access or explanation capabilities that most boutique wealth management firms do not have documented.

nFADP Article 13 (right of access) and Article 20 (right to correction) create obligations for AI systems that process client data — the firm must be able to identify which AI systems processed which client data, for what purposes, and what conclusions were drawn. For firms running multiple AI systems simultaneously, this identification obligation is a present-tense compliance challenge.

Behavioral profiling consent under nFADP Articles 5 and 6 remains a present-tense compounding exposure (named in C258 Phase 02) — the profiling activity cannot be correctly consented to under current nFADP interpretation regardless of documentation improvements.

**Emerging Commercial Requirements**

UHNWI client-initiated model access requests are arriving as commercial relationship events — clients exercising what they understand to be their data protection rights — creating disclosure obligations before regulatory frameworks have been applied to this specific scenario.

SFAMA peer circuit informal standards create commercial consequences for misalignment that operate independently of regulatory compliance: peer network information about AI governance adequacy circulates through SFAMA member channels with competitive implications for individual firms.

---

## 05 — Lead Magnet Draft

### In Sergio's Voice — EN

---

**Portfolio AI Governance Briefing: The Geneva Wealth Manager's Documentation Architecture**

*Managing Director, DigitalCoa.ch*

---

There is a specific set of documentation obligations that a Geneva wealth management firm accumulates when it deploys AI for client reporting, portfolio analysis, and compliance documentation. These obligations are not hypothetical. They are present-tense, accumulating, and largely unnamed in the Geneva market.

Most firms in this position have documentation that was produced reactively — in response to carrier questionnaires, regulatory signals, or client questions — without a coherent architecture underlying it. The pieces exist. The structure doesn't.

This briefing is about building that structure.

**What we will address:**

1. The five documentation categories that Geneva wealth management firms are being asked to demonstrate — and why the current documentation was built in the wrong order.

2. The client transparency request dilemma — how to respond to detailed AI methodology requests from sophisticated clients without creating information exposure beyond the client relationship.

3. The post-rebalancing review adequacy protocol — what substantively adequate human review of AI-triggered rebalancing looks like, and how to document it.

4. The group AI infrastructure accountability boundary — what the Geneva entity is and is not accountable for when AI decisions are made at group level.

5. The BVG/FINMA dual-framework reconciliation — how to manage AI compliance when the same system serves both BVG pension clients and private clients with non-identical regulatory requirements.

6. The client-initiated nFADP Article 21 request — how to respond when UHNWI clients directly request model access or AI explanation, and what that response must contain.

**Format:** 90-minute executive briefing, video or in-person. English. Questions welcome throughout.

**Investment:** CHF 2,800 per firm. Limited to two executives per session.

**Outcome:** A documented firm-level AI governance framework, coherent across regulatory and commercial requirements, with specific protocols for the five highest-exposure documentation gaps.

---

*To schedule: sergio@digitalcoa.ch*

---

### In Sergio's Voice — FR

---

**Briefing sur la Gouvernance de l'IA en Gestion de Portefeuille : L'Architecture de Documentation du Gérant de Fortune Genevois**

*Directeur Général, DigitalCoa.ch*

---

Il existe un ensemble spécifique d'obligations documentaires qu'un cabinet de gestion de fortune genevois accumule lorsqu'il déploie l'IA pour les rapports clients, l'analyse de portefeuille et la documentation de conformité. Ces obligations ne sont pas hypothétiques. Elles sont actuelles, cumulatives et largement non nommées sur le marché genevois.

La plupart des cabinets dans cette situation disposent d'une documentation qui a été produite de manière réactive — en réponse à des questionnaires d'assureurs, à des signaux réglementaires ou à des questions de clients — sans architecture cohérente sous-jacente. Les pièces existent. La structure n'existe pas.

Ce briefing porte sur la construction de cette structure.

**Ce que nous aborderons :**

1. Les cinq catégories documentaires que les cabinets de gestion de fortune genevois sont invités à démontrer — et pourquoi la documentation actuelle a été construite dans le mauvais ordre.

2. Le dilemme de la demande de transparence des clients — comment répondre aux demandes détaillées de méthodologie d'IA des clients sophistiqués sans créer une exposition d'information au-delà de la relation client.

3. Le protocole d'adéquation de l'examen post-rééquilibrage — à quoi ressemble un examen humain substantiellement adéquat des décisions de rééquilibrage initiées par l'IA, et comment le documenter.

4. La limite de responsabilité de l'infrastructure d'IA groupe — ce dont l'entité genevoise est et n'est pas responsable lorsque les décisions d'IA sont prises au niveau du groupe.

5. La réconciliation du double cadre BVG/FINMA — comment gérer la conformité IA lorsque le même système dessert à la fois les clients du BVG et les clients privés avec des exigences réglementaires non identiques.

6. La demande initiée par le client au titre de l'art. 21 nFADP — comment répondre lorsque les clients UHNWI demandent directement l'accès au modèle ou l'explication de l'IA, et ce que cette réponse doit contenir.

**Format :** Briefing exécutif de 90 minutes, vidéo ou en personne. Anglais. Questions bienvenues tout au long.

**Investissement :** CHF 2 800 par cabinet. Limité à deux dirigeants par session.

**Résultat :** Un cadre documenté de gouvernance de l'IA au niveau du cabinet, cohérent entre les exigences réglementaires et commerciales, avec des protocoles spécifiques pour les cinq lacunes documentaires à plus forte exposition.

---

*Pour planifier : sergio@digitalcoa.ch*

---

## 06 — Findings Summary

### Six Net-New Insights — Distinct from C214–C258 Phase 02

**Finding 01: Client Transparency Request vs. Competitive Exposure Creates a Discrete Documentation Tension That Has Not Been Named in the Geneva Market**

Sophisticated UHNWI clients are requesting detailed explanations of AI role in portfolio management — what the AI contributed specifically, how it reached its analytical conclusions, what data it used, who reviewed it. When clients request this level of transparency, Geneva wealth management firms face a structural dilemma: detailed explanation of proprietary AI system architecture and methodology creates information that travels beyond the client relationship — to advisors, consultants, competitors, and counterparties who interact with the client. The client's contractual and data protection rights to understand their own portfolio management are clear. The documentation architecture for managing this tension — what to disclose, in what form, with what information protections — is unnamed in the Geneva market. This is distinct from the AI communication framing question named in C258 Phase 02 (which addressed language liability in recommendation communication) and from the general client disclosure expectation framing in prior cycles. The specific problem is the information geometry created by detailed AI transparency: the explanation benefits parties beyond the client who requested it.

**Finding 02: Post-Rebalancing Human Review Adequacy Documentation Is a Discrete Unnamed Compliance Surface Distinct from Override Record Documentation**

AI-triggered systematic rebalancing creates a specific human-in-the-loop moment that has not been named as a discrete documentation category: the human review step that approves or rejects an AI-initiated rebalancing action. Prior cycles addressed AI recommendation override documentation (C257) and AI-on-AI communication chains (C257). This finding addresses the review step specifically — what constitutes substantively adequate human review of an AI-initiated rebalancing decision, and what the review record must contain to be defensible. Most Geneva boutique wealth management firms document that review occurred, not that the review was substantively adequate. The documentation standard for this specific operational moment — a routine occurrence in AI-assisted portfolio management — is absent from market offerings and from published regulatory guidance. The question is not whether human review happened, but what the review record must demonstrate about the review's substance.

**Finding 03: SFAMA Informal AI Guidance Circuit Operates as a Distinct Standard-Formation Pathway from FINMA Examination Practice, Creating Two Potentially Non-Aligned Operative Standards Simultaneously**

SFAMA member firms exchange AI governance intelligence through association channels — working groups, peer practice meetings, informal member briefings. This informal circuit forms operative AI governance standards for asset managers that are distinct from FINMA's examination-practice standard formation mechanism (named in C258 Phase 02). A Geneva wealth management firm can be fully aligned with FINMA's operative expectations — documented against what examiners have requested in individual examinations — and simultaneously misaligned with SFAMA peer circuit informal standards. Commercial consequences of this misalignment arise through client counterparty concerns and peer network information asymmetry, not through regulatory enforcement. The two standard-formation pathways operate independently without published reconciliation. This is distinct from the carrier underwriting standard-formation mechanism named in prior cycles, which addressed documentation adequacy through commercial underwriting pressure. The SFAMA circuit creates standard-formation through professional peer exchange with different informational content and different consequence mechanisms than either regulatory or commercial pressure.

**Finding 04: BVG Pension and Private Client AI Obligations Create a Regulatory Framework Collision for the Same AI System That No Reconciliation Methodology Addresses**

Geneva wealth management firms managing both BVG occupational pension assets and private client assets through the same AI system face a structural problem: ASIP BVG oversight and FINMA private client oversight impose documentation requirements on the same AI-assisted process that are non-identical in their specific evidence standards, review protocols, and accountability mechanisms. No published reconciliation methodology exists for this specific dual-framework compliance scenario. This is distinct from the nFADP-FINMA documentation collision named in prior cycles (which addressed tension between data protection requirements and conduct documentation requirements), and from the triple regulatory convergence problem (which addressed FINMA + ISSB + nFADP simultaneously without naming the ASIP-FINMA specific collision). The BVG-FINMA collision is specific to occupational pension asset management alongside private client management — a category of firm that has not been addressed as a distinct structural problem in prior market research.

**Finding 05: UHNWI Client-Initiated nFADP Article 21 Requests Arrive Through Commercial Relationships Before Regulatory Frameworks Have Been Applied to This Specific Scenario**

When UHNWI clients directly request model access or detailed AI explanation — "can I see the model that manages my portfolio" or "explain exactly how this recommendation was reached" — this constitutes a nFADP Article 21 automated decision explanation request triggered by client action, not regulatory demand. The firm's obligation to provide model-level explanation arises from the client's request under data protection law, independent of any regulatory examination. The client-initiated activation pathway has not been addressed as a discrete compliance scenario in the Geneva market. Responding requires model access or explanation capabilities — what the model does, how it reaches conclusions, what data it uses — that most boutique wealth management firms have not documented in client-responsive form. This is distinct from the general Article 21 explanation obligation named in prior cycles (which framed it as a regulatory compliance obligation), and from the behavioral profiling consent problem (which framed it as a consent architecture failure). The client-initiated trigger creates a specific documentation response obligation with its own timeline and format requirements, arriving through commercial relationship rather than regulatory process.

**Finding 06: AI Portfolio Performance Attribution Decomposition Has Emerged as a Client Expectation Without a Boutique-Scale Methodology, Creating a Present-Tense Documentation Gap**

Sophisticated clients — particularly UHNWI and family office clients with investment sophistication to ask the question — are beginning to request decomposition of portfolio performance into AI-assisted versus human-directed components. This is distinct from general AI governance disclosure: it requires a specific analytical methodology for outcome decomposition that does not exist at boutique scale. The client is asking: what portion of portfolio returns is attributable to AI decisions versus human judgment? The answer requires a methodology that most Geneva boutique wealth management firms do not have, and no Geneva service has produced one for boutique-scale deployment. This is distinct from the portfolio attribution ownership problem named in C250 Phase 02, which addressed organizational role assignment for AI decisions. This finding addresses the specific analytical problem of decomposing outcomes post-hoc — not who owns the decision, but what the outcome decomposition would show if it could be accurately produced.

---

*DigitalCoa.ch | Market Research | C259 Phase 02 | Geneva Finance*