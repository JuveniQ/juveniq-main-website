import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type BentoGridProps = {
  children: ReactNode;
  className?: string;
};

const BentoGrid = ({ children, className }: BentoGridProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduceMotion ? 0 : 0.05,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
};

export default BentoGrid;

