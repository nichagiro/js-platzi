import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import ES from 'public/locales/es/translation.json'
import EN from 'public/locales/en/translation.json'

const resources = {
    es: { translation: ES },
    en: { translation: EN }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "es",
        interpolation: {
            escapeValue: false,
        }
    });


export default i18n;