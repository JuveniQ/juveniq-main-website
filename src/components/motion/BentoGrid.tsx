import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

type BentoGridProps = {
  children: ReactNode;
  className?: string;
};

const BentoGrid = ({ children, className }: BentoGridProps) => {
  const reduceMotion = useReducedMotion();
  const variants = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: reduceMotion ? 0 : 0.05,
        },
      },
    }),
    [reduceMotion],
  );
  const viewport = useMemo(() => ({ once: true, amount: 0.15 }), []);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
};

export default BentoGrid;

