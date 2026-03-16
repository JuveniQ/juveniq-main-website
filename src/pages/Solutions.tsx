import { Link } from "react-router-dom";
import { ArrowRight, Building2, Factory, Store } from "lucide-react";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";
import MagneticButton from "@/components/motion/MagneticButton";
import ScanlineHeading from "@/components/motion/ScanlineHeading";
import SectionPhotoBand from "@/components/SectionPhotoBand";
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

      <SectionPhotoBand image="/images/pages/solutions-digital-ops.webp" overlayVariant="dark">
        <div className="max-w-2xl space-y-3">
          <p className="eyebrow border-white/35 bg-white/10 text-white/85">Solutions</p>
          <ScanlineHeading as="h1" className="hero-title max-w-[18ch] text-white">
            Solution frameworks for local business operations and enterprise systems.
          </ScanlineHeading>
          <p className="copy-default text-white/80">
            We design software based on real operational patterns across Africa-focused teams,
            service businesses, and enterprise workflows.
          </p>
        </div>
      </SectionPhotoBand>

      <section className="section-shell section-pad border-t border-border/60">
        <BentoGrid className="grid gap-4 lg:grid-cols-3">
          {solutions.map((item, index) => {
            const Icon = iconMap[index] ?? Building2;
            return (
              <BentoTile key={item.title} className="space-y-4">
                <div className="inline-flex text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="meta-chip">{item.sector}</p>
                  <h2 className="mt-1 text-2xl text-foreground">{item.title}</h2>
                </div>
                <p className="copy-default text-muted-foreground">{item.summary}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {item.outcomes.map((outcome) => (
                    <li key={outcome} className="border-b border-border pb-2">
                      {outcome}
                    </li>
                  ))}
                </ul>
              </BentoTile>
            );
          })}
        </BentoGrid>
      </section>

      <section className="section-shell section-pad border-t border-border/60">
        <div className="max-w-2xl space-y-3">
          <p className="eyebrow">Implementation Notes</p>
          <h2 className="title-lg text-foreground">Each solution track includes technical delivery patterns.</h2>
          <p className="copy-default text-muted-foreground">
            We define integration points, data ownership, and deployment constraints early so teams
            can move quickly without accumulating hidden architectural debt.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="border-b border-border pb-2">API and workflow mapping for existing business systems.</li>
            <li className="border-b border-border pb-2">Role-aware interfaces for operations and leadership teams.</li>
            <li className="border-b border-border pb-2">Automation boundaries with approval and review checkpoints.</li>
            <li>Performance and reliability budgets before full rollout.</li>
          </ul>
        </div>
      </section>

      <section className="section-shell section-pad border-t border-border/60">
        <BentoTile className="space-y-3">
          <h2 className="title-lg text-foreground">Need a solution mapped to your context?</h2>
          <p className="copy-default text-muted-foreground">
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

