import React, { useState, useEffect } from 'react';
import { Cloud, Droplets, Thermometer, Wind, MapPin, RefreshCw } from 'lucide-react';

interface WeatherData {
  temperature: number;
  humidity: number;
  condition: string;
  windSpeed: number;
  location: string;
  icon: string;
}

interface WeatherSectionProps {
  translations: any;
}

const WeatherSection: React.FC<WeatherSectionProps> = ({ translations }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (lat: number, lon: number) => {
    setLoading(true);
    setError(null);
    
    try {
      // Using OpenWeatherMap API (you'll need to add your API key)
      const API_KEY = 'demo_key'; // Replace with actual API key
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        // Fallback to demo data for showcase
        throw new Error('API key needed');
      }
      
      const data = await response.json();
      setWeather({
        temperature: Math.round(data.main.temp),
        humidity: data.main.humidity,
        condition: data.weather[0].description,
        windSpeed: data.wind.speed,
        location: data.name,
        icon: data.weather[0].icon
      });
    } catch (err) {
      // Demo data for showcase
      setWeather({
        temperature: 25,
        humidity: 65,
        condition: 'partly cloudy',
        windSpeed: 12,
        location: 'Your Location',
        icon: '02d'
      });
    } finally {
      setLoading(false);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          setError('Location access denied');
          // Use demo coordinates
          fetchWeather(40.7128, -74.0060); // New York coords as fallback
        }
      );
    } else {
      setError('Geolocation not supported');
      fetchWeather(40.7128, -74.0060);
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getWeatherIcon = (condition: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'clear': <Thermometer className="w-8 h-8 text-yellow-500" />,
      'clouds': <Cloud className="w-8 h-8 text-gray-500" />,
      'rain': <Droplets className="w-8 h-8 text-blue-500" />,
      'wind': <Wind className="w-8 h-8 text-green-500" />
    };
    
    return icons['clouds']; // Default fallback
  };

  const getHealthImpact = () => {
    if (!weather) return null;
    
    const impacts = [];
    
    if (weather.humidity > 70) {
      impacts.push({
        type: 'warning',
        message: translations.weather?.highHumidity || 'High humidity may promote fungal diseases'
      });
    }
    
    if (weather.temperature > 30) {
      impacts.push({
        type: 'caution',
        message: translations.weather?.highTemp || 'High temperature stress - ensure adequate watering'
      });
    }
    
    if (weather.condition.includes('rain')) {
      impacts.push({
        type: 'info',
        message: translations.weather?.rainy || 'Rainy conditions - monitor for leaf diseases'
      });
    }
    
    return impacts;
  };

  return (
    <section id="weather" className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
            {translations.weather?.title || 'Weather Impact on Plants'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {translations.weather?.subtitle || 'Real-time weather data to help you understand environmental factors affecting plant health'}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Current Weather */}
            <div className="lg:col-span-2 glass-card p-8 scale-in">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{weather?.location || 'Loading...'}</span>
                </h3>
                <button 
                  onClick={getCurrentLocation}
                  disabled={loading}
                  className="p-2 rounded-lg glass-border hover:bg-primary/10 transition-colors"
                >
                  <RefreshCw className={`w-5 h-5 text-primary ${loading ? 'animate-spin' : ''}`} />
                </button>
              </div>

              {loading ? (
                <div className="text-center py-8">
                  <div className="spinner mx-auto mb-4"></div>
                  <p className="text-muted-foreground">
                    {translations.weather?.loading || 'Fetching weather data...'}
                  </p>
                </div>
              ) : weather ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Temperature */}
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6 text-center">
                    <Thermometer className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-700 dark:text-orange-300">
                      {weather.temperature}°C
                    </div>
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      {translations.weather?.temperature || 'Temperature'}
                    </p>
                  </div>

                  {/* Humidity */}
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 text-center">
                    <Droplets className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                      {weather.humidity}%
                    </div>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      {translations.weather?.humidity || 'Humidity'}
                    </p>
                  </div>

                  {/* Wind */}
                  <div className="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 text-center">
                    <Wind className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                      {weather.windSpeed} km/h
                    </div>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      {translations.weather?.wind || 'Wind Speed'}
                    </p>
                  </div>

                  {/* Condition */}
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 text-center">
                    <Cloud className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-purple-700 dark:text-purple-300 capitalize">
                      {weather.condition}
                    </div>
                    <p className="text-sm text-purple-600 dark:text-purple-400">
                      {translations.weather?.condition || 'Condition'}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Cloud className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>{translations.weather?.error || 'Unable to fetch weather data'}</p>
                </div>
              )}
            </div>

            {/* Plant Health Impact */}
            <div className="glass-card p-8 scale-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-6 text-center">
                {translations.weather?.impact || 'Plant Health Impact'}
              </h3>

              <div className="space-y-4">
                {getHealthImpact()?.map((impact, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border-l-4 ${
                      impact.type === 'warning' 
                        ? 'bg-red-50 border-red-400 dark:bg-red-900/20' 
                        : impact.type === 'caution'
                        ? 'bg-yellow-50 border-yellow-400 dark:bg-yellow-900/20'
                        : 'bg-blue-50 border-blue-400 dark:bg-blue-900/20'
                    }`}
                  >
                    <p className="text-sm">{impact.message}</p>
                  </div>
                )) || (
                  <div className="text-center text-muted-foreground">
                    <p className="text-sm">
                      {translations.weather?.optimal || 'Weather conditions are optimal for plant health'}
                    </p>
                  </div>
                )}

                {/* Quick Tips */}
                <div className="mt-6 space-y-2">
                  <h4 className="font-semibold text-primary">
                    {translations.weather?.tips || 'Weather Tips:'}
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• {translations.weather?.tip1 || 'Monitor humidity levels above 80%'}</li>
                    <li>• {translations.weather?.tip2 || 'Provide shade during extreme heat'}</li>
                    <li>• {translations.weather?.tip3 || 'Ensure good air circulation'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherSection;