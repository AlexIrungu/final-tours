import React, { createContext, useContext, useState, useCallback } from 'react';

// List of public LibreTranslate instances to try
const LIBRETRANSLATE_INSTANCES = [
  'https://translate.argosopentech.com',  // More reliable instance
  'https://libretranslate.de',
  'https://translate.terraprint.co'
];

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cache, setCache] = useState({});

  const translateText = useCallback(async (text, targetLang = language) => {
    // Don't translate if target language is English or text is empty
    if (targetLang === 'en' || !text.trim()) {
      return text;
    }

    // Create cache key
    const cacheKey = `${text}-${targetLang}`;
    
    // Check cache first
    if (cache[cacheKey]) {
      return cache[cacheKey];
    }

    setIsLoading(true);
    setError(null);

    // Try each instance until one works
    for (const baseUrl of LIBRETRANSLATE_INSTANCES) {
      try {
        const response = await fetch('http://localhost:5000/translate', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                q: text,
                source: 'en',
                target: targetLang
            })
        });
        

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Update cache
        setCache(prevCache => ({
          ...prevCache,
          [cacheKey]: data.translatedText
        }));

        setIsLoading(false);
        return data.translatedText;

      } catch (err) {
        console.warn(`Failed to translate using ${baseUrl}:`, err);
        // Continue to next instance if available
        continue;
      }
    }

    // If all instances failed
    setError('Translation service unavailable. Please try again later.');
    setIsLoading(false);
    return text; // Fallback to original text
  }, [language, cache]);

  const value = {
    language,
    setLanguage,
    translateText,
    isLoading,
    error
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};