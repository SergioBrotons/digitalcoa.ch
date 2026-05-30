# Phase 02 — Genève Finance (Gestion de fortune boutique) — Lead Magnet Draft
## Cycle C302 | 2026-05-30 | Operator Agent

---

# Checkliste de Conformité IA pour la Gestion de Fortune Boutique
## Édition Auto-Évaluation — Secteur Finance

*Initialement développé pour le secteur juridique. Adapté aux sociétés de gestion de fortune face aux questionnaires de gouvernance IA des clients institutionnels, aux exigences d'attestation des assureurs et aux obligations de gouvernance IA de la FINMA.*

---

## Comment je vois ce problème

J'ai passé des années à observer les institutions financières gérer le changement réglementaire. Le schéma est toujours le même : une nouvelle obligation arrive, les entreprises se précipitent pour comprendre ce que cela signifie, et celles qui agissent le plus rapidement avec la documentation la plus claire s'en sortent mieux que celles qui attendent une clarté qui ne vient jamais.

La gouvernance IA est différente. L'obligation n'est pas à venir — elle est déjà là. La directive FINMA 08/2024 est en vigueur depuis décembre 2024. La question n'est pas de savoir si vous avez besoin d'un cadre de gouvernance IA. C'est de savoir si vous pouvez en produire un lorsqu'un client institutionnel le demande, qu'un assureur exige des preuves, ou que la FINMA ouvre un examen supervisé.

La plupart des gestionnaires de fortune boutique avec lesquels j'ai parlé sont dans la même position : les outils IA sont utilisés, l'équipe est à l'aise avec eux, mais personne n'a documenté quand chaque outil a été autorisé, qui l'a approuvé, quelles données il accède, ou comment les décisions prises ou influencées par l'IA sont attribuées à un humain.

Ce déficit de documentation est le problème. Et il est plus urgent que la plupart des entreprises ne le réalisent.

---

## Section 1 : Votre Inventaire d'Outils IA

*Êtes-vous en train de suivre chaque outil IA qui touche aux données clients ?*

Un questionnaire de gouvernance IA d'un client institutionnel vous demandera de dresser la liste de chaque système IA en cours d'utilisation. La plupart des entreprises ne peuvent pas produire cette liste avec précision. Les outils IA ont été adoptés de manière incrémentale — un module d'analyse de portefeuille, un CRM avec scoring IA, un outil de résumé de réunion IA — sans dossier central de ce qui existe.

**Checklist :**
- [ ] Charles River / Aladdin / Composants IA Bloomberg (le cas échéant)
- [ ] InvestGlass AI / Additiv / Altoo / Neurons Lab / Nevis (le cas échéant)
- [ ] CRM avec scoring ou segmentation client par IA
- [ ] Analyse de portefeuille avec modélisation des risques par IA
- [ ] Outils de rééquilibrage automatisé
- [ ] Outils de résumé de réunion ou de génération d'e-mails clients par IA
- [ ] API IA tierces intégrées dans vos flux de travail
- [ ] Gestion documentaire avec recherche par IA

**La question du client institutionnel :** « Veuillez fournir votre inventaire complet des outils IA, incluant la date de première mise en service, les dossiers d'autorisation et la portée d'accès aux données pour chaque système. »

Si vous ne pouvez pas produire cette liste avec certitude, vous avez un déficit d'inventaire.

---

## Section 2 : Décideur Automatisé — Exposition Art. 5(c) nFADP

*Est-ce qu'un système IA prend ou influence significativement des décisions ayant un effet juridique sur vos clients ?*

En vertu de l'art. 5(c) nFADP, lorsqu'un système IA prend ou influence significativement une décision ayant un effet juridique sur un client, des obligations spécifiques s'appliquent : le client doit être informé et il a le droit de demander un réexamen humain.

Dans un contexte de gestion de fortune, cela couvre :
- Le rééquilibrage de portefeuille par IA sans examen humain
- Le scoring de convenance algorithmique pour les produits financiers
- Le profilage automatisé des risques déterminant l'approcheconseil
- Les recommandations d'investissement générées par IA sans examen humain documenté

**Checklist :**
- [ ] Rééquilibrage de portefeuille par IA (automatisé ou basé sur des seuils)
- [ ] Scoring de convenance algorithmique pour les produits financiers
- [ ] Profilage automatisé des risques déterminant l'approcheconseil
- [ ] Recommandations d'investissement générées par IA sans examen humain
- [ ] Segmentation client par IA affectant les niveaux de service ou les frais

