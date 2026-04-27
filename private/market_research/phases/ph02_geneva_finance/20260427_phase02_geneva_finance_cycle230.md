# Phase 02 — Geneva Finance | Cycle C230
**ICP:** Managing director or senior advisor at boutique Geneva wealth management firm (50–200 employees), deploying AI for client reporting, portfolio analysis, and compliance documentation.
**Core concerns:** Accountability for AI-generated recommendations, FINMA regulatory compliance, client data confidentiality, documentation standards at boutique scale.
**Date:** 2026-04-27 | **Mode:** Domain knowledge + Swiss institutional sources

---

## 01 — ICP Language: How This ICP Actually Describes AI Problems

### English

The managing director or senior advisor at a boutique Geneva wealth management firm frames AI problems not as technology choices but as the cumulative consequence of decisions made by people who have since moved on, vendors who have updated their models without adequate notice, and clients whose expectations have been shaped by AI capabilities the firm never explicitly committed to delivering.

Typical language patterns:

- "Our portfolio construction process has AI involvement at multiple layers — the quantitative model that selects factors, the optimization engine that applies constraints, the reporting tool that summarizes output. When something goes wrong, I am not certain which layer to examine first."
- "Clients who came to us after working with larger institutions expect AI-driven portfolio customization at a scale we never promised. They do not distinguish between what we said we would do and what their previous bank did automatically."
- "My compliance officer is responsible for AI oversight. He has never been trained to oversee AI. Neither has anyone else in this firm."
- "We produce quarterly reports that summarize what the AI found. But the AI is monitoring continuously. The quarterly report does not reflect what the AI actually did between reporting periods."
- "FINMA asks board-level questions about AI governance. The board has no framework for evaluating what adequate AI oversight looks like. We are approving AI governance practices without a reference standard."
- "Our AI vendors understand their model limitations better than we do. We do not have the information to ask the right questions."

### French

Le directeur général ou le conseiller principal d'une étude de gestion de patrimoine genevoise ne présente pas les problèmes d'IA comme des choix technologiques, mais comme la conséquence cumulative de décisions prises par des personnes depuis parties, de fournisseurs qui ont mis à jour leurs modèles sans préavis suffisant, et de clients dont les attentes ont été façonnées par des capacités d'IA que l'étude n'a jamais explicitement promis de fournir.

Formulations typiques :

- « Notre processus de construction de portefeuille implique l'IA à plusieurs niveaux — le modèle quantitatif qui sélectionne les facteurs, le moteur d'optimisation qui applique les contraintes, l'outil de reporting qui résume les résultats. Quand quelque chose tourne mal, je ne suis pas certain quel niveau examiner en premier. »
- « Les clients qui sont venus vers nous après avoir travaillé avec des institutions plus grandes attendent une personnalisation de portefeuille pilotée par l'IA à une échelle que nous n'avons jamais promise. Ils ne distinguent pas entre ce que nous avons dit que nous ferions et ce que leur banque précédente faisait automatiquement. »
- « Mon responsable conformité est responsable de la supervision de l'IA. Il n'a jamais été formé pour superviser l'IA. Personne d'autre dans cette étude non plus. »
- « Nous produisons des rapports trimestriels qui résument ce que l'IA a trouvé. Mais l'IA surveille en continu. Le rapport trimestriel ne reflète pas ce que l'IA a réellement fait entre les périodes de reporting. »
- « FINMA pose des questions au niveau du conseil sur la gouvernance de l'IA. Le conseil n'a pas de cadre pour évaluer ce à quoi ressemble une supervision de l'IA adéquate. Nous approuvons des pratiques de gouvernance IA sans norme de référence. »
- « Nos fournisseurs d'IA comprennent les limites de leurs modèles mieux que nous. Nous n'avons pas l'information pour poser les bonnes questions. »

---

## 02 — Market Signals: Current Problems, Failure Modes, Paradoxes, Complaints

### Signal 1: Compounding AI Opacity in Multi-Layer Portfolio Construction

The most structurally underappreciated problem at boutique Geneva wealth management firms is not that AI is used in portfolio construction — it is that AI is used at multiple layers of the same process, with each layer operating with limited visibility into the others. A quantitative factor model selects exposures. An optimization engine applies constraints. A risk monitoring system alerts on deviations. A reporting tool summarizes results for the client. Each layer involves AI. The output that reaches the client has passed through all of them. When the managing director is asked to explain how a recommendation was produced, there is no single layer that contains the full answer — the answer is distributed across a system that was not designed to produce a coherent explanation.

The failure mode: a client dispute or regulatory examination requires tracing a recommendation back to its origins. The firm's documentation can show what the output was. It cannot show how each layer contributed to shaping the final output, because those layers were not designed to document their interactions.

### Signal 2: Client Expectation Drift Without Explicit Commitment

Geneva wealth management clients who have moved from larger institutions to boutique firms bring expectations about AI-driven personalization that the boutique did not explicitly commit to. The prior institution may have provided AI-assisted customization as a standard feature of its service model. The boutique does not provide that capability at the same scale, but has not made the limitation explicit. The client assumes the capability exists and was implied in the advisory relationship.

The paradox: the boutique firm is now exposed to a client expectation it never created, for a capability it never promised, in a context where the client believes the expectation was met. The firm's documentation of what it actually committed to — which is typically limited — does not protect against expectation drift shaped by prior institutional relationships.

### Signal 3: The Compliance Officer AI Supervision Burden Without Training Infrastructure

Geneva boutique wealth management firms have assigned AI oversight responsibility to compliance officers who have no AI supervision training, no established competency standard for AI oversight, and no internal reference for what adequate AI supervision looks like at the human level. The compliance officer is responsible for a task that has no defined methodology at boutique scale.

The failure mode is not intentional neglect. It is structural: the person assigned to oversee AI does not have the framework to know whether they are doing it adequately. The firm has allocated the responsibility without allocating the capability. The compliance officer signs off on AI oversight processes they cannot fully evaluate, creating documentation that records their participation without demonstrating their competence.

### Signal 4: The Quarterly Report Structural Gap — Monitoring Continuity vs. Reporting Periodicity

Boutique Geneva wealth management firms produce quarterly client reports that summarize portfolio performance and position. AI systems monitor continuously — flagging risk signals, adjusting factor exposures, generating alerts between reporting periods. The quarterly report does not capture what the AI did in the period between reports. The client receives a summary that reflects a point-in-time snapshot, while the AI has been operating continuously.

The structural gap: the firm's documentation of AI-assisted portfolio management is organized around the reporting period, not the monitoring period. When a regulatory examination or client dispute asks what the AI did between quarterly reports, the documentation does not provide an answer — it only provides what was reported at the end of the period.

### Signal 5: Board-Level AI Governance Approval Without Adequacy Reference

FINMA supervisory expectations include board-level AI governance oversight. The board at a boutique Geneva wealth management firm is asked to approve AI governance practices without a reference standard for what adequate AI oversight looks like at board level. The board has fiduciary duty frameworks for investment decisions, operational risk oversight, and regulatory compliance. It does not have a calibrated framework for evaluating whether AI model governance is sufficient or whether AI oversight processes meet the standard of care expected at board level.

The managing director presents AI governance documentation to the board. The board approves it. Neither party has a reference point for whether the approval reflects adequate oversight or merely procedural compliance. The documentation exists. The substantive evaluation does not.

### Signal 6: The Vendor Information Asymmetry — AI Model Limitations Known to the Developer, Unknown to the Firm

Boutique Geneva wealth management firms are operating AI tools whose model limitations are known to the developers but not systematically communicated to the firms. AI model risk documentation from vendors focuses on what the model does. What the model does not do, where it degrades under specific conditions, what its known failure modes are — this information is held by the model developer and flows to the firm only through release notes that the firm does not have a systematic process to review.

