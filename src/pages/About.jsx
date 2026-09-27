import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
import { useSeo } from "../hooks/useSeo";
import PageTransition from "../components/PageTransition";
import AccordionSection from "../components/AccordionSection";
import SkillRow from "../components/SkillRow";
import Timeline from "../components/Timeline";
import { slideUp } from "../utils/animations";
import { site } from "../data/site";
import { cvSkillGroups } from "../data/skills";

const SECTIONS = [
  { id: "personal", icon: "👤" },
  { id: "work", icon: "💼" },
  { id: "academic", icon: "🎓" },
  { id: "volunteering", icon: "🤝" },
  { id: "additional", icon: "📜" },
  { id: "skills", icon: "🛠️" },
];

const About = () => {
  const { t } = useTranslation();
  const seo = useSeo("/about");
  const [expandedSections, setExpandedSections] = useState({
    personal: true,
    academic: true,
    work: true,
    additional: true,
    volunteering: true,
    skills: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sectionProps = (id) => {
    const { icon } = SECTIONS.find((s) => s.id === id);
    return {
      title: t(`about.sections.${id}`),
      icon,
      isOpen: expandedSections[id],
      onToggle: () => toggleSection(id),
    };
  };

  const personal = [
    { label: t("cv.personal.name"), value: site.fullName },
    { label: t("cv.personal.degree"), value: t("site.degree") },
    {
      label: t("cv.personal.phone"),
      links: [{ href: site.phoneHref, text: site.phone }],
    },
    {
      label: t("cv.personal.email"),
      links: [
        { href: `mailto:${site.universityEmail}`, text: site.universityEmail },
        { href: `mailto:${site.email}`, text: site.email },
      ],
    },
    {
      label: t("cv.personal.github"),
      links: [{ href: site.github, text: site.githubUser, external: true }],
    },
  ];
  const work = t("cv.work", { returnObjects: true });
  const academic = t("cv.academic", { returnObjects: true });
  const volunteering = t("cv.volunteering", { returnObjects: true });
  const additional = t("cv.additional.items", { returnObjects: true });

  return (
    <PageTransition>
      <div className="py-8 sm:py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <SEO {...seo} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            variants={slideUp}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
              {t("about.title")}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              {site.name}
            </p>
            <a
              href={t("site.cvUrl")}
              download
              className="btn-primary inline-flex items-center gap-2 mt-4"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                />
              </svg>
              {t("about.downloadCv")}
            </a>
          </motion.div>

          <AccordionSection {...sectionProps("personal")}>
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

          <AccordionSection {...sectionProps("work")}>
            <Timeline items={work} />
          </AccordionSection>

          <AccordionSection {...sectionProps("academic")}>
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
                      {site.university}
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
                        {t("about.assistantOf")} <em>{course}</em>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AccordionSection>

          <AccordionSection {...sectionProps("volunteering")}>
            <Timeline items={volunteering} />
          </AccordionSection>

          <AccordionSection {...sectionProps("additional")}>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
              {site.university}:
            </h3>
            <ul className="flex flex-wrap gap-2">
              {additional.map((item) => (
                <li
                  key={item.em}
                  className="rounded-full bg-primary-50 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 px-3 py-1 text-sm"
                >
                  {item.text} <em>{item.em}</em>
                </li>
              ))}
            </ul>
          </AccordionSection>

          <AccordionSection {...sectionProps("skills")}>
            <div className="space-y-6 sm:space-y-8">
              {cvSkillGroups.map((group) => (
                <div key={group.id}>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                    {t(`skills.groups.${group.id}`)}
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
