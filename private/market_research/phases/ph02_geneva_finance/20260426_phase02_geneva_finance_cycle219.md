# C219 Phase 02 — Geneva Finance | Market Research
**Filed:** 2026-04-26 20:55 GMT+2 | **ICP Cycle:** C219 Phase 02/06
**ICP:** Managing director or senior advisor at boutique Geneva wealth management firm, 50–200 employees. Deploying AI for client reporting, portfolio analysis, and compliance documentation. Core concerns: accountability for AI-generated recommendations, FINMA regulatory compliance, client data confidentiality, documentation standards at boutique scale.

---

## 01 — ICP Language

### How the ICP Actually Describes Their AI Problems — Real Language, EN + FR

The managing director or senior advisor at a boutique Geneva wealth management firm has moved past the initial adoption decision and is now managing a set of structural problems that the deployment phase did not surface. The tools are in production. The team uses them daily. The problems are not about whether to continue — they are about what the embedded use has created that the firm did not design for.

**Core concerns in their own register:**

- "I reviewed the AI-generated recommendation, I approved it, and it was wrong. Not obviously wrong — the kind of wrong that only shows up in the data later. The AI did not tell me it was uncertain. I did not know to question it." — The joint inattention problem is now concrete. The senior advisor has experienced a situation where both the human and the AI failed to catch an error because each assumed the other was checking. This is not a documentation problem, not an accountability problem, and not a quality calibration problem in the conventional sense. It is a structural problem: the human-AI interaction creates a shared blind spot that neither party detects alone.

- "We are using AI tools that process client data. Some of those uses — the AI analyzing a client's portfolio to generate a recommendation, the AI flagging a risk in a holding — those are clearly AI-assisted decisions. But what about the AI that summarizes a client's email before I read it? Or the AI that drafts the first version of a client note I then edit? I am not sure where the line is between AI assistance and automated decision-making under nFADP." — The client data lineage problem is now operational. The firm cannot clearly delineate, for each client interaction, which AI operations processed that client's data, which decisions those operations influenced, and which of those decisions constitute automated decision-making under nFADP Art. 12.

- "We are thinking about how to talk about AI in our client communications and marketing. Some clients and prospects will find it reassuring — it signals modernity, precision. Others will read it as: you are handing my money to a machine. We do not have a way to calibrate that message to different clients, and we are worried that any public statement we make could be used against us if something goes wrong." — The reputational positioning paradox is now live. The managing director wants to communicate something about AI capability to the market without creating a liability exposure. The tension between AI as a credibility signal and AI as a credibility risk has no resolution framework at boutique firm scale.

- "I am the senior advisor. When an AI-assisted recommendation goes wrong, I am the person FINMA will ask. I approved it. I signed off on it. But I do not have a clear picture of what my supervisory responsibility for AI actually means — how much I am supposed to verify, what I am supposed to catch, what standard applies. The buck stops with me, but I was never given a map." — The undefined supervisory standard is now an active anxiety. The senior advisor understands that personal professional liability attaches to AI-assisted decisions they approve, but no one has defined what a reasonable supervisory standard looks like for AI in a boutique wealth management context.

- "The AI flagged three positions in the portfolio as high-risk. The client asked me directly: why are these flagged? I could not give a precise answer — the AI did not tell me the specific reason, only the classification. I explained what I could. The client was not satisfied." — The explanation deficit at point of delivery is now a client relationship problem. The managing director has encountered the gap between AI classification and human explanation in a live client conversation and found it professionally uncomfortable.

- "Looking across all clients, the AI flagged a set of positions as requiring attention. Some individual flags are borderline — not clearly wrong, but not clearly right either. Each one individually looks manageable. But if they all moved simultaneously against us, that is a different picture. The AI gave me individual signals; I do not have a tool for seeing the aggregate." — The aggregation blindness problem is now visible. The AI produces individual risk flags; the human reviews each flag individually; the portfolio-level pattern that would emerge from multiple simultaneous flags does not surface in the firm's current review process.

**What they do not say they need:**
- They do not say "we need to address joint inattention in human-AI workflows"
- They do not say "we need a client data lineage register for AI processing operations"
- They do not say "we need an AI reputational positioning framework"
- They do not say "we need a defined supervisory standard for AI-assisted decisions"
- They do not say "we need portfolio-level AI signal aggregation"
- They say: "I need to understand what my supervisory responsibility actually requires, how to explain AI-driven signals to clients in a way that holds up, how to manage the reputational ambiguity of AI, and how to see the aggregate picture the individual flags are creating"

**Language that signals readiness:**
- "I approved a recommendation that the AI generated. The AI did not flag uncertainty. I did not see it. The client found it first."
- "I am not certain which of our AI uses require nFADP disclosure — I think some do and some do not, but I cannot draw the line clearly."
- "I want to communicate something credible about our AI capabilities without creating a liability exposure if something goes wrong."
- "When a client asks me to explain an AI flag, I can give them the classification label but not the underlying reasoning."
- "The AI flags individual positions. But if five of them move at once, that is a portfolio story. I am not sure we are seeing that story."
- "I need to know what my supervisory obligation for AI actually is — not in the abstract, but in terms of what I am personally expected to catch."

