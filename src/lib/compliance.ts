export type ConsentState = "accepted" | "declined" | "unset";

export const CONSENT_STORAGE_KEY = "juveniq_cookie_consent";
export const CONSENT_CHANGE_EVENT = "juveniq-consent-changed";

export const readConsentState = (): ConsentState => {
  if (typeof window === "undefined") return "unset";
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (raw === "accepted" || raw === "declined") return raw;
  } catch {
    return "unset";
  }
  return "unset";
};

export const writeConsentState = (state: Exclude<ConsentState, "unset">) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, state);
    window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: state }));
  } catch {
    // Ignore storage failures (private mode / blocked storage) without crashing UI.
  }
};

export const canLoadAnalytics = (state: ConsentState) => state === "accepted";
