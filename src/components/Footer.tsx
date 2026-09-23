import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="site-footer">
    <div className="site-container">
      <div className="footer-grid">
        <div className="max-w-md">
          <Link to="/" className="text-2xl font-semibold text-white" aria-label="JuveniQ home">
            Juveni<span className="font-quando text-blue-300">Q</span>
          </Link>
          <p className="mt-5 leading-7 text-white/65">
            A registered South African software company building practical systems around real business problems.
          </p>
          <div className="mt-7 flex gap-3">
            {[
              { label: "GitHub", href: "https://github.com/JuveniQ/", Icon: Github },
              { label: "LinkedIn", href: "https://www.linkedin.com/company/juveniq", Icon: Linkedin },
              { label: "Instagram", href: "https://instagram.com/juveniq", Icon: Instagram },
            ].map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={label}>
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="footer-heading">Company</h2>
          <ul className="footer-links">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Contact</h2>
          <ul className="footer-links">
            <li><a href="mailto:contact@juveniq.co.za">contact@juveniq.co.za</a></li>
            <li><a href="tel:+27607431268">+27 60 743 1268</a></li>
            <li><a href="tel:+27783322419">+27 78 332 2419</a></li>
            <li>Gauteng, South Africa</li>
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Company details</h2>
          <dl className="space-y-4 text-sm text-white/65">
            <div><dt className="sr-only">Legal name</dt><dd>JuveniQ (Pty) Ltd</dd></div>
            <div><dt className="text-xs uppercase tracking-wider text-white/40">Registration</dt><dd className="mt-1">K2025699085</dd></div>
          </dl>
          <a className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-200" href="mailto:contact@juveniq.co.za">
            <Mail className="h-4 w-4" aria-hidden="true" /> Email JuveniQ
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} JuveniQ (Pty) Ltd. All rights reserved.</p>
        <p>Simple Tech, Real Impact.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
