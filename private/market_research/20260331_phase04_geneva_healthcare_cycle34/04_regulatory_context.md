# Phase 04: Geneva Healthcare / Small Medical Practices
## Regulatory Context

**Cycle 34 | Date: 2026-03-31**

---

## Regulatory Framework (Phase 04)

### Core Regulatory Stack

1. **Swissdamed** (Swiss Medical Device Registry)
   - **Live date:** July 1, 2026
   - **Grace period:** NONE — ~13 WEEKS NO GRACE confirmed by Swissmedic
   - **Obligation:** Medical device registration (distributors, importers, manufacturers)
   - **No transitional period** for serious incident device obligations
   - **NOT interconnected** with EUDAMED (dual registration burden)
   - **Status:** #1 MOST URGENT DEADLINE IN ENTIRE PORTFOLIO

2. **nFADP** (Swiss Federal Act on Data Protection, Sep 1, 2023)
   - **Art. 5(c):** Health data is special category data
   - **Art. 5(c) basis:** Requires explicit consent OR other lawful basis
   - **Art. 6:** Privacy by Design / Privacy by Default
   - **Art. 22:** Data Protection Impact Assessment (DPIA) required for high-risk processing
   - **Obligation:** NOW — already in force
   - **FDPIC:** Enforcement active (1,053 complaints documented 2024/2025)

3. **EU AI Act** (extraterritorial — Swiss firms with EU nexus)
   - **High-risk AI:** AI medical devices = likely high-risk classification
   - **Annex III:** AI systems used in medical devices = high-risk
   - **Compliance deadline:** August 2, 2026 (~18-19 WEEKS)
   - **Obligation:** Transparency + human oversight + documentation
   - **Extraterritorial:** Swiss practices with EU patients = EU nexus

4. **FDPIC AI Guidance** (edoeb.admin.ch)
   - **Source:** edoeb.admin.ch — FDPIC AI + data protection guidance
   - **Scope:** FADP applies to AI-supported data processing without new law
   - **Requirements:** Purpose + functionality + data sources disclosure
   - **Status:** Operative 2026 — enforcement ongoing

5. **Swissmedic Oversight**
   - **Mandate:** Swiss Agency for Therapeutic Products
   - **Role:** Swissdamed operator, medical device market surveillance
   - **Post-market:** Serious incident reporting obligations
   - **Enforcement:** Active in medical device sector

6. **FMH (Swiss Medical Association)**
   - **Role:** Professional standards for Swiss physicians
   - **AI guidance:** Emerging — likely following institutional validation (CHUV Meditron)
   - **Timeline:** Guidance expected post-CHUV Meditron institutional validation

---

## Regulatory Timeline (Phase 04)

```
NOW ──────────────────────────────────────────────────────────
│
├─ ~13 WEEKS ──────────────────────────────────────────────────────────┐
│                                                                  │
│  SWISSDAMED Jul 1, 2026                                          │
│  NO GRACE PERIOD                                                 │
│  Medical device registration obligation                          │
│  Serious incident reporting obligation                           │
│  (NOT interconnected with EUDAMED — dual burden)                │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘

│
├─ ~8 WEEKS ───────────────────────────────────────────────────────────┐
│                                                                   │
│  Andermatt Digital Gipfel Schweiz May 26, 2026                    │
│  Swiss AI Action Plan First Draft milestone                       │
│  (Federal Council formal end-2026; digitalswitzerland May 2026)   │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘

│
├─ ~14 WEEKS ─────────────────────────────────────────────────────────┐
│                                                                   │
│  AI for Good Global Summit Jul 7-10, 2026 Geneva                 │
│  UN ITU + Switzerland co-host (2,500+ attendees)                 │
│  Post-Swissdamed deadline — Geneva AI momentum continues          │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘

│
├─ ~18-19 WEEKS ──────────────────────────────────────────────────────┐
│                                                                      │
│  EU AI ACT Aug 2, 2026 (high-risk AI)                                │
│  AI medical devices = high-risk (Annex III)                         │
│  Extraterritorial for Swiss practices with EU nexus                 │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Regulatory Obligations by Practice Type

### Independent Physician (1 practitioner)
- Swissdamed registration (if distributor/importer)
- FADP Art. 5(c): patient health data special category
- DPIA: if using high-risk AI diagnostic tools
- AI tool → processor agreements (DPA)

### Small Group Practice (2–10 practitioners)
- All above +
- Practice-level AI governance policy
- Staff AI use policy
- Shadow AI audit (Decision 0)
- Serious incident reporting protocol

### Dental Practice
- Swissdamed registration (dental devices)
- FADP Art. 5(c): patient health data
- AI dental imaging = likely high-risk SaMD
- EU AI Act if EU nexus

### Radiology/Diagnostic Sub-Segment
- AI diagnostic imaging = HIGH-RISK under EU AI Act
- Swissdamed priority: medical imaging devices
- DPIA required (FADP Art. 22 + EU AI Act)
- Clinical decision support = patient safety stakes

---

## Key Regulatory Risk: Shadow AI in Clinical Practice

### The Shadow AI Problem (Phase 01 Cycle 34 Cross-Phase Finding)
- **43% NO formal AI policy + NO plans** (Wolters Kluwer March 2026)
- Practice staff using AI tools individually → Shadow AI clinical exposure
- Patient data → AI tools without processor agreements → FADP Art. 5(c) violation
- AI diagnostic errors → patient harm → liability exposure

### Shadow AI Audit (Decision 0 — Swissdamed-First Sequencing)
1. Map AI tools currently in clinical use
2. Identify patient data processing pathways
3. Assess Swissdamed registration status
4. Evaluate FADP Art. 5(c) compliance
5. Determine EU AI Act high-risk classification
6. Build AI governance framework from evidence

### Swissdamed-First Sequencing
**Why Swissdamed first:**
- Hard deadline ~13 WEEKS (no grace period)
- Legal obligation with serious incident reporting
- Registration requires knowing what devices are in use
- Shadow AI audit → Swissdamed readiness → broader AI governance

---

## Phase 01 Cycle 34 Cross-Phase Regulatory Integration

- **43% NO formal AI policy + NO plans** (Wolters Kluwer March 2026): Directly applicable to medical practices — Shadow AI clinical exposure
- **57% AI errors/hallucinations as top threat**: Clinical context amplified (patient safety = life safety)
- **55% data protection violations as top threat**: Patient health data is FADP Art. 5(c) special category — highest sensitivity
- **Swissdamed ~13 WEEKS NO GRACE**: Confirmed Swissmedic primary source — #1 most urgent deadline in portfolio
- **Swissdamed/EUDAMED not interconnected**: Dual registration burden confirmed
- **AI medical devices = high-risk EU AI Act (extraterritorial)**: Confirmed — diagnostic imaging likely Annex III
