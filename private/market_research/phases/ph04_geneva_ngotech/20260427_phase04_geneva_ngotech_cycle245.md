# Phase 04 — Geneva NGO / Tech | Cycle 245
**ICP:** Executive director or program manager at a Geneva-based NGO (10–100 employees), international organization, or tech nonprofit deploying AI for program delivery, data management, or communications.
**Core concerns:** Donor accountability · Data sovereignty · Reputational risk · Limited IT capacity · Donor visibility vs. confidentiality tension
**Completed:** 2026-04-27 22:35 GMT+2

---

## 01 — ICP Language

How this ICP actually describes AI problems.

### English

The Geneva executive director does not say "AI governance documentation gap." She says: *"We have an AI policy. Our board approved it. What happens when the next donor questionnaire arrives is that we send them the policy document — because that is what we have — and hope it is enough."*

The program manager says: *"Our data protection officer reviewed our consent forms. She confirmed we are compliant. She was not asked whether our AI tools use the data we collect in ways the consent forms do not describe. She did not ask. We did not know to ask."*

The international organization representative says: *"Our Geneva office is subject to Swiss law. Our HQ is subject to a different framework. When a donor with a third framework asks us about beneficiary data processed by an AI tool configured by HQ, nobody can tell us which law actually applies to the decision — or who is accountable if something goes wrong."*

The finance officer says: *"We are asked to demonstrate responsible AI use by three separate institutional donors this year. Each asks different questions. None of them has defined what responsible AI use looks like at our scale. We are demonstrating compliance to standards that do not exist."*

Key language signatures:
- *"We sent our AI policy. We did not discuss our AI practice."*
- *"Our consent forms were designed before we deployed AI. Nobody reviewed them after."*
- *"Three donors, three questionnaires, three different answers — and none of them told us what 'adequate' means."*
- *"Our Geneva office is subject to Swiss law. Our programs are subject to something else. We are not sure what."*
- *"When a vendor discontinues a tool we depend on, we have no contractual basis to demand a transition period."*
- *"Our board members are not technical. They approved AI deployment based on staff recommendations. Are they personally exposed for that approval?"*

### Français

Le directeur exécutif genevois ne dit pas « lacune dans la documentation de gouvernance IA ». Il dit : « Nous avons une politique IA. Notre conseil l'a approuvée. Ce qui se passe quand le prochain questionnaire bailleur arrive, c'est que nous envoyons le document de politique — parce que c'est ce que nous avons — et nous espérons que c'est suffisant. »

Le responsable de programme dit : « Notre délégué à la protection des données a examiné nos formulaires de consentement. Il a confirmé que nous sommes conformes. On ne lui a pas demandé si nos outils d'IA utilisent les données que nous collectons d'une manière que les formulaires de consentement ne décrivent pas. Il ne l'a pas demandé. Nous ne savions pas qu'il fallait demander. »

Le représentant de l'organisation internationale dit : « Notre bureau de Genève est soumis au droit suisse. Notre siège est soumis à un autre cadre. Quand un bailleur avec un troisième cadre nous interroge sur les données de bénéficiaires traitées par un outil d'IA configuré par le siège, personne ne peut nous dire quel droit s'applique réellement à la décision — ni qui est responsable si quelque chose tourne mal. »

Le responsable financier dit : « On nous demande de démontrer l'utilisation responsable de l'IA par trois bailleurs institutionnels distincts cette année. Chacun pose des questions différentes. Aucun d'entre eux n'a défini ce à quoi ressemble une utilisation responsable de l'IA à notre échelle. Nous démontrons la conformité à des normes qui n'existent pas. »

