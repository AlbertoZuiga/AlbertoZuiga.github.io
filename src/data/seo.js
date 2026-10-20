import { site } from "./site.js";
import { localePath } from "../i18n/locale.js";

// Imagen OG por ruta. title/description/keywords viven en seo.<ruta> de
// src/i18n/*.json. Fuente única para useSeo (runtime) y scripts/prerender.mjs.
export const seoRoutes = {
  "/": "/og-image.png",
  "/about": "/og/about.png",
  "/projects": "/og/projects.png",
  "/projects/calculator": "/og/calculator.png",
  "/projects/clock": "/og/clock.png",
  "/projects/tic-tac-toe": "/og/tic-tac-toe.png",
  "/projects/camera": "/og/camera.png",
  "/projects/arbocensus": "/og/arbocensus.png",
  "/projects/scheduler": "/og/scheduler.png",
  "/projects/healthy": "/og/healthy.png",
  "/contact": "/og-image.png",
};

const absolute = (lang, route) => {
  const path = localePath(lang, route);
  return path === "/" ? site.baseUrl : `${site.baseUrl}${path}`;
};

// seoDict = diccionario `seo` del idioma (t("seo", { returnObjects: true }))
export const seoFor = (route, lang, seoDict) => ({
  ...seoDict[route],
  image: seoRoutes[route],
  url: absolute(lang, route),
  lang,
  alternates: { es: absolute("es", route), en: absolute("en", route) },
});
