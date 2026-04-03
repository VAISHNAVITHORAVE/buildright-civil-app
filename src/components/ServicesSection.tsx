import { Link } from "react-router-dom";
import { ArrowRight, Home, Building, Ruler, Wrench, HardHat, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom homes built to perfection. From foundation to finishing, we handle every aspect of your dream home construction.",
  },
  {
    icon: Building,
    title: "Commercial Construction",
    description: "Modern commercial spaces designed for success. Offices, retail, and industrial buildings built to the highest standards.",
  },
  {
    icon: Ruler,
    title: "Building Planning & Design",
    description: "Comprehensive architectural planning and structural design services to bring your vision to life.",
  },
  {
    icon: Wrench,
    title: "Renovation & Repair",
    description: "Transform existing structures with expert renovation services. Quality repairs that stand the test of time.",
  },
  {
    icon: HardHat,
    title: "Structural Consultancy",
    description: "Expert structural analysis and consultancy services for safe, durable, and code-compliant buildings.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Supervision",
    description: "End-to-end project management ensuring timely delivery, quality control, and budget adherence.",
  },
];

interface ServicesSectionProps {
  showAll?: boolean;
}

const ServicesSection = ({ showAll = false }: ServicesSectionProps) => {
  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section className="container-section bg-background">
      <div className="text-center mb-16">
        <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
          What We Offer
        </span>
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle mx-auto">
          Comprehensive civil engineering and construction services tailored to meet your unique requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedServices.map((service, index) => (
          <div
            key={service.title}
            className="service-card group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {service.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {service.description}
            </p>
            <Link
              to="/inquiry"
              className="inline-flex items-center text-primary font-medium hover:gap-3 gap-2 transition-all"
            >
              Get Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" size="lg" className="group">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export { services };
export default ServicesSection;