Signatures linguistiques clés :
- *« Nous avons envoyé notre politique IA. Nous n'avons pas discuté de notre pratique IA. »*
- *« Nos formulaires de consentement ont été conçus avant le déploiement de l'IA. Personne ne les a révisés depuis. »*
- *« Trois bailleurs, trois questionnaires, trois réponses différentes — et aucun ne nous a dit ce que signifie 'adéquat'. »*
- *« Notre bureau de Genève est soumis au droit suisse. Nos programmes sont soumis à autre chose. Nous ne sommes pas sûrs de quoi. »*
- *« Quand un vendeur discontinue un outil dont nous dépendons, nous n'avons aucune base contractuelle pour exiger une période de transition. »*
- *« Nos membres du conseil ne sont pas techniques. Ils ont approuvé le déploiement de l'IA sur la base de recommandations du personnel. Sont-ils personnellement exposés pour cette approbation ? »*

---

## 02 — Market Signals

Current problems, failure modes, paradoxes, and complaints as observed from the ICP's position.

### Failure Mode 1: The AI Vendor Contractual Wind-Down Gap

Geneva NGOs that have embedded specific AI tools into donor-funded program design face a specific contractual exposure: their grant agreements with institutional donors assume AI-assisted program delivery will continue throughout the program cycle. Their vendor contracts — typically standard terms accepted without negotiation — contain no obligation for the AI vendor to provide advance notice of tool discontinuation, migration support, or transition documentation. When a vendor discontinues or substantially changes a tool mid-program cycle, the NGO is contractually committed to donors and beneficiaries for an approach it can no longer deliver, with no contractual basis to demand vendor cooperation. This is distinct from the general business continuity problem: the NGO has a donor-law obligation to maintain a specific program approach, and no vendor-law right to maintain access to the tool that approach depends on.

### Failure Mode 2: Board Member Personal Liability for AI Approval Under Swiss Association Law

Geneva NGO board members approving AI-assisted program deployments face a specific and unaddressed personal liability exposure under Articles 75–79 of the Swiss Civil Code. Board members bear fiduciary duty for organizational decisions. Approving an AI-assisted program is a board-level decision. The problem: Swiss association law provides no definition of what "adequate AI oversight" means for a board member who is not technically literate in AI systems. Board members approving AI programs based on staff recommendations are making fiduciary decisions they cannot substantively evaluate — and no published Swiss authority has defined what their liability exposure is, or what a discharge mechanism looks like. The exposure is personal and present tense. The guidance does not exist.

### Failure Mode 3: The Consent-Architecture / AI-Practice Disconnect

Geneva NGOs operating under nFADP consent frameworks designed before AI deployment are experiencing a specific structural gap: data protection officers confirm consent form compliance, while AI tools process the same beneficiary data in ways the consent forms do not describe. The gap is not discovered because no one has been asked to evaluate it — the consent form review and the AI deployment review are conducted by different people, in different departments, using different frameworks, with no intersection. When a donor or regulatory inquiry arrives asking whether AI use is covered by existing consent architecture, the answer requires cross-functional analysis that the organization has not conducted and does not have a methodology for.

### Failure Mode 4: Donor AI Evidence Disclosure vs. FADP Anonymization as a Direct Collision

Institutional donors are increasingly requiring Geneva NGOs to provide evidence of AI-assisted decision-making — including beneficiary-level flags, program eligibility determinations, and resource allocation decisions — as part of accountability reporting. FADP Article 8 purpose limitation and general data protection principles require that beneficiary data not be processed in ways that exceed the stated collection purpose and that re-identification risks be managed. The donor's evidence requirement may require documenting AI-assisted decisions at a level of specificity that creates re-identification risk for beneficiaries the NGO has an obligation to protect. Donor visibility and FADP anonymization are not compatible objectives at the evidence specificity level donors are now requesting. The NGO is being asked to be simultaneously compliant with donor accountability requirements and Swiss data protection law, when the two requirements point in opposite directions at the documentation level.

### Failure Mode 5: The Policy Existence vs. Governance Capacity Gap

