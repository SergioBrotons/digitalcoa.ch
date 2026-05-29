# Findings Summary: Geneva Healthcare — C290 Phase 04

## Key Insights and Ready-to-Use Language

---

## Six Net-New Findings (Distinct from C214–C289)

These findings represent fresh intelligence specific to this rotation pass. Each is named with its distinguishing structural characteristic versus prior findings.

---

### Finding 1: AI Tool Portfolio Accumulation Without Inventory

**Core insight:** Independent Geneva practices have accumulated 5–8 active AI features across their technology stack through incremental vendor updates, staff activation, and embedded feature rollouts — none of which received a conscious physician governance decision. The total AI surface is undocumented. No physician in Geneva independently has a complete inventory of the AI tools and features currently active in their practice.

**Ready-to-use language:**
> "By the time most Geneva independent physicians realize AI is active in their practice, it has been active for months — across multiple systems they did not consciously authorize. The AI surface accumulated, but the governance decision never happened."

**Structural distinction:** Prior findings addressed the "first AI decision" problem. This finding addresses the portfolio inventory problem — the situation where the AI surface has grown beyond any single governance decision and no physician has a methodology for taking stock in aggregate.

---

### Finding 2: Patient-Initiated AI Content Entering Medical Records

**Core insight:** Patients in Geneva are now arriving at consultations with AI-generated health analyses from consumer AI tools — printed summaries, screengrabs, AI-summarized medical histories. Physicians are incorporating this content into medical records with no documentation standard for handling it. The physician cannot evaluate the AI system that produced it, cannot document what it did, and faces professional accountability for AI output they did not request.

**Ready-to-use language:**
> "A patient showed up with a 10-page AI analysis they ran at home. Now it is in their record. I never asked for it, I cannot explain what the AI did, and I cannot take it out of the documentation. I am responsible for AI content I did not deploy."

**Structural distinction:** All prior physician-facing AI governance guidance addresses physician-deployed AI. No prior finding has addressed patient-deployed consumer AI entering the clinical record through patient initiative — creating physician accountability for AI output they neither requested nor supervised.

---

### Finding 3: Geneva Cantonal Guidance Vacuum at Independent Practice Scale

**Core insight:** The Service de la santé publique has issued no canton-specific guidance on AI deployment for independent practices. Independent physicians are navigating federal frameworks (FMH, Swissdamed, MedDO) with no Geneva-calibrated interpretation. Institutional AI governance decisions at CHUV and HUG are forming effective standards without any methodology transmission pathway to independent practices. The FMH guidance is the de facto operative standard for Geneva physicians — with no proportionality filter for small independent practice scale.

**Ready-to-use language:**
> "I called the canton. They told me to check the federal guidance. I called the FMH. Their guidelines assume a hospital department. The people making the decisions are not in my position, and there is no local standard I can refer to."

**Structural distinction:** Prior findings identified FMH-level guidance lacking operational methodology. This finding isolates the cantonal dimension — the specific absence of Geneva-calibrated practical guidance for independent practice scale, and the structural exclusion of independent practices from institutional governance formation rooms.

---

### Finding 4: Technical Inability to Opt Out as De Facto AI Authorization

**Core insight:** Vendor terms in commonly used clinical software create AI activation through click-through acceptance. Some AI features cannot be technically opted out of without losing system functionality the physician depends on. The data usage provisions in vendor terms — including model training on patient data — are buried in settings not surfaced during normal software use. The physician who continues using the platform has accepted AI terms they have not evaluated, for an AI tool they did not consciously activate, with data processing obligations they did not know existed.

**Ready-to-use language:**
> "I checked the settings and if I turn off the AI features, the system loses functionality I actually need. So I am stuck with AI I did not choose, using patient data I cannot fully trace, in terms I have never read."

**Structural distinction:** Prior findings established vendor contract signature as professional liability acceptance. This finding specifically isolates technical inability to opt out as creating de facto AI authorization (not de jure), and identifies the data usage for model training as a discrete nFADP Art.6 lawful basis problem distinct from the AI output accountability problem.

---

### Finding 5: AI Training Documentation as Discrete Exposure Category

**Core insight:** When AI tools are deployed in a practice, vendor-provided product training does not map to FMH AI oversight documentation requirements. No standard exists for what AI competency documentation a physician must maintain as professional evidence. The most common current practice in Geneva independent practices: zero documentation of how AI was deployed, trained on, or supervised. A physician who cannot demonstrate AI oversight methodology faces the same exposure as a physician who deployed AI negligently.

**Ready-to-use language:**
> "I watched some videos when the vendor rolled out the AI features. That is not training documentation. That is not oversight evidence. But I don't know what training documentation I am supposed to keep, and I have never been told."

**Structural distinction:** Prior findings addressed FMH oversight principle without operational endpoint. This finding isolates the training documentation gap as a discrete structural exposure category — where the competency question (can you explain what the AI did) is distinct from the oversight question (did you maintain appropriate supervision), and no Geneva-calibrated guidance addresses what AI training documentation a small practice physician must maintain.

---

### Finding 6: Second-Physician AI Consultation Accountability Problem

**Core insight:** When a physician requests a second opinion from a colleague and the consulting physician uses AI to support their review, the original physician receives AI-generated input through a second physician's AI system with no documentation standard. The AI-assisted second opinion enters the patient's record as part of the original physician's documentation — creating accountability for AI output from a system they did not deploy, cannot evaluate, and cannot explain. No Geneva protocol exists for what "disclose AI use in second opinion" means operationally.

**Ready-to-use language:**
> "A colleague I asked for a second opinion ran it through an AI tool. The recommendation came back with AI analysis. Now it is in my patient's record. I never asked for AI and I cannot explain what it did. But I wrote the note."

**Structural distinction:** All prior findings address the primary physician's own AI use. This finding addresses a genuinely new accountability structure: AI use by a second physician creating a derivative accountability concern for the primary physician. The problem is structurally different because the primary physician did not deploy the AI and cannot document what they did not control.

---

## ICP Summary Language (Directly Usable)

**The problem nobody names clearly:**
Geneva independent physicians are using AI in their practices — through practice management software updates, embedded clinical features, administrative tools, imaging platforms — and they have never had a methodology for understanding what AI is active, what it is doing in their records, and what they are personally accountable for.

**The urgency frame:**
AI arrived in most practices through vendor processes, not governance decisions. Records accumulated with AI-assisted content. Carrier attestation forms started circulating. And no Geneva service existed to give independent practices a proportionate, actionable AI governance methodology calibrated to their practice scale.

**The structural reality:**
FMH oversight obligation is a principle without an operational endpoint. Swissdamed classification is a framework that does not calibrate to physician practice scale. Carrier attestation is a form without a reference standard. Institutional intelligence is inaccessible. And the physician is personally accountable for all of it.

**Why existing market solutions don't work:**
- Practice management vendors sell efficiency, not accountability
- FMH guidance is principle-level without small-practice methodology
- Carrier AI forms are underwriting instruments, not professional accountability tools
- General data protection services do not address the FMH professional accountability layer
- Institutional AI governance offerings are designed for organizations with governance infrastructure

**What no one provides at Geneva independent practice scale:**
A proportionate AI governance methodology, specific to the 2–10 physician outpatient practice, calibrated to the Geneva regulatory environment, that gives independent physicians the operational methodology they need to answer the question: what am I actually responsible for?
