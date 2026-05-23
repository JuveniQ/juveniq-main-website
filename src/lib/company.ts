export const companyProfile = {
  legalName: "JuveniQ (Pty) Ltd",
  registrationNumber: "2025/699085/07",
  registeredAddress: "Remote Company - South Africa",
  supportEmail: "contact@juveniq.co.za",
  privacyEmail: "contact@juveniq.co.za",
  legalEmail: "contact@juveniq.co.za",
  canonicalDomain: "https://juveniq.co.za",
  foundedDate: "2025-06-06",
  policyEffectiveDate: "2026-02-10",
  governingLaw: "Republic of South Africa",
  disputeVenue: "High Court of South Africa - Gauteng Division",
  phoneNumbers: [
    { label: "+27 60 743 1268", tel: "+27607431268" },
    { label: "+27 78 332 2419", tel: "+27783322419" },
  ],
  providers: {
    hosting: "Netlify",
    domainRegistrar: "GoDaddy",
    email: "Lark",
    analytics: "Google Analytics (GA4)",
  },
} as const;

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100066476117731" },
  { label: "GitHub", href: "https://github.com/JuveniQ" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/juveniq" },
  { label: "Instagram", href: "https://instagram.com/juveniq" },
] as const;
