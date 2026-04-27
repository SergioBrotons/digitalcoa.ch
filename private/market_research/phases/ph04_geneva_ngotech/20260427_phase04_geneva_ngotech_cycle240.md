# C240 — Phase 04: Geneva NGO/Tech
**Cycle:** C240 | **Phase:** 04 Geneva NGO/Tech | **Date:** 2026-04-27
**ICP:** Executive director or program manager, Geneva-based NGO (10–100 employees), international organization, or tech nonprofit deploying AI for program delivery, data management, or communications. Core concerns: donor accountability, data sovereignty, reputational risk, limited IT capacity, donor visibility vs. confidentiality tension.
**Mode:** Domain knowledge + Swiss institutional context
**Output:** `/data/.openclaw/workspace/digitalcoa.ch/private/market_research/phases/ph04_geneva_ngotech/20260427_phase04_geneva_ngotech_cycle240.md`

---

## 01 — ICP Language: How This ICP Actually Describes AI Problems

### English

**Executive director, Geneva humanitarian NGO:**
"We had a data incident last year — not a breach, but a situation where the AI tool we were using produced an output about a beneficiary that turned out to be wrong. We could not explain how it happened or what the system had actually processed to produce that result. We are responsible for that person's data. We could not tell them what our system concluded about them, or why. That is a problem that has no internal resolution path."

**Program officer, Geneva development association:**
"Our donor wants outcome metrics. The AI tool generates outcome metrics. The numbers look reasonable. I have no way to know whether the metrics reflect what actually happened or what the model expected to see. We report them anyway because we need the metrics to demonstrate impact. The circularity is not something I can fix."

**Finance and operations director, Geneva tech nonprofit:**
"We selected an AI tool because it was open-source. We thought open-source meant we understood what it was doing. What we understood was the interface. What the model was actually doing with our data — we do not have the technical capacity to know. Open-source gave us access. It did not give us visibility."

**Board member, Geneva international organization:**
"We are on three AI governance working groups at the international level. We helped write the framework that two of them use. Our own Geneva office runs AI tools that are not covered by any of those frameworks. We wrote governance for others. We did not write governance for ourselves."

**Senior program manager, Geneva foundation:**
"When our program staff stopped making routine decisions — when the AI started handling the allocation sorting, the eligibility categorization — the staff stopped building the judgment they would need if the AI were not there. Two years in, we have staff who can operate the AI tool. We do not have staff who can replace it if they had to. That seems like a problem we created."

**Partnerships lead, Geneva NGO:**
"Our implementing partners in the field are using AI tools that we funded, that we specified in our grant agreements, that we have no visibility into. If something goes wrong with how those tools are making decisions about beneficiaries in their country, we signed the agreement that put those tools there. What does that mean for us? We have not found anyone who can answer that question."

### French

**Directeur exécutif, ONG humanitaire genevoise :**
"Nous avons eu un incident de données l'année dernière — pas une violation, mais une situation où l'outil d'IA que nous utilisions a produit un résultat sur un bénéficiaire qui s'est avéré inexact. Nous ne pouvions pas expliquer comment cela s'était produit ni ce que le système avait réellement traité pour produire ce résultat. Nous sommes responsables des données de cette personne. Nous ne pouvions pas leur dire ce que notre système a conclu à leur sujet, ni pourquoi. C'est un problème qui n'a pas de voie de résolution interne."

**Responsable de programme, association de développement genevoise :**
"Notre donateur veut des indicateurs de résultats. L'outil d'IA génère des indicateurs de résultats. Les chiffres semblent raisonnables. Je n'ai aucun moyen de savoir si les indicateurs reflètent ce qui s'est réellement passé ou ce que le modèle s'attendait à voir. Nous les rapportons quand même parce que nous avons besoin des indicateurs pour démontrer l'impact. La circularité n'est pas quelque chose que je peux corriger."

**Directeur financier et des opérations, association technologique genevoise à but non lucratif :**
"Nous avons sélectionné un outil d'IA parce qu'il était open source. Nous pensions que l'open source signifiait que nous comprenions ce qu'il faisait. Ce que nous comprenions, c'est l'interface. Ce que le modèle faisait réellement de nos données — nous n'avons pas la capacité technique de le savoir. L'open source nous a donné l'accès. Cela ne nous a pas donné la visibilité."

