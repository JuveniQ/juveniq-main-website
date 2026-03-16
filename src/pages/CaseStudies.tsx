import { ArrowRight } from "lucide-react";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";
import ScanlineHeading from "@/components/motion/ScanlineHeading";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { Link } from "react-router-dom";
import SectionPhotoBand from "@/components/SectionPhotoBand";
import RouteSeo from "@/components/RouteSeo";

const CaseStudies = () => {
  useScrollToTop();

  return (
    <div className="site-shell section-pad">
      <RouteSeo
        title="Case Studies | South Africa Software Delivery"
        description="Technical delivery notes and system breakdowns from South African software projects and operational platforms."
        path="/case-studies"
        image="/images/case-studies/service-intake.webp"
        imageAlt="Operations workflow and service intake planning"
      />
      <SectionPhotoBand image="/images/case-studies/service-intake.webp" overlayVariant="dark">
        <div className="max-w-2xl space-y-3">
          <p className="eyebrow border-white/35 bg-white/10 text-white/85">Case Studies</p>
          <ScanlineHeading as="h1" className="hero-title max-w-[18ch] text-white">
            Deep technical breakdowns and delivery insight.
          </ScanlineHeading>
          <p className="copy-default text-white/80">
            We publish structured delivery notes, architecture decisions, and operational outcomes so teams understand what works.
          </p>
        </div>
      </SectionPhotoBand>

      <section className="section-shell section-pad border-t border-border/60">
        <BentoGrid className="grid gap-4 md:grid-cols-2">
          <BentoTile className="space-y-3">
            <p className="meta-chip">Case Study</p>
            <h2 className="text-2xl text-foreground">Kota-OS Delivery Notes</h2>
            <p className="copy-default text-muted-foreground">
              A focused breakdown on offline-first POS architecture, rapid checkout flow decisions,
              and operational reporting for township vendors.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="border-b border-border pb-2">Local-first data model and sync boundaries.</li>
              <li className="border-b border-border pb-2">Fast order capture and modifier handling.</li>
              <li>Reporting exports and owner-ready summaries.</li>
            </ul>
            <Link to="/portfolio" className="btn-ghost-dark ring-cyan w-fit">
              View Product
              <ArrowRight className="h-4 w-4" />
            </Link>
          </BentoTile>
          <BentoTile className="space-y-3">
            <p className="meta-chip">Engineering Approach</p>
            <h2 className="text-2xl text-foreground">How we structure delivery</h2>
            <p className="copy-default text-muted-foreground">
              Each case study focuses on architecture decisions, operational constraints, and
              measurable outcomes rather than marketing narratives.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="border-b border-border pb-2">Workflow mapping and constraint analysis.</li>
              <li className="border-b border-border pb-2">Staged implementation with QA checkpoints.</li>
              <li>Operational handoff and support documentation.</li>
            </ul>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell section-pad border-t border-border/60">
        <BentoTile className="space-y-3">
          <h2 className="title-lg text-foreground">Need a deeper technical breakdown?</h2>
          <p className="copy-default text-muted-foreground">
            We can walk your team through architecture choices, rollout constraints, and delivery
            checkpoints based on your own product context.
          </p>
          <Link to="/contact" className="btn-ghost-dark ring-cyan w-fit">
            Request a Strategy Session
            <ArrowRight className="h-4 w-4" />
          </Link>
        </BentoTile>
      </section>
    </div>
  );
};

export default CaseStudies;

