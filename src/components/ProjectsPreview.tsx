import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import residentialImage from "@/assets/project-residential.jpg";
import commercialImage from "@/assets/project-commercial.jpg";

const featuredProjects = [
  {
    id: 1,
    title: "Modern Villa Residence",
    location: "Bandra, Mumbai",
    type: "Residential",
    year: "2024",
    image: residentialImage,
  },
  {
    id: 2,
    title: "Corporate Office Tower",
    location: "BKC, Mumbai",
    type: "Commercial",
    year: "2023",
    image: commercialImage,
  },
];

const ProjectsPreview = () => {
  return (
    <section className="container-section bg-background">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Our Portfolio
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore our recently completed construction projects.
          </p>
        </div>
        <Link
          to="/projects"
          className="inline-flex items-center text-primary font-semibold hover:gap-3 gap-2 transition-all"
        >
          View All Projects
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <Link
            key={project.id}
            to="/projects"
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[4/3]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
              <div className="flex items-center gap-2 text-sm mb-2">
                <span className="px-3 py-1 bg-cta/90 rounded-full text-cta-foreground font-medium">
                  {project.type}
                </span>
                <span className="text-primary-foreground/80">{project.year}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-cta transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>{project.location}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPreview;
