import PropTypes from "prop-types";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = ({ compact = false }) => {
  const { isDark, toggleTheme } = useTheme();
  const label = isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro";

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center gap-2 px-1 py-1 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
      aria-label={label}
      title={label}
    >
      {/* Track */}
      <div
        className={`relative rounded-full transition-colors duration-300 ${
          compact ? "w-12 h-6" : "w-14 h-7"
        } ${isDark ? "bg-blue-600" : "bg-yellow-500"}`}
      >
        {/* Thumb */}
        <div
          className={`absolute top-0.5 left-0.5 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
            compact ? "w-5 h-5" : "w-6 h-6"
          } ${
            isDark
              ? compact
                ? "translate-x-6"
                : "translate-x-7"
              : "translate-x-0"
          }`}
        >
          {isDark ? (
            <svg
              className={`${compact ? "w-3 h-3" : "w-4 h-4"} text-blue-600`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg
              className={`${compact ? "w-3 h-3" : "w-4 h-4"} text-yellow-500`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </div>
      </div>
      {!compact && (
        <span className="text-gray-200 text-sm font-medium hidden xl:inline-block w-14 text-left">
          {isDark ? "Oscuro" : "Claro"}
        </span>
      )}
    </button>
  );
};

ThemeToggle.propTypes = {
  compact: PropTypes.bool,
};

export default ThemeToggle;
