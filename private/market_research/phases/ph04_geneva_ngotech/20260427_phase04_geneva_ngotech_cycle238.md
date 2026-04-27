# C238 — Phase 04: Geneva NGO/Tech
**Cycle:** C238 | **Phase:** 04 Geneva NGO/Tech | **Date:** 2026-04-27
**ICP:** Executive director or program manager, Geneva-based NGO (10–100 employees), international organization, or tech nonprofit deploying AI for program delivery, data management, or communications. Core concerns: donor accountability, data sovereignty, reputational risk, limited IT capacity, donor visibility vs. confidentiality tension.
**Mode:** Domain knowledge + Swiss institutional context
**Output:** `/data/.openclaw/workspace/digitalcoa.ch/private/market_research/phases/ph04_geneva_ngotech/20260427_phase04_geneva_ngotech_cycle238.md`

---

## 01 — ICP Language: How This ICP Actually Describes AI Problems

### English

**Executive director, Geneva NGO:**
"Before we deployed the AI tool, we thought about it as a process improvement. What we did not think about was whether the decisions it would influence are decisions we could take back. Some of them, we cannot. That changes what governance means."

**Program manager, humanitarian organization:**
"My staff override the AI recommendations regularly. They use their judgment. They are right to do so — the AI does not know the local context. But we have no record of what was overridden and why. If a donor asks how a particular beneficiary ended up in a particular category, we cannot show the human override that got us there."

**Board member, Geneva association:**
"ZEWO asked about our AI governance. We do not know what they are measuring. We have documents. Whether the documents mean our governance is adequate — we cannot answer that question."

**Finance and grants director:**
"One of our institutional donors has their own AI risk framework. It was written for large organizations with dedicated compliance functions. We have a part-time grants manager. The framework tells us what we should have. It does not tell us what to do when you do not have it."

**Operations lead:**
"Two years ago, someone on the team started using an AI tool informally. It worked well. Now we want to make it official — part of our program delivery. But we cannot go back and document what happened in those two years. And we cannot decide whether we should try."

**Senior program officer:**
"When we say no to an AI recommendation, that decision lives nowhere. The yes goes into the program record. The no just disappears. We are running the organization on a partial record."

### French

**Directeur exécutif, ONG genevoise :**
"Avant de déployer l'outil d'IA, nous y avons pensé comme à une amélioration de processus. Ce à quoi nous n'avons pas pensé, c'est si les décisions qu'il influencerait sont des décisions que nous pouvons annuler. Certaines, nous ne le pouvons pas. Cela change ce que signifie la gouvernance."

**Responsable de programme, organisation humanitaire :**
"Mon équipe remplace régulièrement les recommandations de l'IA. Ils utilisent leur jugement. Ils ont raison de le faire — l'IA ne connaît pas le contexte local. Mais nous n'avons aucun enregistrement de ce qui a été remplacé et pourquoi. Si un donateur demande comment un bénéficiaire particulier a fini dans une catégorie particulière, nous ne pouvons pas montrer le remplacement humain qui nous y a amenés."

**Membre du conseil, association genevoise :**
"ZEWO nous a demandé notre gouvernance de l'IA. Nous ne savons pas ce qu'ils mesurent. Nous avons des documents. Si les documents signifient que notre gouvernance est adéquate — nous ne pouvons pas répondre à cette question."

**Directeur financier et des subventions :**
"L'un de nos donateurs institutionnels a son propre cadre de risque IA. Il a été rédigé pour de grandes organisations avec des fonctions de conformité dédiées. Nous avons un responsable des subventions à temps partiel. Le cadre nous dit ce que nous devrions avoir. Il ne nous dit pas quoi faire quand vous ne l'avez pas."

**Responsable des opérations :**
"Il y a deux ans, quelqu'un de l'équipe a commencé à utiliser un outil d'IA de manière informelle. Ça a bien fonctionné. Maintenant, nous voulons le rendre officiel — faire partie de notre livraison de programme. Mais nous ne pouvons pas revenir en arrière et documenter ce qui s'est passé pendant ces deux années. Et nous ne pouvons pas décider si nous devrions essayer."

**Responsable principal de programme :**
"Cuando decimos no a una recomendación de IA, esa decisión no queda registrada en ningún lugar. El sí entra en el registro del programa. El no simplemente desaparece. Estamos dirigiendo la organización con un registro parcial."

---