The structural consequence: the firm is accountable for AI outputs it did not design, whose limitations it does not fully know, and whose failure modes it has not documented. When something goes wrong, the firm discovers the limitation at the same moment the client discovers the problem — and the vendor's internal knowledge of the limitation provides no protection to the firm that deployed the tool in good faith.

---

## 03 — Competitive Analysis: Gaps, What No One Is Addressing

### Gap 1: Multi-Layer AI Portfolio Construction Auditability — The Compound Opacity Problem

No advisory service exists to help boutique Geneva wealth management firms understand and document how AI operates across multiple layers of their portfolio construction process — from factor selection through optimization through risk monitoring through client reporting. Existing AI governance frameworks address individual tools, not inter-layer interactions. This is distinct from model inventory (which lists tools) and from attribution reconstruction (which traces a single output). This addresses the structural problem of an AI system that produces outputs through a chain of AI processes, each of which shapes the final output, and none of which is designed to document its contribution to the chain.

### Gap 2: Client Expectation Calibration Service — Managing AI Service Level Gap at Boutique Scale

No advisory service specifically addresses the problem of calibrating client AI expectations at boutique Geneva wealth management firms — the specific work of determining what AI capabilities the firm has actually committed to, identifying where client expectations exceed those commitments, and designing a client communication approach that closes the gap without damaging the relationship. This is distinct from client communication template development (which produces generic language) and from AI governance disclosure (which is about regulatory compliance). This specifically addresses the expectation drift problem: clients who arrived with expectations shaped by larger institutions, in a context where the boutique has not made its actual AI service level explicit.

### Gap 3: Compliance Officer AI Supervision Competency Framework for Boutique Scale

No advisory service has developed a competency framework specifically for compliance officers at boutique Geneva wealth management firms who are responsible for AI oversight — defining what adequate AI supervision looks like, what competencies the supervisor needs, what documentation demonstrates supervision quality rather than supervision occurrence, and how to build the internal capability that the role requires. This is distinct from AI governance training (which is generic) and from AI tool training (which is vendor-specific). This specifically addresses the compliance officer's problem: they are responsible for AI oversight but have no reference for what that responsibility requires of them.

### Gap 4: Continuous AI Monitoring Documentation Architecture — Bridging the Quarterly Report Gap

No advisory service addresses the specific problem of documenting AI monitoring activity between reporting periods — creating a documentation architecture that captures what AI systems did in the periods between quarterly reports, so that the firm's documentation reflects monitoring continuity, not just reporting periodicity. This is distinct from AI incident logging (which records specific events) and from compliance reporting (which is organized around regulatory requirements). This specifically addresses the structural gap between continuous AI monitoring and periodic client reporting, producing documentation that shows what the AI was doing between the reports the client received.

### Gap 5: Board AI Governance Adequacy Reference Framework — Defining What Responsible AI Oversight Looks Like

No advisory provider has developed a practical reference framework specifically for boutique Geneva wealth management boards to evaluate whether their AI governance oversight is adequate — not a generic corporate governance template, but a framework calibrated to the board's actual oversight capacity and the firm's actual AI deployment complexity. This framework would define what board-level AI oversight requires in substantive terms, what questions the board should be able to answer about the firm's AI environment, and how to distinguish procedural approval from substantive oversight. This is distinct from board-level AI literacy training (which is generic) and from managing director personal liability analysis (which is about individual accountability).

### Gap 6: AI Vendor Limitation Documentation Service — Systematic Limitation Intelligence for Boutique Firms

No advisory service systematically collects and translates AI model limitation information from vendors into documentation that the boutique firm can use — specifically, a structured methodology for requesting AI model limitation documentation from vendors, evaluating what information is available versus what is withheld, and building internal documentation of AI model limitations that the firm can present in a regulatory examination or client dispute. This is distinct from vendor contract review (which examines legal provisions) and from AI tool evaluation (which assesses capability). This specifically addresses the information asymmetry problem: the vendor knows more about the model's limitations than the firm does, and the firm has no systematic process for closing that gap.

---

## 04 — Compliance Context: Geneva/Swiss Regulatory Obligations

### FINMA — Board-Level AI Governance Oversight and the Adequacy Problem

