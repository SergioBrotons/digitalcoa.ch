# C239 — Phase 04: Geneva NGO/Tech
**Cycle:** C239 | **Phase:** 04 Geneva NGO/Tech | **Date:** 2026-04-27
**ICP:** Executive director or program manager, Geneva-based NGO (10–100 employees), international organization, or tech nonprofit deploying AI for program delivery, data management, or communications. Core concerns: donor accountability, data sovereignty, reputational risk, limited IT capacity, donor visibility vs. confidentiality tension.
**Mode:** Domain knowledge + Swiss institutional context
**Output:** `/data/.openclaw/workspace/digitalcoa.ch/private/market_research/phases/ph04_geneva_ngotech/20260427_phase04_geneva_ngotech_cycle239.md`

---

## 01 — ICP Language: How This ICP Actually Describes AI Problems

### English

**Executive director, Geneva international organization:**
"We signed a grant agreement that includes an AI risk management condition. The condition references a framework designed for organizations with full-time compliance teams. We are ten people. The framework tells us what we should have. It does not tell us what to do when what you should have is not what you can have at your scale."

**Program manager, Geneva humanitarian NGO:**
"The AI tool works well in the first months. Then it starts making recommendations that don't fit our beneficiary population the same way. The tool hasn't changed — the model hasn't been updated — but the recommendations feel less accurate. We don't have a way to know if it's the model drifting or our beneficiaries changing. And we don't have the internal capacity to check."

**Operations lead, Geneva tech nonprofit:**
"We had an AI-assisted beneficiary targeting system running for eighteen months before anyone asked whether the model had been retrained since we deployed it. It hadn't. We did not know we were supposed to track that. Nobody had told us."

**Finance director, Geneva development NGO:**
"ZEWO certification involves AI governance now. We have a folder with our AI documents. When the reviewer comes, we show them the folder. Whether what is in the folder actually means our governance is adequate — we cannot answer that question. They may not be able to either."

**Senior program officer:**
"We have beneficiaries who have asked us what AI decision was made about them. The question is not hypothetical — it has come up. We cannot explain it because we do not have a record of what the AI recommended for them specifically, and what our staff decided based on that recommendation."

**Board member, Geneva association:**
"Our program staff use AI tools in their work. The tools are not on any approved list — there was no procurement process, no data protection review. The staff are using them because the tools are useful and because they were not told not to. That is how governance happens in practice here. It is not how governance is supposed to happen."

### French

**Directeur exécutif, organisation internationale genevoise :**
"Nous avons signé un accord de subvention qui comprend une condition de gestion des risques IA. La condition fait référence à un cadre conçu pour des organisations avec des équipes de conformité à temps plein. Nous sommes dix personnes. Le cadre nous dit ce que nous devrions avoir. Il ne nous dit pas quoi faire quand ce que vous devriez avoir n'est pas ce que vous pouvez avoir à votre échelle."

**Responsable de programme, ONG humanitaire genevoise :**
"L'outil d'IA fonctionne bien dans les premiers mois. Ensuite, il commence à faire des recommandations qui ne correspondent plus aussi bien à notre population cible. L'outil n'a pas changé — le modèle n'a pas été mis à jour — mais les recommandations semblent moins précises. Nous n'avons pas de moyen de savoir si c'est le modèle qui dérive ou nos bénéficiaires qui changent. Et nous n'avons pas la capacité interne pour vérifier."

**Responsable des opérations, association technologique genevoise à but non lucratif :**
"Nous avons eu un système de ciblage des bénéficiaires assistée par l'IA fonctionnant pendant dix-huit mois avant que quelqu'un ne demande si le modèle avait été réentraîné depuis notre déploiement. Il ne l'avait pas été. Nous ne savions pas que nous étions censés suivre cela. Personne ne nous l'avait dit."

**Directeur financier, ONG de développement genevoise :**
"La certification ZEWO implique maintenant la gouvernance de l'IA. Nous avons un dossier avec nos documents IA. Quand le réviseur vient, nous leur montrons le dossier. Si ce qui est dans le dossier signifie réellement que notre gouvernance est adéquate — nous ne pouvons pas répondre à cette question. Ils pourraient ne pas pouvoir le faire non plus."

