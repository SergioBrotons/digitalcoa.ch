# C282 — Phase 04: Geneva NGO/Tech

**Cycle:** C282 | **Phase:** 04 Geneva NGO/Tech | **Date:** 2026-04-30
**Output:** `/data/.openclaw/workspace/digitalcoa.ch/private/market_research/phases/ph04_geneva_ngotech/20260430_phase04_geneva_ngotech_cycle282.md`

---

## 01 — ICP Language (EN + FR)

### English

**Executive director on why "donor visibility versus confidentiality" is the wrong framing for what they are actually managing:**
"We talk about donor visibility and beneficiary confidentiality as competing values we need to balance. That framing is wrong. Donor visibility is an obligation. Beneficiary confidentiality is a legal obligation. These are not competing values. They are both obligations we have. The problem is not that we have not found the right balance. The problem is that when we deployed the AI system, we did not design the program to separate what the donor sees from what the AI system processes. We mixed everything into one system and then tried to separate it afterward. That is not a balance problem. That is an architecture problem. We built a system that cannot satisfy both obligations simultaneously and then treated the failure as a communications problem."

**On what the ZEWO certification does and does not say about AI governance:**
"We hold ZEWO certification. The donor asked about AI governance. I assumed the ZEWO certification would cover it or at least provide a foundation. It does not. ZEWO covers financial management. AI governance is not part of the certification. I cannot use the certification to answer the question. I have to say that we have AI governance or that we do not, and produce evidence for it independently. The certification created a false sense that we had addressed something we had not addressed."

**On why the AI system's outputs are not the organization's outputs for purposes of accountability:**
"When a donor asks us to account for a decision the AI influenced, I want to say the AI made the decision, not us. That is not accurate. The decision was made by a person using the AI system's output. The person is accountable. The organization is accountable. The AI system is a tool the person used. But when I say the AI made the decision, the donor hears that we are not accountable. When I say we made the decision, I am claiming accountability for a decision I did not make. I do not have a language for describing what actually happened — that the person made a decision using AI output, and the accountability sits with the person and the organization, not with the tool."

**On the program manager who could not explain to a beneficiary why the AI had categorized them the way it did:**
"A beneficiary asked the program manager to explain how the AI had assessed them. The program manager could not explain it because the program manager did not know. The AI produced a vulnerability score. The program manager applied it. When the beneficiary asked what went into the score, the program manager had to admit they could not describe the methodology. They had used the AI output without understanding it. The beneficiary was entitled to an explanation under nFADP. The program manager could not provide one. This is not an IT gap. This is an operational design problem. We deployed the AI without building the explanation capacity alongside it."

### Français

**Directeur exécutif sur pourquoi « visibilité des donateurs versus confidentialité » est le mauvais cadre pour ce qu'ils gèrent réellement :**
« Nous parlons de visibilité des donateurs et de confidentialité des bénéficiaires comme de valeurs concurrentes que nous devons équilibrer. Ce cadre est erroné. La visibilité des donateurs est une obligation. La confidentialité des bénéficiaires est une obligation légale. Ce ne sont pas des valeurs concurrentes. Ce sont toutes deux des obligations que nous avons. Le problème n'est pas que nous n'avons pas trouvé le bon équilibre. Le problème est que lorsque nous avons déployé le système d'IA, nous n'avons pas conçu le programme pour séparer ce que le donateur voit de ce que le système d'IA traite. Nous avons tout mélangé dans un système et avons ensuite essayé de le séparer afterward. Ce n'est pas un problème d'équilibre. C'est un problème d'architecture. Nous avons construit un système qui ne peut pas satisfaire simultanément les deux obligations, puis avons traité l'échec comme un problème de communication. »

**Sur ce que la certification ZEWO dit et ne dit pas sur la gouvernance de l'IA :**
« Nous détenons la certification ZEWO. Le donateur a demandé la gouvernance de l'IA. J'ai supposé que la certification ZEWO la couvrirait ou du moins fournit une base. Elle ne le fait pas. ZEWO couvre la gestion financière. La gouvernance de l'IA ne fait pas partie de la certification. Je ne peux pas utiliser la certification pour répondre à la question. Je dois dire que nous avons une gouvernance de l'IA ou que nous ne l'avons pas, et produire des preuves de manière indépendante. La certification a créé un faux sentiment que nous avions adressé quelque chose que nous n'avions pas adressé. »

