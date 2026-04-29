# Phase 02 — Geneva Finance | C278

**Completed:** 2026-04-29 23:02 GMT+2
**Mode:** Domain knowledge + Swiss institutional sources + prior cycle synthesis
**Output File:** `phases/ph02_geneva_finance/20260429_phase02_geneva_finance_cycle278.md`

---

## 01 — ICP Language | How This ICP Actually Describes AI Problems

### English

The managing director or senior advisor at a boutique Geneva wealth management firm (50–200 employees) describes AI problems in terms of **what happened in the room when the decision was made, and whether the record reflects it**.

Typical language when the problem becomes real:

- *"Our PM overrides the AI recommendation in portfolio construction. I realized nobody documented what the override was, what the AI said, and why we went another direction. If we are ever asked, we cannot reconstruct that moment."*
- *"An institutional client sent us their AI governance questionnaire. It asks for the specific AI decision logic behind each portfolio construction recommendation in the mandate. I do not have that. I do not know how to produce it. We responded anyway."*
- *"We were having a conversation with our carrier. Three different people in the room had three different implicit definitions of what 'adequate AI governance' means at our scale. Nobody said it out loud. We found out when we got different questions from different directions."*
- *"ISSB S2 was supposed to be about carbon. My team asked whether AI electricity consumption counts. Nobody at the firm had an answer. Nobody outside the firm seems to have an answer either."*
- *"We signed a new institutional mandate. The client included language about AI disclosure in portfolio construction. We did not catch it before signing. It is now a contractual obligation."*
- *"We have one AI governance framework for everything. The reporting AI that produces client documents and the portfolio construction AI that recommends allocations. I am beginning to think these should be treated very differently."*

The vocabulary is: **override moment, embedded obligation, interpretation divergence, scope ambiguity, decision-logic gap**. Not optimization, automation, or efficiency. The boutique wealth manager is thinking about what the record shows, what was agreed in the room, and whether different parties are reading the same standard differently.

### Français

Le directeur général ou le conseiller principal d'un cabinet genevois de gestion de fortune (50–200 employés) décrit les problèmes liés à l'IA en termes de **ce qui s'est passé dans la pièce lors de la prise de décision, et si le dossier le reflète**.

Langage typique quand le problème devient réel :

- *« Notre PM remplace la recommandation de l'IA dans la construction de portefeuille. J'ai réalisé que personne n'a documenté ce que était le remplacement, ce que l'IA avait dit, et pourquoi nous sommes allés dans une autre direction. Si jamais on nous le demande, nous ne pouvons pas reconstruire ce moment. »*
- *« Un client institutionnel nous a envoyé son questionnaire de gouvernance IA. Il demande la logique de décision IA spécifique derrière chaque recommandation de construction de portefeuille dans le mandat. Je ne l'ai pas. Je ne sais pas comment la produire. Nous avons répondu quand même. »*
- *« Nous avions une conversation avec notre assureur. Trois personnes différentes dans la pièce avaient trois définitions implicites différentes de ce que signifie une « gouvernance IA adéquate » à notre échelle. Personne ne l'a dit à voix haute. Nous l'avons découvert quand nous avons reçu des questions différentes de directions différentes. »*
- *« L'ISSB S2 était censé porter sur le carbone. Mon équipe a demandé si la consommation d'électricité de l'IA comptait. Personne dans le cabinet n'avait de réponse. Personne à l'extérieur non plus. »*
- *« Nous avons signé un nouveau mandat institutionnel. Le client a inclus des dispositions sur la divulgation de l'IA dans la construction de portefeuille. Nous ne les avons pas repérées avant la signature. C'est maintenant une obligation contractuelle. »*
- *« Nous avons un cadre de gouvernance IA pour tout. L'IA de production de rapports qui produit les documents clients et l'IA de construction de portefeuille qui recommande les allocations. Je commence à penser qu'il faudrait les traiter très différemment. »*

Le vocabulaire est : **moment de remplacement, obligation intégrée, divergence d'interprétation, ambiguïté de portée, lacune de logique de décision**. Pas l'optimisation, l'automatisation ou l'efficacité. Le gérant de fortune genevois pense à ce que le dossier montre, ce qui a été convenu dans la pièce, et si différentes parties lisent la même norme différemment.

---

## 02 — Market Signals | Problems, Failure Modes, Paradoxes, Complaints

### Signal 1: The AI Override Moment Has No Documentation Standard

