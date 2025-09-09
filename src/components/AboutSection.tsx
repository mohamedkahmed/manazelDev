import { useEffect } from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';
import jounryImage from "../assets/pexels-frankfurtpictures-3646913.jpg"
const AboutSection = () => {
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

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To create exceptional living spaces that enhance communities and exceed expectations through innovative design and sustainable development practices."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading real estate developer in Egypt, recognized for transforming landscapes and enriching lives through premium developments."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in every project, ensuring quality construction, modern amenities, and attention to detail."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building more than properties – we create vibrant communities where families thrive and businesses flourish."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Manazel Developments
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With over 15 years of excellence in real estate development, we have established ourselves 
              as a trusted name in creating premium residential and commercial spaces across Egypt.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="scroll-animate property-card p-8 rounded-xl animate-scale-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Story */}
        <div className="scroll-animate bg-card rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">Our Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2008, Manazel Developments began with a simple yet ambitious vision: 
                  to transform the Egyptian real estate landscape through innovative and sustainable development.
                </p>
                <p>
                  Over the years, we have successfully delivered over 50 premium projects, 
                  ranging from luxury residential compounds to cutting-edge commercial complexes. 
                  Our commitment to quality and customer satisfaction has earned us the trust of 
                  more than 1,000 families and numerous business partners.
                </p>
                <p>
                  Today, we continue to push boundaries in design, technology, and sustainability, 
                  ensuring that every Manazil development sets new standards for modern living and working environments.
                </p>
              </div>
            </div>
            <div className="relative">
  {/* background */}
  <div className="absolute inset-0">
    <img 
      src={jounryImage} 
      alt="Real Estate" 
      className="w-full h-full object-cover rounded-2xl"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
  </div>

  {/* content */}
  <div className="relative aspect-square rounded-2xl p-8 flex items-center justify-center">
    <div className="text-center text-white">
      <div className="text-6xl font-bold mb-4">15+</div>
      <div className="text-xl mb-6">Years of Excellence</div>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold">50+</div>
          <div className="text-sm">Projects</div>
        </div>
        <div>
          <div className="text-2xl font-bold">1000+</div>
          <div className="text-sm">Families</div>
        </div>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;