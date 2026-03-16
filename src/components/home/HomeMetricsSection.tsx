import BentoTile from "@/components/motion/BentoTile";
import MetricsBand from "@/components/MetricsBand";

const HomeMetricsSection = () => {
  return (
    <>
      <section className="section-shell section-pad border-t border-border/60">
        <BentoTile className="space-y-2">
          <p className="eyebrow">Delivery Metrics</p>
          <h2 className="title-lg text-foreground">Measured execution for product and operations teams.</h2>
          <p className="copy-default text-muted-foreground">
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
