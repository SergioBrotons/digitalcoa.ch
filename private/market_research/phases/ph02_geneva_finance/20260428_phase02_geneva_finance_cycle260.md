# Phase 02 — Geneva Finance
## C260 | 2026-04-28 | Boutique Wealth Management AI Decision Architecture

---

## 00 — Cycle Metadata

**ICP:** Managing director or senior advisor at boutique Geneva wealth management firm (50–200 employees), deploying AI for client reporting, portfolio analysis, and compliance documentation.
**Core Concerns:** Accountability for AI-generated recommendations. FINMA regulatory compliance. Client data confidentiality. Documentation standards at boutique scale.
**Phase:** 02/06
**Cycle:** 260
**Date:** 2026-04-28
**Language:** EN + FR throughout

---

## 01 — ICP Language

### English

How this ICP actually describes AI problems in conversation:

*"When the AI generates a rebalancing signal and a human approves it, is that the same as when a human generates a recommendation and the AI validates it? We treat them the same way internally. I'm not sure the regulations treat them the the same way."*

*"Our institutional clients — the pension funds especially — have started sending questionnaires that ask about the AI models we use. Not just whether we use AI, but which models, what version, what data they were trained on. This is coming from the client side, not from FINMA. We don't have a framework for deciding what to disclose."*

*"The documentation burden isn't linear. Every time we add an AI tool, we add documentation obligations that interact with the existing ones. We've built documentation, but we haven't built documentation architecture. The pieces don't talk to each other."*

*"I'm the signatory on the compliance attestations. What I'm signing is that I have reviewed and approved the AI systems we use. I've reviewed what I was shown. Whether that review constitutes adequate review under the relevant standards — I genuinely don't know. Nobody's defined what adequate review means in this context."*

*"We had an institutional client ask whether they could audit the AI model we use for their portfolio. Not a regulatory audit. A direct client audit request. I didn't know what to say. We don't have a position on this."*

*"The ISSB sustainability data for client reporting — it's assembled by AI. The AI assembly process is what makes the data claim credible or not credible. But the documentation we've built for FINMA compliance doesn't cover the AI assembly process for sustainability data. These are two different documentation requirements that the same AI system is supposed to serve."*

*"The problem isn't that we didn't think about this. The problem is that we built documentation in response to specific questions — carrier questions, client questions, regulatory signals. Each piece was built independently. There was no architecture underlying the choices."*

---

### Français

Comment ce PIC décrit-il réellement les problèmes liés à l'IA en conversation :

*« Quand l'IA génère un signal de rééquilibrage et qu'un humain l'approuve, est-ce la même chose que quand un humain génère une recommandation et que l'IA la valide ? Nous les traitons de la même façon en interne. Je ne suis pas sûr que la réglementation les traite de la même façon. »*

*« Nos clients institutionnels — les fonds de pension surtout — ont commencé à envoyer des questionnaires qui pergunt sur les modèles d'IA que nous utilisons. Pas seulement si nous utilisons l'IA, mais lesquels, quelle version, sur quelles données ils ont été entraînés. Ceci vient du côté client, pas de la FINMA. Nous n'avons pas de cadre pour décider quoi divulguer. »*

*« La charge de documentation n'est pas linéaire. Chaque fois que nous ajoutons un outil d'IA, nous ajoutons des obligations documentaires qui interagissent avec les existantes. Nous avons construit de la documentation, mais nous n'avons pas construit d'architecture de documentation. Les pièces ne se parlent pas entre elles. »*

*« Je suis le signataire des attestations de conformité. Ce que je signe, c'est que j'ai examiné et approuvé les systèmes d'IA que nous utilisons. J'ai examiné ce qu'on m'a montré. Si cet examen constitue un examen adéquat selon les normes applicables — je ne sais vraiment pas. Personne n'a défini ce qu'un examen adéquat signifie dans ce contexte. »*

*« Un client institutionnel nous a demandé s'il pouvait auditer le modèle d'IA que nous utilisons pour son portefeuille. Pas un audit réglementaire. Une demande d'audit direct du client. Je ne savais pas quoi répondre. Nous n'avons pas de position sur cette question. »*

