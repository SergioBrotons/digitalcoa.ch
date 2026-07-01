# Market Research Rotation State

Last updated: 2026-07-01 (C315 Phase 01 close)

## Cycle Status

### C315 — EU AI Act Post-Deadline Enforcement Lens — IN PROGRESS (1/6 phases)
**Timing driver:** EU AI Act high-risk applicability active since late August 2026, ~30 days post-activation
**Cycle count:** 46 cumulative (C315 P01 = 46th cycle)
**Pivot:** T-minus 30 (C314 readiness) → T-plus 30 (C315 enforcement)

| Phase | Vertical | Git Commit | Date |
|-------|----------|------------|------|
| 01 | Geneva Legal — Post-Deadline Enforcement | (pending push) | 2026-07-01 |
| 02 | Geneva Finance — Post-Deadline FINMA-Article 26 Enforcement | — | — |
| 03 | Geneva Consulting — Post-Deadline Sub-Consultant Article 26 Enforcement | — | — |
| 04 | Geneva Healthcare — Post-Deadline Physician Article 26 Enforcement | — | — |
| 05 | Cross-Vertical Synthesis — T-plus 30 Days Universal Condition | — | — |
| 06 | DigitalCoa Competitive — T-plus 30 Days Category Reaffirmation | — | — |

### C315 P01 NET-NEW Findings (Geneva Legal — Post-Deadline Enforcement)
1. Member State authority (MSA) designation map + jurisdictional analysis — fifteen designated MSAs + Swiss federal coordination
2. First named-individual deployer action response — Genevoise peer named in formal MSA notice, Article 26 attribution
3. Carrier attestation update cycle — three new EU AI Act clauses (Article 9, 12, 26) at mid-year 2026 refresh
4. Article 12 logging audit trigger — MSA audit through vendor infrastructure + carrier letter to firm
5. Article 26 named-sub-principal bar enforcement — OaF / FSA post-deadline guidance, named associate personally exposed
6. Client-driven enforcement inquiry reversal — from C314 readiness posture to C315 enforcement history

### C315 P01 ICP Language Chain
- Geneva Legal Post-Deadline: "Your peer has been named. The deadline is past. The first notices are out. Will mine be next?"
- Hinge phrases: Which authority has jurisdiction over your firm / The MSA has named the managing partner and the associate / Three new clauses at the mid-year refresh / The MSA sent an audit to your vendor, the carrier sent you a letter / The OaF is following EU AI Act Article 26 now / The client is asking about your enforcement history

### C315 P01 Service Architecture (24 modules total = 18 from C312-C314 + 6 new in C315 P01)
- Module 19: MSA designation map + jurisdictional analysis
- Module 20: Named-individual deployer action response methodology
- Module 21: Carrier attestation translation memo (Article 9, 12, 26 mapping)
- Module 22: Article 12 logging audit response architecture
- Module 23: Article 26 named-sub-principal authorization roster
- Module 24: Post-deadline client disclosure methodology
- **Pricing — C315 Post-Deadline Enforcement Bundle: CHF 11,900** (all six C315 modules, delivered T-plus 30 to T-plus 180)

### C314 — EU AI Act 30-day Operational Lens — FULLY CLOSED (6/6 phases)
**Timing driver:** EU AI Act high-risk applicability active late August 2026 — ~30 days from research
**Cycle count:** 45 cumulative (C307–C314 P06)

| Phase | Vertical | Git Commit | Date |
|-------|----------|------------|------|
| 01 | Geneva Legal | 16c613b + 9fed5ef | 2026-07-01 |
| 02 | Geneva Finance | 595b931 | 2026-07-01 |
| 03 | Geneva Consulting | 8d8da1a | 2026-07-01 |
| 04 | Geneva Healthcare | 19c4fc9 | 2026-07-01 |
| 05 | Cross-Vertical Synthesis | c5b59b2 | 2026-07-01 |
| 06 | DigitalCoa Competitive | a58f578 | 2026-07-01 |

