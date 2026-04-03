import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  const highlights = [
    "15+ Years of Excellence",
    "500+ Projects Delivered",
    "100% Client Satisfaction",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-cta rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Professional Civil Engineering Services
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in animation-delay-150">
            Complete Civil Engineering &{" "}
            <span className="text-cta">Construction Solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl animate-fade-in animation-delay-300">
            Transform your vision into reality with our expert team. From residential homes to commercial buildings, we deliver quality construction with precision and dedication.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in animation-delay-500">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-primary-foreground/90"
              >
                <CheckCircle2 className="w-5 h-5 text-cta" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-500">
            <Link to="/services">
              <Button className="btn-hero group">
                View Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/inquiry">
              <Button className="btn-outline-hero">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Projects Completed" },
              { value: "200+", label: "Happy Clients" },
              { value: "50+", label: "Expert Team" },
            ].map((stat) => (
              <div key={stat.label} className="stat-card py-6">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
