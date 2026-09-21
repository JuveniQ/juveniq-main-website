import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Container = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("site-container", className)}>{children}</div>
);

export const Eyebrow = ({ children, className }: { children: ReactNode; className?: string }) => (
  <p className={cn("eyebrow", className)}>{children}</p>
);

export const PageHeader = ({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) => (
  <section className="page-header">
    <Container>
      <div className="max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="page-title">{title}</h1>
        <div className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">{children}</div>
      </div>
    </Container>
  </section>
);

export const ContactCTA = () => (
  <section className="section-pad">
    <Container>
      <div className="cta-panel">
        <div className="max-w-2xl">
          <Eyebrow className="text-white/65">Start a conversation</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Have a software problem worth solving?
          </h2>
          <p className="mt-5 text-base leading-7 text-white/75 sm:text-lg">
            Tell us what you&apos;re trying to improve. We&apos;ll help you determine what an appropriate technical solution and first step could look like.
          </p>
        </div>
        <Button asChild size="lg" className="shrink-0 bg-white text-primary hover:bg-white/90">
          <Link to="/contact">
            Discuss your project <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </Container>
  </section>
);
