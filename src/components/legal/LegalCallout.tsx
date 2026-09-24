import type { ReactNode } from "react";

const LegalCallout = ({ title, children }: { title: string; children: ReactNode }) => (
  <aside className="legal-callout">
    <h3>{title}</h3>
    <div>{children}</div>
  </aside>
);

export default LegalCallout;

