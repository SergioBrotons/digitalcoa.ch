# C254 — Phase 02: Geneva Finance
**Cycle:** C254 | **Phase:** 02 Geneva Finance | **Date:** 2026-04-28
**Output:** `/data/.openclaw/workspace/digitalcoa.ch/private/market_research/phases/ph02_geneva_finance/20260428_phase02_geneva_finance_cycle254.md`

---

## 01 — ICP Language (EN + FR)

### English

**Managing director, boutique wealth management:**
"We had a BVG client last quarter where the AI recommended a suitability adjustment. We implemented it. Three weeks later the BVG authority asked for the basis of the recommendation. We could show what we decided. We could not show what the AI recommended versus what we independently verified. The BVG commission requirement asks us to demonstrate human discretion. We have discretion documented. We cannot show that the AI recommendation was a separate input that we evaluated rather than a conclusion we followed."

**Senior advisor:**
"A client exercised their nFADP right to an explanation of their AI-generated suitability profile. The model that produced the profile was updated six months ago. When we went back to produce the explanation, the system could not reconstruct the specific reasoning for that individual profile. The model doesn't retain per-instance reasoning traces. We were in the position of explaining an AI decision that the AI itself could no longer explain. We were honest with the client. We did not know what to say beyond that."

**Portfolio manager:**
"Our custodian's AI and our portfolio AI both process the same client data simultaneously. The custodian's system flags something based on its models. Our system generates a recommendation based partly on that flag. Neither the custodian nor us has documented which AI did what with the client's information, or who is accountable for the combined output. The outsourcing agreement was written before either of us had AI in the loop."

**Compliance officer:**
"We received three counterparty AI governance questionnaires in the same quarter. After the first one, we documented our position to answer it. The second counterparty asked the same questions. By the third, we realised we were revealing our AI governance documentation architecture sequentially — to a counterparty, to their advisors, to their board — before we had any idea who else would receive the same information. We have no framework for managing the sequence of what we disclose and to whom."

**Managing director:**
"Two peer Geneva boutiques, both using the same AI platform, flagged the same macro signal in the same week and both sent similar recommendations to clients. No one asked. But the question is real: if three firms using the same AI model all move in the same direction at the same time, is that the market, or is that the AI? And does anyone have an obligation to disclose that the recommendation was AI-correlated with peer firms?"

**Risk officer:**
"We reviewed our MiFID II equivalency documentation last month. The standard for explaining AI-generated recommendations in advisory communications is substantively the same as what FINMA expects. We can produce the document we send to clients. We cannot show the derivation — which model version, which inputs, what the model weighted. We are representing that the recommendation is ours. In a form that would satisfy a regulator's examination of how we actually arrived at it, we are not sure it is."

### Français

**Directeur général, gestion de patrimoine boutique:**
"Nous avons eu un client BVG le trimestre dernier où l'IA a recommandé un ajustement de convenance. Nous l'avons mis en œuvre. Trois semaines plus tard, l'autorité BVG a demandé la base de la recommandation. Nous pouvions montrer ce que nous avions décidé. Nous ne pouvions pas montrer ce que l'IA avait recommandé par rapport à ce que nous avions vérifié indépendamment. L'exigence de commission BVG nous demande de démontrer la discrétion humaine. Nous avons la discrétion documentée. Nous ne pouvons pas montrer que la recommandation de l'IA était une contribution distincte que nous avons évaluée, plutôt qu'une conclusion que nous avons suivie."

**Conseiller senior:**
"Un client a exercé son droit nFADP à une explication de son profil de convenance généré par l'IA. Le modèle qui a produit le profil a été mis à jour il y a six mois. Quand nous sommes revenus pour produire l'explication, le système ne pouvait pas reconstruire le raisonnement spécifique pour ce profil individuel. Le modèle ne conserve pas les traces de raisonnement par instance. Nous étions dans la position d'expliquer une décision d'IA que l'IA elle-même ne pouvait plus expliquer. Nous avons été honnêtes avec le client. Nous ne savions pas quoi dire au-delà de cela."

