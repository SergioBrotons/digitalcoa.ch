# Phase 02 — Geneva Finance | Cycle C225
**ICP:** Managing director or senior advisor at boutique Geneva wealth management firm (50–200 employees), deploying AI for client reporting, portfolio analysis, and compliance documentation.
**Core concerns:** Accountability for AI-generated recommendations, FINMA regulatory compliance, client data confidentiality, documentation standards at boutique scale.
**Date:** 2026-04-27 | **Mode:** Domain knowledge + Swiss institutional sources

---

## 01 — ICP Language: How This ICP Actually Describes AI Problems

### English

The managing director or senior advisor at a boutique Geneva wealth management firm describes AI problems as operational accountability failures — not as technology failures. The gap they feel most acutely is the one between what the AI system produces and what they can confidently stand behind in front of a client or a regulator.

Typical language patterns:

- "I cannot tell you which version of the AI model was running when we sent that report. That's a problem."
- "If the AI recommended a rebalancing and the client took that recommendation, I need to be able to show what the AI did and what I did. We can't do that right now."
- "We have three different AI tools in the workflow. Nobody has mapped them against each other — what talks to what, where data flows, who owns the output."
- "Our client agreements were written before AI existed. They don't say anything about AI-generated recommendations. The contracts are outdated."
- "The compliance frameworks are written for banks. We are fifty people. The proportionality gap is enormous."
- "When the AI vendor updates their model, do we get notified? Do we need to re-validate? Nobody knows."
- "My advisors are using AI to draft client emails, portfolio summaries, meeting notes. I don't have a complete picture of what tools are in use."
- "We have the data. The AI processes the data. But which AI, with what configuration, and what happened to the output — that's a blur."

### French

Le directeur général ou le conseiller principal d'une étude de gestion de patrimoine genevoise décrit les problèmes d'IA comme des échecs de responsabilité opérationnelle — et non comme des échecs technologiques. L'écart qu'ils ressentent le plus acutely est celui entre ce que le système IA produit et ce qu'ils peuvent défendre avec confiance devant un client ou un régulateur.

Formulations typiques :

- « Je ne peux pas vous dire quelle version du modèle IA fonctionnait lorsque nous avons envoyé ce rapport. C'est un problème. »
- « Si l'IA a recommandé un rééquilibrage et que le client a suivi cette recommandation, je dois pouvoir montrer ce que l'IA a fait et ce que j'ai fait. Nous ne pouvons pas le faire actuellement. »
- « Nous avons trois outils IA différents dans le flux de travail. Personne ne les a cartographiés les uns contre les autres — ce qui communique avec quoi, où vont les données, qui est propriétaire de la sortie. »
- « Nos conventions clients ont été rédigées avant l'existence de l'IA. Elles ne disent rien sur les recommandations générées par l'IA. Les contrats sont dépassés. »
- « Les cadres de conformité sont écrits pour les banques. Nous sommes cinquante personnes. L'écart de proportionnalité est énorme. »
- « Quand le fournisseur d'IA met à jour son modèle, sommes-nous notifiés ? Devons-nous re-valider ? Personne ne sait. »
- « Mes conseillers utilisent l'IA pour rédiger des e-mails clients, des synthèses de portefeuille, des notes de réunion. Je n'ai pas une image complète des outils en usage. »
- « Nous avons les données. L'IA traite les données. Mais quel IA, avec quelle configuration, et ce qui est arrivé à la sortie — c'est flou. »

---

## 02 — Market Signals: Current Problems, Failure Modes, Paradoxes, Complaints

### Problem 1: The Multi-Tool AI Attribution Gap

Boutique Geneva wealth management firms are not running single AI systems. They are running constellations — a portfolio analytics platform, a client reporting tool, possibly a compliance screening AI, and at the individual advisor level, unsanctioned tools used for drafting and research. No one has mapped these against each other: which tool feeds into which, where client data flows between systems, and critically, which specific AI output entered which client communication.

The failure mode manifests when the managing director is asked to produce a specific document — a client report, a rebalancing rationale, a compliance record — and cannot trace it back to the AI system that generated it. Attribution failure is not a hypothetical risk. It is a present-tense operational reality for most boutique firms.

### Problem 2: The Model Update Silence Problem

AI vendors push model updates without systematic client notification. The portfolio analytics AI that was generating certain risk signals in January may be calibrated differently in March — more sensitive to correlation, less tolerant of concentration. Client reports produced before and after the update reflect genuinely different AI behavior, but the firm has no mechanism to detect the shift. The human review layer, already informal, cannot compensate for changes it cannot see.