*« Les données de durabilité ISSB pour les rapports clients — elles sont assemblées par l'IA. Le processus d'assemblage de l'IA est ce qui rend la revendication de données crédible ou non crédible. Mais la documentation que nous avons construite pour la conformité FINMA ne couvre pas le processus d'assemblage de l'IA pour les données de durabilité. Ce sont deux exigences documentaires différentes que le même système d'IA est censé servir. »*

*« Le problème n'est pas que nous n'y avons pas pensé. Le problème est que nous avons construit la documentation en réponse à des questions spécifiques — questions de l'assureur, questions des clients, signaux réglementaires. Chaque pièce a été construite indépendamment. Il n'y avait pas d'architecture sous-jacente aux choix. »*

---

## 02 — Market Signals

### Current Problems and Failure Modes

**AI decision-initiation type as an undifferentiated compliance category creating structural misclassification.**
Boutique Geneva wealth management firms are currently treating all AI-assisted decisions as a single compliance category — applying identical documentation standards to decisions where AI initiated the process and decisions where AI contributed to a human-initiated process. The distinction is structurally significant: when AI initiates a rebalancing signal that a human approves, the compliance question is whether the human's review was substantively adequate for an AI-initiated decision. When a human initiates a recommendation that AI validates, the compliance question is whether the AI's contribution was appropriately scoped and documented. These require different documentation standards, different review protocols, and different accountability attributions. No Geneva wealth management firm at boutique scale has a decision-initiation taxonomy that distinguishes these cases — and therefore no basis for applying different standards to different AI decision types.

**Institutional client AI model audit requests arriving outside regulatory frameworks with no Geneva response framework.**
Institutional clients — particularly BVG pension funds and their trustees — are beginning to request direct access to audit the AI models used for their portfolios. These requests arrive as commercial relationship events, not as regulatory examinations. The firm's obligation in response to a direct client audit request is undefined: under nFADP, clients have data access and explanation rights; under FINMA conduct obligations, clients have a right to understand how their assets are managed; under commercial contract, the scope of client audit rights may or may not extend to AI model inspection. No Geneva wealth management firm has a documented position on what a direct client AI model audit request requires in terms of access, scope, format, and confidentiality protection. This is distinct from regulatory audit preparation, which has been addressed in prior cycles. The commercial audit request arrives through a different channel, creates different obligations, and requires a different documentation response.

**Compliance officer signatory exposure accumulating without a discharge methodology.**
Senior executives signing AI governance compliance attestations — for carrier renewals, regulatory submissions, and internal approvals — are doing so without any external or internal definition of what constitutes adequate review. The signature attests to review and approval of AI systems, but the attestation standard has no published content: no Geneva authority has defined what adequate review of an AI system requires at boutique scale. The exposure created by each signature compounds. The senior executive's personal liability for AI governance adequacy is accumulating with each attestation signed, with no mechanism for discharge, and no documentation architecture that would make each signature defensible. This is distinct from the documentation gap problem: even firms with strong documentation face this specific discharge problem, because the documentation does not define the standard against which review adequacy is measured.

**AI sustainability data assembly as a documentation requirement distinct from FINMA compliance documentation.**
Geneva wealth management firms assembling ISSB-aligned sustainability data for client reporting are using AI systems to compile, cross-reference, and present this data. The AI assembly process — what data sources the AI accessed, what assumptions it applied, how it handled gaps and inconsistencies in sustainability data — creates an evidentiary question for the sustainability claim itself that is separate from the question of FINMA compliance. A sustainability report assembled by AI may satisfy FINMA documentation requirements for investment suitability while simultaneously failing to provide an adequate evidence base for the sustainability claims it contains. The two documentation requirements — FINMA compliance documentation and AI sustainability claim evidence documentation — are served by the same AI system but have different evidentiary structures. No Geneva service has addressed this specific documentation intersection.

**Documentation architecture absence as a compounding structural failure distinct from documentation gaps.**
Most Geneva boutique wealth management firms with AI in active use have documentation — responses to carrier questionnaires, records of AI approvals, client communication records, nFADP compliance documentation. However, this documentation was built reactively: each piece in response to a specific question or event, without a coherent architecture determining what should be built, in what order, and how the pieces relate. The result is documentation pieces that exist in isolation, with undocumented interdependencies, inconsistencies between pieces, and a structural inability to answer questions that span multiple documentation elements. The architecture failure is distinct from the gap problem: the firm has documentation, but the architecture that would make it coherent and defensible does not exist. This structural problem creates compounding exposure as each new documentation requirement is addressed piecemeal, adding pieces that don't integrate with existing ones.

