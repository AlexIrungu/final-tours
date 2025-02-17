import React from 'react';
import { useTranslation } from './TranslationContext';

const SimpleLanguageSwitcher = () => {
  const { language, setLanguage, isLoading, error } = useTranslation();
  
  return (
    <div className="relative">
      <div className="flex space-x-2">
        <button 
          onClick={() => setLanguage('en')}
          disabled={isLoading}
          className={`px-2 py-1 rounded ${language === 'en' ? 'bg-brown-600 text-white' : 'text-gray-300 hover:bg-brown-500 hover:text-white'} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          EN
        </button>
        <button 
          onClick={() => setLanguage('es')}
          disabled={isLoading}
          className={`px-2 py-1 rounded ${language === 'es' ? 'bg-brown-600 text-white' : 'text-gray-300 hover:bg-brown-500 hover:text-white'} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          ES
        </button>
        <button 
          onClick={() => setLanguage('fr')}
          disabled={isLoading}
          className={`px-2 py-1 rounded ${language === 'fr' ? 'bg-brown-600 text-white' : 'text-gray-300 hover:bg-brown-500 hover:text-white'} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          FR
        </button>
      </div>
      
      {isLoading && (
        <div className="absolute top-full left-0 mt-2 text-sm text-gray-300 whitespace-nowrap">
          Translating...
        </div>
      )}
      
      {error && (
        <div className="absolute top-full left-0 mt-2 text-sm text-red-400 whitespace-nowrap">
          {error}
        </div>
      )}
    </div>
  );
};

export default SimpleLanguageSwitcher;