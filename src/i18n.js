import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import translationIT from './locales/it/translation.json';
import translationES from './locales/es/translation.json';
import translationPT from './locales/pt/translation.json';
import translationDE from './locales/de/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  it: {
    translation: translationIT,
  },
  de: {
    translation: translationDE,
  },
  pt: {
    translation: translationPT,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Set default language
    keySeparator: false, // Remove dots as separator, e.g., 'nested.key' will be 'nestedkey'
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
