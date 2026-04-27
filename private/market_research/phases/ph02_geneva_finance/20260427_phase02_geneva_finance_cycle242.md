# Phase 02 — Geneva Finance | Cycle 242
**Market Research: Boutique Geneva Wealth Management AI Governance**
**ICP:** Managing director or senior advisor, Geneva boutique wealth management firm, 50–200 employees
**Date:** 2026-04-27 | **Author:** Sergio | **Status:** Complete

---

## 01 — ICP Language

### How This ICP Actually Describes AI Problems

**English:**

The managing director of a Geneva boutique wealth management firm does not say "we have an AI governance gap." They say things like:

- "Our ESG clients are starting to ask questions about how we use AI in our sustainability reporting — I don't have a clear answer."
- "A pension fund client asked us to confirm that the AI tools we use for their sustainability data can support their ISSB disclosure obligations. I didn't know what to write back."
- "Our custodian bank uses AI for asset servicing. I don't know what that means for our accountability."
- "A counterparty asked us to describe how SIX x-clear's AI processing affected our post-trade settlement. We had no documentation to provide."
- "FINMA / SFAMA — SFAMA guidelines don't mention AI explicitly, but I see my supervisor reading them that way. I don't know what the documentation standard is."
- "We use multiple AI tools at different stages of the investment process. I can't trace which tool contributed to which recommendation."
- "Sophisticated clients who use AI themselves are now asking very specific questions about our use. I need to be able to respond properly."

The underlying concern is accountability: when an AI system the firm does not own creates an outcome that affects the firm's client relationship — who is accountable, and for what.

**Français:**

Le directeur général d'une étude genevoise de gestion de fortune ne dit pas « nous avons un problème de gouvernance IA ». Il dit plutôt :

- « Nos clients ESG commencent à poser des questions sur la façon dont nous utilisons l'IA dans nos rapports de durabilité. Je n'ai pas de réponse claire. »
- « Un fonds de pension nous demande de confirmer que les outils IA utilisés pour ses données de durabilité peuvent supporter ses obligations de divulgation ISSB. Je ne savais pas quoi écrire en réponse. »
- « Notre banque dépositaire utilise l'IA pour les services patrimoniaux. Je ne sais pas ce que cela signifie pour notre responsabilité. »
- « Une contrepartie nous a demandé de décrire comment le traitement IA de SIX x-clear a affecté notre règlement post-négociation. Nous n'avions aucune documentation à fournir. »
- « FINMA / SFAMA — les lignes directrices SFAMA ne mentionnent pas explicitement l'IA, mais je vois mon superviseur les lire dans ce contexte. Je ne sais pas quel est le standard documentaire. »
- « Nous utilisons plusieurs outils IA à différentes étapes du processus d'investissement. Je ne peux pas retracer facilement quel outil a contribué à quelle recommandation. »
- « Les clients sophistiqués qui utilisent l'IA eux-mêmes posent des questions très précises sur notre utilisation. Je dois être préparé à y répondre. »

La question sous-jacente est celle de la responsabilité : lorsqu'un système IA que l'étude ne possède pas crée un résultat qui affecte la relation client — qui est responsable, et de quoi exactement ?

---

## 02 — Market Signals

### Current Problems, Failure Modes, and Paradoxes

**1. The Swiss Financial Infrastructure Accountability Cascade**

The most underappreciated emerging failure mode: Geneva boutiques are increasingly exposed to AI-driven outcomes in Swiss financial market infrastructure — SIX x-clear, SIX x-stream, SwissRepoNet, and SIC — without any framework for documenting what happened when that infrastructure AI contributes to a client-facing problem.

The specific scenario: a boutique's equity portfolio is affected by a settlement delay attributed to AI-driven matching at SIX x-clear. The counterparty asks for an explanation. The boutique has no documentation of what the SIX x-clear AI system did, when, or why. The boutique's record of the transaction is accurate — the record of what the infrastructure AI did to it is absent. The accountability chain from infrastructure AI to client outcome is undocumented.