FINMA's supervisory expectations for AI governance include board-level oversight — the board must be able to demonstrate that it understands the firm's AI environment and exercises appropriate oversight over AI-related risk. For boutique Geneva wealth management firms, the practical problem is not the expectation itself but the adequacy reference: the board has no framework for evaluating whether its AI oversight is adequate, no methodology for distinguishing substantive oversight from procedural approval, and no basis for knowing whether the AI governance information provided to the board is complete.

FINMA examination questions have included board-level AI governance adequacy in recent cycles. The questions being asked concern what the board knows about the firm's AI environment, how the board satisfies itself that AI governance is adequate, and what documentation exists to demonstrate board-level AI oversight. The board that cannot answer these questions with specificity — not "we have an AI governance policy" but "our board reviewed this specific AI risk and took this specific action" — is not adequately overseeing AI, regardless of whether documentation exists.

### ASIP — Pension Fund Trustee AI Competency Expectations

ASIP has not published specific AI competency requirements for pension fund trustees, but the underlying BVG duty of care standard applies to oversight of AI-assisted investment decisions at pension fund scale. Pension fund trustees who approve asset allocation decisions made with AI assistance are accountable for the quality of that oversight — which requires understanding what the AI does, what its limitations are, and whether the trustees' oversight processes are adequate for the AI system in use.

For Geneva boutique wealth management firms advising pension funds, the ASIP accountability surface creates a documentation requirement for demonstrating that pension fund trustees have been given adequate information to exercise oversight over AI-assisted decisions. This is not satisfied by the firm having AI governance documentation — it requires documentation that the trustee's oversight role was discharged with adequate information about what the AI was doing.

### SFAMA — AI in Portfolio Construction and the Multi-Layer Documentation Requirement

SFAMA guidance on AI-assisted portfolio management does not address the specific problem of multi-layer AI portfolio construction — where AI operates at multiple stages of the same process, each layer contributing to the final output. The SFAMA expectation for human oversight of AI-driven investment decisions applies at the portfolio construction level, but the documentation requirement extends to demonstrating what human oversight occurred at each layer where AI contributed to the final recommendation.

For boutique firms using AI in factor selection, optimization, risk monitoring, and client reporting simultaneously: the multi-layer AI architecture creates a documentation requirement that SFAMA guidance does not explicitly address — what constitutes adequate human oversight of a portfolio construction process that involves AI at three or four distinct stages, each of which shapes the final output?

### ISSB — Sustainability Data as the Emerging Critical AI Governance Surface

ISSB disclosure requirements are becoming the least-examined but most operationally significant AI governance exposure for Geneva boutique wealth management firms that use AI in sustainable investment analysis. The intersection is specific: AI tools that generate ESG ratings, climate risk scores, or sustainability screening outputs — these AI-generated sustainability claims enter client disclosures that must be ISSB-aligned. The accuracy of the disclosure depends on the accuracy of the AI-generated sustainability claim.

The problem is not that ISSB has published AI-specific guidance. It has not. The problem is that ISSB-aligned disclosures are subject to issuer accountability for accuracy, and the accuracy of sustainability claims in boutique client portfolios depends substantially on AI tools that the firm has not fully documented the methodology of. When a sustainability disclosure is challenged, the firm cannot defend the accuracy of the AI-generated sustainability claim by pointing to the AI vendor's methodology — the issuer of the disclosure bears the accountability.

### nFADP — Client Data in Multi-Layer AI Systems and the Cross-Tool Notification Problem

nFADP applies to client data processing in AI systems, with the most operationally complex exposure arising when client data flows through multiple AI systems in sequence — portfolio analytics AI processing client holdings data, generating outputs that flow into risk monitoring AI, generating alerts that flow into client reporting AI. Each system processes client data. The client's notification obligation applies to each processing event.

For boutique firms that have not mapped which AI tools process which client data in which sequence: the cross-tool data flow documentation is missing, meaning the nFADP notification obligation cannot be satisfied completely because the firm does not have a complete record of which processing events have occurred. This is distinct from the single-tool nFADP compliance gap — it is the compound problem of multiple AI tools processing client data in a connected sequence, where the notification obligation applies to the sequence, not just to individual tools.

