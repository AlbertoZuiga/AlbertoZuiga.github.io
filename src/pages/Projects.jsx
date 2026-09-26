import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { seoPages } from "../data/seo";
import PageTransition from "../components/PageTransition";
import {
  slideUp,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "../utils/animations";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <PageTransition>
      <div className="min-h-screen py-12 dark:bg-gray-900 transition-colors duration-300">
        <SEO {...seoPages["/projects"]} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={slideUp}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Mis Proyectos
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Una colección de proyectos personales y aplicaciones web
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {projects.map((project) => {
              const ProjectCard = (
                <motion.div
                  variants={staggerItem}
                  className={`card group relative overflow-hidden transform hover:scale-105 transition-[color,background-color,border-color,box-shadow] duration-300 bg-linear-to-br ${project.color} h-full flex flex-col`}
                >
                  <div className="p-8 text-white flex flex-col h-full">
                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-200 mb-4 grow">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap mt-auto">
                      {project.isReact && (
                        <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full text-sm">
                          ⚛️ React
                        </span>
                      )}
                      {project.framework && (
                        <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full text-sm">
                          {project.framework === "Flask" && "🐍"}
                          {project.framework === "Ruby on Rails" && "💎"}
                          {project.framework !== "Flask" &&
                            project.framework !== "Ruby on Rails" &&
                            "🔧"}{" "}
                          {project.framework}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 text-sm opacity-80">
                        → {project.isReact ? "SPA" : "Web App"}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </motion.div>
              );

              return (
                <Link
                  key={project.title}
                  to={project.link ?? `/projects/${project.slug}`}
                  className="h-full block"
                >
                  {ProjectCard}
                </Link>
              );
            })}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
