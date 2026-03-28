# Phase 04 — Regulatory Context: Geneva Healthcare AI

**Research Date:** 2026-03-28
**Phase:** 04 — Geneva Healthcare
**Status:** IN PROGRESS

---

## Regulatory Framework Overview

Healthcare AI in Switzerland operates under a multi-layered regulatory structure that combines federal data protection, cantonal health law, medical device regulation, and emerging AI-specific guidance. For small Geneva practices, the primary regulatory concerns are: (1) nFADP compliance, (2) cantonal healthcare licensing, (3) medical device rules for AI tools, and (4) professional liability.

Switzerland does not yet have a comprehensive AI law. Regulation is guidance-based, principle-driven, and evolving. This creates both uncertainty (practices don't know what's required) and opportunity (advisory to help them navigate).

---

## Layer 1: nFADP — Swiss Data Protection (Primary Frame)

### nFADP Basics for Healthcare AI
- **Full Name:** Federal Act on Data Protection (SR 235.1), amended 2023/2024, in force since 1 September 2023
- **Equivalent:** GDPR-adjacent but Swiss-specific; recognized as adequate by EU through static adequacy (Bern mechanism)
- **Medical Data Classification:** Art. 5(c) designates health data as "sensitive" — highest protection tier

### nFADP Requirements for AI Processing Patient Data

| Requirement | What It Means for Small Practice |
|---|---|
| **Legal Basis** (Art. 6) | Explicit consent OR overriding legitimate interest; for medical AI, consent is safest path |
| **Data Minimization** (Art. 6(3)) | Only collect/use data strictly necessary for the stated purpose |
| **Purpose Limitation** (Art. 6(2)) | AI tool cannot repurpose patient data for training without separate consent |
| **Data Subject Rights** (Arts. 8–13) | Patients can access, correct, delete their data; AI system must support this |
| **Third-Party Processors** (Art. 9) | AI vendors acting as data processors require written DPA (data processing agreement) |
| **Cross-Border Transfer** (Art. 16) | Cloud AI services with US hosting need adequacy assessment or SCCs |
| **Breach Notification** (Art. 24) | Data breaches must be notified to FDPIC within 72 hours if high risk to patients |
| **Privacy by Design** (Art. 7) | AI system must be designed with data protection from the start, not retrofitted |

### Practical nFADP Implications for Medical AI Adoption
1. **SaaS AI Tools (e.g., cloud-based clinical AI):** Data processing agreement with vendor required; confirm Swiss data residency
2. **On-Premise AI Tools:** Practice is data controller; must document legal basis, purpose, security measures
3. **AI Tool Selection Questions to Ask Vendors:**
   - Where is patient data hosted? (Swiss server preferred; EU acceptable; US requires adequacy assessment)
   - Is there a DPA? (Standard contractual clauses for Swiss-CH)
   - Is patient data used for model training? (Must be separately consented)
   - Has the vendor done a DPIA? (Data Protection Impact Assessment)

---

## Layer 2: Medical Device Regulation — Swissmedic

### Swissmedic Scope
- **Swissmedic** (Swiss Agency for Therapeutic Products) regulates medical devices in Switzerland
- **Basis:** Therapeutic Products Act (HPA/SR 812.21) and Medical Device Ordinance (MDO/SR 812.213)
- **EU Equivalence:** Switzerland unilaterally recognizes certain CE-marked devices; relationship is complex post-Brexit

### AI as a Medical Device
- AI-based diagnostic or decision-support tools may qualify as **Software as a Medical Device (SaMD)**
- Risk classification: Class I (low risk) to Class IV (highest risk) under MDR/IVDR framework
- Small practices using a certified AI diagnostic tool (e.g., AI dermatology screening): the practice is the *operator*, not the manufacturer; primary liability lies with the tool manufacturer
- **Key risk for practices:** Using an uncertified AI tool for diagnostic purposes could create liability exposure

### What This Means for Advisory
- Help practices understand when an AI tool requires Swissmedic clearance
- Guide them to ask vendors the right questions about device certification
- Position ISO 13485 vendor assessment as part of AI tool evaluation framework

---

## Layer 3: Cantonal Health Law — Geneva

### Geneva Canton Healthcare Regulation
- **Cantonal Health Department (DSG/SPSCI):** Issues practice licenses, oversees compliance
- **Geneva Health Act (LIPP/KS 800):** Framework for healthcare practice licensing and operation
- **Medical Assistant Licensing:** Assistants must meet cantonal certification requirements
- **Practice Inspections:** Geneva conducts periodic practice inspections; data security increasingly examined

### AI-Specific Cantonal Considerations
- No specific Geneva cantonal regulation on AI in medical practice (as of early 2026)
- General data protection + professional ethics rules apply
- Medical association guidelines (FMH) provide soft-law guidance on AI use
- Cantonal hospital (HUG) AI governance framework may serve as informal standard

---

## Layer 4: Professional Liability — Medical

