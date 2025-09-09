import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, MapPin, Home, DollarSign, Calendar, User, Wifi, Dumbbell, Car, Shield, Waves, TreePine, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  // Mock project data - in real app, fetch from API
  const projects = {
    1: {
      title: "Golden Heights Residence",
      location: "New Cairo, Egypt",
      type: "Residential",
      price: "Starting from $150,000",
      units: "120 Units",
      status: "Under Construction",
      completionDate: "Q4 2024",
      developer: "Manazil Developments",
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566753029-d8b369fe1ae6?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Golden Heights Residence represents the pinnacle of modern residential living in New Cairo. This luxury compound features contemporary apartments designed with the highest standards of comfort and elegance. Located in the heart of New Cairo, residents enjoy easy access to major roads, shopping centers, schools, and hospitals.",
      amenities: [
        { icon: Shield, name: "24/7 Security", description: "Round-the-clock security with CCTV surveillance" },
        { icon: Waves, name: "Swimming Pool", description: "Olympic-size swimming pool with kids' area" },
        { icon: Dumbbell, name: "Fitness Center", description: "Fully equipped gym with modern equipment" },
        { icon: Car, name: "Covered Parking", description: "Underground parking for all residents" },
        { icon: TreePine, name: "Green Spaces", description: "Landscaped gardens and walking paths" },
        { icon: Wifi, name: "High-Speed Internet", description: "Fiber optic internet throughout the compound" }
      ],
      specifications: {
        "Total Area": "50,000 sqm",
        "Building Height": "12 floors",
        "Apartment Sizes": "90-250 sqm",
        "Bedrooms": "1-4 bedrooms",
        "Bathrooms": "1-3 bathrooms",
        "Balconies": "All units have balconies"
      },
      floorPlans: [
        { type: "1 Bedroom", size: "90 sqm", price: "$150,000" },
        { type: "2 Bedroom", size: "130 sqm", price: "$200,000" },
        { type: "3 Bedroom", size: "180 sqm", price: "$280,000" },
        { type: "4 Bedroom", size: "250 sqm", price: "$380,000" }
      ]
    },
    2: {
      title: "Crystal Bay Commercial",
      location: "Alexandria, Egypt",
      type: "Commercial",
      price: "Starting from $200,000",
      units: "80 Units",
      status: "Completed",
      completionDate: "Completed",
      developer: "Manazil Developments",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Crystal Bay Commercial is a state-of-the-art commercial complex located in the heart of Alexandria. Featuring modern office spaces, retail outlets, and conference facilities, this development is designed to meet the needs of contemporary businesses while providing an inspiring work environment.",
      amenities: [
        { icon: Shield, name: "24/7 Security", description: "Professional security and access control" },
        { icon: Car, name: "Ample Parking", description: "Multi-level parking for clients and employees" },
        { icon: Wifi, name: "High-Speed Internet", description: "Enterprise-grade internet connectivity" },
        { icon: Dumbbell, name: "Business Center", description: "Meeting rooms and conference facilities" }
      ],
      specifications: {
        "Total Area": "25,000 sqm",
        "Building Height": "15 floors",
        "Unit Sizes": "50-500 sqm",
        "Parking Spaces": "200 spaces",
        "Elevators": "4 high-speed elevators",
        "HVAC": "Central air conditioning"
      },
      floorPlans: [
        { type: "Small Office", size: "50 sqm", price: "$200,000" },
        { type: "Medium Office", size: "120 sqm", price: "$450,000" },
        { type: "Large Office", size: "250 sqm", price: "$900,000" },
        { type: "Retail Space", size: "100 sqm", price: "$350,000" }
      ]
    },
    3: {
      title: "Emerald Gardens Villa",
      location: "6th October City, Egypt",
      type: "Villas",
      price: "Starting from $300,000",
      units: "45 Villas",
      status: "Available",
      completionDate: "Ready",
      developer: "Manazil Developments",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Emerald Gardens Villa offers an exclusive collection of luxury villas in a gated community in 6th October City. Each villa features private gardens, swimming pools, and luxury finishes, providing the perfect blend of privacy and community living.",
      amenities: [
        { icon: Shield, name: "Gated Community", description: "Private security and controlled access" },
        { icon: Waves, name: "Private Pools", description: "Each villa has its own swimming pool" },
        { icon: TreePine, name: "Private Gardens", description: "Landscaped gardens for each villa" },
        { icon: Car, name: "Private Garage", description: "2-3 car garage per villa" },
        { icon: Dumbbell, name: "Club House", description: "Community center with facilities" }
      ],
      specifications: {
        "Villa Sizes": "300-500 sqm",
        "Land Area": "400-700 sqm per villa",
        "Bedrooms": "4-6 bedrooms",
        "Bathrooms": "4-6 bathrooms",
        "Floors": "2-3 floors",
        "Pool Size": "6x12 meters"
      },
      floorPlans: [
        { type: "Villa Type A", size: "300 sqm", price: "$300,000" },
        { type: "Villa Type B", size: "400 sqm", price: "$420,000" },
        { type: "Villa Type C", size: "500 sqm", price: "$600,000" }
      ]
    }
  };

  const project = projects[id];

  if (!project) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Project Not Found</h1>
            <Link to="/projects" className="btn-hero">
              Back to Projects
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>
        </div>

        {/* Image Gallery */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={project.images[currentImageIndex]} 
                alt={project.title}
                className="w-full h-96 md:h-[500px] object-cover"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex space-x-4 mt-6 overflow-x-auto pb-2">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    index === currentImageIndex ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt={`${project.title} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="scroll-animate">
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      project.status === 'Available' || project.status === 'Ready' ? 'bg-green-100 text-green-800' :
                      project.status === 'Under Construction' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{project.title}</h1>
                  
                  <div className="flex items-center text-muted-foreground mb-8">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="text-lg">{project.location}</span>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>

                {/* Specifications */}
                <div className="scroll-animate mb-12">
                  <h2 className="text-3xl font-bold text-primary mb-6">Project Specifications</h2>
                  <div className="property-card p-6 rounded-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(project.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                          <span className="font-medium text-foreground">{key}:</span>
                          <span className="text-muted-foreground">{value as string}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floor Plans & Pricing */}
                <div className="scroll-animate mb-12">
                  <h2 className="text-3xl font-bold text-primary mb-6">Floor Plans & Pricing</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.floorPlans.map((plan, index) => (
                      <div key={index} className="property-card p-6 rounded-xl animate-scale-hover">
                        <h3 className="text-xl font-bold text-primary mb-4">{plan.type}</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Size:</span>
                            <span className="font-medium">{plan.size}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Price:</span>
                            <span className="font-bold text-primary text-lg">{plan.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="scroll-animate">
                  <h2 className="text-3xl font-bold text-primary mb-6">Amenities & Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.amenities.map((amenity, index) => (
                      <div key={index} className="property-card p-6 rounded-xl animate-scale-hover">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <amenity.icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-primary mb-2">{amenity.name}</h3>
                            <p className="text-muted-foreground">{amenity.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="scroll-animate sticky top-24">
                  <div className="property-card p-8 rounded-xl mb-8">
                    <h3 className="text-2xl font-bold text-primary mb-6">Project Info</h3>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-muted-foreground">
                          <DollarSign className="w-5 h-5 mr-2" />
                          <span>Starting Price</span>
                        </div>
                        <span className="font-bold text-primary text-lg">{project.price}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-muted-foreground">
                          <Home className="w-5 h-5 mr-2" />
                          <span>Total Units</span>
                        </div>
                        <span className="font-medium">{project.units}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="w-5 h-5 mr-2" />
                          <span>Completion</span>
                        </div>
                        <span className="font-medium">{project.completionDate}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-muted-foreground">
                          <User className="w-5 h-5 mr-2" />
                          <span>Developer</span>
                        </div>
                        <span className="font-medium">{project.developer}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <button className="w-full btn-hero">
                        Request More Info
                      </button>
                      <Link to="/contact" className="w-full btn-outline-hero text-center block">
                        Schedule a Visit
                      </Link>
                    </div>
                  </div>

                  {/* Contact Card */}
                  <div className="property-card p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-primary mb-4">Need Help?</h4>
                    <p className="text-muted-foreground mb-4">
                      Our sales team is ready to assist you with any questions about this project.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <span className="text-muted-foreground">Phone:</span>
                        <span className="ml-2 font-medium">+20 XXX XXX XXXX</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-muted-foreground">Email:</span>
                        <span className="ml-2 font-medium">sales@manazeldevelopments.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;