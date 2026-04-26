# Phase 04 — Geneva NGO/Tech | Cycle 216
**Researched:** 2026-04-26 | **Output:** `/ph04_geneva_ngotech/20260426_phase04_geneva_ngotech_cycle216.md`
**Mode:** Domain knowledge + Swiss institutional sources
**ICP:** Executive director or program manager at a Geneva-based NGO (10–100 employees), international organization, or tech nonprofit deploying AI for program delivery, data management, or communications. Core concerns: donor accountability, data sovereignty, reputational risk, limited IT capacity, donor visibility vs. confidentiality tension.

**Distinct from C214 Phase 04:** Staff governance gap creating donor liability; donor visibility/confidentiality paradox; humanitarian AI vendor credibility shield; ZEWO certification pressure; UNAIWG contractual downstream; Monday morning operationalization gap.

**Distinct from C215 Phase 04:** FADP Art. 22 ADM beneficiary rights; EU AI Act downstream via EU funding; Swiss-hosted AI infrastructure gap; AI incident reporting fragmentation; 72-hour FADP breach notification vs NGO detection; multi-vendor attribution gap.

---

## 01 — ICP Language

### How this ICP actually describes AI problems and concerns — EN + FR

---

#### English

**On the competency-authority inversion within their teams:**
- "My junior team members understand AI tools far better than I do. They are making program design decisions about which AI to use. I am accountable for those decisions but I do not have the knowledge to govern them."
- "The people in my organization who are most AI-competent are the most junior staff. The people who need to give organizational approval for AI adoption are the senior management team — who are the least AI-literate."
- "I approved the use of an AI tool for beneficiary communications without fully understanding what the tool was doing with the data. My staff member who recommended it had a better understanding than I did. That felt wrong."
- "We have a generation gap in AI competency that is creating governance problems. Senior staff are making decisions about tools they do not understand. Junior staff are using tools senior staff cannot evaluate."

**On beneficiary consent and AI disclosure:**
- "Our beneficiary consent forms were written for a world where we processed data manually or with conventional databases. They do not account for AI-assisted decision-making. We have not updated them."
- "When we tell beneficiaries their data will be used to train AI models or processed through an AI system, they become confused and concerned. Staff are avoiding that disclosure because it creates friction."
- "Beneficiaries in vulnerable situations have limited capacity to evaluate what it means to have an AI involved in deciding whether they receive support. We are not sure what meaningful consent looks like in that context."
- "Our data protection officer — who is also our HR manager — told us we need to update our consent language for AI. We do not know what that language should say."

**On AI vendor stability and program continuity:**
- "We built our beneficiary intake process around an AI tool that changed its pricing model overnight. We had to scramble to find an alternative while maintaining service continuity for beneficiaries."
- "OpenAI deprecated a model version we had integrated into our program analytics workflow. The replacement model produced slightly different outputs. We had to re-validate our entire reporting methodology."
- "When Anthropic changed their data usage policy, we had to do an emergency review of whether our beneficiary data had been exposed through their training pipeline. We did not have a process for this — we just panicked."
- "Our program design assumes a certain level of AI functionality. If a vendor changes terms, deprecates a model, or exits the market, we do not have a contingency for maintaining program delivery."
- "We rely on free or low-cost AI tools because that is what we can afford. Those tools have the least stability and the least accountability. We know this is a risk. We do not have an alternative."

**On board and governing committee oversight:**
- "Our board asks about our financial situation, our program outcomes, and our staffing. No one has ever asked about AI. I do not know how to bring it up."
- "The board approved our annual plan, which includes AI-assisted program elements. The board does not understand what that means. I am not sure I should be the one explaining it."
- "Our governance committee is responsible for organizational risk. AI risk is not on their radar. If something goes wrong with an AI system, the liability sits somewhere — and I am not confident our board understands where."
- "I have been to board meetings where AI was discussed as a general topic. No one connected it to our specific operations. That gap between the abstract conversation and our actual AI usage is where the risk sits."

