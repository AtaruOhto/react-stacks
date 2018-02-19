import * as i18next from 'i18next';
import * as LanguageDetector from 'i18next-browser-languagedetector';
import resources from 'i18n/locales';

const i18n = i18next
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: 'ja',
        whitelist: ['en', 'ja'],
        nonExplicitWhitelist: true,
        debug: process.env !== 'production',
        react: {
            wait: true,
        },
    });

export default i18n;