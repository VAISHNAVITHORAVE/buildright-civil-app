import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Our Services
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Comprehensive civil engineering and construction solutions tailored to your needs
            </p>
          </div>
        </section>
        
        <ServicesSection showAll />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
