import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { seoPages } from "../data/seo";
import PageTransition from "../components/PageTransition";
import BackToProjects from "../components/BackToProjects";
import { fadeIn, slideUp } from "../utils/animations";
import { projects } from "../data/projects";

const DEMO_TIMEOUT_MS = 5000;

const demoStatus = {
  checking: { label: "Verificando demo…", dot: "bg-gray-400 animate-pulse" },
  online: { label: "En línea", dot: "bg-green-400" },
  offline: { label: "Caída", dot: "bg-red-400" },
};

// Fase 1: mode "no-cors" solo distingue host inalcanzable de host que responde
// (la respuesta es opaca). De paso despierta la instancia dormida en Render.
const useDemoStatus = (demoUrl) => {
  const [status, setStatus] = useState(demoUrl ? "checking" : null);

  useEffect(() => {
    if (!demoUrl) return;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), DEMO_TIMEOUT_MS);
    setStatus("checking");
    fetch(demoUrl, { mode: "no-cors", signal: controller.signal })
      .then(() => setStatus("online"))
      .catch(() => setStatus("offline"))
      .finally(() => clearTimeout(timer));
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [demoUrl]);

  return status;
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const status = useDemoStatus(project?.demoUrl);

  if (!project) return <Navigate to="/projects" replace />;

  const demoDisabled = status === "offline";

  return (
    <PageTransition>
      <div
        className={`min-h-screen bg-linear-to-br ${project.color} py-8 text-white`}
      >
        <SEO {...seoPages[`/projects/${project.slug}`]} />
        <div className="max-w-4xl mx-auto px-4">
          <BackToProjects variant="dark" />

          <motion.header
            className="mb-10"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <div className="text-7xl mb-4">{project.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              {project.title}
            </h1>
            <p className="text-gray-200">
              {project.context} · {project.period}
            </p>
          </motion.header>

          <motion.section
            className="mb-10"
            variants={slideUp}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-semibold mb-3">Sobre el proyecto</h2>
            <p className="text-lg text-gray-100 leading-relaxed">
              {project.longDescription}
            </p>
          </motion.section>

          <motion.section
            className="mb-12"
            variants={slideUp}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-semibold mb-3">Stack</h2>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            variants={slideUp}
            initial="hidden"
            animate="visible"
          >
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Ver código ↗
            </a>
            {project.demoUrl && (
              <>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={demoDisabled}
                  onClick={(e) => demoDisabled && e.preventDefault()}
                  className={`inline-flex items-center gap-2 border-2 border-white font-semibold px-6 py-3 rounded-lg transition-colors ${
                    demoDisabled
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-white/10"
                  }`}
                >
                  Ver demo ↗
                </a>
                <span
                  className="inline-flex items-center gap-2 text-sm text-gray-200"
                  role="status"
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${demoStatus[status].dot}`}
                    aria-hidden="true"
                  />
                  {demoStatus[status].label}
                </span>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;
