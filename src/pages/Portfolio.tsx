import { ExternalLink } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import ProjectPreview from "@/components/ProjectPreview";
import { ContactCTA, Container, Eyebrow, PageHeader } from "@/components/SiteElements";
import { projects } from "@/lib/data";

const featured = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

const Portfolio = () => (
  <>
    <PageMeta
      title="Our work"
      description="Selected software products and platforms designed and built by JuveniQ."
      path="/work"
    />
    <PageHeader eyebrow="Our work" title="Digital products built for a defined purpose.">
      A selection of platforms and product work that shows how we approach operational software, specialised workflows and useful digital experiences.
    </PageHeader>

    <section className="section-pad pt-0">
      <Container>
        <div className="space-y-20">
          {featured.map((project, index) => (
            <ProjectPreview key={project.slug} project={project} reverse={index % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>

    <section className="section-pad border-y border-border bg-muted/55">
      <Container>
        <div className="section-intro">
          <Eyebrow>Product development</Eyebrow>
          <h2>Other work in progress.</h2>
          <p>Status is shown explicitly so prototypes and internal products are not presented as completed client engagements.</p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {otherProjects.map((project) => (
            <article key={project.slug} className="bg-background p-7 sm:p-9">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-primary">{project.category}</span>
                <span className="status-label">{project.status}</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{project.title}</h3>
              <p className="mt-4 leading-7 text-muted-foreground">{project.summary}</p>
              <ul className="mt-6 space-y-2 text-sm text-foreground">
                {project.built.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
              {project.url && (
                <a className="text-link mt-7" href={project.url} target="_blank" rel="noopener noreferrer">
                  View prototype <ExternalLink aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
    <ContactCTA />
  </>
);

export default Portfolio;