The most common response Geneva NGOs give to donor AI questionnaires is to provide their AI policy document. The policy exists. It was approved by the board. The problem is structural: the governance capacity to implement the policy — staff AI literacy, tool inventory, version tracking, review triggers, documentation systems — was never built as part of the policy adoption. The policy is a governance intention. The organization has the document. It does not have the infrastructure the document assumes. This is distinct from policy absence: the organization is not non-compliant by omission. It is non-compliant by structural disconnection between the policy it adopted and the organizational capacity required to execute it.

### Failure Mode 6: The International Organization Geneva Office HQ-Law vs. Swiss-Law Structural Conflict

Geneva offices of international organizations face a specific legal complexity that domestic NGOs do not: the Geneva office operates under Swiss law for Swiss-based activities, under HQ-country law through headquarters agreements, and under institutional donor conditions — which may reflect a third country's regulatory framework. When an AI tool configured by HQ processes beneficiary data in Switzerland, Swiss FADP applies. When the same tool's output is reported to an institutional donor under that donor's AI conditions, a second framework applies. When HQ's internal AI governance policy conflicts with Swiss law on a specific question, no published resolution pathway exists. The Geneva office of an international organization may be in compliance with HQ policy, in violation of Swiss law, and unable to demonstrate either position with certainty — simultaneously.

### Paradox: The AI Competence Staircase Nobody Built

Geneva NGOs with board-approved AI policies are experiencing a specific structural failure: the policy assumes a competence development sequence — board AI literacy, executive AI comprehension, staff AI tool training, documentation system implementation — that was never designed or executed. The policy was approved. The staircase was not built. The organization now has a board-approved policy, a staff using AI tools, and no internal competence to bridge the two. Donor questionnaires probing actual AI practice expose this gap before the organization has developed the capacity to demonstrate what the policy requires.

---

## 03 — Competitive Analysis

Gaps in the market: what exists, what is missing, what no one is addressing.

### What Exists

- **UNAIWG / ICRC frameworks**: Comprehensive humanitarian AI ethics. Operationally thorough for large multilaterals. Not implementable at 10–100 employee scale without dedicated compliance infrastructure.
- **ZEWO certification**: Swiss nonprofit accountability baseline. Covers governance and data protection in general terms. Does not provide AI-specific adequacy definitions or tool-specific accountability methodology.
- **Institutional donor AI conditions**: Principles-based obligations in grant agreements — "responsible AI use," "AI governance framework," periodic review — without specifying adequacy at NGO scale.
- **General nFADP guidance**: Available through FDPIC and commercial providers. Not adapted for the NGO context: the purpose limitation collision with donor impact reporting and the beneficiary comprehension gap are not addressed.
- **AI governance advisory for finance and law**: Geneva advisory exists for financial institutions and law firms. It does not exist specifically for the NGO problem set.

### The Gaps

**Gap 1: AI vendor contractual wind-down protection as a specific missing contract layer.**

Geneva NGOs accepting standard AI vendor terms have no negotiated wind-down provisions — no notice period, no transition documentation, no migration support. No advisory provider in Geneva offers AI vendor contract review specifically for NGO program continuity protection. The gap is not in governance policy — it is in the commercial contract layer that determines whether the policy can be executed when the underlying tool is discontinued.

**Gap 2: Board member personal AI liability discharge methodology under Swiss Association Law.**

Swiss association law creates fiduciary liability for board decisions. AI program approval is a board decision. No Geneva authority — bar, association, cantonal government, or legal publisher — has published what "adequate AI oversight" means for a non-technical board member. No discharge mechanism exists. No advisory practice offers a board-member-specific AI governance briefing in Swiss association law terms. The liability is real. The guidance is absent. The gap is specific to Swiss Association Law, Geneva-based, and acute at the NGO scale.

**Gap 3: Cross-functional consent-and-AI gap analysis as a discrete service category.**

