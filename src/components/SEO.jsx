import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ 
  title = "Alberto Zúñiga - Desarrollador Full Stack", 
  description = "Portafolio de Alberto Zúñiga. Desarrollador Full Stack especializado en React, Node.js y Python. Proyectos interactivos y experiencia profesional.",
  image = "/og-image.png",
  url = "https://albertozuiga.github.io",
  type = "website",
  keywords = "Alberto Zúñiga, desarrollador, full stack, React, JavaScript, portfolio, web developer"
}) => {
  // URL completa de la imagen para OG
  const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`;
  
  return (
    <Helmet>
      {/* Meta Tags Básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Alberto Zúñiga Portfolio" />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional SEO */}
      <meta name="author" content="Alberto Zúñiga" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  keywords: PropTypes.string,
};

export default SEO;
