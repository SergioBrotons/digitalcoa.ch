# Phase 04 — Geneva NGO / Tech
**Cycle:** C221 | **Date:** 2026-04-26 | **ICP:** Executive Director / Program Manager, Geneva-based NGO (10–100 employees), international organization, or tech nonprofit deploying AI for program delivery, data management, or communications
**Core Concerns:** Donor accountability, data sovereignty, reputational risk, limited IT capacity, donor visibility vs. confidentiality tension

---

## 01 — ICP Language

How this ICP actually describes AI problems.

### English

- "The board wants to demonstrate to our donors that the AI is working — but there's no formal way to show that."
- "We're deploying AI to make decisions about resource allocation. If a beneficiary wants to challenge that decision, what do we offer them?"
- "When the AI recommendation causes harm — who is legally responsible? The organization? The director? The vendor?"
- "We had someone leave who understood how the AI system was configured. Now nobody does."
- "Our procurement process checks financial compliance. It doesn't evaluate whether an AI system could cause harm."
- "Our donors want visibility into how we use AI — but we're also bound by confidentiality obligations to the people the AI makes decisions about."

### French

- « Notre conseil veut démontrer à nos bailleurs que le système d'IA fonctionne — mais nous n'avons aucun processus formel pour le prouver. »
- « Nous utilisons l'IA pour allouer des ressources. Si un bénéficiaire conteste cette décision, quel recours lui proposons-nous ? »
- « Quand une recommandation générée par l'IA cause un préjudice — qui est juridiquement responsable ? L'organisation ? La direction ? Le fournisseur ? »
- « Après le départ du collaborateur qui gérait la configuration de l'IA, plus personne ne sait comment le système fonctionne réellement. »
- « Notre processus d'approvisionnement vérifie la conformité financière. Il n'évalue pas les risques spécifiques liés à un système d'IA. »
- « Nos bailleurs veulent une visibilité sur notre utilisation de l'IA — mais nous avons aussi des obligations de confidentialité envers les personnes affectées par ces décisions. »

---

## 02 — Market Signals

Current problems, failure modes, paradoxes, and complaints.

### Failure Mode 1: Accountability Gap at the Beneficiary Level

NGOs deploy AI systems that make or materially influence decisions about beneficiaries — resource eligibility, prioritization, service access. The stated commitment to accountability applies upward (to donors) but not downward (to affected individuals). No Geneva NGO has a formal process for beneficiaries to challenge or query an AI-generated decision. This creates a systematic exposure: public accountability rhetoric disconnected from actual recourse mechanisms.

### Failure Mode 2: Donor Visibility vs. Confidentiality Structural Collision

Institutional donors increasingly embed AI reporting requirements in grant agreements — algorithmic transparency, output documentation, outcome data. Simultaneously, NGOs are bound by confidentiality obligations to beneficiaries (FADP, donor contracts, operational security). AI systems generate granular data that is simultaneously needed for donor reporting and restricted by confidentiality. The result is an impossible compliance position: meeting donor visibility requirements risks violating beneficiary confidentiality; protecting confidentiality risks donor relationship damage.

### Failure Mode 3: Legal Liability for AI Harm Unmapped

Swiss association law and Tort Law (OR 41) do not clearly allocate liability when an NGO's AI system causes material harm to a beneficiary. The organization's exposure depends on factors the sector has not formally assessed: whether the AI decision was "automated" under nFADP Art. 21, whether the organization exercised reasonable care in deployment, whether harm was foreseeable. This gap is particularly acute for organizations with volunteer governing bodies who may not understand they carry personal exposure.

### Failure Mode 4: Staff Departure Knowledge Collapse

AI systems at small NGOs are often configured, maintained, and interpreted by one or two individuals. When these individuals depart, the organization loses: system configuration knowledge, understanding of operational parameters and limitations, historical context for audit and reporting, and the ability to reproduce or continue consistent AI-assisted operations. No Geneva NGO has a formal AI knowledge handover process. This is a systematic operational continuity risk that is not being addressed.

### Failure Mode 5: Procurement Governance Missing

NGO procurement processes are structured around financial accountability and donor compliance. They do not include AI-specific evaluation criteria. Vendors are selected based on cost, data security certifications, and contractual terms — none of which address the actual risks of deploying an AI system: output reliability over time, configuration drift, vendor sustainability, explanation capability, harm attribution. No sector-standard AI procurement governance framework exists for Geneva NGOs.

