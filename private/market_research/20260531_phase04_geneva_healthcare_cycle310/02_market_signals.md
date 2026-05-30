# Phase 04 — Market Signals: Geneva Healthcare — C310 Cycle

**Phase:** 04 — Geneva Healthcare
**Cycle:** C310
**Date:** 2026-05-31
**Status:** COMPLETE

---

## Market Signals Overview

Market signals for C310 Phase 04 Geneva healthcare reflect a market that has moved from "am I exposed?" to "I know I'm exposed, I don't know what to do about the documentation I don't have." The primary signal is retroactive exposure — physicians who deployed AI tools 12–24 months ago now face carrier questions about that period and have no documentation.

---

## Signal 1: Retroactive Documentation Gap Is Now the Primary Market Problem

### What the Signal Shows

Physicians are receiving carrier attestation forms that ask specific questions about AI use beginning in 2023. Physicians who deployed AI diagnostic support tools, AI imaging interpretation, or AI clinical decision support in 2023-2024 have no documentation from that period.

### Why This Is Different From Prior Cycles

In C306-C309, the documentation gap was primarily forward-looking: "going forward, how do I document AI use?" In C310, the gap is retrospective: "I deployed AI in 2023. I have no records. What do I tell my carrier?"

This is the same structural shift documented in C310 Phase 01 (legal) and Phase 02 (finance) — the retroactive reconstruction problem is now confirmed in healthcare as the primary documentation challenge.

### The Documentation Debt Structure

The retroactive gap has three compounding dimensions:

1. **Time vector:** 12–24 months of undocumented AI use accumulated before carriers started asking
2. **Tool count vector:** Most practices now use 2–4 different AI tools, each requiring separate documentation
3. **Staff use vector:** Medical assistants using AI tools on patient data — physician unaware of specific uses

Linear forward-only solutions are structurally insufficient. The retroactive gap requires retroactive reconstruction.

### What Physicians Are Saying

"I've been using AI diagnostic support for 18 months. I didn't think to document it at the time. Now my carrier is asking specific questions — and I don't have a single record."

"If Swissmedic asks me about a patient case where AI was involved in the diagnosis, I have no documentation from when I actually started using the tool."

"My medical assistant has been using AI on patient data for over a year. I authorized the tool. But I don't know specifically what she's been putting through it."

### Implication for Evidence Architecture

Retroactive reconstruction protocol for small practice AI deployment is the highest-urgency product component. This is distinct from forward documentation policy — it requires a specific methodology for reconstructing undocumented AI use.

---

## Signal 2: Clinical Reasoning AI Creates a Different Accountability Structure

### What the Signal Shows

AI tools used for clinical decision support and diagnostic interpretation create a distinct accountability structure from administrative AI tools. Physicians cannot simply document "I used AI" — they need to document their clinical reasoning process when AI influenced a diagnosis.

### The Reasoning Chain Problem

When AI suggests a diagnosis:
- The physician agrees with the AI suggestion
- The physician documents "agreed with AI suggestion" in the patient record
- The physician has not documented: what alternative diagnoses were considered, what weight was given to AI input vs. clinical experience, what would have changed the decision

Swissmedic inquiry about a diagnostic decision will ask: "What was the role of the AI tool in this specific patient's diagnosis? Can you show your clinical reasoning?"

### Why This Is Different From Administrative AI

Administrative AI use (scheduling, billing, note formatting) creates documentation obligations but not clinical reasoning accountability. Clinical reasoning AI creates:
- A direct line between AI tool output and patient outcome
- Swissmedic inquiry exposure for diagnostic decisions
- A documentation requirement that is specific to the individual patient case

### What Physicians Are Saying

"The AI suggested a diagnosis. I agreed with it. I documented my agreement. But what do I actually document about how much weight I gave the AI's input?"

"If there's a patient incident and Swissmedic asks about my diagnostic reasoning, what do I show them? I documented my conclusion. I didn't document the reasoning chain."

"I don't know what 'documenting AI's role in my clinical reasoning' actually means in practice."

### Implication for Evidence Architecture

Clinical reasoning documentation format is a distinct product component — separate from administrative AI documentation. It requires a specific format for capturing physician judgment in AI-assisted diagnostic decisions.

---

## Signal 3: nFADP Data Minimization Conflict Is Now Active

### What the Signal Shows

Physicians are encountering a specific conflict: AI diagnostic tools require comprehensive patient data to function effectively, but nFADP Article 6 requires data minimization. This conflict has no published resolution for clinical AI use.

### The Conflict Structure