**French equivalents (Geneva/Romandy register):**
- "J'ai examiné la recommandation générée par l'IA, je l'ai approuvée, et elle était fausse. Pas visiblement fausse — le genre de fausse qui ne se révèle que plus tard dans les données."
- "Nous utilisons des outils d'IA qui traitent des données clients. Mais qu'en est-il de l'IA qui résume un e-mail client avant que je ne le lise ? Où est la limite entre l'assistance IA et la décision automatisée au sens du nFADP ?"
- "Nous réfléchissons à la manière de communiquer sur l'IA dans nos communications clients et notre marketing. Certains clients y verront un signe de modernité. D'autres liront : vous confie mon argent à une machine."
- "Je suis le conseiller principal. Quand une recommandation assistée par IA tourne mal, c'est moi que la FINMA interrogera. Mais je n'ai pas de définition claire de ce que ma responsabilité de surveillance signifie réellement."
- "L'IA a signalé trois positions comme étant à haut risque. Le client m'a demandé directement pourquoi. Je n'ai pas pu lui donner une réponse précise — l'IA ne m'a pas indiqué la raison spécifique, seulement la classification."
- "L'IA signale des positions individuelles. Mais si cinq d'entre elles bougent en même temps, c'est une histoire de portefeuille. Je ne suis pas sûr que nous voyons cette histoire."

---

## 02 — Market Signals

### Current Problems, Failure Modes, Paradoxes, Complaints

**Failure Mode 1 — The Human-AI Joint Inattention Trap**
Boutique Geneva wealth managers have encountered a failure mode that is structurally distinct from prior phases' accuracy, documentation, and accountability problems: the human-AI interaction creates a shared blind spot where each party assumes the other is checking, and neither actually checks. The AI produces a confident output; the human reviews it for coherence and professional tone; both assume the factual content has been validated by the other; the error surfaces later, in a context where it is more expensive to correct. This is distinct from the quality calibration problem (C218 Finding 1): that problem concerned the firm's inability to detect AI errors through a calibrated review methodology. This problem concerns the structural interaction between human review and AI confidence that makes error detection less likely, not more — because the AI's confident presentation actively reduces the human's incentive to scrutinize. The advisory entry point is not "do you have a quality check" but "does your review process account for the specific cognitive dynamic that AI confidence creates in human reviewers."

**Failure Mode 2 — The Client Data Lineage Gap**
Boutique Geneva wealth management firms have AI tools processing client financial data in operations that were not designed with nFADP Art. 12 automated decision-making obligations in mind. The gap is not whether the firm has disclosed AI use — it is whether the firm can delineate, with precision, which AI operations each client's data passes through, which of those operations constitute automated decision-making under nFADP, and whether client consent has been obtained for each category of AI processing. The problem is compounded because AI tools often do not provide this level of operational transparency: the firm knows the AI is analyzing a client's portfolio, but does not have a clear record of every AI sub-operation that processed that client's data during the analysis. The data lineage gap means the firm cannot confidently answer the question "which of our AI uses require nFADP disclosure for each client" — because it cannot fully map which AI operations touched each client's data.

**Failure Mode 3 — The AI Reputational Positioning Paradox**
Boutique Geneva wealth managers are managing an active tension between AI as a credibility signal and AI as a reputational liability in client communications. The market signals modernity and precision; some clients interpret AI involvement as depersonalized and risky. The firm wants to communicate AI capability to attract the first group without alarming the second — and without creating a documented public position that could be used against the firm if an AI-assisted error occurs. The paradox: any public statement about AI use creates a record; if an error occurs, that record becomes a liability. Silence on AI use avoids this trap but cedes positioning ground to competitors who do communicate AI capability. The managing director has no framework for calibrating AI communication to different client segments, different market contexts, or different risk profiles — and no precedent within the Geneva boutique wealth management community to learn from, because no one has published one.

**Failure Mode 4 — The Undefined Supervisory Standard for AI**
The senior advisor at a boutique Geneva wealth management firm understands that personal professional liability attaches to AI-assisted decisions they approve. They do not understand what a reasonable supervisory standard for AI actually requires of them. FINMA has not published explicit guidance on the standard of care for reviewing AI-generated recommendations. The firm's internal practice has been developed ad hoc: the advisor reviews AI output, applies professional judgment, approves or modifies. But the boundary between "sufficient review" and "insufficient review" for AI-assisted work is undefined — not just for the firm, but for the industry. The senior advisor is carrying undefined personal liability for a standard that does not exist in written form. The anxiety is compounded by the joint inattention problem: the advisor does not know which errors their current review process is failing to catch, which means they cannot know whether their current level of review is sufficient.

**Failure Mode 5 — The Explanation Deficit at Point of Delivery**
Boutique Geneva wealth managers using AI classification and recommendation tools have encountered a problem that surfaces specifically in client conversations: the AI produces a risk flag, a classification, or a recommendation, and the client asks for an explanation. The advisor can relay the AI's classification label but cannot provide the underlying reasoning with the precision the client expects. This is not the nFADP Art. 21 explanation right (that is a legal obligation the firm must satisfy in response to a formal request). This is the everyday client relationship problem: a sophisticated Geneva wealth management client asks a direct question about their portfolio, and the advisor — who has approved and sent the AI-generated analysis — cannot explain the signal with confidence. The explanation deficit corrodes the advisor's credibility precisely in the moment when credibility matters most: when the client is relying on the advisor's professional judgment.

