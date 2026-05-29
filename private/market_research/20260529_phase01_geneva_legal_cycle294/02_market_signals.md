# 02 — Market Signals: Current Problems, Complaints, Failures

## Phase 01 | Cycle C294 | ICP: Geneva small law firm, 2–5 attorneys

---

## Dominant Problem Pattern

The core problem is not that small Geneva law firms don't want AI. It's that they cannot find a way to adopt AI that survives scrutiny from three directions simultaneously:
1. **The client** — who expects confidentiality and professional care
2. **The Swiss Bar Association (SAV)** — which published guidelines in June 2024 without providing certification or approved-tool lists
3. **The revised Federal Act on Data Protection (revFADP)** — which requires Art. 9 compliance for any third-party data processor, with criminal sanctions for violations

The result is a paralysis that looks like reluctance but is actually risk-assessment gridlock.

---

## Market Signals: What Is Breaking

### Signal 1: The DPA Problem

Small firms are signing AI vendor contracts that contain terms incompatible with revFADP Art. 9 requirements. Specifically:
- Vendors with US-hosted infrastructure and no Swiss/EU hosting option
- Terms allowing model training on client data — directly incompatible with professional secrecy
- Data retention clauses that conflict with attorney-client privilege obligations
- No clear contractual embedding of professional secrecy obligations for the vendor as auxiliary person

The SAV has confirmed (Federal Supreme Court precedent) that external AI providers can be classified as "auxiliary persons" under Art. 13(2) BGFA — making the lawyer liable for the vendor's compliance with professional secrecy. Firms are discovering this only when something goes wrong.

### Signal 2: The Shadow AI Explosion

Staff — associates and paralegals — are using personal ChatGPT accounts or AI features in Microsoft 365 without firm authorization. The firm doesn't know. The firm has no DPA with those vendors. The firm has no AI policy.

Microsoft 365 Copilot is a specific failure point: IT often deploys it assuming the standard Microsoft enterprise agreement covers data protection — it does not. Copilot conversations are retained in the tenant's activity history per the tenant's standard retention policy, which may not align with revFADP requirements.

The result: client matter data from contract drafts sits in a Microsoft tenant without a compliant DPA, without a data retention policy configured, and without the firm's knowledge.

### Signal 3: The Accountability Gap

There is no entity providing small Geneva firms with a clear, actionable answer to: *"Is this specific tool appropriate for this specific type of matter?"*

The SAV guidelines (June 2024) provide a framework, not a decision tree. The Federal Data Protection and Information Commissioner (FDPIC) confirmed in May 2025 that existing law applies to AI — but that confirmation creates more questions than it answers for practicing lawyers.

The gap between "the law says existing rules apply" and "I know what to do with my specific tool for my specific client work" is enormous. No one is bridging it for small firms.

### Signal 4: The Personal Liability Shock

When a lawyer delegates contract drafting to AI and the contract contains a problematic clause, the liability is the lawyer's — not the AI vendor's. This is clear under Art. 12(a) FMLA and Art. 6 SCPC (duty of diligence).

But many small-firm lawyers are only now confronting this in concrete terms. The efficiency gains from AI are visible and immediate. The liability exposure from AI is abstract and deferred. This asymmetry leads to under-investment in proper AI governance.

### Signal 5: The Regulatory Accumulation Effect

Three cumulative developments are increasing anxiety:
1. **revFADP** (in force September 2023) — with criminal sanctions for data protection violations (Art. 60-66, up to CHF 250,000 under Art. 61 lit. a for due diligence failures in commissioned processing)
2. **SAV Guidelines on AI** (June 2024) — setting an accountability standard without a compliance path
3. **Council of Europe AI Convention** — signed by Switzerland in March 2025, requiring future legislative incorporation

Small firms are not tracking these developments in integrated way. They feel the cumulative weight without seeing the specific path forward.

### Signal 6: The Boutique-Scale Problem

Larger firms have IT departments, compliance functions, and external counsel who can assess AI vendors. A 3-person Geneva firm does not. The cost of due diligence on an AI vendor is disproportionate to the firm's size. The result: analysis paralysis or uninformed risk-taking, with no middle path.

---

## Specific Complaints Heard from This ICP

1. *"I asked three AI vendors for a DPA. One sent me their terms of service. One said 'we don't need one.' One sent a 40-page contract that took my paralegal three days to review."*

2. *"My associate started using ChatGPT for contract review. When I found out, I didn't know what to do — ban it and lose productivity, or let it continue without any controls?"*

3. *"The SAV guidelines say I need to ensure auxiliary persons respect professional secrecy. How do I ensure that with a company in San Francisco?"*

4. *"I have 20 years of experience. I'm not going to be replaced by a chatbot. But my clients expect me to be current. So I need to adopt AI — carefully. And 'carefully' is not a product category."*

5. *"The FDPIC says existing data protection law applies to AI. Fine. But I still don't know whether my specific vendor contract protects me or exposes me."*

6. *"I told my clients I'm using AI responsibly. I can't actually prove what that means."*

---

## Competitive Landscape Gaps

### What Exists
- General AI legal tech vendors (Clio, Harvey, etc.) — mostly oriented toward larger firms or US/EU markets
- Generic DPA templates — not specific to AI tools or legal professional requirements
- SAV cloud guidelines — relevant but not AI-specific
- FDPIC guidance — confirms existing law applies, does not provide implementation path

### What's Missing for This ICP
- A tool-assessment framework specifically for small Swiss law firms against SAV guidelines and revFADP
- A simple, actionable AI policy template for 2–5 person firms that maps to SAV guidelines
- A vendor attestation product that provides written confirmation of compliance with professional secrecy requirements
- Clear Swiss/EU-hosted AI tooling recommendations with documented revFADP compliance
- A short, frank resource that answers: "Given my size, my practice areas, and my client profile, what AI governance steps are actually proportional and defensible?"

---

## Key Insight for Phase

The market failure is not AI tooling — it's **accountability infrastructure**. Small Geneva firms need a way to make defensible AI decisions that they can stand behind in front of clients, the SAV, and their own professional conscience. No current product or service in the market provides this at boutique scale in a language and format that resonates with this ICP.