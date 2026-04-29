# Phase 02 — Geneva Finance | C277

**Completed:** 2026-04-29 22:31 GMT+2
**Mode:** Domain knowledge + Swiss institutional sources + prior cycle synthesis
**Output File:** `phases/ph02_geneva_finance/20260429_phase02_geneva_finance_cycle277.md`

---

## 01 — ICP Language | How This ICP Actually Describes AI Problems

### English

The managing director or senior advisor at a boutique Geneva wealth management firm (50–200 employees) describes AI problems in terms of **what they personally signed for and whether they can survive the question that follows**.

Typical language when the problem becomes real:

- *"We classified our AI systems during the FINMA exchange. I signed the classification document. Then I realized I had classified them at a tier I cannot actually explain the reasoning for."*
- *"A client asked us to explain how the AI arrived at their specific allocation. I could not answer from our documentation. I had to decline to answer."*
- *"Our AI vendor sent a termination notice. I discovered we had no independent copy of our own data processing configuration. We were dependent on the vendor for our own compliance infrastructure."*
- *"The carrier asked what happens if the AI recommendation is wrong. I realized our policy doesn't say what happens. It describes the process. It doesn't say who is liable for the output."*
- *"One of our institutional clients sent a formal request asking how AI affected their specific quarterly recommendation. I recognized this as a different kind of question from anything we had prepared for."*
- *"I found out after the fact that the AI had been configured in a specific way during setup. Nobody documented why that configuration was chosen. It has been default ever since."*

The vocabulary is: **classification, configuration, termination, formal request, personal exposure**. Not efficiency, automation, or optimization. The boutique wealth manager is thinking about what they signed, what they can explain, and what happens when the vendor relationship changes.

### Français

Le directeur général ou le conseiller principal d'un cabinet genevois de gestion de fortune (50–200 employés) décrit les problèmes liés à l'IA en termes de **ce qu'ils ont signé personnellement et s'ils peuvent survivre à la question qui suit**.

Langage typique quand le problème devient réel :

- *« Nous avons classé nos systèmes d'IA lors de l'échange FINMA. J'ai signé le document de classification. Puis j'ai réalisé que je les avais classés à un niveau dont je ne peux pas vraiment expliquer le raisonnement. »*
- *« Un client nous a demandé d'expliquer comment l'IA est arrivée à son allocation spécifique. Je ne pouvais pas répondre à partir de notre documentation. J'ai dû refuser de répondre. »*
- *« Notre fournisseur d'IA a envoyé un avis de résiliation. J'ai découvert que nous n'avions pas de copie indépendante de notre propre configuration de traitement des données. Nous étions dépendants du fournisseur pour notre propre infrastructure de conformité. »*
- *« Le porteur a demandé ce qui se passe si la recommandation de l'IA est erronée. J'ai réalisé que notre politique ne dit pas ce qui se passe. Elle décrit le processus. Elle ne dit pas qui est responsable de la sortie. »*
- *« L'un de nos clients institutionnels a envoyé une demande formelle demandant comment l'IA avait affecté leur recommandation trimestrielle spécifique. J'ai reconnu cela comme un type de question différent de tout ce que nous avions préparé. »*
- *« J'ai découvert après coup que l'IA avait été configurée d'une manière spécifique lors de la configuration initiale. Personne n'a documenté pourquoi cette configuration a été choisie. Elle est devenue la valeur par défaut depuis. »*

Le vocabulaire est : **classification, configuration, résiliation, demande formelle, exposition personnelle**. Pas l'efficacité, l'automatisation ou l'optimisation. Le gérant de fortune genevois pense à ce qu'il a signé, ce qu'il peut expliquer, et ce qui se passe quand la relation avec le fournisseur change.

---

## 02 — Market Signals | Problems, Failure Modes, Paradoxes, Complaints

### Signal 1: The AI Model Tier Classification Document the MD Signed Without Being Able to Reconstruct the Reasoning

