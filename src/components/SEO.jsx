import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const SEO = ({ 
  title = "Alberto Zúñiga - Desarrollador Full Stack", 
  description = "Portafolio de Alberto Zúñiga. Desarrollador Full Stack con experiencia en Python, JavaScript, Ruby on Rails, Flask y más. Estudiante de Ingeniería en Ciencias de la Computación.",
  image = "/og-image.png",
  url = "https://albertozuiga.github.io",
  type = "website",
  keywords = "Alberto Zúñiga, desarrollador full stack, Python, JavaScript, Ruby on Rails, Flask, portfolio, desarrollo web"
}) => {
  // URL completa de la imagen para OG
  const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`;
  
  // Forzar actualización del título en el DOM
  useEffect(() => {
    document.title = title;
  }, [title]);
  
  return (
    <Helmet prioritizeSeoTags>
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
      <meta property="og:image:secure_url" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Alberto Zúñiga Portfolio" />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional SEO */}
      <meta name="author" content="Alberto Zúñiga" />
      <meta name="robots" content="index, follow" />

      {/* JSON-LD: Person */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Alberto Zúñiga',
          url,
          image: fullImageUrl,
          jobTitle: 'Desarrollador Full Stack',
          sameAs: [
            'https://github.com/AlbertoZuiga',
            'https://www.linkedin.com/in/alberto-zuniga-marinovic/'
          ]
        })}
      </script>

      {/* JSON-LD: WebSite */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Alberto Zúñiga Portfolio',
          url,
          inLanguage: 'es-CL'
        })}
      </script>
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
