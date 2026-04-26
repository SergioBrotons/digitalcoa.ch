# Phase 02 — Geneva Finance | Cycle C224
**ICP:** Managing director or senior advisor at boutique Geneva wealth management firm (50–200 employees), deploying AI for client reporting, portfolio analysis, and compliance documentation.
**Core concerns:** Accountability for AI-generated recommendations, FINMA regulatory compliance, client data confidentiality, documentation standards at boutique scale.
**Date:** 2026-04-27 | **Mode:** Domain knowledge + Swiss institutional sources

---

## 01 — ICP Language: How This ICP Actually Describes AI Problems

### English

The managing director or senior advisor at a boutique Geneva wealth management firm does not frame AI problems as technology questions. They frame them as accountability questions — specifically, as the gap between what the AI produces and what they are prepared to sign their name to.

Typical language patterns:

- "I need to be able to explain to a client why the AI recommended this — not just that the AI recommended it."
- "The AI produces a portfolio review in twenty minutes. I need three hours to verify it properly. That's not scaling."
- "If something goes wrong, I need documentation that shows what the AI did and what I did. Right now I don't have that."
- "Our advisors are using AI daily. I can't tell you with confidence what tools they're using or how they're using them."
- "I'm not against AI. I'm against being responsible for something I don't understand."
- "The regulator hasn't told us exactly what they expect yet. That's not the same as being allowed to wait."
- "When an advisor leaves, their AI-enhanced workflow leaves with them. We don't capture any of that."
- "Client data goes into AI tools we didn't fully evaluate. I'm not sure our client agreements cover that."

### French

Le directeur général ou le conseiller principal d'une étude de gestion de patrimoine genevoise ne présente pas les problèmes d'IA comme des questions technologiques. Il les présente comme des questions de responsabilité — spécifiquement, comme l'écart entre ce que l'IA produit et ce qu'il est prêt à signer en son nom.

Formulations typiques :

- « Je dois pouvoir expliquer à un client pourquoi l'IA a recommandé cela — pas seulement que l'IA l'a recommandé. »
- « L'IA produit une revue de portefeuille en vingt minutes. Il me faut trois heures pour la vérifier correctement. Ce n'est pas de la mise à l'échelle. »
- « Si quelque chose tourne mal, j'ai besoin d'une documentation qui montre ce que l'IA a fait et ce que j'ai fait. Actuellement, je n'ai pas cela. »
- « Nos conseillers utilisent l'IA quotidiennement. Je ne peux pas vous dire avec certitude quels outils ils utilisent ni comment. »
- « Je ne suis pas contre l'IA. Je suis contre le fait d'être responsable de quelque chose que je ne comprends pas. »
- « Le régulateur ne nous a pas encore dit exactement ce qu'il attend. Ce n'est pas la même chose que d'être autorisé à attendre. »
- « Quand un conseiller part, son flux de travail enrichi par l'IA part avec lui. Nous ne capturons rien de tout cela. »
- « Les données clients vont dans des outils IA que nous n'avons pas pleinement évalués. Je ne suis pas sûr que nos conventions clients couvrent cela. »

---

## 02 — Market Signals: Current Problems, Failure Modes, Paradoxes, Complaints

### Problem 1: The Advisor-Exit Knowledge Drain

Boutique wealth management firms have invested in AI-enhanced workflows at the individual advisor level — custom prompt configurations, specific toolchains for client reporting, portfolio analysis shortcuts. When a senior advisor departs, that institutional knowledge dissolves. There is no systematic capture of how AI tools were configured, which outputs were relied upon for client communication, or what review processes were applied. The firm retains the AI subscriptions; it loses the operational context.

At 50–200 employees, there is typically no dedicated AI governance function. The managing director inherits this problem without a formal mechanism to reconstruct what happened.

### Problem 2: Portfolio AI Risk Signal Blind Spots

Portfolio analytics AI systems generate risk signals — concentration warnings, correlation alerts, factor exposure shifts. At boutique scale, these signals are often processed by individual relationship managers without cross-client aggregation. A risk signal that appears minor in isolation may become material when viewed across multiple client portfolios managed by the same advisor. Boutique firms lack the systematic infrastructure to detect these patterns.

The failure mode is not that the AI produces wrong output. It is that the AI produces correct per-client output while the firm remains blind to aggregate implications that a larger institution's risk infrastructure would catch automatically.

