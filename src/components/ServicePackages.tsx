import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import type { ServicePackage } from "@/lib/data";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";
import MagneticButton from "@/components/motion/MagneticButton";

type ServicePackagesProps = {
  packages: ServicePackage[];
};

export const ServicePackages = ({ packages }: ServicePackagesProps) => {
  return (
    <BentoGrid className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {packages.map((item) => (
        <BentoTile key={item.name} className="h-full space-y-4">
          <div className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1">
            <span className="meta-chip">{item.type} Package</span>
          </div>

          <header className="space-y-2">
            <h3 className="text-2xl">{item.name}</h3>
            <p className="copy-default">{item.summary}</p>
          </header>

          <div className="space-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-cyan-200/80">
            <p>Timeline: {item.timeline}</p>
            <p>Ideal For: {item.idealFor}</p>
          </div>

          <ul className="space-y-2 text-sm text-slate-200">
            {item.includes.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <MagneticButton className="mt-2 w-full">
            <Link to="/contact" className="btn-cyan ring-cyan w-full">
              Book Strategy Call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </MagneticButton>
        </BentoTile>
      ))}
    </BentoGrid>
  );
};

