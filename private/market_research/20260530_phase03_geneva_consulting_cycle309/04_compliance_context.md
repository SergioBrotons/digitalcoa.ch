# Compliance Context — Geneva Consulting Boutique — C309 Phase 03

## Geneva/Switzerland Specific Regulatory Landscape

---

## Building on C309 Phase 01-02

**Phase 01 (Legal):** nFADP Art.321 CC personal liability, carrier attestation renewal sophistication, OFL/Ordre documentation requirements, attorney-client privilege via vendor pathways.

**Phase 02 (Finance):** FINMA AI guidance (Dec 2024), nFADP Art.63 personal liability for investment decisions, institutional DDQ as competitive gate, human oversight operationalization gap.

**Phase 03 (Consulting):** Client RFP AI scoring criteria as commercial gate, nFADP Art.52 personal liability for natural persons, sub-consultant delegation accountability under nFADP, EU AI Act GPAI deployer obligations if EU clients.

---

## Geneva Consulting Boutique Regulatory Landscape

### The Regulatory Stack (What Applies and What Doesn't)

The Geneva consulting boutique operates in a regulatory environment where AI governance obligations come from multiple sources simultaneously — and where the obligations are not clearly calibrated for a 5–50 person consulting firm.

**What applies:**

1. **nFADP** (Swiss Federal Act on Data Protection, fully in force since Sept 1, 2023)
   - Art.52: Personal liability for natural persons managing data processing — applies to managing partners
   - Art.63: Personal liability for natural persons responsible for AI systems processing client data — applies if AI is used in client service delivery
   - Art.9: AI systems processing client PII require lawful basis, proportionality, and documented human authorization
   - DPIA requirement: AI systems processing client data at scale require documented assessment

2. **Professional Liability Insurance**
   - Standard policies exclude administrative fines (nFADP Art.52 fines)
   - Managing partner personal exposure: up to CHF 250,000 for intentional violations
   - Carrier attestation accuracy: misrepresentation in attestation creates coverage risk

3. **Client Contractual Obligations**
   - RFP AI governance scoring criteria: contractual obligations triggered by proposal submission
   - Client data processing agreements: may require specific AI governance provisions
   - Confidentiality obligations: AI tool use may trigger confidentiality questions (what data went where)

4. **EU AI Act (if EU clients)**
   - GPAI (General Purpose AI) obligations: if using GPAI systems in client work, deployer obligations apply
   - Disclosure requirements: must inform clients when GPAI used in their matters
   - Technical documentation: GPAI model cards and documentation requirements
   - August 2026 awareness spike expected as EU AI Act becomes operationally relevant

**What doesn't clearly apply at boutique scale:**

1. **FINMA guidance** — designed for regulated financial institutions (WM firms, banks), not consulting firms. The "adequate AI governance" standard in FINMA guidance does not directly apply to non-FINMA-supervised consulting boutiques. However, if the consulting firm has WM clients, the institutional DDQ may reference FINMA expectations as the standard.

2. **HIN / medical data corridors** — only relevant if the consulting firm works with healthcare clients whose data falls under HIN security requirements. For general consulting, not applicable.

3. **FMH oversight requirements** — only relevant for physician-managed consulting firms in healthcare. For general consulting, not applicable.

4. **OFL / Geneva Bar obligations** — only for law firms, not consulting firms. The consulting boutique is not subject to OFL documentation requirements.

---

## The nFADP Article 52 Personal Liability Framework (Consulting Specific)

### What Article 52 Means for Managing Partners

nFADP Article 52 creates personal liability for natural persons who are responsible for data processing operations — specifically, who fail to ensure compliance with nFADP obligations. For the managing partner of a Geneva consulting boutique, this means:

**Who is responsible:** The managing partner, as the natural person responsible for the firm's data processing operations, is personally liable under Article 52. The firm is a legal entity. The managing partner is a natural person. The liability attaches to the natural person.

**What triggers liability:** Intentional violations of nFADP obligations — specifically:
- Processing client data without lawful basis
- Failing to implement adequate security measures for AI systems processing client data
- Failing to document AI system authorization and supervision
- Failing to respond to data subject requests (client data access requests)