The specific problem of evaluating whether AI tool data use is covered by existing nFADP consent architecture requires cross-functional analysis: data protection officer + program manager + AI tool inventory. No Geneva advisory practice offers this as a discrete service. The market serves data protection compliance and AI governance separately. The intersection — where AI tools process data under consent frameworks not designed for AI — is unserved.

**Gap 4: Donor AI evidence disclosure vs. FADP anonymization resolution methodology.**

The specific collision between donor evidence requirements (beneficiary-level AI decision documentation) and FADP anonymization obligations (re-identification risk management) has no published resolution methodology. No Geneva advisory practice addresses the specific design question: what level of AI decision documentation satisfies donor accountability without creating FADP compliance exposure through excessive data specificity? The NGO must satisfy both simultaneously. No methodology exists to do so.

**Gap 5: AI governance policy-to-capacity translation as a discrete advisory product.**

The specific problem of translating a board-approved AI policy into organizational implementation capacity — competence development sequencing, documentation systems, review triggers, tool inventory — is not served by any Geneva advisory practice. The existing market serves policy drafting (consultants write the policy) and AI training (staff learn to use tools). The translation between the policy the board approved and the organizational capacity the policy requires is unaddressed.

**Gap 6: International organization Geneva HQ-Swiss law conflict resolution as an advisory market gap.**

International organizations with Geneva offices face a specific legal complexity that domestic NGOs do not: the intersection of headquarters agreements, Swiss law, and institutional donor conditions creates accountability conflicts with no published resolution pathway. No Geneva advisory practice serves this specific intersection. The organizations are large, have real exposure, and have no clear advisory address for the specific problem of operating AI systems in Geneva under multiple non-reconciling legal frameworks simultaneously.

---

## 04 — Compliance Context

Geneva / Swiss-specific obligations relevant to this ICP.

### ZEWO Certification — The Documentation Completeness Proxy

ZEWO's audit methodology evaluates documentation completeness against published standards. For AI governance, this means a Geneva NGO with a board-approved AI policy, an AI tool in active use, and no connection between the two in actual organizational practice can pass a ZEWO documentation audit — because the documentation exists, and the audit does not probe operational conformance between the policy and the tool. The ZEWO proxy is real: documentation completeness is audited where governance quality resists measurement. The certification value is protection against the wrong risk.

### Institutional Donors — The Evidence Specificity Escalation

Institutional donors (SDC, EU INTPA, FCDO, bilateral development banks) have escalated their AI accountability requirements between 2024 and 2026. The shift is from principles-based questionnaire responses to evidence-specific documentation requests: beneficiary-level AI decision logs, model version records, human review evidence for flagged cases, and aggregate outcome data by AI tool. The escalation is not coordinated across donors — each donor's evidence requirement reflects a different internal framework, a different definition of adequate documentation, and a different expectation of what "responsible AI use" means in evidence terms. Geneva NGOs with multiple institutional donors face evidence requirements that are non-identical, sometimes conflicting, and increasing in specificity faster than the organization's documentation infrastructure is developing.

### Swiss Federal Act on Data Protection (nFADP) — The Consent-AI Architecture Disconnect

nFADP Article 8 purpose limitation requires that personal data be processed only for the purpose stated at collection. Consent forms designed before AI deployment stated purposes that do not include AI-assisted processing. When AI tools process the same data for program decisions, eligibility determination, and beneficiary flagging — purposes not described in existing consent forms — the processing occurs outside the original consent framework. nFADP Article 13 provides the right to explanation and human review for automated decisions. nFADP Article 21 creates documentation obligations for AI-assisted decisions producing legal effects or significant effects. For the Geneva NGO, these obligations apply to AI-assisted decisions that were made under consent frameworks not designed to cover them.

### Articles 75–79 ZGB — Board Member Personal Liability for AI Decisions

