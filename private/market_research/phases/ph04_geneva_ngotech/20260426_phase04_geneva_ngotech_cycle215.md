# Phase 04 — Geneva NGO/Tech | Cycle 215
**Researched:** 2026-04-26 | **Output:** `/ph04_geneva_ngotech/20260426_phase04_geneva_ngotech_cycle215.md`
**Mode:** Domain knowledge + Swiss institutional sources
**ICP:** Executive director or program manager at a Geneva-based NGO (10–100 employees), international organization, or tech nonprofit deploying AI for program delivery, data management, or communications. Core concerns: donor accountability, data sovereignty, reputational risk, limited IT capacity, donor visibility vs. confidentiality tension.

**Distinct from C214 Phase 04:** C214 covered staff governance gap, donor visibility/confidentiality paradox, humanitarian vendor credibility shield, ZEWO certification pressure, UNAIWG downstream obligations, and Monday morning operationalization gap. C215 surfaces six genuinely distinct angles: FADP Art. 22 ADM rights in beneficiary systems, EU AI Act downstream via EU-funded programs, Swiss-hosted AI infrastructure requirement, AI incident reporting fragmentation, FADP 72-hour breach notification vs. NGO response capacity, and multi-stakeholder AI harm attribution.

---

## 01 — ICP Language

### How this ICP actually describes AI problems — EN + FR

---

#### English

**On automated decisions affecting beneficiaries:**
- "We use AI to prioritize which families receive emergency support first. When a family is declined, we need to be able to explain exactly why — and our current system cannot do that."
- "Our AI-assisted beneficiary targeting system makes recommendations. Our staff makes final decisions. Legally, where does the accountability sit when the recommendation was wrong?"
- "Beneficiaries are beginning to ask why they were rejected or prioritized. We do not have a process for answering that question when the decision was partly driven by an AI system."
- "We are uncomfortable with the idea that an algorithm partially determines who receives life-saving support. But we do not have the resources to review every AI-assisted decision manually."

**On EU-funded programs and AI Act exposure:**
- "We receive EU development funding. Our donors have not explicitly said the EU AI Act applies to us, but they are starting to ask questions that sound like EU AI Act compliance questions."
- "Our EU donor is beginning to request documentation of high-risk AI systems in our program delivery. We did not think the EU AI Act applied to a Swiss NGO — now we are not sure."
- "When we respond to EU institutional tenders, we are now being asked about AI governance in ways that feel like regulatory requirements, even though we are not an EU entity."
- "EU AI Act high-risk system classification — beneficiary targeting, resource allocation. We believe we may be operating in that category. We have not assessed this formally."

**On data sovereignty and infrastructure constraints:**
- "Our SDC and cantonal government contracts are increasingly requiring that beneficiary data stay in Switzerland. This limits which AI platforms we can use — and we do not have the budget for Swiss-hosted alternatives."
- "The AI tools our staff are using — ChatGPT, Gemini — send data to servers outside Switzerland. We do not have formal confirmation that this is compliant with our data sovereignty obligations."
- "We are being pushed toward Swiss-hosted AI infrastructure by our public funders. We do not have the technical understanding to evaluate whether those alternatives are equivalent."
- "Data sovereignty is a reputational expectation from Swiss institutional donors even when it is not a formal legal requirement. Using US-hosted AI tools creates a legitimacy problem in addition to a compliance problem."

**On AI incident reporting obligations:**
- "When an AI system produces a harmful outcome in our program — a wrong beneficiary prioritization, a data leak through an AI query — we do not have a clear reporting structure. Who do we notify? Our donor? The FDPIC? The affected beneficiaries?"
- "Each of our institutional donors has a different incident reporting format. We have been asked to report AI-related incidents to three different donors in the past twelve months, each using a different template and definition of what constitutes an AI incident."
- "We had an AI-related near-miss — a beneficiary was almost excluded from support because of a data error in an AI-assisted ranking system. We did not know if this required reporting, to whom, or on what timeline."
- "AI incidents in our context are not just data breaches. They include situations where an AI recommendation led to a harmful program decision. We have no framework for categorizing, escalating, or reporting those incidents."

