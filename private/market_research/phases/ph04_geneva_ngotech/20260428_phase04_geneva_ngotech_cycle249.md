# Phase 04 — Geneva NGO / Tech ICP
**Cycle:** C249 | **Date:** 2026-04-28 | **ICP:** Executive director or program manager at a Geneva-based NGO (10–100 employees), international organization, or tech nonprofit deploying AI for program delivery, data management, or communications. Core concerns: donor accountability, data sovereignty, reputational risk, limited IT capacity, donor visibility vs. confidentiality tension.
**Output path:** `/data/.openclaw/workspace/digitalcoa.ch/private/market_research/phases/ph04_geneva_ngotech/20260428_phase04_geneva_ngotech_cycle249.md`

---

## 01 — ICP Language

How this ICP actually describes AI problems.

### English

The executive director or program manager at a Geneva NGO does not describe AI governance in those terms. The language surfaces differently, in terms of what the organization can defend to a donor, what a board member asked at the last meeting, what a grantee sent over that nobody in the organization can explain, or what the data protection officer flagged last quarter and nobody acted on.

Core problem-framing phrases this ICP actually uses:

- *"We need to be able to show our donors what we did"* — accountability reconstruction concern, not policy design
- *"Our board wants assurance, but we don't have anything to show them"* — governance appearance vs structural capacity
- *"The field team started using something — we're not sure what it does with the data"* — staff-initiated AI deployment without organizational awareness
- *"We have a grant condition now that mentions AI, we don't really know what that requires"* — funder-imposed AI conditions as compliance trigger without interpretation support
- *"If something goes wrong with the program, can we reconstruct what happened?"* — post-incident reconstruction concern, not risk management
- *"The data protection person says we need to look at the AI tools, but they don't have capacity to do it"* — compliance function without execution resource
- *"We have beneficiary data in this tool — who has access, where does it go?"* — data sovereignty concern operationalized
- *"Donors want more impact data, so we're using AI to generate it — but we don't know what we're signing"* — efficiency-to-liability conversion without visibility

This ICP's AI problem is structurally a **governance-by-emergency** posture: problems are named in the moment they generate visible consequences, not before. The language reflects this — present-tense, incident-adjacent, accountability-focused.

### Français

Le directeur exécutif ou le responsable de programme d'une ONG genevoise ne parle pas de « gouvernance IA » dans ces termes. Le langage surgit différemment, en termes de ce que l'organisation peut défendre devant un donateur, de ce qu'un membre du conseil a demandé lors de la dernière réunion, de ce qu'un partenaire a envoyé et que personne ne peut expliquer, ou de ce que le responsable de la protection des données a signalé le trimestre dernier sans suivi.

Formulations clés que ce ICP utilise réellement :

- *« Nous devons pouvoir montrer à nos donateurs ce que nous avons fait »* — préoccupation de reconstruction de responsabilité, pas de conception de politique
- *« Notre conseil veut des assurances, mais nous n'avons rien à leur montrer »* — apparence de gouvernance vs capacité structurelle
- *« L'équipe terrain a commencé à utiliser quelque chose — nous ne sommes pas sûrs de ce qu'il fait des données »* — déploiement IA initié par le personnel sans conscience organisationnelle
- *« Nous avons une condition de subvention qui mentionne l'IA, nous ne savons pas vraiment ce que cela exige »* — conditions IA imposées par le bailleur de fonds comme déclencheur de conformité sans support d'interprétation
- *« Si quelque chose ne va pas avec le programme, pouvons-nous reconstruire ce qui s'est passé ? »* — préoccupation de reconstruction post-incident, pas de gestion des risques
- *« La personne responsable de la protection des données dit que nous devons examiner les outils IA, mais elle n'a pas la capacité de le faire »* — fonction de conformité sans ressource d'exécution
- *« Nous avons des données de bénéficiaires dans cet outil — qui y a accès, où vont-elles ? »* — préoccupation de souveraineté des données operationalisée
- *« Les donateurs veulent plus de données d'impact, alors nous utilisons l'IA pour les générer — mais nous ne savons pas ce que nous signons »* — conversion efficacité-vers-responsabilité sans visibilité

Le problème IA de ce ICP est structurellement une posture de **gouvernance par urgence** : les problèmes sont nommés au moment où ils génèrent des conséquences visibles, pas avant. Le langage reflète cela — au présent, adjacent à l'incident, axé sur la responsabilité.