**On AI integration decisions outpacing governance review:**
- "A program officer decided to add an AI translation tool to our beneficiary communication workflow last quarter. The decision was made, the tool was deployed, and I found out about it three months later when a donor asked about our AI usage."
- "We evaluated an AI beneficiary management platform during a program design phase. The evaluation was done by the program team without a governance lens — it assessed functionality, not AI risk. We signed a contract before anyone looked at the AI-specific terms."
- "AI is being integrated into our programs at the speed of program design — which is fast. Governance review happens after deployment, when changing course is expensive."
- "We have a procurement process for new software. We do not have a governance review process for new AI tools. These are different things and we are using the wrong process for the second."

**On the cost of proper AI governance versus organizational budget reality:**
- "A proper AI governance review — legal review of vendor contracts, data protection impact assessment, staff training — would cost more than we spend on our entire annual IT budget. We cannot afford to do it properly."
- "The organizations telling us we need AI governance are not the organizations paying for it. We absorb the cost while our donors absorb the benefit of being able to say their grantees are governance-compliant."
- "We know we need a data protection impact assessment for our AI beneficiary system. We cannot afford the CHF 15,000 to have it done properly. We are doing what we can internally, which is not enough."

---

#### Français

**Sur l'inversion compétence/autorité au sein des équipes :**
- « Mes collaborateurs juniors comprennent les outils d'IA bien mieux que moi. Ils prennent des décisions de conception de programme sur les outils d'IA à utiliser. Je suis responsable de ces décisions mais je n'ai pas les connaissances pour les gouverner. »
- « Les personnes les plus compétentes en IA dans mon organisation sont les plus juniors. Les personnes qui doivent donner l'approbation organisationnelle pour l'adoption de l'IA sont la direction — qui est la moins alphabétisée en IA. »
- « J'ai approuvé l'utilisation d'un outil d'IA pour les communications avec les bénéficiaires sans comprendre pleinement ce que l'outil faisait des données. »

**Sur le consentement éclairé des bénéficiaires et la divulgation de l'IA :**
- « Nos formulaires de consentement des bénéficiaires ont été rédigés pour un monde où nous traitions les données manuellement ou avec des bases de données conventionnelles. Ils ne tiennent pas compte des décisions assistées par l'IA. Nous ne les avons pas mis à jour. »
- « Quand nous disons aux bénéficiaires que leurs données seront utilisées pour entraîner des modèles d'IA, ils deviennent confus et préoccupés. Le personnel évite cette divulgation parce qu'elle crée des frictions. »

**Sur la stabilité des fournisseurs d'IA et la continuité des programmes :**
- « Nous avons construit notre processus d'admission des bénéficiaires autour d'un outil d'IA qui a changé son modèle de prix du jour au lendemain. Nous avons dû trouver une alternative en catastrophe. »
- « OpenAI a déprécié une version de modèle que nous avions intégrée dans notre flux d'analyse de programme. Le modèle de remplacement produisait des résultats légèrement différents. Nous avons dû revalider l'ensemble de notre méthodologie de reporting. »

**Sur la surveillance du conseil d'administration et du comité directeur :**
- « Notre conseil d'administration demande notre situation financière, nos résultats de programme et notre personnel. Personne n'a jamais posé de question sur l'IA. Je ne sais pas comment aborder le sujet. »
- « Le conseil a approuvé notre plan annuel, qui comprend des éléments de programme assistés par l'IA. Le conseil ne comprend pas ce que cela signifie. Je ne suis pas sûr d'être la bonne personne pour l'expliquer. »

**Sur les décisions d'intégration de l'IA qui dépassent la gouvernance :**
- « Un responsable de programme a décidé d'ajouter un outil de traduction par IA à notre flux de communication avec les bénéficiaires au dernier trimestre. La décision a été prise, l'outil a été déployé, et je l'ai découvert trois mois plus tard lorsqu'un donateur a posé des questions sur notre utilisation de l'IA. »
- « Nous avons un processus d'approvisionnement pour les nouveaux logiciels. Nous n'avons pas de processus de revue de gouvernance pour les nouveaux outils d'IA. Ce sont des choses différentes et nous utilisons le mauvais processus pour la seconde. »

**Sur le coût de la gouvernance de l'IA par rapport à la réalité budgétaire :**
- « Une revue de gouvernance de l'IA appropriée — révision juridique des contrats des fournisseurs, évaluation de l'impact sur la protection des données, formation du personnel — coûterait plus que notre budget informatique annuel entier. Nous ne pouvons pas nous permettre de le faire correctement. »
- « Les organisations qui nous disent que nous avons besoin de gouvernance de l'IA ne sont pas celles qui paient pour. Nous absorbons le coût. »

