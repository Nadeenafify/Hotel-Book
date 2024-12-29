import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationArabic from "./locales/Arabic.json"
import translationEnglish from "./locales/English.json"

// Translations
const resources = {
  en: {
    translation: translationEnglish,
  },
  ar: {
    translation: translationArabic,
  },
};

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Connects i18next to React
  .init({
    resources,
    fallbackLng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
