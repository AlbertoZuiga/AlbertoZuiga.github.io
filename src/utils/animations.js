/**
 * Variantes de animación reutilizables para Framer Motion
 * Configuradas para respetar prefers-reduced-motion
 */

// Detectar preferencia de movimiento reducido
const shouldReduceMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Duración base de las animaciones (se reduce en móviles)
const getDuration = (base = 0.5) => {
  if (shouldReduceMotion()) return 0.1;
  return base;
};

// Fade In - Elemento aparece con opacidad
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: getDuration(0.5) }
  }
};

// Slide Up - Elemento sube desde abajo
export const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: getDuration(0.6),
      ease: "easeOut" 
    }
  }
};

// Slide Down - Elemento baja desde arriba
export const slideDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: getDuration(0.6),
      ease: "easeOut" 
    }
  }
};

// Slide Left - Elemento entra desde la derecha
export const slideLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: getDuration(0.6),
      ease: "easeOut" 
    }
  }
};

// Slide Right - Elemento entra desde la izquierda
export const slideRight = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: getDuration(0.6),
      ease: "easeOut" 
    }
  }
};

// Scale In - Elemento crece desde el centro
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: getDuration(0.5),
      ease: "easeOut" 
    }
  }
};

// Stagger Container - Para animar listas de elementos
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: shouldReduceMotion() ? 0 : 0.1,
      delayChildren: shouldReduceMotion() ? 0 : 0.1
    }
  }
};

// Stagger Item - Hijo de staggerContainer
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: getDuration(0.5) 
    }
  }
};

// Page Transition - Para transiciones entre páginas
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: getDuration(0.4),
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: getDuration(0.3) 
    }
  }
};

// Hover Scale - Para botones y elementos interactivos
export const hoverScale = {
  scale: shouldReduceMotion() ? 1 : 1.05,
  transition: { duration: 0.2 }
};

// Tap Scale - Para feedback al hacer clic
export const tapScale = {
  scale: shouldReduceMotion() ? 1 : 0.95
};

// Float Animation - Movimiento flotante sutil
export const floatAnimation = {
  y: shouldReduceMotion() ? 0 : [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Configuración de viewport para animaciones scroll
export const viewportConfig = {
  once: true, // Animar solo una vez
  amount: 0.2, // 20% del elemento visible para activar
  margin: "0px 0px -100px 0px" // Activar antes de que sea completamente visible
};
