import { useEffect } from "react";
import {
  CONSENT_CHANGE_EVENT,
  canLoadAnalytics,
  readConsentState,
  type ConsentState,
} from "@/lib/compliance";

declare global {
  interface Window {
    dataLayer?: unknown[];
    clarity?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    requestIdleCallback?: (cb: () => void) => void;
  }
}

const GOOGLE_SCRIPT_ID = "juveniq-ga-script";
const PLAUSIBLE_SCRIPT_ID = "juveniq-plausible-script";
const GA_CONFIG_SCRIPT_ID = "juveniq-ga-config";
const CLARITY_SCRIPT_ID = "juveniq-clarity-script";
const META_PIXEL_SCRIPT_ID = "juveniq-meta-pixel-script";
const GOOGLE_ADS_CONFIG_ID = "juveniq-google-ads-config";

const getProvider = () => (import.meta.env.VITE_ANALYTICS_PROVIDER ?? "ga").toLowerCase();
const getGaId = () => import.meta.env.VITE_GA_MEASUREMENT_ID ?? "G-8T55SZBTEH";
const getPlausibleDomain = () => import.meta.env.VITE_PLAUSIBLE_DOMAIN ?? "";
const getClarityId = () => import.meta.env.VITE_CLARITY_PROJECT_ID ?? "";
const getMetaPixelId = () => import.meta.env.VITE_META_PIXEL_ID ?? "";
const getGoogleAdsId = () => import.meta.env.VITE_GOOGLE_ADS_ID ?? "";

const runIdle = (fn: () => void) => {
  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(fn);
    return;
  }
  window.setTimeout(fn, 0);
};

const loadGoogleAnalytics = (measurementId: string) => {
  if (!measurementId || document.getElementById(GOOGLE_SCRIPT_ID)) return;

  const libScript = document.createElement("script");
  libScript.id = GOOGLE_SCRIPT_ID;
  libScript.async = true;
  libScript.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(libScript);

  const configScript = document.createElement("script");
  configScript.id = GA_CONFIG_SCRIPT_ID;
  configScript.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `;
  document.head.appendChild(configScript);
};

const loadPlausible = (domain: string) => {
  if (!domain || document.getElementById(PLAUSIBLE_SCRIPT_ID)) return;
  const plausible = document.createElement("script");
  plausible.id = PLAUSIBLE_SCRIPT_ID;
  plausible.defer = true;
  plausible.setAttribute("data-domain", domain);
  plausible.src = "https://plausible.io/js/script.js";
  document.head.appendChild(plausible);
};

const loadClarity = (projectId: string) => {
  if (!projectId || document.getElementById(CLARITY_SCRIPT_ID)) return;

  ((c: Window, l: Document, a: string, r: string, i: string) => {
    (c as Window & Record<string, unknown>)[a] =
      (c as Window & Record<string, unknown>)[a] ||
      ((...args: unknown[]) => {
        (((c as Window & Record<string, unknown>)[a] as { q?: unknown[] }).q =
          ((c as Window & Record<string, unknown>)[a] as { q?: unknown[] }).q || []).push(args);
      });

    const t = l.createElement(r);
    t.id = CLARITY_SCRIPT_ID;
    t.setAttribute("async", "true");
    t.setAttribute("src", `https://www.clarity.ms/tag/${i}`);
    const y = l.getElementsByTagName(r)[0];
    y.parentNode?.insertBefore(t, y);
  })(window, document, "clarity", "script", projectId);
};

const loadMetaPixel = (pixelId: string) => {
  if (!pixelId || document.getElementById(META_PIXEL_SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = META_PIXEL_SCRIPT_ID;
  script.async = true;
  script.text = `
    !function(f,b,e,v,n,t,s){
      if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
      t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)
    }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${pixelId}');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);
};

const loadGoogleAdsConfig = (adsId: string) => {
  if (!adsId || document.getElementById(GOOGLE_ADS_CONFIG_ID)) return;
  const script = document.createElement("script");
  script.id = GOOGLE_ADS_CONFIG_ID;
  script.text = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('config', '${adsId}');
  `;
  document.head.appendChild(script);
};

const AnalyticsLoader = () => {
  useEffect(() => {
    const sync = (state: ConsentState) => {
      if (!canLoadAnalytics(state)) return;
      const provider = getProvider();
      if (provider === "plausible") {
        loadPlausible(getPlausibleDomain());
      } else {
        loadGoogleAnalytics(getGaId());
      }

      runIdle(() => loadClarity(getClarityId()));
      runIdle(() => loadMetaPixel(getMetaPixelId()));
      runIdle(() => loadGoogleAdsConfig(getGoogleAdsId()));
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
