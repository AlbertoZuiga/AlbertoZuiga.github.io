import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-800 dark:bg-gray-950 shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              onClick={closeMenu}
              className="text-white text-xl font-bold hover:text-primary-400 transition-colors"
            >
              Alberto Zúñiga
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/")
                  ? "bg-primary-500 text-white"
                  : "text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white"
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "bg-primary-500 text-white"
                  : "text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white"
              }`}
            >
              Sobre Mí
            </Link>
            <Link
              to="/projects"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/projects")
                  ? "bg-primary-500 text-white"
                  : "text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white"
              }`}
            >
              Proyectos
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "bg-primary-500 text-white"
                  : "text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white"
              }`}
            >
              Contacto
            </Link>

            {/* Theme Toggle Switch */}
            <button
              onClick={toggleTheme}
              className="relative inline-flex items-center gap-2 px-1 py-1 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 group"
              aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {/* Toggle Track */}
              <div className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                isDark ? 'bg-blue-600' : 'bg-yellow-500'
              }`}>
                {/* Toggle Thumb */}
                <div className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                  isDark ? 'translate-x-7' : 'translate-x-0'
                }`}>
                  {isDark ? (
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </div>
              </div>
              {/* Label text - hidden on smaller screens */}
              <span className="text-gray-200 text-sm font-medium hidden xl:inline">
                {isDark ? "Oscuro" : "Claro"}
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle Switch - Mobile */}
            <button
              onClick={toggleTheme}
              className="relative inline-flex items-center px-1 py-1 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {/* Toggle Track */}
              <div className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                isDark ? 'bg-blue-600' : 'bg-yellow-500'
              }`}>
                {/* Toggle Thumb */}
                <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                  isDark ? 'translate-x-6' : 'translate-x-0'
                }`}>
                  {isDark ? (
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  ) : (
                    <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </div>
              </div>
            </button>

            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Menú principal"
            >
              <span className="sr-only">Abrir menú principal</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-700 dark:bg-gray-900 transition-colors duration-300">
          <Link
            to="/"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
              isActive("/")
                ? "bg-primary-500 text-white"
                : "text-gray-300 hover:bg-gray-600 dark:hover:bg-gray-800 hover:text-white"
            }`}
          >
            Inicio
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
              isActive("/about")
                ? "bg-primary-500 text-white"
                : "text-gray-300 hover:bg-gray-600 dark:hover:bg-gray-800 hover:text-white"
            }`}
          >
            Sobre Mí
          </Link>
          <Link
            to="/projects"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
              isActive("/projects")
                ? "bg-primary-500 text-white"
                : "text-gray-300 hover:bg-gray-600 dark:hover:bg-gray-800 hover:text-white"
            }`}
          >
            Proyectos
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
              isActive("/contact")
                ? "bg-primary-500 text-white"
                : "text-gray-300 hover:bg-gray-600 dark:hover:bg-gray-800 hover:text-white"
            }`}
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
