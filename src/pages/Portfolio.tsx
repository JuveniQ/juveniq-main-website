import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import ProjectPreview from "@/components/ProjectPreview";
import ProjectStatus from "@/components/ProjectStatus";
import { ContactCTA, Container, Eyebrow, PageHeader } from "@/components/SiteElements";
import { projects, type ProjectStatus as ProjectStatusValue } from "@/lib/data";

const groups: Array<{ status: ProjectStatusValue; eyebrow: string; title: string; description: string }> = [
  { status: "Live", eyebrow: "Products in market", title: "Live software products.", description: "Deployed products with public experiences visitors can explore." },
  { status: "In development", eyebrow: "Product development", title: "Products in active development.", description: "Internal product work that is still being designed, built and refined." },
  { status: "Prototype", eyebrow: "Prototypes & experiments", title: "Ideas tested through working software.", description: "Early-stage tools used to explore a focused problem or product direction." },
];

const Portfolio = () => (
  <>
    <PageMeta title="Products & projects" description="Explore JuveniQ software products, platforms, in-development work and prototypes, with each product's status shown clearly." path="/work" />
    <PageHeader eyebrow="Products & projects" title="Software built around real operating problems.">
      This catalogue includes JuveniQ-owned products, internal product development and selected platforms. Development work and prototypes are explicitly labelled and are not presented as completed client engagements.
    </PageHeader>

    {groups.map((group, groupIndex) => {
      const groupProjects = projects.filter((project) => project.status === group.status);
      const sectionId = `work-${group.status.toLowerCase().replaceAll(" ", "-")}`;
      return (
        <section key={group.status} className={groupIndex === 0 ? "section-pad pt-0" : groupIndex % 2 === 1 ? "section-pad border-y border-border bg-muted/55" : "section-pad"} aria-labelledby={sectionId}>
          <Container>
            <div className="section-intro">
              <Eyebrow>{group.eyebrow}</Eyebrow>
              <h2 id={sectionId}>{group.title}</h2>
              <p>{group.description}</p>
            </div>
            <div className={group.status === "Live" ? "mt-14 space-y-20" : "mt-12 grid gap-px border border-border bg-border md:grid-cols-2"}>
              {groupProjects.map((project, index) =>
                group.status === "Live" ? (
                  <ProjectPreview key={project.slug} project={project} reverse={index % 2 === 1} />
                ) : (
                  <article key={project.slug} className="flex flex-col bg-background">
                    <div className={`project-visual project-card-visual project-visual--${project.accent}`}>
                      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                        {project.image && <img src={project.image} alt={project.imageAlt ?? ""} className="max-h-24 max-w-[13rem] object-contain" loading="lazy" onError={(event) => { event.currentTarget.style.display = "none"; }} />}
                        <span className="text-2xl font-semibold tracking-tight text-white">{project.title}</span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-7 sm:p-9">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <span className="text-sm font-medium text-primary">{project.category}</span>
                        <ProjectStatus status={project.status} />
                      </div>
                      <h3 className="mt-6 text-2xl font-semibold tracking-tight">{project.title}</h3>
                      <p className="mt-4 flex-1 leading-7 text-muted-foreground">{project.summary}</p>
                      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} capabilities`}>
                        {project.capabilities.map((capability) => <li key={capability} className="border border-border px-3 py-2 text-xs font-medium">{capability}</li>)}
                      </ul>
                      <Link className="text-link mt-7" to={`/work/${project.slug}`}>View project <ArrowRight aria-hidden="true" /></Link>
                    </div>
                  </article>
                ),
              )}
            </div>
          </Container>
        </section>
      );
    })}
    <ContactCTA />
  </>
);

export default Portfolio;
