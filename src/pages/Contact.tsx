import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Linkedin,
  MessageCircle,
  Github,
  Instagram
} from "lucide-react";


const Contact = () => {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      details: "contact@juveniq.co.za",
      action: "mailto:contact@juveniq.co.za",
    },
    {
      icon: Phone,
      title: "Phone Number #1",
      details: "+27 60 743 1268",
      action: "tel:+27607431268"
    },
    {
      icon: Phone,
      title: "Phone Number #2",
      details: "+27 78 332 2419",
      action: "tel:+27783322419"
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: "Gauteng, South Africa",
      action: "#",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 8AM - 6PM",
      action: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100066476117731",
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/JuveniQ",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/juveniq",
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://instagram.com/juveniq',
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === Header === */}
        <div className="text-center mb-16 fade-in">
          <div className="mb-8 flex justify-center">
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with technology? Let's discuss your project and create something amazing together.
          </p>
        </div>

        {/* === Slogan Anchor === */}
        <div className="text-center mb-16 fade-in">
          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            "<span className="font-semibold text-primary">Simple Tech. Real Impact.</span>" — We listen, we build, we support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* === Contact Form === */}
          <div className="fade-in-up" style={{ '--delay': '0.1s' } as React.CSSProperties}>
            <Card className="card-3d lift border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <MessageCircle className="mr-3 h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  action="https://formspree.io/f/mvgrrkdq"
                  method="POST"
                  className="space-y-6"
                >
                  <input type="hidden" name="_subject" value="New Contact Form Submission" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2 border-border focus:border-primary focus:ring-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2 border-border focus:border-primary focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-foreground">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-2 border-border focus:border-primary focus:ring-primary"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-2 min-h-[120px] border-border focus:border-primary focus:ring-primary"
                      placeholder="Tell us about your project, goals, and requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-primary lift px-6 py-3 text-lg gap-3 group"
                  >
                    Send Message
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* === Contact Info & Social === */}
          <div className="space-y-8 fade-in-up" style={{ '--delay': '0.3s' } as React.CSSProperties}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={info.title}
                    className="card-3d lift group border-primary/20 hover:border-primary/40 transition-all duration-300"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {info.title}
                      </h3>
                      {info.action.startsWith("mailto:") || info.action.startsWith("tel:") ? (
                        <a
                          href={info.action}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 block"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.details}</p>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* === Map Placeholder === */}
            <Card className="card-3d lift border-primary/20">
              <CardContent className="p-0">
                <div className="h-48 bg-secondary rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-foreground font-medium">eMalahleni, South Africa</p>
                    <p className="text-sm text-muted-foreground">Serving clients across South Africa</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* === Social Links === */}
            <Card className="card-3d lift border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                        aria-label={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="h-6 w-6" />
                      </a>
                    );
                  })}
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Stay updated with our latest projects and tech insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* === FAQs Section === */}
        <div className="mt-20 fade-in-up" style={{ '--delay': '0.2s' } as React.CSSProperties}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to questions you may have
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "What's your typical project timeline?",
                answer:
                  "Most projects take 2-8 weeks depending on complexity. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes! All our packages include support periods, and we offer extended maintenance plans for long-term partnerships.",
              },
              {
                question: "Can you work with existing systems?",
                answer:
                  "Absolutely. We specialise in integrating with existing software and databases to enhance your current setup.",
              },
              {
                question: "What technologies do you use?",
                answer:
                  "We use modern, proven technologies like React, Node.js, Python, and cloud platforms to ensure reliability and scalability.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="card-3d lift border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
