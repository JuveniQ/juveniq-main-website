import { ArrowRight, Check, Link2, RefreshCw, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import ProjectPreview from "@/components/ProjectPreview";
import { ContactCTA, Container, Eyebrow } from "@/components/SiteElements";
import { Button } from "@/components/ui/button";
import { processSteps, projects, services } from "@/lib/data";
import { company } from "@/lib/company";

const businessProblems = [
  {
    icon: Workflow,
    title: "Replace manual processes",
    description: "Digitise spreadsheets, paperwork and repetitive administrative workflows.",
  },
  {
    icon: ArrowRight,
    title: "Build customer-facing platforms",
    description: "Create portals, booking systems, marketplaces and useful digital customer experiences.",
  },
  {
    icon: Link2,
    title: "Connect systems",
    description: "Integrate APIs, databases, payments and third-party platforms.",
  },
  {
    icon: RefreshCw,
    title: "Improve existing software",
    description: "Modernise, maintain and extend software your organisation already depends on.",
  },
];

const featuredProjects = projects.filter((project) => project.featured);

const Home = () => (
  <>
    <PageMeta
      title="Software that solves real business problems"
      description="JuveniQ designs and builds web, mobile and business software for South African organisations."
      path="/"
    />

    <section className="hero">
      <Container className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_21rem]">
        <div className="max-w-4xl">
          <Eyebrow>South African software engineering</Eyebrow>
          <h1 className="hero-title">Software that solves real business problems.</h1>
          <p className="hero-copy">
            JuveniQ designs and builds web, mobile and business software for South African organisations. From customer-facing platforms to internal systems and automation, we help businesses replace manual processes with practical technology.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/contact">
                Discuss a project <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-foreground">
              <Link to="/work">View our work</Link>
            </Button>
          </div>
        </div>

        <div className="capability-list" aria-label="Core capabilities">
          {["Custom software", "Mobile applications", "Business systems", "Integration & automation"].map((item) => (
            <div key={item} className="flex items-center gap-3 border-b border-white/15 py-3 last:border-0">
              <Check className="h-4 w-4 text-blue-300" aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>

    <section className="border-b border-border bg-white">
      <Container className="credibility-strip">
        <div>
          <span className="credibility-label">Based in</span>
          <strong>{company.location}</strong>
        </div>
        <div>
          <span className="credibility-label">Delivery</span>
          <strong>Web &amp; mobile software</strong>
        </div>
        <div>
          <span className="credibility-label">Engagement</span>
          <strong>Build, launch &amp; support</strong>
        </div>
        <div>
          <span className="credibility-label">Registered company</span>
          <strong>{company.legalName}</strong>
        </div>
      </Container>
    </section>

    <section className="section-pad">
      <Container>
        <div className="section-intro">
          <Eyebrow>Business outcomes</Eyebrow>
          <h2>Technology should make your business easier to run.</h2>
          <p>Good software starts with the problem, the people doing the work and the result the organisation needs.</p>
        </div>
        <div className="problem-list">
          {businessProblems.map(({ icon: Icon, title, description }, index) => (
            <article key={title} className="problem-item">
              <div className="problem-number">0{index + 1}</div>
              <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>

    <section className="section-pad border-y border-border bg-muted/55">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[22rem_1fr] lg:gap-20">
          <div className="section-intro lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Core services</Eyebrow>
            <h2>Practical engineering, from scope to support.</h2>
            <p>Engagements are shaped around a defined business need—not a catalogue of features.</p>
            <Link className="text-link mt-7" to="/services">
              Explore our services <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {services.map((service, index) => (
              <article key={service.title} className="service-line">
                <span>0{index + 1}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>

    <section className="section-pad">
      <Container>
        <div className="section-intro">
          <Eyebrow>Selected work</Eyebrow>
          <h2>Products built around specific operating realities.</h2>
          <p>Kota-OS and Votio show how JuveniQ turns specialised workflows into complete, deployed software products.</p>
        </div>
        <div className="mt-14 space-y-20">
          {featuredProjects.map((project, index) => (
            <ProjectPreview key={project.slug} project={project} reverse={index % 2 === 1} />
          ))}
        </div>
        <Link className="text-link mt-12" to="/work">
          See all work <ArrowRight aria-hidden="true" />
        </Link>
      </Container>
    </section>

    <section className="section-pad border-y border-border bg-muted/55">
      <Container>
        <div className="section-intro">
          <Eyebrow>How we deliver</Eyebrow>
          <h2>From problem to working software.</h2>
        </div>
        <ol className="process-grid">
          {processSteps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>

    <section className="section-pad">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="section-intro">
          <Eyebrow>Who we work with</Eyebrow>
          <h2>Software shaped around the way your team operates.</h2>
        </div>
        <div>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            We work with SMEs, growing businesses, startups, community organisations and teams that need software built around the way they actually operate.
          </p>
          <ul className="sector-list">
            {["Retail & hospitality", "Professional services", "Community organisations", "Education", "Digital platforms"].map((sector) => (
              <li key={sector}>{sector}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>

    <ContactCTA />
  </>
);

export default Home;
