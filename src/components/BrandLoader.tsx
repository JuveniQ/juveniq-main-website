import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type BrandLoaderProps = {
  onComplete: () => void;
};

const MIN_TIME = 3000;
const MAX_TIME = 3600;

const BrandLoader = ({ onComplete }: BrandLoaderProps) => {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  const duration = MIN_TIME;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
      onComplete();
    }, duration);

    const failSafe = window.setTimeout(() => {
      setVisible(false);
      onComplete();
    }, MAX_TIME);

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(failSafe);
    };
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="brand-loader"
          className="fixed inset-0 z-[120] overflow-hidden bg-slate-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.18 : 0.4, ease: "easeOut" }}
          aria-hidden
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.14),transparent_48%),radial-gradient(circle_at_84%_10%,rgba(56,189,248,0.08),transparent_38%)]" />
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(34,211,238,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.15)_1px,transparent_1px)] [background-size:46px_46px]" />

          <div className="relative z-10 flex h-full items-center justify-center px-6">
            <div className="relative w-full max-w-lg text-center text-white">
              <motion.div
                className="mx-auto h-20 w-20 rounded-full border border-cyan-300/35 bg-cyan-300/10 blur-[1px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={reduceMotion ? { opacity: 0.7, scale: 1 } : { opacity: [0.5, 0.9, 0.6], scale: [0.92, 1.03, 1] }}
                transition={{
                  duration: reduceMotion ? 0.28 : 2.2,
                  ease: "easeInOut",
                  repeat: reduceMotion ? 0 : Infinity,
                }}
              />

              <motion.img
                src="/JIQ_white_logo_no_bg.png"
                alt="JuveniQ"
                className="mx-auto -mt-14 h-20 w-auto md:h-24"
                initial={{ opacity: 0, y: reduceMotion ? 0 : 14, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: reduceMotion ? 0.2 : 0.52, ease: [0.22, 1, 0.36, 1] }}
              />

              <motion.p
                className="mt-3 font-mono text-xs uppercase tracking-[0.26em] text-cyan-200/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: reduceMotion ? 0 : 0.2, duration: 0.35 }}
              >
                Initializing Interface
              </motion.p>

              <motion.div
                className="relative mx-auto mt-5 h-px w-56 overflow-hidden bg-cyan-200/25"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: reduceMotion ? 0 : 0.28, duration: 0.3 }}
              >
                <motion.span
                  className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-transparent via-cyan-200/90 to-transparent"
                  initial={{ x: "-50%" }}
                  animate={{ x: "180%" }}
                  transition={{
                    duration: reduceMotion ? 0.55 : 1.4,
                    ease: "easeOut",
                    repeat: reduceMotion ? 0 : Infinity,
                  }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BrandLoader;