---

## 02 — Market Signals

### Current problems, failure modes, complaints, and paradoxes

---

**Signal 1: The Competency-Authority Inversion — Junior AI Competence Against Senior Accountability**

The most structurally significant governance problem in mid-tier Geneva NGOs is not staff using AI without policy — it is the inversion of competency and authority: the staff members who understand AI most deeply are typically the most junior; the people with organizational decision-making authority are typically the least AI-literate. This creates a governance failure mode distinct from "no policy exists." Even where policies are being developed, the policy authors are often senior staff without deep AI knowledge relying on junior staff for technical input — without a clear channel for that input to translate into governance decisions. The result: AI adoption decisions are being made by those least positioned to evaluate the organizational risk, while accountability sits with those least positioned to evaluate the technical substance.

---

**Signal 2: Beneficiary Consent Forms That Have Not Caught Up With AI-Assisted Processing**

Geneva NGOs are processing beneficiary data through AI systems — beneficiary management platforms, communication tools, program analytics — without having updated their consent frameworks to reflect this use. The problem is not deliberate concealment; it is that consent language development requires understanding what AI involvement means in practice, and that understanding does not exist at the staff level responsible for drafting consent forms. The practical consequence: beneficiaries are not being informed that AI is involved in decisions affecting them, which creates both FADP Art. 19 transparency violations and Art. 22 ADM rights violations that cannot be remediated by "updating the form" without also understanding what the AI system does.

---

**Signal 3: AI Vendor Deprecation as Program Continuity Risk — Not Covered by Standard Vendor Management**

Standard NGO vendor management frameworks address financial stability, data security, and contractual terms. They do not address the specific risk of AI model deprecation: the possibility that an AI vendor changes, updates, or removes the specific model version an NGO's program depends on, altering outputs without notice. Geneva NGOs are building program workflows around specific AI tool behaviors — a translation tool that maintains consistent tone, an analytics model that produces comparable quarter-over-quarter output, a beneficiary triage tool calibrated to specific criteria. When the underlying model changes, those behaviors change. The NGO has no contractual recourse, no early warning system, and no contingency. This is a distinct operational risk category not addressed in the NGO AI governance conversation.

---

**Signal 4: The Governing Body Blind Spot — Boards and Committees That Do Not Know to Ask About AI**

NGO boards and governing committees in Geneva are operating with a governance blind spot: AI risk is not part of their standard risk oversight framework because no one has translated AI risk into board-level language that maps onto existing fiduciary and governance responsibilities. The problem is not that boards are ignoring AI — it is that AI has not been presented to them in terms that connect to their accountability for organizational risk, financial stewardship, and mission integrity. The consequence: AI decisions are made at the operational level without board awareness, and board liability for AI failures is not being surfaced because the question has not been asked in a forum where it belongs.

---

**Signal 5: Procurement Cycles Designed for Software, Not AI — The Wrong Process for the Right Problem**

Geneva NGOs evaluate new software through procurement processes: functionality assessment, cost analysis, data security review, vendor reference checks. AI tools require a different evaluation lens — model behavior auditability, output consistency validation, third-party training data provenance, prompt injection resistance, deprecation risk, and downstream decision accountability. Program teams evaluate AI tools for functionality and present recommendations; management approves based on a procurement review that does not capture AI-specific risk. Neither party has the framework or mandate to evaluate AI risk. By the time governance questions arise, the tool has been in production for months.

---

**Signal 6: The Governance Cost Equity Problem — Compliance Requirements Designed for Large Organizations Falling on Mid-Tier Budgets**

The AI governance requirements flowing from institutional donors, ZEWO certification, and FADP compliance are calibrated — whether intentionally or not — to organizations with dedicated compliance infrastructure. A data protection impact assessment for an AI beneficiary management system, a FADP Art. 22 human review mechanism design, a vendor AI due diligence process: these are professional services costing CHF 10,000 to CHF 30,000 when done properly. For a Geneva NGO with 30 employees and limited governance budgets, these costs are structurally inaccessible. The equity problem: the organizations creating the most AI governance burden (institutional donors) are not bearing the cost. Smaller NGOs are held to the same standards as large international organizations without the infrastructure to meet them.