Swiss Association Law (Articles 75–79 ZGB) creates personal fiduciary liability for board members of Swiss associations. The Geneva NGO board member who approves AI-assisted program deployment is making a fiduciary decision. Swiss law provides no definition of what "adequate AI oversight" means for a board member without technical AI competence. No published Zurich or Geneva authority has resolved whether approving an AI program on staff recommendation, without independent technical evaluation, creates personal liability under ZGB. The liability question is open. The exposure is personal. The board member cannot purchase professional liability insurance for this specific exposure without an actuarial basis that does not exist.

### Headquarters Agreements and International Organization Immunity

International organizations headquartered in Geneva operate under headquarters agreements that define the relationship with Swiss authorities. These agreements may establish functional immunity for organizational activities — but functional immunity does not resolve which legal framework governs AI-assisted decisions made in Geneva operations. Swiss law applies to activities with effects in Switzerland. HQ-country law applies through organizational policy. When these frameworks conflict on a specific AI decision — which law governs the AI-assisted beneficiary flagging decision made by a tool configured by HQ, in a Geneva office, affecting a Swiss resident? — no published resolution pathway exists. The Geneva office is accountable under both frameworks simultaneously, without a mechanism to reconcile them.

---

## 05 — Lead Magnet Draft

In Sergio's voice. Bilingual EN + FR. Package with price, format, CTA.

---

### English Version

**Geneva NGO AI Governance Clarity Briefing**
*A 90-minute executive briefing for executive directors and program managers at Geneva-based NGOs and tech nonprofits navigating AI accountability across multiple accountability systems simultaneously.*

---

Most Geneva NGOs deploying AI are not failing because they lack a policy. They are failing because they have a policy, a donor accountability requirement, a board approval, and an AI tool in active use — and no methodology for understanding what is actually required across these surfaces, or what their actual exposure is where the surfaces conflict.

The donor wants evidence. The consent form does not cover AI processing. The board approved the policy but cannot evaluate the AI. The vendor may discontinue the tool before the program cycle completes. Swiss law applies to decisions your HQ controls. No single framework resolves what is required. You are managing multiple accountability systems that do not reference each other, with an organizational structure not designed for any of them.

This briefing is designed for Geneva NGO executives who need to understand what they are actually carrying — across donor accountability, Swiss law, board fiduciary responsibility, and the practical constraints of limited IT capacity and small staff.

**What the briefing covers:**

The first segment maps your current AI tool deployments against your active donor conditions, your nFADP consent architecture, and your board-approved policy. The objective is not a compliance checklist — it is an exposure map. Where does your policy assume governance infrastructure you have not built? Where does your donor evidence requirement conflict with your FADP anonymization obligation? Where does Swiss law apply to an AI decision your HQ controls?

The second segment addresses the specific problem of board member personal liability under Articles 75–79 ZGB. What does your board's AI approval actually expose board members to personally? What would a discharge mechanism look like given current Swiss Association Law? What is the minimum documentation record a board member needs to demonstrate adequate oversight — not technical evaluation, but oversight that Swiss law would recognize as substantively sufficient?

The third segment covers AI vendor contract review — specifically the wind-down provisions, notice obligations, and transition documentation rights that your current vendor contracts either do not contain or contain in vendor-favorable language. What is your program's exposure if the AI tool it depends on is discontinued before the program cycle completes? What should you have negotiated?

The fourth segment closes with a prioritized sequence: which gaps to close first given your current donor obligations, your current nFADP exposure, and your organizational capacity.

**Format:** 90 minutes, secure video call, bilingual EN/FR. Written summary delivered within five business days.

**Investment:** CHF 1,800 per briefing.

**What you receive:**
- Pre-briefing organizational AI inventory questionnaire (15 minutes, submitted in advance)
- 90-minute structured briefing with Sergio C. Ricci
- Written summary identifying your specific exposure across donor accountability, Swiss law, board liability, and vendor contracts
- 30-day follow-up question window