### Problem 3: Client Reporting Sign-Off Without Verification Structure

AI-generated client reports — portfolio performance summaries, attribution analysis, rebalancing recommendations — are produced efficiently but verified informally. A relationship manager reviews the output, makes minor adjustments, and sends it. The documentation of what was reviewed, what was changed, and why exists only in the manager's memory. This creates an accountability gap: the firm has a record of the AI output but no record of the human review process.

FINMA's documentation expectations do not stop at AI output — they extend to the human oversight layer. Most boutique firms have not built this layer explicitly.

### Problem 4: Regulatory Calendar Uncertainty Creating Decision Paralysis

FINMA has signaled Q4 2026 for AI model risk governance requirements. The EU AI Act creates de facto pressure on Swiss firms with EU counterparty relationships. ISSB disclosure standards are mid-2027. The managing director of a boutique firm faces a compounding regulatory timeline but has no structured methodology to prioritize which requirements to address first and which can be phased.

The paradox: firms that wait for regulatory clarity are accumulating compliance debt. Firms that act now may be building against standards that shift before enforcement begins.

### Problem 5: Client Data Going Into Ungoverned AI Tools

Clients increasingly bring their own AI tools into the advisory relationship — asking the firm to incorporate analysis generated by their personal AI tools, or expecting the firm's AI outputs to integrate with their own AI systems. The firm's client agreements and data processing documentation were not drafted with this scenario in mind. The question of whose AI outputs the firm is responsible for, and under what conditions client-supplied AI analysis enters the advisory workflow, is unresolved at the operational level.

### Problem 6: The Compliance Credibility Gap

AI compliance tooling is being sold to boutique wealth management firms with promises of regulatory coverage. The managing director has no independent framework to evaluate whether a vendor's compliance claims actually cover their obligations under FINMA, ASIP, or SFAMA guidance. The result is that firms purchase compliance tools, believe they are covered, and discover gaps only when examined — at which point the vendor's marketing claims provide no protection.

---

## 03 — Competitive Analysis: Gaps, What No One Is Addressing

### Gap 1: Boutique-Specific AI Accountability Documentation

The market offers AI governance frameworks designed for large institutions — comprehensive, resource-intensive, and proportionate to organizations with dedicated compliance teams. What the boutique wealth management firm needs is a scaled-down accountability documentation system that fits its operating model: fewer than 200 employees, no in-house legal team, AI tools used by relationship managers who are not technologists.

No established advisory provider has specifically positioned a boutique wealth management AI governance service at this scale with pricing and structure that reflect the firm's actual operational capacity.

### Gap 2: Post-Advisor-Departure AI Audit Reconstruction

When a senior advisor leaves a boutique firm, the AI-enhanced workflow they built leaves with them. The firm faces two problems: reconstructing what that advisor's AI practice looked like (for client continuity and liability purposes), and building an institutional capture mechanism so the next departure doesn't repeat the loss.

No service specifically addresses this as a discrete boutique-scale advisory product — a structured methodology for reconstructing AI workflow history after departure, combined with a forward capture system.

### Gap 3: Cross-Client Portfolio AI Risk Aggregation

Systematic portfolio AI risk signal aggregation across multiple client accounts at the boutique level is not addressed by existing tooling or advisory services. The problem requires understanding both the technical architecture of how portfolio analytics AI generates and surfaces risk signals, and the operational workflow of how boutique relationship managers process those signals individually without aggregate oversight.

### Gap 4: Client-AI-Input Integration Responsibility Framework

The question of how to handle client-supplied AI analysis entering the advisory workflow — what the firm's responsibilities are, how to document it, what client agreements need to say — is not addressed in standard engagement letter templates or AI governance frameworks for wealth management firms. This is an emerging problem that most firms have not yet operationalized and for which no standard guidance exists.

### Gap 5: Regulatory Sequencing Advisory for Boutique Scale

The sequence in which a boutique wealth management firm should address its AI governance obligations — which requirements to address first given their timeline and the firm's current state, how to phase implementation without creating new gaps — is not a service offering that exists in the Geneva market. Firms are making these decisions informally, without structured advisory support, based on vendor recommendations or peer observation.

---

## 04 — Compliance Context: Geneva/Swiss Regulatory Obligations