---

## 02 — Market Signals

Current problems, failure modes, paradoxes, and complaints heard in this ICP's own language.

### Failure Mode 1 — The Grantee AI Inheritance Problem

Geneva-based NGOs with grant-making or implementing partner relationships are increasingly receiving AI-assisted outputs from grantees and partners — reports, assessments, beneficiary analyses — that enter the Geneva organization's own donor reporting chain. The Geneva organization cannot reconstruct the methodology, verify the data inputs, or explain the AI contribution to its donors. The grantee's AI use has created an accountability inheritance that the lead NGO absorbs without having authorized or reviewed the underlying AI process. No Geneva-specific protocol exists for this three-party AI accountability chain.

### Failure Mode 2 — Beneficiary Identity Reconstruction from AI Inference

AI tools applied to beneficiary data in program delivery are generating **synthetically inferred profiles** — behavioral classifications, risk scoring, need-ranking — that go beyond the original data collected. When donors request data destruction at program wind-down, the organization faces a disposal question that FADP guidance does not address specifically: does destroying source data also destroy the inferred profiles? Does the answer differ depending on whether the inference was performed by a vendor tool or an internal model? Geneva NGOs operating in protection, health, and migration contexts face this question with heightened sensitivity — inferred profiles may carry secondary harm potential that source data does not.

### Failure Mode 3 — Donor Impact Dashboard as Unintended AI Accountability Evidence

Multiple donors now require data inputs to shared impact dashboards that aggregate program metrics across grantees. These dashboards often use AI-assisted data quality scoring, indicator normalization, or output prediction. The Geneva NGO submitting data to these dashboards is creating accountability records it does not own, cannot review independently, and cannot reconstruct if a donor questions the figures. The dashboard operator's AI methodology becomes operationally material to the submitting organization's own accountability position — a structural dependency this ICP has not mapped.

### Failure Mode 4 — AI Vendor Due Diligence Conducted by Non-Technical Staff Under Donor Pressure

The procurement or tool selection decision often falls to program or operations staff with limited technical background, under a funding deadline that does not accommodate extended due diligence. The vendor's AI compliance documentation is reviewed without an independent evaluation framework — accepting vendor self-certification as adequate because no alternative exists within the organization's capacity. Donor AI questionnaire responses are populated with vendor-supplied language without internal verification. This creates a pattern where the organization's most consequential AI governance decisions are made by its least technically equipped staff, under time pressure, using vendor-provided documentation as the adequacy standard.

### Failure Mode 5 — Board Agenda AI Items Without Pre-Briefing Documentation

Board members at Geneva NGOs are increasingly receiving AI-related agenda items — policy approvals, tool adoption decisions, donor AI condition responses — with pre-meeting documentation prepared by staff who are themselves operating without an AI governance framework. The board is being asked to approve language that will become part of the organization's official record, with personal liability implications under Art. 75 ZGB, on the basis of documentation that has no internal adequacy standard. The paradox: governance appears to exist (board approved) while structural governance capacity has not been evaluated or established.

### Failure Mode 6 — The Confidentiality-Accountability Visibility Trap

This ICP faces a structurally irresolvable tension: donors want greater visibility into how AI is used in program delivery (for accountability), while program beneficiaries have confidentiality rights that may be implicated by the visibility tools donors are asking for. Geneva NGOs operating under ZEWO certification and Swiss data protection law cannot simply grant donors direct access to program data or AI systems — but the accountability mechanism donors are requesting often requires exactly that access. The result is a growing gap between donor expectations and operational possibility, with no Geneva-specific protocol for resolving it.

---

## 03 — Competitive Analysis

Gaps, and what no one is addressing specifically for this ICP and geography.

### Gap 1 — Grantee AI Accountability Inheritance Protocol

No Geneva advisory service, no published protocol, and no funder guidance document addresses the three-party accountability chain that forms when a Geneva lead NGO receives AI-assisted outputs from implementing partners and includes them in donor reporting. The problem sits between funder compliance advisory, partner governance standards, and lead NGO accountability documentation. No market participant has named it as a discrete service category. This is a named market gap.

### Gap 2 — AI-Inferred Profile Disposal Methodology for Program Wind-Down

