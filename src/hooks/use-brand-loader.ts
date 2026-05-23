import { useCallback, useState } from "react";

export const useBrandLoaderState = () => {
  // Always show loader on a hard refresh/new tab load.
  const [isBootReady, setIsBootReady] = useState(false);

  const markBootComplete = useCallback(() => {
    setIsBootReady(true);
  }, []);

  return { isBootReady, markBootComplete };
};