**CTA:** Write to sergio@digitalcoa.ch with "NGO Briefing" in the subject line. Include your organization's name, your role, and a brief description of your current AI tool deployments and active donor conditions. If a donor questionnaire deadline or board meeting is approaching, mention this in your opening. I prioritize briefings where the timing is active.

---

Sergio C. Ricci
Geneva AI Governance Advisory
[sergio@digitalcoa.ch]

---

### Version française

**Briefing Clarté Gouvernance IA ONG Genève**
*Un briefing exécutif de 90 minutes pour les directeurs exécutifs et les responsables de programme d'ONG genevoises et d'organisations à but non lucratif technologiques naviguant la responsabilité IA sur plusieurs systèmes de responsabilité simultanément.*

---

La plupart des ONG genevoises déployant l'IA ne failissent pas parce qu'elles manquent de politique. Elles failissent parce qu'elles ont une politique, une exigence de responsabilité donateur, une approbation du conseil et un outil d'IA en usage actif — et aucune méthodologie pour comprendre ce qui est réellement requis sur ces surfaces, ni quelle est leur exposition réelle là où les surfaces entrent en conflit.

Le donateur veut des preuves. Le formulaire de consentement ne couvre pas le traitement par l'IA. Le conseil a approuvé la politique mais ne peut pas évaluer l'IA. Le vendeur peut discontinuer l'outil avant la fin du cycle programmatique. Le droit suisse s'applique aux décisions que votre siège contrôle. Aucun cadre unique ne résout ce qui est requis. Vous gérez plusieurs systèmes de responsabilité qui ne se référencent pas mutuellement, avec une structure organisationnelle conçue pour aucun d'entre eux.

Ce briefing est destiné aux dirigeants d'ONG genevoises qui ont besoin de comprendre ce qu'ils portent réellement — en matière de responsabilité donateur, de droit suisse, de responsabilité fiduciaire du conseil et de contraintes pratiques de capacité informatique limitée et de personnel réduit.

**Contenu du briefing :**

Le premier segment cartographie vos déploiements actuels d'outils d'IA par rapport à vos conditions donateurs actives, votre architecture de consentement nFADP et votre politique approuvée par le conseil. L'objectif n'est pas une liste de conformité — c'est une carte d'exposition. Où votre politique suppose-t-elle une infrastructure de gouvernance que vous n'avez pas construite ? Où votre exigence de preuves donateur entre-t-elle en conflit avec votre obligation d'anonymisation nFADP ? Où le droit suisse s'applique-t-il à une décision d'IA que votre siège contrôle ?

Le deuxième segment aborde le problème spécifique de la responsabilité personnelle des membres du conseil en vertu des articles 75 à 79 du code civil suisse. À quoi votre approbation IA du conseil expose-t-elle réellement les membres du conseil personnellement ? À quoi ressemblerait un mécanisme de décharge étant donné le droit suisse des associations actuel ? Quel est le dossier documentaire minimum qu'un membre du conseil doit posséder pour démontrer une surveillance adéquate — non pas une évaluation technique, mais une surveillance que le droit suisse reconnaîtrait comme substantiellement suffisante ?

Le troisième segment couvre la révision des contrats de vendeurs d'IA — spécifiquement les dispositions de wind-down, les obligations de préavis et les droits de documentation de transition que vos contrats actuels avec les vendeurs ne contiennent pas ou contiennent dans un langage favorable au vendeur. Quelle est l'exposition de votre programme si l'outil d'IA dont il dépend est abandonné avant la fin du cycle programmatique ? Qu'auriez-vous dû négocier ?

Le quatrième segment se termine par une séquence priorisée : quelles lacunes combler en premier étant donné vos obligations donateurs actuelles, votre exposition nFADP actuelle et la capacité organisationnelle.

**Format :** 90 minutes, appel vidéo sécurisé, bilingue FR/EN. Résumé écrit dans les cinq jours ouvrables.

**Investissement :** CHF 1 800 par briefing.