AI diagnostic tools are designed to process:
- Full patient history
- All available lab results
- Complete medication records
- Imaging data where applicable

nFADP Article 6 requires:
- Data collection limited to what is necessary for the stated purpose
- Proportionality between data collected and purpose
- Regular review of data necessity

Physicians using AI diagnostic tools are collecting more data than strictly necessary for individual patient care — because the AI tool requires it.

### Why This Is Now Active

In prior cycles, this conflict was theoretical. In C310, it is operational:
- Physicians have deployed AI tools that require comprehensive data
- nFADP Article 6 compliance questions are appearing in carrier forms
- Physicians have no resolution framework for this specific conflict

### What Physicians Are Saying

"My AI diagnostic tool explicitly requires full patient history to generate accurate recommendations. But nFADP says I should only collect what's necessary. I don't know how to resolve this."

"I'm using AI that processes everything. My carrier is now asking about my data minimization practices. I don't have an answer for how AI tools fit into nFADP compliance."

"Does 'necessary' mean necessary for patient care, or necessary for the AI tool to function? Those are different things."

### Implication for Evidence Architecture

Data minimization conflict resolution is a specific component for healthcare evidence architecture. The resolution is not "don't use AI" — it is documenting the clinical necessity for comprehensive data processing by AI tools.

---

## Signal 4: FMH Human Oversight Silence Is Now a Documented Condition

### What the Signal Shows

Physicians who sought clarification from FMH about what human oversight means in practice received no operational guidance. The principle is published; the protocol is not. This absence is now a documented condition — physicians can demonstrate they sought clarity and received none.

### Why This Matters for Liability

The absence of FMH guidance creates a specific liability structure:
- Physicians are accountable for maintaining human oversight
- No FMH-published standard exists for small practice
- Physicians who sought guidance and received none are in a different position than physicians who simply didn't look

This is distinct from "no standard exists" — it is "I asked, I was referred back to the principle, I implemented my own protocol."

### The Peer Network Effect

When one Geneva physician shares their experience of receiving no operational guidance from FMH, the peer network activates. Physicians who had not previously considered the human oversight question now recognize they are implementing something without a reference standard.

### What Physicians Are Saying

"I wrote to FMH asking specifically what human oversight means in a 3-physician practice. They sent me the principle. Nothing more."

"I called the FMH medical ethics hotline. The person I spoke with said they hadn't received specific guidance on AI oversight protocols for small practices."

"Three colleagues at AMGe all said the same thing — they asked, they got the principle, no protocol."

### Implication for Evidence Architecture

The evidence architecture must include a physician's own human oversight protocol as a documentable output — not a FMH-approved protocol (none exists), but a physician-developed, documented, and implemented protocol that demonstrates active engagement with the oversight requirement.

---

## Signal 5: Real-Time Patient Encounter Documentation Gap

### What the Signal Shows

The documentation gap occurs during the patient encounter, not after. Physicians are focused on clinical care during the consultation. The documentation of AI involvement does not happen in real time — it either happens poorly during the encounter or doesn't happen at all.

### The Operational Problem

During a 20-minute consultation:
1. Physician conducts clinical assessment
2. AI tool provides diagnostic suggestion or decision support
3. Physician agrees or disagrees with AI input
4. The documentation of AI's role in the decision must happen within the encounter — there is no separate documentation session

Capturing "my clinical reasoning when AI was involved" requires a documentation format that is fast, non-disruptive to clinical flow, and specific enough to show what the physician actually considered.

### Why This Is the Hardest Documentation Problem

Standard medical records document conclusions, not reasoning chains. "Dx: Community-acquired pneumonia" documents the diagnosis, not the differential diagnosis process. "AI suggested pneumonia; I confirmed with auscultation; I agreed" requires a documentation format that doesn't exist in standard EMR systems.

### What Physicians Are Saying

"I'm seeing 25 patients a day. I don't have time to write a paragraph about my AI's role in each decision. But if I don't capture it in the moment, it doesn't get captured."

"The AI suggested something during the consultation. I documented my conclusion. I didn't document what I thought before the AI spoke, what I thought after, and why I agreed."

"If I'm documenting AI involvement during every patient encounter, I'm not practicing medicine — I'm doing administrative work."

### Implication for Evidence Architecture

Real-time documentation format is the operational core of healthcare evidence architecture. The format must be: fast enough to use during a consultation, specific enough to show physician judgment, and compatible with standard EMR workflows.

---

## Signal 6: AI Tool Tiering Without a Physician Framework

### What the Signal Shows

