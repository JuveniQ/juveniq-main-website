import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";
import PulseDot from "@/components/motion/PulseDot";
import ScanlineHeading from "@/components/motion/ScanlineHeading";
import MagneticButton from "@/components/motion/MagneticButton";
import SmartImage from "@/components/SmartImage";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { caseStudies } from "@/lib/data";

const CaseStudies = () => {
  useScrollToTop();

  return (
    <div className="site-shell section-pad">
      <section className="section-shell">
        <BentoGrid className="grid gap-4">
          <BentoTile className="space-y-3">
            <p className="eyebrow">Case Studies</p>
            <ScanlineHeading as="h1" className="hero-title max-w-[18ch] text-slate-100">
              Product delivery examples across live and in-progress systems.
            </ScanlineHeading>
            <p className="copy-default text-slate-300">
              A practical look at how we approach challenge mapping, architecture, and implementation outcomes.
            </p>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell section-pad">
        <BentoGrid className="grid gap-4">
          {caseStudies.map((item) => (
            <BentoTile key={item.slug} className="grid gap-4 lg:grid-cols-12">
              <div className="duotone-wrap lg:col-span-4">
                <SmartImage
                  src={item.image}
                  alt={`${item.name} preview`}
                  className="h-full min-h-[220px] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2">
                  {item.status === "in-progress" && <PulseDot />}
                  <span className="meta-chip">{item.status === "in-progress" ? "In Progress" : "Live System"}</span>
                </div>
                <h2 className="title-lg text-slate-100">{item.name}</h2>
                <p className="copy-default text-slate-300">{item.summary}</p>

                <div className="grid gap-2 text-sm text-slate-200 md:grid-cols-3">
                  <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3">
                    <p className="meta-chip">Challenge</p>
                    <p className="mt-1 text-slate-300">{item.challenge}</p>
                  </div>
                  <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3">
                    <p className="meta-chip">Approach</p>
                    <p className="mt-1 text-slate-300">{item.approach}</p>
                  </div>
                  <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3">
                    <p className="meta-chip">Outcome</p>
                    <p className="mt-1 text-slate-300">{item.outcome}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
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
                    <Link to="/contact" className="btn-cyan ring-cyan">
                      {item.ctaLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </MagneticButton>
                  {item.ctaUrl && (
                    <a href={item.ctaUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark ring-cyan">
                      Live Product
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </BentoTile>
          ))}
        </BentoGrid>
      </section>

      <section className="section-shell pb-8">
        <BentoTile className="space-y-3">
          <h2 className="title-lg text-slate-100">Need a deeper technical breakdown?</h2>
          <p className="copy-default text-slate-300">
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