**On FADP breach notification and operational capacity:**
- "The FADP requires us to notify the FDPIC within 72 hours of a data breach. We are a team of fifteen. A real security incident on a weekend would not be detected within 72 hours, let alone reported."
- "Our AI tools add new breach vectors — prompt injection, data exfiltration through AI queries, vendor-side API breaches. We do not have monitoring systems capable of detecting breaches in these vectors within any meaningful timeframe."
- "The 72-hour notification clock starts when we become aware of a breach. In our operational environment, becoming aware of a breach involving an AI tool could take days or weeks."
- "We do not have a tested incident response plan. If our beneficiary data is compromised through an AI tool today, I am not confident we would detect it, contain it, and report it within any reasonable timeline."

**On multi-stakeholder AI decisions and accountability:**
- "We use three different AI systems in our beneficiary management process — each from a different vendor, each touching different parts of the workflow. When something goes wrong, we do not know how to determine which system caused the harm."
- "Our program delivers AI-assisted recommendations that also feed into a government reporting system. If the recommendation was wrong because of an AI error, the accountability chain is completely unclear."
- "We have an AI vendor, a data processor agreement, a government partner using our AI-generated reports, and beneficiaries whose data feeds the system. The accountability lines between those parties when an AI error causes harm are not defined anywhere."
- "When an AI system we procured makes a harmful decision about a beneficiary, our vendor says the AI is a tool and the decision is ours. We agree in principle — but we have no structured process for how our staff is supposed to exercise that oversight."

---

#### Français

**Sur les décisions automatisées affectant les bénéficiaires :**
- « Nous utilisons l'IA pour établir la priorité des familles recevant l'aide d'urgence. Lorsqu'une famille est refusée, nous devons pouvoir expliquer exactement pourquoi — et notre système actuel ne le permet pas. »
- « Notre système de ciblage des bénéficiaires par IA fait des recommandations. Notre personnel prend les décisions finales. Légelement, où sit la responsabilité lorsque la recommandation était erronée ? »
- « Les bénéficiaires commencent à demander pourquoi ils ont été rejectés ou prioritaires. Nous n'avons pas de processus pour répondre à cette question lorsque la décision a été partiellement prise par un système d'IA. »

**Sur les programmes financés par l'UE et l'exposition à l'IA Act :**
- « Nous recevons des fonds de développement de l'UE. Nos donateurs n'ont pas explicitement déclaré que l'IA Act s'applique à nous, mais ils commencent à poser des questions qui ressemblent à des questions de conformité à l'IA Act. »
- « Notre donateur de l'UE commence à demander une documentation sur les systèmes d'IA à haut risque dans nos programmes. Nous ne pensions pas que l'IA Act s'appliquait à une ONG suisse — maintenant nous n'en sommes plus sûrs. »

**Sur la souveraineté des données et les contraintes d'infrastructure :**
- « Nos contrats avec la CDIP et le gouvernement cantonal exigent de plus en plus que les données des bénéficiaires restent en Suisse. Cela limite les plateformes d'IA que nous pouvons utiliser — et nous n'avons pas le budget pour des alternatives hébergées en Suisse. »
- « Les outils d'IA que notre personnel utilise — ChatGPT, Gemini — envoient des données vers des serveurs hors de Suisse. Nous n'avons pas de confirmation formelle que cela est conforme à nos obligations de souveraineté des données. »

**Sur les obligations de signalement des incidents d'IA :**
- « Lorsqu'un système d'IA produit un résultat préjudiciable dans notre programme — une mauvaise priorisation, une fuite de données par une requête d'IA — nous n'avons pas de structure de signalement claire. Qui notifions-nous ? Notre donateur ? Le PFPDT ? Les bénéficiaires touchés ? »
- « Chacun de nos donateurs institutionnels a un format différent de signalement d'incident. On nous a demandé de signaler des incidents liés à l'IA à trois donateurs différents au cours des douze derniers mois, chacun utilisant un modèle différent. »

**Sur la notification de violation FADP et la capacité opérationnelle :**
- « Le LFPD exige que nous notifications le PFPDT dans les 72 heures suivant une violation de données. Nous sommes une équipe de quinze personnes. Un incident de sécurité réel un week-end ne serait pas détecté en 72 heures, encore moins notifié. »
- « Nos outils d'IA ajoutez de nouveaux vecteurs de violation — injection de prompts, exfiltration de données par des requêtes d'IA. Nous n'avons pas de systèmes de surveillance capables de détecter ces violations dans ces vecteurs. »

