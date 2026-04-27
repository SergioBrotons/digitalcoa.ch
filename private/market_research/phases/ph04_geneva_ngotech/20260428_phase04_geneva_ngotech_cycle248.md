# C248 — Phase 04: Geneva NGO/Tech
**Cycle:** C248 | **Phase:** 04 Geneva NGO/Tech | **Date:** 2026-04-28
**ICP:** Executive director or program manager at a Geneva-based NGO (10–100 employees), international organization, or tech nonprofit deploying AI for program delivery, data management, or communications.
**Core concerns:** Donor accountability · Data sovereignty · Reputational risk · Limited IT capacity · Donor visibility vs. confidentiality tension

---

## 01 — ICP Language (EN + FR)

How this ICP actually describes AI problems.

### English

The executive director says: *"We deployed AI into our beneficiary communication workflow because it reduced response time. We did not model what happens to that workflow when the tool changes. We are now in a situation where replacing the tool would break the program. We cannot replace it. We did not know we were making a decision that could not be undone."*

The program manager says: *"The donor wants to see AI governance documentation. We produced it to get the grant. We know the documentation does not describe what we actually do. We do not know how to write documentation that describes what we actually do, because what we actually do is not designed — it evolved."*

The operations manager says: *"The AI tool we use for case management is integrated into a product that is now owned by a different company. The privacy policy changed. The data flows changed. We do not have a contract with the new owner. Our donor reporting depends on data from that tool. We have no visibility into what changed and no leverage to ask."*

The board member says: *"We were told the AI was 'compliant.' Nobody specified which framework made it compliant. We later learned that 'compliant' meant the vendor had a policy. It did not mean the deployment met any specific standard. We signed the board resolution. We did not know what we were signing."*

The data protection officer says: *"We mapped our data flows for nFADP. We mapped the AI tool as a data processor. The mapping was done when the tool was under one ownership and one set of terms. Three quarters later, the processor relationship has changed and our records are wrong. We cannot redo the mapping with the resources we have."*

The finance director says: *"When the free tier became paid, we absorbed the cost into program delivery. When it became expensive, we absorbed that too. We are now in a situation where our program's cost structure depends on a tool that will continue to increase in price. We do not have a framework for deciding when the dependency becomes unacceptable."*

Key language signatures:
- *"We did not know we were making a decision that could not be undone."*
- *"The documentation was produced to get the grant. It does not describe what we actually do."*
- *"Our processor relationship changed. Our records did not. We cannot redo them."*
- *"We were told compliant. We did not know which framework that meant."*
- *"We do not have a framework for deciding when the dependency becomes unacceptable."*

### Français

Le directeur exécutif dit : « Nous avons déployé l'IA dans notre flux de communication avec les bénéficiaires parce que cela réduisait le temps de réponse. Nous n'avons pas modélisé ce qui se passe pour ce flux quand l'outil change. Nous sommes maintenant dans une situation où remplacer l'outil casserait le programme. Nous ne pouvons pas le remplacer. Nous ne savions pas que nous prenions une décision qui ne pouvait pas être annulée. »

Le responsable de programme dit : « Le donateur veut voir la documentation de gouvernance IA. Nous l'avons produite pour obtenir la subvention. Nous savons que la documentation ne décrit pas ce que nous faisons réellement. Nous ne savons pas comment écrire une documentation qui décrit ce que nous faisons réellement, parce que ce que nous faisons réellement n'a pas été conçu — cela a évolué. »

Le responsable des opérations dit : « L'outil d'IA que nous utilisons pour la gestion des dossiers est intégré à un produit qui est maintenant propriété d'une autre entreprise. La politique de confidentialité a changé. Les flux de données ont changé. Nous n'avons pas de contrat avec le nouveau propriétaire. Notre reporting donateur dépend des données de cet outil. Nous n'avons aucune visibilité sur ce qui a changé et aucun levier pour poser des questions. »

Le membre du conseil dit : « On nous a dit que l'IA était 'conforme'. Personne n'a précisé quel cadre la rendait conforme. Nous avons appris plus tard que 'conforme' signifiait que le fournisseur avait une politique. Cela ne signifiait pas que le déploiement respectait une norme spécifique. Nous avons signé la résolution du conseil. Nous ne savions pas ce que nous_SIGNIONS. »