**Ce que vous recevez :**
- Questionnaire d'inventaire organisationnel IA préalable au briefing (15 minutes, à soumettre à l'avance)
- Briefing structuré de 90 minutes avec Sergio C. Ricci
- Résumé écrit identifiant votre exposition spécifique en matière de responsabilité donateur, de droit suisse, de responsabilité du conseil et de contrats de vendeurs
- Fenêtre de suivi de 30 jours pour les questions

**CTA :** Écrivez à sergio@digitalcoa.ch avec « NGO Briefing » en objet. Indiquez le nom de votre organisation, votre fonction et une brève description de vos déploiements actuels d'outils d'IA et de vos conditions donateurs actives. Si une échéance de questionnaire donateur ou une réunion du conseil approche, mentionnez-le dans votre introduction. Je donne la priorité aux briefings où le timing est actif.

---

Sergio C. Ricci
Conseil en Gouvernance IA Genève
[sergio@digitalcoa.ch]

---

## 06 — Findings Summary

Six net-new insights distinct from C214–C244 Phase 04 Geneva NGO/Tech.

---

**Finding 1: AI vendor contractual wind-down protection as a specific missing contract layer, distinct from business continuity planning.**

Prior cycles identified AI vendor discontinuation as a program continuity risk (C218, C225, C226, C230). C245 identifies the specific missing contract layer: Geneva NGOs accepting standard AI vendor terms have no wind-down provisions — no obligation for the vendor to provide advance notice, transition documentation, or migration support. The grant agreement the NGO signed assumes program continuity. The vendor contract contains no corresponding continuity obligation. The gap is not in governance policy — it is in the commercial contract layer that determines whether the governance policy can be executed when the underlying tool is discontinued. The advisory gap is not business continuity planning; it is vendor contract wind-down negotiation for mandate-dependent NGOs with limited commercial leverage. *(Distinct from C214–C244 Phase 04: prior cycles addressed vendor discontinuation as a business continuity risk and program commitment problem. None identified the specific missing contract layer — wind-down provisions in vendor agreements — as a discrete and addressable exposure requiring a specific contract review methodology.)*

**Finding 2: Board member personal liability under Articles 75–79 ZGB as an unresolved and personally acute exposure for Geneva NGO board members who approved AI programs they cannot technically evaluate.**

Prior cycles identified board member personal AI exposure in general terms (C226, C229, C230, C235, C242). C245 identifies the specific structural problem: Swiss Association Law creates fiduciary liability for board decisions. Approving an AI-assisted program is a board decision under ZGB. Swiss law provides no definition of what "adequate AI oversight" means for a board member without technical AI competence. No published Zurich or Geneva authority has resolved whether approving an AI program on staff recommendation — without independent technical evaluation — creates personal liability under Articles 75–79 ZGB. The exposure is personal, present tense, and unaddressed by any available guidance. The discharge mechanism does not exist. *(Distinct from C214–C244 Phase 04: prior cycles identified board member personal AI use and liability as an unmanaged governance surface. None identified the specific unresolved question under Articles 75–79 ZGB: what constitutes legally adequate AI oversight for a non-technical board member, and what documentation record would discharge the fiduciary obligation — a question no published Swiss authority has resolved.)*

**Finding 3: The consent-architecture / AI-practice disconnect as a discrete structural gap created by organizational separation of functions, not by oversight failure.**

Prior cycles identified consent form architecture disconnection from AI deployment (C229, C235, C243). C245 identifies the specific structural mechanism: data protection officers and program managers operate in separate organizational functions, with separate frameworks, with no intersection in how consent architecture and AI deployment are reviewed. The disconnect is not caused by negligence — it is caused by organizational structure that assigns consent review and AI deployment review to different people in different departments who are not required to communicate. The consent form is compliant. The AI tool processes data the consent form does not describe. Both things are true simultaneously because of how the organizational structure is designed. *(Distinct from C214–C244 Phase 04: prior cycles identified consent form disconnection from AI deployment as a governance gap. None identified the specific structural mechanism — organizational separation of consent review and AI deployment review functions — as the cause of the disconnect rather than oversight failure, and none named this as a discrete structural design problem requiring cross-functional review protocols.)*

