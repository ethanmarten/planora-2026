import { cn } from "@/lib/utils";

interface MiniAppUIProps {
  compact?: boolean;
  className?: string;
}

/** A miniature Planora dashboard UI rendered in pure CSS for device mockups. */
export const MiniAppUI = ({ compact = false, className }: MiniAppUIProps) => {
  const bars = [42, 68, 50, 82, 58, 92, 74, 88, 64, 96, 78, 100];

  return (
    <div className={cn("flex h-full w-full bg-background text-foreground overflow-hidden", className)}>
      {/* Sidebar */}
      <div className={cn("flex flex-col bg-navy shrink-0", compact ? "w-8 p-1.5 gap-1.5" : "w-16 p-3 gap-3")}>
        <div className={cn("rounded-md bg-electric", compact ? "w-4 h-4" : "w-7 h-7")} />
        {[0.9, 0.6, 0.75, 0.5].map((o, i) => (
          <div
            key={i}
            className={cn("rounded-full bg-primary-foreground", compact ? "h-1" : "h-1.5")}
            style={{ opacity: o * 0.4, width: `${70 + i * 8}%` }}
          />
        ))}
        <div className="mt-auto">
          <div className={cn("rounded-full bg-electric/40", compact ? "w-4 h-4" : "w-7 h-7")} />
        </div>
      </div>

      {/* Main panel */}
      <div className={cn("flex-1 flex flex-col", compact ? "p-2 gap-1.5" : "p-4 gap-3")}>
        {/* Topbar */}
        <div className={cn("flex items-center justify-between", compact ? "mb-0" : "mb-1")}>
          <div className={cn("rounded-full bg-muted", compact ? "h-1.5 w-10" : "h-2.5 w-24")} />
          <div className="flex items-center gap-1.5">
            <div className={cn("rounded-full bg-accent", compact ? "h-2.5 w-6" : "h-5 w-14")} />
            <div className={cn("rounded-full bg-electric", compact ? "h-2.5 w-6" : "h-5 w-14")} />
          </div>
        </div>

        {/* Stat cards */}
        <div className={cn("grid grid-cols-3", compact ? "gap-1" : "gap-2.5")}>
          {[
            { tone: "bg-electric/15", dot: "bg-electric" },
            { tone: "bg-accent", dot: "bg-electric-light" },
            { tone: "bg-muted", dot: "bg-electric-deep" },
          ].map((c, i) => (
            <div key={i} className={cn("rounded-lg", c.tone, compact ? "p-1.5" : "p-3")}>
              <div className={cn("rounded-full", c.dot, compact ? "w-1.5 h-1.5 mb-1" : "w-2.5 h-2.5 mb-2")} />
              <div className={cn("rounded-full bg-foreground/70", compact ? "h-1 w-3/4" : "h-1.5 w-3/4")} />
              <div className={cn("rounded-full bg-foreground/25 mt-1", compact ? "h-1 w-1/2" : "h-1.5 w-1/2")} />
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className={cn("flex-1 rounded-lg border border-border bg-card flex items-end", compact ? "p-1.5 gap-0.5" : "p-3 gap-1.5")}>
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end h-full">
              <div
                className={cn(
                  "rounded-sm",
                  i === bars.length - 1 ? "bg-electric" : i % 3 === 0 ? "bg-electric-light/70" : "bg-electric/25"
                )}
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>

        {/* List rows */}
        {!compact && (
          <div className="space-y-2">
            {[0, 1].map((i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-accent shrink-0" />
                <div className="flex-1 space-y-1">
                  <div className="h-1.5 rounded-full bg-foreground/50 w-2/3" />
                  <div className="h-1.5 rounded-full bg-foreground/20 w-1/3" />
                </div>
                <div className="h-4 w-10 rounded-full bg-electric/20" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
