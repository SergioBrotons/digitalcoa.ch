# C252 — Phase 02: Geneva Finance
**Cycle:** C252 | **Phase:** 02 Geneva Finance | **Date:** 2026-04-28
**Output:** `/data/.openclaw/workspace/digitalcoa.ch/private/market_research/phases/ph02_geneva_finance/20260428_phase02_geneva_finance_cycle252.md`

---

## 01 — ICP Language (EN + FR)

### English

**Managing director, boutique wealth management:**
"We approved the AI reporting tool two years ago. The approval was for a specific version and a specific use. The tool has updated four times since then. Nobody re-approved it. Technically, we are operating a tool that is outside its approval scope, and we have no idea which version is currently running."

**Senior advisor:**
"The AI generates a paragraph in the quarterly client letter. The paragraph is accurate as far as we can tell. But it reflects what the model chose to include and exclude. When a client asks a follow-up question that goes beyond what the paragraph covers, we are sometimes in the position of using the AI to answer a question about what the AI produced. We don't have a protocol for that."

**Compliance officer:**
"FINMA's Q1 2027 audit will ask about five things. We have looked at the carrier's questionnaire and mapped it to the five categories. What we do not have is a reconstruction methodology — a way to show, for each of those five categories, what existed before and what exists now. The audit is arriving before the infrastructure to answer it."

**Portfolio manager:**
"When I overrode an AI recommendation last quarter, I made a note in the file. I did not note what the AI recommended, what the model's stated confidence was, or what information I had that the model did not. The override is in the file. The AI's position is not. If someone asks, I can show what I decided. I cannot show what I decided against."

**Risk officer:**
"We had a client question last month that we could not answer. The AI had flagged something, we reviewed it, the flag disappeared from the dashboard. Three weeks later the client asked about it directly. The flag was gone. We could not reconstruct what it had been or why we did not follow up. The client's question remains unanswered."

**Managing director:**
"Our sustainability reporting now includes data that the AI assembled from client portfolio positions. The ISSB standards require us to explain how we arrived at those figures. We can show the figures. We cannot show, in a form the ISSB would consider adequate, how the AI assembled them — what inputs, what version, what processing steps. We are signing disclosures that rest on an undocumented analytical process."

### Français

**Directeur général, gestion de patrimoine boutique:**
"Nous avons approuvé l'outil de reporting IA il y a deux ans. L'approbation portait sur une version spécifique et un usage spécifique. L'outil a été mis à jour quatre fois depuis. Personne ne l'a réapprouvé. Techniquement, nous utilisons un outil qui est en dehors de son périmètre d'approbation, et nous ne savons pas quelle version fonctionne actuellement."

**Conseiller senior:**
"L'IA génère un paragraphe dans la lettre trimestrielle au client. Le paragraphe est exact dans la mesure où nous pouvons le vérifier. Mais il reflète ce que le modèle a choisi d'inclure et d'exclure. Quand un client pose une question de suivi qui va au-delà de ce que le paragraphe couvre, nous sommes parfois amenés à utiliser l'IA pour répondre à une question sur ce que l'IA a produit. Nous n'avons pas de protocole pour cela."

**Responsable conformité:**
"L'audit FINMA du T1 2027 portera sur cinq domaines. Nous avons examiné le questionnaire de l'assureur et l'avons cartographié selon les cinq catégories. Ce que nous n'avons pas, c'est une méthodologie de reconstruction — une façon de montrer, pour chacune de ces cinq catégories, ce qui existait avant et ce qui existe maintenant. L'audit arrive avant l'infrastructure pour y répondre."

**Gestionnaire de portfolio:**
"Quand j'ai contredit une recommandation de l'IA au dernier trimestre, j'ai pris note dans le dossier. Je n'ai pas noté ce que l'IA avait recommandé, quel était le niveau de confiance déclaré du modèle, ou quelle information j'avais que le modèle n'avait pas. La contradiction est dans le dossier. La position de l'IA ne l'est pas. Si quelqu'un demande, je peux montrer ce que j'ai décidé. Je ne peux pas montrer ce contre quoi j'ai décidé."