---

## 05 — Lead Magnet Draft: In Sergio's Voice (EN + FR)

### Portfolio AI Accountability Briefing
**Geneva Boutique Wealth Management | 90 Minutes | CHF 2,800**

---

**English Version**

#### What This Is

A focused 90-minute review of where your firm's AI accountability exposure actually sits — not a technology audit, not a compliance checklist. Specifically: how AI operates across the multiple layers of your portfolio construction process, where your client expectation gaps are relative to what you have actually committed to, what your compliance officer is actually responsible for overseeing without a competency framework, and what your board is actually approving without an adequacy reference.

#### The Starting Point

Most boutique Geneva wealth management firms have AI tools in production across portfolio construction, risk monitoring, and client reporting. Most have AI governance documentation. Fewer have a clear picture of how AI operates across the multiple layers of their portfolio process — where each layer begins and ends, what each contributes to the final output, and what the documentation would show if a client asked how their portfolio recommendation was produced.

Fewer still have calibrated what their clients expect from AI against what the firm has actually committed to. Or have given their compliance officer a framework for knowing whether their AI supervision is adequate. Or have given their board a reference point for evaluating whether AI governance approval is substantive or procedural.

The Portfolio AI Accountability Briefing is designed to give you that picture — clearly, in 90 minutes, with a written summary you can act on.

#### What We Look At

We examine four documentation surfaces that boutique firms consistently find are not adequately addressed by existing AI governance frameworks:

1. **Multi-layer AI portfolio construction auditability** — Whether your firm can trace how a client portfolio recommendation was produced through all the AI layers that contributed to it: factor selection, optimization, risk monitoring, reporting. Each layer may involve AI. The documentation that shows what each layer contributed — and what human review occurred at each stage — is where most boutique firms have the largest gaps.

2. **Client AI expectation calibration** — Whether your client agreements and service descriptions accurately reflect what AI capabilities your firm provides, and whether client expectations — shaped by prior institutional relationships and by general AI market noise — exceed what you have committed to. This is not about underdelivering; it is about whether the commitment is documented accurately enough to protect you when expectations diverge from what was actually agreed.

3. **Compliance officer AI supervision competency** — Whether your compliance officer has a framework for knowing what adequate AI supervision looks like, what documentation demonstrates supervision quality rather than supervision occurrence, and what the internal capability gap is between the responsibility assigned and the capability allocated. The person signing AI oversight documentation needs to know what they are signing — and most compliance officers at boutique firms have never been given that framework.

4. **Board AI governance adequacy reference** — Whether your board has a substantive basis for evaluating whether AI governance is adequate, or whether board approval of AI governance is procedural without being evaluative. FINMA supervisory questions have moved to board-level adequacy — not just "do you have a policy" but "how does the board know it is sufficient."

#### What You Receive

Within five business days: a written summary identifying the four most material accountability gaps in your current AI setup, with specific, proportionate recommendations for each. Written for a managing director — concise, actionable, no vendor recommendations or technical padding.

#### Price

CHF 2,800, all-inclusive. One session. No follow-up obligation.

#### Next Step

Write to us. Tell us the approximate size of your firm and the AI tools currently in use across portfolio construction, risk monitoring, and client reporting. We will confirm whether this format is appropriate and send a short preparatory note.

---

**Version française**

#### Ce que c'est

Un examen ciblé de 90 minutes sur l'endroit où l'exposition de responsabilité IA de votre étude se situe réellement — pas un audit technologique, pas une liste de conformité. Plus précisément : comment l'IA fonctionne à travers les multiples couches de votre processus de construction de portefeuille, où se situent vos lacunes d'attentes clients par rapport à ce que vous avez réellement promis, de quoi votre responsable conformité est réellement responsable de superviser sans cadre de compétence, et ce que votre conseil approuve réellement sans référence d'adéquation.