**Gestionnaire de portfolio:**
"L'IA de notre dépositaire et notre IA de portfolio traitent simultanément les mêmes données clients. Le système du dépositaire signale quelque chose sur la base de ses modèles. Notre système génère une recommandation fondée en partie sur ce signal. Ni le dépositaire ni nous n'avons documenté quelle IA a fait quoi avec les informations du client, ou qui est responsable du résultat combiné. La convention de externalisation a été rédigée avant que l'un ou l'autre n'ait l'IA dans le circuit."

**Responsable conformité:**
"Nous avons reçu trois questionnaires de gouvernance IA des contreparties au même trimestre. Après le premier, nous avons documenté notre position pour y répondre. La deuxième contrepartie a posé les mêmes questions. À la troisième, nous avons réalisé que nous révélions notre architecture de documentation de gouvernance IA de manière séquentielle — à une contrepartie, à ses conseillers, à son conseil d'administration — avant de savoir qui d'autre recevrait les mêmes informations. Nous n'avons pas de cadre pour gérer la séquence de ce que nous révélons et à qui."

**Directeur général:**
"Deux cabinets genevois pairs, utilisant tous deux la même plateforme d'IA, ont signalé le même signal macro la même semaine et ont tous deux envoyé des recommandations similaires aux clients. Personne n'a demandé. Mais la question est réelle : si trois cabinets utilisant le même modèle d'IA se déplacent tous dans la même direction en même temps, est-ce le marché, ou est-ce l'IA ? Et quelqu'un a-t-il l'obligation de divulguer que la recommandation était corrélée par l'IA avec des cabinets pairs ?"

**Responsable des risques:**
"Nous avons examiné notre documentation d'équivalence MiFID II le mois dernier. La norme pour expliquer les recommandations générées par l'IA dans les communications de conseil est substantivement la même que ce que FINMA attend. Nous pouvons produire le document que nous envoyons aux clients. Nous ne pouvons pas montrer la dérivation — quelle version du modèle, quelles entrées, ce que le modèle a pondéré. Nous représentons que la recommandation est la nôtre. Sous une forme qui satisferait un régulateur examinant comment nous sommes réellement arrivés à cette recommandation, nous ne sommes pas sûrs qu'elle le soit."

---

## 02 — Market Signals

**Signal 1: nFADP Article 21 reconstruction incompatibility — a technical architecture problem, not a documentation gap**
The market has framed nFADP Art. 21 as a disclosure documentation problem. The actual situation is more structural: AI models do not retain per-instance reasoning traces. When a client exercises their Art. 21 right to an explanation of an AI-generated recommendation, the firm may discover that the explanation simply cannot be produced — not because the documentation is missing, but because the model's architecture never preserved the specific derivation path for that individual recommendation. This is not a boutique-scale operational failure; it is a technical incompatibility between a legal right and how inference models actually work. The gap has not been named as an architectural problem distinct from documentation adequacy.

**Signal 2: BVG occupational pension AI suitability compounding — three regulatory layers, one AI system, no intersection methodology**
BVG-mandated suitability assessments using AI trigger at minimum three overlapping obligations: the BVG commission requirement (human discretion must be demonstrable in pension-related decisions), FINMA's suitability documentation expectations for investment recommendations, and nFADP Art. 21's explanation obligation for automated decisions affecting clients. The intersection of AI + BVG + FINMA + nFADP is not a theoretical concern — it is the present-tense situation for any Geneva boutique managing pension-adjacent client assets. No market participant has published a methodology for managing all three simultaneously, and the BVG layer specifically has received the least attention in AI governance discussions.

**Signal 3: Custodian AI integration accountability — outsourcing agreements predate AI, data sovereignty undefined at the AI-AI interface**
Geneva boutique wealth management operates on a custody model: client assets are held by a custodian, and the boutique's AI draws on real-time position data from the custodian's systems. When both the custodian's AI and the firm's AI process the same client data simultaneously — generating signals, flags, and recommendations — there is no documentation framework defining the accountability boundary between the two AI systems. The outsourcing agreement was not designed for AI-in-the-loop on either side. The question of which AI influenced which decision, and who bears accountability for the combined output, is unaddressed at both the contractual and regulatory level.

