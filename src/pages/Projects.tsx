import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Home, DollarSign, Calendar, Filter, Search } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

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
      completionDate: "Q4 2024",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      description: "Luxury residential compound featuring modern apartments with premium amenities, green spaces, and 24/7 security. Located in the heart of New Cairo with easy access to major roads and facilities."
    },
    {
      id: 2,
      title: "Crystal Bay Commercial",
      location: "Alexandria, Egypt",
      type: "Commercial",
      price: "Starting from $200,000",
      units: "80 Units",
      status: "Completed",
      completionDate: "Completed",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      description: "State-of-the-art commercial complex featuring modern office spaces, retail outlets, and conference facilities. Prime location with excellent connectivity and parking facilities."
    },
    {
      id: 3,
      title: "Emerald Gardens Villa",
      location: "6th October City, Egypt",
      type: "Villas",
      price: "Starting from $300,000",
      units: "45 Villas",
      status: "Available",
      completionDate: "Ready",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      description: "Exclusive villa compound with private gardens, swimming pools, and luxury finishes. Each villa offers spacious living areas and modern amenities in a gated community."
    },
    {
      id: 4,
      title: "Metropolitan Tower",
      location: "Downtown Cairo, Egypt",
      type: "Commercial",
      price: "Starting from $180,000",
      units: "200 Units",
      status: "Under Construction",
      completionDate: "Q2 2025",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
      description: "Modern high-rise building in the heart of Cairo offering premium office spaces with stunning city views and state-of-the-art facilities."
    },
    {
      id: 5,
      title: "Seaside Retreat",
      location: "North Coast, Egypt",
      type: "Residential",
      price: "Starting from $250,000",
      units: "85 Units",
      status: "Planning",
      completionDate: "Q1 2026",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      description: "Beachfront residential project offering luxury apartments and chalets with direct beach access, swimming pools, and resort-style amenities."
    },
    {
      id: 6,
      title: "Green Valley Homes",
      location: "Sheikh Zayed, Egypt",
      type: "Villas",
      price: "Starting from $320,000",
      units: "60 Villas",
      status: "Available",
      completionDate: "Ready",
      image: "https://images.unsplash.com/photo-1628624747186-a49819ca2fac?auto=format&fit=crop&w=800&q=80",
      description: "Eco-friendly villa community surrounded by greenery, featuring solar panels, water recycling systems, and sustainable building materials."
    }
  ];

  const filterOptions = ['All', 'Residential', 'Commercial', 'Villas'];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'All' || project.type === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Page Hero */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                Our Projects
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Explore our comprehensive portfolio of premium developments across Egypt, 
                each designed to set new standards in modern living and commercial excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-muted-foreground mr-2" />
                {filterOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setFilter(option)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      filter === option
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-background text-foreground hover:bg-muted'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
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
                        project.status === 'Available' || project.status === 'Ready' ? 'bg-green-100 text-green-800' :
                        project.status === 'Under Construction' ? 'bg-yellow-100 text-yellow-800' :
                        project.status === 'Planning' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
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

                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Home className="w-4 h-4 mr-2" />
                          <span>{project.units}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{project.completionDate}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-lg font-bold text-primary">
                          <DollarSign className="w-5 h-5 mr-1" />
                          <span>{project.price}</span>
                        </div>
                      </div>
                    </div>

                    <Link 
                      to={`/projects/${project.id}`}
                      className="w-full btn-hero text-center block"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">No projects found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;