**Responsable principal de programme :**
"Nous avons des bénéficiaires qui nous ont demandé quelle décision d'IA a été prise à leur sujet. La question n'est pas hypothétique — elle s'est présentée. Nous ne pouvons pas l'expliquer parce que nous n'avons pas d'enregistrement de ce que l'IA a recommandé pour eux spécifiquement, et de ce que notre personnel a décidé sur la base de cette recommandation."

**Membre du conseil, association genevoise :**
"Notre personnel de programme utilise des outils d'IA dans son travail. Les outils ne sont sur aucune liste approuvée — il n'y a pas eu de processus d'approvisionnement, pas de révision de protection des données. Le personnel les utilise parce que les outils sont utiles et parce qu'on ne leur a pas dit de ne pas les utiliser. C'est ainsi que la gouvernance se passe en pratique ici. Ce n'est pas ainsi que la gouvernance est censée se passer."

---

## 02 — Market Signals: Current Problems, Failure Modes, Paradoxes, Complaints

**Signal 1: AI maintenance debt as a distinct category from AI governance debt — model drift invisible to organizations without tracking methodology**

Geneva NGOs deploying AI tools are accumulating a form of organizational liability that is structurally different from the governance documentation debt identified in prior cycles. AI maintenance debt refers to the undocumented accumulation of model state changes: when was the model last retrained? Has the tool provider updated the underlying model since deployment? Has the beneficiary population or program context changed enough that the model's original training assumptions no longer hold? This drift is invisible to organizations that have no tracking methodology. The problem is not that organizations lack AI governance policies — it is that they lack AI maintenance tracking. The model they are making decisions with may not be the model they deployed. No current guidance to Geneva NGOs addresses this as a discrete obligation.

**Signal 2: Program planning cycle / AI model validity window structural mismatch creating time-bounded governance blind spot**

Geneva NGO program cycles operate on annual or multi-year planning horizons: annual program cycles, multi-year grant periods, strategic planning processes measured in years. AI model validity windows operate on different timescales — the period during which a deployed model remains appropriately accurate for the population it was trained on may be six to eighteen months, depending on the model type and deployment context. The structural mismatch means that a model deployed at the start of a program cycle may have drifted significantly before the program cycle concludes — without any organizational awareness that the drift has occurred. The decisions made in the later program period are being made under an AI model whose accuracy assumptions may no longer hold. No Geneva NGO AI governance framework addresses this temporal mismatch as a discrete governance event requiring a specific protocol.

**Signal 3: ZEWO certification cost absorption as an organizational budget decision disguised as a compliance question**

When ZEWO certification involves AI governance review, the resulting compliance costs — advisory fees, documentation production, internal staff time — are absorbed into the organizational budget. For a Geneva NGO with constrained overhead ratios and donor expectations about program spending, this absorption has a real consequence: every franc spent on AI governance compliance is a franc not spent on program delivery. ZEWO compliance is presented as a binary — you are certified or you are not — but the compliance cost is a continuous organizational budget decision. The way NGOs are managing this tension: absorbing governance costs quietly, without board visibility, without mapping the trade-off. The governance cost absorption is creating an invisible strain on program budgets that is not surfaced as a governance or budget problem — it is absorbed as overhead and goes unquestioned.

**Signal 4: FADP data minimization as a structural conflict with AI tool training and donor impact measurement requirements**

The FADP's data minimization principle (Art. 5, purpose limitation and data minimization) requires that personal data collection be limited to what is necessary for the declared purpose. For Geneva NGOs deploying AI tools in beneficiary-facing programs, this creates a specific structural conflict: AI tools — including tools used for beneficiary targeting, program outcome measurement, and impact assessment — may require or benefit from broader data collection than FADP data minimization permits. Simultaneously, institutional donors increasingly require impact measurement data that requires collecting more beneficiary information than is strictly necessary for program delivery. The result is a genuine legal conflict: what the donor wants for impact measurement may exceed what FADP permits for the same program. No Geneva guidance addresses this conflict at the program design level — where it could be resolved before the AI tool is deployed and the data collection begins.

**Signal 5: Geneva NGO AI governance advisory supply gap as a specific market failure not addressed by any current position**

