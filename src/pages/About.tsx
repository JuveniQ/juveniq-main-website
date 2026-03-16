import { GaugeCircle, Handshake, ShieldCheck, Workflow } from "lucide-react";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";
import ScanlineHeading from "@/components/motion/ScanlineHeading";
import SectionPhotoBand from "@/components/SectionPhotoBand";
import RouteSeo from "@/components/RouteSeo";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const values = [
  {
    title: "Technical Clarity",
    description: "We explain architecture choices clearly so decisions are practical and traceable.",
    icon: GaugeCircle,
  },
  {
    title: "Reliable Delivery",
    description: "We prioritize stable release cycles and predictable execution over unnecessary complexity.",
    icon: ShieldCheck,
  },
  {
    title: "Workflow Thinking",
    description: "Design decisions are tied to real operations so products support real team behavior.",
    icon: Workflow,
  },
  {
    title: "Long-Term Partnership",
    description: "We stay close post-launch and iterate based on usage and measurable outcomes.",
    icon: Handshake,
  },
];

const About = () => {
  useScrollToTop();

  return (
    <div className="site-shell section-pad">
      <RouteSeo
        title="About JuveniQ | South Africa Software Engineering Company"
        description="JuveniQ is a South African software engineering and AI automation company focused on practical delivery for local and enterprise teams."
        path="/about"
        image="/images/pages/about-team-planning.webp"
        imageAlt="Technology team collaborating in a modern office"
      />
      <SectionPhotoBand image="/images/pages/about-team-planning.webp" overlayVariant="dark">
        <div className="max-w-2xl space-y-3">
          <p className="eyebrow border-white/35 bg-white/10 text-white/85">About JuveniQ</p>
          <ScanlineHeading as="h1" className="hero-title max-w-[18ch] text-white">
            Building software that local and enterprise teams can trust.
          </ScanlineHeading>
          <p className="copy-default text-white/80">
            JuveniQ is a South African technology company focused on practical software delivery,
            AI workflow integration, and long-term system reliability.
          </p>
          <p className="copy-default text-white/80">
            Our goal is simple: make technology useful, clear, and effective for businesses that
            need real results, not unnecessary complexity.
          </p>
        </div>
      </SectionPhotoBand>

      <section className="section-shell section-pad border-t border-border/60">
        <BentoGrid className="grid gap-4 md:grid-cols-2">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <BentoTile key={item.title} className="space-y-3">
                <div className="inline-flex text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-2xl text-foreground">{item.title}</h2>
                <p className="copy-default text-muted-foreground">{item.description}</p>
              </BentoTile>
            );
          })}
        </BentoGrid>
      </section>

      <section className="section-shell section-pad border-t border-border/60">
        <div className="max-w-2xl space-y-3">
          <p className="eyebrow">Working Model</p>
          <h2 className="title-lg text-foreground">How we collaborate with teams.</h2>
          <p className="copy-default text-muted-foreground">
            We begin with business and workflow understanding, then translate priorities into phased
            technical delivery plans with clear check-ins and visible quality gates.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="border-b border-border pb-2">Planning sessions focused on real constraints.</li>
            <li className="border-b border-border pb-2">Consistent progress communication and demos.</li>
            <li className="border-b border-border pb-2">Iterative release strategy with practical scope.</li>
            <li>Post-launch optimization and support continuity.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;

