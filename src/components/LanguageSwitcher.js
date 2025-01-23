// LanguageSwitcher.js

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faAngleDown, faGlobe } from '@fortawesome/free-solid-svg-icons';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language); // Use a state variable for currentLanguage

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language); // Update currentLanguage when the language changes
    setShowDropdown(false); // Close the dropdown after selecting a language
  };

  const languages = ['en', 'es', 'fr', 'de', 'pt', 'it']; // Add other languages as needed

  console.log('Current language:', currentLanguage);

  return (
    <div className="language-switcher">
      <div className="dropdown">
        <button className="dropbtn" onClick={() => setShowDropdown(!showDropdown)}>
          <FontAwesomeIcon icon={faGlobe} />
          {currentLanguage.toUpperCase()}
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
        {showDropdown && (
          <div className="dropdown-content">
            {languages.map((lang) => (
              <button key={lang} onClick={() => changeLanguage(lang)} className={currentLanguage === lang ? 'active' : ''}>
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;