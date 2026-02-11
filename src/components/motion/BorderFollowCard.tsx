import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BorderFollowCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

const BorderFollowCard = ({ children, className, ...props }: BorderFollowCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const setMatches = () => setEnabled(media.matches);
    setMatches();
    media.addEventListener("change", setMatches);
    return () => media.removeEventListener("change", setMatches);
  }, []);

  const glowStyle = useMemo(
    () => ({
      "--x": "50%",
      "--y": "50%",
    }) as CSSProperties,
    [],
  );

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    ref.current.style.setProperty("--x", `${x}%`);
    ref.current.style.setProperty("--y", `${y}%`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn(
        "group led-hover relative overflow-hidden rounded-2xl border border-white/20 bg-slate-900/75 backdrop-blur-xl transition-colors duration-200",
        className,
      )}
      style={glowStyle}
      {...props}
    >
      {enabled && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at var(--x) var(--y), rgba(30,226,255,0.28), transparent 24%)",
            mask: "linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff)",
            WebkitMask:
              "linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff)",
            padding: "1px",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      )}
      {children}
    </div>
  );
};

export default BorderFollowCard;

