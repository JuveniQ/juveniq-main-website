import { ArrowLeft, Check, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import PageMeta from "@/components/PageMeta";
import ProjectStatus from "@/components/ProjectStatus";
import { ContactCTA, Container, Eyebrow } from "@/components/SiteElements";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const statusCopy = {
  Live: "This is a live software product with a deployed public experience.",
  "In development": "Development is ongoing. This is internal product work, not a completed client engagement.",
  Prototype: "This is a prototype used to explore and test a focused product idea.",
} as const;

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFound />;

  const externalLabel = project.status === "Prototype" ? "Open prototype" : `Visit ${project.title}`;
  return (
    <>
      <PageMeta title={project.title} description={project.seoDescription} path={`/work/${project.slug}`} />
      <section className="page-header border-b border-border">
        <Container>
          <Link className="text-link mb-8" to="/work"><ArrowLeft aria-hidden="true" /> All products & projects</Link>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <Eyebrow>{project.category}</Eyebrow>
              <h1 className="page-title">{project.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">{project.summary}</p>
            </div>
            <ProjectStatus status={project.status} className="w-fit" />
          </div>
        </Container>
      </section>
      <section className="section-pad">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Eyebrow>Problem & context</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Built for a defined operating need.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">{project.context}</p>
            <p className="mt-6 border-l-2 border-primary/35 pl-5 leading-7 text-foreground">{statusCopy[project.status]}</p>
            {project.url && <Button asChild className="mt-8"><a href={project.url} target="_blank" rel="noopener noreferrer">{externalLabel} <ExternalLink aria-hidden="true" /></a></Button>}
          </div>
          <div className={cn("project-visual", `project-visual--${project.accent}`)}>
            <div className="relative z-10 flex flex-col items-center gap-5 text-center">
              {project.image && <img src={project.image} alt={project.imageAlt ?? ""} className="max-h-28 max-w-[15rem] object-contain" onError={(event) => { event.currentTarget.style.display = "none"; }} />}
              <span className="text-3xl font-semibold tracking-tight text-white">{project.title}</span>
            </div>
          </div>
        </Container>
      </section>
      <section className="section-pad border-y border-border bg-muted/55">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>What JuveniQ built</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Product scope.</h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {project.built.map((item) => <li key={item} className="flex gap-3 py-4"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
          <div>
            <Eyebrow>Capabilities demonstrated</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Engineering focus.</h2>
            <ul className="mt-8 flex flex-wrap gap-3">
              {project.capabilities.map((item) => <li key={item} className="border border-border bg-background px-4 py-3 text-sm font-medium">{item}</li>)}
            </ul>
          </div>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
};

export default ProjectDetail;