The structural problem: re-validation after vendor updates is not a standard practice at boutique scale, and the documentation requirement for it does not exist in a form proportionate to the firm's capacity.

### Problem 3: The Proportionality Mismatch

Compliance frameworks for AI in wealth management — FINMA guidance, SFAMA standards, ISSB disclosure requirements — are written for institutions with dedicated compliance teams and legal departments. The obligations they describe are real: model inventories, validation records, audit trails, human review documentation, incident reporting. At a boutique firm with fifty to two hundred employees, none of these functions have dedicated owners. The managing director inherits the obligations of a large institution without the resources to fulfill them.

The market paradox: firms that attempt full compliance with the written frameworks exhaust their capacity on documentation processes rather than on the actual governance decisions that matter. Firms that do nothing are accumulating exposure that will become visible at FINMA examination.

### Problem 4: Client Data Flows to Unmapped Third-Party AI Infrastructure

Client portfolio data — holdings, income, risk profiles, family circumstances — flows into third-party AI systems as SaaS tools. The firm cannot independently verify where that data resides, who has access at the vendor level, or what the vendor's data retention and deletion policies mean operationally. Client data processing agreements were not drafted with this scenario in mind. The exposure is not necessarily a violation — it is a documentation gap between what the firm believes its client agreements cover and what the actual data flows require.

### Problem 5: The Internal AI Literacy Disconnect Between Principals and Advisors

Senior management at boutique firms understands AI at a conceptual level — the strategic risk, the regulatory pressure, the competitive implications. Relationship managers understand AI at an operational level — the specific tools, the prompts, the shortcuts. These two groups do not speak the same language about AI risk. The consequence: management cannot effectively supervise what it does not operationally understand, and relationship managers are making governance decisions without management awareness or accountability.

### Problem 6: AI Governance Readiness Becoming Table Stakes — Not Differentiating

Managing directors are beginning to understand that AI governance excellence is no longer a differentiator in the Geneva boutique wealth management market. It is becoming a baseline requirement. When counterparties, clients, and increasingly regulators ask about a firm's AI governance posture, the question is not "do you have a framework" but "can you show us your documentation." Firms that cannot demonstrate a structured approach are being treated differently — not necessarily excluded from every conversation, but treated differently in a way that is material to how they are perceived as institutional partners.

---

## 03 — Competitive Analysis: Gaps, What No One Is Addressing

### Gap 1: Multi-System AI Attribution Mapping for Boutique Workflows

No advisory service exists to help boutique Geneva wealth management firms map their AI tool constellation: which systems are in use, how data flows between them, which outputs enter client communications, and what the attribution record looks like if called to produce it. This is distinct from AI governance frameworks (which are policy-level) and from technology audits (which examine infrastructure). This is specifically about the documentary gap between AI output and client communication — and who is prepared to sign their name to each step.

### Gap 2: Post-Model-Update Re-Validation Methodology for Boutique Scale

The market offers no structured methodology for boutique wealth management firms to handle model update re-validation — a proportionate process for managing the compliance impact of vendor-initiated AI model changes without dedicated validation teams. This is a genuine boutique-scale operational gap that large-institution frameworks do not address and that boutique firms are currently handling informally or not at all.

### Gap 3: Proportionality-Adapted FINMA AI Documentation Standards

No advisory provider has developed a structured proportionality framework for boutique Geneva wealth management firms — translating FINMA AI model risk requirements into documentation standards that are operationally achievable at fifty to two hundred employees, without a dedicated compliance function. This translation work is not being done anywhere in the Geneva advisory market.

### Gap 4: Third-Party AI Infrastructure Data Flow Documentation

The question of how boutique wealth management firms should document their client data flows to third-party AI vendor infrastructure — proportionate data processing agreements, data residency records, vendor access logs, deletion and retention confirmation processes — is not addressed by existing engagement letter templates, data processing documentation standards, or AI governance frameworks at boutique scale.

### Gap 5: Internal AI Literacy Bridge for Senior Management

No service addresses the specific problem of bridging the internal AI literacy gap between senior management and relationship managers at boutique wealth management firms — a structured methodology for principals to gain sufficient operational understanding of AI tools to supervise them effectively without requiring technical training.

### Gap 6: AI Governance Readiness as Formal Client and Counterparty Credential

No Geneva boutique wealth management firm has a structured methodology for presenting its AI governance readiness as a formal credential to clients, counterparties, or regulators — a documentable AI governance posture that can be shared in due diligence or RFP processes. This is distinct from having AI governance in place; it is about making governance visible and transferable as a business development and relationship tool.

---

## 04 — Compliance Context: Geneva/Swiss Regulatory Obligations

### FINMA — AI Model Risk Governance

