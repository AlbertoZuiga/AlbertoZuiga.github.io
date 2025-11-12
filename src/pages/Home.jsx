import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Alberto Zúñiga 
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-primary-100">
              Estudiante de Ingeniería Civil en Ciencias de la Computación
            </p>
            <p className="text-lg md:text-xl mb-8 text-primary-200">
              Universidad de los Andes
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                to="/projects"
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
              >
                Ver Proyectos
              </Link>
              <Link
                to="/contact"
                className="btn-secondary border-white text-white bg-transparent hover:bg-white hover:text-primary-600"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Sobre Mí</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8">
              <h3 className="section-subtitle mb-4">Formación Académica</h3>
              <p className="text-gray-600 leading-relaxed">
                Estudiante de Ingeniería Civil en Ciencias de la Computación en
                la Universidad de los Andes, con concentración tecnológica en
                Ingeniería Civil Eléctrica y Minor en Psicología.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="section-subtitle mb-4">Experiencia</h3>
              <p className="text-gray-600 leading-relaxed">
                Ayudante universitario en diversos cursos (Web Technologies, Programación, Paradigmas de Programación, Sistemas Electrónicos, Bases de Datos, Taller de Computación). Colaborador pro bono en Fundación Nueva Mente, gestionando su presencia web y registros administrativos.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/about" className="btn-primary">
              Conocer más
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">
            Competencias Técnicas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">🐍</div>
              <h3 className="font-semibold text-gray-800">Python</h3>
              <p className="text-sm text-gray-600">Intermedio - Avanzado</p>
            </div>
            <div className="card p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">🟨</div>
              <h3 className="font-semibold text-gray-800">JavaScript</h3>
              <p className="text-sm text-gray-600">Intermedio - Avanzado</p>
            </div>
            <div className="card p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="font-semibold text-gray-800">React</h3>
              <p className="text-sm text-gray-600">Intermedio</p>
            </div>
            <div className="card p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">🧰</div>
              <h3 className="font-semibold text-gray-800">Git / GitHub</h3>
              <p className="text-sm text-gray-600">Intermedio - Avanzado</p>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <h4 className="font-semibold text-gray-800 mb-2">SQL</h4>
              <p className="text-sm text-gray-600">Intermedio</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="font-semibold text-gray-800 mb-2">Docker</h4>
              <p className="text-sm text-gray-600">Intermedio</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="font-semibold text-gray-800 mb-2">Excel</h4>
              <p className="text-sm text-gray-600">Avanzado</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
