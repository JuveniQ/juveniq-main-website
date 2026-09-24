export const LEGAL_LAST_UPDATED = "24 September 2026";

export interface LegalNavigationItem {
  id: string;
  label: string;
}

export const legalDocuments = [
  { title: "Terms & Conditions", description: "Rules governing use of JuveniQ websites, products, subscriptions and software services.", href: "/terms", cta: "Read terms" },
  { title: "Privacy & POPIA Policy", description: "How JuveniQ collects, uses, protects and manages personal information.", href: "/privacy", cta: "Read privacy policy" },
  { title: "Refund & Cancellation Policy", description: "How project cancellations, subscription cancellations and refund requests are handled.", href: "/refund-cancellation-policy", cta: "Read refund policy" },
  { title: "PAIA Manual", description: "Information about requesting access to records held by JuveniQ.", href: "/paia", cta: "View PAIA information" },
] as const;