The advisory market for Geneva NGO AI governance has a specific structural gap: no current advisor occupies the intersection of Swiss regulatory context, international organization accountability frameworks, limited IT capacity constraints, donor accountability requirements, and the specific organizational scale of 10–100 person NGOs. General AI governance advisors lack the Swiss and Geneva-specific regulatory context. Swiss compliance advisors lack the NGO and international organization context. International humanitarian advisors lack the Swiss domestic regulatory integration. The intersection is unoccupied. Organizations that need this specific intersection have no one to go to. The gap is a market failure, not a knowledge gap — the demand exists, the supply does not.

**Signal 6: AI competence development for program staff structurally trailing AI deployment, creating operational governance exposure at the layer where most decisions actually happen**

When Geneva NGOs deploy AI tools for program delivery, the deployment typically precedes adequate staff training on AI limitations, AI output interpretation, and appropriate AI use in program contexts. The organizational sequence is: tool deployment, then — at some later point — a training session or internal guidance document. The gap between deployment and competence development creates a period of operational exposure: staff making decisions with AI tools they have not been trained to use critically. This is not a training gap — it is a governance sequencing problem. The exposure is greatest at the program staff level, where most AI-assisted decisions actually happen, and where the executive director or board are not looking. No current Geneva NGO AI governance framework addresses this sequencing problem as a discrete governance event requiring a specific protocol before deployment.

---

## 03 — Competitive Analysis: Gaps, What No One Is Addressing

**Gap 1: AI maintenance tracking as a discrete organizational obligation with no corresponding methodology**

No current Geneva NGO AI governance framework or advisory service addresses AI maintenance tracking — the systematic recording of model updates, retraining events, configuration changes, and population drift detection — as a discrete organizational obligation. The existing guidance addresses governance policy, documentation, and review processes. None address the maintenance layer: what to track, how to track it, when to reassess, what triggers a reassessment. This gap is distinct from the governance documentation gap identified in prior cycles. Documentation debt is about producing documents that demonstrate governance exists. Maintenance debt is about tracking the technical state of the AI system over time — a different obligation, requiring a different methodology.

**Gap 2: Program planning / AI model validity temporal mismatch protocol**

No Geneva NGO has a protocol for managing the temporal mismatch between program planning horizons (annual or multi-year) and AI model validity windows (six to eighteen months). No advisory service provides one. The practical consequence: organizations are making decisions under AI models whose accuracy has degraded over the program cycle without organizational awareness. The gap is not a training gap — it requires a specific reassessment protocol attached to program planning cycles.

**Gap 3: ZEWO compliance cost as a named budget trade-off with no organizational visibility**

No Geneva NGO is treating AI governance compliance costs as a named budget decision with board-level visibility. The ZEWO compliance cost is absorbed as overhead, invisible as a governance trade-off. No advisory framework addresses how NGOs should evaluate and communicate this trade-off — treating it as a compliance question rather than a budget allocation decision. The failure mode: governance compliance reduces program spending without organizational acknowledgment of the trade-off.

**Gap 4: FADP data minimization conflict resolution at program design level before AI deployment**

No Geneva guidance addresses the specific structural conflict between FADP data minimization requirements and the data requirements of AI tools deployed in beneficiary programs and donor impact measurement. The conflict arises at program design level — before the AI tool is chosen and before the data collection begins — and is more efficiently resolved at that stage than after deployment. No current framework provides a methodology for resolving this conflict in program design.

**Gap 5: The intersection advisory market gap — Swiss regulatory + international org + NGO scale**

No current advisory position occupies the specific intersection required by Geneva NGOs: Swiss regulatory context (FADP, cantonal data protection, Swiss association law), international organization accountability (donor frameworks, institutional donor conditions), limited IT capacity constraints (solutions must be implementable with part-time IT), and the organizational scale of 10–100 person operations. The gap is not fillable by general AI governance advisors (lack Swiss context) or by Swiss compliance advisors (lack NGO/international org context). The intersection requires a specific combination that does not currently exist in the Geneva advisory market.

**Gap 6: Pre-deployment AI competence development protocol for program staff**

No Geneva NGO has a pre-deployment competence development protocol — a structured process for ensuring that program staff who will use AI tools in their daily work have adequate understanding of AI limitations, appropriate use cases, and output interpretation before the tool goes live. The gap is not about training content — it is about the sequencing: governance frameworks say deploy AI, then train staff. The structural exposure requires reversing the sequence. No current framework provides a methodology for doing so.

