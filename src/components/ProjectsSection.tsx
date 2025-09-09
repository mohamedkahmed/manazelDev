import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Home, DollarSign } from 'lucide-react';

const ProjectsSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Golden Heights Residence",
      location: "New Cairo, Egypt",
      type: "Residential",
      price: "Starting from $150,000",
      units: "120 Units",
      status: "Under Construction",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      description: "Luxury residential compound featuring modern apartments with premium amenities and green spaces."
    },
    {
      id: 2,
      title: "Crystal Bay Commercial",
      location: "Alexandria, Egypt",
      type: "Commercial",
      price: "Starting from $200,000",
      units: "80 Units",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      description: "State-of-the-art commercial complex with modern office spaces and retail outlets."
    },
    {
      id: 3,
      title: "Emerald Gardens Villa",
      location: "6th October City, Egypt",
      type: "Villas",
      price: "Starting from $300,000",
      units: "45 Villas",
      status: "Available",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      description: "Exclusive villa compound with private gardens, swimming pools, and luxury finishes."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Premium Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our portfolio of exceptional developments, each designed to provide 
              the perfect blend of luxury, comfort, and modern living.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="scroll-animate property-card rounded-xl overflow-hidden animate-scale-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Available' ? 'bg-green-100 text-green-800' :
                    project.status === 'Under Construction' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
                
                <div className="flex items-center text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{project.location}</span>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Home className="w-4 h-4 mr-2" />
                      <span>{project.units}</span>
                    </div>
                    <div className="flex items-center text-sm font-semibold text-primary">
                      <DollarSign className="w-4 h-4 mr-1" />
                      <span>{project.price}</span>
                    </div>
                  </div>
                </div>

                <Link 
                  to={`/projects/${project.id}`}
                  className={` bg-white flex-center justify-center p-3 text-sm w-full rounded-sm border border-[#ddd] hover:bg-[#f7d588] hover:border-[#f7d588] hover:shadow-lg inline-flex items-center text-primary  hover:text-primary/80 transition-colors group`}
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="scroll-animate text-center">
          <Link 
            to="/projects" 
            className="btn-hero inline-flex items-center gap-2"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

