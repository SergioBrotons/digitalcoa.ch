"use client";

import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Play,
  Eye,
  Lock,
  TrendingUp,
  Cpu,
  Globe,
  ShieldCheck,
  GitBranch,
  FileText,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
} from "lucide-react";

// ─── Icons (inline SVG to avoid dependency) ─────────────────────────────────

const Icon = ({
  children,
  size = 24,
  className = "",
}: {
  children: React.ReactNode;
  size?: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

// ─── Node Graph SVG (hero background) ───────────────────────────────────────

const NodeGraph = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 600 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Outer ring */}
    <circle cx="300" cy="300" r="280" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 8" opacity="0.3" />
    <circle cx="300" cy="300" r="220" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2 6" opacity="0.2" />
    <circle cx="300" cy="300" r="160" stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 9" opacity="0.15" />
    <circle cx="300" cy="300" r="100" stroke="#3B82F6" strokeWidth="1" opacity="0.1" />

    {/* Diagonal cross lines */}
    <line x1="300" y1="20" x2="300" y2="580" stroke="#3B82F6" strokeWidth="0.5" opacity="0.08" />
    <line x1="20" y1="300" x2="580" y2="300" stroke="#3B82F6" strokeWidth="0.5" opacity="0.08" />
    <line x1="102" y1="102" x2="498" y2="498" stroke="#3B82F6" strokeWidth="0.5" opacity="0.06" />
    <line x1="498" y1="102" x2="102" y2="498" stroke="#3B82F6" strokeWidth="0.5" opacity="0.06" />

    {/* Orbital ellipses */}
    <ellipse cx="300" cy="300" rx="240" ry="100" stroke="#3B82F6" strokeWidth="0.8" opacity="0.12" transform="rotate(30 300 300)" />
    <ellipse cx="300" cy="300" rx="240" ry="100" stroke="#3B82F6" strokeWidth="0.8" opacity="0.12" transform="rotate(-30 300 300)" />
    <ellipse cx="300" cy="300" rx="200" ry="80" stroke="#3B82F6" strokeWidth="0.5" opacity="0.08" transform="rotate(60 300 300)" />

    {/* Nodes */}
    {[
      [300, 20], [300, 580], [20, 300], [580, 300],
      [102, 102], [498, 498], [498, 102], [102, 498],
      [300, 80], [300, 520], [80, 300], [520, 300],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 4 : 2.5} fill="#3B82F6" opacity={0.4 + (i % 3) * 0.1} />
    ))}

    {/* Inner hub */}
    <circle cx="300" cy="300" r="12" fill="#3B82F6" opacity="0.6" />
    <circle cx="300" cy="300" r="6" fill="#3B82F6" opacity="0.9" />

    {/* Gear spokes */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 300 + Math.cos(rad) * 20;
      const y1 = 300 + Math.sin(rad) * 20;
      const x2 = 300 + Math.cos(rad) * 60;
      const y2 = 300 + Math.sin(rad) * 60;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3B82F6" strokeWidth="1" opacity="0.15" />;
    })}

    {/* Small floating accent dots */}
    {[
      [150, 150], [450, 150], [150, 450], [450, 450],
      [200, 80], [400, 80], [200, 520], [400, 520],
      [80, 200], [80, 400], [520, 200], [520, 400],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="1.5" fill="#F59E0B" opacity="0.3" />
    ))}
  </svg>
);

// ─── Scroll Reveal Hook ──────────────────────────────────────────────────────

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((t) => observer.observe(t));

    // Also observe the container itself if it has data-reveal
    if (el.hasAttribute("data-reveal")) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}