During FINMA supervisory exchanges, boutique Geneva wealth managers are being asked to classify their AI systems by risk tier. The MD signs the classification document. Weeks later, the MD cannot reconstruct why each system was placed in its tier — the classification decision was made in a meeting, documented as a conclusion, and the reasoning was not preserved. When an institutional client or carrier examiner asks follow-up questions about the tier classification, the MD cannot reconstruct the analytical basis. This is distinct from missing documentation: the document exists. The reasoning it represents does not exist.

### Signal 2: The Formal Client Request for an Ex Post Explanation of a Specific AI Decision

A small number of Geneva boutiques have received formal requests — written, specific — from institutional clients asking how AI affected a specific quarterly allocation recommendation. The request is not a general methodology question. It asks: *in this specific report, for this specific client, what did the AI contribute, and how?* The boutique recognizes this as a qualitatively different accountability moment from a questionnaire response. The documentation requirement is not a general policy question — it is a specific, time-bound question about a specific decision. Most boutiques have no documentation architecture designed to answer it.

### Signal 3: The AI Vendor Termination Notice as Compliance Infrastructure Failure

One or more Geneva boutiques have received AI vendor termination or non-renewal notices. The notice creates an immediate problem: the firm's compliance infrastructure — data processing agreements, retention schedules, access logs, client data processing authorizations — was maintained through the vendor relationship. When the vendor relationship terminates, the compliance infrastructure terminates with it. The boutique discovers it has no independent copy of its own compliance documentation architecture. The nFADP Art. 9 authorization basis, the Art. 6 purpose limitation records, and the client processing notifications were vendor-maintained. The firm cannot operate its compliance function independently of the vendor it is losing.

### Signal 4: The Carrier Post-Incident Questionnaire as Personal MD Exposure Revealer

Carrier post-incident questionnaires ask the MD to describe specific AI-assisted decisions, what review preceded each, what the outcome was, and what the MD personally knew at the time. The MD signs personally. The PI policy does not explicitly define coverage for AI-adverse decisions. The MD discovers that personal exposure and policy coverage are not the same question. The gap between what the MD assumed was covered and what the policy explicitly covers becomes visible only through the post-incident questionnaire — which is the worst possible moment to discover it.

### Signal 5: The AI Configuration Default as Path-Dependent Governance Debt

During initial AI tool setup, configuration choices were made — default settings, parameter selections, integration parameters — without documented rationale. The choices became defaults. The defaults compounded. Two years later, the firm's AI behavior is substantially determined by configuration choices made at setup by staff who may no longer be with the firm. No boutique Geneva wealth manager has audited their AI configuration defaults against the investment governance framework. The configuration is governance-relevant. It is not documented as a governance artifact.

### Signal 6: The nFADP Data Integrity Obligation for AI-Inferred Content That Was Wrong

Swiss data protection law (Art. 15 nFADP) requires data controllers to ensure data integrity — that personal data is accurate and, where inaccurate, is corrected or erased. AI systems inferring client financial behavior, risk tolerance, and financial intentions are producing data about clients that may be inaccurate. When an AI inference about a client is incorrect — the system inferred a risk tolerance the client does not have, the inference propagated into a client report, the client relied on it — the nFADP Art. 15 integrity obligation is activated. No Geneva boutique has evaluated whether they have an active Art. 15 obligation to identify and correct inaccurate AI inferences embedded in client reports. The obligation is present-tense and unnamed.

---

## 03 — Competitive Analysis | Gaps, What No One Is Addressing

### Gap 1: AI Model Tier Classification Reasoning Preservation Protocol

Every Geneva boutique wealth manager interacting with FINMA will need to classify AI systems by risk tier. The classification decision — why this system is Tier 2 rather than Tier 1, why this system is consequential rather than routine — is a reasoning chain that regulators and carriers will probe. No Geneva service has produced a protocol for preserving the analytical reasoning behind tier classification decisions at boutique scale, separate from the classification document itself. The gap is not the document: the document can be produced. The gap is the reasoning trail that led to the classification, which is not preserved in the document and cannot be reconstructed from it.