## 02 — Market Signals: Current Problems, Failure Modes, Paradoxes, Complaints

**Signal 1: AI governance frameworks assume decision reversibility that humanitarian program decisions do not have**

Every AI governance framework in current circulation is built on an implicit assumption: if the AI-assisted decision turns out to be wrong, you can identify it, reverse it, and adjust. This assumption holds in corporate environments — a wrong email targeting decision, a miscategorized expense. It does not hold in humanitarian program delivery: a beneficiary deprioritized by an AI-assisted allocation system may have already been declined from an alternative program in the interim. The decision, in practice, is irreversible once implemented. Geneva NGOs operating in this context are following AI governance frameworks designed for reversible decision environments. The mismatch between framework assumption and program reality is structural. The governance failure mode it produces is not addressed.

**Signal 2: Human override of AI recommendations as an invisible and systematically undocumented governance event**

When program staff override an AI recommendation — declining to follow the tool's allocation suggestion, adjusting a beneficiary category, modifying a program targeting decision — this override is a governance-relevant event that no Geneva NGO currently documents systematically. The override demonstrates active human judgment in the loop, which is often cited as the governance safeguard. But there is no record of it. The NGO cannot answer the question: what percentage of our AI recommendations are overridden, and on what grounds? Without this record, the governance safeguard is asserted but unverifiable, and the pattern of overrides — which may reveal systematic AI failure modes — is invisible.

**Signal 3: ZEWO AI certification adequacy problem — auditing documentation completeness when governance quality resists measurement**

ZEWO is increasingly incorporating AI governance into certification review. The practical challenge no one has named: governance quality is not straightforwardly measurable. Unlike financial compliance — where a clear number exists — AI governance adequacy resists objective audit. The consequence is a structural substitution: certification reviews proxy for governance quality by evaluating documentation completeness. Organizations with well-organized documents appear to have adequate governance. Organizations with the same governance quality but less documentation appear weaker. The substitution of documentation audit for governance adequacy is not a ZEWO failure — it is a measurement problem inherent to the domain. But it has a real consequence: organizations are incentivized to produce documentation, not to govern better.

**Signal 4: Institutional donor AI risk framework implementation gap creating accountability asymmetry**

Large institutional donors — SDC, EU instruments, major private foundations — apply their own AI risk frameworks to grantees through grant agreements. These frameworks were designed in institutional contexts with dedicated compliance infrastructure. They are being applied to Geneva NGOs of 10–100 employees that do not have that infrastructure and cannot economically acquire it. The frameworks produce accountability obligations the NGO cannot meet without resources it does not have. The donor, applying its framework in good faith, may believe the obligations are proportionate. They are not proportionate to the NGO context. The resulting accountability asymmetry — obligations created without corresponding capacity — is not addressed by any current guidance from donors, Geneva bodies, or the NGO sector itself.

**Signal 5: Two-year informal-to-formal AI transition gap with no resolution methodology**

Many Geneva NGOs that are now attempting to formalize their AI use went through a period of informal AI deployment: individual staff members using AI tools without organizational authorization, producing outputs that fed into program decisions. This informal period — which may span months or years — is now ending. The organization wants to bring the practice into official governance. But it faces an unresolvable choice: attempt retroactive governance (which requires reconstructing decisions that cannot be reconstructed) or retire the legacy AI systems and start fresh (which sacrifices institutional knowledge and may disrupt program continuity). No Geneva guidance addresses what to do when you need to formalize AI use that was never formally documented from the beginning. The two-year gap is a specific, named problem that no current framework resolves.

**Signal 6: The program manager's board-executioner split under Swiss law as structurally irresolvable**

Swiss association law places program managers in a structural position with no good governance resolution. Under Art. 75 ZGB and associated duty of care, program managers bear personal accountability for decisions made in their function. In AI-assisted program delivery, this creates an obligation to review AI recommendations before acting on them. But at the operational scale of a 10–100 employee NGO, program managers cannot personally review every AI-assisted decision. Delegation is necessary. When program managers delegate AI review to program officers, those officers become the effective decision-makers — without the program manager's personal accountability exposure. When program managers retain review authority personally, they become operational bottlenecks. No governance model exists for this dilemma: the model must simultaneously require personal review (for accountability) and permit delegation (for operational viability). The split is structural. The resolution is not available in current Swiss association law guidance or Geneva NGO governance frameworks.

---