**Geneva-specific AI accountability obligations invisible in national framework publications.**
Geneva wealth management firms face a specific category of accountability exposure that arises from Geneva's position as a cross-border financial center and from the presence of international organizations, diplomatic missions, and non-Swiss ultra-high-net-worth clients in the Geneva client base. These Geneva-specific obligations — arising from client nationality, client regulatory status, cross-border data flows, and Swiss international commitments — are not visible in national framework publications or regulatory guidance. The Geneva-specific obligations layer on top of domestic Swiss obligations without being named as a distinct category. Firms discover these obligations reactively — through client requests, counterparty requirements, or cross-border incidents — rather than through any proactive regulatory publication. No Geneva service has mapped the specific category of Geneva-only accountability obligations that apply to boutique wealth management firms at 50–200 employees.

---

### Paradoxes and Structural Failures

- **Decision-type parity paradox:** Firms apply identical documentation standards to structurally different AI decision types — AI-initiated and human-initiated — creating either over-documentation of one category or under-documentation of the other.

- **Audit request paradox:** Institutional clients requesting AI model audits create a compliance obligation the firm cannot cleanly satisfy: providing model access creates competitive exposure, while refusing access creates client relationship and potential data protection exposure.

- **Attestation accumulation paradox:** Each signed attestation increases the compliance officer's documented exposure without increasing their protected position. The signature records the exposure without providing a discharge mechanism.

- **Sustainability documentation paradox:** AI-generated sustainability data satisfies AI compliance documentation without satisfying the AI assembly evidence standard required for the sustainability claim itself.

- **Architecture paradox:** Building documentation in response to specific questions produces documentation that cannot answer questions requiring integration across documentation elements — the more pieces built reactively, the larger the architecture gap grows.

---

## 03 — Competitive Analysis

### What No One Is Addressing

**1. AI decision-initiation taxonomy and type-specific documentation standards for boutique wealth management.**
No Geneva market participant has produced a decision-initiation taxonomy for AI-assisted decisions in wealth management — no framework distinguishing AI-initiated decisions from human-initiated decisions, and no type-specific documentation standards for each category. This is distinct from the override documentation problem (C257), the review adequacy problem (C259), and the version-state documentation problem (C248). The taxonomy problem is prior to all of them: without a decision-initiation type classification, firms cannot correctly determine which documentation standard applies to any given AI-assisted decision.

**2. Direct client AI model audit request response protocol.**
No Geneva service has produced a protocol for how a boutique Geneva wealth management firm should respond when an institutional client directly requests to audit the AI model used for their portfolio. This is distinct from regulatory audit preparation and from general AI governance disclosure. The commercial audit request — who can request it, what access is required, what format the audit should take, what confidentiality protections apply, what the firm's obligations are — has not been addressed as a discrete documentation architecture problem. The gap is distinct from the counterparty AI questionnaire problem named in prior cycles (which addressed formal questionnaire responses) and from the UHNWI Article 21 client-initiated request (C259, which addressed data protection rights rather than commercial audit rights).

**3. Compliance officer personal liability discharge methodology for AI governance attestations.**
No Geneva service has produced a discharge methodology for senior executives signing AI governance attestations — no framework defining what substantively adequate review of an AI system means, what the review record must contain, and what the signatory's personal exposure is after signing. This is distinct from the compliance officer evaluation methodology problem named in C245 (which addressed the structural problem of approving AI without evaluation methodology) and from the liability discharge problem named in C245 (which framed it as a missing boutique AI governance deliverable without producing the methodology itself). The specific product — a personal discharge protocol for senior executives with named attestations — has not been built.

**4. AI sustainability claim evidence documentation for ISSB-aligned client reporting at boutique scale.**
No Geneva service has produced a boutique-scale methodology for documenting the AI assembly process that generates ISSB-aligned sustainability data for client reporting. This is distinct from the ISSB AI sustainability documentation problem named in prior cycles (which addressed the regulatory timeline and the general documentation gap) and from the FINMA-ISSB compound documentation problem (which addressed the timeline collision rather than the documentation content standard for each framework independently). The specific problem — what the AI assembly evidence base must contain for a sustainability claim to be defensible, at boutique scale, for a Geneva wealth management firm — has not been addressed.