Le responsable de la protection des données dit : « Nous avons cartographié nos flux de données pour la nFADP. Nous avons cartographié l'outil d'IA comme traitement de données. La cartographie a été faite quand l'outil était sous une propriété et un ensemble de conditions. Trois trimestres plus tard, la relation de traitement a changé et nos dossiers sont erronés. Nous ne pouvons pas refaire la cartographie avec les ressources dont nous disposons. »

Le directeur financier dit : « Quand le niveau gratuit est devenu payant, nous avons absorbé le coût dans la livraison du programme. Quand il est devenu coûteux, nous avons absorbé cela aussi. Nous sommes maintenant dans une situation où la structure des coûts de notre programme dépend d'un outil qui continuera d'augmenter en prix. Nous n'avons pas de cadre pour décider quand la dépendance devient inacceptable. »

Signatures linguistiques clés :
- *« Nous ne savions pas que nous prenions une décision qui ne pouvait pas être annulée. »*
- *« La documentation a été produite pour obtenir la subvention. Elle ne décrit pas ce que nous faisons réellement. »*
- *« Notre relation de traitement a changé. Nos dossiers n'ont pas changé. Nous ne pouvons pas les refaire. »*
- *« On nous a dit conforme. Nous ne savions pas quel cadre cela signifiait. »*
- *« Nous n'avons pas de cadre pour décider quand la dépendance devient inacceptable. »*

---

## 02 — Market Signals

Current problems, failure modes, paradoxes, and complaints as observed from the ICP's position.

### Signal 1: Structural Incompatibility Between Program Design and AI Tool Lifecycle

The most consequential failure mode in Geneva NGO AI deployment is not technical failure — it is architectural incompatibility between program design and tool lifecycle. When AI tools are adopted at the program design stage, they are embedded into program logic: beneficiary workflows, reporting mechanisms, staffing structures, and donor deliverables all incorporate the tool's operational assumptions. When the tool then evolves — pricing changes, terms change, model updates, vendor acquisition — the program cannot be disentangled from the tool without program redesign. The NGO faces a binary choice: absorb the changed cost, or redesign the program. Neither choice is made with governance clarity; both are made under operational pressure. The signal: this incompatibility is discovered only after the embedding has already occurred, at which point the NGO has no leverage. No Geneva advisory addresses this specific architectural failure as a discrete governance entry point.

### Signal 2: Processor-of-Record Drift as Silent nFADP Compliance Erosion

Geneva NGOs that completed nFADP data flow mapping when an AI tool was under one vendor ownership face a specific and growing compliance erosion problem. When the tool is acquired, renamed, or restructured, the processor relationship changes — the legal entity responsible for data processing may be different, the terms of processing may be different, and the data flow may have changed without the NGO's knowledge or consent. The data flow mapping completed at deployment no longer accurately represents what is happening with beneficiary data. The structural problem: re-mapping requires capacity the NGO does not have budgeted or scheduled. The mapping error compounds silently. The signal is accelerating as AI tool market consolidation increases acquisition frequency. This is distinct from the consent architecture problem: it is a documentation integrity problem for organizations that did everything "right" at deployment and are now non-compliant through no decision they made.

### Signal 3: Board AI Approval Language as Liability Instrument Without Standard Form

Geneva NGO board resolutions approving AI deployment use language the organization did not design and cannot evaluate. "The board approves the deployment of AI tools for program delivery" — language that appears adequate to the board, does not specify which tools, which data, which decisions, which oversight mechanism, or which framework defines "approval." When the AI system later creates exposure, the board resolution does not protect the board members because it does not contain the specificity that defines a discharge. No standard form exists in Geneva for NGO board AI approval language that would constitute a proper discharge of fiduciary duty under Art. 75 ZGB. The market signal: boards are making liability-creating approvals with language that appears protective but is not. The absence of a standard form means every NGO is independently exposing its board without knowing it.

### Signal 4: Donor Reporting Dependency on Tool-Generated Data with No Provenance Architecture

