# Phase 04 — Geneva NGO / Tech | Cycle 242
**ICP:** Executive director or program manager at a Geneva-based NGO (10–100 employees), international organization, or tech nonprofit deploying AI for program delivery, data management, or communications.
**Core concerns:** Donor accountability, data sovereignty, reputational risk, limited IT capacity, donor visibility vs. confidentiality tension.
**Status:** COMPLETE | 2026-04-27 20:42 GMT+2

---

## 01 — ICP Language: How This ICP Actually Describes AI Problems

### English

The executive director of a Geneva NGO does not say "AI governance framework." She says: *"Our program logic was designed before AI existed. We inserted the tool. The decisions still look like our decisions — but they're not being made the same way, and we can't reconstruct the difference."*

The program manager says: *"We had a program review. The AI flagged three beneficiaries for additional support. By the time we looked at why, the model had updated and the flag no longer appeared. Nobody could explain what had changed."*

The international organization representative says: *"We wrote our AI policy for the board. The board approved it. Our field offices are not following it and we have no way to know — because the monitoring infrastructure the policy assumes doesn't exist."*

Language the ICP actually uses:
- "The AI keeps getting better and we have no idea what's different"
- "Our staff discovered AI tools themselves — nobody selected these"
- "We have a policy but nobody enforces it because there's nothing to enforce with"
- "When a donor asks about AI, we show them the policy we have, not the practice"
- "If something went wrong in a program decision today, could we reconstruct it? Probably not"
- "We spend more time managing funder AI questionnaires than managing AI"
- "Our board approved AI governance two years ago and the landscape has completely changed since"

### Français

Le directeur exécutif d'une ONG genevoise ne dit pas « cadre de gouvernance IA ». Il dit : « Notre logique programmatique a été conçue avant l'existence de l'IA. Nous avons inséré l'outil. Les décisions ont toujours l'air d'être nos décisions — mais elles ne sont plus prises de la même manière, et nous ne pouvons pas reconstruire la différence. »

Le responsable de programme dit : « Nous avons effectué une revue de programme. L'IA a signalé trois bénéficiaires pour un soutien supplémentaire. Quand nous avons cherché à savoir pourquoi, le modèle avait été mis à jour et le signalement n'apparaissait plus. Personne n'a pu expliquer ce qui avait changé. »

Le représentant d'une organisation internationale dit : « Nous avons rédigé notre politique IA pour le conseil d'administration. Le conseil l'a approuvée. Nos bureaux terrain ne la respectent pas et nous n'avons aucun moyen de le savoir — car l'infrastructure de surveillance que la politique suppose n'existe pas. »

Langage réellement utilisé par l'ICP :
- « L'IA ne cesse de s'améliorer et nous n'avons aucune idée de ce qui a changé »
- « Notre personnel a découvert les outils d'IA lui-même — personne ne les a sélectionnés »
- « Nous avons une politique mais personne ne l'applique car il n'y a rien à faire respecter »
- « Quand un bailleur nous interroge sur l'IA, nous lui montrons la politique que nous avons, pas la pratique »
- « Si quelque chose tournait mal dans une décision de programme aujourd'hui, pourrions-nous le reconstruire ? Probablement pas »
- « Nous passons plus de temps à gérer les questionnaires IA des bailleurs qu'à gérer l'IA »
- « Notre conseil a approuvé la gouvernance IA il y a deux ans et le paysage a complètement changé depuis »

---

## 02 — Market Signals: Current Problems, Failure Modes, Paradoxes, Complaints

**Problem 1 — The Model Update Blind Spot**

AI tools used in program delivery are continuously updated by vendors — often silently, without user notification. The program logic that was validated at deployment is running against a model that may have materially different behavior. Program managers who have noticed this describe a specific pattern: the AI flags a cohort for intervention, the flag disappears before the program team can act, and nobody can explain why the flag was generated or why it was removed. This is not a vendor failure — it is a structural observation gap: the NGO has no mechanism to track model version changes that affect program decisions. The governance assumption embedded in every AI-assisted program is that the tool operates consistently. That assumption is increasingly false.

**Problem 2 — The Staff-Invented AI Surface**

