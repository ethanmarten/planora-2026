import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  Zap,
  MonitorSmartphone,
  Palette,
  Blocks,
  Monitor,
  Tablet,
  Smartphone,
  BadgeCheck,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { DeviceMockup } from "@/components/DeviceMockup";
import { MiniAppUI } from "@/components/MiniAppUI";
import { TiltCard } from "@/components/TiltCard";
import { cn } from "@/lib/utils";

import wallAsset from "@/assets/planora-wall.jpg.asset.json";
import devicesAsset from "@/assets/planora-devices.jpg.asset.json";
import packagingAsset from "@/assets/planora-packaging.jpg.asset.json";
import stationeryAsset from "@/assets/planora-stationery.jpg.asset.json";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const brandAssets = [
  {
    image: wallAsset.url,
    title: "Environmental Signage",
    spec: "3D dimensional logo · Backlit acrylic",
    tag: "Office",
  },
  {
    image: devicesAsset.url,
    title: "Digital Experience",
    spec: "Responsive web app · Desktop & mobile",
    tag: "Product",
  },
  {
    image: packagingAsset.url,
    title: "Custom Packaging",
    spec: "Sky-tone mailer · Canvas tote · ID badge",
    tag: "Print",
  },
  {
    image: stationeryAsset.url,
    title: "Stationery System",
    spec: "Notebooks · Business cards · Letterhead",
    tag: "Print",
  },
];

const features = [
  {
    icon: Zap,
    title: "High-Speed Commerce Setup",
    description: "Launch a production-ready digital storefront in minutes, not months — optimized checkout, payments, and catalog tooling included.",
    badge: "Live",
  },
  {
    icon: MonitorSmartphone,
    title: "Multi-Device Synchronization",
    description: "Every cart, session, and preference stays in perfect sync across desktop, tablet, and mobile — in real time.",
    badge: "Real-time",
  },
  {
    icon: Palette,
    title: "Enterprise Brand Kit",
    description: "Your logos, colors, and typography applied consistently across every touchpoint, from storefront to stationery.",
    badge: "v2.4",
  },
  {
    icon: Blocks,
    title: "Custom Scalable Solutions",
    description: "Modular architecture that grows with you — from first sale to enterprise scale, without replatforming.",
    badge: "Modular",
  },
];

const previewModes = [
  { id: "desktop", label: "Desktop", icon: Monitor, width: "w-full max-w-4xl", ratio: "aspect-[16/10]" },
  { id: "tablet", label: "Tablet", icon: Tablet, width: "w-full max-w-xl", ratio: "aspect-[4/3]" },
  { id: "mobile", label: "Mobile", icon: Smartphone, width: "w-full max-w-[280px]", ratio: "aspect-[9/18]" },
] as const;

type PreviewMode = (typeof previewModes)[number]["id"];

