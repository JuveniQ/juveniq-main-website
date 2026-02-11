import BentoTile from "@/components/motion/BentoTile";
import MetricsBand from "@/components/MetricsBand";

const HomeMetricsSection = () => {
  return (
    <>
      <section className="section-shell pb-4">
        <BentoTile className="space-y-2 border-white/25 bg-slate-800/75">
          <p className="eyebrow">Delivery Metrics</p>
          <h2 className="title-lg text-slate-100">Measured execution for product and operations teams.</h2>
          <p className="copy-default text-slate-200">
            These are practical indicators we monitor to keep delivery consistent and useful over time.
          </p>
        </BentoTile>
      </section>
      <section className="pb-12 md:pb-16">
        <MetricsBand variant="home" />
      </section>
    </>
  );
};

export default HomeMetricsSection;