### Paradox: AI Reporting Dependency

Once an NGO begins using AI to generate reports for donors — automated beneficiary impact summaries, resource allocation documentation, outcome data — the donor relationship becomes dependent on continued AI output. If the NGO later changes or discontinues the AI system, reporting quality changes, which raises donor questions about continuity and accountability. This creates a self-reinforcing lock-in: AI reporting generates the accountability documentation donors expect, making system change operationally disruptive.

---

## 03 — Competitive Analysis

Gaps and what no one is addressing.

### Gap 1: Beneficiary-Facing AI Accountability

No Geneva-based advisory or audit service maps the accountability chain between an NGO's AI system and affected beneficiaries. Legal and consulting firms address NGO governance broadly, but not AI accountability specifically at the beneficiary interface. This is the gap between "AI is deployed responsibly" (donor narrative) and "beneficiaries have meaningful recourse" (operational reality). No one is doing the work to close this gap.

### Gap 2: Dual Obligation Mapping for AI Data

No structured service addresses the specific collision between donor AI reporting requirements and FADP/confidentiality obligations. General data protection advisory does not address the NGO-specific structure where a third party (donor) demands access to data generated by AI decisions about a second party (beneficiary). This intersection is unaddressed in the Geneva market.

### Gap 3: NGO AI Liability Topology

No Geneva service has produced a structured liability mapping for AI harm in the NGO context: organization, board, executive director, program staff, vendor — who bears what, under which legal basis, with what insurance implications. This is a specific gap that requires combining NGO governance knowledge, Swiss association law, and AI risk expertise. No single provider currently occupies this space.

### Gap 4: AI Knowledge Continuity Planning

No product or advisory service addresses AI knowledge handover for NGOs — the systematic risk of staff departure eliminating institutional understanding of AI system configuration and operation. This is distinct from general IT knowledge management (already a known problem in the sector) and specific to AI systems where undocumented configuration creates both operational and compliance gaps.

### Gap 5: AI Procurement Governance for NGOs

No sector-standard AI procurement governance checklist exists for Geneva NGOs. The closest frameworks are generic enterprise AI procurement tools that do not account for donor accountability structures, FADP beneficiary obligations, or limited IT capacity. No Geneva advisory provider has produced a fit-for-purpose AI procurement governance framework for this ICP.

---

## 04 — Compliance Context

Geneva and Swiss-specific obligations.

### ZEWO Certification

ZEWO is the Swiss certification body for charitable organizations. ZEWO certification requires demonstrable financial accountability, proper use of funds, and governance integrity. It does not currently impose AI-specific governance requirements. However, ZEWO auditors are increasingly asking about AI-driven resource allocation decisions in financial reviews — particularly when AI systems influence which programs or beneficiaries receive funding. ZEWO certification does not protect an organization from AI-related liability exposure; it addresses financial compliance, not AI operational governance.

### Institutional Donors

Institutional donors — SDC (Swiss Agency for Development and Cooperation), cantonal offices, Loterie Romande, Municipalité de Genève — embed AI-related conditions in grant agreements with increasing frequency. Requirements include algorithmic transparency reports, AI output documentation, and outcome data tied to AI-assisted decisions. These requirements are not consistently enforced but are becoming standard. Organizations that cannot produce AI documentation when requested face grant renewal risk. The enforcement gap does not reduce the compliance obligation; it creates uncertainty about what "compliant" actually means.

### FADP / nFADP

The revised Federal Act on Data Protection (nFADP, in force January 2024) applies to all Swiss organizations processing personal data, including NGOs. Relevant provisions for this ICP:

- **Art. 21 Automated Decision-Making (ADM):** Persons affected by ADM have the right to request human review and the right to express their position. NGOs deploying AI to make or materially influence decisions about beneficiaries must be able to respond to ADM rights requests. This is not theoretical — it is a present obligation with no sector-specific exemption.

- **Art. 6 Legal Basis:** Processing must rest on a valid legal basis. For beneficiary data processed by AI, this requires clear legal basis documentation (consent, legitimate interest, contractual necessity) — not generic privacy policy language.

