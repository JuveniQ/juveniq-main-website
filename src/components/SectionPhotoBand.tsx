import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionPhotoBandProps = {
  image: string;
  overlayVariant?: "dark" | "light";
  align?: "left" | "center";
  minHeight?: string;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
};

const SectionPhotoBand = ({
  image,
  overlayVariant = "dark",
  align = "left",
  minHeight = "clamp(280px, 48vh, 520px)",
  className,
  contentClassName,
  children,
}: SectionPhotoBandProps) => {
  const overlayClass = overlayVariant === "light" ? "photo-band-overlay-light" : "photo-band-overlay-dark";
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";
  const textClass = overlayVariant === "light" ? "text-foreground" : "text-white";

  return (
    <section
      className={cn("photo-band relative w-full overflow-hidden", className)}
      style={{ backgroundImage: `url(${image})`, minHeight }}
    >
      <span className={cn("photo-band-overlay absolute inset-0", overlayClass)} aria-hidden />
      <div className={cn("section-shell relative z-10 flex py-12 md:py-16", alignClass, textClass, contentClassName)}>
        {children}
      </div>
    </section>
  );
};

export default SectionPhotoBand;
