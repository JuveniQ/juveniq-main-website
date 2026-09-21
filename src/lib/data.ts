export type ProjectStatus = "Live" | "In development" | "Prototype";

export interface Project {
  slug: string;
  title: string;
  category: string;
  status: ProjectStatus;
  summary: string;
  context: string;
  built: string[];
  capabilities: string[];
  url?: string;
  image?: string;
  imageAlt?: string;
  featured: boolean;
  accent: "amber" | "wine" | "navy";
}

export interface Service {
  title: string;
  summary: string;
  problems: string;
  deliverables: string[];
  engagement: string;
}

export const services: Service[] = [
  {
    title: "Custom Software Development",
    summary:
      "Web platforms, portals, dashboards and internal systems designed around a specific business process.",
    problems:
      "A generic tool does not fit the way your team works, or manual processes are limiting growth and visibility.",
    deliverables: [
      "Customer and staff portals",
      "Dashboards and administration tools",
      "Purpose-built web applications",
      "Database and API development",
    ],
    engagement: "Scoped per project after discovery.",
  },
  {
    title: "Mobile Application Development",
    summary:
      "Cross-platform applications for customers, field teams and operational workflows.",
    problems:
      "People need to complete important tasks away from a desk or through a focused mobile experience.",
    deliverables: [
      "Android and iOS applications",
      "Account and workflow interfaces",
      "Offline-aware experiences",
      "Backend and API integration",
    ],
    engagement: "Scoped per project based on platforms, features and integrations.",
  },
  {
    title: "Business Process Automation",
    summary:
      "Connected workflows that reduce repetitive administration and keep information moving between systems.",
    problems:
      "Teams repeatedly copy data, manage work in spreadsheets or rely on disconnected tools.",
    deliverables: [
      "Workflow automation",
      "System and payment integrations",
      "APIs and data synchronisation",
      "Operational reporting tools",
    ],
    engagement: "Starts with a process review and a clearly defined automation opportunity.",
  },
  {
    title: "Software Support & Modernisation",
    summary:
      "Maintenance, enhancement and technical support for software your organisation already depends on.",
    problems:
      "An existing system needs new features, better reliability or a practical route away from ageing technology.",
    deliverables: [
      "Codebase and architecture review",
      "Feature development",
      "Performance and reliability improvements",
      "Deployment and ongoing support",
    ],
    engagement: "Available as a defined improvement project or ongoing support arrangement.",
  },
];

export const projects: Project[] = [
  {
    slug: "kota-os",
    title: "Kota-OS",
    category: "Point-of-sale and operations software",
    status: "Live",
    summary:
      "Operational software designed around the day-to-day needs of independent and township food businesses.",
    context:
      "Food operators need a dependable way to capture sales, manage stock and understand performance without adding unnecessary complexity. Kota-OS brings those operational tasks into one focused product with offline-first use at its core.",
    built: [
      "Sales and order workflows",
      "Inventory management",
      "Operational reporting",
      "Offline-first application behaviour",
    ],
    capabilities: ["Product design", "Business systems", "Offline workflows"],
    url: "https://kotaos.juveniq.co.za",
    image: "https://kotaos.juveniq.co.za/logo.jpeg",
    imageAlt: "Kota-OS product mark",
    featured: true,
    accent: "amber",
  },
  {
    slug: "votio",
    title: "Votio",
    category: "Online voting and campaign platform",
    status: "Live",
    summary:
      "A complete digital platform for organisations running awards, pageants and structured voting campaigns.",
    context:
      "Votio gives organisers a purpose-built environment for setting up campaigns, managing nominees and running an online voting experience. It demonstrates JuveniQ's ability to take a specialised workflow from product design through to a deployed platform.",
    built: [
      "Campaign and category management",
      "Nominee profiles and voting journeys",
      "Organiser administration",
      "South African payment workflows",
    ],
    capabilities: ["Platform engineering", "Payments", "Product delivery"],
    url: "https://votio.co.za",
    image: "https://votio.co.za/Assets/votio-logo.svg",
    imageAlt: "Votio product logo",
    featured: true,
    accent: "wine",
  },
  {
    slug: "gigkasi",
    title: "GigKasi",
    category: "Local services marketplace",
    status: "In development",
    summary:
      "An internal product exploring how local service providers and people seeking help can find one another more easily.",
    context:
      "The product is being developed as a focused marketplace for local work and services. It is not presented as completed client work.",
    built: ["Marketplace workflows", "Provider discovery", "Mobile product design"],
    capabilities: ["Mobile applications", "Marketplace design"],
    image: "/projects/gig-kasi.png",
    imageAlt: "GigKasi mobile application screens",
    featured: false,
    accent: "navy",
  },
  {
    slug: "jcv-maker",
    title: "JCV Maker",
    category: "CV creation tool",
    status: "Prototype",
    summary:
      "A guided browser-based tool for building a CV from configurable sections and exporting it as a PDF.",
    context:
      "The prototype explores a simpler way for job seekers to structure and export a professional CV.",
    built: ["Guided content workflow", "Template selection", "PDF export"],
    capabilities: ["Web applications", "Document generation"],
    url: "https://jcv-maker.netlify.app/",
    image: "/projects/jcv.png",
    imageAlt: "JCV Maker interface",
    featured: false,
    accent: "navy",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understand the business process, users, constraints and objective.",
  },
  {
    number: "02",
    title: "Solution design",
    description: "Define requirements, user experience, technical architecture and delivery scope.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop iteratively with regular demonstrations and feedback.",
  },
  {
    number: "04",
    title: "Launch & support",
    description: "Deploy the solution, monitor it and continue improving it where required.",
  },
];
