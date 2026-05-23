import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeroBackdropProps = {
  image: string;
  overlayVariant?: "soft" | "deep";
  align?: "left" | "center";
  className?: string;
  minHeight?: string;
  contentMaxWidth?: string;
  children: ReactNode;
};

const HeroBackdrop = ({
  image,
  overlayVariant = "soft",
  align = "left",
  className,
  minHeight = "clamp(380px, 58vh, 560px)",
  contentMaxWidth,
  children,
}: HeroBackdropProps) => {
  const overlayClass = overlayVariant === "deep" ? "hero-overlay-deep" : "hero-overlay-soft";
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div
      className={cn(
        "hero-backdrop relative overflow-hidden rounded-[28px] border border-white/15",
        className,
      )}
      style={{ backgroundImage: `url(${image})` }}
    >
      <span className={cn("absolute inset-0", overlayClass)} />
      <span className="hero-overlay-bloom absolute inset-0" />
      <div
        className={cn("relative z-10 flex p-5 md:p-8 lg:p-9", alignClass)}
        style={{ minHeight, maxWidth: contentMaxWidth }}
      >
        {children}
      </div>
    </div>
  );
};

export default HeroBackdrop;

