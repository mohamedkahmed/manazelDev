import { Building2, MapPin, TrendingUp, Award, Users, Shield, MessageCircle } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Real Estate Development",
      description: "Comprehensive development solutions from concept to completion",
      features: ["Residential Projects", "Commercial Buildings", "Mixed-Use Developments"]
    },
    {
      icon: MapPin,
      title: "Prime Locations",
      description: "Strategic site selection in Egypt's most desirable areas",
      features: ["Location Analysis", "Market Research", "Investment Opportunities"]
    },
    {
      icon: TrendingUp,
      title: "Investment Services",
      description: "Expert guidance for maximum return on investment",
      features: ["Portfolio Management", "Market Analysis", "ROI Optimization"]
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Uncompromising standards in construction and design",
      features: ["Premium Materials", "Expert Craftsmanship", "Quality Control"]
    },
    {
      icon: Users,
      title: "Client Relations",
      description: "Dedicated support throughout your real estate journey",
      features: ["Personal Consultations", "24/7 Support", "After-Sales Service"]
    },
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Complete legal security for all transactions",
      features: ["Legal Documentation", "Title Verification", "Contract Security"]
    }
  ];

  const stats = [
    { number: "500+", label: "Completed Projects", icon: Building2 },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "10,000+", label: "Happy Clients", icon: Users },
    { number: "50+", label: "Prime Locations", icon: MapPin }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background/95 to-brand-green/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-green mb-6">
            Why Choose Manazel Developments?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional real estate solutions 
            that exceed expectations and create lasting value.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-brand-green/20 hover:bg-white/70 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-green/10 text-brand-green mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-brand-green mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-brand-green/20 hover:bg-white/90 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-green text-white group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground ml-4">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-brand-green mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-green/10 text-brand-green mb-6 animate-pulse">
            <Building2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-brand-green mb-4">
            Ready to Start Your Real Estate Journey?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have trusted us with their real estate investments. 
            Let's build your future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="btn-hero inline-flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Get Free Consultation
            </a>
            <a 
              href="/projects" 
              className="btn-outline-hero border border-[#373b2b] bg-[#373b2b] hover:shadow-lg inline-flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <Building2 className="w-5 h-5" />
              View Our Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;