// ─── Navbar ─────────────────────────────────────────────────────────────────

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="navbar">
        <a href="/" className="navbar-logo">
          Cyt<span>ria</span>
        </a>

        <nav className="navbar-nav" aria-label="Main navigation">
          <a href="#platform">Platform</a>
          <a href="#security">Security</a>
          <a href="#why-us">Why Us</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a href="#access" className="cta-btn cta-btn-primary desktop navbar-cta">
            Request Access
          </a>
          <button
            className="navbar-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <nav className={`navbar-mobile-menu ${menuOpen ? "open" : ""}`} aria-label="Mobile navigation">
        <a href="#platform" onClick={() => setMenuOpen(false)}>Platform</a>
        <a href="#security" onClick={() => setMenuOpen(false)}>Security</a>
        <a href="#why-us" onClick={() => setMenuOpen(false)}>Why Us</a>
        <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <a href="#access" className="cta-btn cta-btn-primary" onClick={() => setMenuOpen(false)}>
          Request Access
        </a>
      </nav>
    </>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="hero" id="hero">
      <NodeGraph className="node-graph" />

      <div className="hero-inner" data-reveal>
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          Early Access — Swiss AI Platform
        </div>

        <h1>
          The machine that runs<br />
          your business — <em>explainable</em>,<br />
          sovereign, precise.
        </h1>

        <p className="hero-sub">
          Cytria brings institutional-grade AI infrastructure to Swiss SMEs.
          No black boxes. No data exports. Just clarity, control, and outcomes you can audit.
        </p>

        <div className="hero-actions">
          <a href="#access" className="cta-btn cta-btn-primary">
            Request Early Access
            <ArrowRight size={16} />
          </a>
          <a href="#demo" className="cta-btn cta-btn-ghost">
            <Play size={14} />
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Trust Bar ───────────────────────────────────────────────────────────────

function TrustBar() {
  const ref = useScrollReveal();
  return (
    <div className="trust-bar" ref={ref}>
      <p>Trusted by forward-thinking organizations across Switzerland</p>
      <div className="trust-logos">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <svg
            key={i}
            className="trust-logo"
            viewBox={`0 0 ${80 + i * 10} 28`}
            fill="currentColor"
            aria-hidden="true"
          >
            <rect x="0" y="8" width={40 + i * 5} height="12" rx="2" opacity="0.6" />
            <rect x={48 + i * 4} y="8" width={20 + i * 2} height="12" rx="2" opacity="0.3" />
          </svg>
        ))}
      </div>
    </div>
  );
}

// ─── Pillars ─────────────────────────────────────────────────────────────────

const pillars = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: "Clarity",
    desc: "Every decision made by Cytria is fully explainable. You see exactly why a recommendation was made — not a probability, but a reason.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: "Control",
    desc: "Your data never leaves Swiss borders. You maintain full sovereignty — infrastructure, keys, and access policies are yours.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: "Predictability",
    desc: "Consistent, measurable outcomes. Cytria is designed for environments where variance is costly and accountability is non-negotiable.",
  },
];

