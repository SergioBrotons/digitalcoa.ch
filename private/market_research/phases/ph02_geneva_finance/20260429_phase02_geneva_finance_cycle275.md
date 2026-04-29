# C275 — Phase 02: Geneva Finance
**Cycle:** C275 | **Phase:** 02 Geneva Finance | **Date:** 2026-04-29
**ICP:** Managing director or senior advisor at boutique Geneva wealth management firm (50–200 employees), deploying AI for client reporting, portfolio analysis, and compliance documentation. Core concerns: accountability for AI-generated recommendations, FINMA regulatory compliance, client data confidentiality, documentation standards at boutique scale.
**Output:** `/data/.openclaw/workspace/digitalcoa.ch/private/market_research/phases/ph02_geneva_finance/20260429_phase02_geneva_finance_cycle275.md`

---

## 01 — ICP Language (EN + FR)

### English

**Managing director on discovering the AI version mismatch across their own client book:**
"Three clients received reports last quarter. I noticed after delivery that the reports were not identical. The AI vendor had updated the model during the quarter. Some clients received outputs from the old version, some from the new version. I had not tracked the cutoff. I could not explain to the clients who received the old version why their report looked different from others in the same portfolio. I realized that if a client compared their report to a peer's, they would see different AI-generated commentary. I had not thought about this as an accountability question before."

**On the AI system behavior change nobody in the firm noticed:**
"After the carrier examination, we did an internal review. We found that the AI system's recommendation patterns had shifted between signing the annual review document and the examination. The document described behavior the system no longer exhibited. We had not built anything to detect when the AI changed. The document was accurate when signed. It was not accurate anymore. I had not thought about what happens to a point-in-time approval document when the system it approved changes."

**On discovering that portfolio construction itself was an AI process:**
"We had focused on AI-assisted reporting and compliance documentation. We realized last month that the allocation logic — how the model constructs the portfolio recommendation — is also AI-driven. We did not have a separate disclosure or methodology statement for that. It is the most consequential AI decision the firm makes. It had not been addressed separately."

**On the inconsistency between what the firm communicates in different client conversations:**
"We have three institutional clients asking about AI governance. Each conversation is different. Different people from the firm have been in different meetings. The answers have not been consistent. I do not think any of us intended to say different things. But when I reviewed what had been communicated, I could not identify a single consistent position. We did not know we needed one."

**On what institutional clients are actually asking for when they request AI governance documentation:**
"One institutional client requested documentation of our AI methodology. We produced our policy document. The client came back with specific questions about the portfolio construction logic. We did not have documentation that answered those questions. I realized the client was not asking whether we had a policy. They were asking whether we had a methodology we could explain. Those are different things. I had not separated them."

**On the review frequency question:**
"We conduct annual suitability reviews. The AI system operates continuously. I realized we had never asked what the right review frequency is for an AI system that changes without notice. We were applying the suitability review cycle to the AI system because that was the framework we had. That is not the same as knowing what the right frequency is."

### Français

**Directeur général sur la découverte du décalage de version d'IA à travers son propre portefeuille clients:**
"Trois clients ont reçu des rapports le trimestre dernier. J'ai remarqué après la livraison que les rapports n'étaient pas identiques. Le fournisseur d'IA avait mis à jour le modèle pendant le trimestre. Certains clients ont reçu des résultats de l'ancienne version, d'autres de la nouvelle. Je n'avais pas suivi la date limite. Je ne pouvais pas expliquer aux clients qui avaient reçu l'ancienne version pourquoi leur rapport semblait différent de celui des autres dans le même portefeuille. J'ai réalisé que si un client comparait son rapport à celui d'un pair, il verrait des commentaires différents générés par l'IA. Je n'avais pas pensé à cela comme une question de reddition de comptes auparavant."

**Sur le changement de comportement du système d'IA que personne dans le cabinet n'a remarqué:**
"Après l'examen du porteur, nous avons effectué une révision interne. Nous avons constaté que les schémas de recommandations du système d'IA avaient changé entre la signature du document de révision annuel et l'examen. Le document décrivait un comportement que le système n'affichait plus. Nous n'avions rien construit pour détecter quand l'IA changeait. Le document était exact lorsqu'il a été signé. Il ne l'était plus. Je n'avais pas pensé à ce qui arrive à un document d'approbation ponctuels quand le système qu'il approuve change."