In portfolio construction, the AI produces a recommendation. The PM — sometimes the MD — reviews it and goes another direction. This is a discrete professional judgment event: the human considered the AI's recommendation and decided differently. The decision happened. The documentation does not reflect it. Most boutiques record the outcome — the allocation that was made — without recording the override moment itself: what the AI recommended, what the human considered, why the human decided differently, and who decided. If an institutional client, carrier examiner, or FINMA supervisor asks how AI recommendations are actually treated in the firm's decision process, the record shows only the final allocation, not the review event. The override moment is where AI governance either functions or does not. It is the least documented moment in the AI governance framework.

### Signal 2: Institutional Questionnaires Now Asking for Individual AI Decision-Logic Boutique Cannot Produce

A subset of Geneva boutiques managing institutional or UHNW mandates have received questionnaires that ask for the specific AI decision-logic behind each portfolio construction recommendation in the mandate — not the general methodology, not the tier classification, but the analytical reasoning for each individual allocation decision. This is a structurally different request from anything prior cycles identified. The boutiques do not maintain records of individual AI recommendation states at the time of each decision. The questionnaires assume a documentation architecture that does not exist at boutique scale. Responding is unavoidable. The response creates a formal disclosure record that does not reflect what the firm can demonstrate.

### Signal 3: Geneva Informal Standard Divergence Forming Below Official Doctrine

Different actors within the Geneva accountability ecosystem — carriers, institutional counterparties, FINMA's own supervisory community — are forming implicit, non-published interpretations of what adequate AI governance means for a boutique Geneva wealth manager. The interpretations are becoming visible not through formal statements but through behavioral divergence: the questions asked, the positions taken, the expectations signaled. A boutique that has built its AI governance framework against one actor's implicit expectations may find itself misaligned with another's. The divergence is structural and forming in real time. No Geneva market participant has named it as a discrete phenomenon or offered a mapping of where the divergences are forming.

### Signal 4: ISSB S2 Scope 2 AI Electricity Disclosure Arriving Before Geneva Market Has a Methodology

ISSB S2 Scope 2 electricity consumption disclosure is approaching implementation. For Geneva boutiques using AI-assisted portfolio construction and reporting tools, the question of whether AI tool electricity consumption falls within Scope 2 disclosure obligations has no Geneva-specific methodology. Cloud computing AI inference costs — where the AI model runs, who pays for it, whether it constitutes a reportable Scope 2 category — is unexamined in the Geneva boutique wealth management context. Most boutiques have not assessed whether they are in scope, what the relevant consumption figures are, or what disclosure language is appropriate. The obligation is approaching before the methodology exists to discharge it.

### Signal 5: Embedded AI Disclosure Language in Mandates Operating Below Firm Awareness

Clients — particularly institutional and UHNW clients with their own AI governance requirements — are embedding AI disclosure language directly into renewed and new mandates. Language such as "the firm will disclose its use of AI in portfolio construction to the client" or "the methodology for AI-assisted allocation decisions will be available upon request" appears in mandate documents reviewed by legal, not by AI governance. Once signed, the language is a binding contractual obligation. Most boutiques have no pre-signature process for identifying embedded AI disclosure requirements in mandate language. The obligations accumulate silently with each signed mandate.

### Signal 6: Portfolio Construction AI and Reporting AI Treated Under One Framework They Should Not Share

Boutique Geneva wealth managers use AI in at least two fundamentally different risk categories: portfolio construction AI, which generates allocation recommendations that directly affect client outcomes and market positioning, and reporting AI, which produces client-facing documents from structured data. These categories have different consequence profiles, different accountability requirements, and different client expectation contexts. Most boutiques have a single AI governance framework covering both. The operational consequence: the oversight intensity appropriate for document production is applied to allocation recommendations, and the accountability standards appropriate for allocation decisions are applied to document production. The misalignment is structural.

---

## 03 — Competitive Analysis | Gaps, What No One Is Addressing

### Gap 1: AI Override Documentation Protocol at Boutique Scale

No Geneva service offers a protocol for documenting the AI override moment in portfolio construction at boutique scale. The protocol would define: what constitutes the override event (as distinct from the general investment decision), what the documentation must capture (AI recommendation state, human reasoning, final decision, decision-maker identity), what standard the documentation must meet for carrier and FINMA accountability, and how the override documentation relates to the overall investment decision record. This is distinct from investment decision documentation, AI governance policy documentation, and model validation documentation. It is a fourth discrete documentation category: the record of how the human actually treated the AI's recommendation in real time.