This is distinct from the vendor tool governance problem: it involves infrastructure providers who have no obligation to the boutique's clients, and no documented methodology for how the boutique should manage its accountability exposure to infrastructure AI. The fiduciary duty to clients extends to documenting what affected their outcomes — including infrastructure. The documentation obligation exists; the framework for meeting it does not.

**2. The ISSB Sustainability Disclosure — AI Documentation Gap**

Pension fund clients and institutional investors are requesting ISSB-aligned sustainability disclosures from Geneva wealth management boutiques. The AI documentation gap this creates is distinct from general AI governance: AI tools used to generate, collect, or verify sustainability data for client reporting must be able to support the firm's ISSB-aligned disclosures as a factual matter — not just as a policy statement.

The problem: most AI tools used in ESG data collection and sustainability reporting were not designed to produce auditably defensible outputs. A boutique using AI to aggregate Scope 3 emissions data, or to verify carbon offset portfolios, may be making ISSB-aligned disclosures it cannot substantively support. The AI tool's output becomes the basis for client-facing sustainability claims — without any documentation of the tool's methodology, data inputs, or confidence level. When a pension fund client's board is asked to certify ISSB compliance, the boutique's AI-generated data is part of what they are certifying to. The boutique has no methodology for determining whether its AI sustainability tools can support those claims.

**3. The Custodian AI Integration Accountability Gap**

Geneva custodian banks are integrating AI into asset servicing platforms — automated income classification, corporate action processing, risk attribution analysis. The outsourcing agreements in place between boutiques and custodians were written before AI became a material component of custodial service delivery. They do not specify AI governance documentation requirements.

The accountability gap: the boutique is accountable to its clients for the quality and accuracy of custodial record-keeping — but the AI making custodial decisions is not owned, controlled, or fully understood by the boutique. When a custodian's AI misclassifies a corporate action, or fails to detect a reorganization event, the boutique's client record is wrong. The boutique's documentation of its own oversight of custodian AI is absent. The custodian's outsourcing agreement does not close this gap — it was not designed to.

**4. The Sophisticated Client Question Paradox**

Geneva boutiques increasingly serve clients — family offices, UHNW individuals, pension fund investment committees — who use AI themselves. These clients ask precise, technically specific questions about the boutique's AI tools: what model version, what training data, what human review protocol, what happened when the model updated. The boutique cannot answer these questions because its documentation was designed for regulatory compliance, not for the technical scrutiny of an AI-literate client.

The paradox: the clients best positioned to identify AI-related problems in the boutique's service are the ones receiving the least information about the AI tools serving them. The boutique's documentation adequacy, when tested by a sophisticated client's questions, is most likely to fail precisely at the point where the client is most capable of noticing.

**5. The SFAMA/AMAS Supervisory Reading Problem**

SFAMA's AMAS self-regulatory standards do not explicitly address AI. The Geneva boutique discretionary portfolio manager must comply with AMAS standards — but there is no AMAS guideline specifying how AI use should be documented for AMAS purposes. What exists instead is supervisory reading: FINMA supervisors read AMAS standards alongside FINMA expectations, creating an undocumented hybrid standard that requires AI documentation but does not publish what that documentation must contain.

The failure mode: a boutique operating in good faith under published AMAS standards is found inadequate under a supervisory reading that was never published. The documentation gap is not the boutique's failure to document — it is the regulator's failure to publish the standard against which the documentation is being measured. This is a structurally distinct problem from other documentation gaps: the obligation is being created through supervisory interpretation, not through published regulatory text.

**6. The Multi-Stage AI Attribution Chain Opacity**

Geneva boutiques typically deploy AI across multiple stages of the investment process: AI-assisted investment thesis formation, AI-driven portfolio construction, AI-generated risk monitoring alerts, and AI-produced client reporting. Each stage may use a different tool, from a different vendor, under a different model version. Most boutiques document AI use as a single event — the tool was approved, it is in use. They do not document the attribution chain: which AI contributed to which decision, with what data, with what human override, at what stage.

