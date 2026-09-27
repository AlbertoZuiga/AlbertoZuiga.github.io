import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { seoFor, seoRoutes } from "../src/data/seo.js";
import { site } from "../src/data/site.js";
import { LANGS, localePath } from "../src/i18n/locale.js";

// Post-build: escribe dist/<ruta>/index.html (es) y dist/en/<ruta>/index.html
// (en) con <title>, metas OG/Twitter y hreflang estáticos por página. Los
// scrapers de Facebook/LinkedIn/Twitter no ejecutan JS y GitHub Pages responde
// 404.html en rutas profundas; con esto cada URL devuelve 200 y sus metas
// correctas. main.jsx elimina las etiquetas [data-prerender] antes de montar
// React para no duplicar las de SEO.jsx.

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const template = await readFile(join(dist, "index.html"), "utf8");
const MARKER = "<!-- prerender -->";
const OG_LOCALE = { es: "es_ES", en: "en_US" };

const dicts = Object.fromEntries(
  await Promise.all(
    LANGS.map(async (lang) => [
      lang,
      JSON.parse(
        await readFile(join(root, "src/i18n", `${lang}.json`), "utf8")
      ),
    ])
  )
);

const escape = (s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const meta = (attr, name, content) =>
  `<meta ${attr}="${name}" content="${escape(content)}" data-prerender />`;

const headFor = ({
  title,
  description,
  url,
  image,
  keywords,
  lang,
  alternates,
}) => {
  const img = `${site.baseUrl}${image}`;
  const otherLang = lang === "en" ? "es" : "en";
  return [
    MARKER,
    `<title data-prerender>${escape(title)}</title>`,
    meta("name", "description", description),
    meta("name", "keywords", keywords),
    `<link rel="canonical" href="${url}" data-prerender />`,
    `<link rel="alternate" hreflang="es" href="${alternates.es}" data-prerender />`,
    `<link rel="alternate" hreflang="en" href="${alternates.en}" data-prerender />`,
    `<link rel="alternate" hreflang="x-default" href="${alternates.es}" data-prerender />`,
    meta("property", "og:type", "website"),
    meta("property", "og:url", url),
    meta("property", "og:title", title),
    meta("property", "og:description", description),
    meta("property", "og:image", img),
    meta("property", "og:image:secure_url", img),
    meta("property", "og:image:width", "1200"),
    meta("property", "og:image:height", "630"),
    meta("property", "og:image:alt", title),
    meta("property", "og:site_name", site.siteName),
    meta("property", "og:locale", OG_LOCALE[lang]),
    meta("property", "og:locale:alternate", OG_LOCALE[otherLang]),
    meta("name", "twitter:card", "summary_large_image"),
    meta("name", "twitter:url", url),
    meta("name", "twitter:title", title),
    meta("name", "twitter:description", description),
    meta("name", "twitter:image", img),
    meta("name", "twitter:image:alt", title),
    meta("name", "author", site.name),
    meta("name", "robots", "index, follow"),
  ].join("\n    ");
};

for (const lang of LANGS) {
  for (const route of Object.keys(seoRoutes)) {
    const page = seoFor(route, lang, dicts[lang].seo);
    const html = template
      .replace('<html lang="es">', `<html lang="${lang}">`)
      .replace("</head>", `    ${headFor(page)}\n  </head>`);
    const path = localePath(lang, route);
    const dir = join(dist, path);
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, "index.html"), html);
    console.log(`prerender: ${path}`);
  }
}