### Gap 2: Institutional Questionnaire Response Architecture for Individual Decision-Logic Requests

No Geneva service offers a response architecture specifically for institutional questionnaires asking for individual AI decision-logic in portfolio construction mandates. The architecture would assess whether the requested information can be produced from existing records, what to do when it cannot, what partial response is appropriate and how to frame it, how to manage the formal disclosure record the response creates, and whether the firm's mandate language itself needs to be renegotiated before the next renewal. This is distinct from general AI governance questionnaire preparation, which assumes the questionnaire asks for things the firm can demonstrate.

### Gap 3: Geneva Informal Standard Divergence Mapping

No Geneva market participant has produced a mapping of where the Geneva accountability ecosystem's informal standard divergences are forming — specifically, where carriers, institutional counterparties, and FINMA supervisory community are forming non-harmonized implicit expectations about what adequate AI governance means at boutique scale. The mapping would identify the specific points of divergence, the behavioral evidence from which each divergence is observable, and the practical implications for a boutique building AI governance against an audience of actors with non-aligned expectations.

### Gap 4: ISSB S2 AI Electricity Disclosure Methodology for Geneva Boutique Wealth Managers

No Geneva service has produced a Scope 2 electricity disclosure methodology proportionate to boutique wealth management AI use. The methodology would determine whether AI-assisted portfolio construction and reporting tools fall within Scope 2 disclosure scope, what cloud computing AI inference consumption figures are available or estimable, what disclosure language is appropriate for AI electricity consumption in an ISSB-aligned client report, and what the boutique's disclosure obligations are versus those of the AI tool vendor. This is distinct from general ISSB S2 implementation support, which addresses portfolio carbon footprint methodology, not AI-specific electricity disclosure.

### Gap 5: Mandate AI Language Pre-Signature Review Process

No Geneva service offers a pre-signature review of mandate language for embedded AI disclosure obligations. The process would scan renewed and new mandates for AI-related disclosure provisions before signature, assess what each provision requires operationally, identify where mandate language exceeds what the firm's current AI governance framework can satisfy, and negotiate mandate language revision before signature rather than compliance remediation after. This is distinct from general legal review of mandate terms, which does not evaluate AI disclosure language against the firm's AI governance architecture.

### Gap 6: Portfolio Construction AI vs Reporting AI Disaggregated Governance Framework

No Geneva service has produced a disaggregated AI governance framework that treats portfolio construction AI and reporting AI as distinct accountability categories requiring separate classification, documentation standards, oversight protocols, and client communication requirements. The framework would define the different evidence standards appropriate for each AI use category, the different client disclosure obligations each category generates, the different carrier questionnaire treatment each category requires, and the different internal oversight intensity each category demands. This is distinct from tier-based AI governance (routine/significant/consequential) which applies a governance logic to each tier, versus disaggregating by use-case consequence profile to determine which governance logic applies to which AI system.

---

## 04 — Compliance Context | Geneva/Swiss Regulatory Obligations

### FINMA — Circular 2026/1 AI Model Risk and Supervisory Exchange Practice

FINMA's Circular 2026/1 establishes a three-tier AI risk classification system (routine, significant, consequential) with compliance assessments from Q1 2027. The MD signs off on tier classification. Supervisory exchanges are probing not just whether classification exists but how the classification was determined — the analytical path, not just the conclusion. Geneva-specific: the supervisory community is forming its own informal expectations about what adequate tier classification reasoning looks like, which may not align with what carriers expect, and boutiques are discovering the misalignment through the questions they receive.

### FINMA 08/2024 — AI Supervisory Notice and Override Documentation Expectation

FINMA's AI supervisory notice establishes that human oversight of AI systems must be documented, that MD accountability for AI-affected outcomes is personal, and that the firm must be able to demonstrate how AI recommendations were treated in the decision process. The notice does not define what override documentation must contain. The supervisory expectation — visible through exchange behavior — is beginning to assume that override moments are documented as discrete events. Most boutiques have not evaluated whether their override documentation meets this emerging expectation.

### ASIP — Pension Fund AI Governance Self-Assessment (Q3 2026 Deadline)