### Physician Professional Liability
- **Professional Liability:** Swiss physicians carry mandatory liability insurance (Berufshaftpflicht)
- **AI Decision Liability:** If AI recommends a diagnosis/treatment and physician follows it, liability generally rests with the physician
- **Key principle:** AI can assist, but the physician's judgment remains paramount (FMH ethical guidelines)
- **Documentation requirement:** Any AI-assisted decision must be documented in the patient record

### Emerging AI Liability Precedents
- No Swiss case law yet on AI medical liability (emerging area globally)
- EU AI Act (Regulation (EU) 2024/1689) is monitor and consider; Switzerland watching
- FMH has published digital health guidelines (2022, updated 2024) — relevant soft-law reference

---

## Layer 5: ISO Standards & Framework Reference

### ISO 42001:2023 — AI Management System
- **Relevance:** First international standard for AI management systems; published December 2023
- **Application:** Organizations that develop, provide, or use AI systems
- **Use for Small Practices:** Demonstrates commitment to responsible AI governance; can be positioned as differentiator
- **Certification:** Available through Swiss certification bodies (SQS, SGS, Bureau Veritas CH)

### ISO 13485:2016 — Medical Devices Quality Management
- **Relevance:** Quality management for medical device manufacturers
- **Use for Advisory:** Framework for evaluating AI tool vendors; ask if they are ISO 13485 certified

### ISO 27799:2016 — Health Informatics Information Security
- **Relevance:** Information security management in health informatics
- **Use for Advisory:** Guidance for healthcare data security practices; good reference for practice cybersecurity checklist

### ISO 22301 — Business Continuity
- **Relevance:** Relevant for practice data backup, ransomware recovery planning
- **Use for Advisory:** AI governance includes AI system failure planning

---

## Layer 6: International Reference Points

### EU AI Act (Regulation (EU) 2024/1689)
- Not directly applicable in Switzerland (non-EU)
- However: Swiss companies serving EU patients may need to comply
- High-risk AI systems (medical devices, critical infrastructure) face strict requirements
- **Relevance for Geneva practices:** Indirect; sets global standard; Swiss guidance likely to converge

### FDA AI/ML-Based Software as Medical Device (US)
- FDA has issued multiple guidance documents on AI-based SaMD (2019, 2021, 2024)
- Key concept: "Predetermined change control plans" for adaptive AI
- **Relevance for Swiss advisory:** Reference framework; Swissmedic may adopt similar concepts

### WHO AI Ethics & Governance (2021)
- WHO published "Ethics and Governance of AI for Health" (2021)
- Six core principles: autonomy, beneficence, non-maleficence, justice, explicability, accountability
- **Use for Advisory:** Basis for patient-facing AI governance explanations

---

## Regulatory Risk Assessment for Small Geneva Practices

| Regulatory Area | Risk Level | Practice Impact |
|---|---|---|
| nFADP — AI tool use without DPA | Medium-High | Fine up to CHF 250K; reputational damage |
| nFADP — Cross-border data transfer | Medium | Breach notification risk; patient trust erosion |
| Swissmedic — Uncertified diagnostic AI | High | Liability exposure; cantonal sanction risk |
| Professional liability — AI decision harm | Medium-High | Malpractice claim; insurance may not cover AI errors |
| Cantonal licensing — Data security | Medium | Inspection failure; practice license risk |
| FMH guidelines — AI use ethics | Low-Medium | Professional sanction (FMH membership) |

---

## Key Regulatory Takeaways for ICP

> **EN:** Geneva medical practices face a multi-dimensional regulatory landscape: nFADP (strict data protection), Swissmedic (medical device rules), cantonal health law, and professional liability. The absence of a specific Swiss AI law creates uncertainty — but this also means early adopters who invest in governance frameworks will establish a defensible position before regulation tightens. The advisory opportunity is clear: help practices adopt AI confidently by navigating the existing regulatory layers correctly.

> **FR:** Les cabinets médicaux genevois sont confrontés à un paysage réglementaire multidimensionnel : nFADP (protection des données stricte), Swissmedic (dispositifs médicaux), droit cantonal de la santé et responsabilité professionnelle. L'absence de loi suisse spécifique sur l'IA crée une incertitude — mais cela signifie aussi que les premiers adopteurs qui investissent dans des cadres de gouvernance établiront une position défendable avant que la réglementation ne se durcisse. L'opportunité de conseil est claire : aider les cabinets à adopter l'IA en toute confiance en naviguant correctement dans les couches réglementaires existantes.

---

## Data Sources
- nFADP (SR 235.1): FedLex.admin.ch
- Swissmedic AI/ SaMD guidance: Swissmedic.ch
- Geneva Health Act (LIPP/KS 800): Canton de Genève
- FMH Digital Health Guidelines 2024: FMH.ch
- ISO 42001:2023: ISO.org
- WHO AI Ethics Report 2021: WHO.int
- EU AI Act (EU) 2024/1689: EUR-Lex

---

*Regulatory context — Phase 04. Research in progress.*
