import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type ScanlineHeadingProps = {
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: ReactNode;
};

const ScanlineHeading = ({ as = "h1", className, children }: ScanlineHeadingProps) => {
  const reduceMotion = useReducedMotion();
  const Tag = as;

  if (reduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <div className="relative overflow-hidden">
      <motion.span
        className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-transparent via-cyan-300/25 to-transparent"
        initial={{ y: "-120%" }}
        animate={{ y: "140%" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0 0 0% 0)" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Tag className={cn("relative z-10", className)}>{children}</Tag>
      </motion.div>
    </div>
  );
};

export default ScanlineHeading;

