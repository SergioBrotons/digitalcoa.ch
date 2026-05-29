# 05 — Lead Magnet Draft: "The Geneva Small-Firm AI Governance Briefing"

## Phase 01 | Cycle C294 | ICP: Geneva small law firm, 2–5 attorneys, managing partner or senior associate personally accountable

**Format:** First-person singular "I" — Sergio's voice  
**Purpose:** Lead magnet for DigitalCoa.ch targeting Geneva small-law ICP  
**Distribution:** Web access, email capture, LinkedIn organic

---

# The Geneva Small-Firm AI Governance Briefing

### What the SAV Guidelines Actually Require — In Plain Terms — For a 2–5 Person Practice

---

I have a three-lawyer firm in Geneva. Two partners, one associate. We do commercial contracts, some employment work, a bit of litigation support.

When the SAV published its AI guidelines in June 2024, I read them. Then I tried to figure out what they meant for my specific practice. And I ran into a problem nobody was talking about.

**The guidelines are a framework. They don't tell you what to do.**

That's reasonable for a professional body — they're not going to endorse specific vendors. But it leaves someone like me in a difficult position. I'm the one who's accountable if something goes wrong. I'm the one who signs the DPA. I'm the one the SAV will ask if a client complains, or if something ends up in the wrong place.

So I spent time figuring out what "adequate" actually looks like for a firm like mine. Not for a BigLaw outfit with an IT department and a compliance team — for the rest of us. And what I found was that almost everything I needed to know was already available in the regulations and the SAV guidelines. It just wasn't organized for a small firm's specific situation.

This briefing is what I wish someone had handed me when I first needed it.

---

## What This Briefing Covers

This is not a general AI overview. This is a focused, practical document for Geneva lawyers who want to understand:

- What the SAV's June 2024 AI guidelines actually require for a small firm
- How revFADP (the revised Federal Data Protection Act, in force since September 2023) applies to AI tools you're already using or considering
- What a compliant Data Processing Agreement (DPA) actually looks like for an AI vendor — and why most vendor agreements don't meet the standard
- How to think about personal exposure when you delegate work to AI
- What "adequate" AI governance means for your firm, specifically, at your scale
- The three concrete steps you can take this week to move from uncertainty to defensible practice

---

## The Core Problem: Accountability Without a Map

Here is the situation as I understand it.

You are personally responsible for every AI tool you allow into your practice. Not the vendor. Not your associate who subscribed to ChatGPT. You.

The SAV guidelines say you must ensure that any auxiliary person — and AI vendors count — respects professional secrecy. The Federal Supreme Court confirmed this. If an AI vendor mishandles client data, the liability runs to you.

revFADP requires a compliant DPA with every external data processor. For AI tools handling client matter data, this is not optional. The penalties run to CHF 250,000 under Art. 61 lit. a, and that's for the clean cases.

The SAV guidelines give you three options: internal solution (AI on your own server), compliant outsourcing (vendor with proper DPA and hosting), or informed client consent. None of these options comes with a vendor list or a certification. You're on your own to assess whether a specific tool meets the standard.

And here's what nobody says plainly: the standard is not "perfect." The standard is "what a reasonable lawyer in your position would do." That's the duty of diligence standard in Art. 12(a) FMLA and Art. 6 of the Swiss Code of Professional Conduct.

So the question is not "is this tool absolutely safe?" The question is: "can I explain my decision to use this tool in a way that a reasonable lawyer would find adequate?"

That question has an answer. And you can find it before you need it.

---

## What I've Learned About the Three Options

### Option 1: Internal Solution

This means running AI on your own infrastructure. Nothing leaves the building.

For a two-to-five person firm, this is theoretically the safest option from a professional secrecy standpoint. But it requires technical expertise to set up and maintain, and most small firms don't have that capacity internally. You end up dependent on an external IT person who may not understand the legal requirements.

**My assessment:** Appropriate in principle. Feasible in practice only if you have technical support who knows what "professional secrecy compliant" means in server terms. If that's you, fine. If that's someone you have to hire, the cost may not be justified for the risk reduction.

### Option 2: Compliant Outsourcing

This is where most small firms end up — using a vendor's AI tool with cloud infrastructure.

The requirements are specific:
- A DPA that actually embeds revFADP obligations — not just the vendor's standard terms of service
- No data retention for model training — this is non-negotiable for professional secrecy
- Swiss or EU hosting — US hosting creates additional Art. 16 revFADP exposure that requires additional safeguards
- Vendor classified as auxiliary person — meaning you are responsible for their compliance, not just yours

The gap I've found in practice: most AI vendors do not offer a DPA that meets the statutory standard under revFADP Art. 9 for a law firm. They offer standard commercial DPAs, which cover GDPR-style data processing but don't specifically address the professional secrecy embedding that a law firm requires.

This is not a minor point. If your DPA doesn't specifically address the lawyer's professional obligations, it's incomplete — and the gap becomes your exposure if something goes wrong.

**My assessment:** The viable path for most small firms — but only if you have a DPA that actually meets the standard. Most vendors don't offer this out of the box. You need to ask specifically, in writing, before signing.

### Option 3: Informed Client Consent

You can obtain a client's explicit, informed consent to use AI on their matter — with a formal declaration partially waiving professional secrecy and revFADP protections. The client must be fully informed of the risks.

