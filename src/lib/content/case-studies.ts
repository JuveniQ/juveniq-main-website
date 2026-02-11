import type { CaseStudyItem } from "./types";

const gigKasiImage = "/projects/gig-kasi.png";

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
