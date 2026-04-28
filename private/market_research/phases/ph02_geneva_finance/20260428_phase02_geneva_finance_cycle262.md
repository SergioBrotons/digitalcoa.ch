# Phase 02 — Geneva Finance
## C262 | 2026-04-28 | Boutique Wealth Management: The AI Accountability Attribution Problem Nobody Has Named

---

## 00 — Cycle Metadata

**ICP:** Managing director or senior advisor at boutique Geneva wealth management firm (50–200 employees), deploying AI for client reporting, portfolio analysis, and compliance documentation.
**Core Concerns:** Accountability for AI-generated recommendations. FINMA regulatory compliance. Client data confidentiality. Documentation standards at boutique scale.
**Phase:** 02/06
**Cycle:** 262
**Date:** 2026-04-28
**Language:** EN + FR throughout

---

## 01 — ICP Language

### English

How this ICP actually describes AI problems in conversation:

*"When a compliance officer signs an AI attestation, what exactly are they certifying? That the system existed? That it was being used? That the outputs were correct? The form doesn't specify. The officer doesn't know. I don't think anyone knows."*

*"We have a portfolio recommendation from our AI that went to the client. Six weeks later, the client's circumstances changed in a way that made the recommendation less appropriate. We had no idea until the next scheduled review. The AI flagged it as appropriate at the time, which it was. But nobody's job is to notice when 'appropriate' becomes 'no longer appropriate.' That's a structural gap, isn't it?"*

*"One of our clients asked us to explain, in writing, how our AI had derived a specific allocation recommendation for their portfolio. We couldn't produce that explanation. Not because we were hiding something — because the system doesn't give us a trace we can hand over. We had to tell the client we couldn't provide the derivation. That's not a good position to be in."*

*"Our custodian bank sent us a data file. We don't know what AI model processed that file on their side before it got to us. We're making allocation decisions based partly on data we didn't process and can't fully audit. That's an uncomfortable feeling."*

*"Our compliance committee reviews AI-related items. They're supposed to understand what they're approving. The problem is that the people who understand AI don't sit on the compliance committee, and the people on the compliance committee don't understand AI. So approvals happen with a comprehension gap that's never named."*

*"We had an incident where the AI recommendation was technically correct but the client experienced it as wrong. The AI said one thing, market moved, client lost confidence. The question is whether we should have seen it coming. But the AI gave us a recommendation — it didn't give us a confidence estimate. Or if it did, we didn't know what to do with it."*

---

### Français

Comment ce PIC décrit-il réellement les problèmes liés à l'IA en conversation :

*« Quand un responsable conformité signe une attestation d'IA, qu'est-ce qu'il certifie exactement ? Que le système existait ? Qu'il était utilisé ? Que les sorties étaient correctes ? Le formulaire ne le précise pas. Le responsable ne le sait pas. Je ne pense pas que quiconque le sache. »*

*« Nous avons une recommandation de portefeuille de notre IA qui est allée au client. Six semaines plus tard, la situation du client a changé d'une manière qui rendait la recommandation moins appropriée. Nous n'en avions aucune idée jusqu'au prochain examen prévu. L'IA l'a signalée comme appropriée au moment donné, ce qu'elle était. Mais personne n'a pour mission de remarquer quand 'approprié' devient 'n'est plus approprié.' C'est un écart structurel, non ? »*

*« L'un de nos clients nous a demandé de lui expliquer, par écrit, comment notre IA avait dérivé une recommandation d'allocation spécifique pour son portefeuille. Nous n'avons pas pu produire cette explication. Non pas parce que nous cachions quelque chose — parce que le système ne nous fournit pas une trace que nous pouvons remettre. Nous avons dû dire au client que nous ne pouvions pas fournir la dérivation. Ce n'est pas une bonne position. »*

*« Notre banque dépositaire nous a envoyé un fichier de données. Nous ne savons pas quel modèle d'IA a traité ce fichier de leur côté avant qu'il ne parvienne. Nous prenons des décisions d'allocation en partie sur la base de données que nous n'avons pas traitées et ne pouvons pas pleinement vérifier. C'est une sensation inconfortable. »*

*« Notre comité de conformité examine les points liés à l'IA. Il est censé comprendre ce qu'il approuve. Le problème est que les personnes qui comprennent l'IA ne sont pas dans le comité de conformité, et les personnes dans le comité de conformité ne comprennent pas l'IA. Alors les approbations se font avec un fossé de compréhension qui n'est jamais nommé. »*

*« Nous avons eu un incident où la recommandation de l'IA était techniquement correcte mais que le client l'a vécue comme erronée. L'IA a dit une chose, le marché a bougé, le client a perdu confiance. La question est de savoir si nous aurions dû le prévoir. Mais l'IA nous a donné une recommandation — elle ne nous a pas donné d'estimation de confiance. Ou si elle l'a fait, nous ne savions pas quoi en faire. »*

---

## 02 — Market Signals

### Current Problems and Failure Modes

**Compliance officer AI attestation certifying a comprehension state that cannot be achieved, creating personal exposure without substantive review.**

Geneva wealth management firms are discovering that compliance officer AI attestations — required by carriers, increasingly probed by FINMA examination practice — are being signed by officers who cannot describe what they are certifying beyond the system existing and being in use. The attestation form creates a documented personal signature attached to a system state the signatory has not substantively reviewed and cannot fully describe. No Geneva standard defines what substantive review of an AI system requires for attestation purposes, and no Geneva compliance officer has a pre-signing review methodology that would allow them to document comprehension rather than mere awareness. The personal exposure created by attestation signing accumulates with each renewal cycle, without any discharge mechanism for the exposure created.

**AI recommendation post-approval drift with no designated owner of the monitoring obligation, creating a silent suitability gap between scheduled reviews.**

Geneva wealth management firms using AI for portfolio recommendations face a structural gap: the AI recommendation is approved at a specific point in time, the client's suitability is assessed at that point, and then the recommendation runs until the next scheduled review — with no systematic process for detecting when the recommendation becomes less appropriate as client circumstances change between reviews. The recommendation was appropriate when approved. It may not be appropriate six weeks later if the client's risk profile has shifted through external factors. The firm's documentation shows an approved recommendation; the client's actual suitability has drifted without detection or response. No Geneva protocol exists for assigning ownership of the continuous suitability monitoring obligation between scheduled reviews.

**AI derivation explanation for client requests cannot be fulfilled by current systems, creating unresolvable disclosure tension at the wrong moment.**

Geneva wealth management firms receiving written requests to explain how specific AI recommendations were derived face a structural problem: the AI systems in use do not produce per-instance reasoning traces that can be handed over in response to a client's request. The system generated a recommendation. The recommendation exists. The derivation — what data, what weighting, what model logic produced this specific recommendation for this specific client at this specific moment — cannot be reconstructed from system logs because that trace was not retained in a form that can be retrieved and transmitted. The firm must then communicate to the client that it cannot provide the explanation the client has requested. The client experience of this communication is typically a trust event. No Geneva wealth management firm has a pre-incident methodology for building AI derivation documentation that would allow it to respond to these requests.

**Custodian bank data supply chain for AI-processed information operating below firm audit visibility, creating client report accuracy accountability without corresponding input control.**

Geneva wealth management firms making allocation decisions based on custodian bank data files are operating in a data supply chain they cannot fully audit. The custodian bank processes client account data through its own AI systems before transmitting data files to the firm. The firm cannot reconstruct what AI processing occurred on the custodian side, what model versions were applied, or what the data looked like before custodian AI processing. The firm's client reports and allocation recommendations are partly based on data from a processing chain the firm does not control and cannot inspect. The firm bears accountability for client report accuracy that extends into a data supply chain it has no visibility into. No Geneva protocol exists for managing the data supply chain accountability boundary when the data inputs to the firm's AI-assisted process originate in custodian systems the firm cannot audit.

**Compliance committee AI review comprehension gap structurally separating technical understanding from governance authority, creating approvals without demonstrated adequacy.**

Geneva wealth management firm compliance committees are being asked to approve AI systems and AI-assisted processes without the technical comprehension required to evaluate what they are approving. The committee has governance authority. The technical understanding sits elsewhere in the organization. These two things are structurally separated at boutique scale: the people with governance authority cannot evaluate the systems they are approving, and the people who could evaluate them do not have governance authority over them. The result is that AI approvals happen through a comprehension gap that is never named in the approval documentation. No Geneva market participant has produced a review methodology or approval format that would bridge this structural gap at boutique scale — that would allow compliance committees to demonstrate substantive review of AI systems without requiring technical AI expertise on the committee itself.

**AI confidence language not incorporated into client communication or professional judgment, creating unutilized risk signal and unmanaged client expectation gap.**

Geneva wealth management firms using AI that produces confidence estimates alongside recommendations are discovering that the confidence language — the system's own stated uncertainty about its recommendation — is not being incorporated into client communications or professional judgment about the recommendation. The AI system may express high uncertainty about a recommendation. The recommendation still goes to the client as a professional statement of the firm, with no signal of the uncertainty that accompanied it. When the recommendation proves incorrect, the client experience is of a firm professional endorsing a confident-seeming recommendation that the firm's own AI system had rated as uncertain. The confidence language is available; it is not being used as a risk communication tool or as a professional judgment input. No Geneva protocol exists for incorporating AI confidence language into client communication and professional review protocols.

---

### Paradoxes and Structural Failures

- **Attestation comprehension paradox:** The more detailed the attestation form, the more specific the personal liability it creates — without providing any methodology for achieving the comprehension it appears to require. The form creates exposure without showing the path to discharge it.

- **Suitability documentation paradox:** The approval record shows a properly approved recommendation. The client's actual suitability has drifted. The documentation system creates records of decisions made correctly at a point in time while documenting a situation that has since become inaccurate without detection.

- **Derivation transparency paradox:** The client's right to explanation under nFADP Article 21 activates precisely when the system cannot provide it — the obligation is most acute at the moment the technical architecture cannot fulfill it. Retrospective revelation that the firm could not produce the derivation creates trust damage that prospective communication about system limitations would not.

- **Data supply chain accountability paradox:** The firm is accountable for client report accuracy. The data inputs derive from custodian AI processing the firm cannot audit. The accountability extends further than the firm's actual control, without any Geneva framework for defining where the firm's obligation ends when inputs originate in infrastructure it does not control.

- **Governance authority comprehension gap paradox:** AI systems are approved by people who cannot evaluate them. The approval documentation appears substantive. The substance is absent. The gap is structural and never appears in the documentation that records the approval.

- **Confidence language paradox:** AI systems express uncertainty that advisors ignore in client communications. When recommendations prove incorrect, the firm's communication to the client contains no record of the uncertainty the system itself communicated. The confidence signal exists; the professional judgment about using it does not.

---

## 03 — Competitive Analysis

### What No One Is Addressing

**1. AI attribution chain disaggregation methodology as a discrete unnamed boutique-scale product.**

No Geneva market participant has produced a methodology for determining, for any specific AI-assisted recommendation: what data inputs the AI used, what model logic produced the recommendation from those inputs, what weighting decisions were made by the model versus the human advisor, and whether this chain can be reconstructed at the level of a single instance. This is distinct from the version-state documentation problem (which addressed which model version generated a specific output) and from the override record asymmetry problem (which addressed the documentation of what the human decided against the AI recommendation, not what the AI actually contributed to the decision that was made). The specific product — an attribution chain disaggregation methodology for boutique Geneva wealth management firms that would allow them to reconstruct, for any given recommendation, what the AI contributed and what the human contributed — has not been built.

**2. Post-approval suitability monitoring architecture as a discrete named service with defined ownership and process.**

No Geneva market participant has produced a boutique-scale methodology for continuous suitability monitoring between scheduled AI recommendation review cycles — a defined process with a named owner, a defined monitoring trigger, and a defined response protocol for when drift is detected. This is distinct from the post-rebalancing review adequacy problem (C259 Phase 02), which addressed the review that occurs at a specific rebalancing decision, and from the continuous compliance approval architecture problem (C252 Phase 02), which addressed the periodic review mismatch for the AI system itself rather than the client suitability state. The specific service — a continuous suitability monitoring methodology for AI-generated portfolio recommendations between scheduled reviews — has not been built at boutique scale.

**3. AI derivation documentation build methodology for nFADP Article 21 response readiness as a discrete pre-incident advisory product.**

No Geneva market participant has produced a methodology for building per-instance AI derivation documentation in advance of client requests — a methodology for structuring AI system interaction, log retention, and documentation compilation that would allow the firm to respond to written derivation requests when they arrive. This is distinct from the general nFADP Article 21 compliance documentation (which addresses the obligation in abstract) and from the AI confidence language disclosure problem (C247 Phase 02), which addressed how confidence intervals are communicated rather than how derivation paths are documented. The specific product — a pre-incident derivation documentation build for Geneva boutique wealth management firms — has not been built. The gap is structural: firms cannot respond to derivation requests not because they are withholding information but because the documentation was never built in a retrievable form.

**4. Compliance committee AI review protocol as a discrete boutique-scale governance bridge product separating governance authority from technical evaluation.**

No Geneva market participant has produced a compliance committee AI review protocol format that would allow governance authority holders to demonstrate substantive review of AI systems without requiring technical AI expertise on the committee — a documentation format and review structure that would show what the committee reviewed, what questions it asked, what answers it received, and what the basis was for its approval decision. This is distinct from the general compliance officer evaluation methodology gap (C245 Phase 02) and from the supervision loop inversion problem (C248 Phase 03), which addressed the general inadequacy of senior review without proposing a specific review format for compliance committees. The specific product — a compliance committee AI review protocol for boutique Geneva wealth management firms — has not been built. The structural gap persists: compliance committees approve AI systems with comprehension gaps that never appear in the approval documentation.

**5. Custodian data supply chain accountability boundary methodology for AI-processed financial data as a discrete unnamed product.**

No Geneva market participant has produced a methodology for defining where the Geneva boutique wealth management firm's accountability for client report accuracy ends when the data inputs to those reports originate in custodian bank AI systems the firm cannot audit. This is distinct from the custodian AI integration accountability gap (C254 Phase 02), which addressed the fiduciary duty extension question for custodian AI affecting portfolio decisions rather than the data supply chain question for custodian AI affecting report data inputs. The specific product — a data supply chain accountability boundary methodology for Geneva boutiques receiving AI-processed data from custodians — has not been built. Firms are operating with client report accuracy accountability extending into data supply chains they cannot inspect, with no framework for defining or limiting this exposure.

**6. AI confidence language integration protocol as a discrete client expectation management and professional judgment tool.**

No Geneva market participant has produced a methodology for incorporating AI confidence language into client communication protocols and professional review processes — a protocol for determining when AI uncertainty signals should be communicated to clients, how they should be framed, and what they mean for the professional's own recommendation judgment. This is distinct from the AI confidence language disclosure problem (C247 Phase 02), which addressed the disclosure obligation without addressing how the confidence signal should be used as an internal professional judgment input. The specific product — a confidence language integration protocol for Geneva boutique wealth management firms — has not been built. The paradox remains: AI systems generate uncertainty signals that are systematically not used in client communications or professional judgment, creating unmanaged expectation gaps when recommendations prove incorrect.

---

## 04 — Compliance Context

### Geneva / Swiss Regulatory Obligations

**FINMA**

FINMA suitability obligations under Circular 2016/1 require that portfolio recommendations be appropriate for the specific client at the time of the recommendation. For AI-generated recommendations approved at a specific moment and then operating between scheduled reviews, the suitability of the recommendation at the moment of generation does not guarantee suitability at subsequent moments when client circumstances may have changed. FINMA has not published guidance on whether or how AI-generated recommendations require continuous suitability monitoring between scheduled review cycles. The absence of published guidance does not eliminate the underlying obligation — it creates a documentation gap between the firm's approval record and the client's current suitability state.

FINMA examination practice has begun probing what attestation signers can actually describe about the AI systems they certify. The question — "what did you actually review when you signed the AI governance attestation" — is increasingly appearing in examination conversations. No Geneva standard defines what substantive review of an AI system requires for attestation purposes, and no published FINMA guidance addresses this specific question. The attestation record documents that a signature was applied; it does not document comprehension, evaluation, or substantive review.

FINMA best execution obligations require that firms document execution reasoning through the execution chain. When custodian bank AI and prime broker AI systems are part of that chain, the firm's best execution documentation may be incomplete without visibility into those systems. No published FINMA guidance addresses the scope of best execution documentation when execution AI operates across institutional custody and prime broker systems the firm cannot inspect.

**ASIP (Swiss Pension Fund Association)**

ASIP member BVG pension funds have their own trustee governance obligations for AI systems managing pension assets, including requirements to understand how AI systems arrive at allocation recommendations. Geneva wealth management firms managing BVG assets face documentation obligations that extend to explaining, to BVG trustee boards, how AI systems produced specific recommendations — not merely that recommendations were generated by an approved system. ASIP has not published guidance on what specific documentation BVG trustees can require from asset managers regarding AI system derivation, creating a gap between what the trustee governance obligation requires and what the firm has documented to provide. The derivation explanation requirement activates at the trustee board level precisely when most Geneva boutiques cannot produce the explanation.

**SFAMA (Swiss Fund and Asset Management Association)**

SFAMA peer circuit standard formation has begun addressing the AI review adequacy question at the compliance committee level. The informal SFAMA standard for compliance committee AI review may be developing toward a requirement for documented review protocols — what the committee reviewed, what questions were asked, what information was provided before approval. This emerging standard is not yet published but is circulating through the peer circuit. Geneva wealth management firms should anticipate that SFAMA peer circuit expectations for compliance committee AI review may soon require documentation of the committee's review process, not merely the approval itself.

SFAMA has not published guidance on AI derivation documentation obligations for client communications, leaving firms without a reference standard for what "explain how the AI derived this recommendation" requires in client-facing contexts.

**ISSB Sustainability Disclosure Standards**

ISSB-aligned sustainability disclosures for Geneva wealth management firm clients assembled by AI require documentation of the AI assembly process — what sources were accessed, what assumptions were applied, what human review occurred before transmission. The ISSB evidentiary requirement for sustainability claims in client reports intersects with the AI derivation documentation problem: if the firm cannot explain how a single recommendation was derived, it also cannot explain how an entire sustainability data assembly was derived. The ISSB documentation obligation amplifies the existing derivation documentation gap for the specific subset of client reports containing sustainability attribution data.

**nFADP (Swiss Data Protection Act)**

nFADP Article 21 establishes a right for clients to request explanation of how automated decision-making, including AI-inferred recommendations, was produced about them. For Geneva wealth management firms using AI to generate portfolio recommendations, this obligation is present-tense: clients who request explanation of how their recommendation was derived must receive a response. The architecture of most current AI systems does not support per-instance derivation retrieval in a form that can be compiled into a client response. The gap between the legal obligation and the technical architecture is structural, not documentation-based — building more documentation after the fact does not resolve a system that was not designed to retain per-instance reasoning traces.

nFADP Article 8 data minimization obligations apply when AI systems process client portfolio data for recommendation generation. The firm must be able to document that the processing purpose — generating portfolio recommendations — was proportionate to the data processed, and that data minimization principles were applied in system configuration. No Geneva authority has published guidance on what data minimization documentation specific to AI recommendation systems requires at boutique scale, leaving firms to operate without a compliance reference standard for this specific obligation.

**Emerging Accountability Structures**

The emerging accountability structure for Geneva boutique wealth management firms involves six overlapping accountability surfaces that no Geneva authority has fully mapped:

1. **AI attestation signatory exposure chain:** Personal signature on AI attestations certifying comprehension the signatory cannot demonstrate, accumulating with each renewal cycle without a discharge mechanism. The attestation record documents a signature; it does not document comprehension or substantive review.

2. **Post-approval suitability monitoring gap:** No ownership of the obligation to detect when AI-generated recommendations drift from client suitability between scheduled reviews. The firm's documentation shows a properly approved recommendation; the client's actual suitability may have drifted without detection or documentation.

3. **AI derivation documentation gap:** Client requests for AI derivation explanation arriving at firms whose systems were not designed to retain per-instance reasoning traces. The obligation under nFADP Article 21 is active; the technical architecture to fulfill it is absent. Firms cannot retrospectively build what was not designed into the system from the beginning.

4. **Data supply chain accountability boundary:** Client report accuracy accountability extending into custodian bank AI data processing the firm cannot audit. The firm cannot fully describe the inputs to its own AI-assisted recommendations because the data supply chain runs through custodian systems the firm has no visibility into.

5. **Compliance committee comprehension gap:** Governance authority holders approving AI systems they cannot substantively evaluate, with the comprehension gap never appearing in approval documentation. The approval record is formally complete; the substantive review it implies is structurally absent.

6. **Confidence language non-integration:** AI uncertainty signals systematically excluded from client communications and professional judgment processes, creating unmanaged expectation gaps when recommendations prove incorrect. The system's own uncertainty estimates are generated but not used as risk communication or professional judgment tools.

---

## 05 — Lead Magnet Draft

### In Sergio's Voice — EN

---

**Portfolio AI Governance Briefing: The Five Accountability Chains Nobody Built**

*Managing Director, DigitalCoa.ch*

---

Boutique Geneva wealth management firms are encountering a category of AI governance problems that no amount of policy documentation solves — because the problems are not about whether documentation exists. They are about whether the documentation, when challenged, can actually be produced.

This briefing addresses five specific accountability chains that Geneva boutique firms are discovering they cannot document when asked — and that no Geneva market participant has mapped as discrete structural problems requiring specific architectural responses before the question arrives.

**What we will address:**

1. **The AI attribution disaggregation problem.** When a client asks how your AI derived a specific recommendation, can you produce that derivation? Most Geneva boutiques cannot. We will address what attribution chain disaggregation requires at boutique scale and what documentation architecture would make single-instance derivation retrievable.

2. **The post-approval suitability monitoring gap.** Who owns the obligation to detect when an AI recommendation that was appropriate at approval becomes less appropriate as client circumstances change between scheduled reviews? This question has no defined answer and no defined owner at boutique scale. We will address what continuous suitability monitoring architecture would require and how to assign ownership of it.

3. **The AI derivation documentation build for nFADP Article 21 readiness.** The obligation to explain how AI generated a specific recommendation is active now under Swiss data protection law. Most current AI systems were not designed to retain per-instance reasoning traces. We will address what a derivation documentation build methodology would require and how to implement it for systems not designed for it.

4. **The compliance committee AI review protocol.** Compliance committees are approving AI systems they cannot substantively evaluate. The approval documentation is formally complete. The substantive review is structurally absent. We will address what a compliance committee AI review protocol would require to demonstrate genuine review, not merely formal approval.

5. **The custodian data supply chain accountability boundary.** Your client report accuracy accountability extends into custodian bank AI data processing you cannot audit. We will address where your obligation ends in that supply chain and what framework would define the boundary.

**Format:** 90-minute executive briefing, video or in-person. English and French. Questions welcome throughout.

**Investment:** CHF 2,800 per firm. Limited to two executives per session.

**Outcome:** A named accountability chain map identifying which of the five chains your firm has architectural gaps in, with specific documentation architecture recommendations for each identified gap.

---

*To schedule: sergio@digitalcoa.ch*

---

### In Sergio's Voice — FR

---

**Briefing sur la Gouvernance de l'IA en Gestion de Portefeuille : Les Cinq Chaînes de Responsabilité Que Personne N'a Construites**

*Directeur Général, DigitalCoa.ch*

---

Les cabinets de gestion de fortune genevois de taille boutique découvrent une catégorie de problèmes de gouvernance de l'IA qu'aucune quantité de documentation politique ne résout — parce que les problèmes ne concernent pas l'existence de la documentation. Ils concernent la question de savoir si la documentation, lorsqu'elle est contestée, peut réellement être produite.

Ce briefing aborde cinq chaînes de responsabilité spécifiques que les cabinets genevois de taille boutique découvrent ne pas pouvoir documenter lorsqu'on le leur demande — et qu'aucun acteur du marché genevois n'a cartographiées comme des problèmes structurels discrets nécessitant des réponses architecturales spécifiques avant l'arrivée de la question.

**Ce que nous aborderons :**

1. **Le problème de la désagrégation de l'attribution de l'IA.** Lorsqu'un client demande comment votre IA a dérivé une recommandation spécifique, pouvez-vous produire cette dérivation ? La plupart des cabinets genevois ne le peuvent pas. Nous aborderons ce que la désagrégation de la chaîne d'attribution exige à l'échelle boutique et quelle architecture documentaire rendrait la dérivation par instance unique récupérable.

2. **L'écart de surveillance de l'adéquation post-approbation.** À qui appartient l'obligation de détecter quand une recommandation d'IA qui était appropriée au moment de l'approbation devient moins appropriée à mesure que les circonstances du client changent entre les examens planifiés ? Cette question n'a pas de réponse définie et pas de propriétaire défini à l'échelle boutique. Nous aborderons l'architecture de surveillance continue de l'adéquation que cela exigerait et comment attribuer la propriété de cette surveillance.

3. **La construction de la documentation de dérivation de l'IA pour la préparation à l'Article 21 nFADP.** L'obligation d'expliquer comment l'IA a généré une recommandation spécifique est active maintenant en vertu de la loi suisse sur la protection des données. La plupart des systèmes d'IA actuels n'ont pas été conçus pour conserver des traces de raisonnement par instance. Nous aborderons ce qu'une méthodologie de construction de documentation de dérivation exigerait et comment la mettre en œuvre pour des systèmes qui n'ont pas été conçus pour cela.

4. **Le protocole d'examen de l'IA par le comité de conformité.** Les comités de conformité approuvent les systèmes d'IA qu'ils ne peuvent pas évaluer de manière substantielle. La documentation d'approbation est formellement complète. L'examen substantiel est structurellement absent. Nous aborderons ce qu'un protocole d'examen de l'IA par le comité de conformité exigerait pour démontrer un examen véritable, et non une simple approbation formelle.

5. **La frontière de responsabilité de la chaîne d'approvisionnement en données du dépositaire.** Votre responsabilité d'exactitude des rapports clients s'étend au traitement des données par l'IA de la banque dépositaire que vous ne pouvez pas vérifier. Nous aborderons où se termine votre obligation dans cette chaîne d'approvisionnement et quel cadre définirait la frontière.

**Format :** Briefing exécutif de 90 minutes, vidéo ou en personne. Anglais et français. Questions bienvenues tout au long.

**Investissement :** CHF 2 800 par cabinet. Limité à deux dirigeants par session.

**Résultat :** Une carte des chaînes de responsabilité identifiant lesquelles des cinq chaînes votre cabinet a des écarts architecturaux, avec des recommandations d'architecture documentaire spécifiques pour chaque écart identifié.

---

*Pour planifier : sergio@digitalcoa.ch*

---

## 06 — Findings Summary

### Six Net-New Insights — Distinct from C214–C261 Phase 02

**Finding 01: AI Attribution Chain Disaggregation — the Ability to Reconstruct What the AI Contributed Versus What the Human Contributed to Any Single Recommendation — Is a Discrete Structural Product Gap No Geneva Market Participant Has Named or Built**

Geneva wealth management firms increasingly face requests — from clients, from auditors, from compliance reviews — to explain, at the level of a specific recommendation, what the AI contributed versus what the human advisor contributed. Most current AI systems were not designed to retain per-instance reasoning traces in a form that can be retrieved and presented. The system produced a recommendation. The recommendation exists. The derivation path from input data through model processing to output recommendation cannot be handed over because it was not retained in retrievable form. This is distinct from the version-state documentation problem (C252 Phase 02), which addressed which model version generated a specific output, and from the override record asymmetry problem (C251 Phase 02), which addressed documentation of human decisions made against AI recommendations rather than the AI's actual contribution to decisions that were made. The specific product — an attribution chain disaggregation methodology that would allow a Geneva boutique to reconstruct, for any single recommendation, what the AI did and what the human did — has not been built. The problem is structural: firms cannot retrospectively build what was not designed into the system from the beginning.

**Finding 02: Post-Approval Suitability Monitoring for AI-Generated Recommendations Has No Designated Owner at Boutique Scale, Creating a Silent Suitability Drift Gap Between Scheduled Reviews That No Geneva Protocol Addresses**

AI-generated portfolio recommendations are approved at a specific point in time against a specific client suitability profile. Between that approval and the next scheduled review, the client's circumstances may change — through market movements, changes in non-managed assets, life events, or evolving risk tolerance — making a previously appropriate recommendation less appropriate or actively unsuitable. The firm's documentation shows a properly approved recommendation. The client's actual suitability has drifted. No Geneva wealth management firm has a defined process for monitoring this drift, a named owner of the monitoring obligation, or a defined response protocol for when drift is detected. This is distinct from the post-rebalancing human review adequacy problem (C259 Phase 02), which addressed the review that occurs at the moment of a specific rebalancing decision, and from the continuous compliance approval architecture problem (C252 Phase 02), which addressed the periodic review mismatch for the AI system itself rather than the client suitability state. The specific problem — continuous suitability monitoring for AI-generated recommendations between scheduled reviews, with named ownership and response protocol — has not been built at boutique scale. The gap is structurally invisible: the documentation system has no mechanism for flagging the drift.

**Finding 03: nFADP Article 21 AI Derivation Explanation Obligation Is Active Now for Geneva Wealth Management Firms Whose AI Systems Were Not Designed to Retain Per-Instance Reasoning Traces — Creating a Structural Fulfillment Gap That Prospective Documentation Cannot Close**

