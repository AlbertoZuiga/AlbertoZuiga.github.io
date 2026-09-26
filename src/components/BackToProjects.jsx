import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { slideUp } from "../utils/animations";

const variantClass = {
  light:
    "text-gray-700 dark:text-white hover:text-primary-500 dark:hover:text-primary-400",
  dark: "text-white hover:text-yellow-300",
};

const BackToProjects = ({ variant = "light" }) => {
  return (
    <motion.div
      className="mb-6"
      variants={slideUp}
      initial="hidden"
      animate="visible"
    >
      <Link
        to="/projects"
        className={`inline-flex items-center transition-colors ${variantClass[variant]}`}
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Volver a Proyectos
      </Link>
    </motion.div>
  );
};

BackToProjects.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variantClass)),
};

export default BackToProjects;
