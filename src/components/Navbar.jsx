import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className="sticky top-0 z-50 bg-gray-800 shadow-lg">
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
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/")
                  ? "bg-primary-500 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "bg-primary-500 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Sobre Mí
            </Link>
            <Link
              to="/projects"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/projects")
                  ? "bg-primary-500 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Proyectos
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "bg-primary-500 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
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
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-700">
          <Link
            to="/"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
              isActive("/")
                ? "bg-primary-500 text-white"
                : "text-gray-300 hover:bg-gray-600 hover:text-white"
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
                : "text-gray-300 hover:bg-gray-600 hover:text-white"
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
                : "text-gray-300 hover:bg-gray-600 hover:text-white"
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
                : "text-gray-300 hover:bg-gray-600 hover:text-white"
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