**Responsable des risques:**
"Nous avons eu une question d'un client le mois dernier à laquelle nous ne pouvions pas répondre. L'IA avait signalé quelque chose, nous l'avons examiné, le signal a disparu du tableau de bord. Trois semaines plus tard, le client a posé une question directe à ce sujet. Le signal était parti. Nous n'avons pas pu reconstruire ce qu'il avait été ou pourquoi nous n'avons pas donné suite. La question du client reste sans réponse."

**Directeur général:**
"Nos rapports de durabilité incluent désormais des données que l'IA a assemblées à partir des positions du portfolio client. Les normes ISSB nous obligent à expliquer comment nous sommes arrivés à ces chiffres. Nous pouvons montrer les chiffres. Nous ne pouvons pas montrer, sous une forme que l'ISSB considérerait adéquate, comment l'IA les a assemblés — quelles entrées, quelle version, quelles étapes de traitement. Nous signons des déclarations qui reposent sur un processus analytique non documenté."

---

## 02 — Market Signals

**Signal 1: Continuous operation vs. point-in-time approval architecture mismatch**
Boutique firms approved AI tools at a specific moment in time. Those tools have been continuously updating since. No boutique-scale framework exists for continuous authorization — the gap between the tool's current state and the firm's last authorized state is unnamed and unmeasured. The problem is structural: the approval concept was designed for static tools, not learning systems.

**Signal 2: AI-on-AI client communication without documentation protocol**
When clients ask follow-up questions about AI-generated reports, advisors are using AI to answer those questions — generating responses about AI-generated content without a documentation protocol for this specific double-generation situation. The chain of AI-generated content entering client communications without the firm's attribution record grows with each exchange.

**Signal 3: Override documentation absent at the moment of decision**
When portfolio managers override AI recommendations, the override is documented but the AI's position is not. The firm's record shows what was decided, not what the AI recommended. The asymmetry makes post-event reconstruction structurally impossible before the reconstruction window closes.

**Signal 4: Sustainability disclosure AI assembly undocumented at ISSB standard**
AI-generated sustainability data entering client disclosures must be supportable as factual claims under ISSB standards. The assembly process — inputs, model version, processing steps — is not documented in a form that would support the disclosure. The figure is signed; the process that produced it is not on record.

**Signal 5: 48-72 hour AI forensic reconstruction window structurally unaddressed**
AI session logs and reasoning traces become unrecoverable within 48-72 hours of an event. No Geneva boutique has a first-response AI incident protocol that addresses this window. The window's closure determines whether an incident is manageable or unexplainable — and it closes before any standard incident response would activate.

**Signal 6: Counterparty questionnaire cascade as market-mechanism standard setter**
Counterparty AI governance certifications are entering standard questionnaire templates through competitive pressure. When one major institution adds an AI certification requirement, peers adopt it to avoid appearing less sophisticated. The cascade is faster than regulatory adoption and creates obligations that boutique firms are not structured to meet.

---

## 03 — Competitive Analysis

**Gap 1: Continuous authorization architecture for continuously updating AI**
No market participant has defined what continuous authorization looks like at boutique scale. The enterprise answer (continuous monitoring, version gating, change management) does not translate to 50-200 employee firms. The gap is structural: the approval concept needs redesign, not enhancement.

**Gap 2: AI forensic first-response protocol for the 48-72 hour window**
No market participant offers a boutique-scale AI incident first-response protocol that addresses the log preservation window. The protocol would need to fit within existing operational capacity (not add overhead that makes it unused) and be designed for non-technical compliance officers to execute in the first hours.

**Gap 3: Override documentation architecture preserving the AI's position**
No framework exists for documenting what the AI recommended at the moment an advisor overrides it. The framework would need to preserve the AI's stated confidence, the inputs considered, and the advisor's reason for overriding — without disrupting the speed of the decision itself.

**Gap 4: ISSB-compliant AI sustainability data assembly documentation**
No boutique-scale methodology exists for documenting how AI tools assembled sustainability figures used in client disclosures. The methodology would need to translate ISSB's factual supportability requirement into documentation practices that fit within a boutique's analytical workflow.

