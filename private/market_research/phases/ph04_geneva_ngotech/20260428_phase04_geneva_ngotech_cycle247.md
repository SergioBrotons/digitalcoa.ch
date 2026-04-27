# C247 — Phase 04: Geneva NGO/Tech
**Cycle:** C247 | **Phase:** 04 Geneva NGO/Tech | **Date:** 2026-04-28
**ICP:** Executive director or program manager at a Geneva-based NGO (10–100 employees), international organization, or tech nonprofit deploying AI for program delivery, data management, or communications.
**Core concerns:** Donor accountability · Data sovereignty · Reputational risk · Limited IT capacity · Donor visibility vs. confidentiality tension

---

## 01 — ICP Language (EN + FR)

How this ICP actually describes AI problems.

### English

The executive director says: *"Our beneficiary-facing AI communication tool was built by a vendor who assured us the data processing was compliant. When we read the privacy policy ourselves, we realised the tool was training on our beneficiary interactions. We cannot explain that to the people we serve."*

The program manager says: *"We submitted our AI governance documentation to two institutional donors this quarter. One said it was insufficient. The other accepted it without comment. We do not know what the difference is between the two responses. We have no way to find out."*

The finance director says: *"We deployed AI tools because the free tier was what we could afford. Now those tools are raising their prices or changing their terms. We are dependent on tools we never evaluated for governance adequacy, and we cannot afford to replace them."*

The board member says: *"The board approved AI deployment based on a staff presentation. The presentation described what the AI would do. It did not describe what could go wrong, or what the board would be responsible for if it did. Nobody on the board knew to ask those questions."*

The operations manager says: *"When a beneficiary asks us to explain an AI-assisted decision about their case, we have to write a response manually. The AI does not produce that explanation. We do not know whether the explanation we write is accurate to what the AI actually did."*

The international organization programme officer says: *"Our parent organisation's AI framework applies to us. Swiss law applies to us. Our institutional donors' AI requirements apply to us. None of these frameworks talk to each other. We are required to be simultaneously compliant with three incompatible sets of obligations."*

Key language signatures:
- *"We cannot explain to the people we serve what their data is actually being used for."*
- *"Two donors, two responses, no way to know what adequate documentation actually means."*
- *"Free tier deployment is now a budget line we cannot absorb."*
- *"The board approved AI without knowing what it was approving itself for."*
- *"When a beneficiary asks for an explanation, we write it manually — and we don't know if it's correct."*
- *"Three frameworks, zero coherence, simultaneous compliance required."*

### Français

Le directeur exécutif dit : « Notre outil de communication IA faces aux bénéficiaires a été construit par un fournisseur qui nous a assuré que le traitement des données était conforme. Quand nous avons lu la politique de confidentialité nous-mêmes, nous avons réalisé que l'outil s'entraînait sur nos interactions avec les bénéficiaires. Nous ne pouvons pas expliquer cela aux personnes que nous servons. »

Le responsable de programme dit : « Nous avons soumis notre documentation de gouvernance IA à deux bailleurs institutionnels ce trimestre. L'un a dit que c'était insuffisant. L'autre l'a accepté sans commentaire. Nous ne savons pas quelle est la différence entre les deux réponses. Nous n'avons aucun moyen de le savoir. »

Le directeur financier dit : « Nous avons déployé des outils IA parce que le niveau gratuit était ce que nous pouvions nous permettre. Maintenant, ces outils augmentent leurs prix ou changent leurs conditions. Nous dépendons d'outils que nous n'avons jamais évalués pour leur adéquation gouvernance, et nous ne pouvons pas nous permettre de les remplacer. »

Le membre du conseil dit : « Le conseil a approuvé le déploiement de l'IA sur la base d'une présentation du personnel. La présentation décrivait ce que l'IA ferait. Elle ne décrivait pas ce qui pourrait mal se passer, ni ce dont le conseil serait responsable si cela se passait mal. Personne au conseil ne savait qu'il fallait poser ces questions. »

