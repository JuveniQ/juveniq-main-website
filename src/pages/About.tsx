import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, TrendingUp, Link } from "lucide-react";
import { useEffect } from "react";
import icon from '/JIQ_main_logo_no_bg.png';

const About = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We build trust through transparency, honesty, and ethical business practices in everything we do."
    },
    {
      icon: Target,
      title: "Simplicity",
      description: "Complex problems deserve simple solutions. We focus on creating technology that just works."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We're committed to growing alongside our clients and the broader African tech ecosystem."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We measure our impact by the positive change we create for you."
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === Header === */}
        <div className="text-center mb-20 fade-in">
          <div className="mb-8 flex justify-center">
            <div className="logo-space-small w-24 h-24 rounded-full bg-primary shadow-xl group">
              <img src={icon} alt="JuveniQ Logo" className="h-24 w-auto transition-transform duration-300 group-hover:scale-105" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About JuveniQ
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're a young, dynamic African tech startup on a mission to make
            technology accessible and impactful for businesses across the continent.
          </p>
        </div>

        {/* === Mission & Vision === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="fade-in-up" style={{ '--delay': '0.1s' } as React.CSSProperties}>
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Heart className="text-primary" size={28} />
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To democratize technology access for African businesses by providing
              simple, affordable, and impactful software solutions. We believe that
              every business, regardless of size, deserves access to world-class technology.
            </p>
          </div>
          <div className="fade-in-up" style={{ '--delay': '0.3s' } as React.CSSProperties}>
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Target className="text-accent" size={28} />
              Our Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To become Africa's most trusted technology partner, known for creating
              solutions that drive real business growth and positive social impact
              across the continent.
            </p>
          </div>
        </div>

        {/* === Founders Story === */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-16 mb-24 card-3d shadow-xl relative overflow-hidden">
          {/* Decorative floating shape */}
          <div className="pointer-events-none absolute -top-16 -right-16 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>

          <h2 className="text-4xl font-bold text-foreground mb-12 text-center z-10 relative">
            Our Founding Story
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Founders working together"
                className="rounded-2xl w-full h-80 object-cover shadow-2xl lift hover:shadow-3xl transition-shadow"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-lg text-tertiary leading-relaxed mb-6">
                JuveniQ was started by a team of passionate technologists with a shared
                vision for using innovation to empower African businesses.
              </p>
              <p className="text-lg text-tertiary leading-relaxed mb-6">
                After witnessing countless small businesses struggle with outdated systems
                and expensive software solutions, the team set out to create a company
                that would bridge the technology gap for African entrepreneurs.
              </p>
              <p className="text-lg text-tertiary leading-relaxed">
                Beginning from a small shared workspace, JuveniQ has grown into a
                trusted partner for businesses, NGOs, and individuals across South Africa
                and beyond.
              </p>
            </div>

          </div>
        </div>

        {/* === Core Values === */}
        <div className="mb-20">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These principles guide every decision we make and every solution we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="card-3d lift group border-primary/20 hover:border-primary/40 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* === Tagline CTA === */}

      </div>
    </div>
  );
};

export default About;