import { GaugeCircle, Handshake, ShieldCheck, Workflow } from "lucide-react";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";
import ScanlineHeading from "@/components/motion/ScanlineHeading";
import SmartImage from "@/components/SmartImage";
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
      <section className="section-shell">
        <BentoGrid className="grid gap-4 lg:grid-cols-12">
          <BentoTile itemClassName="lg:col-span-7" className="space-y-4">
            <p className="eyebrow">About JuveniQ</p>
            <ScanlineHeading as="h1" className="hero-title max-w-[18ch] text-slate-100">
              Building software that local and enterprise teams can trust.
            </ScanlineHeading>
            <p className="copy-default text-slate-300">
              JuveniQ is a South African technology company focused on practical software delivery,
              AI workflow integration, and long-term system reliability.
            </p>
            <p className="copy-default text-slate-300">
              Our goal is simple: make technology useful, clear, and effective for businesses that
              need real results, not unnecessary complexity.
            </p>
          </BentoTile>

          <BentoTile itemClassName="lg:col-span-5" className="p-0">
            <div className="duotone-wrap h-full">
              <SmartImage
                src="/images/pages/about-team-planning.webp"
                alt="Engineering team planning product delivery"
                className="h-full min-h-[320px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell section-pad">
        <BentoGrid className="grid gap-4 md:grid-cols-2">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <BentoTile key={item.title} className="space-y-3">
                <div className="inline-flex rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-2.5 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-2xl text-slate-100">{item.title}</h2>
                <p className="copy-default text-slate-300">{item.description}</p>
              </BentoTile>
            );
          })}
        </BentoGrid>
      </section>

      <section className="section-shell pb-8">
        <BentoGrid className="grid gap-4 lg:grid-cols-12">
          <BentoTile itemClassName="lg:col-span-7" className="space-y-3">
            <p className="eyebrow">Working Model</p>
            <h2 className="title-lg text-slate-100">How we collaborate with teams.</h2>
            <p className="copy-default text-slate-300">
              We begin with business and workflow understanding, then translate priorities into phased
              technical delivery plans with clear check-ins and visible quality gates.
            </p>
            <div className="grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3">Planning sessions focused on real constraints.</div>
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3">Consistent progress communication and demos.</div>
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3">Iterative release strategy with practical scope.</div>
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3">Post-launch optimization and support continuity.</div>
            </div>
          </BentoTile>
          <BentoTile itemClassName="lg:col-span-5" className="p-0">
            <div className="duotone-wrap h-full">
              <SmartImage
                src="/images/pages/about-collaboration.webp"
                alt="Technology team in a focused project planning conversation"
                className="h-full min-h-[300px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </BentoTile>
        </BentoGrid>
      </section>
    </div>
  );
};

export default About;