**Sur les décisions d'IA multipartites et la responsabilité :**
- « Nous utilisons trois systèmes d'IA différents dans notre processus de gestion des bénéficiaires — chacun d'un fournisseur différent. Quando quelque chose ne va pas, nous ne savons pas comment déterminer quel système a causé le préjudice. »
- « Nous avons un fournisseur d'IA, un accord de traitement des données, un partenaire gouvernemental utilisant nos rapports générés par IA, et des bénéficiaires dont les données alimentent le système. Les lignes de responsabilité entre ces parties ne sont définies nulle part. »

---

## 02 — Market Signals

### Current problems, failure modes, complaints, and paradoxes

---

**Signal 1: The Beneficiary ADM Rights Problem — FADP Art. 22 Is Already Active**

The FADP grants individuals the right not to be subject to a decision based solely on automated processing that produces legal effects or similarly significant effects concerning them (Art. 22). Geneva NGOs are increasingly deploying AI systems for beneficiary targeting, prioritization, and resource allocation — precisely the decisions covered by this provision. The gap: NGOs do not have the operational infrastructure to honor these rights. They cannot produce explanations for AI-assisted decisions, cannot offer human review mechanisms for every automated determination, and do not have processes for beneficiaries to request explanation or contest AI-assisted decisions. This is not a future regulatory risk — it is an existing legal obligation that most Geneva NGOs are currently non-compliant with.

---

**Signal 2: EU AI Act Downstream — NGOs Bearing Regulatory Burdens They Do Not Know They Carry**

EU-funded Geneva NGOs are beginning to encounter what amounts to EU AI Act downstream compliance pressure: institutional donors requesting documentation of high-risk AI systems, data protection impact assessments for AI deployments, and conformity assessments before program AI tools can be used with EU funding. The EU AI Act does not directly apply to Swiss NGOs, but EU development cooperation frameworks are importing its logic. The failure: NGOs are responding to these requests reactively, after donors ask — they have not proactively assessed whether their AI deployments fall into the high-risk category and do not have the documentation infrastructure to respond when asked.

---

**Signal 3: Swiss-Hosted AI Infrastructure — A Growing Requirement Without a Viable Market**

Swiss institutional donors and cantonal government contractors are increasingly requiring that beneficiary data used in AI-assisted programs stay within Swiss infrastructure. The rationale: data sovereignty, NCSC security standards, and FADP adequacy. The problem: the market for Swiss-hosted AI tools equivalent to global platforms (OpenAI, Anthropic, Google) is thin. NGOs face a genuine operational dilemma — institutional funders require Swiss-hosted infrastructure, but viable Swiss-hosted alternatives at comparable cost and functionality do not yet exist at scale. The gap between the regulatory expectation and the available market is creating a compliance theater problem: NGOs declare compliance with data sovereignty requirements while using tools that do not meet those requirements.

---

**Signal 4: AI Incident Reporting Fragmentation — Three Donors, Three Formats, No Standard**

Institutional donors are independently developing AI incident reporting requirements — different definitions of what constitutes an AI incident, different notification timelines, different documentation formats. For a Geneva NGO with funding from SDC, an EU development agency, and a UN agency, this creates three parallel reporting obligations with no common framework. The practical failure: NGOs are spending disproportionate compliance resources managing donor-specific AI incident templates rather than building the underlying incident detection and response capacity that those templates presuppose. The fragmentation also means no shared learning — AI incidents at one NGO do not contribute to sector-wide risk reduction because each organization's reporting goes only to its own donors.

---

**Signal 5: The 72-Hour FADP Breach Notification Clock — Operating Reality Mismatch**

The FADP requires notification to the FDPIC within 72 hours of becoming aware of a data breach. For most Geneva NGOs, the operating reality is: AI-related breach vectors (prompt injection, API-level data exfiltration, vendor-side incidents) are technically sophisticated, difficult to detect without dedicated monitoring, and most likely to occur outside business hours. The 72-hour clock creates a structural mismatch: the organizations least equipped to detect sophisticated AI breaches are legally required to report them fastest. The failure mode is not malicious non-compliance — it is that NGOs will become aware of breaches after the 72-hour window has closed, creating legal exposure for an operational incapacity rather than a deliberate violation.

