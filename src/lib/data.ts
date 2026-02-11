import gigKasiImage from "/projects/gig-kasi.png";

export type ServicePackage = {
  type: "Web" | "App";
  name: string;
  summary: string;
  timeline: string;
  idealFor: string;
  includes: string[];
};

export const webPackages: ServicePackage[] = [
  {
    type: "Web",
    name: "Launch Site",
    summary: "Modern company website focused on trust, clarity, and conversion.",
    timeline: "2-4 weeks",
    idealFor: "New teams building a serious digital presence.",
    includes: [
      "Up to 5 key pages",
      "Responsive custom UI",
      "SEO-ready foundation",
      "Contact and lead capture flow",
      "Stabilization support",
    ],
  },
  {
    type: "Web",
    name: "Growth Platform",
    summary: "Scalable web system with richer structure and operational flexibility.",
    timeline: "5-8 weeks",
    idealFor: "Businesses moving from brochure sites to product-driven growth.",
    includes: [
      "Expanded page architecture",
      "Content management workflow",
      "Booking/commerce module integration",
      "Conversion analytics setup",
      "Maintenance and optimization",
    ],
  },
  {
    type: "Web",
    name: "Advanced Product",
    summary: "Custom web platform for complex business logic and user roles.",
    timeline: "12-16 weeks",
    idealFor: "Teams with multi-stage operations and deeper product requirements.",
    includes: [
      "Custom architecture planning",
      "Role-based user experiences",
      "API and third-party integrations",
      "Security and performance hardening",
      "Priority delivery support",
    ],
  },
];

export const appPackages: ServicePackage[] = [
  {
    type: "App",
    name: "Essential App",
    summary: "Cross-platform app for core workflows with reliable day-one usability.",
    timeline: "8-10 weeks",
    idealFor: "Teams introducing mobile access for clients or field operations.",
    includes: [
      "Android and iOS app delivery",
      "Authentication flow",
      "Core feature modules",
      "Push notifications",
      "Post-launch support",
    ],
  },
  {
    type: "App",
    name: "Business App",
    summary: "Feature-rich mobile product with deeper workflows and data flows.",
    timeline: "12-16 weeks",
    idealFor: "Businesses scaling customer journeys beyond static channels.",
    includes: [
      "Profile and account states",
      "Payment or booking integrations",
      "Search/filter systems",
      "Operations dashboard endpoints",
      "Maintenance cycle",
    ],
  },
  {
    type: "App",
    name: "Enterprise App",
    summary: "Large-scale mobile platform with hardened architecture and controls.",
    timeline: "20-24+ weeks",
    idealFor: "Organizations running high-dependency digital workflows.",
    includes: [
      "High-scale architecture",
      "Real-time + async modules",
      "Admin and analytics layer",
      "Security-first implementation",
      "Priority iteration support",
    ],
  },
];

export type ImpactStat = {
  label: string;
  value: string;
};

export const impactStats: ImpactStat[] = [
  { label: "Projects Delivered", value: "12+" },
  { label: "Active Clients", value: "8+" },
  { label: "Industries Served", value: "3" },
  { label: "Repeat Delivery Confidence", value: "90%" },
];

export type SolutionItem = {
  title: string;
  sector: string;
  summary: string;
  outcomes: string[];
};

export const solutions: SolutionItem[] = [
  {
    title: "Local Business Platforms",
    sector: "SME",
    summary:
      "Digital systems for service businesses that need clear bookings, follow-up, and repeat revenue.",
    outcomes: ["Lead capture to booking", "Simple ops dashboard", "Mobile-ready access"],
  },
  {
    title: "Enterprise Operations Layer",
    sector: "Enterprise",
    summary:
      "Workflow tooling for teams handling approvals, internal requests, and structured service delivery.",
    outcomes: ["Role-based processes", "Internal visibility", "Reduced handoff friction"],
  },
  {
    title: "AI-Enabled Process Automation",
    sector: "Automation",
    summary:
      "Practical automation pipelines that reduce manual workload without disrupting existing teams.",
    outcomes: ["Task routing", "Response acceleration", "Operational consistency"],
  },
];

export type ProcessStep = {
  id: string;
  title: string;
  summary: string;
  status: "active" | "ready" | "stable";
};

export const processSteps: ProcessStep[] = [
  {
    id: "discover",
    title: "Discover",
    summary: "Define business goals, user realities, constraints, and technical priorities.",
    status: "active",
  },
  {
    id: "design",
    title: "Design",
    summary: "Shape user flow and interface structure before heavy engineering begins.",
    status: "ready",
  },
  {
    id: "build",
    title: "Build",
    summary: "Implement robust modules with clean architecture and measurable checkpoints.",
    status: "active",
  },
  {
    id: "launch",
    title: "QA + Launch",
    summary: "Validate behavior, secure performance, and deploy with release discipline.",
    status: "stable",
  },
  {
    id: "support",
    title: "Support",
    summary: "Monitor usage, prioritize improvements, and keep delivery momentum.",
    status: "active",
  },
];

export type CaseStudyItem = {
  slug: string;
  name: string;
  status: "live" | "in-progress";
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

export const caseStudies: CaseStudyItem[] = [
  {
    slug: "gigkasi",
    name: "GigKasi",
    status: "live",
    category: "Marketplace Platform",
    image: gigKasiImage,
    summary:
      "A hyper-local platform connecting service seekers and providers through faster matching and direct in-app communication.",
    challenge:
      "Service discovery was fragmented across informal channels and inconsistent referral loops.",
    approach:
      "Build a location-aware matching flow with trust cues, lightweight onboarding, and clear action pathways.",
    outcome:
      "Early rollout improved local service discovery speed and reduced friction between request and fulfillment.",
    stack: ["React Native", "Firebase Auth", "Firestore", "Cloud Functions"],
    ctaLabel: "Get Product Updates",
    ctaUrl: null,
  },
  {
    slug: "ops-dashboard",
    name: "Enterprise Ops Dashboard",
    status: "in-progress",
    category: "Operations System",
    image: "/images/case-studies/ops-dashboard.webp",
    summary:
      "An internal command layer for tracking service operations, approvals, and response quality.",
    challenge:
      "Teams lacked one reliable view of request lifecycle and operational priorities.",
    approach:
      "Design a role-based control panel with real-time state visibility and workflow checkpoints.",
    outcome: "Currently in engineering and integration validation.",
    stack: ["React", "Node.js", "PostgreSQL"],
    ctaLabel: "Request Similar System",
    ctaUrl: null,
  },
  {
    slug: "service-intake",
    name: "Local Service Intake Platform",
    status: "in-progress",
    category: "Intake Automation",
    image: "/images/case-studies/service-intake.webp",
    summary:
      "A structured intake flow for businesses receiving high volumes of service requests.",
    challenge:
      "Manual intake caused delays, duplication, and weak follow-up consistency.",
    approach:
      "Create guided submission flows with routing rules and status tracking for each incoming request.",
    outcome: "In active prototyping with workflow simulation tests.",
    stack: ["React", "TypeScript", "Supabase"],
    ctaLabel: "Discuss Intake Automation",
    ctaUrl: null,
  },
];

export const projects = caseStudies.filter((item) => item.slug === "gigkasi");

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "AI" | "Architecture" | "Enterprise" | "Web3" | "Delivery";
  readTime: string;
  publishedAt: string;
  tags: string[];
  coverImage: string;
  sections: Array<{ heading: string; body: string }>;
};

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

export const articleCategories = ["All", "AI", "Architecture", "Enterprise", "Web3", "Delivery"] as const;

export const getArticleBySlug = (slug: string) => articles.find((article) => article.slug === slug);