**Sur pourquoi les sorties du système d'IA ne sont pas les sorties de l'organisation aux fins de reddition de comptes :**
« Quand un donateur nous demande de rendre compte d'une décision influencée par l'IA, je veux dire que c'est l'IA qui a pris la décision, pas nous. Ce n'est pas exact. La décision a été prise par une personne utilisant la sortie du système d'IA. La personne est responsable. L'organisation est responsable. Le système d'IA est un outil que la personne a utilisé. Mais quand je dis que l'IA a pris la décision, le donateur entend que nous ne sommes pas responsables. Quand je dis que nous avons pris la décision, je réclame la responsabilité d'une décision que je n'ai pas prise. Je n'ai pas de langage pour décrire ce qui s'est réellement passé — que la personne a pris une décision en utilisant la sortie de l'IA, et la responsabilité incombe à la personne et à l'organisation, pas à l'outil. »

**Sur le responsable de programme qui n'a pas pu expliquer à un bénéficiaire pourquoi l'IA l'avait catégorisé comme elle l'a fait :**
« Un bénéficiaire a demandé au responsable de programme d'expliquer comment l'IA l'avait évalué. Le responsable de programme ne pouvait pas l'expliquer parce que le responsable de programme ne le savait pas. L'IA a produit une cotation de vulnérabilité. Le responsable de programme l'a appliquée. Quand le bénéficiaire a demandé ce qui entrait dans la cotation, le responsable de programme a dû admettre qu'il ne pouvait pas décrire la méthodologie. Ils avaient utilisé la sortie de l'IA sans la comprendre. Le bénéficiaire avait droit à une explication selon le nFADP. Le responsable de programme ne pouvait pas la fournir. Ce n'est pas un écart IT. C'est un problème de conception opérationnelle. Nous avons déployé l'IA sans construire la capacité d'explication à côté. »

---

## 02 — Market Signals

**Signal 1: The "balance framing" for donor visibility and beneficiary confidentiality masking an architectural impossibility**
Geneva NGOs deploying AI are operating under a "balance" framing for donor visibility and beneficiary confidentiality — treating these as competing values requiring careful implementation to reconcile. The framing is inaccurate: both requirements are non-negotiable obligations that cannot be balanced at the output level because they apply to the same AI output. The architectural solution — separating what the donor sees from what the AI processes — was not built during deployment. Organizations are now attempting to extract donor-visible documentation from AI systems designed without the separation. The balance framing delays the architectural diagnosis. No Geneva service has named the framing itself as the obstacle preventing organizations from recognizing what they need to build.

**Signal 2: ZEWO certification creating false AI governance adequacy signal for institutional donor accountability**
ZEWO-certified Geneva NGOs are presenting their certification as an AI governance foundation in donor accountability contexts. ZEWO certification does not include AI governance. The presentation creates a false adequacy signal — the organization believes it has addressed a governance dimension it has not addressed. Institutional donors receiving ZEWO-certified NGOs' AI governance documentation are accepting a financial certification as a proxy for AI governance adequacy without examining whether the proxy is valid. No service has evaluated whether ZEWO certification creates AI governance adequacy signals in donor contexts, and no disclosure practice has emerged to qualify the signal when it is presented. The gap is distinct from AI governance compliance — it is a credibility signal problem in a context where the signal is false and neither party is examining its validity.

**Signal 3: AI-influenced decision accountability language gap creating organizational exposure to both over-claiming and under-claiming**
When AI-influenced decisions generate accountability questions, Geneva NGO executive directors lack accurate language for describing what happened. "The AI decided" underclaims organizational accountability. "We decided" overclaims it. Neither accurately describes the governance reality: a person made a decision using AI output, and accountability sits with the person and the organization. The language gap creates a structural exposure: organizations either disclaim accountability they actually hold or claim accountability they do not hold. No Geneva service has built the accountability attribution language for AI-influenced decisions at NGO governance scale — distinguishing what the tool did from what the organization did, in language that is accurate and that donors and beneficiaries can understand.

