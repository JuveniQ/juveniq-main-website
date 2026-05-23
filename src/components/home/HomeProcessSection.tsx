import { ShieldCheck, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";

const HomeProcessSection = () => {
  return (
    <section className="section-shell section-pad border-t border-border/60">
      <BentoGrid className="grid gap-4 lg:grid-cols-12">
        <BentoTile itemClassName="bento-support" className="space-y-3">
          <p className="eyebrow">How We Work</p>
          <h2 className="title-lg text-foreground">Clear process, technical discipline, practical outcomes.</h2>
          <p className="copy-default text-muted-foreground">
            We keep delivery transparent from discovery to support so stakeholders understand scope,
            tradeoffs, and expected results at every stage.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="border-b border-border pb-2">Discovery and scope definition</li>
            <li className="border-b border-border pb-2">Structured design and development</li>
            <li>QA, launch, and support cycle</li>
          </ul>
        </BentoTile>

        <BentoTile itemClassName="bento-support" className="space-y-3">
          <p className="eyebrow">
            <ShieldCheck className="h-3.5 w-3.5" />
            Delivery Focus
          </p>
          <h2 className="title-lg text-foreground">Simple Tech. Real Impact.</h2>
          <p className="copy-default text-muted-foreground">
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
