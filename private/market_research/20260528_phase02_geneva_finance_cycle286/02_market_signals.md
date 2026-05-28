# Market Signals — Geneva Finance/SMB Wealth Management
## Phase 02 | Cycle 286 | Date: 2026-05-28

---

## Current Problems, Complaints, and Struggles

---

## 1. The FINMA 08/2024 Implementation Gap

**What is happening**: FINMA published Guidance 08/2024 on December 18, 2024, and Geneva SMB wealth managers are discovering it exists — many only now realizing it applies to them.

**The complaints**:
- "I read the headline about FINMA AI guidance but I don't know what it actually requires of me."
- "The guidance is written for large banks. I run an 80-person boutique. Does it even apply?"
- "There's no checklist. No template. I'm supposed to build an AI governance framework from scratch."
- "My SRO hasn't told me anything about it. Am I supposed to know this on my own?"

**The operational reality**: The guidance requires:
- A centralized AI inventory with risk classification
- Defined responsibilities and accountability for AI lifecycle
- Data quality requirements for AI models
- Testing and monitoring protocols
- Explainability documentation for material AI applications
- Independent review of AI model development

**What they struggle with**: None of this infrastructure exists in a typical Geneva SMB wealth manager. The gap between "we use some AI tools" and "we have FINMA-compliant AI governance" is enormous.

---

## 2. The Carrier Attestation Chaos

**What is happening**: Cloud providers (AWS, Azure, Google Cloud) serving Swiss financial institutions have been obtaining FINMA ISAE 3000 Type II attestation reports. AWS specifically highlighted 183 services in scope for its 2025 FINMA attestation.

**The complaints**:
- "My carrier sent me a 200-page attestation report. I don't know what I'm supposed to do with it."
- "Does this report mean I'm compliant? Or do I need my own attestation?"
- "AWS has 183 services in scope for the FINMA ISAE 3000. Are all of them relevant to us?"
- "The carrier attestation covers the provider — but what about how WE use the AI?"

**The gap**: The carrier attestation demonstrates the provider's control environment. But the wealth manager is responsible for how they USE the AI — their own governance, their own data quality, their own documentation. The carrier report is necessary but not sufficient.

---

## 3. Institutional Client AI Governance Questionnaires — The DDQ Tsunami

**What is happening**: Institutional clients (family offices, pension funds, foundations, international private banks) are sending detailed AI governance questionnaires to their Swiss wealth management providers.

**What these questionnaires cover**:
1. AI strategy and governance framework (formal council, ethical guardrails, inventory)
2. Data governance and management (data quality, bias prevention, privacy compliance)
3. Model oversight and explainability (test methodologies, performance monitoring, human review)
4. Risk management and bias mitigation (Responsible AI framework, fairness controls, stress testing)
5. Third-party vendor due diligence (data handling, storage locations, security posture)
6. Human oversight and accountability (supervisory procedures, documentation)
7. Staff training and acceptable use (written policies, training records)

**The complaints**:
- "40 pages. My client sent me a 40-page questionnaire on AI governance. I need to respond in two weeks."
- "We have good practices internally but can't prove it in the format they're asking for."
- "I don't have an AI inventory. I don't even know all the AI tools my team uses."
- "This is the third client asking the same thing. Is there a standard format?"

---

## 4. The AI Tool Shadow Use Problem

**What is happening**: Staff at boutique wealth management firms are using AI tools — ChatGPT, Copilot, Gemini — without formal authorization or governance.

**The complaints**:
- "I discovered a relationship manager was using ChatGPT to summarize client meeting notes."
- "Someone uploaded a client list to an AI tool to draft investment proposals. I found out three weeks later."
- "We don't have a policy. People are just using whatever tools they think are helpful."
- "I can't ban it because the team will just do it on their personal devices anyway."

**The risk**: Confidential client data entering uncontrolled AI systems. The data cannot be retrieved or deleted from the AI's training environment. This violates Swiss banking secrecy principles and potentially nFADP requirements.

---

## 5. The Legacy System Integration Paralysis