Institutional donors require program reports that reference beneficiary data processed through AI tools. The NGO cannot independently verify the accuracy of tool-generated data, cannot document the relationship between human decisions and AI outputs in the report, and cannot authenticate the report's provenance for donor evaluation. The paradox: donor visibility requirements are satisfied by reports whose reliability the NGO cannot stand behind. The NGO produces the report because the donor requires it; the report is accurate enough to not trigger concern; but the NGO cannot demonstrate the factual basis with documentation that would survive independent scrutiny. This is distinct from fraud or error: it is a structural authentication failure arising from the combination of donor reporting requirements and AI-assisted program delivery.

### Signal 5: Tool Selection Authority and Accountability Dissociation as Governance Architecture Failure

In Geneva NGOs with 10–100 employees, the staff member who selects an AI tool is not the person held accountable for its governance failures. Program staff adopt tools to solve operational problems; the executive director and board absorb the accountability for those adoptions. This dissociation is structural: it arises from the separation between operational decision-making and fiduciary responsibility. The consequence: tool selection decisions are made against operational criteria — does it solve the immediate problem — without governance criteria — what does this commitment create. No Geneva advisory addresses the specific problem of decision-authority and decision-accountability dissociation as a design variable in NGO AI governance architecture.

### Signal 6: Dual Accountability Dissonance in AI-Assisted Outcome Measurement

Geneva NGOs face a specific structural conflict between AI-generated program metrics and donor-reported program outcomes. The AI tool generates outcome metrics that the donor uses to evaluate program performance. The NGO simultaneously uses the same AI tool to produce the narrative report that contextualizes those metrics for the donor. Both the metrics and the narrative are AI-assisted. The donor has no framework for evaluating whether the AI-assisted metrics and the AI-assisted narrative are consistent with each other or with actual program delivery. The NGO has no framework for producing that consistency. The dissonance is not intentional; it arises because two separate donor accountability mechanisms — quantitative metrics and qualitative narrative — both depend on the same AI tool without an authentication architecture connecting them. The signal: this is becoming a primary donor scrutiny surface as institutional donors increase AI literacy and begin asking provenance questions about program reports.

---

## 03 — Competitive Analysis

Gaps, what no one is addressing.

### Gap 1: AI Tool Lifecycle Embedding Risk Assessment at Program Design Stage

No advisory product in Geneva addresses the specific problem of AI tool lifecycle embedding risk assessment at the program design stage. Available products serve organizations that either already have governance architecture (and are evaluating new tools against it) or are already in the migration situation (and need to exit an embedded tool). Neither product serves the NGO at the moment of initial program design — when the embedding decision is made, before governance exists, before the program structure incorporates the tool's assumptions. The gap is temporal: the advisory entry point must precede the embedding decision, which is structurally incompatible with how NGO program design currently operates. No product makes this entry point actionable for Geneva NGO program managers.

### Gap 2: Processor-of-Record Change Detection and Re-Mapping Protocol

No protocol exists for Geneva NGOs to detect and respond to processor-of-record changes in their AI tools — changes that may not be announced, may not be legally material from the vendor's perspective, and may not trigger any notification obligation. The protocol would need to specify: how to monitor for processor changes without dedicated IT capacity, what the minimum re-mapping response is when a change is detected, and how to manage the compliance debt when re-mapping is not immediately feasible. The market gap is not about vendor management generally; it is specifically about the monitoring function for organizations that cannot hire vendor management as a function. The solution must fit within part-time operational capacity.

### Gap 3: Board AI Approval Language Standard for Swiss NGO Fiduciary Discharge

No Geneva advisory has published a standard form or language guidance for NGO board AI approval resolutions that would constitute a defensible discharge of fiduciary duty under Art. 75 ZGB. The market offers general fiduciary duty training, AI governance awareness sessions, and policy templates. None addresses the specific problem: what must a board resolution say, about which specific elements of an AI deployment, to be a proper exercise of fiduciary oversight rather than a nominal approval. This is a specific and concrete product gap: an implementable board resolution language framework for Geneva NGO boards approving AI deployments. The gap is actionable and urgent — board approvals are being made continuously without this framework.

