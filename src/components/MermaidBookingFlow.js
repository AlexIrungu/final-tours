import React, { useEffect, useState } from 'react';
import { Card } from './ui/card';

const MermaidBookingFlow = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const stepsInfo = [
    {
      title: "Select Your Destination",
      description: "Browse through our curated list of destinations and select the service that matches your dream vacation.",
      icon: "🗺️"
    },
    {
      title: "Book Now",
      description: "Click the 'Book Now' button and send an email to danilscenic@gmail.com with your preferences.",
      icon: "📧"
    },
    {
      title: "Collaborative Planning",
      description: "We'll work together to craft the perfect itinerary tailored to your preferences and wishes.",
      icon: "🤝"
    },
    {
      title: "Unforgettable Experience",
      description: "Receive your confirmation email and prepare for a once-in-a-lifetime adventure!",
      icon: "✨"
    }
  ];

  const goToNextStep = () => {
    if (activeStep < stepsInfo.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const goToPrevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto p-6 bg-orange-50">
      <h2 className="text-2xl font-bold text-center mb-8 text-orange-500">How to Book with Us</h2>
      
      {/* Progress Steps */}
      <div className="flex justify-between mb-8 relative">
        {stepsInfo.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center w-1/4">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center text-lg mb-2 transition-all duration-300 ${
                index === activeStep 
                  ? 'bg-orange-500 text-white scale-110' 
                  : index < activeStep 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-200 text-gray-500'
              }`}
            >
              {index < activeStep ? '✓' : step.icon}
            </div>
            <div className="text-center">
              <div className={`text-sm font-medium ${index === activeStep ? 'text-orange-500' : 'text-gray-500'}`}>
                Step {index + 1}
              </div>
              <div className="text-xs mt-1 hidden sm:block">{step.title}</div>
            </div>
            {index < stepsInfo.length - 1 && (
              <div className={`absolute top-5 left-1/2 w-full h-0.5 transition-all duration-300 ${
                index < activeStep ? 'bg-green-500' : 'bg-gray-200'
              }`} />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6 transition-all duration-500">
        <div className="flex items-start">
          <div className="text-3xl mr-4">{stepsInfo[activeStep].icon}</div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">{stepsInfo[activeStep].title}</h3>
            <p className="text-gray-700">{stepsInfo[activeStep].description}</p>
            {activeStep === 1 && (
              <p className="mt-2 text-blue-600 font-medium">danilscenic@gmail.com</p>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button 
          onClick={goToPrevStep}
          disabled={activeStep === 0}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            activeStep === 0 
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
              : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
          }`}
        >
          ← Previous
        </button>
        
        <div className="text-sm text-gray-500">
          Step {activeStep + 1} of {stepsInfo.length}
        </div>
        
        <button 
          onClick={goToNextStep}
          disabled={activeStep === stepsInfo.length - 1}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            activeStep === stepsInfo.length - 1 
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
              : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
          }`}
        >
          Next →
        </button>
      </div>
    </Card>
  );
};

export default MermaidBookingFlow;