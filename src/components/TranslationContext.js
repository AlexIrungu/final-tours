import React, { createContext, useContext, useState, useCallback } from 'react';

const TranslationContext = createContext();

const MYMEMORY_API_URL = 'https://api.mymemory.translated.net/get';

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

    try {
      // Using MyMemory API directly from frontend
      const langPair = `en|${targetLang}`;
      const encodedText = encodeURIComponent(text);
      const url = `${MYMEMORY_API_URL}?q=${encodedText}&langpair=${langPair}`;
      
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.responseStatus === 200) {
        const translatedText = data.responseData.translatedText;
        
        // Update cache
        setCache(prevCache => ({
          ...prevCache,
          [cacheKey]: translatedText
        }));

        setIsLoading(false);
        return translatedText;
      } else {
        throw new Error(data.responseDetails || 'Translation failed');
      }

    } catch (err) {
      console.error('Translation error:', err);
      setError('Translation service unavailable. Please try again later.');
      setIsLoading(false);
      return text; // Fallback to original text
    }
  }, [language, cache]);

  // Batch translation helper
  const translateBatch = useCallback(async (texts, targetLang = language) => {
    try {
      const translations = await Promise.all(
        texts.map(text => translateText(text, targetLang))
      );
      return translations;
    } catch (err) {
      console.error('Batch translation error:', err);
      return texts; // Return original texts if translation fails
    }
  }, [translateText, language]);

  const value = {
    language,
    setLanguage,
    translateText,
    translateBatch,
    isLoading,
    error,
    supportedLanguages: {
      'en': 'English',
      'sw': 'Swahili',
      'fr': 'French',
      'es': 'Spanish',
      'de': 'German',
      'it': 'Italian',
      'pt': 'Portuguese',
      'ar': 'Arabic',
      'zh': 'Chinese',
      'hi': 'Hindi'
    }
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