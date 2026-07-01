# Compliance Context: Geneva Healthcare — C314 Phase 04

## Geneva/Switzerland Specific Regulatory Architecture for the Indépendant Médecin

---

## Overview

The Geneva indépendant médecin operates under a uniquely dense seven-regime compliance architecture for AI use in clinical practice. No other Geneva professional vertical (legal, finance, consulting) carries this density, because none other carries the **Swiss Criminal Code Article 321 medical secrecy** layer — a criminal-law obligation that attaches to the named physician personally, applies to any disclosure of patient medical secrets to unauthorized parties, and creates a uniquely acute collision with EU AI Act Article 12 (logging) and Article 10 (data governance) requirements that the legal, finance, and consulting verticals do not face.

The seven regimes, in layered order of legal hierarchy:

1. **Swiss Criminal Code Article 321 (medical secrecy — criminal law, named-physician-personal)**
2. **nFADP (new Federal Act on Data Protection, in force from 1 September 2023, with personal liability under Article 63 — sensitive personal data Art.9 for health)**
3. **Cantonal medical practice law (Geneva — Loi sur la santé, K 1 03; Loi sur les professions de la santé, K 1 04)**
4. **Federal Act on Medical Professions (MedBG / LPMéd) + HIN-corridor obligations + Swissmedic medical device framework + LAMal/KVG insurance framework**
5. **Medical liability carrier attestation (professional liability insurance — encounter-level evidence; mid-year check-in cadence now structural; AI scribe / AI clinical decision support disclosure; sub-specialty AI delegate disclosure)**
6. **Convention de remplacement obligations (FMH canton-affiliated template; silence on AI authorization is operationally breached)**
7. **EU AI Act (applicability to Geneva médecin via Article 3 deployer status by use on EU natural persons, plus Article 6(3) Annex III high-risk AI classification clarification June 2026; Article 4 AI literacy; Article 12 logging; Article 13 high-risk AI components; Article 14 human oversight; Article 26 deployer obligations; Article 50 transparency)**

Plus three professional governance overlay layers:

8. **FMH (Fédération des médecins suisses) professional federation ethics + governance bulletins**
9. **AMG (Association des Médecins de Genève) cantonal specialty section benchmark disclosures**
10. **SSMIG / SGPP / SSP / SSO / SGK / specialty society ethics guidance + named-physician disclosure cycles**

This document maps the structural conditions under which these regimes converge on the named Geneva médecin for named-encounter AI use, with a 30-day window before EU AI Act late August 2026 applicability.

---

## Regime 1: Swiss Criminal Code Article 321 — Medical Secrecy (CRITICAL, PERSONAL-CRIMINAL, NAMED-PHYSICIAN, NAMED-ENCUNTER)

### What the Law Says

**Article 321 of the Swiss Criminal Code (Code pénal suisse, Code criminel) — Violation du secret médical / Violation of Medical Secrecy:**

> "Les médecins, dentistes, pharmaciens, sages-femmes ou leurs auxiliaires qui auront révélé un secret à eux confié en vertu de leur profession ou dont ils avaient connaissance à raison de leur état seront punis d'une peine privative de liberté de trois ans au plus ou d'une peine pécuniaire."

(Translation: Physicians, dentists, pharmacists, midwives, or their auxiliaries who reveal a secret confided to them by virtue of their profession or of which they have knowledge in the course of their duties shall be punished by imprisonment of up to three years or a monetary penalty.)

**Six structural characteristics that make Article 321 CP uniquely acute for AI use:**

1. **Criminal law, not regulatory.** Article 321 CP is criminal. Violation carries imprisonment (up to 3 years) or fine (max CHF 180,000 by criminal-code classification). Civil liability is separate (carrier malpractice), regulatory liability is separate (nFADP, EU AI Act, FDPIC). Article 321 CP is the personally enforced criminal liability.

