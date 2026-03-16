import { Bot, Database, Network, ShieldCheck } from "lucide-react";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";

const capabilityTiles = [
  {
    title: "Software Engineering",
    summary:
      "Web and mobile systems built for reliability, speed, and clear long-term maintainability.",
    icon: Network,
    image: "/images/sections/software-engineering.webp",
  },
  {
    title: "AI Workflow Integration",
    summary:
      "Practical automation pipelines that improve turnaround time and reduce repetitive tasks.",
    icon: Bot,
    image: "/images/sections/ai-workflow.webp",
  },
  {
    title: "Data and Operations Layer",
    summary:
      "Structured data flows and dashboards for teams managing active service or enterprise workloads.",
    icon: Database,
    image: "/images/sections/data-operations.webp",
  },
  {
    title: "Security and QA Discipline",
    summary:
      "Delivery checkpoints for accessibility, performance, and predictable release quality.",
    icon: ShieldCheck,
    image: "/images/sections/security-qa.webp",
  },
];

const HomeCapabilitiesSection = () => {
  return (
    <section className="section-shell section-pad border-t border-border/60">
      <BentoGrid className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {capabilityTiles.map((capabilityTile) => {
          const Icon = capabilityTile.icon;
          return (
            <BentoTile key={capabilityTile.title} className="p-0">
              <div className="relative overflow-hidden rounded-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${capabilityTile.image})` }}
                />
                <div className="absolute inset-0 photo-band-overlay-clarity" />
                <div className="relative z-10 space-y-3 p-5 text-white">
                  <div className="inline-flex text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl text-white">{capabilityTile.title}</h2>
                  <p className="copy-default text-white/80">{capabilityTile.summary}</p>
                </div>
              </div>
            </BentoTile>
          );
        })}
      </BentoGrid>
    </section>
  );
};

export default HomeCapabilitiesSection;
