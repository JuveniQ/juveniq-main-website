import { useEffect, useState } from "react";

type PointerCapability = {
  hasFinePointer: boolean;
};

/**
 * Tracks pointer capabilities (e.g. desktop fine pointer) for interaction features
 * that should not run on touch-only devices.
 */
export const usePointerCapability = (): PointerCapability => {
  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updateCapability = () => setHasFinePointer(mediaQuery.matches);

    updateCapability();
    mediaQuery.addEventListener("change", updateCapability);
    return () => mediaQuery.removeEventListener("change", updateCapability);
  }, []);

  return { hasFinePointer };
};