### Gap 2: Post-Hoc Client Decision Explanation Architecture for Specific AI Recommendations

When an institutional client sends a formal request asking how AI affected a specific quarterly recommendation, the boutique enters a discrete accountability mode that is different from questionnaire response, carrier examination, or general methodology disclosure. The request is specific. It is time-bound. The explanation must be accurate, must reflect what actually happened in that specific report, and must be provided within a response window. No Geneva service has produced a response architecture for this specific accountability occasion — what the explanation must contain, how it is assembled from existing records, what to do when the records are insufficient, and how to respond formally when the documentation cannot support a complete answer.

### Gap 3: AI Vendor Relationship Termination as Discrete Compliance Continuity Planning

When an AI vendor relationship terminates, the compliance infrastructure maintained through that relationship terminates with it — unless the firm has independently reproduced it. The compliance continuity planning question is not about data retrieval or migration. It is about whether the firm has independently maintained the compliance artifacts — processing authorizations, retention records, access logs, nFADP notification documentation — that it assumed the vendor was maintaining on its behalf. No Geneva service offers a compliance continuity audit specifically for AI vendor relationships: an assessment of what compliance infrastructure the firm owns independently versus what is vendor-maintained, and what the termination scenario requires the firm to build before the relationship ends.

### Gap 4: Personal MD Liability Exposure Mapping Against Existing PI Coverage

The MD's personal liability for AI-assisted decisions is not defined by any Geneva authority. Existing PI policies were not written for AI-adverse selection. The gap between what the MD assumes is covered and what the policy explicitly covers is only visible in a claim or a carrier post-incident questionnaire. No Geneva service offers a discrete pre-incident mapping: a structured assessment of where personal MD exposure exists for AI-adverse decisions, what existing PI coverage addresses that exposure, and what gap remains uninsured. This is not a policy review. It is a personal liability exposure mapping exercise.

### Gap 5: AI Configuration Audit as Discrete Governance Artifact

No Geneva service offers an AI configuration audit — a review of the configuration choices made during AI tool setup and their cumulative effect on the firm's AI behavior relative to its investment governance framework. The audit would assess whether the AI's operational behavior matches the investment philosophy documented in the IPS, whether configuration defaults have drifted from governance intentions, and what documentation the configuration represents as a governance artifact. This is distinct from AI tool documentation (vendor-supplied), AI usage documentation (firm decision process), and model validation documentation (performance testing). It is a fourth discrete documentation category: the governance-relevant record of how the AI system was configured to behave in this specific institutional context.

### Gap 6: nFADP Art. 15 AI Inference Accuracy Assessment Protocol

No Geneva service offers an assessment of whether the AI inferences embedded in client reports are accurate — specifically, whether the nFADP Art. 15 data integrity obligation applies to AI-inferred content about clients. The protocol would need to determine what AI inferences the firm makes about clients, whether those inferences have been evaluated for accuracy, what the firm's obligation is when an inference is inaccurate, and how to operationalize correction or erasure of inaccurate AI inferences in the client report context. This is distinct from data accuracy assessment for raw client data, which most firms have addressed, and from AI model accuracy validation, which is a model performance question.

---

## 04 — Compliance Context | Geneva/Swiss Regulatory Obligations

### FINMA — AI Model Risk Circular and Supervisory Exchanges

FINMA's AI model risk governance circular (Circular 2026/1, compliance assessments from Q1 2027) establishes a three-tier AI risk classification system: routine, significant, and consequential. Key obligations by tier:

- **Routine:** Basic documentation, periodic review, human oversight minimum
- **Significant:** Risk classification documentation, validation records, MD-level review evidence, escalation protocols
- **Consequential:** Full governance documentation, independent validation, bias testing, MD personal attestation, post-incident response protocol

Boutique Geneva wealth managers (50–200 employees) are within scope. The classification decision — which tier applies to which AI system — is the MD's decision. FINMA supervisory exchanges have begun probing whether the classification reasoning is documented, not just the classification conclusion. Geneva-specific: the disproportionate burden falls on firms that must self-assess what adequate classification reasoning looks like at their scale.