**5. Documentation architecture engineering for reactive documentation accumulation.**
No Geneva service has produced a methodology for taking existing reactive documentation accumulation — the pieces built over multiple cycles in response to carrier questions, client requests, and regulatory signals — and engineering them into a coherent documentation architecture. This is distinct from documentation gap filling (producing missing pieces) and from documentation improvement (strengthening existing pieces). Architecture engineering requires mapping the interdependencies between existing documentation elements, identifying structural gaps in how the pieces connect, and producing an integration framework that makes the accumulated documentation defensible as a system rather than as individual pieces. This specific product — architecture audit and reconstruction for accumulated reactive documentation — has not been named or produced in the Geneva market.

**6. Geneva-specific accountability obligations taxonomy for boutique wealth management firms.**
No Geneva service has mapped the specific category of accountability obligations that arise from Geneva's cross-border financial center position and Geneva-specific client base characteristics — obligations that layer on top of domestic Swiss obligations without being visible in national framework publications. The specific question — which Geneva-only accountability obligations apply to a boutique Geneva wealth management firm serving a mix of Swiss domestic, international organization, diplomatic, and UHNWI non-resident clients — has not been named as a discrete taxonomy problem with a specific documentation response.

---

## 04 — Compliance Context

### Geneva / Swiss Regulatory Obligations

**FINMA**

FINMA applies existing conduct obligations to AI-assisted wealth management without having published AI-specific documentation standards defining substantive review adequacy. The operative standard for AI governance documentation forms through examination practice — what individual FINMA examiners request in specific examinations — rather than through published guidance documents. This informal standard formation mechanism (named in prior cycles) continues to be the primary pathway by which Geneva wealth management firms learn what adequate AI governance documentation requires.

FINMA Circular 2016/1 investment mandate suitability obligations apply to AI-generated recommendations without AI-specific provisions for what documentation must demonstrate about the AI's contribution. The documentation standard that satisfies 2016/1 for human-generated recommendations may not be adequate for AI-generated recommendations where the AI-initiated or AI-contributed decision cannot be fully reconstructed from available records.

Additionally, FINMA has not published guidance distinguishing documentation requirements for AI-initiated decisions versus human-initiated decisions. The absence of this distinction means firms apply identical standards to structurally different decision types — creating either over-compliance documentation burden for human-initiated AI-contributed decisions, or under-compliance exposure for AI-initiated decisions reviewed under human-initiated standards.

Q1 2027 FINMA examination cycle is approaching. Firms should anticipate that AI-initiated decision documentation will be within scope given the absence of published guidance distinguishing it — examiners may probe this gap without prior warning based on findings from earlier examinations.

**ASIP (Swiss Pension Fund Association)**

ASIP obligations for BVG occupational pension funds using AI apply to member suitability assessments and pension fund asset management. For Geneva wealth management firms managing both BVG pension assets and private client assets, ASIP obligations layer onto FINMA obligations without a published reconciliation methodology for the same AI system serving both client categories.

ASIP has not published guidance on documentation requirements specific to AI-initiated decisions in BVG pension management. The absence of published ASIP guidance on AI decision-initiation type documentation creates a gap that compounds when ASIP obligations and FINMA obligations must be simultaneously satisfied by the same AI system.

Additionally, institutional BVG clients — pension fund trustees and institutional asset managers — are increasingly requesting direct AI model audit access as part of their own governance requirements. These client-initiated audit requests create obligations that ASIP oversight does not directly address: ASIP requires adequate AI governance, but does not specify whether client audit access to AI models is required, permitted, or constitutes a disclosure of proprietary information.

**SFAMA (Swiss Fund and Asset Management Association)**

SFAMA member channels — working groups, peer practice meetings, informal member briefings — continue to form operative AI governance standards for member asset managers that may not align with FINMA examination practice standards. The SFAMA peer circuit informal standard formation pathway operates independently from FINMA's examination-based mechanism.

For Geneva wealth management firms serving institutional clients, SFAMA peer circuit standards are commercially consequential: peer network information about AI governance adequacy circulates through SFAMA channels with effects on commercial relationships that regulatory compliance does not address.

SFAMA has not published guidance distinguishing documentation requirements for AI-initiated versus human-initiated decisions, nor has it addressed the specific documentation requirements for AI sustainability claim evidence under ISSB-aligned reporting. The SFAMA informal standard circuit and the FINMA examination-based standard formation mechanism both operate without these distinctions.

