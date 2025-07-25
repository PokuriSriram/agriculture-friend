import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Eye, Info } from 'lucide-react';
import disease1 from '../assets/disease-1.jpg';
import disease2 from '../assets/disease-2.jpg';
import disease3 from '../assets/disease-3.jpg';
import disease4 from '../assets/disease-4.jpg';
import disease5 from '../assets/disease-5.jpg';
import disease6 from '../assets/disease-6.jpg';

interface Disease {
  id: number;
  name: string;
  image: string;
  description: string;
  symptoms: string[];
  treatment: string;
}

interface DiseaseGalleryProps {
  translations: any;
}

const DiseaseGallery: React.FC<DiseaseGalleryProps> = ({ translations }) => {
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const diseases: Disease[] = [
    {
      id: 1,
      name: translations.gallery?.diseases?.lateBlight || 'Late Blight',
      image: disease1,
      description: translations.gallery?.descriptions?.lateBlight || 'A devastating fungal disease that affects tomatoes and potatoes.',
      symptoms: [
        translations.gallery?.symptoms?.brownSpots || 'Brown spots on leaves',
        translations.gallery?.symptoms?.whiteMold || 'White mold on undersides',
        translations.gallery?.symptoms?.rapidSpread || 'Rapid spread in humid conditions'
      ],
      treatment: translations.gallery?.treatments?.lateBlight || 'Remove affected plants, improve air circulation, apply copper-based fungicides'
    },
    {
      id: 2,
      name: translations.gallery?.diseases?.rust || 'Rust Disease',
      image: disease2,
      description: translations.gallery?.descriptions?.rust || 'Orange-red pustules on leaf surfaces causing yellowing.',
      symptoms: [
        translations.gallery?.symptoms?.orangeSpots || 'Orange-red spots',
        translations.gallery?.symptoms?.yellowing || 'Leaf yellowing',
        translations.gallery?.symptoms?.prematureDrop || 'Premature leaf drop'
      ],
      treatment: translations.gallery?.treatments?.rust || 'Remove infected leaves, ensure good drainage, apply fungicide spray'
    },
    {
      id: 3,
      name: translations.gallery?.diseases?.blackSpot || 'Black Spot',
      image: disease3,
      description: translations.gallery?.descriptions?.blackSpot || 'Circular black lesions that weaken the plant.',
      symptoms: [
        translations.gallery?.symptoms?.blackLesions || 'Black circular lesions',
        translations.gallery?.symptoms?.leafYellowing || 'Surrounding leaf yellowing',
        translations.gallery?.symptoms?.defoliation || 'Progressive defoliation'
      ],
      treatment: translations.gallery?.treatments?.blackSpot || 'Prune affected areas, improve air flow, use disease-resistant varieties'
    },
    {
      id: 4,
      name: translations.gallery?.diseases?.powderyMildew || 'Powdery Mildew',
      image: disease4,
      description: translations.gallery?.descriptions?.powderyMildew || 'White powdery coating on leaves and stems.',
      symptoms: [
        translations.gallery?.symptoms?.whiteCoating || 'White powdery coating',
        translations.gallery?.symptoms?.stuntedGrowth || 'Stunted growth',
        translations.gallery?.symptoms?.distortedLeaves || 'Distorted leaves'
      ],
      treatment: translations.gallery?.treatments?.powderyMildew || 'Increase air circulation, reduce humidity, apply sulfur-based fungicides'
    },
    {
      id: 5,
      name: translations.gallery?.diseases?.bacterialSpot || 'Bacterial Spot',
      image: disease5,
      description: translations.gallery?.descriptions?.bacterialSpot || 'Water-soaked spots that turn brown with yellow halos.',
      symptoms: [
        translations.gallery?.symptoms?.waterSoaked || 'Water-soaked spots',
        translations.gallery?.symptoms?.yellowHalos || 'Yellow halos around spots',
        translations.gallery?.symptoms?.leafDrop || 'Rapid leaf drop'
      ],
      treatment: translations.gallery?.treatments?.bacterialSpot || 'Remove infected tissue, avoid overhead watering, apply copper treatments'
    },
    {
      id: 6,
      name: translations.gallery?.diseases?.anthracnose || 'Anthracnose',
      image: disease6,
      description: translations.gallery?.descriptions?.anthracnose || 'Dark, sunken lesions on leaves, stems, and fruits.',
      symptoms: [
        translations.gallery?.symptoms?.sunkenLesions || 'Dark sunken lesions',
        translations.gallery?.symptoms?.concentricRings || 'Concentric ring patterns',
        translations.gallery?.symptoms?.fruitRot || 'Fruit rot in severe cases'
      ],
      treatment: translations.gallery?.treatments?.anthracnose || 'Improve drainage, remove plant debris, apply preventive fungicides'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
            {translations.gallery?.title || 'Disease Gallery'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {translations.gallery?.subtitle || 'Learn to identify common plant diseases with our comprehensive visual guide'}
          </p>
        </div>

        {/* Disease Slider */}
        <div className="relative mb-12 scale-in">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => scroll('left')}
              className="glass-card p-3 hover:bg-primary/10 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex-1 overflow-x-auto custom-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex space-x-6 pb-4">
                {diseases.map((disease, index) => (
                  <div
                    key={disease.id}
                    className="flex-shrink-0 w-72 glass-card p-6 cursor-pointer hover:scale-105 transition-all duration-300"
                    onClick={() => setSelectedDisease(disease)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <img
                        src={disease.image}
                        alt={disease.name}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-white font-bold text-lg">{disease.name}</h3>
                      </div>
                      <button className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <Eye className="w-4 h-4 text-white" />
                      </button>
                    </div>
                    
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {disease.description}
                    </p>
                    
                    <button className="mt-4 text-primary font-medium text-sm flex items-center space-x-1 hover:text-accent transition-colors">
                      <Info className="w-4 h-4" />
                      <span>{translations.gallery?.learnMore || 'Learn More'}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => scroll('right')}
              className="glass-card p-3 hover:bg-primary/10 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>

        {/* Disease Details Modal */}
        {selectedDisease && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gradient">{selectedDisease.name}</h3>
                  <button
                    onClick={() => setSelectedDisease(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={selectedDisease.image}
                      alt={selectedDisease.name}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        {translations.gallery?.description || 'Description'}
                      </h4>
                      <p className="text-muted-foreground">{selectedDisease.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        {translations.gallery?.symptoms || 'Symptoms'}
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {selectedDisease.symptoms.map((symptom, index) => (
                          <li key={index}>{symptom}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        {translations.gallery?.treatment || 'Treatment'}
                      </h4>
                      <p className="text-muted-foreground">{selectedDisease.treatment}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t glass-border">
                  <button
                    onClick={() => setSelectedDisease(null)}
                    className="btn-gradient text-primary-foreground px-6 py-2 rounded-xl"
                  >
                    {translations.gallery?.close || 'Close'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Prevention Tips */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="glass-card p-8 scale-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold text-center mb-6 text-gradient">
              {translations.gallery?.prevention?.title || 'Disease Prevention Tips'}
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: translations.gallery?.prevention?.airflow || 'Good Air Flow',
                  desc: translations.gallery?.prevention?.airflowDesc || 'Ensure proper spacing between plants'
                },
                {
                  title: translations.gallery?.prevention?.watering || 'Proper Watering',
                  desc: translations.gallery?.prevention?.wateringDesc || 'Water at soil level, avoid wetting leaves'
                },
                {
                  title: translations.gallery?.prevention?.cleanliness || 'Clean Tools',
                  desc: translations.gallery?.prevention?.cleanlinessDesc || 'Disinfect gardening tools regularly'
                },
                {
                  title: translations.gallery?.prevention?.resistant || 'Resistant Varieties',
                  desc: translations.gallery?.prevention?.resistantDesc || 'Choose disease-resistant plant varieties'
                },
                {
                  title: translations.gallery?.prevention?.monitoring || 'Regular Monitoring',
                  desc: translations.gallery?.prevention?.monitoringDesc || 'Check plants weekly for early detection'
                },
                {
                  title: translations.gallery?.prevention?.quarantine || 'Quarantine New Plants',
                  desc: translations.gallery?.prevention?.quarantineDesc || 'Isolate new plants for 2-3 weeks'
                }
              ].map((tip, index) => (
                <div key={index} className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <h4 className="font-semibold mb-2">{tip.title}</h4>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiseaseGallery;