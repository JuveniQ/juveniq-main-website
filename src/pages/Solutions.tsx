import { Link } from "react-router-dom";
import { ArrowRight, Building2, Factory, Store } from "lucide-react";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";
import MagneticButton from "@/components/motion/MagneticButton";
import ScanlineHeading from "@/components/motion/ScanlineHeading";
import SmartImage from "@/components/SmartImage";
import RouteSeo from "@/components/RouteSeo";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { solutions } from "@/lib/data";

const iconMap = [Store, Building2, Factory];

const Solutions = () => {
  useScrollToTop();

  return (
    <div className="site-shell section-pad">
      <RouteSeo
        title="Solutions | JuveniQ"
        description="Explore JuveniQ solution tracks: local business platforms, enterprise operations systems, and AI-enabled workflow automation."
        path="/solutions"
        image="/images/pages/solutions-digital-ops.webp"
        imageAlt="Digital operations planning board and architecture workflow"
      />

      <section className="section-shell">
        <BentoGrid className="grid gap-4 lg:grid-cols-12">
          <BentoTile itemClassName="lg:col-span-8" className="space-y-4">
            <p className="eyebrow">Solutions</p>
            <ScanlineHeading as="h1" className="hero-title max-w-[18ch] text-slate-100">
              Solution frameworks for local business operations and enterprise systems.
            </ScanlineHeading>
            <p className="copy-default text-slate-300">
              We design software based on real operational patterns across Africa-focused teams,
              service businesses, and enterprise workflows.
            </p>
          </BentoTile>
          <BentoTile itemClassName="lg:col-span-4" className="p-0">
            <div className="duotone-wrap h-full">
              <SmartImage
                src="/images/pages/solutions-digital-ops.webp"
                alt="Digital operations planning board"
                className="h-full min-h-[280px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell section-pad">
        <BentoGrid className="grid gap-4 lg:grid-cols-3">
          {solutions.map((item, index) => {
            const Icon = iconMap[index] ?? Building2;
            return (
              <BentoTile key={item.title} className="space-y-4">
                <div className="inline-flex rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-2.5 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="meta-chip">{item.sector}</p>
                  <h2 className="mt-1 text-2xl text-slate-100">{item.title}</h2>
                </div>
                <p className="copy-default text-slate-300">{item.summary}</p>
                <ul className="space-y-2 text-sm text-slate-200">
                  {item.outcomes.map((outcome) => (
                    <li key={outcome} className="rounded-xl border border-white/20 bg-slate-800/75 p-2.5">
                      {outcome}
                    </li>
                  ))}
                </ul>
              </BentoTile>
            );
          })}
        </BentoGrid>
      </section>

      <section className="section-shell pb-12 md:pb-16">
        <BentoGrid className="grid gap-4 lg:grid-cols-12">
          <BentoTile itemClassName="lg:col-span-7" className="space-y-3">
            <p className="eyebrow">Implementation Notes</p>
            <h2 className="title-lg text-slate-100">Each solution track includes technical delivery patterns.</h2>
            <p className="copy-default text-slate-300">
              We define integration points, data ownership, and deployment constraints early so teams
              can move quickly without accumulating hidden architectural debt.
            </p>
            <div className="grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3">
                API and workflow mapping for existing business systems.
              </div>
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3">
                Role-aware interfaces for operations and leadership teams.
              </div>
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3">
                Automation boundaries with approval and review checkpoints.
              </div>
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3">
                Performance and reliability budgets before full rollout.
              </div>
            </div>
          </BentoTile>
          <BentoTile itemClassName="lg:col-span-5" className="p-0">
            <div className="duotone-wrap h-full">
              <SmartImage
                src="/images/pages/solutions-architecture-board.webp"
                alt="Planning board with architecture notes and workflow decisions"
                className="h-full min-h-[300px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell pb-8">
        <BentoTile className="space-y-3">
          <h2 className="title-lg text-slate-100">Need a solution mapped to your context?</h2>
          <p className="copy-default text-slate-300">
            Share your workflow challenges and we will define a practical architecture path.
          </p>
          <MagneticButton className="w-fit">
            <Link to="/contact" className="btn-cyan ring-cyan">
              Book Strategy Call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </MagneticButton>
        </BentoTile>
      </section>
    </div>
  );
};

export default Solutions;

