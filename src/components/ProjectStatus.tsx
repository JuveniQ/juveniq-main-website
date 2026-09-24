import { Circle } from "lucide-react";
import type { ProjectStatus as ProjectStatusValue } from "@/lib/data";
import { cn } from "@/lib/utils";

const statusStyles: Record<ProjectStatusValue, string> = {
  Live: "border-emerald-700/25 bg-emerald-50 text-emerald-800",
  "In development": "border-amber-700/25 bg-amber-50 text-amber-900",
  Prototype: "border-slate-500/30 bg-slate-50 text-slate-700",
};

const ProjectStatus = ({ status, className }: { status: ProjectStatusValue; className?: string }) => (
  <span className={cn("status-label inline-flex items-center gap-2", statusStyles[status], className)}>
    <Circle className="h-2 w-2 fill-current" aria-hidden="true" />
    {status}
  </span>
);

export default ProjectStatus;

