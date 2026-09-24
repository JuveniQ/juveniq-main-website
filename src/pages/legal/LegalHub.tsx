import { ArrowRight, Building2, FileCheck2 } from "lucide-react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import { Container, Eyebrow, PageHeader } from "@/components/SiteElements";
import { company } from "@/lib/company";
import { legalDocuments } from "@/lib/legal";

const LegalHub = () => (
  <>
    <PageMeta title="Legal & policies" description="JuveniQ terms, privacy practices, refund and cancellation policy, and PAIA access information." path="/legal" />
    <PageHeader eyebrow="Legal & policies" title="Clear information for customers and visitors.">
      Information about JuveniQ&apos;s terms, privacy practices, payments and access to company records.
    </PageHeader>
    <section className="section-pad pt-0">
      <Container>
        <div className="legal-card-grid">
          {legalDocuments.map((document) => (
            <article key={document.href} className="legal-card">
              <FileCheck2 aria-hidden="true" />
              <h2>{document.title}</h2>
              <p>{document.description}</p>
              <Link className="text-link mt-6" to={document.href}>{document.cta} <ArrowRight aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
        <aside className="mt-12 grid gap-6 border-y border-border py-8 sm:grid-cols-[auto_1fr] sm:items-start">
          <Building2 className="h-6 w-6 text-primary" aria-hidden="true" />
          <div>
            <Eyebrow>Company information</Eyebrow>
            <p className="mt-3 font-semibold">{company.legalName}</p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">Registration No. {company.registrationNumber} · {company.location}</p>
            <a className="text-link mt-4" href={`mailto:${company.email}`}>{company.email}</a>
          </div>
        </aside>
      </Container>
    </section>
  </>
);

export default LegalHub;
