export const translations = {
  en: {
    nav: {
      home: 'Home',
      upload: 'Upload',
      weather: 'Weather',
      chatbot: 'Chatbot',
      gallery: 'Gallery',
      about: 'About'
    },
    hero: {
      title: 'Plant Disease Detection using AI',
      subtitle: 'Upload a leaf image, get diagnosis instantly',
      features: {
        instant: 'Instant',
        instantDesc: 'AI Analysis',
        accurate: 'Accurate',
        accurateDesc: '95% Precision',
        multilingual: 'Multilingual',
        multilingualDesc: 'Support'
      },
      cta: 'Start Diagnosis',
      accuracy: 'Accuracy',
      detections: 'Detections'
    },
    upload: {
      title: 'AI Disease Detection',
      subtitle: 'Upload a clear image of a plant leaf to get instant AI-powered disease diagnosis',
      dragDrop: 'Drag & drop your leaf image',
      orClick: 'or click to browse',
      browse: 'Browse Files',
      imageUploaded: 'Image uploaded successfully',
      tips: {
        clear: 'Take a clear, well-lit photo',
        single: 'Focus on a single leaf',
        format: 'Supported: JPG, PNG, WebP'
      },
      results: 'Diagnosis Results',
      analyzing: 'Analyzing your plant...',
      confidence: 'Confidence Level',
      treatment: 'Recommended Treatment:',
      uploadPrompt: 'Upload an image to see AI diagnosis results here'
    },
    weather: {
      title: 'Weather Impact on Plants',
      subtitle: 'Real-time weather data to help you understand environmental factors affecting plant health',
      loading: 'Fetching weather data...',
      error: 'Unable to fetch weather data',
      temperature: 'Temperature',
      humidity: 'Humidity',
      wind: 'Wind Speed',
      condition: 'Condition',
      impact: 'Plant Health Impact',
      optimal: 'Weather conditions are optimal for plant health',
      highHumidity: 'High humidity may promote fungal diseases',
      highTemp: 'High temperature stress - ensure adequate watering',
      rainy: 'Rainy conditions - monitor for leaf diseases',
      tips: 'Weather Tips:',
      tip1: 'Monitor humidity levels above 80%',
      tip2: 'Provide shade during extreme heat',
      tip3: 'Ensure good air circulation'
    },
    chatbot: {
      title: 'AI Plant Care Assistant',
      subtitle: 'Get instant answers to your plant care questions from our AI assistant',
      welcome: 'Hello! I\'m your plant care assistant. Ask me about plant diseases, care tips, or upload symptoms!',
      status: 'Online - Ready to help',
      placeholder: 'Ask about plant care, diseases, or symptoms...',
      quickQuestions: 'Quick questions:',
      quick: {
        brownSpots: 'Brown spots on leaves',
        yellowLeaves: 'Yellow leaves',
        watering: 'Watering schedule',
        fertilizer: 'Fertilizer advice'
      },
      responses: {
        brownSpots: 'Brown spots often indicate fungal infections like leaf spot or blight. Ensure good air circulation and avoid overhead watering.',
        yellowLeaves: 'Yellowing leaves can indicate overwatering, nutrient deficiency, or natural aging. Check soil moisture and fertilization.',
        whiteSpots: 'White spots might be powdery mildew. Improve air circulation and consider fungicidal treatment.',
        blackSpots: 'Black spots usually indicate bacterial or fungal diseases. Remove affected leaves and improve growing conditions.',
        wilting: 'Wilting can be caused by underwatering, overwatering, or root problems. Check soil moisture and drainage.',
        watering: 'Water when the top inch of soil feels dry. Frequency depends on plant type, season, and environment.',
        fertilizer: 'Most plants benefit from balanced fertilizer during growing season (spring/summer). Follow package instructions.',
        sunlight: 'Light requirements vary by plant. Most houseplants prefer bright, indirect light.',
        humidity: 'Many plants prefer 40-60% humidity. Use a humidifier or place plants on water-filled pebble trays.',
        prevent: 'Prevent diseases with good air circulation, proper watering, clean tools, and quarantining new plants.',
        organic: 'Try neem oil, insecticidal soap, or baking soda solutions for organic disease control.',
        hello: 'Hello! How can I help you with your plants today?',
        help: 'I can help with plant disease identification, care tips, and treatment advice. What\'s troubling your plant?',
        thanks: 'You\'re welcome! Happy gardening! 🌱',
        default: 'I\'m not sure about that specific issue. Can you describe the symptoms you\'re seeing? For example: brown spots, yellow leaves, wilting, etc.'
      }
    },
    gallery: {
      title: 'Disease Gallery',
      subtitle: 'Learn to identify common plant diseases with our comprehensive visual guide',
      learnMore: 'Learn More',
      description: 'Description',
      symptoms: 'Symptoms',
      treatment: 'Treatment',
      close: 'Close',
      diseases: {
        lateBlight: 'Late Blight',
        rust: 'Rust Disease',
        blackSpot: 'Black Spot',
        powderyMildew: 'Powdery Mildew',
        bacterialSpot: 'Bacterial Spot',
        anthracnose: 'Anthracnose'
      },
      descriptions: {
        lateBlight: 'A devastating fungal disease that affects tomatoes and potatoes.',
        rust: 'Orange-red pustules on leaf surfaces causing yellowing.',
        blackSpot: 'Circular black lesions that weaken the plant.',
        powderyMildew: 'White powdery coating on leaves and stems.',
        bacterialSpot: 'Water-soaked spots that turn brown with yellow halos.',
        anthracnose: 'Dark, sunken lesions on leaves, stems, and fruits.'
      },
      gallerySymptoms: {
        brownSpots: 'Brown spots on leaves',
        whiteMold: 'White mold on undersides',
        rapidSpread: 'Rapid spread in humid conditions',
        orangeSpots: 'Orange-red spots',
        yellowing: 'Leaf yellowing',
        prematureDrop: 'Premature leaf drop',
        blackLesions: 'Black circular lesions',
        leafYellowing: 'Surrounding leaf yellowing',
        defoliation: 'Progressive defoliation',
        whiteCoating: 'White powdery coating',
        stuntedGrowth: 'Stunted growth',
        distortedLeaves: 'Distorted leaves',
        waterSoaked: 'Water-soaked spots',
        yellowHalos: 'Yellow halos around spots',
        leafDrop: 'Rapid leaf drop',
        sunkenLesions: 'Dark sunken lesions',
        concentricRings: 'Concentric ring patterns',
        fruitRot: 'Fruit rot in severe cases'
      },
      treatments: {
        lateBlight: 'Remove affected plants, improve air circulation, apply copper-based fungicides',
        rust: 'Remove infected leaves, ensure good drainage, apply fungicide spray',
        blackSpot: 'Prune affected areas, improve air flow, use disease-resistant varieties',
        powderyMildew: 'Increase air circulation, reduce humidity, apply sulfur-based fungicides',
        bacterialSpot: 'Remove infected tissue, avoid overhead watering, apply copper treatments',
        anthracnose: 'Improve drainage, remove plant debris, apply preventive fungicides'
      },
      prevention: {
        title: 'Disease Prevention Tips',
        airflow: 'Good Air Flow',
        airflowDesc: 'Ensure proper spacing between plants',
        watering: 'Proper Watering',
        wateringDesc: 'Water at soil level, avoid wetting leaves',
        cleanliness: 'Clean Tools',
        cleanlinessDesc: 'Disinfect gardening tools regularly',
        resistant: 'Resistant Varieties',
        resistantDesc: 'Choose disease-resistant plant varieties',
        monitoring: 'Regular Monitoring',
        monitoringDesc: 'Check plants weekly for early detection',
        quarantine: 'Quarantine New Plants',
        quarantineDesc: 'Isolate new plants for 2-3 weeks'
      }
    },
    about: {
      title: 'About PlantAI',
      mission: 'Our Mission',
      missionDesc: 'Empowering gardeners worldwide with AI-powered plant disease detection and care assistance.',
      features: 'Key Features',
      feature1: 'AI-powered disease identification with 95% accuracy',
      feature2: 'Real-time weather monitoring for plant health',
      feature3: 'Multilingual support for global accessibility',
      feature4: 'Comprehensive disease gallery and treatment guides',
      contact: 'Get in Touch',
      contactDesc: 'Have questions or suggestions? We\'d love to hear from you!'
    }
  },
  hi: {
    nav: {
      home: 'मुख्य',
      upload: 'अपलोड',
      weather: 'मौसम',
      chatbot: 'चैटबॉट',
      gallery: 'गैलरी',
      about: 'बारे में'
    },
    hero: {
      title: 'AI से पौधों के रोग का पता लगाना',
      subtitle: 'पत्ते की तस्वीर अपलोड करें, तुरंत निदान पाएं',
      features: {
        instant: 'तत्काल',
        instantDesc: 'AI विश्लेषण',
        accurate: 'सटीक',
        accurateDesc: '95% सटीकता',
        multilingual: 'बहुभाषी',
        multilingualDesc: 'समर्थन'
      },
      cta: 'निदान शुरू करें',
      accuracy: 'सटीकता',
      detections: 'खोजें'
    },
    upload: {
      title: 'AI रोग निदान',
      subtitle: 'तुरंत AI-संचालित रोग निदान के लिए पौधे की पत्ती की स्पष्ट तस्वीर अपलोड करें',
      dragDrop: 'अपनी पत्ती की तस्वीर खींचें और छोड़ें',
      orClick: 'या ब्राउज़ करने के लिए क्लिक करें',
      browse: 'फाइल ब्राउज़ करें',
      imageUploaded: 'तस्वीर सफलतापूर्वक अपलोड की गई',
      tips: {
        clear: 'स्पष्ट, अच्छी रोशनी में फोटो लें',
        single: 'एक पत्ती पर ध्यान दें',
        format: 'समर्थित: JPG, PNG, WebP'
      },
      results: 'निदान परिणाम',
      analyzing: 'आपके पौधे का विश्लेषण कर रहे हैं...',
      confidence: 'विश्वास स्तर',
      treatment: 'अनुशंसित उपचार:',
      uploadPrompt: 'AI निदान परिणाम देखने के लिए एक तस्वीर अपलोड करें'
    },
    weather: {
      title: 'पौधों पर मौसम का प्रभाव',
      subtitle: 'पौधों के स्वास्थ्य को प्रभावित करने वाले पर्यावरणीय कारकों को समझने के लिए वास्तविक समय मौसम डेटा',
      loading: 'मौसम डेटा ला रहे हैं...',
      error: 'मौसम डेटा लाने में असमर्थ',
      temperature: 'तापमान',
      humidity: 'आर्द्रता',
      wind: 'हवा की गति',
      condition: 'स्थिति',
      impact: 'पौधों के स्वास्थ्य पर प्रभाव',
      optimal: 'मौसम की स्थिति पौधों के स्वास्थ्य के लिए अनुकूल है',
      highHumidity: 'उच्च आर्द्रता फंगल रोगों को बढ़ावा दे सकती है',
      highTemp: 'उच्च तापमान तनाव - पर्याप्त पानी सुनिश्चित करें',
      rainy: 'बारिश की स्थिति - पत्ती के रोगों की निगरानी करें',
      tips: 'मौसम सुझाव:',
      tip1: '80% से अधिक आर्द्रता के स्तर की निगरानी करें',
      tip2: 'अत्यधिक गर्मी के दौरान छाया प्रदान करें',
      tip3: 'अच्छा वायु संचार सुनिश्चित करें'
    },
    chatbot: {
      title: 'AI पौधा देखभाल सहायक',
      subtitle: 'हमारे AI सहायक से अपने पौधों की देखभाल के सवालों के तुरंत जवाब पाएं',
      welcome: 'नमस्ते! मैं आपका पौधा देखभाल सहायक हूं। मुझसे पौधों के रोग, देखभाल सुझाव, या लक्षण अपलोड के बारे में पूछें!',
      status: 'ऑनलाइन - मदद के लिए तैयार',
      placeholder: 'पौधों की देखभाल, रोग, या लक्षणों के बारे में पूछें...',
      quickQuestions: 'त्वरित प्रश्न:',
      quick: {
        brownSpots: 'पत्तियों पर भूरे धब्बे',
        yellowLeaves: 'पीली पत्तियां',
        watering: 'पानी देने का समय',
        fertilizer: 'उर्वरक सलाह'
      }
    },
    gallery: {
      title: 'रोग गैलरी',
      subtitle: 'हमारी व्यापक दृश्य गाइड के साथ सामान्य पौधों के रोगों की पहचान करना सीखें',
      learnMore: 'और जानें',
      description: 'विवरण',
      symptoms: 'लक्षण',
      treatment: 'उपचार',
      close: 'बंद करें'
    },
    about: {
      title: 'PlantAI के बारे में',
      mission: 'हमारा मिशन',
      missionDesc: 'AI-संचालित पौधे रोग निदान और देखभाल सहायता के साथ दुनिया भर के बागवानों को सशक्त बनाना।'
    }
  },
  te: {
    nav: {
      home: 'ముఖ్యమైనది',
      upload: 'అప్‌లోడ్',
      weather: 'వాతావరణం',
      chatbot: 'చాట్‌బాట్',
      gallery: 'గ్యాలరీ',
      about: 'గురించి'
    },
    hero: {
      title: 'AI ద్వారా మొక్కల వ్యాధుల గుర్తింపు',
      subtitle: 'ఆకు చిత్రాన్ని అప్‌లోడ్ చేయండి, తక్షణ నిర్ధారణ పొందండి',
      features: {
        instant: 'తక్షణ',
        instantDesc: 'AI విశ్లేషణ',
        accurate: 'ఖచ్చితమైన',
        accurateDesc: '95% ఖచ్చితత్వం',
        multilingual: 'బహుభాషా',
        multilingualDesc: 'మద్దతు'
      },
      cta: 'నిర్ధారణ ప్రారంభించండి',
      accuracy: 'ఖచ్చితత్వం',
      detections: 'గుర్తింపులు'
    },
    upload: {
      title: 'AI వ్యాధి నిర్ధారణ',
      subtitle: 'తక్షణ AI-శక్తితో వ్యాధి నిర్ధారణ కోసం మొక్క ఆకు యొక్క స్పష్టమైన చిత్రాన్ని అప్‌లోడ్ చేయండి',
      dragDrop: 'మీ ఆకు చిత్రాన్ని లాగి వదలండి',
      orClick: 'లేదా బ్రౌజ్ చేయడానికి క్లిక్ చేయండి',
      browse: 'ఫైల్స్ బ్రౌజ్ చేయండి',
      imageUploaded: 'చిత్రం విజయవంతంగా అప్‌లోడ్ చేయబడింది',
      tips: {
        clear: 'స్పష్టమైన, బాగా వెలుతురున్న ఫోటో తీయండి',
        single: 'ఒకే ఆకుపై దృష్టి పెట్టండి',
        format: 'మద్దతు: JPG, PNG, WebP'
      },
      results: 'నిర్ధారణ ఫలితాలు',
      analyzing: 'మీ మొక్కను విశ్లేషిస్తున్నాము...',
      confidence: 'విశ్వాస స్థాయి',
      treatment: 'సిఫార్సు చేయబడిన చికిత్స:',
      uploadPrompt: 'AI నిర్ధారణ ఫలితాలను చూడటానికి చిత్రాన్ని అప్‌లోడ్ చేయండి'
    },
    weather: {
      title: 'మొక్కలపై వాతావరణ ప్రభావం',
      subtitle: 'మొక్కల ఆరోగ్యాన్ని ప్రభావితం చేసే పర్యావరణ కారకాలను అర్థం చేసుకోవడానికి నిజ-సమయ వాతావరణ డేటా',
      loading: 'వాతావరణ డేటాను తెస్తున్నాము...',
      error: 'వాతావరణ డేటాను తేవడంలో అసమర్థత',
      temperature: 'ఉష్ణోగ్రత',
      humidity: 'తేమ',
      wind: 'గాలి వేగం',
      condition: 'పరిస్థితి',
      impact: 'మొక్కల ఆరోగ్యపై ప్రభావం',
      optimal: 'వాతావరణ పరిస్థితులు మొక్కల ఆరోగ్యానికి అనుకూలంగా ఉన్నాయి',
      highHumidity: 'అధిక తేమ ఫంగల్ వ్యాధులను ప్రోత్సహించవచ్చు',
      highTemp: 'అధిక ఉష్ణోగ్రత ఒత్తిడి - తగినంత నీరు నిర్ధారించండి',
      rainy: 'వర్షపు పరిస్థితులు - ఆకు వ్యాధుల కోసం పర్యవేక్షించండి',
      tips: 'వాతావరణ సలహాలు:',
      tip1: '80% కంటే ఎక్కువ తేమ స్థాయిలను పర్యవేక్షించండి',
      tip2: 'అధిక వేడిమిలో నీడ అందించండి',
      tip3: 'మంచి గాలి ప్రసరణను నిర్ధారించండి'
    },
    chatbot: {
      title: 'AI మొక్క సంరక్షణ సహాయకుడు',
      subtitle: 'మా AI సహాయకుడి నుండి మీ మొక్కల సంరక్షణ ప్రశ్నలకు తక్షణ సమాధానాలు పొందండి',
      welcome: 'నమస్కారం! నేను మీ మొక్క సంరక్షణ సహాయకుడిని. మొక్కల వ్యాధులు, సంరక్షణ చిట్కాలు, లేదా లక్షణాలను అప్‌లోడ్ చేయడం గురించి నన్ను అడగండి!',
      status: 'ఆన్‌లైన్ - సహాయానికి సిద్ధం',
      placeholder: 'మొక్కల సంరక్షణ, వ్యాధులు, లేదా లక్షణాల గురించి అడగండి...',
      quickQuestions: 'త్వరిత ప్రశ్నలు:',
      quick: {
        brownSpots: 'ఆకులపై గోధుమ రంగు మచ్చలు',
        yellowLeaves: 'పసుపు ఆకులు',
        watering: 'నీరు పెట్టే షెడ్యూల్',
        fertilizer: 'ఎరువుల సలహా'
      }
    },
    gallery: {
      title: 'వ్యాధుల గ్యాలరీ',
      subtitle: 'మా సమగ్ర దృశ్య గైడ్‌తో సాధారణ మొక్కల వ్యాధులను గుర్తించడం నేర్చుకోండి',
      learnMore: 'మరింత తెలుసుకోండి',
      description: 'వివరణ',
      symptoms: 'లక్షణాలు',
      treatment: 'చికిత్స',
      close: 'మూసివేయండి'
    },
    about: {
      title: 'PlantAI గురించి',
      mission: 'మా లక్ష్యం',
      missionDesc: 'AI-శక్తితో మొక్కల వ్యాధుల గుర్తింపు మరియు సంరక్షణ సహాయంతో ప్రపంచవ్యాప్తంగా తోటమాలులను శక్తివంతం చేయడం।'
    }
  }
};