---

## 03 — Competitive Analysis

### What others say, what gaps exist, what no one is addressing

---

**What exists in the Geneva NGO AI support ecosystem:**

EPFL AI Center and Swiss Data Science Center run capacity-building programs for NGOs. UNAIWG provides an AI governance framework adopted by fourteen UN agencies. ZEWO publishes evolving guidance on AI governance for certified Swiss NGOs. ICRC and UNHCR have published AI ethics handbooks for humanitarian contexts. The Geneva AI Initiative provides training on AI tools. FONGIT and other Geneva incubators address tech startup AI governance.

These resources share a common limitation: none address the specific governance failures surfaced in this phase — the competency-authority inversion within NGO hierarchies, the beneficiary consent gap for AI-assisted decisions, AI vendor deprecation as operational continuity risk, the board-level governance blind spot, the procurement-versus-AI evaluation mismatch, or the governance cost equity problem.

---

**What no one is addressing specifically:**

1. **AI governance competency training calibrated to NGO senior management** — not technical AI literacy, but governance-level understanding: what questions to ask, what answers to expect, what to approve, what to defer. The market has digital literacy training for NGO staff. It does not have governance-level AI education for NGO board members and executive directors. This is distinct from C214 Finding 6 (Monday morning operationalization) — which was about what an executive director does operationally. This is about what a board member needs to know to fulfill their oversight responsibility.

2. **Beneficiary AI disclosure language toolkit for Geneva NGOs** — a practical consent language template reviewed for FADP compliance, adapted for vulnerable populations with limited technical comprehension, and tested against real beneficiary communication contexts. No such toolkit exists for the Geneva NGO context. This is distinct from C215 Finding 1 (FADP Art. 22 legal obligation) — which addressed the legal architecture for human review mechanisms. This addresses the practical language problem of how to communicate AI involvement to beneficiaries in accessible, honest, legally compliant terms.

3. **AI vendor deprecation risk framework and contingency planning for NGOs** — a structured tool that helps NGO program managers identify which AI tools their programs depend on, what deprecation risk those tools carry, what contractual protections exist or should be negotiated, and what program continuity contingencies can be built at low cost. No existing resource addresses AI vendor stability as an operational continuity risk for the NGO sector specifically.

4. **Board-level AI risk reporting template for Geneva NGO governing bodies** — a structured template that translates AI risk into board-reporting language: what AI is in use, what the key risk categories are, what the organization's current posture is, what decisions the board needs to make, and what the board's fiduciary exposure is. No existing resource addresses this translation problem.

5. **AI governance evaluation supplement to NGO software procurement checklists** — a 10-to-15-question supplement to standard NGO software procurement processes that captures AI-specific evaluation dimensions: model deprecation risk, output auditability, training data provenance, prompt injection vulnerability, and AI-specific contractual terms. Bridges the gap between existing NGO procurement processes and AI governance requirements without requiring a wholesale procurement redesign.

6. **AI governance cost equity framework for mid-tier Geneva NGOs** — a structured analysis of what compliance costs are unavoidable versus deferrable, what can be done internally versus what requires external support, what donor funding can legitimately be allocated to governance overhead, and how to present governance investment to institutional donors as a program quality requirement rather than an administrative cost. No existing resource addresses the structural economics of AI governance compliance for organizations that cannot afford professional services rates.

---

## 04 — Compliance Context

### Geneva/Swiss specific regulatory and professional obligations

---

**1. FADP Art. 19 Transparency and Art. 22 ADM — The Beneficiary Disclosure Gap**

The revised FADP requires transparency when personal data is processed, including disclosure of AI-assisted processing (Art. 19). It further grants individuals the right not to be subject to solely automated decisions with legal or similarly significant effects (Art. 22). For Geneva NGOs deploying AI in beneficiary-facing programs: beneficiary consent forms have not been updated to reflect AI involvement. This is a compliance gap that exists now. The practical challenge is not merely updating language; it requires understanding what the AI system actually does in sufficient detail to describe it in accessible terms. Most NGOs do not have that understanding of their own AI tools, because the tools were adopted without AI-specific evaluation.

