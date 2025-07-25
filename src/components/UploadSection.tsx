import React, { useState, useRef } from 'react';
import { Upload, Camera, FileImage, AlertCircle, CheckCircle } from 'lucide-react';

interface UploadSectionProps {
  translations: any;
  onImageUpload: (file: File) => void;
  prediction: any;
  isLoading: boolean;
}

const UploadSection: React.FC<UploadSectionProps> = ({ 
  translations, 
  onImageUpload, 
  prediction, 
  isLoading 
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      onImageUpload(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  return (
    <section id="upload" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
            {translations.upload?.title || 'AI Disease Detection'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {translations.upload?.subtitle || 'Upload a clear image of a plant leaf to get instant AI-powered disease diagnosis'}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Area */}
            <div className="glass-card p-8 scale-in">
              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 cursor-pointer ${
                  dragActive 
                    ? 'border-primary bg-primary/10 scale-105' 
                    : 'border-border hover:border-primary/50 hover:bg-primary/5'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileInput}
                  className="hidden"
                />
                
                {uploadedImage ? (
                  <div className="space-y-4">
                    <img 
                      src={uploadedImage} 
                      alt="Uploaded leaf"
                      className="w-48 h-48 object-cover rounded-lg mx-auto border-2 border-primary/20"
                    />
                    <p className="text-sm text-muted-foreground">
                      {translations.upload?.imageUploaded || 'Image uploaded successfully'}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-center space-x-4">
                      <Upload className="w-12 h-12 text-primary" />
                      <Camera className="w-12 h-12 text-accent" />
                      <FileImage className="w-12 h-12 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {translations.upload?.dragDrop || 'Drag & drop your leaf image'}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {translations.upload?.orClick || 'or click to browse'}
                      </p>
                      <button className="btn-gradient text-primary-foreground px-6 py-2 rounded-lg">
                        {translations.upload?.browse || 'Browse Files'}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Upload Tips */}
              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                <p>📸 {translations.upload?.tips?.clear || 'Take a clear, well-lit photo'}</p>
                <p>🍃 {translations.upload?.tips?.single || 'Focus on a single leaf'}</p>
                <p>📐 {translations.upload?.tips?.format || 'Supported: JPG, PNG, WebP'}</p>
              </div>
            </div>

            {/* Results Area */}
            <div className="glass-card p-8 scale-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-6 text-center">
                {translations.upload?.results || 'Diagnosis Results'}
              </h3>

              {isLoading ? (
                <div className="text-center space-y-4">
                  <div className="spinner mx-auto"></div>
                  <p className="text-muted-foreground">
                    {translations.upload?.analyzing || 'Analyzing your plant...'}
                  </p>
                </div>
              ) : prediction ? (
                <div className="space-y-6">
                  {/* Disease Result */}
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      {prediction.confidence > 0.8 ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <AlertCircle className="w-6 h-6 text-yellow-500" />
                      )}
                      <h4 className="text-lg font-bold">{prediction.disease}</h4>
                    </div>
                    <div className="text-3xl font-bold text-accent mb-2">
                      {Math.round(prediction.confidence * 100)}%
                    </div>
                    <p className="text-muted-foreground">
                      {translations.upload?.confidence || 'Confidence Level'}
                    </p>
                  </div>

                  {/* Confidence Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{translations.upload?.confidence || 'Confidence'}</span>
                      <span>{Math.round(prediction.confidence * 100)}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                        style={{ width: `${prediction.confidence * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  {prediction.treatment && (
                    <div className="bg-accent/10 rounded-lg p-4">
                      <h5 className="font-semibold mb-2 text-accent">
                        {translations.upload?.treatment || 'Recommended Treatment:'}
                      </h5>
                      <p className="text-sm text-foreground">{prediction.treatment}</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center text-muted-foreground space-y-4">
                  <FileImage className="w-16 h-16 mx-auto opacity-50" />
                  <p>{translations.upload?.uploadPrompt || 'Upload an image to see AI diagnosis results here'}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;