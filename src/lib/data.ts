export type ProjectStatus = "Live" | "Pilot" | "In development" | "Prototype";

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
  seoDescription: string;
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
      "Web platforms, portals, dashboards, internal systems and custom business applications.",
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
      "Cross-platform software for customers, employees and operational teams.",
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
    title: "Systems Integration & Automation",
    summary:
      "APIs, workflow automation and integrations that keep information moving between existing business systems.",
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
    title: "Software Modernisation & Support",
    summary:
      "Maintenance, enhancement and modernisation of software your organisation already depends on.",
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
    category: "Offline food-business operations",
    status: "Pilot",
    summary:
      "Food-business operations that keep working offline. Sell during service, track recipe ingredients and see what needs attention.",
    context:
      "Independent food operators need to keep serving when connectivity drops and still know what each sale used. Kota-OS links menu items to ingredients, records waste, flags low stock and turns daily activity into reports. A controlled Gauteng pilot is gathering feedback from real businesses during lunch and dinner service.",
    built: [
      "Sales and order workflows with offline access",
      "Menu recipes linked to ingredient consumption",
      "Waste recording and low stock alerts",
      "Sales and operational reports",
    ],
    capabilities: ["Product design", "Business systems", "Offline workflows"],
    url: "https://kotaos.juveniq.co.za",
    image: "https://kotaos.juveniq.co.za/logo.jpeg",
    imageAlt: "Kota-OS product mark",
    featured: true,
    accent: "amber",
    seoDescription: "Kota-OS helps independent food businesses keep operating offline, track recipe ingredients and waste, and spot low stock. Currently in a Gauteng pilot.",
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
    seoDescription: "Votio is a live online voting and campaign platform built by JuveniQ for awards, pageants and structured campaigns.",
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
    seoDescription: "GigKasi is an in-development JuveniQ marketplace product exploring local service-provider discovery.",
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
    seoDescription: "JCV Maker is a JuveniQ prototype for creating a structured CV in the browser and exporting it as a PDF.",
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