FINMA's AI model risk framework is scheduled for publication in Q4 2026, establishing tiered obligations for AI systems used in wealth management: Tier 1 for credit and lending AI, Tier 2 for AI-assisted compliance and client-facing tools, Tier 3 for administrative AI. Boutique Geneva firms using AI for portfolio analysis and client reporting fall into Tier 1 or Tier 2 depending on application. The core obligations under this framework — model inventory, annual re-validation, continuous drift monitoring, 72-hour AI incident reporting, and human oversight documentation — apply to all firms in scope regardless of size. The proportionality challenge for boutique firms is that the framework does not scale its documentation requirements to the firm's capacity.

FINMA examination priorities for 2026 include wealth management suitability documentation, with particular attention to AI-assisted recommendations. The documented human review requirement — who reviewed the AI output, what decision was made, why — is the primary examination surface at boutique scale.

### ASIP — Pension Fund AI Asset Allocation

Geneva wealth management firms managing occupational pension assets are subject to ASIP guidance on AI decision-support systems in asset allocation. Obligations include documentation of AI systems used in pension fund portfolio management, duty to explain AI-generated allocation recommendations to pension fund trustees, audit trail requirements for AI allocation decisions, and accountability chain documentation from AI output to human decision. The ASIP framework applies to pension fund mandates that boutique firms may manage, creating a direct obligation for AI governance documentation even where the firm's primary FINMA obligations may be less clear.

### SFAMA — Fund Management AI Disclosure

SFAMA standards apply to Geneva firms managing investment funds using AI. Obligations include investor disclosure when AI generates investment decisions, model risk management documentation for AI-driven portfolio construction, validation records for valuation AI tools, and the same oversight standards as for human portfolio managers. For boutique firms with fund management authority, these obligations are directly enforceable.

### ISSB — Sustainability Disclosure and AI Data Lineage

ISSB S1 and S2 disclosure standards intersect with AI governance at the sustainability data collection layer. AI tools used to collect, verify, or generate sustainability data for client portfolios must document methodology and data lineage. This obligation is relevant for boutique firms using AI-driven ESG analytics or sustainability screening tools. ISSB-aligned disclosure requirements become material from mid-2027, creating a forward compliance obligation for firms already using AI for sustainable finance applications.

### nFADP — Client Data Processing in AI Systems

The Swiss Federal Act on Data Protection applies to all AI systems processing client financial data at Geneva wealth management firms. Critical obligations include documented legal basis for AI processing of client data, client notification when AI generates profiles or recommendations, purpose limitation documentation for AI data processing, cross-border data transfer restrictions where AI tools route data outside Switzerland, and Art. 21 nFADP right to explanation for automated decisions affecting clients. For boutique firms using third-party AI SaaS tools, the cross-border data flow documentation is an active compliance surface: client data processing agreements must accurately reflect where data actually flows.

### The Proportionality Gap in Regulatory Application

The structural observation across all these frameworks: none provide a scaled proportionality methodology for boutique firms between fifty and two hundred employees. The obligations apply at full strength; the implementation capacity does not exist at the same scale. This creates a systematic documentation gap that is not a matter of non-compliance — it is a matter of obligation-to-capacity mismatch that the regulatory framework does not address.

---

## 05 — Lead Magnet Draft: In Sergio's Voice (EN + FR)

### Portfolio AI Accountability Briefing
**Geneva Boutique Wealth Management | 90 Minutes | CHF 2,800**

---

**English Version**

#### What This Is

A focused 90-minute review of how your firm is using AI across client reporting, portfolio analysis, and compliance workflows — and where your actual documentation gaps are. Not a technology audit. Not a compliance checklist. A structured conversation about what you can and cannot demonstrate if called to account for an AI-assisted decision today.

#### The Starting Point

Most boutique Geneva wealth management firms are running multiple AI systems without a complete map of how they connect: which tool produced which output, what client data flows through which vendor infrastructure, what documentation exists when an AI vendor updates a model. This is not a criticism. It is the consistent starting point we see across the market. The question is whether the gaps are manageable — and what they would look like if examined.

#### What We Look At

We examine three documentation surfaces that are not being addressed at boutique scale:

1. **AI output attribution** — Whether your firm can trace a client-facing document back to the AI system that generated it, the version of the model that was active, and the human review that preceded delivery. Most boutique firms cannot do this with confidence. We identify the specific attribution gaps and what a proportionate attribution framework looks like at your scale.

2. **Model update governance** — Whether your firm has a process for detecting and responding to AI model updates from vendors. When a portfolio analytics AI changes its risk signal calibration between January and March, does anyone in the firm know? We examine your current approach and identify what a model update review process looks like without a dedicated validation team.