**Signal 4: Behavioral signal correlation across peer boutiques as invisible market-level concentration risk**
Geneva boutiques using the same three to five AI platforms are receiving correlated macro signals through those platforms simultaneously. The result — invisible at individual firm level — is coordinated AI-influenced portfolio adjustments across multiple boutiques. No framework exists for boutiques to identify, measure, or disclose this correlation. The risk is distinct from traditional portfolio concentration: it is behavioral, market-level, and operates below the threshold of any individual firm's visibility. When regulators or clients ask how a recommendation was formed, the correlated platform influence is not in the record.

**Signal 5: Counterparty questionnaire sequential disclosure as unintended competitive intelligence exposure**
When multiple counterparties send AI governance questionnaires in a concentrated period — as is now occurring — the firm's responses create a sequential disclosure architecture. The first response reveals the firm's AI governance documentation position to one counterparty, their advisors, and their board. If that information reaches peer institutions before they receive their own questionnaire, the questionnaire process itself becomes an unintended intelligence mechanism. No Geneva boutique has a framework for managing the sequence of what it discloses through questionnaire responses, or for understanding where that information travels after submission.

**Signal 6: MiFID II equivalency documentation requirement exposing the derivation gap in AI-generated recommendations**
Swiss private banks and wealth managers claiming MiFID II equivalency for EU client advisory face substantive documentation requirements for how AI-generated recommendations are formed and communicated. The standard is not merely that a disclosure document exists — it requires that the firm demonstrate the derivation path: which inputs, which model version, what the model weighted. Geneva boutiques producing AI-generated advisory content cannot currently show this derivation in a form that would satisfy a substantive MiFID II examination. The gap is the same gap described in prior cycles as "client explanation quality," but reframed as an equivalency compliance obligation with direct commercial consequences for EU-facing advisory relationships.

---

## 03 — Competitive Analysis

**Gap 1: nFADP Article 21 discharge methodology for models that cannot reconstruct individual derivations**
No market participant has addressed the specific situation where the model itself cannot produce the explanation because it never retained the per-instance reasoning trace. The gap is not documentation; it is the technical architecture of inference models colliding with a legal right. The market has no language for this problem, no naming framework, and no methodology for firms to manage the gap between the legal obligation and what the technology can actually produce. This is distinct from the disclosure adequacy gap covered in prior cycles.

**Gap 2: BVG-FINMA-nFADP intersection methodology for pension-adjacent AI suitability**
No market participant offers a boutique-scale methodology for managing the specific intersection of BVG occupational pension obligations, FINMA suitability requirements, and nFADP Art. 21 automated decision explanation — simultaneously, for the same AI system, in the same client engagement. The three obligations use different formats, different evidential standards, and different discharge mechanisms. The intersection is not served by any existing framework because it requires cross-regulatory expertise that no single advisory practice has claimed.

**Gap 3: Custodian AI accountability boundary documentation for the AI-AI data sovereignty interface**
No framework exists for boutique firms to document the accountability boundary when custodian AI and firm AI both process the same client data. The outsourcing agreement framework pre-dates AI and does not address AI-in-the-loop on either side. The documentation need is specific: which AI processed what data, which AI generated which output, and how the firm's professional accountability attaches to a decision that was partly shaped by the custodian's AI processing. This is distinct from the general third-party AI delegation gap covered in prior cycles.

**Gap 4: AI behavioral signal correlation measurement and disclosure framework for boutique peer groups**
No methodology exists for Geneva boutiques to identify or measure correlated AI-influenced portfolio behavior across peer firms using shared platforms. The framework would need to operate at boutique scale (not institutional scale), fit within existing compliance capacity, and address whether — and how — correlated AI-driven behavior needs to be disclosed to clients or regulators. This is distinct from the peer model correlation risk covered in C239, which was framed as a risk monitoring problem, not a documentation and disclosure problem.