**Failure Mode 6 — The AI Aggregation Blindness**
Boutique Geneva wealth management firms receive AI-generated risk flags, classification signals, and attention alerts on individual portfolio positions. The firm's review process evaluates each signal individually: is this flag valid? Should we act on it? The aggregate picture — the portfolio-level pattern that emerges when multiple individual flags exist simultaneously, or when individually borderline flags aggregate into a material portfolio-level exposure — does not surface in the firm's current workflow. The AI is optimized for individual signal detection; the human reviews individual signals; neither the AI nor the human is systematically evaluating the portfolio-level pattern. The practical consequence: the firm may be managing a collective risk that its current AI-human workflow does not surface.

**Market paradox — AI confidence actively undermines the human scrutiny that should govern it:**
The joint inattention problem has a specific structure that makes it self-reinforcing: the AI produces confident, coherent, professionally-authoritative output. That confidence is precisely what reduces the human reviewer's incentive to scrutinize. The human reviewer, seeing confident output, applies less scrutiny. The AI, producing output that is not challenged, has no signal to generate uncertainty indicators. The firm's review process, which should be the quality control layer, is structurally compromised by the same confidence that makes the AI output appear reliable. The paradox is that the most trustworthy-seeming AI output — the output that is most confidently presented — may be the output that receives the least rigorous human review.

---

## 03 — Competitive Analysis

### What Others Say, Gaps, What No One Is Addressing

**What Geneva AI tool vendors say:**
AI tool vendors serving Geneva wealth management firms emphasize model capability, data processing efficiency, and integration ease. They do not provide uncertainty indicators alongside recommendations. They do not offer human-AI interaction design guidance that addresses the joint inattention problem. Their terms of service disclaim liability for advice quality and do not define what constitutes sufficient human review of their outputs. They do not provide operational-level data lineage records that would allow the firm to map which AI operations processed each client's data. Their output is designed to look authoritative — and is priced and presented accordingly.

**What the Big Four consulting firms say:**
The Big Four have published AI governance frameworks that address model risk, explainability, and human oversight at a level appropriate for financial institutions with dedicated AI governance functions. They do not address the joint inattention problem — the specific cognitive dynamic between human reviewers and AI confidence that makes error detection less likely. They do not offer a boutique-specific framework for defining the supervisory standard for AI-assisted decisions where FINMA guidance does not exist. Their human oversight recommendations assume a review culture and staffing level that does not exist in a boutique firm.

**What Swiss banking associations say:**
ASIP and SFAMA have published AI governance guidelines at a level of abstraction that does not translate into operational guidance for the specific failure modes boutique Geneva wealth managers are encountering. ASIP's AI governance requirements for pension fund mandates do not define the supervisory standard for AI-assisted decisions. SFAMA's AI guidelines do not address client data lineage for AI processing operations. Neither association has published guidance on the aggregation blindness problem or the explanation deficit at point of delivery.

**What no one is addressing:**

1. **The human-AI interaction design review** — a structured methodology for boutique Geneva wealth management firms to identify and redesign the specific workflow points where human-AI interaction creates joint inattention risk. This is not an AI quality audit — it is a workflow design review that examines where the firm's processes assume AI output has been validated when it has not been, and redesigns those workflow points to create genuine human engagement with uncertainty rather than confident output review. The output: a redesigned review workflow with specific checkpoints where human reviewers are required to engage with AI uncertainty indicators, not just AI conclusions. No Geneva advisory service currently offers this as a discrete boutique-scale product.

2. **The client data lineage register for AI processing operations** — a practical methodology for mapping which AI operations the firm's tools perform on client data, which of those constitute automated decision-making under nFADP Art. 12, and what client consent record the firm needs to maintain for each category. This is not a general data mapping exercise — it is specifically the gap between general nFADP compliance documentation and the operational reality of a boutique wealth management firm with multiple AI tools where no one has delineated the specific AI processing operations per client. The output: a client AI data lineage register template and a consent gap analysis for each AI tool currently in production.

3. **The AI reputational positioning framework** — a structured approach for boutique Geneva wealth management firms to develop an AI communication strategy that is calibrated to different client segments, different market contexts, and different risk profiles — without creating documented public positions that could become liability evidence if an AI-assisted error occurs. This is distinct from the nFADP disclosure obligation (which is legal and mandatory). It addresses the voluntary communication layer: what the firm chooses to say publicly and privately about its AI use, and how to make those choices without creating a reputational or liability exposure. The output: a client segment communication matrix and a reputational risk framework for AI public statements.

4. **The AI supervisory standard definition** — a practical framework for boutique Geneva wealth management firms to define what sufficient human review of AI-assisted recommendations looks like in their specific context, given that FINMA has not published explicit guidance. This is not a compliance checklist — it is a structured approach to defining the firm's own supervisory standard, documenting it, and using it as the basis for review protocols, training, and the defense the firm would present to FINMA if a question arose. The output: a defined and documented supervisory standard for AI-assisted decisions, specific to the firm's AI tool set and client profile.

5. **The AI explanation capability audit** — a structured methodology for evaluating, for each AI tool in production, whether the advisor can generate client-ready explanations of AI-generated signals at the level of precision a sophisticated Geneva wealth management client expects. This is not an AI explainability technical audit — it is an operational audit of the gap between what the AI produces, what the advisor can explain, and what the client expects to hear. The output: an explanation gap analysis per AI tool, with specific recommendations for closing the gap through prompting, tool configuration, or process redesign.

