import { Link } from "react-router-dom";

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
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Mis Proyectos
          </h1>
          <p className="text-lg text-gray-600">
            Una colección de proyectos personales y aplicaciones web
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const ProjectCard = (
              <div
                className={`card group relative overflow-hidden transform hover:scale-105 transition-all duration-300 bg-gradient-to-br ${project.color}`}
              >
                <div className="p-8 text-white">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.isReact && (
                      <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        ⚛️ React
                      </span>
                    )}
                    {project.framework && (
                      <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        🐍 {project.framework}
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
              <Link key={project.title} to={project.link}>
                {ProjectCard}
              </Link>
            ) : (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
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
