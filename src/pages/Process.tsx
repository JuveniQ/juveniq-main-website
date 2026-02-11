import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";
import PulseDot from "@/components/motion/PulseDot";
import ScanlineHeading from "@/components/motion/ScanlineHeading";
import MagneticButton from "@/components/motion/MagneticButton";
import SmartImage from "@/components/SmartImage";
import { processSteps } from "@/lib/data";

const Process = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="site-shell section-pad">
      <section className="section-shell">
        <BentoGrid className="grid gap-4 lg:grid-cols-12">
          <BentoTile itemClassName="lg:col-span-8" className="space-y-4">
            <p className="eyebrow">Process</p>
            <ScanlineHeading as="h1" className="hero-title max-w-[18ch] text-slate-100">
              A practical delivery model from discovery to long-term support.
            </ScanlineHeading>
            <p className="copy-default text-slate-300">
              We follow a clear sequence so teams stay aligned on scope, quality, and outcomes
              throughout the project lifecycle.
            </p>
          </BentoTile>

          <BentoTile itemClassName="lg:col-span-4" className="p-0">
            <div className="duotone-wrap h-full">
              <SmartImage
                src="/images/pages/process-planning.webp"
                alt="Structured project planning session"
                className="h-full min-h-[280px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell section-pad">
        <BentoGrid className="grid gap-4 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <BentoTile key={step.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="meta-chip">Step {String(index + 1).padStart(2, "0")}</p>
                {(step.status === "active" || step.status === "ready") && <PulseDot />}
              </div>
              <h2 className="text-2xl text-slate-100">{step.title}</h2>
              <p className="copy-default text-slate-300">{step.summary}</p>
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-cyan-200/80">
                Status: {step.status}
              </div>
            </BentoTile>
          ))}
        </BentoGrid>
      </section>

      <section className="section-shell pb-12 md:pb-14">
        <BentoGrid className="grid gap-4 lg:grid-cols-12">
          <BentoTile itemClassName="lg:col-span-7" className="space-y-3">
            <p className="eyebrow">Delivery Artifacts</p>
            <h2 className="title-lg text-slate-100">Each phase produces clear handoff artifacts.</h2>
            <p className="copy-default text-slate-300">
              Teams receive structured outputs including scope notes, architecture diagrams, test plans,
              and release checklists to keep decisions visible.
            </p>
            <div className="grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3">Discovery summary and scope map</div>
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3">UI flow and interaction specs</div>
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3">QA test checklist and release criteria</div>
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3">Post-launch issue and iteration backlog</div>
            </div>
          </BentoTile>
          <BentoTile itemClassName="lg:col-span-5" className="space-y-3">
            <h3 className="text-2xl text-slate-100">Communication Rhythm</h3>
            <p className="copy-default text-slate-300">
              Weekly status checkpoints and milestone reviews keep technical and business stakeholders aligned.
            </p>
            <ul className="space-y-2 text-sm text-slate-200">
              <li className="rounded-xl border border-white/20 bg-slate-800/75 p-3">Weekly progress report with risks and dependencies.</li>
              <li className="rounded-xl border border-white/20 bg-slate-800/75 p-3">Milestone demos for usability and workflow review.</li>
              <li className="rounded-xl border border-white/20 bg-slate-800/75 p-3">Scope adjustments documented with impact notes.</li>
            </ul>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell pb-8">
        <BentoTile className="space-y-3">
          <h2 className="title-lg text-slate-100">Ready to start with discovery?</h2>
          <p className="copy-default text-slate-300">
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