---

**Signal 6: Multi-Vendor AI Accountability Attribution — No Framework for Joint AI Decision Harms**

The typical Geneva NGO AI environment involves multiple AI systems from different vendors operating in sequence: an AI-assisted beneficiary management platform, an AI-powered program analytics tool, and staff use of commercial AI for communications and reporting. When a harmful outcome occurs — a beneficiary incorrectly declined, data leaked, program resource misallocated — determining which system's failure caused the harm is technically and contractually unresolved. Vendors default to "the decision was yours." NGOs default to "the tool's output misled us." No contractual framework, no technical attribution standard, and no donor-facing reporting template addresses this joint accountability problem. The consequence: NGOs bear reputational and legal accountability for harms they cannot precisely attribute or prevent.

---

## 03 — Competitive Analysis

### What others say, what gaps exist, what no one is addressing

---

**What exists:**

The Geneva AI Initiative for NGOs (EPFL AI Center + Swiss Data Science Center) offers capacity-building programs for NGOs on AI tools. The UNAIWG framework applies to UN agency implementing partners. ZEWO provides guidance on AI governance for certified NGOs. ICRC and UNHCR have published AI ethics frameworks for humanitarian contexts. These are genuine resources — and they share a common limitation: they are designed for institutional actors with dedicated compliance functions or for large organizations with dedicated staff.

---

**The gap for mid-tier Geneva NGOs (10–100 employees):**

The existing support ecosystem addresses the top of the Geneva NGO market (large international organizations with compliance departments) and the bottom (generic digital literacy training). The mid-tier — the 20-to-80-person organization with real AI deployment, real institutional donor obligations, real FADP exposure, and no dedicated compliance officer — falls between existing resources. No advisory provider has specifically addressed:

- The FADP Art. 22 ADM rights operationalization for beneficiary-facing AI decisions — the specific workflow change required, the documentation standard, the human review mechanism design
- The EU AI Act downstream compliance question for EU-funded Swiss NGOs — the practical assessment of whether and how EU AI Act obligations apply given their funding relationships
- Swiss-hosted AI infrastructure evaluation — which Swiss-hosted AI tools actually meet the functional requirements of NGO program delivery, and what the cost differential means for organizations with limited budgets
- Multi-vendor AI harm attribution — the contractual and operational framework for managing joint AI decision accountability that no existing AI governance framework addresses

---

**What no one is addressing specifically:**

1. **FADP Art. 22 compliance pathway for beneficiary ADM decisions in the NGO context** — the operational changes required (human review triggers, explanation templates, escalation processes), the documentation standard, and the practical implementation at a resource-constrained organization. This is a legal obligation already in force. No advisory product addresses it specifically for the Geneva NGO context.

2. **EU AI Act downstream exposure assessment for EU-funded Swiss NGOs** — a practical assessment tool that helps executive directors understand which EU AI Act provisions their institutional donor relationships effectively import, which AI systems in their portfolio qualify as high-risk under the Act's classification, and what minimum documentation is required to respond to donor requests. The connection between EU funding and AI Act obligations is not clearly articulated anywhere for this audience.

3. **Swiss-hosted AI infrastructure evaluation brief** — which Swiss-hosted AI platforms (distinct from global tools) are functionally adequate for NGO program delivery, what the compliance gap looks like in practice for organizations required to use Swiss infrastructure, and what risk mitigation options exist for the gap between donor expectations and available tools.

4. **Multi-vendor AI incident attribution framework** — a practical tool for Geneva NGOs using multiple AI systems simultaneously, covering: how to structure vendor contracts to clarify AI accountability, how to log AI-assisted decisions for attribution purposes, how to report multi-vendor AI incidents to donors in a way that demonstrates governance without exposing the organization to disproportionate liability.

---

## 04 — Compliance Context

### Geneva/Swiss specific regulatory and professional obligations

---

**1. FADP Art. 22 — Automated Decision-Making Rights**

The revised Federal Act on Data Protection (FADP) grants data subjects the right not to be subject to a decision based solely on automated processing that produces legal effects or similarly significant effects concerning them. This applies to beneficiary targeting and resource allocation AI systems used by Geneva NGOs. Exceptions require explicit legal basis (consent or contractual necessity) and the right to human review must be available. For NGOs: AI-assisted beneficiary decisions that are not purely automated still trigger transparency obligations (Art. 19 FADP) — the data subject must be informed when AI is involved in the decision. The practical exposure: most Geneva NGOs using AI for beneficiary prioritization are either making purely automated decisions without compliant exceptions, or using AI-influenced decisions without adequate transparency disclosure.

