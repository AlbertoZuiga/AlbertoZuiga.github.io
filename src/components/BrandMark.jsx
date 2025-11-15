import { Link } from "react-router-dom";

const sizeMap = {
  xs: "h-6 w-6",
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
  xl: "h-16 w-16",
};

const BrandMark = ({
  to = "/",
  withLink = true,
  size = "md",
  className = "",
  title = "Inicio",
  ariaLabel = "Ir al inicio",
}) => {
  const sizeClass = sizeMap[size] || sizeMap.md;

  const Img = (
    <img
      src="/favicon.svg"
      alt="Marca personal de Alberto Zúñiga"
      className={`${sizeClass} rounded-2xl shadow-md ring-1 ring-white/10 dark:ring-white/10 ${className}`}
      loading="eager"
      decoding="async"
      draggable={false}
    />
  );

  if (!withLink) return Img;

  return (
    <Link
      to={to}
      aria-label={ariaLabel}
      title={title}
      className="inline-flex items-center justify-center rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-transform hover:scale-105 p-0.5"
    >
      <span className="sr-only">{title}</span>
      {Img}
    </Link>
  );
};

export default BrandMark;
