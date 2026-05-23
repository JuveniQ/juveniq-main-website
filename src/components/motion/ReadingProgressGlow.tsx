import { motion, useScroll, useSpring } from "framer-motion";

const ReadingProgressGlow = () => {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.25,
  });

  return <motion.div className="progress-glow" style={{ scaleX: smooth }} />;
};

export default ReadingProgressGlow;

