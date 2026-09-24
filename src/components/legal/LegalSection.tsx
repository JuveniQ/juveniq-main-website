import type { ReactNode } from "react";

const LegalSection = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
  <section id={id} className="legal-section" aria-labelledby={`${id}-heading`}>
    <h2 id={`${id}-heading`}>{title}</h2>
    <div className="legal-prose">{children}</div>
  </section>
);

export default LegalSection;

