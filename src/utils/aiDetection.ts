// Plant Disease Detection AI Utility
// This simulates TensorFlow.js model integration for demo purposes

export interface DiseaseDetection {
  disease: string;
  confidence: number;
  treatment: string;
  description: string;
}

// Simulate TensorFlow.js model loading
export const loadModel = async () => {
  // In a real implementation, you would load the actual model:
  // const model = await tf.loadLayersModel('/model/model.json');
  // return model;
  
  // For demo purposes, return a mock model
  console.log('Loading AI model...');
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Model loaded successfully');
  return { predict: mockPredict };
};

// Mock disease database for demonstration
const diseaseDatabase = [
  {
    disease: 'Late Blight',
    treatment: 'Remove affected plants immediately. Improve air circulation and apply copper-based fungicides preventively.',
    description: 'A serious fungal disease that can destroy entire crops quickly in humid conditions.'
  },
  {
    disease: 'Rust Disease',
    treatment: 'Remove infected leaves, ensure good drainage, and apply fungicide spray.',
    description: 'Fungal disease characterized by orange-red pustules on leaf surfaces.'
  },
  {
    disease: 'Black Spot',
    treatment: 'Prune affected areas, improve air flow, and use disease-resistant varieties.',
    description: 'Common fungal disease causing circular black lesions on leaves.'
  },
  {
    disease: 'Powdery Mildew',
    treatment: 'Increase air circulation, reduce humidity, and apply sulfur-based fungicides.',
    description: 'Fungal disease creating white powdery coating on plant surfaces.'
  },
  {
    disease: 'Bacterial Spot',
    treatment: 'Remove infected tissue, avoid overhead watering, and apply copper treatments.',
    description: 'Bacterial infection causing water-soaked spots with yellow halos.'
  },
  {
    disease: 'Healthy Plant',
    treatment: 'Continue current care routine. Maintain good watering and fertilization schedule.',
    description: 'No disease detected. Plant appears healthy and well-maintained.'
  }
];

// Mock prediction function (in real app, this would use the actual TensorFlow.js model)
const mockPredict = async (imageData: ImageData): Promise<DiseaseDetection> => {
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 1000));
  
  // Randomly select a disease for demo purposes
  // In a real implementation, this would process the image through the neural network
  const randomIndex = Math.floor(Math.random() * diseaseDatabase.length);
  const disease = diseaseDatabase[randomIndex];
  
  // Generate a realistic confidence score
  const confidence = disease.disease === 'Healthy Plant' 
    ? 0.85 + Math.random() * 0.1  // Healthy plants: 85-95%
    : 0.75 + Math.random() * 0.2; // Diseases: 75-95%
  
  return {
    disease: disease.disease,
    confidence: Math.min(confidence, 0.95), // Cap at 95%
    treatment: disease.treatment,
    description: disease.description
  };
};

// Preprocess image for model input
export const preprocessImage = (file: File): Promise<ImageData> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      // Resize to model input size (typically 224x224 for plant disease models)
      canvas.width = 224;
      canvas.height = 224;
      
      if (ctx) {
        ctx.drawImage(img, 0, 0, 224, 224);
        const imageData = ctx.getImageData(0, 0, 224, 224);
        resolve(imageData);
      } else {
        reject(new Error('Could not get canvas context'));
      }
    };
    
    img.onerror = () => reject(new Error('Could not load image'));
    img.src = URL.createObjectURL(file);
  });
};

// Main detection function
export const detectDisease = async (file: File): Promise<DiseaseDetection> => {
  try {
    // Load model (in real app, this would be cached)
    const model = await loadModel();
    
    // Preprocess image
    const imageData = await preprocessImage(file);
    
    // Run prediction
    const result = await model.predict(imageData);
    
    return result;
  } catch (error) {
    console.error('Disease detection error:', error);
    
    // Fallback response
    return {
      disease: 'Detection Error',
      confidence: 0,
      treatment: 'Please try again with a clearer image.',
      description: 'Unable to process the image. Ensure good lighting and focus.'
    };
  }
};

// Utility function to get disease information
export const getDiseaseInfo = (diseaseName: string) => {
  return diseaseDatabase.find(d => d.disease === diseaseName) || diseaseDatabase[0];
};