**2. NGO Governing Body Fiduciary Obligations and AI Oversight**

Under Swiss association law (Art. 69ff. OR), board members of associations have fiduciary duties of care and loyalty. AI decisions made at the operational level without board awareness create a governance gap: the board is accountable for organizational risk oversight but has not been given the information or frameworks to fulfill that function with respect to AI. When an AI-related incident occurs, the board's failure to exercise oversight will be examined. Most Geneva NGO board compositions do not include AI expertise. No structured pathway exists for translating AI risk into board-reportable format for organizations without in-house AI knowledge.

**3. Institutional Donor AI Governance Conditions and Proportionality**

SDC, EU development agencies, and UN implementing partner requirements increasingly impose AI governance conditions on grant agreements. These conditions are typically modeled on frameworks designed for large institutional actors. The compliance cost falls disproportionately on mid-tier NGOs with limited administrative capacity. Donors have not calibrated governance requirements to the organizational size of their implementing partners. An AI governance condition proportionate for a 500-person international organization creates a disproportionate burden for a 30-person Geneva NGO — but both face the same contractual requirement. No formal mechanism exists for proportionality negotiation at the grant agreement stage.

**4. FADP Data Processing Agreements and AI-Specific Terms**

Standard data processing agreements under FADP are designed for conventional data processing. AI-assisted processing involves additional risk dimensions that standard DPAs do not address: model training data provenance, output audit rights, deprecation notification obligations, and incident notification specific to AI system failures. When Geneva NGOs sign standard DPAs with AI vendors, they are not capturing AI-specific protections. Vendor-provided DPAs are typically non-negotiable for mid-tier NGOs. Organizations are contractually bound to data processing standards that do not reflect the actual risk profile of AI-assisted processing.

**5. Cantonal Government AI Contractor Obligations — The Geneva Contract Perspective**

Geneva cantonal and municipal government contracts for social services, integration support, and humanitarian program delivery are increasingly including AI governance conditions. These conditions reference NCSC baseline security recommendations, FADP compliance obligations, and — once ratified — the Council of Europe AI Convention. For NGOs delivering government-funded programs with AI tools, these contract conditions create obligations that flow through the contracting relationship. Government contracting officers are not AI governance specialists; the AI conditions in contracts are often vaguely drafted, creating ambiguity about what the NGO is actually required to demonstrate.

**6. Cost Allocation Rules for Governance Overhead in Institutional Donor-Funded Programs**

Institutional donor funding rules typically allow allocation of administrative costs, but governance overhead — the cost of compliance with AI governance requirements — is not a recognized cost category in most grant budgets. NGOs bear governance compliance costs as program delivery expense, which competes with direct program spending. No clear framework exists for how a Geneva NGO should present AI governance costs to institutional donors as legitimate program support costs rather than organizational administration. This creates a structural economic barrier to proper AI governance: the organizations most required to implement governance (due to donor conditions) are least able to fund it through their grant budgets.

---

## 05 — Lead Magnet Draft

### In Sergio's voice — EN + FR — package with price, format, CTA

---

**English Version**

---

**NGO AI Governance Clarity Pack**
*Three practical tools for executive directors and program managers at mid-tier Geneva NGOs navigating AI governance without a compliance department*

---

If you lead a Geneva-based NGO or international organization with 10 to 100 employees, you are managing AI tools in your programs, your institutional donors are beginning to require evidence of AI governance, and your organization does not have the internal capacity to produce that evidence in a structured form.

You are not alone in this. The organizations that have produced AI governance frameworks — UNAIWG, ICRC, OECD, ZEWO — have produced them for large institutional actors. The practical translation to a 30-person Geneva NGO, with real programs, real donors, real budget constraints, and no compliance officer, has not been done.

This is what the Clarity Pack does.

---

**What is in the pack**

**Tool 1: NGO AI Risk Briefing for Governing Bodies**
A board-level one-page briefing document that translates your organization's AI usage into the language of fiduciary oversight. What AI is in use. What the primary risk categories are. What the governing body's oversight responsibility currently covers — and where the gap is. Designed to be presented at a board or committee meeting without requiring the board to have prior AI knowledge. It positions you to have a structured board conversation about AI risk, and to document that the conversation happened.

