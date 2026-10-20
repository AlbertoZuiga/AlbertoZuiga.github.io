import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import LangBanner from "./LangBanner";
import { DEFAULT_LANG, LANGS, localePath } from "../i18n/locale";

const readStoredLang = () => {
  try {
    return localStorage.getItem("lang");
  } catch {
    return null; // localStorage no disponible (Safari privado, etc.)
  }
};

// Idioma del navegador si es distinto al de la ruta; null si coincide o no aplica.
const suggestedLang = (lang) => {
  const nav = (globalThis.navigator?.language ?? "").slice(0, 2).toLowerCase();
  const target = LANGS.includes(nav) ? nav : DEFAULT_LANG;
  return target !== lang ? target : null;
};

// Sincroniza i18next, <html lang> y localStorage con el prefijo de la ruta.
// Un visitante con "en" guardado que entra sin prefijo va a /en/...
// Primera visita (sin preferencia guardada) con idioma de navegador distinto:
// se muestra LangBanner y no se guarda nada hasta que responda, así el banner
// sobrevive la navegación SPA (<Routes key={pathname}> remonta este layout).
const LocaleLayout = ({ lang }) => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();
  const stored = readStoredLang();
  const [suggest, setSuggest] = useState(() =>
    stored ? null : suggestedLang(lang)
  );
  const redirect =
    lang === DEFAULT_LANG && stored && stored !== DEFAULT_LANG
      ? localePath(stored, pathname)
      : null;

  useEffect(() => {
    if (redirect) return;
    if (i18n.language !== lang) i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    if (suggest) return;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // localStorage no disponible
    }
  }, [i18n, lang, redirect, suggest]);

  if (redirect) return <Navigate to={redirect} replace />;
  return (
    <>
      {suggest && <LangBanner to={suggest} onDone={() => setSuggest(null)} />}
      <Outlet />
    </>
  );
};

LocaleLayout.propTypes = {
  lang: PropTypes.oneOf(["es", "en"]).isRequired,
};

export default LocaleLayout;
