import { useEffect } from "react";
import {
  CONSENT_CHANGE_EVENT,
  canLoadAnalytics,
  readConsentState,
  type ConsentState,
} from "@/lib/compliance";
import {
  loadClarity,
  loadGoogleAdsConfig,
  loadMetaPixel,
  loadPrimaryAnalytics,
  runWhenIdle,
} from "@/lib/analytics/loaders";

const getProvider = () => (import.meta.env.VITE_ANALYTICS_PROVIDER ?? "ga").toLowerCase();
const getGaId = () => import.meta.env.VITE_GA_MEASUREMENT_ID ?? "G-8T55SZBTEH";
const getPlausibleDomain = () => import.meta.env.VITE_PLAUSIBLE_DOMAIN ?? "";
const getClarityId = () => import.meta.env.VITE_CLARITY_PROJECT_ID ?? "";
const getMetaPixelId = () => import.meta.env.VITE_META_PIXEL_ID ?? "";
const getGoogleAdsId = () => import.meta.env.VITE_GOOGLE_ADS_ID ?? "";

const AnalyticsLoader = () => {
  useEffect(() => {
    const sync = (state: ConsentState) => {
      if (!canLoadAnalytics(state)) return;
      loadPrimaryAnalytics({
        provider: getProvider() === "plausible" ? "plausible" : "ga",
        gaMeasurementId: getGaId(),
        plausibleDomain: getPlausibleDomain(),
      });
      runWhenIdle(() => loadClarity(getClarityId()));
      runWhenIdle(() => loadMetaPixel(getMetaPixelId()));
      runWhenIdle(() => loadGoogleAdsConfig(getGoogleAdsId()));
    };

    sync(readConsentState());

    const handleConsentChange = (event: Event) => {
      const customEvent = event as CustomEvent<ConsentState>;
      sync(customEvent.detail ?? readConsentState());
    };

    const handleStorage = () => sync(readConsentState());

    window.addEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return null;
};

export default AnalyticsLoader;
