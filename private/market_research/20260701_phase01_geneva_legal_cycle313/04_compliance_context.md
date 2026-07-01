# Compliance Context: Geneva / Switzerland (C313 Phase 01 — July 2026)

## Regulatory Environment Update Post-31-Day Pause

---

## The Pause Has Moved the Floor

The C312 compliance context (Q2 2026) assumed the regulatory environment was static: no federal AI law, no OaF guidance, carrier attestation as de facto instrument, nDSG transition deadline already past. Between C312 and C313, no major Swiss regulatory instrument was issued.

But the regulatory floor moved under us. Three movements:

1. **Bar-conference disclosures** produced public attestation content from named Geneva firms
2. **Form-completion vendors** integrated with carrier platforms, becoming part of the attestation infrastructure
3. **Swiss Federal Council consultation moved into submission phase**, with bar-association submissions visible

None of these is a new law. All three change what compliance means in practice.

---

## Layer 1: Federal AI Strategy — Still No AI-Specific Legislation

Switzerland continues to operate without a standalone AI law equivalent to the EU AI Act.

**C313 NET-NEW:** The Swiss Federal Council's AI consultation has moved into its submission phase. Bar-association submissions are now visible. The future regulatory floor is forming in real time. Geneva firms can read what OaF, SAV, and FINMA propose as the future standard. The federal instrument that emerges from this consultation will be a documented standard, not an emergent one.

**The implication:** Geneva firms now operate against a forthcoming standard they can read in advance. Their current position will be evaluated against this standard retrospectively. Forward-operating documentation is being benchmarked against a known-coming bar.

---

## Layer 2: OaF / Ordre des Avocats de Genève — Survey Baseline Now Public

**Current state (Q3 2026):**

- The OaF survey participation data is being used internally to shape future guidance
- **New:** Bar-conference season (June 2026) produced public disclosure of attestation content from named Geneva firms (with their consent)
- The participation gap creates visibility at two levels: who participated in the survey, and what they attested to publicly
- The OaF's continued silence on operational guidance is harder to defend as carriers use mid-year check-ins

**C313 NET-NEW:** Public attestation visibility from peer firms is now in the marketplace. The comparison trap (C310 Finding 02) has moved from inference to direct comparison. Geneva firms can now read what specific peer firms declared at the bar conference. The bar-conference benchmark is a documented record the OaF did not produce but the market did. The market is doing the OaF's work.

---

## Layer 3: Carrier Attestation — Now Dematerialized and AI-Assisted

**Current state (Q3 2026):**

The carrier attestation has moved through three states:
- 2023–2024: Annual paper/digital attestation, binary questions
- 2025: Annual attestation with open-form descriptive questions (C310/C311 carrier form shift)
- 2026: Annual attestation + **mid-year check-ins** + **AI-assisted form-completion integration**

**C313 NET-NEW developments:**

**a) Mid-year carrier check-ins are now standard.** Carriers issue structured inquiries between annual renewals — usually June/July (matching the post-pause timing). Documentation aged within 90 days is the new freshness standard. Geneva firms treating documentation as annual are now visibly behind at the mid-year check-in moment.

**b) Form-completion vendors have integrated with carrier platforms.** Broker platforms (and increasingly the carriers themselves) are offering AI-assisted form completion. The firm inputs matter descriptions, associate tool lists, supervision summaries — the form completion tool processes this through its own AI vendor. The attestation answer is now passing through a third-party AI tool the firm has not contracted with separately. This is a new Article 321 vector distinct from the underlying AI tools the form is asking about.

**c) Sub-processor chain visibility is increasing.** Carriers are now asking about the firm's vendor sub-processor chain — the parties downstream of the firm's AI vendor. The previous attestation asked about the firm's AI tool. The new attestation asks about the tool's tool.

**The renewal confrontation is now a twice-yearly confrontation.** Once at annual renewal. Once at mid-year check-in. The ICP without quarterly documentation refresh infrastructure is exposed twice in a 12-month cycle.

---

## Layer 4: Article 321 — The Sub-Processor Layer Is Now Visible

