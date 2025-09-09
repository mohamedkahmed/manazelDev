import { useEffect, useRef } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroVideoPoster from '../assets/hero-video-poster.jpg';

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Scroll animation observer
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

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="hero-video absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={heroVideoPoster}
        >
          <source 
            src="https://www.pexels.com/download/video/4424416/" 
            type="video/mp4" 
          />
          {/* Fallback for browsers that don't support video */}
          <img 
            src={heroVideoPoster} 
            alt="Luxury Real Estate Development" 
            className="w-full h-full object-cover" 
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        <div className="scroll-animate">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Building Your
            <span className="block text-accent"> Dream Future</span>
          </h1>
        </div>
        
        <div className="scroll-animate" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Discover premium residential and commercial properties that redefine modern living. 
            Where luxury meets innovation in every detail.
          </p>
        </div>

        <div 
          className="scroll-animate flex flex-col sm:flex-row gap-6 justify-center items-center" 
          style={{ animationDelay: '0.4s' }}
        >
          <Link to="/projects" className="btn-hero inline-flex items-center gap-2">
            Explore Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          <Link to="/contact" className="btn-outline-hero inline-flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Get in Touch
          </Link>
        </div>

        {/* Stats */}
        <div 
          className="scroll-animate mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto" 
          style={{ animationDelay: '0.6s' }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">50+</div>
            <div className="text-gray-300">Completed Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">1000+</div>
            <div className="text-gray-300">Happy Families</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">15+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
