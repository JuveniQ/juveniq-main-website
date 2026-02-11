import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";
import SmartImage from "@/components/SmartImage";

const HomeTechnicalClaritySection = () => {
  return (
    <section className="section-shell pb-8 md:pb-12">
      <BentoGrid className="grid gap-4 lg:grid-cols-12">
        <BentoTile itemClassName="lg:col-span-7" className="space-y-3">
          <p className="eyebrow">Technical Clarity</p>
          <h2 className="title-lg text-slate-100">Builds that stay readable, maintainable, and scalable.</h2>
          <p className="copy-default text-slate-300">
            We focus on clear module boundaries, practical integration strategy, and release visibility
            so teams can keep momentum after launch.
          </p>
          <div className="grid gap-2 md:grid-cols-2">
            <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3 text-sm text-slate-200">
              Structured release checkpoints and QA workflows.
            </div>
            <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3 text-sm text-slate-200">
              Architecture choices mapped to real constraints.
            </div>
          </div>
        </BentoTile>
        <BentoTile itemClassName="lg:col-span-5" className="p-0">
          <div className="duotone-wrap h-full">
            <SmartImage
              src="/images/pages/home-product-strategy.webp"
              alt="Engineering team in a product strategy review session"
              className="h-full min-h-[290px] w-full object-cover"
              loading="lazy"
            />
          </div>
        </BentoTile>
      </BentoGrid>
    </section>
  );
};

export default HomeTechnicalClaritySection;

