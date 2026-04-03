import { useState } from "react";
import { MapPin, Calendar, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import residentialImage from "@/assets/project-residential.jpg";
import commercialImage from "@/assets/project-commercial.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Villa Residence",
    location: "Bandra, Mumbai",
    type: "Residential",
    year: "2024",
    description: "A stunning 4-bedroom modern villa featuring contemporary architecture, energy-efficient design, and premium finishes throughout.",
    area: "4,500 sq ft",
    image: residentialImage,
  },
  {
    id: 2,
    title: "Corporate Office Tower",
    location: "BKC, Mumbai",
    type: "Commercial",
    year: "2023",
    description: "A 12-story commercial complex with state-of-the-art facilities, LEED certification, and modern workspace design.",
    area: "85,000 sq ft",
    image: commercialImage,
  },
  {
    id: 3,
    title: "Luxury Apartment Complex",
    location: "Powai, Mumbai",
    type: "Residential",
    year: "2023",
    description: "Premium residential complex with 120 apartments, clubhouse, swimming pool, and landscaped gardens.",
    area: "150,000 sq ft",
    image: residentialImage,
  },
  {
    id: 4,
    title: "Shopping Mall",
    location: "Thane, Maharashtra",
    type: "Commercial",
    year: "2022",
    description: "Modern retail destination featuring 200+ stores, food court, multiplex, and parking for 1000+ vehicles.",
    area: "300,000 sq ft",
    image: commercialImage,
  },
  {
    id: 5,
    title: "Heritage Bungalow Renovation",
    location: "Colaba, Mumbai",
    type: "Renovation",
    year: "2024",
    description: "Careful restoration of a 100-year-old heritage property, preserving original character while adding modern amenities.",
    area: "6,000 sq ft",
    image: residentialImage,
  },
  {
    id: 6,
    title: "Industrial Warehouse",
    location: "Navi Mumbai",
    type: "Industrial",
    year: "2022",
    description: "Large-scale warehouse facility with loading docks, climate control, and advanced security systems.",
    area: "200,000 sq ft",
    image: commercialImage,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Residential", "Commercial", "Renovation", "Industrial"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Our Projects
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Explore our portfolio of successfully completed construction projects
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                
                {/* View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 bg-cta rounded-full flex items-center justify-center">
                    <Eye className="w-6 h-6 text-cta-foreground" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <span className="px-3 py-1 bg-cta/90 rounded-full text-cta-foreground font-medium">
                      {project.type}
                    </span>
                    <span className="text-primary-foreground/80">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cta transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-6">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-sm text-muted-foreground">Type</div>
                  <div className="font-semibold text-foreground">{selectedProject.type}</div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-semibold text-foreground">{selectedProject.location}</div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-sm text-muted-foreground">Year</div>
                  <div className="font-semibold text-foreground">{selectedProject.year}</div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-sm text-muted-foreground">Area</div>
                  <div className="font-semibold text-foreground">{selectedProject.area}</div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {selectedProject.description}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
