import { Award, Clock, Shield, Users } from "lucide-react";
import engineerImage from "@/assets/engineer-portrait.jpg";

const features = [
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Decades of expertise in civil engineering and construction",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Rigorous quality control at every stage of construction",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Committed to meeting deadlines without compromising quality",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled engineers, architects, and construction professionals",
  },
];

const AboutSection = () => {
  return (
    <section className="container-section bg-muted/50">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={engineerImage}
              alt="Civil Engineer"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </div>
          {/* Floating Card */}
          <div className="absolute -bottom-8 -right-8 bg-card rounded-xl shadow-xl p-6 max-w-xs hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-cta rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-cta-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="section-title">Building Excellence Since 2009</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              With over 15 years of experience in civil engineering and construction, we have established ourselves as a trusted partner for residential and commercial projects. Our commitment to quality, innovation, and customer satisfaction drives everything we do.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Led by experienced civil engineers, our team combines technical expertise with practical knowledge to deliver projects that exceed expectations. From initial planning to final handover, we ensure every detail is perfect.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
