import { Link } from "react-router-dom";
import BrandMark from "../components/BrandMark";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Alberto Zúñiga - Desarrollador Full Stack | Portfolio"
        description="Portafolio de Alberto Zúñiga: Desarrollador Full Stack y estudiante de Ingeniería en Ciencias de la Computación. Construyo aplicaciones web con Python, JavaScript y React."
        url="https://albertozuiga.github.io"
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
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BrandMark size="lg" className="mx-auto mb-3 sm:mb-4" />
            {/* Título con glow sutil */}
            <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in px-2">
              <span className="relative inline-block">
                <span className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-r from-primary-300 to-blue-300"></span>
                <span className="relative text-gray-100">Alberto Zúñiga</span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-gray-200 px-4">
              Estudiante de Ingeniería Civil en Ciencias de la Computación
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300 px-4">
              Universidad de los Andes
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 px-4">
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