**Gap 5: AI-on-AI communication disclosure protocol for client-facing exchanges**
No protocol exists for the specific situation where advisors use AI to answer client questions about AI-generated content. The protocol would need to address: when the double-generation situation occurs, how it is disclosed, and what the documentation record should contain.

**Gap 6: Cross-border AI accountability cascade methodology for boutique operations**
No methodology exists for boutique firms to manage accountability exposure when AI decisions affecting Swiss clients are made across borders — through custodian AI systems, prime broker AI tools, or parent-company portfolio analytics. The cascade creates obligations the boutique cannot govern and has no framework to document.

---

## 04 — Compliance Context

**FINMA Q1 2027 AI Audit — Five Specific Evidence Categories:**
FINMA's Q1 2027 audit will examine five specific documentation categories: AI tool inventory with version specificity, model version documentation tied to client outcomes, use-case differentiation across AI deployments, FADP audit trail substance, and reassessment protocol existence. No published standard defines what adequate evidence looks like in any of the five categories. The carrier's questionnaire provides the probe points; the adequacy standard is forming through the questions themselves.

**ISSB Mid-2027 Sustainability Disclosure Requirements and AI Assembly Documentation:**
ISSB standards require that sustainability-related disclosures be supportable as factual claims. AI tools assembling sustainability figures from client portfolio data must be documentable in terms of: what data inputs were used, what model version processed them, and what processing steps were applied. The documentation obligation is mid-2027 and simultaneous with FINMA Q1 2027 — one AI system, two regulatory streams, no methodology for either.

**FINMA-nFADP-ISSB Triple Documentation Requirement at AI-Sustainability Intersection:**
Boutique wealth management firms serving sustainability-focused clients face a convergence of three documentation requirements by mid-2027. FINMA requires AI governance documentation. nFADP requires that automated decision-making be explainable on request. ISSB requires that sustainability disclosures be factually supportable. The same AI-generated sustainability figure must satisfy all three simultaneously — with different evidential standards, different documentation formats, and no Geneva market methodology for any of them.

**Continuous Authorization Problem — FINMA Circular 2017/1 Outsourcing Analogous Situation:**
FINMA Circular 2017/1 governs outsourcing and requires documented authorization for material operational arrangements. AI tools operating continuously and updating continuously create a parallel authorization problem: the tool approved at signing is not the tool running at quarter three. No FINMA guidance resolves what continuous AI authorization requires, and no Geneva boutique has built the infrastructure to address it.

**ASIP BVG Occupational Pension AI Suitability Documentation:**
BVG-mandated suitability assessments for retirement planning using AI have additional accountability requirements. The firm's suitability recommendation must be attributable to the firm's judgment and documentable in a form the BVG authority can review. AI-generated suitability figures entering BVG documentation create a specific accountability gap: the figure is produced by a system, the recommendation is the firm's.

**SFAMA/AMAS AI Guidance at Boutique Scale — Publication Gap:**
SFAMA and AMAS guidance on AI addresses institutional-scale operations more directly than boutique-scale operations. The professional body guidance leaves boutique wealth management firms without a sector-specific reference standard. The gap means firms are being examined against standards formed through audit questions rather than published professional guidance.

**nFADP Article 21 Automated Decision Explanation Obligation:**
Under nFADP Article 21, clients have the right to request an explanation when an automated decision produces legal effects or significantly affects them. AI-generated portfolio recommendations that affect client outcomes are automated decisions under this article. The obligation requires that the firm be able to explain, in comprehensible terms, how the AI reached a specific recommendation — a present-tense obligation with no boutique-scale methodology for discharge.

---

## 05 — Lead Magnet Draft

### English

**Portfolio AI Environment Briefing: The Five Systems-Level Problems Nobody Has Named**

Geneva boutique wealth management firms using AI are running into five specific problems that have names in the technical literature but no practical framework in Geneva boutique practice.

These problems are not visible from inside the firm's normal operations. They surface when a client asks a specific question, when a regulator asks for specific evidence, or when an incident occurs and the reconstruction window closes before the firm knows it happened.