### C314 Universal Findings (Cross-Vertical)
1. Article 3 named-individual deployer applicability — universal
2. Client-driven named-individual inquiry reversal — universal
3. Article 12 × Swiss professional secrecy collision matrix — universal form, vertical-specific weight
4. Article 26 named-sub-principal extension — universal structural-permanent
5. Article 4 named-individual named-vertical named-role AI literacy — universal form
6. Geneva conference circuit EU AI Act 30-day named-individual benchmark — June 2026 peer disclosure cycle

### C314 ICP Language Chain
- P01: "Your client just asked. The deadline is in 30 days."
- P02: "My institutional client just asked for EU AI Act readiness."
- P03: "My EU client just asked who is responsible, by name. The answer is me."
- P04: "My EU patient asked, by name, who is responsible for the AI that wrote the encounter note."
- P05: "By name. By tool. By encounter. The deadline is in 30 days. Every sector. Every client. The same question."
- P06: "Nobody's selling what I bought. By name. By tool. By encounter. By matter. By mandate. By engagement. By Article 12. By Article 26. By Article 321 CC. By Article 321 CP. By Banking Act Article 47. By FINMA Circular 2026/03 Section 7.4. By nFADP Article 63. The deadline is in 30 days. I bought evidence, not a framework."

### C314 Service Architecture
- 54 modules projected (C312 6 + C313 24 + C314 24)
- Cross-Vertical Geneva EU AI Act 30-Day Named-Individual Readiness Briefing — CHF 9,900
- Pre-August 2026 bundle — only pre-deadline bundle in Geneva market

### Core Positioning (Stable Across Cycles)
"The market offers frameworks. I produce evidence. Your form is the design specification."

### Anchor (Stable)
"For physicians, evidence is personal. And your license is on the line."

---

## C315 — Active Cycle: Geneva Legal (Phase 01) — COMPLETE

**Cycle count:** 46 cycles (C315 P01 closed 2026-07-01)
**Output directory:** /digitalcoa_staging/private/market_research/20260701_phase01_geneva_legal_cycle315/

### C315 Pivot Summary
- C314 (closed) = readiness BEFORE the deadline (T-minus 30 days)
- C315 (active) = first 30 days AFTER the deadline (T-plus 30 days)
- Pivot realized: post-deadline enforcement signals (Member State authority designation, market surveillance authority activity, first formal notices, Article 26 named-sub-principal bar enforcement, carrier attestation update cycle, client-driven enforcement inquiry reversal)

### Phase Rotation Sequence (C315 Cycle)
1. **Phase 01: Geneva Legal — post-deadline enforcement — COMPLETE 2026-07-01**
2. Phase 02: Geneva Finance — post-deadline FINMA-Article 26 enforcement
3. Phase 03: Geneva Consulting — post-deadline sub-consultant Article 26 enforcement
4. Phase 04: Geneva Healthcare — post-deadline physician Article 26 enforcement
5. Phase 05: Cross-Vertical Synthesis — T-plus 30 days universal condition
6. Phase 06: DigitalCoa Competitive — T-plus 30 days category reaffirmation

---

## Rotation Sequence (Stable)
legal → finance → consulting → healthcare → cross-vertical → DigitalCoa → repeat

## Backoff Protocol
- Rate limit: 1500 MiniMax requests / 5 hours (~5 req/min)
- If rate limited: save state → cron job 1 hour → resume
- Never lose state. Never stop permanently

## Cycle History (Recent)
- C307: 6 phases
- C308: 6 phases
- C309: 6 phases
- C310: 6 phases
- C311: 6 phases
- C312: 6 phases (carrier attestation — first readiness cycle)
- C313: 6 phases (post-31-day-pause — first re-engagement cycle)
- C314: 6 phases (EU AI Act 30-day operational lens — fully closed)

Total: 45 cycles as of C314 close.