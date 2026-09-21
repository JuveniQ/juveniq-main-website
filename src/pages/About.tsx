import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import { ContactCTA, Container, Eyebrow, PageHeader } from "@/components/SiteElements";

const principles = [
  {
    title: "Build for the actual problem",
    copy: "Start with the work people need to do, not with a fashionable technology or a predetermined feature list.",
  },
  {
    title: "Keep complexity justified",
    copy: "Choose an architecture and scope that fit the problem today while leaving sensible room to grow.",
  },
  {
    title: "Communicate clearly",
    copy: "Make trade-offs, progress and technical decisions understandable throughout the engagement.",
  },
  {
    title: "Support what we ship",
    copy: "Treat deployment, maintenance and future improvement as part of responsible software delivery.",
  },
];

const About = () => (
  <>
    <PageMeta
      title="About"
      description="JuveniQ is a South African software company focused on practical digital solutions for businesses and organisations."
      path="/about"
    />
    <PageHeader eyebrow="About JuveniQ" title="A practical software partner, based in South Africa.">
      JuveniQ is a South African software company focused on practical digital solutions for businesses and organisations.
    </PageHeader>

    <section className="section-pad pt-0">
      <Container>
        <div className="grid gap-12 border-y border-border py-12 lg:grid-cols-2 lg:gap-24 lg:py-16">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">From an operational problem to software people can use.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              The company designs and builds web platforms, mobile applications, internal business systems and automation. Work can cover the full delivery path: understanding the process, shaping the solution, engineering the product, deploying it and supporting it.
            </p>
            <p>
              JuveniQ exists because many organisations are still forced to fit important work into spreadsheets, disconnected tools or software that was not designed for their context. The aim is straightforward: build technology that earns its place in the operation.
            </p>
          </div>
        </div>
      </Container>
    </section>

    <section className="section-pad border-y border-border bg-muted/55">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[21rem_1fr] lg:gap-20">
          <div className="section-intro">
            <Eyebrow>How we approach software</Eyebrow>
            <h2>Clear thinking before complexity.</h2>
            <p>These are practical working principles, not abstract values for a wall.</p>
          </div>
          <ol className="divide-y divide-border border-y border-border">
            {principles.map((principle, index) => (
              <li key={principle.title} className="grid gap-3 py-7 sm:grid-cols-[3rem_1fr]">
                <span className="text-sm font-semibold text-primary">0{index + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold">{principle.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{principle.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>

    <section className="section-pad">
      <Container className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:items-start">
        <div className="max-w-2xl">
          <Eyebrow>Company information</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Built with long-term responsibility in mind.</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            JuveniQ is at a focused stage of growth. The company is building its track record through its own products and carefully scoped software engagements—without pretending to have a scale or history it has not earned.
          </p>
          <Link className="text-link mt-7" to="/work">
            See what we have built <ArrowRight aria-hidden="true" />
          </Link>
        </div>
        <dl className="company-details">
          <div>
            <dt>Legal name</dt>
            <dd>JuveniQ (Pty) Ltd</dd>
          </div>
          <div>
            <dt>Registration number</dt>
            <dd>K2025699085</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>Gauteng, South Africa</dd>
          </div>
          <div>
            <dt>Website</dt>
            <dd>juveniq.co.za</dd>
          </div>
        </dl>
      </Container>
    </section>
    <ContactCTA />
  </>
);

export default About;