**ISSB Sustainability Disclosure Standards**

ISSB standards — with mid-2027 operative timeline — require sustainability-related disclosures that Geneva wealth management firms increasingly assemble using AI systems. The AI assembly process for sustainability data creates documentation obligations distinct from FINMA compliance documentation:

- **FINMA documentation:** Does the AI-assisted investment process satisfy suitability and conduct obligations?
- **ISSB documentation:** Does the AI assembly process for sustainability data provide an adequate evidence base for the sustainability claims in client reports?

These are different evidentiary questions requiring different documentation. The AI system serving both purposes must maintain documentation that satisfies both evidentiary standards simultaneously. No Geneva market participant has produced a boutique-scale methodology for building this dual-evidence documentation architecture.

Additionally, the specific question of what constitutes adequate AI assembly evidence for a sustainability claim — what sources were accessed, what assumptions were applied, how inconsistencies were handled, what human review occurred — has not been defined by any Geneva authority or market participant.

**nFADP (Swiss Data Protection Act)**

nFADP obligations apply to AI systems processing client data in Geneva wealth management. Two activation pathways for AI accountability obligations are relevant:

1. **Regulatory activation:** FINMA or another authority requests AI decision explanation as part of examination or investigation. The firm's obligation is to provide documentation adequate to explain AI-generated decisions.

2. **Client-initiated activation:** UHNWI clients and institutional clients directly requesting AI model access or detailed explanation of AI decision processes. The firm's obligation arises from nFADP Articles 13, 20, and 21 — the right to access, the right to explanation of automated decisions, and the right to correction.

The client-initiated activation pathway (named in C259) creates obligations that regulatory activation does not: providing model access to clients raises proprietary information concerns that providing model information to regulators does not. The documentation response to client-initiated requests must address both the data protection obligation and the competitive exposure created by the disclosure.

Additionally, Geneva-specific nFADP obligations arise from the cross-border nature of Geneva client relationships. Non-Swiss clients — particularly EU-connected clients and clients from jurisdictions with their own data protection frameworks — may have nFADP Article 21 rights (as Swiss residents) alongside rights under their home jurisdiction frameworks. Geneva wealth management firms serving non-Swiss clients have not mapped the intersection of these obligations.

**Emerging Commercial Requirements**

Institutional clients — particularly BVG pension funds and their trustees — are requesting direct AI model audit access as a commercial relationship requirement. This request arises outside formal regulatory frameworks: no Geneva authority has required it, but institutional clients are imposing it as a condition of the commercial relationship.

The commercial audit request creates obligations that are distinct from regulatory audit preparation: the firm must decide what access to provide, what scope of audit is appropriate, what confidentiality protections apply, and how to manage the competitive exposure created by permitting model inspection. No Geneva service has produced a framework for managing this specific commercial requirement.

---

## 05 — Lead Magnet Draft

### In Sergio's Voice — EN

---

**Portfolio AI Governance Briefing: The Decision Architecture Nobody Built**

*Managing Director, DigitalCoa.ch*

---

Geneva wealth management firms using AI have accumulated documentation. Each piece was built in response to a specific question — a carrier renewal, a client request, a regulatory signal. The pieces exist. What doesn't exist is the architecture that would make them work as a system.

This briefing is about that architecture. Specifically about the five structural problems that boutique Geneva wealth management firms are encountering — and that no Geneva market participant has named or addressed as discrete problems requiring specific documentation responses.

**What we will address:**

1. **The AI decision-initiation taxonomy.** Most firms apply identical documentation standards to structurally different AI decision types — AI-initiated decisions and human-initiated decisions. These require different compliance documentation, different review protocols, and different accountability attributions. Without the taxonomy, firms cannot correctly determine which standard applies to any given AI-assisted decision.

2. **The client-initiated AI model audit request.** Institutional clients — particularly BVG pension funds — are beginning to request direct audit access to the AI models managing their portfolios. This is a commercial relationship event, not a regulatory examination. The firm's obligations, the access scope, the confidentiality protections, and the documentation response have not been addressed as a discrete protocol.

3. **The compliance officer's personal liability discharge.** Senior executives signing AI governance attestations are accumulating personal exposure with each signature — without any definition of what adequate review actually requires, and without any discharge mechanism. The signature creates a record of exposure without a record of protection.