**What is happening**: Geneva boutique wealth managers typically run legacy core banking and portfolio management systems that were not designed for AI integration.

**The complaints**:
- "We have a 15-year-old portfolio system. AI vendors want API access. We don't have modern APIs."
- "Our data is siloed. Client data here, portfolio data there, performance data somewhere else. AI needs integrated data."
- "Every AI vendor promises ROI. But we first need to spend 6 months fixing our data infrastructure."
- "I can't get a clear picture of all my data assets. That's a prerequisite for AI governance."

---

## 6. The nFADP Art. 63 Criminal Liability Discovery

**What is happening**: Geneva wealth managers are realizing that Switzerland's revised Data Protection Act includes personal criminal liability for executives.

**The complaints**:
- "I learned that the nFADP has criminal liability for executives. Is that real? Could I personally face fines?"
- "Art. 63 — I keep seeing this reference. What does it actually mean for me as managing director?"
- "If a data breach happens with our AI system, can I be personally prosecuted?"

**The reality**: Art. 63 nFADP establishes criminal liability for serious data protection violations. Individual managing directors or partners can face personal fines — not just corporate fines. This changes the risk calculus entirely for owner-operators.

---

## 7. The Human-in-the-Loop Confusion

**What is happening**: There's genuine confusion about what "human oversight" means in practice for AI-assisted wealth management.

**The complaints**:
- "FINMA says there must be human oversight. But what does that mean concretely? A manager signs off on every AI recommendation?"
- "If AI generates an investment proposal and a human reviews it — is that sufficient oversight?"
- "The guidance says AI results must be 'understandable, explainable, and reproducible.' Our AI vendor can't explain why their model made a specific recommendation."

---

## 8. The SRO AI Obligation Silence

**What is happening**: SROs (Self-Regulatory Organizations) have issued zero AI governance guidance to their members.

**The complaints**:
- "My SRO is supposed to supervise me. But they haven't said a word about AI governance. Does that mean I'm fine?"
- "I called my SRO and asked about FINMA 08/2024. They said they hadn't looked into it yet."
- "I'm an SRO member. If FINMA inspects me, will my SRO have my back? Or am I on my own?"

**The gap**: SROs have not issued guidance on how FINMA 08/2024 applies to their members. Boutique wealth managers who are SRO members are in a regulatory grey zone — they know FINMA expects AI governance but their SRO has not told them what to do.

---

## Market Signal Summary Table

| Signal | Severity | Urgency | Entry Point |
|--------|----------|---------|-------------|
| FINMA 08/2024 implementation gap | HIGH | IMMEDIATE | FINMA inspection fear |
| Carrier attestation confusion | HIGH | IMMEDIATE | Carrier document receipt |
| Institutional client DDQ | HIGH | 2-4 weeks | Client questionnaire arrival |
| AI shadow use (data leak risk) | CRITICAL | IMMEDIATE | Discovery of unauthorized use |
| Legacy system integration | MEDIUM | 3-6 months | AI vendor evaluation |
| Art. 63 nFADP personal criminal liability | HIGH | 1-3 months | Executive discovery |
| Human-in-the-loop explainability | MEDIUM | 3-6 months | AI vendor contract review |
| SRO AI obligation silence | MEDIUM | 1-3 months | SRO communication |

---

## NET-NEW Market Signals (C286)

1. **Carrier attestation chain confusion** — managing directors receiving AWS/Azure ISAE 3000 Type II reports and not knowing what to do with them
2. **Institutional DDQ as trigger** — 40-page AI governance questionnaire arriving as the moment of reckoning for SMBs
3. **Art. 63 nFADP criminal liability awareness** — executives learning about personal criminal exposure for data protection failures
4. **Shadow AI use discovery** — managing directors finding out staff are using ChatGPT with client data
5. **Attestation vs compliance distinction** — "the carrier has an attestation, but does that mean I'm compliant?"
6. **SRO AI obligation silence** — "my SRO hasn't communicated anything about AI — is it still my responsibility?"

---

*Last updated: 2026-05-28*
*Phase: 02 Geneva Finance*
*Cycle: 286*