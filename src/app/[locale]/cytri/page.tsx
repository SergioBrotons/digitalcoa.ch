import CytriaClient from "./CytriClient";

export function generateMetadata() {
  return {
    title: "Cytria — Swiss AI Platform for SMEs | Sovereign · Compliant · Precise",
    description:
      "Cytria provides institutional-grade AI infrastructure for Swiss SMEs. Full data residency, EU AI Act compliance, and fully explainable decisions. No compromises.",
    keywords: [
      "Swiss AI", "AI platform", "SME AI", "sovereign AI", "EU AI Act compliance",
      "data residency Switzerland", "explainable AI", "GDPR compliance", "nFADP",
      "ISO 27001", "AI governance", "Cytria",
    ],
    openGraph: {
      title: "Cytria — Swiss AI Platform",
      description: "Sovereign · Compliant · Precise. AI infrastructure for Swiss SMEs.",
      type: "website",
    },
  };
}

export default function CytriaPage() {
  return <CytriaClient />;
}
