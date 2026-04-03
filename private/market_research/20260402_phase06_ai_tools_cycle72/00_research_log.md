# Phase 06 — AI Tools for Brotons.net / DigitalCoa.ch Operations | Cycle 72

**Conducted:** 2026-04-02 13:28 Europe/Berlin (synthesis from Phase 01-05 C72)  
**Status:** COMPLETE ✓

---

## Method

Phase 06 synthesizes findings from Phases 01-05 C72 to assess AI tool categories relevant for Brotons.net/DigitalCoa.ch operations. This is a strategic assessment, not primary research.

---

## AI Tool Categories Assessed for Operations

### Category 1: Research & Intelligence Tools

**web_fetch + web_search (Active)**
- Current state: Primary research tools in use
- web_fetch: High success rate (6-7/10); excellent for Swiss institutional sources
- web_search: Gemini-powered but free tier exhausted early in this session
- Limitation: Gemini 20/day free tier = 3-5 successful searches before exhaustion
- Recommendation: Consider upgrading Gemini tier or using alternative search for higher-volume research

**web_search alternatives to assess:**
- Google Search API (paid)
- Perplexity API
- DuckDuckGo (free, rate-limited)

### Category 2: Content Writing Tools

**AI Writing — Current Workflow**
- Claude/MiniMax: Used for drafting via OpenClaw
- Strength: SOUL.md-compliant tone (calm, sharp, restrained)
- Limitation: Bilingual EN/FR requires human review or separate prompts

**Tool assessment:**
- Claude/GPT: Sufficient for article drafting once owner approves
- Translation tools: DeepL (for EN→FR), reviewed by human for quality control
- Note: All content creation blocked by owner approval requirement

### Category 3: Publishing & CMS Tools

**Stackbit / Next.js**
- Current staging: digitalcoa.ch on Next.js/Stackbit
- Status: Publishing to staging blocked by owner approval requirement
- Note: Staging available; production publish requires owner

**Substack**
- Current state: 5 articles published
- Status: Further publishing blocked by owner approval requirement
- Opportunity: 9+ article frameworks ready (C71-C72)

### Category 4: Analytics Tools

**Access needed:**
- Substack analytics (owner access required)
- Google Analytics 4 (if available for digitalcoa.ch)
- Staging analytics vs. production analytics separation

**Priority:** Verify GA4 access for Brotons.net when owner approves publishing

### Category 5: SEO & Metadata Tools

**From Phase 01-05 C72 research:**
- Schema markup tools: For Geneva legal/arbitration content
- Meta description optimization: Based on Swiss search patterns
- Internal linking automation: Phase 01-05 C72 identified internal link gaps

### Category 6: AI Governance Research Tools

**For Brotons.net content specifically:**
- UN/ITU press release monitoring: Automated alerts for Geneva AI events
- FINMA news monitoring: Alert for FINMA AI rule developments
- ICC/UNCITRAL publication feeds: For arbitration AI developments
- Swiss legal database monitoring: For FADP AI enforcement cases

---

## AI Tool Gap Analysis

### Immediate Gaps
1. **Gemini free tier (20/day)**: Exhausted in ~3-5 searches per session — insufficient for 6-phase research rotation
2. **Translation tool**: DeepL not integrated; bilingual content requires workaround
3. **Automated monitoring**: No automated alerts for Geneva AI event calendar

### Recommended Additions
1. **Perplexity API** or **Google Search API**: Alternative to Gemini web_search
2. **DeepL Pro**: For EN→FR translation review workflow
3. **RSS feed aggregator**: UN Geneva, ITU, WIPO, FINMA, ICC press releases
4. **Calendar integration**: Geneva AI events calendar (C71 finding) → automated reminders

---

## C72 AI Tool Findings from Phases 01-05

### Phase 01 (Geneva Legal)
- AI in UNCITRAL: February 2026 AI Colloquium on dispute resolution
- AI in ICC: 2026 Rules revision includes AI case management provisions
- AI in Swiss Arbitration: ASA Geneva events covering AI
- Tool implication: These institutions are adopting AI — Brotons.net should track their AI tools

### Phase 02 (Geneva Finance)
- FINMA AI Guidance 08/2024: AI governance requirements for Swiss financial institutions
- AI consulting demand: EY AI-first positioning signals market demand
- Tool implication: FINMA AI Desk = regulatory AI tool; Swiss banks adopting AI

### Phase 03 (Geneva Consulting)
- EY AI services: AI strategy consulting, AI-powered M&A
- PwC Trust-in-AI: Assurance practice
- AI consulting: Dominant competitive theme across Big 4
- Tool implication: AI consulting tools (Anthropic, OpenAI APIs) integrated into consulting workflows

### Phase 04-05 (Brotons)
- Brotons.net research: AI governance articles require UN Geneva + Swiss regulatory monitoring
- Content workflow: AI drafting tools available; publishing blocked
- Tool implication: Automated monitoring > manual research for efficiency

---

## AI Tool Strategy Recommendations

### Short-term (Owner Approval Required)
1. Activate DeepL for EN→FR bilingual content workflow
2. Set up RSS feeds for: UN Geneva, ITU, WIPO, FINMA, ICC, UNCITRAL
3. Configure calendar alerts for Geneva AI events (C71 confirmed)

### Medium-term (Owner Approval + Budget)
1. Upgrade Gemini API tier for higher-volume web_search
2. Add Perplexity API as research alternative
3. Set up Substack analytics dashboard (owner access)

### Long-term (Strategic)
1. Automated Geneva AI governance newsletter (Brotons.net)
2. AI monitoring dashboard: Swiss AI regulation + Geneva events
3. Bilingual EN/FR automated publishing workflow

---

## Skipped (C72 Phase 06)

- AI tool testing: Owner approval + budget required
- Gemini API upgrade: Owner approval required
- DeepL integration: Owner approval required
- RSS automation setup: Owner approval required

---

## Rate Limit Summary — C72 Session

| Tool | Used | Limit | Status |
|------|------|-------|--------|
| Gemini web_search | ~8 | 20/day | Exhausted early Phase 01 |
| web_fetch | ~20 | None | 70%+ success rate |
| MiniMax | Ongoing | N/A | Operational |

**Recommendation:** Shift primary research to web_fetch (no daily limit) and use web_search sparingly.

---

**Phase 06 C72 COMPLETE — All 6 phases done. Loop to Phase 01 C73.**