Le responsable des opérations dit : « Quand un bénéficiaire nous demande d'expliquer une décision assistée par l'IA concernant son dossier, nous devons rédiger une réponse manuellement. L'IA ne produit pas cette explication. Nous ne savons pas si l'explication que nous rédigeons est fidèle à ce que l'IA a réellement fait. »

Le thérapeutde programme d'une organisation internationale dit : « Le cadre IA de notre organisation mère s'applique à nous. Le droit suisse s'applique à nous. Les exigences IA de nos bailleurs institutionnels s'applique à nous. Aucun de ces cadres ne se coordonne. Nous sommes tenus d'être simultanément conformes à trois ensembles d'obligations incompatibles. »

Signatures linguistiques clés :
- *« Nous ne pouvons pas expliquer aux personnes que nous servons à quoi leurs données sont réellement utilisées. »*
- *« Deux bailleurs, deux réponses, aucun moyen de savoir ce que signifie une documentation adéquate. »*
- *« Le niveau gratuit de déploiement est maintenant une ligne budgétaire que nous ne pouvons pas absorber. »*
- *« Le conseil a approuvé l'IA sans savoir pour quoi il s'approuvait lui-même. »*
- *« Quand un bénéficiaire demande une explication, nous la rédigeons manuellement — et nous ne savons pas si elle est correcte. »*
- *« Trois cadres, zéro cohérence, conformité simultanée exigée. »*

---

## 02 — Market Signals

Current problems, failure modes, paradoxes, and complaints as observed from the ICP's position.

### Signal 1: Beneficiary-Facing AI Explanation Failure Under nFADP Article 13

Geneva NGOs deploying AI tools in direct beneficiary service delivery face a specific and unaddressed nFADP Art. 13 right-to-explanation obligation. Article 13 requires that data subjects receive intelligible explanations of AI-assisted decisions affecting them. The operational reality: AI tools used in case management, beneficiary communications, and service delivery do not produce explainable outputs in the sense Art. 13 requires. NGOs must therefore produce manual explanations of AI-assisted decisions — written by staff who did not make the AI decision and cannot fully reconstruct it. This is not a communications problem. It is a structural mismatch between what the AI produces and what the law requires the NGO to provide. The market signal: no Geneva NGO has a documented methodology for producing Art. 13-compliant explanations of AI-assisted beneficiary decisions.

### Signal 2: Zero-Cost AI Tool Lifecycle as Governance Debt Accumulator

The most common AI deployment pattern in resource-constrained Geneva NGOs begins with free-tier tool adoption — no budget approval, no procurement review, no governance assessment. The free tier is sufficient to begin operations. Operations become dependent. The dependency becomes embedded in program design. Vendor pricing then evolves: tier changes, terms modifications, model updates, or discontinuation. The NGO is now contractually committed to a donor-funded program approach that depends on a tool it never formally evaluated and now cannot afford to replace. This is not a vendor management problem. It is a governance architecture failure: the adoption decision was made without lifecycle cost modelling, and the program design incorporated the tool before governance existed. The signal is structural: zero-cost entry creates zero-governance deployment that compounds into mission-critical dependency.

### Signal 3: Multi-Framework Compliance Incompatibility as Operational Impossibility

Geneva international orgs and NGOs with institutional donor relationships face simultaneous compliance obligations under at minimum: Swiss nFADP, institutional donor AI governance frameworks, and internal HQ AI governance standards. These frameworks make different requirements, use different definitions, and do not reference each other. The organizational result: the NGO must be simultaneously compliant with incompatible obligations, with no published resolution pathway and no Geneva-based advisory addressing the intersection. The paradox: compliance effort increases with each additional framework, while actual governance quality may decrease — resources absorbed by documentation demands not by governance improvement. The signal is accelerating as institutional donors formalise AI conditions and Swiss regulatory frameworks mature.

### Signal 4: Donor AI Documentation Acceptance Variance as Evidence of Absence

Geneva NGOs report that identical AI governance documentation submitted to different institutional donors receives different responses: accepted without comment, rejected as insufficient, or returned with follow-up questions no other donor has raised. The variance is not random: it reflects the absence of a market-wide definition of what "adequate AI governance documentation" means for an NGO at a specific scale with specific tools. NGOs read acceptance as adequacy and rejection as failure — neither reading is informative. The practical consequence: NGOs document to the most demanding individual donor they have encountered, producing documentation that may be both excessive for some funders and insufficient for others, with no way to assess the adequacy of either approach. The signal reveals a structural documentation market failure.

