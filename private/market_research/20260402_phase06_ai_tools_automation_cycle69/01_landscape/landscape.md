# Phase 06 — AI Tools & Automation: Landscape
## Cycle 69 | 2026-04-02 | Operator Workflow AI Tools

## Operator Tool Inventory

### Research Tools
- web_fetch: primary source fetching (admin.ch, SwissHoldings, USTR — working)
- web_search: targeted search (Gemini — hit daily limit, resumes after reset)
- pdf: not needed this cycle

### Workflow Tools
- GitHub staging push: working
- Memory files: rotation state tracking
- Telegram cron: working for announcements

### Access Blocks (Persistent)
- Fedlex.admin.ch (JS-required)
- SECO ACCTS (404)
- SNB (URL restructure — 404)
- SBA (URL restructure — 404)
- FDPIC (DNS failure)
- FINMA AI pages (404)

## Rate Limit Status
- MiniMax: 8% used, 2+ hours to reset
- Can briefly run 10 req/min
