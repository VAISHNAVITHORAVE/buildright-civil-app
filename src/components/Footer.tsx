import { Link } from "react-router-dom";
import { Building2, Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">BuildRight</span>
                <span className="text-xs text-primary-foreground/70 -mt-1">Civil Engineers</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Professional civil engineering and construction services. Building dreams with precision, quality, and commitment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "Projects", "Contact", "Get Quote"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : link === "Get Quote" ? "/inquiry" : `/${link.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Residential Construction",
                "Commercial Construction",
                "Building Planning",
                "Renovation Work",
                "Project Supervision",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-cta" />
                <div>
                  <p className="text-sm text-primary-foreground/60">Phone</p>
                  <a href="tel:+919876543210" className="hover:text-cta transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-cta" />
                <div>
                  <p className="text-sm text-primary-foreground/60">Email</p>
                  <a href="mailto:info@buildright.com" className="hover:text-cta transition-colors">
                    info@buildright.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-cta" />
                <div>
                  <p className="text-sm text-primary-foreground/60">Office</p>
                  <p>123 Construction Lane,<br />Mumbai, Maharashtra 400001</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} BuildRight Civil Engineers. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