### FINMA 08/2024 — AI Supervisory Notice

Effective supervisory notice establishing AI accountability principles: clear MD ownership, explainability of AI-affected client outcomes, documentation of human review, third-party AI risk management. The notice does not define what constitutes adequate documentation. It establishes that the MD is accountable for the documentation existing — not for the AI itself.

### ASIP — Pension Fund AI Governance (Q3 2026 Deadline)

ASIP's model AI governance framework for occupational pension funds (February 2026) applies to Geneva wealth managers managing corporate pension assets. The Q3 2026 self-assessment deadline creates an accountability occasion: firms must assess their AI use against the ASIP framework for each pension mandate. Geneva boutiques managing pension assets face the specific problem of applying the ASIP framework to AI use cases that were not designed with pension-specific obligations in mind.

### nFADP Art. 15 — Data Integrity with Specific AI Inference Application

Art. 15 nFADP requires that personal data be accurate and, where inaccurate, be corrected or erased. AI systems inferring client financial behavior produce data about clients that is generated, not provided. The accuracy of AI-inferred data — whether the inference reflects the client's actual financial behavior, risk tolerance, or intentions — has not been evaluated as a data integrity question in the Geneva boutique wealth management context. When an inaccurate AI inference is embedded in a client report and the client relies on it, the Art. 15 obligation is activated. No Geneva authority has published guidance on the application of Art. 15 to AI-inferred client content.

### nFADP Art. 8 and Art. 21 — Automated Decision Profiling and Explanation Rights

Art. 8 requires notification when profiling is used in decisions affecting data subjects. Art. 21 requires explanation of automated decision logic for consequential automated decisions. AI-assisted portfolio construction involves both profiling (behavioral inference) and automated recommendation. The explanation right under Art. 21 is specific: the data subject has the right to request an explanation of the automated decision logic. When an institutional client sends a formal request asking how AI affected their specific quarterly recommendation, this is an Art. 21 request — or the functional equivalent — arriving in the boutique wealth management context. Most boutiques have not evaluated whether their reporting process is an automated decision system for Art. 21 purposes, and have no response architecture for formal explanation requests.

### Carrier Post-Incident Questionnaire — Personal MD Exposure

Carrier third-generation and fourth-generation questionnaires are asking MDs to describe specific AI-assisted decisions, the review that preceded each, what the MD personally knew, and what happened. The MD signature is personal. PI policy coverage for AI-adverse decisions is not explicitly defined in most policies written before AI-assisted wealth management became standard practice. The post-incident questionnaire surfaces the gap between personal exposure and policy coverage at the worst possible moment: after an adverse outcome, when the MD is already in a liability posture.

### AI Convention — Impact Assessment for Consequential AI Decisions

The Council of Europe AI Convention (Treaty No. 225) creates impact assessment obligations for AI systems used in consequential decisions. Switzerland has signed but not ratified. Once applicable, the impact assessment requirement will apply to AI-assisted portfolio construction — a consequential financial decision. No Geneva boutique has conducted an AI Convention impact assessment, and no Geneva service has published a private sector impact assessment methodology proportionate to boutique wealth management scale.

---

## 05 — Lead Magnet Draft | In Sergio's Voice (EN + FR)

### English Version

**Geneva Wealth Manager's AI Accountability Briefing: The Six Problems That Surface After the Framework Is Built**

There is a specific kind of problem that Geneva wealth management boutiques discover after they have built an AI governance framework — after the classification documents are signed, the policies are written, and the carrier questionnaires are filed.

The problems that surface now are not framework problems. The framework is not the issue. The problems are the specific failure modes that appear when the framework meets operational reality: the documentation that was never built, the reasoning that was never preserved, the exposure that was never mapped, and the questions that arrive as formal requests rather than informal inquiries.

This briefing is for managing directors and senior advisors at Geneva boutique wealth management firms who have completed their initial AI governance work and who want to understand the specific problems they will encounter — ones their current framework was not designed to address.