4. **The AI sustainability evidence documentation problem.** ISSB-aligned sustainability data assembled by AI creates a documentation requirement distinct from FINMA compliance documentation. The same AI system serves both purposes, but the evidentiary standards are different. Most firms' FINMA compliance documentation does not provide an adequate evidence base for the sustainability claims in client reports.

5. **The documentation architecture engineering gap.** Reactive documentation accumulation — pieces built in response to specific questions without an underlying architecture — creates documentation that cannot answer questions spanning multiple elements. The architecture audit and reconstruction process for accumulated reactive documentation is a specific product that has not been built in the Geneva market.

6. **Geneva-specific accountability obligations.** Obligations arising from Geneva's cross-border financial center position — client nationality factors, cross-border data flows, international organization client relationships — layer onto domestic Swiss obligations without being visible in national framework publications. The Geneva-specific taxonomy has not been mapped as a discrete documentation category.

**Format:** 90-minute executive briefing, video or in-person. English. Questions welcome throughout.

**Investment:** CHF 2,800 per firm. Limited to two executives per session.

**Outcome:** A named documentation architecture for your firm's AI-assisted wealth management process, with specific protocols for the five structural gaps identified above, and a decision-initiation taxonomy that determines which documentation standard applies to each AI decision type.

---

*To schedule: sergio@digitalcoa.ch*

---

### In Sergio's Voice — FR

---

**Briefing sur la Gouvernance de l'IA en Gestion de Portefeuille : L'Architecture des Décisions Que Personne N'a Construite**

*Directeur Général, DigitalCoa.ch*

---

Les cabinets de gestion de fortune genevois utilisant l'IA ont accumulé de la documentation. Chaque pièce a été construite en réponse à une question spécifique — un renouvellement d'assureur, une demande d'un client, un signal réglementaire. Les pièces existent. Ce qui n'existe pas, c'est l'architecture qui les ferait fonctionner comme un système.

Ce briefing porte sur cette architecture. Plus spécifiquement sur les cinq problèmes structurels auxquels les cabinets de gestion de fortune genevois de taille boutique sont confrontés — et qu'aucun acteur du marché genevois n'a nommés ou traités comme des problèmes discrets nécessitant des réponses documentaires spécifiques.

**Ce que nous aborderons :**

1. **La taxonomie de l'initiation des décisions par l'IA.** La plupart des cabinets appliquent des normes documentaires identiques à des types de décisions par l'IA structurellement différents — décisions initiées par l'IA et décisions initiées par l'homme. Celles-ci nécessitent des dokumentation de conformité différente, des protocoles d'examen différents et des attributions de responsabilité différentes. Sans la taxonomie, les cabinets ne peuvent pas déterminer correctement quelle norme appliquer à une décision assistée par l'IA donnée.

2. **La demande d'audit de modèle d'IA initiée par le client.** Les clients institutionnels — particulièrement les fonds de pension BVG — commencent à demander un accès direct à l'audit des modèles d'IA gérant leurs portefeuilles. C'est un événement de relation commerciale, pas un examen réglementaire. Les obligations du cabinet, la portée de l'accès, les protections de confidentialité et la réponse documentaire n'ont pas été traitées comme un protocole discret.

3. **La décharge de responsabilité personnelle du responsable conformité.** Les dirigeants seniors signant des attestations de gouvernance de l'IA accumulent une exposition personnelle à chaque signature — sans aucune définition de ce qu'un examen adéquat exige réellement, et sans aucun mécanisme de décharge. La signature crée un enregistrement de l'exposition sans un enregistrement de la protection.

4. **Le problème de la documentation des preuves de durabilité par l'IA.** Les données de durabilité alignées ISSB assemblées par l'IA créent une exigence documentaire distincte de la documentation de conformité FINMA. Le même système d'IA sert les deux objectifs, mais les normes probatoires sont différentes. La documentation de conformité FINMA de la plupart des cabinets ne fournit pas une base probatoire adéquate pour les réclamations de durabilité dans les rapports clients.

5. **L'écart d'ingénierie de l'architecture documentaire.** L'accumulation réactive de documentation — pièces construites en réponse à des questions spécifiques sans architecture sous-jacente — crée une documentation qui ne peut pas répondre aux questions couvrant plusieurs éléments. Le processus d'audit et de reconstruction de l'architecture pour la documentation réactive accumulée est un produit spécifique qui n'a pas été construit sur le marché genevois.