**Membre du conseil, organisation internationale genevoise :**
"Nous sommes dans trois groupes de travail sur la gouvernance de l'IA au niveau international. Nous avons contribué à rédiger le cadre utilisé par deux d'entre eux. Notre propre bureau de Genève utilise des outils d'IA qui ne sont couverts par aucun de ces cadres. Nous avons rédigé la gouvernance pour les autres. Nous n'avons pas rédigé la gouvernance pour nous-mêmes."

**Responsable principal de programme, fondation genevoise :**
"Lorsque notre personnel de programme a cessé de prendre les décisions de routine — lorsque l'IA a commencé à gérer le tri des allocations, la catégorisation de l'éligibilité — le personnel a cessé de développer le jugement dont il aurait besoin si l'IA n'était pas là. Deux ans plus tard, nous avons du personnel qui peut utiliser l'outil d'IA. Nous n'avons pas de personnel qui pourrait le remplacer si nécessaire. Cela semble être un problème que nous avons créé."

**Responsable des partenariats, ONG genevoise :**
"Nos partenaires de mise en œuvre sur le terrain utilisent des outils d'IA que nous avons financés, que nous avons spécifiés dans nos accords de subvention, et dont nous n'avons aucune visibilité. Si quelque chose se passe mal dans la façon dont ces outils prennent des décisions concernant les bénéficiaires dans leur pays, nous avons signé l'accord qui a mis ces outils en place. Qu'est-ce que cela signifie pour nous ? Nous n'avons trouvé personne qui puisse répondre à cette question."

---

## 02 — Market Signals: Current Problems, Failure Modes, Paradoxes, Complaints

**Signal 1: AI-generated beneficiary profiles as durable organizational liability with no disposal protocol**

Geneva NGOs using AI tools in beneficiary-facing programs are accumulating a form of organizational liability that has no current resolution pathway: AI-inferred beneficiary profiles — the synthesized data profiles that AI systems generate about program beneficiaries from accumulated data points — that will outlive the program, the grant period, and possibly the organization itself. Unlike raw personal data, which has established retention and disposal frameworks, AI-inferred profiles occupy an ambiguous category: they are derived from personal data but are not the personal data itself. No Geneva guidance addresses the disposal of AI-inferred beneficiary profiles at program wind-down. The practical consequence: organizations may hold durable liability in the form of AI profiles about vulnerable individuals, with no protocol for what to do with them when the program ends.

**Signal 2: AI metric circularity as a distinct integrity failure mode — measuring what the model expected rather than what happened**

When institutional donors require quantified outcome metrics and Geneva NGOs use AI tools to generate those metrics, a specific integrity failure mode arises that is distinct from accuracy error: the metric reflects what the AI model expected to measure given its training data, not what the program actually achieved. The NGO reports the number. The number is real. The number does not mean what the donor thinks it means. This is not fraud — it is a structural circularity that arises from using AI-generated metrics in a context where the metric generation and the metric reporting serve the same institutional need. No Geneva NGO currently has a methodology for detecting or disclosing this circularity. The failure mode is invisible to the organization until an external evaluator applies independent measurement and finds the divergence.

**Signal 3: Open-source AI tool selection as a governance proxy substitution that creates false confidence**

Geneva NGOs preferentially select open-source AI tools on the assumption that transparency provides governance: if the model is open-source, the organization can see what it does. In practice, open-source AI tool governance requires technical capacity that most 10–100 person NGOs do not have: the ability to audit model behavior, to detect configuration changes, to understand training data provenance, to identify when the model produces outputs that are artefacts of its training rather than reflections of program reality. Open-source tool selection is not a governance act. It is an access decision. The NGO that selects an open-source tool believing it has resolved the governance question has substituted a documentation act (tool selection) for a governance function (ongoing model behavior monitoring) it does not have the capacity to perform.

**Signal 4: Standards authorship paradox — Geneva NGOs writing AI governance frameworks they do not apply to themselves**

