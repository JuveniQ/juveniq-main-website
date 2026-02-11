import RouteSeo from "@/components/RouteSeo";
import HomeCapabilitiesSection from "@/components/home/HomeCapabilitiesSection";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import HomeMetricsSection from "@/components/home/HomeMetricsSection";
import HomeProcessSection from "@/components/home/HomeProcessSection";
import HomeTechnicalClaritySection from "@/components/home/HomeTechnicalClaritySection";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const Home = () => {
  useScrollToTop();

  return (
    <div className="site-shell">
      <RouteSeo
        title="JuveniQ | AI & Software Engineering for Growth Teams"
        description="JuveniQ builds practical AI and software systems for local businesses and enterprise operations across Africa."
        path="/"
        image="/images/hero/africa-tech-hero.webp"
        imageAlt="African technology team collaborating on software delivery"
      />
      <HomeHeroSection />
      <HomeCapabilitiesSection />
      <HomeProcessSection />
      <HomeTechnicalClaritySection />
      <HomeMetricsSection />
    </div>
  );
};

export default Home;