**Gap 5: Counterparty questionnaire intelligence disclosure sequence management**
No market participant offers a framework for managing the sequential disclosure architecture created by concentrated counterparty AI governance questionnaire periods. The framework would address: what the firm discloses in responses, in what sequence, to whom, and what happens to that information after submission. This is distinct from prior coverage of counterparty questionnaires as market-mechanism standard-setters; the specific problem here is the sequential intelligence exposure created by the questionnaire process itself.

**Gap 6: MiFID II equivalency AI derivation documentation for Swiss boutiques serving EU clients**
No boutique-scale methodology exists for documenting the derivation path of AI-generated recommendations in a form that would satisfy MiFID II's substantive explanation requirements. The methodology would need to translate the equivalency standard into documentation practices that a 50-200 employee Geneva boutique can actually produce — without enterprise-scale AI logging infrastructure, and without access to model-level reasoning traces that most platforms do not expose to the advisory firm. This gap has direct commercial consequences for boutiques serving EU-connected clients.

---

## 04 — Compliance Context

**FINMA Circular 2016/1 Investment Recommendations and AI-Generated Advisory Content:**
FINMA Circular 2016/1 requires that investment recommendations be based on thorough analysis and presented fairly and correctly. When AI generates recommendation content, the question of what "thorough analysis" means for an AI system is unresolved. The derivation path — which inputs were used, how the model weighted them, what the confidence level was — is not part of the standard advisory documentation. FINMA's supervisory reading of Circular 2016/1 in the context of AI-generated recommendations is forming through examination observations, not published guidance. Boutique firms using AI for advisory content are operating without a published standard for what the documentation must show.

**BVG Occupational Pension Suitability AI — Human Discretion Documentation and Commission Requirement:**
BVG-mandated suitability assessments for occupational pension assets have a specific documentation requirement that general AI governance frameworks do not address: the BVG commission requires that human discretion be demonstrable in decisions affecting pension outcomes. When AI generates a suitability recommendation, the documentation must show that the human advisor exercised independent judgment — not that the firm followed the AI's recommendation. The practical problem: if the AI recommendation was not preserved at the moment of the human review, there is no way to demonstrate that the human evaluated a distinct AI input rather than adopting an AI conclusion. This creates a specific documentation architecture requirement for BVG-adjacent AI use.

**nFADP Article 21 — Automated Decision Explanation Right and Inference Model Architecture Incompatibility:**
Article 21 gives clients the right to meaningful information about automated decisions that significantly affect them. The right assumes a decision process that can be reconstructed. Inference models — the architecture used by most current AI systems — do not retain per-instance reasoning traces. The firm may hold the legal obligation and be technically unable to discharge it. This is distinct from documentation gaps: it is a structural incompatibility between a legal right and the technology's actual architecture. No Geneva regulator has addressed what this incompatibility means for firms' discharge obligations, and no market methodology exists for managing the gap.

**ISSB Sustainability Disclosure Requirements and AI Portfolio Data Assembly:**
ISSB standards require that sustainability-related disclosures be supportable as factual claims. AI tools assembling sustainability figures from client portfolio positions must produce documentation showing: what data inputs were used, what processing steps were applied, and what model version performed the assembly. The obligation is mid-2027 and simultaneous with FINMA's Q1 2027 audit. For Geneva boutiques with BVG-adjacent mandates, the ISSB obligation intersects with the BVG human discretion requirement: the same AI-generated figure may need to satisfy both the ISSB factual supportability standard and the BVG human discretion documentation requirement simultaneously.

**MiFID II Equivalency and AI-Generated Advisory Documentation for Swiss Boutiques Serving EU Clients:**
Swiss wealth management firms serving EU clients or claiming MiFID II equivalency face the same substantive explanation requirements for AI-generated recommendations as EU-regulated firms. The standard requires demonstrating the derivation path of the recommendation — not just producing a disclosure document. Most Geneva boutique AI platforms do not expose model-level reasoning traces to the advisory firm, making the derivation documentation requirement technically impossible to satisfy at the standard the regulation contemplates. The gap is present-tense for any boutique serving EU-connected clients and is not addressed by any Swiss regulatory guidance.