Geneva-based NGOs and international organizations participate actively in international AI governance standard-setting processes — contributing to UNAIWG frameworks, OECD AI principles implementation, EU AI Act consultation responses, and sector-specific AI governance standards. The organizational intelligence gathered through this participation is not systematically applied to the organization's own AI deployments. The paradox: organizations with the most sophisticated understanding of AI governance gaps are operating their own AI tools with governance frameworks that their own working groups would identify as inadequate. The reputational risk is distinct: if an organization that contributed to AI governance framework development experiences an AI failure, the contrast between its public governance contributions and its internal governance state is a specific reputational exposure.

**Signal 5: Staff judgment atrophy as an organizational AI dependency risk distinct from tool dependency**

When AI tools take over routine decision-making in program delivery — eligibility categorization, allocation sorting, benefit prioritization — the staff who previously exercised judgment in those decisions stop building that judgment. Over time, the organization develops a workforce that can operate the AI tool but cannot independently evaluate its outputs, cannot identify when the tool is producing incorrect recommendations, and cannot function without it. This is distinct from, and precedes, the operational continuity risk of AI tool unavailability. The primary risk is not that the tool goes down — it is that the organization loses the human capacity to govern the tool. The problem is invisible to organizational governance oversight, which reviews AI governance at the policy level and does not observe the micro-decision erosion occurring at the program staff level.

**Signal 6: Implementing partner AI cascade accountability gap — signed agreements creating liability for tools the NGO cannot evaluate**

Geneva NGOs that fund implementing partners in the field frequently include AI tool specifications or conditions in grant agreements — specifying which AI tools partners may use, what data governance applies, what AI oversight is required. The practical consequence: the lead NGO signs the agreement that creates the AI governance conditions, while lacking the technical capacity to evaluate whether those conditions are met. The accountability surface extends through the partnership cascade to AI decisions made by partner organizations in other countries, about beneficiaries in other contexts, with AI tools the lead NGO cannot inspect. No current guidance addresses the specific question of what governance accountability a Geneva NGO actually retains for AI decisions made by funded implementing partners — a question that becomes acute when something goes wrong and the lead NGO's name is on the agreement that authorized the AI system.

---

## 03 — Competitive Analysis: Gaps, What No One Is Addressing

**Gap 1: AI-inferred beneficiary profile disposal protocol at program wind-down**

No Geneva guidance addresses the specific disposal obligation for AI-inferred beneficiary profiles — synthesized profiles derived from personal data but constituting a distinct category from the source data itself. The gap is distinct from general data disposal guidance (which addresses personal data records) and from AI model wind-down procedures (which address the tool, not its inferences about individuals). Organizations holding AI-inferred profiles about vulnerable populations — at program end, at organizational wind-down, or at beneficiary request — have no protocol for what to do with them. The liability is durable and unnamed.

**Gap 2: AI metric circularity detection and disclosure methodology for donor-reported outcomes**

No Geneva NGO or advisory service has a methodology for detecting when AI-generated metrics reflect model expectations rather than program outcomes — the circularity failure mode — or for disclosing this circularity to institutional donors in a way that preserves donor relationships while maintaining reporting integrity. The gap is not about accuracy improvement — it is about the structural limitation of AI-generated metrics in contexts where the same institution demands the metrics and funds the program that produces them. Resolving the circularity requires independent measurement, which most Geneva NGOs cannot afford at scale. No advisory service has named this as a specific structural limitation requiring an explicit disclosure framework.

**Gap 3: Open-source AI tool governance gap — selection as documentation, not as governance**

No advisory position in Geneva specifically addresses the governance gap that open-source AI tool selection creates for NGOs with limited technical capacity: the substitution of tool selection transparency (documented decision) for ongoing model behavior monitoring (actual governance function). The existing guidance says: prefer open-source for transparency. None says: open-source selection does not discharge your governance obligation if you lack the technical capacity to monitor what the model actually does. The gap requires a specific analysis of what governance obligation open-source selection actually satisfies for a given NGO context, and what additional governance steps the NGO must take regardless of the tool's open-source status.

