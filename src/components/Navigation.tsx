import React, { useState, useEffect } from 'react';
import { Leaf, Upload, MessageCircle, Cloud, Home, Info } from 'lucide-react';

interface NavigationProps {
  currentLanguage: string;
  translations: any;
}

const Navigation: React.FC<NavigationProps> = ({ currentLanguage, translations }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'upload', 'weather', 'chatbot', 'gallery', 'about'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', icon: Home, label: translations.nav?.home || 'Home' },
    { id: 'upload', icon: Upload, label: translations.nav?.upload || 'Upload' },
    { id: 'weather', icon: Cloud, label: translations.nav?.weather || 'Weather' },
    { id: 'chatbot', icon: MessageCircle, label: translations.nav?.chatbot || 'Chatbot' },
    { id: 'gallery', icon: Leaf, label: translations.nav?.gallery || 'Gallery' },
    { id: 'about', icon: Info, label: translations.nav?.about || 'About' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-gradient">PlantAI</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'nav-active text-primary-foreground'
                      : 'text-foreground hover:text-primary hover:bg-card/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-xl glass-card">
            <Leaf className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;