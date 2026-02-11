import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";
import ScanlineHeading from "@/components/motion/ScanlineHeading";
import MagneticButton from "@/components/motion/MagneticButton";
import SmartImage from "@/components/SmartImage";
import { caseStudies } from "@/lib/data";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const lead = caseStudies.find((item) => item.slug === "gigkasi") ?? caseStudies[0];

  return (
    <div className="site-shell section-pad">
      <section className="section-shell">
        <BentoGrid className="grid gap-4">
          <BentoTile className="space-y-3">
            <p className="eyebrow">Portfolio</p>
            <ScanlineHeading as="h1" className="hero-title max-w-[18ch] text-slate-100">
              Real product delivery built around practical business use.
            </ScanlineHeading>
            <p className="copy-default text-slate-300">
              Featured work from our production delivery track, focused on practical user needs
              and execution discipline.
            </p>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell section-pad">
        <BentoGrid className="grid gap-4 lg:grid-cols-12">
          <BentoTile itemClassName="lg:col-span-7" className="p-0">
            <div className="duotone-wrap h-full">
              <SmartImage
                src={lead.image}
                alt={`${lead.name} preview`}
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
          </BentoTile>

          <BentoTile itemClassName="lg:col-span-5" className="space-y-3">
            <div className="meta-chip">{lead.category}</div>
            <h2 className="title-lg text-slate-100">{lead.name}</h2>
            <p className="copy-default text-slate-300">{lead.summary}</p>
            <div className="grid gap-2 text-sm text-slate-200">
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3">
                <p className="meta-chip">Challenge</p>
                <p className="mt-1 text-slate-300">{lead.challenge}</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3">
                <p className="meta-chip">Approach</p>
                <p className="mt-1 text-slate-300">{lead.approach}</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3">
                <p className="meta-chip">Outcome</p>
                <p className="mt-1 text-slate-300">{lead.outcome}</p>
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
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell pb-8">
        <BentoGrid className="grid gap-4 lg:grid-cols-12">
          <BentoTile itemClassName="lg:col-span-7" className="space-y-3">
            <h3 className="text-2xl text-slate-100">Engineering Focus in This Delivery</h3>
            <p className="copy-default text-slate-300">
              The implementation prioritized fast service discovery, trust-building interface patterns,
              and clear progression from request to confirmed provider engagement.
            </p>
            <div className="grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3">
                Location-aware discovery paths with low-friction onboarding.
              </div>
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3">
                Communication states designed to reduce ambiguity for both users.
              </div>
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3">
                Scalable data model ready for additional service categories.
              </div>
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3">
                Mobile-first interactions tuned for day-to-day operational use.
              </div>
            </div>
          </BentoTile>
          <BentoTile itemClassName="lg:col-span-5" className="space-y-3">
            <p className="eyebrow">Need a similar build?</p>
            <h3 className="title-lg text-slate-100">We can scope your product architecture clearly.</h3>
            <p className="copy-default text-slate-300">
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