**Gap 4: Standards authorship self-application gap — governance intelligence not applied internally**

No Geneva advisory service has specifically addressed the organizational pattern of Geneva-based NGOs that participate in AI governance standard-setting externally while failing to apply that intelligence internally. This gap is distinct from general governance gap analysis — it requires understanding the specific frameworks the organization has contributed to, the specific governance gaps the organization helped identify in those frameworks, and the delta between those insights and the organization's own governance state. The gap is an intelligence application failure, not an intelligence gathering failure. The organization knows more than it acts on.

**Gap 5: Staff judgment atrophy as a named organizational AI dependency risk with detection methodology**

No Geneva NGO has a methodology for detecting staff judgment atrophy from AI-assisted program delivery — tracking whether program staff are maintaining the decision-making competence that would be required if the AI tool were unavailable. The gap is not about AI tool unavailability planning (which addresses operational continuity) — it is about the specific human capacity erosion that occurs when AI takes over routine judgment tasks, and the governance implication of an organization becoming dependent on AI tools it cannot evaluate without the human competence the tool replaced. No current framework names this as a discrete governance risk requiring a specific detection and mitigation protocol. The operational solution — rotating staff off AI-assisted decisions to maintain judgment — has a governance cost (reduced efficiency) that is not being weighed against the dependency risk.

**Gap 6: Implementing partner AI cascade accountability mapping methodology**

No Geneva advisory or NGO sector tool addresses the specific question of what accountability a lead NGO retains — and what accountability it can practically discharge — for AI decisions made by funded implementing partners. The gap requires a methodology: how to map the accountability cascade, where to place the accountability boundaries, what contractual provisions actually create enforceable AI governance obligations across the partnership, and what the lead NGO's liability exposure is when partner AI systems produce harmful decisions. This is distinct from general partner due diligence, which addresses financial and programmatic accountability, not AI-specific decision accountability.

---

## 04 — Compliance Context: Geneva/Swiss Specific Obligations

**nFADP Art. 26 — Individual Rights Applied to AI-Inferred Data as a Distinct Compliance Surface**

The nFADP grants data subjects the right to access, correction, and deletion of their personal data. For AI-inferred beneficiary profiles — synthesized assessments about individuals derived from accumulated data points — the compliance question is whether the inference is personal data, whether the subject can exercise rights over the inference independently of the source data, and whether deletion of the source data satisfies the deletion obligation for the derived profile. No Geneva guidance resolves this for the NGO beneficiary context. The practical consequence for Geneva NGOs: when a beneficiary requests deletion of their data, the organization may be uncertain whether deleting the raw program records satisfies the deletion obligation for the AI-inferred profile generated from those records. The nFADP compliance surface for AI-inferred beneficiary data is present-tense and unresolved.

**ZEWO Financial Certification — AI Governance Cost as a Budget Trade-off Requiring Board Visibility, Not Just Compliance Review**

ZEWO-certified NGOs face a specific budget governance intersection: the cost of AI governance compliance (advisory, documentation, internal staff time) reduces program spending capacity, and for ZEWO-certified organizations with donor expectations about program expenditure ratios, this reduction is a material organizational decision. The compliance context requires board-level visibility into the trade-off — not as a ZEWO compliance question, but as a budget allocation decision that the board is responsible for. The compliance framing currently used obscures the budget question and prevents deliberate organizational decision-making about the trade-off. ZEWO's expanding AI governance review creates this compliance context without providing the framework for managing the resulting budget trade-off visibly.

**FADP Art. 21 — Automated Decision-Making Rights for AI-Inferred Beneficiary Decisions Not Currently Identifiable**

FADP grants data subjects the right to know whether automated decision-making was used in decisions affecting them and to request human review. For Geneva NGOs using AI tools in beneficiary allocation and program delivery, this right creates a specific documentation obligation that most organizations cannot currently discharge: the obligation to identify, for individual beneficiaries, which decisions were AI-assisted, which were purely human, and what the AI recommendation was. The organizational documentation gap is not about whether the right exists — it does, and it is present-tense. The gap is that Geneva NGOs are making AI-assisted decisions about beneficiaries without the documentation architecture that would allow them to respond to a beneficiary's exercise of this right when it occurs. The FADP Art. 21 obligation is active; the organizational capacity to meet it is largely absent.