### Gap 4: AI Output Provenance Architecture for Donor-Facing NGO Reporting

No framework exists for Geneva NGOs to document the provenance of AI-assisted program outputs in a way that satisfies institutional donor accountability requirements. The existing market offers internal AI governance documentation, data protection audit trails, and general program monitoring frameworks. None specifically addresses the problem of donor-facing output authentication: how an NGO documents, for a donor's evaluation, which elements of a program report were AI-generated, AI-assisted, or entirely human-produced — and what that differentiation means for the report's reliability. This is distinct from general AI governance documentation. It requires a specific provenance architecture designed for the donor reporting context in which Geneva NGOs operate.

### Gap 5: Decision-Authority and Accountability Dissociation as NGO Governance Design Variable

No advisory addresses the specific structural problem of decision-authority and accountability dissociation in NGO AI governance. Available governance frameworks assume that the person who selects and deploys an AI tool bears accountability for its governance. In NGO practice, these are different people with different incentives, different knowledge bases, and different risk exposures. The governance design problem: how do you build oversight mechanisms that are proportionate to the accountability burden placed on people who did not make the tool selection decision. This is a structural design problem that generic AI governance frameworks do not address because they assume alignment between decision authority and accountability that NGO structures do not provide.

### Gap 6: Dual Accountability Dissonance Resolution for AI-Assisted Program Measurement

No advisory product addresses the specific structural conflict between AI-generated quantitative metrics and AI-assisted qualitative narrative in Geneva NGO donor reporting. The conflict is specific: two separate donor accountability mechanisms (metrics and narrative) both depend on the same AI tool, producing outputs that cannot be independently verified for consistency. The resolution requires a provenance architecture connecting quantitative metric generation and qualitative narrative production — something no existing AI governance framework addresses for the NGO context. This is a distinct advisory product opportunity: a methodology for ensuring consistency between AI-generated program metrics and AI-assisted program narrative, designed for organizations with limited IT capacity and multiple institutional donor reporting obligations.

---

## 04 — Compliance Context

Geneva/Swiss-specific obligations.

### ZEWO Certification AI Declaration Commitments

ZEWO certification for Swiss NGOs includes AI-specific declaration commitments that NGOs are signing without full comprehension of their operational implications. ZEWO requires certified organizations to demonstrate that their AI deployments do not compromise the responsible use of charitable funds or the protection of beneficiary interests. The specific commitments are not a published standard with operational criteria — they are a declaration framework where adequacy is assessed by ZEWO auditors against criteria that evolve as the sector develops. For Geneva NGOs, the practical consequence: signing the declaration creates accountability exposure before the organization understands what it has committed to. The ZEWO AI declaration requires organizations to represent their governance state in a way that must withstand audit — but the audit criteria are not fully specified in advance. This creates a documentation challenge distinct from the general nFADP compliance question.

### Institutional Donor AI Conditions as Binding Contractual Obligations

Geneva NGOs with institutional donor relationships face AI governance conditions that are incorporated into grant agreements as binding contractual obligations — not regulatory requirements, not guidance, but contractual commitments enforceable through grant clawback, future funding decisions, and reputational consequences. Major institutional donors (DFFD, SDC, cantonal development cooperation budgets, EU development funds) have formalized AI governance conditions that require recipient NGOs to maintain documentation of AI tool deployments, report on AI governance changes, and demonstrate that AI use aligns with the purposes for which funds were granted. These conditions are not coordinated with each other or with Swiss domestic law. An NGO receiving funding from multiple institutional donors may face incompatible AI governance contractual obligations simultaneously. The compliance context is contractual, not regulatory — and the remedies are financial and reputational rather than legal.

### nFADP Art. 13 Right to Explanation in Beneficiary Service Delivery

The nFADP Art. 13 right to explanation applies to Geneva NGOs deploying AI in beneficiary-facing service delivery. Article 13 requires that data subjects receive intelligible explanations of AI-assisted decisions affecting them. For NGOs, this creates a specific compliance challenge: AI tools used in case management, beneficiary communications, and service delivery typically do not produce explainable outputs in the sense Art. 13 requires. The NGO is required to provide the explanation; the AI system does not provide it; the staff member who would provide it cannot reconstruct what the AI actually did. This is not a communications gap — it is a structural mismatch between legal obligation and operational reality. The nFADP does not provide a safe harbor for NGOs that cannot produce explanations of AI-assisted decisions; the obligation is present tense and unfulfilled across the Geneva NGO sector.