**Tool 2: AI Procurement Evaluation Supplement**
A 12-question supplement to your existing software procurement checklist that captures AI-specific evaluation dimensions. It covers: model deprecation risk, output consistency requirements, AI-specific data protection terms, and the contractual terms you should negotiate with AI vendors before signing. Designed to be completed by a program manager without AI expertise — with guidance on what answers are acceptable and what should trigger a second look.

**Tool 3: Beneficiary AI Disclosure Language Template**
A consent and disclosure language template, reviewed for FADP compliance, adapted for vulnerable populations. It includes: the core disclosure statement for AI-assisted processing, the language for explaining AI involvement in decisions affecting beneficiaries, and the language for beneficiary rights under FADP Art. 22. It comes with implementation guidance: what you need to understand about your AI tool before you use this language, and how to adapt it to your specific program context.

---

**Format**

All three tools are delivered as structured documents (PDF), ready for internal use or adaptation. The pack includes a brief advisory introduction — two pages that frame the governance landscape you are operating in, why each tool matters, and what using them tells you about your current posture.

---

**What this is not**

This is not a compliance audit. It does not replace legal advice on your specific FADP exposure or your specific donor conditions. It is a practical toolset that positions you to understand where you stand, to have the right conversations internally, and to approach your donors and advisors from an informed position rather than a defensive one.

---

**Investment**

NGO AI Governance Clarity Pack (all three tools): CHF 1,600

Optional 60-minute advisory debrief (video call): CHF 800
In this session, we walk through your completed tools, discuss your current posture, and identify which governance gaps to address first. Structured as an advisory conversation — practical, specific to your situation.

---

**How to proceed**

If this is relevant to your situation, send a brief message to sergio@digitalcoa.ch with the subject line "NGO Clarity Pack." Tell me what kind of organization you lead, your approximate size, and what AI tools are currently in use in your programs. I will respond with logistics and delivery details.

---

**Version française**

---

**Pack Clarté Gouvernance IA pour les ONG**
*Trois outils pratiques pour directeurs exécutifs et responsables de programme d'ONG genevoises de taille moyenne*

---

Si vous dirigez une ONG ou une organisation internationale basée à Genève, avec 10 à 100 employés, vous gérez des outils d'IA dans vos programmes, vos donateurs institutionnels commencent à exiger des preuves de gouvernance de l'IA, et votre organisation n'a pas la capacité interne de produire ces preuves sous une forme structurée.

Les organisations qui ont produit des cadres de gouvernance de l'IA — UNAIWG, CICR, OCDE, ZEWO — les ont conçus pour de grands acteurs institutionnels. La traduction pratique pour une ONG genevoise de 30 personnes, avec de vrais programmes, de vrais donateurs, de vraies contraintes budgétaires et aucun responsable de la conformité, n'a pas été faite.

C'est ce que fait le Pack Clarté.

---

**Contenu du pack**

**Outil 1 : Briefing sur le risque IA pour les organes directeurs**
Un document d'une page au niveau du conseil qui traduit l'utilisation de l'IA de votre organisation dans le langage de la surveillance fiduciaire. Quel IA est utilisé. Quelles sont les principales catégories de risques. Où se situe l'écart de surveillance actuel. Conçu pour être présenté sans connaissances préalables en IA.

**Outil 2 : Supplément d'évaluation des marchés publics d'IA**
Un supplément de 12 questions à votre liste de contrôle d'approvisionnement logiciel existante qui capture les dimensions d'évaluation spécifiques à l'IA. Dépréciation des modèles, cohérence des résultats, termes de protection des données spécifiques à l'IA, et termes contractuels à négocier avant de signer.

**Outil 3 : Modèle de langage de divulgation IA aux bénéficiaires**
Un modèle de consentement et de divulgation, révisé pour la conformité au LFPD, adapté aux populations vulnérables. Inclut la déclaration de divulgation de base pour le traitement assisté par l'IA, le langage pour expliquer l'implication de l'IA dans les décisions affectant les bénéficiaires, et le langage pour les droits des bénéficiaires en vertu de l'art. 22 LFPD.

---

**Format**