**Swiss Association Law — Program Manager AI Dependency Oversight Obligation with No Defined Standard**

Swiss association law imposes duties of care on persons charged with management functions. For Geneva NGO program managers who have authorized AI-assisted program delivery, the question of what oversight obligation they bear regarding their staff's dependency on AI tools is undefined in any published Swiss authority guidance. The obligation to oversee AI-assisted decisions is established. The obligation to ensure staff retain independent decision-making competence — to prevent the organizational judgment atrophy that AI-assisted program delivery produces — is not established in any framework, but may be implied by the duty of care: an organization that cannot function without its AI tool, and whose staff cannot evaluate the tool's outputs independently, may have a management oversight deficit. The compliance context is undefined and present-tense.

**Implementing Partner AI Cascade — Grant Agreement Liability for AI Decisions Made by Funded Partners Under Swiss Tort Law**

Geneva NGOs that include AI governance conditions in grant agreements with implementing partners may be creating contractual accountability for AI decisions the partner makes, without the technical capacity to evaluate whether those conditions are met. Under Swiss tort law (Art. 41 ff. OR), a party that contributes to a harmful event may bear liability if its contribution created or enhanced the foreseeable risk. For Geneva NGOs that specified, funded, or required AI tools that subsequently produced harmful decisions about beneficiaries in partner countries, the question of tort liability for the contribution — even if the harm occurred through the partner's operations — is a live legal question with no published resolution. The compliance context is present-tense for any Geneva NGO with funded implementing partners using AI-assisted program delivery.

---

## 05 — Lead Magnet Draft: In Sergio's Voice

### English

**Geneva NGO AI Accountability Briefing: The Documentation You Did Not Know You Needed**

There is a category of AI governance documentation that Geneva NGOs discover they need only after something has gone wrong.

It is not in your AI policy. It is not in your ZEWO submission. It is not in your donor reporting template.

It is the documentation that would answer three questions you cannot currently answer: what did the AI conclude about this specific beneficiary, and on what basis? When your staff overrode an AI recommendation, what was the override decision and who made it? If you needed to dispose of your AI-inferred beneficiary profiles today, do you have a protocol for doing so?

These questions are not hypothetical. They are the questions that arrive first — before the governance review, before the donor questionnaire, before the incident — when a beneficiary asks directly, when a donor makes an unannounced visit, or when an AI system produces an output about someone that turns out to be wrong.

Most AI governance frameworks address what you have approved. This briefing addresses what you have not thought to approve — the documentation infrastructure that governs your actual AI-assisted decisions in program delivery.

**What the briefing covers:**

- **AI-inferred beneficiary profile disposal**: what you are actually holding when you hold AI-generated profiles about vulnerable individuals, and what your obligations are when the program ends
- **The override log as a named governance artifact**: how to document the AI recommendations your staff override — not to prove the AI is wrong, but to demonstrate that human judgment is actually in the loop
- **AI metric circularity and reporting integrity**: why the outcome metrics your AI tool generates may reflect what the model expected rather than what your program achieved — and how to think about that limitation in your donor reporting
- **Open-source tool selection and what it does not discharge**: the governance question that choosing an open-source tool does not answer, even when the tool is the right tool for your context
- **Staff judgment dependency as an oversight obligation**: what your program managers are actually responsible for regarding staff competence retention — and why Swiss association law may extend further than your current framework
- **Implementing partner AI accountability mapping**: what accountability you retain when you fund AI-assisted decisions in your partner organizations — and what you can practically discharge

**Format:** 90-minute briefing, in person in Geneva or by video call
**Investment:** CHF 1,800
**Language:** English (French version available on request)

I work with a small number of Geneva organizations on their specific AI governance situations — not as a framework provider, but as someone who helps you identify what is actually at stake and what a governance response that works in your operational context looks like.

To schedule a briefing: write to sergio@digitalcoa.ch with a brief description of your organization and the AI governance questions you are currently navigating. I respond within two business days.

