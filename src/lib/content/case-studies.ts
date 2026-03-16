import type { CaseStudyItem } from "./types";

export const caseStudies: CaseStudyItem[] = [
  {
    slug: "kota-os",
    name: "Kota-OS",
    status: "live",
    category: "POS Platform",
    image: "/images/products/kota-os/home.jpeg",
    summary:
      "An offline-first POS system built for township food vendors to run sales, inventory, and reporting with speed.",
    challenge:
      "Food vendors needed a reliable sales tool that works without stable connectivity while keeping stock and reporting consistent.",
    approach:
      "Designed a local-first sales flow with rapid item entry, structured inventory tracking, and clear reporting exports.",
    outcome:
      "Improved daily checkout speed with reliable offline operation and practical reporting for shop owners.",
    stack: ["Android", "Local-first storage", "Reporting exports"],
    ctaLabel: "View Live Product",
    ctaUrl: "https://kotaos.juveniq.co.za",
  },
];
