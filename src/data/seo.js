import { site } from "./site.js";

// Metadatos SEO/OG por ruta. Fuente única para <SEO /> (runtime)
// y scripts/prerender.mjs (HTML estático para crawlers).
export const seoPages = {
  "/": {
    title: "Alberto Zúñiga - Desarrollador Full Stack | Portfolio",
    description:
      "Portafolio de Alberto Zúñiga: Desarrollador Full Stack e Ingeniero Civil en Ciencias de la Computación. Construyo aplicaciones web con Python, JavaScript y React.",
    url: site.baseUrl,
    image: "/og-image.png",
    keywords:
      "Alberto Zúñiga, desarrollador full stack, ingeniería computación, Python, JavaScript, Ruby on Rails, Flask, portfolio, Universidad de los Andes",
  },
  "/about": {
    title: "Sobre Mí - Alberto Zúñiga | CV y Experiencia",
    description:
      "Currículum vitae de Alberto Zúñiga. Experiencia en desarrollo web, formación académica en Ingeniería en Ciencias de la Computación, habilidades técnicas en React, Python, Java y más.",
    url: `${site.baseUrl}/about`,
    image: "/og/about.png",
    keywords:
      "Alberto Zúñiga CV, experiencia laboral, ingeniería computación, desarrollador, Universidad de los Andes, habilidades técnicas",
  },
  "/projects": {
    title: "Proyectos - Alberto Zúñiga | Portfolio de Desarrollo Web",
    description:
      "Proyectos de desarrollo web: Scheduler App (Flask/Python), Healthy (Ruby on Rails), aplicaciones interactivas con JavaScript. Backend y frontend.",
    url: `${site.baseUrl}/projects`,
    image: "/og/projects.png",
    keywords:
      "proyectos web, Python, Flask, Ruby on Rails, JavaScript, desarrollo full stack, aplicaciones web, portfolio proyectos",
  },
  "/projects/calculator": {
    title: "Calculadora Interactiva - Alberto Zúñiga",
    description:
      "Calculadora funcional con JavaScript. Operaciones básicas, soporte para teclado, interfaz responsive. Proyecto interactivo del portfolio.",
    url: `${site.baseUrl}/projects/calculator`,
    image: "/og/calculator.png",
    keywords:
      "calculadora JavaScript, proyecto web, calculadora interactiva, desarrollo frontend, programación",
  },
  "/projects/clock": {
    title: "Reloj Digital - Alberto Zúñiga",
    description:
      "Reloj digital interactivo con JavaScript. Formato 12/24 horas, precisión ajustable, navegación por teclado. Proyecto web del portfolio.",
    url: `${site.baseUrl}/projects/clock`,
    image: "/og/clock.png",
    keywords:
      "reloj digital, proyecto JavaScript, reloj tiempo real, desarrollo web, programación",
  },
  "/projects/tic-tac-toe": {
    title: "Tic-Tac-Toe - Alberto Zúñiga",
    description:
      "Juego de Tres en Línea (Tic-Tac-Toe) con JavaScript. Sistema de puntuación, detección de ganador, navegación por teclado. Proyecto interactivo.",
    url: `${site.baseUrl}/projects/tic-tac-toe`,
    image: "/og/tic-tac-toe.png",
    keywords:
      "tic-tac-toe, tres en línea JavaScript, juego interactivo, desarrollo web, programación",
  },
  "/projects/camera": {
    title: "Cámara Web - Alberto Zúñiga",
    description:
      "Aplicación de cámara web con JavaScript. Captura de fotos, grabación de video, acceso a MediaDevices API. Proyecto web del portfolio.",
    url: `${site.baseUrl}/projects/camera`,
    image: "/og/camera.png",
    keywords:
      "cámara web, MediaDevices API, captura video JavaScript, getUserMedia, desarrollo web",
  },
  "/projects/arbocensus": {
    title: "Arbocensus - Alberto Zúñiga",
    description:
      "Proyecto de título: optimización de rutas para censo de árboles urbanos. mTSP resuelto con OR-Tools y OSRM sobre Django + PostGIS, frontend en React con Leaflet.",
    url: `${site.baseUrl}/projects/arbocensus`,
    image: "/og/arbocensus.png",
    keywords:
      "Arbocensus, censo de árboles, optimización de rutas, mTSP, OR-Tools, OSRM, Django, PostGIS, proyecto de título",
  },
  "/projects/scheduler": {
    title: "Scheduler App - Alberto Zúñiga",
    description:
      "Coordinación de disponibilidad horaria en grupos con Flask: Google OAuth 2.0, roles, categorías con filtros y división automática de subgrupos. Dockerizada con PostgreSQL.",
    url: `${site.baseUrl}/projects/scheduler`,
    image: "/og/scheduler.png",
    keywords:
      "Scheduler App, Flask, Python, horarios, disponibilidad, Google OAuth, PostgreSQL, Docker",
  },
  "/projects/healthy": {
    title: "Healthy - Alberto Zúñiga",
    description:
      "Recomendación de planes saludables de comida integrada con compras y entregas. Ruby on Rails 8, Hotwire, Devise y CanCanCan.",
    url: `${site.baseUrl}/projects/healthy`,
    image: "/og/healthy.png",
    keywords:
      "Healthy, Ruby on Rails, planes de comida, recomendación, Hotwire, Devise, PostgreSQL",
  },
  "/contact": {
    title: "Contacto - Alberto Zúñiga | Hablemos de tu Proyecto",
    description:
      "Contacta a Alberto Zúñiga. Ingeniero Civil en Ciencias de la Computación disponible para proyectos de desarrollo web. Email: a.zuniga.marinovic@gmail.com",
    url: `${site.baseUrl}/contact`,
    image: "/og-image.png",
    keywords:
      "contacto Alberto Zúñiga, colaboración desarrollo web, freelance developer, contratar desarrollador",
  },
};
