import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { readConsentState, writeConsentState, type ConsentState } from "@/lib/compliance";

const CookieConsentBanner = () => {
  const [consent, setConsent] = useState<ConsentState>("unset");

  useEffect(() => {
    setConsent(readConsentState());
  }, []);

  if (consent !== "unset") return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-[80] md:inset-x-6">
      <div className="mx-auto w-full max-w-4xl rounded-2xl border border-white/20 bg-slate-900/90 p-4 shadow-[0_16px_45px_-25px_rgba(2,5,186,0.6)] backdrop-blur-xl led-hover md:p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="eyebrow">
              <ShieldCheck className="h-3.5 w-3.5" />
              Cookie Preferences
            </p>
            <p className="copy-default text-slate-200">
              We use minimal analytics cookies to improve product quality. You can accept or decline optional tracking.
              Read our{" "}
              <Link to="/privacy-policy" className="ring-cyan underline underline-offset-4 hover:text-cyan-200">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to="/terms-of-service" className="ring-cyan underline underline-offset-4 hover:text-cyan-200">
                Terms
              </Link>
              .
            </p>
          </div>

          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => {
                writeConsentState("declined");
                setConsent("declined");
              }}
              className="ring-cyan ring-led rounded-xl border border-white/25 bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-700"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => {
                writeConsentState("accepted");
                setConsent("accepted");
              }}
              className="ring-cyan ring-led rounded-xl border border-cyan-300/45 bg-cyan-300/18 px-4 py-2 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-300/28"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
