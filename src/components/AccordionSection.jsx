import { useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { fadeIn, getDuration, viewportConfig } from "../utils/animations";

const AccordionSection = ({ title, icon, isOpen, onToggle, children }) => {
  const id = useId();
  const headingId = `${id}-heading`;
  const panelId = `${id}-panel`;

  return (
    <motion.section
      className="card mb-4 sm:mb-6 dark:bg-gray-800 transition-colors duration-300"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <button
        type="button"
        className="w-full flex justify-between items-center p-4 sm:p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-500"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <h2
          id={headingId}
          className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-gray-800 dark:text-white"
        >
          {icon && (
            <span className="text-2xl sm:text-3xl" aria-hidden="true">
              {icon}
            </span>
          )}
          {title}
        </h2>
        <svg
          className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-300 dark:text-white shrink-0 ml-2 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            id={panelId}
            role="region"
            aria-labelledby={headingId}
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: getDuration(0.3), ease: "easeInOut" }}
          >
            <div className="px-4 sm:px-6 pb-4 sm:pb-6">
              <hr className="mb-4 sm:mb-6 dark:border-gray-700" />
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

AccordionSection.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default AccordionSection;
