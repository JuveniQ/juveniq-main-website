import { impactStats } from "@/lib/data";
import { cn } from "@/lib/utils";

type MetricsBandProps = {
  variant?: "home" | "default";
};

const MetricsBand = ({ variant = "default" }: MetricsBandProps) => {
  return (
    <div className={cn("section-shell", variant === "home" ? "" : "mb-6")}>
      <div className="glass-soft grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-4">
        {impactStats.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-white/20 bg-slate-800/80 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
          >
            <p className="text-2xl font-bold text-cyan-300">{item.value}</p>
            <p className="meta-chip mt-1 text-slate-200/90">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsBand;

