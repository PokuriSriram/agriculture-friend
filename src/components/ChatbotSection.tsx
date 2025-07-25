import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Bot, User, Leaf } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotSectionProps {
  translations: any;
}

const ChatbotSection: React.FC<ChatbotSectionProps> = ({ translations }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: translations.chatbot?.welcome || 'Hello! I\'m your plant care assistant. Ask me about plant diseases, care tips, or upload symptoms!',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Rule-based chatbot responses
  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    const responses: { [key: string]: string } = {
      // Disease symptoms
      'brown spots': translations.chatbot?.responses?.brownSpots || 'Brown spots often indicate fungal infections like leaf spot or blight. Ensure good air circulation and avoid overhead watering.',
      'yellow leaves': translations.chatbot?.responses?.yellowLeaves || 'Yellowing leaves can indicate overwatering, nutrient deficiency, or natural aging. Check soil moisture and fertilization.',
      'white spots': translations.chatbot?.responses?.whiteSpots || 'White spots might be powdery mildew. Improve air circulation and consider fungicidal treatment.',
      'black spots': translations.chatbot?.responses?.blackSpots || 'Black spots usually indicate bacterial or fungal diseases. Remove affected leaves and improve growing conditions.',
      'wilting': translations.chatbot?.responses?.wilting || 'Wilting can be caused by underwatering, overwatering, or root problems. Check soil moisture and drainage.',
      
      // Care questions
      'watering': translations.chatbot?.responses?.watering || 'Water when the top inch of soil feels dry. Frequency depends on plant type, season, and environment.',
      'fertilizer': translations.chatbot?.responses?.fertilizer || 'Most plants benefit from balanced fertilizer during growing season (spring/summer). Follow package instructions.',
      'sunlight': translations.chatbot?.responses?.sunlight || 'Light requirements vary by plant. Most houseplants prefer bright, indirect light.',
      'humidity': translations.chatbot?.responses?.humidity || 'Many plants prefer 40-60% humidity. Use a humidifier or place plants on water-filled pebble trays.',
      
      // Prevention
      'prevent': translations.chatbot?.responses?.prevent || 'Prevent diseases with good air circulation, proper watering, clean tools, and quarantining new plants.',
      'organic': translations.chatbot?.responses?.organic || 'Try neem oil, insecticidal soap, or baking soda solutions for organic disease control.',
      
      // Default responses
      'hello': translations.chatbot?.responses?.hello || 'Hello! How can I help you with your plants today?',
      'help': translations.chatbot?.responses?.help || 'I can help with plant disease identification, care tips, and treatment advice. What\'s troubling your plant?',
      'thanks': translations.chatbot?.responses?.thanks || 'You\'re welcome! Happy gardening! 🌱'
    };

    // Find matching response
    for (const [key, response] of Object.entries(responses)) {
      if (message.includes(key)) {
        return response;
      }
    }

    // Default fallback
    return translations.chatbot?.responses?.default || 'I\'m not sure about that specific issue. Can you describe the symptoms you\'re seeing? For example: brown spots, yellow leaves, wilting, etc.';
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    translations.chatbot?.quick?.brownSpots || 'Brown spots on leaves',
    translations.chatbot?.quick?.yellowLeaves || 'Yellow leaves',
    translations.chatbot?.quick?.watering || 'Watering schedule',
    translations.chatbot?.quick?.fertilizer || 'Fertilizer advice'
  ];

  return (
    <section id="chatbot" className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
            {translations.chatbot?.title || 'AI Plant Care Assistant'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {translations.chatbot?.subtitle || 'Get instant answers to your plant care questions from our AI assistant'}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card overflow-hidden scale-in">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">PlantAI Assistant</h3>
                  <p className="text-sm text-white/80">
                    {translations.chatbot?.status || 'Online - Ready to help'}
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'user' 
                        ? 'bg-primary' 
                        : 'bg-accent'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`p-3 rounded-xl ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-muted p-3 rounded-xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="p-4 border-t glass-border">
              <p className="text-sm text-muted-foreground mb-2">
                {translations.chatbot?.quickQuestions || 'Quick questions:'}
              </p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInputText(question)}
                    className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t glass-border">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={translations.chatbot?.placeholder || 'Ask about plant care, diseases, or symptoms...'}
                  className="flex-1 px-4 py-2 border glass-border rounded-xl bg-input focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isTyping}
                  className="btn-gradient text-primary-foreground p-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;