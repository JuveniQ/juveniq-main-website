import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector("#footer");
    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    <footer
      id="footer"
      className="bg-primary text-primary-foreground relative overflow-hidden"
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <img src={logoWhite} alt="JuveniQ Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
                <span className="text-2xl font-montserrat font-bold text-white">
                  Juveni
                  <span className="font-quando">Q</span>
                </span>
              </Link>
            </div>

            <p className="text-white/80 mb-6 max-w-md mt-4 leading-relaxed">
              Empowering South African businesses with simple, impactful technology
              solutions. From web applications to AI automation, we make tech
              work for you.
            </p>

            <div className="flex space-x-5 mt-2">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=100066476117731" },
                { Icon: Github, href: "https://github.com/JuveniQ/" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/juveniq" },
                { Icon: Instagram, href: "https://instagram.com/juveniq" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-all duration-200 transform-gpu hover:scale-110"
                >
                  <social.Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block py-1 text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start group">
                <Phone size={16} className="mr-2 text-white/70 mt-1" />
                <a
                  href="tel:+27607431268"
                  className="text-white/70 hover:text-white transition-colors whitespace-nowrap"
                >
                  +27 60 743 1268
                </a>
              </li>
              <li className="flex items-start group">
                <Phone size={16} className="mr-2 text-white/70 mt-1" />
                <a
                  href="tel:+27783322419"
                  className="text-white/70 hover:text-white transition-colors whitespace-nowrap"
                >
                  +27 78 332 2419
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 text-white/70 mt-1" />
                <span className="text-white/70">Gauteng, South Africa</span>
              </li>
              <li className="flex items-start group">
                <Mail size={16} className="mr-2 text-white/70 mt-1" />
                <a
                  href="mailto:contact@juveniq.co.za"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  contact@juveniq.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-10 pt-8">
          <p className="text-white/60 text-center text-sm md:text-base">
            © 2025 JuveniQ. All rights reserved. Proudly South African.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
