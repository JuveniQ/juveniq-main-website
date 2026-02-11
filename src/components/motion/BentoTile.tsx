import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import BorderFollowCard from "./BorderFollowCard";

type BentoTileProps = {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  role?: "region" | "group" | "article";
  ariaLabel?: string;
};

const BentoTile = ({ children, className, itemClassName, role, ariaLabel }: BentoTileProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("min-w-0", itemClassName)}
      role={role}
      aria-label={ariaLabel}
      variants={{
        hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: reduceMotion ? 0.2 : 0.45,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      <BorderFollowCard className={cn("glass-tile", className)}>{children}</BorderFollowCard>
    </motion.div>
  );
};

export default BentoTile;

