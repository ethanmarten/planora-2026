import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { MiniAppUI } from "./MiniAppUI";

/** Interactive laptop + phone mockup cluster with subtle mouse parallax. */
export const DeviceMockup = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });
  const phoneX = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 20 });
  const phoneY = useSpring(useTransform(my, [-0.5, 0.5], [-8, 8]), { stiffness: 100, damping: 20 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      className="relative perspective-1200 w-full max-w-xl mx-auto"
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      {/* Glow behind devices */}
      <div className="glow-orb w-[130%] h-[110%] -left-[15%] -top-[10%] animate-pulse-glow" />

      {/* Laptop */}
      <motion.div style={{ rotateX, rotateY }} className="relative z-10">
        <div className="rounded-t-2xl border border-border bg-navy p-2 pb-0 shadow-[0_24px_80px_hsl(222_47%_11%/0.35)]">
          <div className="rounded-t-lg overflow-hidden aspect-[16/10] bg-background">
            <MiniAppUI />
          </div>
        </div>
        {/* Laptop base */}
        <div className="h-3.5 rounded-b-2xl bg-gradient-to-b from-secondary to-muted border border-t-0 border-border relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-1.5 rounded-b-lg bg-muted-foreground/20" />
        </div>
      </motion.div>

      {/* Phone */}
      <motion.div
        style={{ x: phoneX, y: phoneY }}
        className="absolute -bottom-10 -right-2 sm:-right-6 z-20 w-28 sm:w-36 animate-float"
      >
        <div className="rounded-[1.75rem] border border-border bg-navy p-1.5 shadow-[0_20px_60px_hsl(217_91%_55%/0.35)]">
          <div className="rounded-[1.35rem] overflow-hidden aspect-[9/19] bg-background relative">
            {/* Notch */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-2.5 rounded-full bg-navy z-10" />
            <MiniAppUI compact />
          </div>
        </div>
      </motion.div>

      {/* Floating metric chip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute -left-3 sm:-left-8 top-8 z-20 glass-card px-4 py-3 animate-float-slow"
      >
        <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground">Uptime</p>
        <p className="font-display text-xl font-extrabold text-foreground">
          99.99<span className="text-electric">%</span>
        </p>
      </motion.div>

      {/* Floating sync chip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.25, duration: 0.6 }}
        className="absolute -left-2 sm:-left-10 bottom-16 z-20 glass-card px-4 py-2.5 flex items-center gap-2.5 animate-float"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-60" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-electric" />
        </span>
        <p className="text-xs font-semibold text-foreground">Synced across 4 devices</p>
      </motion.div>
    </div>
  );
};