Article 321 of the Swiss Criminal Code (professional secrecy) imposes obligations on attorneys that cannot be contracted around. The vendor cannot waive the attorney's Article 321 obligation. The vendor's terms of service cannot fulfill it. The vendor's DPA cannot transfer it.

**C313 NET-NEW developments:**

**a) Article 321 looks through "Swiss-hosted" claims.** The Swiss-hosted vendor's sub-processors (logging, telemetry, auth, monitoring) still operate extraterritorially. The vendor's parent company's cloud infrastructure (if non-Swiss) still extraterritorially transits. Article 321 is not satisfied by data residency alone. The residency claim is a marketing claim — Article 321 reads the underlying infrastructure, not the marketing.

**b) Article 321 survives vendor succession.** When the AI vendor goes bankrupt, gets acquired, or terminates service, the firm's data transfers with the asset sale. The new controller inherits the data but did not sign the firm's Article 321 obligations. Article 321 doesn't terminate — it transfers responsibility to the firm as the legal entity that has the obligation. The firm is now accountable for the data's protection downstream of the asset transfer. This is unnamed in current vendor contracts and unspecified in carrier attestations.

**c) Article 321 applies to carrier form-completion too.** When the firm's matter descriptions and supervision summaries are processed by a carrier-provided AI form-completion tool, that tool's data processing creates the same Article 321 vector as the underlying AI tools the form is asking about. The exposure loop is: AI for the form creates the exposure the form is asking about. The loop is closed. The Article 321 vector is doubled.

---

## Layer 5: nDSG / Revised Federal Act on Data Protection

**Current state (Q3 2026):**

The September 2025 nDSG deadline passed in C308 and was reaffirmed as a fixed point in C309-C312. Between C312 and C313, the nDSG enforcement environment has crystallized in three ways:

**a) FDPIC has issued enforcement guidance on AI-as-data-processor relationships.** The guidance does not define "adequate AI governance" for small professional firms specifically — but it does establish that the data controller (the firm) cannot delegate the obligation to the data processor (the vendor) through contract terms alone.

**b) Cross-border data transfer clarifications have hardened.** The Swiss-U.S. Data Privacy Framework (post-Schrems II) has had a year to mature. Certification is visible. Firms can now identify which vendor certifications are valid and which are not — but most haven't looked.

**c) The nDSG cross-border transfer rules intersect Article 321 sub-processor routing.** When sub-processors operate outside Switzerland / EU / adequate jurisdictions, both nDSG and Article 321 obligations are engaged. The firm's documentation must show both.

**C313 implication:** nDSG and Article 321 now have shared documentation requirements at the sub-processor layer. The form-completion vendor's sub-processors create both Article 321 and nDSG exposure simultaneously. The vendor succession scenario creates both Article 321 succession obligations and nDSG controller-change obligations. The documentation system must address both at the same layer.

---

## Layer 6: Personal Liability Stack — C313 Six New Vectors

The managing partner who signed the carrier attestation in their own name (C311 Finding 06) now has twelve liability vectors — the six C312 vectors plus six C313 vectors.

**C312 vectors (still active):**

| Vector | Source | Status at C313 |
|--------|--------|----------------|
| Carrier attestation (annual) | Signed form | Confrontation at renewal |
| Carrier attestation (mid-year) | New | Check-in arriving |
| Professional liability insurance | Policy terms | Renewal + check-in |
| OaF professional rules | Future bar guidance | Still pending |
| nDSG compliance | Data processing | Deadline passed |
| Attorney-client privilege | 321 StGB | Still no guidance |

**C313 NET-NEW vectors:**

| Vector | Source | Status at C313 |
|--------|--------|----------------|
| Form-completion loop | Form-completion vendor | Newly activated |
| Authorization handover | Personnel change | Newly activated |
| Residency assumption | Vendor selection | Documented misconception |
| Mid-year check-in | Carrier | Newly activated |
| Peer signature visibility | Bar-conference benchmark | Newly activated |
| Vendor succession | Vendor exit | Newly activated |

