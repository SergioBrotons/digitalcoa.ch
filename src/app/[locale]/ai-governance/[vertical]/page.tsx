import VerticalLandingPage from '@/components/VerticalLandingPage';

const content = {
  healthcare: {
    hero: {
      badge: '~13 weeks — hard deadline',
      headline: 'Swissdamed Is in 13 Weeks. Is Your Practice Ready?',
      standfirst:
        'AI diagnostic tools are already in your practice. Swissdamed July 1, 2026 has no grace period for high-risk medical devices. If you use AI-assisted imaging, symptom triage, or patient data processing, you have obligations — right now.',
    },
    problem: {
      subhead: 'The gap between AI use and governance',
      body:
        'Your staff is likely using AI tools for administrative tasks, scheduling, or clinical documentation. Some of these may qualify as medical devices under Swissdamed. Most small practices have no formal AI governance policy, no inventory of AI tools, no documented review process, and no Swissmedic compliance pathway. This is the gap between what is happening in your practice and what Swissmedic expects.',
    },
    regulatoryItems: [
      {
        label: 'Swissdamed operative Jul 1, 2026',
        description:
          'NO grace period for high-risk SaMD. Federal Act on the Exchange of Medical Data is now enforceable.',
      },
      {
        label: 'AI diagnostic imaging likely qualifies as high-risk SaMD',
        description:
          'AI symptom triage tools and AI-assisted imaging used in clinical decision-making fall under Swissdamed Class IIb+ requirements.',
      },
      {
        label: 'nFADP Art. 5(c) applies to all AI patient data processing',
        description:
          'Operative since September 2023. Any AI tool processing patient personal data triggers data controller obligations.',
      },
      {
        label: 'FDPIC enforcement priority — healthcare named sector',
        description:
          'FDPIC 2024/2025 Annual Report designates healthcare as a priority enforcement sector. Data protection obligations are active and auditable.',
      },
    ],
    leadMagnet: {
      title: 'The Small Medical Practice AI Decision Framework',
      subtitle:
        'A 3-part framework for Geneva-area medical practices navigating Swissdamed + nFADP obligations.',
      included: [
        'AI tool inventory worksheet',
        'Swissdamed risk classification guide',
        'nFADP readiness checklist',
        '30/60/90-day action sequence',
      ],
    },
    cta: {
      headline: '13 weeks is enough time — if you start now.',
      body:
        'A 30-minute briefing maps your current AI tool usage, identifies Swissdamed exposure, and gives you a prioritized action sequence. No slides. No sales process. A working session.',
      button: 'Book a 30-Minute AI Governance Briefing',
    },
  },
  legal: {
    hero: {
      badge: '46-point governance gap — FDPIC building portfolio',
      headline: 'Your Attorneys Are Using AI. Does Your Firm Have a Policy?',
      standfirst:
        '69% of legal professionals use generative AI individually. Only 23% of firms with fewer than 10 employees have formal AI data rules. That 46-point gap is your exposure — and your competitive window.',
    },
    problem: {
      subhead: 'Shadow AI is the real compliance problem',
      body:
        'Your attorneys and paralegals are using ChatGPT, Gemini, Copilot, and other AI tools for research, drafting, and review. Much of this is happening on personal devices. None of it is documented. Under nFADP Art. 5(c), your firm is likely a data controller for any AI tool that processes client names, matter details, or case information. The obligation has been operative since September 1, 2023.',
    },
    regulatoryItems: [
      {
        label: '46-point governance gap',
        description:
          '69% individual gen AI use vs 23% formal firm policies at <10 employee firms. Source: Wolters Kluwer/Thomson Reuters Feb 2026.',
      },
      {
        label: 'FDPIC enforcement portfolio building',
        description:
          '4 confirmed AI investigations 2025-2026. Transport, retail, social media. Law firms are not yet targeted — the pattern is established.',
      },
      {
        label: 'nFADP Art. 22 DPIA obligation',
        description:
          'Operative since Sep 2023 for high-risk AI processing of client data. Most small law firms do not have a documented DPIA process.',
      },
      {
        label: 'EU AI Act Aug 2, 2026 — high-risk obligations activate',
        description:
          'For firms with EU-based clients, EU-based data processing, or AI outputs intended for the EU market. Contract analysis AI and due diligence AI may qualify as high-risk AI systems.',
      },
      {
        label: 'Digital Gipfel Andermatt May 26, 2026',
        description:
          'Federal Council AI Action Plan First Draft milestone. Will trigger Geneva bar-wide AI governance awareness spike. 60-day pressure event.',
      },
    ],
    leadMagnet: {
      title: 'The Small Law Firm AI Governance Question',
      subtitle:
        'A 3-decision framework for Geneva attorneys navigating AI adoption under nFADP + EU AI Act.',
      included: [
        'The 3-Decision Framework (printable)',
        'AI tool inventory checklist',
        'DPIA Lite template for small firms',
        'Geneva regulatory calendar (2026 deadlines)',
        'Human Accountability Principle guidance',
      ],
    },
    cta: {
      headline: 'The enforcement gap is a window, not an exemption.',
      body:
        'FDPIC is not ignoring AI. It is building its portfolio across other sectors. Geneva law firms are next. A 30-minute briefing maps your firm\'s current AI tool usage, identifies your nFADP obligations, and gives you a prioritized action sequence.',
      button: 'Book a 30-Minute AI Governance Briefing',
    },
  },
  finance: {
    hero: {
      badge: 'CARF operative — FATF evaluation active',
      headline: '76% of Geneva Financial Services Firms Use AI. Most Have No Governance Policy.',
      standfirst:
        'CARF has been operative since January 1, 2026. FATF mutual evaluation of Switzerland is underway. nFADP obligations for AI processing of client data have been active since September 2023.',
    },
    problem: {
      subhead: 'The AI adoption gap in Geneva wealth management',
      body:
        'Boutique wealth managers and independent asset managers in Geneva are using AI tools for portfolio analysis, client communication, compliance monitoring, and research — often on personal devices, often without formal policies. This is the exposure. CARF is live. FATF evaluators are in-market. nFADP Art. 5(c) obligations are already operative.',
    },
    regulatoryItems: [
      {
        label: 'CARF operative since Jan 1, 2026',
        description:
          'Crypto-Asset Reporting Framework is generating reporting obligations. No ignorance defense. Any AI tool processing crypto asset transactions falls in scope.',
      },
      {
        label: 'nFADP Art. 5(c) active — data controller obligations',
        description:
          'Operative since September 2023 for any AI processing client personal data. High-risk AI processing requires documented DPIA under Art. 22.',
      },
      {
        label: 'FATF mutual evaluation 2026-2027',
        description:
          'Switzerland under international review. AI systems used in AML/KYC, client suitability, and investment advice must be documented and auditable.',
      },
      {
        label: 'FINMA Circ. 2025/02 — FinSA/FinSO conduct rules',
        description:
          'AI-enhanced client advice requires documented suitability processes. AI tools in investment advisory fall under supervisory expectations.',
      },
      {
        label: '3-layer compliance stack',
        description:
          'Swiss domestic (nFADP) + Swiss international (FINMA/FATF/CARF) + EU extraterritorial (EU AI Act for EU-nexus firms). All three may apply simultaneously.',
      },
    ],
    leadMagnet: {
      title: 'The Boutique Wealth Manager AI Governance Readiness Checklist',
      subtitle:
        'A 9-section checklist for Geneva-area wealth managers navigating CARF + nFADP + FATF obligations.',
      included: [
        'The 3-layer compliance framework',
        'Full AI governance readiness checklist',
        'CARF obligation assessment guide',
        'FATF evaluation preparedness questions',
        'nFADP DPIA Lite template',
        'Geneva regulatory calendar',
      ],
    },
    cta: {
      headline: 'CARF is already operative. The FATF evaluators are already in-market.',
      body:
        'A 30-minute briefing maps your current AI tool usage, identifies your specific compliance obligations across all three layers, and gives you a prioritized action sequence. No slides. No sales process. A working session.',
      button: 'Book a 30-Minute AI Governance Briefing',
    },
  },
  realestate: {
    hero: {
      badge: '67% AI adoption — retroactive compliance',
      headline: 'Govern the AI You Already Have.',
      standfirst:
        '67% of Geneva real estate agencies are already using AI tools — the highest adoption rate of any professional vertical in the city. Most have no formal AI governance policy, no inventory, no accountability framework, no plan.',
    },
    problem: {
      subhead: 'The retroactive compliance problem',
      body:
        'Real estate agencies in Geneva are using AI for property listing descriptions, client communication drafting, market analysis, administrative automation, and CRM. Much of this use is happening without documentation, without policies, without any clear accountability structure. The question is not whether to adopt AI. You already have. The question is whether the AI use in your agency is governed.',
    },
    regulatoryItems: [
      {
        label: 'GAIGI operative since Fall 2025',
        description:
          'Geneva Real Estate Agent Professional Regulation is being implemented. Professional practice standards in active development. AI governance standards expected to follow.',
      },
      {
        label: 'nFADP Art. 5(c) active — data controller obligations',
        description:
          'Any AI tool processing personal data of clients, counterparties, or third parties triggers data controller obligations. Operative since September 2023.',
      },
      {
        label: 'nFADP Art. 22 DPIA required for property valuation AI',
        description:
          'AI tools used in property valuation or credit assessment likely qualify as high-risk processing. DPIA may already be required.',
      },
      {
        label: '67% AI adoption — highest of any Geneva vertical',
        description:
          'The governance gap is correspondingly wide. Agencies with active Shadow AI use and no documented governance are increasingly exposed.',
      },
      {
        label: 'EU AI Act — property valuation AI likely high-risk',
        description:
          'For firms with EU market nexus, property valuation AI may qualify as high-risk AI systems with full obligations activating August 2, 2026.',
      },
    ],
    leadMagnet: {
      title: 'The Small Real Estate Agency AI Governance Question',
      subtitle:
        'A retroactive compliance framework for Geneva real estate agencies already using AI.',
      included: [
        'AI tool inventory template',
        'Data sensitivity classification guide',
        'nFADP readiness checklist for agencies',
        'GAIGI compliance context',
        'Property valuation AI risk assessment',
      ],
    },
    cta: {
      headline: '67% of Geneva agencies use AI. Most have no governance framework.',
      body:
        'A 30-minute briefing maps the AI tools currently in use in your agency, identifies your nFADP obligations, and gives you a practical retroactive compliance path. No slides. No sales process. A working session.',
      button: 'Book a 30-Minute AI Governance Briefing',
    },
  },
  consulting: {
    hero: {
      badge: 'GPAI obligations active since Aug 2025 — ~8 months in',
      headline: 'GPAI Transparency Obligations Have Been Active Since August 2025. Most Small Consulting Firms Do Not Know.',
      standfirst:
        'If your consulting firm uses AI tools for research, analysis, presentation preparation, client communication, or project delivery — and those tools serve EU-based clients — you have active obligations under the EU AI Act. Federal Council\'s AI Action Plan reaches First Draft in May 2026.',
    },
    problem: {
      subhead: 'The advisory gap for small consulting firms',
      body:
        'Small consulting firms in Geneva are sophisticated AI users. They are also the firms with the least infrastructure to track regulatory obligations across multiple jurisdictions. The EU AI Act\'s GPAI obligations require disclosure when content is AI-generated, technical documentation for GPAI systems, policies for acceptable use, and copyright compliance documentation. For consulting firms with EU nexus, these obligations are active. Most small firms do not have a compliance pathway.',
    },
    regulatoryItems: [
      {
        label: 'GPAI obligations ACTIVE since Aug 2, 2025',
        description:
          '8 months already operative. GPAI providers must comply; clients may start asking. Disclose when content is AI-generated, maintain technical documentation, have acceptable use policy.',
      },
      {
        label: '40% of Geneva SMEs lack AI skills',
        description:
          'Source: PwC 2026. The advisory gap is the market opportunity. Geneva consulting firms that develop governance frameworks will be the reference points.',
      },
      {
        label: 'Federal Council First Draft May 2026',
        description:
          'AI Action Plan milestone at Digital Gipfel Schweiz Andermatt. Will trigger market-wide awareness spike across the Geneva consulting community.',
      },
      {
        label: 'nFADP Art. 5(c) + Art. 22 DPIA',
        description:
          'Active for any AI processing client project data under Swiss law. High-risk AI processing in client projects may trigger mandatory DPIA.',
      },
      {
        label: 'Dual compliance — nFADP + EU AI Act simultaneously',
        description:
          'Swiss domestic obligations (nFADP) + EU extraterritorial obligations (AI Act) may both apply for firms with EU-nexus clients or infrastructure.',
      },
    ],
    leadMagnet: {
      title: 'The Small Consulting Firm AI Decision Framework',
      subtitle:
        'A 3-axis framework for Geneva consulting firms navigating GPAI + nFADP + client expectations.',
      included: [
        'GPAI obligations self-assessment',
        'nFADP readiness checklist for consulting firms',
        'AI acceptable use policy template',
        'Technical documentation checklist',
        'Geneva consulting regulatory calendar',
      ],
    },
    cta: {
      headline: '8 months of active GPAI obligations. May 2026 is 2 months away.',
      body:
        'A 30-minute briefing maps your firm\'s current AI tool usage against the 3-axis framework, identifies which obligations are active, and gives you a prioritized sequence. No slides. No sales process. A working session.',
      button: 'Book a 30-Minute AI Governance Briefing',
    },
  },
  synthesis: {
    hero: {
      badge: '6 verticals — 1 governance gap',
      headline: 'Six Verticals. One Governance Gap. A Portfolio of Frameworks.',
      standfirst:
        'Across Geneva\'s professional services landscape — law, wealth management, healthcare, real estate, consulting, and independent advisors — the same pattern repeats: high AI adoption, low formal governance. The regulatory pressure is real, the deadlines are concrete, and the competitive window is open.',
    },
    problem: {
      subhead: 'The pattern across six Geneva verticals',
      body:
        'After 30+ research cycles across six professional services verticals, the findings are consistent: 61-76% AI adoption, 23-42% formal governance policies, zero boutique competitors serving small firms, and concrete regulatory deadlines converging in 2026. The first-mover window is open.',
    },
    regulatoryItems: [
      {
        label: 'Healthcare — Swissdamed Jul 1 (~13 weeks)',
        description:
          'Hardest deadline in the portfolio. No grace period confirmed. Medical practices using AI diagnostic tools are the most time-pressured ICP.',
      },
      {
        label: 'Legal — 46-point governance gap',
        description:
          '69% individual gen AI use vs 23% formal firm policies. FDPIC enforcement portfolio building. Geneva law firms are next.',
      },
      {
        label: 'Wealth Management — CARF + FATF operative',
        description:
          'CARF generating obligations since Jan 1, 2026. FATF evaluators in-market. 76% Geneva FS AI adoption with no boutique governance competitor.',
      },
      {
        label: 'Real Estate — 67% AI adoption (highest vertical)',
        description:
          'Retroactive compliance framing. Lower-friction entry for agencies already using AI without governance frameworks.',
      },
      {
        label: 'Consulting — GPAI active since Aug 2, 2025',
        description:
          '8 months of operative obligations. May 2026 Digital Gipfel as market awareness trigger. Dual compliance challenge for EU-nexus firms.',
      },
      {
        label: 'Independent Advisors — framework gap confirmed',
        description:
          'No boutique AI governance competitor confirmed across 30+ research cycles. The portfolio approach is the synthesis anchor.',
      },
    ],
    leadMagnet: {
      title: 'The Geneva Professional Services AI Governance Portfolio',
      subtitle:
        'A portfolio of frameworks for Geneva law firms, wealth managers, medical practices, real estate agencies, and consulting firms facing AI obligations now.',
      included: [
        'Healthcare: Swissdamed Decision Framework',
        'Legal: 3-Decision Governance Framework',
        'Wealth Management: 3-Layer Compliance Checklist',
        'Real Estate: Retroactive Compliance Path',
        'Consulting: 3-Axis Framework',
        'Geneva Regulatory Calendar 2026',
      ],
    },
    cta: {
      headline: 'Not sure which framework fits your situation?',
      body:
        'A 30-minute briefing identifies which vertical and which obligations apply to your situation — even if you sit across multiple categories. No slides. No questionnaires. A working session.',
      button: 'Book a 30-Minute AI Governance Briefing',
    },
  },
};