### FADP Data Minimization and Purpose Limitation as AI Tool Selection Constraints

The FADP's purpose limitation and data minimization principles create specific constraints on AI tool selection for Geneva NGOs that are not being addressed in tool adoption decisions. Purpose limitation requires that data collected for specific purposes not be used for different purposes without separate authorization. Data minimization requires that only data necessary for the declared purpose be collected. AI tools designed for general-purpose use — general language models, general analytics platforms — operate on the assumption that maximum data produces best outputs. This is architecturally incompatible with FADP purpose limitation and data minimization obligations. The compliance context requires NGOs to select AI tools that are designed for the specific purposes the NGO serves — a constraint that narrows available tools significantly and is rarely applied at the selection stage. Geneva NGOs deploying general-purpose AI tools in beneficiary service contexts are likely operating outside FADP purpose limitation without organizational awareness.

### FADP Art. 22 Automated Decision-Making Rights in NGO Program Context

FADP Art. 22 grants data subjects the right not to be subject to decisions based solely on automated processing that produce legal effects or significantly affect them. For Geneva NGOs using AI in program eligibility decisions, beneficiary allocation, or service delivery prioritization, this article creates a specific obligation: any AI-assisted decision that significantly affects a beneficiary cannot be made solely on the basis of automated processing without human review. The operational reality: NGO case management systems that use AI to sort, prioritize, or recommend decisions are making automated decisions within the meaning of Art. 22. The human review requirement is not being systematically implemented in Geneva NGO AI deployments. The compliance context is not being addressed because the relevant decision point — when does an AI recommendation become an automated decision — is not being identified in NGO AI governance practice.

### Data Residency and Cross-Border Transfer Compliance for Geneva NGO AI Tools

Geneva NGOs deploying AI tools for program delivery face a specific data residency and cross-border transfer compliance challenge that is not addressed in their current governance documentation. Many widely-used AI tools in the NGO sector — particularly tools adopted via free or low-cost tiers — process data on servers outside Switzerland. The Swiss FADP and the revised FADP (nFADP, in force 2023) impose specific requirements for cross-border data transfers, including adequacy assessment of the destination country's data protection level and, for certain transfers, explicit authorization requirements. For Geneva NGOs receiving institutional donor funding, cross-border data transfer compliance is further complicated by donor conditions that may require specific data residency standards as a condition of funding. The compliance context: tool adoption decisions that appear operational are simultaneously data residency decisions, and the compliance implications are not being surfaced at the decision point. No Geneva advisory specifically addresses data residency compliance for resource-constrained NGOs with limited IT capacity and multiple overlapping compliance obligations.

---

## 05 — Lead Magnet Draft

In Sergio's voice — calm, precise, executive-grade, no hype.

### English Version

**Geneva NGO AI Program Integrity Briefing**
*A 90-minute structured briefing for executive directors and program managers of Geneva-based NGOs, international organizations, and tech nonprofits*

---

**The Problem Nobody Has Named**

Your AI deployments are generating accountability exposure across multiple dimensions simultaneously — donor reporting, nFADP compliance, board fiduciary duty, and operational integrity — with no framework connecting these dimensions. Each obligation is addressed separately. The overlaps are invisible. The gaps are structural.

You deployed tools that solved immediate operational problems. Those tools are now embedded in program design. The programs cannot be disentangled from the tools without redesign. Vendor changes are not signaled. Processor relationships evolve without notification. Board approvals were written in language that creates liability rather than discharging it. Your nFADP documentation describes what you mapped at deployment — not what is actually happening with beneficiary data today.

You cannot see the full picture because no one is positioned to show it to you.

---

**What This Briefing Addresses**

This briefing is designed for executive directors and program managers of Geneva-based NGOs, international organizations, and tech nonprofits who are deploying AI in program delivery, data management, or communications — and who are beginning to understand that the governance obligations surrounding those deployments are not simple, not coordinated, and not being addressed by the frameworks currently available.

