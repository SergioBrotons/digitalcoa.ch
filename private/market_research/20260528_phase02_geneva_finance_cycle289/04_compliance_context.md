# Compliance Context: Geneva / Switzerland — AI Accountability

**Phase:** C289 Phase 02
**ICP:** Boutique wealth management firms, 50–200 employees, Geneva-based
**Role:** Managing director or partner, personally accountable
**Date:** 2026-05-28

---

## Geneva / Switzerland Specific Regulatory Landscape

---

### 1. FINMA Supervision and AI

**Current state:**

FINMA has not issued a dedicated circular on AI deployment in wealth management. What exists:

- **FINMA Guidance on Ethical AI Use (2024)** — General principles, not a regulatory framework. States that AI applications must be controllable, transparent, and fair. Does not specify how WM firms should implement this.
- **FINMA Circular on Model Risk (2017)** — Originally designed for banks. Wealth managers are uncertain whether it applies to them. The circular addresses models used in risk measurement, credit processes, and algorithmic decision-making. Some WM firms interpret this as applicable; FINMA has not clarified.
- **FINMA Technology Risk Circular** — Addresses IT infrastructure risk, cybersecurity, outsourcing. AI tools fall partially under this if they involve data processing or algorithmic outputs.

**Key problem:** No clear "this applies to you" statement for boutique WMs using AI in portfolio management.

**What WM MDs need:** A practical interpretation of FINMA expectations for their specific context.

---

### 2. SRO Framework (Asset Management Switzerland / ASG)

**Current state:**

- SROs (Self-Regulatory Organizations) supervise asset managers under FinSA
- ASG and SFAMA are the primary SROs for asset managers
- Neither has issued practical AI governance guidance for members

**What this means:**
- Asset managers subject to SRO supervision have no industry association guidance on AI governance
- They cannot point to an SRO standard as evidence of "adequate governance"
- Each firm's approach is unauditable against any industry reference

---

### 3. FinSA (Financial Services Act) — AI Relevance

**Relevant provisions:**

- **Art. 7 FinSA** — Duty to provide information. AI-assisted recommendations may trigger disclosure obligations: clients must be informed when AI is used in their portfolio management.
- **Art. 8 FinSA** — Suitability and appropriateness. AI-driven recommendations must meet suitability standards. MDs are concerned: can an AI system demonstrate suitability compliance for specific client profiles?
- **Art. 9 FinSA** — Documentation requirements. All advisory actions must be documented. AI systems generating recommendations: can they produce audit-ready records?
- **Art. 26 FinSA** — Duty to act in best interest. AI systems: whose "best interest" does the algorithm optimize for?

**Key risk:** If an AI system recommends unsuitable investments, can the MD demonstrate the recommendation met FinSA Art. 8 standards? If the AI system's logic is opaque, the answer is no.

---

### 4. nFADP (Revised Federal Act on Data Protection) — Article 63

**Article 63 — Administrative Sanctions**

Key provisions:
- Fines up to CHF 1M for serious violations of the nFADP
- Administrative sanctions can be imposed on natural persons — specifically managing directors
- Applies to: unlawful processing of personal data, failure to implement appropriate technical and organizational measures, breaches of consent requirements

**Why this is critical for WM firms:**

AI tools in portfolio management process extensive personal data:
- Client financial situations
- Investment risk profiles
- Personal assets and liabilities
- Family structures and beneficiaries
- Health information (in some private wealth contexts)

**Article 63 liability chain for AI deployment:**

1. WM firm deploys AI tool (vendor-selected by MD)
2. AI tool processes client personal data (nFADP scope)
3. Data breach or unlawful processing occurs
4. FINMA or FDPIC investigates
5. Sanction applied to managing director personally — not to the vendor, not to the firm as an abstract entity

**What MDs don't know:**
- Whether their AI vendor contracts properly address Art. 63 liability
- Whether client consent frameworks for AI-assisted profiling meet nFADP requirements
- What "appropriate technical and organizational measures" means for AI systems specifically

---

### 5. Carrier Attestation — Insurance Context

**PI (Professional Indemnity) Insurance:**

