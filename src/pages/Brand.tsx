import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Layout } from "@/components/Layout";
import { TiltCard } from "@/components/TiltCard";

import logoAsset from "@/assets/planora-logo.png.asset.json";
import markAsset from "@/assets/planora-mark.png.asset.json";
import heroArtAsset from "@/assets/planora-hero-art.jpg.asset.json";
import wallAsset from "@/assets/planora-wall.jpg.asset.json";
import packagingAsset from "@/assets/planora-packaging.jpg.asset.json";
import stationeryAsset from "@/assets/planora-stationery.jpg.asset.json";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const palette = [
  { name: "Electric Blue", hex: "#2D6BF0", hsl: "217 · 91% · 55%", usage: "Primary actions, brand accents", swatch: "bg-electric" },
  { name: "Sky Tint", hex: "#E8F2FE", hsl: "204 · 94% · 94%", usage: "Soft backgrounds, highlights", swatch: "bg-sky" },
  { name: "Arctic White", hex: "#F8FAFC", hsl: "210 · 40% · 98%", usage: "Canvas, breathing room", swatch: "bg-background border border-border" },
  { name: "Slate Gray", hex: "#64748B", hsl: "215 · 16% · 47%", usage: "Secondary text, captions", swatch: "bg-slate" },
  { name: "Deep Navy", hex: "#0F1730", hsl: "222 · 47% · 11%", usage: "Headlines, high-contrast surfaces", swatch: "bg-navy" },
];

const Brand = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-grid">
        <div className="light-sphere w-[360px] h-[360px] -top-24 right-0 animate-drift" />
        <div className="container-full relative pt-20 pb-16 md:pt-28 md:pb-20">
          <motion.div {...fadeUp} className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-electric mb-4">
              Brand Guidelines
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-foreground mb-6 leading-[1.02]">
              The Planora identity system
            </h1>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Logo, color, typography, and application rules — everything needed
              to present Planora consistently, everywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Logo */}
      <section className="py-20 md:py-28">
        <div className="container-full">
          <motion.div {...fadeUp} className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-3">Logo</h2>
            <p className="text-muted-foreground max-w-xl">
              The 3D geometric "P" mark paired with rounded typography. Always
              use the official lockup — never redraw or modify it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div {...fadeUp} className="glass-card rounded-2xl p-10 flex items-center justify-center min-h-[260px]">
              <img src={logoAsset.url} alt="Planora logo lockup" className="max-w-xs w-full rounded-lg" />
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="rounded-2xl bg-navy p-10 flex items-center justify-center min-h-[260px] shadow-[0_24px_60px_hsl(222_47%_11%/0.35)]"
            >
              <img src={markAsset.url} alt="Planora P mark" className="w-32 rounded-xl" />
            </motion.div>
          </div>

          {/* Clearspace & rules */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <motion.div {...fadeUp} className="glass-card rounded-2xl p-8">
              <h3 className="font-display text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                <Check className="w-5 h-5 text-electric" /> Do
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>Give the logo clearspace equal to the height of the "P" mark on all sides.</li>
                <li>Use the full lockup on arctic white or sky-tinted backgrounds.</li>
                <li>Use the standalone mark for avatars, favicons, and app icons.</li>
              </ul>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="glass-card rounded-2xl p-8">
              <h3 className="font-display text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                <X className="w-5 h-5 text-destructive" /> Don't
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>Don't stretch, rotate, or recolor the logo outside the brand palette.</li>
                <li>Don't place the lockup on busy imagery without a scrim.</li>
                <li>Don't rebuild the wordmark in a different typeface.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Color palette */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container-full">
          <motion.div {...fadeUp} className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-3">Color</h2>
            <p className="text-muted-foreground max-w-xl">
              Electric blue leads; arctic white and soft slate give it room to
              breathe; deep navy anchors high-contrast moments.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {palette.map((color, index) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <div className={`h-28 ${color.swatch}`} />
                <div className="p-4">
                  <p className="font-display font-bold text-sm text-foreground">{color.name}</p>
                  <p className="text-xs font-mono text-electric mt-1">{color.hex}</p>
                  <p className="text-[11px] text-muted-foreground mt-1">HSL {color.hsl}</p>
                  <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">{color.usage}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-20 md:py-28">
        <div className="container-full">
          <motion.div {...fadeUp} className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-3">Typography</h2>
            <p className="text-muted-foreground max-w-xl">
              Rounded, friendly display type paired with a precise, neutral text
              face — warmth up top, clarity below.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div {...fadeUp} className="glass-card rounded-2xl p-10">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-electric mb-6">Display · Nunito</p>
              <p className="font-display text-5xl font-extrabold text-foreground leading-tight mb-4">
                Empowering modern experiences
              </p>
              <p className="font-display text-2xl font-bold text-muted-foreground">
                Rounded, confident, human.
              </p>
              <p className="text-xs text-muted-foreground mt-6 font-mono">Weights: 700 · 800 · 900</p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="glass-card rounded-2xl p-10">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-electric mb-6">Text · Inter</p>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Planora keeps every touchpoint in sync — from storefront to
                stationery — with a calm, readable voice.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Body copy sets at 14–18px with generous line height for long-form
                clarity across devices.
              </p>
              <p className="text-xs text-muted-foreground mt-6 font-mono">Weights: 400 · 500 · 600</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications gallery */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container-full">
          <motion.div {...fadeUp} className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-3">In application</h2>
            <p className="text-muted-foreground max-w-xl">
              The identity at work across environments, print, and product.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { image: heroArtAsset.url, title: "Brand Artwork", note: "Signature gradient & light sphere" },
              { image: wallAsset.url, title: "Environmental", note: "Backlit dimensional signage" },
              { image: packagingAsset.url, title: "Packaging", note: "Mailer, tote & ID system" },
              { image: stationeryAsset.url, title: "Stationery", note: "Notebooks, cards & letterhead" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={index === 0 ? "md:col-span-3" : ""}
              >
                <TiltCard className="glass-card rounded-2xl overflow-hidden group">
                  <div className={`relative overflow-hidden ${index === 0 ? "aspect-[21/9]" : "aspect-[16/9]"}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.note}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Brand;