---

## 04 — Compliance Context: Geneva/Swiss Specific Obligations

**nFADP Art. 5 — Data Minimization as a Structural Constraint on AI Tool Deployment in Beneficiary Programs**

The FADP's data minimization principle requires that personal data collection be proportionate to declared processing purposes. For Geneva NGOs deploying AI tools in program delivery, this creates a specific compliance context that is not currently integrated into program design: AI tools with beneficiary-facing applications may require data inputs that exceed what FADP minimizes to. The conflict becomes acute when institutional donor impact measurement requirements add further data collection obligations that compound the AI tool's data requirements. The nFADP compliance obligation exists at program design stage — before the AI tool is chosen — but is not being addressed at that stage. Geneva NGOs are discovering this conflict after deployment, when the AI tool and the data collection are already in place.

**ZEWO Certification — AI Governance Review Creating Compliance Cost Absorption as Organizational Budget Pressure**

ZEWO's expanding AI governance review creates a compliance obligation with a specific financial consequence for certified organizations: the cost of AI governance compliance — advisory fees, documentation production, internal staff time — is absorbed within the organization's overhead budget, reducing program spending capacity. For ZEWO-certified NGOs with donor expectations about program expenditure ratios, this absorption is a material budget decision disguised as a compliance question. The compliance context is present-tense and has budget implications that are not being surfaced or managed as organizational decisions.

**FADP Art. 15 — Beneficiary Right to Know AI-Assisted Decisions Made About Them**

FADP grants data subjects the right to know whether automated decision-making was used in decisions affecting them and the logic involved. For Geneva NGOs with AI-assisted beneficiary decisions — targeting, allocation, outcome prediction — this right creates a specific documentation obligation: organizations must be able to identify, for individual beneficiaries, what AI-assisted decisions were made and on what basis. This obligation is not currently addressed in most Geneva NGO AI governance frameworks. The practical gap: when a beneficiary asks whether AI was used in their program assessment, the NGO cannot answer because it has no record linking the AI recommendation to the individual decision. The FADP right is alive and present-tense; the organizational capacity to respond to it does not exist.

**Swiss Association Law Art. 75 ZGB — Program Manager Personal Accountability for AI-Assisted Decisions with No Adequacy Definition**

Swiss association law imposes personal duties of care on persons charged with management functions. For Geneva NGO program managers deploying AI in program delivery, this creates a personal liability exposure with an undefined adequacy boundary: the obligation to oversee AI-assisted decisions is real, but the standard of review, the documentation required to demonstrate adequate oversight, and the protocol for discharging the obligation are unspecified in any published Swiss authority guidance. The compliance context is present-tense and structural. The program manager bears personal accountability for AI decisions they cannot operationally review in detail — a structural exposure that current Swiss association law and Geneva NGO governance frameworks do not resolve.

**Cantonal Data Protection (CCPD) — Jurisdictional Uncertainty for AI Processing Geneva Beneficiary Data on Non-Swiss Infrastructure**

The Geneva Cantonal Data Protection Authority (CCPD) has jurisdiction over personal data processing in the canton. For Geneva NGOs whose AI tools process beneficiary data on servers outside Switzerland — a common configuration for standard SaaS AI tools — the jurisdictional question is unresolved: does CCPD jurisdiction extend to AI inferences generated about Geneva residents on non-Swiss infrastructure? The practical implication for Geneva NGOs: they are subject to CCPD oversight for personal data processing, but may not be able to verify or document where the AI processing that affects their beneficiaries actually occurs. The compliance context is ambiguous and creates a documentation gap with no current resolution path.

---

## 05 — Lead Magnet Draft: In Sergio's Voice

### English

**Geneva NGO AI Operational Accountability Briefing**

When you deploy AI in a program delivery context, two questions arrive before the governance framework is ready.

The first: is the model still what you deployed?

The second: do your program staff know what to do with its outputs?

These questions are not covered by AI governance policies. They are not answered by documentation. They are operational — and they create accountability exposure that documentation alone does not resolve.

Most AI governance frameworks for NGOs address the policy layer: what you have documented, what you have approved, what you have disclosed. What they do not address is the maintenance layer — whether the AI system you approved is still the AI system you are running — and the competence layer — whether the staff using the AI system have the judgment to use it appropriately.

