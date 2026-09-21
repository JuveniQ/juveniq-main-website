import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoBlack from "@/assets/logo-black.png";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    firstMobileLinkRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const isActive = (href: string) =>
    location.pathname === href || (href === "/work" && location.pathname === "/portfolio");

  return (
    <header className="site-header">
      <nav className="site-container" aria-label="Primary navigation">
        <div className="flex h-[4.5rem] items-center justify-between">
          <Link to="/" className="brand-link" aria-label="JuveniQ home">
            <img src={logoBlack} alt="" className="h-8 w-auto" />
            <span>Juveni<span className="font-quando text-primary">Q</span></span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="nav-link"
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Button asChild className="hidden md:inline-flex">
            <Link to="/contact">
              Discuss a project <ArrowRight aria-hidden="true" />
            </Link>
          </Button>

          <button
            ref={menuButtonRef}
            type="button"
            className="menu-button md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {isMenuOpen && (
          <div id="mobile-navigation" className="mobile-navigation md:hidden">
            {navigation.map((item, index) => (
              <Link
                ref={index === 0 ? firstMobileLinkRef : undefined}
                key={item.name}
                to={item.href}
                className="mobile-nav-link"
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="mt-3 w-full">
              <Link to="/contact">Discuss a project</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