- **Art. 16 Cross-Border Transfer:** If AI systems process data outside Switzerland, NGOs must verify that equivalent protection exists. Many international AI vendors do not provide this documentation by default.

- **Art. 22 Rights of Affected Persons:** Beneficiaries have rights to access, correction, and data portability. AI systems that do not support these rights in operational terms create a structural compliance gap.

### Swiss Association Law — Board Liability

Swiss association law (Art. 60 ff. ZGB) imposes fiduciary duties on board members. When a board oversees AI deployment without understanding the associated risks, personal liability exposure is undefined but not zero. Volunteer boards at small NGOs are particularly exposed — they may not have the AI knowledge to discharge their oversight duty, and the legal standard for what constitutes "reasonable oversight" in the AI context has not been tested. This creates a personal risk for board members that is not commonly discussed in the sector.

### Contractual Downstream Obligations

Many Geneva NGOs operate under donor agreements that impose AI governance requirements on implementing partners. The organization bears accountability for AI decisions made by partners it funds — even when the organization has limited visibility into the partner's AI systems. This downstream cascade of liability is not well understood and is not addressed by standard NGO contractual templates.

---

## 05 — Lead Magnet Draft

In Sergio's voice — calm, precise, executive-grade, no hype.

### English Version

**Geneva NGO AI Governance Briefing**

Independent review of your organization's AI deployment decisions — structured against Swiss compliance obligations, donor accountability requirements, and operational risk.

---

Many Geneva NGOs have deployed AI systems for program delivery, beneficiary allocation, or communications — and have done so without a structured governance review. The gap between deployment and governance is now a compliance exposure, not just an operational one.

This briefing examines four questions your board should be able to answer:

1. Who has meaningful accountability when your AI system makes a decision that affects a beneficiary?
2. Are your donor reporting obligations in tension with your confidentiality obligations — and is that tension documented?
3. Does your organization have personal liability exposure under Swiss association law for AI decisions made under board oversight?
4. If the staff member who configured your AI system left next month, could you continue operating it responsibly?

---

**What the briefing includes:**

- 90-minute structured session with executive director and board representative
- Written summary of findings against FADP obligations, ZEWO considerations, and institutional donor requirements
- Identified gaps mapped to specific Swiss legal obligations
- Priority remediation recommendations
- No vendor recommendations — no commission arrangements — no downstream product sales

---

**Price:** CHF 3,200 | Half-day format (4 hours on-site or secure remote)

**Positioning:** Independent review. No vendor affiliations. Structured to board-level comprehension, not technical documentation.

---

For organizations that have completed initial deployment and are now asking whether the governance matches the risk: this is the right conversation to have.

To request a briefing slot: reply to this document or contact directly via the DigitalCoa.ch advisory contact.

---

### French Version

**Briefing Governance IA — ONG Genève**

Analyse indépendante des décisions liées au déploiement de l'IA au sein de votre organisation — structurée selon les obligations suisses de conformité, les exigences de responsabilité des bailleurs et les risques opérationnels.

---

De nombreuses ONG genevoises ont déployé des systèmes d'IA pour la distribution de programmes, l'allocation de ressources aux bénéficiaires ou les communications — souvent sans examen structuré de gouvernance. L'écart entre le déploiement et la gouvernance constitue désormais une exposition à la conformité, et non simplement un risque opérationnel.

Ce briefing examine quatre questions auxquelles votre conseil devrait pouvoir répondre :

1. Qui porte une responsabilité effective lorsque votre système d'IA prend une décision affectant un bénéficiaire ?
2. Vos obligations de rapport aux bailleurs sont-elles en tension avec vos obligations de confidentialité — et cette tension est-elle documentée ?
3. Votre organisation encourt-elle une exposition à la responsabilité personnelle en vertu du droit suisse des associations pour les décisions d'IA prises sous la supervision du conseil ?
4. Si le collaborateur qui a configuré votre système d'IA partait demain, pourriez-vous continuer à l'exploiter de manière responsable ?

---

**Contenu du briefing :**

- Session structurée de 90 minutes avec le directeur exécutif et un représentant du conseil
- Rapport écrit des conclusions au regard des obligations nFADP, des considérations ZEWO et des exigences des bailleurs institutionnels
- Cartographie des lacunes identifiées selon les obligations légales suisses spécifiques
- Recommandations de remediation priorisées
- Aucune recommandation de fournisseur — aucun arrangement de commission — aucune vente de produit en aval

