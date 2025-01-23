import React, { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
import { HiOutlineAdjustments, HiOutlineEye, HiOutlineViewGrid, HiOutlineArrowNarrowLeft, HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi'; // Importing icons
import { useSpeechSynthesis } from 'react-speech-kit';
import { HiOutlineSearch } from 'react-icons/hi';
import { FaAccessibleIcon } from 'react-icons/fa';


const AccessibilityTools = () => {
  // const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const [fontSize, setFontSize] = useState(16); // State for font size adjustment
  const [isMagnifyActive, setIsMagnifyActive] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
 
  const { speak } = useSpeechSynthesis();

  // Function to toggle high contrast mode
  const toggleHighContrastMode = () => {
    // Toggle high contrast mode class on root element
    document.documentElement.classList.toggle('high-contrast');
  };

  // Function to increase font size
  const increaseFontSize = () => {
    setFontSize(prevSize => prevSize + 1);
  };

  // Function to decrease font size
  const decreaseFontSize = () => {
    setFontSize(prevSize => Math.max(prevSize - 1, 10)); // Ensure font size does not go below 10
  };

  // Function to highlight all links
const highlightLinks = () => {
  const links = document.querySelectorAll('a');
  links.forEach(link => link.classList.toggle('highlight'));
};

// Function to hide all images
const hideImages = () => {
  const images = document.querySelectorAll('img');
  images.forEach(image => image.style.display = image.style.display === 'none' ? '' : 'none');
};

// Function to magnify text on hover
const magnifyText = () => {
  setIsMagnifyActive(prevState => !prevState);
  const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, a'); // Add any other elements you want to magnify on hover
  elements.forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.fontSize = '2em'; // Increase font size on hover
    });
    element.addEventListener('mouseout', () => {
      element.style.fontSize = ''; // Reset font size when mouse leaves
    });
  });
};

// Function to toggle reading mask
const toggleReadingMask = () => {
  let mask = document.getElementById('reading-mask');
  if (mask) {
    // If the mask already exists, remove it
    mask.remove();
  } else {
    // If the mask does not exist, create it
    mask = document.createElement('div');
    mask.id = 'reading-mask';
    mask.style.position = 'absolute';
    mask.style.top = '0';
    mask.style.left = '0';
    mask.style.width = '100%';
    mask.style.height = '100px'; // Height of the reading mask
    mask.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Semi-transparent black
    mask.style.pointerEvents = 'none'; // Allow clicks to pass through the mask
    document.body.appendChild(mask);

    // Move the mask to the current mouse position
    document.addEventListener('mousemove', (e) => {
      mask.style.top = `${e.pageY - 50}px`; // Center the mask on the mouse cursor
    });
  }
};

  // Function to skip to main content
  const skipToMainContent = () => {
    const mainContentElement = document.getElementById('main-content');
    if (mainContentElement) {
      mainContentElement.focus();
    }
  };

  // Apply font size to body of document
  useEffect(() => {
    document.body.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

    // Function to change language
    // const changeLanguage = (language) => {
    //   i18n.changeLanguage(language);
    // };

    const textToSpeech = (text) => {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    };

    


  return (
    <div className="fixed bottom-4 right-4 bg-green-600">
      {/* Dropdown icon */}
      <button
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
        aria-label="Toggle Accessibility Tools"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaAccessibleIcon className="h-6 w-6 text-gray-700" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute bottom-12 right-0 bg-white shadow-md rounded-md bg-green-600" role="menu">
          {/* Keyboard navigation */}
          <button
            className="block w-full py-2 px-4 text-left hover:bg-gray-100"
            onClick={() => console.log('Navigating with keyboard')}
            role="menuitem"
          >
            <HiOutlineViewGrid className="inline-block mr-2" /> Keyboard Navigation
          </button>

          {/* High contrast mode */}
          <button
            className="block w-full py-2 px-4 text-left hover:bg-gray-100"
            onClick={toggleHighContrastMode}
            role="menuitem"
          >
            <HiOutlineEye className="inline-block mr-2" /> Toggle High Contrast Mode
          </button>

          {/* Highlight links */}
<button
  className="block w-full py-2 px-4 text-left hover:bg-gray-100"
  onClick={highlightLinks}
  role="menuitem"
>
  Highlight Links
</button>

{/* Hide images */}
<button
  className="block w-full py-2 px-4 text-left hover:bg-gray-100"
  onClick={hideImages}
  role="menuitem"
>
  Hide Images
</button>

       {/* Magnify text */}
<button
  className="block w-full py-2 px-4 text-left hover:bg-gray-100"
  onClick={magnifyText}
  role="menuitem"
>
  {isMagnifyActive ? <HiOutlineSearch className="inline-block mr-2" /> : null}
  Magnify Text
</button>

{/* Reading mask */}
<button
  className="block w-full py-2 px-4 text-left hover:bg-gray-100"
  onClick={toggleReadingMask}
  role="menuitem"
>
  Toggle Reading Mask
</button>

          {/* Font size adjustment */}
          <div className="flex items-center justify-between px-4 py-2 border-t border-gray-200">
            <button
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={decreaseFontSize}
              role="menuitem"
            >Decrease 
              <HiOutlineMinus className="h-5 w-5" />
            </button>
            <span className="text-gray-700" aria-live="polite">{fontSize}px</span>
            <button
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={increaseFontSize}
              role="menuitem"
            >Increase 
              <HiOutlinePlus className="h-5 w-5" />
            </button>
          </div>

           {/* Skip to main content */}
           <button
            className="block w-full py-2 px-4 text-left hover:bg-gray-100"
            onClick={skipToMainContent}
            role="menuitem"
          >
            Skip to Main Content
          </button>

          <button onClick={() => textToSpeech('Your text here')}>
  {isSpeaking ? 'Speaking...' : 'Text to Speech'}
</button>

           {/* Language selection */}
           {/* <div className="py-2 px-4">
            <label htmlFor="language-selection">{t('Select Language')}</label>
            <select id="language-selection" onChange={(e) => changeLanguage(e.target.value)}>
              <option value="en">{t('English')}</option>
              <option value="es">{t('Spanish')}</option>
             
            </select>
          </div> */}

          {/* Close button */}
          <button
            className="block w-full py-2 px-4 text-left hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
            role="menuitem"
          >
            <HiOutlineArrowNarrowLeft className="inline-block mr-2" /> Close
          </button>
        </div>
      )}
      
    </div>
  );
};

export default AccessibilityTools
