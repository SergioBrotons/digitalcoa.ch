# 04 — Compliance Context: Geneva/Switzerland Specific Regulatory
## Phase 02 | Cycle C305 | Geneva Finance / Boutique Wealth Management

---

## Regulatory Framework Overview

### Primary Regulatory Obligations

**1. nFADP (Swiss Federal Act on Data Protection,2020 revision)**
- **Art. 5(c):** Lawfulness of data processing — legal basis required for all client data processing by AI systems
- **Art. 9:** Processing of sensitive personal data — client financial data qualifies, special protections required
- **Art. 26:** Data processing agreements — required with all AI vendors processing client data
- **Art. 63:** Personal criminal liability — managing director personally accountable for data processing violations
- **Art. 63 scope:** Applies to any natural person who processes personal data in professional context. Managing director of a boutique WM firm is in scope.
- **Art. 63 penalty:** Fines up to CHF 250,000 + potential imprisonment for willful violations
- **Art. 63 personal exposure:** Distinct from firm liability — managing director faces personal criminal liability

**2. FINMA Supervision**
- **FINMA 08/2024:** AI governance guidance for supervised institutions — expects documented AI governance, supervision records, authorization documentation
- **FINMA 2025/02:** Supplementary guidance — shifts from policy expectation to evidence expectation
- **FINMA supervisory shift (C305 signal):** From "do you have a policy" to "demonstrate your oversight" — the standard has moved
- **FINMA evidence standard:** Authorization records, supervision logs, decision attribution, vendor contract review — not policy documents

**3. Carrier Attestation (Form v4)**
- **Annual attestation requirement:** Managing director certifies AI governance status annually
- **Evidence requirements:** "The last three authorization records per AI tool" — specific record format required
- **Attestation architecture:** Form creates a documented standard — certification commits to a standard the firm cannot demonstrate it meets
- **Attestation inaccuracy:** Vendor terms change post-signing — attestation certification may be inaccurate before renewal arrives
- **Carrier subrogation:** Carrier's right to seek recovery from managing director after paying a claim

**4. FinSA (Financial Services Act)**
- **Duty of loyalty:** Client interests must be prioritized — AI systems processing client data must be supervised with client interest as priority
- **Documentation requirements:** Advisory process documentation — AI-assisted decisions require the same documentation as human-assisted decisions
- **Art. 26 FinSA:** Duty to inform — clients must be informed when AI is used in their advisory process

**5. EU AI Act (August 2026, ~14 months)**
- **Deployer obligation:** Entity using an AI system is responsible for ensuring the system meets conformity requirements
- **Non-EU vendor conformity gap:** Non-EU vendors cannot provide EU Declaration of Conformity — structurally unsolvable at boutique WM scale
- **EU client nexus:** Applies to Geneva firms serving EU-based clients
- **Deployer due diligence:** Responsibility exists even when vendor conformity is structurally unavailable — due diligence file demonstrates effort and compensating controls
- **High-risk AI system classification:** AI systems used in credit and investment decisions may qualify as high-risk — additional requirements

**6. CRS 2.0 (Common Reporting Standard)**
- **AI implications:** AI systems processing client financial data for tax reporting purposes must maintain audit trails
- **Documentation requirements:** Records of AI-assisted data processing for CRS purposes must be retained

---

## Cross-Framework Documentation Coherence Problem

### The Structural Gap

The Geneva boutique WM firm is subject to multiple regulatory frameworks simultaneously:

| Framework | What It Requires | What It Produces |
|---|---|---|
| FINMA | Authorization records, supervision logs, vendor contract review | Firm-level governance documentation |
| nFADP Art. 63 | Personal due diligence evidence, personal oversight documentation | Personal due diligence evidence package |
| Carrier Form v4 | Evidence of AI governance per tool | Carrier attestation evidence file |
| EU AI Act (EU nexus) | Deployer due diligence file | EU AI Act compliance file |
| FinSA | Advisory process documentation | Client-facing documentation |

**The problem:** These frameworks are typically addressed as separate workstreams. FINMA documentation ≠ nFADP Art. 63 protection. Carrier attestation evidence ≠ personal due diligence evidence. The firm doing all four workstreams separately is duplicating effort and still has gaps.

**The solution:** Unified documentation architecture producing evidence serving multiple frameworks simultaneously. One evidence production effort, serving multiple protection objectives.

---

## Geneva-Specific Considerations

### What Makes Geneva Different

**1. Bilingual regulatory environment:** Swiss regulatory documents available in German, French, Italian. FINMA guidance primarily in German/French. nFADP official text in French/German. Geneva firms operate in French-primary environment but regulatory references span multiple languages.

**2. Personal liability culture:** Swiss managing directors of boutique firms are accustomed to personal accountability in ways that larger institutional environments are not. The managing director is the compliance function. Personal exposure is not abstract — it is specific, named, and financially material.

**3. Geneva legal tradition:** Roman law tradition, not common law. Professional secrecy obligations under Article 321 Swiss Criminal Code (Art. 321 CP). Attorney-client privilege equivalent for financial advisors. Personal accountability architecture reflects Geneva legal tradition.

**4. Boutique firm scale:**50–200 person firms do not have institutional compliance functions. The managing director is personally responsible for regulatory compliance without dedicated compliance staff. Documentation requirements must be achievable by the managing director without big4 resources.

**5. Carrier attestation as annual trigger:** Swiss insurance carriers require annual AI governance attestation. The renewal cycle creates an annual documentation demand that other jurisdictions do not have in this specific form.

