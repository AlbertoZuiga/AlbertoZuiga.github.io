// `id` indexa skills.groups.* y `level` skills.levels.* en src/i18n/*.json.
// Tarjetas de la Home (con ícono)
export const homeSkillGroups = [
  {
    id: "languages",
    grid: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
    skills: [
      { icon: "🐍", name: "Python", level: "intermediate-advanced" },
      { icon: "🟨", name: "JavaScript", level: "intermediate-advanced" },
      { icon: "💎", name: "Ruby", level: "intermediate" },
      { icon: "⚙️", name: "C++", level: "intermediate" },
      { icon: "🗄️", name: "SQL", level: "intermediate" },
    ],
  },
  {
    id: "frameworks",
    grid: "grid-cols-2 md:grid-cols-4",
    skills: [
      { icon: "⚛️", name: "React", level: "intermediate" },
      { icon: "🧪", name: "Flask", level: "intermediate" },
      { icon: "🎯", name: "Django", level: "basic-intermediate" },
      { icon: "⚡", name: "FastAPI", level: "basic" },
    ],
  },
  {
    id: "tools",
    grid: "grid-cols-2 md:grid-cols-3",
    skills: [
      { icon: "🧰", name: "Git / GitHub", level: "intermediate-advanced" },
      { icon: "🐳", name: "Docker", level: "intermediate" },
      { icon: "📊", name: "Excel", level: "advanced" },
    ],
  },
];

// Filas del CV (About)
export const cvSkillGroups = [
  {
    id: "languages",
    skills: [
      { name: "Python", level: "intermediate-advanced" },
      { name: "JavaScript", level: "intermediate-advanced" },
      { name: "C++", level: "intermediate" },
      { name: "SQL", level: "intermediate" },
      { name: "Ruby", level: "intermediate" },
      { name: "HTML/CSS", level: "intermediate" },
      { name: "C", level: "basic" },
      { name: "VBA (Excel)", level: "basic" },
      { name: "Apps Script", level: "basic" },
    ],
  },
  {
    id: "frameworks",
    skills: [
      { name: "React", level: "intermediate" },
      { name: "React Native", level: "intermediate" },
      { name: "Flask", level: "intermediate" },
      { name: "Django", level: "basic-intermediate" },
      { name: "FastAPI", level: "basic" },
    ],
  },
  {
    id: "software",
    skills: [
      { name: "Git/GitHub", level: "intermediate-advanced" },
      { name: "Excel", level: "advanced" },
      { name: "Docker", level: "intermediate" },
      { name: "PostgreSQL/PostGIS", level: "intermediate" },
      { name: "OR-Tools", level: "basic-intermediate" },
      { name: "Celery", level: "basic-intermediate" },
      { name: "LaTeX", level: "intermediate" },
    ],
  },
  {
    id: "spoken",
    skills: [
      { name: "Español", level: "native" },
      { name: "Inglés", level: "intermediate" },
    ],
  },
];