**The administrative fine:** Up to CHF 250,000 per intentional violation. This is not covered by professional liability insurance (which covers third-party claims, not administrative fines imposed on the managing partner personally).

**The due diligence defense:** Article 52 recognizes that demonstrating adequate due diligence can reduce or eliminate personal liability. The due diligence must be specific — documented decisions, documented authorization processes, documented supervision. A general "we take data protection seriously" policy is not sufficient evidence of due diligence.

**The consulting-specific application:**

The managing partner who authorizes AI tool use for client matters — and documents that authorization with specific evidence (tool selection rationale, data processing scope, supervision protocol, error identification process) — has a due diligence defense. The managing partner who signs the carrier attestation without this documentation does not.

---

## The Sub-Consultant Delegation Accountability Gap Under nFADP

### The Delegation Chain and Data Processing Liability

When a Geneva consulting boutique engages a sub-consultant on a client matter, multiple nFADP obligations are simultaneously engaged:

**The managing partner's obligations:**
1. Ensure sub-consultant data processing complies with nFADP
2. Document the authorization for sub-consultant data access
3. Monitor (to the extent reasonable) what the sub-consultant does with client data
4. Ensure sub-consultant AI tool use is within the scope of the engagement authorization

**The sub-consultant's obligations:**
1. Process client data only within authorized scope
2. Use AI tools only where authorized
3. Document AI tool use for the managing partner's supervision records
4. Notify the managing partner of any data security incidents

**The accountability gap:**
The managing partner has signed the carrier attestation confirming they "monitor AI use in the firm." In practice, the managing partner has no documentation of what sub-consultants do with AI tools on client matters. If a data incident occurs — client data processed through an unauthorized AI tool, a sub-consultant's AI tool exposing client data — the managing partner has no evidence of their supervision. The carrier attestation misrepresentation is confirmed, and the Article 52 personal liability exposure is active.

**The documentation requirement:**
The delegation register (sub-consultant name, engagement scope, AI tools authorized, data access scope, supervision records) is the evidence that closes this gap. Without it, the managing partner cannot demonstrate they met their nFADP delegation supervision obligations.

---

## The Client RFP AI Scoring as Contractual Obligation

### How Client RFP Criteria Create Binding Obligations

When a Geneva consulting boutique responds to a client RFP that includes AI governance scoring criteria, the response creates contractual obligations:

**The sequence:**
1. Client sends RFP with AI governance scoring matrix
2. Boutique responds with evidence of AI governance practice
3. Client scores the response and awards mandate (or doesn't)
4. If mandate awarded, the AI governance representations in the RFP response become contractual commitments
5. If the boutique cannot perform as represented in the RFP, the client has contract law remedies

**The binding nature:**
The AI governance evidence provided in the RFP response is a representation. If the representation is inaccurate — the boutique said it has AI supervision protocols and doesn't — the client can claim breach of contract. This is distinct from regulatory non-compliance (which is FDPIC's concern) and carrier coverage (which is the insurance relationship). This is a commercial contract consequence.

**The documentation requirement:**
The boutique must be able to produce the AI governance evidence it represented in the RFP response. If the client asks for a demonstration of AI supervision during the engagement, and the boutique cannot produce it, the contractual representation is challenged.

---

## The Bilingual Regulatory Environment

### EN/FR as a Regulatory Design Requirement, Not a Translation Task

Geneva consulting boutiques operate in a bilingual regulatory environment where both languages have regulatory force:

**Carrier forms:** Swiss insurance carriers produce attestation forms in French. The French version is the legally operative version. English translations are not authoritative.

**Client contracts:** Geneva clients use both EN and FR contracts. The language of the contract governs the relationship. AI governance provisions in one language may not be enforceable in the other if they differ.

**nFADP guidance:** FDPIC guidance is available in both EN and FR, but the French version is authoritative for Swiss law interpretation.

**The documentation design requirement:**
The boutique that produces English-only AI governance documentation has a gap: it cannot satisfy French carrier form requirements, and it cannot provide French-language client documentation. The boutique that produces translated AI governance documents has a different gap: translation is not the same as a documentation system designed to work natively in both languages.