The specific disposal question for synthetically inferred beneficiary profiles — not source data, but derived classifications — has no published Geneva guidance, no funder protocol, and no nFADP interpretive resource. FADP Art. 26 disposal obligations were drafted before AI inference became a standard program tool. The problem is specifically acute for NGOs handling sensitive beneficiary categories (protection, gender-based violence, migration status, health) where inferred profile disclosure carries secondary harm potential. No Geneva market participant has developed a disposal methodology or named this as a distinct service occasion.

### Gap 3 — Donor Dashboard AI Accountability Ownership

The structural dependency created when a Geneva NGO submits data to donor-operated AI-assisted dashboards is not named anywhere in the Geneva advisory market. No Geneva NGO has received guidance on what the submission organization's accountability position is when the dashboard operator's AI produces disputed outputs. No funder has published guidance defining the accountability boundary between submitting data and operating AI on that data. This is an unnamed structural exposure affecting every NGO participating in multi-donor data platforms.

### Gap 4 — Board Briefing Documentation Standard for AI Agenda Items

No Geneva market participant has developed a board briefing documentation standard specifically for AI agenda items at NGO board level. Existing board briefing frameworks do not account for the Art. 75 ZGB personal liability dimension, the funder AI condition dimension, or the structural gap between board approval and organizational governance capacity. The board is being asked to approve AI-related language as a governance event, without receiving pre-briefing documentation designed to support informed personal liability discharge. This is a named documentation format gap.

### Gap 5 — Resource-Constrained AI Governance Implementation Design

The Geneva advisory market offers AI governance frameworks designed for organizations with IT departments, compliance functions, and procurement processes. No market participant has published a governance design methodology specifically for organizations operating under part-time IT, single-person compliance functions, and grant-funded procurement timelines. The constraint is not a gap in awareness — it is a structural design problem: solutions must fit within a specific operational envelope that enterprise-scale frameworks do not address. This remains an unmet market position.

### Gap 6 — ZEWO / Institutional Donor / FADP Three-Framework Reconciliation for NGOs

The simultaneous applicability of ZEWO certification requirements, institutional donor AI conditions, and nFADP data protection obligations creates a three-framework compliance situation for Geneva NGOs that no market participant has addressed with an integrated reconciliation methodology. Each framework arrives from a different accountability direction, uses different language, and produces different documentation requirements. The Geneva NGO is managing three sets of obligations without a map showing where they reinforce, where they conflict, and where they simply do not connect. No market participant has published a reconciliation framework.

---

## 04 — Compliance Context

Geneva / Swiss-specific obligations material to this ICP.

### ZEWO Certification AI Accountability Requirements

The Zewo (Swiss Central Office for Charitable Foundations and Associations) certification standard for Swiss nonprofits requires financial reporting integrity and appropriate use of donor funds. As AI tools become embedded in program delivery and impact measurement, ZEWO audit processes are beginning to probe AI-assisted program reporting as part of the certification review cycle. The specific documentation standard ZEWO applies to AI-generated metrics in certified organizations has not been published as a formal standard — but the audit questions are arriving. Geneva NGOs holding ZEWO certification face a situation where present-tense AI tool deployment is subject to retrospective audit scrutiny against an unpublished adequacy standard.

### Institutional Donor AI Framework Conditions

Major institutional donors — government development agencies (SDC, SECO, MFA), multilateral agencies, large private foundations — have begun including AI governance conditions in grant agreements. These conditions vary significantly in specificity: some require a named AI governance policy; others require evidence of data protection compliance in AI-assisted programs; others reference international AI governance frameworks that the Geneva NGO is expected to interpret and implement without guidance. The interpretation burden falls on the Geneva NGO, which lacks the legal and technical capacity to map institutional donor AI conditions to its own operational reality. Each institutional donor operates under its own AI framework language — no Geneva advisory service has published a cross-donor AI condition interpretation guide.

### Swiss Federal Act on Data Protection (nFADP) — NGO-Specific Dimensions

The nFADP creates specific exposures for Geneva NGOs that differ from corporate data protection concerns:

**Art. 26 Disposal:** The obligation to dispose of personal data when the purpose no longer applies. For AI-processed beneficiary data where purpose limitation may have shifted as the program evolved, the disposal trigger is operationally ambiguous — particularly for inferred profiles that were not part of the original collection.