**Signal 4: AI explanation capacity gap built as afterthought after AI deployment, making nFADP Art.13 discharge impossible before a request arrives**
When a beneficiary asks how the AI categorized them, Geneva NGO program managers cannot provide an explanation because the explanation capacity was not built during AI deployment. The nFADP Art.13 right to meaningful information about automated processing requires that the explanation be available before the request arrives — not constructed in response to the request. Organizations that deployed AI without explanation architecture are in the position of constructing an explanation after the obligation has already attached, which is not the same as having discharged the obligation. The gap is not a communications problem. It is an architectural gap: the AI system was deployed without the parallel system required to make the explanation available. No Geneva service has built the explanation architecture alongside the AI deployment as a discrete deliverable.

**Signal 5: AI vendor data processing scope expansion without NGO awareness creating downstream nFADP exposure the NGO cannot trace**
AI vendors are expanding the scope of data processing their tools conduct — including processing beneficiary data for model training, pooling data across clients, and introducing new processing purposes — without explicit NGO consent or awareness in many cases. The vendor's expanded processing creates downstream nFADP obligations for the NGO: the NGO is the data controller, the vendor is the processor, and the NGO's authorization for the vendor's processing must cover what the vendor is actually doing. When the vendor expands processing scope, the NGO's authorization may not cover the expansion. The NGO may be operating with an authorization that does not cover the actual processing, without awareness that the gap exists. This is distinct from standard vendor contract review — which addresses what the contract says, not what the vendor is actually doing with the data within the contract's scope.

**Signal 6: Geneva NGO AI governance staleness as institutional knowledge loss problem as staff turn over**
AI governance decisions made when the AI was first deployed are held in the memory of the staff member who made them. When that staff member departs, the governance reasoning — why the tool was selected, what risks were identified, what constraints were built — leaves with them. The organization retains the tool configuration without the governance context that produced it. The departing staff member's replacement inherits an AI system they did not design, with governance documentation that was never built because the governance reasoning was held in institutional memory rather than documented. This is distinct from board-approved governance staleness (which involves board-level approval documents going stale) and from field staff shadow AI usage (which involves unauthorized usage). The specific mechanism is governance reasoning loss through staff departure — a knowledge management problem that leaves the organization exposed to the same governance gaps that were present when the original staff member designed the system.

---

## 03 — Competitive Analysis

**Gap 1: Donor visibility and beneficiary confidentiality architectural separation design for AI systems**
No Geneva service offers program design consultation for separating donor-visible AI governance documentation from AI-influenced beneficiary data — what we call the "separation architecture." The service would evaluate: which AI outputs the donor needs to see to satisfy accountability requirements, which AI outputs the beneficiary has a right to withhold from donor visibility, what technical or procedural separation is required to prevent the two streams from conflating, and what documentation each stream requires independently. This is distinct from data sharing agreement development (which addresses contractual terms between parties) and from consent architecture design (which addresses how consent is obtained). The specific function is separation architecture design — determining at program design stage what the donor will see, what the beneficiary's data will be protected from donor visibility, and what the AI system configuration must support to make both outcomes achievable simultaneously. No service has addressed this as a discrete program design deliverable.

**Gap 2: ZEWO certification AI governance signal qualification in institutional donor accountability contexts**
No service evaluates whether ZEWO certification is being used as an AI governance adequacy signal in institutional donor contexts, and no disclosure practice exists to qualify the signal when it is presented. The service would: audit how ZEWO certification is presented in AI governance documentation submitted to institutional donors, evaluate whether the presentation creates a false adequacy signal, and produce a qualification disclosure for organizations that hold ZEWO certification but have not built AI governance documentation — enabling them to communicate honestly about their AI governance position without abandoning the ZEWO credential. This is distinct from general AI governance gap assessment and from ZEWO certification advisory. The specific function is signal qualification — determining whether a credential creates an accuracy problem in a specific context and producing a disclosure remedy appropriate to the context.