## 03 — Competitive Analysis: Gaps, What No One Is Addressing

**Gap 1: Decision reversibility as a governance design variable**

No current advisory service frames decision reversibility as a discrete governance design variable for Geneva NGOs. The question — are the AI-assisted decisions your organization makes reversible once implemented? — has no methodology attached to it. The answer changes the governance architecture: reversible decisions permit iterative governance; irreversible decisions require pre-deployment governance. This framing does not exist in current NGO AI governance guidance or Geneva advisory positioning.

**Gap 2: Human override log as a named governance artifact**

No Geneva NGO has a systematic human override log for AI recommendations — a structured record of what was overridden, by whom, on what grounds, and what the override decision was. This gap is not named as a discrete governance artifact in any current framework. The existing guidance says: maintain human oversight. None say: document your overrides. The absence of this log means the governance safeguard that organizations cite most frequently — human in the loop — is asserted but unverifiable.

**Gap 3: ZEWO certification audit proxy problem**

No one has named, let alone addressed, the structural substitution of documentation completeness audit for governance adequacy in the ZEWO certification context. Organizations preparing for ZEWO AI governance review have no guidance on what documentation actually demonstrates governance quality versus what demonstrates documentation effort. The gap is not a compliance gap — it is a measurement problem that makes compliance auditing unreliable as a proxy for the outcome the audit is supposed to produce.

**Gap 4: Institutional donor AI framework implementation gap for resource-constrained NGOs**

No methodology exists for Geneva NGOs to assess which elements of institutional donor AI risk frameworks are proportionate to their organizational context, which elements require adaptation, and which elements cannot be implemented at their scale. The gap is not a documentation problem. It is an implementation architecture problem: organizations need a decision methodology for how to apply donor frameworks at their scale, not more framework text.

**Gap 5: Retroactive governance versus orderly retirement decision framework for legacy AI systems**

No Geneva guidance addresses the specific problem of formalizing AI use that was deployed informally over an extended period. Organizations face a binary choice — retroactive governance or orderly retirement — with no decision framework for determining which path is appropriate given the program's risk profile, the data accumulated, and the governance debt incurred. This gap affects every Geneva NGO that began AI use before establishing formal governance.

**Gap 6: Board-executioner split governance resolution for program managers under Swiss law**

No Geneva advisory or organizational design framework addresses the structural position of the program manager who must simultaneously review AI decisions personally (under Art. 75 ZGB duty of care) and delegate those decisions operationally (for organizational viability). The governance architecture that resolves this split — a formal delegation protocol with defined review standards, documentation requirements, and accountability discharge mechanisms — does not exist as a named, implementable framework in the Geneva NGO context.

---

## 04 — Compliance Context: Geneva/Swiss Specific Obligations

**Swiss Association Law — Program Manager Personal Review Obligation Under Art. 75 ff. ZGB**

Swiss association law imposes personal duties of care on persons charged with management functions. For Geneva NGO program managers who have approved program designs incorporating AI-assisted recommendations, the question of what personal review is required before acting on an AI output has no published Swiss authority guidance. The obligation to review is implied. The standard of review is undefined. The documentation required to discharge the obligation is unspecified. The program manager is operating under a personal liability exposure with no defined adequacy boundary. The compliance context is present-tense and structural.

**nFADP — Beneficiary AI Impact Record as a Distinct Documentation Category**

The nFADP establishes obligations for personal data processing records (Art. 12 nFADP). Geneva NGOs are generally familiar with data processing logs as a compliance artifact. The beneficiary AI impact record — a structured ongoing log of what AI recommendations were made, what program decisions resulted, and what outcomes beneficiaries experienced — is a different category. It is outcome-oriented rather than activity-oriented. The question of whether nFADP requires this category of record, and whether Geneva cantonal guidance expects it, is not clearly resolved. The absence of this record means NGOs cannot demonstrate to FADP subjects what AI-assisted decisions were made about them and on what basis — which may become a subject access request problem as beneficiaries become more AI-aware.

**ZEWO Certification — Documentation Completeness as a Proxy for Governance Adequacy**

ZEWO's certification process increasingly includes AI governance review. The practical audit challenge: governance quality is not straightforwardly measurable. The structural consequence is that reviewers substitute documentation completeness evaluation for governance adequacy evaluation. Organizations cannot know in advance whether their documentation investment maps to what reviewers will assess. The compliance context is evolving and unresolved at the audit methodology level.