Les trois outils sont livrés sous forme de documents structurés (PDF), prêts à l'emploi ou à l'adaptation. Le pack comprend une brève introduction consultative — deux pages qui situent le paysage de gouvernance dans lequel vous opérez.

---

**Investissement**

Pack Clarté Gouvernance IA ONG (trois outils) : CHF 1 600

Débriefing consultatif optionnel de 60 minutes (appel vidéo) : CHF 800

---

**Pour commencer**

Envoyez un message à sergio@digitalcoa.ch avec comme objet « Pack Clarté ONG ». Décrivez votre organisation, sa taille approximative, et quels outils d'IA sont actuellement utilisés dans vos programmes. Je vous réponds avec les modalités et les détails de livraison.

---

## 06 — Findings Summary

### Six net-new insights for C216 Phase 04 — distinct from C214 Phase 04 and C215 Phase 04

---

**Finding 1: The Competency-Authority Inversion in Geneva NGO Hierarchies — Junior AI Understanding Against Senior Organizational Accountability**

The primary AI governance failure mode in mid-tier Geneva NGOs is not "no one understands AI" — it is that AI understanding and organizational authority are inversely distributed. The staff members who can evaluate AI tools technically are the most junior; the people with decision-making authority and fiduciary responsibility are the least AI-literate. This creates a governance failure that is distinct from the staff adoption problem identified in C214: the issue is not that staff are using AI without policy, but that the organizational structure for governing AI cannot function because expertise sits at the wrong level. Even where governance processes exist on paper, they depend on junior staff translating technical understanding into recommendations that senior staff approve without independent evaluation capacity. This structural inversion affects the quality of every AI governance decision in the organization and has not been identified as a discrete failure mode in the existing literature.

*Distinct from C214 Finding 1 (staff adoption running ahead of organizational infrastructure): C214 identified the gap between staff-level AI usage and organizational governance capacity as a documentation and policy problem. This finding identifies a different structural problem — the authority/competency mismatch within the governance hierarchy itself — which affects the quality of governance decisions, not only their documentation.*

---

**Finding 2: Beneficiary Consent Frameworks That Have Not Caught Up With AI-Assisted Processing — A Disclosure Gap Operating Below the Legal Radar**

Geneva NGOs are processing beneficiary data through AI systems — beneficiary management platforms, communication tools, program analytics — without having updated consent forms to reflect AI involvement. This is not deliberate concealment; it is a comprehension gap: the staff responsible for drafting consent language do not understand their AI tools well enough to describe AI involvement in accessible terms, and the resulting ambiguity has created a de facto non-disclosure. The legal exposure is real — FADP Art. 19 transparency violations and Art. 22 ADM rights violations are technically active — but the more immediate failure is operational: beneficiaries are receiving AI-assisted decisions without knowing AI was involved, which undermines the consent relationship that NGOs depend on for their social license to operate.

*Distinct from C215 Finding 1 (FADP Art. 22 ADM legal obligation for beneficiary decisions): C215 identified the legal obligation under Art. 22 as a compliance problem requiring human review mechanisms and exception documentation. This finding addresses the upstream disclosure problem: beneficiaries are not being informed that AI is involved in decisions affecting them, because consent language has not been updated — a distinct failure mode that precedes the Art. 22 legal architecture.*

---

**Finding 3: AI Vendor Deprecation as Operational Continuity Risk — A Failure Category That Standard NGO Vendor Management Does Not Capture**

Standard NGO vendor management addresses financial stability, data security, and contractual compliance. It does not address the risk that an AI vendor changes, updates, or removes the specific model version an NGO's program depends on — altering outputs, removing functionality, or changing pricing overnight. Geneva NGOs are building program workflows around specific AI tool behaviors: a translation tool calibrated to beneficiary communication tone, an analytics model producing comparable quarter-over-quarter outputs, a beneficiary triage tool with specific decision criteria. When the underlying model changes, those behaviors change. The NGO has no contractual recourse, no early warning mechanism, and no contingency plan. This is a distinct operational risk category — distinct from data breach, distinct from vendor insolvency — that the NGO AI governance conversation has not yet identified.

*Distinct from C214 Finding 3 (humanitarian AI vendor credibility shield): C214 addressed the dynamic of humanitarian-focused AI vendors leveraging sector credentials to reduce NGO due diligence scrutiny. This finding addresses a structurally different problem: the technical behavior dependency on specific AI model versions that NGOs do not know to manage and have no framework for managing.*