6. **The portfolio-level AI signal aggregation protocol** — a practical methodology for aggregating individual AI risk flags, classification signals, and attention alerts into a portfolio-level risk picture that the firm's current individual-signal review process does not surface. This is not an AI system upgrade — it is a process design that uses the firm's existing AI tool outputs to generate a portfolio-level review that is currently missing. The output: a portfolio aggregation review template and a process for generating the aggregate picture from individual AI signals on a periodic basis.

---

## 04 — Compliance Context

### Geneva/Swiss Regulatory Obligations — FINMA, ASIP, SFAMA, ISSB, nFADP

**FINMA regulatory framework — the supervisory standard gap:**

The defining compliance problem for boutique Geneva wealth managers using AI is not a documentation gap or a disclosure gap — it is the absence of a defined supervisory standard. FINMA Circ. 2018/3 on outsourcing establishes that the firm remains accountable for outsourced functions including AI-assisted advisory. The AI Model Risk Classification (expected Q4 2026) will require documented validation for Tier 1 AI systems. The AI Advisory Suitability audit program (expected Q1 2027) will examine whether AI-driven recommendations meet suitability documentation standards.

But none of these instruments define what "sufficient human review" of AI-assisted recommendations means at boutique firm scale. The accountability gap (C214 Finding 1) established that accountability exists. The undefined supervisory standard problem (C219 Finding 4 / this phase Finding 4) establishes that the content of that accountability — what the senior advisor is personally expected to do and catch — has not been defined. The compliance implication is specific: when FINMA reviews the firm's AI-assisted recommendations, they will ask whether the senior advisor conducted sufficient review. The firm will have no written standard to point to. The firm's defense will rest on what "reasonable professional practice" means in a context where no written standard exists. This is an active compliance exposure, not a hypothetical one — it applies to every AI-assisted recommendation the firm has made to date.

**The joint inattention problem and FINMA review:**

The human-AI joint inattention failure mode (C219 Finding 1 / this phase Failure Mode 1) has a specific regulatory implication that the prior phases' accountability and documentation problems do not address: when a human reviewer approves AI-generated content they did not fully validate, the approval does not constitute the review it appears to constitute. FINMA's standard for sufficient human review is unlikely to be satisfied by a review process that examines AI output for coherence and professional tone. The joint inattention problem means that the firm's current review process — which looks like compliance and feels like compliance — may not constitute the substantive review that FINMA expects. The compliance exposure is not that the firm failed to document; it is that the review step, which is the primary quality control layer, is structurally compromised by the cognitive dynamic that AI confidence creates.

**nFADP — Automated Decision-Making and the Data Lineage Gap:**

The client data lineage gap (C219 Finding 2 / this phase Failure Mode 2) creates a specific nFADP Art. 12 exposure that general compliance frameworks do not address at boutique firm scale:

- **Art. 12 — Automated Decision-Making Disclosure:** Clients have the right to know when AI systems make or materially influence decisions about them. The firm's AI tool vendor contracts do not typically specify which sub-operations within the tool constitute automated decision-making versus AI assistance. The firm cannot clearly delineate which AI operations constitute Art. 12 automated decisions versus background processing. The consent and disclosure record the firm needs to maintain is therefore unclear — because the AI processing it needs to disclose is not fully mapped.

- **Art. 21 — Right to Explanation:** Clients have the right to request explanations of automated decisions. The explanation deficit at point of delivery (C219 Finding 5 / this phase Failure Mode 5) means the firm cannot reliably generate client-ready explanations of AI-generated signals from its current AI tool configuration. If a client makes a formal Art. 21 request, the firm's ability to respond depends partly on whether the AI tool provides the granular reasoning data the explanation requires — and at many boutique firms, it does not.

- **Art. 22 — Human Review:** Clients have the right to request human review of automated decisions. The firm's human review process — the senior advisor reviewing AI output — is compromised by the joint inattention problem (C219 Finding 1). The human review the firm provides may not constitute the substantive human review that Art. 22 requires if the reviewer cannot detect the errors their review is supposed to catch.

**ASIP — Pension Fund Mandates and Supervisory Standard:**

Geneva wealth managers managing occupational pension fund mandates face ASIP governance requirements that intersect with the undefined supervisory standard problem. ASIP implementation guidance (Q2 2026) requires documented decision trails for AI-assisted investment decisions. But ASIP does not define what the human review of an AI-assisted pension fund investment decision must constitute. The pension fund context makes this more acute: pension fund beneficiaries are a vulnerable class under Swiss law, and the standard of care for decisions affecting pension fund assets is higher than for standard private client work. The senior advisor who approves an AI-assisted pension fund allocation without a defined supervisory standard is carrying undefined personal liability in a context where the regulatory expectation is elevated.

**SFAMA — Fund Management and Explanation Capability:**

SFAMA guidelines on AI in fund management require documented model governance and AI model validation. The explanation deficit at point of delivery (C219 Finding 5) creates a specific SFAMA-facing exposure: when a fund investor or the SFAMA asks the fund manager to explain an AI-assisted investment decision, the manager must be able to provide the explanation. If the AI tool does not generate granular reasoning data, or if the advisor has not developed the prompting technique to extract it, the explanation is not available. SFAMA's AI model validation expectations include explanation capability as a governance requirement — not just documentation of the AI's conclusion, but the ability to generate the reasoning on demand.