**ASIP BVG Occupational Pension Fund AI Asset Allocation — Additional Supervisory Layer:**
ASIP (Association Suisse des Institutions de Prévoyance) oversees occupational pension fund governance. When Geneva wealth management firms manage assets that are part of BVG-structured pension mandates, ASIP supervisory expectations add another layer to the accountability requirements. The intersection of ASIP oversight, BVG commission documentation, FINMA suitability, and AI governance creates a multi-directional accountability structure that no single regulatory guidance document resolves, and no Geneva boutique has a methodology for navigating simultaneously.

---

## 05 — Lead Magnet Draft

### English

**Portfolio AI Environment Briefing: The Three Intersections Nobody Has Mapped**

Geneva boutique wealth management firms using AI are running into three specific problems that arise where AI governance intersects with existing regulatory obligations — not as documentation gaps, but as structural incompatibilities between what AI actually does and what the regulation assumes about how decisions are made.

These intersections are not visible from inside the firm's normal AI governance framework. They surface when a specific regulatory question arrives — a BVG commission documentation request, a counterparty's AI governance questionnaire, a client's nFADP Article 21 explanation request — and the firm discovers that its AI governance documentation does not address the specific intersection the question is testing.

**The first intersection: BVG pension AI suitability and the human discretion documentation problem.**
When AI generates a suitability recommendation for a BVG-adjacent mandate, the BVG commission requirement asks the firm to demonstrate that human discretion was exercised. If the AI recommendation was not preserved at the moment of human review, the firm cannot show that the human evaluated a distinct AI input rather than adopting an AI conclusion. The documentation gap is specific to the intersection of AI and BVG obligations — and it is not addressed by any AI governance framework currently available in Geneva.

**The second intersection: nFADP Article 21 and inference model architecture.**
Clients have the right to an explanation of automated decisions that significantly affect them. But inference models do not retain per-instance reasoning traces. When a client exercises this right for an AI-generated recommendation from six months ago, the model cannot produce the specific derivation. The firm holds a legal obligation it may be technically unable to discharge. This is not a documentation problem. It is a structural incompatibility between a legal right and how AI systems actually work — and it has not been named as such in any Geneva regulatory guidance.

**The third intersection: MiFID II equivalency and the AI derivation documentation requirement.**
Swiss boutiques serving EU clients under MiFID II equivalency face substantive requirements to demonstrate how AI-generated recommendations were formed — not just to disclose that AI was used. The derivation path: inputs, model version, weighting. Most Geneva boutique AI platforms do not expose this information to the advisory firm. The equivalency representation is being made. The documentation behind it is not there.

**This briefing is for:** Managing directors and senior advisors at Geneva boutique wealth management firms who want to understand where their AI environment intersects with specific regulatory obligations — and what the specific documentation requirements are at those intersections, not in general terms but as applied to their actual situation.

**Format:** 90-minute briefing, in person or secure video, in English or French
**Investment:** CHF 2,800
**Deliverable:** Written summary of the firm's portfolio AI regulatory intersection map — covering all three intersections, the specific documentation requirements at each, and a prioritised approach for closing the gaps that are most likely to be tested first — delivered within five business days

I work with a small number of Geneva wealth management firms on their specific AI governance documentation situations. This briefing is structured around your firm's actual environment and regulatory profile, not a generic framework.

To schedule: reply to this message or use the contact form on digitalcoa.ch.

---

### Français

**Briefing sur l'Environnement IA du Portfolio : Les Trois Intersections Que Personne N'a Cartographiées**

Les cabinets genevois de gestion de patrimoine boutique utilisant l'IA rencontrent trois problèmes spécifiques qui surviennent là où la gouvernance de l'IA croise les obligations réglementaires existantes — pas comme des lacunes de documentation, mais comme des incompatibilités structurelles entre ce que l'IA fait réellement et ce que la réglementation suppose sur la façon dont les décisions sont prises.

Ces intersections ne sont pas visibles depuis l'intérieur du cadre normal de gouvernance de l'IA du cabinet. Elles émergent quand une question réglementaire spécifique arrive — une demande de documentation de commission BVG, un questionnaire de gouvernance IA d'une contrepartie, une demande d'explication de l'article 21 nFADP d'un client — et que le cabinet découvre que sa documentation de gouvernance de l'IA n'adresse pas l'intersection spécifique que la question teste.

