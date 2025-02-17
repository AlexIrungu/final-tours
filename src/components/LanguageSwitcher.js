import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
    setShowDropdown(false);
  };

  const languages = ['en', 'es', 'fr', 'de', 'pt', 'it']; // Supported languages

  return (
    <div className="relative">
      {/* Language Switcher Button */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center space-x-2 p-2 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none"
      >
        <FontAwesomeIcon icon={faGlobe} className="text-gray-700" />
        <span className="text-gray-700 font-medium">{currentLanguage.toUpperCase()}</span>
        <FontAwesomeIcon icon={faAngleDown} className="text-gray-700" />
      </button>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-lg border border-gray-200">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className={`w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                currentLanguage === lang ? 'font-bold' : ''
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;