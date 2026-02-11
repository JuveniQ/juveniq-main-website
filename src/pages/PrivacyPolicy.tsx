import { useEffect } from "react";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";
import ScanlineHeading from "@/components/motion/ScanlineHeading";
import { companyProfile } from "@/lib/company";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="site-shell section-pad">
      <section className="section-shell">
        <BentoGrid className="grid gap-4">
          <BentoTile className="space-y-4">
            <p className="eyebrow">Legal</p>
            <ScanlineHeading as="h1" className="title-lg max-w-[20ch] text-slate-100">
              Privacy Policy
            </ScanlineHeading>
            <p className="copy-default text-slate-300">
              Effective Date: 10 February 2026
            </p>
            <p className="copy-default text-slate-300">
              {companyProfile.legalName} (registered {companyProfile.registrationNumber}) was founded on 06 June 2025.
              This policy explains how we collect, use, store, and protect personal information when providing software engineering,
              AI workflow integration, and technology consulting services.
            </p>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell section-pad">
        <BentoGrid className="grid gap-4 md:grid-cols-2">
          <BentoTile className="space-y-3">
            <h2 className="text-2xl text-slate-100">1. Data We Collect</h2>
            <ul className="copy-default list-disc space-y-2 pl-5 text-slate-300">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business information submitted through contact forms</li>
              <li>Website usage analytics</li>
            </ul>
          </BentoTile>
          <BentoTile className="space-y-3">
            <h2 className="text-2xl text-slate-100">2. How We Use Data</h2>
            <ul className="copy-default list-disc space-y-2 pl-5 text-slate-300">
              <li>Respond to enquiries</li>
              <li>Deliver services</li>
              <li>Communicate with clients</li>
              <li>Monitor website performance</li>
            </ul>
          </BentoTile>
          <BentoTile className="space-y-3">
            <h2 className="text-2xl text-slate-100">3. POPIA and Legal Basis</h2>
            <p className="copy-default text-slate-300">
              We process personal information in line with the Protection of Personal Information Act (POPIA) and
              applicable South African law. We apply purpose limitation, data minimization, and security safeguards.
              Users must be 18 years or older to enter into paid service agreements.
            </p>
          </BentoTile>
          <BentoTile className="space-y-3">
            <h2 className="text-2xl text-slate-100">4. Security, Cookies, and Analytics</h2>
            <p className="copy-default text-slate-300">
              We enforce HTTPS/SSL and secure form handling controls. Optional analytics cookies are loaded only after consent.
              Analytics is provided through {companyProfile.providers.analytics}.
            </p>
          </BentoTile>
          <BentoTile className="space-y-3">
            <h2 className="text-2xl text-slate-100">5. Retention and Service Infrastructure</h2>
            <p className="copy-default text-slate-300">
              We retain data only as long as necessary for service delivery and legal compliance under South African law.
              Our core infrastructure providers are {companyProfile.providers.hosting} (hosting), {companyProfile.providers.domainRegistrar} (domain registrar),
              and {companyProfile.providers.email} (email). We do not sell personal information.
            </p>
          </BentoTile>
          <BentoTile className="space-y-3">
            <h2 className="text-2xl text-slate-100">6. Your Rights and Contact</h2>
            <p className="copy-default text-slate-300">
              You may request access, correction, or deletion of your personal information, subject to legal and contractual requirements.
              For privacy and legal requests, contact us at {companyProfile.privacyEmail}.
            </p>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell pb-8">
        <BentoTile className="space-y-2">
          <h2 className="text-2xl text-slate-100">Contact for Privacy Requests</h2>
          <div className="copy-default space-y-1 text-slate-300">
            <p>Email: {companyProfile.privacyEmail}</p>
            <p>Legal Name: {companyProfile.legalName}</p>
            <p>Registration Number: {companyProfile.registrationNumber}</p>
            <p>Registered Address: {companyProfile.registeredAddress}</p>
          </div>
        </BentoTile>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
