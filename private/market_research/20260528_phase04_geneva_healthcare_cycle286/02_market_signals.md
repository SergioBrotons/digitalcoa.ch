# Market Signals: Geneva Healthcare AI — Current Problems & Failures
## Phase 04 — Cycle C286

---

## Current Problems in the Market

### 1. Liability Ambiguity in Practice

**Signal:** Swiss primary care physicians consistently cite "responsibility for errors" as their primary concern about AI. A 2024 survey showed substantial anxiety about who bears liability when AI-assisted decisions go wrong.

**What this looks like in practice:**
- A physician uses an AI diagnostic support tool, follows its recommendation, and the patient is harmed. No clear pathway exists for determining liability between physician, vendor, and software developer.
- Physicians don't know how to document their human oversight in a legally defensible way.
- No Swiss case law exists yet, creating uncertainty that paralyzes adoption.

**Geneva-specific dimension:** Geneva's high concentration of specialists and independent practitioners means liability questions affect a wide range of clinical contexts — from dermatology AI to radiology support to administrative automation.

### 2. Data Protection Compliance Overload

**Signal:** The nFADP (revised Federal Act on Data Protection) came into force September 1, 2023. Healthcare providers are still struggling to understand what "automated processing of medical data" requires in practice.

**What this looks like in practice:**
- Physicians don't know whether routine AI-assisted transcription requires a Data Protection Impact Assessment (DPIA).
- Unclear whether "AI as a service" vendors with servers outside Switzerland are permissible for non-clinical administrative tasks.
- Consent forms haven't been updated to reflect AI usage — many practices are using outdated templates.
- No clear guidance on what "explicit consent" means for AI-assisted clinical documentation.

**The DPIA problem:** DPIAs are mandatory for high-risk automated processing of medical data. But small practices don't have the expertise or resources to conduct them, and there's no clear "threshold" for what qualifies as high-risk.

### 3. Medical Device Classification Confusion

**Signal:** Swissmedic has begun implementing swissdamed (voluntary registration since August 2025, mandatory from July 2026). Many AI tools used in medical practices likely qualify as medical devices — but physicians don't know it.

**What this looks like in practice:**
- A practice adopts an AI scribe that automatically generates clinical notes. If this tool makes recommendations about diagnoses or treatment pathways, it may qualify as a medical device under the Medical Devices Ordinance (MedDO).
- The practice is unaware they may have registration obligations.
- No clear checklist exists for physicians to determine whether an AI tool requires Swissmedic registration.
- Confusion about Class I (self-declaration) vs. higher-risk classifications.

### 4. Vendor Credibility Assessment Gap

**Signal:** The Swiss healthcare AI market is proliferating with vendors — Evoya AI (Konversa), MPAssist (Scribe AI), AlpineAI (Swiss HealthAssist), AIAgens, Intonate, Haidy Reporter, Mira AI — but physicians have no framework for evaluating claims.

**What this looks like in practice:**
- A vendor claims "HIPAA ready" or "FADP compliant" — but what does that mean for a Swiss medical practice?
- Vendors host data in Switzerland but use US-based LLM providers (OpenAI, Anthropic, Google). Physicians don't know to ask about this.
- Marketing language ("AI assistant," "decision support") obscures whether the tool makes clinically relevant decisions requiring specific consent.
- No trusted, independent source exists for physicians to compare tools on data sovereignty, security certifications, and regulatory compliance.

### 5. AI Literacy Gap Among Practitioners

**Signal:** FMH has published on digital competencies for physicians, but the translation from policy to practice is slow. Many independent practitioners lack the baseline understanding to evaluate AI tools critically.

**What this looks like in practice:**
- Physicians don't understand how AI models work — and vendors exploit this.
- Over-reliance on AI-generated recommendations without critical evaluation.
- Inability to identify bias in AI outputs or understand limitations.
- "Black box" problem: physicians cannot explain to patients how a decision was reached with AI assistance.

### 6. International Regulatory Spillover Confusion

**Signal:** Switzerland is NOT adopting the EU AI Act directly, but the EU framework affects Swiss market access for AI-powered medical devices. Physicians are confused about which rules apply.

**What this looks like in practice:**
- Vendors marketing in Switzerland reference EU AI Act requirements that don't legally apply in Switzerland.
- The Council of Europe AI Convention (ratified by Switzerland in principle) will primarily affect state actors, not private practices — but this distinction isn't clear.
- Physicians worry they're out of compliance with "European AI rules" when the actual Swiss framework is different.

---

## Market Failure Summary

| Failure | Who Experiences It | Current Consequence |
|---|---|---|
| Liability ambiguity | Independent practitioners | Adoption paralysis |
| nFADP compliance complexity | All healthcare AI users | Risk exposure, potential violations |
| MedDO classification confusion | Practices using AI scribes/diagnostics | Unknowing non-compliance |
| Vendor assessment gap | Small practices (2-10) | Wrong tool selection, data sovereignty issues |
| AI literacy gap | Senior physicians | Over-reliance, blind spots |
| Regulatory confusion (EU vs CH) | All practitioners | Compliance uncertainty |

---

*Signals drawn from: Swiss physician surveys, FMH publications, OneDoc healthcare blog, Swissmedic documentation, nFADP implementation guidance, vendor market analysis, Geneva healthcare community discussions.*