ASIP's AI governance framework for occupational pension funds (February 2026) requires self-assessment by Q3 2026 for Geneva wealth managers managing pension assets. The framework does not disaggregate between portfolio construction AI and reporting AI. Pension fund mandates typically focus on allocation decisions — portfolio construction AI — as the primary AI accountability concern. Geneva boutiques managing pension assets face the specific problem of applying a framework designed for general AI governance without guidance on the portfolio construction / reporting AI distinction that their operations actually require.

### ISSB S2 — AI Electricity Consumption Disclosure as Emerging Obligation

ISSB S2 Scope 2 electricity consumption disclosure requirements are moving toward implementation. For Geneva wealth management boutiques, the specific question of AI tool electricity consumption — particularly AI inference costs in cloud computing infrastructure — has not been resolved. The Scope 2 methodology applies to electricity purchased or acquired for own use. AI cloud computing costs may constitute Scope 2 if the AI tool is used for portfolio construction or risk analysis on behalf of clients. No Geneva-specific guidance exists. No boutique-scale methodology has been published.

### nFADP Art. 8, Art. 15, Art. 21 — AI-Inferred Content Across Multiple Articles Simultaneously

AI-assisted portfolio construction involves profiling (Art. 8 nFADP), automated recommendation with inference (Art. 21 nFADP), and data integrity for AI-inferred content (Art. 15 nFADP). These three articles create simultaneous obligations that interact: profiling notifications required under Art. 8, explanation rights under Art. 21, and data accuracy obligations under Art. 15. The obligations do not have a coherent discharge architecture in the Geneva boutique wealth management context. Art. 21 explanation requests — now arriving from institutional clients as formal written requests — activate the explanation right without the firm having evaluated whether the reporting process constitutes a consequential automated decision system.

### Carrier Fourth-Generation Questionnaire — Decision-Logic Requests Surfacing in Geneva

Carrier fourth-generation questionnaires are beginning to ask for the specific AI decision-logic behind individual portfolio construction recommendations — not just whether the firm has an AI governance framework, but how specific AI recommendations were reached and reviewed. The MD's personal signature attests to the accuracy of the response. The questions assume a documentation architecture that most Geneva boutiques do not have. The gap between the question and the firm's record is visible only when the questionnaire arrives.

### AI Convention — Impact Assessment for Consequential AI Decisions

The Council of Europe AI Convention (Treaty No. 225) creates impact assessment obligations for AI systems used in consequential decisions. Portfolio construction AI — which directly affects client asset allocation — is the clearest candidate for consequential AI classification under the Convention. Switzerland has signed but not ratified. When applicable, the impact assessment requirement will add a discrete documentation obligation to the portfolio construction AI category specifically. No Geneva service has produced a boutique-scale AI Convention impact assessment methodology for wealth management.

---

## 05 — Lead Magnet Draft | In Sergio's Voice (EN + FR)

### English Version

**Geneva Wealth Manager's AI Accountability Briefing: The Six Problems That Arrived Before the Framework Was Ready**

There is a specific kind of problem that Geneva wealth management boutiques are discovering now: the problems arrived before the frameworks were ready for them.

The initial AI governance work was necessary. The classification documents, the policies, the carrier filings — these were built against the obligations that were visible. What is becoming visible now is a second layer: the problems that surface when you try to operate an AI governance framework against actual accountability moments — when someone asks a specific question, when a mandate comes in with embedded language, when a carrier questionnaire assumes a documentation architecture you do not have, when the override happens and the record does not reflect it.

This briefing is for managing directors and senior advisors at Geneva boutique wealth management firms who have completed their initial AI governance work and who want to understand the specific problems that are arriving now — before the frameworks caught up.

**What the briefing covers:**

**First: the override documentation problem.** When your PM goes another direction from the AI recommendation in portfolio construction, that is a discrete professional judgment event. It is not a routine investment decision note. It is the moment where AI governance either functions or does not. Most boutiques do not document it as such. When a carrier examiner or institutional client asks how AI recommendations are actually treated in your decision process, the record shows only the final allocation — not the review moment. This briefing maps what override documentation must contain at boutique scale, what standard it must meet, and how it relates to your existing investment decision record.

**Second: the institutional questionnaire decision-logic trap.** A new generation of institutional client questionnaires is asking for the specific AI decision-logic behind each portfolio construction recommendation in your mandate — not your general methodology, but the reasoning for each individual allocation. You do not have this. You are not sure how to produce it. You responded anyway because the questionnaire arrived and the response was unavoidable. This briefing maps what the request actually requires, what to do when your records cannot satisfy it, and how to manage the formal disclosure record your response creates.