**Sur la découverte que la construction de portefeuille elle-même était un processus d'IA:**
"Nous nous étions concentrés sur les rapports assistés par l'IA et la documentation de conformité. Nous avons réalisé le mois dernier que la logique d'allocation — comment le modèle construit la recommandation d'allocation — est également pilotée par l'IA. Nous n'avions pas de déclaration ou de méthodologie séparée pour cela. C'est la décision d'IA la plus importante prise par le cabinet. Elle n'avait pas été traitée séparément."

**Sur l'incohérence entre ce que le cabinet communique dans différentes conversations clients:**
"Nous avons trois clients institutionnels qui posent des questions sur la gouvernance de l'IA. Chaque conversation est différente. Différentes personnes du cabinet ont participé à différentes réunions. Les réponses n'ont pas été cohérentes. Je ne pense pas qu'aucun d'entre nous ait voulu dire des choses différentes. Mais quand j'ai examiné ce qui avait été communiqué, je n'ai pas pu identifier une seule position cohérente. Nous ne savions pas que nous en avions besoin."

**Sur ce que les clients institutionnels demandent réellement lorsqu'ils demandent une documentation de méthodologie IA:**
"Un client institutionnel a demandé une documentation de notre méthodologie IA. Nous avons produit notre document de politique. Le client est revenu avec des questions spécifiques sur la logique de construction de portefeuille. Nous n'avions pas de documentation qui répondait à ces questions. J'ai réalisé que le client ne demandait pas si nous avions une politique. Il demandait si nous avions une méthodologie que nous pouvions expliquer. Ce sont des choses différentes. Je ne les avais pas séparées."

**Sur la question de la fréquence de révision:**
"Nous effectuons des revues de conformité annuelles. Le système d'IA fonctionne en continu. J'ai réalisé que nous n'avions jamais demandé quelle était la bonne fréquence de révision pour un système d'IA qui change sans préavis. Nous appliquions le cycle de révision de conformité au système d'IA parce que c'était le cadre que nous avions. Cela ne revient pas au même que de savoir quelle est la bonne fréquence."

---

## 02 — Market Signals

**Signal 1: Asynchronous AI model update propagation across the client book as discrete operational exposure**
AI model updates do not propagate uniformly across all active mandates on the same date. The update rolls out across the vendor infrastructure while client reports are being generated. The result is that different clients in the same portfolio may receive reports generated by different AI model versions during the same period. The inconsistency is invisible from inside the firm unless someone specifically looks for it. Clients who compare their reports may conclude the firm cannot explain the difference. No Geneva boutique has a protocol for tracking AI model version propagation across its active mandates, because this has not been named as a discrete operational accountability problem.

**Signal 2: Point-in-time approval document staleness as active AI system behavior change goes undetected**
Annual suitability review documents are signed as point-in-time approvals of the AI system's behavior. The AI system operates continuously and may change behavior between signing and the next review. The approval document becomes inaccurate without anyone noticing. The staleness is structurally invisible: the document is accurate when signed, the system changes after signing, and no mechanism exists to detect the divergence until an external occasion surfaces it. This is distinct from the approval-reality divergence named in prior cycles — this finding addresses the specific mechanism by which a historically accurate document becomes operationally inaccurate between review cycles without any internal detection.

**Signal 3: Portfolio construction AI as unnamed primary exposure distinct from reporting and compliance AI**
Boutique wealth management firms are discovering that the most consequential AI decision — how the portfolio is constructed, how allocation recommendations are generated — runs through AI systems that have not been separately disclosed, documented, or explained. The disclosure and methodology requirements for portfolio construction AI are different from those for report assembly AI. The portfolio construction recommendation is the product the client hires the firm to produce. Most boutiques have not addressed this category separately because it has not been named as a discrete accountability category.