**Si OUI à l'un de ces éléments :** Les obligations de l'art. 5(c) nFADP s'appliquent. Vous avez besoin de la documentation de notification client et d'un processus documenté de réexamen humain sur demande.

**La question d'attestation de l'assureur :** « Pour chaque système IA qui prend ou influence significativement des décisions ayant un effet juridique sur les clients, veuillez fournir : les dossiers de notification client, la documentation du processus de réexamen humain et les preuves d'autorisation. »

---

## Section 3 : Due Diligence des Fournisseurs — Art. 26 ADMD + FINMA 08/2024

*Avez-vous signé des accords de traitement des données avec tous les fournisseurs IA ?*

Avant de déployer des outils IA qui traitent des données clients, l'art. 26 nFADP vous oblige à informer les clients de la nature et de l'objectif de l'outil IA, à documenter la base juridique du traitement des données et à garantir que des accords de traitement des données (DPA) sont en place avec les fournisseurs.

La directive FINMA 08/2024 exige la même documentation dans le cadre de votre cadre de gouvernance IA : classification des risques, définition de la responsabilité et signalement des incidents pour chaque fournisseur.

**Checklist :**
- [ ] Accord de traitement des données signé avec chaque fournisseur SaaS IA
- [ ] Restrictions des sous-traitants documentées (les fournisseurs de vos fournisseurs)
- [ ] Procédures de notification de violation définies dans les contrats fournisseurs
- [ ] Conditions de conservation et de suppression des données convenues
- [ ] Risque fournisseur IA classé dans votre inventaire IA (exigence FINMA 08/2024)
- [ ] Processus de signalement des incidents IA matériels documenté

**La question du client institutionnel :** « Veuillez fournir les DPA signés avec tous les fournisseurs IA traitant des données clients, y compris la documentation de la chaîne des sous-traitants. »

**La question d'attestation de l'assureur :** « Veuillez fournir les preuves de due diligence des fournisseurs pour tous les outils IA, y compris les conditions du DPA, les procédures de notification de violation et la documentation de conservation des données. »

---

## Section 4 : Attribution des Décisions — Pouvez-vous Reconstruire Qui a Pris Chaque Décision ?

*Pour toute décision d'investissement client, pouvez-vous montrer si elle a été prise par un humain ou par une IA — et qui est responsable ?*

C'est l'exposition principale pour les sociétés de gestion de fortune. Si un client subit une perte et conteste le processus décisionnel, le directeur général doit pouvoir répondre : est-ce que c'était humain ou IA ? Qui a approuvé ?

La plupart des entreprises ne peuvent pas répondre à cette question. Leurs systèmes n'ont jamais été conçus pour capturer l'attribution des décisions.

**Checklist :**
- [ ] Dossiers d'autorisation maintenus pour chaque déploiement d'outil IA
- [ ] Surveillance humaine documentée pour les décisions influencées par l'IA
- [ ] Journal des décisions ou piste d'audit pour les décisions de portefeuille assistées par IA
- [ ] Responsabilité attribuée par application IA (exigence FINMA 08/2024)
- [ ] Processus de documentation quand le jugement humain remplace la recommandation IA

**La question du client institutionnel :** « Veuillez décrire votre cadre d'attribution des décisions. Pour toute décision de portefeuille client, pouvez-vous identifier : qui a pris la décision, si l'IA était impliquée et qui porte la responsabilité ? »

**Si vous ne pouvez pas produire cela :** Vous avez un déficit d'attribution des décisions. C'est le déficit de documentation prioritaire pour les sociétés de gestion de fortune.

---

## Section 5 : Questionnaires de Gouvernance IA des Clients Institutionnels

*Avez-vous reçu un questionnaire de gouvernance IA d'un client institutionnel ? Êtes-vous prêt à répondre ?*

Les clients institutionnels — trésors d'entreprise, family offices, fondations, investisseurs institutionnels — envoient désormais des questionnaires détaillés de gouvernance IA aux gestionnaires de fortune dans le cadre de la due diligence standard des fournisseurs. Ces questionnaires portent sur l'inventaire des outils IA, les dossiers d'autorisation, les contrôles d'accès aux données, l'attribution des décisions, les DPA fournisseurs et la conformité nFADP.

