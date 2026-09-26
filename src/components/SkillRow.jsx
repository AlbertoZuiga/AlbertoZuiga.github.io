import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { viewportConfig } from "../utils/animations";
import { levelToPercent } from "../utils/skillLevel";

const SkillRow = ({ name, level }) => {
  const percent = levelToPercent(level);
  return (
    <div className="pb-2 text-sm sm:text-base">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium text-gray-700 dark:text-gray-300">
          {name}
        </span>
        <span
          className={`text-sm font-semibold ${
            level === "Básico"
              ? "text-gray-500 dark:text-gray-500"
              : "text-primary-600 dark:text-primary-400"
          }`}
        >
          {level}
        </span>
      </div>
      <div
        className="h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden"
        role="progressbar"
        aria-label={`${name}: ${level}`}
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className="h-full rounded-full bg-primary-500 dark:bg-primary-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={viewportConfig}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

SkillRow.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};

export default SkillRow;