---

**Prix :** CHF 3 200 | Format demi-journée (4 heures sur site ou à distance sécurisé)

**Positionnement :** Analyse indépendante. Aucune affiliation fournisseur. Structurée pour la compréhension du conseil, non pour la documentation technique.

---

Pour les organisations qui ont déployé un système d'IA et qui se posent désormais la question de l'adéquation entre gouvernance et risque : cette conversation est la bonne à avoir.

Pour demander un créneau de briefing : répondez à ce document ou contactez-nous directement via le canal advisory DigitalCoa.ch.

---

## 06 — Findings Summary

Six net-new insights, distinct from all prior Phase 04 cycles (C214–C220).

---

**Finding 1: The Accountability Vector Problem**

Geneva NGOs operate a structural accountability inversion: AI accountability is framed upward (to donors, boards, institutional partners) but not downward (to beneficiaries affected by AI decisions). Public accountability commitments and FADP Art. 21 ADM rights are unconnected in practice. No Geneva NGO has a functioning beneficiary-facing AI accountability mechanism. This is not a communication problem — it is a governance architecture problem. The organization's stated values and its operational AI accountability structure are misaligned. The exposure becomes acute when a beneficiary challenges an AI-generated decision and the organization has no documented process to respond.

**Finding 2: The Dual Obligation Data Collision**

The intersection of donor AI visibility requirements (algorithmic transparency, output documentation, outcome data) and FADP beneficiary confidentiality obligations (data minimization, legal basis, cross-border transfer restrictions) creates an unresolvable position for many NGOs. They cannot simultaneously satisfy donor reporting requirements and protect beneficiary data as required by Swiss law — without explicit documentation of the tension and a formal mitigation strategy. This collision is not recognized in the sector. Organizations are managing it informally, which means it is not managed. First-party documentation of this tension is the only protective measure.

**Finding 3: Personal Board Liability Under Swiss Association Law for AI Oversight**

Swiss association law (Art. 60 ff. ZGB) imposes fiduciary duties on board members. When a board oversees AI deployment without understanding the associated risks, the question of whether "reasonable oversight" was exercised is open. For volunteer boards at small NGOs, this is a structural exposure: boards are being asked to govern AI systems they lack the knowledge to evaluate, and Swiss law provides no safe harbor for this gap. This specific liability topology — organization, board, director, staff, vendor — has not been mapped for the Geneva NGO context by any advisory provider.

**Finding 4: AI Knowledge Continuity as Organizational Memory Problem**

When AI-trained staff depart, the organization's ability to reproduce, audit, or continue operating AI-dependent programs departs with them. This is not a general IT knowledge management problem — it is specific to AI systems where undocumented configuration creates both operational discontinuity and FADP compliance gaps (systems no one can explain are systems that cannot satisfy Art. 21 ADM review requests). No Geneva NGO has a structured AI knowledge handover process. This is a systematic, unaddressed operational risk at the sector level.

**Finding 5: Procurement Governance Does Not Evaluate AI Risk**

NGO procurement frameworks check financial compliance, data security certifications, and contractual terms. They do not evaluate: output reliability over time, vendor financial sustainability, explanation capability, configuration drift risk, or harm attribution clarity. The consequence is that NGOs procure AI systems that pass organizational procurement requirements without substantive AI risk assessment. No sector-standard AI procurement governance checklist exists for Geneva NGOs. This is a structural market failure: the organizations most exposed to AI risk are using procurement tools designed for a different risk category.

**Finding 6: AI Reporting Dependency Creates Structural Lock-In**

Once an NGO begins using AI to generate donor reports, the donor relationship becomes conditioned on continued AI-generated output quality. Discontinuing or changing the AI system disrupts reporting consistency, which triggers donor concern about program continuity and organizational capacity. This creates a self-reinforcing dependency: AI reporting generates accountability documentation donors expect, making system change operationally and relationally costly. The dependency is not visible at deployment — it becomes visible only when the organization needs to change. By then, the lock-in is structural.

---

*Phase 04 — Geneva NGO/Tech — C221 | Completed 2026-04-26 23:04 GMT+2*