import { Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { seoPages } from "../data/seo";
import PageTransition from "../components/PageTransition";
import BackToProjects from "../components/BackToProjects";
import { fadeIn, slideUp } from "../utils/animations";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <SEO {...seoPages[`/projects/${project.slug}`]} />

        <div className={`bg-linear-to-br ${project.color} text-white py-10`}>
          <div className="max-w-5xl mx-auto px-4">
            <BackToProjects variant="dark" />
            <motion.div
              className="flex items-center gap-5"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <div className="text-6xl" aria-hidden="true">
                {project.icon}
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {project.title}
                </h1>
                <p className="text-gray-200">
                  {project.context} · {project.period}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-[2fr_1fr] gap-8 items-start"
          variants={slideUp}
          initial="hidden"
          animate="visible"
        >
          <section className="card dark:bg-gray-800 p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Sobre el proyecto
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.longDescription}
            </p>
          </section>

          <aside className="card dark:bg-gray-800 p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Stack
            </h2>
            <ul className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 text-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <hr className="border-gray-200 dark:border-gray-700 mb-6" />
            <div className="flex flex-col gap-3">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Ver código ↗
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center border-2 border-primary-500 text-primary-500 dark:text-primary-400 font-semibold py-2 px-6 rounded-lg hover:bg-primary-500/10 transition-colors"
                >
                  Ver demo ↗
                </a>
              )}
            </div>
          </aside>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;