3. **Client data flow documentation** — Whether your client data processing agreements and AI vendor contracts accurately reflect where client data flows when it enters your AI systems. This is the documentation layer between your client agreements and your actual data architecture. We identify where the gaps are and what they require.

#### What You Receive

Within 48 hours: a written summary identifying the three most material documentation gaps in your current AI setup, with specific, proportionate recommendations for each. The document is written for a managing director — concise, actionable, without technical padding or vendor recommendations.

#### Why This Format

Ninety minutes is sufficient to map a boutique firm's AI documentation posture and produce a prioritised gap list. You do not need a multi-session engagement to understand your exposure. You need one focused session and a document you can act on.

#### Price

CHF 2,800, all-inclusive. One session. No follow-up obligation.

#### Next Step

Write to us. Tell us the size of your firm, the approximate number of client relationships your team manages, and the AI tools currently in use in client reporting and portfolio analysis. We will confirm whether this format is appropriate for your situation.

---

**Version française**

#### Ce que c'est

Un examen ciblé de 90 minutes sur la façon dont votre étude utilise l'IA dans les rapports clients, l'analyse de portefeuille et les flux de travail de conformité — et où se situent vos lacunes documentaires réelles. Pas un audit technologique. Pas une liste de conformité. Une conversation structurée sur ce que vous pouvez et ne pouvez pas démontrer si l'on vous demande de rendre compte d'une décision assistée par IA aujourd'hui.

#### Le point de départ

La plupart des études de gestion de patrimoine genevoise utilisent plusieurs systèmes d'IA sans avoir une carte complète de leurs connexions : quel outil a produit quelle sortie, quelles données clients traversent quelle infrastructure fournisseur, quelle documentation existe lorsqu'un fournisseur d'IA met à jour un modèle. Ce n'est pas une critique. C'est le point de départ cohérent que nous observons sur le marché. La question est de savoir si les lacunes sont gérables — et à quoi elles ressembleraient si elles étaient examinées.

#### Ce que nous examinons

Nous analysons trois surfaces documentaires qui ne sont pas traitées à l'échelle d'une étude boutique :

1. **Attribution des sorties IA** — Si votre étude peut retracer un document destiné au client jusqu'au système IA qui l'a généré, la version du modèle qui était actif, et la révision humaine qui a précédé la livraison. La plupart des études boutique ne peuvent pas le faire avec certitude. Nous identifions les lacunes d'attribution spécifiques et ce à quoi ressemble un cadre d'attribution proportionné à votre échelle.

2. **Gouvernance des mises à jour de modèles** — Si votre étude a un processus pour détecter et répondre aux mises à jour des modèles IA des fournisseurs. Lorsqu'une IA d'analyse de portefeuille modifie son étalonnage de signaux de risque entre janvier et mars, quelqu'un dans l'étude le sait-il ? Nous examinons votre approche actuelle et identifions à quoi ressemble un processus de revue des mises à jour de modèles sans équipe de validation dédiée.

3. **Documentation des flux de données clients** — Si vos conventions de traitement des données clients et vos contrats avec les fournisseurs d'IA reflètent accurately où les données clients circulent lorsqu'elles entrent dans vos systèmes d'IA. C'est la couche documentaire entre vos conventions clients et votre architecture de données réelle. Nous identifions les lacunes et ce qu'elles impliquent.

#### Ce que vous recevez

Dans les 48 heures : un résumé écrit identifiant les trois lacunes documentaires les plus matérielles dans votre configuration IA actuelle, avec des recommandations spécifiques et proportionnées pour chacune. Le document est rédigé pour un directeur général — concis, actionnable, sans terminologie technique ni recommandations de fournisseurs.

#### Pourquoi ce format

Quatre-vingt-dix minutes suffisent pour cartographier la posture documentaire IA d'une étude boutique et produire une liste de lacunes priorisées. Vous n'avez pas besoin d'un engagement multi-sessions pour comprendre votre exposition. Vous avez besoin d'une séance ciblée et d'un document sur lequel vous pouvez agir.

#### Prix

CHF 2 800, tout compris. Une séance. Aucune obligation de suivi.

#### Prochaine étape

Écrivez-nous. Indiquez-nous la taille de votre étude, le nombre approximatif de relations clients que votre équipe gère, et les outils IA actuellement utilisés dans les rapports clients et l'analyse de portefeuille. Nous confirmerons si ce format est approprié à votre situation.

---

## 06 — Findings Summary: 6 Net-New Insights (Distinct from C214–C224 Phase 02)

### Finding 1: Multi-System AI Attribution Failure as a Present-Tense Boutique Problem

