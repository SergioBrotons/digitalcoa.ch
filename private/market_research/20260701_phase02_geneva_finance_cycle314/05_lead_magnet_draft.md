# Lead Magnet Draft: Geneva Finance — C314 Phase 02

## "T-Minus 30 Days. The EU Pension Fund Asked Me for EU AI Act Readiness. I Don't Have It."

---

## English

**Where I Am**

It is July 2026.

The EU AI Act provisions on deployer obligations, AI literacy, human oversight, and client transparency become applicable in late August. That is approximately 30 days from now.

I am the managing director of a Geneva boutique wealth management firm, 60 employees. I have been using AI in portfolio construction for three years. I have answered institutional client DDQs for three years. I have signed the carrier attestation every year. I have not operationalized the EU AI Act.

I am not alone. The Geneva boutique WM market has been reading about the EU AI Act without preparing for it. We have been busy. We had the carrier attestation cycle. We had the post-31-day-pause discovery. We had the institutional DDQ mid-year questionnaire. We had the Geneva WM conference circuit. We had the portfolio construction vendor sub-processor questions. The EU AI Act has been the regulatory horizon we kept deferring.

The horizon is no longer deferrable.

**What I'm Discovering**

I started preparing in the last week. I called my portfolio construction AI vendor. I called my carrier broker. I called my compliance consultant. I called my Geneva law firm advisor.

None of them said the same thing.

*My portfolio construction AI vendor* said: "We're EU AI Act compliant. Our SOC 2 and ISO 27001 certifications cover it. You don't need to do anything different."

*My carrier broker* said: "Your next attestation needs to include your firm's AI oversight documentation, your AI literacy program, and your vendor sub-processor audit. We don't have a template for the EU AI Act specifically. We have a template for nFADP."

*My compliance consultant* said: "ISO/IEC 42001 implementation takes 6-12 months and costs CHF 50,000+. We can quote you an enterprise package. The FINMA Circular 2026/03 Section 7.4 requirements are separate. The EU AI Act requirements are separate. They don't integrate."

*My law firm advisor* said: "Article 3 of the EU AI Act defines deployer by use, not by location. Your AI portfolio construction on the EU pension fund's mandate makes you a deployer. You need an applicability memo. We don't produce operational documentation — we produce legal opinions."

Four conversations. Four different answers. None of them addressed my actual situation — a 60-person Geneva boutique WM with three EU-domiciled institutional clients, using portfolio construction AI on mandates that may or may not be high-risk under Article 6(3), personally named under nFADP Art.63, FINMA-supervised under Circular 2026/03, carrier-attested annually, and now asked by the EU pension fund for documented EU AI Act readiness in 30 days.

