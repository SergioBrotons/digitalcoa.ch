# Market Signals — Geneva Legal (Phase 01, C302)

## ICP Profile
Small law firm, 2–5 attorneys, Geneva-based. Managing partner or senior associate personally accountable for AI decisions. Concerned about attorney-client privilege in AI systems, carrier PI attestation, bar guidance gaps, and what "adequate" AI governance means at boutique scale.

---

## Current Problems, Complaints, and Failures

### 1. Carrier Form v4: Evidence Standard Without Evidence Infrastructure

**What's happening:**
Carrier forms (Professional Indemnity / errors & omissions) have shifted from policy attestation to evidence attestation. The v4 form asks for "last three authorization records" — documentation that most Geneva small firms do not have, cannot reconstruct, and do not know how to produce going forward.

**The complaint:**
*"My carrier sent a form that asks for records of who authorized which AI decisions. We don't have that. We didn't build that. Now I'm being asked to attest to something I can't demonstrate."*

**Why it's acute:**
The ICP is being asked to personally sign an attestation with evidentiary requirements they cannot meet. This is not a compliance checkbox — it's a personal liability moment.

**C301 connection:** C301 identified carrier form v4 as the structural driver. C302 observes the same form creating an acute market signal — firms are actively seeking help to produce retroactive evidence reconstruction because they cannot face renewal without it.

---

### 2. AI Legal Citation Failures: Documented Enforcement Events

**What's happening:**
U.S. federal courts (and increasingly referenced in Swiss professional circles via ODAGE) have issued rulings where lawyers submitted AI-generated legal citations that were fabricated. Disciplinary actions have followed.

**The complaint:**
*"I heard about a lawyer who got sanctioned for citing cases that don't exist. That could be me if my associate uses AI for research and I don't catch the errors."*

**Why it's the conversion trigger:**
This is not abstract theoretical risk. It's a real, documented, named lawyer who faced consequences. Peer enforcement events convert general AI anxiety into specific action. The Geneva ICP recognizes themselves in the story — a solo or small firm attorney who thought they were supervising but didn't have the tools to do so.

**The ODAGE connection:**
ODAGE (Ordre des Avocats de Genève) held a special session on March 21, 2026 titled "IA comme ICARE — L'avocate.sen s'en approcher sans se brûler" (AI as ICARE — how to approach it without getting burned). The framing signals that even professional bodies recognize the burning risk. The session was specifically about helping attorneys approach AI without self-destructing. This event signals the market is acutely aware of the problem.

---

### 3. Vendor Contract Discovery: The Training Data Trap

**What's happening:**
Law firms that adopted AI tools in 2023–2024 are discovering that vendor contracts often include language permitting the vendor to use client data for model training. The firms accepted terms without understanding the privilege implications.

**The complaint:**
*"We signed a standard SaaS agreement. Six months later we read that the vendor uses our data to train their model. Our client matter data is in their training set. How do we unwind that?"*

**Why it's structural:**
You cannot unwind historical data exposure by switching vendors. The data has already been used. New contracts don't retroactively resolve past exposure.

**The Geneva context:**
Swiss professional secrecy under Article 321 of the Swiss Criminal Code (and cantonal rules under LLCA) creates statutory obligation to ensure confidentiality equivalent to attorney-client privilege. Using vendors that retain data for training potentially violates this obligation. The solution architecture (Swiss-hosted, zero retention, no human review) is known — but the ICP is uncertain whether their current vendor stack meets it.

---

### 4. The Supervision Problem: No Baseline for "Adequate"

**What's happening:**
SBA guidelines (June 2024) require attorneys to "supervise" AI-generated output. Small firm managing partners do not know what "adequate supervision" means for AI output they cannot independently verify.

**The complaint:**
*"The bar says I have to supervise AI output. I have a junior associate who uses AI daily. I read what she produces and it looks fine. But I can't verify whether the AI hallucinated a citation or whether she verified it. I don't know what good supervision looks like."*

