import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import { Container, Eyebrow } from "@/components/SiteElements";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <>
    <PageMeta title="Page not found" description="The requested page could not be found." path="/404" />
    <section className="flex min-h-[65vh] items-center py-20">
      <Container>
        <div className="max-w-xl">
          <Eyebrow>404 — Page not found</Eyebrow>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">This page is not available.</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            The address may have changed, or the page may no longer exist.
          </p>
          <Button asChild className="mt-8">
            <Link to="/"><ArrowLeft aria-hidden="true" /> Return home</Link>
          </Button>
        </div>
      </Container>
    </section>
  </>
);

export default NotFound;