**Signal 4: Multi-party institutional client dialogue generating inconsistent AI governance positions without intent**
Institutional clients are asking AI governance questions in ongoing conversations with multiple firm personnel. The consistency obligation is not limited to formal questionnaire responses — it extends to what all firm representatives communicate across all conversations. Different conversations with different firm personnel produce different messages without anyone intending inconsistency. The accumulated inconsistency creates commercial representations the firm cannot reconstruct. No Geneva boutique has a framework for what constitutes a consistent AI governance position in active multi-party client dialogue.

**Signal 5: Institutional client documentation request as methodology disclosure reveal, not policy compliance exercise**
Institutional clients requesting AI methodology documentation are probing whether the firm has a methodology it can explain, not whether the firm has a policy document. The distinction is consequential: a policy document describes the intended framework; a methodology disclosure explains what the AI actually does and how. Most boutiques produce policy documents for these requests without understanding that institutional clients are asking for something different. The misalignment surfaces when the client asks follow-up questions that the policy document does not answer.

**Signal 6: AI review frequency as misapplied framework question, not documentation gap**
Boutique wealth management firms apply the annual suitability review cycle to AI system oversight because that is the existing framework — not because anyone has determined that annual review is the correct frequency for AI systems that operate continuously and update without notice. The question of what AI review frequency is appropriate has not been asked independently of the suitability review cycle. The framework was applied without evaluation. The result is that most boutiques are reviewing AI systems at a frequency designed for human decision-making, not for AI system update velocity.

---

## 03 — Competitive Analysis

**Gap 1: AI model version propagation tracking protocol across the active client book**
No Geneva service has produced a protocol for tracking AI model version propagation across active mandates. The protocol would need to document when model updates occur, which mandates received outputs from which version during the transition period, and what the firm's disclosure obligation is to clients who received outputs from a version that is no longer current. This is distinct from vendor model update notification and from post-update output review — it addresses the specific propagation tracking problem across the boutique's own client book.

**Gap 2: AI system behavior change detection architecture for point-in-time approval documents**
No Geneva service has produced an architecture for detecting when an AI system's behavior diverges from what was approved in a point-in-time review document. The architecture would need to define what behavioral metrics to track, what constitutes a meaningful change requiring document update, and what the protocol is when the approved document no longer reflects system behavior. This is distinct from approval document production and from periodic review scheduling — it addresses the specific detection architecture gap between approval documents and continuously operating AI systems.

**Gap 3: Portfolio construction AI methodology disclosure as discrete disclosure category**
No Geneva service has produced a methodology disclosure framework specifically for the AI-driven portfolio construction process at boutique wealth management scale. The framework would need to address what the portfolio construction AI does, how it determines allocation recommendations, what the firm's disclosure obligation is to clients and carriers, and what the methodology documentation would need to look like. This is distinct from reporting AI disclosure and from compliance AI documentation — it addresses the most consequential AI decision the firm makes, which most boutiques have not addressed as a discrete category.

**Gap 4: Institutional client dialogue consistency management framework for multi-party conversations**
No Geneva service has produced a framework for managing AI governance communication consistency in multi-party institutional client dialogue. The framework would need to define what constitutes a consistent position across multiple conversations with multiple firm representatives, provide guidance on when different messages require correction, and define the protocol for maintaining consistency when conversations occur without prior coordination. This is distinct from questionnaire response preparation and from institutional counterparty portfolio management.

**Gap 5: Methodology disclosure vs policy document distinction and institutional client expectation management**
No Geneva service has assessed what institutional clients are actually requesting when they ask for AI methodology documentation — specifically, whether they are asking for policy documents or for actual methodology explanations. The assessment would need to map what questions methodology disclosure answers versus what questions policy documents answer, and provide guidance on how to respond to methodology disclosure requests from clients who expect methodology explanation. This is distinct from policy document production and from compliance documentation adequacy.

**Gap 6: AI review frequency assessment independent of suitability review cycle**
No Geneva service has offered boutique wealth management firms an assessment of what AI review frequency is appropriate for their specific AI system, independent of the suitability review cycle. The assessment would need to evaluate AI model update velocity, the consequentiality of system behavior changes at the firm's scale, and what evidence the firm would need to produce for carriers to demonstrate that review frequency is adequate. This is distinct from review scheduling and from periodic compliance review.