**La première intersection : la convenance pension BVG par l'IA et le problème de documentation de la discrétion humaine.**
Quand l'IA génère une recommandation de convenance pour un mandat adjacent au BVG, l'exigence de commission BVG demande au cabinet de démontrer que la discrétion humaine a été exercée. Si la recommandation de l'IA n'a pas été préservée au moment de la révision humaine, le cabinet ne peut pas montrer que l'humain a évalué une contribution distincte de l'IA plutôt que d'adopter une conclusion de l'IA. L'écart de documentation est spécifique à l'intersection de l'IA et des obligations BVG — et il n'est adressé par aucun cadre de gouvernance de l'IA actuellement disponible à Genève.

**La deuxième intersection : l'article 21 nFADP et l'architecture du modèle d'inférence.**
Les clients ont le droit à une explication des décisions automatisées qui les affectent significativement. Mais les modèles d'inférence ne conservent pas les traces de raisonnement par instance. Quand un client exerce ce droit pour une recommandation générée par l'IA il y a six mois, le modèle ne peut pas produire la dérivation spécifique. Le cabinet détient une obligation légale qu'il peut être incapable de libérer techniquement. Ce n'est pas un problème de documentation. C'est une incompatibilité structurelle entre un droit légal et le fonctionnement réel des systèmes d'IA — et elle n'a pas été nommée comme telle dans aucune orientation réglementaire genevoise.

**La troisième intersection : l'équivalence MiFID II et l'exigence de documentation de dérivation de l'IA.**
Les cabinets genevois servant des clients européens sous équivalence MiFID II font face à des exigences substantives de démontrer comment les recommandations générées par l'IA ont été formées — pas seulement de divulguer qu'une IA a été utilisée. Le chemin de dérivation : entrées, version du modèle, pondération. La plupart des plateformes d'IA boutique genevoises n'exposent pas cette information au cabinet-conseil. La représentation d'équivalence est faite. La documentation derrière elle n'y est pas.

**Ce briefing est destiné aux :** Directeurs généraux et conseillers seniors des cabinets genevois de gestion de patrimoine boutique qui veulent comprendre où leur environnement d'IA croise des obligations réglementaires spécifiques — et quelles sont les exigences de documentation spécifiques à ces intersections, pas en termes généraux mais tels qu'appliqués à leur situation réelle.

**Format :** Briefing de 90 minutes, en personne ou par vidéo sécurisée, en anglais ou en français
**Investissement :** CHF 2 800
**Livrable :** Résumé écrit de la carte d'intersection réglementaire de l'environnement d'IA du portfolio du cabinet — couvrant les trois intersections, les exigences de documentation spécifiques à chacune, et une approche priorisée pour combler les lacunes les plus susceptibles d'être testées en premier — livré dans les cinq jours ouvrables

Je travaille avec un nombre limité de cabinets de gestion de patrimoine genevois sur leurs situations spécifiques de documentation de gouvernance de l'IA. Ce briefing est structuré autour de l'environnement réel et du profil réglementaire de votre cabinet, pas d'un cadre générique.

Pour planifier : répondez à ce message ou utilisez le formulaire de contact sur digitalcoa.ch.

---

## 06 — Findings Summary

**Finding 1: nFADP Article 21 is structurally incompatible with inference model architecture — a problem that documentation cannot close**
The nFADP Art. 21 explanation obligation assumes a decision process that can be reconstructed. Current inference models — the architecture underlying most deployed AI advisory tools — do not retain per-instance reasoning traces. The gap is not a documentation shortfall that improved record-keeping would resolve. It is a technical incompatibility between a legal right and how the technology actually operates. When clients exercise Art. 21 rights for AI-generated recommendations from prior model versions, firms are discovering they hold an obligation they cannot technically discharge. No Geneva regulator has addressed what this incompatibility means for firms' legal obligations, and no market methodology exists for managing the gap. This is distinct from the disclosure adequacy findings in prior cycles: those addressed documentation completeness; this finding addresses the architecture of the technology itself colliding with a legal right.

