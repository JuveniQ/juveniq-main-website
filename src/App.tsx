
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BrandLoader from "./components/BrandLoader";
import { useBrandLoaderState } from "./hooks/use-brand-loader";
import { useLenis } from "./hooks/use-lenis";
import Solutions from "./pages/Solutions";
import Process from "./pages/Process";
import CaseStudies from "./pages/CaseStudies";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import SiteBackground from "./components/SiteBackground";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookieConsentBanner from "./components/CookieConsentBanner";
import AnalyticsLoader from "./components/AnalyticsLoader";
import FloatingContactButton from "./components/FloatingContactButton";

const queryClient = new QueryClient();
const App = () => {
  const { isBootReady, markBootComplete } = useBrandLoaderState();
  useLenis();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnalyticsLoader />
          {!isBootReady && <BrandLoader onComplete={markBootComplete} />}
          <div className="site-shell min-h-screen flex flex-col w-full">
            <SiteBackground intensity="medium" showLines showNodes showCode />
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/services" element={<Services />} />
                <Route path="/process" element={<Process />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:slug" element={<ArticleDetail />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <FloatingContactButton />
            <Footer />
            <CookieConsentBanner />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

