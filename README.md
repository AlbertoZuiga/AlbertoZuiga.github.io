# 🌐 Portafolio Personal - Alberto Zúñiga

Sitio web personal y portafolio profesional desarrollado con React, Vite y Tailwind CSS. Desplegado en GitHub Pages.

🔗 **Demo en vivo**: [albertozuiga.github.io](https://albertozuiga.github.io)

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Proyectos Incluidos](#-proyectos-incluidos)
- [Navegación](#-navegación)
- [Deployment](#-deployment)
- [Contacto](#-contacto)

---

## ✨ Características

### Páginas Principales

- **🏠 Home**: Página de inicio con presentación y competencias técnicas organizadas por categorías
- **👤 About**: CV interactivo con acordeones animados, timeline de experiencia, barras de nivel y descarga en PDF
- **💼 Projects**: Galería de proyectos interactivos
- **📧 Contact**: Información de contacto y redes sociales

### Proyectos Interactivos

1. **🧮 Calculadora**: Calculadora funcional con soporte de teclado y repetición de última operación
2. **⏰ Reloj**: Reloj digital y analógico con control de precisión y formatos
3. **📷 Cámara**: Captura de fotos y videos con la webcam, incluyendo mirror mode
4. **🎮 Tres en Línea**: Juego de TicTacToe con sistema de puntuación diferenciado

### Características Técnicas

- ✅ **Responsive Design**: Adaptado a móviles, tablets y desktop
- ✅ **Accesibilidad (a11y)**: ARIA labels, keyboard navigation, screen reader support
- ✅ **SEO Optimizado**: Meta tags, Open Graph, Twitter Cards
- ✅ **SPA Routing**: Navegación con React Router DOM v7
- ✅ **Dark Mode**: `ThemeContext` + `useTheme`, persistencia en localStorage y detección del sistema
- ✅ **Animaciones**: framer-motion con variantes reutilizables, `PageTransition` y `AnimatePresence`, respeta `prefers-reduced-motion`
- ✅ **Formulario de contacto**: EmailJS con validación, honeypot y toasts (`react-hot-toast`)
- ✅ **GitHub Pages Compatible**: Script de routing para SPA en GitHub Pages
- ✅ **Code-splitting**: cada ruta es un chunk propio (`React.lazy` + `Suspense`)
- ✅ **CI**: lint + format check + tests + build en GitHub Actions antes de desplegar

---

## 🛠 Tecnologías

### Frontend

- **React** 19 - Biblioteca UI (metas de `<head>` nativas, sin react-helmet)
- **React Router DOM** 7 - Enrutamiento SPA
- **Tailwind CSS** 4 - Framework CSS utility-first (`@theme` en `index.css`, plugin `@tailwindcss/vite`)
- **framer-motion** 12 - Animaciones
- **react-hot-toast** 2 - Notificaciones
- **@emailjs/browser** 4 - Envío del formulario de contacto
- **prop-types** - Validación de props en componentes
- **Vite** 7 - Build tool y dev server

### Desarrollo

- **ESLint** 9 - Linting (react, react-hooks, react-refresh)
- **Prettier** 3 - Formateo
- **Vitest** 4 - Tests unitarios de la lógica pura (`src/utils/`)

### Deployment

- **gh-pages** 6.3.0 - Despliegue a GitHub Pages

---

## 📁 Estructura del Proyecto

```
.
├── .github/workflows/
│   └── static.yml            # CI: lint + format:check + build + deploy a Pages
├── public/
│   ├── 404.html              # Redirección SPA para GitHub Pages
│   ├── favicon.*, android-chrome-*.png, apple-touch-icon.png
│   ├── og-image.png          # Imagen Open Graph principal
│   ├── og/                   # Imágenes OG por página (about, projects, proyectos)
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/
│   ├── generate-favicons.mjs # Genera PNG/ICO desde favicon.svg
│   ├── generate-og.mjs       # Genera imágenes OG 1200×630 en public/og
│   └── prerender.mjs         # Post-build: dist/<ruta>/index.html con metas OG estáticas
├── src/
│   ├── components/
│   │   ├── AccordionSection.jsx  # Acordeón accesible (About)
│   │   ├── BackToProjects.jsx    # Link "Volver a proyectos" (variant)
│   │   ├── BrandMark.jsx         # Logo/isotipo con tamaños responsive
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx            # NavLink desde data/navLinks.js
│   │   ├── PageTransition.jsx    # Wrapper framer-motion por ruta
│   │   ├── SEO.jsx               # <title>/<meta> nativos de React 19
│   │   ├── SkillCard.jsx         # Tarjeta de competencias (Home)
│   │   ├── SkillRow.jsx          # Nombre, nivel y barra de progreso (About)
│   │   ├── Timeline.jsx          # Línea de tiempo (About)
│   │   └── ThemeToggle.jsx       # Botón dark/light
│   ├── config/
│   │   └── emailjs.config.js     # Credenciales EmailJS desde import.meta.env
│   ├── context/
│   │   └── ThemeContext.jsx      # Provider del tema
│   ├── data/
│   │   ├── cv.js                 # Experiencia, educación, etc. (About)
│   │   ├── navLinks.js           # Rutas del Navbar
│   │   ├── projects.js           # Galería de proyectos
│   │   ├── seo.js                # title/description/OG por ruta (SEO.jsx + prerender)
│   │   ├── site.js               # Nombre, email, URLs, redes
│   │   └── skills.js             # Competencias técnicas (Home y About)
│   ├── hooks/
│   │   └── useTheme.js           # Acceso al ThemeContext
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── CalculatorProject.jsx
│   │   ├── ClockProject.jsx
│   │   ├── CameraProject.jsx
│   │   └── TicTacToeProject.jsx
│   ├── utils/
│   │   ├── animations.js         # Variantes de framer-motion
│   │   ├── calculator.js         # calculate() + calculator.test.js
│   │   ├── skillLevel.js         # levelToPercent() + skillLevel.test.js
│   │   └── ticTacToe.js          # checkWin()/isDraw() + ticTacToe.test.js
│   ├── App.jsx                   # Rutas + AnimatePresence + Toaster
│   ├── main.jsx
│   └── index.css                 # Tailwind (@theme, dark variant) + clases utilitarias
├── .env.example                  # Variables de entorno de ejemplo
├── .prettierrc / .editorconfig
├── eslint.config.js
├── index.html                    # HTML base + JSON-LD
├── vite.config.js                # react + @tailwindcss/vite
└── TODO.md
```

---

## 🚀 Instalación

### Requisitos Previos

- Node.js >= 18.0.0
- npm >= 9.0.0

### Pasos

1. **Clonar el repositorio**

```bash
git clone https://github.com/AlbertoZuiga/AlbertoZuiga.github.io.git
cd AlbertoZuiga.github.io
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Iniciar servidor de desarrollo**

```bash
npm run dev
```

4. **Abrir en el navegador**

```
http://localhost:5173
```

---

## 💻 Uso

### Scripts Disponibles

```bash
# Desarrollo
npm run dev             # Inicia servidor de desarrollo en localhost:5173
npm run dev -- --host   # Inicia servidor accesible en red local

# Build
npm run build           # Construye para producción en /dist

# Deployment
npm run deploy          # Construye y despliega a GitHub Pages

# Calidad
npm run lint            # ESLint
npm test                # Vitest (src/utils/*.test.js)
npm run format          # Prettier --write
npm run format:check    # Prettier --check (CI)

# Preview
npm run preview         # Previsualiza build de producción
```

### Variables de Entorno

Solo el formulario de contacto las necesita (EmailJS). Sin ellas la app funciona; el envío falla.

```bash
cp .env.example .env
```

| Variable                   | Descripción                      |
| -------------------------- | -------------------------------- |
| `VITE_EMAILJS_SERVICE_ID`  | Service ID del dashboard EmailJS |
| `VITE_EMAILJS_TEMPLATE_ID` | Template ID                      |
| `VITE_EMAILJS_PUBLIC_KEY`  | Public Key                       |

La plantilla de EmailJS debe usar las variables `{{name}}`, `{{email}}`, `{{subject}}` y `{{message}}` (coinciden con los `name` de los inputs del formulario, ver `src/config/emailjs.config.js`).

En producción se inyectan como **secrets** del repositorio con los mismos nombres (ver `.github/workflows/static.yml`).

### CV en PDF

`public/cv-alberto-zuniga.pdf` se sirve desde el botón "Descargar CV" en About. La fuente es `cv/main.tex`; tras editarla, regenerar y copiar:

```bash
cd cv && latexmk -pdf main.tex && cp main.pdf ../public/cv-alberto-zuniga.pdf
```

### Favicons

`public/favicon.svg` es la fuente. Para regenerar PNG/ICO:

```bash
npx -p sharp -p to-ico node scripts/generate-favicons.mjs
```

### Imágenes Open Graph por página

`scripts/generate-og.mjs` define título, subtítulo y tags de cada página y renderiza SVG → PNG con `sharp`:

```bash
npm i --no-save sharp && node scripts/generate-og.mjs
```

### Prerender de metas por ruta

Los scrapers de Facebook/LinkedIn/Twitter no ejecutan JS y GitHub Pages responde `404.html` en rutas profundas. `npm run build` ejecuta `scripts/prerender.mjs`, que copia `dist/index.html` a `dist/<ruta>/index.html` inyectando `<title>`, `canonical` y metas `og:*`/`twitter:*` desde `src/data/seo.js`. En el navegador, `main.jsx` elimina esas etiquetas (`data-prerender`) antes de montar React para que `SEO.jsx` no las duplique.

---

## 🎨 Proyectos Incluidos

### 1. 🧮 Calculadora

**Ruta**: `/projects/calculator`

**Características**:

- Operaciones básicas (+, -, ×, ÷)
- Soporte completo de teclado
- Repetición de última operación con Enter
- Auto-focus para uso inmediato
- Manejo de decimales y errores

**Atajos de teclado**:

- `0-9`: Dígitos
- `+, -, *, /`: Operaciones
- `.`: Punto decimal
- `Enter`: Igual / Repetir última operación
- `Backspace`: Borrar
- `Escape`: Limpiar todo

---

### 2. ⏰ Reloj

**Ruta**: `/projects/clock`

**Características**:

- Reloj analógico y digital simultáneos
- Formato 12h/24h conmutable
- Precisión ajustable (0-3 decimales)
- Auto-focus para teclado

**Atajos de teclado**:

- `F`: Cambiar formato (12h/24h)
- `P`: Cambiar precisión

---

### 3. 📷 Cámara

**Ruta**: `/projects/camera`

**Características**:

- Captura de fotos (JPEG)
- Grabación de videos (extensión derivada del `mimeType` real del MediaRecorder: WebM o MP4)
- Modo espejo (mirror) activado por defecto
- Múltiples resoluciones con fallback automático
- Galería de capturas con descarga

**Atajos de teclado**:

- `Espacio`: Tomar foto
- `R`: Iniciar/detener grabación
- `M`: Activar/desactivar espejo

**Resoluciones soportadas** (con fallback):

1. 4K 60fps (3840×2160)
2. Full HD 60fps (1920×1080)
3. Video básico

---

### 4. 🎮 Tres en Línea (TicTacToe)

**Ruta**: `/projects/tictactoe`

**Características**:

- Juego clásico de 3 en línea
- Sistema de puntuación diferenciado:
  - **3 puntos**: Ganar iniciando primero
  - **5 puntos**: Ganar iniciando segundo
- Alternancia automática de turnos
- Contador de partidas
- Animaciones de victoria

**Atajos de teclado**:

- `N`: Siguiente juego
- `R`: Resetear todo (puntuación y partidas)

---

## 🧭 Navegación

### Rutas Principales

| Ruta        | Componente | Descripción             |
| ----------- | ---------- | ----------------------- |
| `/`         | Home       | Página de inicio        |
| `/about`    | About      | CV y experiencia        |
| `/projects` | Projects   | Galería de proyectos    |
| `/contact`  | Contact    | Información de contacto |

### Rutas de Proyectos

| Ruta                   | Componente        | Proyecto      |
| ---------------------- | ----------------- | ------------- |
| `/projects/calculator` | CalculatorProject | Calculadora   |
| `/projects/clock`      | ClockProject      | Reloj         |
| `/projects/camera`     | CameraProject     | Cámara Web    |
| `/projects/tictactoe`  | TicTacToeProject  | Tres en Línea |

### Navegación Especial

- **404**: Maneja rutas no encontradas con redirección
- **Botón "Volver"**: En cada proyecto para regresar a `/projects`

---

## 🚢 Deployment

### GitHub Pages

Cada push a `main` dispara `.github/workflows/static.yml`: `npm ci` → `npm run lint` → `npm run format:check` → `npm run build` (con los secrets de EmailJS) → deploy a GitHub Pages.

Deploy manual alternativo (rama `gh-pages`):

```bash
npm run deploy
```

### Configuración Necesaria

**vite.config.js**:

```javascript
export default defineConfig({
  plugins: [react()],
  base: "/", // Para GitHub Pages en dominio personalizado o usuario.github.io
});
```

Nota: en Vite no es necesario definir `homepage` en `package.json` (era común en CRA). Con `base: '/'` es suficiente para `usuario.github.io`.

### SPA Routing en GitHub Pages

El archivo `public/404.html` y el script en `index.html` permiten que las rutas de React Router funcionen correctamente en GitHub Pages.

---

## 🎯 Competencias Técnicas (Home)

### Lenguajes

- 🐍 Python
- ⚛️ JavaScript
- 💎 Ruby
- ⚙️ C++
- 🗄️ SQL

### Frameworks & Librerías

- ⚛️ React
- 🌶️ Flask
- 🎯 Django
- ⚡ FastAPI

### Herramientas

- 🔧 Git
- 🐳 Docker
- 📊 Excel

---

## 🔧 Configuración

### Tailwind CSS

Tailwind 4 no usa `tailwind.config.js`: el tema vive en `src/index.css` y el dark mode se activa con la clase `.dark` en `<html>` (`@custom-variant`).

**Colores personalizados** (`src/index.css`):

```css
@theme {
  --color-primary-50: #e6f3f9;
  --color-primary-100: #cce7f3;
  --color-primary-200: #99cfe7;
  --color-primary-300: #66b7db;
  --color-primary-400: #339fcf;
  --color-primary-500: #0073ba;
  --color-primary-600: #005c95;
  --color-primary-700: #004570;
  --color-primary-800: #002e4a;
  --color-primary-900: #001725;
}
```

**Clases utilitarias** (`index.css`):

- `.btn-primary` - Botón principal
- `.card` - Tarjeta con sombra
- `.section-title` - Título de sección
- `.section-subtitle` - Subtítulo de sección

### ESLint

Configurado para:

- React 19
- React Hooks
- Accesibilidad (jsx-a11y)
- Mejores prácticas

---

## ♿ Accesibilidad

### Características Implementadas

- ✅ **ARIA labels** en todos los elementos interactivos
- ✅ **Keyboard navigation** completa en todos los proyectos
- ✅ **Focus management** con useRef y tabIndex
- ✅ **Screen reader support** con clases sr-only y roles apropiados
- ✅ **Semantic HTML** con elementos nativos cuando es posible
- ✅ **Table headers** visibles para screen readers
- ✅ **Button roles** con manejo de teclado (Enter/Space)

### Navegación por Teclado

Todos los proyectos interactivos soportan navegación completa por teclado sin necesidad de mouse.

---

## 📊 SEO

### Meta Tags Incluidos

- ✅ Description
- ✅ Author
- ✅ Keywords
- ✅ Open Graph (Facebook)
- ✅ Twitter Cards
- ✅ Viewport (responsive)

### Meta tags por página

Cada página renderiza `<SEO title=... description=... url=... />`. React 19 eleva `<title>`, `<meta>` y `<link>` al `<head>` sin librerías. JSON-LD (Person, WebSite) estático en `index.html`.

---

## 🐛 Troubleshooting

### El servidor de desarrollo no inicia

```bash
# Eliminar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Errores de build

```bash
# Limpiar caché
npm run build -- --force
```

### 404 en GitHub Pages

- Verifica que `base` en `vite.config.js` sea correcto
- Asegúrate de que `404.html` esté en `/public`

---

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

## 📧 Contacto

**Alberto Zúñiga**

- 📧 Email: a.zuniga.marinovic@gmail.com
- 💼 LinkedIn: [alberto-zuniga-marinovic](https://www.linkedin.com/in/alberto-zuniga-marinovic/)
- 🐙 GitHub: [@AlbertoZuiga](https://github.com/AlbertoZuiga)
- 💬 WhatsApp: [+56 9 6496 2736](https://wa.me/56964962736)
