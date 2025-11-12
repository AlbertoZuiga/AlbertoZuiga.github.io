import { useState, useEffect } from "react";

const About = () => {
  const [expandedSections, setExpandedSections] = useState({
    personal: true,
    academic: true,
    work: true,
    additional: true,
    extracurricular: true,
    skills: true,
  });

  useEffect(() => {
    document.title = "Sobre Mí - Alberto Zúñiga";
  }, []);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleKeyDown = (e, section) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleSection(section);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Currículum Vitae
          </h1>
          <p className="text-lg text-gray-600">Alberto Zúñiga</p>
        </div>

        {/* Antecedentes Personales */}
        <section className="card mb-6">
          <div
            className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => toggleSection("personal")}
            onKeyDown={(e) => handleKeyDown(e, "personal")}
            role="button"
            tabIndex={0}
            aria-expanded={expandedSections.personal}
            aria-label="Expandir o contraer Antecedentes Personales"
          >
            <h2 className="text-2xl font-bold text-gray-800">
              Antecedentes Personales
            </h2>
            <svg
              className={`w-6 h-6 transform transition-transform ${
                expandedSections.personal ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {expandedSections.personal && (
            <div className="px-6 pb-6">
              <hr className="mb-6" />
              <table className="w-full">
                <thead className="sr-only">
                  <tr>
                    <th>Campo</th>
                    <th>Información</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 font-semibold text-gray-700 w-1/3">
                      Nombre
                    </td>
                    <td className="py-3 text-gray-600">
                      Alberto Zúñiga Marinovic
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-gray-700">
                      Teléfono
                    </td>
                    <td className="py-3 text-gray-600">+56 9 6496 2736</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-gray-700">
                      Correo electrónico
                    </td>
                    <td className="py-3 text-gray-600">
                      <a
                        href="mailto:azuiga@miuandes.cl"
                        className="text-primary-500 hover:text-primary-600 mr-2"
                      >
                        azuiga@miuandes.cl
                      </a>
                      <a
                        href="mailto:a.zuniga.marinovic@gmail.com"
                        className="text-primary-500 hover:text-primary-600"
                      >
                        a.zuniga.marinovic@gmail.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-gray-700">GitHub</td>
                    <td className="py-3 text-gray-600">
                      <a
                        href="https://github.com/AlbertoZuiga"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-600"
                      >
                        AlbertoZuiga
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Antecedentes Académicos */}
        <section className="card mb-6">
          <div
            className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => toggleSection("academic")}
            onKeyDown={(e) => handleKeyDown(e, "academic")}
            role="button"
            tabIndex={0}
            aria-expanded={expandedSections.academic}
            aria-label="Expandir o contraer Antecedentes Académicos"
          >
            <h2 className="text-2xl font-bold text-gray-800">
              Antecedentes Académicos
            </h2>
            <svg
              className={`w-6 h-6 transform transition-transform ${
                expandedSections.academic ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {expandedSections.academic && (
            <div className="px-6 pb-6">
              <hr className="mb-6" />
              <table className="w-full">
                <thead className="sr-only">
                  <tr>
                    <th>Período</th>
                    <th>Descripción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 font-semibold text-gray-700 w-1/4 align-top">
                      2020 - Presente
                    </td>
                    <td className="py-3 text-gray-600">
                      <strong>Universidad de los Andes</strong>
                      <br />
                      Estudiante de Ingeniería Civil en Ciencias de la
                      Computación
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-gray-700 align-top">
                      Ago 2025 - Presente
                    </td>
                    <td className="py-3 text-gray-600">
                      <strong>Universidad de los Andes</strong>
                      <br />
                      Ayudante de <em>Sistemas Electrónicos</em>
                      <br />
                      Ayudante de <em>Bases de Datos</em>
                      <br />
                      Ayudante de <em>Paradigmas de Programación</em>
                      <br />
                      Ayudante de <em>Taller de Computación</em>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-gray-700 align-top">
                      Mar 2025 - Jun 2025
                    </td>
                    <td className="py-3 text-gray-600">
                      <strong>Universidad de los Andes</strong>
                      <br />
                      Ayudante de <em>Web Technologies</em>
                      <br />
                      Ayudante de <em>Taller de Proyectos de Ingeniería</em>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-gray-700 align-top">
                      Ago 2024 - Nov 2024
                    </td>
                    <td className="py-3 text-gray-600">
                      <strong>Universidad de los Andes</strong>
                      <br />
                      Ayudante de <em>Web Technologies</em>
                      <br />
                      Ayudante de <em>Aplicaciones Móviles</em>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-gray-700 align-top">
                      Mar 2024 - Jun 2024
                    </td>
                    <td className="py-3 text-gray-600">
                      <strong>Universidad de los Andes</strong>
                      <br />
                      Ayudante de <em>Web Technologies</em>
                      <br />
                      Ayudante de <em>Programación</em>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-gray-700 align-top">
                      Mar 2023 - Jun 2023
                    </td>
                    <td className="py-3 text-gray-600">
                      <strong>Universidad de los Andes</strong>
                      <br />
                      Ayudante de <em>Paradigmas de Programación</em>
                      <br />
                      Ayudante de <em>Programación</em>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-gray-700 align-top">
                      Ago 2022 - Nov 2022
                    </td>
                    <td className="py-3 text-gray-600">
                      <strong>Universidad de los Andes</strong>
                      <br />
                      Ayudante de <em>Paradigmas de Programación</em>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Actividades Extracurriculares */}
        <section className="card mb-6">
          <div
            className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => toggleSection("extracurricular")}
            onKeyDown={(e) => handleKeyDown(e, "extracurricular")}
            role="button"
            tabIndex={0}
            aria-expanded={expandedSections.extracurricular}
            aria-label="Expandir o contraer Actividades Extracurriculares"
          >
            <h2 className="text-2xl font-bold text-gray-800">
              Actividades Extracurriculares
            </h2>
            <svg
              className={`w-6 h-6 transform transition-transform ${
                expandedSections.extracurricular ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {expandedSections.extracurricular && (
            <div className="px-6 pb-6">
              <hr className="mb-6" />
              <table className="w-full">
                <thead className="sr-only">
                  <tr>
                    <th>Año</th>
                    <th>Actividad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 font-semibold text-gray-700 w-1/4 align-top">
                      2023
                    </td>
                    <td className="py-3 text-gray-600">
                      Consejero político de Ingeniería Civil
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Antecedentes Laborales */}
        <section className="card mb-6">
          <div
            className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => toggleSection("work")}
            onKeyDown={(e) => handleKeyDown(e, "work")}
            role="button"
            tabIndex={0}
            aria-expanded={expandedSections.work}
            aria-label="Expandir o contraer Antecedentes Laborales"
          >
            <h2 className="text-2xl font-bold text-gray-800">
              Antecedentes Laborales
            </h2>
            <svg
              className={`w-6 h-6 transform transition-transform ${
                expandedSections.work ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {expandedSections.work && (
            <div className="px-6 pb-6">
              <hr className="mb-6" />
              <table className="w-full">
                <thead className="sr-only">
                  <tr>
                    <th>Período</th>
                    <th>Trabajo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 font-semibold text-gray-700 w-1/4">
                      2022 - 2024
                    </td>
                    <td className="py-3 text-gray-600">
                      <strong>Fundación Nueva Mente</strong>
                      <br />
                      Colaboración pro bono a tiempo parcial
                      <br />
                      Manejo de la página web utilizando Wix
                      <br />
                      Registro y seguimiento de gastos
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-gray-700">2019</td>
                    <td className="py-3 text-gray-600">
                      <strong>Cornershop</strong>
                      <br />
                      Repartidor
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Formación Complementaria */}
        <section className="card mb-6">
          <div
            className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => toggleSection("additional")}
            onKeyDown={(e) => handleKeyDown(e, "additional")}
            role="button"
            tabIndex={0}
            aria-expanded={expandedSections.additional}
            aria-label="Expandir o contraer Formación Complementaria"
          >
            <h2 className="text-2xl font-bold text-gray-800">
              Formación Complementaria
            </h2>
            <svg
              className={`w-6 h-6 transform transition-transform ${
                expandedSections.additional ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {expandedSections.additional && (
            <div className="px-6 pb-6">
              <hr className="mb-6" />
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Universidad de los Andes:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  Concentración tecnológica en{" "}
                  <em>Ingeniería Civil Eléctrica</em>
                </li>
                <li>
                  Minor en <em>Psicología</em>
                </li>
                <li>
                  Seminario <em>ChatGPT</em>
                </li>
              </ul>
            </div>
          )}
        </section>

        {/* Competencias Profesionales */}
        <section className="card mb-6">
          <div
            className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => toggleSection("skills")}
            onKeyDown={(e) => handleKeyDown(e, "skills")}
            role="button"
            tabIndex={0}
            aria-expanded={expandedSections.skills}
            aria-label="Expandir o contraer Competencias Profesionales"
          >
            <h2 className="text-2xl font-bold text-gray-800">
              Competencias Profesionales
            </h2>
            <svg
              className={`w-6 h-6 transform transition-transform ${
                expandedSections.skills ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {expandedSections.skills && (
            <div className="px-6 pb-6">
              <hr className="mb-6" />

              {/* Lenguajes de Programación */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Lenguajes de Programación
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Python</span>
                    <span className="text-primary-600 text-sm font-semibold">Intermedio-Avanzado</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">JavaScript</span>
                    <span className="text-primary-600 text-sm font-semibold">Intermedio-Avanzado</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">C++</span>
                    <span className="text-primary-600 text-sm font-semibold">Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">SQL</span>
                    <span className="text-primary-600 text-sm font-semibold">Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Ruby</span>
                    <span className="text-primary-600 text-sm font-semibold">Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">HTML/CSS</span>
                    <span className="text-primary-600 text-sm font-semibold">Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">C</span>
                    <span className="text-gray-500 text-sm font-semibold">Básico</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">VBA (Excel)</span>
                    <span className="text-gray-500 text-sm font-semibold">Básico</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Apps Script</span>
                    <span className="text-gray-500 text-sm font-semibold">Básico</span>
                  </div>
                </div>
              </div>

              {/* Frameworks y Librerías */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Frameworks y Librerías
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">React</span>
                    <span className="text-primary-600 text-sm font-semibold">Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">React Native</span>
                    <span className="text-primary-600 text-sm font-semibold">Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Flask</span>
                    <span className="text-primary-600 text-sm font-semibold">Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Django</span>
                    <span className="text-primary-600 text-sm font-semibold">Básico-Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">FastAPI</span>
                    <span className="text-gray-500 text-sm font-semibold">Básico</span>
                  </div>
                </div>
              </div>

              {/* Herramientas de Software */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Herramientas de Software
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Git/GitHub</span>
                    <span className="text-primary-600 text-sm font-semibold">Intermedio-Avanzado</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Excel</span>
                    <span className="text-primary-600 text-sm font-semibold">Avanzado</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Docker</span>
                    <span className="text-primary-600 text-sm font-semibold">Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">LaTeX</span>
                    <span className="text-primary-600 text-sm font-semibold">Intermedio</span>
                  </div>
                </div>
              </div>

              {/* Idiomas */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Idiomas
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Español</span>
                    <span className="text-primary-600 text-sm font-semibold">Nativo</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700">Inglés</span>
                    <span className="text-primary-600 text-sm font-semibold">Básico-Intermedio</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default About;