The right of clients to request explanation of how automated decision-making produced a recommendation about them is present-tense under Swiss data protection law. For Geneva wealth management firms using AI to generate portfolio recommendations, this obligation is already active. Most current AI systems — including those widely deployed in Geneva wealth management contexts — were not designed to retain per-instance reasoning traces in a retrievable form. When a client makes a written request for this explanation, the firm faces a structural problem: the obligation exists; the technical architecture to fulfill it does not. This is distinct from the general nFADP Article 21 compliance documentation problem (addressed across multiple cycles), which addresses the obligation in abstract, and from the AI confidence language disclosure problem (C247 Phase 02), which addressed how confidence intervals are communicated rather than how derivation paths are documented. The specific product — a pre-incident derivation documentation build methodology for systems not designed to retain per-instance traces — has not been built. Building more documentation after the fact does not resolve a system architecture that was not designed for retrievable derivation from the beginning. The gap between obligation and fulfillment is structural, not documentation-based.

**Finding 04: Compliance Committee AI Review Operates Through a Structural Comprehension Gap That Never Appears in Approval Documentation, Creating Formally Complete Approvals Without Substantive Evaluation at Boutique Scale**

Geneva wealth management firm compliance committees are asked to approve AI systems and AI-assisted processes as governance authority holders. At boutique scale, the committee members who have governance authority typically do not have the technical AI expertise to substantively evaluate the systems they are approving. The technical understanding sits elsewhere in the organization, in roles without governance authority over AI decisions. The result is that AI approvals happen through a structural comprehension gap: the approval documentation is formally complete, showing that a committee reviewed and approved the system; the substantive review that the documentation implies did not occur, because the committee could not perform it. No Geneva market participant has produced a compliance committee AI review protocol format that would bridge this gap — that would allow governance authority holders to demonstrate substantive review through a structured review process and documentation format without requiring technical AI expertise on the committee itself. This is distinct from the compliance officer evaluation methodology gap (C245 Phase 02) and from the supervision loop inversion problem (C248 Phase 03), which addressed general senior review inadequacy without proposing a specific review format for compliance committees. The structural gap persists, and the approval documentation never reveals it.

**Finding 05: Custodian Bank AI Data Processing Operates Below Firm Audit Visibility, Creating Client Report Accuracy Accountability That Extends Into a Data Supply Chain the Firm Cannot Inspect — With No Geneva Framework for Defining the Accountability Boundary**

Geneva wealth management firms making allocation decisions and producing client reports based on custodian bank data files are operating with data supply chain accountability that extends into custodian bank AI systems the firm cannot audit. The custodian bank processes client account data through its own AI systems — model versions, data processing logic, and output transformations that the Geneva boutique has no visibility into — before transmitting data files to the firm. The firm's allocation recommendations and client reports are partly based on data from a processing chain the firm cannot inspect. The firm bears accountability for client report accuracy that extends into infrastructure it does not control and cannot audit. No Geneva authority has defined where the firm's accountability obligation ends when data inputs originate in custodian AI systems. This is distinct from the custodian AI integration accountability gap (C254 Phase 02), which addressed the fiduciary duty extension question for custodian AI affecting portfolio decisions, and from the third-party delegation chain problem (C247 Phase 02), which addressed delegation to sub-consultants rather than institutional data supply chains. The specific product — a data supply chain accountability boundary methodology for Geneva boutiques receiving AI-processed data from custodians — has not been built. Firms are operating with accountability extending further than their actual control, with no framework for defining where the firm's obligation ends.

**Finding 06: AI Confidence Language — Uncertainty Estimates Generated by the AI System Alongside Recommendations — Is Systematically Excluded From Client Communications and Professional Judgment Processes, Creating Unmanaged Expectation Gaps When Recommendations Prove Incorrect**

Geneva wealth management firms using AI systems that produce confidence estimates or uncertainty language alongside recommendations are discovering that this language is not being incorporated into either client communications or internal professional judgment processes. The AI system may express high uncertainty about a recommendation. That recommendation is then presented to the client as the professional statement of the firm, with no signal of the uncertainty the system's own analysis generated. When the recommendation proves incorrect, the client experience is of a firm endorsing a recommendation that the firm's own AI system had rated as uncertain — a discrepancy between what the system said internally and what the firm communicated externally. The confidence signal is generated; it is not used. No Geneva protocol exists for incorporating AI confidence language into client communication protocols or professional review processes. This is distinct from the AI confidence language disclosure problem (C247 Phase 02), which addressed the disclosure obligation without addressing how the confidence signal should function as an internal professional judgment input. The specific product — a confidence language integration protocol for Geneva boutique wealth management firms — has not been built. The paradox remains: uncertainty signals that would allow better client expectation management and more disciplined professional judgment are systematically unused.