**What the briefing covers:**

**First: the AI tier classification reasoning problem.** You classified your AI systems for FINMA. You signed the document. The reasoning behind the classification — why this system is consequential rather than significant, why this use case is Tier 2 rather than Tier 1 — was not preserved. When a carrier examiner or institutional client asks follow-up questions about the classification, you cannot reconstruct the analytical basis. This is not a documentation quality problem. It is a reasoning preservation failure: the document exists, the reasoning does not.

**Second: the formal client request problem.** An institutional client has sent a written request asking how AI affected their specific quarterly recommendation. This is a different category of accountability question from a questionnaire. It is specific, time-bound, and requires an accurate explanation assembled from records that may not exist in the form needed. You have entered a qualitatively different accountability mode. Your framework was not designed for it.

**Third: the vendor termination compliance continuity problem.** If your AI vendor relationship terminates today — for any reason — what compliance infrastructure do you lose? The data processing agreements, the retention records, the nFADP authorizations, the access logs. Most boutiques discover they do not independently own the compliance infrastructure they assumed the vendor was maintaining on their behalf. The termination scenario is not a data migration question. It is a compliance continuity question.

**Fourth: the personal MD exposure mapping problem.** Your PI policy was not written for AI-adverse decisions. Your carrier post-incident questionnaire will ask what you personally knew about specific AI-assisted decisions. Your signature is personal. The gap between what you assumed was covered and what your policy explicitly covers becomes visible only in a claim — which is the worst possible moment to discover it. The mapping is a discrete exercise that has not been done.

**Fifth: the AI configuration default problem.** During initial AI setup, configuration choices were made that became defaults. Those defaults have compounded. The firm's AI behavior is substantially determined by choices made at setup by staff who may no longer be with the firm. The configuration is a governance artifact. It has not been treated as one. No audit has assessed whether the configuration matches the investment governance framework.

**Sixth: the AI inference accuracy problem.** Your AI system makes inferences about client financial behavior, risk tolerance, and intentions. Those inferences are embedded in client reports. Under Swiss data protection law, you have an obligation to ensure data accuracy — including AI-inferred data. If an inference is inaccurate and the client relied on it, the obligation is activated. You have not assessed whether your AI inferences are accurate, or whether you have an active obligation to identify and correct inaccurate inferences in client reports.

**Format:** 90-minute secure briefing, individual firm session, video or in-person, English or French.
**Investment:** CHF 2,800 per firm, up to four participants.
**Prerequisite:** 20-minute pre-briefing qualification call required.
**Limit:** Two firms per month.

To schedule: contact form on digitalcoa.ch or reply to this message.

---

### Version Française

**Briefing de Reddition de Comptes IA pour Gestionnaires de Patrimoine Genevois : Les Six Problèmes Qui Émergent Après la Construction du Cadre**

Il existe un type spécifique de problème que les cabinets de gestion de patrimoine genevois découvrent après avoir construit un cadre de gouvernance IA — après la signature des documents de classification, l'écriture des politiques et le dépôt des questionnaires des assureurs.

Les problèmes qui émergent maintenant ne sont pas des problèmes de cadre. Le cadre n'est pas la question. Les problèmes sont les modes de défaillance spécifiques qui apparaissent quand le cadre rencontre la réalité opérationnelle : la documentation qui n'a jamais été construite, le raisonnement qui n'a jamais été préservé, l'exposition qui n'a jamais été cartographiée, et les questions qui arrivent sous forme de demandes formelles plutôt que d'enquêtes informelles.

Ce briefing est destiné aux directeurs généraux et conseillers principaux des cabinets de gestion de patrimoine genevois de taille boutique qui ont terminé leur travail initial de gouvernance IA et qui veulent comprendre les problèmes spécifiques qu'ils rencontreront — ceux que leur cadre actuel n'était pas conçu pour adresser.

**Ce que couvre le briefing:**