**Art. 8 Purpose Limitation:** AI tools applied to program delivery often process beneficiary data for purposes not contemplated in original consent frameworks. The consent obtained at program intake may not cover the AI-assisted analytics now being applied. No Geneva-specific guidance exists for retroactive purpose limitation analysis in NGO program contexts.

**Art. 9 Third-Party Processing Authorization:** AI tools used by implementing partners create a three-party processing relationship where the Geneva NGO may bear accountability for the partner's AI processing under nFADP Art. 9 without having contractual authority over the partner's tool selection or configuration.

**Art. 21 Right to Explanation:** Beneficiaries or counterparties who receive AI-assisted decisions or communications from the Geneva NGO may have a right to explanation under nFADP Art. 21. No Geneva NGO has established a methodology for fulfilling Art. 21 obligations in program delivery contexts where AI contributes to beneficiary-facing communications.

### Swiss Association Law — Board Member Personal Liability

Art. 75 ZGB establishes board member personal liability for damage caused through violation of fiduciary duties. For Geneva NGOs deploying AI in program delivery, the specific content of the fiduciary duty with respect to AI governance is undefined — there is no published Swiss authority defining what Art. 75 requires of association board members with respect to AI oversight. Board members are being asked to approve AI policies as governance events, creating personal liability exposure, without any published standard defining the adequacy of that approval. The Geneva NGO board is operating under personal liability without an operational discharge mechanism.

### Geneva-Specific Operational Considerations

**Cantonal application of data protection:** The Geneva cantonal authority (Commissioner cantonal à la protection des données) applies nFADP in cantonal context. Geneva NGOs operating across cantons or internationally face the question of which cantonal authority's interpretation applies to specific AI processing activities — a question with no published resolution for cross-cantonal NGO operations.

**International organization accountability gap:** For Geneva offices of international NGOs with headquarters outside Switzerland, Swiss law obligations apply to the Geneva entity while decision authority often rests with the parent organization. This creates a specific accountability-without-authority situation that is structurally distinct from domestic Swiss NGOs and is not addressed by any published advisory framework.

---

## 05 — Lead Magnet Draft

In Sergio's voice — calm, precise, executive-grade, no hype.

### English Version

**Title:** Geneva NGO AI Program Accountability Briefing

**Subtitle:** What your board approved, what your donors are asking for, and what your organization cannot currently reconstruct.

**Format:** 90-minute executive briefing — individual session, confidential, no recording
**Language:** English
**Investment:** CHF 1,800
**Available:** Geneva, by appointment

---

You have an AI governance policy. Your board approved it. Your donors have started asking questions about how AI is used in the programs they fund. And somewhere in your organization, there are tools that were deployed before the policy existed — or tools in use by field teams that nobody has evaluated against the policy since it was adopted.

This briefing is for executive directors and program managers at Geneva NGOs who need to understand what the organization's actual AI accountability position is, before a donor questionnaire, an audit, or an incident requires that understanding under pressure.

We will work through five specific accountability surfaces that Geneva NGOs face and that no published framework has addressed in the form this briefing presents them:

1. **The grantee AI inheritance problem** — when your implementing partners' AI-assisted outputs enter your donor reporting chain and create accountability that your organization absorbs without having reviewed the underlying process.
2. **AI-inferred beneficiary profile disposal** — the specific disposal question for synthetically derived beneficiary classifications that FADP guidance does not address explicitly, and that becomes acute at program wind-down.
3. **Donor dashboard AI dependency** — what your accountability position is when you submit data to a donor-operated impact dashboard that uses AI on your data, and the output becomes part of your accountability record.
4. **Board briefing adequacy for AI agenda items** — what pre-meeting documentation your board members actually need to discharge their Art. 75 ZGB personal liability, versus what they typically receive.
5. **The ZEWO / institutional donor / nFADP three-framework map** — where the requirements from your certification body, your major institutional donors, and Swiss data protection law reinforce, where they conflict, and where they simply do not connect.

This is not a training session. It is not a policy drafting exercise. It is an executive working session that produces a documented accountability position — a record of what the organization has identified, assessed, and decided, which is different from what the organization has documented in the past.

The briefing fee is CHF 1,800, payable prior to the session. The written summary following the briefing is included.

To schedule a briefing, write to us directly. We respond to every inquiry within one business day.

---

### French Version

**Titre :** Geneva NGO AI Program Accountability Briefing