The specific failure mode: when a client outcome is later examined — by the client, by a counterparty, by a carrier, by a regulator — the boutique cannot reconstruct the AI attribution chain. The documentation exists; it does not show the causal sequence. The opacity is not the result of deliberate concealment — it is the result of never having mapped the chain. The boutique cannot demonstrate what the AI actually did versus what humans actually decided. This distinction is increasingly material as AI's role in the investment process deepens.

---

## 03 — Competitive Analysis

### Gaps: What No One Is Addressing

**Gap 1: ISSB Sustainability Disclosure — AI Evidentiary Adequacy**

No Geneva advisor has published a methodology for determining whether an AI tool used in sustainability data collection and reporting can substantively support the firm's ISSB-aligned disclosures. The gap is not ESG advisory — it is AI documentation specific to the sustainability disclosure context. The question is not "does the firm have an ESG policy" but "can the AI tools generating sustainability data produce outputs that would survive audit of the firm's ISSB claims." No boutique-scale methodology exists for making this determination. As pension fund clients increase ISSB-aligned requirements on their Geneva advisors, this gap becomes a mandate condition — not yet a regulatory requirement, but increasingly a market requirement.

**Gap 2: Swiss Infrastructure AI Accountability Mapping**

No advisor, no industry body, and no Swiss financial infrastructure provider has published a framework for how Geneva wealth management boutiques should document their exposure to infrastructure-provider AI. The question of what documentation a boutique should maintain about AI-driven events at SIX, SwissRepoNet, or SIC that affected client outcomes is entirely unaddressed. This is distinct from operational risk documentation: it concerns AI decisions by infrastructure providers that are outside the boutique's control, for which the boutique nonetheless bears client-facing accountability. No methodology exists for mapping this specific accountability chain.

**Gap 3: Custodian AI Outsourcing Documentation Protocol**

No Geneva industry body has published guidance on what AI governance documentation a boutique should maintain in its outsourcing agreement with a custodian bank. The existing outsourcing documentation framework — designed for custody, administration, and record-keeping — does not address AI as a material component of custodial service delivery. Boutique firms are being held to a fiduciary standard regarding custodial service quality without any published framework for documenting custodian AI oversight. This is a specific, addressable gap: it requires a documented protocol for custodian AI oversight that fits within existing outsourcing governance structures.

**Gap 4: Sophisticated Client AI Communication Response Protocol**

No industry body has published guidance on how Geneva wealth management boutiques should respond to technically specific AI questions from sophisticated clients who use AI themselves. The communication protocol question — what to disclose, how to disclose it, what level of technical detail is appropriate, what is legally required versus what is best practice — is entirely unresolved at the boutique level. Firms are making individual decisions without peer reference. As AI-literate clients become more common in Geneva wealth management, this gap creates both liability exposure and a client relationship risk: sophisticated clients who receive inadequate answers will draw their own conclusions.

**Gap 5: SFAMA/AMAS AI Documentation Standard Mapping**

No advisor has published a mapping of which specific AMAS standards create implicit AI documentation obligations when read alongside FINMA supervisory expectations. This is a distinct analytical task: it requires reading published AMAS standards, identifying where FINMA supervisory expectations add AI-related requirements not present in the AMAS text, and producing a boutique-scale documentation framework that closes the gap between published self-regulatory text and supervisory reading. No one has done this analysis and published it as a discrete advisory product.

**Gap 6: Multi-Stage AI Attribution Chain Mapping Methodology**

No Geneva advisor offers a methodology for mapping the AI attribution chain across multiple investment process stages — specifically designed for boutique-scale firms using multiple AI tools simultaneously. The existing accountability mapping frameworks are designed for enterprise firms with single-model decision systems. The boutique multi-tool, multi-stage environment requires a different methodology: one that can document which AI contributed to which decision, with what human override, at what stage, without requiring the boutique to hire a model validation team. No one has published a boutique-appropriate AI attribution chain mapping methodology.

---

## 04 — Compliance Context

### Geneva / Swiss Regulatory Obligations

**FINMA — Financial Market Supervisory Authority**

