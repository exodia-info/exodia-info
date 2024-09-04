import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "it",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    it: {
      translation: {
        parola1: "Scorri",
        parola2: "giù",
        parola3: "per",
        parola4: "scoprire",
        parola5: "la magia",
        parolaDopo: "qualche cazzata",
      },
    },
    en: {
      translation: {
        parola1: "Scroll",
        parola2: "down",
        parola3: "to",
        parola4: "see",
        parola5: "magic",
        parolaDopo: "some bullshit",
      },
    },
  },
});

export default i18n;
