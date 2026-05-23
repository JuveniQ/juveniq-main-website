import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant: "lightBg" | "darkBg";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClassMap = {
  sm: "h-6",
  md: "h-7",
  lg: "h-8",
} as const;

const BrandLogo = ({ variant, size = "md", className }: BrandLogoProps) => {
  const src = variant === "lightBg" ? "/JIQ_black_logo_no_bg.png" : "/JIQ_white_logo_no_bg.png";

  return (
    <img
      src={src}
      alt="JuveniQ logo"
      className={cn("w-auto", sizeClassMap[size], className)}
      loading="eager"
      decoding="async"
    />
  );
};

export default BrandLogo;

