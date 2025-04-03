import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Languagedetector from "i18next-browser-languagedetector"

import translationEN from "./locales/en.json"
import translationRU from "./locales/ru.json"



const resources = {
    en: {translation: translationEN},
    ru: {translation: translationRU},
};


i18n
.use(initReactI18next)
.use(Languagedetector)
.init({
    resources,
    fallbackLng: "en",
    interpolation: {
        escapeValue:false,
    },
})


export default i18n