#### Le point de départ

La plupart des études de gestion de patrimoine genevoise utilisent des outils d'IA en production dans la construction de portefeuille, la surveillance des risques et les rapports clients. La plupart disposent d'une documentation de gouvernance IA. Moins nombreuses sont celles qui ont une image claire de comment l'IA fonctionne à travers les multiples couches de leur processus de portefeuille — où chaque couche commence et se termine, ce que chacune contribue au résultat final, et ce que la documentation montrerait si un client demandait comment sa recommandation de portefeuille a été produite.

Encore moins ont calibré ce que leurs clients attendent de l'IA par rapport à ce que l'étude a réellement promis. Ou ont donné à leur responsable conformité un cadre pour savoir si leur supervision IA est adéquate. Ou ont donné à leur conseil un point de référence pour évaluer si l'approbation de la gouvernance IA est substantielle ou procédurale.

Le Portfolio AI Accountability Briefing est conçu pour vous donner cette image — clairement, en 90 minutes, avec un résumé écrit sur lequel vous pouvez agir.

#### Ce que nous examinons

Nous analysons quatre surfaces documentaires que les études boutique découvrent systématiquement ne pas être adéquatement traitées par les cadres de gouvernance IA existants :

1. **Auditabilité de la construction de portefeuille par IA multicouche** — Si votre étude peut retracer comment une recommandation de portefeuille client a été produite à travers toutes les couches IA qui y ont contribué : sélection des facteurs, optimisation, surveillance des risques, reporting. Chaque couche peut impliquer l'IA. La documentation qui montre ce que chaque couche a contribué — et quelle révision humaine a eu lieu à chaque stade — est là où la plupart des études boutique ont les plus grandes lacunes.

2. **Calibration des attentes clients en matière d'IA** — Si vos conventions clients et descriptions de service reflètent précisément les capacités IA que votre étude fournit, et si les attentes clients — façonnées par des relations institutionnelles antérieures et par le bruit général du marché de l'IA — dépassent ce que vous avez promis. Ce n'est pas une question de sous-performer ; c'est une question de savoir si l'engagement est documenté avec assez de précision pour vous protéger quand les attentes divergent de ce qui a été réellement convenu.

3. **Compétence de supervision IA du responsable conformité** — Si votre responsable conformité a un cadre pour savoir à quoi ressemble une supervision IA adéquate, quelle documentation démontre la qualité de la supervision plutôt que son occurrence, et quelle est la lacune de capacité interne entre la responsabilité assignée et la capacité allouée. La personne qui signe la documentation de supervision IA doit savoir ce qu'elle signe — et la plupart des responsables conformité dans les études boutique n'ont jamais eu ce cadre.

4. **Référence d'adéquation de gouvernance IA du conseil** — Si votre conseil a une base substantielle pour évaluer si la gouvernance IA est adéquate, ou si l'approbation du conseil de la gouvernance IA est procédurale sans être évaluative. Les questions de supervision FINMA se sont déplacées vers l'adéquation au niveau du conseil — pas seulement « avez-vous une politique » mais « comment le conseil sait-il que c'est suffisant ».

#### Ce que vous recevez

Dans les cinq jours ouvrables : un résumé écrit identifiant les quatre lacunes de responsabilité les plus matérielles dans votre configuration IA actuelle, avec des recommandations spécifiques et proportionnées pour chacune. Rédigé pour un directeur général — concis, actionnable, sans recommandations de fournisseurs ni terminologie technique.

#### Prix

CHF 2 800, tout compris. Une séance. Aucune obligation de suivi.

#### Prochaine étape

Écrivez-nous. Indiquez-nous la taille approximative de votre étude et les outils IA actuellement utilisés dans la construction de portefeuille, la surveillance des risques et les rapports clients. Nous confirmerons si ce format est approprié et vous enverrons une note préparatoire courte.

---

## 06 — Findings Summary: 6 Net-New Insights (Distinct from C214–C229 Phase 02)

### Finding 1: Multi-Layer AI Portfolio Construction Opacity as a Compound Accountability Problem

