import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Alberto Zúñiga - Desarrollador Full Stack | Portfolio"
        description="Portafolio de Alberto Zúñiga. Estudiante de Ingeniería en Ciencias de la Computación, Universidad de los Andes. Desarrollo web con Python, JavaScript, Ruby on Rails, Flask y más."
        url="https://albertozuiga.github.io"
        keywords="Alberto Zúñiga, desarrollador full stack, ingeniería computación, Python, JavaScript, Ruby on Rails, Flask, portfolio, Universidad de los Andes"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in px-2">
              Alberto Zúñiga 
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-primary-100 px-4">
              Estudiante de Ingeniería Civil en Ciencias de la Computación
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-primary-200 px-4">
              Universidad de los Andes
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 px-4">
              <Link
                to="/projects"
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3"
              >
                Ver Proyectos
              </Link>
              <Link
                to="/contact"
                className="btn-secondary border-white text-white bg-transparent hover:bg-white hover:text-primary-600 text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 sm:py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl dark:text-white">Sobre Mí</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="card p-6 sm:p-8 dark:bg-gray-700 transition-colors duration-300">
              <h3 className="section-subtitle mb-3 sm:mb-4 text-lg sm:text-xl dark:text-white">Formación Académica</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                Estudiante de Ingeniería Civil en Ciencias de la Computación en
                la Universidad de los Andes, con concentración tecnológica en
                Ingeniería Civil Eléctrica y Minor en Psicología.
              </p>
            </div>
            <div className="card p-6 sm:p-8 dark:bg-gray-700 transition-colors duration-300">
              <h3 className="section-subtitle mb-3 sm:mb-4 text-lg sm:text-xl dark:text-white">Experiencia</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                Ayudante universitario en diversos cursos (Web Technologies, Programación, Paradigmas de Programación, Sistemas Electrónicos, Bases de Datos, Taller de Computación). Colaborador pro bono en Fundación Nueva Mente, gestionando su presencia web y registros administrativos.
              </p>
            </div>
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Link to="/about" className="btn-primary text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3">
              Conocer más
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-12 sm:py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl dark:text-white">
            Competencias Técnicas
          </h2>

          {/* Lenguajes de Programación */}
          <div className="mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center mb-4 sm:mb-6">
              Lenguajes de Programación
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
              <div className="card p-4 sm:p-6 text-center transform hover:scale-105 transition-transform dark:bg-gray-800">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🐍</div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">Python</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Intermedio - Avanzado</p>
              </div>
              <div className="card p-4 sm:p-6 text-center transform hover:scale-105 transition-transform dark:bg-gray-800">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🟨</div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">JavaScript</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Intermedio - Avanzado</p>
              </div>
              <div className="card p-4 sm:p-6 text-center transform hover:scale-105 transition-transform dark:bg-gray-800">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">💎</div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">Ruby</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Intermedio</p>
              </div>
              <div className="card p-4 sm:p-6 text-center transform hover:scale-105 transition-transform dark:bg-gray-800">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">⚙️</div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">C++</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Intermedio</p>
              </div>
              <div className="card p-4 sm:p-6 text-center transform hover:scale-105 transition-transform dark:bg-gray-800">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🗄️</div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">SQL</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Intermedio</p>
              </div>
            </div>
          </div>

          {/* Frameworks y Librerías */}
          <div className="mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center mb-4 sm:mb-6">
              Frameworks y Librerías
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              <div className="card p-4 sm:p-6 text-center transform hover:scale-105 transition-transform dark:bg-gray-800">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">⚛️</div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">React</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Intermedio</p>
              </div>
              <div className="card p-4 sm:p-6 text-center transform hover:scale-105 transition-transform dark:bg-gray-800">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🧪</div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">Flask</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Intermedio</p>
              </div>
              <div className="card p-4 sm:p-6 text-center transform hover:scale-105 transition-transform dark:bg-gray-800">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🎯</div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">Django</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Básico - Intermedio</p>
              </div>
              <div className="card p-4 sm:p-6 text-center transform hover:scale-105 transition-transform dark:bg-gray-800">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">⚡</div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">FastAPI</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Básico</p>
              </div>
            </div>
          </div>

          {/* Herramientas */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center mb-4 sm:mb-6">
              Herramientas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              <div className="card p-4 sm:p-6 text-center transform hover:scale-105 transition-transform dark:bg-gray-800">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🧰</div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">Git / GitHub</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Intermedio - Avanzado</p>
              </div>
              <div className="card p-4 sm:p-6 text-center transform hover:scale-105 transition-transform dark:bg-gray-800">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🐳</div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">Docker</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Intermedio</p>
              </div>
              <div className="card p-4 sm:p-6 text-center transform hover:scale-105 transition-transform dark:bg-gray-800">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">📊</div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">Excel</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Avanzado</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
