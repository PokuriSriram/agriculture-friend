import React from 'react';
import { Leaf, Zap, Shield, Globe } from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';

interface HeroSectionProps {
  translations: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ translations }) => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-gradient leading-tight">
                {translations.hero?.title || 'Plant Disease Detection using AI'}
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-light">
                {translations.hero?.subtitle || 'Upload a leaf image, get diagnosis instantly'}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
              {[
                { icon: Zap, title: translations.hero?.features?.instant || 'Instant', desc: translations.hero?.features?.instantDesc || 'AI Analysis' },
                { icon: Shield, title: translations.hero?.features?.accurate || 'Accurate', desc: translations.hero?.features?.accurateDesc || '95% Precision' },
                { icon: Globe, title: translations.hero?.features?.multilingual || 'Multilingual', desc: translations.hero?.features?.multilingualDesc || 'Support' }
              ].map((feature, index) => (
                <div key={index} className="glass-card p-4 text-center scale-in flex flex-col items-center justify-center min-h-[120px]" style={{ animationDelay: `${index * 0.2}s` }}>
                  <feature.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => document.getElementById('upload')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gradient text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <Leaf className="w-5 h-5" />
              <span>{translations.hero?.cta || 'Start Diagnosis'}</span>
            </button>
          </div>

          {/* Right Content - Floating Cards Preview */}
          <div className="relative h-96 lg:h-[500px] slide-up">
            {/* Floating Plant Icon */}
            <div className="absolute top-10 right-10 glass-card p-6 float-animation">
              <Leaf className="w-12 h-12 text-primary" />
            </div>
            
            {/* Stats Card */}
            <div className="absolute bottom-20 left-10 glass-card p-6 float-animation" style={{ animationDelay: '1s' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">{translations.hero?.accuracy || 'Accuracy'}</div>
              </div>
            </div>

            {/* Detection Count */}
            <div className="absolute top-32 left-16 glass-card p-4 float-animation" style={{ animationDelay: '2s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">10K+</div>
                <div className="text-xs text-muted-foreground">{translations.hero?.detections || 'Detections'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;