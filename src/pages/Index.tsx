import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import UploadSection from '../components/UploadSection';
import WeatherSection from '../components/WeatherSection';
import ChatbotSection from '../components/ChatbotSection';
import DiseaseGallery from '../components/DiseaseGallery';
import AboutSection from '../components/AboutSection';
import LanguageSelector from '../components/LanguageSelector';
import { translations } from '../utils/translations';
import { detectDisease, DiseaseDetection } from '../utils/aiDetection';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [prediction, setPrediction] = useState<DiseaseDetection | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Get current translations
  const currentTranslations = translations[currentLanguage as keyof typeof translations] || translations.en;

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll reveal animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.scale-in, .slide-up');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Handle image upload and AI detection
  const handleImageUpload = async (file: File) => {
    setIsLoading(true);
    setPrediction(null);

    try {
      const result = await detectDisease(file);
      setPrediction(result);
    } catch (error) {
      console.error('Detection error:', error);
      setPrediction({
        disease: 'Detection Error',
        confidence: 0,
        treatment: 'Please try again with a clearer image.',
        description: 'Unable to process the image. Ensure good lighting and focus.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle language change
  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    // Store language preference
    localStorage.setItem('plantai-language', language);
  };

  // Load saved language on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('plantai-language');
    if (savedLanguage && ['en', 'hi', 'te'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation 
        currentLanguage={currentLanguage}
        translations={currentTranslations}
      />

      {/* Language Selector */}
      <LanguageSelector
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />

      {/* Hero Section */}
      <HeroSection translations={currentTranslations} />

      {/* Upload Section */}
      <UploadSection
        translations={currentTranslations}
        onImageUpload={handleImageUpload}
        prediction={prediction}
        isLoading={isLoading}
      />

      {/* Weather Section */}
      <WeatherSection translations={currentTranslations} />

      {/* Chatbot Section */}
      <ChatbotSection translations={currentTranslations} />

      {/* Disease Gallery */}
      <DiseaseGallery translations={currentTranslations} />

      {/* About Section */}
      <AboutSection translations={currentTranslations} />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <span>🌿</span>
                <span>PlantAI</span>
              </h3>
              <p className="text-primary-foreground/80">
                AI-powered plant disease detection for healthier gardens worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#upload" className="hover:text-primary-foreground transition-colors">{currentTranslations.nav?.upload || 'Disease Detection'}</a></li>
                <li><a href="#weather" className="hover:text-primary-foreground transition-colors">{currentTranslations.nav?.weather || 'Weather Info'}</a></li>
                <li><a href="#chatbot" className="hover:text-primary-foreground transition-colors">{currentTranslations.nav?.chatbot || 'AI Assistant'}</a></li>
                <li><a href="#gallery" className="hover:text-primary-foreground transition-colors">{currentTranslations.nav?.gallery || 'Disease Gallery'}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-primary-foreground/80">
                Have questions? Reach out to us and help improve PlantAI for everyone.
              </p>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 PlantAI. Made with 🌱 for plant lovers everywhere.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 btn-gradient text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 mx-auto" />
        </button>
      )}

      {/* External Scripts for TensorFlow.js (commented for demo) */}
      {/* 
      <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
      <script src="https://kit.fontawesome.com/your-kit.js"></script>
      */}
    </div>
  );
};

export default Index;