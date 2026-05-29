# Market Signals: Geneva Small Law Firms and AI Accountability
## Phase 01 — C296 Cycle
**Date:** 2026-05-29
**Focus:** Current problems, complaints, failures being observed in market.

---

## Signal 1: The Hybrid-Counsel Accountability Split Is Now a Named Problem

**What's happening:**
Firms with attorneys operating in both in-house advisory and external counsel roles are identifying a specific structural accountability gap. Article 167a CPC (in-house refusal/withdrawal rights) and Article 321 CP (external counsel professional secrecy) create different obligations depending on which role the attorney is in — but AI tool choice and data flows don't automatically track which role is active.

**Why it matters:**
The default assumption — that AI governance is a single firm-level policy — doesn't account for this split. A tool that might be appropriate when acting as external counsel using Article 321 CP obligations may not be appropriate when acting in a hybrid function where 167a CPC refusal rights apply. The AI tool doesn't know which hat the attorney is wearing.

**Language used:**
- *"I do both litigation and advisory work. Are my AI obligations different depending on which one I'm doing at any given moment?"*
- *"When I switch hats between external counsel and in-house counsel, does my AI tool choice have to change?"*
- *"Nobody's mapped AI governance to the Art.167a vs Art.321 split. Why not?"*

---

## Signal 2: FDPIC Enforcement Posture Shift — May 2025

**What's happening:**
The Federal Data Protection and Information Commissioner (FDPIC) posture shifted in May 2025 from guidance-first to enforcement-live. The message: the FADP applies directly to AI systems processing personal data, there's no regulatory gap requiring new legislation, and enforcement is possible now.

**Why it matters for small firms:**
Most small Geneva law firms believe FADP AI enforcement is a "2027 risk" or a future concern tied to AI Convention implementation. The May 2025 posture shift means the existing FADP already applies directly — enforcement is present-tense, not prospective.

**Market confusion:**
- *"I thought we had until 2027 before FADP AI enforcement was real."*
- *"If FADP already applies to AI, what exactly do we need to be doing differently right now?"*
- *"The FDPIC hasn't published specific guidance for law firms. Does that mean we're not prioritized?"*

---

## Signal 3: "Swiss Hosted" as Proxy for Compliance — the Processing Location Conflation

**What's happening:**
Small firms are relying on "Swiss hosted" as shorthand for FADP and professional secrecy compliance. AI tool vendors have noticed this and use it as a marketing signal: "Swiss-hosted," "data stays in Switzerland," "Swiss data centers."

**The problem:**
A tool with Swiss storage but US-based API processing creates a professional secrecy exposure regardless of storage location. The data left Switzerland when it was transmitted to the US API endpoint — not when it was stored. "Swiss hosted" is a data residency claim, not a processing location claim.

**Language used:**
- *"The tool is Swiss-hosted. I assumed that meant our data never left Switzerland."*
- *"We selected a tool specifically because it said 'Swiss data center.' Then I found out the API calls go through a US server."*
- *"Data residency and processing location aren't the same thing? Nobody told me that."*

---

## Signal 4: The Canton vs. National Guidance Gap Is a Real Pain Point

**What's happening:**
The national FSA (SAV) guidance published June 2024 is acknowledged as too general for operative decisions. The Ordre des Avocats de Genève has not published Geneva-specific AI guidance. Small firms are caught between federal guidance that doesn't help them locally, and no local guidance at all.

**The specific frustration:**
- *"The FSA said 'comply with existing obligations' — which obligations, and whose interpretation of them?"*
- *"There must be something the Ordre expects specifically for Geneva practice. Has anyone asked them?"*
- *"Every other canton seems to be developing its own approach. Geneva is just... waiting."*

**Why it matters:**
Firms are making AI governance decisions in a guidance vacuum at the canton level — while受力 (being affected by) standards forming through informal Geneva channels they can't observe directly.

---

## Signal 5: Criminal vs. Administrative Liability Under nFADP Art.63 as Unnamed Dual Track

**What's happening:**
The nFADP creates two fundamentally different liability tracks — administrative fines (processed through FDPIC) and criminal liability (article 63, personal criminal exposure for individuals). These have different evidentiary standards, different enforcement mechanisms, and different consequences.

**Why small firms aren't distinguishing:**
- *"Everyone talks about nFADP fines as a business risk. Nobody talks about the fact that Art.63 is personal criminal exposure for the attorney."*
- *"If a law firm uses AI on a client matter and violates FADP, is that an administrative matter or a criminal one? And who bears the criminal exposure — the firm or the signing attorney?"*
- *"The evidence standard for criminal defense is different from the evidence standard for regulatory compliance. Are our documents built for the right one?"*

**The unnamed gap:**
Small firm AI governance documentation is being built for administrative compliance evidence. If a criminal matter arises, that documentation may be architecturally inadequate for criminal defense evidentiary standards.

---

## Signal 6: EU AI Act Art.4 Literacy Obligation for Geneva Firms with EU Nexus

**What's happening:**
EU AI Act Article 4 (AI literacy) has been in force since February 2025. For Geneva law firms with EU-based clients or EU-adjacent matters, this creates extraterritorial AI literacy obligations — no Swiss equivalent exists, and no Geneva market participant is addressing this gap.

**Why it's unnamed in Geneva:**
Most market discourse focuses on the EU AI Act's high-risk AI provisions and systemic players — not on the AI literacy obligations that apply to firms using AI in professional services, including firms outside the EU that serve EU clients.

**Language used:**
- *"We have EU clients. Does that mean we need to comply with EU AI Act requirements?"*
- *"Article 4 says we need to ensure our personnel have sufficient AI literacy. What does that mean for a 3-attorney firm?"*
- *"If we're advising on EU transactions, does our AI governance need to meet EU standards even though we're a Swiss firm?"*

---

## Key Market Observations

1. **The hybrid-counsel accountability split is newly named.** This is a structural problem that existing AI governance frameworks don't address at all — because they assume a single-role firm.

2. **The FDPIC enforcement posture shift is underappreciated.** Most firms are treating FADP AI enforcement as a 2027 concern. The May 2025 posture change means it's present-tense.

3. **Data residency ≠ processing location.** The "Swiss hosted" label is creating false confidence because firms are conflating these two distinct concepts.

4. **The canton-level guidance vacuum is a named pain point.** Firms are waiting for Ordre des Avocats de Genève guidance that hasn't arrived.

5. **Art.63 criminal vs. administrative dual track is unnamed in market discourse.** Small firms are building documentation for the wrong evidentiary standard without knowing it.

6. **EU AI Act Art.4 extraterritorial effect is unacknowledged.** Firms with EU clients may have live obligations they haven't evaluated.

---

## Sources and Signal References

- May 2025 FDPIC enforcement posture communication
- Swiss Criminal Code Articles 167a CPC and 321 CP
- Federal Act on Data Protection (FADP/DSG) Article 63
- EU AI Act Article 4 (AI literacy), in force February 2025
- FSA/SAV Guidance on AI, June 2024
- Ordre des Avocats de Genève (no published AI guidance as of research date)
- Swiss hosting providers: observed marketing claims vs. processing architecture

---