This briefing is for Geneva NGOs, international organizations, and tech nonprofits that have deployed AI or are preparing to deploy it, and that are managing the gap between what governance frameworks ask for and what operational accountability actually requires.

**What the briefing covers:**

- **AI maintenance debt**: how to track model updates, retraining events, and configuration changes — and what your organization is actually liable for when the model you are running is not the model you deployed
- **The program planning / model validity mismatch**: why the annual program planning cycle may be running on AI recommendations from a model that has drifted since deployment, and what to do about it
- **Pre-deployment staff competence**: how to sequence AI tool deployment and staff training so that operational use does not precede adequate understanding
- **FADP beneficiary AI decision records**: what you need to be able to tell individual beneficiaries about what AI-assisted decisions were made about them — and why your current records probably cannot answer that question
- **ZEWO compliance cost as a budget decision**: how to think about AI governance compliance costs in the context of your organizational overhead and program spending expectations
- **The program manager's accountability under Swiss law**: what Art. 75 ZGB actually requires of you personally, and why current guidance does not resolve the structural exposure

**Format:** 90-minute briefing, in person in Geneva or by video call
**Investment:** CHF 1,800
**Language:** English (French version available on request)

I work with a small number of Geneva organizations on their specific AI governance situations — not as a framework provider, but as someone who helps you identify what is actually at stake operationally and what a governance response that actually works for your organization looks like.

To schedule a briefing: write to sergio@digitalcoa.ch with a brief description of your organization and the AI governance questions you are currently navigating. I respond within two business days.

---

### French

**Briefing Responsabilité Opérationnelle IA pour les ONG genevoises**

Lorsque vous déployez l'IA dans un contexte de livraison de programmes, deux questions se posent avant que le cadre de gouvernance ne soit prêt.

La première : le modèle est-il toujours celui que vous avez déployé ?

La deuxième : votre personnel de programme sait-il quoi faire de ses résultats ?

Ces questions ne sont pas couvertes par les politiques de gouvernance de l'IA. Elles ne sont pas répondues par la documentation. Elles sont opérationnelles — et elles créent une exposition à la responsabilité que la documentation seule ne résout pas.

La plupart des cadres de gouvernance de l'IA pour les ONG abordent la couche politique : ce que vous avez documenté, ce que vous avez approuvé, ce que vous avez divulgué. Ce qu'ils n'abordent pas, c'est la couche de maintenance — si le système d'IA que vous avez approuvé est toujours le système d'IA que vous utilisez — et la couche de compétence — si le personnel qui utilise le système d'IA a le jugement pour l'utiliser de manière appropriée.

Ce briefing est destiné aux ONG genevoises, aux organisations internationales et aux associations à but non lucratif technologiques qui ont déployé l'IA ou qui s'apprêtent à le déployer, et qui gèrent l'écart entre ce que les cadres de gouvernance demandent et ce que la responsabilité opérationnelle requiert réellement.

**Ce que le briefing couvre :**

- **La dette de maintenance de l'IA** : comment suivre les mises à jour du modèle, les événements de réentraînement et les changements de configuration — et ce dont votre organisation est réellement responsable quand le modèle que vous utilisez n'est pas celui que vous avez déployé
- **L'inadéquation entre la planification de programme et la validité du modèle** : pourquoi le cycle annuel de planification de programme peut fonctionner avec des recommandations d'IA provenant d'un modèle qui a dérivé depuis le déploiement, et quoi faire à ce sujet
- **La compétence du personnel avant le déploiement** : comment séquencer le déploiement de l'outil d'IA et la formation du personnel pour que l'utilisation opérationnelle ne précède pas la compréhension adequate
- **Les dossiers de décision IA des bénéficiaires FADP** : ce que vous devez être en mesure de dire aux bénéficiaires individuels sur les décisions assistées par l'IA prises à leur sujet — et pourquoi vos dossiers actuels ne peuvent probablement pas répondre à cette question
- **Le coût de conformité ZEWO comme décision budgétaire** : comment réfléchir aux coûts de conformité de gouvernance de l'IA dans le contexte de vos frais généraux et des attentes en matière de dépenses de programme
- **La responsabilité du chargé de programmes en vertu du droit suisse** : ce que l'art. 75 CC exige réellement de vous personnellement, et pourquoi les orientations actuelles ne résolvent pas l'exposition structurelle

