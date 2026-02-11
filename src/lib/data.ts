export type {
  Article,
  ArticleCategory,
  ArticleSection,
  CaseStudyItem,
  CaseStudyStatus,
  ImpactStat,
  ProcessStep,
  ProcessStepStatus,
  ServicePackage,
  SolutionItem,
} from "./content/types";

export { webPackages, appPackages } from "./content/services";
export { impactStats } from "./content/stats";
export { solutions } from "./content/solutions";
export { processSteps } from "./content/process";
export { caseStudies } from "./content/case-studies";
export { articles, articleCategories, getArticleBySlug } from "./content/articles";

import { caseStudies } from "./content/case-studies";

export const projects = caseStudies.filter((item) => item.slug === "gigkasi");