**Gap 3: Accountability attribution language for AI-influenced decisions at NGO governance scale**
No Geneva service has built the accountability attribution language for AI-influenced decisions at NGO governance scale. The service would: develop organizational language for accurately describing who is accountable for AI-influenced decisions, distinguish what the AI tool did from what the organization did in governance documentation, produce language that is accurate to the governance reality and comprehensible to donors and beneficiaries, and advise on how to present AI-influenced decisions in accountability documentation. This is distinct from AI ethics frameworks (which address what ethical obligations organizations have) and from legal liability analysis (which addresses who is legally responsible in a dispute). The specific function is accountability language design — producing the vocabulary and documentation format that accurately describes AI-influenced decision governance at NGO scale.

**Gap 4: AI explanation architecture as discrete deliverable built alongside AI deployment, not after**
No Geneva service builds AI explanation capacity as a discrete deliverable alongside AI deployment. The service would: identify what explanations the organization is required to make available under nFADP Art.13 for its specific AI deployment, design the explanation architecture — what documentation must exist, what methodology descriptions must be available, what process must be in place — build it as a parallel system to the AI deployment, and deliver it as a discrete output before the AI system goes live. This is distinct from AI governance policy development (which produces a document describing governance principles) and from data subject request process development (which addresses how to respond to requests after they arrive). The specific function is explanation architecture as a pre-deployment deliverable — building the capacity to explain before the obligation to explain attaches.

**Gap 5: AI vendor data processing scope expansion monitoring for NGO data controllers**
No service offers ongoing monitoring of AI vendor data processing scope expansion for Geneva NGOs as data controllers. The service would: monitor what the organization's AI vendors are actually doing with beneficiary data within the processing scope authorized by the NGO's contract, identify when vendor processing has expanded beyond what the NGO's authorization covers, assess whether the NGO's controller/processor documentation reflects actual vendor processing, and produce actionable assessments the NGO can use to renegotiate vendor terms or adjust its own compliance documentation. This is distinct from vendor contract review (which reviews contract language at a point in time) and from general data protection compliance audits. The specific function is vendor processing scope monitoring — not what the contract says the vendor may do, but what the vendor is actually doing within those permissions.

**Gap 6: AI governance institutional knowledge preservation protocol as discrete knowledge management output**
No Geneva service addresses AI governance institutional knowledge preservation as a discrete knowledge management output. The service would: document AI governance decisions made at deployment — tool selection rationale, risk identification, constraint design, configuration decisions — in a format that survives staff departure, produce governance documentation that transfers with the AI system configuration when staff change, and establish a knowledge preservation protocol that creates institutional memory of governance reasoning. This is distinct from AI governance policy documentation (which addresses governance principles not governance reasoning) and from staff handover processes (which assume the departing staff member has already documented what they know). The specific function is governance reasoning documentation — capturing why the AI governance decisions were made, not just what the governance decisions are.

---

## 04 — Compliance Context

### ZEWO Certification and the False AI Governance Adequacy Signal
ZEWO certification covers financial governance standards for Swiss nonprofits. It does not include AI governance. When ZEWO-certified Geneva NGOs present their certification as relevant to donor AI governance inquiries, the signal is false. ZEWO has not incorporated AI governance into its certification requirements, and no published guidance addresses how the certification relates to AI governance adequacy. Institutional donors accepting ZEWO certification as a proxy for AI governance adequacy are accepting a credential that does not cover the AI governance dimension of the organization's operations. No disclosure requirement qualifies the AI governance signal when ZEWO certification is presented in AI accountability contexts. The gap is structural: the certification creates a false adequacy signal in a context where accuracy matters, and no corrective mechanism exists.

### Institutional Donor AI Conditions as Undefined Operative Standards
Institutional donors are inserting AI governance conditions into grant agreements. The conditions require compliance with AI governance standards that are not defined in the grant agreement, not defined in published donor guidance, and not harmonized across donors. NGOs sign agreements committing to AI governance requirements they cannot describe. When donors conduct reviews, the interpretation burden falls on the NGO — which must demonstrate compliance with requirements that were never specified. No major Geneva institutional donor has published operative guidance defining what its own AI governance conditions require of grantees in practice. The operational effect is aggregate obligations that no individual donor intended, imposed through non-harmonized documentation requirements across multiple funders simultaneously.

