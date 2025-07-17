
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import hi from './locales/hi.json';
import it from './locales/it.json';
import ar from './locales/ar.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import es from './locales/es.json';


const resources = {
  en,
  hi,
  it,
  ar,
  de,
  fr,
  es,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources, // loads translations from imported JSON files
    fallbackLng: 'en',
    supportedLngs: ['en', 'hi', 'es', 'it', 'ar','de','fr'], // add 'it' if needed
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'cookie'],
      caches: ['localStorage'],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