**What I Now Know (That I Didn't Know 30 Days Ago)**

*First:* **I am the deployer.** Article 3 of the EU AI Act defines a deployer as a natural or legal person using an AI system under its authority in a professional capacity. The geographic test is the location of the affected person, not the location of the deployer. I manage portfolios for EU pension funds. My AI portfolio construction affects EU natural persons. I am a deployer. Article 3 doesn't ask where my firm is located. It asks whose mandate the AI is operating on.

*Second:* **I am personally liable under four regimes simultaneously.** nFADP Art.63 names me as the responsible person at the data controller. FINMA Circular 2026/03 Section 7.4 names me as the FINMA-supervised responsible person for AI governance. The carrier attestation names me as the named insured. The EU AI Act Article 26 names me as the deployer with personal obligations for human oversight, AI literacy, and incident reporting. Four regimes. One signature. My name.

*Third:* **My authorization chain documentation does not exist.** I approved the portfolio construction AI tool at a partner meeting in February. There are no minutes. I have no signed authorization. The EU pension fund is asking me to document who approved what, when, under what conditions. I cannot produce the record. Article 14 of the EU AI Act requires documented human oversight. My carrier asks for "named individuals with AI oversight responsibility." My FDPIC filing names me as Art.63 responsible person. Three regimes require the same documentary evidence. The evidence does not exist.

*Fourth:* **My "Swiss-hosted" portfolio construction vendor routes mandate metadata through U.S. parent-company infrastructure.** I selected the vendor on nFADP Art.9 residency grounds in 2024. The vendor's sub-processor disclosure now reveals that telemetry, logging, authentication, and monitoring route through the U.S. parent company's cloud. The residency claim was accurate at the vendor entity level. It was inaccurate at the data flow level. The EU pension fund is asking me to disclose the actual sub-processor chain. I have to disclose what I told my mid-year questionnaire six months ago is contradicted by what I am about to disclose.

*Fifth:* **My DDQ response from Q4 2025 is now a liability.** The response said "we have an AI governance framework" and "documented AI authorization chain." The EU pension fund is asking me to show the framework and the authorization chain. The framework is two paragraphs. The authorization chain is a Slack message. The DDQ response was aspirational. The gap between the response and the reality is now visible in a regulatory inquiry.

*Sixth:* **I am asked to demonstrate AI literacy under Article 4.** Article 4 requires a sufficient level of AI literacy for staff and any person handling AI systems on the firm's behalf. The literacy must be appropriate to technical knowledge, experience, education, training, and the context of AI use. My associates use AI on day one. There is no literacy program. There is no assessment. There is no certification record. Article 4 specifies the requirement with a level of granularity the carrier attestation training question does not address.

**The 30-Day Window**

I have 30 days before EU AI Act deployer obligations, AI literacy requirements, human oversight documentation requirements, and client transparency obligations become applicable.

I need:
- Article 3 deployer applicability memo — which mandates are in scope, which AI uses are high-risk under Article 6(3)
- Article 4 AI literacy program — curriculum, assessment, certification record, MD-signed
- Article 14 human oversight documentation — portfolio construction AI review protocol with named individuals, dated, signed
- Article 50 transparency protocol — client-facing AI use disclosure language for engagement letters and annual statements
- nFADP Art.63 personal liability map — MD-named, AI-tool-named, cross-referenced to FINMA, EU AI Act, and carrier attestation
- Concurrent jurisdiction reconciliation memo — nFADP + FINMA + EU AI Act + carrier attestation, identifying duplicative, additive, and conflicting requirements

I have 30 days. I am a 60-person firm. I cannot implement enterprise AI governance. I cannot install ISO/IEC 42001. I cannot build a multi-year FINMA Circular 2026/03 implementation program. I need boutique-specific documentation that satisfies all four regimes simultaneously, delivered in 30 days, with my name attached.

**What I Built**

I built the C314 service.

It is not enterprise AI governance. It is not ISO/IEC 42001 implementation. It is not a vendor compliance package. It is not a law firm opinion.

It is six discrete, named modules addressing the six things I just discovered:

**1. Article 3 deployer applicability memo.** Article 3 and Article 6(3) applied to your specific firm, your specific mandates, your specific AI tools. Identifies which mandates are in scope, which AI uses are high-risk, which are limited-risk, which are out of scope. Dated, MD-signed. The first thing the EU institutional client reads.

**2. Article 4 AI literacy program.** Curriculum specific to portfolio construction AI use cases. Assessment methodology (how literacy is measured at hire, at tool onboarding, annually). Certification record (how compliance is demonstrated per individual). Refresh cycle. MD-signed. The Article 4 documentation that the carrier attestation training question does not produce.

**3. Article 14 human oversight documentation system.** System-level oversight documentation: who reviews portfolio construction AI outputs, what review criteria are applied, when override is exercised, how override is recorded, how oversight is tested, how incidents are escalated. Names the individuals with human oversight responsibility. Dated, MD-signed. Satisfies EU AI Act Article 14, FINMA Circular 2026/03 Section 7.4, and carrier attestation AI output verification question in one system.

**4. Article 50 transparency protocol.** Client-facing AI use disclosure: when AI use is disclosed (engagement letter, annual statement, ad hoc), how it is disclosed (specific language), what the disclosure contains (AI systems used on mandate, oversight architecture, incident reporting). Engagement letter update. Annual statement template. Dated, MD-signed. Satisfies EU AI Act Article 50, nFADP data subject information, and carrier attestation client communication questions.

**5. nFADP Art.63 personal liability map.** MD-named as responsible person under nFADP Art.63, deployer under EU AI Act Article 26, named accountable individual under FINMA Circular 2026/03 Section 7.4, and named insured under carrier attestation. Cross-references each regime's specific obligations to the MD's role. Documents the personal accountability structure with dated signatures and supporting documentation. The single document that names me across four regimes.

**6. Concurrent jurisdiction reconciliation memo.** Maps nFADP + FINMA Circular 2026/03 + EU AI Act + carrier attestation obligations to your specific practice. Identifies duplicative requirements (e.g., human oversight documentation appears in three regimes). Identifies additive requirements (e.g., AI literacy + professional training). Identifies conflicts (e.g., EU AI Act Article 50 disclosure + nFADP data subject confidentiality). Specifies precedence. Dated, MD-signed. The single document the MD can attach to any regulatory filing.

These six modules are the C314 service. They are the C312 + C313 service plus six new modules addressing the EU AI Act deployer readiness horizon. Same evidence architecture. Eighteen modules total (six C312 + six C313 + six C314).

**What I Do**

I'm Sergio Brotons. I work with 50-to-200 employee Geneva boutique wealth management firms on AI accountability — the documentation system that satisfies nFADP, FINMA, the EU AI Act, and the carrier attestation simultaneously.

My core deliverable is the Geneva Boutique WM AI Accountability Briefing — a focused 90-minute working session where I show you what your Article 3 deployer applicability analysis produces for your specific mandates, what your Article 4 literacy program needs to contain, what your Article 14 human oversight system looks like for your portfolio construction AI, what your Article 50 transparency protocol requires in client disclosure language, what your nFADP Art.63 personal liability map names you as across four regimes, and what your concurrent jurisdiction reconciliation memo identifies as duplicative, additive, and conflicting.

CHF 2,200 for the briefing. EN or FR. Geneva-local or remote.

The 30-day readiness pack is a separate engagement — six modules, fixed fee, MD-signed deliverables, 30-day delivery. Briefing first, then engagement scope.

---

**Ready to Map the Six Modules Against Your Firm?**

If the EU AI Act applicability date is in your 30-day window — and the EU institutional client has asked for documented readiness — I'm running a Geneva Boutique WM AI Accountability Briefing.

The briefing is direct. It is specific to Geneva boutique WM. It is built around what the EU AI Act actually requires of a 50-to-200 employee boutique with EU institutional clients, what nFADP Art.63 names you as personally, what FINMA Circular 2026/03 Section 7.4 asks of your AI governance, and what your carrier is now asking in the attestation.

Six modules. Eighteen total (C312 + C313 + C314). One architecture. Briefing.

*— Sergio Brotons*

---

## Français

**Là où je suis**

Nous sommes en juillet 2026.

Les dispositions du règlement IA de l'UE sur les obligations du déployeur, la littératie IA, la surveillance humaine et la transparence client deviennent applicables fin août. C'est dans environ 30 jours.

Je suis le directeur général d'un cabinet boutique genevois de gestion de patrimoine, 60 employés. J'utilise l'IA en construction de portefeuille depuis trois ans. J'ai répondu aux DDQ de clients institutionnels pendant trois ans. J'ai signé l'attestation d'assureur chaque année. Je n'ai pas opérationnalisé le règlement IA de l'UE.

Je ne suis pas seul. Le marché des boutiques WM genevoises a lu sur le règlement IA sans s'y préparer. Nous étions occupés. Nous avions le cycle d'attestation d'assureur. Nous avions la découverte post-pause de 31 jours. Nous avions le questionnaire mi-annuel DDQ institutionnel. Nous avions le circuit de conférences WM genevois. Nous avions les questions sur les sous-traitants des fournisseurs de construction de portefeuille. Le règlement IA a été l'horizon réglementaire que nous n'avons cessé de reporter.

L'horizon n'est plus reportable.

---

**Ce que je découvre**

J'ai commencé à préparer la semaine dernière. J'ai appelé mon fournisseur IA de construction de portefeuille. J'ai appelé mon courtier d'assurance. J'ai appelé mon consultant en conformité. J'ai appelé mon conseiller juridique genevois.

Aucun d'eux n'a dit la même chose.

*Mon fournisseur IA de construction de portefeuille* a dit : « Nous sommes conformes au règlement IA de l'UE. Nos certifications SOC 2 et ISO 27001 le couvrent. Vous n'avez rien de différent à faire. »

*Mon courtier d'assurance* a dit : « Votre prochaine attestation doit inclure la documentation de surveillance IA de votre cabinet, votre programme de littératie IA, et votre audit des sous-traitants fournisseur. Nous n'avons pas de modèle spécifique au règlement IA. Nous avons un modèle pour la nFADP. »

*Mon consultant en conformité* a dit : « La mise en œuvre d'ISO/IEC 42001 prend 6 à 12 mois et coûte CHF 50'000+. Nous pouvons vous chiffrer un package entreprise. Les exigences de la section 7.4 de la circulaire FINMA 2026/03 sont séparées. Les exigences du règlement IA sont séparées. Elles ne s'intègrent pas. »

*Mon conseiller juridique* a dit : « L'article 3 du règlement IA définit le déployeur par l'usage, pas par la localisation. Votre construction de portefeuille IA sur le mandat du fonds de pension UE fait de vous un déployeur. Vous avez besoin d'un mémo d'applicabilité. Nous ne produisons pas de documentation opérationnelle — nous produisons des avis juridiques. »

Quatre conversations. Quatre réponses différentes. Aucune n'a adressé ma situation réelle — un cabinet boutique genevois de 60 personnes avec trois clients institutionnels domiciliés dans l'UE, utilisant la construction de portefeuille IA sur des mandats qui peuvent ou non être à haut risque selon l'article 6(3), personnellement nommé sous l'article 63 nFADP, supervisé par la FINMA sous la circulaire 2026/03, attesté annuellement par l'assureur, et maintenant demandé par le fonds de pension UE pour une documentation de préparation au règlement IA dans 30 jours.

---

**Ce que je sais maintenant (que je ne savais pas il y a 30 jours)**

*Premièrement :* **je suis le déployeur.** L'article 3 du règlement IA définit un déployeur comme une personne physique ou morale utilisant un système IA sous son autorité à titre professionnel. Le test géographique est la localisation de la personne affectée, pas la localisation du déployeur. Je gère des portefeuilles pour des fonds de pension UE. Ma construction de portefeuille IA affecte des personnes physiques UE. Je suis un déployeur. L'article 3 ne demande pas où mon cabinet est situé. Il demande à quel mandat l'IA opère.

*Deuxièmement :* **je suis personnellement responsable sous quatre régimes simultanément.** L'article 63 nFADP me nomme comme personne responsable au responsable du traitement. La section 7.4 de la circulaire FINMA 2026/03 me nomme comme personne responsable supervisée par la FINMA pour la gouvernance IA. L'attestation d'assureur me nomme comme assuré nommé. L'article 26 du règlement IA me nomme comme déployeur avec des obligations personnelles pour la surveillance humaine, la littératie IA et le signalement d'incidents. Quatre régimes. Une signature. Mon nom.

*Troisièmement :* **ma documentation de chaîne d'autorisation n'existe pas.** J'ai approuvé l'outil IA de construction de portefeuille lors d'une réunion des associés en février. Il n'y a pas de procès-verbal. Je n'ai pas d'autorisation signée. Le fonds de pension UE me demande de documenter qui a approuvé quoi, quand, sous quelles conditions. Je ne peux pas produire le dossier. L'article 14 du règlement IA exige une documentation de surveillance humaine. Mon assureur demande des « personnes nommées avec responsabilité de surveillance IA ». Mon dépôt PFPDT me nomme comme personne responsable selon l'article 63. Trois régimes exigent la même preuve documentaire. La preuve n'existe pas.

*Quatrièmement :* **mon fournisseur de construction de portefeuille « hébergé en Suisse » achemine les métadonnées de mandat via l'infrastructure de la société parent étatsunienne.** J'ai sélectionné le fournisseur en 2024 pour des motifs de résidence article 9 nFADP. La divulgation des sous-traitants du fournisseur révèle maintenant que la télémétrie, la journalisation, l'authentification et la surveillance acheminent via le cloud de la société parent étatsunienne. La revendication de résidence était exacte au niveau de l'entité fournisseur. Elle était inexacte au niveau du flux de données. Le fonds de pension UE me demande de divulguer la chaîne réelle de sous-traitants. Je dois divulguer ce que j'ai dit à mon questionnaire mi-annuel il y a six mois contredit par ce que je suis sur le point de divulguer.

*Cinquièmement :* **ma réponse DDQ du T4 2025 est maintenant un passif.** La réponse disait « nous avons un cadre de gouvernance IA » et « chaîne d'autorisation IA documentée ». Le fonds de pension UE me demande de montrer le cadre et la chaîne d'autorisation. Le cadre fait deux paragraphes. La chaîne d'autorisation est un message Slack. La réponse DDQ était aspirationnelle. L'écart entre la réponse et la réalité est maintenant visible dans une enquête réglementaire.

*Sixièmement :* **on me demande de démontrer la littératie IA selon l'article 4.** L'article 4 exige un niveau suffisant de littératie IA pour le personnel et toute personne manipulant des systèmes IA pour le compte du cabinet. La littératie doit être appropriée aux connaissances techniques, à l'expérience, à l'éducation, à la formation et au contexte d'utilisation de l'IA. Mes associés utilisent l'IA dès le premier jour. Il n'y a pas de programme de littératie. Il n'y a pas d'évaluation. Il n'y a pas de dossier de certification. L'article 4 spécifie l'exigence avec un niveau de granularité que la question de formation de l'attestation d'assureur n'adresse pas.

---

**La fenêtre de 30 jours**

J'ai 30 jours avant que les obligations du déployeur du règlement IA, les exigences de littératie IA, les exigences de documentation de surveillance humaine et les obligations de transparence client deviennent applicables.

J'ai besoin de :
- Mémo d'applicabilité du déployeur article 3 — quels mandats sont dans le périmètre, quels usages IA sont à haut risque selon l'article 6(3)
- Programme de littératie IA article 4 — curriculum, évaluation, dossier de certification, signé MD
- Documentation de surveillance humaine article 14 — protocole de revue IA de construction de portefeuille avec personnes nommées, daté, signé
- Protocole de transparence article 50 — langage de divulgation d'usage IA côté client pour lettres de mission et déclarations annuelles
- Carte de responsabilité personnelle article 63 nFADP — MD nommé, outil IA nommé, référencé à la FINMA, au règlement IA et à l'attestation d'assureur
- Mémo de réconciliation des juridictions concurrentes — nFADP + FINMA + règlement IA + attestation d'assureur, identifiant les exigences dupliquées, additives et conflictuelles

J'ai 30 jours. Je suis un cabinet de 60 personnes. Je ne peux pas mettre en œuvre une gouvernance IA d'entreprise. Je ne peux pas installer ISO/IEC 42001. Je ne peux pas construire un programme de mise en œuvre pluriannuel de la circulaire FINMA 2026/03. J'ai besoin d'une documentation spécifique au cabinet boutique qui satisfait les quatre régimes simultanément, livrée en 30 jours, avec mon nom attaché.

---

**Ce que j'ai construit**

J'ai construit le service C314.

Ce n'est pas la gouvernance IA d'entreprise. Ce n'est pas la mise en œuvre d'ISO/IEC 42001. Ce n'est pas un package de conformité fournisseur. Ce n'est pas un avis juridique.

Ce sont six modules discrets et nommés adressant les six choses que je viens de découvrir :

**1. Mémo d'applicabilité du déployeur article 3.** Articles 3 et 6(3) appliqués à votre cabinet spécifique, vos mandats spécifiques, vos outils IA spécifiques. Identifie quels mandats sont dans le périmètre, quels usages IA sont à haut risque, lesquels sont à risque limité, lesquels sont hors périmètre. Daté, signé MD. La première chose que le client institutionnel UE lit.

**2. Programme de littératie IA article 4.** Curriculum spécifique aux cas d'usage de construction de portefeuille IA. Méthodologie d'évaluation (comment la littératie est mesurée à l'embauche, à l'intégration d'outils, annuellement). Dossier de certification (comment la conformité est démontrée par individu). Cycle de rafraîchissement. Signé MD. La documentation article 4 que la question de formation de l'attestation d'assureur ne produit pas.

**3. Système de documentation de surveillance humaine article 14.** Documentation de surveillance au niveau du système : qui révise les sorties IA de construction de portefeuille, quels critères de revue sont appliqués, quand la dérogation est exercée, comment la dérogation est enregistrée, comment la surveillance est testée, comment les incidents sont escalés. Nomme les personnes avec responsabilité de surveillance humaine. Daté, signé MD. Satisfait l'article 14 du règlement IA, la section 7.4 de la circulaire FINMA 2026/03 et la question de vérification de sortie IA de l'attestation d'assureur dans un seul système.

**4. Protocole de transparence article 50.** Divulgation d'usage IA côté client : quand l'usage IA est divulgué (lettre de mission, déclaration annuelle, ad hoc), comment il est divulgué (langage spécifique), ce que la divulgation contient (systèmes IA utilisés sur le mandat, architecture de surveillance, signalement d'incidents). Mise à jour de la lettre de mission. Modèle de déclaration annuelle. Daté, signé MD. Satisfait l'article 50 du règlement IA, l'information des personnes concernées nFADP et les questions de communication client de l'attestation d'assureur.

**5. Carte de responsabilité personnelle article 63 nFADP.** MD nommé comme personne responsable sous l'article 63 nFADP, déployeur sous l'article 26 du règlement IA, personne nommée responsable sous la section 7.4 de la circulaire FINMA 2026/03 et assuré nommé sous l'attestation d'assureur. Référence croisée des obligations spécifiques de chaque régime au rôle du MD. Documente la structure de responsabilité personnelle avec signatures datées et documentation à l'appui. Le document unique qui me nomme à travers quatre régimes.

**6. Mémo de réconciliation des juridictions concurrentes.** Cartographie les obligations nFADP + circulaire FINMA 2026/03 + règlement IA + attestation d'assureur sur votre pratique spécifique. Identifie les exigences dupliquées (par exemple, la documentation de surveillance humaine apparaît dans trois régimes). Identifie les exigences additives (par exemple, littératie IA + formation professionnelle). Identifie les conflits (par exemple, divulgation article 50 du règlement IA + confidentialité des personnes concernées nFADP). Spécifie la primauté. Daté, signé MD. Le document unique que le MD peut attacher à tout dépôt réglementaire.

Ces six modules sont le service C314. C'est le service C312 + C313 plus six nouveaux modules adressant l'horizon de préparation du déployeur du règlement IA. Même architecture de preuve. Dix-huit modules au total (six C312 + six C313 + six C314).

---

**Ce que je fais**

Je suis Sergio Brotons. Je travaille avec des cabinets boutiques genevois de gestion de patrimoine de 50 à 200 employés sur la responsabilité IA — le système de documentation qui satisfait simultanément la nFADP, la FINMA, le règlement IA de l'UE et l'attestation d'assureur.

Mon livrable principal est le Briefing de Responsabilité IA Genève pour Boutiques WM — une session de travail ciblée de 90 minutes où je vous montre ce que votre analyse d'applicabilité du déployeur article 3 produit pour vos mandats spécifiques, ce que votre programme de littératie article 4 doit contenir, à quoi ressemble votre système de surveillance humaine article 14 pour votre IA de construction de portefeuille, ce que votre protocole de transparence article 50 exige en langage de divulgation client, ce que votre carte de responsabilité personnelle article 63 nFADP vous nomme à travers quatre régimes, et ce que votre mémo de réconciliation des juridictions concurrentes identifie comme dupliqué, additif et conflictuel.

CHF 2'200 pour le briefing. EN ou FR. Genève-local ou à distance.

Le pack de préparation de 30 jours est un engagement séparé — six modules, prix fixe, livrables signés MD, livraison 30 jours. Briefing d'abord, puis portée de l'engagement.

---

**Prêt à cartographier les six modules sur votre cabinet ?**

Si la date d'applicabilité du règlement IA est dans votre fenêtre de 30 jours — et que le client institutionnel UE a demandé une documentation de préparation — j'anime un Briefing de Responsabilité IA Genève pour Boutiques WM.

Le briefing est direct. Il est spécifique aux boutiques WM genevoises. Il est construit autour de ce que le règlement IA exige réellement d'un cabinet boutique de 50 à 200 employés avec des clients institutionnels UE, ce que l'article 63 nFADP vous nomme personnellement, ce que la section 7.4 de la circulaire FINMA 2026/03 demande de votre gouvernance IA, et ce que votre assureur demande maintenant dans l'attestation.

Six modules. Dix-huit au total (C312 + C313 + C314). Une architecture. Briefing.

*— Sergio Brotons*

---

*Lead magnet draft, C314 Phase 02, 2026-07-01*