### nFADP Art. 13 Meaningful Explanation Obligation and the Pre-Deployment Architecture Requirement
nFADP Art. 13 requires that data subjects receive meaningful information about the logic involved in automated processing that affects them. The obligation is to have the explanation available before the request arrives — not to construct it in response to the request. Organizations that deployed AI without building explanation architecture alongside it are structurally unable to discharge Art.13 obligations until they build the explanation architecture retroactively. The Swiss Federal Data Protection Authority has not published guidance on how Art.13 explanation obligations apply to AI-assisted humanitarian program delivery at NGO scale. The absence of guidance does not eliminate the obligation. The obligation exists and is unnamed in Geneva NGO governance discourse. Organizations are discharging it ad hoc, without knowing whether their responses satisfy the requirement.

### Data Controller Responsibility for AI Vendor Processing Scope Expansion
Under nFADP, the Geneva NGO is the data controller for beneficiary data processed through AI vendor systems. The NGO's controller responsibilities include ensuring that the vendor's processing stays within the scope authorized by the NGO's data processing agreement. When AI vendors expand processing scope — model training on client data, data pooling across organizations, new processing purposes — without the NGO's explicit awareness or authorization update, the NGO may be operating with an authorization that does not cover the actual processing. The controller responsibility gap is structural: the NGO authorized specific processing, the vendor expanded the processing within the contract's permissive scope, and the NGO did not detect the expansion because no monitoring mechanism exists. The NGO bears controller responsibility for processing it did not authorize and did not monitor.

### Art. 75 ZGB Board Liability for AI Governance Decisions Made Without Documentation of Reasoning
Under Art. 75 ZGB, board members face personal liability for decisions that harm the organization through inadequate governance. AI governance decisions made without documented reasoning create a specific liability exposure: when a board approves AI deployment without documentation of what risks were identified and what constraints were built, and that AI deployment later produces adverse outcomes, the board cannot demonstrate that it exercised adequate oversight. The liability attaches to the absence of documented reasoning, not to the adverse outcome itself. Geneva NGO boards approving AI deployment without institutional knowledge preservation protocols are accumulating liability exposure that is invisible until an incident surfaces it. The exposure compounds with each governance decision made without documentation of the reasoning behind it.

### Data Sovereignty and AI Vendor Infrastructure Jurisdiction for NGOs Processing Beneficiary Data Across Multiple Legal Regimes
Geneva NGOs processing beneficiary data through AI vendor infrastructure face compounding data sovereignty questions when beneficiaries are located in multiple jurisdictions. The NGO's nFADP obligations apply to Swiss-based processing. Beneficiary data processed through AI vendor infrastructure may be stored or processed in jurisdictions with different data protection obligations. The NGO's controller responsibility extends to ensuring that the vendor's infrastructure choices are compatible with the NGO's data protection obligations across all jurisdictions where beneficiaries are located. No proportionate methodology exists for Geneva NGOs to evaluate data sovereignty compliance for their AI vendor infrastructure in multi-jurisdictional humanitarian contexts.

---

## 05 — Lead Magnet Draft

**In Sergio's voice — calm, precise, executive-grade, no hype**

---

### English Version

# Geneva NGO AI Governance Integrity Briefing

**The structural problems that arrive before the frameworks name them**

---

**What this is**

A 90-minute structured briefing for executive directors and program managers at Geneva-based NGOs and tech nonprofits deploying AI for program delivery, data management, or communications.

The briefing addresses six structural accountability problems that have arrived in Geneva NGO operations before any published framework named them as discrete governance categories. Each problem has a specific mechanism. Each mechanism has documentation requirements different from what existing compliance programs produce.

**What you will leave with**

A written summary within five business days covering your organization's specific AI governance situation and the priority actions for addressing the most acute exposures before they surface in accountability contexts you cannot control.

**Format**

90 minutes, executive director or program manager, English or French. Maximum two participants per organization per session.

CHF 1,800 per organization.

**The questions the briefing addresses**

1. Donor visibility and beneficiary confidentiality: why "balancing" these requirements is the wrong framework, and what architectural separation must be built into the program design before AI deployment — not after.

2. ZEWO certification and AI governance: what the certification does and does not cover, and why presenting it as relevant to AI governance accountability creates a false signal in donor contexts.

