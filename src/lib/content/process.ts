import type { ProcessStep } from "./types";

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