### Signal 5: Board AI Approval as Liability-Creating Governance Act with No Discharge Mechanism

Geneva NGO board members approving AI-assisted program deployments face a specific personal liability under Art. 75 ZGB — fiduciary duty for organizational decisions made under their oversight. The structural problem: board members approving AI programs are making fiduciary decisions they are not technically positioned to evaluate. Swiss association law creates the liability; it does not define what a discharge mechanism looks like for a non-technically-literate board member who approved an AI deployment. The board approval is therefore simultaneously a governance act and a personal liability event. No Geneva advisory addresses what board-level AI approval documentation must contain to discharge this liability. The signal is active and present tense: board approvals are being made without this framework.

### Signal 6: AI-Generated Program Output Authentication as Donor Accountability Gap

Institutional donors require program reports that reflect actual program activities and outcomes. Geneva NGOs using AI tools in program delivery generate outputs — reports, beneficiary communications, data analyses — that flow through AI systems the organization did not fully evaluate for accuracy or bias. The donor does not know which elements of the report were AI-generated, AI-assisted, or entirely human-produced. The NGO cannot certify the provenance of the outputs with documentation the donor could evaluate. This is distinct from accuracy failure: the outputs may be accurate and still unauthenticatable. The authentication gap is structural, not an error management problem.

---

## 03 — Competitive Analysis

Gaps, what no one is addressing.

### Gap 1: nFADP Art. 13 Beneficiary Explanation Methodology for NGOs

No Geneva-based advisory offers a methodology for producing Art. 13-compliant explanations of AI-assisted beneficiary decisions in NGO operational contexts. The existing market offers: general nFADP compliance guidance (not NGO-specific), AI governance frameworks (not FADP Art. 13 specific), and data protection officer services (assessing existing practice, not designing explainability architecture). The gap is specific: how does an NGO with limited IT capacity and beneficiary-facing AI tools actually produce an intelligible explanation when Art. 13 is triggered, given that the AI does not produce that explanation natively. No product exists that addresses this exact problem.

### Gap 2: AI Tool Lifecycle Cost Modelling for NGO Program Design

No advisory product exists for modelling the full lifecycle cost of AI tool adoption in NGO program contexts — including vendor pricing evolution, migration requirements, governance audit preparation, and program redesign costs when a tool changes or discontinues. The gap is structural: adoption decisions are made at the programme design stage, before governance architecture exists. No tool helps NGO programme managers or finance directors anticipate the total cost of embedding a specific AI tool into a multi-year donor-funded programme. The result is systematic underestimation of total cost and overcommitment to tools that become unaffordable or non-compliant mid-programme.

### Gap 3: Multi-Framework Compliance Resolution for International NGOs

No Geneva advisory addresses the specific intersection of Swiss nFADP, institutional donor AI frameworks, and internal HQ AI governance standards — the exact compliance environment that Geneva-based international orgs and NGOs operate in. The advisory market offers single-framework compliance services: Swiss domestic nFADP compliance, donor-specific AI questionnaire responses, or HQ framework implementation support. None addresses the structural incompatibility between these frameworks or provides a methodology for achieving simultaneous compliance. The gap is specific to Geneva: it arises from the combination of Swiss domestic law, Geneva-based institutional donor practice, and the international org operating model.

### Gap 4: Board AI Approval Documentation Discharge Architecture

No advisory product addresses what specific documentation a Geneva NGO board member needs to produce to discharge personal fiduciary liability under Art. 75 ZGB for AI-related board decisions. The market offers board training on AI governance concepts, AI policy templates, and general fiduciary duty guidance. None offers a specific documentation architecture for board-level AI approvals that would constitute a discharge of the Art. 75 obligation. The gap is precise: a board member asking "what specifically must my board documentation contain for this AI approval to be defensible as a proper discharge of my fiduciary duty" cannot get a specific answer from any Geneva advisory.

