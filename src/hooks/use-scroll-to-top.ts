import { useEffect } from "react";

export const scrollViewportToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

/**
 * Scrolls the viewport to the top when the component mounts.
 */
export const useScrollToTop = () => {
  useEffect(() => {
    scrollViewportToTop();
  }, []);
};