**Problem One: The continuous authorization gap.** The firm approved the AI tool at a specific moment. The tool has updated continuously since. The firm's authorization has not followed the tool's evolution. Technically, the firm is operating outside its own approval scope without knowing it.

**Problem Two: The AI-on-AI client communication chain.** When clients ask follow-up questions about AI-generated reports, advisors are using AI to answer those questions — generating responses about AI-generated content. The double-generation chain has no documentation protocol.

**Problem Three: The override record asymmetry.** When an advisor overrides an AI recommendation, the decision is documented. The AI's recommendation — its stated confidence, the inputs it considered, the reasoning it applied — is not. The firm's record shows what was decided. The AI's position is gone.

**Problem Four: The ISSB documentation gap.** AI-generated sustainability figures in client disclosures must be supportable as factual claims. The assembly process — inputs, model version, processing steps — is not documented. The figure is signed. The process is not on record.

**Problem Five: The 48-72 hour forensic window.** AI reasoning traces become unrecoverable within 48-72 hours of an event. The window closes before standard incident response activates. What happens in those hours determines whether the event is manageable or unexplainable.

**This briefing is for:** Managing directors and senior advisors at Geneva boutique wealth management firms who want to understand what is actually happening in their AI environment — not what the vendor says, not what the policy states, but what the specific gaps are and what to do about them.

**Format:** 90-minute briefing, in person or secure video, in English or French
**Investment:** CHF 2,800
**Deliverable:** Written summary of the firm's portfolio AI environment — covering all five problem areas, the specific exposure in each, and a documentation approach for each — delivered within five business days

I work with a small number of Geneva wealth management firms on their specific AI governance documentation situations. This briefing is structured around your firm's actual environment, not a generic framework.

To schedule: reply to this message or use the contact form on digitalcoa.ch.

---

### Français

**Briefing sur l'Environnement IA du Portfolio : Les Cinq Problèmes Systémiques Que Personne N'a Nommés**

Les cabinets genevois de gestion de patrimoine boutique utilisant l'IA rencontrent cinq problèmes spécifiques qui ont des noms dans la littérature technique mais aucun cadre pratique dans la pratique genevoise boutique.

Ces problèmes ne sont pas visibles depuis l'intérieur des opérations normales du cabinet. Ils émergent quand un client pose une question spécifique, quand un régulateur demande une évidence spécifique, ou quand un incident se produit et que la fenêtre de reconstruction se ferme avant que le cabinet ne le sache.

**Problème Un : L'écart d'autorisation continue.** Le cabinet a approuvé l'outil d'IA à un moment spécifique. L'outil s'est mis à jour en continu depuis. L'autorisation du cabinet n'a pas suivi l'évolution de l'outil. Techniquement, le cabinet fonctionne en dehors de son périmètre d'approbation sans le savoir.

**Problème Deux : La chaîne de communication client IA-sur-IA.** Quand les clients posent des questions de suivi sur les rapports générés par l'IA, les conseillers utilisent l'IA pour répondre à ces questions — générant des réponses sur du contenu généré par l'IA. La chaîne à double génération n'a pas de protocole de documentation.

**Problème Trois : L'asymétrie de l'enregistrement de la contradiction.** Quand un conseiller contredit une recommandation de l'IA, la décision est documentée. La recommandation de l'IA — son niveau de confiance déclaré, les entrées qu'elle a considérées, le raisonnement qu'elle a appliqué — ne l'est pas. Le dossier du cabinet montre ce qui a été décidé. La position de l'IA a disparu.

**Problème Quatre : L'écart de documentation ISSB.** Les chiffres de durabilité générés par l'IA dans les rapports aux clients doivent être soutenables comme affirmations factuelles. Le processus d'assemblage — entrées, version du modèle, étapes de traitement — n'est pas documenté. Le chiffre est signé. Le processus n'est pas enregistré.

**Problème Cinq : La fenêtre médico-légale de 48-72 heures.** Les traces de raisonnement de l'IA deviennent irrécupérables dans les 48-72 heures suivant un événement. La fenêtre se ferme avant que la réponse standard aux incidents ne s'active. Ce qui se passe pendant ces heures détermine si l'événement est gérable ou inexplicable.

