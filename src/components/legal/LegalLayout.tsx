import type { ReactNode } from "react";
import PageMeta from "@/components/PageMeta";
import { Container, Eyebrow } from "@/components/SiteElements";
import { company } from "@/lib/company";
import {
  LEGAL_LAST_UPDATED,
  LEGAL_LAST_UPDATED_ISO,
  type LegalNavigationItem,
} from "@/lib/legal";

interface LegalLayoutProps {
  title: string;
  description: string;
  path: string;
  navigation: LegalNavigationItem[];
  children: ReactNode;
}

const LegalLayout = ({ title, description, path, navigation, children }: LegalLayoutProps) => (
  <>
    <PageMeta title={title} description={description} path={path} />
    <header className="legal-header">
      <Container>
        <Eyebrow>{company.legalName}</Eyebrow>
        <h1 className="page-title">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{description}</p>
        <p className="mt-6 text-sm font-medium text-foreground">
          Last updated: <time dateTime={LEGAL_LAST_UPDATED_ISO}>{LEGAL_LAST_UPDATED}</time>
        </p>
      </Container>
    </header>
    <section className="section-pad pt-0">
      <Container className="legal-layout">
        <nav className="legal-toc" aria-label={`On this ${title} page`}>
          <h2>On this page</h2>
          <ol>
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ol>
        </nav>
        <article className="legal-content">{children}</article>
      </Container>
    </section>
  </>
);

export default LegalLayout;
