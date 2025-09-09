import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Home, User, Building2, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoSvg from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Projects', href: '/projects', icon: Building2 },
    { name: 'Contact', href: '/contact', icon: MessageCircle }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled || !isHomePage ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className={`transition-all duration-300 ${
              isScrolled || !isHomePage ? 'text-brand-green' : 'text-white'
            }`}>
              <img 
                src={logoSvg} 
                alt="Manazel Developments Logo" 
                className="h-12 w-auto"
                style={{ 
                  filter: (isScrolled || !isHomePage)
                    ? 'none' 
                    : 'brightness(0) saturate(100%) invert(100%)'
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled || !isHomePage ? 'text-brand-green' : 'text-white'
              }`}>
                Manazel Developments
              </span>
              <span className={`text-xs transition-colors duration-300 ${
                isScrolled || !isHomePage ? 'text-brand-green/70' : 'text-white/70'
              }`}>
                Real Estate Development & Investment
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-all duration-300 flex items-center gap-2 px-3 py-2 rounded-lg ${
                    isScrolled || !isHomePage ? 'hover:text-brand-green hover:bg-brand-green/10' : 'hover:text-white hover:bg-white/10'
                  } ${
                    location.pathname === item.href 
                      ? `${isScrolled || !isHomePage ? 'text-brand-green bg-brand-green/10 border border-brand-green/20' : 'text-white bg-white/10 border border-white/20'}` 
                      : `${isScrolled || !isHomePage ? 'text-foreground' : 'text-white/90'}`
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`flex items-center space-x-2 text-sm transition-colors ${
              isScrolled || !isHomePage ? 'text-muted-foreground' : 'text-white/80'
            }`}>
              <Phone className="w-4 h-4" />
              <span>+20 1154792430</span>
            </div>
            <div className={`flex items-center space-x-2 text-sm transition-colors ${
              isScrolled || !isHomePage ? 'text-muted-foreground' : 'text-white/80'
            }`}>
              <Mail className="w-4 h-4" />
              <span>info@manazeldevelopments.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg hover:bg-muted transition-colors ${
              isScrolled || !isHomePage ? 'text-foreground' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-medium transition-all duration-300 flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 ${
                      location.pathname === item.href 
                        ? 'text-primary bg-primary/10' 
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-border space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+20 100 123 4567</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>info@manazeldevelopments.com</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;