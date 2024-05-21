import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import englishTranslations from "@i18n/languages/en.json";
import romanianTranslations from "@i18n/languages/ro.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ...englishTranslations,
        dateFormats: {
          short: "dd/mm/YYYY",
          long: "dddd D [de] MMMM [de] YYYY",
        },
      },
    },
    ro: {
      translation: {
        ...romanianTranslations,
        dateFormats: {
          short: "dd/mm/YYYY",
          long: "dddd D [de] MMMM [de] YYYY",
        },
      },
    },
  },
  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
