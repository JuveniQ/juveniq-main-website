import { Link } from "react-router-dom";
import { ArrowRight, Bot, LayoutTemplate, Smartphone, Workflow } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServicePackages } from "@/components/ServicePackages";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";
import ScanlineHeading from "@/components/motion/ScanlineHeading";
import MagneticButton from "@/components/motion/MagneticButton";
import SectionPhotoBand from "@/components/SectionPhotoBand";
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
      <SectionPhotoBand image="/images/pages/services-engineering.webp" overlayVariant="dark">
        <div className="max-w-2xl space-y-3">
          <p className="eyebrow border-white/35 bg-white/10 text-white/85">Services</p>
          <ScanlineHeading as="h1" className="hero-title max-w-[18ch] text-white">
            Software, AI, and engineering support built for practical outcomes.
          </ScanlineHeading>
          <p className="copy-default text-white/80">
            We deliver structured technology services for local businesses and enterprise teams
            that need reliable systems and clear execution.
          </p>
        </div>
      </SectionPhotoBand>

      <section className="section-shell section-pad border-t border-border/60">
        <BentoGrid className="grid gap-4 md:grid-cols-2">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <BentoTile key={track.title} className="space-y-3">
                <div className="inline-flex text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-2xl text-foreground">{track.title}</h2>
                <p className="copy-default text-muted-foreground">{track.text}</p>
              </BentoTile>
            );
          })}
        </BentoGrid>
      </section>

      <section className="section-shell section-pad border-t border-border/60">
        <BentoTile className="space-y-5">
          <header className="space-y-2">
            <p className="eyebrow">Packages</p>
            <h2 className="title-lg text-foreground">Delivery packages based on scope and complexity.</h2>
            <p className="copy-default text-muted-foreground">
              We align pricing and timeline after project scoping to keep recommendations realistic.
            </p>
          </header>

          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid w-full max-w-[320px] grid-cols-2 border-b border-border bg-transparent p-0">
              <TabsTrigger
                value="web"
                className="rounded-none border-b-2 border-transparent font-mono text-xs uppercase tracking-[0.12em] data-[state=active]:border-cyan-300 data-[state=active]:text-cyan-300"
              >
                Web
              </TabsTrigger>
              <TabsTrigger
                value="apps"
                className="rounded-none border-b-2 border-transparent font-mono text-xs uppercase tracking-[0.12em] data-[state=active]:border-cyan-300 data-[state=active]:text-cyan-300"
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

      <section className="section-shell section-pad border-t border-border/60">
        <BentoGrid className="grid gap-4 md:grid-cols-3">
          <BentoTile className="space-y-3">
            <p className="meta-chip">Engagement</p>
            <h3 className="text-2xl text-foreground">Project Delivery</h3>
            <p className="copy-default text-muted-foreground">
              End-to-end execution for clearly scoped products and release milestones.
            </p>
          </BentoTile>
          <BentoTile className="space-y-3">
            <p className="meta-chip">Engagement</p>
            <h3 className="text-2xl text-foreground">Retained Support</h3>
            <p className="copy-default text-muted-foreground">
              Ongoing engineering support for evolving products, bug management, and iteration cycles.
            </p>
          </BentoTile>
          <BentoTile className="space-y-3">
            <p className="meta-chip">Engagement</p>
            <h3 className="text-2xl text-foreground">Technical Advisory</h3>
            <p className="copy-default text-muted-foreground">
              Architecture and product guidance for teams preparing scale, integrations, or modernization.
            </p>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell section-pad border-t border-border/60">
        <BentoTile className="space-y-3">
          <h2 className="title-lg text-foreground">Need a custom roadmap?</h2>
          <p className="copy-default text-muted-foreground">
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