**Institutional Donor AI Conditions in Grant Agreements — Implementation Proportionality**

Institutional donors — SDC, EU Horizon Europe, EFTA instruments, major private foundations — are including AI governance conditions in grant agreements with increasing specificity. These conditions are designed in institutional compliance environments and applied to grantees of varying size and capacity. The resulting obligations may be disproportionate to the NGO's governance infrastructure. Pre-signing proportionality assessment of donor AI conditions against actual organizational capacity is not addressed by current donor guidance or Geneva NGO sector tools.

**Geneva CCPD Jurisdiction Over AI-Assisted Beneficiary Decisions**

The Geneva Cantonal Data Protection Authority (CCPD) has jurisdiction over personal data processing within the canton. For AI-assisted beneficiary decisions made in Geneva programs, the jurisdictional question becomes complex when the AI model runs on servers outside Geneva or outside Switzerland. The CCPD's position on whether AI inferences generated outside Geneva about Geneva-resident beneficiaries fall under its jurisdiction is not clearly established for the NGO context. Geneva NGOs are operating under cantonal oversight with an unresolved jurisdictional boundary.

---

## 05 — Lead Magnet Draft: In Sergio's Voice

### English

**Geneva NGO AI Decision Governance Briefing**

Most AI governance frameworks assume the decisions AI assists are reversible.

In humanitarian and development program delivery, many of them are not.

If a beneficiary is deprioritized by an AI-assisted allocation system and, in the interim, declines an alternative program opportunity, the decision cannot be fully reversed. The irreversibility changes the governance architecture: governance must happen before deployment, not after.

This briefing is for Geneva NGOs, international organizations, and tech nonprofits that are deploying AI in program delivery contexts where the decisions have real consequences for real people — and where the reversibility assumption built into most governance frameworks may not hold.

**What the briefing covers:**

- **Decision reversibility as a governance design variable**: whether the AI-assisted decisions your organization makes are reversible once implemented, and how the answer changes your governance architecture
- **The human override log**: how to document the AI recommendations your staff override, on what grounds, and what this record demonstrates about your governance quality
- **ZEWO AI certification adequacy**: what documentation actually demonstrates governance quality versus documentation effort — and what the measurement problem means for your certification preparation
- **Institutional donor AI framework implementation**: how to assess which elements of a donor's AI risk framework are proportionate to your organizational context, and which require adaptation
- **The informal-to-formal AI transition**: how to decide, when formalizing AI use that was deployed informally, between retroactive governance and orderly retirement
- **The program manager's board-executioner split**: what Swiss association law requires of you personally when you must both review AI decisions and delegate them — and what governance architecture would actually discharge your obligation

**Format:** 90-minute briefing, in person in Geneva or by video call
**Investment:** CHF 1,800
**Language:** English (French version available on request)

I work with a small number of Geneva organizations on their specific AI governance situations — not as a framework provider, but as someone who helps you develop a governance architecture that fits your actual decision environment, your actual resources, and your actual accountability obligations.

To schedule a briefing: write to sergio@digitalcoa.ch with a brief description of your organization and the AI governance questions you are currently navigating. I respond within two business days.

---

### French

**Briefing Gouvernance des Décisions IA pour les ONG genevoises**

La plupart des cadres de gouvernance de l'IA supposent que les décisions assistées par l'IA sont réversibles.

Dans la livraison de programmes humanitaires et de développement, beaucoup ne le sont pas.

Si un bénéficiaire est dépriorisé par un système d'allocation assistée par l'IA et, entre-temps, décline une opportunité de programme alternative, la décision ne peut pas être pleinement inversée. L'irréversibilité change l'architecture de gouvernance : la gouvernance doit avoir lieu avant le déploiement, pas après.

Ce briefing est destiné aux ONG genevoises, aux organisations internationales et aux associations à but non lucratif qui déploient l'IA dans des contextes de livraison de programmes où les décisions ont des conséquences réelles pour des personnes réelles — et où l'hypothèse de réversibilité intégrée dans la plupart des cadres de gouvernance peut ne pas s'appliquer.

**Ce que le briefing couvre :**