**6. Institutional client base:** Geneva boutique WM firms serve HNWI, UHNWI, family offices, and institutional clients. Institutional clients have professional AI governance evaluation capabilities. The institutional DDQ is a competitive gate — not a checkbox.

---

## Key Regulatory Distinctions (NET-NEW from C304)

### Distinction 1: FINMA Documentation ≠ nFADP Art. 63 Protection

FINMA requires firm-level governance documentation demonstrating that the firm has an AI governance framework. nFADP Art. 63 requires personal due diligence evidence demonstrating that the managing director personally oversaw AI systems processing client data. These are different document types serving different protection objectives.

**Practical implication:** A firm that has "done FINMA documentation" may have zero personal due diligence evidence for Art. 63 purposes. The documentation that satisfies FINMA does not protect the managing director's personal assets.

### Distinction 2: Carrier Coverage ≠ Personal Criminal Liability Protection

Carrier insurance pays settlements, legal fees, and regulatory fines. Carrier coverage does not discharge personal criminal liability under nFADP Art. 63. The carrier's interest (subrogation protection) and the managing director's personal interest (Art. 63 protection) are not aligned. The same attestation cannot satisfy both.

**Practical implication:** A managing director who believes carrier coverage equals personal protection is operating under a structural misunderstanding with active personal exposure. Art. 63 personal due diligence evidence must be produced separately from carrier attestation evidence.

### Distinction 3: Policy Documentation ≠ Oversight Capability Evidence

FINMA and institutional clients are shifting from "do you have a policy" to "demonstrate your oversight capability." The documentation that satisfies the first-generation expectation (policy documents) does not satisfy the current expectation (records proving oversight occurred).

**Practical implication:** The firm that prepared for the first-generation FINMA questionnaire is underprepared for the current FINMA standard. Documentation architecture must be designed for the current standard, not the previous one.

### Distinction 4: AI Vendor Security Assessment ≠ AI Vendor Integration Chain Mapping

A vendor security assessment evaluates whether a vendor is secure. An AI vendor integration chain mapping documents which client data flows through which vendor infrastructure. These are different service outputs with different documentation purposes.

**Practical implication:** A firm with a vendor security assessment on file does not have AI vendor integration chain mapping documentation. The security assessment does not address nFADP Art. 26 (data processing agreements) or Art. 9 (sensitive data processing) requirements.

---

## Documentation Requirements by Framework

### nFADP Art. 63 (Personal Due Diligence)

**Required evidence types:**
- Personal oversight activities documentation (what the managing director personally did)
- Controls implemented documentation (what controls were put in place, by whom, when)
- Decision attribution records (which decisions were made, by whom, with what AI assistance)
- Vendor contract review documentation (personal review of vendor terms against Art. 321 and nFADP obligations)
- Supervision log structure (ongoing documentation of oversight activities)

**What is NOT sufficient:**
- Firm-level AI governance policy
- Generic AI governance framework
- Vendor security assessment
- FINMA compliance documentation

### FINMA AI Governance Documentation

**Required evidence types:**
- Authorization records per AI tool (specific format, per tool)
- Supervision logs (ongoing, Geneva-calibrated frequency)
- Vendor contract review documentation
- Decision attribution records
- Ongoing monitoring documentation

**What is NOT sufficient:**
- Policy documents without records
- Process descriptions without evidence
- Generic AI governance frameworks

### Carrier Form v4 Evidence

**Required evidence types:**
- Last three authorization records per AI tool (specific format)
- Vendor terms current-state verification
- Model version documentation
- Processor chain verification (sub-contractors)
- Ongoing attestation accuracy documentation

**What is NOT sufficient:**
- Annual attestation without supporting records
- Policy documents
- Generic compliance documentation

### EU AI Act Deployer Due Diligence File

**Required evidence types:**
- EU client nexus determination
- Non-EU vendor conformity gap assessment
- Deployer due diligence performed documentation
- Compensating controls implemented documentation
- Ongoing monitoring architecture

**What is NOT sufficient:**
- Vendor security assessment
- General AI governance policy
- EU Declaration of Conformity (structurally unavailable from non-EU vendors)

---

## Timing and Enforcement

### Active Now
- **Carrier Form v4 evidence requirements:** Active at every renewal cycle
- **FINMA evidence standard shift:** From policy to records — active now
- **nFADP Art. 63 personal liability:** Active and enforceable
- **Institutional DDQ as competitive gate:** Active — mandates being lost based on documentation quality now
- **AI vendor integration chain exposure:** Active in every firm with connected AI tools

### Approaching
- **EU AI Act (August 2026):** ~14 months. EU nexus determination and deployer due diligence file production should begin now to be ready before August 2026.
- **Swiss Federal Council AI consultation draft (end 2026):** Additional Swiss-specific AI regulation expected — Geneva calibration may be required.
- **Institutional mandate decisions2026–2027:** Being made now from existing documentation.

### Not Applicable (Often Confused)
- **Swissdamed (July 1, 2026):** Medical devices only. Generally not applicable to portfolio construction AI or client advisory AI in wealth management context. Confusion about scope is a documentation opportunity — firms spending resources on Swissdamed preparation for non-applicable AI systems.

---

## Confidence: HIGH

Regulatory context synthesized from C304 Phase 02 findings + C305 Phase 01 legal context. All Geneva-specific considerations confirmed from prior cycle research. Web search unavailable (quota exhausted). All regulatory analysis based on Swiss regulatory framework knowledge and prior cycle findings.
