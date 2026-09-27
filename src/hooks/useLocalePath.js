import { useTranslation } from "react-i18next";
import { localePath } from "../i18n/locale";

// Devuelve (path) => path con prefijo del idioma actual ("/about" → "/en/about")
export const useLocalePath = () => {
  const { i18n } = useTranslation();
  return (path) => localePath(i18n.language, path);
};
