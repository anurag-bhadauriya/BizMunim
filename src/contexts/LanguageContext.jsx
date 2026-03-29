import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useTranslation = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = async () => {
      setLoading(true);
      try {
        // We import the JSON directly using Vite's static asset handling
        const module = await import(`../assets/locales/${language}.json`);
        setTranslations(module.default);
      } catch (error) {
        console.error(`Failed to load ${language} language file:`, error);
      } finally {
        setLoading(false);
      }
    };

    loadTranslations();
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = (key) => {
    if (!translations || !key) return key;
    
    // Support nested keys like 'hero.title'
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value[k] === undefined) {
        return key; // return the key itself if not found
      }
      value = value[k];
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, loading }}>
      {children}
    </LanguageContext.Provider>
  );
};