2. **Personal liability of the named physician.** Article 321 CP is personal. The named physician is criminally liable. The clinic, the cabinet, the FMH, the carrier — none of these are criminally liable under Article 321 CP for the named physician's breach. The named physician bears the criminal exposure.

3. **Scope: any disclosure to an unauthorized party.** Article 321 CP prohibits any disclosure of "un secret à eux confié en vertu de leur profession." The "secret" is the patient medical data (the dossier patient). The unauthorized party is anyone other than the patient (in the context of disclosure to the patient themselves) or other than authorized third parties (carrier with patient consent, peer physician with patient consent, FDPIC with statutory authority, prosecutor with judicially authorized subpoena). AI vendors are not authorized third parties under Article 321 CP by default — they receive the patient data for processing, but the legal basis for processing is the physician's processing (the physician is processing the patient's data on the physician's authority), and disclosure to the vendor without explicit patient authorization can be argued as Article 321 CP disclosure.

4. **Auxiliaires covered.** Article 321 CP applies to "auxiliaires" of the physician. The AI scribe vendor and its sub-processors are arguably the physician's auxiliaires in a broad reading. The sub-processor chain is the named-auxiliaire problem.

5. **Cumulable with other regimes.** Article 321 CP exposure can be concurrent with nFADP Art.63 personal liability, carrier attestation inaccuracy, FMH/AMG professional discipline, EU AI Act enforcement, and FDPIC enforcement. The named physician operates under simultaneous exposure across all seven regimes.

6. **No "good faith" exception.** Article 321 CP does not provide a good-faith exception. The physician cannot claim "I disclosed the encounter note because the carrier asked for it" as a defense. The disclosure without patient consent remains a breach.

### What Article 321 CP Means for AI Use

For the Geneva médecin using AI in clinical practice:

- **Patient encounter transcripts** (generated by AI scribe) are patient medical data under Article 321 CP. The transcript contains patient-identifiable content (chief complaint, history, examination findings, diagnostic decisions, plan). The transcript is in the dossier patient. Article 321 CP protects the transcript.

- **AI clinical decision support output** (drug-interaction warnings, dosage recommendations, diagnostic scoring) is patient medical data under Article 321 CP. The output is incorporated into the encounter note and the treatment plan.

- **AI image analysis output** (radiology AI segmentation, dermatology AI lesion scoring, pathology AI cell classification) is patient medical data under Article 321 CP when incorporated into the encounter note.

- **Sub-specialty AI delegation output** (cardiology AI ECG interpretation, oncology AI staging, ophthalmology AI fundus grading) is patient medical data under Article 321 CP.

- **AI vendor operation logs** (timestamp of encounter processing, model version used, configuration, patient identifier, content processed) may be patient medical data under Article 321 CP if the log contains patient-identifiable content. The vendor logs are often sufficient to qualify.

- **AI vendor training data** (if trained on patient data — rare for medical AI but possible) is patient medical data under Article 321 CP. Article 321 CP + nFADP Art.9 + nFADP Art.63 + nFADP Art.45(2) prohibits using patient data for training without explicit patient consent.

- **AI vendor sub-processor flows** (US-hosted storage, US-accessible logs) involve the AI vendor sharing patient data with sub-processors. Article 321 CP requires patient authorization for such sharing, or a statutory basis. nFADP Art.9 + Art.45(2) requires explicit patient consent (or equivalent lawful basis) for sensitive personal data export. US CLOUD Act is outside the Swiss statutory framework.

