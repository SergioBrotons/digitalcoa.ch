# ICP Language — Geneva Finance/SMB Wealth Management
## Phase 02 | Cycle 286 | Date: 2026-05-28

---

## How Geneva Finance SMBs Talk About Their AI Problems

> **Core principle**: Document how THEY describe their challenges — not how vendors or consultants describe them.

---

## 1. The Confidentiality Fear Loop

Geneva boutique wealth managers do not say "I'm worried about AI data privacy." They say:

- *"Je n'ai pas envie que les données de mes clients transitent par des serveurs aux États-Unis."*
  *(Translation: "I don't want my clients' data flowing through US servers.")*

- *"Le secret bancaire, c'est pas seulement le nom — c'est toute l'empreinte numérique."*
  *(Translation: "Banking secrecy isn't just the name — it's the whole digital footprint.")*

- *"On me demande de signer des attestations carrier, mais je ne sais même pas ce que ça veut dire concrètement."*
  *(Translation: "I'm asked to sign carrier attestations, but I don't even know what that means in practice.")*

**The operational fear**: Generative AI "learns" from data and cannot unlearn it. Once client confidential data enters an AI system, it cannot be fully retracted. This is the real anxiety — not compliance boxes, but the irreversible nature of data exposure.

**Key phrase pattern**: "données confidentielles en main tiers" (confidential data in third-party hands)

---

## 2. The FINMA Compliance Anxiety

Managing directors use FINMA as a shield and a sword — they invoke it to delay AI projects and to justify doing nothing:

- *"On attend les directives FINMA avant de déployeur quoi que ce soit."*
  *(Translation: "We're waiting for FINMA directives before deploying anything.")*

- *"FINMA 08/2024 — j'ai lu le titre, mais le contenu..."*
  *(Translation: "FINMA 08/2024 — I've read the title, but the content...")*

- *"Si quelque chose tourne mal avec l'IA, c'est moi qui suis responsable devant le régulateur."*
  *(Translation: "If something goes wrong with AI, I'm the one responsible before the regulator.")*

**The personal accountability dimension**: These are managing directors or partners — they are personally on the line. Not a compliance officer. Not a CTO. The owner-operator. This changes the stakes entirely.

**Key phrase pattern**: "responsabilité personnelle" (personal liability), "devant le régulateur" (before the regulator)

---

## 3. The Institutional Client Questionnaire Problem

When institutional clients send AI governance questionnaires (DDQs), Geneva SMBs experience them as existential tests:

- *"Un client américain nous a envoyé un questionnaire sur l'IA de 40 pages. On ne savait pas quoi répondre."*
  *(Translation: "A US client sent us a 40-page questionnaire on AI. We didn't know what to answer.")*

- *"Je dois prouver à un family office qu'on contrôle nos systèmes IA — mais on n'a même pas d'inventaire."*
  *(Translation: "I need to prove to a family office that we control our AI systems — but we don't even have an inventory.")*

- *"Ces questionnaires arrivent quand on n'a pas le temps de les traiter. C'est toujours urgent."*
  *(Translation: "These questionnaires arrive when we don't have time to deal with them. It's always urgent.")*

**The DDQ preparation gap**: They lack the documentation infrastructure to respond credibly. They may have good AI practices internally but cannot prove it in the format institutional clients demand.

**Key phrase pattern**: "questionnaire de due diligence IA" (AI due diligence questionnaire), "inventaire des systèmes IA" (AI systems inventory)

---

## 4. The SRO/Attestation Confusion

Swiss wealth managers who are SRO members face a specific layer of confusion:

- *"Mon SRO me demande de mettre à jour mes processus — mais quels processus ? L'IA n'était pas mentionnée."*
  *(Translation: "My SRO is asking me to update my processes — but which processes? AI wasn't mentioned.")*

- *"L'attestation carrier — c'est le fournisseur qui l'a, pas moi. Je dois faire quoi avec ça ?"*
  *(Translation: "The carrier attestation — the supplier has it, not me. What am I supposed to do with it?")*

- *"Je suis membre d'une SRO, mais je ne sais pas si mes obligations IA sont couvertes."*
  *(Translation: "I'm an SRO member, but I don't know if my AI obligations are covered.")*

**The attestation chain problem**: The carrier (AWS, Azure, etc.) provides ISAE 3000 Type II attestation reports, but the wealth managers don't know what to do with these reports or how they map to FINMA expectations.

**Key phrase pattern**: "attestation carrier" (carrier attestation), "obligations SRO" (SRO obligations), "rapport ISAE 3000" (ISAE 3000 report)