### FINMA — AI Model Risk Governance

FINMA is developing tiered AI model risk classification requirements (Q4 2026 publication target). The framework classifies AI systems by impact level: Tier 1 (credit scoring, algorithmic trading, AI underwriting), Tier 2 (AI-assisted compliance, AML AI, client-facing AI), Tier 3 (AI administrative tools). Boutique Geneva wealth management firms deploying AI for client reporting and portfolio analysis will typically fall into Tier 1 or Tier 2 depending on the specific application.

Key obligations that follow from this classification:
- Comprehensive AI model inventory (purpose, inputs, outputs, validation records, ownership)
- Annual AI model re-validation
- Continuous monitoring for model drift
- AI incident reporting within 72 hours
- Human oversight documentation for AI-generated recommendations

FINMA examination priorities for 2026 include AI wealth management suitability documentation. Geneva private banks using AI advisory platforms must document human review sign-off, client risk profile matching, and client disclosure when recommendations are AI-generated.

### ASIP — Occupational Pension Fund AI Governance

ASIP (Association Suisse des Institutions de prévoyance) governs pension fund AI deployment, particularly for asset allocation AI tools used by pension funds managed by Geneva wealth management firms. Key obligations include:
- Documentation of AI decision-support systems used in asset allocation
- Duty to explain AI-generated recommendations to pension fund trustees
- Audit trail requirements for AI-generated allocation decisions
- Accountability chain documentation from AI output to human decision

### SFAMA — Fund Management Company AI Standards

SFAMA (Swiss Funds and Asset Management Association) standards apply to Geneva asset managers and fund management companies using AI for portfolio management. The SFAMA AI guidance addresses:
- AI-generated investment decisions requiring disclosure to investors
- Model risk management for AI-driven portfolio construction
- Valuation AI tools requiring validation and documentation
- AI for asset allocation requiring the same oversight standards as human portfolio managers

### ISSB — Sustainability Disclosure and AI Intersection

ISSB S1 and S2 disclosure standards (mandatory in Switzerland for listed companies and increasingly relevant for institutional investors) intersect with AI governance in the sustainability data collection layer. AI tools used to collect, verify, or generate sustainability-related data for client portfolios must document their methodology and data lineage — particularly where AI-generated sustainability claims enter client reporting.

Implementation timeline: ISSB-aligned disclosure requirements becoming material from mid-2027.

### nFADP — Client Data Processing and AI Systems

The Swiss Federal Act on Data Protection (nFADP) applies to all AI systems processing client data at Geneva wealth management firms. Key obligations:
- Legal basis for AI processing of client financial data must be documented
- Client notification obligations when AI systems generate profiles or recommendations
- Data minimization: AI tools processing client data must have documented purpose limitation
- Cross-border data transfer restrictions when AI tools route data outside Switzerland
- Art. 21 nFADP: right to explanation for automated decisions affecting clients

The critical intersection with wealth management AI: when AI systems generate portfolio recommendations that affect client investment decisions, the client's right to explanation and human review must be documentable. This is not a theoretical obligation — it applies to every AI-assisted recommendation currently in production.

---

## 05 — Lead Magnet Draft: In Sergio's Voice (EN + FR)

### Portfolio AI Governance Review
**Geneva Boutique Wealth Management | 90 Minutes | CHF 2,800**

---

**English Version**

#### What This Is

A focused 90-minute review of how your firm is currently using AI in client reporting, portfolio analysis, and compliance workflows — and where your accountability exposure lies.

This is not a compliance audit and it is not a technology review. It is a structured conversation about the gap between what your AI tools are producing, what your relationship managers are relying on, and what you would be able to demonstrate to a regulator or a client if something went wrong.

#### What We Look At

We examine three areas:

1. **AI output documentation** — Whether your client reports, portfolio summaries, and rebalancing recommendations have a documented human review trail. At boutique scale, this is typically informal. We make it explicit.

2. **Accountability chain continuity** — What happens to your AI documentation and oversight records when an advisor leaves. Most boutique firms have no structured answer to this. We identify the specific exposure and what a reasonable documentation framework looks like at your scale.

3. **Client data processing consistency** — Whether your client agreements and data processing documentation reflect how AI tools are actually being used today. In most boutique firms, they do not. We identify where the gaps are and what they require.