3. Accountability attribution for AI-influenced decisions: how to accurately describe who is accountable for decisions that the AI system influenced but a person made — in language that is honest, governance-appropriate, and comprehensible to donors and beneficiaries.

4. nFADP Art. 13 explanation architecture: what the obligation requires your organization to have built before a beneficiary asks, and what "constructing an explanation in response" does and does not satisfy.

5. AI vendor data processing scope expansion: what your organization is responsible for monitoring as a data controller, and what the gap between your authorization and your vendor's actual processing looks like in practice.

6. AI governance institutional knowledge preservation: why AI governance decisions held in staff memory rather than documented documentation constitute a knowledge management exposure with board liability implications.

**Who this is for**

Executive directors and program managers at Geneva-based NGOs (10–100 employees), international organizations, and tech nonprofits deploying AI for program delivery, data management, or communications — particularly organizations holding ZEWO certification and receiving institutional donor funding.

**Who this is not for**

Organizations that have already designed AI programs with documented architectural separation between donor-visible outputs and beneficiary-confidential processing. Organizations that can produce a written explanation of how their AI system categorized any beneficiary on request, before the request arrives. If either describes your situation, you do not need this briefing.

**Next step**

Reply to this message with the name of your organization and a brief description of your AI deployment context — specifically whether you are using AI for beneficiary eligibility determination or scoring, and whether you have encountered a situation where a donor asked about AI governance and you used your ZEWO certification to address it.

I will respond within 48 hours with available briefing dates.

---

*Geneva NGO AI Governance Integrity Briefing — CHF 1,800 organization — 90 minutes — English or French*

---

### French Version

# Briefing sur l'Intégrité de Gouvernance IA des ONG Genevoises

**Les problèmes structurels qui arrivent avant que les cadres ne les nomment**

---

**Ce que c'est**

Un briefing structuré de 90 minutes pour directeurs exécutifs et responsables de programme d'ONG basées à Genève et d'organisations à but non lucratif technologiques déployant l'IA pour la prestation de programmes, la gestion des données ou les communications.

Le briefing aborde six problèmes structurels de reddition de comptes qui sont arrivés dans les opérations des ONG genevoises avant que aucun cadre publié ne les nomme comme catégories de gouvernance discrètes. Chaque problème a un mécanisme spécifique. Chaque mécanisme a des exigences de documentation différentes de ce que les programmes de conformité existants produisent.

**Ce que vous quitterez avec**

Un résumé écrit dans les cinq jours ouvrables couvrant la situation spécifique de gouvernance IA de votre organisation et les actions prioritaires pour adresser les expositions les plus aiguës avant qu'elles ne émergent dans des contextes de reddition de comptes que vous ne pouvez pas contrôler.

**Format**

90 minutes, directeur exécutif ou responsable de programme, anglais ou français. Maximum deux participants par organisation par session.

CHF 1 800 par organisation.

**Les questions que le briefing aborde**

1. Visibilité des donateurs et confidentialité des bénéficiaires : pourquoi « équilibrer » ces exigences est le mauvais cadre, et quelle séparation architecturale doit être intégrée dans la conception du programme avant le déploiement de l'IA — pas après.

2. Certification ZEWO et gouvernance de l'IA : ce que la certification couvre et ne couvre pas, et pourquoi la présenter comme pertinente pour la reddition de comptes de gouvernance de l'IA crée un signal faux dans les contextes de donateurs.

3. Attribution de responsabilité pour les décisions influencées par l'IA : comment décrire précisément qui est responsable des décisions que le système d'IA a influencées mais qu'une personne a prises — dans un langage qui est honnête, approprié à la gouvernance, et compréhensible par les donateurs et les bénéficiaires.

4. Architecture d'explication nFADP Art. 13 : ce que l'obligation exige que votre organisation ait construite avant qu'un bénéficiaire ne demande, et ce que « construire une explication en réponse » fait et ne fait pas pour satisfaire.

5. Expansion du périmètre de traitement des données des fournisseurs d'IA : ce dont votre organisation est responsable en tant que contrôleur de données, et à quoi ressemble l'écart entre votre autorisation et le traitement réel de votre fournisseur en pratique.