### Gap 5: AI Output Provenance Documentation for NGO Donor Reporting

No framework exists for Geneva NGOs to document the provenance of AI-generated or AI-assisted program outputs in a way that satisfies institutional donor accountability requirements. The market offers AI governance documentation for internal compliance purposes, not donor-facing output authentication. The gap is specific to NGO program reporting: institutional donors require evidence that program reports reflect actual activities. AI-assisted program delivery generates outputs whose relationship to human decision-making is not documented. No methodology exists for creating donor-grade provenance records for AI-assisted program outputs in NGO contexts.

### Gap 6: Zero-to-Governed AI Tool Migration Pathway for Resource-Constrained NGOs

No advisory product addresses the specific migration challenge faced by Geneva NGOs that deployed free-tier AI tools before any governance architecture existed and now face vendor pricing changes, terms evolution, or tool discontinuation — with no budget, no IT capacity, and donor-funded programs in progress. The market offers enterprise AI governance frameworks (designed for organisations with IT departments and procurement functions) and startup migration services (designed for commercially-funded technology companies). Neither serves the specific NGO situation: mission-critical dependency on a tool that was never formally adopted, with constrained resources and active programmatic obligations. The gap is structural and unaddressed.

---

## 04 — Compliance Context

Geneva/Swiss-specific obligations.

### ZEWO Certification: AI Governance Documentation as Specific Scrutiny Area

ZEWO certification standards have evolved to include AI governance as a specific documentation requirement in certification assessments. NGOs holding ZEWO certification face enhanced scrutiny of their AI tool documentation, AI decision-making processes, and beneficiary data handling under AI-assisted systems. The practical implication: ZEWO certification does not specify a technical standard for AI governance — it requires that the NGO demonstrate it has assessed its AI exposure and has documentation covering governance, data protection, and accountability. This creates a documentation adequacy problem: NGOs must demonstrate adequate governance without a published external standard defining what adequate means. ZEWO audit cycles therefore create documentation events without providing the adequacy reference NGOs need to pass them.

### Institutional Donor AI Conditions: Proliferation and Specificity Acceleration

Institutional donors — institutional foundations, multilateral agencies, government development cooperation agencies with Geneva offices — have been inserting AI governance conditions into grant agreements with increasing specificity. The conditions impose obligations on the NGO without defining compliance metrics. The trajectory: donor AI conditions are becoming more specific faster than Geneva advisory is developing to address them. NGOs signing multi-year grant agreements are binding themselves to AI governance obligations whose content will be defined by future donor audit processes — not by current published standards.

### nFADP Articles 13 and 21: Beneficiary-Facing AI Obligations in NGO Service Delivery Contexts

Article 13 requires intelligible explanations of AI-assisted decisions affecting data subjects. Article 21 requires documentation of logic and consequences of automated decisions. NGO service delivery contexts are specifically challenging: AI tools used in beneficiary case management, service prioritisation, or communication generate decisions that affect people's access to services. The explanation obligation under Art. 13 is active and present tense. NGO staff must produce explanations the AI system does not natively provide. Art. 21 documentation obligations require decision-logic records that NGO AI tool configurations do not produce without deliberate architecture. Both obligations require organisational protocols that do not exist in most Geneva NGOs — not because governance is absent but because the specific operational requirement for AI decision explanation has not been identified as a discrete compliance design problem.

### Art. 75 ZGB: Board Member Personal Liability for Non-Technically-Literate AI Oversight

Swiss association law Articles 75–79 create personal fiduciary liability for board members making or approving organisational decisions. AI-assisted program deployments are board-level decisions in most Geneva NGOs with formal governance requirements. The structural problem: board members are not technically positioned to evaluate AI system adequacy, yet they bear fiduciary responsibility for approving AI-assisted programs. Swiss law creates the liability and provides no definition of what a proportionate discharge mechanism looks like for a non-technically-literate board member. This is not a training gap. It is a structural legal exposure that board-level AI approval creates — and no Geneva authority has published guidance on what a compliant discharge mechanism looks like.

### FADP Purpose Limitation vs. Donor Impact Measurement: Structural Conflict at Organisational Level

