import { useCallback, useState } from "react";

const INTRO_KEY = "juveniq_intro_seen";

export const useBrandLoaderState = () => {
  const [isBootReady, setIsBootReady] = useState(() => {
    if (typeof window === "undefined") return true;
    return sessionStorage.getItem(INTRO_KEY) === "true";
  });

  const markBootComplete = useCallback(() => {
    sessionStorage.setItem(INTRO_KEY, "true");
    setIsBootReady(true);
  }, []);

  return { isBootReady, markBootComplete };
};