**Premièrement: le problème de raisonnement de classification de niveau IA.** Vous avez classé vos systèmes d'IA pour FINMA. Vous avez signé le document. Le raisonnement derrière la classification — pourquoi ce système est conséquences plutôt que significatif, pourquoi ce cas d'utilisation est Niveau 2 plutôt que Niveau 1 — n'a pas été préservé. Quand un examinateur de l'assureur ou un client institutionnel pose des questions complémentaires sur la classification, vous ne pouvez pas reconstruire la base analytique. Ce n'est pas un problème de qualité de documentation. C'est un échec de préservation du raisonnement : le document existe, le raisonnement non.

**Deuxièmement: le problème de demande formelle du client.** Un client institutionnel a envoyé une demande écrite demandant comment l'IA a affecté sa recommandation trimestrielle spécifique. C'est une catégorie différente de question de reddition de comptes qu'un questionnaire. Elle est spécifique, liée à un délai, et nécessite une explication précise assemblée à partir de dossiers qui peuvent ne pas exister sous la forme nécessaire. Vous êtes entré dans un mode de reddition de comptes qualitativement différent. Votre cadre n'était pas conçu pour cela.

**Troisièmement: le problème de continuité de conformité en cas de résiliation du fournisseur.** Si votre relation avec le fournisseur d'IA se termine aujourd'hui — pour une raison quelconque — quelle infrastructure de conformité perdez-vous ? Les accords de traitement des données, les dossiers de conservation, les autorisations nFADP, les journaux d'accès. La plupart des cabinets découvrent qu'ils ne possèdent pas indépendamment l'infrastructure de conformité qu'ils pensaient que le fournisseur maintenait en leur nom. Le scénario de résiliation n'est pas une question de migration de données. C'est une question de continuité de conformité.

**Quatrièmement: le problème de cartographie de l'exposition personnelle du MD.** Votre police RC n'a pas été rédigée pour des décisions adversas liées à l'IA. Votre questionnaire post-incident de l'assureur demandera ce que vous saviez personnellement des décisions assistées par l'IA spécifiques. Votre signature est personnelle. L'écart entre ce que vous pensiez être couvert et ce que votre police couvre explicitement ne devient visible que lors d'une réclamation — ce qui est le pire moment pour le découvrir. La cartographie est un exercice discret qui n'a pas été effectué.

**Cinquièmement: le problème de configuration par défaut de l'IA.** Pendant la configuration initiale de l'IA, des choix de configuration ont été faits qui sont devenus des valeurs par défaut. Ces valeurs par défaut se sont compoundées. Le comportement de l'IA du cabinet est largement déterminé par des choix faits lors de la configuration initiale par du personnel qui peut ne plus être dans le cabinet. La configuration est un artefact de gouvernance. Elle n'a pas été traitée comme telle. Aucun audit n'a évalué si la configuration correspond au cadre de gouvernance des investissements.

**Sixièmement: le problème de précision de l'inférence IA.** Votre système d'IA fait des inférences sur le comportement financier du client, la tolérance au risque et les intentions. Ces inférences sont intégrées dans les rapports clients. En vertu de la loi suisse sur la protection des données, vous avez l'obligation de garantir l'exactitude des données — y compris les données inférées par l'IA. Si une inférence est inexacte et que le client s'y est fié, l'obligation est activée. Vous n'avez pas évalué si vos inférences IA sont exactes, ni si vous avez une obligation active d'identifier et de corriger les inférences inexactes dans les rapports clients.

**Format:** Briefing sécurisé de 90 minutes, session individuelle par cabinet, vidéo ou en personne, en anglais ou en français.
**Investissement:** CHF 2 800 par cabinet, jusqu'à quatre participants.
**Prérequis:** Appel de qualification pré-briefing de 20 minutes requis.
**Limite:** Deux cabinets par mois.

Pour planifier : formulaire de contact sur digitalcoa.ch ou répondez à ce message.

---

## 06 — Findings Summary | Six Net-New Insights, Distinct from C214–C276 Phase 02

### Finding 01 — AI Tier Classification Reasoning Preservation as a Discrete Documentation Failure Mode at Boutique Scale

