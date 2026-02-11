import { Bot, Database, Network, ShieldCheck } from "lucide-react";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";

const capabilityTiles = [
  {
    title: "Software Engineering",
    summary:
      "Web and mobile systems built for reliability, speed, and clear long-term maintainability.",
    icon: Network,
  },
  {
    title: "AI Workflow Integration",
    summary:
      "Practical automation pipelines that improve turnaround time and reduce repetitive tasks.",
    icon: Bot,
  },
  {
    title: "Data and Operations Layer",
    summary:
      "Structured data flows and dashboards for teams managing active service or enterprise workloads.",
    icon: Database,
  },
  {
    title: "Security and QA Discipline",
    summary:
      "Delivery checkpoints for accessibility, performance, and predictable release quality.",
    icon: ShieldCheck,
  },
];

const HomeCapabilitiesSection = () => {
  return (
    <section className="section-shell pb-12 md:pb-14">
      <BentoGrid className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {capabilityTiles.map((capabilityTile) => {
          const Icon = capabilityTile.icon;
          return (
            <BentoTile key={capabilityTile.title} className="space-y-3">
              <div className="inline-flex rounded-xl border border-cyan-300/25 bg-cyan-300/10 p-2.5 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="text-2xl text-slate-100">{capabilityTile.title}</h2>
              <p className="copy-default text-slate-300">{capabilityTile.summary}</p>
            </BentoTile>
          );
        })}
      </BentoGrid>
    </section>
  );
};

export default HomeCapabilitiesSection;