**2. EU AI Act Downstream via Institutional Funding**

While the EU AI Act does not directly apply to Swiss NGOs, EU institutional donors (DG INTPA, EuropeAid, EU Delegations) are increasingly incorporating AI governance requirements into grant conditions. For NGOs receiving EU development funding, this effectively imports certain EU AI Act obligations: high-risk system identification, conformity documentation, and incident reporting. The EU AI Act's provisions on providers and deployers in the development cooperation sector are flowing downstream into Swiss NGO compliance obligations through contractual mechanisms rather than direct regulatory application. This is a structurally important distinction: the obligation exists but the legal certainty around it is low, creating ambiguity that sophisticated NGOs must navigate without clear guidance.

**3. Swiss Data Sovereignty Requirements — Cantonal and Institutional**

Swiss Development Cooperation (SDC) and Geneva cantonal government contracts are increasingly requiring Swiss data residency for programs involving beneficiary data. The NCSC recommends Swiss-hosted infrastructure for sensitive government-adjacent data processing. FADP adequacy considerations under international data transfer rules add a further layer: data transferred to AI tools processed on servers outside Switzerland may require adequacy confirmation or standard contractual protections. For NGOs: the practical problem is that Swiss-hosted AI alternatives to major global platforms are limited in variety, higher in cost, and not always equivalent in functionality. The compliance requirement exists; the viable market solution does not fully exist yet.

**4. FADP 72-Hour Breach Notification**

FADP Art. 24 requires notification of data breaches to the FDPIC "as soon as possible" and no later than 72 hours after becoming aware. Unlike GDPR's "72 hours after the breach was discovered," the FADP phrasing creates ambiguity about when the clock starts. The practical implication for Geneva NGOs: the 72-hour clock is measured from when the organization becomes aware of a breach. AI-specific breach vectors (prompt injection, API-level exfiltration, third-party AI vendor breaches) are technically sophisticated. Detection timelines for these vectors at resource-constrained NGOs significantly exceed 72 hours. Non-compliance is not necessarily willful — it is structurally built into the operating reality of organizations with limited security infrastructure.

**5. ZEWO AI Governance Guidance Evolution**

ZEWO's quality label for Swiss charitable organizations is evolving to incorporate AI governance expectations into SWISS GAAP FER 21 reporting. ZEWO has not published prescriptive AI governance standards, but its evolving guidance signals a direction: organizations with ZEWO certification will increasingly be expected to document their AI usage, demonstrate data protection practices applied to AI tools, and show that AI governance is addressed at the organizational level. For smaller ZEWO-certified NGOs, this creates a compliance preparation burden without a clear compliance pathway — they know AI governance will be asked about; they do not know what the minimum acceptable standard is.

**6. Council of Europe AI Convention — Geneva Application**

Switzerland is in the process of ratifying the Council of Europe AI Convention. Once in force, the Convention applies to AI systems used in contexts affecting fundamental rights, including social services, migration support, and humanitarian program delivery — areas where Geneva NGOs frequently operate under cantonal and municipal government contracts. The Convention requires: transparency on AI use, human rights impact assessment, accountability mechanisms, and non-discrimination obligations. For NGOs delivering government-funded programs with AI tools, the Convention's ratification will create additional governance expectations that flow through their government contracting relationships. Most affected NGOs have not yet identified this as a relevant compliance dimension.

---

## 05 — Lead Magnet Draft

### In Sergio's voice — EN + FR

---

**English Version**

---

**The Geneva NGO AI Governance Briefing**
*A 90-minute structured advisory session for executive directors and program managers navigating AI obligations without a compliance department*

---

If you lead a Geneva-based NGO, international organization, or tech nonprofit deploying AI in your programs, you are navigating a specific set of pressures: institutional donors adding AI governance conditions to grant agreements, FADP obligations that apply to your beneficiary data, data sovereignty expectations from Swiss public funders, and a practical AI environment that has outpaced your organizational capacity to govern it.

