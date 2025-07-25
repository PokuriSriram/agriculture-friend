import React from 'react';
import { Leaf, Shield, Globe, Users, Mail, Github, Twitter } from 'lucide-react';

interface AboutSectionProps {
  translations: any;
}

const AboutSection: React.FC<AboutSectionProps> = ({ translations }) => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
            {translations.about?.title || 'About PlantAI'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {translations.about?.missionDesc || 'Empowering gardeners worldwide with AI-powered plant disease detection and care assistance.'}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Mission */}
            <div className="glass-card p-8 scale-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">
                  {translations.about?.mission || 'Our Mission'}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {translations.about?.missionDesc || 'We believe that technology can help make gardening more accessible and successful for everyone. Our AI-powered platform helps gardeners quickly identify plant diseases and get actionable treatment advice, leading to healthier plants and more successful harvests.'}
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 scale-in" style={{ animationDelay: '0.2s' }}>
              {[
                { icon: Shield, value: '95%', label: translations.about?.accuracy || 'Accuracy Rate' },
                { icon: Globe, value: '3', label: translations.about?.languages || 'Languages' },
                { icon: Users, value: '10K+', label: translations.about?.users || 'Happy Users' },
                { icon: Leaf, value: '50+', label: translations.about?.diseases || 'Diseases Detected' }
              ].map((stat, index) => (
                <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-gradient">
              {translations.about?.features || 'Key Features'}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: translations.about?.feature1 || 'AI Detection',
                  desc: translations.about?.feature1Desc || 'Advanced machine learning for accurate disease identification',
                  icon: '🧠'
                },
                {
                  title: translations.about?.feature2 || 'Weather Integration',
                  desc: translations.about?.feature2Desc || 'Real-time weather data for optimal plant care',
                  icon: '🌤️'
                },
                {
                  title: translations.about?.feature3 || 'Multilingual',
                  desc: translations.about?.feature3Desc || 'Support for English, Hindi, and Telugu',
                  icon: '🌍'
                },
                {
                  title: translations.about?.feature4 || 'Expert Guidance',
                  desc: translations.about?.feature4Desc || 'Comprehensive treatment recommendations',
                  icon: '📚'
                }
              ].map((feature, index) => (
                <div key={index} className="glass-card p-6 text-center scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className="font-bold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="glass-card p-8 mb-16 scale-in">
            <h3 className="text-2xl font-bold text-center mb-8 text-gradient">
              {translations.about?.tech || 'Technology Stack'}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'React', desc: 'Frontend Framework' },
                { name: 'TensorFlow.js', desc: 'AI/ML Processing' },
                { name: 'TypeScript', desc: 'Type Safety' },
                { name: 'Tailwind CSS', desc: 'Styling' },
                { name: 'OpenWeather API', desc: 'Weather Data' },
                { name: 'Progressive Web App', desc: 'Mobile Experience' }
              ].map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-lg">{tech.name[0]}</span>
                  </div>
                  <h5 className="font-semibold text-sm">{tech.name}</h5>
                  <p className="text-xs text-muted-foreground">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="glass-card p-8 text-center scale-in">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              {translations.about?.contact || 'Get in Touch'}
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {translations.about?.contactDesc || 'Have questions, suggestions, or want to contribute? We\'d love to hear from you!'}
            </p>
            
            <div className="flex justify-center space-x-6">
              {[
                { icon: Mail, label: 'Email', href: 'mailto:hello@plantai.com' },
                { icon: Github, label: 'GitHub', href: '#' },
                { icon: Twitter, label: 'Twitter', href: '#' }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-2 px-6 py-3 btn-gradient text-primary-foreground rounded-xl hover:scale-105 transition-transform"
                >
                  <contact.icon className="w-5 h-5" />
                  <span>{contact.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;