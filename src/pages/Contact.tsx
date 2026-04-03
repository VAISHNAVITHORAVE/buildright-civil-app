import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
    link: "tel:+919876543210",
    description: "Mon-Sat, 9AM-6PM",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@buildright.com",
    link: "mailto:info@buildright.com",
    description: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Office Address",
    value: "123 Construction Lane, Andheri West, Mumbai, Maharashtra 400058",
    link: "https://maps.google.com",
    description: "Visit us anytime",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
    description: "Sunday: Closed",
  },
];

const Contact = () => {
  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in your civil engineering services.");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Get in touch with our team for any queries or to discuss your project
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((item) => (
              <div key={item.title} className="card-elevated p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{item.value}</p>
                )}
                <p className="text-sm text-muted-foreground/70 mt-2">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Map and Quick Contact */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="card-elevated overflow-hidden h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>

            {/* Quick Contact */}
            <div className="card-elevated p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Quick Contact
              </h2>
              <p className="text-muted-foreground mb-8">
                Need immediate assistance? Reach out to us directly through phone or WhatsApp for a quick response.
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 p-4 bg-muted rounded-xl hover:bg-muted/80 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Call Now
                    </div>
                    <div className="text-sm text-muted-foreground">+91 98765 43210</div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-green-600 transition-colors">
                      WhatsApp
                    </div>
                    <div className="text-sm text-muted-foreground">Chat with us instantly</div>
                  </div>
                </a>

                <a
                  href="mailto:info@buildright.com"
                  className="flex items-center gap-4 p-4 bg-muted rounded-xl hover:bg-muted/80 transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      Email Us
                    </div>
                    <div className="text-sm text-muted-foreground">info@buildright.com</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