6. **Les obligations de responsabilité spécifiques à Genève.** Les obligations découlant de la position de Genève en tant que centre financier transfrontalier — facteurs de nationalité des clients, flux de données transfrontaliers, relations clients avec des organisations internationales — se superposent aux obligations suisses nationales sans être visibles dans les publications des cadres nationaux. La taxonomie spécifique à Genève n'a pas été cartographiée comme une catégorie documentaire discrète.

**Format :** Briefing exécutif de 90 minutes, vidéo ou en personne. Anglais. Questions bienvenues tout au long.

**Investissement :** CHF 2 800 par cabinet. Limité à deux dirigeants par session.

**Résultat :** Une architecture documentaire nommée pour le processus de gestion de fortune assistée par l'IA de votre cabinet, avec des protocoles spécifiques pour les cinq lacunes structurelles identifiées ci-dessus, et une taxonomie de l'initiation des décisions déterminant quelle norme documentaire s'applique à chaque type de décision d'IA.

---

*Pour planifier : sergio@digitalcoa.ch*

---

## 06 — Findings Summary

### Six Net-New Insights — Distinct from C214–C259 Phase 02

**Finding 01: AI Decision-Initation Type Creates Structurally Different Documentation Requirements That No Geneva Market Participant Has Named or Addressed**

Boutique Geneva wealth management firms are applying identical documentation standards to structurally different AI decision types — AI-initiated decisions (where AI generates the signal or recommendation) and human-initiated decisions (where AI contributes analysis to a human-generated recommendation). The compliance question for an AI-initiated rebalancing signal is whether the human's review was substantively adequate for an AI-driven decision. The compliance question for a human-initiated AI-validated recommendation is whether the AI's contribution was appropriately scoped, documented, and fit for purpose. These are different questions requiring different documentation standards, different review protocols, and different accountability attributions. No Geneva market participant has produced a decision-initiation taxonomy distinguishing these cases, and no type-specific documentation standards have been defined. This is distinct from the override documentation problem (C257 Phase 02), the review adequacy problem (C259 Phase 02), and the version-state documentation problem (C248 Phase 02). The decision-initiation taxonomy is a prior problem: without it, firms cannot correctly determine which documentation standard applies to any given AI-assisted decision.

**Finding 02: Institutional BVG Pension Clients Are Requesting Direct AI Model Audit Access as a Commercial Relationship Requirement, Creating Obligations Outside Any Regulatory Framework**

BVG pension funds and their institutional asset manager clients are beginning to request direct audit access to the AI models used for their portfolio management. These requests arrive as commercial relationship events — conditions imposed by institutional clients — rather than as regulatory examinations. The firm's obligation in response is undefined: no Geneva authority has specified what access is required, what scope is appropriate, what confidentiality protections apply, and what the audit response documentation must contain. Providing model access creates competitive exposure; refusing access creates client relationship and potential nFADP Article 21 compliance exposure. This is distinct from the regulatory audit preparation problem (named in prior cycles), from the counterparty AI questionnaire problem (which addressed formal questionnaire responses, not direct model access), and from the UHNWI client-initiated Article 21 request named in C259 Phase 02 (which addressed data protection rights rather than commercial audit rights with proprietary information implications). The specific protocol — for direct client AI model audit requests from institutional clients at boutique Geneva wealth management firms — has not been built as a discrete documentation architecture product.

**Finding 03: Compliance Officer AI Governance Attestations Accumulate Personal Liability Without Any Published Discharge Methodology, Creating a Compound Exposure That Is Structurally Invisible**

Senior executives signing AI governance compliance attestations — for carrier renewals, regulatory submissions, and internal approvals — are accumulating personal liability with each signature without any external or internal definition of what constitutes adequate review of an AI system at boutique scale. The attestation standard has no published content: no Geneva authority has defined what substantively adequate review requires, and no professional body has issued guidance on the discharge mechanism. Each attestation signed compounds the signatory's personal exposure without providing a documented path to discharge that exposure. The exposure is structurally invisible — it does not appear as a flagged risk item, does not generate any internal alarm, and does not produce any documentation that would make the signature defensible. This is distinct from the compliance officer evaluation methodology problem (C245 Phase 02), which identified the structural problem of approving AI without evaluation methodology, and from the liability discharge problem (C245 Phase 02), which named it as a missing deliverable without producing the methodology itself. The specific product — a personal discharge protocol for senior executives with named AI governance attestations, defining what adequate review requires and what the review record must contain — has not been built by any Geneva market participant.

