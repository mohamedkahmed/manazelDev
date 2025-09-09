import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, Users, Target, TrendingUp, Clock, Shield } from 'lucide-react';

const About = () => {
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

  const achievements = [
    { number: "50+", label: "Completed Projects", icon: Award },
    { number: "1000+", label: "Happy Families", icon: Users },
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "99%", label: "Customer Satisfaction", icon: Target }
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We never compromise on quality. Every project undergoes rigorous quality checks and adheres to international construction standards."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We embrace cutting-edge technology and innovative design solutions to create properties that are ahead of their time."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do. We listen, understand, and deliver solutions that exceed expectations."
    },
    {
      icon: Target,
      title: "Sustainability",
      description: "We are committed to sustainable development practices that protect the environment for future generations."
    }
  ];

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
                About Our Company
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Discover the story behind Manazil Developments and our commitment to 
                creating exceptional real estate experiences across Egypt.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="scroll-animate">
                <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Founded in 2008 by a team of visionary architects and real estate professionals, 
                    Manazil Developments was born from a simple yet powerful idea: to transform 
                    the Egyptian real estate landscape through innovative and sustainable development.
                  </p>
                  <p>
                    What started as a small firm with big dreams has grown into one of Egypt's 
                    most trusted real estate developers. Our journey has been marked by continuous 
                    growth, learning, and adaptation to market needs while maintaining our core 
                    values of quality, integrity, and customer satisfaction.
                  </p>
                  <p>
                    Today, we stand proud as creators of over 50 premium developments, having 
                    delivered homes and commercial spaces to more than 1,000 satisfied customers 
                    across Egypt. Our projects span from luxury residential compounds to 
                    state-of-the-art commercial complexes.
                  </p>
                </div>
              </div>
              
              <div className="scroll-animate">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" 
                    alt="Modern building architecture"
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="scroll-animate text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Our Achievements</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Numbers that reflect our commitment to excellence and customer satisfaction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="scroll-animate text-center property-card p-8 rounded-xl animate-scale-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-muted-foreground font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="scroll-animate text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do and define who we are as a company
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="scroll-animate property-card p-8 rounded-xl animate-scale-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-6">
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
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="scroll-animate text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Leadership Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet the experienced professionals who drive our vision forward
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ahmed Mohamed",
                  position: "Chief Executive Officer",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                },
                {
                  name: "Sarah Hassan",
                  position: "Chief Architecture Officer",
                  image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80"
                },
                {
                  name: "Omar Ali",
                  position: "Head of Development",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
                }
              ].map((member, index) => (
                <div 
                  key={index}
                  className="scroll-animate text-center property-card p-8 rounded-xl animate-scale-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
                  <p className="text-muted-foreground font-medium">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;