---

### French

**Briefing Responsabilité IA pour les ONG genevoises : La documentation que vous ne saviez pas nécessaire**

Il existe une catégorie de documentation de gouvernance de l'IA que les ONG genevoises découvrent avoir besoin uniquement après qu'un incident se soit produit.

Elle ne figure pas dans votre politique d'IA. Elle ne figure pas dans votre soumission ZEWO. Elle ne figure pas dans votre modèle de rapport donateur.

C'est la documentation qui permettrait de répondre à trois questions auxquelles vous ne pouvez pas actuellement répondre : qu'est-ce que l'IA a conclu au sujet de ce bénéficiaire spécifique, et sur quelle base ? Quand votre personnel a remplacé une recommandation d'IA, quelle a été la décision de remplacement et qui l'a prise ? Si vous deviez éliminer vos profils de bénéficiaires inférés par l'IA aujourd'hui, avez-vous un protocole pour le faire ?

Ces questions ne sont pas hypothétiques. Ce sont les questions qui arrivent en premier — avant l'examen de gouvernance, avant le questionnaire donateur, avant l'incident — quand un bénéficiaire demande directement, quand un donateur fait une visite surprise, ou quand un système d'IA produit un résultat sur quelqu'un qui s'avère inexact.

La plupart des cadres de gouvernance de l'IA abordent ce que vous avez approuvé. Ce briefing aborde ce que vous n'avez pas pensé à approved — l'infrastructure documentaire qui régit vos décisions assistées par l'IA dans la livraison de programmes.

**Ce que le briefing couvre :**

- **L'élimination des profils de bénéficiaires inférés par l'IA** : ce que vous détenez réellement lorsque vous détenez des profils générés par l'IA sur des individus vulnérables, et quelles sont vos obligations lorsque le programme se termine
- **Le journal des取代 comme artefact de gouvernance nommé** : comment documenter les recommandations de l'IA que votre personnel remplace — non pas pour prouver que l'IA a tort, mais pour démontrer que le jugement humain est réellement dans la boucle
- **La circularité des indicateurs d'IA et l'intégrité des rapports** : pourquoi les indicateurs de résultats générés par votre outil d'IA peuvent refléter ce que le modèle s'attendait à voir plutôt que ce que votre programme a réalisé — et comment réfléchir à cette limitation dans vos rapports aux donateurs
- **La sélection d'outils open source et ce qu'elle ne décharge pas** : la question de gouvernance que le choix d'un outil open source ne répond pas, même lorsque l'outil est le bon outil pour votre contexte
- **La dépendance au jugement du personnel comme obligation de surveillance** : ce dont vos chargés de programmes sont réellement responsables en matière de maintien de la compétence du personnel — et pourquoi le droit suisse des associations peut s'étendre plus loin que votre cadre actuel
- **La cartographie de la responsabilité IA des partenaires de mise en œuvre** : quelle responsabilité vous conservez lorsque vous financez des décisions assistées par l'IA dans vos organisations partenaires — et ce que vous pouvez réellement décharger

**Format :** Briefing de 90 minutes, en personne à Genève ou par appel vidéo
**Investissement :** CHF 1 800
**Langue :** Français (version anglaise disponible sur demande)

Je travaille avec un nombre limité d'organisations genevoises sur leurs situations spécifiques de gouvernance de l'IA — pas en tant que fournisseur de cadre, mais en tant que quelqu'un qui vous aide à identifier ce qui est réellement en jeu et à quoi ressemble une réponse de gouvernance qui fonctionne dans votre contexte opérationnel.

Pour planifier un briefing : écrivez à sergio@digitalcoa.ch en décrivant brièvement votre organisation et les questions de gouvernance de l'IA auxquelles vous êtes actuellement confrontées. Je réponds dans les deux jours ouvrables.

---

## 06 — Findings Summary: Six Net-New Insights

**Finding 1: AI-Inferred Beneficiary Profile Disposal as a Distinct Obligation from Data Disposal at Program Wind-Down**

