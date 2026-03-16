import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
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
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-primary text-white shadow-[0_10px_24px_-12px_rgba(2,5,186,0.45)] transition hover:-translate-y-0.5 hover:border-white/50 hover:shadow-[0_0_18px_hsl(var(--led-blue)/0.28)]"
      >
        <FaWhatsapp className="h-5 w-5" />
      </a>

      <Link
        to="/contact"
        aria-label="Open contact page"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-primary text-white shadow-[0_10px_24px_-12px_rgba(2,5,186,0.45)] transition hover:-translate-y-0.5 hover:border-white/50 hover:shadow-[0_0_18px_hsl(var(--led-blue)/0.28)]"
      >
        <MessageCircle className="h-5 w-5" />
      </Link>
    </div>
  );
};

export default FloatingContactButton;