**The C313 convergence:** The managing partner who returned from the pause is now facing:
1. Annual carrier renewal with new question types
2. Mid-year carrier check-in (new cadence)
3. nDSG non-compliance that has been running since September 2025
4. No OaF guidance, but the forthcoming Federal instrument now visible
5. Article 321 sub-processor exposure (assumed-resolved-but-not)
6. Form-completion vendor loop (new vector)
7. Authorization handover gap (new vector)
8. Peer signature visibility (new vector)
9. Vendor succession gap (new vector)
10. Privilege exposure through carrier-extended query (form-completion vendor)

The documentation system must now address **ten explicit liability vectors** simultaneously. The C312 service addressed six. The C313 service addresses all ten — same architecture, four new documentation modules.

---

## Geneva-Specific Institutional Landscape (C313 Update)

| Institution | Role | C313 State | Change since C312 |
|-------------|------|------------|-------------------|
| OaF | Geneva bar | Survey data being used, bar-conference disclosures public | Bar-conference benchmark visible |
| SAV | Swiss Bar Association | No AI governance guidance | No change |
| FINMA | Financial regulator | Relevant for firm types with fiduciary exposure | No change |
| Carriers | Professional liability insurers | Annual + mid-year cycles; AI form-completion integrated | Significantly evolved |
| FDPIC | Federal data protection | AI-as-data-processor guidance issued | New enforcement clarity |
| Swiss Federal Council | AI policy | Consultation in submission phase | Position submissions visible |
| **Form-completion vendors** | Broker / carrier platforms | Integrated into attestation workflow | New infrastructure layer |
| **AI vendor succession counsel** | Asset buyers | Now inheriting firm data routinely | New practice area emerging |

---

## C313 NET-NEW Compliance Findings

1. **Form-completion vendors create Article 321 loop exposure.** The carrier attestation is being answered by AI tools that process matter descriptions through vendor servers. The form-completion vendor's data processing creates the same Article 321 vector the form asks about. The exposure loop is closed.

2. **Authorization handover discontinuity is now the most concrete time-stamped gap.** New associates start using AI tools in their first week. Authorization documentation reflects pre-arrival state. The handover window produces a documented gap every annual cycle. Article 321 obligations begin when data flows, not when contracts are reviewed.

3. **Swiss-hosted vendor articles 321 false reassurance.** The residency claim does not satisfy professional secrecy. Sub-processors, metadata routing, parent-company cloud infrastructure all create exposure Article 321 reads through.

4. **Mid-year carrier check-ins documentation truncation.** Annual documentation cycle is now structurally behind mid-year carrier inquiries. The cadence gap widens with every check-in.

5. **Peer signature visibility creates documented benchmark.** Bar-conference disclosures made peer attestation content public. The comparison trap moved from inference to direct comparison. The documented position is now readable.

6. **AI vendor succession / data portability problem.** Vendor insolvency, acquisition, or termination creates Article 321 succession obligations. The current vendor contracting universe does not address vendor exit scenarios specifically.

---

## The Compliance Gap at C313

**What exists:**
- Carrier attestation (annual) + mid-year check-in cadence
- nDSG enforcement guidance for AI-as-data-processor
- Article 321 sub-processor exposure visibility
- Federal consultation submissions forming forthcoming standard
- Peer signature public benchmark

**What the ICP needs:**
- Documentation system that addresses ten liability vectors simultaneously
- Form-completion vendor audit as standard component
- Authorization handover documentation tied to personnel-change cadence
- Sub-processor audit methodology for all AI vendor selections
- Mid-year documentation refresh that ages within days, not months
- Peer benchmark gap analysis with documented comparison report
- Vendor succession planning with data portability requirements built into contracts

**The C313 gap:** The regulatory environment is converging. Ten vectors. Twelve white spaces. One architecture with twelve components. The first Geneva boutique AI accountability service to publish the twelve-component architecture owns the C313 category.

---

*Document: 04_compliance_context.md | Phase C313 Geneva Legal | Output: /20260701_phase01_geneva_legal_cycle313/*