**The carrier form compliance issue:**
If the carrier sends a French-language attestation form, the managing partner's response must be in French to be legally operative. An English-language response to a French-language carrier form may not satisfy the carrier's formal requirements.

---

## The Regulatory Timeline and Activation Points

### Immediate (Now Active)

**nFADP full enforcement (Sept 1, 2023 onward):**
- Article 52 personal liability for managing partners active
- DPIA requirements for AI systems processing client data active
- Documentation requirements for lawful basis and human authorization active

**Carrier attestation renewal:**
- Carrier forms increasingly sophisticated
- Renewal questions now ask for specific evidence, not just policy confirmation
- Misrepresentation risk active at renewal

**Client RFP AI scoring:**
- Institutional and mid-size clients using AI governance scoring matrices
- Commercial mandate consequence immediate and concrete

### Near-Term (6–12 Months)

**EU AI Act GPAI obligations (August 2026):**
- If Geneva consulting boutique serves EU clients, GPAI deployer obligations activate
- GPAI model documentation requirements, disclosure obligations, technical documentation requirements
- Awareness spike expected as August 2026 approaches

**Federal Council AI framework results (end 2026):**
- Swiss Federal Council AI consultation results anticipated
- May establish Swiss-specific AI governance standard for consulting sector
- Uncertainty about outcome creates documentation hesitation

### Structural (Ongoing)

**Carrier form sophistication escalation:**
- Carrier forms continuing to evolve toward more specific evidence questions
- Calibration gap between carrier sophistication and firm documentation widening
- Each renewal cycle increases documentation requirements

**Client expectation escalation:**
- AI governance expectations in client RFPs increasing
- Shortlist elimination for boutiques that cannot produce evidence
- Competitive positioning increasingly tied to AI governance credibility

---

## Compliance Context Summary

| Obligation | Source | Status | Documentation Requirement |
|---|---|---|---|
| nFADP Art.52 personal liability | Swiss law | Active | Due diligence evidence for managing director |
| nFADP Art.63 AI system liability | Swiss law | Active | AI system authorization documentation |
| nFADP DPIA | Swiss law | Active for AI systems | DPIA for AI tools processing client data |
| Carrier attestation accuracy | Insurance contract | Active at renewal | Evidence mapped to carrier form questions |
| Client RFP AI scoring | Contractual | Active — commercial consequence | AI governance evidence in RFP response format |
| Sub-consultant delegation supervision | nFADP delegation rules | Active | Delegation register, AI use log |
| EU AI Act GPAI (if EU clients) | EU law | August 2026 | GPAI model documentation, disclosure |
| Bilingual EN/FR documentation | Regulatory + client | Active | Native bilingual documentation, not translation |

---

## The Compliance Architecture for Consulting Boutiques

The regulatory context creates a compliance architecture that the consulting boutique must implement — not a compliance checklist:

**Layer 1: Managing Partner Personal Liability Protection (nFADP Art.52)**
- Due diligence documentation: specific authorization decisions, AI system selection rationale, supervision protocols
- Evidence that demonstrates what the managing director knew, decided, and supervised

**Layer 2: Client-Facing Compliance (RFP + Contractual)**
- AI governance evidence in client RFP response format
- Proposal methodology documentation (disclosure + traceability)
- Client data processing agreement AI provisions

**Layer 3: Carrier Compliance (Attestation Accuracy)**
- Evidence mapped to carrier form questions
- Sub-consultant delegation documentation
- Monitoring system documentation (even if lightweight)

**Layer 4: Sub-Consultant Delegation Compliance (nFADP)**
- Delegation register: sub-consultant authorization, scope, AI tools, data access
- AI use log per engagement
- Supervision records

**Layer 5: Bilingual Compliance (EN + FR)**
- Carrier form response in French
- Client documentation in both EN and FR
- nFADP documentation in both languages where required

---

*File 04 — Compliance Context — Geneva Consulting Boutique — C309 Phase 03*
*Regulatory landscape, Article 52/63 obligations, bilingual requirements, timeline*