**Format :** Briefing de 90 minutes, en personne à Genève ou par appel vidéo
**Investissement :** CHF 1 800
**Langue :** Français (version anglaise disponible sur demande)

Je travaille avec un nombre limité d'organisations genevoises sur leurs situations spécifiques de gouvernance de l'IA — pas en tant que fournisseur de cadre, mais en tant que quelqu'un qui vous aide à identifier ce qui est réellement en jeu opérationnellement et à quoi ressemble une réponse de gouvernance qui fonctionne réellement pour votre organisation.

Pour planifier un briefing : écrivez à sergio@digitalcoa.ch en décrivant brièvement votre organisation et les questions de gouvernance de l'IA auxquelles vous êtes actuellement confrontées. Je réponds dans les deux jours ouvrables.

---

## 06 — Findings Summary: Six Net-New Insights

**Finding 1: AI Maintenance Debt as a Discrete Category from AI Governance Debt — Model Drift Invisible Without Tracking Methodology**

The accumulation of undocumented model state changes — updates, retraining events, configuration modifications — is a form of organizational liability that is structurally different from the governance documentation debt identified across C214–C238 Phase 04 cycles. Governance documentation debt is about producing documents that demonstrate governance exists. AI maintenance debt is about tracking the technical state of the AI system over time: whether the model you are currently running is the model you deployed, whether it has drifted, and what the drift means for the accuracy of recommendations it makes. This distinction has not been named in any prior Geneva NGO AI governance cycle. The failure mode — decisions made under a model whose accuracy assumptions have degraded — is not addressed by any current framework or advisory position. The governance response required is different from documentation governance: it requires a maintenance tracking methodology, a reassessment trigger protocol, and organizational awareness of model state over time.

*Distinction from prior cycles:* Prior cycles addressed governance documentation debt (C232, C229, C236), policy staleness (C229), and post-approval documentation drift (C236). This finding addresses the technical maintenance layer — the model state itself — which is a different obligation requiring a different methodology. The distinction is between governance documentation (what you have approved) and system state tracking (what you are actually running).

---

**Finding 2: Program Planning Cycle / AI Model Validity Window Structural Mismatch Creating Time-Bounded Governance Blind Spot**

Geneva NGO program cycles operate on annual or multi-year horizons. AI model validity windows — the period during which a deployed model remains appropriately accurate for its original training population — operate on six to eighteen month timescales. The structural mismatch means that a model deployed at the start of a program cycle may have drifted significantly before the cycle concludes, without organizational awareness. Decisions made in the later program period are made under an AI model whose accuracy assumptions no longer hold. This is distinct from prior cycle findings on silent model version updates (C233), which addressed vendor-initiated model changes without organizational awareness. This finding addresses the temporal drift problem: even without a vendor update, the model's accuracy for the original population may degrade over time, creating the same practical consequence — reliance on AI recommendations that may be less accurate than when deployed — without any vendor event to notice.

*Distinction from prior cycles:* Silent model version updates (C233) is a vendor-driven problem: the model changed without your knowledge. Model validity window mismatch is a time-driven problem: even if the model has not changed, the population or context has changed enough that the model may no longer be appropriate for your use case. The detection methodology is different and the governance response is different.

---

**Finding 3: ZEWO Compliance Cost Absorption as Organizational Budget Pressure Disguised as a Compliance Question**

When ZEWO certification review includes AI governance, the resulting compliance costs — advisory fees, documentation production, staff time — are absorbed within organizational overhead. For constrained NGO budgets with donor expectations about program spending ratios, this absorption creates a budget trade-off: governance compliance spending reduces program delivery spending. This trade-off is not being surfaced as a budget decision. It is being absorbed as overhead and presented as a compliance requirement. The finding is that the governance cost absorption problem has a specific manifestation for ZEWO-certified Geneva NGOs: the compliance question obscures the budget question, preventing the board-level visibility and deliberate decision-making that the trade-off requires. This is distinct from prior cycle findings on AI governance cost absorption as accounting architecture failure (C237, C235), which addressed the general problem of governance costs having no recognized budget category. This finding addresses the specific mechanism: ZEWO compliance review creating the cost absorption event, with no organizational framework for managing it as a budget decision.