function Pillars() {
  const ref = useScrollReveal();
  return (
    <section className="section" id="philosophy">
      <div className="container" ref={ref}>
        <div className="section-header" data-reveal>
          <h2>The three pillars of sovereign AI</h2>
          <p>Built for organisations that cannot afford ambiguity in their infrastructure choices.</p>
        </div>

        <div className="pillars-grid">
          {pillars.map((p, i) => (
            <div key={p.title} className="pillar-card" data-reveal>
              <div className="pillar-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Capabilities ───────────────────────────────────────────────────────────

const capabilities = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
      </svg>
    ),
    title: "Neural Process Automation",
    desc: "Automate complex, multi-step business workflows with adaptive neural engines that learn from your operations without exposing your data.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: "Swiss Data Residency",
    desc: "Every byte stays in Switzerland. No exceptions, no third-party transfers, no ambiguity — enforced at the infrastructure layer.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "EU AI Act Compliance",
    desc: "Designed from the ground up to meet EU AI Act requirements for high-risk systems. Documentation, audit trails, and human oversight built in.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: "Explainable Decisions",
    desc: "Decision logs for every inference. Full attribution chain: input → processing → output. Regulator-ready, boardroom-ready.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>
      </svg>
    ),
    title: "API Orchestration",
    desc: "Connect Cytria to your existing stack via RESTful APIs. Supports webhook triggers, event streams, and real-time data pipelines.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: "Audit-Ready Logging",
    desc: "Immutable, tamper-evident logs for every system event and model inference. Structured for regulatory audits and internal reviews.",
  },
];

function Capabilities() {
  const ref = useScrollReveal();
  return (
    <section className="section" id="platform" style={{ paddingBottom: "0" }}>
      <div className="container" ref={ref}>
        <div className="section-header" data-reveal>
          <h2>Platform Capabilities</h2>
          <p>A complete sovereign AI stack — from inference engine to audit trail.</p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: "96px" }}>
        <div className="capabilities-scroll">
          <div className="capabilities-grid">
            {capabilities.map((c, i) => (
              <div key={c.title} className="capability-card" data-reveal>
                <div className="capability-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Why Us — 2×2 ───────────────────────────────────────────────────────────

const whyItems = [
  {
    n: "01",
    title: "No training data extraction",
    desc: "Your data is used exclusively to serve your operations. Models are trained on-premises. We never access, copy, or aggregate your training data.",
  },
  {
    n: "02",
    title: "Immutable audit logs",
    desc: "Every model decision, every API call, every data access is logged with cryptographic integrity. Available the moment an auditor asks.",
  },
  {
    n: "03",
    title: "Regulator-native architecture",
    desc: "Built in consultation with Swiss and EU regulatory frameworks. The system's design anticipates compliance requirements rather than reacting to them.",
  },
  {
    n: "04",
    title: "SME-accessible pricing",
    desc: "Enterprise-grade sovereign infrastructure, priced for organisations that need it most. Predictable, transparent, scalable.",
  },
];

function WhyUs() {
  const ref = useScrollReveal();
  return (
    <section className="section" id="why-us" style={{ background: "var(--color-surface)" }}>
      <div className="container" ref={ref}>
        <div className="section-header" data-reveal>
          <h2>Why Cytria</h2>
          <p>The difference between a vendor and a partner lies in what they refuse to do with your data.</p>
        </div>

        <div className="why-grid">
          {whyItems.map((item) => (
            <div key={item.n} className="why-card" data-reveal>
              <span className="why-card-number">{item.n}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pull Quote ──────────────────────────────────────────────────────────────

function PullQuote() {
  const ref = useScrollReveal();
  return (
    <section className="pull-quote-section" ref={ref}>
      <div className="pull-quote" data-reveal>
        <blockquote>
          In a world increasingly governed by opaque AI systems, sovereign infrastructure
          is not a luxury — it is the only sound basis for a durable competitive advantage.
        </blockquote>
        <cite>— Cytria, Platform Rationale 2024</cite>
      </div>
    </section>
  );
}

// ─── Service Timeline ────────────────────────────────────────────────────────

const timelineSteps = [
  {
    n: "1",
    title: "Discovery & Assessment",
    desc: "We map your current data flows, compliance requirements, and operational workflows. No assumptions — just evidence.",
  },
  {
    n: "2",
    title: "Sovereign Deployment",
    desc: "Cytria is provisioned within your designated Swiss infrastructure environment. Full data residency, zero external exposure.",
  },
  {
    n: "3",
    title: "Continuous Operations",
    desc: "Ongoing monitoring, model performance tracking, and compliance reporting. You get the outcomes; we handle the infrastructure.",
  },
];

function ServiceTimeline() {
  const ref = useScrollReveal();
  return (
    <section className="section" id="process">
      <div className="container" ref={ref}>
        <div className="section-header" data-reveal>
          <h2>How it works</h2>
          <p>From initial assessment to live operations — a defined path, not an open-ended engagement.</p>
        </div>

        <div className="timeline">
          {timelineSteps.map((step) => (
            <div key={step.n} className="timeline-step" data-reveal>
              <div className="step-number">{step.n}</div>
              <div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Data Sovereignty Strip ──────────────────────────────────────────────────

function SovereigntyStrip() {
  const ref = useScrollReveal();
  return (
    <section className="section" id="security" ref={ref}>
      <div className="container">
        <div className="sovereign-strip" data-reveal>
          <h2>Your data never leaves Switzerland. <span className="text-amber">Literally.</span></h2>
          <p className="sub">Enjoy the power of advanced AI without surrendering data sovereignty.</p>

          <div className="sovereign-stats">
            <div className="sov-stat" data-reveal>
              <span className="sov-stat-value">100%</span>
              <span className="sov-stat-label">Swiss Infrastructure</span>
            </div>
            <div className="sov-stat" data-reveal>
              <span className="sov-stat-value">0</span>
              <span className="sov-stat-label">External Data Transfers</span>
            </div>
            <div className="sov-stat" data-reveal>
              <span className="sov-stat-value">CHF 0</span>
              <span className="sov-stat-label">Regulatory Penalties (clients)</span>
            </div>
          </div>
        </div>

        <div className="compliance-grid" data-reveal>
          {["GDPR", "EU AI Act", "nFADP", "ISO 27001"].map((label) => (
            <div key={label} className="compliance-badge">
              <CheckCircle2 size={16} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact Split ───────────────────────────────────────────────────────────

function ContactSplit() {
  const formRef = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const entries = Object.fromEntries(data.entries());
    console.log("Contact request:", entries);
    alert("Thank you. We'll be in touch within one business day.");
    form.reset();
  };

  return (
    <section className="section" id="contact">
      <div className="container" ref={formRef}>
        <div className="section-header" data-reveal>
          <h2>Get in touch</h2>
          <p>Whether you have a specific use case or just want to understand the platform — we're here.</p>
        </div>

        <div className="contact-split">
          <div className="contact-info" data-reveal>
            <div>
              <h3 style={{ marginBottom: "12px" }}>Swiss-headquartered,<br />globally relevant.</h3>
              <p>Built by a team with deep expertise in AI governance, Swiss financial regulation, and enterprise software.</p>
            </div>

            <div className="contact-detail">
              <MapPin size={18} />
              Bahnhofstrasse 100, 8001 Zurich
            </div>
            <div className="contact-detail">
              <Mail size={18} />
              contact@cytria.ai
            </div>
            <div className="contact-detail">
              <Phone size={18} />
              +41 44 000 00 00
            </div>

            <div style={{ marginTop: "8px" }}>
              <p style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-text-dim)", marginBottom: "12px" }}>
                Response time
              </p>
              <p style={{ fontSize: "0.9375rem" }}>Within one business day, guaranteed.</p>
            </div>
          </div>

          <div className="contact-form-panel" data-reveal>
            <form onSubmit={handleSubmit}>
              <div className="grid-2" style={{ gap: "16px", marginBottom: "16px" }}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input id="firstName" name="firstName" className="form-input" type="text" placeholder="Sandra" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input id="lastName" name="lastName" className="form-input" type="text" placeholder="Meier" required />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "16px" }}>
                <label htmlFor="company">Company</label>
                <input id="company" name="company" className="form-input" type="text" placeholder="Müller AG" />
              </div>

              <div className="form-group" style={{ marginBottom: "16px" }}>
                <label htmlFor="email">Work Email</label>
                <input id="email" name="email" className="form-input" type="email" placeholder="sandra@mueller-ag.ch" required />
              </div>

              <div className="form-group" style={{ marginBottom: "24px" }}>
                <label htmlFor="message">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input"
                  placeholder="Tell us about your use case, compliance requirements, or any questions about the platform…"
                  rows={4}
                />
              </div>

              <button type="submit" className="cta-btn cta-btn-primary w-full" style={{ justifyContent: "center" }}>
                Send Message
                <ChevronRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ─────────────────────────────────────────────────────────────

function CtaSection() {
  const ref = useScrollReveal();
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    if (!email) return;
    console.log("Early access request:", email);
    alert("Thank you. You'll hear from us within one business day.");
    if (emailRef.current) emailRef.current.value = "";
  };

  return (
    <section className="section" id="access" ref={ref} style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-border-dim)" }}>
      <div className="container" style={{ textAlign: "center" }} data-reveal>
        <h2 style={{ marginBottom: "16px" }}>
          Ready to run on <span className="text-blue">sovereign</span> infrastructure?
        </h2>
        <p style={{ maxWidth: "440px", margin: "0 auto 40px", fontSize: "1.05rem" }}>
          Join the waitlist for early access to the Cytria platform.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", maxWidth: "480px", margin: "0 auto" }}>
          <input
            ref={emailRef}
            type="email"
            className="form-input"
            placeholder="your@company.ch"
            required
            style={{ flex: "1 1 240px" }}
          />
          <button type="submit" className="cta-btn cta-btn-primary">
            Request Access
          </button>
        </form>

        <p style={{ marginTop: "20px", fontSize: "0.875rem" }}>
          or{" "}
          <a href="#contact" style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>
            schedule a call
          </a>
        </p>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-logo">
            Cyt<span>ria</span>
          </div>
          <p className="footer-tagline" style={{ marginTop: "4px" }}>
            Swiss AI. Sovereign Infrastructure.
          </p>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Cytria AG, Zurich. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CytriaClient() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <hr className="rule" />
        <Pillars />
        <hr className="rule" />
        <Capabilities />
        <hr className="rule" />
        <WhyUs />
        <PullQuote />
        <hr className="rule" />
        <ServiceTimeline />
        <SovereigntyStrip />
        <hr className="rule" />
        <ContactSplit />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
