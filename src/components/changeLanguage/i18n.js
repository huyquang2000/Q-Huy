import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from "i18next-xhr-backend";
import transEN from '../../locales/en/transen.json';
import transVI from '../../locales/vi/transvi.json';


const resources = {
    en: {
        translation: transEN
    },
    vi: {
        translation: transVI
    }
};

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'vi',
        debug: true,
        interpolation: {
            escapeValue: false 
        }
    });
export default i18n;