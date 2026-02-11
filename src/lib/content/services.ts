import type { ServicePackage } from "./types";

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

