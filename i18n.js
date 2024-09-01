import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    it: {
      translation: {
        parola1: "Scorri",
        parola2: "per",
        parola3: "vedere",
        parola4: "la",
        parola5: "magia",
      },
    },
    en: {
      translation: {
        parola1: "Scroll",
        parola2: "down",
        parola3: "to",
        parola4: "see",
        parola5: "magic",
      },
    },
  },
});

export default i18n;
