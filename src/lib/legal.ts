export const LEGAL_LAST_UPDATED = "25 September 2026";
export const LEGAL_LAST_UPDATED_ISO = "2026-09-25";

export interface LegalNavigationItem {
  id: string;
  label: string;
}

export const legalDocuments = [
  {
    title: "Terms & Conditions",
    description: "Rules governing JuveniQ websites, products, subscriptions and software service engagements.",
    href: "/terms",
    cta: "Read terms",
  },
  {
    title: "Privacy & POPIA Policy",
    description: "How JuveniQ collects, uses, protects, shares and manages personal information.",
    href: "/privacy",
    cta: "Read privacy policy",
  },
  {
    title: "Refund & Cancellation Policy",
    description: "How project cancellations, subscription cancellations, payment errors and refund requests are handled.",
    href: "/refund-cancellation-policy",
    cta: "Read refund policy",
  },
  {
    title: "PAIA Manual",
    description: "JuveniQ's section 51 information-access manual and guidance for requesting records.",
    href: "/paia",
    cta: "View PAIA manual",
  },
] as const;