FINMA has not issued a dedicated AI governance circular for Swiss wealth management firms. The applicable framework is constructed from existing instruments applied to AI-assisted processes:

- **FINMA Circular 2016/1 (Asset Management):** Establishes documentation obligations for investment process, suitability assessment, and risk communication. AI-generated recommendations must fit within these obligations — but Circular 2016/1 was written for human-driven processes. Its application to multi-stage AI-assisted investment processes remains a supervisory judgment call, not a published standard.

- **FINMA Circular 2021/1 (Operational Risk):** Requires institutions to manage operational risks from technology use, including third-party AI tools. AI systems used in infrastructure (SIX, custodian banks, SwissRepoNet) fall within this scope — with the complication that the boutique cannot directly manage the AI of infrastructure providers, yet bears client-facing accountability for infrastructure AI outcomes.

- **FINMA Supervisory Expectations on AI:** FINMA has stated that AI adoption must be accompanied by adequate governance, risk management, and documentation. This supervisory expectation operates ahead of published regulatory text. The practical consequence: boutiques are expected to demonstrate AI governance adequacy before the standard against which adequacy will be measured is published.

- **FINMA AML/CFT Framework:** AI tools used in client onboarding, transaction monitoring, or risk classification require documentation reconstructable for FINMA review. The intersection of AI recommendation and AML obligation — particularly when AI systems from custodian banks or infrastructure providers are involved — is an active supervisory concern with no published boutique-scale guidance.

**ASIP — Association Suisse des Institutions de Prévoyance**

ASIP guidelines on digital asset management apply to pension fund advisors — including Geneva boutiques managing pension fund assets. ASIP pension fund board members are increasingly asking advisors to demonstrate that AI tools used in sustainability data collection and reporting can support ISSB-aligned disclosures. The intersection of AI documentation and pension fund governance obligations creates a two-layer accountability structure that ASIP guidelines do not explicitly address.

**SFAMA — Swiss Funds and Asset Management Association**

SFAMA's AMAS self-regulatory standards apply to firms managing discretionary mandates. Critically: AMAS standards do not explicitly address AI. The gap is not that AMAS prohibits AI use — it is that AMAS provides no published AI documentation standard. What exists is a supervisory reading problem: FINMA supervisors read AMAS standards alongside FINMA expectations, creating a hybrid standard that requires AI documentation without publishing what that documentation must contain. The boutique in compliance with published AMAS text may be found inadequate under the supervisory reading. This is distinct from other regulatory gaps: the obligation is being created through interpretation, not through published text.

**ISSB — International Sustainability Standards Board**

ISSB IFRS S1 (General Sustainability-Related Disclosures) and IFRS S2 (Climate-Related Disclosures) are not yet mandatory in Switzerland but are being adopted by Swiss listed entities and firms with EU cross-border operations. The AI documentation implication is specific: AI tools used to generate, collect, or verify sustainability data for client reporting must produce outputs that can substantively support the firm's ISSB-aligned disclosures. The boutique's AI sustainability tool is part of the evidence chain for the client's ISSB claims. The AI tool's methodology, data inputs, and confidence level are material to the defensibility of those claims. No Geneva advisor has published guidance on what AI governance documentation ISSB-aligned sustainability disclosures require from a Swiss wealth management boutique.

**nFADP — Swiss Federal Act on Data Protection (revised 2024/2025)**

The nFADP creates specific obligations for AI-assisted wealth management:

- **Article 6 (Purpose Limitation) and Article 8 (Data Minimization):** AI tools processing client financial data must be configured for purpose limitation and data minimization. AI tools used in ISSB sustainability reporting that ingest client financial data create a specific cross-obligation collision: the sustainability disclosure purpose may require broader data access than Article 8 data minimization permits. No published resolution framework exists for this specific configuration conflict.

- **Article 12 (Transparency):** Clients must be informed when AI systems contribute to recommendations, reports, or risk assessments. The form and specificity of this disclosure for AI-assisted sustainability reporting is not defined by regulation.

