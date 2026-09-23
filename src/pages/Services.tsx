import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import { ContactCTA, Container, Eyebrow, PageHeader } from "@/components/SiteElements";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";

const Services = () => (
  <>
    <PageMeta
      title="Software development services"
      description="Custom software, mobile applications, automation and ongoing software support for South African organisations."
      path="/services"
    />
    <PageHeader eyebrow="Services" title="Engineering services built around a real business need.">
      Whether you need a new platform, an operational mobile app or help improving an existing system, the work begins with a clear understanding of the problem.
    </PageHeader>

    <section className="section-pad pt-0">
      <Container>
        <div className="divide-y divide-border border-y border-border">
          {services.map((service, index) => (
            <article key={service.title} className="service-detail">
              <div>
                <span className="detail-number">0{index + 1}</span>
                <h2>{service.title}</h2>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">{service.summary}</p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="detail-label">Problems it addresses</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{service.problems}</p>
                  <h3 className="detail-label mt-7">Engagement</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{service.engagement}</p>
                </div>
                <div>
                  <h3 className="detail-label">Typical deliverables</h3>
                  <ul className="mt-3 space-y-3">
                    {service.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex gap-3 text-sm leading-6 text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                  <Link className="text-link mt-7" to="/contact">
                    Discuss this service <ArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>

    <section className="section-pad border-y border-border bg-muted/55">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="section-intro">
            <Eyebrow>Commercial scoping</Eyebrow>
            <h2>Projects are scoped individually.</h2>
            <p>
              Each engagement starts with the business problem, requirements and delivery expectations—not a preset service tier.
            </p>
          </div>
          <div className="border-y border-border py-8 sm:py-10">
            <h3 className="text-xl font-semibold">A clear proposal for the work required.</h3>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              After understanding the problem and the intended outcome, we provide a clear scope, timeline and commercial proposal. The scope reflects the solution&apos;s functionality and complexity, technical requirements, deployment, support and delivery timeline.
            </p>
            <Link className="text-link mt-7" to="/contact">
              Discuss your requirements <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>

    <section className="section-pad">
      <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-2xl">
          <Eyebrow>Not sure where to start?</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Start with the process that is costing your team time.</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            A useful first conversation is about the current workflow, where it breaks down and what a better outcome would look like.
          </p>
        </div>
        <Button asChild size="lg">
          <Link to="/contact">Discuss the problem</Link>
        </Button>
      </Container>
    </section>
    <ContactCTA />
  </>
);

export default Services;