Over 90 minutes, we cover six specific accountability surfaces that Geneva NGO leadership teams are encountering with increasing frequency, each of which has a distinct structure and requires a distinct response:

1. Program embedding risk: how AI tool adoption decisions made at program design stage become structural constraints that cannot be reversed without program redesign — and how to evaluate this risk before embedding occurs.

2. Processor-of-record drift: the specific nFADP compliance erosion that occurs when AI tool ownership changes and the NGO's documented processor relationship no longer reflects reality — detection methodology and minimum response protocol for resource-constrained organizations.

3. Board approval language: what a Geneva NGO board resolution approving AI deployment must specifically contain in order to constitute a proper discharge of fiduciary duty under Art. 75 ZGB — and why the language currently in use almost certainly does not meet this standard.

4. Donor reporting provenance: how to document the provenance of AI-assisted program outputs in a way that satisfies institutional donor accountability requirements — and why the current approach of producing reports that appear adequate is generating exposure rather than protecting the organization.

5. Decision-authority and accountability dissociation: the specific structural problem in NGO governance where the person who selects an AI tool is not the person who bears accountability for its governance failures — and what this means for how governance architecture should be designed.

6. Dual accountability dissonance: the structural conflict between AI-generated quantitative metrics and AI-assisted qualitative narrative in donor reporting — and a methodology for ensuring consistency between the two.

---

**Format and Investment**

The Geneva NGO AI Program Integrity Briefing is delivered as a single 90-minute session, in English or French, in person or via secure video conference.

Investment: CHF 1,800 per session.

A written summary is provided within 48 hours of the briefing, covering the six accountability surfaces, the specific risks each creates, and the minimum documentation architecture required to address each dimension. The summary is designed to be usable internally for board reporting, donor communication, and nFADP compliance documentation.

---

**Engagement Process**

Briefings are arranged by direct enquiry. The briefing format is designed to give you a clear assessment of where your organization stands across the six accountability dimensions — whether you are in a pre-deployment situation, an active deployment situation, or a migration situation — in a single session. If further work is warranted, we discuss specific options at the end of the briefing.

Contact: sergio@digitalcoa.ch

---

### Version française

**Briefing sur l'intégrité des programmes IA pour les ONG genevoises**
*Une session structurée de 90 minutes pour directeurs exécutifs et responsables de programmes d'ONG basées à Genève, d'organisations internationales et de nonprofits technologiques*

---

**Le problème que personne n'a nommé**

Vos déploiements d'IA génèrent simultanément une exposition de responsabilité dans plusieurs dimensions — reporting donateur, conformité nFADP, devoir fiduciaire du conseil, intégrité opérationnelle — sans aucun cadre reliant ces dimensions. Chaque obligation est traitée séparément. Les recoupements sont invisibles. Les lacunes sont structurelles.

Vous avez déployé des outils qui résolvaient des problèmes opérationnels immédiats. Ces outils sont maintenant intégrés dans la conception des programmes. Les programmes ne peuvent pas être séparés des outils sans refonte. Les changements de fournisseurs ne sont pas signalés. Les relations de traitement évoluent sans notification. Les approbations du conseil ont été rédigées dans un langage qui crée une responsabilité plutôt que d'en décharger. Votre documentation nFADP décrit ce que vous avez cartographié lors du déploiement — pas ce qui se passe réellement avec les données des bénéficiaires aujourd'hui.

Vous ne pouvez pas voir l'image complète parce que personne n'est positionné pour vous la montrer.

---

**Ce que ce briefing aborde**

Ce briefing est conçu pour les directeurs exécutifs et responsables de programmes d'ONG basées à Genève, d'organisations internationales et de nonprofits technologiques qui déploient l'IA dans la livraison de programmes, la gestion des données ou les communications — et qui commencent à comprendre que les obligations de gouvernance autour de ces déploiements ne sont pas simples, ne sont pas coordonnées, et ne sont pas traitées par les cadres actuellement disponibles.

