import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type Package = {
  type: string;
  name: string;
  description: string;
  delivery: string;
  minZar?: number;
  maxZar?: number;
  features: string[];
};

export function ServicePackages({ packages }: { packages: Package[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {packages.map((pkg, index) => (
        <Card
          key={pkg.name}
          className="card-3d lift group border-primary/20 hover:border-primary/40 transition-all duration-300 bg-background"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <CardHeader className="text-center pb-6">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {pkg.type} Package
            </div>
            <CardTitle className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
              {pkg.name}
            </CardTitle>
            <div className="text-sm text-muted-foreground">
              Delivery: {pkg.delivery}
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="mb-6 text-muted-foreground text-sm leading-relaxed">
              {pkg.description}
            </p>
            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-start group/item">
                  <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <Button className="btn-primary lift w-full text-base gap-2 group/btn">
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