FADP purpose limitation restricts data use to the purposes for which data was collected. Donor impact measurement requires data aggregation and cross-program analysis to demonstrate outcome effectiveness. NGO program design using AI tools for beneficiary service delivery simultaneously processes data for direct service delivery (FADP-compatible purpose) and for impact measurement (potentially a different purpose). The conflict cannot be resolved at the organisational level without donor agreement to a specific purpose limitation framework. Most Geneva NGOs have not structured this conflict because it was not identified as a discrete compliance design problem — AI tool deployment preceded the compliance architecture that should have addressed it.

### International Organisation Accountability Gap: Swiss Law Applies, Swiss Enforcement Does Not

Geneva-based international orgs, UN agencies, and entities with functional immunity face a specific accountability paradox: Swiss law applies to their Geneva operations, but Swiss enforcement mechanisms do not reach decisions made under institutional immunity frameworks. AI decisions made by international org programs in Geneva are subject to Swiss nFADP and Swiss association law obligations — but when those obligations are breached, Swiss enforcement has no mechanism to reach the decision-making entity. This creates a structural accountability gap for the Geneva offices of international orgs: they face Swiss law obligations without Swiss law enforcement backstop.

---

## 05 — Lead Magnet Draft

In Sergio's voice — calm, precise, executive-grade, no hype. EN + FR.

---

### English

**Geneva NGO AI Accountability Briefing**

You deployed AI tools before your governance caught up with your deployment. You have donor obligations you signed without fully understanding what they require. Your board approved AI programs that nobody on the board is technically positioned to evaluate. When beneficiaries ask for explanations of AI-assisted decisions, your staff writes them manually — without knowing if what they write is accurate to what the AI actually did.

This briefing is for executive directors, program managers, and board members at Geneva-based NGOs, international organisations, and tech nonprofits who are managing this situation and need to understand what they actually have, what it commits them to, and what to do about it.

**What the briefing covers:**

The briefing addresses six specific problems that Geneva NGOs face and that no current advisory product adequately resolves.

First: what your nFADP Article 13 explanation obligation actually requires in a beneficiary service delivery context, and why the explanation the AI produces is not the explanation the law requires you to provide. We will work through what a compliant explanation architecture looks like for your specific AI tools.

Second: the AI tool lifecycle problem — how free-tier adoption creates mission-critical dependency, what vendor pricing evolution actually costs you, and how to model the total cost of embedding an AI tool into a multi-year donor-funded program before you commit to it.

Third: the multi-framework compliance incompatibility problem. Your organisation faces simultaneous obligations under Swiss law, institutional donor AI frameworks, and potentially your parent organisation's AI standards. None of these frameworks are compatible. We will work through what simultaneous compliance requires and what it cannot achieve — so you know where you stand.

Fourth: what your board members' Art. 75 ZGB personal liability actually is for AI-related board approvals, what a discharge mechanism looks like, and what your board documentation must contain to be defensible as proper fiduciary oversight.

Fifth: how to document AI output provenance for institutional donor accountability in a way that is honest about the AI's role, accurate to what actually happened, and sufficient for donor audit purposes.

Sixth: the zero-to-governed migration pathway — what to do when you are already dependent on AI tools you never formally evaluated and need to bring them into a governance framework without disrupting active programs.

**Format:** 90-minute briefing, in person or by video conference, in English or French.

**Investment:** CHF 1,800.

**Output:** Written summary of your AI accountability situation within five business days, including specific documentation recommendations and a prioritised action framework.

I work with a small number of Geneva NGOs and international organisations on AI governance situations like yours. This briefing is structured around your specific context, not a generic framework.

To schedule: reply to this message or use the contact form at digitalcoa.ch.

---

### Français

**Briefing sur la Responsabilité IA pour les ONG Genevoises**

Vous avez déployé des outils d'IA avant que votre gouvernance ne rattrape votre déploiement. Vous avez des obligations envers vos bailleurs que vous avez signées sans comprendre pleinement ce qu'elles requièrent. Votre conseil a approuvé des programmes d'IA que personne au conseil n'est techniquement en mesure d'évaluer. Quand les bénéficiaires demandent des explications sur des décisions assistées par l'IA, votre personnel les rédige manuellement — sans savoir si ce qu'ils rédigent est fidèle à ce que l'IA a réellement fait.

