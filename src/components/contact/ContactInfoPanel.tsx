import { Mail, MapPin, Phone, Timer } from "lucide-react";
import BentoTile from "@/components/motion/BentoTile";
import ScanlineHeading from "@/components/motion/ScanlineHeading";
import { companyProfile } from "@/lib/company";

const ContactInfoPanel = () => {
  return (
    <BentoTile itemClassName="lg:col-span-5" className="space-y-4">
      <p className="eyebrow">Contact</p>
      <ScanlineHeading as="h1" className="title-lg max-w-[18ch] text-slate-100">
        Book a strategy call and define the right technical path.
      </ScanlineHeading>
      <p className="copy-default text-slate-300">
        Share your goals, constraints, and timeline. We will respond with a practical plan.
      </p>

      <div className="grid gap-2 text-sm text-slate-200">
        <a
          href={`mailto:${companyProfile.supportEmail}`}
          className="ring-cyan flex items-center gap-2 rounded-xl border border-white/20 bg-slate-800/75 p-3 hover:text-cyan-300"
        >
          <Mail className="h-4 w-4 text-cyan-300" /> {companyProfile.supportEmail}
        </a>
        {companyProfile.phoneNumbers.map((item) => (
          <a
            key={item.tel}
            href={`tel:${item.tel}`}
            className="ring-cyan flex items-center gap-2 rounded-xl border border-white/20 bg-slate-800/75 p-3 hover:text-cyan-300"
          >
            <Phone className="h-4 w-4 text-cyan-300" /> {item.label}
          </a>
        ))}
        <p className="flex items-center gap-2 rounded-xl border border-white/20 bg-slate-800/75 p-3">
          <MapPin className="h-4 w-4 text-cyan-300" /> {companyProfile.registeredAddress}
        </p>
        <p className="flex items-center gap-2 rounded-xl border border-white/20 bg-slate-800/75 p-3">
          <Timer className="h-4 w-4 text-cyan-300" /> Monday to Friday, 08:00 to 18:00
        </p>
      </div>
    </BentoTile>
  );
};

export default ContactInfoPanel;