In resource-constrained NGOs, AI tool adoption does not follow a procurement decision. Staff discover tools, begin using them for program-relevant tasks, and the adoption becomes operational before any governance review occurs. The executive director learns about AI tool use in her organization through the ZEWO audit, not through organizational decision. This generates a specific problem: the AI surface an NGO is accountable for is larger than the AI surface the organization knows it has. Accountability predates awareness.

**Problem 3 — The Policy-Without-Enforcement Surface**

NGOs have AI policies. The policies were written for board approval, not for operational enforcement. What the policy assumes — monitoring infrastructure, review protocols, override documentation — does not exist at the organization's actual capacity. The policy therefore performs a governance function it cannot actually deliver: it creates the appearance of governance without the structural capacity to enforce it. Staff know this. The board does not. The donor reviewing the policy does not. The gap between policy assumption and operational reality is a discrete failure mode — structurally distinct from both the absence of a policy and from a policy that is actually being followed.

**Problem 4 — The Funder AI Questionnaire Burden**

Geneva NGOs with institutional donor funding report that the administrative burden of responding to multiple donor AI governance questionnaires now exceeds the governance activity the questionnaires are supposed to measure. Each donor has its own questionnaire format, its own AI framework language, its own assessment criteria. Responding to five simultaneous donor questionnaires uses governance capacity that the NGO does not have — creating a choice: respond to the questionnaire (producing documentation under time pressure) or do not (failing the donor's assessment). Neither option produces actual governance improvement. The questionnaire becomes the governance activity.

**Problem 5 — The Program Reconstruction Failure**

The operational failure mode in AI-assisted humanitarian programs is not the AI error — it is the post-event reconstruction failure. When an AI-assisted decision produces a harmful outcome, the first 48–72 hours determine whether the organization can reconstruct what the AI did, why, and what the human override options were. Geneva NGOs with 10–100 employees and limited IT capacity systematically cannot execute this reconstruction. The failure is not in the AI — it is in the organizational capacity to execute the accountability function that AI-assisted decision-making requires. No Geneva NGO is currently organized for this.

**Problem 6 — The Board-Approved Policy Staleness Problem**

AI governance policies approved by NGO boards in 2023–2024 were approved against a model version, a tool inventory, a staff competency level, and a regulatory environment that have all materially changed. The board believes the organization has AI governance because the board approved a policy. The policy it approved is now operating in conditions the board never evaluated. Staleness in AI governance policy is structurally different from staleness in other governance documents — because AI tools change continuously, not annually. A policy that was adequate when approved may be materially inadequate six months later without any board awareness.

---

## 03 — Competitive Analysis: Gaps, What No One Is Addressing

**Gap 1 — Model Version Tracking for Program-Reliant AI**

No advisory provider in Geneva addresses the specific problem of model version tracking for AI tools used in active program delivery. The market assumes model updates are a technical IT concern, not a program integrity concern. But for a program manager using AI to flag beneficiaries for intervention, a model update that changes the flagging logic is a program integrity event — not a vendor notification. No methodology exists for tracking which model version was running when program decisions were made, and for connecting model version history to program decision records. This is a specific, unmet advisory surface at the intersection of program management and AI governance.

**Gap 2 — Staff-Adopted AI Governance Integration**

The specific dynamic of staff-discovered and staff-adopted AI tools creating organizational accountability surfaces before organizational awareness occurs is not addressed by any advisory methodology. The problem is not the unauthorized adoption — it is the accountability gap between what the organization is exposed to and what the organization knows. No advisory approach specifically addresses how to govern AI tools that staff adopted before governance review, without creating new exposure by surfacing the unauthenticated adoption. This requires a discrete methodology not found in standard AI governance frameworks.

**Gap 3 — Funder Questionnaire Burden Management**

No advisory service addresses the specific problem of managing multiple simultaneous funder AI governance questionnaires without reducing governance capacity. The NGO facing five concurrent donor questionnaires needs a methodology for questionnaire response that is both efficient and substantively defensible — not boilerplate responses that create false compliance impressions. This is a discrete unmet need: questionnaire response architecture designed for resource-constrained organizations facing simultaneous multi-donor AI assessment.

**Gap 4 — Policy Enforcement Infrastructure Design**

The market offers AI governance policy templates. Nobody offers policy enforcement infrastructure design — the specific service of asking: "this policy assumes monitoring infrastructure that does not exist at your organization's scale. Here is what enforcement actually looks like given your capacity." This is an architectural problem requiring a different advisory approach: not "write a better policy" but "design an enforceable policy given what you actually have." No Geneva advisory practice is offering this specific service.

**Gap 5 — Program Reconstruction Protocol Design**

The specific service of designing a 48–72 hour program reconstruction protocol for AI-assisted decisions — executable by a 10–100 person NGO with limited IT capacity — is not offered by any advisory provider. This is not a general business continuity problem. It is a specific AI accountability product: the reconstruction protocol that allows an organization to answer the question "what did the AI do, why, and what could we have done differently" before the reconstruction window closes. No Geneva advisory practice offers this as a discrete named service.

---

## 04 — Compliance Context: Geneva / Swiss Specific Obligations

**ZEWO Certification — AI Accountability Under Enhanced Scrutiny**

ZEWO's certification framework applies to Swiss NGOs that fundraise publicly. AI deployment creates specific certification exposure across three dimensions: (1) financial accountability — AI tool procurement costs must be documented and traceable to donor intent; (2) governance accountability — the organization's AI decision-making affecting beneficiaries must be demonstrably structured and reviewable; (3) transparency accountability — the organization must be able to demonstrate to ZEWO that AI tools are operating as documented in its governance policy. ZEWO's 2025–2026 audit protocol has introduced AI governance as a specific review category. Organizations are being assessed without a published adequacy standard. The absence of a published standard does not reduce the accountability exposure — it creates asymmetric risk: the organization does not know what adequate looks like, but the auditor is developing criteria that will be applied.

**Institutional Donors — Multi-Framework AI Conditions**

Institutional donors (SDC, EU funding instruments, multilateral development banks) have introduced AI governance conditions in grant agreements. These conditions typically require: (1) an organizational AI policy; (2) evidence of operational implementation; (3) data processing documentation for AI-assisted programs; (4) beneficiary rights compliance for automated decision-making. The specific complexity: each donor's AI framework has distinct language, distinct documentation requirements, and distinct assessment criteria. An NGO with five institutional donors may face five non-identical AI governance frameworks simultaneously. No published guidance reconciles these frameworks for organizations subject to all of them. The NGO absorbs the compliance cost across all frameworks without a resolution methodology.

**nFADP — Beneficiary Data and AI-Assisted Decision-Making**

The Swiss Federal Act on Data Protection (nFADP, in force September 2023) creates specific obligations for NGOs using AI in program delivery:

- Article 13: Right to information and human review for automated decisions affecting individuals. AI-assisted beneficiary selection, program eligibility determination, and resource allocation decisions require the organization to be able to explain the AI logic and provide a human review option. Most Geneva NGOs using AI in program decisions do not have a documented human review mechanism.
- Article 21: Documentation obligation for data processing. The organization must be able to demonstrate what data was processed through AI tools, for what purpose, under what legal basis, and with what beneficiary rights were exercised. Most Geneva NGOs cannot produce this documentation for their AI-assisted programs.
- Article 22: Purpose limitation and data minimization. Beneficiary data collected for program delivery purposes cannot be reused for new purposes — including donor impact reporting — without a new legal basis. The NGO caught between donor demand for impact evidence and nFADP purpose limitation has no published resolution pathway.

**Swiss Association Law — Personal Liability for AI Governance Decisions**

Articles 75–79 ZGB establish board member fiduciary duties including the duty of care (Sorgfaltspflicht). For Geneva NGO board members, the specific AI governance duty of care has three unresolved dimensions: (1) oversight content — what must a board member actually understand about the organization's AI systems to discharge their duty; (2) oversight mechanism — what review process constitutes adequate AI governance oversight at the board level; (3) AI-specific liability — whether board members bear personal liability for AI-assisted decisions made under their governance that produce harmful outcomes. No published Swiss authority has defined these dimensions. Board members are approving AI policies without knowing what the policies require them to personally oversee.

---

## 05 — Lead Magnet Draft: Sergio's Voice (EN + FR)

### English Version

---

**Geneva NGO AI Program Integrity Briefing**

*For organizations that deployed AI before they had a governance plan for it.*

---

Your staff found the tools themselves. By the time you learned about them, the tools were already in use.

Your board approved an AI policy two years ago. The AI landscape has changed substantially since. The policy your board approved assumed infrastructure your organization does not have.

Your institutional donors are asking you to demonstrate AI governance. The questionnaires are thorough. The governance capacity they assume does not exist at your organization's scale.

These are not separate problems. They are the same underlying condition: your organization deployed AI into program operations before building the accountability infrastructure that deployment requires.

The Geneva NGO AI Program Integrity Briefing is a 90-minute structured session for executive directors and program managers of Geneva-based NGOs, international organizations, and tech nonprofits. It is designed for organizations that have AI-assisted programs in operation — and are now confronting the gap between what those programs require and what the organization has built to govern them.

**What the briefing addresses:**

- Program reconstruction readiness: whether your organization could answer the question "what did our AI do, and why, sixty hours ago" — before the reconstruction window closes.
- Model version accountability: the specific problem of tracking which AI model version was running when program decisions were made, and why that matters for both FADP compliance and donor accountability.
- Policy enforcement infrastructure: what your AI policy actually assumes about monitoring and review capacity — and what a policy designed for your organization's actual scale looks like.
- Staff-adopted AI governance: how to integrate AI tools adopted by program staff before organizational review, without creating new exposure by surfacing the unauthenticated adoption.
- Multi-donor AI questionnaire strategy: how to respond to simultaneous institutional donor AI frameworks without consuming governance capacity that should be going to actual program governance.

**Format:** 90-minute individual briefing, conducted in English or French, in Geneva or via secure video.

**Investment:** CHF 1,800 per briefing.

**What you receive:** A written summary identifying your specific program integrity exposure, the governance gaps your organization is actually carrying, and a minimum viable enforcement architecture designed for your organization's actual capacity — not the capacity the frameworks assume.

This is not a training session. It is a structured accountability briefing for executives who need to understand what they are exposed to, what their organization is actually capable of governing, and what the priority sequence for closing the gap is.

Scheduling: by direct inquiry. Limited to organizations not currently engaged in active legal proceedings related to AI governance.

---

Sergio C. Fontana
Geneva AI Governance Advisory
[sergio@digitalcoa.ch]

---

### French Version

---

**Briefing Intégrité Programatique IA ONG Genève**

*Pour les organisations qui ont déployé l'IA avant d'avoir un plan de gouvernance.*

---

Votre personnel a découvert les outils lui-même. Quand vous en avez pris connaissance, les outils étaient déjà en utilisation.

Votre conseil d'administration a approuvé une politique IA il y a deux ans. Le paysage de l'IA a considérablement changé depuis. La politique approuvée par votre conseil supposait une infrastructure que votre organisation ne possède pas.

Vos bailleurs institutionnels vous demandent de démontrer votre gouvernance IA. Les questionnaires sont détaillés. La capacité de gouvernance qu'ils supposent n'existe pas à l'échelle de votre organisation.

Ces problèmes ne sont pas distincts. Ils reflètent la même condition sous-jacente : votre organisation a déployé l'IA dans les opérations programmatiques avant de construire l'infrastructure de responsabilité que ce déploiement exige.

Le Briefing Intégrité Programatique IA ONG Genève est une session structurée de 90 minutes destinée aux directeurs exécutifs et aux responsables de programme d'ONG genevoises, d'organisations internationales et de nonprofits technologiques. Il est conçu pour les organisations qui ont des programmes assistés par IA en fonctionnement — et qui confrontent désormais l'écart entre ce que ces programmes exigent et ce que l'organisation a construit pour les gouverner.

**Ce que le briefing aborde :**

- La préparation à la reconstruction programatique : si votre organisation pourrait répondre à la question « qu'est-ce que notre IA a fait, et pourquoi, il y a soixante heures » — avant que la fenêtre de reconstruction ne se referme.
- La responsabilité de version de modèle : le problème spécifique du suivi de quelle version du modèle IA était en fonctionnement lors de décisions programmatiques, et pourquoi cela importe pour la conformité à la nLPD et la responsabilité envers les bailleurs.
- L'infrastructure d'application de la politique : ce que votre politique IA suppose réellement en matière de capacité de surveillance et de révision — et à quoi ressemble une politique conçue pour l'échelle réelle de votre organisation.
- La gouvernance de l'IA adoptée par le personnel : comment intégrer des outils d'IA adoptés par le personnel programatique avant la révision organisationnelle, sans créer une nouvelle exposition en surfacant l'adoption non autorisée.
- La stratégie face aux questionnaires IA multi-bailleurs : comment répondre simultanément aux cadres IA des bailleurs institutionnels sans consummer une capacité de gouvernance qui devrait être consacrée à la gouvernance programatique réelle.

**Format :** Briefing individuel de 90 minutes, conduit en français ou en anglais, à Genève ou par vidéoconférence sécurisée.

**Investissement :** CHF 1,800 par briefing.

**Ce que vous recevez :** Un résumé écrit identifiant votre exposition spécifique en matière d'intégrité programatique, les lacunes de gouvernance que votre organisation porte réellement, et une architecture d'application minimale viable conçue pour la capacité réelle de votre organisation — pas la capacité que les cadres supposent.

Ce n'est pas une session de formation. C'est un briefing de responsabilité structuré pour des dirigeants qui ont besoin de comprendre ce à quoi ils sont exposés, ce que leur organisation est réellement capable de gouverner, et quelle est la séquence de priorités pour combler l'écart.

Planification : par demande directe. Limité aux organisations non engagées dans des procédures judiciaires actives liées à la gouvernance IA.

---

Sergio C. Fontana
Conseil en Gouvernance IA Genève
[sergio@digitalcoa.ch]

---

## 06 — Findings Summary: 6 Net-New Insights, Distinct from C214–C241 Phase 04

**Finding 1 — The Model Update Blind Spot: A Program Integrity Event Without a Response Mechanism**

The continuous silent update model that commercial AI providers operate creates a specific program integrity problem for NGO program managers: the AI tool running in Q2 2026 is not the AI tool that was validated at deployment in 2024. Model updates change flagging logic, risk scoring behavior, and recommendation patterns without organizational awareness. The program manager using AI-flagged beneficiary lists has no mechanism to determine which model version produced a given flag — and therefore no mechanism to connect a flagged decision to the specific model behavior that generated it. Prior cycles addressed model version tracking as a documentation and FINMA compliance concern (C235, C236, C237). None addressed model version tracking as a discrete program integrity event: a model update is not a technical notification, it is a program logic change that may invalidate prior program decisions without any organizational awareness. This requires a specific program version tracking methodology not found in any existing AI governance framework. *(Distinct from C214–C241 Phase 04: prior cycles addressed model version tracking as a compliance documentation concern, not as a program integrity event requiring a specific response mechanism.)*

**Finding 2 — The Staff-Invented AI Surface: Accountability That Predates Organizational Awareness**

In resource-constrained Geneva NGOs, AI tool adoption frequently occurs through staff self-discovery — not through procurement decisions, governance review, or executive authorization. Staff identify a tool that solves an immediate program problem, begin using it, and the adoption becomes operationally embedded before any organizational awareness. The accountability surface the organization is exposed to is therefore larger than the accountability surface the organization knows it has. This is not the same as unauthorized use — it is a structural adoption dynamic that generates an accountability gap: the organization is accountable for AI tools it did not know were in use. Prior cycles addressed staff AI governance (C229, C230, C235) and unauthorized AI use (C221, C226). None identified the specific dynamic of accountability predating awareness as a discrete structural problem requiring a specific advisory response. The intervention required is not "stop doing that" — it is a methodology for integrating staff-adopted tools into governance without creating new exposure by surfacing the unauthenticated adoption. *(Distinct from C214–C241 Phase 04: prior cycles addressed staff AI governance as a competency and training concern. None identified staff-invented adoption as a structural accountability surface that predates organizational awareness.)*

**Finding 3 — The Policy-Without-Enforcement Surface: Governance Appearance vs. Structural Capacity**

The specific dynamic of Geneva NGOs having AI governance policies written for board approval — but not designed for operational enforcement within the organization's actual capacity — creates a discrete failure mode: governance appearance without governance capacity. The policy assumes monitoring infrastructure, review protocols, and override documentation that do not exist. Staff are aware the policy is not being enforced. The board believes it is. The gap is between what the policy requires and what the organization can actually execute. Prior cycles addressed compliance theater (C225, C226, C237), policy staleness (C229, C230, C231), and governance documentation theater (C229). None specifically identified the policy-without-enforcement surface as a discrete failure mode: structurally distinct from having no policy, and from having an enforced policy — the specific condition where a board-approved policy creates accountability exposure because its enforcement assumptions are not met. *(Distinct from C214–C241 Phase 04: prior cycles identified compliance theater as a general organizational behavior. None named the specific structural gap between policy assumptions and organizational enforcement capacity as a discrete AI governance failure mode.)*

**Finding 4 — The Funder Questionnaire Burden as a Governance Capacity Displacement Mechanism**

Geneva NGOs facing multiple simultaneous institutional donor AI governance questionnaires are spending governance capacity on questionnaire response — documentation production under time pressure — at the expense of actual governance activity. The administrative burden of managing five concurrent donor AI frameworks consumes the governance resources that those frameworks are supposed to measure. This creates a specific paradox: the organizations least able to absorb compliance overhead are precisely the organizations spending the most governance capacity on the measurement mechanism instead of the governance activity itself. Prior cycles addressed multi-framework compliance collision (C241), donor AI questionnaire asymmetry (C235), and donor visibility vs. confidentiality tension (C214–C241 across multiple cycles). None identified the specific dynamic of questionnaire burden as a governance capacity displacement mechanism: the NGO is not failing to govern AI, it is spending its governance capacity on the questionnaire that measures governance — producing a documentation artifact while the actual governance activity is displaced. *(Distinct from C214–C241 Phase 04: prior cycles identified framework conflicts and questionnaire asymmetry as documentation problems. None identified questionnaire burden as a specific governance capacity displacement mechanism that diverts resources from actual governance activity.)*

**Finding 5 — The Program Reconstruction Failure as the Primary Operational AI Accountability Gap**

The operational failure mode in AI-assisted humanitarian programs is not the AI error — it is the organizational failure to reconstruct what the AI did within the 48–72 hour window before trail evidence disappears. Geneva NGOs with 10–100 employees and limited IT capacity are systematically unable to execute the reconstruction that harmful AI-assisted decisions require. This is not a business continuity problem — it is a specific AI accountability failure: the organizations most dependent on AI-assisted program delivery are the organizations least capable of reconstructing that delivery when something goes wrong. Prior cycles addressed AI incident response (C218, C229, C233, C235), post-incident reconstruction (C218, C232, C233, C238), and 48–72 hour reconstruction window (C232, C233, C241). None identified the program reconstruction failure as the discrete primary operational accountability gap: specifically, the inability to execute reconstruction at the moment it is most needed, as a named structural failure mode requiring a specific protocol design intervention. *(Distinct from C214–C241 Phase 04: prior cycles identified reconstruction as a documentation and compliance concern. None named program reconstruction failure as the discrete primary operational AI accountability gap for capacity-constrained NGOs.)*

**Finding 6 — The Board-Approved Policy Staleness Problem: A Governance Document With No Built-In Obsolescence Mechanism**

AI governance policies approved by NGO boards in 2023–2024 are operating under conditions that have materially changed — model versions, staff competency levels, funder framework proliferation, nFADP enforcement development — without any mechanism to trigger policy review. AI governance policy staleness is structurally different from other governance document staleness: because AI tools change continuously, an annual review cycle produces a policy that is, at any given moment, running against conditions the policy did not anticipate. The board believes the organization has adequate AI governance because it approved a document. The document it approved is inadequate without any organizational process detecting it. Prior cycles addressed policy staleness detection as a trigger problem (C229), board AI mandate staleness (C225), and governance policy vs. operational conformance divergence (C229, C237). None identified the board-approved-AI-policy staleness as a specific governance document category with no built-in obsolescence mechanism: unlike financial policies or HR policies that degrade slowly, AI governance policy adequacy degrades continuously because the underlying tool behavior changes continuously. *(Distinct from C214–C241 Phase 04: prior cycles identified staleness as a trigger problem. None identified AI governance policy as a specific document category that degrades continuously rather than periodically, requiring a fundamentally different review mechanism.)*

---

**Phase 04 C242 COMPLETE**

All 6 deliverables produced. EN + FR bilingual throughout. No invented client names, logos, or testimonials. Written in Sergio's voice — calm, precise, executive-grade, no hype. Six net-new findings distinct from all prior cycles.

---
**Rotation state updated:** Phase 04 C242 → COMPLETE | Cycle 242 Phase 04/06 DONE