**Sous-titre :** Ce que votre conseil a approuvé, ce que vos donateurs demandent, et ce que votre organisation ne peut actuellement pas reconstruire.

**Format :** Briefing exécutif de 90 minutes — session individuelle, confidentiel, sans enregistrement
**Langue :** Français
**Investissement :** CHF 1 800
**Disponibilité :** Genève, sur rendez-vous

---

Votre organisation dispose d'une politique de gouvernance IA. Votre conseil l'a approuvée. Vos donateurs commencent à poser des questions sur l'utilisation de l'IA dans les programmes qu'ils financent. Et quelque part dans votre organisation, il y a des outils qui ont été déployés avant l'existence de cette politique — ou des outils utilisés par les équipes terrain que personne n'a évalués par rapport à la politique depuis son adoption.

Ce briefing est destiné aux directeurs exécutifs et aux responsables de programmes des ONG genevoises qui doivent comprendre quelle est la position réelle de responsabilité IA de leur organisation, avant qu'un questionnaire de donateur, un audit ou un incident ne nécessite cette compréhension sous pression.

Nous examinerons cinq surfaces de responsabilité spécifiques auxquelles les ONG genevoises sont confrontées et qu'aucun cadre publié n'a traitées sous la forme présentée dans ce briefing :

1. **Le problème d'héritage IA du partenaire de mise en œuvre** — lorsque les résultats assistés par IA de vos partenaires de mise en œuvre entrent dans votre chaîne de rapport aux donateurs et créent une responsabilité que votre organisation absorbe sans avoir examiné le processus sous-jacent.
2. **L'élimination des profils de bénéficiaires déduits par IA** — la question spécifique d'élimination des classifications de bénéficiaires dérivées synthétiquement que les directives FADP n'adressent pas explicitement, et qui devient aiguë lors de la clôture du programme.
3. **La dépendance aux tableaux de bord IA des donateurs** — quelle est votre position de responsabilité lorsque vous soumettez des données à un tableau de bord d'impact opéré par un donateur qui utilise l'IA sur vos données, et que le résultat devient partie de votre dossier de responsabilité.
4. **L'adéquation de la préparation du conseil pour les points IA à l'ordre du jour** — quelle documentation pré-réunion vos administrateurs attendent réellement pour libérer leur responsabilité personnelle au titre de l'art. 75 CC, par opposition à ce qu'ils reçoivent typiquement.
5. **La carte des trois cadres ZEWO / donateurs institutionnels / nFADP** — où les exigences de votre organisme de certification, de vos principaux donateurs institutionnels et de la protection des données suisse se renforcent, où elles entrent en conflit, et où elles ne se connectent simplement pas.

Ce n'est pas une session de formation. Ce n'est pas un exercice de rédaction de politique. C'est une session de travail exécutif qui produit une position de responsabilité documentée — un enregistrement de ce que l'organisation a identifié, évalué et décidé, ce qui est différent de ce que l'organisation a documenté dans le passé.

Les frais de briefing sont de CHF 1 800, payables avant la session. Le résumé écrit après le briefing est inclus.

Pour planifier un briefing, écrivez-nous directement. Nous répondons à chaque demande dans un délai d'un jour ouvrable.

---

## 06 — Findings Summary

Six net-new insights from this cycle, distinct from all C214–C248 Phase 04 findings.

### Finding 1 — Grantee AI Inheritance as a Discrete Three-Party Accountability Category

Geneva NGOs with implementing partner or grant-making relationships are absorbing AI-assisted outputs from partners into their own donor accountability chains without having reviewed or authorized the underlying AI methodology. This is structurally distinct from the general "implementing partner AI cascade" problem identified in prior cycles (which focused on tort liability under OR Art. 41). This finding focuses specifically on the accountability inheritance problem: the Geneva lead NGO becomes accountable for AI outputs it did not produce, cannot reconstruct, and does not control — through mechanisms of donor reporting and funder condition compliance rather than through grant agreement liability clauses. The problem is active now, in ongoing programs, before any incident has surfaced it. No Geneva market participant has named this as a discrete service occasion or developed a pre-signing protocol for grantee AI accountability conditions.

### Finding 2 — Beneficiary Identity Reconstruction Risk at Program Wind-Down