#### What You Receive

Within 48 hours of the session: a written summary identifying the three most material accountability gaps in your current AI governance setup, with prioritized recommendations for closing each one. No vendor recommendations. No tool marketing. Just the gaps and what to do about them.

#### Why 90 Minutes

At the managing director level, you do not have time for a multi-session engagement to understand your own firm's exposure. 90 minutes is enough to establish a clear picture and leave with a document you can act on.

#### Price

CHF 2,800, all-inclusive. One session. No follow-up obligation.

#### Next Step

Write to us. Tell us the size of your firm and the AI tools your team uses most in client reporting and portfolio analysis. We will confirm whether this format is appropriate for your situation.

---

**Version française**

#### Ce que c'est

Un examen ciblé de 90 minutes sur la façon dont votre étude utilise actuellement l'IA dans les rapports clients, l'analyse de portefeuille et les flux de travail de conformité — et où se situe votre exposition en matière de responsabilité.

Ce n'est pas un audit de conformité et ce n'est pas une revue technologique. C'est une conversation structurée sur l'écart entre ce que vos outils IA produisent, ce sur quoi vos gérants de relation comptent, et ce que vous pourriez démontrer à un régulateur ou à un client si quelque chose tournait mal.

#### Ce que nous examinons

Nous analysons trois domaines :

1. **Documentation des sorties IA** — Si vos rapports clients, synthèses de portefeuille et recommandations de rééquilibrage disposent d'une piste de révision humaine documentée. À l'échelle d'une étude boutique, cela est généralement informel. Nous le rendons explicite.

2. **Continuité de la chaîne de responsabilité** — Ce qui se passe pour vos documents et vos dossiers de surveillance IA lorsqu'un conseiller part. La plupart des études boutique n'ont pas de réponse structurée à cela. Nous identifons l'exposition spécifique et ce qu'un cadre documentaire raisonnable ressemble à votre échelle.

3. **Cohérence du traitement des données clients** — Si vos conventions clients et votre documentation sur le traitement des données reflètent la façon dont les outils IA sont réellement utilisés aujourd'hui. Dans la plupart des études boutique, ce n'est pas le cas. Nous identifions les lacunes et ce qu'elles impliquent.

#### Ce que vous recevez

Dans les 48 heures suivant la séance : un résumé écrit identifiant les trois lacunes de responsabilité les plus matérielles dans votre configuration actuelle de gouvernance IA, avec des recommandations priorisées pour combler chacune d'elles. Pas de recommandations de fournisseurs. Pas de marketing d'outils. Juste les lacunes et la façon d'y remédier.

#### Pourquoi 90 minutes

Au niveau du directeur général, vous n'avez pas le temps pour un engagement multi-sessions afin de comprendre l'exposition de votre propre étude. 90 minutes suffisent pour établir une image claire et partir avec un document sur lequel vous pouvez agir.

#### Prix

CHF 2 800, tout compris. Une séance. Aucune obligation de suivi.

#### Prochaine étape

Écrivez-nous. Indiquez-nous la taille de votre étude et les outils IA que votre équipe utilise le plus dans les rapports clients et l'analyse de portefeuille. Nous confirmerons si ce format est approprié à votre situation.

---

## 06 — Findings Summary: 6 Net-New Insights (Distinct from C214–C223 Phase 02)

### Finding 1: Post-Advisor-Exit AI Accountability Reconstruction as Discrete Boutique Market

The managing director at a boutique Geneva wealth management firm faces a specific problem that has no named service in the market: reconstructing the AI accountability record after a senior advisor leaves. This includes what AI tools were used, what outputs were generated for which clients, what human review occurred, and what decisions were made based on AI recommendations.

The structural gap is that AI-enhanced workflow knowledge at boutique firms is individual, not institutional. When the individual leaves, the knowledge leaves. The regulatory problem is that the firm remains liable for AI outputs that were never systematically documented.

The net-new angle versus C214-C223 Phase 02: prior research identified AI knowledge loss on departure (C223 Phase 03). This finding locates that problem specifically in the accountability reconstruction phase — what the firm needs to do after the departure to protect itself, not just how to prevent it.

**Accountability reconstruction methodology as boutique-specific advisory product — distinct from general AI continuity planning.**

---

