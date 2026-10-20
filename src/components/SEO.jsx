import PropTypes from "prop-types";
import { site } from "../data/site";

const OG_LOCALE = { es: "es_ES", en: "en_US" };

// Props: salida de seoFor() (src/data/seo.js) vía useSeo(ruta)
const SEO = ({
  title,
  description,
  image,
  url,
  keywords,
  lang,
  alternates,
  type = "website",
}) => {
  // URL completa de la imagen para OG
  const fullImageUrl = image.startsWith("http")
    ? image
    : `${site.baseUrl}${image}`;
  const otherLang = lang === "en" ? "es" : "en";

  // React 19 eleva <title>, <meta> y <link> al <head> automáticamente
  return (
    <>
      {/* Meta Tags Básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="es" href={alternates.es} />
      <link rel="alternate" hrefLang="en" href={alternates.en} />
      <link rel="alternate" hrefLang="x-default" href={alternates.es} />

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
      <meta property="og:locale" content={OG_LOCALE[lang]} />
      <meta property="og:locale:alternate" content={OG_LOCALE[otherLang]} />

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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  lang: PropTypes.oneOf(["es", "en"]).isRequired,
  alternates: PropTypes.shape({
    es: PropTypes.string.isRequired,
    en: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string,
};

export default SEO;