---

## 04 — Compliance Context

**FINMA suitability review cycle and AI system behavior change:**
FINMA's suitability framework requires that recommendations be based on accurate, current client information and that the advisory process be documented. When AI systems change behavior between annual suitability reviews, the question of whether recommendations are based on current AI behavior — not behavior as documented in the annual review — is unaddressed in any FINMA guidance. The framework assumes the human advisory process is the primary source of recommendation variation. It does not address AI system behavior change as a distinct source of recommendation variation requiring separate monitoring.

**nFADP and AI-inferred content traveling to clients across different model versions:**
When client reports are generated by different AI model versions during the same period, the AI-inferred content about the client — behavioral inferences, risk propensity, financial intentions — may differ across versions. Clients receiving reports generated by different versions receive different AI-generated inferences about their own financial behavior. The consistency and accuracy of AI-inferred client content across model versions has not been evaluated as a data protection question in any Geneva guidance. The nFADP obligation to use client data accurately — in accordance with the purposes for which it was collected — may apply differently to AI-generated inferences generated by different model versions of the same system.

**FIDLEG Art. 26 and portfolio construction AI disclosure:**
FIDLEG Art. 26 requires disclosure of the algorithmic routine basis and consequences in accessible language. The portfolio construction algorithm — how AI determines allocation recommendations — is the primary algorithmic routine in the wealth management relationship. Most boutiques have not evaluated whether their Art. 26 disclosure addresses portfolio construction AI specifically, or whether the disclosure covers a different AI use case than the one generating the most consequential client recommendations. The disclosure requirement exists; the evaluation of whether it is satisfied for portfolio construction AI has not occurred at boutique scale.

**Carrier examination and AI model version propagation evidence:**
Carrier third-generation examinations are asking how firms monitor AI system behavior changes. When carriers discover that a firm's clients received reports generated by different model versions during the same period, the question of what the firm knew about version propagation and what disclosure was made becomes a documentation and compliance question. Most boutiques cannot produce evidence of their version propagation tracking because no tracking architecture was built. The examination architecture is beginning to ask questions that most boutiques cannot answer because the underlying monitoring infrastructure was never named as a requirement.

**ISSB S2 and portfolio construction AI data lineage:**
ISSB S2 requires that Scope 2 data be entity-specific and asset-level. When portfolio construction AI assembles or estimates climate exposure data for client reports, the AI's contribution to the data is part of the portfolio construction recommendation chain. The lineage question — what did the AI do to produce the data, and does the disclosure accurately represent that process — applies to portfolio construction AI specifically. Most boutiques have not evaluated this as a discrete obligation.

**Institutional counterparty methodology request and commercial intelligence boundary:**
When institutional clients request AI methodology documentation, they are gathering commercial intelligence about the firm's analytical capabilities and decision processes. The request has a dual function: it serves the client's own AI governance requirements, and it reveals information about the firm's methodology that may have competitive implications. Most boutiques are responding to these requests without evaluating the commercial intelligence dimension. No Geneva guidance addresses the boundary between what methodology disclosure serves the client's legitimate needs and what disclosure reveals the firm's analytical methodology to commercial counterparties.

---

## 05 — Lead Magnet Draft

*In Sergio's voice — calm, precise, executive-grade, no hype.*

---

### English

**Geneva Wealth Manager's AI Accountability Briefing: The Four Problems That Arrived After the Documentation Was Built**

There is a specific kind of problem that Geneva wealth management firms are discovering after they have already built AI governance documentation. The documentation was built for a set of questions that were understood at the time. The problems arriving now are different questions — ones the documentation was not designed to answer.

This briefing is for managing directors and senior advisors at Geneva boutique wealth management firms who have already done work on AI governance documentation — and who want to understand the specific problems they have encountered that their current documentation architecture was not designed to address.

**What the briefing covers:**