- **Article 21 (Right to Explanation for Automated Decisions):** Clients have the right to request explanation of AI-assisted decisions affecting them — including portfolio recommendations and sustainability disclosures generated by AI. The right to explanation intersects with ISSB obligations: a client exercising Article 21 rights regarding an AI-generated sustainability disclosure may request information about the AI tool's methodology that the boutique cannot currently produce.

**Regulatory Timeline Context**

FINMA continues to develop AI governance expectations through supervisory dialogue and examination practice. The Federal Council's AI regulatory framework is in formation. ISSB implementation timelines are being established for Swiss adoption. The nFADP is in force with FDPIC enforcement capacity active. The practical implication for Geneva boutiques: the accountability questions are present tense; the authoritative guidance on how to meet them is not yet published. The boutique must document to the standard that will exist — not to the standard that currently exists.

---

## 05 — Lead Magnet Draft

### In Sergio's Voice — EN + FR

---

**ENGLISH VERSION**

**Portfolio AI Accountability Briefing**
**The Four Undocumented Accountability Chains in AI-Assisted Wealth Management**

Managing directors at Geneva boutiques are discovering something specific: AI has introduced accountability chains into their practice that they have not documented — and cannot currently reconstruct.

Some of these chains are visible. The AI reporting tool, the portfolio analytics platform, the risk monitoring system. These are the obvious ones.

Others are less visible. The custodian bank's AI, which affects the accuracy of the client record the boutique is accountable for. The Swiss financial infrastructure AI at SIX and SwissRepoNet, which affects settlement and collateral outcomes that flow to clients. The ESG data aggregation AI, which now generates the sustainability disclosures pension fund clients are asking the boutique to stand behind. And the multi-tool attribution chain across the investment process itself, where multiple AI systems contribute to a single client recommendation — with no documentation of what each one decided.

The Portfolio AI Accountability Briefing is a 90-minute session for managing directors and senior compliance officers at Geneva boutique wealth management firms. It covers the four accountability chains that are most likely to create unmanaged exposure — and how to document them before the question comes from a client, a counterparty, or a regulator.

**What the session covers:**

- The custodian AI accountability gap: what your outsourcing agreement should cover that it currently does not, and how to document your oversight of custodian AI without access to the custodian's model documentation
- The Swiss infrastructure AI accountability gap: what documentation a boutique should maintain about AI-driven events at SIX x-clear, SwissRepoNet, and SIC that affected client outcomes — and why this is distinct from your existing operational risk documentation
- The ISSB sustainability AI documentation gap: what it means for your AI sustainability tools to be able to "support" an ISSB-aligned disclosure as a factual matter — and what documentation would demonstrate this
- The multi-stage AI attribution chain: how to document which AI contributed to which decision at which stage — without requiring a model validation team
- The SFAMA/AMAS supervisory reading problem: which specific AMAS standards create implicit AI documentation obligations when read alongside FINMA supervisory expectations — and what the gap between published text and supervisory reading means in practice
- A prioritized action framework: where to start when you need to close multiple accountability chain gaps simultaneously

**Format:** 90-minute private briefing, in English or French
**Investment:** CHF 2,800 per session
**Includes:** Written summary of findings and prioritized action items, delivered within five business days
**Availability:** Limited to four engagements per month. Geneva-based or remote.

I work with a small number of Geneva wealth management firms on their AI governance documentation architecture. My clients are managing directors who want to understand their actual exposure — specifically, which accountability chains are undocumented and what each one is worth to close.

If this is relevant, write to me directly.

Sergio

---

**FRENCH VERSION**

**Portfolio AI Accountability Briefing**
**Les Quatre Chaînes de Responsabilité Non Documentées dans la Gestion de Fortune Assistée par l'IA**

Les directeurs généraux des études genevoises découvrent quelque chose de spécifique : l'IA a introduit dans leur pratique des chaînes de responsabilité qu'ils n'ont pas documentées — et qu'ils ne peuvent pas actuellement reconstruire.

Certaines de ces chaînes sont visibles. L'outil de reporting IA, la plateforme d'analyse de portefeuille, le système de surveillance des risques. Ce sont les plus évidentes.

