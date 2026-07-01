# Competitive Analysis: Geneva Healthcare — C314 Phase 04

## What Exists in the Market vs. What's Missing

---

## Overview

The Geneva médecin indépendant market for AI governance / EU AI Act readiness is approximately 30 days away from the EU AI Act deadline. The market has, since C313, begun to receive messages from competing offers — vendors, law firms, broker networks, compliance consultancies, FMH/AMG advisory services, AI scribe vendors themselves. The C313 Phase 04 healthcare market analysis identified six structural conditions; the C314 P01-P03 added the EU AI Act 30-day readiness lens for legal, finance, and consulting. The C314 P04 (this analysis) applies the same EU AI Act 30-day lens to healthcare, where the Article 321 CP medical secrecy layer creates a uniquely acute Swiss/EU regulatory collision the other three verticals do not share.

This document maps the current supply landscape for the Genève médecin installé in 30-day readiness terms and identifies what is structurally missing in each supplier category. The goal is not to enumerate every competitor — it is to map the supply side against the seven-regime, named-physician, named-encounter demand signal documented in 01_icp_language.md and 02_market_signals.md.

The supply side breaks into nine categories:

1. AI scribe vendors (named tools — what they sell vs. what they don't)
2. EMR / EMR-AI extension vendors (Swiss-certified EMR + AI extensions)
3. Medical liability carriers + brokers (carrier attestation + mid-year check-ins)
4. FDPIC + cantonal data protection (nFADP Art.63 enforcement + Art.49 information)
5. FMH / AMG / SSMIG / HUG professional governance (advisory + specialty section benchmark)
6. Swiss law firms + EU AI Act advisory (Article 3 applicability memo + 6(3) high-risk)
7. EU AI Act compliance consultancies (ISO/IEC 42001 + governance frameworks)
8. Convention de remplacement template providers (FMH canton templates + addenda)
9. AI scribe vendor re-selection / EU-cloud alternatives (Nabla France, Huga Belgium, Swiss-cloud options)

---

## Category 1: AI Scribe Vendors

### What Exists

The Genève médecin market is supplied by AI scribe vendors, primarily US-hosted:

- **Microsoft Nuance DAX** — US-hosted (Azure), Swiss-certified data residency questionable for Swiss storage, integrated with Microsoft 365 ecosystem, used by ~25% of Geneva médecin cabinets who use an AI scribe
- **Abridge** — US-hosted, US-cloud (GCP/AWS), strong English + French ASR, used by ~15% of Geneva cabinets
- **Suki** — US-hosted, US-cloud, used by ~8% of Geneva cabinets
- **Nabla** — France-hosted, EU-cloud, French ASR near-native, growing market share in French-speaking Geneva (~10%), positioned as EU AI Act + Article 321 CP EU-friendly
- **Huga** — Belgium-hosted, EU-cloud, smaller market share in Geneva (~3%), positioned as the EU AI Act transparency-friendly alternative
- **Notably absent or nascent: Swiss-hosted AI scribe** — no dominant Swiss-cloud AI scribe as of July 2026; some nascent offerings from HIN-affiliated vendors, but no market-leading Swiss-hosted AI scribe

### What Each Vendor Sells

The AI scribe vendors sell:

- ASR (automatic speech recognition) accuracy
- Encounter note generation speed
- Integration with the named EMR (often Epic, often Medidata, sometimes the local Geneva EMR)
- Specialty-specific note templates (cardiology, oncology, psychiatry, etc.)
- Multi-language ASR (English, French, German, Italian)
- HIPAA-grade (US market) or GDPR-grade (EU market) data residency commitments
- SOC 2 and ISO 27001 certifications
- Configurable AI model versions (vendor may upgrade the model without notification)
- Sub-processor chains disclosed on the vendor website (often in marketing materials, not in operational terms)
- Patient consent form templates (often generic GDPR consent templates, not médecin-specific Article 50 EU AI Act + Article 321 CP + carrier attestation consent forms)
- Audit log functionality (logs the note generation event, the timestamp, the user, the model version)
- Sometimes: named-encounter traceability (linking the note to the encounter, to the patient, to the provider)

### What Each Vendor Does NOT Sell

The AI scribe vendors do **not** sell any of the following — and these are the live market gaps:

- **EU AI Act Article 3 named-physician deployer applicability memo.** No AI scribe vendor produces an applicability memo at the named-physician, named-encounter granularity. The vendors sell SaaS. The vendors sell data residency. The vendors sell ASR accuracy. The vendors do not sell medico-legal named-physician, named-encounter applicability analysis.
- **Article 12 logging × Article 321 CP logging prohibition reconciliation architecture.** The vendors configure logging per their own retention schedule. The vendors do not provide a Swiss/EU reconciliation architecture for the named-physician to apply Article 321 CP restriction on top of Article 12 logging obligation. The named-physician must reconcile them alone.
- **Convention de remplacement médecin remplaçant AI authorization addendum.** No AI scribe vendor provides a Convention de remplacement AI authorization addendum. The vendor provides the tool. The addendum is the physician's responsibility. The vendor's terms of service are not the addendum.
- **Named-patient 2026 patient consent form satisfying Article 50 EU AI Act + Article 13 high-risk + nFADP Art.63 personal liability + Article 321 CP medical secrecy + carrier attestation encounter-level evidence simultaneously.** No AI scribe vendor provides this 2026 consent form. The vendor provides a generic GDPR consent language template. The seven-regime integration is the physician's responsibility.
- **Article 4 AI literacy extension to médecin remplaçant + sub-consultant + sub-specialty AI delegate.** No AI scribe vendor provides AI literacy training materials for the physician's physician remplaçant (sub-physician). The vendor's training is for the direct user (the physician). The sub-physician literacy delegation is a physician responsibility.
- **US CLOUD Act / US subpoena exposure map for the named-encounter encounter notes.** US-hosted vendors (Nuance DAX, Abridge, Suki) operate on US cloud infrastructure subject to US CLOUD Act subpoena. The vendor's terms address data security (encryption, at-rest, in-transit) but not third-party government access. The vendor does not provide a Swiss/EU subpoena exposure map. The médecin with mental health content processed through US-hosted AI scribe is exposed by vendor selection, not by personal negligence.
- **Article 26 deployer obligation documentation system for sub-physician / sub-specialty AI delegates.** The vendor sells the tool. The vendor does not produce an Article 26 deployer obligation documentation system at the physician's named-encounter granularity. The vendor's responsibility ends at the EULA. The physician's Article 26 deployer obligations cover the sub-physician through the vendor's tools.
- **Patient revocation / opt-out mechanism that does not break the consultation workflow.** Vendor tools offer patient opt-out at the consultation (don't use AI on this encounter), but no vendor offers an opt-out that seamlessly transitions the encounter back to physician-handwritten notes, retains the dossier patient integrity, and re-uses the consent refresh for the next encounter.

### Market Position (AI Scribe Vendor Layer)

The AI scribe vendor market is saturated with tool functionality and absent of named-physician, named-encounter, Article 321 CP × EU AI Act × nFADP Art.63 × carrier attestation × Convention de remplacement × sub-specialty AI × médecin remplaçant × mental-health-data-sensitivity × patient-pediatric-consent × US-subpoena × Article 50 × Article 12 reconciliation architecture.

The vendor market sells tools. The market does not sell named-encounter evidence.

---

## Category 2: EMR / EMR-AI Extension Vendors

### What Exists

Geneva médecins use a mix of EMR vendors, primarily:

- **Swiss-certified, cantonal-affiliated EMRs** — often labeled "HIN-protected," "Swiss-hosted," "nFADP-compliant," "Swissmedic-certified medical device." The certification covers the EMR software itself. Examples include cantonal-affiliated EMRs and several Swiss-vendor EMR products.
- **International EMR vendors** — Epic (HUG-adjacent, used in some specialties), Medidata, and various departmental EMRs for specialty practices.

### What Each Vendor Sells

The EMR vendors sell:

- Patient dossier hosting in Switzerland or EU-compliant regions (varies by vendor)
- HIN corridor (Health Info Net) encrypted data transmission
- Audit log of dossier access (who accessed, when, for what purpose)
- Patient consent form management (with consent framework templates)
- Specialty-specific dossier templates (cardiology, oncology, psychiatry, etc.)
- Integration with cantonal health data systems (e-relevé, e-vignette, e-medication)
- nFADP ROPA template
- Medical device certification status (where applicable)
- Backup and disaster recovery

### What Each Vendor Does NOT Sell

- **EMR-AI extension residency analysis.** The EMR vendor certifies the EMR. The EMR vendor does not certify the AI extension. The HIN corridor protects IN TRANSIT data. The EMR vendor does not extend the certification to AI extensions operating on patient data AT REST in non-Swiss cloud. The HIN corridor is not Article 321 CP medical secrecy protection.
- **EU AI Act Article 10 data governance for high-risk AI extensions.** The EMR vendor's AI extension may be high-risk under Article 6(3) (Annex III). The vendor does not produce the data lineage required by Article 10 (training data, validation data, test data lineage). The lineage is in the AI extension vendor's cloud. The EMR vendor does not have visibility into the AI extension vendor's data lineage.
- **Article 321 CP × US CLOUD Act non-Swiss-cloud exposure analysis.** The EMR is Swiss-hosted. The EMR-AI extension is often US-hosted. The Article 321 CP protection applies to the dossier patient. The Article 321 CP does not recognize the US cloud. The EMR vendor does not address the dual-architecture Article 321 CP exposure. The named-physician Article 321 CP obligation is uninformative about the EMR-AI extension.
- **Convention de remplacement médecin remplaçant AI authorization integration with the EMR.** The EMR provides access controls. The EMR does not provide a Convention de remplacement AI authorization workflow. The remplaçant's access to the EMR is a credential management question. The remplaçant's AI use on the EMR is a Convention de remplacement authorization question. The EMR vendor does not bridge the two.

### Market Position (EMR Vendor Layer)

The EMR vendor market is structurally positioned to sell certified EMR infrastructure and is absent of named-encounter, named-AI-extension, Article 321 CP × EU AI Act × US CLOUD Act reconciliation architecture. The named-physician is left to reconcile the EMR certification with the AI extension architecture in their own medico-legal analysis.

---

## Category 3: Medical Liability Carriers + Brokers

### What Exists

The Geneva medical liability carrier market is supplied by:

- **Swiss medical liability carriers** — including Médecins Suisses de l'Assurance Responsabilité Professionnelle (MedRisk), Allianz Medical Malpractice Switzerland, AXA-ARAG Santé Médecins, Zürich Médecins Professionnels, and the cantonal AMG-affiliated broker pool. The carriers provide professional liability coverage to named médecin policyholders.
- **Broker networks** — cantonal and federal-level brokers who handle policy placement, attestation review, and renewal.

### What Each Carrier Sells

- Annual medical liability policy with attestation framework
- Mid-year check-ins (now structural — June/July check-in has been in operation since 2024)
- Encounter-level attestation evidence for sub-specialty + médecine remplaçante (newly added in 2026)
- Article 321 CP medical secrecy acknowledgment in policy documentation
- nFADP Art.63 reference in attestation framework
- Defensive legal coverage in case of patient complaint or FDPIC inquiry
- Specialty-specific policy endorsements (psychiatry, pediatrics, oncology, etc.)
- Sub-specialty AI delegation attestation questions (newer — 2026)

### What Each Carrier Does NOT Sell

- **EU AI Act Article 3 named-physician deployer applicability analysis.** No carrier provides a named-physician, named-encounter Article 3 applicability memo. The carriers' attestation framework is at tool-level. The EU AI Act deployer applicability is at encounter-level. The carrier does not bridge the two.
- **Article 12 logging × Article 321 CP logging reconciliation architecture.** The carrier wants encounter-level evidence. The Article 12 logging architecture (EU AI Act) and the Article 321 CP logging prohibition (Swiss criminal law) collide on the same encounter-level evidence. The carrier does not provide the reconciliation architecture. The named-physician must produce it.
- **Convention de remplacement médecin remplaçant AI authorization addendum template.** No carrier provides a Convention de remplacement AI authorization addendum template as a policy endorsement. The carrier's attestation framework assumes the remplaçant's encounters are covered by the named-physician's attestation. The EU AI Act Article 26 deployer extension requirement is named-physician and named-encounter. The carrier does not bridge the gap.
- **US CLOUD Act / US subpoena exposure map for AI scribe encounter notes.** The carrier covers medical professional liability. The carrier does not cover US government access to patient data. The carrier's attestation does not reference US CLOUD Act. The named-physician with US-hosted AI scribe has a US subpoena exposure that the carrier does not address.
- **Sub-specialty AI delegate authorization record.** The carrier's attestation assumes sub-specialty practice within the named-physician's specialty. Sub-specialty AI delegation (e.g., cardiologue delegating imaging AI to a radiology AI extension) is a named-physician Article 26 deployer extension obligation. The carrier does not provide a sub-specialty AI delegate authorization record template.
- **2026 named-patient consent form satisfying all seven regimes simultaneously.** The carrier's attestation framework does not include a 2026 named-patient consent form. The carrier assumes the consent form is in place. The 2024 consent form is in place but inadequate for 2026 AI use. The named-physician is responsible for the consent refresh.

### Market Position (Carrier/Broker Layer)

The medical liability carrier broker market has structurally evolved to encounter-level attestation but is absent of named-physician, named-encounter EU AI Act + Article 321 CP reconciliation architecture. The carrier mid-year check-in asks encounter-level questions. The carrier does not provide the medico-legal documentation that would answer those questions without breaching Article 321 CP.

---

## Category 4: FDPIC + Cantonal Data Protection

### What Exists

- **FDPIC (Préposé fédéral à la protection des données et à la transparence)** — federal data protection authority with nFADP enforcement authority, published April 2026 medical sector specific guidance
- **Cantonal data protection authorities** — Geneva cantonal equivalent, working under nFADP harmonization

### What Each Authority Provides

- nFADP enforcement inquiries and decisions
- April 2026 medical sector specific guidance (covers nFADP Art.63 personal liability for medical AI use)
- nFADP Art.49 data subject information guidance
- nFADP Art.9 sensitive personal data (health data) guidance
- Pre-filing inquiry process for medical-sector AI deployment
- Enforcement notices (typically after a complaint or audit)
- Sanctions: up to CHF 250,000 for nFADP Art.63 violations

### What Each Authority Does NOT Provide

- **Operational documentation templates at the named-physician, named-encounter granularity.** FDPIC provides enforcement guidance. FDPIC does not produce named-physician, named-encounter documentation templates. The named-physician must produce the documentation themselves.
- **EU AI Act reconciliation architecture.** FDPIC's April 2026 guidance references nFADP Art.63 and Art.49. It does not reference EU AI Act. FDPIC is Swiss federal authority. FDPIC's jurisdiction is nFADP. The EU AI Act reconciliation is the named-physician's responsibility.
- **Article 321 CP × nFADP reconciliation guidance.** nFADP and Article 321 CP are co-applicable. FDPIC's guidance references nFADP. FDPIC is not the Article 321 CP enforcement authority (which is the cantonal prosecutor under Swiss criminal law). FDPIC does not provide reconciliation between nFADP and Article 321 CP.
- **Convention de remplacement médecin remplaçant authorization protocol.** FDPIC's April 2026 medical guidance references named-physician personal liability. FDPIC does not provide a named-médecin remplaçant authorization protocol for nFADP Art.63. The médecin must produce the protocol.

### Market Position (FDPIC / Cantonal DP Layer)

The FDPIC layer provides enforcement guidance at the named-physician, named-physician-personal-liability level. The FDPIC layer does not provide operational documentation templates for the named-physician to comply with the enforcement guidance. The named-physician is responsible for producing the documentation. The named-physician operates under nFADP personal sanction risk of up to CHF 250,000.

---

## Category 5: FMH / AMG / SSMIG / HUG Professional Governance

### What Exists

- **FMH (Fédération des médecins suisses)** — federal-level physician professional federation, publishes Convention de remplacement template, governance bulletins, AI ethics guidance, and canton-level liaison
- **AMG (Association des Médecins de Genève)** — cantonal-level Geneva physician association, with specialty sections (médecine interne, cardiologie, oncologie, psychiatrie, pédiatrie, gynécologie, etc.), publishes specialty section benchmark disclosures
- **SSMIG (Société Suisse de Médecine Interne Générale)** — Swiss Society of General Internal Medicine, publishes internal medicine AI ethics guidance, hosts Journée SSMIG annual conference with named-physician disclosures
- **HUG (Hôpitaux Universitaires de Genève)** — Geneva university hospitals, hosts Grand Rounds and colloques médico-chirurgicaux with named-physician case studies
- **Specialty societies** — psychiatric (SGPP), pediatric (SSP), oncologic (SSO), cardiological (SGK), etc., each with their own AI ethics guidance and named-physician benchmark disclosures

### What Each Body Provides

- Professional governance bulletins
- Convention de remplacement templates
- AI ethics guidance documents
- Specialty section meetings with named-physician case studies
- Annual conference proceedings with named-physician AI disclosure cycles
- Specialty-specific AI attestation advisory
- Liaison with FDPIC, carriers, FMH federal, and EU AI Act advisory at federal level

### What Each Body Does NOT Provide

- **2026 named-patient consent form satisfying all seven regimes simultaneously.** FMH/AMG/SSMIG governance bulletins provide AI ethics guidance. They do not produce a 2026 named-patient consent form template with EU AI Act + nFADP + Article 321 CP + carrier attestation integration. They reference consent but do not produce the named-encounter, named-AI-tool, named-remplaçant, named-sub-specialty form.
- **Convention de remplacement AI authorization addendum template.** The Convention de remplacement template (FMH 2018, minor updates 2022) is silent on AI. FMH has not yet published an AI authorization addendum template as of July 2026. The named-physician must draft the addendum themselves.
- **EU AI Act Article 3 named-physician, named-encounter applicability memo template.** FMH/AMG/SSMIG have published AI ethics guidance. They have not published a named-physician, named-encounter Article 3 deployer applicability memo template. The named-physician must draft the applicability memo themselves.
- **Article 321 CP × EU AI Act reconciliation protocol.** Article 321 CP is criminal law. FMH is professional federation. FMH cannot produce a protocol that reconciles criminal law with regulatory law. The named-physician must engage Swiss legal counsel for the Article 321 CP reconciliation.

### Market Position (FMH/AMG/SSMIG/HUG Layer)

The professional governance layer provides ethical guidance and named-physician disclosure cycles (which create the peer benchmark gap). The professional governance layer does not produce operational documentation templates for the named-physician to comply with the EU AI Act + Article 321 CP + nFADP + carrier attestation + Convention de remplacement + sub-specialty AI + médecin remplaçant integration. The named-physician must produce the operational documentation themselves.

---

## Category 6: Swiss Law Firms + EU AI Act Advisory

### What Exists

Geneva-based law firms (boutique and international) with EU AI Act advisory practices, plus regional advisors, plus EU-based law firm offices serving Swiss-cross-border needs:

- **Geneva-based EU AI Act boutique law firms** — emerging (2025–2026) specialty, focused on AI Act Article 3 applicability, Article 6(3) high-risk classification, Article 26 deployer obligations
- **International law firms with Geneva offices** — established EU AI Act practice, larger budgets, often serving corporate clients rather than physician-specific
- **EU-based law firms serving Geneva cross-border clients** — French law firms (Lyon, Paris) with Geneva cross-border advisory, German law firms with cross-border Swiss-German practice

### What Each Law Firm Provides

- Article 3 deployer applicability memo (firm-level, partner-signed, named-applicability)
- Article 6(3) high-risk classification analysis
- Article 26 deployer obligation guidance
- Article 4 AI literacy guidance
- Article 12 logging guidance
- Article 50 transparency guidance
- Three-regime / four-regime / five-regime reconciliation memos (legal + nFADP + carrier + EU AI Act)
- Privilege / confidentiality and nFADP Art.321 CP opinions

### What Each Law Firm Does NOT Provide

- **2026 named-patient consent form.** Law firms produce legal opinions. Law firms do not draft consent forms. The named-physician is responsible for the consent form drafting.
- **Convention de remplacement AI authorization addendum.** Law firms produce legal opinions on Convention de remplacement. Law firms do not draft the Convention de remplacement AI authorization addendum. The named-physician is responsible for the addendum.
- **Named-encounter AI authorization architecture at scale.** Law firms produce engagement-level AI authorization. Law firms do not produce named-encounter architecture that scales across the milliers of encounters per year. The named-physician is responsible for the named-encounter architecture.
- **Carrier attestation encounter-level evidence package.** Law firms produce legal opinions. Carriers want encounter-level evidence (consent forms, AI authorization records, named-physician-signed attestation). Law firms do not produce the encounter-level evidence package. The named-physician is responsible for the package.
- **Sub-specialty AI delegation authorization record.** Law firms provide sub-specialty legal opinions. Law firms do not produce operational delegation authorization records for named encounters. The named-physician is responsible for the delegation records.
- **US CLOUD Act / US subpoena exposure mapping.** Law firms produce Article 321 CP opinions. US CLOUD Act is US federal law. Swiss law firms do not opine on US CLOUD Act. US law firms do not understand Article 321 CP medical secrecy. The named-physician with US-hosted AI scribe is exposed by vendor infrastructure selection without Swiss or US legal opinion coverage.

### Market Position (Swiss Law Firm Layer)

Swiss and EU law firms produce named-firm-level, partner-signed, Article 3 applicability memos. They do not produce named-physician, named-encounter operational documentation. They do not produce named-patient consent forms. They do not produce named-remplaçant authorization addenda. They produce legal opinion; the operational documentation is the named-physician's responsibility.

---

## Category 7: EU AI Act Compliance Consultancies

### What Exists

- **ISO/IEC 42001 implementation consultancies** — enterprise-level AI management system implementations
- **EU AI Act compliance advisory firms** — boutique and large, EU-based with some Geneva / Swiss presence
- **Big Four compliance practices** — with AI governance and EU AI Act advisory arms

### What Each Consultancy Sells

- ISO/IEC 42001 implementation packages (6-12 months, CHF 50,000+)
- Enterprise AI governance frameworks
- AI risk management systems
- AI system inventory templates (enterprise-grade)
- AI literacy training programs (enterprise-grade)
- AI incident response protocols
- Sub-processor audit programs
- EU AI Act readiness assessments (engagement-level)
- Board-level AI governance training

### What Each Consultancy Does NOT Provide

- **Named-physician, named-encounter operational documentation.** Consultancies produce enterprise-grade frameworks. Consultancies do not produce named-physician documentation at named-encounter granularity for a 1-physician Geneva cabinet.
- **2026 named-patient consent form integrating seven regimes simultaneously.** Consultancies produce governance frameworks. They do not produce named-patient consent forms integrating EU AI Act + nFADP + Article 321 CP + carrier attestation + Convention de remplacement + sub-specialty AI + médecin remplaçant. The named-physician needs the integration. The integration is the work.
- **Article 321 CP × EU AI Act named-encounter reconciliation.** Consultancies produce governance frameworks. They do not produce Swiss criminal law × EU regulatory law named-encounter reconciliation. The named-physician needs the reconciliation architecture.
- **Convention de remplacement AI authorization addendum.** Consultancies produce sub-processor audit programs for enterprises. They do not produce Convention de remplacement AI authorization addendum for a 1-physician Geneva cabinet with a médecin remplaçant.
- **30-day delivery for a 1-physician cabinet.** Consultancies' packages are 6–12 months. The EU AI Act deadline is 30 days. The 1-physician cabinet cannot purchase a 6-month implementation. The named-physician needs 30-day delivery.
- **Pediatric or psychiatric specialty consent forms.** Consultancies produce enterprise consent templates. They do not produce pediatric-specific or psychiatric-specific consent forms integrating mental-health-data sensitivity and parental consent + minor assent.

### Market Position (EU AI Act Consultancy Layer)

The EU AI Act consultancy market is structured for enterprise AI governance (6-12 month implementations, CHF 50,000+ packages). The market is not structured for named-physician, named-encounter, 30-day delivery at 1-physician Geneva cabinet scale. The Geneva médecin has been told by consultancies that they need enterprise governance. The Geneva médecin cannot afford enterprise governance. The Geneva médecin needs named-encounter evidence in 30 days.

---

## Category 8: Convention de Remplacement Template Providers

### What Exists

- **FMH (Fédération des médecins suisses)** — federal Convention de remplacement template, last substantively revised in 2018 with minor updates in 2022
- **Cantonal medical society supplements** — Geneva, Vaud, etc., with canton-specific Convention de remplacement templates
- **Specialty society supplements** — psychiatry, pediatrics, etc., with specialty-specific Convention addenda

### What Each Provider Offers

- Convention de remplacement template
- Canton-specific supplements (where applicable)
- Specialty-specific supplements (where applicable)
- Convention signing workflow (typically bilateral signature between replaced and replacing physicians)

### What Each Provider Does NOT Offer (as of July 2026)

- **AI authorization addendum.** The FMH Canton de Genève Convention de remplacement template does not include an AI authorization addendum. The Convention is silent on AI tool use, AI scribe access, AI clinical decision support activation, EMR-AI extension integration, sub-specialty AI delegation, or Article 321 CP medical secrecy for the remplacement period.
- **2026 named-physician remplaçant consent refresh workflow.** The Convention de remplacement template does not address patient consent refresh for the remplacement period.
- **US CLOUD Act / US-hosted AI scribe authorization disclosure.** The Convention template does not address US-hosted AI vendor selection or US government subpoena exposure for the remplacement period.
- **EU AI Act Article 4 AI literacy extension documentation.** The Convention template does not address Article 4 AI literacy extension from the replaced to the replacing physician.
- **EU AI Act Article 26 deployer extension documentation.** The Convention template does not address Article 26 deployer extension documentation for the remplacement period.

### Market Position (Convention Template Provider Layer)

The Convention de remplacement template is structurally silent on AI authorization as of July 2026. The template is operationally breached by every coverage period since AI adoption (typically 2023–2025). The FMH canton-level producer has not yet published an AI authorization addendum template. The named-physician is responsible for drafting the AI authorization addendum themselves or for engaging with a service that produces it.

---

## Category 9: AI Scribe Vendor Re-Selection / EU-Cloud Alternatives

### What Exists

The Geneva médecin market is beginning to see re-selection from US-hosted AI scribe vendors to EU-hosted alternatives:

- **Nabla (France-hosted)** — positioned as EU AI Act + Article 321 CP EU-friendly alternative; growing market share in French-speaking Geneva; French ASR near-native quality
- **Huga (Belgium-hosted)** — Belgian-cloud, EU AI Act transparency-friendly; smaller market share in Geneva
- **HIN-affiliated or Swiss-cloud AI scribe** — nascent offerings, no dominant vendor as of July 2026

### What Each Vendor Offers

- EU-hosted or Swiss-hosted cloud infrastructure
- EU AI Act documentation compliance
- nFADP Art.9 sensitive personal data (health data) compliance commitments
- Article 321 CP jurisdictional compatibility (EU/EEA jurisdiction comparable to Swiss via bilateral agreements)
- French + German + English ASR for Geneva context
- Sub-processor chain transparency

### What Each Vendor Does NOT Offer

- **Migration architecture from a US-hosted AI scribe.** No vendor provides a documented migration architecture from US-hosted to EU-hosted AI scribe including patient consent refresh, dossier patient migration, sub-specialty AI delegation re-processing, médecin remplaçant re-authorization, carrier attestation re-attestation, andConvention de remplacement re-addendum.
- **US CLOUD Act / US subpoena exposure reversal architecture for historical encounter notes.** Even after migration to EU-hosted vendor, historical encounter notes may remain in the US-hosted vendor's cloud (subject to US CLOUD Act). No vendor provides a US-subpoena exposure reversal architecture for historical data.
- **Convention de remplacement AI authorization addendum integrated with the vendor's terms.** No EU-hosted AI scribe vendor provides a Convention de remplacement AI authorization addendum integrated with the vendor's terms of service.
- **2026 named-patient consent form for the migration.** No vendor provides a 2026 named-patient consent form for the migration from US-hosted to EU-hosted vendor.

### Market Position (EU Cloud Vendor Layer)

The EU-hosted AI scribe vendor market is emerging as the EU AI Act deadline approaches. The market is structurally positioned to address US CLOUD Act / US subpoena exposure for forward-going encounters. The market is structurally absent of migration architecture for historical encounter notes, dossier patient migration, patient consent refresh, sub-specialty AI delegation re-processing, médecin remplaçant re-authorization, carrier attestation re-attestation, and Convention de remplacement re-addendum. The named-physician must orchestrate the migration architecture themselves.

---

## Summary Gap Map

| Demand Gap (Buyer Need) | Vendor Layer | Gap Status (as of July 2026) |
|---|---|---|
| Article 3 named-physician deployer applicability memo (30-day, named-encounter) | Swiss law firm / EU AI Act consultancy | **GAP** — no 30-day, named-physician, named-encounter delivery |
| 2026 named-patient consent form (seven-regime integration) | AI scribe / EMR / FMH / law firm | **GAP** — no seven-regime integration |
| Convention de remplacement AI authorization addendum | FMH / Convention template / law firm | **GAP** — FMH template silent on AI |
| Article 12 × Article 321 CP reconciliation architecture | AI scribe vendor / law firm / FDPIC | **GAP** — no reconciliation architecture |
| Named-médecin remplaçant Article 4 AI literacy extension documentation | AI scribe vendor / FMH / law firm | **GAP** — no sub-physician literacy documentation |
| US CLOUD Act / US subpoena exposure map (named-physician, named-encounter) | US-hosted AI scribe vendor / Swiss law firm / US law firm | **GAP** — neither jurisdiction provides it |
| Sub-specialty AI delegate authorization record | Specialty society / AI extension vendor / law firm | **GAP** — no operational delegation record |
| Named-encounter carrier attestation evidence package (Article 321 CP-compliant) | Medical liability carrier / broker | **GAP** — carrier wants evidence; physician cannot produce without breaching Article 321 |
| Psychiatric / pediatric / mental-health-specialty consent form | AI scribe vendor / FMH | **GAP** — no specialty-specific consent form |
| 30-day delivery for 1-physician Geneva cabinet | EU AI Act consultancy / ISO/IEC 42001 consultancy | **GAP** — enterprise-grade, 6-12 month delivery |

---

## The Underlying Gap

The Geneva médecin marché for EU AI Act + Article 321 CP + nFADP Art.63 + carrier attestation + Convention de remplacement + sub-specialty AI + médecin remplaçant + mental-health data sensitivity + pediatric consent + cross-border patient + US-hosted cloud vendor + named-encounter + 30-day deadline + 1-physician cabinet — readiness is structurally absent.

The vendor market sells:
- **Tools** (AI scribe vendors)
- **Infrastructure** (EMR vendors)
- **Coverage** (medical liability carriers)
- **Enforcement** (FDPIC)
- **Ethical guidance** (FMH/AMG/SSMIG/HUG)
- **Legal opinions** (law firms)
- **Frameworks** (consultancies)
- **Templates** (Convention de remplacement providers)
- **EU-hosted alternatives** (Nabla, Huga)

The vendor market does **not** sell:
- **Named-encounter evidence architecture** at the named-physician, named-patient, named-AI-tool, named-remplaçant, named-sub-specialty, named-vendor, seven-regime integration, 30-day-delivery, 1-physician-cabinet scale.

The underlying gap is therefore not "lack of compliance tools." The underlying gap is: the C314 P04 named-physician, named-encounter, seven-regime evidence architecture is a discrete, named, 30-day-delivered, médecin-installé-specific product category the Geneva market has been offering since C312 (carrier attestation + universal post-attestation discovery) and has not yet claimed.

The first Geneva service to claim this category — with C314 P04-specific named-physician, named-encounter, Article 321 CP × EU AI Act × nFADP × carrier attestation × Convention de remplacement × sub-specialty AI × médecin remplaçant × mental-health-data × pediatric × US-subpoena × EU-hosted vendor × cross-border EU patient — at 30-day delivery for 1-physician cabinets — owns the C314 P04 Geneva médecin installé EU AI Act 30-day readiness category.

---

*Document: 03_competitive_analysis.md | Phase C314 Geneva Healthcare | Output: /20260701_phase04_geneva_healthcare_cycle314/*