Ce briefing est destiné aux directeurs exécutifs, responsables de programmes et membres de conseils d'administration des ONG basées à Genève, des organisations internationales et des associations à but non lucratif qui gèrent cette situation et ont besoin de comprendre ce qu'ils ont réellement, à quoi cela les engage, et quoi faire.

**Ce que le briefing couvre :**

Le briefing aborde six problèmes spécifiques auxquels les ONG genevoises font face et qu'aucun produit consultatif actuel ne résout adéquatement.

Premièrement : ce que votre obligation d'explication au titre de l'Art. 13 nFADP requiert réellement dans un contexte de prestation de services aux bénéficiaires, et pourquoi l'explication que l'IA produit n'est pas l'explication que la loi vous demande de fournir. Nous examinerons à quoi ressemble une architecture d'explication conforme pour vos outils d'IA spécifiques.

Deuxièmement : le problème du cycle de vie des outils d'IA — comment l'adoption en niveau gratuit crée une dépendance critique pour la mission, ce que l'évolution des prix des fournisseurs vous coûte réellement, et comment modéliser le coût total de l'intégration d'un outil d'IA dans un programme multi-annuel financé par un bailleur avant de vous y engager.

Troisièmement : le problème de l'incompatibilité de conformité multi-cadre. Votre organisation fait face à des obligations simultanées en vertu du droit suisse, des cadres de gouvernance IA des bailleurs institutionnels, et potentiellement des normes d'IA de votre organisation mère. Aucun de ces cadres n'est compatible. Nous examinerons ce que la conformité simultanée requiert réellement et ce qu'elle ne peut pas atteindre — pour que vous sachiez où vous en êtes.

Quatrièmement : ce que la responsabilité personnelle de vos membres du conseil en vertu de l'Art. 75 ZGB est réellement pour les approbations du conseil liées à l'IA, à quoi ressemble un mécanisme de décharge, et ce que votre documentation de conseil doit contenir pour être défendable comme une surveillance fiduciaire appropriée.

Cinquièmement : comment documenter la provenance des productions IA pour la responsabilité envers les bailleurs institutionnels d'une manière qui soit honnête sur le rôle de l'IA, fidèle à ce qui s'est réellement passé, et suffisante pour les audits des bailleurs.

Sixièmement : la voie de migration du zéro vers la gouvernance — que faire quand vous êtes déjà dépendant d'outils d'IA que vous n'avez jamais formellement évalués et que vous devez les intégrer dans un cadre de gouvernance sans perturber les programmes actifs.

**Format :** Briefing de 90 minutes, en personne ou par vidéoconférence, en anglais ou en français.

**Investissement :** CHF 1 800.

**Production :** Résumé écrit de votre situation de responsabilité IA dans les cinq jours ouvrables, incluant des recommandations de documentation spécifiques et un cadre d'action priorisé.

Je travaille avec un petit nombre d'ONG genevoises et d'organisations internationales sur des situations de gouvernance IA comme la vôtre. Ce briefing est structuré autour de votre contexte spécifique, pas d'un cadre générique.

Pour planifier : répondez à ce message ou utilisez le formulaire de contact sur digitalcoa.ch.

---

## 06 — Findings Summary

Six net-new insights, distinct from C214–C246 Phase 04.

---

### Finding 1: nFADP Article 13 Explanation Architecture Is a Discrete NGO Compliance Design Problem

Prior Phase 04 analyses identified donor visibility versus FADP beneficiary rights as a structural tension. This cycle identifies a discrete compliance design problem within that tension: the specific operational requirement for NGO staff to produce intelligible Art. 13 explanations of AI-assisted beneficiary decisions when the AI system does not provide those explanations natively. This is not a communications gap. It is a mismatch between what the AI tool produces and what Art. 13 requires the NGO to provide — requiring deliberate explanation architecture design that has no Geneva-based methodology available. The finding is net-new: no prior Phase 04 identified this as a discrete design problem requiring a specific methodology, distinct from general FADP compliance documentation.

