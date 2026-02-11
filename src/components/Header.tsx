import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import MagneticButton from "@/components/motion/MagneticButton";
import BrandLogo from "@/components/BrandLogo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isRouteActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-white/12 bg-slate-950/76 backdrop-blur-xl">
      <nav className="section-shell">
        <div className="flex h-[74px] items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2.5">
            <span className="inline-flex rounded-lg border border-white/20 bg-slate-900/75 px-2 py-1">
              <BrandLogo variant="darkBg" size="md" />
            </span>
            <span className="hidden font-montserrat text-xl font-bold text-slate-100 sm:inline" aria-label="JuveniQ">
              Juveni
              <span className="font-quando font-normal">Q</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                aria-label={`Navigate to ${item.label}`}
                className={`ring-cyan led-hover rounded-lg border px-3 py-2 text-sm font-semibold transition-colors ${
                  isRouteActive(item.href)
                    ? "led-border bg-cyan-300/16 text-cyan-100 shadow-[0_0_14px_hsl(var(--led-blue)/0.2)]"
                    : "border-transparent text-slate-300 hover:bg-white/5 hover:text-slate-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <MagneticButton>
              <Link to="/contact" aria-label="Book strategy call" className="btn-cyan ring-cyan">
                Book Strategy Call
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </MagneticButton>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen((previousState) => !previousState)}
              className="ring-cyan ring-led led-hover inline-flex rounded-lg border border-white/20 bg-slate-900/70 p-2 text-slate-100"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mb-4 rounded-2xl border border-white/12 bg-slate-900/90 p-3 backdrop-blur-xl lg:hidden"
            >
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    aria-label={`Navigate to ${item.label}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`ring-cyan led-hover rounded-lg border px-3 py-2 text-sm font-semibold ${
                      isRouteActive(item.href)
                        ? "led-border bg-cyan-300/16 text-cyan-100 shadow-[0_0_12px_hsl(var(--led-blue)/0.22)]"
                        : "border-transparent text-slate-300 hover:bg-white/5 hover:text-slate-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <MagneticButton className="mt-3 w-full">
                <Link to="/contact" aria-label="Book strategy call" onClick={() => setIsMenuOpen(false)} className="btn-cyan ring-cyan w-full">
                  Book Strategy Call
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </MagneticButton>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;