6. Préservation des connaissances institutionnelles de gouvernance de l'IA : pourquoi les décisions de gouvernance de l'IA détenues dans la mémoire du personnel plutôt que documentées constituent une exposition de gestion des connaissances avec des implications de responsabilité du conseil.

**Pour qui c'est**

Directeurs exécutifs et responsables de programme d'ONG basées à Genève (10–100 employés), organisations internationales, et organisations à but non lucratif technologiques déployant l'IA pour la prestation de programmes, la gestion des données ou les communications — particulièrement les organisations détient la certification ZEWO et reçoivent des financements institutionnels.

**Pour qui ce n'est pas**

Organisations qui ont déjà conçu des programmes d'IA avec une séparation architecturale documentée entre les sorties visibles par les donateurs et le traitement confidentiel des bénéficiaires. Organisations qui peuvent produire une explication écrite de la façon dont leur système d'IA a catégorisé tout bénéficiaire sur demande, avant que la demande n'arrive. Si l'un ou l'autre décrit votre situation, vous n'avez pas besoin de ce briefing.

**Prochaine étape**

Répondez à ce message avec le nom de votre organisation et une brève description de votre contexte de déploiement d'IA — spécifiquement si vous utilisez l'IA pour la détermination ou le cotation d'éligibilité des bénéficiaires, et si vous avez rencontré une situation où un donateur a demandé la gouvernance de l'IA et vous avez utilisé votre certification ZEWO pour y répondre.

Je répondrai dans les 48 heures avec les dates de briefing disponibles.

---

*Briefing sur l'Intégrité de Gouvernance IA des ONG Genevoises — CHF 1 800 organisation — 90 minutes — anglais ou français*

---

## 06 — Findings Summary

**Six net-new insights distinct from C214–C281 Phase 04**

---

**Finding 01: The donor visibility and beneficiary confidentiality "balance framing" as organizational obstacle preventing architectural diagnosis**

Geneva NGOs operating under the "balance" framing for donor visibility and beneficiary confidentiality are being prevented from recognizing what they need to build. The balance framing treats these as competing values requiring tradeoffs, when both are non-negotiable obligations that apply to the same AI output and cannot be reconciled at the output level through implementation care. The architectural solution — building separation into the program design before deployment — was not named as a discrete program design deliverable in any prior Phase 04 finding. The framing itself is the obstacle: organizations operating under the balance framing attempt to extract donor-visible documentation from AI systems designed without the separation, and treat the resulting failure as a communications or documentation problem rather than an architecture problem. This finding names the specific mechanism: the balance framing prevents organizations from recognizing that they need to build separation architecture, not implementation care. Distinct from C281 Finding 01 (which named the architectural incompatibility itself) — this finding identifies the framing as the obstacle preventing organizations from acting on the architectural diagnosis.

**Finding 02: ZEWO certification as false AI governance adequacy signal in institutional donor accountability contexts without disclosure remedy**

ZEWO-certified Geneva NGOs presenting their certification in institutional donor AI governance contexts are creating false adequacy signals that no party is examining. ZEWO certification covers financial management, not AI governance. The presentation implies AI governance adequacy the certification does not confer. Institutional donors accepting the signal are not validating it; the organizations presenting it may not recognize it as inaccurate. No disclosure requirement exists to qualify the signal. No service has evaluated whether ZEWO certification creates AI governance adequacy signals in donor contexts, and no corrective disclosure practice has emerged. This finding names the specific mechanism: the certification creates a credibility signal in a context where the signal is false, and the false signal operates without corrective disclosure because no party has examined whether the proxy is valid for the purpose it is being used for. Distinct from all prior Phase 04 findings addressing ZEWO certification scope, donor AI governance requirements, or documentation adequacy — which addressed what the certification covers or what donors require, not the specific false signal problem created when a credential that does not cover AI governance is presented in an AI governance accountability context.

**Finding 03: AI-influenced decision accountability language gap creating simultaneous over-claiming and under-claiming exposure at NGO governance scale**

