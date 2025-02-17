import React, { useState, useEffect } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import {
  Accessibility,
  Eye,
  EyeOff,
  ZoomIn,
  ZoomOut,
  Link,
  Image,
  Type,
  Volume2,
  Languages,
  X,
  Sun,
  Moon,
  AlignCenter,
  Keyboard,
  Settings2
} from 'lucide-react';

const AccessibilityTools = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0,
    wordSpacing: 0,
    fontFamily: 'default',
    theme: 'default',
    cursor: 'default',
    animations: true,
    isMagnifyActive: false,
    isHighContrast: false,
    isDyslexiaFont: false,
    areImagesHidden: false,
    areLinksHighlighted: false,
    isReadingGuide: false
  });
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { speak, cancel } = useSpeechSynthesis();

  // Load saved settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
      applySettings(JSON.parse(savedSettings));
    }
  }, []);

  // Save settings to localStorage when they change
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    applySettings(settings);
  }, [settings]);

  const applySettings = (currentSettings) => {
    const root = document.documentElement;
    
    // Apply font size
    root.style.fontSize = `${currentSettings.fontSize}px`;
    
    // Apply line height
    root.style.lineHeight = currentSettings.lineHeight;
    
    // Apply letter spacing
    root.style.letterSpacing = `${currentSettings.letterSpacing}px`;
    
    // Apply word spacing
    root.style.wordSpacing = `${currentSettings.wordSpacing}px`;
    
    // Apply theme
    root.classList.remove('theme-default', 'theme-dark', 'theme-light', 'high-contrast');
    root.classList.add(`theme-${currentSettings.theme}`);
    
    // Apply cursor size
    if (currentSettings.cursor === 'large') {
      root.classList.add('large-cursor');
    } else {
      root.classList.remove('large-cursor');
    }
    
    // Apply animations
    if (!currentSettings.animations) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }
    
    // Apply dyslexia-friendly font
    if (currentSettings.isDyslexiaFont) {
      root.classList.add('dyslexia-font');
    } else {
      root.classList.remove('dyslexia-font');
    }

    // Apply high contrast
    if (currentSettings.isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Handle images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.style.display = currentSettings.areImagesHidden ? 'none' : '';
    });

    // Handle links
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.classList.toggle('highlighted-link', currentSettings.areLinksHighlighted);
    });
  };

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const textToSpeech = () => {
    if (isSpeaking) {
      cancel();
      setIsSpeaking(false);
    } else {
      const selectedText = window.getSelection().toString();
      const textToRead = selectedText || document.body.innerText;
      speak({ text: textToRead });
      setIsSpeaking(true);
    }
  };

  const toggleReadingGuide = () => {
    updateSetting('isReadingGuide', !settings.isReadingGuide);
    let guide = document.getElementById('reading-guide');
    
    if (!settings.isReadingGuide) {
      if (!guide) {
        guide = document.createElement('div');
        guide.id = 'reading-guide';
        guide.className = 'fixed w-full h-12 bg-yellow-200 opacity-20 pointer-events-none z-50';
        document.body.appendChild(guide);
        
        const moveGuide = (e) => {
          guide.style.top = `${e.clientY - 24}px`;
        };
        
        document.addEventListener('mousemove', moveGuide);
      }
    } else {
      guide?.remove();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-lg transition-all"
        aria-label="Toggle Accessibility Tools"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 max-h-[80vh] overflow-y-auto">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4 sticky top-0 bg-white">
              <h2 className="text-lg font-semibold text-gray-800">Accessibility Settings</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Section */}
            <div className="space-y-4">
              {/* Display Settings */}
              <div className="space-y-2">
                <h3 className="font-medium text-gray-700 flex items-center gap-2">
                  <Settings2 className="w-4 h-4" /> Display
                </h3>
                
                {/* Theme Selector */}
                <div className="flex gap-2">
                  <button
                    onClick={() => updateSetting('theme', 'default')}
                    className={`flex-1 p-2 rounded ${settings.theme === 'default' ? 'bg-blue-100' : 'bg-gray-100'}`}
                  >
                    Default
                  </button>
                  <button
                    onClick={() => updateSetting('theme', 'dark')}
                    className={`flex-1 p-2 rounded ${settings.theme === 'dark' ? 'bg-blue-100' : 'bg-gray-100'}`}
                  >
                    <Moon className="w-4 h-4 inline mr-2" />
                    Dark
                  </button>
                  <button
                    onClick={() => updateSetting('theme', 'light')}
                    className={`flex-1 p-2 rounded ${settings.theme === 'light' ? 'bg-blue-100' : 'bg-gray-100'}`}
                  >
                    <Sun className="w-4 h-4 inline mr-2" />
                    Light
                  </button>
                </div>

                {/* Font Size Controls */}
                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={() => updateSetting('fontSize', Math.max(12, settings.fontSize - 2))}
                    className="p-2 text-gray-700 hover:bg-gray-100 rounded"
                  >
                    <ZoomOut className="w-5 h-5" />
                  </button>
                  <span className="text-gray-700">Font Size: {settings.fontSize}px</span>
                  <button
                    onClick={() => updateSetting('fontSize', settings.fontSize + 2)}
                    className="p-2 text-gray-700 hover:bg-gray-100 rounded"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>

                {/* Line Height */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-gray-700">Line Height</span>
                  <input
                    type="range"
                    min="1"
                    max="2"
                    step="0.1"
                    value={settings.lineHeight}
                    onChange={(e) => updateSetting('lineHeight', parseFloat(e.target.value))}
                    className="w-32"
                  />
                </div>

                {/* Letter Spacing */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-gray-700">Letter Spacing</span>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="0.5"
                    value={settings.letterSpacing}
                    onChange={(e) => updateSetting('letterSpacing', parseFloat(e.target.value))}
                    className="w-32"
                  />
                </div>
              </div>

              {/* Reading Aids */}
              <div className="space-y-2">
                <h3 className="font-medium text-gray-700 flex items-center gap-2">
                  <Type className="w-4 h-4" /> Reading Aids
                </h3>
                
                <button
                  onClick={() => updateSetting('isDyslexiaFont', !settings.isDyslexiaFont)}
                  className="w-full flex items-center justify-between p-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  <span>Dyslexia-friendly Font</span>
                  <input
                    type="checkbox"
                    checked={settings.isDyslexiaFont}
                    onChange={() => {}}
                    className="ml-2"
                  />
                </button>

                <button
                  onClick={toggleReadingGuide}
                  className="w-full flex items-center justify-between p-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  <span>Reading Guide</span>
                  <input
                    type="checkbox"
                    checked={settings.isReadingGuide}
                    onChange={() => {}}
                    className="ml-2"
                  />
                </button>

                <button
                  onClick={textToSpeech}
                  className="w-full flex items-center justify-between p-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  <span>Text to Speech</span>
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>

              {/* Visual Preferences */}
              <div className="space-y-2">
                <h3 className="font-medium text-gray-700 flex items-center gap-2">
                  <Eye className="w-4 h-4" /> Visual Preferences
                </h3>

                <button
                  onClick={() => updateSetting('isHighContrast', !settings.isHighContrast)}
                  className="w-full flex items-center justify-between p-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  <span>High Contrast</span>
                  <input
                    type="checkbox"
                    checked={settings.isHighContrast}
                    onChange={() => {}}
                    className="ml-2"
                  />
                </button>

                <button
                  onClick={() => updateSetting('areImagesHidden', !settings.areImagesHidden)}
                  className="w-full flex items-center justify-between p-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  <span>Hide Images</span>
                  <input
                    type="checkbox"
                    checked={settings.areImagesHidden}
                    onChange={() => {}}
                    className="ml-2"
                  />
                </button>

                <button
                  onClick={() => updateSetting('areLinksHighlighted', !settings.areLinksHighlighted)}
                  className="w-full flex items-center justify-between p-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  <span>Highlight Links</span>
                  <input
                    type="checkbox"
                    checked={settings.areLinksHighlighted}
                    onChange={() => {}}
                    className="ml-2"
                  />
                </button>
              </div>

              {/* Motion & Interaction */}
              <div className="space-y-2">
                <h3 className="font-medium text-gray-700 flex items-center gap-2">
                  <Eye className="w-4 h-4" /> Motion & Interaction
                </h3>

                <button
                  onClick={() => updateSetting('animations', !settings.animations)}
                  className="w-full flex items-center justify-between p-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  <span>Allow Animations</span>
                  <input
                    type="checkbox"
                    checked={settings.animations}
                    onChange={() => {}}
                    className="ml-2"
                  />
                </button>

                <button
                  onClick={() => updateSetting('cursor', settings.cursor === 'default' ? 'large' : 'default')}
                  className="w-full flex items-center justify-between p-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  <span>Large Cursor</span>
                  <input
                    type="checkbox"
                    checked={settings.cursor === 'large'}
                    onChange={() => {}}
                    className="ml-2"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityTools;