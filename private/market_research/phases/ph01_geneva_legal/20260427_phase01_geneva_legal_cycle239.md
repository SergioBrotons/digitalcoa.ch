# Phase 01 — Geneva Legal | Cycle 239
**ICP:** Managing partner or individual attorney at small Geneva law firm (2–5 attorneys), deploying AI for legal research, document drafting, and case management.
**Core concerns:** Attorney-client privilege, confidentiality of client files, professional liability, bar association guidance, data residency.
**Completed:** 2026-04-27 | **Mode:** Domain knowledge + Swiss institutional sources

---

## 01 — ICP Language

*How this ICP actually describes their AI problems and concerns.*

---

### English

**What attorneys actually say:**

*"I don't know where the data goes when I use these tools — and I'm not sure I want to know."*

*"My supervising attorney signed off on an AI-generated brief. She couldn't tell you what the AI actually did. Nobody asked."*

*"We told the client we use 'technology' in their matter. Is that enough? Nobody's ever said."*

*"I'm a partner. If something goes wrong with the AI, it's mine. I have no idea what that means practically."*

*"Our PI insurer sent a questionnaire about AI. I filled it in without knowing what we were actually covered for."*

*"The bar association says guidance is coming. It's been coming for two years."*

**What this language reveals:**
- Data residency described as a zone of deliberate ignorance — awareness present, avoidance chosen
- Supervisory signature without substantive review — normalized, not exceptional
- Client disclosure framed as "technology" — vague enough to be meaningless, not intentional
- Personal liability acknowledged but unexamined — present as ambient anxiety, not analyzed
- PI coverage treated as unknowable — no mechanism exists to obtain confirmation
- Bar guidance described as perpetually deferred — not a resource, an absence

---

### Français

**Ce que les avocats disent réellement :**

*« Je ne sais pas où vont les données quand j'utilise ces outils — et je ne suis pas sûr de vouloir le savoir. »*

*« Mon avocat superviseur a signé un mémoire généré par l'IA. Elle ne pourrait pas vous expliquer ce que l'IA a réellement fait. Personne n'a posé la question. »*

*« Nous avons dit au client que nous utilisons la « technologie » dans son affaire. Est-ce suffisant ? Personne ne l'a jamais précisé. »*

*« Je suis associé. Si quelque chose tourne mal avec l'IA, c'est ma responsabilité. Je n'ai aucune idée de ce que cela signifie concrètement. »*

*« Notre assureur RC a envoyé un questionnaire sur l'IA. Je l'ai rempli sans savoir ce qui était réellement couvert. »*

*« Le barreau dit que des recommandations arrivent. Elles arrivent depuis deux ans. »*

**Ce que ce langage révèle :**
- La résidence des données décrite comme une zone d'ignorance délibérée — conscience présente, évitement choisi
- La signature de supervision sans examen substantiel — normalisée, non exceptionnelle
- La divulgation au client formulée comme « technologie » — assez vague pour être dénuée de sens, non intentionnelle
- La responsabilité personnelle reconnue mais non examinée — présente comme anxiété ambiante, non analysée
- La couverture d'assurance RC traitée comme inconnaissable — aucun mécanisme n'existe pour obtenir confirmation
- Les recommandations du barreau décrites comme perpétuellement reportées — pas une ressource, une absence

---

## 02 — Market Signals

*Current problems, failure modes, paradoxes, and complaints in the market.*

---

**Signal 1: Jurisdiction attribution gap — the question no authority will answer first**

Small Geneva firms deploying AI legal tools face a structural ambiguity: when an AI tool processes privileged matter data on servers in Frankfurt, Dublin, or another non-Swiss jurisdiction, which supervisory authority's rules govern that processing? The attorney bears full personal professional responsibility for output under Swiss law — but no published Swiss authority has addressed the prior question of which jurisdiction's AI governance rules apply to the attorney's use of the tool. The question is genuinely open. No Geneva bar advisory resolves it. No FDPIC guidance addresses it. No published court doctrine clarifies it. Firms are making this decision silently, individually, without any reference point.

**Signal 2: Supervisory signature without substantive review — normalized failure**

The supervisory signature problem has moved from identified concern to normalized practice. Managing partners report signing AI-assisted work product without the ability to describe what the AI contributed. The signature certifies review capacity the signatory does not possess. No Geneva bar guidance has addressed this gap with operational substance. The problem is not that firms are unaware — they are aware and have no resolution path that does not require them to either substantially change their practice or admit the gap exists.

**Signal 3: Client disclosure as a form-filling exercise**

Attorneys report disclosing AI use to clients through mandate letter boilerplate ("we use technology to assist our work") without understanding what that disclosure actually communicates. The FDPIC's nFADP Art. 21 documentation requirements for automated decision-making have no published guidance specific to attorney-client privilege. The disclosure is technically made; its legal and professional adequacy is neither confirmed nor examined. The gap between form and substance is accepted as a cost of doing business with AI.

**Signal 4: PI insurance — silent ambiguity, not explicit exclusion**

PI insurers have not published AI liability coverage terms for Geneva small law firms. Brokers report being unable to confirm whether specific AI tools and use cases are covered under current policies. The ambiguity is silent — not explicit exclusion, not explicit coverage. Firms are operating under assumptions of coverage (or exclusion) they cannot verify. When a claim arises involving AI-generated work product, the coverage question will be answered by the policy language and the facts — neither of which currently exist in a form that permits advance confirmation.

**Signal 5: Bar guidance circuit — the most exposed firms cannot safely seek guidance**

The SVA/ORDRE informal guidance circuit requires firms to disclose AI practice details to obtain guidance. The firms most needing guidance — those with the least developed governance, the most exposed position — are least able to seek it without personalizing their exposure. The participation structure creates an adverse selection problem: the firms that most need the guidance are structurally discouraged from accessing it. No anonymous channel exists. No safe harbor exists. The guidance circuit rewards the firms least in need of it.

**Signal 6: Court citation contamination — systemic, not individual**

Geneva attorneys using AI legal research tools are identifying AI-generated case citations that appear in shared legal databases (Fedlex, Swisslex, and similar platforms) without corresponding actual decisions. The contamination is systemic: when a false citation enters a shared database, all subsequent researchers inherit the contamination. The secondary verification burden this creates is beginning to offset the efficiency gains of AI research tools. No published Geneva bar guidance addresses citation verification standards for AI-assisted research. The problem is distinct from individual hallucination — it is a shared infrastructure problem with no clean resolution mechanism.

---

## 03 — Competitive Analysis

*What others say, gaps, and what no one is addressing.*

---

**What others are doing:**

- **Geneva bar (SVA/ORDRE):** Informal working group active; guidance in development; no publication date committed; participation requires disclosure of firm AI practice details
- **International AI legal tool vendors (Harvey, Lexis+AI, Clio):** Marketing positioned around efficiency and scale; no Geneva-specific compliance guidance; terms of service disclaim professional liability on the vendor side while attorneys bear full liability on their side — structurally incompatible with professional practice obligations
- **UK solicitors (Law Society/SRA):** Published AI practice notes available; Geneva firms looking internationally find guidance but not Geneva-specific obligations or Swiss professional secrecy requirements
- **EU legal markets (CCBE):** AI practice guidance forming at EU level; Brussels Effect creating de facto EU standard that Geneva firms with EU clients must consider
- **PI insurers:** Underwriting AI risk in renewal questionnaires; not publishing coverage terms; brokers unable to confirm specific coverage

**Gaps in the market:**

- No Geneva-specific AI legal practice guidance published in accessible form
- No Switzerland-specific AI legal tool with Geneva bar alignment or compliance certification
- No Geneva bar working group output visible to non-participants
- No published FDPIC guidance on Art. 21 documentation requirements for attorney-client privilege
- No small-firm-scale AI governance documentation methodology (ISO 42001 is enterprise-scale; no Geneva-specific lightweight alternative)
- No Geneva AI legal practice peer accountability mechanism — safe, confidential, without publication of the firm's problems

**What no one is addressing:**