**Checklist :**
- [ ] Questionnaire de gouvernance IA d'un client institutionnel reçu (ou prévu)
- [ ] Cadre de réponse drafted ou en développement
- [ ] Inventaire des outils IA prêt à soumettre
- [ ] Dossiers d'autorisation disponibles pour chaque outil IA
- [ ] Documentation des DPA fournisseurs prête à soumettre
- [ ] Cadre d'attribution des décisions documenté
- [ ] Preuves de conformité à l'art. 5(c) nFADP préparées
- [ ] Délai de réponse cartographié (généralement 2–4 semaines)

**L'urgence :** Les mandats institutionnels incluent désormais la gouvernance IA comme critère d'évaluation noté dans les appels d'offres. Une entreprise sans gouvernance IA documentée perd des mandats au profit d'un concurrent qui l'a.

---

## Section 6 : Responsabilité Personnelle — Art. 63 nFADP

*Êtes-vous personnellement exposé en vertu de l'art. 63 nFADP ?*

En tant que directeur général ou associé, vous êtes probablement le « responsable » au sens de l'art. 63 nFADP. La responsabilité personnelle pour les violations de données liées à l'IA signifie que vos biens personnels sont à risque — pas seulement la responsabilité institutionnelle de l'entreprise.

**Checklist :**
- [ ] Rôle de responsable Art. 63 compris et documenté
- [ ] Le cadre de gouvernance IA protège l'exposition à la responsabilité personnelle
- [ ] Risque de l'outil IA du fournisseur évalué pour les implications de responsabilité personnelle
- [ ] Plan de réponse aux incidents IA documenté (vous protège personnellement)
- [ ] Preuves de surveillance personnelle documentées (montre la diligence due)

**La question que j'entends le plus :** « Je suis personnellement responsable de quelque chose que je ne comprends pas entièrement. Les jeunes ont mis en place les outils IA. J'ai besoin de savoir ce qui est en place, qui l'a approuvé et ce qui pourrait mal se passer — avant que quelque chose ne se passe mal. »

---

## Ce que cela signifie pour vous

**Si vous avez marqué 0–2 :** Étapes précoces. Les outils IA sont probablement utilisés de manière informelle. L'exposition réglementaire existe mais n'est pas encore formalisée. Le questionnaire de gouvernance IA d'un client institutionnel ou l'attestation d'un assureur est probablement votre premier réveil.

**Si vous avez marqué 3–5 :** En développement. Les structures de base de gouvernance IA se forment. Les lacunes clés concernent probablement les DPA fournisseurs, l'attribution des décisions et la notification client Art. 5(c). Ce sont les lacunes prioritaires à combler.

**Si vous avez marqué 6+ :** Avancé. Gouvernance IA formelle en place. Le questionnaire de gouvernance IA d'un client institutionnel est gérable. La vague réglementaire 2026 (AMLA/LETA/CARF) est le prochain horizon.

---

## Le Problème Sous-jacent

Le déficit de documentation n'est pas un problème de conformité. C'est un problème de preuves.

La conformité signifie que vous avez un cadre. Les preuves signifient que vous pouvez montrer quand chaque outil IA a été autorisé, qui l'a approuvé, quelles données il accède et comment les décisions ont été prises.

Le marché propose des cadres. Ce dont les entreprises ont réellement besoin, c'est de preuves.

Si vous faites face à un questionnaire de gouvernance IA d'un client institutionnel, à une attestation d'assureur avec des exigences de preuves, ou à une exposition à la responsabilité personnelle que vous ne pouvez pas documenter — la première étape est d'avoir une image claire de ce qui existe.

---

## Une Note sur la Portée

Cette checklist est conçue pour les sociétés de gestion de fortune boutique (50–200 employés) gérant CHF 500M–5Mds AUM. Si vous êtes dans une grande institution avec une équipe de conformité dédiée, ce n'est probablement pas pour vous. Si vous êtes directeur général ou associé d'un gestionnaire de fortune genevois de taille moyenne qui a besoin d'une documentation de gouvernance IA qui fonctionne réellement, c'est là que je peux aider.

---

*Pour un briefing complémentaire de30 minutes sur votre готовность à la gouvernance IA, le questionnaire de gouvernance IA d'un client institutionnel ou le déficit de preuves d'attestation d'un assureur — contactez-moi directement.*

---

## Dernière mise à jour : 2026-05-30 (C302 Phase 02 — Secteur Finance)
## Lead Magnet : « Checkliste de Conformité IA pour la Gestion de Fortune Boutique » — Édition Finance
## Précédent : Cycle 4 (2026-03-29) — Édition Secteur Juridique
