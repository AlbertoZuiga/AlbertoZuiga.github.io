// Tarjetas de la Home (con ícono)
export const homeSkillGroups = [
  {
    title: "Lenguajes de Programación",
    grid: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
    skills: [
      { icon: "🐍", name: "Python", level: "Intermedio - Avanzado" },
      { icon: "🟨", name: "JavaScript", level: "Intermedio - Avanzado" },
      { icon: "💎", name: "Ruby", level: "Intermedio" },
      { icon: "⚙️", name: "C++", level: "Intermedio" },
      { icon: "🗄️", name: "SQL", level: "Intermedio" },
    ],
  },
  {
    title: "Frameworks y Librerías",
    grid: "grid-cols-2 md:grid-cols-4",
    skills: [
      { icon: "⚛️", name: "React", level: "Intermedio" },
      { icon: "🧪", name: "Flask", level: "Intermedio" },
      { icon: "🎯", name: "Django", level: "Básico - Intermedio" },
      { icon: "⚡", name: "FastAPI", level: "Básico" },
    ],
  },
  {
    title: "Herramientas",
    grid: "grid-cols-2 md:grid-cols-3",
    skills: [
      { icon: "🧰", name: "Git / GitHub", level: "Intermedio - Avanzado" },
      { icon: "🐳", name: "Docker", level: "Intermedio" },
      { icon: "📊", name: "Excel", level: "Avanzado" },
    ],
  },
];

// Filas del CV (About)
export const cvSkillGroups = [
  {
    title: "Lenguajes de Programación",
    skills: [
      { name: "Python", level: "Intermedio-Avanzado" },
      { name: "JavaScript", level: "Intermedio-Avanzado" },
      { name: "C++", level: "Intermedio" },
      { name: "SQL", level: "Intermedio" },
      { name: "Ruby", level: "Intermedio" },
      { name: "HTML/CSS", level: "Intermedio" },
      { name: "C", level: "Básico" },
      { name: "VBA (Excel)", level: "Básico" },
      { name: "Apps Script", level: "Básico" },
    ],
  },
  {
    title: "Frameworks y Librerías",
    skills: [
      { name: "React", level: "Intermedio" },
      { name: "React Native", level: "Intermedio" },
      { name: "Flask", level: "Intermedio" },
      { name: "Django", level: "Básico-Intermedio" },
      { name: "FastAPI", level: "Básico" },
    ],
  },
  {
    title: "Herramientas de Software",
    skills: [
      { name: "Git/GitHub", level: "Intermedio-Avanzado" },
      { name: "Excel", level: "Avanzado" },
      { name: "Docker", level: "Intermedio" },
      { name: "PostgreSQL/PostGIS", level: "Intermedio" },
      { name: "OR-Tools", level: "Básico-Intermedio" },
      { name: "Celery", level: "Básico-Intermedio" },
      { name: "LaTeX", level: "Intermedio" },
    ],
  },
  {
    title: "Idiomas",
    skills: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Intermedio" },
    ],
  },
];