1. Jurisdiction attribution for AI-assisted work product — which supervisory authority's rules apply when AI processing occurs outside Switzerland, and who resolves this before a dispute does
2. Cross-border privilege collision — when AI tools process privileged matter data on foreign servers, which jurisdiction's privilege framework governs
3. Small-firm-scale AI governance documentation — a methodology designed for 2–5 person firms, not scaled-down enterprise frameworks
4. Geneva peer accountability safe channel — a mechanism for firms to address collective identical problems without individually disclosing their specific exposure
5. Court citation contamination verification standard — a shared infrastructure standard for AI-assisted research integrity
6. Managing partner personal AI fiduciary duty — the specific content of the fiduciary obligation for AI governance decisions, with a discharge mechanism

---

## 04 — Compliance Context: Geneva/Swiss Specific Regulatory Obligations

---

**SVA/ORDRE — Geneva Bar Association:**

- No published AI-specific practice rules as of April 2026
- Informal guidance forming through working group participation — participating firms must disclose AI practice details to obtain guidance, creating participation disincentive for the most exposed firms
- No published position on: AI tool selection criteria, AI supervision adequacy standards, AI disclosure obligations to clients, cross-border AI processing for privileged matters, data residency requirements for privileged matters
- CE credit requirements do not include AI governance competence as a specific measured outcome

**nFADP (SR 235.1, in force 01.09.2023):**

- **Art. 21 (Automated individual decision-making):** Documentation obligation for AI-assisted decisions that produce legal effects — no published FDPIC guidance specific to attorney-client privilege implications; the obligation is present, its application to privileged matters is unresolved
- **Art. 12 (Lawful basis):** Attorney-client implied consent model may not align with nFADP's explicit consent framework; no Geneva bar guidance on lawful basis for AI processing of privileged matter data
- **Art. 5-6 (Purpose limitation and data minimization):** AI tools processing privileged matter data may collect information beyond the specific matter's purpose; no published guidance on purpose limitation for AI-assisted legal work
- **Data residency:** No published guidance on where privileged matter data may be processed for AI-assisted legal work; professional secrecy obligations may require Swiss-based processing for highly sensitive matters, but no published standard exists
- **Cross-border transfer:** When AI tool servers are outside Switzerland, professional secrecy (Art. 321 CP) may conflict with foreign jurisdictional access; no published resolution mechanism

**FDPIC (Federal Data Protection and Information Commissioner):**

- No published guidance specific to attorney-client privilege and AI-assisted legal work
- Investigative pattern to date focuses on financial services and health sectors; legal sector not yet a stated enforcement priority — but absence of enforcement is not a safe harbor
- No published guidance on Art. 21 documentation requirements for privileged AI-assisted work product
- No published guidance on jurisdiction attribution for AI-assisted work product

**Bar Rules (OAv / ORDRE du Barreau):**

- **Professional secrecy (Art. 13 LL:22 / Art. 321 CP):** Absolute protection for privileged matters — AI tool data processing may constitute disclosure if servers are outside Switzerland; no published guidance on what "processing" means in the context of AI-assisted legal work
- **Supervisory obligation:** Attorneys must supervise assistants and employees — AI tool use may constitute "use of an automated system" requiring documented supervision protocols; no published standard on what adequate supervision of AI-assisted work product requires
- **Client consent for AI use:** No published Geneva bar standard on whether and how attorneys must disclose AI use to clients; mandate letter practice varies without guidance
- **Mandate letter AI clauses:** No Geneva bar template or published guidance on AI-specific mandate terms; firms are improvising individually