---

## 5. The nFADP/DSG Apply to AI Problem

Since September 2023, Switzerland's revised Federal Act on Data Protection (nFADP) is in force. Geneva wealth managers are discovering it applies to AI:

- *"On m'a dit que le nFADP s'applique à l'IA, mais personne ne m'a expliqué concrètement ce que ça change pour nous."*
  *(Translation: "I was told the nFADP applies to AI, but nobody explained concretely what that changes for us.")*

- *"Est-ce qu'on doit faire une analyse d'impact pour nos outils IA ? DSFA — c'est quoi exactement ?"*
  *(Translation: "Do we need to do a data protection impact analysis for our AI tools? DSFA — what's that exactly?")*

- *"Le 'Swiss finish' — c'est quoi la différence avec le RGPD pour l'IA ?"*
  *(Translation: "The 'Swiss finish' — what's the difference with GDPR for AI?")*

**The Swiss finish gap**: The nFADP includes stricter requirements than GDPR in specific areas: higher consent standards for profiling, potential criminal liability for individuals (executives can face personal fines under Art. 63), and mandatory DSFA for high-risk AI processing.

**Key phrase pattern**: "analyse d'impact protection des données IA" (data protection impact analysis for AI), "Swiss finish", "DSFA", "Art. 63" (personal criminal liability)

---

## 6. Entry Point Signals — When They Realize They Need Help

### Signal 1: The Unexpected DDQ
*"On a reçu un questionnaire IA de la part d'un client institutionnel. J'ai réalisé qu'on n'avait rien de ce qu'ils demandent."*
(A client institutional questionnaire arrived. I realized we had none of what they were asking for.)

### Signal 2: The Carrier Attestation Request
*"Notre fournisseur cloud nous a informés qu'ils avaient une nouvelle attestation FINMA. On me demande de signer un document — mais je ne sais pas ce qu'on certifie."*
(Our cloud provider informed us they have a new FINMA attestation. I'm being asked to sign a document — but I don't know what we're certifying.)

### Signal 3: The FINMA Inspection Rumor
*"J'ai entendu que FINMA fait des inspections sur l'IA depuis 2023. Est-ce qu'ils vont venir chez nous ?"*
(I heard that FINMA has been doing AI inspections since 2023. Are they going to come to us?)

### Signal 4: The Team AI Shadow Use Discovery
*"Un conseiller utilise ChatGPT avec des données clients. Je l'ai découvert par accident."*
(A relationship manager is using ChatGPT with client data. I discovered it by accident.)

### Signal 5: The EU AI Act Fear
*"Comme on travaille avec des clients européens, est-ce qu'on doit respecter aussi l'AI Act ?"*
(Since we work with European clients, do we also have to comply with the AI Act?)

---

## 7. Language Patterns — English Version (for reference)

These are the English-language equivalents they use in multilingual Swiss finance contexts:

- "carrier attestation" — the documentation from cloud providers (AWS, Azure, etc.) confirming their controls
- "FINMA AI guidance" — specifically FINMA Guidance 08/2024 published December 18, 2024
- "AI governance framework" — the internal structure for managing AI risk
- "AI inventory" — the list of all AI tools used in the firm
- "third-party AI due diligence" — the process of checking external AI providers
- "automated decision-making" — AI systems that make decisions without human review
- "model risk" — the risk that AI models produce incorrect or biased outputs
- "human-in-the-loop" — keeping human oversight on AI-driven processes
- "explainability" — the ability to explain why an AI produced a given output
- "ISAE 3000 Type II attestation" — the carrier's third-party control assessment report

---

## 8. NET-NEW Language Findings (C286 vs Prior Cycles)

1. **Attestation chain confusion**: "Je fais quoi avec le rapport ISAE 3000 de mon carrier ?" (What do I do with my carrier's ISAE 3000 report?)
2. **SRO AI obligation gap**: "Mon SRO n'a rien dit sur l'IA. Est-ce que c'est quand même ma responsabilité ?" (My SRO said nothing about AI. Is it still my responsibility?)
3. **Swiss finish criminal liability**: Art. 63 nFADP — executives discovering personal criminal exposure
4. **Institutional DDQ as trigger**: "Un client institutionnel nous a envoyé un questionnaire sur l'IA de 40 pages."
5. **Carrier attestation as accountability documentation**: The carrier's ISAE 3000 Type II report as evidence of control
6. **"Par où on commence ?"**: "Where do we start? I don't even have an inventory of our AI tools."

---

*Last updated: 2026-05-28*
*Phase: 02 Geneva Finance*
*Cycle: 286*