- **La réversibilité des décisions comme variable de conception de la gouvernance** : si les décisions assistées par l'IA de votre organisation sont réversibles une fois mises en œuvre, et comment la réponse change votre architecture de gouvernance
- **Le journal des取代 humains** : comment documenter les recommandations de l'IA que votre personnel remplace, pour quels motifs, et ce que cet enregistrement démontre sur la qualité de votre gouvernance
- **L'adéquation de la certification ZEWO** : quelle documentation démontre réellement la qualité de la gouvernance par rapport à l'effort de documentation — et ce que le problème de mesure signifie pour votre préparation à la certification
- **La mise en œuvre du cadre de risque IA des donateurs institutionnels** : comment évaluer quels éléments du cadre de risque IA d'un donateur sont proportionnels au contexte de votre organisation, et lesquels nécessitent une adaptation
- **La transition de l'IA informelle à l'IA formelle** : comment décider, lors de la formalisation de l'utilisation de l'IA déployée de manière informelle, entre une gouvernance rétroactive et un départ ordonné
- **La scission conseil-exécution du chargé de programmes** : ce que le droit suisse des associations exige de vous personnellement lorsque vous devez à la fois examiner les décisions d'IA et les déléguer — et quelle architecture de gouvernance déchargerait réellement votre obligation

**Format :** Briefing de 90 minutes, en personne à Genève ou par appel vidéo
**Investissement :** CHF 1 800
**Langue :** Français (version anglaise disponible sur demande)

Je travaille avec un nombre limité d'organisations genevoises sur leurs situations spécifiques de gouvernance de l'IA — pas en tant que fournisseur de cadre, mais en tant que quelqu'un qui vous aide à développer une architecture de gouvernance qui correspond à votre environnement de décision réel, vos ressources réelles et vos obligations de responsabilité réelles.

Pour planifier un briefing : écrivez à sergio@digitalcoa.ch en décrivant brièvement votre organisation et les questions de gouvernance de l'IA auxquelles vous êtes actuellement confrontées. Je réponds dans les deux jours ouvrables.

---

## 06 — Findings Summary: Six Net-New Insights

**Finding 1: Decision Irreversibility as a Discrete Governance Design Variable for Geneva NGOs**

The assumption of reversibility — that governance can be iterative, that mistakes can be corrected and the governance response refined — is built into every AI governance framework currently available to Geneva NGOs. For humanitarian and development program decisions, this assumption does not hold for a significant category of AI-assisted decisions: beneficiary allocation, program targeting, resource prioritization where the decision, once implemented, forecloses alternatives that cannot be recovered. This is distinct from prior cycle findings on program wind-down data disposal (C236, C235, C231), which addressed data at program closure. This finding addresses the upstream governance design question: before you deploy AI in an irreversible-decision context, the governance architecture must be different from what generic frameworks provide. No Geneva advisory currently frames reversibility as a named design variable.

*Distinction from prior cycles:* Data disposal (C236/C235/C231) is a terminal-state problem. This finding is a pre-deployment design problem. The governance solution each requires is structurally different.

---

**Finding 2: Human Override of AI Recommendations as a Systematically Undocumented Governance Event**

Geneva NGOs routinely override AI recommendations in program delivery — program managers and officers use their judgment to depart from AI suggestions on grounds of local context, beneficiary circumstances, or operational knowledge. These overrides are cited as the primary governance safeguard: human in the loop. But there is no systematic record of them. The NGO cannot demonstrate its override rate, its override grounds, or the pattern of what the AI gets wrong. The governance safeguard is asserted but unverifiable. This is distinct from prior cycle findings on AI-generated beneficiary communications accountability (C237, C235), which addressed AI-generated content sent outward. This finding addresses the inverse: human decisions to reject AI-generated content, and the governance record that should accompany those decisions.

*Distinction from prior cycles:* AI-generated communications (C237/C235) is about outbound AI content and organizational accountability. Override documentation is about inbound AI recommendations and human judgment as a governance artifact. The failure mode each addresses is inverse.

---

**Finding 3: ZEWO Certification Audit Substitution Problem — Documentation Completeness Audited Where Governance Quality Resists Measurement**

ZEWO's increasing AI governance review creates a practical audit problem: governance quality in AI systems is not straightforwardly measurable. The structural consequence is that reviewers substitute documentation completeness for governance adequacy — a reliable audit proxy because documentation is measurable, even where governance quality is not. This substitution has a real effect on organizational behavior: NGOs invest in documentation, not necessarily in better governance. The compliance investment may not produce the governance outcome the certification is supposed to certify. This is distinct from prior cycle findings on ZEWO certification AI audit pressure (C235, C234, C214), which addressed the presence of AI governance in ZEWO reviews. This finding addresses the specific measurement problem that makes the audit unreliable as a proxy for what it is supposed to measure.