The boutique Geneva wealth management firm's portfolio construction process involves AI at multiple layers — factor selection models, optimization engines, risk monitoring systems, client reporting tools — each contributing to the final output without a documentation architecture designed to capture inter-layer contributions. Prior Phase 02 cycles addressed attribution reconstruction (C225, C227, C228, C229) — tracing a single AI output back to its source tool. None addressed the compound opacity problem: AI contributions at multiple layers of the same process, where each layer shapes the output and the firm's documentation cannot show how the layers interacted to produce the final recommendation.

This finding identifies a specific structural problem: when the client or regulator asks how a portfolio recommendation was produced, the answer requires tracing contributions across all AI layers that shaped the output, and the documentation needed to provide that answer does not exist in any firm's current AI governance framework, because existing frameworks address individual tools, not tool-chain interactions.

**Multi-layer AI portfolio construction auditability as a distinct boutique advisory surface — not addressed by tool-level AI governance frameworks, requiring a documentation architecture designed for AI system interactions rather than individual AI tools.**

---

### Finding 2: Client AI Expectation Drift Without Explicit Commitment as an Unowned Liability

Geneva boutique wealth management firms are absorbing client expectations about AI-driven customization that were shaped by prior institutional relationships — larger banks that provided automated personalization as a standard service tier. The boutique did not make the same commitment but has not made the limitation explicit. Clients who expected the prior institution's AI capability assume it is implied in the advisory relationship with the boutique.

Prior Phase 02 cycles addressed client AI expectation management (C224), client-supplied AI entering advisory workflow (C224), and client governance review requests arriving before internal readiness (C223). None addressed the specific problem of expectation drift shaped by the client's prior institutional relationships — not what the firm promised, but what the client assumed was standard based on where they came from.

This finding identifies a liability that is structurally unowned: the boutique is exposed to client expectations it never created, for capabilities it never committed to, with documentation that does not establish what was and was not implied in the service relationship. The documentation that would protect the firm — a precise description of AI service level commitments — is absent in most boutique engagement structures.

**Client AI expectation calibration as a distinct boutique advisory service — mapping what clients expect based on prior institutional relationships against what the firm has actually committed to, producing documentation that closes the gap before it becomes a dispute.**

---

### Finding 3: Compliance Officer AI Supervision Competency Gap as Structural而非只是 Training Problem

Boutique Geneva wealth management firms have assigned AI oversight responsibility to compliance officers who have no established competency framework for AI supervision — not because training is unavailable, but because no one has defined what adequate AI supervision means at the compliance officer level for a boutique wealth management firm. Prior Phase 02 cycles addressed human review adequacy (C225, C226, C227) — the question of whether human review is substantive. None addressed the specific problem of the compliance officer's own competency framework: what does the person responsible for AI oversight need to know, how would they know if they know it, and what documentation demonstrates that their oversight is competent rather than merely present.

This finding identifies the compliance officer AI supervision competency gap as a structural problem that training programs do not resolve, because the underlying question — what is adequate AI supervision at boutique scale — has not been answered by any regulatory body, professional association, or advisory standard. The compliance officer is signing documentation that records their participation in AI oversight without a reference point for whether their participation constitutes adequate oversight.

**Compliance officer AI supervision competency framework as a distinct boutique advisory output — defining what adequate AI supervision looks like for a compliance officer at a 50-200 employee wealth management firm, producing documentation that demonstrates competency rather than just participation.**

---

### Finding 4: The Quarterly Report Structural Gap — Continuous AI Monitoring vs. Periodic Reporting

Boutique Geneva wealth management firms organize their AI governance documentation around reporting periods — quarterly client reports, annual compliance reviews, periodic model re-validations. AI systems, however, monitor continuously. Risk alerts are generated between reports. Factor exposures are adjusted between quarters. AI-generated outputs enter client portfolios between reporting periods. The documentation the firm can produce shows what was in the last quarterly report. It does not show what the AI was doing in the periods between reports.

