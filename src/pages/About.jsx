import { useState } from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";
import { slideUp, fadeIn, viewportConfig } from "../utils/animations";
import { site } from "../data/site";
import { cvSkillGroups } from "../data/skills";
import {
  personal,
  work,
  academic,
  extracurricular,
  additional,
} from "../data/cv";

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
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleSection(section);
    }
  };

  return (
    <PageTransition>
      <div className="py-8 sm:py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <SEO
          title="Sobre Mí - Alberto Zúñiga | CV y Experiencia"
          description="Currículum vitae de Alberto Zúñiga. Experiencia en desarrollo web, formación académica en Ingeniería en Ciencias de la Computación, habilidades técnicas en React, Python, Java y más."
          url={`${site.baseUrl}/about`}
          keywords="Alberto Zúñiga CV, experiencia laboral, ingeniería computación, desarrollador, Universidad de los Andes, habilidades técnicas"
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            variants={slideUp}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
              Currículum Vitae
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              {site.name}
            </p>
          </motion.div>

          {/* Antecedentes Personales */}
          <motion.section
            className="card mb-4 sm:mb-6 dark:bg-gray-800 transition-colors duration-300"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
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
                  {personal.map((row) => (
                    <div
                      key={row.label}
                      className="py-2 sm:py-3 border-b border-gray-200 dark:border-gray-700 sm:border-b-0 last:border-b-0"
                    >
                      <div className="font-semibold text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-1 sm:mb-0 sm:inline-block sm:w-1/3 sm:align-top">
                        {row.label}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base break-all sm:inline-block sm:w-2/3">
                        {row.value}
                        {row.links?.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={
                              link.external ? "noopener noreferrer" : undefined
                            }
                            className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 block sm:inline sm:mr-2 mb-1 sm:mb-0"
                          >
                            {link.text}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.section>

          {/* Antecedentes Laborales */}
          <motion.section
            className="card mb-4 sm:mb-6 dark:bg-gray-800 transition-colors duration-300"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
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
                  {work.map((job) => (
                    <div
                      key={job.period}
                      className="pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                    >
                      <div className="font-semibold text-primary-600 dark:text-primary-400 text-xs sm:text-sm mb-1 sm:mb-2">
                        {job.period}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                        <strong className="text-gray-800 dark:text-gray-200">
                          {job.org}
                        </strong>
                        {job.lines.map((line) => (
                          <span key={line}>
                            <br />
                            {line}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.section>

          {/* Antecedentes Académicos */}
          <motion.section
            className="card mb-4 sm:mb-6 dark:bg-gray-800 transition-colors duration-300"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
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
                  {academic.map((entry) => (
                    <div
                      key={entry.period}
                      className="pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                    >
                      <div className="font-semibold text-primary-600 dark:text-primary-400 text-xs sm:text-sm mb-1 sm:mb-2">
                        {entry.period}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                        <strong className="text-gray-800 dark:text-gray-200">
                          {entry.org}
                        </strong>
                        {entry.degree && (
                          <>
                            <br />
                            {entry.degree}
                          </>
                        )}
                        {entry.courses?.map((course) => (
                          <span key={course}>
                            <br />
                            Ayudante de <em>{course}</em>
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.section>

          {/* Actividades Extracurriculares */}
          <motion.section
            className="card mb-4 sm:mb-6 dark:bg-gray-800 transition-colors duration-300"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
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
                  {extracurricular.map((item) => (
                    <div key={item.period} className="pb-3">
                      <div className="font-semibold text-primary-600 dark:text-primary-400 text-xs sm:text-sm mb-1 sm:mb-2">
                        {item.period}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                        {item.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.section>

          {/* Formación Complementaria */}
          <motion.section
            className="card mb-4 sm:mb-6 dark:bg-gray-800 transition-colors duration-300"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
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
                  {additional.heading}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  {additional.items.map((item) => (
                    <li key={item.em}>
                      {item.text} <em>{item.em}</em>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.section>

          {/* Competencias Profesionales */}
          <motion.section
            className="card mb-4 sm:mb-6 dark:bg-gray-800 transition-colors duration-300"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
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
                <div className="space-y-6 sm:space-y-8">
                  {cvSkillGroups.map((group) => (
                    <div key={group.title}>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                        {group.title}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-3">
                        {group.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="flex justify-between items-center border-b border-gray-200 pb-2"
                          >
                            <span className="font-medium text-gray-700 dark:text-gray-300">
                              {skill.name}
                            </span>
                            <span
                              className={`text-sm font-semibold ${
                                skill.level === "Básico"
                                  ? "text-gray-500 dark:text-gray-500"
                                  : "text-primary-600 dark:text-primary-400"
                              }`}
                            >
                              {skill.level}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.section>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