AI tools applied to beneficiary data in program delivery generate **synthetically inferred profiles** — behavioral classifications, risk assessments, need rankings — that are distinct from the source data collected at intake. At program wind-down, when disposal obligations under nFADP Art. 26 become active, the specific question of what to do with inferred profiles has no Geneva guidance, no funder protocol, and no nFADP interpretive resource. For NGOs operating in protection, migration, gender-based violence, and health contexts, inferred profile disclosure carries secondary harm potential that source data disposal alone does not eliminate. This is distinct from the "AI-inferred beneficiary profile disposal" mentioned in C240 Phase 04 because it addresses specifically the program wind-down disposal occasion and the identity reconstruction risk — not just the disposal obligation. The distinction between source data disposal and derived profile disposal is generating genuine organizational uncertainty in a context where the wrong answer has consequential implications.

### Finding 3 — Donor Dashboard AI Dependency as Structural Accountability Exposure

Geneva NGOs submitting data to donor-operated AI-assisted impact dashboards are creating accountability records in infrastructure they do not own, cannot independently evaluate, and cannot reconstruct if the dashboard operator's AI produces disputed outputs. This is distinct from prior "donor visibility vs. confidentiality paradox" findings because it addresses specifically the data submission accountability chain — not the tension between visibility and confidentiality, but the structural problem of accountability ownership when another party's AI operates on your data and produces outputs that become part of your accountability record. No Geneva NGO has received guidance on mapping this exposure or establishing accountability boundary agreements with dashboard operators. The exposure is invisible until a donor questions dashboard figures — at which point the reconstruction problem is already present.

### Finding 4 — Board Briefing Documentation as a Personal Liability Discharge Mechanism

Board members at Geneva NGOs approving AI-related agenda items are operating under Art. 75 ZGB personal liability without a published discharge mechanism and without pre-meeting documentation designed to support informed approval. This is distinct from prior "board-approved AI policy staleness" findings (which addressed policy obsolescence) and "board member personal AI use" findings (which addressed individual board member tool use). This finding addresses specifically the documentation that board members need *before approving* AI-related agenda items — not what they approved, but what they received as the basis for approval. The structural gap is that Geneva NGOs are producing board documents for AI agenda items using the same documentation format as for all other agenda items, without accounting for the specific Art. 75 ZGB personal liability dimension that AI agenda items introduce.

### Finding 5 — The ZEWO / Institutional Donor / nFADP Three-Framework Reconciliation Gap

Geneva NGOs holding ZEWO certification and receiving institutional donor funding face simultaneous obligations from three non-reconciled frameworks: ZEWO audit standards (which probe financial integrity including AI-assisted program reporting), institutional donor AI governance conditions (which arrive in grant agreements with varying specificity), and nFADP data protection obligations (which apply to all AI-assisted processing of personal data). No market participant has published an integrated reconciliation framework showing where these three frameworks reinforce, where they conflict, and where they do not connect. This is distinct from prior "tri-framework compliance collision" findings (C241 Phase 04) which described the collision as a general NGO phenomenon. This finding is specific to Geneva and to the three named frameworks operating simultaneously in that geography — with the additional dimension that ZEWO is a Swiss domestic certification body whose audit processes are beginning to probe AI governance questions for which no published adequacy standard exists.

### Finding 6 — Resource-Constrained AI Governance as a Design Problem Requiring a Specific Methodology

The problem of AI governance in resource-constrained NGOs is not a capacity gap — it is a structural design problem. Enterprise-scale governance frameworks assume IT departments, compliance functions, and procurement processes that Geneva NGOs at the 10–100 employee scale do not have. The constraint is not that the organization lacks awareness or motivation — it is that the solution architecture does not fit the organizational envelope. This finding is distinct from prior "limited IT capacity as structural governance constraint" findings (C232 Phase 04, C242 Phase 04) because those findings described the constraint as a contextual limitation rather than a design specification problem. This finding focuses on what a governance solution designed for this envelope would actually need to accomplish — specifically: governance documentation that fits within a part-time compliance function, tool evaluation that can be conducted by program staff without technical AI backgrounds, board briefing documentation that does not require external legal review to produce, and a reassessment trigger mechanism that activates on defined events rather than calendar review cycles. The market gap is not awareness — it is a specifically designed methodology format that fits 10–100 employee NGO operations in Geneva.

---

*DigitalCoa.ch — Market Research | Cycle C249 Phase 04 | Geneva NGO / Tech ICP*
*Phase completed: 2026-04-28*