export default async function VerticalPage({
  params,
}: {
  params: Promise<{locale: string; vertical: string}>;
}) {
  const {locale, vertical} = await params;

  // Map URL slugs to content keys
  const verticalMap: Record<string, string> = {
    'medical-practices': 'healthcare',
    'cabinets-medicaux': 'healthcare',
    'small-law-firms': 'legal',
    'petits-cabinets-avocats': 'legal',
    'boutique-wealth-managers': 'finance',
    'gestionnaires-patrimoine-boutique': 'finance',
    'real-estate-agencies': 'realestate',
    'agences-immobilieres': 'realestate',
    'small-consulting-firms': 'consulting',
    'petits-cabinets-conseil': 'consulting',
    'professional-services': 'synthesis',
    'services-professionnels': 'synthesis',
  };

  const contentKey = verticalMap[vertical];
  if (!contentKey) {
    return <div>Vertical not found</div>;
  }

  const data = content[contentKey as keyof typeof content];

  return (
    <VerticalLandingPage
      vertical={vertical}
      locale={locale as 'en' | 'fr'}
      hero={data.hero}
      problem={data.problem}
      regulatoryItems={data.regulatoryItems}
      leadMagnet={data.leadMagnet}
      cta={data.cta}
      meta={{title: data.hero.headline, description: data.hero.standfirst}}
    />
  );
}