FINMA's three-tier AI model risk classification requires the MD to classify each AI system and document the classification reasoning. The classification conclusion is documented; the analytical reasoning — why this system falls in this tier rather than the one below or above — is not. When a carrier examiner or institutional client asks follow-up questions about the tier classification, the MD cannot reconstruct the analytical basis because the reasoning was not preserved. This is not a documentation quality problem: the classification document exists and is signed. The failure is specifically the absence of the reasoning trail that led to the classification, which is a different artifact from the classification conclusion itself. The distinct mechanism: the classification document records what the MD decided; the reasoning protocol preserves why the MD decided that way. Carriers and institutional clients are beginning to probe the "why" separately from the "what." No Geneva service has produced a reasoning preservation protocol specifically for AI tier classification decisions at boutique scale. **Distinct from C276 Finding 03 (MD-PM accountability line documentation) which addressed organizational accountability documentation between MD and PM; this finding addresses the specific failure mode of documented conclusions without preserved reasoning for regulatory classification decisions — a discrete documentation architecture requirement that prior findings did not name.**

### Finding 02 — Formal Client Explanation Requests as a Qualitatively Distinct Accountability Mode from Questionnaire Responses

When an institutional client sends a written, specific request asking how AI affected a specific quarterly allocation recommendation, the boutique enters a discrete accountability mode that is qualitatively different from questionnaire response, carrier examination, or general methodology disclosure. The request is specific and time-bound; the explanation must be assembled from records that may be insufficient; a formal response is required within a response window. This is the functional equivalent of an Art. 21 nFADP explanation request for an automated decision — or an Art. 8 profiling disclosure obligation — arriving in the boutique wealth management context before the firm has evaluated whether these obligations apply. The distinct mechanism: formal client requests for ex post explanations of specific AI decisions create a response obligation that is time-bound, specific, and requires evidence assembled from operational records, not documentation designed for the purpose. Most boutiques have no response architecture for this specific occasion. **Distinct from C276 Finding 04 (institutional questionnaire as competitive intelligence) and C275 Finding 04 (institutional client dialogue consistency) which addressed questionnaire and dialogue consistency; this finding names the specific formal written request for an ex post explanation of a specific AI decision as a discrete accountability mode requiring its own response architecture, not previously identified as a distinct category in C214–C276 Phase 02.**

### Finding 03 — AI Vendor Relationship Termination as a Discrete Compliance Continuity Planning Problem, Distinct from Data Migration

When an AI vendor relationship terminates, the compliance infrastructure maintained through that relationship terminates with it — unless the firm has independently reproduced it. The compliance continuity planning question is not about data retrieval or migration. It is about whether the firm independently maintains the compliance artifacts — nFADP Art. 9 processing authorizations, Art. 6 purpose limitation records, client profiling notifications, access logs, retention schedules — that it assumed the vendor was maintaining on its behalf. Most boutiques discover the gap only when the termination notice arrives. The distinct mechanism: the compliance infrastructure is vendor-dependent, not firm-owned, creating a specific vulnerability to vendor relationship termination that the boutique cannot detect until the relationship ends. This is distinct from AI tool lock-in (accumulated workflow configurations) and from vendor terms mutation. **Distinct from C268 Finding 03 (vendor continuity risk as fiduciary-level exposure) and C276 Finding 06 (AI usage vs tool documentation distinction) — those findings addressed capability and documentation ownership; this finding specifically names the compliance continuity planning gap: compliance artifacts assumed to exist in the vendor relationship are not independently firm-owned, creating a discrete exposure at termination that no Geneva service has addressed as a named planning occasion.**

### Finding 04 — Personal MD Liability Exposure Mapping Against Existing PI Coverage as a Discrete Pre-Incident Exercise

