import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { staggerItem } from "../utils/animations";

const SkillCard = ({ icon, name, level }) => {
  return (
    <motion.div
      className="card p-4 sm:p-6 text-center transform hover:scale-105 transition-transform dark:bg-gray-800"
      variants={staggerItem}
    >
      <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{icon}</div>
      <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">
        {name}
      </h4>
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
        {level}
      </p>
    </motion.div>
  );
};

SkillCard.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};

export default SkillCard;
