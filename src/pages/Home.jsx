import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BrandMark from "../components/BrandMark";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import SkillCard from "../components/SkillCard";
import {
  slideDown,
  slideUp,
  staggerContainer,
  staggerItem,
  fadeIn,
  scaleIn,
  viewportConfig,
} from "../utils/animations";
import { site } from "../data/site";
import { homeSkillGroups } from "../data/skills";

const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <SEO
          title="Alberto Zúñiga - Desarrollador Full Stack | Portfolio"
          description="Portafolio de Alberto Zúñiga: Desarrollador Full Stack e Ingeniero Civil en Ciencias de la Computación. Construyo aplicaciones web con Python, JavaScript y React."
          url={site.baseUrl}
          keywords="Alberto Zúñiga, desarrollador full stack, ingeniería computación, Python, JavaScript, Ruby on Rails, Flask, portfolio, Universidad de los Andes"
        />
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-primary-900 to-gray-800 text-white py-12 sm:py-16 md:py-20 transition-colors duration-500">
          {/* Glow visual sutil - Igual en ambos modos */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-primary-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl"></div>
          </div>

          {/* Patrón de fondo sutil */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div variants={scaleIn} initial="hidden" animate="visible">
                <BrandMark size="lg" className="mx-auto mb-3 sm:mb-4" />
              </motion.div>
              {/* Título con glow sutil */}
              <motion.h1
                className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2"
                variants={slideDown}
                initial="hidden"
                animate="visible"
              >
                <span className="relative inline-block">
                  <span className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-r from-primary-300 to-blue-300"></span>
                  <span className="relative text-gray-100">Alberto Zúñiga</span>
                </span>
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-gray-200 px-4"
                variants={slideUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
              >
                Ingeniero Civil en Ciencias de la Computación
              </motion.p>
              <motion.p
                className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300 px-4"
                variants={slideUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                Universidad de los Andes
              </motion.p>
              <motion.div
                className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 px-4"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/projects"
                  className="group relative inline-flex items-center gap-2 bg-gray-100 text-primary-700 hover:bg-white text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-400/20"
                >
                  <span>Ver Proyectos</span>
                  <span className="group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="relative inline-flex items-center border-2 border-gray-300/60 text-gray-100 bg-transparent hover:bg-white/5 hover:border-gray-200 text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  Contactar
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-12 sm:py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="section-title text-center mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl dark:text-white"
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              Sobre Mí
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.div
                className="card p-6 sm:p-8 dark:bg-gray-700 transition-colors duration-300"
                variants={staggerItem}
              >
                <h3 className="section-subtitle mb-3 sm:mb-4 text-lg sm:text-xl dark:text-white">
                  Formación Académica
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  Ingeniero Civil en Ciencias de la Computación de la
                  Universidad de los Andes (2026), con concentración tecnológica
                  en Ingeniería Civil Eléctrica y Minor en Psicología.
                </p>
              </motion.div>
              <motion.div
                className="card p-6 sm:p-8 dark:bg-gray-700 transition-colors duration-300"
                variants={staggerItem}
              >
                <h3 className="section-subtitle mb-3 sm:mb-4 text-lg sm:text-xl dark:text-white">
                  Experiencia
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  Ayudante universitario en diversos cursos (Web Technologies,
                  Programación, Paradigmas de Programación, Sistemas
                  Electrónicos, Bases de Datos, Taller de Computación).
                  Colaborador pro bono en Fundación Nueva Mente, gestionando su
                  presencia web y registros administrativos.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="text-center mt-6 sm:mt-8"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <Link
                to="/about"
                className="btn-primary text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3"
              >
                Conocer más
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Skills Preview */}
        <section className="py-12 sm:py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="section-title text-center mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl dark:text-white"
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              Competencias Técnicas
            </motion.h2>

            <div className="space-y-8 sm:space-y-10">
              {homeSkillGroups.map((group) => (
                <div key={group.title}>
                  <motion.h3
                    className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center mb-4 sm:mb-6"
                    variants={slideUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                  >
                    {group.title}
                  </motion.h3>
                  <motion.div
                    className={`grid ${group.grid} gap-3 sm:gap-4 md:gap-6`}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                  >
                    {group.skills.map((skill) => (
                      <SkillCard key={skill.name} {...skill} />
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