Prior Phase 02 cycles addressed model version documentation (C223, C225) and AI output documentation for compliance review (C224). None addressed the specific structural gap between continuous AI monitoring activity and the periodic documentation architecture that the firm's reporting systems are organized around.

This finding identifies a documentation architecture problem, not a documentation volume problem. The firm is not missing records of what happened; it is organizing its documentation around reporting periods that do not match the temporal cadence of AI monitoring activity. The result is that AI behavior that occurs between reports is undocumented in any client-facing record, creating a gap that cannot be closed by adding more documentation to the existing architecture — it requires a different documentation architecture designed for continuous monitoring documentation, not periodic reporting.

**Continuous AI monitoring documentation architecture as a distinct boutique advisory output — a documentation framework designed for AI systems that operate continuously, producing records that show what the AI was doing between reporting periods, not just what appeared in the last report.**

---

### Finding 5: Board AI Governance Adequacy Reference as the Unresolved Oversight Standard

FINMA supervisory expectations for board-level AI governance oversight have moved to adequacy — not "does the board have an AI governance policy" but "how does the board know the AI governance is sufficient." For boutique Geneva wealth management firm boards, the adequacy reference does not exist. The board has fiduciary duty frameworks for investment decisions, operational risk, and regulatory compliance. It does not have a framework for evaluating whether AI governance oversight meets the standard of care expected at board level.

Prior Phase 02 cycles addressed managing director personal liability (C225, C226, C227, C229) — the individual accountability question. None addressed the specific board-level oversight adequacy problem: what substantive questions should the board be able to answer about the firm's AI environment, what documentation demonstrates that the board's AI oversight was evaluative rather than merely approved, and how does a boutique board develop AI governance oversight competency when no reference standard exists.

This finding identifies a specific structural gap: the board is accountable for AI governance adequacy without a reference point for what adequate looks like. The documentation that would close this gap is not more AI governance records — it is documentation of the board's evaluative process: what questions the board asked, what information it received, what analysis it conducted, and what conclusion it reached. Procedural approval of AI governance documentation is not the same as substantive board-level AI oversight.

**Board AI governance adequacy reference framework as a distinct boutique advisory service — defining what substantive board-level AI oversight looks like at boutique scale, producing documentation that demonstrates evaluative oversight rather than procedural approval.**

---

### Finding 6: AI Vendor Limitation Information Asymmetry as an Unmanaged Accountability Exposure

Boutique Geneva wealth management firms are operating AI tools whose model limitations — known failure modes, conditions of degradation, known accuracy boundaries — are held by the vendor and not systematically disclosed to the firm. The firm is accountable for AI outputs it did not design, whose limitations it does not fully know, and whose failure modes it has not documented. When an AI-generated recommendation proves incorrect, the firm discovers the limitation at the same moment the client discovers the problem — and the vendor's internal knowledge of the limitation provides no protection to the firm that deployed the tool.

Prior Phase 02 cycles addressed AI vendor sustainability risk (C227), AI vendor compliance claims without independent evaluation (C224), and AI vendor contract provisions (C228). None addressed the specific information asymmetry problem: the vendor knows things about the model's limitations that the firm does not know, and the firm has no systematic process for closing that information gap.

This finding identifies a specific documentation problem: the firm's AI governance documentation describes what the AI tool does. It does not describe what the AI tool does not do, where it degrades, or what its known failure modes are — because that information is held by the vendor and the firm has not asked for it in a form that produces documentation it can present in a regulatory examination or client dispute. The unowned gap is not in the AI tool — it is in the vendor-firm information relationship, where accountability flows to the firm for limitations the firm did not document because the vendor did not volunteer them.

**AI vendor limitation documentation service as a distinct boutique advisory output — a structured methodology for requesting, collecting, and documenting AI model limitation information from vendors, producing firm-level documentation of AI tool limitations that can be presented in regulatory examination or client dispute context.**

---

*End of Phase 02 — Geneva Finance | Cycle C230*
*Mode: Domain knowledge + Swiss institutional sources | 6 net-new findings distinct from C214–C229 Phase 02*