This is workable for specific matters where the client is sophisticated and the AI use is clearly explained. It's not a general solution for all client work.

**My assessment:** Useful for particular situations. Not a firm-wide policy. Treat as exception rather than rule.

---

## The Shadow AI Problem Nobody Wants to Talk About

Your associates are already using AI tools. Probably ChatGPT. Maybe Microsoft 365 Copilot if IT rolled it out.

You may not know about it. That's the problem.

Here's what I found in my own firm: an associate was using ChatGPT to help draft a due diligence memo. Client facts. Matter details. This was happening before I'd even decided which AI tools to approve.

The issue is not that associates are trying to be productive. The issue is that consumer AI tools are designed to improve by using your inputs. That means client data goes into a model that may use it for training. That's not a DPA issue — that's a professional secrecy issue that no DPA can fix, because the tool's fundamental architecture doesn't support it.

Microsoft 365 Copilot creates a different variant of the same problem. IT deploys it, assumes it's covered by the Microsoft enterprise agreement, and moves on. But Copilot conversations are retained in the tenant's activity history per the tenant's standard retention policy — which may not be configured for revFADP compliance. The data isn't going to OpenAI, but it's sitting in Microsoft's infrastructure with retention policies the firm may not have reviewed.

**The solution is not a ban.** Banning AI tools that staff are already using effectively just drives the practice underground. The solution is an approved tool that actually meets professional requirements, paired with a clear policy that tells your team what's allowed and what's not.

---

## What I Did About It

I'll be direct about what I've done for my own firm, because this is what actually works.

First, I mapped every AI tool currently in use — including tools I didn't know about. I talked to my associates. I checked what IT had deployed. I found two uses I hadn't approved: the ChatGPT usage I mentioned, and a Microsoft 365 Copilot activation that IT had done without a legal review.

Second, I wrote a short AI policy. One page. It covers: what tools are approved, what data can be entered into each tool, who is responsible for AI governance decisions, and what happens if someone is unsure.

Third, I signed proper DPAs with the vendors I'm using. This took time. Most vendors don't make it easy. But I got it done, and I have written confirmation that the DPA meets the standard before I put any client data into those systems.

Fourth, I established a rule: every AI output goes to a lawyer for review before it goes to a client. No exceptions. AI is a tool that assists legal judgment — it doesn't replace it.

---

## What "Adequate" Looks Like for a Small Firm

Based on the SAV guidelines, revFADP, and what I've learned from talking to colleagues, here's what adequate AI governance looks like for a 2–5 person Geneva firm:

**A written AI policy** — even one page. It doesn't have to be elaborate. It has to exist and it has to reflect the SAV guidelines and revFADP requirements.

**A compliant DPA with every AI vendor** that processes client matter data. This is not optional. If the vendor doesn't offer one that meets Art. 9 revFADP standards, you either negotiate one or you don't use them for client data.

**No consumer-grade AI tools for client matter data** without a documented informed consent process. ChatGPT, Gemini consumer versions, and similar tools do not meet the standard — not because they're bad tools, but because their architecture (data retention, model training, US hosting) is incompatible with professional secrecy requirements.

**All AI outputs reviewed by a qualified lawyer** before inclusion in client deliverables. This is the duty of diligence requirement — it applies regardless of how good the AI tool is.

**Annual review of the AI tool portfolio** and policy. The regulatory environment is changing. What's adequate today may not be adequate in twelve months.

---

## The Three Steps You Can Take This Week

**Step 1: Find out what's already in your firm's systems.**
Ask your team. Ask IT. Check what AI features have been activated in your Microsoft 365 or Google workspace. You cannot govern what you don't know about.

**Step 2: Get a written DPA with every AI vendor you use for client data.**
Contact the vendor. Ask specifically: "Does your DPA include provisions that embed the professional secrecy obligations of a Swiss law firm under Article 13 BGFA and Article 321 StGB?" If the answer is no, or if they don't understand the question, that tells you something. Either they can provide it or you shouldn't use them for client data.

**Step 3: Write one page on AI policy — starting today.**
It doesn't have to be complete. It has to start. A first draft that says "here is what we allow, here is who decides, here is what happens when someone is unsure" is better than nothing. You can refine it. You cannot protect yourself with something that doesn't exist.

---

## Why I'm Sharing This

I share this because I've been through the process of figuring it out, and because I think more Geneva lawyers need to be having this conversation. The SAV guidelines are a reasonable framework. The revFADP requirements are clear. The gap is practical implementation at small-firm scale — and that's a gap we can close together.

If you want to talk about what adequate AI governance looks like for your specific practice, I'm available.

---

**Sergio Brotons**  
Brotons.net | DigitalCoa.ch  
Geneva

*P.S. If you'd like a structured version of this briefing as a working document for your firm's AI policy — including a DPA checklist specifically for AI vendors and a simple governance template — reach out. I can walk you through what I've put together for my own practice and what I've seen work for colleagues.*

---

## Metadata for Distribution

**Target:** Geneva small law firm, 2–5 attorneys, managing partner or senior associate  
**Pain point:** Personal accountability for AI decisions without clear guidance  
**Format:** Briefing / lead magnet — first-person, practical, direct  
**CTA:** Contact for AI governance briefing / DPA review / policy template  
**Language register:** Practitioner-to-practitioner, not vendor marketing  
**Length:** Approximately 2,000 words — consumable in one sitting