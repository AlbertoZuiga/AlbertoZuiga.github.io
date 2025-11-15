import { useState } from "react";
import SEO from "../components/SEO";

const About = () => {
  const [expandedSections, setExpandedSections] = useState({
    personal: true,
    academic: true,
    work: true,
    additional: true,
    extracurricular: true,
    skills: true,
  });

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
    <div className="py-8 sm:py-12 dark:bg-gray-900 transition-colors duration-300">
      <SEO 
        title="Sobre Mí - Alberto Zúñiga | CV y Experiencia"
        description="Currículum vitae de Alberto Zúñiga. Experiencia en desarrollo web, formación académica en Ingeniería en Ciencias de la Computación, habilidades técnicas en React, Python, Java y más."
        url="https://albertozuiga.github.io/about"
        keywords="Alberto Zúñiga CV, experiencia laboral, ingeniería computación, desarrollador, Universidad de los Andes, habilidades técnicas"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
            Currículum Vitae
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">Alberto Zúñiga</p>
        </div>

        {/* Antecedentes Personales */}
        <section className="card mb-4 sm:mb-6 dark:bg-gray-800 transition-colors duration-300">
          <div
            className="flex justify-between items-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            onClick={() => toggleSection("personal")}
            onKeyDown={(e) => handleKeyDown(e, "personal")}
            role="button"
            tabIndex={0}
            aria-expanded={expandedSections.personal}
            aria-label="Expandir o contraer Antecedentes Personales"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
              Antecedentes Personales
            </h2>
            <svg
              className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform dark:text-white flex-shrink-0 ml-2 ${
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
            <div className="px-4 sm:px-6 pb-4 sm:pb-6">
              <hr className="mb-4 sm:mb-6 dark:border-gray-700" />
              <div className="space-y-3 sm:space-y-0">
                <div className="py-2 sm:py-3 border-b border-gray-200 dark:border-gray-700 sm:border-b-0">
                  <div className="font-semibold text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-1 sm:mb-0 sm:inline-block sm:w-1/3">
                    Nombre
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base sm:inline-block sm:w-2/3">
                    Alberto Zúñiga Marinovic
                  </div>
                </div>
                <div className="py-2 sm:py-3 border-b border-gray-200 dark:border-gray-700 sm:border-b-0">
                  <div className="font-semibold text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-1 sm:mb-0 sm:inline-block sm:w-1/3">
                    Teléfono
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base sm:inline-block sm:w-2/3">
                    <a href="tel:+56964962736" className="hover:text-primary-500 dark:hover:text-primary-400">
                      +56 9 6496 2736
                    </a>
                  </div>
                </div>
                <div className="py-2 sm:py-3 border-b border-gray-200 dark:border-gray-700 sm:border-b-0">
                  <div className="font-semibold text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-1 sm:mb-0 sm:inline-block sm:w-1/3 sm:align-top">
                    Correo electrónico
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base break-all sm:inline-block sm:w-2/3">
                    <a
                      href="mailto:azuiga@miuandes.cl"
                      className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 block sm:inline sm:mr-2 mb-1 sm:mb-0"
                    >
                      azuiga@miuandes.cl
                    </a>
                    <a
                      href="mailto:a.zuniga.marinovic@gmail.com"
                      className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 block sm:inline"
                    >
                      a.zuniga.marinovic@gmail.com
                    </a>
                  </div>
                </div>
                <div className="py-2 sm:py-3">
                  <div className="font-semibold text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-1 sm:mb-0 sm:inline-block sm:w-1/3">
                    GitHub
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base sm:inline-block sm:w-2/3">
                    <a
                      href="https://github.com/AlbertoZuiga"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      AlbertoZuiga
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Antecedentes Académicos */}
        <section className="card mb-4 sm:mb-6 dark:bg-gray-800 transition-colors duration-300">
          <div
            className="flex justify-between items-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            onClick={() => toggleSection("academic")}
            onKeyDown={(e) => handleKeyDown(e, "academic")}
            role="button"
            tabIndex={0}
            aria-expanded={expandedSections.academic}
            aria-label="Expandir o contraer Antecedentes Académicos"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
              Antecedentes Académicos
            </h2>
            <svg
              className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform dark:text-white flex-shrink-0 ml-2 ${
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
            <div className="px-4 sm:px-6 pb-4 sm:pb-6">
              <hr className="mb-4 sm:mb-6 dark:border-gray-700" />
              <div className="space-y-4 sm:space-y-3">
                <div className="pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  <div className="font-semibold text-primary-600 dark:text-primary-400 text-xs sm:text-sm mb-1 sm:mb-2">
                    2020 - Presente
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    <strong className="text-gray-800 dark:text-gray-200">Universidad de los Andes</strong>
                    <br />
                    Estudiante de Ingeniería Civil en Ciencias de la Computación
                  </div>
                </div>
                <div className="pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  <div className="font-semibold text-primary-600 dark:text-primary-400 text-xs sm:text-sm mb-1 sm:mb-2">
                    Ago 2025 - Presente
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    <strong className="text-gray-800 dark:text-gray-200">Universidad de los Andes</strong>
                    <br />
                    Ayudante de <em>Sistemas Electrónicos</em>
                    <br />
                    Ayudante de <em>Bases de Datos</em>
                    <br />
                    Ayudante de <em>Paradigmas de Programación</em>
                    <br />
                    Ayudante de <em>Taller de Computación</em>
                  </div>
                </div>
                <div className="pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  <div className="font-semibold text-primary-600 dark:text-primary-400 text-xs sm:text-sm mb-1 sm:mb-2">
                    Mar 2025 - Jun 2025
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    <strong className="text-gray-800 dark:text-gray-200">Universidad de los Andes</strong>
                    <br />
                    Ayudante de <em>Web Technologies</em>
                    <br />
                    Ayudante de <em>Taller de Proyectos de Ingeniería</em>
                  </div>
                </div>
                <div className="pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  <div className="font-semibold text-primary-600 dark:text-primary-400 text-xs sm:text-sm mb-1 sm:mb-2">
                    Ago 2024 - Nov 2024
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    <strong className="text-gray-800 dark:text-gray-200">Universidad de los Andes</strong>
                    <br />
                    Ayudante de <em>Web Technologies</em>
                    <br />
                    Ayudante de <em>Aplicaciones Móviles</em>
                  </div>
                </div>
                <div className="pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  <div className="font-semibold text-primary-600 dark:text-primary-400 text-xs sm:text-sm mb-1 sm:mb-2">
                    Mar 2024 - Jun 2024
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    <strong className="text-gray-800 dark:text-gray-200">Universidad de los Andes</strong>
                    <br />
                    Ayudante de <em>Web Technologies</em>
                    <br />
                    Ayudante de <em>Programación</em>
                  </div>
                </div>
                <div className="pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  <div className="font-semibold text-primary-600 dark:text-primary-400 text-xs sm:text-sm mb-1 sm:mb-2">
                    Mar 2023 - Jun 2023
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    <strong className="text-gray-800 dark:text-gray-200">Universidad de los Andes</strong>
                    <br />
                    Ayudante de <em>Paradigmas de Programación</em>
                    <br />
                    Ayudante de <em>Programación</em>
                  </div>
                </div>
                <div className="pb-3 sm:pb-4">
                  <div className="font-semibold text-primary-600 dark:text-primary-400 text-xs sm:text-sm mb-1 sm:mb-2">
                    Ago 2022 - Nov 2022
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    <strong className="text-gray-800 dark:text-gray-200">Universidad de los Andes</strong>
                    <br />
                    Ayudante de <em>Paradigmas de Programación</em>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Actividades Extracurriculares */}
        <section className="card mb-4 sm:mb-6 dark:bg-gray-800 transition-colors duration-300">
          <div
            className="flex justify-between items-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            onClick={() => toggleSection("extracurricular")}
            onKeyDown={(e) => handleKeyDown(e, "extracurricular")}
            role="button"
            tabIndex={0}
            aria-expanded={expandedSections.extracurricular}
            aria-label="Expandir o contraer Actividades Extracurriculares"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
              Actividades Extracurriculares
            </h2>
            <svg
              className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform dark:text-white flex-shrink-0 ml-2 ${
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
            <div className="px-4 sm:px-6 pb-4 sm:pb-6">
              <hr className="mb-4 sm:mb-6 dark:border-gray-700" />
              <div className="space-y-3">
                <div className="pb-3">
                  <div className="font-semibold text-primary-600 dark:text-primary-400 text-xs sm:text-sm mb-1 sm:mb-2">
                    2023
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    Consejero político de Ingeniería Civil
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Antecedentes Laborales */}
        <section className="card mb-4 sm:mb-6 dark:bg-gray-800 transition-colors duration-300">
          <div
            className="flex justify-between items-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            onClick={() => toggleSection("work")}
            onKeyDown={(e) => handleKeyDown(e, "work")}
            role="button"
            tabIndex={0}
            aria-expanded={expandedSections.work}
            aria-label="Expandir o contraer Antecedentes Laborales"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
              Antecedentes Laborales
            </h2>
            <svg
              className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform dark:text-white flex-shrink-0 ml-2 ${
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
            <div className="px-4 sm:px-6 pb-4 sm:pb-6">
              <hr className="mb-4 sm:mb-6 dark:border-gray-700" />
              <div className="space-y-4 sm:space-y-3">
                <div className="pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  <div className="font-semibold text-primary-600 dark:text-primary-400 text-xs sm:text-sm mb-1 sm:mb-2">
                    2022 - 2024
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    <strong className="text-gray-800 dark:text-gray-200">Fundación Nueva Mente</strong>
                    <br />
                    Colaboración pro bono a tiempo parcial
                    <br />
                    Manejo de la página web utilizando Wix
                    <br />
                    Registro y seguimiento de gastos
                  </div>
                </div>
                <div className="pb-3 sm:pb-4">
                  <div className="font-semibold text-primary-600 dark:text-primary-400 text-xs sm:text-sm mb-1 sm:mb-2">
                    2019
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    <strong className="text-gray-800 dark:text-gray-200">Cornershop</strong>
                    <br />
                    Repartidor
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Formación Complementaria */}
        <section className="card mb-4 sm:mb-6 dark:bg-gray-800 transition-colors duration-300">
          <div
            className="flex justify-between items-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            onClick={() => toggleSection("additional")}
            onKeyDown={(e) => handleKeyDown(e, "additional")}
            role="button"
            tabIndex={0}
            aria-expanded={expandedSections.additional}
            aria-label="Expandir o contraer Formación Complementaria"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
              Formación Complementaria
            </h2>
            <svg
              className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform dark:text-white flex-shrink-0 ml-2 ${
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
            <div className="px-4 sm:px-6 pb-4 sm:pb-6">
              <hr className="mb-4 sm:mb-6 dark:border-gray-700" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                Universidad de los Andes:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
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
        <section className="card mb-4 sm:mb-6 dark:bg-gray-800 transition-colors duration-300">
          <div
            className="flex justify-between items-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            onClick={() => toggleSection("skills")}
            onKeyDown={(e) => handleKeyDown(e, "skills")}
            role="button"
            tabIndex={0}
            aria-expanded={expandedSections.skills}
            aria-label="Expandir o contraer Competencias Profesionales"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
              Competencias Profesionales
            </h2>
            <svg
              className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform dark:text-white flex-shrink-0 ml-2 ${
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
            <div className="px-4 sm:px-6 pb-4 sm:pb-6">
              <hr className="mb-4 sm:mb-6 dark:border-gray-700" />

              {/* Lenguajes de Programación */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                  Lenguajes de Programación
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-3">
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2 text-sm sm:text-base">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Python</span>
                    <span className="text-primary-600 text-sm font-semibold dark:text-primary-400">Intermedio-Avanzado</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">JavaScript</span>
                    <span className="text-primary-600 text-sm font-semibold dark:text-primary-400">Intermedio-Avanzado</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">C++</span>
                    <span className="text-primary-600 text-sm font-semibold dark:text-primary-400">Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">SQL</span>
                    <span className="text-primary-600 text-sm font-semibold dark:text-primary-400">Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Ruby</span>
                    <span className="text-primary-600 text-sm font-semibold dark:text-primary-400">Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">HTML/CSS</span>
                    <span className="text-primary-600 text-sm font-semibold dark:text-primary-400">Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">C</span>
                    <span className="text-gray-500 text-sm font-semibold dark:text-gray-500">Básico</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">VBA (Excel)</span>
                    <span className="text-gray-500 text-sm font-semibold dark:text-gray-500">Básico</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Apps Script</span>
                    <span className="text-gray-500 text-sm font-semibold dark:text-gray-500">Básico</span>
                  </div>
                </div>
              </div>

              {/* Frameworks y Librerías */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                  Frameworks y Librerías
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-3">
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2 text-sm sm:text-base">
                    <span className="font-medium text-gray-700 dark:text-gray-300">React</span>
                    <span className="text-primary-600 text-sm font-semibold dark:text-primary-400">Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">React Native</span>
                    <span className="text-primary-600 text-sm font-semibold dark:text-primary-400">Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Flask</span>
                    <span className="text-primary-600 text-sm font-semibold dark:text-primary-400">Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Django</span>
                    <span className="text-primary-600 text-sm font-semibold dark:text-primary-400">Básico-Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">FastAPI</span>
                    <span className="text-gray-500 text-sm font-semibold dark:text-gray-500">Básico</span>
                  </div>
                </div>
              </div>

              {/* Herramientas de Software */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                  Herramientas de Software
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-3">
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2 text-sm sm:text-base">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Git/GitHub</span>
                    <span className="text-primary-600 text-sm font-semibold dark:text-primary-400">Intermedio-Avanzado</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Excel</span>
                    <span className="text-primary-600 text-sm font-semibold dark:text-primary-400">Avanzado</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Docker</span>
                    <span className="text-primary-600 text-sm font-semibold dark:text-primary-400">Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">LaTeX</span>
                    <span className="text-primary-600 text-sm font-semibold dark:text-primary-400">Intermedio</span>
                  </div>
                </div>
              </div>

              {/* Idiomas */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                  Idiomas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-3">
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2 text-sm sm:text-base">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Español</span>
                    <span className="text-primary-600 text-sm font-semibold dark:text-primary-400">Nativo</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Inglés</span>
                    <span className="text-primary-600 text-sm font-semibold dark:text-primary-400">Básico-Intermedio</span>
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