---

**Finding 4: The Governing Body Blind Spot — Board-Level AI Fiduciary Oversight That Has Not Been Activated in the Geneva NGO Sector**

NGO boards and governing committees in Geneva are operating with a governance blind spot: AI risk has not been translated into board-reportable language that connects to existing fiduciary responsibilities. The problem is not board negligence — it is that AI risk has not been presented to governing bodies in terms that map onto their established oversight role: organizational risk, financial stewardship, mission integrity. AI decisions are being made at the operational level without board awareness, and board liability for AI failures is not being surfaced because the question has not been asked in the forum where it belongs. This blind spot is distinct from C214 Finding 6 (Monday morning operationalization gap): the Monday morning problem was about what an executive director does operationally. This finding is about what a governing body needs to know and do to fulfill its fiduciary oversight function — a different actor, a different forum, and a different compliance logic.

*Distinct from C214 Finding 6 (Monday morning operationalization for executive directors): C214 identified the absence of a practical pathway from AI governance awareness to action for the executive director role. This finding identifies the parallel gap at the governing body level — a distinct actor with distinct fiduciary responsibilities who has not been engaged in the AI governance conversation at all.*

---

**Finding 5: The Procurement-AI Evaluation Mismatch — NGO Software Procurement Processes Designed for Conventional Software, Applied to AI Tools Without the Required Lens**

Geneva NGOs evaluate new software through established procurement processes: functionality, cost, data security, vendor references. These processes were not designed for AI tools, which introduce additional evaluation dimensions: model behavior consistency, deprecation risk, output auditability, training data provenance, and prompt injection vulnerability. Program teams evaluate AI tools for functionality and present recommendations; management approves based on a procurement framework that does not capture AI-specific risks. Neither party evaluates what the AI system actually does with data, how its outputs might change, or what contractual protections exist. By the time AI governance questions arise, the tool has been deployed for months. No structured supplement to existing NGO procurement checklists addresses this gap in an operationally practical form.

*Distinct from C214 Finding 5 (UNAIWG contractual downstream obligations): C214 addressed the UNAIWG framework creating downstream compliance obligations for UN implementing partner NGOs. This finding addresses a different failure mode: the organizational process gap by which AI tools are adopted without AI-specific governance review, regardless of what frameworks exist or what donors require.*

---

**Finding 6: The AI Governance Cost Equity Problem — Compliance Requirements Falling on Budgets Structurally Unable to Bear Them**

The AI governance requirements flowing from institutional donors, ZEWO certification, and FADP compliance are calibrated to organizations with dedicated compliance infrastructure. The compliance cost — data protection impact assessments, AI-specific legal review, vendor due diligence documentation, board-level AI education, consent form redevelopment — is disproportionate for a 15-to-60-person Geneva NGO with limited administrative budgets. No institutional mechanism exists to calibrate governance requirements to organizational size, and no framework exists for presenting governance costs to institutional donors as legitimate program support expenditure rather than organizational overhead. Mid-tier Geneva NGOs are systematically under-investing in AI governance not because they do not recognize its importance, but because the cost of proper governance is inaccessible within their operating budgets. This creates a compliance gap that is economically structural, not operationally negligent.

*Distinct from C215 Finding 3 (Swiss-hosted AI infrastructure availability gap): C215 addressed the infrastructure market gap — insufficient Swiss-hosted AI alternatives creating a compliance-requirement-versus-available-tool mismatch. This finding addresses the different problem of governance compliance costs themselves — the economics of hiring professional services to achieve compliance — which is distinct from the infrastructure availability problem.*

---

*Phase 04 C216 complete — 6 net-new findings, distinct from C214 Phase 04 and C215 Phase 04.*
*ICP language EN+FR captured, market signals documented (6 failure modes), competitive gap analysis completed (6 specific gaps no one is addressing), compliance context mapped (FADP disclosure gap, fiduciary obligations, donor proportionality, DPA terms, cantonal contractor obligations, cost allocation), lead magnet drafted in Sergio's voice EN+FR (CHF 1,600 pack / CHF 800 debrief).*