You do not need a generic AI governance framework. You need to understand what applies to your organization specifically, in what sequence, at what priority — and you need that in language that is precise without being technical.

This is what the briefing does.

---

**What the session covers**

The Geneva NGO AI Governance Briefing is a 90-minute structured advisory session, delivered via video call, focused on your specific situation. Before the session, you complete a short intake covering your AI tool usage, your institutional donor relationships, and your current data governance posture. I review that intake and prepare a briefing specific to your organization.

The session covers:

- Which regulatory obligations currently apply to your AI usage (FADP, ZEWO where relevant, donor-specific conditions, and the AI Convention once ratified) — and which are approaching but not yet active
- How to assess whether your beneficiary-facing AI systems trigger FADP Art. 22 automated decision-making obligations, and what practical compliance looks like at your resource level
- The EU AI Act downstream question: how your EU institutional funding relationships create effective compliance obligations even though the Act does not directly apply to you, and what minimum documentation positions you to respond to donor requests
- Your Swiss data sovereignty obligations: what they mean in practice given the current market for Swiss-hosted AI tools, and how to manage the gap between the requirement and the available infrastructure
- Your AI incident response posture: what constitutes an AI-related incident in your context, what reporting obligations exist across your donor portfolio, and how to build a response capability proportionate to your organization size
- A prioritized sequencing of actions: where to focus first, what can wait, and what a realistic 90-day governance improvement pathway looks like for a team of your size

---

**Format**

- Duration: 90 minutes, video call
- Pre-session: intake form (10 minutes to complete)
- Deliverable: post-session briefing summary document covering the key findings and recommended sequencing from the session
- Follow-up: 30-day check-in email with brief status update and clarification questions

---

**Investment**

CHF 2,400 per session

This includes the intake review, 90-minute briefing, post-session summary document, and 30-day follow-up.

---

**What this is not**

This is not a compliance audit. It is not a data protection impact assessment. It is not a one-size-fits-all framework presentation. It is a structured advisory conversation calibrated to your specific operating context, your donor portfolio, and your current governance posture. It positions you to make informed decisions about where to invest your limited governance capacity — and to communicate your governance approach to your board and your donors with precision.

---

**How to proceed**

If this is relevant to your situation, send a brief message to sergio@digitalcoa.ch with the subject line "NGO AI Briefing." Tell me what kind of organization you lead, your approximate size, and what is currently creating the most pressure on your AI governance question. I will respond with logistics and the intake form.

---

**Version française**

---

**Briefing sur la Gouvernance de l'IA pour les ONG de Genève**
*Une session consultative structurée de 90 minutes pour директоры exécutifs et responsables de programme*

---

Si vous dirigez une ONG basée à Genève, une organisation internationale ou un organisme à but non lucratif technologique qui déploie l'IA dans ses programmes, vous naviguez un ensemble spécifique de pressions : des donateurs institutionnels qui ajoutent des conditions de gouvernance de l'IA aux accords de subvention, des obligations du LFPD qui s'appliquent à vos données de bénéficiaires, des attentes de souveraineté des données de la part des financeurs publics suisses, et un environnement d'IA pratique qui a dépassé la capacité de votre organisation à le gouverner.

Vous n'avez pas besoin d'un cadre générique de gouvernance de l'IA. Vous avez besoin de comprendre ce qui s'applique spécifiquement à votre organisation, dans quel ordre, avec quelle priorité — et vous en avez besoin dans un langage précis sans être technique.

C'est ce que fait ce briefing.

---

**Contenu de la session**

Le Briefing sur la Gouvernance de l'IA pour les ONG de Genève est une session consultative structurée de 90 minutes, dispensée par visioconférence, axée sur votre situation spécifique.

La session couvre :

