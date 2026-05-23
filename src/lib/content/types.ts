export type ServicePackage = {
  type: "Web" | "App";
  name: string;
  summary: string;
  timeline: string;
  idealFor: string;
  includes: string[];
};

export type ImpactStat = {
  label: string;
  value: string;
};

export type SolutionItem = {
  title: string;
  sector: string;
  summary: string;
  outcomes: string[];
};

export type ProcessStepStatus = "active" | "ready" | "stable";

export type ProcessStep = {
  id: string;
  title: string;
  summary: string;
  status: ProcessStepStatus;
};

export type CaseStudyStatus = "live" | "in-progress";

export type CaseStudyItem = {
  slug: string;
  name: string;
  status: CaseStudyStatus;
  category: string;
  image: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  stack: string[];
  ctaLabel: string;
  ctaUrl: string | null;
};

export type ArticleCategory =
  | "AI"
  | "Architecture"
  | "Enterprise"
  | "Web3"
  | "Delivery";

export type ArticleSection = {
  heading: string;
  body: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  readTime: string;
  publishedAt: string;
  tags: string[];
  coverImage: string;
  sections: ArticleSection[];
};