- **Médecin remplaçant access** (to the practice's AI scribe, to the dossier patient) involves Article 321 CP authorized disclosure only through the Convention de remplacement. The Convention authorizes practice coverage. Article 321 CP requires physician responsibility for the remplaçant's compliance. The remplaçant is an auxiliaire of the replaced physician for Article 321 CP purposes. The replaced physician is criminally liable for the remplaçant's breach.

### The EU AI Act Collision

The EU AI Act Article 12 (logging), Article 10 (data governance), and Article 13 (high-risk AI components) require system-level documentation that **may** breach Article 321 CP. Specifically:

- **Article 12 automatic logs** of AI system operation. The log contains patient identifier (because the AI scribe encounters are tied to specific patients). The log is therefore patient medical data. Article 321 CP prohibits disclosure of patient medical secrets. Disclosure of the log to an EU AI Act supervisory authority may be Article 321 CP breach — depending on (a) whether the physician is a deployer under Article 3 (he/she is for EU-cross-border patient encounters), (b) whether Article 321 CP permits disclosure to foreign regulatory authorities (the criminal law does not unambiguously permit, and EU AI Act does not have a Swiss authorization), (c) whether the patient's consent covers the disclosure.

- **Article 10 data governance** requires providers and deployers to use data sets that meet quality criteria (relevant, representative, free of errors, complete). The data governance requires traceability — which datasets were used for training, which for validation, which for testing. The AI scribe vendor does not always disclose the training data lineage. The named physician cannot produce the lineage without breaching Article 321 CP or nFADP Art.45(2).

- **Article 13 high-risk AI components** require specific provisions for natural persons affected by the AI system (vulnerable groups, minors, accessibility). For the Geneva médecin, the patient is a natural person affected by the AI system. Article 321 CP protects the patient's dossier patient confidentiality. Article 13 requires disclosure of AI components affecting the natural person. The disclosure requirement can be in the consent form, but the consent form must be in place BEFORE the high-risk AI component is used. The 2024 consent form does not satisfy Article 13 for AI components in use since 2025.

### The Reconciliation

The Geneva médecin operating under Article 321 CP + EU AI Act Article 12/10/13 must reconcile the two regimes. The reconciliation is not possible through internal compliance language alone. The reconciliation requires:

- Named-physician, named-encounter classification (which encounters are EU AI Act deployer applicability; which are not)
- Patient consent refresh (2026 named-patient consent form satisfying EU AI Act Article 50 + Article 13 + nFADP Art.49 + Article 321 CP medical secrecy + carrier attestation evidence)
- AI tool vendor audit for Swiss / EU / US data residency (which US subpoena exposure applies)
- AI tool vendor audit for sub-processor chain transparency (which named sub-processors receive patient data)
- Convention de remplacement AI authorization addendum (named remplaçant + named AI tool authorization + named patient consent refresh for the remplacement period)
- Encounter-level carrier attestation evidence package (named-encounter, named-physician-signed, Article 321 CP-compliant)
- EU AI Act Article 3 named-physician, named-encounter applicability memo
- Convention de remplacement médecin remplaçant AI literacy extension (Article 4)
- Sub-specialty AI delegation authorization record (Article 26)

The reconciliation architecture is the named-physician's responsibility. The architecture is the discrete deliverable.

---

## Regime 2: nFADP (Federal Act on Data Protection, applicable from 1 September 2023)

### What the Law Says

**nFADP Article 4 (Personal Data Definition):** Personal data is any information relating to an identified or identifiable natural person. Patient health information is personal data.

**nFADP Article 9 (Sensitive Personal Data):** Sensitive personal data includes health-related data, biometric data, genetic data, and other categories enumerated in Article 9. Health data is sensitive. Processing sensitive data requires explicit consent (Article 9(4)) or another lawful basis (statutory authorization, vital interest, public interest, scientific research with appropriate safeguards).

**nFADP Article 49 (Data Subject Information / T ransparency):** The data controller must inform data subjects of the purpose of processing, the categories of data, the recipients, the retention period, the rights of the data subject. AI processing introduces new informational requirements about the AI system's logic, the AI's intended use, the AI's role in the processing.

**nFADP Article 52 (Data Subject Rights):** Data subjects have rights to information, correction, deletion, restriction of processing, objection, and portability. The médecin using AI must operationalize these rights at the encounter level.

**nFADP Article 63 (Personal Liability):** The data controller (in healthcare, the named physician) bears personal liability for breaches. Sanctions: up to CHF 250,000 for violations of nFADP. The named physician can be sanctioned personally.

**nFADP Article 45(2) (Cross-Border Data Transfer):** Disclosure of sensitive personal data to a recipient in a country with inadequate data protection requires explicit consent or other lawful basis. The United States (US) does not have nFDP-equivalent data protection (the US has HIPAA for healthcare, but HIPAA does not extend extraterritorially to non-US data subjects; the US has sectoral protections but no equivalent general data protection law). US CLOUD Act also enables US government access to US-cloud-stored data regardless of data subject location. nFADP Article 45(2) requires explicit consent for Swiss health data export to the US.

### What nFADP Means for AI Use

For the Geneva médecin using AI in clinical practice:

- **Health data processing without explicit consent is a breach.** The 2024 patient consent form does not explicitly consent to AI scribe processing of patient health data, AI clinical decision support processing, AI image analysis, sub-specialty AI delegation, médecin remplaçant AI coverage, or US-hosted AI vendor sub-processor flow. The 2024 form is operationally insufficient for nFADP Art.9 explicit consent.

- **Personal liability is named-physician.** nFADP Art.63 personal liability is on the named physician as the data controller. The cabinet, the practice, the FMH, the carrier — none of these bear Art.63 liability for the physician's breach. The physician is personally named.

- **Cross-border data flow requires explicit consent.** Patient health data exported to the US-hosted AI vendor's cloud requires explicit consent under nFADP Art.45(2). The 2024 consent form does not contain this consent. The physician is in nFADP breach.

- **FDPIC sanctions are personal.** CHF up to 250,000 per violation. The physician bears this. The physician cannot insure against this.

### The EU AI Act Collision

The nFADP and EU AI Act are largely aligned in purpose (data protection, AI governance). The collision points:

- nFADP Art.49 (data subject information) is essentially aligned with EU AI Act Article 50 (transparency). The 2026 named-patient consent form can be drafted to satisfy both with the same language.

- nFADP Art.45(2) (cross-border) and EU AI Act Article 10 (data governance) both require data quality and data lineage. The 2026 named-physician data governance package can satisfy both.

- nFADP Art.63 personal liability is parallel to EU AI Act Article 26 deployer personal liability for named individuals. The 2026 named-physician personal liability map can cover both.

- nFADP Art.9 sensitive personal data (health) is the broadest category. nFADP Art.9 protects all health data. EU AI Act Article 10 protects through data governance. The named-physician data governance package must satisfy nFADP Art.9 explicitly.

### The Reconciliation

The 2026 named-patient consent form is the document that reconciles nFADP Art.9 + Art.49 + Art.63 with EU AI Act Article 50 + Article 13 + Article 26 + Article 10 at the named-patient granularity. The named-physician personal liability map reconciles nFADP Art.63 personal liability with EU AI Act Article 26 + Article 24 (provider obligation cascading to deployer). The named-physician, named-encounter data governance package reconciles nFADP Art.45(2) cross-border with EU AI Act Article 10 data lineage.

---

## Regime 3: Cantonal Medical Practice Law (Geneva)

### What the Law Says

**Geneva cantonal medical practice laws** include:

- **Loi sur la santé (LSan, K 1 03)** — framework law on healthcare in Geneva, applies to all healthcare providers
- **Loi sur les professions de la santé (LPSan, K 1 04)** — specific to health professions, including physicians
- **Règlement d'application de la loi sur la santé (RPSan)** — implementing regulations
- **Regulations on AI in healthcare** (Geneva cantonal bulletin / DSS / DSPS communications)

These laws apply Geneva-specific requirements on top of federal MedBG / LPMéd:

- Physician registration with Geneva cantonal authority (DSPS — Direction générale de la santé)
- Geneva cantonal HIN-corridor requirements
- Cantonal patient consent requirements (often more stringent than federal)
- Cantonal data residency requirements (often Swiss-resident for sensitive data)
- Cantonal requirements on telemedicine, including AI-mediated telemedicine

### What Cantonal Law Means for AI Use

For the Geneva médecin using AI in clinical practice:

- **Cantonal HIN-corridor requirements** apply to data flows in and out of the cabinet / clinic. The Geneva médecin using US-hosted AI scribe is in breach of cantonal data residency norms for sensitive health data flowing through the US corridor. The cantonal authority has not yet formally enforced this, but the cantonal framework is in place.

- **Cantonal consent form requirements** are often more stringent than federal. The Geneva patient consent may require explicit AI disclosure, including model type, vendor name, data residency, sub-processor chain. The 2024 consent form does not satisfy Geneva cantonal requirements for AI use.

- **Cantonal DSPS enforcement** is responsible for physician licensing and disciplinary action. Cantonal DSPS can suspend a physician's authorization to practice for breach of cantonal health law.

### The EU AI Act Collision

Cantonal health law is Geneva-specific. EU AI Act is EU-wide. The collision is jurisdictional: EU AI Act applies to the Geneva médecin's EU-cross-border patient encounters; cantonal law applies to all Geneva patient encounters. The named-physician, named-encounter classification must address both:
- Is the encounter EU-cross-border (EU AI Act applies by use)?
- Is the encounter any Geneva patient (cantonal law applies by location)?
- Both can apply — and the named-physician must reconcile both for each encounter.

---

## Regime 4: Federal MedBG / LPMéd + HIN + Swissmedic + LAMal/KVG

### Federal Act on Medical Professions (MedBG / LPMéd)

The MedBG (Medical Professions Act / Loi sur les professions médicales) is the federal law governing the medical profession in Switzerland. Key articles for AI use:

- **Article 2 (Definition of Medical Activity):** Medical activity includes diagnosis, treatment, prevention, and counseling.
- **Article 5 (Authorization Requirements):** Physicians must hold a recognized diploma and cantonal authorization.
- **Article 40 (Professional Liability):** Physicians are personally liable for professional acts.
- **Article 42 (Continuous Education):** Physicians must maintain continuous education (Article 4 EU AI Act literacy can be integrated into FMH continuous education).

### HIN-Health Info Net Corridor

HIN is the Swiss health data network infrastructure. HIN-corridor (the encrypted communication corridor between Swiss healthcare providers and certified recipients) protects data IN TRANSIT. HIN does not protect data AT REST in non-HIN-connected infrastructure. The AI scribe vendor is not HIN-connected. The dossier patient is HIN-protected IN TRANSIT but not HIN-protected AT REST in the AI vendor's cloud.

**HIN-corridor fallacy:** The Geneva médecin believes HIN protection extends to AI vendor data flows. It does not. The data is in the US cloud, subject to US CLOUD Act.

### Swissmedic Medical Device Framework

The Medical Devices Ordinance (MedDO / ODim) regulates medical devices, including AI medical devices. The Swissmedic classification of AI scribes is evolving. AI scribes that materially influence diagnostic or therapeutic decisions may be Class IIa or Class IIb medical devices, requiring conformity assessment, technical documentation, post-market surveillance, and named-physician responsibility for appropriate use.

**Swissmedic AI medical device registration** is required for AI medical devices placed on the Swiss market. US-hosted AI scribes may not be Swissmedic-registered. The Genève médecin using an unregistered AI medical device is in breach of Swissmedic / ODim.

### LAMal/KVG (Health Insurance Law)

The Federal Act on Health Insurance (LAMal / KVG) governs billing and reimbursement for medical services. AI use affects:

- Tarmed billing for AI-assisted encounters (Tarmed 2026 update is expected to reference AI mediation)
- Outpatient AI use billing codes (where applicable)
- AI extension service billing (radiology AI, pathology AI, etc.)

### What This Means for AI Use

For the Geneva médecin using AI in clinical practice:

- **Physician responsibility for AI use in medical act** — the physician remains personally responsible for the diagnostic and therapeutic decisions, regardless of AI contribution. The physician cannot delegate diagnostic or therapeutic decisions to the AI.

- **Continuous education includes AI literacy** — Article 4 EU AI Act AI literacy obligation can be satisfied through FMH continuous education with documented AI literacy curriculum.

- **HIN-corridor does not extend to AI vendor data flows** — the physician is responsible for recognizing the dual architecture.

- **Swissmedic registration requirement** for AI medical devices — the physician is responsible for using only Swissmedic-registered AI medical devices (where applicable).

- **Tarmed billing** for AI-assisted services — the physician must document AI-assisted services correctly.

---

## Regime 5: Medical Liability Carrier Attestation

### What the Carrier Framework Says

The Geneva medical liability carrier framework includes:

- **Carrier policy** with named-physician coverage terms, sub-specialty coverage, médecin remplaçant coverage (or explicit exclusion)
- **Annual attestation** signed by the named physician, attesting to AI tool use, AI tool inventory, AI literacy compliance, sub-specialty AI delegation, médecin remplaçant AI coverage
- **Mid-year check-in** (June/July) asking encounter-level questions — which patient encounters in the year were processed by AI, with what consent, with what authorization
- **Defensive legal coverage** for patient complaints, FDPIC inquiries, criminal prosecution under Article 321 CP, sub-specialty AI delegate disputes, médecin remplaçant liability disputes
- **Specialty-specific policy endorsements** (psychiatry, pediatrics, oncology, etc.) — these may address sub-specialty AI delegation requirements

### What the Carrier Attestation Means for AI Use

For the Geneva médecin using AI in clinical practice:

- **Annual attestation signed personally** — the physician signs. The carrier relies on the signature.

- **Mid-year check-in encounter-level** — the carrier wants evidence for specific encounters, not generic attestation language.

- **Médecin remplaçant gap** — the carrier may exclude the remplaçant period from coverage if the remplaçant's encounters involve AI use the carrier has not specifically authorized. The médecin with a nommé remplaçant using AI without authorization is in breach.

- **Sub-specialty AI delegate gap** — the carrier may require sub-specialty AI delegate authorization documentation. The médecin using specialty AI without authorization documentation is in breach.

- **US-hosted AI scribe gap** — the carrier does not cover US government access to patient data. The physician with US-hosted AI scribe is exposed by vendor selection.

### The EU AI Act Collision

The carrier framework and EU AI Act operate in parallel:

- The carrier attestation framework is operational encounter-level evidence. The EU AI Act Article 3 deployer applicability is named-physician, named-encounter. Both can be reconciled in a single 2026 named-encounter evidence package.

- The carrier mid-year check-in cadence is annual + mid-year. The EU AI Act requirements are continuous (deployer obligations, AI literacy, human oversight, logging, transparency). The named-physician must operationalize both cadences.

- The carrier exclusion for US-hosted AI scribes' subpoena exposure. The EU AI Act does not address US subpoena exposure. The physician is exposed by both.

---

## Regime 6: Convention de Remplacement

### What the Convention Says

The Convention de remplacement (replacement physician convention) is the bilateral agreement between the replaced physician and the médecin remplaçant. The FMH canton-affiliated template is the standard. The Convention:

- Authorizes practice coverage for a defined period
- Allocates compensation between replaced and replacing physicians
- Allocates malpractice between replaced and replacing physicians
- Defines scope of practice during coverage
- Identifies patients transferred, dossier patient access, peer physician communication

### What the Convention Does NOT Say (as of July 2026)

The Convention does NOT address AI use. Specifically:

- AI tool authorization during the remplacement
- AI scribe access during the remplacement
- AI clinical decision support activation during the remplacement
- EMR-AI extension integration during the remplacement
- Sub-specialty AI delegation during the remplacement
- Patient consent refresh for the remplacement period
- Article 321 CP accountability for the remplaçant's AI use
- nFADP Art.63 personal liability for the remplaçant's AI processing
- EU AI Act Article 4 AI literacy for the remplaçant's AI use
- EU AI Act Article 26 deployer extension for the remplaçant's AI use
- US CLOUD Act / US subpoena exposure during the remplacement

### What Convention Does NOT Address Means for AI Use

For the Geneva médecin using a Convention de remplacement:

- **Every coverage period operationally breaches** the Article 321 CP, nFADP Art.63, EU AI Act Article 4 + 26, and carrier attestation obligations — because the Convention does not authorize AI.

- **The remplaçant is the named sub-physician** — sub-physician in the AI authorization chain is structural.

- **The replaced physician is the named responsible person** under Article 321 CP, nFADP Art.63, EU AI Act Article 26, and the carrier attestation — for the remplaçant's encounters.

- **The convention addendum is the AI authorization addendum.** No standard addendum exists as of July 2026. The physician must draft one.

---

## Regime 7: EU AI Act

### What the EU AI Act Says (Applicability to Geneva Médecin)

The EU AI Act applies to:

- **Providers** placing AI systems on the EU market or putting them into service in the EU, regardless of the provider's location
- **Deployers** using AI systems in the EU, with the AI system's output being used in the EU
- **Importers and distributors** of AI systems placed on the EU market

For the Geneva médecin:

- **The médecin is a deployer, not a provider, under EU AI Act** — if the médecin uses AI in clinical practice and the AI's output (encounter note, clinical decision support) is used in the EU (which means: the patient is an EU natural person, or the diagnostic decision affects an EU patient).

- **The médecin is a deployer by use on EU natural persons**, not by location. The Geneva physician serving an EU-cross-border patient is a deployer for that encounter. The Geneva physician serving only Swiss patients may not be a deployer unless the AI vendor or sub-processor routes data through the EU.

- **Article 6(3) Annex III high-risk classification** — the European Commission published a clarification in June 2026 indicating that AI scribes used in medical decision-supporting roles may fall under Annex III high-risk classification when they materially influence diagnostic or therapeutic decisions.

### Articles Applicable to Geneva Médecin Deployer

For high-risk AI (assuming the médecin's AI scribe is high-risk):

- **Article 4 — AI Literacy:** Deployers must ensure a sufficient level of AI literacy for their staff AND any person handling AI on their behalf. The médecin's obligation extends to the médecin remplaçant, the sub-specialty AI delegate, the sub-specialty consultant physician.
- **Article 12 — Logging:** Providers and deployers must maintain automatic logs over the AI system's lifecycle. The log enables traceability.
- **Article 13 — Specific Provisions for High-Risk AI Components Affecting Natural Persons:** Provisions for vulnerable groups (minors, persons with disabilities). The médecin's obligation extends to pediatric patients, psychiatric patients, patients with cognitive impairment.
- **Article 14 — Human Oversight:** Deployers must implement human oversight measures appropriate to the risks, automation bias, the AI's capabilities. The médecin's oversight must be documented at the encounter level.
- **Article 26 — Deployer Obligations:** Deployers must use high-risk AI systems in accordance with the instructions for use, monitor the AI's operation, inform the provider of serious incidents, ensure input data relevance, ensure human oversight, ensure monitoring. Breach is a named deployer obligation.
- **Article 50 — Transparency:** Deployers of AI systems that interact with natural persons must inform the natural person they are interacting with AI, unless this is obvious. The encounter is the interaction. The patient is the natural person.

### What EU AI Act Means for AI Use

For the Geneva médecin using AI in clinical practice:

- **The médecin may be a deployer for EU-cross-border patient encounters.** The named physician on the encounter is the named deployer.

- **Article 3 named-physician applicability memo is required.** The memo identifies which encounters are EU AI Act deployer applicability. The memo is dated, named-physician-signed, named-encounter-classified.

- **Article 4 AI literacy is required.** The physician's literacy documentation, the remplaçant's literacy documentation (delegated), the sub-specialty delegate's literacy documentation (delegated) — all must be operational.

- **Article 12 logging requires reconciliation with Article 321 CP logging prohibition.** This is the critical Swiss/EU collision.

- **Article 14 human oversight must be documented at the encounter level.** The physician's signature on the encounter note (after AI scribe processing) is the human oversight documentation. This must be operational.

- **Article 26 deployer obligation extends to sub-physician (remplaçant) and sub-delegate (sub-specialty AI delegate).** The named physician is responsible for sub-physician AI use.

- **Article 50 transparency requires informing the patient before the consultation that AI will be used.** The 2024 consent form does not satisfy Article 50.

---

## The Seven-Regime Convergence on Named-Physician, Named-Encounter

The seven regimes converge on the named physician at the named encounter. The named physician is named in:

- **Article 321 CP** — personally criminally liable for medical secrecy breach
- **nFADP Art.63** — personally liable for data protection breach (up to CHF 250,000)
- **Cantonal law** — cantonal authorization can be suspended for breach
- **MedBG / LPMéd** — professional liability, professional conduct
- **HIN corridor** — must recognize the corridor does not extend to AI vendor data flows
- **Swissmedic** — must use only Swissmedic-registered AI medical devices (where applicable)
- **LAMal/KVG** — must bill AI-assisted encounters correctly
- **Medical liability carrier attestation** — personally signed annually + mid-year encounter-level check-in
- **Convention de remplacement** — personally responsible for remplaçant's AI use (Convention silent on AI)
- **EU AI Act** — personally named as deployer for EU-cross-border encounters, with Article 3 + 4 + 12 + 13 + 14 + 26 + 50 obligations

Plus three professional governance overlays:

- **FMH** — federal AI ethics governance bulletins, Convention template provider
- **AMG** — cantonal specialty section benchmark disclosures, named-physician comparison trap
- **SSMIG / SGPP / SSP / SSO / SGK** — specialty society ethics guidance, named-physician disclosure cycles

The named physician operates under ten concurrent regimes with personal liability under at least five (Article 321 CP criminal, nFADP Art.63 personal, cantonal personal, carrier personal, EU AI Act Article 26 deployer personal). The named-physician cannot delegate the liability. The named-physician cannot insure against criminal liability or the nFADP personal fine. The named-physician must operate under ten concurrent regimes at every named encounter, with the EU AI Act deadline 30 days out.

---

## The 30-Day Window (Pre-EU AI Act Late August 2026 Applicability)

The EU AI Act applicability date for deployer obligations (Article 4, Article 14, Article 26, Article 50, plus high-risk-specific Article 12, 13) is late August 2026. The Geneva médecin has approximately 30 days from July 1, 2026 to:

- Classify which AI tools are deployer obligations (Article 3 + Article 6(3) high-risk classification)
- Identify which patient encounters are EU AI Act deployer applicability (named-physician, named-encounter)
- Refresh patient consent forms (named-patient, Article 50, Article 13, nFADP Art.49)
- Draft Convention de remplacement AI authorization addendum (named remplaçant + named AI tool + named patient consent refresh for the remplacement period)
- Document Article 4 AI literacy (named-physician + named-remplaçant + named-sub-delegate)
- Document Article 14 human oversight (named-encounter oversight record)
- Document Article 26 deployer obligations (named-physician + sub-physician + sub-specialty AI delegate)
- Document Article 12 logging reconciliation (named-encounter log protocol + Article 321 CP restriction overlay)
- Document Article 10 data governance (named-vendor, named-sub-processor, named-data-lineage)
- Document Article 50 transparency (named-patient, named-encounter disclosure language)
- Document Article 13 high-risk AI components provisions (named-vulnerable-group, named-minor, named-cognitive-impairment)

This documentation is the discrete, named, 30-day deliverable for the Geneva médecin installé.

---

*Document: 04_compliance_context.md | Phase C314 Geneva Healthcare | Output: /20260701_phase04_geneva_healthcare_cycle314/*