### Finding 2: Aggregate Portfolio AI Risk Signal Blind Spot at Boutique Scale

Portfolio analytics AI generates per-client risk signals — concentration warnings, correlation alerts, factor exposure shifts. At boutique scale, these signals are processed individually by relationship managers without cross-client aggregation. A risk signal that appears minor in isolation becomes material across multiple portfolios managed by the same advisor.

The advisory angle: no existing service addresses the boutique-scale gap between individual portfolio AI risk processing and aggregate portfolio-level risk oversight. This requires both a technical understanding of how portfolio analytics AI surfaces risk signals and an operational understanding of how boutique relationship managers work.

**Cross-client portfolio AI risk aggregation as distinct boutique advisory surface — not covered by existing AI governance or risk management frameworks.**

---

### Finding 3: Human Review Documentation as the Actual Compliance Surface at Boutique Scale

FINMA's AI model risk requirements and suitability documentation standards place the compliance burden on the human oversight layer — not just the AI output. For a boutique wealth management firm, this means the compliance question is not "is the AI output correct" but "can we document that a named human reviewed the AI output, made a decision, and recorded why."

At boutique scale, this human review layer is almost universally informal. The AI produces a portfolio review, the relationship manager reads it, makes a few changes, and sends it. The documentation of what was reviewed, what was changed, and why is held in the manager's memory — not in any firm record.

The regulatory implication: the documentation gap is not in the AI output, it is in the human review layer. Firms that build this layer will be prepared for FINMA examination. Firms that do not will discover the gap only when examined.

**Human review documentation layer as the primary boutique AI compliance surface — not addressed by AI governance frameworks designed for larger institutions.**

---

### Finding 4: Client-Supplied AI Analysis Entering the Advisory Workflow as Unresolved Liability

Clients increasingly bring their own AI tools into the advisory relationship — using personal AI systems to analyze their portfolios, then bringing that analysis into conversations with their relationship manager. The advisory firm's question: whose AI output becomes the firm's responsibility?

This is not covered by standard engagement letters, standard AI governance frameworks, or standard client data processing documentation. The firm's current client agreements were not drafted with this scenario in mind.

The liability question is unresolved at the operational level: when a client brings AI-generated analysis into the advisory relationship and the firm's advisor incorporates that analysis into recommendations, what is the firm's documentation obligation and what is the client's responsibility?

**Client-AI-input integration into the advisory workflow as an emerging boutique liability scenario with no existing framework or standard engagement letter language.**

---

### Finding 5: Regulatory Sequencing as Boutique-Specific Advisory Gap

The managing director at a boutique Geneva wealth management firm faces a compounding regulatory timeline: FINMA AI model risk requirements (Q4 2026), EU AI Act de facto pressure via EU counterparty exposure, ISSB sustainability disclosure (mid-2027), and SFAMA/ASIP guidance that already applies. Without a structured methodology to sequence these obligations, firms either delay everything or attempt simultaneous compliance across multiple fronts without adequate resources.

The specific boutique problem: regulatory requirements arrive on different timelines but the firm's implementation capacity is finite. The decision about which obligations to address first, how to phase implementation, and how to avoid creating new gaps while closing existing ones requires a methodology that reflects the firm's actual operational constraints.

**Regulatory sequencing advisory as a distinct boutique-scale service — helping managing directors prioritize and phase AI governance obligations within their firm's actual capacity.**

---

### Finding 6: AI Vendor Compliance Claims Without Independent Evaluation Framework

Boutique wealth management firms are purchasing AI compliance tools based on vendor claims about regulatory coverage. The managing director has no independent framework to evaluate whether a vendor's claims actually cover their specific obligations under FINMA, ASIP, or SFAMA guidance. The result: firms purchase compliance tools, believe they are covered, and discover gaps only at examination time.

The structural problem is that the evaluation requires both regulatory knowledge (what does FINMA actually require?) and technical knowledge (what does this tool actually do?). Boutique firms have neither in-house, and the tools are sold by vendors who have commercial incentives to present broad coverage.

The advisory angle: independent AI compliance tool evaluation for boutique wealth management firms — specifically, does this vendor's claim actually cover what FINMA requires for my specific AI applications?

**Independent AI compliance tool evaluation as a boutique advisory service — bridging the gap between vendor marketing claims and the firm's actual regulatory obligations.**