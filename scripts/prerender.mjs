import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { seoPages } from "../src/data/seo.js";
import { site } from "../src/data/site.js";

// Post-build: escribe dist/<ruta>/index.html con <title> y metas OG/Twitter
// estáticas por página. Los scrapers de Facebook/LinkedIn/Twitter no ejecutan
// JS y GitHub Pages responde 404.html en rutas profundas; con esto cada URL
// devuelve 200 y sus metas correctas. main.jsx elimina las etiquetas
// [data-prerender] antes de montar React para no duplicar las de SEO.jsx.

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const template = await readFile(join(dist, "index.html"), "utf8");
const MARKER = "<!-- prerender -->";

const escape = (s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const meta = (attr, name, content) =>
  `<meta ${attr}="${name}" content="${escape(content)}" data-prerender />`;

const headFor = ({ title, description, url, image, keywords }) => {
  const img = `${site.baseUrl}${image}`;
  return [
    MARKER,
    `<title data-prerender>${escape(title)}</title>`,
    meta("name", "description", description),
    meta("name", "keywords", keywords),
    `<link rel="canonical" href="${url}" data-prerender />`,
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
    meta("property", "og:locale", "es_ES"),
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

for (const [route, page] of Object.entries(seoPages)) {
  const html = template.replace("</head>", `    ${headFor(page)}\n  </head>`);
  const dir = join(dist, route);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, "index.html"), html);
  console.log(`prerender: ${route}`);
}