En 90 minutes, nous abordons six surfaces de responsabilité spécifiques que les équipes de direction des ONG genevoises rencontrent avec une fréquence croissante, chacune ayant une structure distincte et nécessitant une réponse distincte :

1. Risque d'intégration программы : comment les décisions d'adoption d'outils IA prises au stade de conception du programme deviennent des contraintes structurelles qui ne peuvent pas être inversées sans refonte du programme — et comment évaluer ce risque avant l'intégration.

2. Dérive de l'enregistrement des processeurs : l'érosion spécifique de la conformité nFADP qui se produit lorsque la propriété de l'outil IA change et que la relation de processeur documentée de l'ONG ne reflète plus la réalité — méthodologie de détection et protocole de réponse minimum pour les organisations aux ressources limitées.

3. Langage d'approbation du conseil : ce qu'une résolution du conseil d'administration d'une ONG genevoise approuvant le déploiement de l'IA doit spécifiquement contenir pour constituer une décharge appropriée du devoir fiduciaire en vertu de l'art. 75 CO — et pourquoi le langage actuellement utilisé ne répond presque certainement pas à cette norme.

4. Provenance du reporting donateur : comment documenter la provenance des résultats de programmes assistés par l'IA d'une manière qui satisfait aux exigences de responsabilité des donateurs institutionnels — et pourquoi l'approche actuelle de produire des rapports qui semblent adéquats génère une exposition plutôt que de protéger l'organisation.

5. Dissociation entre autorité de décision et responsabilité : le problème structurel spécifique dans la gouvernance des ONG où la personne qui sélectionne un outil d'IA n'est pas la personne qui porte la responsabilité de ses échecs de gouvernance — et ce que cela signifie pour la façon dont l'architecture de gouvernance devrait être conçue.

6. Dissonance de responsabilité double : le conflit structurel entre les métriques quantitatives générées par l'IA et le récit qualitatif assisté par l'IA dans le reporting donateur — et une méthodologie pour assurer la cohérence entre les deux.

---

**Format et investissement**

Le Briefing sur l'intégrité des programmes IA pour les ONG genevoises est délivré en une seule session de 90 minutes, en anglais ou en français, en personne ou par visioconférence sécurisée.

Investissement : CHF 1,800 par session.

Un résumé écrit est fourni dans les 48 heures suivant le briefing, couvrant les six surfaces de responsabilité, les risques spécifiques que chacune crée, et l'architecture de documentation minimum requise pour-addresser chaque dimension. Le résumé est conçu pour être utilisable en interne pour le reporting au conseil, la communication avec les donateurs et la documentation de conformité nFADP.

---

**Processus d'engagement**

Les briefings sont arrangés par demande directe. Le format de briefing est conçu pour vous donner une évaluation claire de la position de votre organisation à travers les six dimensions de responsabilité — que vous soyez dans une situation de pré-déploiement, de déploiement actif ou de migration — en une seule session. Si un travail supplémentaire est justifié, nous discutons des options spécifiques à la fin du briefing.

Contact : sergio@digitalcoa.ch

---

## 06 — Findings Summary

Six net-new insights distinct from C214–C247 Phase 04.

### Finding 1: Program Embedding Architecture Failure as Primary NGO AI Governance Problem

The dominant failure mode in Geneva NGO AI deployment is not technical failure, governance negligence, or vendor misconduct — it is architectural incompatibility between program design and tool lifecycle. When AI tools are adopted at the program design stage without lifecycle modelling, they become structurally embedded in program logic. The embedding creates a dependency that cannot be reversed without program redesign, which the NGO cannot afford and which donors did not fund. This is distinct from all prior Phase 04 findings: it is not about board approval quality, not about documentation adequacy, not about donor questionnaire response, and not about staff governance competence. It is about the temporal structure of the decision — the embedding happens before governance architecture exists, making governance architecture structurally unable to prevent the problem it would need to address. The implication for advisory positioning: the governance intervention must precede program design, not follow deployment.

### Finding 2: Processor-of-Record Drift as a Distinct nFADP Compliance Erosion Mechanism

