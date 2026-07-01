# Competitive Analysis: Geneva Healthcare — C313 Phase 04

## What Exists in Market vs. What's Missing (Post-31-Day Pause, July 2026)

---

## Existing Market Offerings (Geneva Healthcare AI Governance / Documentation)

### 1. Swissmedic Medical Device Operator Certification Programs
**What they offer:** Swissmedic medical device operator certification for AI-enabled medical device operators (post-Swissdamed voluntary compliance from July 2026). Generic Swissmedic framework for operators of Class I/II/III medical devices including AI-enabled devices.
**What they don't offer:**
- Encounter-level attestation evidence architecture (they certify the operator, not the encounters)
- Patient consent form architecture for AI tool adoption timing
- Médecin remplaçant coverage AI governance documentation
- EMR-AI extension vendor data residency audit
- AI scribe vendor succession planning for patient medical records
- Personal nFADP Art.63 exposure documentation for the physician as data controller

### 2. FMH Continuing Medical Education on AI in Clinical Practice
**What they offer:** FMH CME-accredited courses on AI in clinical practice (basic awareness level — what is AI, what are the clinical use cases, what are the ethical considerations). CME credits issued for completion.
**What they don't offer:**
- Carrier attestation preparation course (no FMH-endorsed template)
- Patient consent form revision methodology
- Convention de remplacement AI clause template
- EMR-AI extension vendor audit methodology
- AI scribe vendor succession planning methodology
- Per-physician personal AI governance documentation architecture

### 3. HIN-Protected EMR Vendor Certification
**What they offer:** HIN (Health Info Net) corridor-protected EMR vendors (e.g., Vitodata, Mediway, Triamed, WinMed, etc.) with Swiss-hosted data and HIN transport corridor.
**What they don't offer:**
- AI extension data residency attestation per AI tool
- Sub-processor chain disclosure for AI extensions
- Patient consent form update workflow for AI tools
- Convention de remplacement AI clause template
- AI scribe vendor succession terms for patient records
- AI governance cross-vendor documentation architecture

### 4. AI Scribe Vendor Self-Compliance Documentation
**What they offer:** AI scribe vendors (Nuance DAX, Abridge, Suki, Microsoft DAX Copilot, Swiss-developed alternatives) provide their own HIPAA, GDPR, and nFADP self-compliance documentation. Some provide HIN corridor compatibility. Some provide Swiss data center options.
**What they don't offer:**
- Encounter-level physician attestation preparation
- Carrier attestation language that bridges vendor documentation and physician practice
- Patient consent form template for AI scribe use that satisfies physician practice law
- Convention de remplacement AI clause template
- Succession terms for patient medical records on vendor bankruptcy or acquisition
- Cross-vendor (scribe + clinical decision support + drug-interaction checker) AI governance architecture

