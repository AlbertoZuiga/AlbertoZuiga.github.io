import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const Projects = () => {
  const projects = [
    {
      title: "Scheduler App",
      link: "http://scheduler-app-iu34.onrender.com/",
      description: "Gestión de horarios y división automática de grupos con Flask",
      color: "from-emerald-900 to-teal-900",
      icon: "📅",
      isReact: false,
      external: true,
      framework: "Flask",
    },
    {
      title: "Healthy",
      link: "https://healthy-k6hn.onrender.com",
      description: "Sistema de recomendación de planes saludables de comida integrado con compras",
      color: "from-green-900 to-lime-900",
      icon: "🥗",
      isReact: false,
      external: true,
      framework: "Ruby on Rails",
    },
    {
      title: "Calculadora",
      link: "/projects/calculator",
      description: "Calculadora funcional con interfaz moderna",
      color: "from-gray-900 to-gray-700",
      icon: "🔢",
      isReact: true,
    },
    {
      title: "Reloj",
      link: "/projects/clock",
      description: "Reloj digital y analógico en tiempo real",
      color: "from-indigo-900 to-purple-900",
      icon: "⏰",
      isReact: true,
    },
    {
      title: "Tres en Línea",
      link: "/projects/tic-tac-toe",
      description: "Juego clásico para dos jugadores",
      color: "from-blue-900 to-purple-900",
      icon: "❌⭕",
      isReact: true,
    },
    {
      title: "Cámara",
      link: "/projects/camera",
      description: "Captura fotos y graba videos desde tu navegador",
      color: "from-purple-900 to-pink-900",
      icon: "📸",
      isReact: true,
    },
  ];

  return (
    <div className="min-h-screen py-12 dark:bg-gray-900 transition-colors duration-300">
      <SEO 
        title="Proyectos - Alberto Zúñiga | Portfolio de Desarrollo Web"
        description="Explora mis proyectos de desarrollo web: Scheduler App (Flask), Healthy (Ruby on Rails), Calculadora, Reloj, Tic-Tac-Toe y Cámara Web con React. Aplicaciones interactivas y funcionales."
        url="https://albertozuiga.github.io/projects"
        keywords="proyectos web, React, Flask, Ruby on Rails, desarrollo frontend, aplicaciones interactivas, portfolio proyectos"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Mis Proyectos
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Una colección de proyectos personales y aplicaciones web
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const ProjectCard = (
              <div
                className={`card group relative overflow-hidden transform hover:scale-105 transition-all duration-300 bg-gradient-to-br ${project.color} h-full flex flex-col`}
              >
                <div className="p-8 text-white flex flex-col h-full">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-200 mb-4 flex-grow">{project.description}</p>
                  <div className="flex items-center gap-2 flex-wrap mt-auto">
                    {project.isReact && (
                      <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        ⚛️ React
                      </span>
                    )}
                    {project.framework && (
                      <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        {project.framework === "Flask" && "🐍"}
                        {project.framework === "Ruby on Rails" && "💎"}
                        {project.framework !== "Flask" && project.framework !== "Ruby on Rails" && "🔧"} {project.framework}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-sm opacity-80">
                      {project.external ? "↗" : "→"}{" "}
                      {project.external ? "Web App" : "SPA"}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
            );

            return project.isReact ? (
              <Link key={project.title} to={project.link} className="h-full block">
                {ProjectCard}
              </Link>
            ) : (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full block"
              >
                {ProjectCard}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