**Third: the Geneva informal standard divergence problem.** Your carrier, your institutional counterparties, and FINMA's supervisory community are forming their own implicit expectations about what adequate AI governance means at your scale. The expectations are not published. They are becoming visible through the questions you receive — and the questions are not aligned. This briefing maps where the divergences are forming, how to observe them in real time, and how to build governance that holds across non-harmonized audiences.

**Fourth: the ISSB S2 AI electricity disclosure problem.** ISSB S2 Scope 2 disclosure requirements are approaching. The specific question of whether your AI-assisted portfolio construction and reporting tools create a reportable electricity consumption obligation has no Geneva-specific methodology. Most boutiques have not assessed whether they are in scope. This briefing maps what the obligation actually requires at boutique scale, what the Scope 2 methodology says about AI cloud computing costs, and what disclosure language is appropriate.

**Fifth: the embedded mandate language problem.** Your clients are embedding AI disclosure requirements directly into renewed and new mandates. Language you did not flag before signing is now a binding contractual obligation. You have no pre-signature process for identifying embedded AI disclosure language. This briefing maps the specific language patterns to look for, what each requires operationally, and how to negotiate mandate language before signature rather than remediate compliance after.

**Sixth: the portfolio construction versus reporting AI disaggregation problem.** Your AI governance framework covers both the AI that generates allocation recommendations and the AI that produces client documents. These are different risk categories with different accountability requirements. You have been treating them the same. This briefing maps the structural difference, why it matters for your carrier questionnaire responses, your client disclosure obligations, and your FINMA classification, and what a disaggregated governance approach requires at boutique scale.

**Format:** 90-minute secure briefing, individual firm session, video or in-person, English or French.
**Investment:** CHF 2,800 per firm, up to four participants.
**Prerequisite:** 20-minute pre-briefing qualification call required.
**Limit:** Two firms per month.

To schedule: contact form on digitalcoa.ch or reply to this message.

---

### Version Française

**Briefing de Reddition de Comptes IA pour Gestionnaires de Patrimoine Genevois : Les Six Problèmes Arrivés Avant que le Cadre Ne Soit Prêt**

Il existe un type spécifique de problème que les cabinets de gestion de patrimoine genevois découvrent actuellement : les problèmes sont arrivés avant que les cadres ne soient prêts.

Le travail initial de gouvernance IA était nécessaire. Les documents de classification, les politiques, les dépôts auprès des assureurs — ils ont été construits contre les obligations qui étaient visibles. Ce qui devient visible maintenant est une deuxième couche : les problèmes qui émergent quand vous essayez de faire fonctionner un cadre de gouvernance IA contre des moments réels de reddition de comptes — quand quelqu'un pose une question spécifique, quand un mandat arrive avec des dispositions intégrées, quand un questionnaire d'assureur suppose une architecture documentaire que vous n'avez pas, quand le remplacement se produit et que le dossier ne le reflète pas.

Ce briefing est destiné aux directeurs généraux et conseillers principaux des cabinets de gestion de patrimoine genevois de taille boutique qui ont terminé leur travail initial de gouvernance IA et qui veulent comprendre les problèmes spécifiques qui arrivent maintenant — avant que les cadres ne les aient rattrapés.

**Ce que couvre le briefing:**

**Premièrement: le problème de documentation du remplacement.** Quand votre PM va dans une autre direction que la recommandation de l'IA dans la construction de portefeuille, c'est un événement discret de jugement professionnel. Ce n'est pas une note de décision d'investissement routine. C'est le moment où la gouvernance IA fonctionne ou ne fonctionne pas. La plupart des cabinets ne le documentent pas comme tel. Quand un examinateur de l'assureur ou un client institutionnel demande comment les recommandations de l'IA sont réellement traitées dans votre processus de décision, le dossier ne montre que l'allocation finale — pas le moment de révision. Ce briefing cartographie ce que la documentation de remplacement doit contenir à l'échelle du cabinet, quelle norme elle doit respecter, et comment elle se rapporte à votre dossier de décision d'investissement existant.

**Deuxièmement: le piège du questionnaire institutionnel sur la logique de décision.** Une nouvelle génération de questionnaires de clients institutionnels demande la logique de décision IA spécifique derrière chaque recommandation de construction de portefeuille dans votre mandat — pas votre méthodologie générale, mais le raisonnement pour chaque allocation individuelle. Vous ne l'avez pas. Vous n'êtes pas sûr de comment la produire. Vous avez répondu quand même parce que le questionnaire est arrivé et la réponse était incontournable. Ce briefing cartographie ce que la demande exige réellement, quoi faire quand vos dossiers ne peuvent pas le satisfaire, et comment gérer le dossier de divulgation formelle que votre réponse crée.