Physicians are using 2–4 different AI tools, each in a different risk category. Administrative AI (scheduling, billing, note formatting), communication AI (patient messaging, follow-up), diagnostic support AI (clinical decision support, imaging interpretation), and documentation AI (medical note generation, translation). Each category creates different accountability exposure — but physicians are treating them identically.

### The Risk Tiering Problem

Different AI tool categories create different documentation requirements:

1. **Administrative AI** (scheduling, billing): Low clinical risk, standard data processing obligations
2. **Communication AI** (patient messaging): Patient communication obligations, data processing consent
3. **Documentation AI** (note generation): Clinical record integrity, physician attestation obligations
4. **Diagnostic support AI** (clinical decision support, imaging): Highest clinical risk, Swissmedic operator obligations, clinical reasoning documentation

Physicians have no framework for tiering these tools by risk and applying proportionate documentation.

### What Physicians Are Saying

"I use AI for scheduling, for notes, for diagnostic support, for patient communication. They're all AI. Are they all creating the same exposure? Or are some riskier?"

"My diagnostic AI tool is clearly different from my scheduling AI. But when it comes to documentation, I treat them the same — which probably means I'm under-documenting the diagnostic one."

"I don't know how to distinguish between 'this AI tool requires my full attention to oversight' and 'this AI tool I just check occasionally.'"

### Implication for Evidence Architecture

AI tool tiering framework is a product component unique to healthcare. The framework allows physicians to apply proportionate documentation effort based on the clinical risk of each tool category.

---

## Market Signal Summary (C310)

| Signal | Description | Implication |
|---|---|---|
| Retroactive gap | 12–24 months of undocumented AI use now visible to carriers | Retroactive reconstruction protocol is highest-urgency component |
| Clinical reasoning | AI-assisted diagnostic decisions create reasoning chain documentation requirement | Distinct from administrative AI documentation |
| Data minimization | AI tool data requirements conflict with nFADP Article 6 | Clinical necessity documentation for comprehensive data processing |
| FMH silence | Physicians who sought guidance received none — documented condition | Physician-developed protocol as evidence of active engagement |
| Real-time gap | Documentation must happen during patient encounter | Fast, non-disruptive documentation format required |
| Tool tiering | 2–4 tools in different risk categories, same documentation approach | Risk-tiered proportionate documentation framework |

---

## What Physicians Are Complaining About (C310)

### Top Complaints

1. "I started using AI tools 18 months ago. I have no documentation. What do I tell my carrier?"
2. "How do I document my clinical reasoning when AI was involved in the diagnosis — not just my conclusion?"
3. "My AI tool requires full patient data. nFADP says minimize. I don't know how to resolve this."
4. "I asked FMH what human oversight means in practice. They gave me back the principle. Nothing more."
5. "During the consultation, I'm thinking clinically — not documenting AI involvement. But if I don't capture it in the moment, it doesn't exist."
6. "I use four different AI tools. Are they all creating the same exposure? Or am I under-documenting the high-risk ones?"

### Complaints That Signal Buying Intent

1. "Is there a way to reconstruct what I was doing with AI 18 months ago — or am I just exposed?"
2. "Who has actually solved this problem in a small practice? Not a framework — an actual solution."
3. "If Swissmedic sends me an inquiry, what's the format for documenting AI involvement in a specific patient case?"
4. "My carrier asked me to attest to something I couldn't honestly answer. I didn't sign it yet. What do I do?"

### Complaints That Signal Trust Formation

1. "A colleague went through this process with you. She said it was the first time anyone explained what she actually needed to document."
2. "I've read everything FMH has published. It doesn't tell me what to do. I'm looking for someone who does."
3. "I need something that's designed for a 3-physician practice — not a hospital, not a framework for enterprise."

---

## Competitive Signal Gaps (C310)

### What No Competitor Is Addressing

1. **Retroactive reconstruction for small practice clinical AI** — no competitor offers retroactive documentation reconstruction methodology for 2–10 physician practices
2. **Clinical reasoning documentation format** — no standard format exists for documenting physician judgment in AI-assisted diagnostic decisions
3. **Real-time encounter documentation** — no product addresses the specific documentation challenge during the patient encounter
4. **nFADP data minimization conflict resolution for clinical AI** — no published resolution for the data necessity vs. data minimization conflict
5. **AI tool tiering for small practice** — no framework exists for proportionate documentation by risk category in a 2–10 physician practice

---

*Market signals — Phase 04 Geneva Healthcare C310 Cycle complete. Retroactive exposure + clinical reasoning + data minimization as the three new primary signals.*