### 5. Medical Liability Carrier Attestation Support
**What they offer:** Medical liability carrier-provided attestation templates and attestation-completion workflows. Some carriers (Swiss insurance market — Zurich, Allianz Suisse, Mobilière, Generali, AXA Winterthur, Bâloise) provide attestation assistance through médecin-conseil brokers or carrier-attested advisory channels.
**What they don't offer:**
- Encounter-level attestation evidence architecture (they collect attestation responses, they don't help physicians generate encounter-specific evidence)
- Patient consent form freshness audit
- Convention de remplacement AI clause review
- EMR-AI extension vendor audit
- AI scribe vendor succession planning
- Independent cross-vertical AI governance architecture

### 6. FDPIC nFADP Compliance Consulting
**What they offer:** FDPIC-aligned nFADP compliance consulting (often through legal counsel or specialized data protection consultancies). Some provide healthcare-specific guidance.
**What they don't offer:**
- Medical-specific encounter-level nFADP Art.63 documentation
- Patient consent form AI tool update methodology
- Convention de remplacement AI governance
- EMR-AI extension vendor residency audit
- AI scribe vendor succession planning
- Per-physician personal AI governance documentation architecture

### 7. Specialty Society Guidance (AMG Sections, SSMIG, SSMIG sections, Société Médicale de la Suisse Romande)
**What they offer:** Specialty society guidance notes on AI use in [specialty] practice. Some provide recommended consent form language. Some provide attestation language suggestions.
**What they don't offer:**
- Encounter-level attestation evidence architecture
- Patient consent form freshness audit methodology
- Convention de remplacement AI clause templates
- EMR-AI extension vendor audit
- AI scribe vendor succession planning
- Per-physician personal AI governance documentation architecture

### 8. Geneva-Based Boutique AI Governance Consultancies
**What they offer:** A small number of Geneva-based boutique consultancies offering AI governance advisory for healthcare practice (3–5 active firms, often operating out of Geneva and Lausanne). Some offer HIPAA / GDPR / nFADP general framework advice.
**What they don't offer:**
- Encounter-level attestation evidence architecture specific to AI scribe use
- Convention de remplacement AI clause development
- EMR-AI extension vendor residency audit
- AI scribe vendor succession / patient records portability planning
- Per-physician personal nFADP Art.63 + Art. 321 CP medical secrecy documentation architecture
- Geneva medical conference peer benchmark monitoring

---

## What's Missing — The C313 White Spaces (Healthcare Specific)

The 6 NET-NEW C313 Phase 04 findings identify 6 service module white spaces — discrete, named, triggerable services that no current offering delivers. Each adapts the universal C313 post-pause structural condition to the Geneva healthcare channel.

### White Space 1: Medical Liability AI Attestation Form-Completion Vendor Audit
**What's missing:** A discrete, named service that audits the workflow a Geneva physician uses to complete the medical liability carrier AI attestation. The service identifies the attestation-completion tool(s) used (AI assistant, attestation-completion vendor, copy-paste from EMR export), assesses whether those tools process patient encounter transcripts through vendors the carrier has not separately evaluated, evaluates whether the attestation response becomes generic (and therefore loses physician-specific encounter evidence), and produces a remediation plan for an attestation response anchored to physician-specific encounter evidence.
**C313 trigger events:** Annual attestation cycle (typically January), mid-year carrier check-in (typically June), new carrier onboarding, attestation-completion tool change, AI tool inventory change, patient consent form update.

### White Space 2: Mid-Year Medical Liability Carrier AI Check-In Documentation Refresh
**What's missing:** A discrete, named service that produces patient consent forms (including consent form freshness) and AI tool inventory documentation (including per-tool data residency) refreshed at the cadence the medical liability carrier mid-year check-in actually asks for (currently quarterly or mid-year). The service addresses the freshness gap between annual physician documentation cycles and mid-year carrier audit cadence.
**C313 trigger events:** Mid-year carrier check-in form receipt, new AI tool adoption, patient consent form update necessity, médecin remplaçant coverage period end, sub-specialty referral AI delegation activation.

### White Space 3: Médecin Remplaçant + Sub-Specialty Referral AI Authorization Documentation
**What's missing:** A discrete, named service that documents the AI governance handover for médecin remplaçant coverage periods (Convention de remplacement AI clauses, replacing physician AI tool use authorization, encounter documentation distinguishing remplaçant vs. personal encounters, patient consent form coverage during remplaçant period) and for sub-specialty referrals where AI tools are used by the sub-specialist (radiology AI, pathology AI) on data the referring physician is also accountable for. The service produces AI authorization documentation that scales to the structural feature of Geneva practice (every independent physician has 4–12 weeks of coverage per year).
**C313 trigger events:** New Convention de remplacement signing, coverage period activation, sub-specialty referral with AI use, group practice coverage arrangement change.

### White Space 4: EMR-AI Extension Vendor Data Residency (HIN Corridor) Audit
**What's missing:** A discrete, named service that audits the data residency and sub-processor chain for each AI extension operating on patient data within (or alongside) the Swiss-certified EMR. The service identifies the HIN corridor scope limitation (HIN protects transport, not at-rest vendor cloud), maps the sub-processor chain per AI extension, assesses Art. 321 CP medical secrecy and nFADP Art.63 exposure for each AI extension, and produces an EMR-AI extension vendor residency audit memo.
**C313 trigger events:** New AI extension adoption, existing AI extension vendor change (acquisition, pivot, termination), EMR vendor change, sub-processor chain change, carrier or auditor EMR-AI extension question.

### White Space 5: Named-Physician AI Governance Peer Benchmark Gap Analysis
**What's missing:** A discrete, named service that monitors the named-physician AI governance case studies published at Geneva medical conferences (AMG specialty sections, FMH CME, SSMIG Journée, HUG Grand Rounds), maps the specific Geneva physician's current AI governance documentation (attestation, consent form, Convention de remplacement, EMR-AI extension documentation) against the named-physician benchmarks, identifies specific gaps in patient consent form specificity, attestation encounter-level coverage, sub-specialty AI delegation documentation, and remplaçant AI supervision terms, and produces a peer benchmark gap analysis with remediation priorities.
**C313 trigger events:** Annual Geneva medical conference cycle (typically spring–early summer), new named-physician case study publication, attestation cycle preparation, consent form update timing, peer benchmark gap alert.

### White Space 6: AI Scribe / Clinical Decision Support Vendor Succession / Patient Medical Records Portability Planning
**What's missing:** A discrete, named service that plans for AI scribe / clinical decision support / drug-interaction AI vendor succession events (bankruptcy, acquisition, service termination, regulatory pivot) with explicit patient medical records portability terms. The service assesses patient medical records exposure under Art. 321 CP medical secrecy and nFADP Art.63 on vendor exit, prepares patient consent form successor-controller language, reviews vendor contract succession clauses, plans patient notification architecture for vendor exit events, and produces a vendor succession / patient records portability plan.
**C313 trigger events:** AI vendor financial signal, vendor acquisition announcement, vendor service termination announcement, vendor contract renewal, vendor contract negotiation, peer-reported vendor exit event.

---

## Competitive Map (Geneva Healthcare AI Governance, July 2026)

| Category | Q1 (Generic) | Q2 (Specific) | Q3 (Generic + Authoritative) | Q4 (Specific + Evidence) |
|---|---|---|---|---|
| **AI attestation** | Generic nFADP framework consultancies | Specialty FMH guidance notes | — | **WHITE SPACE: Encounter-level attestation evidence architecture (C313 P04) / form-completion vendor audit** |
| **Patient consent** | Specialty society consent templates | Carrier-provided attestation assistance | — | **WHITE SPACE: AI tool freshness audit with named-physician peer benchmark** |
| **Médecin remplaçant governance** | Convention de remplacement template (pre-AI) | — | — | **WHITE SPACE: Convention de remplacement AI clauses + replacing physician AI authorization chain** |
| **EMR-AI extension vendor governance** | Swiss-certified EMR vendors (HIN-protected) | — | — | **WHITE SPACE: Per-extension sub-processor audit + Art. 321 CP + nFADP Art.63 mapping** |
| **AI scribe vendor succession** | Vendor self-compliance documentation | — | — | **WHITE SPACE: Patient medical records portability + Art. 321 CP continuity + successor-controller consent** |
| **Peer benchmark monitoring** | AMG section peer discussion | — | — | **WHITE SPACE: Named-physician case study monitoring + per-physician gap analysis** |

---

## Direct Competitors (Where They Sit)

### Tier A: Generic Compliance / Framework Consultancies
- **Geneva-based data protection consultancies** (FDPIC-aligned, generic nFADP). They sit in Q1 (generic). They lack healthcare-specific encounter-level architecture, sub-specialty AI delegation, médecin remplaçant governance, EMR-AI extension vendor audit. They compete on general compliance expertise, not on physician-specific evidence architecture.
- **Swiss-wide AI governance advisory firms** (Big 4 AI practices, smaller specialty AI advisory firms). They sit in Q1 (generic). They offer AI governance frameworks for Swiss enterprise clients, not for individual Geneva physicians. They lack per-physician encounter-level documentation, Convention de remplacement clauses, patient consent form AI tool updates.

### Tier B: Specialty Society Guidance (FMH, SSMIG, AMG, Société Médicale de la Suisse Romande)
- They sit in Q2 (specific) for some categories (consent form templates, attestation language suggestions, specialty-specific AI use guidance). They do not sit in Q4 because they don't produce per-physician evidence architecture. Their guidance is generic to the specialty, not specific to the individual physician's attestation response, consent form, Convention de remplacement, EMR-AI extension inventory.

### Tier C: EMR Vendors + AI Scribe Vendors + Clinical Decision Support Vendors
- They sit in Q1 / Q3 (generic) for their own products. They provide vendor-specific compliance documentation, HIPAA / GDPR / nFADP self-certification, sometimes Swiss data center options. They do not sit in Q4 because they don't produce per-physician cross-vendor AI governance architecture, Convention de remplacement AI clauses, encounter-level attestation evidence.

### Tier D: Medical Liability Carriers + Médecin-Conseil Brokers
- They sit in Q3 (generic + authoritative) for attestation template provision. They are the carrier market counterpart of the legal carrier and the institutional DDQ in C313 Phases 01/02/03. They provide attestation templates and attestation review. They do not sit in Q4 because they don't produce per-physician AI governance documentation — they consume attestation responses and assess carrier-side risk. Their role is the audit, not the documentation architecture.

---

## White Space Specificity — Why Each Is Discrete and Triggerable

Each of the 6 white spaces is:
- **Discrete** — named, bounded, deliverable as a defined service module
- **Triggerable** — activated by a specific event in the Geneva physician practice cycle (attestation cycle, consent form update necessity, médecin remplaçant coverage, AI extension adoption, Geneva medical conference case study publication, AI vendor succession event)
- **Distinct from competitors** — no current offering (Swissmedic certification, FMH CME, HIN vendor certification, AI scribe vendor self-compliance, carrier attestation support, FDPIC compliance, specialty society guidance, boutique consultancies) produces this output
- **Adjacent to the evidence architecture** — each white space is a module of one unified evidence architecture per Geneva physician, not a separate service
- **Healthcare-specific** — each white space is anchored in Geneva physician practice realities (médecin remplaçant convention, Convention de remplacement template, sub-specialty referral patterns, patient consent architecture, AI scribe vendor mix, Geneva medical conference circuit)

The first Geneva physician-facing service to publish all 6 white spaces as discrete service modules — anchored to one evidence architecture with twelve total modules (C312 + C313) — owns the C313 Phase 04 healthcare category.

---

## Positioning Implications

**Category creation (not differentiation):** The 6 white spaces are unoccupied. No competitor has built them. The C313 Phase 04 service category is healthcare-specific encounter-level AI governance evidence architecture for the Geneva independent physician.

**Anchor language:**
- "For physicians, evidence is personal. And your license is on the line." (C308–C312)
- "Your patient encounter note is what the carrier is asking about. The note was written by your AI scribe."
- "Your Convention de remplacement doesn't mention AI. The carrier is asking for it."
- "Your EMR is Swiss-certified. Your AI scribe is not. The carrier is asking about the gap."
- "You saw what three Geneva internists declared at the AMG meeting. Your consent form doesn't mention AI. Theirs does."
- "Your AI scribe vendor was acquired by a US tech giant. The patient consent form doesn't authorize the new controller. Art. 321 CP reads through."

**Pre-signing intervention point:** The medical liability carrier attestation is now encounter-level. The pre-signing attestation review (before the physician signs and submits the attestation to the carrier) is the highest-value intervention point. The physician who asks for attestation language review before submitting it is the most engaged Geneva physician.

**Broker channel:** The médecin-conseil broker is the primary acquisition channel for Geneva physicians, analogous to the legal broker in C313 Phase 01 and the institutional consultant in C313 Phase 02. The médecin-conseil broker channel is unaddressed by current competitors. The first actor to build a médecin-conseil broker referral program for physician AI governance services owns the Geneva healthcare primary channel.

---

## C313 vs. C312 Phase 04 Competitive Landscape — What Changed

| Dimension | C312 Phase 04 (May 2026) | C313 Phase 04 (July 2026) |
|---|---|---|
| Carrier attestation | Tool-level ("which AI tools") | Encounter-level ("which patient encounters") |
| Patient consent form | Static (compliance) | Freshness audit (carrier-auditable) |
| Convention de remplacement | Pre-AI template | AI clauses required by mid-year carrier check-in |
| EMR-AI extension | EMR certified = complete | Per-extension residency + sub-processor audit required |
| Peer benchmark | Specialty guidance notes | Named-physician case studies (AMG sections, FMH CME, SSMIG Journée, HUG Grand Rounds) |
| AI vendor succession | Hypothetical | Three concrete Geneva-relevant precedents in Q2 2026 (Chapter 11, strategic review, acquisition) |
| White spaces | 6 C312 conditions | 12 (6 C312 + 6 C313) |
| Service architecture | Per-condition documentation | One evidence architecture, 12 modules |

---

## Files in this Cycle

This file (03) maps the competitive landscape.
Files 04–06 build the response.

*— Geneva Healthcare research, C313 Phase 04, 2026-07-01*