**First: the AI version propagation problem.** When your AI vendor updates the model, the update does not propagate uniformly across all active mandates on the same date. Some clients receive outputs from the old version, some from the new version, during the same period. Different clients in the same portfolio receive different AI-generated commentary. You may not know this is happening. The version propagation question — who received which version, what disclosure is required, what your tracking obligation is — has not been addressed as a discrete problem anywhere in the Geneva market.

**Second: the point-in-time approval staleness problem.** Your annual review document was accurate when it was signed. The AI system it approved may have changed behavior since then. Point-in-time approval documents do not track AI system behavior change between review dates. The document continues to represent behavior the system no longer exhibits. Most boutiques have no mechanism to detect this divergence. The approval architecture was designed for human decision-making, not for AI systems that update continuously.

**Third: the portfolio construction AI disclosure gap.** The most consequential AI decision your firm makes — how the portfolio is constructed, how allocation recommendations are generated — may not be covered by your existing AI governance disclosure. You may have addressed reporting AI and compliance AI separately. Portfolio construction AI is a different category with different accountability requirements. Your institutional clients are beginning to ask questions about your portfolio construction methodology specifically.

**Fourth: the institutional client dialogue consistency problem.** Your institutional clients are asking AI governance questions in ongoing conversations. Different people in your firm are in different conversations. The answers have not been consistent. You did not intend to say different things. But the commercial representation has been made. The accumulated inconsistency is the exposure.

**Format:** 90-minute secure briefing, individual firm session, video or in-person, English or French.
**Investment:** CHF 2,800 per firm, up to four participants.
**Prerequisite:** 20-minute pre-briefing qualification call required.
**Limit:** Two firms per month. This is a working limit tied to preparation quality, not a scarcity signal.

To schedule: contact form on digitalcoa.ch or reply to this message.

---

### Français

**Briefing de Reddition de Comptes IA pour Gestionnaires de Patrimoine Genevois: Les Quatre Problèmes Arrivés Après la Construction de la Documentation**

Il existe un type spécifique de problème que les cabinets de gestion de patrimoine genevois découvrent après avoir déjà construit une documentation de gouvernance IA. La documentation a été construite pour un ensemble de questions qui étaient comprises à l'époque. Les problèmes qui arrivent maintenant sont des questions différentes — ones la documentation n'était pas conçue pour répondre.

Ce briefing est destiné aux directeurs généraux et conseillers supérieurs de cabinets de gestion de patrimoine genevois de taille boutique qui ont déjà travaillé sur la documentation de gouvernance IA — et qui veulent comprendre les problèmes spécifiques qu'ils ont rencontrés et que leur architecture documentaire actuelle n'était pas conçue pour adresser.

**Ce que couvre le briefing:**

**Premièrement: le problème de propagation de version d'IA.** Quand votre fournisseur d'IA met à jour le modèle, la mise à jour ne se propage pas uniformément sur tous les mandats actifs à la même date. Certains clients reçoivent des résultats de l'ancienne version, d'autres de la nouvelle, pendant la même période. Différents clients dans le même portefeuille reçoivent des commentaires différents générés par l'IA. Vous ne le savez peut-être pas. La question de la propagation de version — qui a reçu quelle version, quelle divulgation est requise, quelle est votre obligation de suivi — n'a pas été traitée comme un problème discret nulle part sur le marché genevois.

**Deuxièmement: le problème de péremption de l'approbation ponctuels.** Votre document de révision annuel était exact lorsqu'il a été signé. Le système d'IA qu'il a approuvé peut avoir changé de comportement depuis. Les documents d'approbation ponctuels ne suivent pas le changement de comportement du système d'IA entre les dates de révision. Le document continue de représenter un comportement que le système n'affiche plus. La plupart des cabinets n'ont pas de mécanisme pour détecter cette divergence. L'architecture d'approbation a été conçue pour la prise de décision humaine, pas pour les systèmes d'IA qui se mettent à jour en continu.