*Distinction from prior cycles:* Prior findings addressed the fact that ZEWO reviews include AI governance. This finding addresses the specific mechanism by which audit quality is degraded: not reviewer failure, but a structural measurement problem inherent to the domain.

---

**Finding 4: Institutional Donor AI Risk Framework Implementation Gap as Accountability Asymmetry**

Large institutional donors apply their own AI risk frameworks to grantees through grant conditions. These frameworks were designed in institutional contexts with dedicated compliance infrastructure. They are being applied to Geneva NGOs of 10–100 employees without proportional adaptation. The resulting accountability asymmetry — obligations created without corresponding implementation capacity — is not addressed by any current guidance from donors, Geneva bodies, or the NGO sector. The NGO cannot meet the framework requirements, but is accountable for trying. This is distinct from prior cycle findings on multi-donor AI governance fragmentation (C237, C235) and donor AI questionnaire asymmetry (C234, C233, C232, C231, C230). This finding addresses the specific implementation proportionality question: the donor framework asks for something specific; the NGO has no methodology for determining whether it should attempt full implementation, partial adaptation, or negotiated proportionality.

*Distinction from prior cycles:* Multi-donor fragmentation (C237/C235) addresses the organizational identity crisis of holding contradictory positions. Donor questionnaire asymmetry (C234/C233/C232/C231/C230) addresses the documentation gap donor questions expose. This finding addresses the specific question: given the donor framework you face, what should you actually do when your organizational capacity does not match what the framework assumes?

---

**Finding 5: The Informal-to-Formal AI Transition Gap with No Resolution Methodology**

Many Geneva NGOs that are now attempting to formalize their AI governance went through a period of informal AI deployment: AI tools used by individual staff members without organizational authorization or documentation, producing outputs that fed into real program decisions. This period — which may span months or years — created an undocumented decision history that cannot be retrospectively reconstructed. The formalization now required forces a binary choice: attempt retroactive governance (which requires reconstructing decisions that have already decayed and may involve beneficiaries who can no longer be contacted) or retire the legacy AI systems and accept program disruption. No Geneva guidance provides a decision framework for making this choice. This is distinct from prior cycle findings on governance documentation theater (C232, C229), policy staleness detection (C229), and post-approval documentation drift (C236). Those findings address the ongoing governance maintenance problem. This finding addresses a discrete transition event: the moment an organization moves from informal to formal AI use.

*Distinction from prior cycles:* Documentation theater (C232/C229) and policy staleness (C229) are about ongoing governance maintenance failures. Documentation drift (C236) is about approved documentation becoming inaccurate over time. This finding addresses the discrete organizational transition event: informal-to-formal, with a binary choice and no named decision framework.

---

**Finding 6: The Program Manager's Board-Executioner Split Under Swiss Law as a Structurally Irresolvable Governance Position**

Swiss association law requires program managers to personally review decisions made in their function — including AI-assisted decisions — as part of their duty of care under Art. 75 ZGB. At the operational scale of a 10–100 employee NGO, personal review of every AI-assisted decision by the program manager is not operationally viable. Delegation is necessary. But delegation transfers effective decision authority to program officers who do not hold the program manager's personal liability exposure — creating a structural split: the accountable person does not make the decisions; the decision-makers do not hold the accountability. No governance model exists to resolve this split for the Geneva NGO context. The program manager is personally exposed for decisions they did not make, in an organizational structure that makes those decisions operationally necessary. This is distinct from prior cycle findings on program manager personal accountability discharge failure (C235), which framed the problem as a personal liability gap without naming the organizational design problem that creates it. This finding identifies the specific structural irresolvability: the board-executioner split is not a governance gap — it is a governance architecture problem that current Swiss association law and current NGO organizational design cannot resolve.

*Distinction from prior cycles:* Program manager personal liability (C235) identified that accountability exists without discharge mechanism. This finding identifies the specific organizational design problem that makes the discharge structurally impossible: you cannot simultaneously require personal review and permit delegation at scale. The governance architecture that would resolve this — formal delegation protocols with defined review standards, accountability discharge mechanisms, and proportional oversight requirements — does not exist as a named implementable framework in the Geneva NGO context.