**Why it creates paralysis:**
The ICP wants to do the right thing. They understand they are accountable. But the competence gap between the person using AI and the person signing the attestation creates a structural supervision problem without a clear solution path.

**The Geneva standard gap:**
The ICP knows they need "Geneva-standard documentation" but no one has defined what that standard is. The ODAGE event is the closest thing to a benchmark, but it's a one-day event, not an ongoing standard.

---

### 5. Swissdamed July 1, 2026: Medical Device Scope Confusion

**What's happening:**
Swissdamed (the Swiss medical device registry) launches July 1, 2026. Small law firms with healthcare clients are getting questions about whether AI tools used in client context constitute medical devices or fall under medical device attestation requirements.

**The complaint:**
*"My healthcare client is asking whether our AI-assisted research tools need to be registered under Swissdamed. I don't know. I'm being asked to advise on something with unclear regulatory boundaries."*

**Why it matters for legal ICP:**
The legal ICP's clients (healthcare practices, clinics) are asking their attorneys about Swissdamed. The attorney cannot answer. This is a new consulting problem that's creating anxiety.

**C301 connection:** C301 flagged Swissdamed as a forcing function for healthcare. C302 observes it creating a secondary legal advisory problem — attorneys being asked questions they can't definitively answer.

---

### 6. Evidence Reconstruction Is Structurally Impossible (The Documentation Debt Loop)

**What's happening:**
The documentation debt is not just large — it's structurally impossible to pay down through normal work. The systems were built without audit trails. The decisions were made without records. The vendor contracts were signed without understanding implications.

**The complaint:**
*"I know we have a problem. I know we have documentation debt. But every path to paying it down requires me to stop doing billable work and spend months reconstructing the past. That's not financially viable."*

**Why it creates compliance fatigue:**
The problem is large enough that it creates a paralysis loop. The ICP cannot see a viable path to compliance without stopping work. So they delay. The delay accumulates more exposure. The exposure creates more anxiety. The anxiety doesn't produce action — it produces avoidance.

**The market opportunity:**
The ICP needs a path that doesn't require stopping all work. They need evidence reconstruction that is concurrent with operations, not a historical audit that stops the firm.

---

## Market Signal Summary

| Signal | Description | Acute Level |
|--------|-------------|-------------|
| Carrier Form v4 | Evidence attestation requirement, no evidence infrastructure | 🔴 HIGH |
| AI Citation Failures | Documented peer enforcement events, conversion trigger | 🔴 HIGH |
| Vendor Contract Trap | Training data retention discovered post-signing | 🔴 HIGH |
| Supervision Gap | No baseline for "adequate" AI supervision | 🟠 MEDIUM |
| Swissdamed Confusion | Medical device scope creating client advisory problem | 🟠 MEDIUM |
| Documentation Debt | Structurally impossible to pay down through normal work | 🔴 HIGH |

---

## What's NOT Working (Failure Modes)

1. **Generic AI governance templates** — one-size frameworks from large consulting firms don't map to 2–5 person firms
2. **Vendor-provided compliance tools** — vendors have conflicts of interest; their attestation doesn't resolve attorney personal exposure
3. **Waiting for the bar to define the standard** — guidance is thin, slow, and non-binding; the ICP can't wait
4. **Trying to reconstruct the past** — retrospective documentation is structurally impossible; creates paralysis not progress
5. **Hiding the problem** — attestation without documentation is signing a blank check; hiding creates exposure on exposure

---

## What's Generating Urgency

1. **Carrier form renewal cycles** — attestation must be signed; cannot be avoided
2. **Peer enforcement events** — documented cases convert abstract fear to action
3. **EU AI Act August 2026** — firms with EU client exposure face deployer obligations
4. **ODAGE March 21 event** — professional body event signals awareness without providing solutions
5. **Junior-senior fluency gap widening** — as AI tool usage accelerates, the accountability gap grows

---

*Phase 01, C302 — Geneva legal market signals research*