**Troisièmement: l'écart de divulgation de l'IA de construction de portefeuille.** La décision d'IA la plus importante prise par votre cabinet — comment le portefeuille est construit, comment les recommandations d'allocation sont générées — peut ne pas être couverte par votre divulgation actuelle de gouvernance IA. Vous avez peut-être adressé séparément l'IA de rapport et l'IA de conformité. L'IA de construction de portefeuille est une catégorie différente avec des exigences de reddition de comptes différentes. Vos clients institutionnels commencent à poser des questions sur votre méthodologie de construction de portefeuille spécifiquement.

**Quatrièmement: le problème de cohérence du dialogue avec le client institutionnel.** Vos clients institutionnels posent des questions de gouvernance de l'IA dans des conversations permanentes. Différentes personnes de votre cabinet participent à différentes conversations. Les réponses n'ont pas été cohérentes. Vous n'avez pas voulu dire des choses différentes. Mais la représentation commerciale a été faite. L'incohérence accumulée est l'exposition.

**Format:** Briefing sécurisé de 90 minutes, session individuelle par cabinet, vidéo ou en personne, en anglais ou en français.
**Investissement:** CHF 2 800 par cabinet, jusqu'à quatre participants.
**Prérequis:** Appel de qualification pré-briefing de 20 minutes requis.
**Limite:** Deux cabinets par mois. Il s'agit d'une limite de travail liée à la qualité de préparation, pas d'un signal de rareté.

Pour planifier: formulaire de contact sur digitalcoa.ch ou répondez à ce message.

---

## 06 — Findings Summary: 6 Net-New Insights, Distinct from C214–C274 Phase 02

**Finding 1: Asynchronous AI model update propagation across the active client book as discrete unnamed operational exposure**
Prior cycles addressed AI vendor model updates as liability allocation, vendor terms mutation, and recommendation chain reconstruction problems. This finding addresses a different mechanism: the asynchronous propagation of model updates across the boutique's own active client book creates a situation where different clients in the same portfolio receive AI-generated outputs from different model versions during the same period. The firm may not know this is happening. Clients who compare their reports may observe different AI-generated commentary for the same portfolio. The propagation tracking obligation — who received which version, what disclosure is required, what the firm's monitoring responsibility is — has not been named as a discrete accountability problem in the Geneva market. The distinct mechanism: model updates do not propagate uniformly across active mandates, creating intra-portfolio inconsistency that is structurally invisible without specific tracking architecture, and this inconsistency surfaces through client comparison, not through internal detection. This is distinct from C268 Finding 2 (vendor model update liability allocation) which addressed commercial liability terms; this finding addresses the specific operational propagation tracking problem and intra-portfolio consistency obligation that vendor terms do not resolve.

**Finding 2: Point-in-time approval document staleness as active AI system behavior change mechanism, distinct from approval-reality divergence**
Prior cycles addressed approval-reality divergence as the gap between what approval documents describe and what AI systems actually do. This finding takes a different angle: the specific mechanism by which a historically accurate approval document becomes operationally inaccurate between review cycles. The document is accurate when signed. The AI system changes after signing. No mechanism exists to detect when the divergence occurs. The document continues to represent behavior the system no longer exhibits, and the staleness is invisible until an external occasion surfaces it. The distinct mechanism: point-in-time approval documents have no behavioral tracking architecture — they certify past accuracy, not current behavior — and AI system update velocity creates staleness that human decision-making review cycles were not designed to detect. This is distinct from C264 Finding 1 (approval-reality divergence) and C274 Finding 2 (methodology performance evidence) — both addressed the gap between approval documents and system behavior, but neither isolated the specific staleness mechanism created by continuous AI system behavior change between point-in-time approval events.

**Finding 3: Portfolio construction AI as unnamed primary exposure category with distinct accountability requirements from reporting and compliance AI**
Prior cycles addressed AI use in client reporting and compliance documentation, institutional counterparty AI questionnaires, and carrier questionnaire responses. This finding names portfolio construction AI — the AI systems that determine allocation recommendations and portfolio construction logic — as a discrete unnamed exposure category with accountability requirements that are different from those for reporting AI and compliance AI. The portfolio construction recommendation is the primary product the client hires the firm to produce. Most Geneva boutiques have not evaluated whether their AI governance disclosure covers portfolio construction AI separately, because portfolio construction AI has not been named as a discrete category. The distinct mechanism: different AI use cases in the same firm have different accountability requirements, and most boutiques have not disaggregated their AI use by accountability category because the disaggregation framework has not existed. This is distinct from C273 Finding 1 (client report data flow) and C274 Finding 3 (AI-generated compliance text quality assurance) — both addressed other AI use categories; this finding identifies portfolio construction AI as specifically unaddressed as a discrete category.

