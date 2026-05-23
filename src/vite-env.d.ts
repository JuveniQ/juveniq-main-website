/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_PLAUSIBLE_DOMAIN?: string;
  readonly VITE_ANALYTICS_PROVIDER?: "ga" | "plausible";
  readonly VITE_CLARITY_PROJECT_ID?: string;
  readonly VITE_META_PIXEL_ID?: string;
  readonly VITE_GOOGLE_ADS_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
