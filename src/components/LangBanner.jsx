import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { switchPath } from "../i18n/locale";

const store = (lang) => {
  try {
    localStorage.setItem("lang", lang);
  } catch {
    // localStorage no disponible
  }
};

// Ofrece cambiar al idioma del navegador en la primera visita. Textos en el
// idioma destino. Aceptar guarda `to` y navega; cerrar deja que LocaleLayout
// guarde el idioma actual.
const LangBanner = ({ to, onDone }) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const tt = (key) => t(`langBanner.${key}`, { lng: to });

  return (
    <div
      role="status"
      lang={to}
      className="bg-primary-600 text-white text-sm px-4 py-2 flex flex-wrap items-center justify-center gap-3"
    >
      <span>{tt("text")}</span>
      <Link
        to={switchPath(pathname, to)}
        hrefLang={to}
        onClick={() => store(to)}
        className="font-semibold underline underline-offset-2 hover:text-primary-100"
      >
        {tt("accept")}
      </Link>
      <button
        type="button"
        onClick={onDone}
        className="rounded px-2 py-0.5 ring-1 ring-white/50 hover:bg-white/10 transition-colors"
      >
        {tt("dismiss")}
      </button>
    </div>
  );
};

LangBanner.propTypes = {
  to: PropTypes.oneOf(["es", "en"]).isRequired,
  onDone: PropTypes.func.isRequired,
};

export default LangBanner;