D'autres le sont moins. L'IA de la banque dépositaire, qui affecte l'exactitude du dossier client dont l'étude est responsable. L'IA d'infrastructure financière suisse chez SIX et SwissRepoNet, qui affecte les résultats de règlement et de collatéral qui parviennent aux clients. L'IA d'agrégation de données ESG, qui génère désormais les divulgations de durabilité que les fonds de pension demandent à l'étude de soutenir. Et la chaîne d'attribution multi-outils dans le processus d'investissement lui-même, où plusieurs systèmes IA contribuent à une seule recommandation client — sans documentation de ce que chacun a décidé.

Le Portfolio AI Accountability Briefing est une session de 90 minutes destinée aux directeurs généraux et aux responsables compliance des études genevoises de gestion de fortune. Elle couvre les quatre chaînes de responsabilité les plus susceptibles de créer une exposition non gérée — et comment les documenter avant que la question ne vienne d'un client, d'une contrepartie ou d'un régulateur.

**Ce que couvre la session :**

- La lacune de responsabilité de l'IA dépositaire : ce que votre accord d'externalisation devrait couvrir qu'il ne couvre pas actuellement, et comment documenter votre surveillance de l'IA dépositaire sans accès à la documentation du modèle de la banque
- La lacune de responsabilité de l'IA d'infrastructure financière suisse : quelle documentation une étude devrait maintenir sur les événements IA chez SIX x-clear, SwissRepoNet et SIC qui ont affecté les résultats clients — et pourquoi cela est distinct de votre documentation des risques opérationnels existante
- La lacune de documentation IA pour les rapports de durabilité ISSB : ce que cela signifie pour vos outils IA de durabilité de pouvoir « soutenir » une divulgation alignée ISSB en tant que fait — et quelle documentation démontreraient cela
- La chaîne d'attribution IA multi-étapes : comment documenter quel IA a contribué à quelle décision à quelle étape — sans nécessiter une équipe de validation de modèle
- Le problème de lecture supervisée SFAMA/AMAS : quels standards AMAS spécifiques créent des obligations de documentation IA implicites lorsqu'ils sont lus conjointement avec les attentes de supervision FINMA — et ce que l'écart entre le texte publié et la lecture supervisée signifie en pratique
- Un cadre d'action priorisé : par où commencer lorsque vous devez fermer plusieurs chaînes de responsabilité simultanément

**Format :** Briefing privé de 90 minutes, en français ou en anglais
**Investissement :** CHF 2,800 par session
**Inclus :** Résumé écrit des conclusions et plan d'action priorisé, livré sous cinq jours ouvrables
**Disponibilité :** Limité à quatre mandats par mois. Sur place à Genève ou à distance.

Je travaille avec un nombre limité d'études genevoises de gestion de fortune sur leur architecture documentaire de gouvernance IA. Mes clients sont des directeurs généraux qui veulent comprendre leur exposition réelle — spécifiquement, quelles chaînes de responsabilité sont non documentées et ce que chacune vaut la peine de fermer.

Si cela est pertinent, écrivez-moi directement.

Sergio

---

## 06 — Findings Summary

### Six Net-New Insights: Distinct from C214–C241 Phase 02

**Insight 1: Swiss Financial Infrastructure AI Creates an Accountability Cascade the Boutique Cannot Close Alone**

The most underappreciated accountability chain in Geneva wealth management: AI-driven events at Swiss financial market infrastructure providers (SIX x-clear, SIX x-stream, SwissRepoNet, SIC) that affect client outcomes are not documented by the boutique — because no framework exists for how the boutique should document infrastructure AI exposure. The boutique is accountable to its clients for outcomes, including outcomes that resulted from infrastructure AI it does not control, cannot interrogate, and has no documentation obligation to track. This is distinct from vendor tool governance: infrastructure providers have no client-facing relationship with the boutique's clients, no obligation to provide documentation to the boutique, and no incentive to explain their AI decisions. The accountability cascade from infrastructure AI to client outcome is the most structurally unresolved chain in the boutique's AI governance architecture. No Geneva advisor has published a framework for managing it.