- Swiss wealth managers typically carry PI insurance
- Insurers have begun adding AI governance attestation clauses to renewal questionnaires
- No industry standard defines "adequate AI governance controls"
- MDs are signing attestations that could be used against them in a claim

**Key gap:** If a claim arises from an AI-assisted decision and the carrier can demonstrate the MD attested to "adequate controls" that were not in place, the carrier may deny coverage.

---

### 6. Institutional Client AI DDQ — Due Diligence Context

**What institutional clients are asking:**

Family offices and pension funds have begun including AI governance questions in their manager due diligence questionnaires (DDQs). Typical questions:

1. Do you use AI tools in portfolio management? If yes, which ones?
2. How do you ensure oversight of AI-generated recommendations?
3. What is your data governance policy for client data used in AI systems?
4. Can you demonstrate that your AI systems do not produce discriminatory outcomes?
5. How do you handle AI-related incidents or model failures?
6. What is your vendor due diligence process for AI tools?
7. Do you have a written AI governance policy?
8. How do you ensure compliance with applicable data protection regulations?

**The boutique WM problem:** These questions require structured, documented responses. Most boutiques have no formal AI governance policy document. Their responses are ad hoc, inconsistent, and potentially expose them to liability.

---

## Summary: Regulatory Pressure Points

| Pressure Point | Regulator / Actor | Status | MD Concern |
|---|---|---|---|
| AI governance expectations | FINMA | Not specific to WM | High |
| Model risk oversight | FINMA (Circular 2017) | Ambiguous applicability | High |
| FinSA suitability | FINMA / SRO | Unclear for AI | High |
| SRO guidance | ASG / SFAMA | Absent | Medium |
| nFADP Art. 63 personal liability | FDPIC / FINMA | Active, underenforced but real | Very High |
| Carrier attestation | PI insurers | Vague standard, coverage risk | High |
| Institutional client DDQ | Clients / prospects | Active, increasing | High |

---

## NET-NEW Findings (C289 Phase 02)

1. **FINMA WM AI guidance gap** — No specific circular. MDs operate in interpretive uncertainty. The 2017 Model Risk circular may apply but has not been confirmed for WMs.

2. **SRO guidance vacuum** — ASG/SFAMA have issued only generic AI principles. No operational guidance for SRO-supervised asset managers.

3. **FinSA AI applicability uncertainty** — Art. 7, 8, 9 all relevant but not explicitly applied to AI. Suitability documentation for AI-driven recommendations is a specific exposure.

4. **Art. 63 nFADP personal liability** — Managing directors can be fined up to CHF 1M personally. AI tools processing client personal data create direct exposure. No vendor addresses this liability chain.

5. **Carrier attestation coverage risk** — Attestations signed without an underlying standard create potential coverage denial scenarios. MDs don't know this is a risk.

6. **Institutional AI DDQ as de facto standard** — Without regulatory guidance, institutional client questionnaires are becoming the de facto standard for AI governance expectations. Firms with strong DDQ responses will win mandates; firms that can't respond will lose them.

---

## French-Language Compliance Context (Parallel)

### Contexte réglementaire suisse

**FINMA :** Pas de circulaire spécifique sur l'IA dans la gestion de fortune. Attentes générales formulées en 2024 (utilisation éthique de l'IA). La circulaire sur le risque de modèle (2017) pourrait s'appliquer — pas de clarification pour les gérants de fortune.

**FinSA :** Art. 7 (devoir d'information), Art. 8 (adéquation), Art. 9 (documentation) — tous pertinents pour les recommandations générées par IA. Le directeur général doit pouvoir démontrer que le système IA respecte ces obligations.

**nFADP :** Art. 63 — sanctions administratives jusqu'à CHF 1M sur des personnes physiques (directeurs généraux). Les outils IA qui traitent des données personnelles de clients (situation financière, profil de risque, patrimoine) créent une exposition directe.

**Attestation de l'assureur :** Pas de standard « gouvernance IA adéquate ». Les directeurs généraux signent des attestations qui pourraient être retournées contre eux en cas de sinistre.

**Questionnaires des clients institutionnels :** Deviennent la norme de fait pour les attentes en gouvernance IA. Une étude de gestion de fortune qui ne peut pas répondre perd des mandats.