**ISSB-aligned Disclosure — Data Quality and AI Output:**

Federal Council endorsed ISSB-aligned disclosure standards in March 2026. FY2026 Swiss annual reports due mid-2027 require AI-enabled data collection for sustainability disclosures. The joint inattention problem and quality calibration problem (C218 Finding 1) intersect with ISSB disclosure obligations: if the firm's AI-enabled data collection infrastructure produces sustainability data that contains errors the review process does not detect, the ISSB-aligned disclosure contains those errors. The AI quality problem is not limited to portfolio analysis — it extends to the sustainability data collection infrastructure that the firm is required to build for mid-2027 disclosures.

**What this means in practice:**
The boutique Geneva wealth manager faces a cluster of problems that the prior phases' documentation and accountability frameworks did not fully map: the absence of a defined supervisory standard creates undefined personal liability; the joint inattention structure makes the firm's review process less reliable than it appears; the client data lineage gap means the firm cannot clearly map which of its AI operations require nFADP disclosure; the explanation deficit means the firm cannot reliably satisfy Art. 21 explanation requests; the reputational positioning paradox means the firm's public AI communication creates liability exposure it cannot fully manage; and the aggregation blindness means the portfolio-level risk picture is not being generated from the individual AI signals the firm already has. These problems are distinct from the documentation debt, accountability gap, and vendor sustainability problems of prior phases — they are problems of supervisory design, not documentation quantity.

---

## 05 — Lead Magnet Draft

### In Sergio's Voice — EN + FR

---

### English Version

**Title:** The AI Supervisory Design Review: A Geneva Framework for Boutique Wealth Managers Who Have AI in Production and Need to Know Whether Their Review Process Actually Works

**Opening:**
You run a boutique Geneva wealth management firm. You have AI tools in production — portfolio analysis, client reporting, compliance documentation. You reviewed the output, you approved it, you sent it. That was the process.

The question that is starting to surface — not as a theoretical concern, but as something you have encountered in practice — is whether the review process you have is actually catching the errors it should catch. Not whether the AI is accurate in general. Whether your specific process, with your specific team, reviewing AI output in the way your firm currently reviews it, is producing the quality control it appears to produce.

This is a different question from whether the AI is reliable. It is a question about your workflow.

This assessment is designed to examine that question directly.

**What this assessment covers:**

1. **The human-AI interaction design review.** A structured examination of the specific workflow points where your team reviews AI output — identifying where the interaction between human review and AI confidence creates joint inattention risk, and redesigning those workflow points so that human review constitutes genuine scrutiny rather than approval of confident output. You receive a redesigned review workflow with specific checkpoints where your team engages with AI output uncertainty rather than conclusions.

2. **The AI supervisory standard definition.** A structured process for defining, for your specific AI tool set and client profile, what sufficient human review of AI-assisted recommendations means — in concrete terms, documented in writing, and specific enough that you could present it to FINMA if asked. You receive a defined supervisory standard document and a review protocol that operationalizes it for each AI tool in your production workflow.

3. **The client data lineage register.** A practical methodology for mapping which AI operations each client's data passes through in your current tool set, which of those operations constitute automated decision-making under nFADP Art. 12, and what client consent record you need to maintain. You receive a client AI data lineage register template and a consent gap analysis for each AI tool currently in production.

4. **The AI explanation capability audit.** An operational audit of whether you can generate client-ready explanations of AI-generated signals at the precision level a sophisticated Geneva wealth management client expects — for each AI tool in your production workflow. You receive an explanation gap analysis per tool, with specific recommendations for closing the gap through prompting, tool configuration, or process redesign.

5. **The portfolio-level AI signal aggregation protocol.** A practical methodology for aggregating the individual AI risk flags, classification signals, and attention alerts your tools generate into a portfolio-level risk picture your current individual-signal review process does not surface. You receive a portfolio aggregation review template and a process design for generating the aggregate picture on a periodic basis.

6. **The AI reputational positioning framework.** A structured approach to developing your firm's AI communication strategy — calibrated to different client segments, different market contexts, and different risk profiles — without creating documented public positions that become liability evidence if an AI-assisted error occurs. You receive a client segment communication matrix and a reputational risk framework for AI public statements.

**Who this is for:**
Managing directors and senior advisors at Geneva-based boutique wealth management firms (50–200 employees) who have AI tools in active production and are beginning to encounter the structural problems that embedded AI use creates — specifically the questions about whether their review process is actually working, what their supervisory responsibility requires, how to explain AI signals to clients, and how to manage the reputational complexity of AI communication.

**What you receive:**
A structured assessment covering all six areas above, with Geneva-specific regulatory context (FINMA Circ. 2018/3, FINMA AI Model Risk Classification Q4 2026, AI Advisory Suitability Q1 2027, ASIP, SFAMA, nFADP Art. 12/21/22). A redesigned human-AI review workflow. A defined and documented supervisory standard. A client AI data lineage register template. An explanation gap analysis per AI tool. A portfolio aggregation review template. A reputational positioning framework. A 90-minute consultation to review your specific situation.

CHF 3,200 — full assessment framework and 90-minute consultation.
Available in English and French.

---

### French Version