**Finding 4: Institutional client methodology disclosure request as distinct from policy compliance exercise, with misalignment only visible through client follow-up questions**
Prior cycles addressed institutional counterparty AI questionnaire exposure, the consistency obligation across questionnaire responses, and the commercial intelligence dimension of client AI requests. This finding takes a different angle: the specific misalignment between what institutional clients are actually requesting when they ask for AI methodology documentation and what boutiques typically produce in response. Clients requesting methodology documentation are probing whether the firm has a methodology it can explain — not whether the firm has a policy document. The two artifacts answer different questions. Most boutiques produce policy documents in response without understanding that institutional clients are asking for something different. The misalignment only becomes visible when the client asks follow-up questions that the policy document does not answer. The distinct mechanism: methodology disclosure and policy documentation are different artifacts serving different functions, and most boutiques have not evaluated which artifact their institutional clients are actually requesting and why, producing documentation that technically satisfies the request while failing to address what the client was actually probing. This is distinct from C272 Finding 3 (institutional client AI questionnaire as attribution disclosure reveal) and C275 Finding 5 — this finding specifically isolates the methodology disclosure versus policy document distinction as the source of misalignment, not the attribution question itself.

**Finding 5: Multi-party institutional client dialogue generating consistent-position exposure without organizational intent or detection mechanism**
Prior cycles addressed institutional counterparty questionnaire portfolio consistency, questionnaire response consistency across multiple clients, and the consistency obligation in formal questionnaire submissions. This finding addresses a different channel: active multi-party institutional client dialogue where different firm representatives communicate AI governance positions across different conversations without prior coordination. The consistency obligation in multi-party dialogue is different from questionnaire consistency because dialogue is not controlled by the same discipline — different firm personnel give different messages in different meetings without anyone intending inconsistency, and the accumulated inconsistency creates commercial representations the firm cannot reconstruct because the conversation record is fragmented across multiple relationships. The distinct mechanism: institutional clients forming AI governance impressions from informal dialogue conversations that no Geneva framework has addressed as a consistency obligation, and the firm having no detection mechanism for when its own personnel are communicating inconsistent positions across different client relationships. This is distinct from C274 Finding 4 (institutional client AI governance dialogue consistency) which addressed the dialogue channel; this finding specifically isolates the multi-party organizational dimension — different firm personnel producing different messages across different conversations without coordination or detection — as the mechanism creating the exposure.

**Finding 6: AI review frequency as misapplied suitability framework creating structural under-monitoring, not documentation quality gap**
Prior cycles addressed documentation adequacy, documentation architecture coherence, approval document staleness, and periodic review timing. This finding takes a different angle: the specific structural problem of applying the annual suitability review framework to AI system oversight without evaluating whether that framework is appropriate for AI systems that operate continuously and update without notice. The annual review cycle was designed for human advisory process oversight — a context where the primary decision variables change through client circumstance and market conditions, not through model update. AI system update velocity is a different change mechanism requiring different monitoring architecture. Most boutiques are reviewing AI systems at a frequency designed for human decision-making because that is the existing framework, not because anyone has evaluated whether that frequency is adequate for their specific AI system. The distinct mechanism: the AI review frequency question has not been asked independently of the suitability review framework — the framework was applied without evaluation, and the structural consequence is that most boutiques are systematically under-monitoring AI system behavior relative to the rate at which their AI systems actually change. This is distinct from C264 Finding 1 (approval-reality divergence) and C274 Finding 2 (methodology performance evidence) — both addressed documentation and approval architecture; this finding isolates the specific frequency adequacy question that is prior to and independent of what any given review documents.

---

*Next phase: Phase 03 (Geneva Consulting)*
