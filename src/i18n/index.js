import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./es.json";
import en from "./en.json";
import { DEFAULT_LANG, langFromPath } from "./locale";

// Idioma inicial desde la URL antes del primer render: evita el flash en /en.
i18n.use(initReactI18next).init({
  resources: { es: { translation: es }, en: { translation: en } },
  lng: langFromPath(globalThis.location?.pathname ?? "/"),
  fallbackLng: DEFAULT_LANG,
  interpolation: { escapeValue: false },
});

export default i18n;
