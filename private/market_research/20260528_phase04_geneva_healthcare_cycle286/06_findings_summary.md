# Findings Summary: Geneva Healthcare AI Accountability
## Phase 04 — Cycle C286

---

## Key Insights

### Finding 1: Liability Ambiguity Is the Primary Adoption Blocker

Geneva independent practitioners (2-10 physicians) are not avoiding AI because they don't see the value — they're avoiding it because they don't understand what "I remain responsible" means operationally.

**The gap:** No practical framework exists for physicians to document human oversight of AI in a legally defensible way. FMH guidance is clear on principle but silent on procedure.

**The opportunity:** Create practical documentation protocols, consent templates, and decision trees that translate "responsibility" into daily practice.

---

### Finding 2: nFADP Compliance Is Under-Addressed

The revised Federal Act on Data Protection (in force since September 2023) creates specific obligations for medical practices using AI:

- DPIAs mandatory for high-risk automated processing of medical data
- Sensitive data (health information) requires heightened protection measures
- Data breach notification obligations
- Consent requirements for AI-assisted clinical documentation

**The gap:** Most small practices don't have the internal expertise to conduct a proper DPIA or assess whether they need one. Consent forms haven't been updated to reflect AI usage.

**The opportunity:** Offer DPIA guidance as a standalone service, or create DPIA template frameworks specifically for small medical practices.

---

### Finding 3: MedDO Classification Is Widely Unknown

Swissmedic's swissdamed registration system (voluntary since August 2025, mandatory from July 2026) applies to AI tools that qualify as medical devices. Many AI scribes and diagnostic support tools likely fall under this classification.

**The gap:** Independent physicians don't know how to determine whether their AI tool is a medical device, what class it falls into, and what registration obligations apply.

**The opportunity:** Create a simple MedDO classification decision tree for independent practices. Position advisory services as the alternative to Swissmedic's technical documentation.

---

### Finding 4: "Hosted in Switzerland" Is Necessary But Not Sufficient

Every Swiss-focused AI vendor leads with Swiss data hosting. But many tools route data through US-based LLM providers (OpenAI, Anthropic, Google) despite Swiss infrastructure at the application layer.

**The gap:** Physicians don't know to ask about the full data chain. They see "Swiss hosted" and assume compliance without investigating the upstream providers.

**The opportunity:** Independent vendor evaluation that maps the actual data flow — not just the hosting location. This is a clear differentiator for advisory services.

---

### Finding 5: Market Is Tool-Saturated, Governance-Starved

The Swiss healthcare AI market has numerous vendors (Haidy, Intonate, Evoya, MPAssist, AIAgens, Mira AI, etc.) offering excellent tools. But almost no vendor offers governance-level support.

**The gap:** Physicians are being sold AI tools by vendors who have no obligation to advise on compliance, liability, or governance. The physician is left to figure out nFADP, MedDO, and FMH obligations on their own.

**The opportunity:** Position advisory services as the missing layer between tool vendors and regulatory requirements. Physicians need a guide, not just a tool.

---

### Finding 6: Entry Point Is Overwhelm, Not Curiosity

The typical Geneva ICP doesn't arrive at the AI question through enthusiasm. They arrive because:

- A patient asked about the AI tool being used
- A vendor pitched them something and they couldn't assess the claims
- A colleague mentioned swissdamed and they realized they might be non-compliant
- Their EMR vendor added AI features they haven't evaluated

**The opportunity:** Lead with an AI readiness assessment that addresses the immediate anxiety (am I compliant? what am I missing?) rather than the opportunity framing (AI can transform your practice). The fear-driven entry point is more common than the aspiration-driven one.

---

## Ready-to-Use Language

### For Cold Outreach / Positioning

**English:**
*"Most Geneva physicians I speak with aren't sure whether their AI tools are properly classified under Swissmedic rules, whether their patient consent forms cover AI-assisted documentation, or whether their vendors' 'Swiss-hosted' claims hold up under scrutiny. If any of that sounds familiar, I'd like to show you a two-page risk profile we've developed for independent practices. No cost to review."*