**Titre :** L'audit de conception de la supervision IA : un cadre genevois pour les gérants de fortune de taille moyenne qui utilisent l'IA en production et doivent savoir si leur processus de révision fonctionne réellement

**Ouverture :**
Vous dirigez une société de gestion de fortune genevoise de taille moyenne. Vous avez des outils d'IA en production — analyse de portefeuille, rapports clients, documentation de conformité. Vous avez examiné la sortie, vous l'avez approuvée, vous l'avez envoyée. C'était le processus.

La question qui commence à émerger — non pas comme préoccupation théorique, mais comme quelque chose que vous avez rencontré dans la pratique — est de savoir si le processus de révision que vous avez réellement détecte les erreurs qu'il devrait détecter. Non pas si l'IA est fiable en général. Mais si votre processus spécifique, avec votre équipe spécifique, examinant les sorties d'IA de la façon dont votre cabinet les examine actuellement, produit le contrôle qualité qu'il semble produire.

C'est une question différente de la fiabilité de l'IA. C'est une question sur votre flux de travail.

Cette évaluation est conçue pour examiner cette question directement.

**Ce que cette évaluation couvre :**

1. **L'audit de conception de l'interaction humain-IA.** Un examen structuré des points de flux de travail spécifiques où votre équipe examine les sorties d'IA — identifiant où l'interaction entre la révision humaine et la confiance de l'IA crée un risque d'inattention partagée, et reconcevant ces points de flux de travail pour que la révision humaine constitue un examen véritable plutôt qu'une approbation de sortie confiante. Vous recevez un flux de travail de révision reconçu avec des points de contrôle spécifiques où votre équipe s'engage avec l'incertitude des sorties d'IA plutôt qu'avec les conclusions.

2. **La définition de la norme de supervision IA.** Un processus structuré pour définir, pour votre ensemble spécifique d'outils d'IA et votre profil de clients, ce que constitue une révision humaine suffisante des recommandations assistées par IA — en termes concrets, documentés par écrit, et suffisamment spécifiques pour que vous puissiez les présenter à la FINMA si demandé. Vous recevez un document de norme de supervision défini et un protocole de révision qui l'opérationnalise pour chaque outil d'IA dans votre flux de travail de production.

3. **Le registre de traçabilité des données clients IA.** Une méthodologie pratique pour cartographier quelles opérations d'IA les données de chaque client traversent dans votre ensemble d'outils actuel, lesquelles de ces opérations constituent une prise de décision automatisée au sens de l'art. 12 nFADP, et quel enregistrement de consentement client vous devez maintenir. Vous recevez un modèle de registre de traçabilité des données clients IA et une analyse des lacunes de consentement pour chaque outil d'IA actuellement en production.

4. **L'audit de capacité d'explication IA.** Un audit opérationnel de votre capacité à générer des explications prêtes pour le client des signaux générés par l'IA au niveau de précision qu'un client de gestion de fortune genevoise sophistiqué attend — pour chaque outil d'IA dans votre flux de travail de production. Vous recevez une analyse des lacunes d'explication par outil, avec des recommandations spécifiques pour combler le fossé par la formulation de prompts, la configuration des outils ou la reconception des processus.

5. **Le protocole d'agrégation des signaux d'IA au niveau du portefeuille.** Une méthodologie pratique pour agréger les signaux de risque individuels, les classifications et les alertes d'attention générés par vos outils en une image de risque au niveau du portefeuille que votre processus actuel de révision des signaux individuels ne fait pas émerger. Vous recevez un modèle de révision de l'agrégation du portefeuille et une conception de processus pour générer l'image agrégée sur une base périodique.

6. **Le cadre de positionnement réputationnel IA.** Une approche structurée pour développer la stratégie de communication IA de votre cabinet — calibrée pour différents segments de clients, différents contextes de marché et différents profils de risque — sans créer de positions publiques documentées qui deviennent des preuves de responsabilité si une erreur assistée par IA se produit. Vous recevez une matrice de communication par segment client et un cadre de risque réputationnel pour les déclarations publiques sur l'IA.

**Pour qui c'est :**
Directeurs généraux et conseillers seniors dans les sociétés de gestion de fortune genevois basées à Genève (50–200 employés) qui ont des outils d'IA en production active et qui commencent à rencontrer les problèmes structurels que l'utilisation intégrée de l'IA crée — spécifiquement les questions sur la question de savoir si leur processus de révision fonctionne réellement, ce que leur responsabilité de supervision exige, comment expliquer les signaux d'IA aux clients, et comment gérer la complexité réputationnelle de la communication sur l'IA.

