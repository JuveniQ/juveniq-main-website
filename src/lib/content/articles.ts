import type { Article } from "./types";

export const articles: Article[] = [
  {
    slug: "local-first-software-architecture-africa",
    title: "Local-First Software Architecture for African Markets",
    excerpt:
      "How to design products that respect network realities, device diversity, and local business workflows.",
    category: "Architecture",
    readTime: "7 min",
    publishedAt: "2026-01-14",
    tags: ["Africa", "Architecture", "Scalability"],
    coverImage: "/images/articles/local-first-architecture.webp",
    sections: [
      {
        heading: "Why Local-First Matters",
        body:
          "Across many markets, stable connectivity cannot be assumed. Local-first architecture keeps user flows resilient by prioritizing offline-safe interactions, delayed sync models, and graceful fallback states.",
      },
      {
        heading: "Designing for Device Diversity",
        body:
          "Interface weight, image strategy, and runtime complexity should be budgeted for mid-range devices. Small wins in payload size and interaction cost often produce major gains in retention.",
      },
      {
        heading: "Operational Fit",
        body:
          "Products should mirror real workflows, not idealized ones. Field interviews and process mapping reduce architecture mistakes and improve long-term adoption.",
      },
    ],
  },
  {
    slug: "practical-ai-workflows-service-businesses",
    title: "Practical AI Workflows for Service Businesses",
    excerpt:
      "A practical approach to integrating AI where it saves time without disrupting existing operations.",
    category: "AI",
    readTime: "6 min",
    publishedAt: "2026-01-28",
    tags: ["AI", "Automation", "Operations"],
    coverImage: "/images/articles/practical-ai-workflows.webp",
    sections: [
      {
        heading: "Start with Repetition",
        body:
          "AI works best when applied to repetitive, rules-driven tasks first. Intake classification, response drafting, and routing decisions are practical entry points.",
      },
      {
        heading: "Control and Review",
        body:
          "For most teams, AI should augment, not replace, final human approval. Build review checkpoints and track confidence metrics before expanding scope.",
      },
      {
        heading: "Measure the Right Outcome",
        body:
          "Track reduction in turnaround time, fewer missed requests, and consistency improvements. These indicators are usually more useful than vanity model metrics.",
      },
    ],
  },
  {
    slug: "enterprise-engineering-readiness",
    title: "Enterprise Engineering Readiness: From MVP to Stable Platform",
    excerpt:
      "The engineering shifts required when a product graduates from pilot usage to multi-team dependency.",
    category: "Enterprise",
    readTime: "8 min",
    publishedAt: "2026-02-05",
    tags: ["Enterprise", "Reliability", "Systems"],
    coverImage: "/images/articles/enterprise-readiness.webp",
    sections: [
      {
        heading: "Architecture Discipline",
        body:
          "As usage grows, ad-hoc modules become expensive to maintain. Introduce boundaries, observability, and versioning early to avoid high migration pressure later.",
      },
      {
        heading: "Operational Visibility",
        body:
          "Enterprise systems require actionable telemetry. Track latency, queue states, and workflow bottlenecks so teams can respond before service quality drops.",
      },
      {
        heading: "Governance as Product Work",
        body:
          "Permission logic, auditability, and deployment controls are part of the product. Treat governance requirements as first-class implementation priorities.",
      },
    ],
  },
  {
    slug: "web-mobile-hybrid-product-path",
    title: "Choosing Web, Mobile, or Hybrid for Operational Teams",
    excerpt:
      "A framework for deciding the right product channel based on usage context, adoption needs, and delivery speed.",
    category: "Delivery",
    readTime: "5 min",
    publishedAt: "2026-02-11",
    tags: ["Web", "Mobile", "Product Strategy"],
    coverImage: "/images/articles/web-mobile-hybrid.webp",
    sections: [
      {
        heading: "Usage Context First",
        body:
          "If work happens mostly at desks, web often wins. If teams operate in transit or on-site, mobile-native affordances become a priority.",
      },
      {
        heading: "Delivery Constraints",
        body:
          "Hybrid and cross-platform routes accelerate early launch, but the right choice depends on long-term feature depth and platform-specific requirements.",
      },
      {
        heading: "Lifecycle Thinking",
        body:
          "Plan for how channels evolve together. A web admin layer and mobile field layer can coexist effectively when architecture decisions are made upfront.",
      },
    ],
  },
  {
    slug: "designing-trust-marketplace-systems",
    title: "Designing Trust in Marketplace Systems",
    excerpt:
      "Lessons from building local service matching products where trust is the key conversion driver.",
    category: "Web3",
    readTime: "7 min",
    publishedAt: "2026-02-17",
    tags: ["Marketplace", "Trust", "GigKasi"],
    coverImage: "/images/articles/trust-marketplace.webp",
    sections: [
      {
        heading: "Trust Is Interface Logic",
        body:
          "Ratings, response times, verification cues, and clear status communication influence decisions more than decorative visuals.",
      },
      {
        heading: "Reduce Ambiguity",
        body:
          "Ambiguous states reduce confidence. Every request should communicate status, next action, and expected timeline in plain language.",
      },
      {
        heading: "Integrity Signals",
        body:
          "Structured profiles, activity history, and transparent outcomes build confidence and improve marketplace continuity over time.",
      },
    ],
  },
  {
    slug: "technical-delivery-playbook-growing-teams",
    title: "Technical Delivery Playbook for Growing Product Teams",
    excerpt:
      "A practical framework for shipping consistently while balancing speed, quality, and evolving scope.",
    category: "Delivery",
    readTime: "6 min",
    publishedAt: "2026-02-21",
    tags: ["Delivery", "Engineering", "Process"],
    coverImage: "/images/articles/delivery-playbook.webp",
    sections: [
      {
        heading: "Scope by Outcome",
        body:
          "Break work into releaseable outcomes, not just feature lists. This keeps teams focused on value and reduces drift.",
      },
      {
        heading: "Cadence and Feedback",
        body:
          "Short review loops expose risk earlier. Weekly quality checkpoints usually outperform long, opaque implementation cycles.",
      },
      {
        heading: "Stability as Throughput",
        body:
          "Reliable releases increase speed over time. Fewer regressions mean less rework and more confidence for product iteration.",
      },
    ],
  },
];

export const articleCategories = [
  "All",
  "AI",
  "Architecture",
  "Enterprise",
  "Web3",
  "Delivery",
] as const;

export const getArticleBySlug = (slug: string) =>
  articles.find((article) => article.slug === slug);

