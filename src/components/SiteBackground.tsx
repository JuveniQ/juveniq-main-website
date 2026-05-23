import { cn } from "@/lib/utils";

type SiteBackgroundProps = {
  intensity?: "low" | "medium";
  showLines?: boolean;
  showNodes?: boolean;
  showCode?: boolean;
};

const SiteBackground = ({
  intensity = "medium",
  showLines = true,
  showNodes = true,
  showCode = true,
}: SiteBackgroundProps) => {
  return (
    <div
      aria-hidden
      className={cn(
        "site-background pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        intensity === "low" ? "site-background-low" : "site-background-medium",
      )}
    >
      <span className="site-bg-layer site-bg-base" />
      <span className="site-bg-layer site-bg-grid" />
      {showLines && <span className="site-bg-layer site-bg-lines" />}
      {showNodes && <span className="site-bg-layer site-bg-nodes" />}
      {showCode && <span className="site-bg-layer site-bg-code" />}
      <span className="site-bg-layer site-bg-white-glow" />
      <span className="site-bg-layer site-bg-led-lines" />
    </div>
  );
};

export default SiteBackground;

