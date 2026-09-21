import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentClasses: Record<Project["accent"], string> = {
  amber: "project-visual--amber",
  wine: "project-visual--wine",
  navy: "project-visual--navy",
};

const ProjectPreview = ({ project, reverse = false }: { project: Project; reverse?: boolean }) => (
  <article className="project-row">
    <div className={cn("project-visual", accentClasses[project.accent], reverse && "lg:order-2")}>
      <div className="relative z-10 flex flex-col items-center gap-5 text-center">
        {project.image && (
          <img
            src={project.image}
            alt={project.imageAlt ?? ""}
            className={cn(
              "max-h-20 max-w-[11rem] object-contain",
              project.slug === "kota-os" && "rounded-xl shadow-lg",
            )}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        )}
        <span className="text-3xl font-semibold tracking-tight text-white">{project.title}</span>
      </div>
      <span className="project-visual__label">{project.category}</span>
    </div>

    <div className={cn("flex flex-col justify-center py-2 lg:px-8", reverse && "lg:order-1")}>
      <div className="flex flex-wrap items-center gap-3 text-sm">
        <span className="font-medium text-primary">{project.category}</span>
        <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
        <span className="text-muted-foreground">{project.status}</span>
      </div>
      <h3 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{project.title}</h3>
      <p className="mt-4 text-lg leading-8 text-foreground/85">{project.summary}</p>
      <p className="mt-4 leading-7 text-muted-foreground">{project.context}</p>
      <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2" aria-label={`${project.title} capabilities`}>
        {project.capabilities.map((capability) => (
          <li key={capability} className="text-sm font-medium text-foreground">
            {capability}
          </li>
        ))}
      </ul>
      {project.url && (
        <a className="text-link mt-8 w-fit" href={project.url} target="_blank" rel="noopener noreferrer">
          Visit {project.title} <ExternalLink aria-hidden="true" />
        </a>
      )}
    </div>
  </article>
);

export default ProjectPreview;