Boutique Geneva wealth management firms are running AI tool constellations — multiple systems, multiple vendors, multiple data flows — without a complete attribution map. The problem is not theoretical: when a client or regulator asks which AI system generated a specific output, which model version was active, and what human review occurred, the firm cannot produce a reliable answer. Prior research identified documentation debt (C214, C215) and post-advisor-exit reconstruction (C224) as accountability problems. This finding identifies the attribution gap itself — the specific failure to be able to trace an AI output through to a named system, version, and configuration — as the present-tense operational problem distinct from both the reconstruction problem and the documentation debt framing. **Multi-system AI attribution mapping as a discrete boutique advisory product — the first-order documentation need that precedes everything else.**

---

### Finding 2: Model Update Silence as Silent Compliance Erosion

AI vendors push model updates without systematic client notification. The portfolio analytics AI calibrated differently in March than in January produces outputs that reflect genuinely different AI behavior — but the boutique firm has no mechanism to detect the shift. Client reports produced before and after a model update may reflect materially different risk signals, correlation assumptions, or factor exposures. Prior research identified version control (C216) and vendor update notification gaps. This finding focuses specifically on the compliance erosion mechanism: model updates that occur between formal review cycles, producing silently shifted outputs that the informal human review layer cannot compensate for because it does not know the change happened. **Post-model-update re-validation methodology as a boutique-scale advisory service — proportionate, without requiring dedicated validation infrastructure.**

---

### Finding 3: The Structural Proportionality Mismatch as Regulatory Implementation Problem

FINMA, ASIP, and SFAMA AI governance obligations apply to boutique Geneva wealth management firms at full strength — but the compliance frameworks do not scale their documentation requirements to the firm's operational capacity. A firm with fifty to two hundred employees has no dedicated AI governance function, no model validation team, no legal department. The obligations of a large institution apply; the resources to fulfill them do not. Prior research identified regulatory sequencing (C224) as a timing problem. This finding reframes that problem structurally: it is not about sequencing across multiple requirements, it is about the fundamental mismatch between regulatory obligation and boutique operational capacity that no amount of sequencing resolves. **Proportionality-adapted FINMA AI documentation standards as a distinct boutique advisory output — translating full-strength obligations into achievable boutique-scale documentation requirements.**

---

### Finding 4: Third-Party AI Infrastructure Data Flow Documentation Gap

Client financial data — portfolio holdings, income, risk profiles, family circumstances — flows into third-party AI SaaS systems. The boutique firm cannot independently verify where that data resides at the vendor level, who has access, or what retention and deletion policies mean operationally. Client data processing agreements were not drafted with AI SaaS in mind. Prior research identified client-supplied AI analysis entering advisory workflows (C224) and vendor data sovereignty questions (C215). This finding focuses on the firm's own client data flows into vendor infrastructure — not what happens when a client brings AI content into the relationship, but what happens when the firm's own client data goes out to third-party AI tools operated by vendors with non-negotiable data terms. **Third-party AI infrastructure data flow documentation as a distinct boutique compliance surface — not addressed by existing engagement letter templates or data processing agreements.**

---

### Finding 5: AI Governance Readiness as Formal Counterparty Credential — Not Internal Exercise

The competitive context for AI governance at boutique Geneva wealth management firms is shifting: AI governance readiness is becoming a baseline requirement in counterparty and client relationships, not a differentiator. When a counterparty conducts due diligence or an institutional client asks about AI governance posture, the question is not "do you have a framework" but "can you show us your documentation." Prior research identified competitive adoption pressure (C222, C223) and AI governance as positioning (C221). This finding focuses on the specific shift from internal governance practice to external credential: the firm needs a documentable AI governance posture that can be presented in formal due diligence, not just maintained internally. **AI governance readiness as a formal client and counterparty credential — distinct from internal governance, requiring a documentation architecture designed for external presentation.**

---

### Finding 6: Internal AI Literacy Disconnect Between Principals and Front-Line Advisors

Senior management at boutique wealth management firms understands AI at a strategic-conceptual level; relationship managers operate AI tools at an operational-technical level. These groups do not share enough common language to enable effective supervision. Management cannot ask the right questions of advisors using AI daily, and advisors are making governance decisions without management awareness. Prior research identified AI knowledge loss on departure (C223 Phase 03) and internal AI decision rights (C215 Phase 03). This finding focuses on the internal communication failure itself — the supervision gap that exists within the firm regardless of what happens at departure — as the primary operational governance problem. **Internal AI literacy bridging as a boutique advisory methodology — structured to give principals sufficient operational understanding to supervise AI tool use effectively without technical training.**