**French:**
*"La plupart des médecins genevois avec qui je discute ne savent pas si leurs outils d'IA sont correctement classés selon les règles Swissmedic, si leurs formulaires de consentement patient couvrent la documentation assistée par IA, ou si les affirmations 'hébergé en Suisse' de leurs fournisseurs tiennent vraiment. Si cela vous parle, je voudrais vous présenter un profil de risque de deux pages que nous avons développé pour les cabinets indépendants. Pas de frais pour revoir ensemble."*

---

### For Content / Lead Magnet

**Problem framing (EN):**
*"You've read the FMH guidance. You know you remain responsible for all clinical decisions even when using AI. But what does that actually mean when you're staring at an AI-generated recommendation at 10pm before signing a prescription? How do you document that the decision was yours? What does your consent form actually need to say? And how do you know if the tool you're using is even classified correctly with Swissmedic?"*

**Problem framing (FR):**
*"Vous avez lu les directives de la FMH. Vous savez que vous restez responsable de toutes les décisions cliniques même en utilisant l'IA. Mais qu'est-ce que ça veut dire concrètement quand vous êtes devant une recommandation générée par IA à 22h avant de signer une ordonnance ? Comment documentez-vous que la décision était la vôtre ? Que doit réellement dire votre formulaire de consentement ? Et comment savez-vous si l'outil que vous utilisez est même correctement classé auprès de Swissmedic ?"*

---

### For Value Proposition

**The offer:** AI governance framework, not AI tool recommendation.

*"I'm not selling you an AI tool. I'm helping you understand what you're responsible for, where your compliance gaps are, and how to document your oversight in a way that actually protects you. If you want to understand your AI exposure before you adopt anything — or understand whether what you're already using is compliant — let's talk."*

---

## Regulatory Reference Points (Citable)

| Framework | Key Obligation | Source |
|---|---|---|
| nFADP | DPIA mandatory for high-risk automated processing of medical data | Art. 22 nFADP |
| nFADP | Fines up to CHF 250,000 for violations | Art. 9 nFADP |
| FMH | Physician retains full responsibility for clinical decisions with AI | FMH professional code |
| FMH | Digital competency requirements for physicians using AI | FMH working paper on digital competencies |
| MedDO | AI tools making clinical decisions may qualify as medical devices | Medical Devices Ordinance |
| swissdamed | Voluntary registration since August 2025, mandatory July 2026 | Swissmedic |
| Council of Europe AI Convention | Ratified by Switzerland February 2025, primarily affects state actors | Federal Council decision Feb 2025 |

---

## Phase 04 NET-NEW Findings (Distinct from C214-C285)

These represent findings not previously captured in the market research rotation:

1. **DPIA gap for small practices** — No practitioner-friendly DPIA template or guidance exists specifically for Swiss medical practices under nFADP
2. **MedDO classification confusion** — swissdamed registration thresholds and classification decision tree not clearly communicated to independent practitioners
3. **Full data chain transparency gap** — "Swiss hosted" vs. "Swiss-processed" distinction not understood; US-based LLM providers in the data path not disclosed by most vendors
4. **Consent form obsolescence** — Existing patient consent forms in Swiss medical practices were written before AI tools existed; none currently address AI-assisted documentation
5. **Human oversight documentation gap** — No practical framework exists for physicians to create legally defensible records of human validation of AI outputs
6. **Geneva-specific institutional caution signal** — City of Geneva AI Use Policy signals broader Geneva institutional hesitation toward AI deployment; this conservative posture is likely reflected in independent physician attitudes

---

*Summary compiled from: FMH publications, nFADP text, Swissmedic documentation, Swiss physician surveys, vendor analysis, Geneva healthcare community context, FOPH regulatory framework, Council of Europe AI Convention (Feb 2025 Federal Council decision).*