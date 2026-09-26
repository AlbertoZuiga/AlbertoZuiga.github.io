import { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../hooks/useTheme";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Intentar obtener el tema guardado en localStorage
    let savedTheme = null;
    try {
      savedTheme = localStorage.getItem("theme");
    } catch {
      // localStorage no disponible (Safari privado, etc.)
    }

    // Si no hay tema guardado, usar preferencia del sistema
    if (!savedTheme) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    return savedTheme;
  });

  useEffect(() => {
    const root = document.documentElement;

    // Remover la clase anterior
    root.classList.remove("light", "dark");

    // Agregar la nueva clase
    root.classList.add(theme);

    // Guardar en localStorage
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // localStorage no disponible (Safari privado, etc.)
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      isDark: theme === "dark",
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
