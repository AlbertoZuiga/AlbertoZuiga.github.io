import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { pageTransition } from "../utils/animations";

/**
 * Componente wrapper que agrega transiciones suaves a las páginas
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Contenido de la página
 * @param {string} props.className - Clases CSS adicionales
 */
const PageTransition = ({ children, className = "" }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default PageTransition;