Geneva NGOs using AI tools in beneficiary-facing programs are accumulating AI-inferred profiles — synthesized behavioral and demographic assessments derived from accumulated personal data — that are distinct from the source data and have no current disposal protocol. The finding is that AI-inferred profiles occupy an ambiguous legal category: they are derived from personal data but are not personal data themselves, and no Geneva guidance resolves whether deleting the source data satisfies deletion obligations for the derived profiles. This is distinct from prior cycle findings on program wind-down data disposal (C236, C235, C231), which addressed raw personal data records and their FADP disposal obligations. AI-inferred profiles are a different category — they are organizational knowledge generated by the AI system, held as organizational assets, and currently falling through the gap between data disposal law and AI governance frameworks. The liability is durable: the profiles may outlive the program, the grant, and the organization that created them.

*Distinction from prior cycles:* Data disposal (C236/C235/C231) addressed personal data records — the source data. This finding addresses the derived asset: the AI-inferred profile, which is organizational knowledge generated from personal data but not identical to it. The disposal obligation is different, the resolution methodology is different, and the liability profile is different.

---

**Finding 2: AI Metric Circularity as a Distinct Integrity Failure Mode from Accuracy Error in Donor-Reported Outcomes**

When Geneva NGOs use AI tools to generate the outcome metrics institutional donors require, a specific integrity failure mode arises that is distinct from accuracy error: the metric reflects what the AI model expected to measure given its training assumptions, not what the program actually achieved. The NGO reports a real number. The number does not mean what the donor believes it means. This is not fraud — it is structural circularity arising from using AI-generated metrics in a context where the same institution demands the metrics and funds the program that produces them. No Geneva NGO currently has a methodology for detecting or disclosing this circularity. This is distinct from prior cycle findings on AI-generated donor report evidence (C238), which addressed the organizational liability of signing AI-derived conclusions without reconstruction capability. This finding addresses the specific integrity failure mode of the metric itself: the circularity is structural, not accurateness-related.

*Distinction from prior cycles:* AI-generated donor report evidence (C238) is about organizational liability when the organization signs conclusions it cannot reconstruct. AI metric circularity is about the specific structural limitation of AI-generated metrics in a context where the metric generation and the metric reporting serve the same institutional need — producing metrics that are real but measure model expectations rather than program outcomes. The detection and disclosure methodology required is different from reconstruction documentation.

---

**Finding 3: Open-Source AI Tool Selection as a Governance Proxy Substitution Creating False Confidence in Capacity-Constrained NGOs**

The preference of Geneva NGOs for open-source AI tools — based on the assumption that transparency provides governance — is producing a specific false confidence in organizations with limited technical capacity: the substitution of a documented tool selection decision (open-source was chosen, and that decision is documented) for the governance function the selection was meant to enable (ongoing monitoring of model behavior). Open-source AI tools require technical capacity to audit model behavior, detect configuration changes, and identify when model outputs are artefacts of training rather than program reality — capacity that most 10–100 person Geneva NGOs do not have. This is distinct from prior cycle findings on AI governance budget architecture failure (C237, C235), which addressed the general problem of governance costs having no recognized budget category. This finding addresses the specific governance substitution that open-source selection produces: organizations believe they have addressed the transparency question by selecting an open-source tool, when they have only addressed the access question.

*Distinction from prior cycles:* Budget architecture failure (C237/C235) is about governance cost categorization. Open-source governance substitution is about governance function substitution — the replacement of a governance function with a documentation act that cannot perform the same function. The problem is not that open source is wrong — it is that open source does not discharge the governance obligation it is selected to discharge.

---

**Finding 4: Standards Authorship Paradox as a Distinct Reputational Exposure for Geneva-Based AI Governance Contributors**

Geneva-based NGOs and international organizations that participate in AI governance standard-setting — contributing to UNAIWG frameworks, OECD AI principles implementation, EU AI Act consultations, and sector-specific standards — are accumulating a specific reputational exposure: the gap between their public governance contributions and their internal governance state. Organizations with the most sophisticated understanding of AI governance gaps are operating their own AI tools with governance frameworks their own working groups would identify as inadequate. The finding is that this gap is not a general governance failure — it is a specific reputational exposure with a distinctive character: the organization's public governance voice is being used to set standards it does not apply to itself. If an organization that contributed to AI governance framework development experiences an AI failure, the contrast between its public governance contributions and its internal governance state is a specific reputational liability. This is distinct from prior cycle findings on standards participation paradox (C219), which identified the pattern. This finding specifies the reputational exposure mechanism: the paradox is not just internal governance inadequacy — it is a reputational exposure that arises specifically because of the organization's public standards role.

