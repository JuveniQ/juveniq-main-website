import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AlertTriangle, ArrowRight, Briefcase, Home, Mail } from "lucide-react";
import BentoTile from "@/components/motion/BentoTile";
import BentoGrid from "@/components/motion/BentoGrid";
import { scrollViewportToTop, useScrollToTop } from "@/hooks/use-scroll-to-top";

const NotFound = () => {
  const location = useLocation();
  useScrollToTop();

  useEffect(() => {
    scrollViewportToTop();
  }, [location.pathname]);

  return (
    <div className="site-shell section-pad">
      <section className="section-shell">
        <BentoGrid className="grid gap-4 lg:grid-cols-12">
          <BentoTile itemClassName="lg:col-span-7" className="space-y-4">
            <div className="inline-flex text-cyan-300">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <h1 className="title-lg text-foreground">Page Not Found (404)</h1>
            <p className="copy-default text-muted-foreground">
              The route `{location.pathname}` could not be found. You can continue from a primary section below.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/" className="btn-cyan ring-cyan ring-led">
                Return Home
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-ghost-dark ring-cyan ring-led">
                Explore Services
              </Link>
              <Link to="/contact" className="btn-ghost-dark ring-cyan ring-led">
                Contact Team
              </Link>
            </div>
          </BentoTile>

          <BentoTile itemClassName="lg:col-span-5" className="space-y-3">
            <p className="eyebrow">Quick Routes</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link to="/" className="ring-cyan ring-led led-hover flex items-center gap-2 border-b border-border pb-2">
                <Home className="h-4 w-4 text-cyan-300" /> Home
              </Link>
              <Link to="/services" className="ring-cyan ring-led led-hover flex items-center gap-2 border-b border-border pb-2">
                <Briefcase className="h-4 w-4 text-cyan-300" /> Services
              </Link>
              <Link to="/contact" className="ring-cyan ring-led led-hover flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan-300" /> Contact
              </Link>
            </div>
          </BentoTile>
        </BentoGrid>
      </section>
    </div>
  );
};

export default NotFound;

