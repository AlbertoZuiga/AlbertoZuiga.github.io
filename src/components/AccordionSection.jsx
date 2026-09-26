import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { fadeIn, viewportConfig } from "../utils/animations";

const AccordionSection = ({ title, isOpen, onToggle, children }) => {
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
      >
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
          {title}
        </h2>
        <svg
          className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform dark:text-white shrink-0 ml-2 ${
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
      {isOpen && (
        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
          <hr className="mb-4 sm:mb-6 dark:border-gray-700" />
          {children}
        </div>
      )}
    </motion.section>
  );
};

AccordionSection.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default AccordionSection;
