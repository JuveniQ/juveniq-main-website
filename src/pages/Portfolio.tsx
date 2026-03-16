import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";
import ScanlineHeading from "@/components/motion/ScanlineHeading";
import MagneticButton from "@/components/motion/MagneticButton";
import SmartImage from "@/components/SmartImage";
import RouteSeo from "@/components/RouteSeo";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { caseStudies } from "@/lib/data";

const Portfolio = () => {
  useScrollToTop();

  const lead = caseStudies[0];

  return (
    <div className="site-shell section-pad">
      <RouteSeo
        title="Products | South Africa Software Products by JuveniQ"
        description="Product delivery highlights including Kota-OS, a South African POS system built for reliable offline operations."
        path="/portfolio"
        image="/images/products/kota-os/home.jpeg"
        imageAlt="Kota-OS product interface preview"
      />
      <section className="section-shell">
        <BentoGrid className="grid gap-4">
          <BentoTile className="space-y-3">
            <p className="eyebrow">Products</p>
            <ScanlineHeading as="h1" className="hero-title max-w-[18ch] text-foreground">
              Products built for real operations and daily use.
            </ScanlineHeading>
            <p className="copy-default text-muted-foreground">
              Featured product delivery from our team, focused on clear workflows and reliability.
            </p>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell section-pad border-t border-border/60">
        <BentoGrid className="grid gap-4">
          <BentoTile className="p-0">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
              <div className="h-full max-h-[220px] flex items-center justify-center lg:max-h-[240px] lg:self-start">
                <SmartImage
                  src="/images/products/kota-os/logo.webp"
                  alt={`${lead.name} preview`}
                  className="h-full w-full object-contain p-6"
                />
              </div>
              <div className="space-y-3 p-5 md:p-6">
                <div className="meta-chip">{lead.category}</div>
                <h2 className="title-lg text-foreground">{lead.name}</h2>
                <p className="copy-default text-muted-foreground">{lead.summary}</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>
                    <p className="meta-chip">Challenge</p>
                    <p className="mt-1">{lead.challenge}</p>
                  </div>
                  <div>
                    <p className="meta-chip">Approach</p>
                    <p className="mt-1">{lead.approach}</p>
                  </div>
                  <div>
                    <p className="meta-chip">Outcome</p>
                    <p className="mt-1">{lead.outcome}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {lead.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <MagneticButton>
                    <Link to="/case-studies" className="btn-cyan ring-cyan">
                      View Case Studies
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </MagneticButton>
                  {lead.ctaUrl && (
                    <a href={lead.ctaUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark ring-cyan">
                      Live Product
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell section-pad border-t border-border/60">
        <BentoGrid className="grid gap-4 lg:grid-cols-12">
          <BentoTile itemClassName="lg:col-span-7" className="space-y-3">
            <h3 className="text-2xl text-foreground">Engineering Focus in This Delivery</h3>
            <p className="copy-default text-muted-foreground">
              Kota-OS prioritizes rapid checkout, offline reliability, and reporting clarity for busy
              food vendors operating under real-world connectivity constraints.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="border-b border-border pb-2">Offline-first sales flow with consistent local data.</li>
              <li className="border-b border-border pb-2">Fast item entry and modifier logic for high-volume service.</li>
              <li className="border-b border-border pb-2">Inventory tracking aligned to daily stock usage.</li>
              <li>Reporting exports designed for owner decision-making.</li>
            </ul>
          </BentoTile>
          <BentoTile itemClassName="lg:col-span-5" className="space-y-3">
            <p className="eyebrow">Need a similar build?</p>
            <h3 className="title-lg text-foreground">We can scope your product architecture clearly.</h3>
            <p className="copy-default text-muted-foreground">
              If you are planning a marketplace or operational system, we can define the best release path.
            </p>
            <Link to="/contact" className="btn-ghost-dark ring-cyan w-fit">
              Discuss Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </BentoTile>
        </BentoGrid>
      </section>
    </div>
  );
};

export default Portfolio;

