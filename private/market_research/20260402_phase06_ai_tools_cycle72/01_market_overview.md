# 01 — AI Tools: Research & Intelligence Stack

## Current Stack (C72)

### web_fetch (Active — No Limit)
- Success rate: 70%+ across all phases
- Best sources: swissbanking.ch, fongit.ch, swissholdings.ch, institutional sites
- Weak sources: Government sites (SNB, FINMA, EFV) returning 404 due to URL restructure
- Recommendation: web_fetch primary research tool going forward

### web_search (Gemini — 20/day Free Tier)
- C72 usage: ~8 calls before exhaustion
- Limit: 20 searches/day = ~3-5 research-intensive phases before hitting wall
- Alternative: Upgrade to Gemini Pro API or use Perplexity API
- Immediate fix: Switch to web_fetch-only when Gemini hits limit

### Manual Web Browsing (OpenClaw Browser)
- Status: Available for JavaScript-required sites
- Use case: Fedlex.admin.ch (requires JS)
- Note: Not yet tested in C72

---

## Recommended Stack Additions

### Perplexity API
- Use: Research alternative to Gemini web_search
- Advantage: Real-time web access; lower cost per query
- Integration: Via API gateway

### RSS Feed Aggregator
- Sources: UN Geneva press releases, ITU, WIPO, ICC, UNCITRAL, FINMA news
- Tool: Inoreader or Feedly (web-based); self-hosted (for security)
- Frequency: Daily digest + breaking alerts

---

*Source: Phase 06 C72 synthesis*
