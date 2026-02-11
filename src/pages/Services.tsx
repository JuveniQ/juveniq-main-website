import { Link } from "react-router-dom";
import { ArrowRight, Bot, LayoutTemplate, Smartphone, Workflow } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServicePackages } from "@/components/ServicePackages";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";
import ScanlineHeading from "@/components/motion/ScanlineHeading";
import MagneticButton from "@/components/motion/MagneticButton";
import SmartImage from "@/components/SmartImage";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { appPackages, webPackages } from "@/lib/data";

const tracks = [
  {
    title: "Web Product Delivery",
    text: "Modern websites and web systems engineered for growth, speed, and clarity.",
    icon: LayoutTemplate,
  },
  {
    title: "Mobile Applications",
    text: "Cross-platform mobile experiences for service operations and customer workflows.",
    icon: Smartphone,
  },
  {
    title: "AI and Automation",
    text: "Practical automation modules that improve process speed and consistency.",
    icon: Bot,
  },
  {
    title: "Operational Workflows",
    text: "System design for teams managing approvals, requests, and delivery operations.",
    icon: Workflow,
  },
];

const Services = () => {
  useScrollToTop();

  return (
    <div className="site-shell section-pad">
      <section className="section-shell">
        <BentoGrid className="grid gap-4 lg:grid-cols-12">
          <BentoTile itemClassName="lg:col-span-8" className="space-y-4">
            <p className="eyebrow">Services</p>
            <ScanlineHeading as="h1" className="hero-title max-w-[18ch] text-slate-100">
              Software, AI, and engineering support built for practical outcomes.
            </ScanlineHeading>
            <p className="copy-default text-slate-300">
              We deliver structured technology services for local businesses and enterprise teams
              that need reliable systems and clear execution.
            </p>
          </BentoTile>

          <BentoTile itemClassName="lg:col-span-4" className="p-0">
            <div className="duotone-wrap h-full">
              <SmartImage
                src="/images/pages/services-engineering.webp"
                alt="Engineering team planning project delivery"
                className="h-full min-h-[280px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell section-pad">
        <BentoGrid className="grid gap-4 md:grid-cols-2">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <BentoTile key={track.title} className="space-y-3">
                <div className="inline-flex rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-2.5 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-2xl text-slate-100">{track.title}</h2>
                <p className="copy-default text-slate-300">{track.text}</p>
              </BentoTile>
            );
          })}
        </BentoGrid>
      </section>

      <section className="section-shell pb-12 md:pb-16">
        <BentoTile className="space-y-5">
          <header className="space-y-2">
            <p className="eyebrow">Packages</p>
            <h2 className="title-lg text-slate-100">Delivery packages based on scope and complexity.</h2>
            <p className="copy-default text-slate-300">
              We align pricing and timeline after project scoping to keep recommendations realistic.
            </p>
          </header>

          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid w-full max-w-[320px] grid-cols-2 rounded-xl border border-white/20 bg-slate-800/75 p-1">
              <TabsTrigger
                value="web"
                className="rounded-lg font-mono text-xs uppercase tracking-[0.12em] data-[state=active]:bg-cyan-300/18 data-[state=active]:text-cyan-200"
              >
                Web
              </TabsTrigger>
              <TabsTrigger
                value="apps"
                className="rounded-lg font-mono text-xs uppercase tracking-[0.12em] data-[state=active]:bg-cyan-300/18 data-[state=active]:text-cyan-200"
              >
                Mobile
              </TabsTrigger>
            </TabsList>
            <TabsContent value="web" className="mt-5">
              <ServicePackages packages={webPackages} />
            </TabsContent>
            <TabsContent value="apps" className="mt-5">
              <ServicePackages packages={appPackages} />
            </TabsContent>
          </Tabs>
        </BentoTile>
      </section>

      <section className="section-shell pb-12 md:pb-14">
        <BentoGrid className="grid gap-4 md:grid-cols-3">
          <BentoTile className="space-y-3">
            <p className="meta-chip">Engagement</p>
            <h3 className="text-2xl text-slate-100">Project Delivery</h3>
            <p className="copy-default text-slate-300">
              End-to-end execution for clearly scoped products and release milestones.
            </p>
          </BentoTile>
          <BentoTile className="space-y-3">
            <p className="meta-chip">Engagement</p>
            <h3 className="text-2xl text-slate-100">Retained Support</h3>
            <p className="copy-default text-slate-300">
              Ongoing engineering support for evolving products, bug management, and iteration cycles.
            </p>
          </BentoTile>
          <BentoTile className="space-y-3">
            <p className="meta-chip">Engagement</p>
            <h3 className="text-2xl text-slate-100">Technical Advisory</h3>
            <p className="copy-default text-slate-300">
              Architecture and product guidance for teams preparing scale, integrations, or modernization.
            </p>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell pb-8">
        <BentoTile className="mesh-glow space-y-3">
          <h2 className="title-lg text-slate-100">Need a custom roadmap?</h2>
          <p className="copy-default text-slate-300">
            We can scope the right architecture and delivery model around your actual business context.
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

export default Services;

