import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, TranslationStrings, TRANSLATIONS, PRODUCT_TRANSLATIONS_HI } from '../data/translations';
import { Product } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationStrings;
  toggleLanguage: () => void;
  getLocalizedProduct: (product: Product) => {
    name: string;
    description: string;
    features: string[];
    specs: Record<string, string>;
    badge?: string;
  };
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('gc_language');
    return (saved === 'hi' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('gc_language', lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const t = TRANSLATIONS[language];

  const getLocalizedProduct = (product: Product) => {
    if (language === 'hi' && PRODUCT_TRANSLATIONS_HI[product.id]) {
      const hiData = PRODUCT_TRANSLATIONS_HI[product.id];
      return {
        name: hiData.name || product.name,
        description: hiData.description || product.description,
        features: hiData.features || product.features,
        specs: { ...product.specs, ...hiData.specs },
        badge: hiData.badge || product.badge
      };
    }
    return {
      name: product.name,
      description: product.description,
      features: product.features,
      specs: product.specs,
      badge: product.badge
    };
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage, getLocalizedProduct }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