**Insight 2: ISSB-Aligned Sustainability Disclosures Create a Discrete AI Documentation Obligation with No Published Standard**

The integration of ISSB-aligned sustainability disclosures into client mandates creates a new category of AI documentation obligation that is distinct from general AI governance. The specific problem: AI tools used to generate, collect, or verify sustainability data for client reporting must be able to substantively support the firm's ISSB-aligned disclosures as a factual matter. Most ESG AI tools were not designed for this purpose — they produce outputs that become the basis for client-facing claims the boutique cannot currently defend. As pension fund clients impose ISSB requirements on their Geneva advisors, the boutique's AI sustainability tool becomes part of the evidence chain for the client's own regulatory disclosures. The boutique has no methodology for determining whether its AI sustainability tools meet this standard — and no published guidance exists for making the determination at boutique scale.

**Insight 3: Custodian AI Integration Is an Accountability Gap Hidden Inside the Outsourcing Agreement**

Geneva custodian banks are integrating AI into asset servicing — automated income classification, corporate action processing, risk attribution analysis — inside outsourcing relationships whose documentation was designed before AI was a material component of custodial service delivery. The accountability gap is structurally hidden: the boutique believes its outsourcing agreement covers custodial service quality, when in fact the agreement does not specify AI governance documentation requirements. The boutique's fiduciary duty to clients extends to the accuracy of custodial records — including records generated by custodian AI the boutique cannot directly oversee. The custodian's AI creates client-facing risk the boutique is accountable for but has not documented. No Geneva industry body has published guidance on what custodian AI oversight documentation the boutique should maintain.

**Insight 4: The Sophisticated Client Question Is the Boutique's Most Likely Near-Term AI Accountability Test**

Geneva boutiques increasingly serve clients who use AI themselves — family offices with AI-equipped investment teams, UHNW individuals with direct AI tool access, pension fund investment committees advised by AI-literate staff. These clients ask technically specific questions about the boutique's AI tools that most boutiques cannot currently answer: what model version, what training data, what human review protocol, what happened at the model update. The paradox: the clients best positioned to identify AI-related problems in the boutique's service are the ones receiving the least information about the AI tools serving them. The boutique's documentation, designed for regulatory compliance, fails when tested by an AI-literate client's questions. This is not a communication problem — it is an AI documentation problem whose consequences manifest through client relationships first.

**Insight 5: The SFAMA/AMAS Supervisory Reading Problem Is an Obligation Created by Interpretation, Not by Text**

SFAMA's AMAS self-regulatory standards do not explicitly address AI. The problem is not that AMAS prohibits AI use — it is that FINMA supervisors read AMAS standards alongside FINMA expectations, creating a hybrid documentation standard that has never been published. A boutique operating in full compliance with published AMAS text may be found inadequate under the supervisory reading. This is structurally distinct from other documentation gaps: the obligation is being created through supervisory interpretation, not through published regulatory text. The boutique cannot read the standard it is expected to meet. No Geneva advisor has published a mapping of which specific AMAS standards create implicit AI documentation obligations when read alongside FINMA supervisory expectations — and what the gap between published text and supervisory reading means in practice for the boutique's documentation architecture.

**Insight 6: Multi-Stage AI Attribution Chain Opacity Is the Boutique's Most Structural Documentation Failure**

Geneva boutiques deploying AI across multiple stages of the investment process — thesis formation, portfolio construction, risk monitoring, client reporting — each potentially using different tools from different vendors under different model versions, are operating with attribution chain documentation that is inadequate by design. Most boutiques document AI as a single approved tool in use. They do not document the causal sequence: which AI contributed to which decision, with what data, at what stage, with what human override. When a client outcome is examined by a counterparty, a carrier, or a regulator, the boutique cannot reconstruct what the AI actually did versus what humans actually decided. This opacity is not the result of negligence — it is the result of never having mapped the chain. The multi-stage AI attribution chain mapping methodology required for boutique-scale firms does not exist in published form.

---

*Next: Phase 03 (Geneva Consulting) — C242*
