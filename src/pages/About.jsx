import { useState } from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { seoPages } from "../data/seo";
import PageTransition from "../components/PageTransition";
import AccordionSection from "../components/AccordionSection";
import SkillRow from "../components/SkillRow";
import { slideUp } from "../utils/animations";
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

  return (
    <PageTransition>
      <div className="py-8 sm:py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <SEO {...seoPages["/about"]} />
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

          <AccordionSection
            title="Antecedentes Personales"
            isOpen={expandedSections.personal}
            onToggle={() => toggleSection("personal")}
          >
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
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 block sm:inline sm:mr-2 mb-1 sm:mb-0"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AccordionSection>

          <AccordionSection
            title="Antecedentes Laborales"
            isOpen={expandedSections.work}
            onToggle={() => toggleSection("work")}
          >
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
          </AccordionSection>

          <AccordionSection
            title="Antecedentes Académicos"
            isOpen={expandedSections.academic}
            onToggle={() => toggleSection("academic")}
          >
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
                    {entry.thesis && (
                      <>
                        <br />
                        <a
                          href={entry.thesis.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 dark:text-primary-400 hover:underline"
                        >
                          {entry.thesis.text}
                        </a>
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
          </AccordionSection>

          <AccordionSection
            title="Actividades Extracurriculares"
            isOpen={expandedSections.extracurricular}
            onToggle={() => toggleSection("extracurricular")}
          >
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
          </AccordionSection>

          <AccordionSection
            title="Formación Complementaria"
            isOpen={expandedSections.additional}
            onToggle={() => toggleSection("additional")}
          >
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
          </AccordionSection>

          <AccordionSection
            title="Competencias Profesionales"
            isOpen={expandedSections.skills}
            onToggle={() => toggleSection("skills")}
          >
            <div className="space-y-6 sm:space-y-8">
              {cvSkillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                    {group.title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-3">
                    {group.skills.map((skill) => (
                      <SkillRow
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AccordionSection>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
