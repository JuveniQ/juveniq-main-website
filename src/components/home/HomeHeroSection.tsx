import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroBackdrop from "@/components/HeroBackdrop";
import MagneticButton from "@/components/motion/MagneticButton";
import ScanlineHeading from "@/components/motion/ScanlineHeading";

const HomeHeroSection = () => {
  return (
    <section className="pb-12 md:pb-16">
      <HeroBackdrop
        image="/images/hero/africa-tech-team.webp"
        overlayVariant="soft"
        minHeight="clamp(420px, 66vh, 680px)"
        className="rounded-none border-x-0 border-white/15"
      >
        <div className="section-shell w-full">
          <div className="grid w-full gap-4 lg:grid-cols-12 lg:items-stretch">
            <div className="space-y-5 lg:col-span-8">
              <p className="eyebrow">Africa Software Solutions</p>
              <ScanlineHeading as="h1" className="hero-title max-w-[20ch] text-foreground [text-wrap:balance]">
                Building practical AI and software systems for local and enterprise teams.
              </ScanlineHeading>
              <p className="copy-default max-w-[65ch] text-muted-foreground">
                JuveniQ helps businesses ship useful digital products with clear architecture,
                strong user experience, and reliable execution.
              </p>
              <div className="grid gap-2 text-sm text-foreground sm:grid-cols-2">
                <p>Product architecture aligned to operations</p>
                <p>Performance-safe delivery for real users</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                <MagneticButton>
                  <Link to="/contact" className="btn-cyan ring-cyan ring-led">
                    Book Strategy Call
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link to="/portfolio" className="btn-ghost-dark ring-cyan ring-led">
                    Products
                  </Link>
                </MagneticButton>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-2">
              <div className="space-y-1 sm:col-span-2">
                <p className="meta-chip led-line">Delivery Signal</p>
                <p className="mt-1 text-base font-semibold text-foreground">
                  Structured milestones with weekly technical visibility and clean decision points.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  We keep architecture, UX, and release quality in one clear delivery loop.
                </p>
              </div>
              <div className="space-y-1">
                <p className="meta-chip led-line">Operational Fit</p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  Systems designed for real workflow constraints.
                </p>
              </div>
              <div className="space-y-1">
                <p className="meta-chip led-line">Performance</p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  Fast-loading UI with stable interaction patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </HeroBackdrop>
    </section>
  );
};

export default HomeHeroSection;