**Ce que vous recevez :**
Une évaluation structurée couvrant les six domaines ci-dessus, avec le contexte réglementaire genevois spécifique (FINMA Circ. 2018/3, Classification des risques des modèles d'IA FINMA T4 2026, Adéquation des conseils IA T1
**Ce que vous recevez :**
Une évaluation structurée couvrant les six domaines ci-dessus, avec le contexte réglementaire genevois spécifique (FINMA Circ. 2018/3, Classification des risques des modèles d'IA FINMA T4 2026, Adéquation des conseils IA T1 2027, ASIP, SFAMA, nFADP Art. 12/21/22). Un flux de travail de révision humain-IA reconçu. Une norme de supervision définie et documentée. Un modèle de registre de traçabilité des données clients IA. Une analyse des lacunes d'explication par outil d'IA. Un modèle de révision de l'agrégation du portefeuille. Un cadre de positionnement réputationnel. Une consultation de 90 minutes pour examiner votre situation spécifique.

CHF 3 200 — cadre d'évaluation complet et consultation de 90 minutes.
Disponible en anglais et en français.

---

## 06 — Findings Summary

### 6 Net-New Findings — Distinct from C214 Phase 02, C215 Phase 02, C216 Phase 02, C217 Phase 02, and C218 Phase 02

**Finding 1 — The human-AI joint inattention trap is a structurally distinct failure mode that makes error detection less likely, not more**
Boutique Geneva wealth managers have encountered a failure mode that is not about AI accuracy in isolation, not about documentation completeness, and not about accountability definition. It is about the specific cognitive dynamic that AI confident output creates in human reviewers: the more confident the AI output, the less the human reviewer scrutinizes it. The human assumes the AI checked; the AI does not flag uncertainty because it was not designed to; both parties' assumptions are satisfied by output that is wrong. This is structurally distinct from the quality calibration problem (C218 Finding 1), which concerned the firm's inability to detect AI errors through a calibrated review methodology. The joint inattention problem is about why the review process that exists — the one the firm believes is working — may be structurally compromised precisely at the points where it most needs to work. A firm with a quality calibration checklist still has a joint inattention problem if the checklist is applied to AI output that has already been pre-screened by the reviewer's assumption that confident output has been checked.

*(Distinct from C218 Finding 1: C218 identified the quality calibration experiential problem — the firm has encountered inaccurate AI output and lacks a calibrated review methodology. C219 Finding 1 identifies a structurally distinct problem: the cognitive dynamic between human reviewers and AI confidence makes the review process less reliable than it appears, regardless of whether a quality calibration methodology exists. Different problem, different mechanism, different intervention required.)*

**Finding 2 — The client data lineage gap creates a nFADP Art. 12 exposure that general compliance frameworks cannot resolve without operational-level AI processing maps**
Boutique Geneva wealth management firms cannot clearly delineate, for each client, which AI operations that client's data passes through, which constitute automated decision-making under nFADP Art. 12, and what consent record is required. This is not a general data protection compliance problem — it is a specific operational gap: the firm's AI tools were adopted without mapping the specific processing operations per client data type, and the AI tool vendors do not typically provide this level of operational transparency. The compliance implication is that the firm cannot confidently determine which of its AI uses require nFADP disclosure for each client — because it cannot fully map the AI processing that each client's data undergoes. The general nFADP compliance documentation the firm has prepared may not cover the specific operational AI processing per client that Art. 12 requires disclosure of.

*(Distinct from C217 Finding 2: C217 identified training data provenance liability — where the AI learned from and whether that creates exposure. C218 Finding 3 identified vendor sustainability at individual firm level. None addressed the specific problem of client data lineage through the firm's own AI operations — what processing each client's data actually undergoes in the firm's AI tool set, and what Art. 12 disclosure and consent record that requires.)*

**Finding 3 — The AI reputational positioning paradox creates an unresolvable tension that no Geneva advisory service currently addresses**
Boutique Geneva wealth managers face an active tension between communicating AI capability to clients and prospects (a market positioning signal) and avoiding documented public positions on AI that could become liability evidence if an AI-assisted error occurs. The paradox is that any public statement about AI use creates a record; if an error occurs, that record is available to question whether the firm was using AI responsibly. Silence avoids the trap but cedes positioning ground. No Geneva advisory service currently offers a reputational positioning framework that addresses this specific paradox — the tension between AI as credibility signal and AI as liability exposure — at boutique wealth management firm scale. The managing director is making these decisions informally, without a framework, in a context where the stakes are real and the precedent community is silent.

*(Distinct from C215 Finding 3: C215 identified client-initiated AI questions as the trigger for disclosure preparation. C218 Finding 5 identified client preference divergence as a relationship management problem between clients who want AI transparency and clients who do not. C219 Finding 3 identifies a different problem: the firm's own public positioning decision — not what individual clients want to know, but what the firm chooses to say publicly about its AI use, and the liability exposure that any public statement creates.)*

**Finding 4 — The undefined supervisory standard for AI creates personal liability exposure that the senior advisor cannot manage because no written standard exists**
The senior advisor at a boutique Geneva wealth management firm understands that personal professional liability attaches to AI-assisted decisions they approve. They do not understand what a reasonable supervisory standard for AI-assisted decisions requires of them, because FINMA has not published explicit guidance on this question, and no Geneva industry body has defined it. The firm's internal practice has been developed ad hoc. The senior advisor is carrying undefined personal liability for a standard that does not exist in written form — and cannot manage that liability defensively because there is no documented standard to point to. This is distinct from the accountability gap (C214 Finding 1): that problem concerned the firm's accountability structure — who is responsible for what in the AI workflow. This problem concerns what the content of the senior advisor's supervisory responsibility actually is, operationally, and how to document it.

*(Distinct from C214 Finding 1: C214 identified accountability gap as the central concern — the firm did not know who was responsible for AI output. C215 Finding 2 identified cognitive offshoring — the advisor had begun relying on AI as a cognitive substitute without a framework. C216 Finding 3 identified reasonable advisor standard destabilization in both directions. C218 Finding 1 identified quality calibration experiential problem. None identified the specific problem that even after accountability is assigned, the content of the senior advisor's supervisory obligation for AI-assisted decisions is undefined — not by the firm, not by FINMA, not by the industry — leaving the senior advisor with personal liability they cannot define or manage.)*

**Finding 5 — The explanation deficit at point of delivery creates a client relationship problem that is distinct from the nFADP Art. 21 explanation right**
Boutique Geneva wealth managers cannot generate client-ready explanations of AI-generated signals at the precision level a sophisticated Geneva wealth management client expects. This is not the nFADP Art. 21 explanation obligation (which is a formal legal right that triggers a formal response process). It is the everyday professional problem: a client asks a direct question about an AI flag in their portfolio, and the advisor who approved and sent the AI-generated analysis cannot explain the signal with the precision the client expects. The explanation deficit is partly a tool configuration problem (the AI tool does not generate granular reasoning data alongside classifications) and partly a prompting problem (the advisor has not developed the technique to extract the reasoning the tool does contain). It is distinct from the internal explanation barrier (C217 Finding 3) — that problem concerned the advisor's ability to explain AI decisions internally or to regulators. This problem concerns the advisor's ability to explain AI signals to clients in a way that maintains the professional credibility the client relationship depends on.

*(Distinct from C217 Finding 3: C217 identified the internal explanation barrier — the firm's inability to explain AI decisions to clients upon request under nFADP Art. 21, and to FINMA examiners. C219 Finding 5 identifies a different problem: the explanation deficit as a client relationship problem that surfaces in everyday professional interaction, before any formal nFADP request is made. The mechanism is different, the stakes are different (client relationship versus legal compliance), and the intervention required is different — tool configuration and prompting technique rather than formal explanation documentation.)*

**Finding 6 — The AI aggregation blindness means the firm is not seeing the portfolio-level risk picture that its own AI tools are generating**
Boutique Geneva wealth management firms receive AI-generated risk flags, classification signals, and attention alerts on individual portfolio positions. The firm's current review process evaluates each signal individually. The portfolio-level pattern that would emerge from multiple simultaneous or correlated individual flags — the collective risk that individually borderline flags aggregate into — does not surface in the firm's workflow. Neither the AI tool (optimized for individual signal detection) nor the human reviewer (reviewing individual signals) is systematically generating the aggregate picture. The practical consequence: the firm may be managing a collective risk exposure that its current AI-human workflow is structurally incapable of seeing. This is distinct from the AI performance attribution contamination problem (C218 Finding 4), which concerned the reconstruction of AI versus human contribution to historical decisions. This problem concerns the firm's inability to see portfolio-level patterns in real-time AI signals — a different information deficit, with different consequences.

*(Distinct from C218 Finding 4: C218 identified attribution contamination — the firm's records do not distinguish AI-assisted from human-generated decisions, making retrospective reconstruction impossible. C219 Finding 6 identifies a different problem: the firm has individual AI signals available in real-time but lacks a process for aggregating them into a portfolio-level risk picture. Different data, different deficit, different intervention. The attribution problem is about historical records; the aggregation problem is about real-time signal processing.)*

---

## Phase Completion Record

**C219 Phase 02 — Geneva Finance**
- **Completed:** 2026-04-26 20:55 GMT+2 | **NET-NEW:** 6 findings across 6 deliverables
- **Mode:** Domain knowledge + Swiss institutional sources
- **Distinct from C214 Phase 02:** Fresh angles — human-AI joint inattention structural trap, client data lineage operational gap, AI reputational positioning paradox, undefined supervisory standard as personal liability, explanation deficit at client delivery point, AI aggregation blindness as real-time information deficit
- **Distinct from C215 Phase 02:** All six findings distinct — C215 focused on tool proliferation, cognitive offshoring, client-initiated disclosure, vendor concentration, classification uncertainty, documentation debt compounding. C219 focuses on human-AI interaction design, data lineage, reputational positioning, supervisory standard definition, explanation capability, and signal aggregation — entirely different angles.
- **Distinct from C216 Phase 02:** All six findings distinct — C216 focused on delegation chain mapping, model update opacity, reasonable advisor standard destabilization, nFADP Art. 21 explanation workflow, cross-border data residency conflicts, AI output version control. C219 focuses on human-AI interaction design, data lineage, reputational positioning, supervisory standard definition, explanation capability, and signal aggregation — entirely different angles.
- **Distinct from C217 Phase 02:** All six findings distinct — C217 focused on documentation deficit acknowledged, training data provenance, internal explanation barrier, nFADP present-tense exposure, classification anxiety paralysis, bi-modal compliance posture. C219 focuses on human-AI interaction design, data lineage, reputational positioning, supervisory standard definition, explanation capability, and signal aggregation — entirely different angles.
- **Distinct from C218 Phase 02:** All six findings distinct — C218 focused on AI quality calibration experiential problem, compliance false confidence detection, vendor sustainability at individual firm level, attribution contamination retrospective reconstruction, client preference divergence relationship management, AI business continuity resilience gap. C219 focuses on human-AI interaction design, data lineage, reputational positioning, supervisory standard definition, explanation capability, and signal aggregation — entirely different angles.
- **Output file:** `20260426_phase02_geneva_finance_cycle219.md`
- **Status:** Phase 02 COMPLETE — advancing to Phase 03