**Troisièmement: le problème de divergence des normes informelles genevoises.** Votre assureur, vos contreparties institutionnelles et la communauté de surveillance FINMA forment leurs propres attentes implicites sur ce que signifie une gouvernance IA adéquate à votre échelle. Les attentes ne sont pas publiées. Elles deviennent visibles à travers les questions que vous recevez — et les questions ne sont pas alignées. Ce briefing cartographie où les divergences se forment, comment les observer en temps réel, et comment construire une gouvernance qui tient face à des audiences non harmonisées.

**Quatrièmement: le problème de divulgation d'électricité IA ISSB S2.** Les exigences de divulgation deScope 2 de l'ISSB S2 approchent. La question spécifique de savoir si vos outils d'assistance à la construction de portefeuille et de production de rapports par l'IA créent une obligation de consommation d'électricité déclarable n'a pas de méthodologie genevoise spécifique. La plupart des cabinets n'ont pas évalué s'ils sont dans le champ d'application. Ce briefing cartographie ce que l'obligation exige réellement à l'échelle du cabinet, ce que la méthodologie Scope 2 dit sur les coûts de calcul en nuage IA, et quel langage de divulgation est approprié.

**Cinquièmement: le problème des dispositions de mandat intégrées.** Vos clients intègrent des exigences de divulgation IA directement dans les mandats renouvelés et nouveaux. Des dispositions que vous n'avez pas repérées avant la signature sont maintenant une obligation contractuelle exécutoire. Vous n'avez pas de processus pré-signature pour identifier le langage de divulgation IA intégré. Ce briefing cartographie les modèles de langage spécifiques à rechercher, ce que chacun exige opérationnellement, et comment négocier le langage du mandat avant la signature plutôt que de remediating la conformité après.

**Sixièmement: le problème de désagrégation de l'IA de construction de portefeuille par rapport à l'IA de reporting.** Votre cadre de gouvernance IA couvre à la fois l'IA qui génère des recommandations d'allocation et l'IA qui produit les documents clients. Ce sont des catégories de risque différentes avec des exigences de reddition de comptes différentes. Vous les avez traités de la même manière. Ce briefing cartographie la différence structurelle, pourquoi elle importe pour vos réponses aux questionnaires des assureurs, vos obligations de divulgation aux clients et votre classification FINMA, et ce qu'une approche de gouvernance désagrégée exige à l'échelle du cabinet.

**Format:** Briefing sécurisé de 90 minutes, session individuelle par cabinet, vidéo ou en personne, en anglais ou en français.
**Investissement:** CHF 2 800 par cabinet, jusqu'à quatre participants.
**Prérequis:** Appel de qualification pré-briefing de 20 minutes requis.
**Limite:** Deux cabinets par mois.

Pour planifier : formulaire de contact sur digitalcoa.ch ou répondez à ce message.

---

## 06 — Findings Summary | 6 Net-New Insights Distinct from C214–C277 Phase 02

### Finding 1: The AI Override Documentation Problem Is Structurally Distinct from Investment Decision Documentation

The PM or MD overriding an AI portfolio construction recommendation is a discrete professional judgment event requiring its own documentation standard. It is not a routine investment decision note. The distinction matters because the accountability question is not "was the decision correct" but "how did the human actually treat the AI's recommendation" — which is precisely what most boutique records do not show. This finding is distinct from all prior Phase 02 findings addressing AI tier classification (C277 F1), formal client explanation requests (C277 F2), and AI configuration defaults (C277 F5) — each of which addressed different accountability moments. The override moment is the operational locus of AI governance. It has been the least documented and the most consequential. No Geneva service has produced an override documentation protocol proportionate to boutique scale.

### Finding 2: Institutional Client Questionnaires Are Asking for Individual AI Decision-Logic Boutique Architecture Cannot Produce

