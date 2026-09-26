import { site } from "./site";

export const personal = [
  { label: "Nombre", value: site.fullName },
  { label: "Título", value: site.degree },
  { label: "Teléfono", links: [{ href: site.phoneHref, text: site.phone }] },
  {
    label: "Correo electrónico",
    links: [
      { href: `mailto:${site.universityEmail}`, text: site.universityEmail },
      { href: `mailto:${site.email}`, text: site.email },
    ],
  },
  {
    label: "GitHub",
    links: [{ href: site.github, text: site.githubUser, external: true }],
  },
];

export const work = [
  {
    period: "Mar 2026 - Presente",
    org: "Buk",
    lines: ["Software Engineer Level 1"],
  },
  {
    period: "Ene 2026 - Feb 2026",
    org: "Buk",
    lines: ["Práctica profesional como Software Engineer"],
  },
  {
    period: "2022 - 2024",
    org: "Fundación Nueva Mente",
    lines: [
      "Colaboración pro bono a tiempo parcial",
      "Manejo de la página web utilizando Wix",
      "Registro y seguimiento de gastos",
    ],
  },
  { period: "2019", org: "Cornershop", lines: ["Repartidor"] },
];

// `degree` se muestra tal cual; `courses` se renderiza como "Ayudante de <em>curso</em>"
export const academic = [
  {
    period: "2020 - 2026",
    org: site.university,
    degree: site.degree,
    thesis: {
      text: "Proyecto de título: Arbocensus, optimización de rutas para censo de árboles urbanos",
      href: "https://github.com/AlbertoZuiga/arbocensus-routing",
    },
  },
  {
    period: "Mar 2026 - Jun 2026",
    org: site.university,
    courses: ["Paradigmas de Programación"],
  },
  {
    period: "Ago 2025 - Nov 2025",
    org: site.university,
    courses: [
      "Sistemas Electrónicos",
      "Bases de Datos",
      "Paradigmas de Programación",
      "Taller de Computación",
    ],
  },
  {
    period: "Mar 2025 - Jun 2025",
    org: site.university,
    courses: ["Web Technologies", "Taller de Proyectos de Ingeniería"],
  },
  {
    period: "Ago 2024 - Nov 2024",
    org: site.university,
    courses: ["Web Technologies", "Aplicaciones Móviles"],
  },
  {
    period: "Mar 2024 - Jun 2024",
    org: site.university,
    courses: ["Web Technologies", "Programación"],
  },
  {
    period: "Mar 2023 - Jun 2023",
    org: site.university,
    courses: ["Paradigmas de Programación", "Programación"],
  },
  {
    period: "Ago 2022 - Nov 2022",
    org: site.university,
    courses: ["Paradigmas de Programación"],
  },
];

export const extracurricular = [
  { period: "2023", text: "Consejero político de Ingeniería Civil" },
];

// Se renderiza como "{text} <em>{em}</em>"
export const additional = {
  heading: `${site.university}:`,
  items: [
    { text: "Concentración tecnológica en", em: "Ingeniería Civil Eléctrica" },
    { text: "Minor en", em: "Psicología" },
    { text: "Seminario", em: "ChatGPT" },
  ],
};