**Finding 2: The BVG occupational pension AI suitability compounding creates a three-layer documentation problem that no framework addresses**
When AI generates suitability recommendations for BVG-adjacent mandates, the firm faces three overlapping obligations simultaneously: the BVG commission's human discretion documentation requirement, FINMA's suitability documentation expectations for investment recommendations, and nFADP Art. 21's explanation obligation for automated decisions affecting clients. The intersection of all three is not theoretical — it is the present-tense situation for Geneva boutiques managing pension-adjacent assets with AI. The specific documentation need at this intersection is to show that the human advisor evaluated a distinct AI recommendation rather than adopting an AI conclusion as the firm's own. If the AI recommendation was not preserved at the moment of human review, this demonstration is structurally impossible. No Geneva market participant offers a methodology for navigating this specific three-layer intersection.

**Finding 3: Custodian AI integration creates an undocumented data sovereignty boundary at the AI-AI interface**
Geneva boutiques operate on a custody model where the custodian's AI and the firm's AI both process the same client portfolio data simultaneously. The custodian's system generates signals; the firm's AI incorporates those signals into recommendations. The outsourcing agreement was not designed for AI-in-the-loop on either side. Neither party has documented the accountability boundary between the two AI systems — which AI processed which data, which AI generated which output, and who bears accountability for the combined recommendation. The accountability boundary is undefined at precisely the point where the client's data is being processed by two AI systems under two different professional oversight frameworks simultaneously. This is distinct from the general third-party AI delegation problem covered in prior cycles: it is specific to the real-time, simultaneous AI-AI data processing architecture of the Geneva custody model.

**Finding 4: Behavioral signal correlation across peer boutiques using shared AI platforms is an invisible market-level concentration risk with no disclosure framework**
Geneva boutiques using the same three to five AI platforms receive correlated macro signals simultaneously, generating coordinated AI-influenced portfolio adjustments across multiple firms without any firm's knowledge. The correlated behavior — a market-level phenomenon invisible at individual firm level — creates a systemic risk question that no boutique-scale framework addresses. The specific disclosure question is unresolved: if a recommendation was materially influenced by a shared platform's correlated signal processing, does the firm have an obligation to disclose this influence to clients or regulators? The market-level concentration of AI platform usage means the correlated behavior is structural, not episodic — and the documentation to demonstrate which signals influenced which recommendation at the time is not being produced by any boutique.

**Finding 5: Counterparty questionnaire concentration creates a sequential intelligence disclosure architecture with no management framework**
When multiple counterparty AI governance questionnaires arrive in a concentrated period, the firm's sequential responses create an unintended intelligence disclosure mechanism. Each response reveals the firm's AI governance documentation architecture to one counterparty, their advisors, and their governance bodies — before the firm knows where the information will travel after submission. The sequence of what is disclosed, to whom, in what order, and with what management of the resulting information asymmetry, is unaddressed by any Geneva market participant. This is distinct from prior coverage of counterparty questionnaires as market-mechanism standard-setters: the specific problem here is the sequential exposure created by the questionnaire process itself, not the content of the standards being formed through it.

**Finding 6: MiFID II equivalency documentation requirements expose the AI derivation gap as a present-tense commercial obligation for Swiss boutiques serving EU clients**
Swiss wealth management firms claiming MiFID II equivalency face substantive requirements — not just disclosure requirements — to demonstrate how AI-generated recommendations were formed: inputs, model version, weighting. Most Geneva boutique AI platforms do not expose model-level reasoning traces to the advisory firm. The derivation documentation the equivalency standard requires is technically unavailable at the boutique level. The firm's equivalency representation is being made. The documentation behind it is not producible. For boutiques serving EU-connected clients or marketing services under equivalency, this gap has direct commercial consequences that are distinct from general FINMA documentation expectations — the MiFID II standard is substantive, not formal, and the AI derivation gap cannot be closed by adding a disclosure paragraph to the advisory communication.
