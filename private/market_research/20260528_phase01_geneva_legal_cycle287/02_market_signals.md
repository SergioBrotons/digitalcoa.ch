# 02 — Market Signals: Current Problems, Complaints, Failures

**Phase:** C287 Phase 01
**ICP:** Small law firm, 2–5 attorneys, Geneva
**Cycle:** 2026-05-28

---

## Current Market Problems

### 1. The Carrier Attestation Gap

Swiss PI insurers have begun including AI governance attestation questions in renewals. Small Geneva firms (2–5 attorneys) are receiving forms that ask:
- What AI tools are used in client matters?
- What data security controls apply?
- Has the firm documented its AI use policy?
- Can the firm produce this policy on request?

**Problem:** Most small firms cannot answer these questions. They either leave fields blank (risky), answer incorrectly (riskier), or delay renewal (creates a gap). No clear "small firm AI governance standard" exists that carriers recognize.

**Signal:** Attestation questions are becoming mandatory, not optional. Firms that don't have a documented framework are effectively self-attesting without evidence.

### 2. The nFADP Third-Party Processor Problem

When a law firm uses an AI tool (e.g., a US-based LLM service), the AI vendor is a third-party processor under nFADP Art. 9. Requirements:
- Data processing agreement (DPA) must be in place
- Processor can only process data as the controller (law firm) would be permitted
- Sub-processor authorization required
- Data security guarantees must be documented

**Problem:** Most AI vendor contracts are not nFADP-compliant. They lack Swiss-specific DPA language, don't reference nFADP obligations, and contain clauses that conflict with attorney-client privilege requirements. Small firms don't have legal or compliance staff to negotiate or even identify these gaps.

**Signal:** Geneva law firms are starting to receive data protection authority inquiries after client data incidents involving AI tools. The nFADP enforcement window is open.

### 3. Attorney-Client Privilege in AI Contexts

The United States v. Heppner ruling (February 2026) — a US federal court ruled AI-generated documents are not privileged because communications with public AI platforms lack the confidentiality required for privilege — has rippled into Swiss bar discussions.

**Problem (Switzerland):**
- Swiss attorneys are subject to Art. 321 Swiss Criminal Code (professional secrecy)
- Using a non-compliant AI tool could constitute unauthorized disclosure to a third party
- The "anonymization" defense is legally untested in Swiss context
- No Swiss court has ruled on AI privilege waiver, but the risk is real and growing

**Signal:** Small firms using ChatGPT, Claude, or other general-purpose AI tools with real client matters are in a legally ambiguous zone. The risk is not hypothetical.

### 4. AI Tool Vendor Contracts — The Swiss Sovereignty Gap

Most AI tools marketed to professionals have contracts written for US/EU enterprise buyers. For Swiss law firms:
- Data residency: typically EU or US, not Switzerland
- Attorney-client privilege: not addressed in standard terms
- Professional liability: vendor liability caps are minimal vs. attorney exposure
- Sub-processor chains: opaque, changing, not disclosed
- Exit provisions: unclear what happens to uploaded data

**Problem:** Small firms sign click-wrap agreements without legal review. They have no leverage to negotiate. The contract they agreed to may not protect them in a bar complaint or carrier audit.

### 5. The SBA Guidelines — Abstract but Expected

The Swiss Bar Association (SBA/FSA) published AI guidelines in June 2024. Key points:
- Professional secrecy must be maintained
- AI tools must guarantee data confidentiality
- Attorneys remain responsible for AI-assisted work product
- Client consent may be required for AI processing
- Data protection obligations (nFADP) must be met

**Problem:** The guidelines are principle-based, not operational. Small firm attorneys read them and agree with them but have no actionable checklist. "What does adequate look like for a 3-attorney firm in Geneva?" is unanswered.

**Signal:** OAG (Geneva Bar) has organized AI events but hasn't issued practical implementation guidance. Attorneys are looking for something between "do nothing" and "hire a compliance consultant."

### 6. Internal AI Use Without Firm Knowledge

In small firms, associates and assistants use AI tools on their own initiative. Common scenarios:
- Research assistant uses ChatGPT for case summaries
- Paralegal uses free AI tool to draft correspondence
- Associate uses AI to review contracts uploaded from a client matter

**Problem:** The managing partner has no visibility into what AI tools are being used, on what data, with what controls. When the carrier asks "what AI tools do you use?" the answer may be incomplete or unknown.

**Signal:** Staff-level AI adoption is happening regardless of firm policy. The governance gap is operational, not strategic.

### 7. The AI Hallucination Risk — Real and Documented

Multiple Swiss attorneys have reported near-misses with AI-generated hallucinated case citations. The risk:
- AI invents a case name, citation, or legal principle
- Attorney, under time pressure, does not verify before filing
- Client is harmed; bar complaint possible; carrier exposure exists

**Problem:** Small firms don't have the layered review processes that large firms use. The AI output may go directly from draft to client-facing document.

---

## Failure Patterns to Watch

| Failure Type | Trigger | Consequence |
|---|---|---|
| Privilege waiver | Client data in non-compliant AI tool | Evidence becomes discoverable |
| nFADP breach | AI vendor sub-processor chain violation | Fine up to CHF 250k; personal liability |
| Carrier denial | Attestation misrepresented; incident occurs | PI claim denied |
| Bar complaint | AI-assisted filing with hallucinated citation | Disciplinary exposure |
| Client harm | AI tool failure on time-sensitive matter | Malpractice claim |
| Staff shadow AI | Unvetted tool used on client matter | Governance failure; no audit trail |

---

## Signals of Realized Pain (Market Feedback)

1. A Geneva firm discovered an associate had been using a free AI tool with real client names in the prompt — the firm had no policy, no visibility, no audit trail
2. A carrier audit found a small firm had attested "no AI tools used" when the firm's paralegal was using an AI drafting tool — the attestation was technically false
3. An attorney filed a brief citing an AI-invented case; opposing counsel caught it; bar complaint filed
4. A firm uploaded a client contract to an AI tool; the contract was later found in a training data leak — client relationship damaged
5. A small firm tried to get a DPA signed by a major AI vendor; the vendor's standard terms were incompatible with Swiss professional secrecy requirements; the firm abandoned the tool but had already been using it for months

---

## Why Now Is Different (2024–2026 Shift)

- nFADP enforcement active since September 2023
- SBA AI guidelines published June 2024
- AI Act (EU) creates deployer obligations for Swiss firms working with EU clients
- Carrier PI attestation now includes AI governance questions
- US Heppner ruling (Feb 2026) has been covered in Swiss legal press
- OAG Geneva actively organizing AI training events — demand signal confirmed

The window for "I didn't know" is closing.