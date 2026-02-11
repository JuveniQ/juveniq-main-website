const GOOGLE_SCRIPT_ID = "juveniq-ga-script";
const PLAUSIBLE_SCRIPT_ID = "juveniq-plausible-script";
const GA_CONFIG_SCRIPT_ID = "juveniq-ga-config";
const CLARITY_SCRIPT_ID = "juveniq-clarity-script";
const META_PIXEL_SCRIPT_ID = "juveniq-meta-pixel-script";
const GOOGLE_ADS_CONFIG_ID = "juveniq-google-ads-config";

type AnalyticsProvider = "ga" | "plausible";

const insertedScriptRegistry = new Set<string>();

declare global {
  interface Window {
    dataLayer?: unknown[];
    clarity?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
  }
}

const canUseDom = () => typeof window !== "undefined" && typeof document !== "undefined";

const hasScript = (id: string) =>
  insertedScriptRegistry.has(id) || Boolean(document.getElementById(id));

const markScriptInserted = (id: string) => {
  insertedScriptRegistry.add(id);
};

/**
 * Defers non-critical tracking setup so initial interaction/rendering is not blocked.
 */
export const runWhenIdle = (callback: () => void) => {
  if (!canUseDom()) return;
  try {
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(() => callback());
      return;
    }
  } catch {
    // Intentionally empty: fall back to setTimeout below.
  }

  window.setTimeout(callback, 0);
};

const appendScriptToHead = (scriptElement: HTMLScriptElement, id: string) => {
  document.head.appendChild(scriptElement);
  markScriptInserted(id);
};

const appendInlineScriptToHead = (scriptElement: HTMLScriptElement, id: string) => {
  document.head.appendChild(scriptElement);
  markScriptInserted(id);
};

const loadGoogleAnalytics = (measurementId: string) => {
  if (!canUseDom() || !measurementId || hasScript(GOOGLE_SCRIPT_ID)) return;

  try {
    const libraryScript = document.createElement("script");
    libraryScript.id = GOOGLE_SCRIPT_ID;
    libraryScript.async = true;
    libraryScript.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    appendScriptToHead(libraryScript, GOOGLE_SCRIPT_ID);

    if (!hasScript(GA_CONFIG_SCRIPT_ID)) {
      const configScript = document.createElement("script");
      configScript.id = GA_CONFIG_SCRIPT_ID;
      configScript.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}');
      `;
      appendInlineScriptToHead(configScript, GA_CONFIG_SCRIPT_ID);
    }
  } catch {
    // Ignore analytics failures to avoid impacting app runtime.
  }
};

const loadPlausible = (domain: string) => {
  if (!canUseDom() || !domain || hasScript(PLAUSIBLE_SCRIPT_ID)) return;

  try {
    const plausibleScript = document.createElement("script");
    plausibleScript.id = PLAUSIBLE_SCRIPT_ID;
    plausibleScript.defer = true;
    plausibleScript.setAttribute("data-domain", domain);
    plausibleScript.src = "https://plausible.io/js/script.js";
    appendScriptToHead(plausibleScript, PLAUSIBLE_SCRIPT_ID);
  } catch {
    // Ignore analytics failures to avoid impacting app runtime.
  }
};

export const loadPrimaryAnalytics = (config: {
  provider: AnalyticsProvider;
  gaMeasurementId: string;
  plausibleDomain: string;
}) => {
  try {
    if (config.provider === "plausible") {
      loadPlausible(config.plausibleDomain);
      return;
    }
    loadGoogleAnalytics(config.gaMeasurementId);
  } catch {
    // Ignore analytics failures to avoid impacting app runtime.
  }
};

export const loadClarity = (projectId: string) => {
  if (!canUseDom() || !projectId || hasScript(CLARITY_SCRIPT_ID)) return;

  try {
    ((c: Window, l: Document, a: string, r: string, i: string) => {
      (c as Window & Record<string, unknown>)[a] =
        (c as Window & Record<string, unknown>)[a] ||
        ((...args: unknown[]) => {
          (((c as Window & Record<string, unknown>)[a] as { q?: unknown[] }).q =
            ((c as Window & Record<string, unknown>)[a] as { q?: unknown[] }).q || []).push(args);
        });

      const script = l.createElement(r);
      script.id = CLARITY_SCRIPT_ID;
      script.setAttribute("async", "true");
      script.setAttribute("src", `https://www.clarity.ms/tag/${i}`);
      const firstScript = l.getElementsByTagName(r)[0];
      if (firstScript?.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      } else {
        l.head.appendChild(script);
      }
      markScriptInserted(CLARITY_SCRIPT_ID);
    })(window, document, "clarity", "script", projectId);
  } catch {
    // Ignore analytics failures to avoid impacting app runtime.
  }
};

export const loadMetaPixel = (pixelId: string) => {
  if (!canUseDom() || !pixelId || hasScript(META_PIXEL_SCRIPT_ID)) return;

  try {
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
    appendInlineScriptToHead(script, META_PIXEL_SCRIPT_ID);
  } catch {
    // Ignore analytics failures to avoid impacting app runtime.
  }
};

export const loadGoogleAdsConfig = (adsId: string) => {
  if (!canUseDom() || !adsId || hasScript(GOOGLE_ADS_CONFIG_ID)) return;

  try {
    const script = document.createElement("script");
    script.id = GOOGLE_ADS_CONFIG_ID;
    script.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('config', '${adsId}');
    `;
    appendInlineScriptToHead(script, GOOGLE_ADS_CONFIG_ID);
  } catch {
    // Ignore analytics failures to avoid impacting app runtime.
  }
};
