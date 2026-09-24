import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Portfolio from "@/pages/Portfolio";
import ProjectDetail from "@/pages/ProjectDetail";
import Services from "@/pages/Services";
import LegalHub from "@/pages/legal/LegalHub";
import Paia from "@/pages/legal/Paia";
import Privacy from "@/pages/legal/Privacy";
import RefundCancellation from "@/pages/legal/RefundCancellation";
import Terms from "@/pages/legal/Terms";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Portfolio />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/portfolio" element={<Navigate to="/work" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<LegalHub />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund-cancellation-policy" element={<RefundCancellation />} />
          <Route path="/paia" element={<Paia />} />
          <Route path="/privacy-policy" element={<Navigate to="/privacy" replace />} />
          <Route path="/refunds" element={<Navigate to="/refund-cancellation-policy" replace />} />
          <Route path="/terms-and-conditions" element={<Navigate to="/terms" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