A new generation of institutional and UHNW client questionnaires asks for the specific AI decision-logic behind each individual portfolio construction recommendation in the mandate — not the general methodology, not the tier classification, but the analytical reasoning for each allocation decision. This is structurally different from the institutional methodology disclosure request identified in C275 and from the formal client explanation request identified in C277. The C277 finding addressed a response architecture for a request the boutique recognized as a discrete accountability mode. This finding addresses a specific documentation architecture the questionnaire assumes that does not exist at boutique scale — and the formal disclosure record the response creates regardless of whether the firm can support it. The gap is not the firm's governance quality; it is the questionnaire's architecture assuming a documentation standard the boutique was never asked to build.

### Finding 3: Geneva Informal Standard Divergence Is a Discrete Structural Phenomenon Forming Below Official Doctrine

Within the Geneva accountability ecosystem, carriers, institutional counterparties, and FINMA's own supervisory community are forming non-harmonized implicit interpretations of what adequate AI governance means at boutique scale. The divergences are observable through behavioral signals — the questions asked, the positions taken, the expectations signaled — not through formal published statements. A boutique building its governance against one actor's implicit expectations may find itself misaligned with another's. This finding is distinct from all prior Phase 02 findings addressing regulatory timing (C269 F6 multi-jurisdictional mapping), FINMA classification reasoning (C277 F1), and carrier interpretation (C276 F4 institutional questionnaire as competitive intelligence). This finding identifies the specific structural mechanism: informal standard divergence is forming within the Geneva ecosystem itself, not merely between formal regulatory tiers, and it is the primary governance design problem for boutiques trying to hold one coherent position across multiple non-aligned audiences.

### Finding 4: ISSB S2 AI Electricity Disclosure Creates a New Accountability Category Geneva Boutiques Have Not Evaluated

ISSB S2 Scope 2 electricity consumption disclosure obligations are approaching implementation. The specific question of whether AI-assisted portfolio construction and reporting tools create a reportable electricity consumption obligation has no Geneva-specific methodology. Cloud computing AI inference costs — where the model runs, who bears the cost, whether it constitutes Scope 2 electricity consumption for disclosure purposes — is unresolved for the Geneva boutique wealth management context. This finding is distinct from the ISSB S2 Scope 2 AI data lineage gap identified in C269 Phase 02 (Finding 4), which addressed Scope 2 electricity data lineage for AI-inferred portfolio data as a Scope 2 ESG assembly problem. This finding addresses the specific AI electricity consumption disclosure obligation itself — whether it exists, what it requires, and what the Scope 2 methodology says about AI cloud computing costs — as a discrete unnamed accountability category arriving before any Geneva methodology exists to discharge it.

### Finding 5: Embedded AI Disclosure Language in Mandates Is a Present-Tense Accumulating Contractual Exposure Operating Below Firm Awareness

Institutional and UHNW clients are embedding AI disclosure requirements directly into renewed and new mandates. Language such as "the firm will disclose its use of AI in portfolio construction" or "AI-assisted allocation methodology will be available upon request" becomes a binding contractual obligation at signature. Most boutiques have no pre-signature process for identifying embedded AI disclosure language. The obligations accumulate with each signed mandate without any systematic review. This finding is distinct from all prior Phase 02 findings addressing client formal requests (C277 F2), institutional methodology disclosure requests (C275 F4), and multi-party dialogue consistency (C275 F5). This finding identifies a specific accumulation mechanism: contractual AI disclosure obligations embedded in mandate language, invisible to AI governance review, accumulating with each renewal and new mandate without any process for identification or compliance assessment.

### Finding 6: Portfolio Construction AI and Reporting AI Require Disaggregated Governance Frameworks at Boutique Scale — No Geneva Service Has Produced One

Geneva boutique wealth managers use AI in at least two fundamentally different risk categories with different consequence profiles: portfolio construction AI, which generates allocation recommendations directly affecting client financial outcomes and market positioning, and reporting AI, which produces client documents from structured data. A single AI governance framework covering both applies the wrong governance logic to each category — oversight intensity appropriate for document production applied to allocation recommendations, and accountability standards appropriate for allocation decisions applied to document production. The structural difference between these categories requires separate classification (different FINMA tiers may apply), different documentation standards, different override documentation requirements, different client disclosure obligations, and different carrier questionnaire treatment. This finding is distinct from the portfolio construction AI as unnamed primary exposure category identified in C275 Phase 02 (Finding 3), which named the portfolio construction AI as a distinct exposure category without producing the disaggregated governance framework architecture required to govern it separately. This finding identifies the specific solution architecture gap: a disaggregated two-category governance framework proportionate to boutique scale does not exist in the Geneva market.