- Quelles obligations réglementaires s'appliquent actuellement à votre utilisation de l'IA (LFPD, ZEWO le cas échéant, conditions spécifiques aux donateurs, et la Convention sur l'IA une fois ratifiée)
- Comment évaluer si vos systèmes d'IA orientés vers les bénéficiaires déclenchent les obligations du LFPD art. 22 relatives aux décisions automatisées
- La question de la downstream de l'IA Act de l'UE : comment vos relations de financement institutionnel avec l'UE créent des obligations de conformité effectives même si l'Acte ne s'applique pas directement à vous
- Vos obligations de souveraineté des données suisses : ce qu'elles signifient en pratique étant donné le marché actuel d'outils d'IA hébergés en Suisse
- Votre posture de réponse aux incidents d'IA : ce qui constitue un incident lié à l'IA dans votre contexte, quelles obligations de signalement existent, et comment construire une capacité de réponse proportionnée à la taille de votre organisation
- Un séquencement priorisé des actions : où concentrer vos efforts en premier

---

**Format**

- Durée : 90 minutes, visioconférence
- Pré-session : formulaire d'intake (10 minutes)
- Livrable : document de synthèse post-session
- Suivi : email de contrôle à 30 jours

---

**Investissement**

CHF 2 400 par session

---

**Pour commencer**

Envoyez un message à sergio@digitalcoa.ch avec comme objet « Briefing ONG IA ». Décrivez votre organisation et la pression principale sur votre gouvernance de l'IA. Je vous réponds avec les modalités et le formulaire d'intake.

---

## 06 — Findings Summary

### Six net-new insights for C215 Phase 04 — distinct from C214 Phase 04

---

**Finding 1: FADP Art. 22 Automated Decision-Making Rights in NGO Beneficiary Systems — An Active Legal Obligation Most Organizations Do Not Know They Carry**

The revised FADP grants individuals the right not to be subject to a solely automated decision that produces legal or similarly significant effects. Geneva NGOs using AI for beneficiary targeting, prioritization, and resource allocation are operating in the direct scope of this provision. Most do not have the documentation infrastructure to demonstrate a valid exception (legitimate interest or contractual necessity), the human review mechanisms required for Art. 22 compliance, or the transparency notices required under Art. 19 FADP. This is not a future regulatory risk — it is an existing obligation under Swiss law. The advisory market has not produced a practical compliance pathway for the specific NGO context: how to restructure beneficiary-facing AI decisions to be FADP-compliant at a resource level appropriate to a 15-to-80-person organization.

*Distinct from C214 Finding 1 (staff governance gap creating donor liability): C214 addressed the organizational infrastructure gap around staff AI usage. This finding addresses the specific legal rights regime under FADP Art. 22 that applies to beneficiary ADM decisions — a distinct legal obligation with its own compliance architecture, not covered in C214.*

---

**Finding 2: EU AI Act Downstream — The Indirect Regulatory Burden That EU-Funded Geneva NGOs Have Not Yet Internalized**

The EU AI Act does not directly apply to Swiss NGOs. EU institutional donors, however, are incorporating its logic into grant conditions: high-risk system documentation, conformity evidence, and incident reporting requirements are flowing downstream through contractual mechanisms. For a Geneva NGO with EU development funding, this creates a practical compliance obligation that is not clearly labeled as EU AI Act compliance. The failure: NGOs respond reactively to donor requests for AI documentation without having assessed which of their AI systems qualify as high-risk under the Act's classification, and without the documentation infrastructure to respond credibly. The structural problem is that EU AI Act obligations for Swiss NGOs arrive through multiple donor channels simultaneously, making them easy to underestimate and easy to mishandle.

*Distinct from C214 Finding 5 (UNAIWG contractual downstream): C214 addressed UNAIWG obligations from UN agency implementing partner relationships. This finding addresses the EU AI Act specifically — a different regulatory framework, flowing through EU development funding channels, with different classification logic and different documentation requirements.*

---

**Finding 3: Swiss Data Sovereignty Infrastructure Gap — Donor Requirements Exceeding Available Market Solutions**

Swiss institutional donors and cantonal government contractors increasingly require Swiss data residency for beneficiary data processed through AI tools. The NCSC baseline recommendations reinforce this direction. The market gap: Swiss-hosted AI alternatives to global platforms are limited in variety, higher in cost, and not always equivalent in functionality for NGO program delivery needs. The consequence: NGOs are being held to a compliance standard (Swiss-hosted infrastructure) that the market does not fully satisfy. This creates a structural gap between the obligation and the available solution set — and NGOs are absorbing this gap informally, without a documented risk assessment or a formal deferral pathway. No advisory product has addressed this specific infrastructure-availability gap for the Geneva NGO context.

*Distinct from C214 Finding 4 (ZEWO certification pressure): C214 addressed ZEWO's evolving AI governance guidance as a compliance driver. This finding addresses a separate mechanism: the infrastructure availability problem created by data sovereignty requirements — not the certification standard itself, but the practical mismatch between what donors require and what the market can supply.*

---

**Finding 4: AI Incident Reporting Fragmentation Across Donors — Compliance Resources Spent on Template Management Rather Than Incident Capability**

Institutional donors — SDC, EU development agencies, UN agencies — are independently developing AI incident reporting requirements with different definitions of what constitutes an AI incident, different notification timelines, and different documentation formats. A Geneva NGO with a diversified donor portfolio faces three parallel reporting obligations with no common framework. The market failure: NGOs are investing compliance capacity in managing donor-specific templates rather than building the underlying incident detection and response infrastructure those templates presuppose. The fragmentation also means no cross-organizational learning from AI incidents — each organization's incident experience benefits only its own donor, not the sector. No common AI incident taxonomy or shared reporting framework exists for Geneva NGOs.

*Distinct from C214 Finding 2 (donor visibility/confidentiality paradox): C214 addressed the structural conflict between donor visibility demands and beneficiary data protection. This finding addresses the separate operational problem of AI incident reporting fragmentation — the multiplicity of donor-specific formats and definitions creating compliance overhead independent of the visibility/confidentiality tension.*

---

**Finding 5: The 72-Hour FADP Breach Notification Clock Versus NGO Detection Capacity — A Structural Mismatch With No Practical Resolution**

The FADP requires breach notification to the FDPIC within 72 hours of becoming aware. AI-specific breach vectors — prompt injection attacks, API-level data exfiltration, vendor-side AI model breaches — are technically sophisticated. Detection timelines for these vectors at resource-constrained NGOs significantly exceed 72 hours in practice. The 72-hour clock measures from awareness, not from the breach itself. But awareness at a small NGO without dedicated security monitoring is structurally slow. The consequence: NGOs that experience AI-related breaches will frequently be non-compliant with the FADP notification requirement through operational incapacity rather than willful violation. No practical framework exists for how a 15-to-50-person Geneva NGO should structure its AI-specific breach detection to satisfy the FADP's notification timeline given its actual monitoring capacity.

*Distinct from C214 Finding 6 (Monday morning operationalization gap): C214 addressed the absence of a practical pathway from AI governance awareness to action for NGO executives. This finding identifies a specific, legally consequential operational problem — the FADP 72-hour notification clock — and surfaces the structural mismatch between that obligation and NGO detection capacity as a discrete compliance risk requiring its own operational response design.*

---

**Finding 6: Multi-Vendor AI Harm Attribution — The Accountability Gap in Joint AI Decision Environments That No Existing Framework Addresses**

Geneva NGOs using multiple AI systems simultaneously — beneficiary management platforms, program analytics, staff use of commercial AI tools — face a harm attribution problem that existing AI governance frameworks do not resolve: when an AI-assisted program decision produces a harmful outcome, the accountability chain across vendors, the NGO, and its institutional partners is undefined. Vendors contractually default to "the decision was yours." NGOs are left bearing reputational and legal accountability for harms they cannot technically attribute. No existing AI governance framework — UNAIWG, ICRC AI ethics, OECD AI Principles — provides a practical attribution standard for multi-vendor AI harm in the NGO program delivery context. No donor-facing reporting template addresses multi-party AI incident accountability. This is a structural gap in the accountability architecture that most Geneva NGOs using multiple AI tools are currently exposed to without knowing it.

*Distinct from C214 Finding 3 (humanitarian AI vendor credibility shield): C214 addressed the dynamic of humanitarian AI vendors leveraging sector credibility to reduce NGO governance scrutiny. This finding addresses a structurally different problem: the technical and contractual impossibility of attributing harm in multi-vendor AI environments — a problem that affects the NGO even when dealing with fully vetted, credible AI vendors.*

---

*Phase 04 C215 complete — 6 net-new findings, distinct from C214 Phase 04.*
*ICP language EN+FR captured, market signals documented, competitive gap analysis completed, compliance context mapped (FADP Art. 22, EU AI Act downstream, Swiss data sovereignty, FADP breach notification, ZEWO evolution, AI Convention), lead magnet drafted in Sergio's voice EN+FR (CHF 2,400 / 90-min briefing).*
