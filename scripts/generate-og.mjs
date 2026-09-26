import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

// Genera imágenes Open Graph (1200×630) por página en /public/og.
// Uso (sharp no está en package.json):
//   npm i --no-save sharp && node scripts/generate-og.mjs

const pages = [
  {
    slug: "about",
    title: "Sobre Mí",
    subtitle: "CV, experiencia y formación",
    tags: ["React", "Python", "Java", "Ruby on Rails", "SQL"],
  },
  {
    slug: "projects",
    title: "Proyectos",
    subtitle: "Portfolio de desarrollo web",
    tags: ["Flask", "Ruby on Rails", "JavaScript", "React"],
  },
  {
    slug: "arbocensus",
    title: "Arbocensus",
    subtitle: "Rutas óptimas para censo de árboles urbanos",
    tags: ["Django", "PostGIS", "OR-Tools", "OSRM", "React"],
  },
  {
    slug: "scheduler",
    title: "Scheduler App",
    subtitle: "Disponibilidad horaria en grupos",
    tags: ["Flask", "PostgreSQL", "Google OAuth", "Docker"],
  },
  {
    slug: "healthy",
    title: "Healthy",
    subtitle: "Planes de comida saludable con compras",
    tags: ["Ruby on Rails", "Hotwire", "Devise", "PostgreSQL"],
  },
  {
    slug: "calculator",
    title: "Calculadora",
    subtitle: "Operaciones básicas con soporte de teclado",
    tags: ["React", "JavaScript", "Proyecto interactivo"],
  },
  {
    slug: "clock",
    title: "Reloj Digital",
    subtitle: "Tiempo real, formato 12/24 h",
    tags: ["React", "JavaScript", "Proyecto interactivo"],
  },
  {
    slug: "tic-tac-toe",
    title: "Tres en Línea",
    subtitle: "Juego clásico con puntuación",
    tags: ["React", "JavaScript", "Proyecto interactivo"],
  },
  {
    slug: "camera",
    title: "Cámara Web",
    subtitle: "Fotos y video con MediaDevices API",
    tags: ["React", "getUserMedia", "MediaRecorder"],
  },
];

const W = 1200;
const H = 630;
const FONT = "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif";

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function chips(tags) {
  const fontSize = 22;
  const padX = 22;
  const gap = 14;
  const h = 46;
  const widths = tags.map(
    (t) => Math.round(t.length * fontSize * 0.58) + padX * 2
  );
  const total = widths.reduce((a, b) => a + b, 0) + gap * (tags.length - 1);
  let x = (W - total) / 2;
  const y = 430;
  return tags
    .map((t, i) => {
      const w = widths[i];
      const svg = `
        <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12"
          fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
        <text x="${x + w / 2}" y="${y + h / 2 + fontSize * 0.36}" text-anchor="middle"
          font-family="${FONT}" font-size="${fontSize}" font-weight="600" fill="#f8fafc">${escape(t)}</text>`;
      x += w + gap;
      return svg;
    })
    .join("");
}

function svgFor({ title, subtitle, tags }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="bg" cx="50%" cy="40%" r="75%">
      <stop offset="0%" stop-color="#1e2a45"/>
      <stop offset="100%" stop-color="#0b1220"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- Logo (favicon.svg) -->
  <g transform="translate(550 60) scale(1)">
    <rect width="100" height="100" rx="18" fill="#0f172a"/>
    <path d="M24 76 L50 24 L76 76 L64 76 L50 48 L36 76 Z" fill="#ffffff"/>
    <rect x="44" y="56" width="24" height="8" transform="skewX(-15)" fill="#0f172a"/>
  </g>

  <text x="600" y="255" text-anchor="middle" font-family="${FONT}" font-size="84" font-weight="800" fill="#ffffff">${escape(title)}</text>
  <text x="600" y="320" text-anchor="middle" font-family="${FONT}" font-size="32" font-weight="500" fill="#cbd5e1">${escape(subtitle)}</text>

  ${chips(tags)}

  <line x1="410" y1="530" x2="790" y2="530" stroke="#334155" stroke-width="2"/>
  <text x="600" y="585" text-anchor="middle" font-family="${FONT}" font-size="30" font-weight="700" fill="#7dd3fc">Alberto Zúñiga · albertozuiga.github.io</text>
</svg>`;
}

async function main() {
  const outDir = new URL("../public/og/", import.meta.url);
  await mkdir(outDir, { recursive: true });
  await Promise.all(
    pages.map((page) =>
      sharp(Buffer.from(svgFor(page)), { density: 144 })
        .resize(W, H)
        .png({ compressionLevel: 9, palette: true })
        .toFile(fileURLToPath(new URL(`${page.slug}.png`, outDir)))
    )
  );
  console.log(`OG images generated in /public/og (${pages.length})`);
}

main().catch((err) => {
  console.error("Error generating OG images:", err);
  process.exit(1);
});