**Finding 4: Donor AI evidence disclosure vs. FADP anonymization as a direct legal collision at the documentation specificity level, not a guidance gap.**

Prior cycles identified tension between donor visibility and FADP beneficiary rights (C215, C243). C245 identifies the specific collision point: institutional donors are requiring AI decision evidence at a level of beneficiary-level specificity that creates re-identification risk under FADP anonymization principles. Donor visibility and FADP anonymization are not compatible objectives at the documentation specificity level now being requested. The NGO is being required to document AI-assisted decisions in ways that may violate FADP data protection obligations — and the two requirements are coming from different accountability systems with no coordination and no resolution methodology. This is not a guidance gap. It is a structural legal collision between two binding obligations pointing in opposite directions. *(Distinct from C214–C244 Phase 04: prior cycles identified donor visibility vs. beneficiary confidentiality tension in general terms. None identified the specific documentation specificity level as the collision point — where the donor's evidence requirement and FADP's anonymization obligation become directly incompatible at the level of beneficiary-level AI decision documentation.)*

**Finding 5: AI governance policy-to-capacity translation as a discrete advisory product category with no Geneva market address.**

Prior cycles identified policy-without-enforcement (C242), governance documentation theater (C243, C244), and board policy staleness (C242). C245 identifies the specific advisory gap: the market serves policy drafting (consultants write the policy document) and AI training (staff learn to use tools). The translation between the board-approved policy and the organizational capacity required to implement it — competence development sequencing, documentation systems, review triggers, tool inventory — is unserved by any Geneva advisory practice. The NGO has the policy. It does not have the infrastructure the policy assumes. No advisory product addresses the gap between the document approved and the organizational change required. *(Distinct from C214–C244 Phase 04: prior cycles identified policy-without-enforcement and governance documentation theater as failure modes. None identified the specific advisory gap — policy-to-capacity translation as a discrete unnamed advisory product — or named it as a specific market failure with a specific resolution pathway requiring advisory design.)*

**Finding 6: International organization Geneva office HQ-law vs. Swiss-law structural conflict as a specific legal complexity with no published resolution pathway, creating simultaneous multi-framework non-compliance exposure.**

Prior cycles identified the Geneva HQ-accountability-without-authority problem (C240, C242, C244). C245 identifies the specific unresolved legal complexity: headquarters agreements create functional immunity for international organization activities in Geneva, but functional immunity does not resolve which legal framework governs AI-assisted decisions made in Geneva operations under Swiss law. When HQ's AI governance policy and Swiss nFADP conflict on a specific question — what data can be processed, for what purpose, with what beneficiary rights — no published resolution pathway exists. The Geneva office may be simultaneously in compliance with HQ policy and in violation of Swiss law, or vice versa, with no mechanism to determine which framework governs the specific decision. This is distinct from multi-donor framework fragmentation (which creates administrative complexity) and from HQ governance transfer (which creates accountability gaps): it is a legal conflict between two applicable legal frameworks with no hierarchy-of-norms resolution for AI decisions in the Geneva context. *(Distinct from C214–C244 Phase 04: prior cycles identified HQ-accountability-without-authority as a Geneva international org problem and the Geneva institutional immunity paradox. None identified the specific unresolved legal question — which framework governs AI-assisted decisions when HQ policy and Swiss law conflict, and whether functional immunity resolves the hierarchy — as a present-tense multi-framework non-compliance exposure with no published resolution pathway.)*

---

*Phase 04 Geneva NGO/Tech — Cycle 245. Completed 2026-04-27 22:35 GMT+2. Next: Phase 05 Brotons.net, Cycle 245.*
