import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  className?: string;
  radius?: number;
  strength?: number;
  children: React.ReactNode;
};

const MagneticButton = ({
  className,
  radius = 30,
  strength = 12,
  children,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(media.matches && !reduceMotion);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [reduceMotion]);

  useEffect(() => {
    if (!enabled) return;
    const handleMove = (event: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;
      const isNear =
        Math.abs(dx) <= rect.width / 2 + radius &&
        Math.abs(dy) <= rect.height / 2 + radius;

      if (!isNear) {
        setPoint({ x: 0, y: 0 });
        return;
      }

      const moveX = (dx / (rect.width / 2 + radius)) * strength;
      const moveY = (dy / (rect.height / 2 + radius)) * strength;
      setPoint({ x: moveX, y: moveY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [enabled, radius, strength]);

  return (
    <motion.div
      ref={ref}
      className={cn("inline-flex", className)}
      animate={{ x: point.x, y: point.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;

