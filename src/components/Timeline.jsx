import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "../utils/animations";

const Timeline = ({ items }) => {
  return (
    <motion.ol
      className="relative border-l-2 border-primary-200 dark:border-primary-800 ml-2 sm:ml-3 space-y-6 sm:space-y-8"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      {items.map((item) => (
        <motion.li
          key={`${item.period}-${item.org}`}
          className="relative pl-6 sm:pl-8"
          variants={staggerItem}
        >
          <span
            className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary-500 ring-4 ring-white dark:ring-gray-800"
            aria-hidden="true"
          />
          <div className="inline-block font-semibold text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/40 rounded-full px-3 py-0.5 text-xs sm:text-sm mb-2">
            {item.period}
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            <strong className="block text-gray-800 dark:text-gray-200">
              {item.org}
            </strong>
            {item.title}
            {item.lines && (
              <ul className="list-disc list-inside mt-1 space-y-1">
                {item.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            )}
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
};

Timeline.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      period: PropTypes.string.isRequired,
      org: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      lines: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default Timeline;
