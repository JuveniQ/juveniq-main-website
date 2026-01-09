import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight, Globe, Smartphone, Brain, Wrench,
  Lightbulb, Users, Zap, Shield, Briefcase, School, Heart, 
  ChevronRight, ChevronsRight, Star
} from "lucide-react";
import heroBanner from "@/assets/juveniq-banner-cape-town.png";

const Home = () => {
  const contentStartRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Web Applications",
      description: "Professional websites and web apps tailored for South African businesses"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions for iOS and Android"
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Intelligent tools to streamline your operations and boost productivity"
    },
    {
      icon: Wrench,
      title: "Tech Support",
      description: "Reliable ongoing support and training for your team"
    }
  ];

  const whyJuveniQ = [
    { icon: Lightbulb, title: "Tailored Simplicity", desc: "We build only what you need—no bloated features, just smart, simple tools that work." },
    { icon: Users, title: "Community-Focused", desc: "We empower local businesses and uplift South African communities through technology." },
    { icon: Zap, title: "End-to-End Service", desc: "From design to deployment to support—we handle everything so you can focus on growth." },
    { icon: Shield, title: "People First", desc: "We listen, educate, and ensure you're always in control of your technology." }
  ];

  const targetAudience = [
    { icon: Briefcase, label: "Small Businesses", desc: "Shops, salons, restaurants, logistics" },
    { icon: School, label: "Educators", desc: "Tutors, schools, training centres" },
    { icon: Heart, label: "NGOs", desc: "Community projects, outreach programmes" },
    { icon: Star, label: "Entrepreneurs", desc: "Startups, freelancers, creatives" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* === Hero Banner === */}
      <section className="w-full relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 relative z-10">
          <div className="max-w-2xl fade-in" style={{ '--delay': '0.2s' } as React.CSSProperties}>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Empowering South Africa with{" "}
              <span className="text-white/90">
                Simple Tech, Real Impact
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-white/80 mb-10 leading-relaxed">
              We don't just build software—we build partnerships. JuveniQ delivers technology solutions that drive real business growth across South Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-white/90 lift px-8 py-6 text-lg gap-3 group font-semibold">
                  Get a Quote
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 lift px-8 py-6 text-lg">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === Why JuveniQ? === */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Why Choose Juveni<span className='font-bold font-quando'>Q</span>?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just build software—we build lasting partnerships with South African businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyJuveniQ.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="card-3d lift group border-primary/20 hover:border-primary/40 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-6 text-center h-full flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-5 text-primary group-hover:scale-110 transition-transform">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-center flex-grow">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* === Target Audience === */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Who We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We design solutions for South African businesses and communities with real challenges and ambitious goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetAudience.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <Card
                  key={index}
                  className="card-3d lift group border-primary/20 text-center p-6 hover:bg-primary/5 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {audience.label}
                  </h3>
                  <p className="text-muted-foreground">{audience.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* === Services Section === */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What We Do Best
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We specialise in creating technology solutions that are simple, effective, and tailored to South African business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="card-3d lift group cursor-pointer border-primary/20 bg-background"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 transition-colors duration-300 group-hover:text-primary">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Let's build a technology solution that works for your business—simple, scalable, and built to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/95 lift px-8 py-6 text-lg gap-3 group font-semibold">
                Start Your Project
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 lift px-8 py-6 text-lg gap-3 group"
              >
                View All Services
                <ChevronsRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
