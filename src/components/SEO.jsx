import PropTypes from "prop-types";
import { site } from "../data/site";

const SEO = ({
  title = "Alberto Zúñiga - Desarrollador Full Stack",
  description = "Portafolio de Alberto Zúñiga: Desarrollador Full Stack e Ingeniero Civil en Ciencias de la Computación. Construyo aplicaciones web con Python, JavaScript y React.",
  image = "/og-image.png",
  url = site.baseUrl,
  type = "website",
  keywords = "Alberto Zúñiga, desarrollador full stack, Python, JavaScript, Ruby on Rails, Flask, portfolio, desarrollo web",
}) => {
  // URL completa de la imagen para OG
  const fullImageUrl = image.startsWith("http")
    ? image
    : `${site.baseUrl}${image}`;

  // React 19 eleva <title>, <meta> y <link> al <head> automáticamente
  return (
    <>
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
      <meta property="og:site_name" content={site.siteName} />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />

      {/* Additional SEO */}
      <meta name="author" content={site.name} />
      <meta name="robots" content="index, follow" />
    </>
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