The compliance erosion that occurs when AI tool ownership changes is structurally distinct from the consent architecture problem, the purpose limitation problem, and the data minimization problem — all of which have been addressed in prior NGO Phase 04 cycles. Processor-of-record drift is a documentation integrity failure: the NGO did everything correctly at the time of deployment (data flow mapping, processor documentation, terms acceptance) and is now non-compliant through no decision it made. The mechanism is specific: AI tool market consolidation is increasing acquisition frequency, and each acquisition can change the processor relationship without triggering any notification obligation to the NGO. The compliance consequence is silent and compounding. This finding is net-new: prior NGO Phase 04 cycles addressed vendor lock-in, tool deprecation, and free-tier lifecycle cost — none addressed the specific compliance erosion mechanism of processor relationship change without notification.

### Finding 3: Board Approval Language as a Liability-Creating Instrument with No Standard Form

Geneva NGO board resolutions approving AI deployment are, in most cases, creating personal liability for board members rather than discharging it — because the language of the approval does not specify the elements required for a proper fiduciary discharge under Art. 75 ZGB. The problem is not that boards are approving AI deployments; it is that the approval resolution language is generic, not specific, and therefore does not constitute evidence of informed fiduciary oversight. This is distinct from all prior Phase 04 findings: the board training gap, the policy staleness problem, and the accountability-without-authority problem have all been addressed in prior cycles. The specific problem of board resolution language as a liability-creating vs liability-discharging instrument is new, and the absence of a standard form means every Geneva NGO board is independently exposed without visibility into that exposure.

### Finding 4: Dual Accountability Dissonance as Structural Conflict in AI-Assisted Donor Reporting

The specific structural conflict between AI-generated quantitative metrics and AI-assisted qualitative narrative in institutional donor reporting is distinct from prior Phase 04 findings about donor questionnaire compliance theatre, program reconstruction failure, or documentation adequacy. The dissonance arises because two separate donor accountability mechanisms — quantitative outcome metrics and qualitative program narrative — both depend on the same AI tool, producing outputs that cannot be independently verified for consistency with each other or with actual program delivery. The conflict is not about accuracy; it is about authentication. The NGO cannot demonstrate that the numbers and the story come from a consistent operational reality, because the AI tool does not produce provenance documentation connecting metric generation and narrative production. This finding is net-new: no prior Phase 04 cycle addressed the dual accountability structure of NGO donor reporting as a specific AI governance problem.

### Finding 5: Decision-Authority and Accountability Dissociation as Structural NGO Governance Design Failure

The structural dissociation between the staff member who selects an AI tool (optimizing for operational function) and the executive director or board member who bears accountability for its governance failures is a specific architectural problem in NGO AI governance — distinct from the IT capacity constraint, the staff governance competence gap, and the board oversight gap all addressed in prior Phase 04 cycles. This dissociation means that tool selection decisions are made against criteria that do not include the governance burden they create. The problem is not individual — it arises from the organizational structure, not from the competence or diligence of any individual. The design solution requires governance mechanisms that attribute governance cost to the decision point where tool selection occurs — making the person who selects a tool accountable for the governance requirements that selection creates. No prior Phase 04 cycle addressed this specific structural design problem.

### Finding 6: Geneva International Org Accountability Gap as Specifically Swiss Structural Phenomenon

Geneva-based offices of international organizations face a specific accountability gap that arises from the combination of Swiss legal obligations applying to the Geneva office and institutional decision-making occurring at headquarters level — where Swiss law does not apply and Swiss governance standards are not operational. This is distinct from the HQ-accountability paradox addressed in prior NGO Phase 04 cycles: it is not about the Geneva office being accountable for HQ decisions (the accountability gap), but about the specific structural problem of decision authority and accountability attribution when Swiss legal obligations fall on an entity that does not control the decisions generating those obligations. The finding is specific to Geneva's position as host to international organizations with legal personality separate from Swiss domestic law — a structural property that creates accountability gaps no other Swiss jurisdiction faces in this specific form. No prior Phase 04 cycle addressed the accountability attribution problem at this level of structural specificity.

---

*Cycle C248 Phase 04 complete. Written to: `/data/.openclaw/workspace/digitalcoa.ch/private/market_research/phases/ph04_geneva_ngotech/20260428_phase04_geneva_ngotech_cycle248.md`*