Geneva NGO executive directors lack accurate language for describing accountability for AI-influenced decisions. "The AI decided" underclaims organizational accountability that actually exists. "We decided" overclaims accountability for a decision made using AI output. Neither accurately describes the governance reality: a person made a decision using AI output, and accountability sits with the person and the organization. The language gap creates a structural exposure: organizations either disclaim accountability they hold or claim accountability they do not hold, in both cases creating governance documentation that is inaccurate to what actually happened. No Geneva service has built the accountability attribution vocabulary and documentation format for AI-influenced decisions at NGO governance scale. This finding names the specific mechanism: the language gap is not a communications problem — it is an accountability documentation problem where the vocabulary available to NGO governance documentation does not accurately describe the governance reality of AI-influenced decisions, producing documentation that either over-claims or under-claims organizational accountability. Distinct from all prior Phase 04 findings addressing AI decision documentation, donor accountability, and nFADP compliance — which assumed organizations had accurate language for describing what they were documenting.

**Finding 04: nFADP Art. 13 explanation obligation requiring pre-deployment architecture, not post-request construction, with the gap unnamed in Geneva NGO governance discourse**

nFADP Art. 13 requires that explanations of automated processing be available before requests arrive — not constructed in response to requests. Organizations that deployed AI without explanation architecture are structurally unable to discharge Art.13 obligations: they are constructing explanations after the obligation has attached, which is not equivalent to having discharged the obligation. The Swiss Federal Data Protection Authority has not published guidance on how Art.13 applies to AI-assisted humanitarian program delivery at NGO scale. The obligation is present-tense, unnamed in Geneva NGO governance discourse, and structurally unmanaged. This finding names the specific mechanism: the explanation obligation requires parallel architecture built alongside the AI deployment, not a response capability constructed after deployment. The gap is distinct from all prior Phase 04 nFADP findings addressing data subject request response processes or Art. 6 lawful basis documentation — which addressed upstream authorization and downstream response, not the specific pre-deployment architecture requirement for explanation availability that Art.13 creates.

**Finding 05: AI vendor data processing scope expansion creating nFADP controller responsibility gap the NGO cannot monitor without dedicated architecture**

Geneva NGOs as data controllers are authorized for specific AI vendor processing through data processing agreements. Vendors are expanding processing scope — model training on client data, data pooling, new processing purposes — within contractual permissive language without the NGO's explicit awareness. The NGO's authorization may not cover the expansion. The NGO may be processing in potential non-compliance with its own authorization because the controller monitoring architecture does not exist. The specific mechanism is: the vendor's actual processing diverges from the NGO's documented authorization without the NGO detecting the divergence, creating a controller responsibility gap that exists in practice regardless of the contract language. This finding is distinct from all prior Phase 04 findings addressing AI vendor contract review (which examines contract language not actual processing), vendor selection (which addresses choice before deployment), and data subject access (which addresses individual beneficiary requests). The specific function is vendor processing scope monitoring — evaluating what the vendor is actually doing within the authorized scope, not what the contract says the vendor may do.

**Finding 06: AI governance institutional knowledge preservation gap as governance reasoning loss through staff departure creating compounding Art. 75 ZGB board liability exposure**

AI governance decisions made at deployment — tool selection rationale, risk identification, constraint design, configuration decisions — are held in institutional memory rather than documented. When the staff member who made those decisions departs, the governance reasoning leaves with them. The organization retains the AI system without the governance context that produced it. The replacement inherits a system they did not design, with configuration decisions they cannot explain and governance reasoning they cannot reconstruct. Boards approving AI deployment without institutional knowledge preservation protocols are accumulating Art. 75 ZGB personal liability exposure: they approved AI deployment based on governance reasoning they did not document, and that reasoning has since left the organization. The liability attaches to the absence of documented reasoning, not to any adverse outcome. This finding names the specific mechanism: the knowledge preservation gap creates compounding board liability exposure that is invisible until an incident surfaces the absence of documented governance reasoning — at which point the documentation gap has already caused the liability. Distinct from all prior Phase 04 findings addressing board-approved AI governance staleness (which addressed oversight documents going stale) and field staff shadow AI usage (which addressed unauthorized tool usage). The specific mechanism is governance reasoning loss through staff departure — knowledge management for AI governance decisions as a discrete liability management output.

---

*End of Phase 04 — C282 — Geneva NGO/Tech*