**Ce briefing est destiné aux :** Directeurs généraux et conseillers seniors des cabinets genevois de gestion de patrimoine boutique qui veulent comprendre ce qui se passe réellement dans leur environnement d'IA — pas ce que dit le fournisseur, pas ce que states la politique, mais quels sont les écarts spécifiques et quoi faire.

**Format :** Briefing de 90 minutes, en personne ou par vidéo sécurisée, en anglais ou en français
**Investissement :** CHF 2 800
**Livrable :** Résumé écrit de l'environnement d'IA du portfolio du cabinet — couvrant les cinq domaines de problèmes, l'exposition spécifique dans chacun, et une approche de documentation pour chacun — livré dans les cinq jours ouvrables

Je travaille avec un nombre limité de cabinets de gestion de patrimoine genevois sur leurs situations spécifiques de documentation de gouvernance de l'IA. Ce briefing est structuré autour de l'environnement réel de votre cabinet, pas d'un cadre générique.

Pour planifier : répondez à ce message ou utilisez le formulaire de contact sur digitalcoa.ch.

---

## 06 — Findings Summary

**Finding 1: Continuous authorization as the core structural problem of boutique AI governance**
The point-in-time approval concept is structurally incompatible with continuously updating AI systems. Firms approved an AI tool at a specific version. The tool has updated since. The approval — which is the legal and compliance foundation for the firm's AI use — has not followed the tool's evolution. No Geneva boutique has built the infrastructure to address continuous authorization because the problem has not been named as distinct from periodic review. The structural mismatch means firms are technically operating outside their own authorization framework without knowing it.

**Finding 2: AI-on-AI client communication as an undocumented double-generation chain with no protocol**
When advisors use AI to answer client follow-up questions about AI-generated reports, they enter a double-generation situation: AI-generated content answering questions about AI-generated content. The chain enters client communications with no disclosure framework, no documentation protocol, and no Geneva market standard for what the firm's record should contain. The exposure is present-tense and compounding with each client exchange.

**Finding 3: Override record asymmetry as a structurally permanent blind spot in the firm's documentation**
When a portfolio manager overrides an AI recommendation, the firm's record shows the decision made. The AI's recommendation — its confidence level, the inputs it processed, the reasoning it applied — is not preserved. The asymmetry is not a documentation gap that can be closed retroactively: it becomes structurally permanent the moment the override happens. The firm's risk management record is systematically incomplete in the direction that matters most for accountability.

**Finding 4: ISSB sustainability disclosure documentation arriving before the methodology to meet it**
ISSB mid-2027 requirements create a documentation obligation for AI-assembled sustainability figures in client disclosures. The obligation requires that the firm document the assembly process — inputs, model version, processing steps — as factual support for the figure. No Geneva boutique has a methodology for this. The obligation is arriving in approximately fourteen months. The methodology does not exist in boutique-scale form.

**Finding 5: The 48-72 hour forensic reconstruction window as the determinant of incident outcome**
AI reasoning traces and session logs become unrecoverable within 48-72 hours of an event through normal log rotation and system behavior. This window closes before any standard incident response protocol activates. What happens in the window — whether the firm preserves the evidence or lets it disappear — determines whether the incident is manageable or unexplainable. No Geneva boutique has a first-response AI incident protocol designed for this specific window. The gap is structural and the window is always closing.

**Finding 6: Triple regulatory convergence (FINMA Q1 2027 + ISSB mid-2027 + nFADP Art.21) with no simultaneous documentation methodology**
Three distinct regulatory obligations — FINMA's five evidence category audit, ISSB's factual supportability requirement for AI-assembled sustainability disclosures, and nFADP's explanation obligation for automated decisions — converge by mid-2027 for the same AI system serving the same clients. The three obligations require different documentation formats, different evidentiary standards, and different discharge mechanisms. No Geneva market participant offers a methodology for managing them simultaneously. The convergence creates a compound documentation problem that is not reducible to any single framework.
