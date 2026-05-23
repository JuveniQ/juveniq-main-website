import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";
import PulseDot from "@/components/motion/PulseDot";
import ScanlineHeading from "@/components/motion/ScanlineHeading";
import MagneticButton from "@/components/motion/MagneticButton";
import SectionPhotoBand from "@/components/SectionPhotoBand";
import RouteSeo from "@/components/RouteSeo";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { processSteps } from "@/lib/data";

const Process = () => {
  useScrollToTop();

  return (
    <div className="site-shell section-pad">
      <RouteSeo
        title="Process | South Africa Software Delivery"
        description="A practical delivery process for South African teams: discovery, design, build, QA, launch, and support with clear technical checkpoints."
        path="/process"
        image="/images/pages/process-planning.webp"
        imageAlt="Project planning and delivery workflow"
      />
      <SectionPhotoBand image="/images/pages/process-planning.webp" overlayVariant="dark">
        <div className="max-w-2xl space-y-3">
          <p className="eyebrow border-white/35 bg-white/10 text-white/85">Process</p>
          <ScanlineHeading as="h1" className="hero-title max-w-[18ch] text-white">
            A practical delivery model from discovery to long-term support.
          </ScanlineHeading>
          <p className="copy-default text-white/80">
            We follow a clear sequence so teams stay aligned on scope, quality, and outcomes
            throughout the project lifecycle.
          </p>
        </div>
      </SectionPhotoBand>

      <section className="section-shell section-pad border-t border-border/60">
        <BentoGrid className="grid gap-4 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <BentoTile key={step.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="meta-chip">Step {String(index + 1).padStart(2, "0")}</p>
                {(step.status === "active" || step.status === "ready") && <PulseDot />}
              </div>
              <h2 className="text-2xl text-foreground">{step.title}</h2>
              <p className="copy-default text-muted-foreground">{step.summary}</p>
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-cyan-200/80">
                Status: {step.status}
              </div>
            </BentoTile>
          ))}
        </BentoGrid>
      </section>

      <section className="section-shell section-pad border-t border-border/60">
        <BentoGrid className="grid gap-4 lg:grid-cols-12">
          <BentoTile itemClassName="lg:col-span-7" className="space-y-3">
            <p className="eyebrow">Delivery Artifacts</p>
            <h2 className="title-lg text-foreground">Each phase produces clear handoff artifacts.</h2>
            <p className="copy-default text-muted-foreground">
              Teams receive structured outputs including scope notes, architecture diagrams, test plans,
              and release checklists to keep decisions visible.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="border-b border-border pb-2">Discovery summary and scope map</li>
              <li className="border-b border-border pb-2">UI flow and interaction specs</li>
              <li className="border-b border-border pb-2">QA test checklist and release criteria</li>
              <li>Post-launch issue and iteration backlog</li>
            </ul>
          </BentoTile>
          <BentoTile itemClassName="lg:col-span-5" className="space-y-3">
            <h3 className="text-2xl text-foreground">Communication Rhythm</h3>
            <p className="copy-default text-muted-foreground">
              Weekly status checkpoints and milestone reviews keep technical and business stakeholders aligned.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="border-b border-border pb-2">Weekly progress report with risks and dependencies.</li>
              <li className="border-b border-border pb-2">Milestone demos for usability and workflow review.</li>
              <li>Scope adjustments documented with impact notes.</li>
            </ul>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell section-pad border-t border-border/60">
        <BentoTile className="space-y-3">
          <h2 className="title-lg text-foreground">Ready to start with discovery?</h2>
          <p className="copy-default text-muted-foreground">
            We can begin with a focused strategy session to align goals and define the first release.
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

export default Process;

