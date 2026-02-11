import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";
import ScanlineHeading from "@/components/motion/ScanlineHeading";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { companyProfile } from "@/lib/company";

const TermsOfService = () => {
  useScrollToTop();

  return (
    <div className="site-shell section-pad">
      <section className="section-shell">
        <BentoGrid className="grid gap-4">
          <BentoTile className="space-y-4">
            <p className="eyebrow">Legal</p>
            <ScanlineHeading as="h1" className="title-lg max-w-[20ch] text-slate-100">
              Terms of Service
            </ScanlineHeading>
            <p className="copy-default text-slate-300">
              Effective Date: 10 February 2026
            </p>
            <p className="copy-default text-slate-300">
              These terms govern access to services provided by {companyProfile.legalName}, including software engineering delivery,
              product consulting, and AI workflow implementation.
            </p>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell section-pad">
        <BentoGrid className="grid gap-4 md:grid-cols-2">
          <BentoTile className="space-y-3">
            <h2 className="text-2xl text-slate-100">1. Scope of Services</h2>
            <p className="copy-default text-slate-300">
              Services are provided according to signed proposals/statements of work defining scope, deliverables, timelines, and responsibilities.
            </p>
          </BentoTile>
          <BentoTile className="space-y-3">
            <h2 className="text-2xl text-slate-100">2. Client Responsibilities</h2>
            <p className="copy-default text-slate-300">
              Clients must provide accurate project information, timely approvals, and lawful data. Users must be 18 years or older
              to enter into paid service agreements.
            </p>
          </BentoTile>
          <BentoTile className="space-y-3">
            <h2 className="text-2xl text-slate-100">3. Fees and Payments</h2>
            <ul className="copy-default list-disc space-y-2 pl-5 text-slate-300">
              <li>50% deposit is required before project commencement.</li>
              <li>50% balance is due before deployment or final delivery.</li>
            </ul>
          </BentoTile>
          <BentoTile className="space-y-3">
            <h2 className="text-2xl text-slate-100">4. Refund Policy</h2>
            <p className="copy-default text-slate-300">
              Deposits are non-refundable once work has commenced.
            </p>
          </BentoTile>
          <BentoTile className="space-y-3">
            <h2 className="text-2xl text-slate-100">5. IP Ownership and Licensing</h2>
            <p className="copy-default text-slate-300">
              All intellectual property remains the property of JuveniQ until full payment is received.
              Upon full payment, ownership of the final deliverable transfers to the client, excluding JuveniQ proprietary tools and internal frameworks.
            </p>
          </BentoTile>
          <BentoTile className="space-y-3">
            <h2 className="text-2xl text-slate-100">6. Warranty, Support, and Liability</h2>
            <p className="copy-default text-slate-300">
              Support duration depends on the selected package (Basic, Standard, Premium). Total liability is limited to the amount
              paid by the client for the specific project.
            </p>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell pb-8">
        <BentoTile className="space-y-2">
          <h2 className="text-2xl text-slate-100">Legal Contact</h2>
          <div className="copy-default space-y-1 text-slate-300">
            <p>Email: {companyProfile.legalEmail}</p>
            <p>Governing Law: {companyProfile.governingLaw}</p>
            <p>Dispute Venue: {companyProfile.disputeVenue}</p>
          </div>
        </BentoTile>
      </section>
    </div>
  );
};

export default TermsOfService;