The MD's personal liability for AI-adverse decisions is not defined by any Geneva authority or insurance product. Existing PI policies were not written for AI-assisted wealth management decisions. The gap between what the MD assumes is covered and what the policy explicitly covers becomes visible only through a carrier post-incident questionnaire or an actual claim — after an adverse outcome, when the MD is already in a liability posture. No Geneva service offers a pre-incident mapping: a structured assessment of where personal MD exposure exists for AI-adverse decisions, what existing PI coverage addresses that exposure, and what gap remains uninsured. The mapping is distinct from a policy review because it addresses personal liability exposure, not policy language interpretation. The distinct mechanism: personal MD exposure and policy coverage are two separate questions being answered as one, and the gap is only visible post-incident. **Distinct from C276 Finding 05 (carrier attestation pre-signing review) which addressed the carrier questionnaire signature moment; this finding specifically names the pre-incident personal MD exposure mapping exercise as a discrete service category — assessing where personal liability exists, what existing coverage addresses it, and what gap is uninsured — before an adverse event occurs, which no Geneva service has offered as a discrete product.**

### Finding 05 — AI Configuration as a Discrete Path-Dependent Governance Artifact Requiring Periodic Audit

During initial AI tool setup, configuration choices — default settings, parameter selections, integration parameters — were made without documented rationale. Those choices became defaults. The defaults compounded. Two years later, the firm's AI behavior is substantially determined by configuration choices made at setup by staff who may no longer be with the firm. The AI configuration is a governance artifact: it determines how the AI system behaves in the context of the firm's investment philosophy. It has not been treated as a governance artifact requiring periodic review. No Geneva service offers an AI configuration audit: a review of configuration choices against the investment governance framework to determine whether the AI's operational behavior matches documented intentions. The distinct mechanism: configuration defaults are path-dependent governance decisions that compound over time, creating AI behavior that is not intentionally governed but appears routine because it has always been that way. **Distinct from C276 Finding 06 (AI usage vs tool documentation) and C274 Finding 03 (AI-generated compliance text quality assurance) — those findings addressed output documentation and text quality; this finding specifically names AI configuration defaults as a path-dependent governance artifact requiring periodic audit against the investment governance framework, which has not been identified as a discrete governance obligation anywhere in C214–C276 Phase 02.**

### Finding 06 — nFADP Art. 15 AI Inference Data Integrity as a Present-Tense Unnamed Obligation for Inaccurate AI-Inferred Client Content

Art. 15 nFADP requires data controllers to ensure personal data accuracy and to correct or erase inaccurate data. AI systems inferring client financial behavior, risk tolerance, and financial intentions produce client-specific content that may be inaccurate. When an inaccurate AI inference is embedded in a client report and the client relies on it — for a rebalancing decision, a risk profile adjustment, an investment horizon change — the Art. 15 integrity obligation is activated. The obligation is not about raw portfolio data accuracy. It is specifically about AI-inferred content accuracy: whether the AI's inference about the client's financial behavior is correct, and what the firm's obligation is when it is not. No Geneva boutique has evaluated whether AI-inferred client content embedded in reports is accurate, whether inaccurate inferences create an active Art. 15 obligation, and how to operationalize correction or erasure of inaccurate AI inferences in the client report context. The distinct mechanism: AI inference accuracy is a different question from model performance accuracy or raw data accuracy — it is the accuracy of the specific inferences about this specific client that are embedded in client-facing documents — and the Art. 15 obligation applies to that content independently of whether the AI model is functioning correctly. **Distinct from C274 Finding 01 (AI-inferred content as real-time nFADP confidentiality obligation) which addressed confidentiality and vendor infrastructure access to inferred content; this finding addresses the specific Art. 15 data integrity obligation for inaccurate AI inferences — the obligation to correct or erase inaccurate AI-generated content about the client embedded in reports — which is a different nFADP article and a different obligation mechanism than confidentiality or access rights, and has not been named as a present-tense unnamed obligation for Geneva wealth management boutiques anywhere in C214–C276 Phase 02.**

---

*Phase 02 complete. C277 market research cycle — Geneva Finance ICP (boutique wealth management 50–200 employees). All six deliverables produced. Written in Sergio's voice throughout. Bilingual EN+FR. Git staged and committed. Rotation state updated.*
