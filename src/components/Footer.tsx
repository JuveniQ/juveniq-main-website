import { Link } from "react-router-dom";
import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { companyProfile, socialLinks } from "@/lib/company";

const socialIcons = {
  Facebook,
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram,
} as const;

const Footer = () => {
  return (
    <footer className="footer-shell text-white">
      <div className="section-shell pb-10">
        <div className="grid gap-8 border-t border-white/20 pt-8 md:grid-cols-4">
          <section className="space-y-4 md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="inline-flex rounded-lg border border-white/30 bg-white/10 px-2 py-1">
                <BrandLogo variant="darkBg" size="lg" />
              </span>
              <span className="text-xl font-bold text-white" aria-label="JuveniQ">
                Juveni
                <span className="font-quando font-normal">Q</span>
              </span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              Building practical AI and software systems for African businesses, local teams, and
              enterprise operations that need reliable digital execution.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((item) => {
                const Icon = socialIcons[item.label];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="ring-cyan led-hover inline-flex rounded-lg border border-white/20 bg-white/10 p-2 text-white/70 transition-colors hover:border-cyan-300/45 hover:text-cyan-200"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </section>

          <section className="space-y-3 text-sm text-white/70">
            <h3 className="font-semibold text-white">Navigation</h3>
            <div className="grid gap-1">
              <Link to="/about" className="ring-cyan rounded px-1 py-1 hover:text-cyan-200">
                About
              </Link>
              <Link to="/process" className="ring-cyan rounded px-1 py-1 hover:text-cyan-200">
                Process
              </Link>
              <Link to="/case-studies" className="ring-cyan rounded px-1 py-1 hover:text-cyan-200">
                Case Studies
              </Link>
              <Link to="/articles" className="ring-cyan rounded px-1 py-1 hover:text-cyan-200">
                Articles
              </Link>
              <Link to="/contact" className="ring-cyan rounded px-1 py-1 hover:text-cyan-200">
                Contact
              </Link>
              <Link to="/privacy-policy" className="ring-cyan rounded px-1 py-1 hover:text-cyan-200">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="ring-cyan rounded px-1 py-1 hover:text-cyan-200">
                Terms of Service
              </Link>
            </div>
          </section>

          <section className="space-y-3 text-sm text-white/70">
            <h3 className="font-semibold text-white">Contact</h3>
            {companyProfile.phoneNumbers.map((item) => (
              <a
                key={item.tel}
                href={`tel:${item.tel}`}
                className="ring-cyan flex items-center gap-2 rounded px-1 py-1 hover:text-cyan-200"
              >
                <Phone className="h-4 w-4" /> {item.label}
              </a>
            ))}
            <a
              href={`mailto:${companyProfile.supportEmail}`}
              className="ring-cyan flex items-center gap-2 rounded px-1 py-1 hover:text-cyan-200"
            >
              <Mail className="h-4 w-4" /> {companyProfile.supportEmail}
            </a>
            <p className="flex items-center gap-2 px-1 py-1 text-white/60">
              <MapPin className="h-4 w-4" /> {companyProfile.registeredAddress}
            </p>
          </section>
        </div>

        <div className="mt-6 rounded-xl border border-white/20 bg-white/10 p-4 text-xs text-white/70">
          <p className="font-semibold text-white">Company Disclosure</p>
          <p className="mt-1">Legal Company Name: {companyProfile.legalName}</p>
          <p>Registration Number: {companyProfile.registrationNumber}</p>
          <p>Registered Address: {companyProfile.registeredAddress}</p>
        </div>

        <div className="mt-8 border-t border-white/20 pt-4 text-center text-xs text-white/60">
          Copyright 2026 Juveni
          <span className="font-quando font-normal">Q</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