**PI Insurance (Bureau Romand d'Assurance):**

- Current PI policies contain AI liability exclusions through vague language ("professional services delivered through automated systems") rather than explicit carve-outs — creating silent ambiguity, not explicit exclusion
- Brokers unable to confirm whether specific AI tools and use cases are covered under current policies
- No published Geneva bar guidance on AI liability insurance interpretation
- No published insurer guidance on what AI governance documentation would confirm coverage

---

## 05 — Lead Magnet Draft

---

**[DigitalCoa.ch]**

**Geneva Legal AI Practice Architecture Briefing**

*For managing partners and individual attorneys at small Geneva law firms (2–5 attorneys)*

---

**What it is:**

A 90-minute structured briefing that maps your firm's specific AI governance exposures, identifies the three to five gaps most likely to create professional liability, and produces a written summary of your firm's AI practice architecture — what exists, what is exposed, and what requires a decision before the next matter opens.

This is not a training session. It is a diagnostic assessment of your current position, delivered in plain language, with a written record suitable for your firm's files.

---

**What it covers:**

1. **AI tool inventory and jurisdiction attribution:** Where your current AI tools actually process data, and which supervisory authority has jurisdiction over that processing — the question before the question
2. **Privilege and nFADP alignment:** Whether your AI-assisted research and drafting creates documentation obligations under Art. 21 that conflict with professional secrecy obligations under Art. 321 CP — and what requires a decision before the next matter opens
3. **Supervisory architecture adequacy:** Whether your current supervision model is substantively adequate for the AI tools your attorneys are actually using — not whether you have a policy, but whether the policy fits the practice
4. **PI insurance gap identification:** Whether your current policy's AI liability language covers or excludes your specific AI tools and use cases — and what cannot be confirmed today
5. **Three priority actions:** The specific decisions requiring your attention, named clearly, with what each decision requires to be made well

---

**Format and price:**

- 90-minute briefing, in English or French, in person in Geneva or by video
- Written summary delivered within five business days of the briefing
- CHF 2,800 per firm — up to four attorneys from the same firm attend at no additional charge
- No recurring commitment; no upsell sequence

---

**Why now:**

The gap between what small Geneva law firms are actually doing with AI and what their supervisory obligations require is now wide enough to create personal liability for managing partners. No published Geneva bar guidance resolves this. No FDPIC guidance addresses it for the legal sector. The firms that map their specific exposure first will have a written record of their position; those that wait will face the same questions retrospectively, without that record.

---

**CTA:**

To request a briefing: brief@digitalcoa.ch

Include your name, firm name, and preferred language (English / français). We will respond within two business days with availability.

---

**[EN — Longer version for use]**

The Geneva Legal AI Practice Architecture Briefing is designed for managing partners and individual attorneys who have deployed AI tools in their practice and are now encountering the gap between what they assumed was adequate and what their professional obligations actually require.

Most small Geneva firms are operating with some form of AI tool deployment — for legal research, document drafting, or case management. Most have not mapped which servers process their data. Most have not assessed whether their supervisory model is adequate for AI-assisted work product. Most have not received confirmation from their PI insurer that their specific tools and use cases are covered. Most have not examined whether their client disclosure language actually communicates anything.

These are not compliance checklist items. They are open questions with personal professional liability consequences. The Briefing maps your firm's specific position, names the gaps clearly, and produces a written record of where your firm stands today.

---

**[FR — Version française]**

**Briefing sur l'Architecture de la Pratique Juridique IA à Genève**

Le Geneva Legal AI Practice Architecture Briefing est destiné aux associés manageurs et aux avocats indépendants qui ont déployé des outils d'IA dans leur pratique et qui commencent à constater l'écart entre ce qu'ils pensaient être adéquat et ce que leurs obligations professionnelles exigent réellement.

La plupart des petits cabinets genevois utilisent désormais des outils d'IA — pour la recherche juridique, la rédaction de documents ou la gestion de dossiers. La plupart n'ont pas cartographié les serveurs qui traitent leurs données. La plupart n'ont pas évalué si leur modèle de supervision est adapté aux travaux assistés par l'IA. La plupart n'ont pas obtenu de confirmation de leur assureur RC que leurs outils spécifiques sont couverts. La plupart n'ont pas vérifié si leur langage de divulgation au client communique réellement quelque chose.

Ce ne sont pas des éléments de conformité. Ce sont des questions ouvertes avec des conséquences en matière de responsabilité professionnelle personnelle. Le Briefing cartographie la position spécifique de votre cabinet, identifie clairement les lacunes et produit un document écrit de la position actuelle de votre cabinet.

---

## 06 — Findings Summary: 6 Net-New Insights

*Distinct from all C214–C238 Phase 01 Geneva Legal findings.*

---

**Insight 1: Jurisdiction attribution gap — which supervisory authority's AI governance rules govern the attorney's use of the tool (net-new from C214–C238 Phase 01)**

When a Geneva attorney uses an AI legal tool with servers in Frankfurt, Dublin, or another non-Swiss jurisdiction, no published Swiss authority has determined which supervisory framework governs that work product. The attorney bears full personal professional responsibility for output under Swiss law — but the prior question of which jurisdiction's AI governance rules apply to the attorney's use of the tool has no published resolution. This is distinct from data residency (where the data is stored) and from cross-border transfer (which jurisdiction approved the transfer). It is a question that sits before both: which authority's rules govern the attorney's selection and use of the tool itself.

---

**Insight 2: Cross-border privilege collision for AI-assisted research — no published resolution path for the most sensitive matters (net-new from C214–C238 Phase 01)**

Swiss professional secrecy (Art. 321 CP) protects privileged communications absolutely. When an AI tool processes privileged matter data on servers outside Switzerland, the collision between professional secrecy and foreign jurisdictional access is unresolved at every level: no published Geneva bar guidance, no published FDPIC ruling, no published court doctrine. The question is not merely theoretical — any Geneva attorney conducting AI-assisted research on privileged matters is operating in a jurisdiction collision with no published resolution path and no published safe harbor.

---

**Insight 3: Bar guidance circuit adverse selection — the most exposed firms are structurally discouraged from accessing guidance (net-new from C214–C238 Phase 01)**

The SVA/ORDRE informal guidance circuit requires firms to publicly disclose AI practice problems to obtain guidance — creating a visibility paradox where the most exposed firms are least able to safely seek peer support. This is distinct from the "Geneva AI peer intelligence circuit" finding in prior cycles (C237/C238) — which concerned the informal exchange of information among peers. This finding concerns the structural inability to seek collective resolution of identical shared problems because the mechanism for seeking guidance requires individual disclosure of the firm's specific exposure. The firms most needing the guidance are least positioned to obtain it.

---

**Insight 4: Court record contamination from AI-generated citations entering shared research infrastructure (net-new from C214–C238 Phase 01)**

AI-generated case citations entering shared legal databases (Fedlex, Swisslex, and similar platforms) are creating a systemic contamination problem distinct from individual hallucination. When a false citation enters a shared database, all subsequent researchers inherit the contamination — and may produce work product citing authorities that do not exist. No published Geneva bar guidance addresses citation verification standards for AI-assisted research. The secondary verification burden this creates is beginning to offset the efficiency gains of AI research tools. No clean resolution mechanism exists for shared infrastructure contamination.

---

**Insight 5: Managing partner personal fiduciary duty for AI governance decisions — obligation exists, discharge mechanism does not (net-new from C214–C238 Phase 01)**

Managing partners at small Geneva law firms hold personal fiduciary obligations to the firm and to clients. When they make AI governance decisions — which tools to deploy, how to supervise, what to disclose to clients — no published Swiss authority has defined the content of that fiduciary duty for AI governance specifically. The obligation to exercise judgment in the firm's interest is clear; the specific content of that obligation as it applies to AI tool selection, configuration, and supervision is undefined. This is distinct from the "personal accountability infrastructure absent" finding (C238) — which addressed the absence of systems to discharge accountability. This finding addresses the fiduciary duty itself: what the managing partner owes, not what mechanisms exist to fulfill it.

---

**Insight 6: PI insurance silent coverage gap through vague exclusion language — unconfirmable coverage as the default state (net-new from C214–C238 Phase 01)**

Current PI policies for Geneva small law firms contain AI liability exclusions through vague language ("professional services delivered through automated systems") rather than explicit carve-outs. The ambiguity is the product design: neither explicit inclusion nor explicit exclusion, but language broad enough to be interpreted either way after the fact. Brokers cannot provide clarity because insurers have not committed to published coverage terms. Firms are operating under assumptions of coverage they cannot confirm. When a claim arises, coverage will be determined by policy language and fact pattern — neither of which currently permits advance confirmation. This is distinct from the "PI insurance ambiguity" findings in prior cycles (C233, C237) — which identified the existence of ambiguity as a market condition. This finding identifies the specific mechanism: vague exclusion language designed to preserve post-hoc interpretation room, not to inform policyholders.
