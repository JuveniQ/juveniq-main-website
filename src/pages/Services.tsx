import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Brain,
  Database,
  Headphones,
  ArrowRight,
  Check,
} from "lucide-react";
import { useEffect } from "react";
import { FaAndroid, FaApple } from 'react-icons/fa';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ServicePackages } from "@/components/ServicePackages";
import { webPackages, appPackages } from '@/lib/data';
import logoWhite from "@/assets/logo-white.png";

const Services = () => {
  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Web Applications",
      description: "Professional websites and web applications built with modern technologies to enhance your online presence and streamline business operations.",
      features: ["Responsive Design", "Cloud Deployment", "SEO Optimised", "Analytics Integration"]
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that connect you with your customers across South Africa and beyond.",
      features: ["iOS & Android", "Cross-Platform", "Push Notifications", "Offline Capability"]
    },
    {
      icon: Brain,
      title: "AI & Automation Tools",
      description: "Intelligent automation solutions that reduce manual work and improve efficiency across your organisation.",
      features: ["Process Automation", "AI Chatbots", "Data Analysis", "Smart Workflows"]
    },
    {
      icon: Database,
      title: "Business Systems",
      description: "Comprehensive business management systems including POS, CRM, and inventory management solutions.",
      features: ["Point of Sale", "Customer Management", "Inventory Tracking", "Financial Reports"]
    },
    {
      icon: Headphones,
      title: "Tech Support & Training",
      description: "Ongoing technical support and user training to ensure your team gets the most out of your technology investments.",
      features: ["Reliable Support", "User Training", "System Maintenance", "Performance Monitoring"]
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === Header === */}
        <div className="text-center mb-20 fade-in">
          <div className="mb-8 flex justify-center">
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From web applications to AI automation, we provide comprehensive
            technology solutions tailored to South African business needs.
          </p>
        </div>

        {/* === Mission Anchor === */}
        <div className="text-center mb-16 fade-in">
          <p className="text-lg text-muted-foreground italic max-w-3xl mx-auto">
            "<span className="font-semibold text-primary">Simple Tech. Real Impact.</span>" — We build only what you need, so you can focus on what matters most.
          </p>
        </div>

        {/* === Core Services Grid === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="card-3d lift group border-primary/20 hover:border-primary/40 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-3" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* === Service Packages === */}
        <div className="mb-20">
          <div className="text-center mb-10 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Service Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
              Ready-made solutions for South African businesses — professional, reliable, and scalable.
            </p>
          </div>

          <Tabs defaultValue="web" className="w-full">
            <TabsList className="flex gap-2 justify-center mb-8 flex-wrap bg-muted p-1 rounded-lg">
              <TabsTrigger value="web" className="flex items-center gap-2 text-base px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Globe className="h-5 w-5" />
                Web Packages
              </TabsTrigger>
              <TabsTrigger value="apps" className="flex items-center gap-2 text-base px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Mobile Apps
                <FaApple className="h-4 w-4" />
                <FaAndroid className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>

            <TabsContent value="web">
              <ServicePackages packages={webPackages} />
            </TabsContent>
            <TabsContent value="apps">
              <ServicePackages packages={appPackages} />
            </TabsContent>
          </Tabs>
        </div>

        {/* === CTA Section === */}
        <div className="text-center bg-primary rounded-2xl p-12 lg:p-16 shadow-xl relative overflow-hidden fade-in-up">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Need Something Custom?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Every business is unique. Let us create a tailored solution that perfectly
              fits your specific requirements and budget.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/95 lift px-8 py-6 text-lg gap-3 group font-semibold"
              >
                Discuss Your Project
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