**Finding 04: AI Sustainability Claim Evidence Documentation for ISSB-Aligned Client Reporting Requires a Documentation Standard Distinct from FINMA Compliance Documentation, and No Boutique-Scale Methodology Exists**

Geneva wealth management firms assembling ISSB-aligned sustainability data for client reporting use AI systems to compile, cross-reference, and present this data. The AI assembly process — what sources the AI accessed, what assumptions it applied, how it handled gaps and inconsistencies in sustainability data, what human review occurred — creates an evidentiary question for the sustainability claim itself that is separate from the FINMA compliance question. A sustainability report assembled by AI may satisfy FINMA documentation requirements for investment suitability while simultaneously failing to provide an adequate evidence base for the sustainability claims it contains. The two documentation requirements are served by the same AI system but have different evidentiary structures. No Geneva market participant has produced a boutique-scale methodology specifying what the AI assembly evidence base must contain for a sustainability claim to be defensible. This is distinct from the ISSB AI sustainability documentation problem named in prior cycles (which addressed the mid-2027 timeline collision and the general documentation gap), from the FINMA-ISSB compound documentation problem (which addressed the Q1 2027 / mid-2027 timeline convergence rather than the independent documentation content standard for each framework), and from the sustainability AI evidence standard problem named in prior NGO cycles (which addressed the humanitarian context rather than Geneva wealth management ISSB-aligned reporting).

**Finding 05: Reactive Documentation Accumulation Produces Documentation Pieces That Cannot Answer Cross-Element Questions, and the Architecture Audit and Reconstruction Problem Is a Discrete Unnamed Product Category**

Most Geneva boutique wealth management firms using AI have documentation — carrier questionnaire responses, AI approval records, client communication records, nFADP compliance documentation — built reactively over multiple cycles in response to specific questions and events. Each piece was built independently, without a coherent architecture determining what should be built, in what order, and how the pieces relate. The result is documentation that cannot answer questions spanning multiple elements: questions that require integrating information from carrier attestations, client communication records, AI system logs, and regulatory submissions simultaneously cannot be answered from the accumulated documentation because the pieces were built to answer individual questions rather than to form a coherent system. The architecture audit and reconstruction process — mapping interdependencies between existing documentation elements, identifying structural gaps in how pieces connect, and producing an integration framework that makes accumulated documentation defensible as a system — is a specific product that has not been built by any Geneva market participant. This is distinct from documentation gap filling (producing missing pieces) and documentation improvement (strengthening existing pieces). Architecture engineering addresses the coherence problem that neither gap filling nor improvement touches.

**Finding 06: Geneva-Specific AI Accountability Obligations Layer Onto Domestic Swiss Obligations Without Being Visible in National Framework Publications, and the Geneva-Specific Taxonomy Has Not Been Mapped**

Geneva wealth management firms face accountability obligations arising from Geneva's specific position as a cross-border financial center and from the characteristics of the Geneva client base — obligations that layer onto domestic Swiss obligations without appearing in national framework publications or regulatory guidance. These Geneva-specific obligations include: obligations arising from non-Swiss client regulatory status (EU-connected clients, clients from jurisdictions with their own AI governance frameworks, clients with international organization affiliations); obligations arising from cross-border data flows in Geneva's financial infrastructure context; obligations arising from Swiss international commitments that apply specifically in the Geneva context; and obligations arising from the presence of diplomatic and international organization clients with specific accountability expectations. Firms discover these obligations reactively — through client requests, counterparty requirements, or cross-border incidents — rather than through proactive regulatory publication. No Geneva service has produced a taxonomy mapping the specific category of Geneva-only accountability obligations for boutique wealth management firms at 50–200 employees serving a mix of Swiss domestic, international organization, diplomatic, and UHNWI non-resident clients. This is distinct from the cross-border AI obligations named in prior cycles (which addressed EU AI Act downstream obligations and general cross-border data protection questions) and from the Geneva-specific structural problems named in prior cycles (which addressed Geneva institutional context rather than the specific category of Geneva-only accountability obligations that apply to wealth management firms).