const Index = () => {
  const [mode, setMode] = useState<PreviewMode>("desktop");
  const activeMode = previewModes.find((m) => m.id === mode)!;

  return (
    <Layout>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-grid">
        {/* Gradient light spheres */}
        <div className="light-sphere w-[420px] h-[420px] -top-32 -right-24 animate-drift" />
        <div className="light-sphere w-[260px] h-[260px] top-1/2 -left-32 opacity-70 animate-drift" style={{ animationDelay: "-6s" }} />
        <div className="glow-orb w-[560px] h-[560px] bottom-[-200px] left-1/3" />

        <div className="container-full relative pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-10 items-center">
            {/* Copy */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-electric/25 bg-accent/60 backdrop-blur-sm px-4 py-1.5 mb-8"
              >
                <BadgeCheck className="w-3.5 h-3.5 text-electric" />
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-accent-foreground">
                  SaaS · Brand · Commerce
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight text-foreground mb-6"
              >
                Planora
                <span className="block mt-2 text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1]">
                  Empowering <span className="text-gradient-blue">Modern Experiences</span> & Commerce
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mb-10"
              >
                One premium platform to launch storefronts, synchronize every
                device, and carry your brand identity across each touchpoint —
                beautifully and at scale.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#platform"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("platform")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center gap-2 h-13 px-8 py-4 rounded-full text-sm font-semibold text-primary-foreground btn-glow"
                >
                  Explore Platform
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/brand"
                  className="inline-flex items-center justify-center gap-2 h-13 px-8 py-4 rounded-full text-sm font-semibold text-foreground btn-glass"
                >
                  View Brand Guidelines
                </Link>
              </motion.div>

              {/* Trust strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4"
              >
                {[
                  ["12k+", "Teams onboard"],
                  ["99.99%", "Uptime SLA"],
                  ["4.9/5", "Customer rating"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="font-display text-2xl font-extrabold text-foreground">{value}</p>
                    <p className="text-xs text-muted-foreground">{label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Device mockups */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              className="relative pb-14"
            >
              <DeviceMockup />
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          >
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <ArrowDown className="w-4 h-4 text-muted-foreground/50" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ BRAND IDENTITY & STATIONERY SHOWCASE ============ */}
      <section id="showcase" className="py-24 md:py-32 relative overflow-hidden">
        <div className="glow-orb w-[480px] h-[480px] top-0 right-0 opacity-60" />
        <div className="container-full relative">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-electric mb-4">
              Brand Identity
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-5 leading-[1.05]">
              One identity, every surface
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Planora brand system extends from environmental signage to
              packaging and stationery — a cohesive visual language, meticulously
              applied.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandAssets.map((asset, index) => (
              <motion.div
                key={asset.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TiltCard className="glass-card rounded-2xl overflow-hidden group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={asset.image}
                      alt={asset.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 status-badge bg-navy/80 text-primary-foreground backdrop-blur-sm">
                      {asset.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-foreground mb-1.5">
                      {asset.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{asset.spec}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PLATFORM FEATURES GRID ============ */}
      <section id="features" className="py-24 md:py-32 bg-secondary/40 relative overflow-hidden">
        <div className="light-sphere w-[300px] h-[300px] bottom-0 left-10 opacity-50" />
        <div className="container-full relative">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-electric mb-4">
              Platform
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-5 leading-[1.05]">
              Built for modern commerce
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Four pillars that make Planora the fastest way from idea to a
              fully-branded, enterprise-grade digital experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-7 h-full flex flex-col group-hover:-translate-y-1.5">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric to-electric-light flex items-center justify-center shadow-[0_8px_20px_hsl(217_91%_55%/0.35)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <feature.icon className="w-5.5 h-5.5 text-primary-foreground" />
                    </div>
                    <span className="status-badge bg-accent text-accent-foreground opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INTERACTIVE PRODUCT PRESENTATION ============ */}
      <section id="platform" className="py-24 md:py-32 relative overflow-hidden">
        <div className="glow-orb w-[520px] h-[520px] top-20 -left-40 opacity-70" />
        <div className="container-full relative">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-electric mb-4">
              Product Tour
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-5 leading-[1.05]">
              One interface, every screen
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Preview the Planora web application across responsive modes —
              the same refined experience, perfectly adapted.
            </p>
          </motion.div>

          {/* Mode switcher */}
          <motion.div {...fadeUp} className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card/70 backdrop-blur-md p-1.5 shadow-sm">
              {previewModes.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMode(m.id)}
                  className={cn(
                    "relative flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-300",
                    mode === m.id ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {mode === m.id && (
                    <motion.span
                      layoutId="mode-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-electric to-electric-light shadow-[0_4px_16px_hsl(217_91%_55%/0.4)]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <m.icon className="w-3.5 h-3.5 relative z-10" />
                  <span className="relative z-10 hidden sm:inline">{m.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Device frame */}
          <div className="flex justify-center">
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 220, damping: 30 }}
              className={cn("relative", activeMode.width)}
            >
              <motion.div
                layout
                className={cn(
                  "rounded-2xl border border-border bg-navy shadow-[0_32px_90px_hsl(222_47%_11%/0.3)]",
                  mode === "mobile" ? "p-1.5 rounded-[2rem]" : "p-2.5"
                )}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mode}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                    className={cn(
                      "overflow-hidden bg-background relative",
                      activeMode.ratio,
                      mode === "mobile" ? "rounded-[1.6rem]" : "rounded-xl"
                    )}
                  >
                    {mode === "mobile" && (
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3 rounded-full bg-navy z-10" />
                    )}
                    <MiniAppUI compact={mode === "mobile"} />
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Reflection glow */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-electric/20 blur-3xl rounded-full pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section id="cta" className="relative overflow-hidden" style={{ background: "var(--gradient-cta)" }}>
        <div className="light-sphere w-[380px] h-[380px] -top-24 right-10 opacity-40 animate-drift" />
        <div className="glow-orb w-[600px] h-[400px] bottom-[-160px] left-1/2 -translate-x-1/2 opacity-90" />

        <div className="container-full relative py-28 md:py-36 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-electric-light mb-6">
              Get Started
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold text-primary-foreground mb-6 leading-[1.05] max-w-3xl mx-auto">
              Build your next experience with{" "}
              <span className="text-gradient-blue">Planora</span>
            </h2>
            <p className="text-primary-foreground/60 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12">
              Join thousands of teams shipping modern commerce experiences —
              with a brand that stays consistent everywhere it appears.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:hello@planora.io"
                className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full text-sm font-semibold text-primary-foreground btn-glow"
              >
                Start Building
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/brand"
                className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full text-sm font-semibold text-primary-foreground border border-primary-foreground/25 bg-primary-foreground/5 backdrop-blur-md hover:bg-primary-foreground/10 hover:border-primary-foreground/40 transition-all duration-300"
              >
                Explore the Brand
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