*Distinction from prior cycles:* AI governance cost absorption (C237/C235) identified that governance costs have no recognized budget category and create invisible organizational liability. This finding identifies the specific compliance mechanism — ZEWO certification review — that creates the cost absorption event, and the specific failure: the compliance framing prevents the budget trade-off from being surfaced and decided deliberately.

---

**Finding 4: FADP Data Minimization Conflict with AI Tool Data Requirements and Donor Impact Measurement as a Pre-Deployment Design Problem**

The FADP's data minimization principle creates a structural conflict for Geneva NGOs deploying AI in beneficiary programs: AI tools may require or benefit from broader data collection than FADP minimizes to, and institutional donor impact measurement requirements may add further data collection obligations beyond program delivery necessity. The conflict is resolvable — at program design level, before the AI tool is chosen and before the data collection begins — but is not being addressed at that stage in Geneva NGO contexts. Organizations discover the conflict after deployment, when the AI tool and the data collection are already in place. This is distinct from prior cycle findings on FADP Art. 22 ADM beneficiary rights (C215), which addressed the right to know and contest AI-assisted decisions after they have been made. This finding addresses the upstream design problem: the data collection that makes AI-assisted decisions possible may itself exceed what FADP permits, and the conflict arises before any individual decision is made.

*Distinction from prior cycles:* ADM beneficiary rights (C215) is about individual decision rights after the fact. Data minimization conflict is about the structural preconditions for AI-assisted decision-making — the data inputs themselves — and whether those inputs are lawfully collectable in the first place. Resolving the data minimization conflict at design stage prevents the downstream ADM problem from arising.

---

**Finding 5: Geneva NGO AI Governance Advisory Supply Gap at the Intersection of Swiss Regulatory + International Organization + Limited Capacity as a Specific Market Failure**

The advisory market for Geneva NGO AI governance has a specific structural gap: the required combination of expertise — Swiss regulatory context (FADP, cantonal data protection, Swiss association law), international organization accountability frameworks (donor conditions, institutional frameworks), limited IT capacity constraints (solutions must be implementable with part-time IT), and the organizational scale of 10–100 person NGOs — is not held by any current advisory position. General AI governance advisors lack the Swiss and Geneva-specific regulatory integration. Swiss compliance advisors lack the NGO and international organization accountability context. International humanitarian AI governance advisors lack the Swiss domestic regulatory layer. The intersection is unoccupied. This finding is distinct from prior cycle findings on the advisory market supply gap (C232, C231, C230), which identified the gap in general terms. This finding specifies the exact combination of expertise that is missing — the precise intersection that no current market position occupies.

*Distinction from prior cycles:* Advisory market supply gap (C232/C231/C230) identified that Geneva NGO AI governance advisory supply was thin. This finding specifies what the gap actually requires: the combination of Swiss regulatory context, international org accountability, limited IT capacity design constraints, and NGO scale that no single advisor currently holds. The gap is more specific than "thin supply" — it is a particular combination that has not been assembled.

---

**Finding 6: Pre-Deployment AI Competence Development as a Discrete Governance Event Creating Operational Exposure When Sequenced After Deployment**

When Geneva NGOs deploy AI tools for program delivery, the deployment typically precedes adequate staff training on AI limitations, appropriate use, and output interpretation. The organizational sequence — deploy, then train — creates a period of operational exposure at the layer where most AI-assisted decisions actually happen: program staff using AI tools without adequate competence to evaluate their outputs critically. This is not a training content problem — it is a governance sequencing problem. The exposure is greatest at the operational layer (program staff) and is invisible to executive-level governance oversight (board, executive director), which reviews AI governance at the policy level. No current Geneva NGO AI governance framework addresses this sequencing as a discrete governance event requiring a specific protocol before deployment. This is distinct from prior cycle findings on staff AI governance gap (C214), which identified staff governance as a general concern. This finding specifies the mechanism: the sequencing itself creates the exposure, not the absence of training content.

*Distinction from prior cycles:* Staff governance gap (C214) identified that staff training and governance was an underserved area. This finding identifies the specific mechanism: deployment-before-competence sequencing. The governance solution is not better training — it is a different sequence: competence development must precede operational deployment, and the organization needs a protocol for ensuring this sequence is followed as a governance requirement, not as a training preference.