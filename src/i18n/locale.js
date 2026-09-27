// Helpers puros de idioma/ruta. Sin React ni i18next: los usa también
// scripts/prerender.mjs en Node.
export const LANGS = ["es", "en"];
export const DEFAULT_LANG = "es";

// "/en" o "/en/..." → "en"; cualquier otra ruta → "es"
export const langFromPath = (pathname) =>
  pathname === "/en" || pathname.startsWith("/en/") ? "en" : DEFAULT_LANG;

// localePath("en", "/about") → "/en/about"; localePath("en", "/") → "/en"
export const localePath = (lang, path) => {
  if (lang === DEFAULT_LANG) return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
};

// Misma ruta en otro idioma: switchPath("/en/about", "es") → "/about"
export const switchPath = (pathname, toLang) => {
  const bare =
    langFromPath(pathname) === "en" ? pathname.slice(3) || "/" : pathname;
  return localePath(toLang, bare);
};