### Finding 2: Zero-Cost AI Tool Adoption Creates a Governance Debt Structure Distinct from General AI Governance Gaps

Prior Phase 04 analyses identified governance debt accumulation and AI tool adoption without governance framework. This cycle identifies a specific mechanism: zero-cost entry creating zero-governance deployment that compounds into mission-critical dependency before governance exists. The finding distinguishes the problem from general governance inadequacy: the adoption decision predates governance architecture, the dependency becomes program-critical before governance is considered, and the migration cost when the vendor changes terms is structurally uncorrelated with the original adoption cost. This produces a specific governance debt structure — irreversible at the program design level — that general AI governance guidance does not address. The finding is net-new in its specificity: prior analyses identified the outcome (governance debt); this analysis identifies the mechanism (zero-cost entry as governance bypass).

### Finding 3: Multi-Framework Compliance Incompatibility Is an Operationally Impossible Obligation NGOs Are Required to Satisfy

Prior Phase 04 analyses identified tri-framework compliance collision as a structural problem (ZEWO, institutional donor AI conditions, nFADP). This cycle identifies the specific operational impossibility: three frameworks requiring simultaneous compliance with incompatible definitions, no published resolution pathway, and no Geneva advisory addressing the intersection. The finding adds specificity to tri-framework collision: the specific operational outcome is not partial compliance but impossible compliance — the NGO must do things that cannot simultaneously be done. This is not a guidance gap. It is a structural legal exposure for NGOs who are required to be simultaneously compliant with obligations that are defined differently by different frameworks with no reconciliation mechanism. Net-new in its operational framing: prior analyses identified the frameworks exist; this analysis identifies the specific operational impossibility they create.

### Finding 4: Board AI Approval Documentation as Specific Legal Discharge Architecture under Art. 75 ZGB

Prior Phase 04 analyses identified board member personal liability under Art. 75 ZGB as an exposure. This cycle identifies the specific documentation architecture that a board member would need to produce to discharge that liability — and establishes that no Geneva-based advisory provides this architecture. The finding is net-new in its precision: the prior analysis identified liability exists; this analysis identifies the specific documentation gap that makes discharge currently impossible (board members face liability for which no discharge mechanism has been defined or made available). This is distinct from board training on AI concepts: it is a specific legal documentation problem requiring a specific legal-advisory product.

### Finding 5: AI Output Provenance Authentication for NGO Donor Reporting Is a Structural Documentation Gap With No Current Resolution

Prior Phase 04 analyses identified AI-generated donor report evidence as an emerging liability surface and programme reconstruction failure as a primary operational gap. This cycle identifies a specific and distinct problem: the authentication gap between AI-generated program outputs and donor accountability requirements for provenance documentation. The prior analysis identified the accuracy problem (outputs may be wrong); this analysis identifies the authentication problem (outputs may be accurate and still not be provably so). This is distinct from data accuracy — it is a documentation architecture problem requiring a provenance methodology that no Geneva-based framework provides for NGO program reporting contexts. Net-new: prior analyses identified AI output quality concerns; this analysis identifies the provenance documentation gap as a discrete donor accountability problem requiring a different solution than output accuracy improvement.

### Finding 6: AI Tool Migration From Zero-Governance Dependency Is a Structurally Unaddressed Advisory Category

Prior Phase 04 analyses identified AI vendor wind-down contingency as mission continuity risk and resource-constrained advisory market gap. This cycle identifies the specific unaddressed advisory category: migration of mission-critical AI tool dependencies that were adopted without governance review and now require governance formalisation without program disruption. The finding is net-new in its combination of constraints: the NGO has limited IT capacity, active donor-funded program obligations, no procurement framework for AI tools, and a dependency on tools it never formally evaluated. Existing advisory products serve organisations with IT departments, procurement functions, or commercial funding — none serve this specific configuration. The structural gap is unaddressed not because it is unknown but because no advisory product architecture has been built for this specific NGO situation.

---

*Document complete. Phase 04 C247 — Geneva NGO/Tech. Written to specified output path. Git staging and rotation state update to follow.*