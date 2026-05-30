# Competitive Analysis: Geneva Healthcare — Phase 04 C301

## What Exists in the Market vs. What's Missing

---

## Landscape Overview

The Geneva healthcare AI market for independent practices is nascent, fragmented, and largely oriented toward hospitals and large group practices. The independent physician — running a 2–10 person outpatient operation, personally accountable, operating with limited admin capacity — is underserved.

---

## What Exists

### 1. Large Vendor AI Platforms
- **Products**: Dragon Medical (Nuance), AWS HealthScribe, Microsoft Dragon Ambient eXperience (DAX), Google Cloud Healthcare API
- **Target**: Large health systems, hospital networks, enterprise practices
- **Gap for Geneva ICP**: Priced for scale. Require IT infrastructure. Data residency unclear for Swiss practices under nFADP. No specific Swiss carrier attestation support.

### 2. European / Swiss Medical Software Vendors
- **Products**: ctv,输出, Efiles, Soarian, Vitomed, Cancun (some in use in Swiss practices)
- **Target**: General practice management and EMR
- **Gap**: These are EMR systems with AI features being added incrementally. Not designed from the ground up for independent practice AI accountability workflows. No carrier attestation tooling.

### 3. Generic Productivity AI
- **Products**: ChatGPT, Claude, Gemini for workspace
- **Use**: Documentation drafting, patient communication, admin text
- **Gap**: Not HIPAA-compliant by default. No nFADP-specific data processing agreements. No audit trail. No clinical-grade accuracy guarantees. Physician using these personally is exposed.

### 4. Specialized Medical Scribe Products (US-centric)
- **Products**: Suki, Nabla, Ambiance, Freed
- **Target**: US physician practices
- **Gap**: US-centric data infrastructure. Not Swissmedic- or FMH-aligned. No carrier attestation support for Swiss context. Some expanding to EU but not specifically to Swiss independent practice needs.

### 5. Swiss Regulatory / Compliance Advisory
- **Products**: Legal firms offering AI compliance audits, FMH guidance documents, Swissmedic information sessions
- **Gap**: These are advisory, not operational. They tell you what you need to worry about. They don't provide tooling to address it. Expensive per-engagement. Not scalable for independent practice.

---

## What's Missing for Geneva ICP

### 1. Attestation-Ready AI Documentation Systems
**Missing**: An AI documentation tool that produces an auditable human-review record as a native output — timestamps, review log, physician acknowledgment — designed for Swiss carrier attestation requirements.

**Why it matters**: Physicians are being asked to attest to human oversight with no infrastructure to prove it. A tool that generates the proof-of-review automatically, in a format carriers would accept, is not available in the Swiss market.

---

### 2. nFADP-Compliant AI Vendor Stack
**Missing**: A curated, pre-vetted list of AI tools with confirmed nFADP data processing agreements, data residency in Switzerland or adequate equivalent, FADP-compliant BAA templates, and FDPIC-aligned privacy by design documentation — specifically for medical practice use cases.

**Why it matters**: Independent practices do not have legal or compliance teams. They are making vendor decisions personally, on the basis of vendor claims, with no independent verification. The market offers no trusted shortlist.

---

### 3. FMH Human Oversight Procedure Guide
**Missing**: An operational, physician-authored procedure for what "FMH-compliant human oversight" looks like in a small practice — step-by-step, documented, defensible — that a physician can implement without a compliance consultant.

**Why it matters**: FMH provides the principle. The physician needs the procedure. No one has translated the principle into a small-practice workflow with documentation standards that would survive an audit.

---

### 4. Swissdamed Classification Decision Tool
**Missing**: A simple decision tool (not a legal consultation) that helps a Geneva independent practice determine whether a specific AI tool constitutes a medical device under Swissmedic criteria, with clear escalation paths to legal review when needed.

**Why it matters**: Swissdamed July 1, 2026 is a concrete deadline. Practices are spending disproportionate time trying to determine applicability. A free or low-cost self-service classification resource does not exist in the market.

---

### 5. Personal Liability Protection Framework
**Missing**: A structured approach — not legal advice, but a documented internal process — that a physician can point to and say: "This is my human oversight protocol, my documentation standard, my nFADP compliance framework. I followed this."

**Why it matters**: The liability gap is real. No product in the market addresses this as a standalone offering for independent practices. The physician needs something that functions as evidence of due diligence in a future dispute.

---

### 6. Carrier Attestation Support Service
**Missing**: A service that helps the physician prepare for and respond to carrier AI attestation requests — understanding what the carrier is asking, preparing the documentation package, and providing a defensible response — specifically for Swiss independent practice context.

**Why it matters**: This is the acute forcing function. Carriers are asking. Physicians have no resource to turn to. This is the highest-stakes, most immediate market gap.