import { ShieldCheck, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";

const HomeProcessSection = () => {
  return (
    <section className="section-shell pb-12 md:pb-16">
      <BentoGrid className="grid gap-4 lg:grid-cols-12">
        <BentoTile itemClassName="bento-support" className="space-y-3">
          <p className="eyebrow">How We Work</p>
          <h2 className="title-lg text-slate-100">Clear process, technical discipline, practical outcomes.</h2>
          <p className="copy-default text-slate-300">
            We keep delivery transparent from discovery to support so stakeholders understand scope,
            tradeoffs, and expected results at every stage.
          </p>
          <div className="grid gap-2 text-sm">
            <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3 text-slate-200">
              Discovery and scope definition
            </div>
            <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3 text-slate-200">
              Structured design and development
            </div>
            <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3 text-slate-200">
              QA, launch, and support cycle
            </div>
          </div>
        </BentoTile>

        <BentoTile itemClassName="bento-support" className="space-y-3">
          <p className="eyebrow">
            <ShieldCheck className="h-3.5 w-3.5" />
            Delivery Focus
          </p>
          <h2 className="title-lg text-slate-100">Simple Tech. Real Impact.</h2>
          <p className="copy-default text-slate-300">
            We design software that teams can actually use, maintain, and scale without
            unnecessary complexity.
          </p>
          <Link to="/services" className="btn-ghost-dark ring-cyan mt-1 w-fit">
            Explore Services
            <Workflow className="h-4 w-4" />
          </Link>
        </BentoTile>
      </BentoGrid>
    </section>
  );
};

export default HomeProcessSection;

