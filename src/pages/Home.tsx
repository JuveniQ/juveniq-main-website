import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Database, Network, ShieldCheck, Workflow } from "lucide-react";
import BentoGrid from "@/components/motion/BentoGrid";
import BentoTile from "@/components/motion/BentoTile";
import MagneticButton from "@/components/motion/MagneticButton";
import ScanlineHeading from "@/components/motion/ScanlineHeading";
import HeroBackdrop from "@/components/HeroBackdrop";
import MetricsBand from "@/components/MetricsBand";
import SmartImage from "@/components/SmartImage";
import RouteSeo from "@/components/RouteSeo";

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

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="site-shell">
      <RouteSeo
        title="JuveniQ | AI & Software Engineering for Growth Teams"
        description="JuveniQ builds practical AI and software systems for local businesses and enterprise operations across Africa."
        path="/"
        image="/images/hero/africa-tech-hero.webp"
        imageAlt="African technology team collaborating on software delivery"
      />

      <section className="pb-12 md:pb-16">
        <HeroBackdrop
          image="/images/hero/africa-tech-hero.webp"
          overlayVariant="soft"
          minHeight="clamp(420px, 66vh, 680px)"
          className="rounded-none border-x-0 border-white/15"
        >
          <div className="section-shell w-full">
            <div className="grid w-full gap-4 lg:grid-cols-12 lg:items-stretch">
              <div className="space-y-5 rounded-2xl border border-white/20 bg-slate-900/72 p-5 shadow-[0_18px_38px_-24px_rgba(5,11,23,0.9)] backdrop-blur-md md:p-7 lg:col-span-8">
                <p className="eyebrow">Africa Software Solutions</p>
                <ScanlineHeading as="h1" className="hero-title max-w-[20ch] text-white [text-wrap:balance]">
                  Building practical AI and software systems for local and enterprise teams.
                </ScanlineHeading>
                <p className="copy-default max-w-[65ch] text-slate-200">
                  JuveniQ helps businesses ship useful digital products with clear architecture,
                  strong user experience, and reliable execution.
                </p>
                <div className="grid gap-2 text-sm text-slate-100 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/20 bg-slate-800/70 px-3 py-2.5">
                    Product architecture aligned to operations
                  </div>
                  <div className="rounded-xl border border-white/20 bg-slate-800/70 px-3 py-2.5">
                    Performance-safe delivery for real users
                  </div>
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
                      Portfolio
                    </Link>
                  </MagneticButton>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-white/20 bg-slate-900/78 p-4 led-hover sm:col-span-2">
                  <p className="meta-chip led-line">Delivery Signal</p>
                  <p className="mt-1 text-base font-semibold text-slate-100">
                    Structured milestones with weekly technical visibility and clean decision points.
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    We keep architecture, UX, and release quality in one clear delivery loop.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-slate-900/78 p-4 led-hover">
                  <p className="meta-chip led-line">Operational Fit</p>
                  <p className="mt-1 text-sm font-semibold text-slate-100">
                    Systems designed for real workflow constraints.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-slate-900/78 p-4 led-hover">
                  <p className="meta-chip led-line">Performance</p>
                  <p className="mt-1 text-sm font-semibold text-slate-100">
                    Fast-loading UI with stable interaction patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </HeroBackdrop>
      </section>

      <section className="section-shell pb-12 md:pb-14">
        <BentoGrid className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilityTiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <BentoTile key={tile.title} className="space-y-3">
                <div className="inline-flex rounded-xl border border-cyan-300/25 bg-cyan-300/10 p-2.5 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-2xl text-slate-100">{tile.title}</h2>
                <p className="copy-default text-slate-300">{tile.summary}</p>
              </BentoTile>
            );
          })}
        </BentoGrid>
      </section>

      <section className="section-shell pb-12 md:pb-16">
        <BentoGrid className="grid gap-4 lg:grid-cols-12">
          <BentoTile itemClassName="bento-support" className="space-y-3">
            <p className="eyebrow">How We Work</p>
            <h2 className="title-lg text-slate-100">Clear process, technical discipline, practical outcomes.</h2>
            <p className="copy-default text-slate-300">
              We keep delivery transparent from discovery to support so stakeholders understand scope,
              tradeoffs, and expected results at every stage.
            </p>
            <div className="grid gap-2 text-sm">
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3 text-slate-200">
                Discovery and scope definition
              </div>
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3 text-slate-200">
                Structured design and development
              </div>
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3 text-slate-200">
                QA, launch, and support cycle
              </div>
            </div>
          </BentoTile>

          <BentoTile itemClassName="bento-support" className="space-y-3">
            <p className="eyebrow">
              <ShieldCheck className="h-3.5 w-3.5" />
              Delivery Focus
            </p>
            <h2 className="title-lg text-slate-100">Simple Tech. Real Impact.</h2>
            <p className="copy-default text-slate-300">
              We design software that teams can actually use, maintain, and scale without
              unnecessary complexity.
            </p>
            <Link to="/services" className="btn-ghost-dark ring-cyan mt-1 w-fit">
              Explore Services
              <Workflow className="h-4 w-4" />
            </Link>
          </BentoTile>
        </BentoGrid>
      </section>

      <section className="section-shell pb-8 md:pb-12">
        <BentoGrid className="grid gap-4 lg:grid-cols-12">
          <BentoTile itemClassName="lg:col-span-7" className="space-y-3">
            <p className="eyebrow">Technical Clarity</p>
            <h2 className="title-lg text-slate-100">Builds that stay readable, maintainable, and scalable.</h2>
            <p className="copy-default text-slate-300">
              We focus on clear module boundaries, practical integration strategy, and release visibility
              so teams can keep momentum after launch.
            </p>
            <div className="grid gap-2 md:grid-cols-2">
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3 text-sm text-slate-200">
                Structured release checkpoints and QA workflows.
              </div>
              <div className="rounded-xl border border-white/20 bg-slate-800/75 p-3 text-sm text-slate-200">
                Architecture choices mapped to real constraints.
              </div>
            </div>
          </BentoTile>
          <BentoTile itemClassName="lg:col-span-5" className="p-0">
            <div className="duotone-wrap h-full">
              <SmartImage
                src="/images/pages/home-product-strategy.webp"
                alt="Engineering team in a product strategy review session"
                className="h-full min-h-[290px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </BentoTile>
        </BentoGrid>
      </section>

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
    </div>
  );
};

export default Home;

