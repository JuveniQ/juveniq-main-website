import { MessageCircle, PhoneCall } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { companyProfile } from "@/lib/company";

const FloatingContactButton = () => {
  const location = useLocation();
  if (location.pathname === "/contact") return null;

  const primaryPhone = companyProfile.phoneNumbers[0]?.tel ?? "27607431268";
  const prefilled = encodeURIComponent("Hi JuveniQ, I would like to discuss a project.");
  const whatsappHref = `https://wa.me/${primaryPhone.replace("+", "")}?text=${prefilled}`;

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col gap-2">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp chat with JuveniQ"
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-900/85 text-cyan-200 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-cyan-300/60 hover:text-cyan-100 shadow-[0_0_0_1px_rgba(34,211,238,0.18),0_0_18px_rgba(34,211,238,0.20)]"
      >
        <PhoneCall className="h-5 w-5" />
      </a>

      <Link
        to="/contact"
        aria-label="Open contact page"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/35 bg-slate-900/85 text-cyan-200 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-cyan-300/60 hover:text-cyan-100 shadow-[0_0_0_1px_rgba(34,211,238,0.16),0_0_16px_rgba(34,211,238,0.16)]"
      >
        <MessageCircle className="h-5 w-5" />
      </Link>
    </div>
  );
};

export default FloatingContactButton;