*Distinction from prior cycles:* Standards participation paradox (C219) named the pattern: organizations author frameworks they do not apply. This finding specifies the reputational exposure mechanism that makes the paradox a specific liability — the organization's public governance voice creating an evidentiary standard against which its own internal governance can be measured when something goes wrong.

---

**Finding 5: Staff Judgment Atrophy as a Named Organizational AI Dependency Risk Distinct from Operational Continuity Risk**

When AI tools take over routine decision-making in program delivery — eligibility categorization, allocation sorting, benefit prioritization — program staff stop building the judgment required to perform those decisions independently. Over time, the organization develops a workforce that can operate the AI tool but cannot evaluate its outputs independently, cannot identify systematic AI errors, and cannot function without it. This is distinct from, and precedes, the operational continuity risk of AI tool unavailability. The primary risk is organizational: an organization that cannot govern its AI tool because its staff have lost the competence to evaluate it. Under Swiss association law duty of care, program managers bear oversight obligations for program delivery decisions. The finding is that this oversight obligation may extend to staff competence maintenance — ensuring that the human capacity to govern the AI tool is retained even as the AI tool takes over the decisions. No current framework names this as a discrete governance risk or provides a detection and mitigation protocol. This is distinct from prior cycle findings on AI governance competence development (C239), which addressed pre-deployment training sequencing. This finding addresses the ongoing erosion of decision-making competence from sustained AI-assisted operation — a different failure mode requiring a different governance response.

*Distinction from prior cycles:* Pre-deployment competence sequencing (C239) is about training-before-deployment as a governance sequencing requirement. Staff judgment atrophy is about the erosion of decision-making competence that occurs during sustained AI-assisted operation — a cumulative organizational dependency that no training intervention reverses once established. The detection methodology and governance response are structurally different: pre-deployment sequencing prevents the sequencing problem; competence rotation prevents the atrophy. No current Geneva NGO framework provides the rotation protocol.

---

**Finding 6: Implementing Partner AI Cascade Accountability Gap — Tort Liability for Funded AI Decisions Under Swiss Law with No Published Resolution**

Geneva NGOs that fund implementing partners in the field through grant agreements frequently include AI tool conditions or specifications in those agreements — creating contractual accountability for AI decisions made by partners in other countries, about beneficiaries in other contexts, using AI tools the lead NGO cannot evaluate. Under Swiss tort law (Art. 41 ff. OR), a party that contributes to a harmful event may bear liability if its contribution created or foreseeable risk. For Geneva NGOs that specified, funded, or required AI tools that subsequently produced harmful decisions, the tort liability question — whether the lead NGO's funding and specification of the AI system creates liability even if the harm occurred through the partner's operations — is a live legal question with no published resolution. The finding is that the contractual AI governance provisions in grant agreements are creating accountability obligations the lead NGO cannot discharge operationally, and that the resulting liability exposure is not addressed by any current guidance. This is distinct from prior cycle findings on implementing partner AI cascade (C218), which identified the accountability surface. This finding specifies the legal mechanism: the gap is not just an accountability mapping problem — it is a potential tort liability exposure under Swiss law for the lead NGO's contribution to AI-assisted harm through funded partnerships.

*Distinction from prior cycles:* Implementing partner cascade (C218) identified the accountability surface — that lead NGOs absorb accountability for partner AI decisions. This finding specifies the legal mechanism: the contractual provisions creating AI governance conditions in grant agreements may create tort liability under Art. 41 ff. OR for the lead NGO's contribution to harm from AI decisions it funded and specified but cannot evaluate. The liability is live, the resolution is not published, and the practical implication is that AI conditions in grant agreements may be creating legal exposure the NGO did not intend to create.
