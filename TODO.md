# 📋 TODO - Lista de Tareas y Mejoras

**Proyecto**: Portafolio Personal - Alberto Zúñiga  
**Última actualización**: 26 de Septiembre, 2026

---

## 🎯 Leyenda de Prioridades

- 🔴 **ALTA** - Crítico para funcionalidad o experiencia de usuario
- 🟡 **MEDIA** - Importante pero no bloqueante
- 🟢 **BAJA** - Nice to have, mejoras opcionales
- 🔵 **FUTURO** - Ideas para versiones futuras

---

## 🔴 PRIORIDAD ALTA

### 1. Limpieza de código (commits atómicos)

**Prioridad**: 🔴 ALTA  
**Estimación**: 2-3 días  
**Impacto**: ⭐⭐⭐⭐⭐  
**Ramas**: una por fase, desde `main` (Fase 0: `chore/cleanup` ✅, Fase 1: `fix/lint-and-bugs` ✅, Fase 2: `refactor/dead-code` ✅, Fase 3: `refactor/modularization` ✅, Fase 4: `refactor/dependencies` ✅, Fase 5: `docs/readme` ✅)

Estado actual (26 Sep 2026): Fases 0-5 completadas. Lint 0/0, Prettier en CI, sin `react-helmet-async` ni `--legacy-peer-deps`.

Cada commit debe pasar `npm run lint && npm run format:check && npm run build` por sí solo.

#### Bugs detectados

| #   | Archivo                             | Problema                                                                                                                           |
| --- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| B1  | `CameraProject.jsx`                 | Cleanup del `useEffect` cierra sobre `stream = null` → la cámara nunca se apaga al desmontar. StrictMode filtra un segundo stream. |
| B2  | `CameraProject.jsx`                 | Blob `video/mp4` descargado como `.webm`. Usar `mediaRecorder.mimeType`.                                                           |
| B3  | `CameraProject.jsx`                 | Listener de teclado con `toggleRecording`/`takePicture` obsoletos (deps incompletas).                                              |
| B4  | `TicTacToeProject.jsx`              | `restartGame` obsoleto en listener; `setTimeout(100)` innecesario para scores.                                                     |
| B5  | `ClockProject.jsx`                  | Locale `es-CH` (Suiza) en vez de `es-CL`.                                                                                          |
| B6  | `Contact.jsx` / `emailjs.config.js` | Form envía `name/email/subject/message`; comentario de plantilla dice `from_name/from_email`. Verificar plantilla real en EmailJS. |
| B7  | `CalculatorProject.jsx`             | `currentValue \|\| 0` redundante; división por cero muestra `Infinity`.                                                            |
| B8  | `Footer.jsx`                        | Clase `xs:inline` no existe (no hay breakpoint `xs`).                                                                              |
| B9  | `PageTransition.jsx`                | Define `exit` pero no hay `AnimatePresence` en `App.jsx`.                                                                          |
| B10 | `ThemeContext.jsx`                  | `localStorage` sin try/catch → revienta en Safari privado.                                                                         |

#### Fase 0 — Tooling

- [x] C1 `chore`: agregar `eslint-plugin-react` (elimina 12 falsos positivos de `motion` sin usar); desactivar `react/prop-types` temporalmente
- [x] C2 `chore`: agregar Prettier (`.prettierrc`, `.prettierignore`, `.editorconfig`, scripts `format` / `format:check`) sin formatear aún
- [x] C3 `style`: formatear todo con Prettier (solo whitespace/comillas, verificar con `git diff -w`)
- [x] C4 `ci`: correr `npm run lint` y `npm run format:check` antes del build en `static.yml`

#### Fase 1 — Lint a cero y bugs

- [x] C5 `fix`: eliminar imports sin usar (`staggerContainer`/`staggerItem` en About, `fadeIn` en Camera, `scaleIn` en TicTacToe, catch vars en Camera)
- [x] C6 `refactor`: mover `useTheme` a `src/hooks/useTheme.js` (react-refresh); try/catch en localStorage (B10); unificar `window` vs `globalThis`
- [x] C7 `fix(camera)`: `streamRef` + cleanup correcto (B1); `useCallback` en handlers de teclado (B3); quitar `console.log`
- [x] C8 `fix(camera)`: usar `mimeType` real del MediaRecorder y extensión derivada (B2)
- [x] C9 `fix(tictactoe)`: `WINNING_COMBINATIONS` fuera del componente; `useCallback` en `restartGame`/`resetAll`; scores síncronos; renombrar `isDraw_` (B4)
- [x] C10 `fix(clock)`: locale `es-CL` (B5)
- [x] C11 `fix`: quitar `xs:inline` en Footer → `hidden sm:inline` (B8)
- [x] C12 `fix(calculator)`: quitar `|| 0`; división por cero → `"Error"` (B7)
- [x] ✔ Checkpoint: `npm run lint` = 0 errores, 0 warnings

#### Fase 2 — Código muerto

- [x] C13 `refactor`: eliminar `slideLeft`, `slideRight`, `hoverScale`, `tapScale`, `floatAnimation` de `animations.js`; `.animate-fade-in`, `.animate-blob`, `.animation-delay-*`, `.btn-secondary`, `.sr-only` custom de `index.css`; `useEffect` de `document.title` en `SEO.jsx`

#### Fase 3 — Modularización

- [x] C14 `refactor`: extraer datos a `src/data/` (`skills.js`, `projects.js`, `navLinks.js`, `cv.js`, `site.js`); páginas renderizan con `.map()`
- [x] C15 `refactor(about)`: `AccordionSection` (con `<button>` nativo, elimina `handleKeyDown`) + `SkillRow` (corrige `dark:border` faltante)
- [x] C16 `refactor(home)`: `SkillCard`; agregar `propTypes` a `BrandMark`, `SkillCard`, `AccordionSection`, `SkillRow`; reactivar `react/prop-types`
- [x] C17 `refactor(navbar)`: `ThemeToggle` (elimina duplicado), `NavLink` de react-router desde `navLinks.js`, usar `BrandMark` en vez de `<img>` inline (agregar tamaño responsive `nav` a `sizeMap`)
- [x] C18 `refactor`: `BackToProjects` con `variant`; agregarlo a Camera (única página sin el link)
- [x] C19 `refactor`: mover `<Toaster>` a `App.jsx` y respetar dark mode
- [x] C20 `feat`: `AnimatePresence mode="wait"` en `App.jsx` con `AppRoutes` (B9)

#### Fase 4 — Dependencias

- [x] C21 `refactor`: reemplazar `react-helmet-async` por `<title>`/`<meta>` nativos de React 19; JSON-LD estático en `index.html`; quitar metas duplicadas de `index.html`; CI `npm ci` sin `--legacy-peer-deps`
- [x] C22 `chore`: `npx update-browserslist-db@latest` + `baseline-browser-mapping@latest`

#### Fase 5 — Docs

- [x] C23 `docs`: crear `.env.example`; quitar referencias a `EMAILJS_SETUP.md` / `LINKEDIN_PREVIEW_SETUP.md` (no existen); alinear comentario de plantilla EmailJS con nombres reales del form (B6); README con `data/`, `hooks/`, componentes nuevos
- [x] C24 `docs`: actualizar TODO.md (26 Sep 2026)

#### Verificación manual (tras Fase 3 y C21)

- [ ] Cada ruta carga; título del tab correcto; toggle dark mode desktop y mobile
- [ ] Camera: navegar fuera apaga el LED (B1); video descargado reproduce (B2); atajos funcionan tras grabar (B3)
- [ ] TicTacToe: `N` alterna jugador inicial correctamente; scores sin delay (B4)
- [ ] Clock: fecha `dd-mm-yyyy` (B5)
- [ ] Contact: mensaje real llega con todos los campos (B6); toast visible en dark mode
- [ ] Transición de salida entre rutas (C20)
- [ ] DevTools `<head>`: sin `<title>`/`og:*` duplicados (C21)

---

### 2. Meta Tags Dinámicos por Página (SEO) — pendientes

**Prioridad**: 🔴 ALTA  
**Estimación**: medio día  
**Impacto**: ⭐⭐⭐  
**Estado**: ⏳ Parcial (componente `SEO.jsx`, `og-image.png`, JSON-LD, sitemap y robots ya hechos)  
**Rama**: `feat/prerender-seo`

Hallazgo (26 Sep 2026): los scrapers no ejecutan JS, así que las metas de `SEO.jsx` nunca llegaban a Facebook/LinkedIn/Twitter. `curl` a la URL pública: `/` devolvía 0 metas `og:*`; `/projects/camera` devolvía `404.html`.

**Tareas**:

- [x] Crear imágenes OG por página (1200×630px) en `/public/og/` (`scripts/generate-og.mjs`):
  - [x] About
  - [x] Projects
  - [x] Cada proyecto individual
- [x] Prerender estático por ruta (`scripts/prerender.mjs` en `npm run build`): `dist/<ruta>/index.html` con `<title>`, `canonical`, `og:*` y `twitter:*` desde `src/data/seo.js` (fuente única, las páginas hacen `<SEO {...seoPages[ruta]} />`); `main.jsx` quita las etiquetas `[data-prerender]` antes de montar React
- [x] Verificación manual tras merge: `curl -A facebookexternalhit https://albertozuiga.github.io/projects/camera` devuelve 200 con `og:image` de camera; DevTools `<head>` sin metas duplicadas tras hidratar (26 Sep 2026: `curl -L` → 301 a `/projects/camera/` → 200 con `og/camera.png`; head hidratado sin duplicados en las 8 rutas. Bug hallado y corregido: `SEO.jsx` resolvía `og:image` contra `url` de página en vez de `site.baseUrl` → `/projects/camera/og/camera.png` tras hidratar)
- [ ] Testing con herramientas SEO (requiere deploy a `production`; las 3 leen la URL pública):
  - [ ] Facebook Sharing Debugger
  - [ ] Twitter Card Validator
  - [ ] LinkedIn Post Inspector

---

## 🟡 PRIORIDAD MEDIA

### 3. Deuda técnica (detectada en análisis del 26 Sep 2026)

**Prioridad**: 🟡 MEDIA  
**Estimación**: variable

- [ ] Tests unitarios con Vitest: extraer `calculate()` (Calculator) y `checkWin()` (TicTacToe) a `src/utils/` como funciones puras y testearlas (ver #10)
- [ ] Code-splitting de rutas con `React.lazy` + `Suspense` (bundle 466 kB / 140 kB gzip; framer-motion es el mayor peso)
- [ ] Migrar Tailwind 3.4 → 4
- [ ] Decidir: quitar `prop-types` y pasar a TypeScript (o JSDoc con `checkJs`)
- [ ] Documentar `scripts/generate-favicons.mjs` en README
- [x] Definir estilo de toast en dark mode una vez movido a `App.jsx` (C19: fondo gray-100 / texto gray-900)

---

### 4. Progressive Web App (PWA)

**Prioridad**: 🟡 MEDIA  
**Estimación**: 1-2 días  
**Impacto**: ⭐⭐⭐⭐

**Tareas**:

- [ ] Instalar `vite-plugin-pwa`
- [ ] Crear `manifest.json` (nombre, íconos 192/512 — ya existen en `/public`, colores, `display: standalone`)
- [ ] Configurar Service Worker
- [ ] Estrategia de caché: cache-first para assets, network-first para páginas
- [ ] Testing de instalación: Android, iOS (limitado), Desktop
- [ ] Banner de instalación personalizado
- [ ] Funcionalidad offline básica

```bash
npm install -D vite-plugin-pwa
```

---

### 5. Analytics y Monitoreo

**Prioridad**: 🟡 MEDIA  
**Estimación**: 1 día  
**Impacto**: ⭐⭐⭐

**Tareas**:

- [ ] Configurar Google Analytics 4 (cuenta, Measurement ID, gtag en `index.html`) o alternativa privacy-friendly (Plausible)
- [ ] Eventos personalizados: clic en proyectos, uso de calculadora/reloj/cámara, envío de formulario
- [ ] Metas y conversiones
- [ ] Testing de tracking

---

### 6. Mejoras en About.jsx

**Prioridad**: 🟡 MEDIA  
**Estimación**: 2 días  
**Impacto**: ⭐⭐⭐⭐  
**Depende de**: C14/C15 (datos en `cv.js`, `AccordionSection`)

**Tareas**:

- [ ] Timeline visual de experiencia (línea vertical con puntos, fechas destacadas)
- [ ] Sección de certificaciones (badges, links a credenciales)
- [ ] Gráficos de habilidades (barras de progreso)
- [ ] Botón de descarga de CV en PDF
- [ ] Mejorar diseño de acordeones

---

### 7. Filtros y Búsqueda en Proyectos

**Prioridad**: 🟡 MEDIA  
**Estimación**: 1 día  
**Impacto**: ⭐⭐⭐  
**Depende de**: C14 (`projects.js`)

**Tareas**:

- [ ] Agregar tags/categoría/dificultad a cada proyecto en `projects.js`
- [ ] Filtros por categoría (múltiple, reset)
- [ ] Barra de búsqueda en tiempo real (nombre, descripción)
- [ ] Ordenamiento (fecha, nombre)
- [ ] Contador de resultados y animación al filtrar

---

## 🟢 PRIORIDAD BAJA

### 8. Internacionalización (i18n)

**Prioridad**: 🟢 BAJA  
**Estimación**: 3-4 días  
**Impacto**: ⭐⭐⭐  
**Depende de**: C14 (textos centralizados en `src/data/`)

**Tareas**:

- [ ] Instalar `react-i18next` + `i18next`
- [ ] Archivos `es.json` / `en.json`
- [ ] Traducir todos los textos
- [ ] Selector de idioma en Navbar con persistencia en localStorage
- [ ] Fechas localizadas
- [ ] Testing en ambos idiomas

---

### 9. Blog o Sección de Artículos

**Prioridad**: 🟢 BAJA  
**Estimación**: 5-7 días  
**Impacto**: ⭐⭐⭐⭐

**Tareas**:

- [ ] Decidir enfoque: Markdown estático / CMS headless / integración Medium-Dev.to
- [ ] Si Markdown: parser, `/content/blog`, componente de post, lista con preview, syntax highlighting, metadata
- [ ] Categorías y tags, búsqueda, RSS feed
- [ ] Comentarios (utterances) y compartir en redes

---

### 10. Tests Unitarios y E2E

**Prioridad**: 🟢 BAJA (subir a MEDIA junto con #3)  
**Estimación**: 4-5 días  
**Impacto**: ⭐⭐⭐

**Tareas**:

- [ ] Configurar Vitest + React Testing Library
- [ ] Tests unitarios: lógica de Calculadora, ganador de TicTacToe, componentes básicos
- [ ] Tests de integración: navegación, formulario de contacto
- [ ] Playwright para E2E: flujo de navegación, proyectos interactivos, formulario
- [ ] Ejecutar tests en GitHub Actions; coverage reports

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
npm install -D @playwright/test
```

---

### 11. Scroll to Top y Breadcrumbs

**Prioridad**: 🟢 BAJA  
**Estimación**: 3-4 horas  
**Impacto**: ⭐⭐

**Tareas**:

- [ ] Botón Scroll to Top (aparece tras scroll, animación, smooth scroll, fixed bottom-right)
- [ ] Breadcrumbs: componente reutilizable generado desde la ruta actual, implementado en proyectos

---

## 🔵 FUTURO / IDEAS

### 12. Sistema de Autenticación (Admin)

Panel de administración para editar contenido (Firebase Auth / Auth0), CRUD de proyectos desde UI, editar About sin tocar código.

### 13. Modo de Presentación

Fullscreen para mostrar proyectos, navegación con flechas, sin navbar/footer. Útil en entrevistas.

### 14. Easter Eggs y Juegos Ocultos

Konami Code, Snake en consola, efectos en fechas especiales, modo Matrix.

### 15. Integración con GitHub API

Repos reales, estadísticas de commits, lenguajes más usados, contribuciones recientes.

### 16. Versión de Consola

Terminal interactiva en el sitio con comandos `help`, `about`, `projects`, `contact`, ASCII art.

---

## 📊 Resumen de Prioridades

| Prioridad | Cantidad | Tiempo Total Estimado    |
| --------- | -------- | ------------------------ |
| 🔴 ALTA   | 2 tareas | 3 días                   |
| 🟡 MEDIA  | 5 tareas | 6-8 días + deuda técnica |
| 🟢 BAJA   | 4 tareas | 13-17 días               |
| 🔵 FUTURO | 5 ideas  | -                        |

---

## 🎯 Roadmap Sugerido

### Sprint 0 (1 semana) - Limpieza ⏳ Siguiente

1. Limpieza de código (24 commits atómicos)
2. Imágenes OG por página + validación en debuggers

### Sprint 1 (1-2 semanas) - Fundamentos ✅ Completado

- Dark Mode, Navbar responsive, Formulario de contacto, Responsividad móvil, SEO base

### Sprint 2 (2-3 semanas) - Mejoras UX ⏳ Parcial

- ✅ Animaciones (framer-motion)
- ✅ Sitemap / robots.txt
- ✅ Toast notifications
- [ ] PWA
- [ ] Analytics

### Sprint 3 (3-4 semanas) - Contenido

- Mejoras en About
- Filtros en Proyectos
- Scroll to Top / Breadcrumbs
- Tests unitarios (lógica pura)

### Sprint 4+ (Opcional) - Avanzado

- i18n, Blog, E2E, ideas futuras

---

## ✅ Completadas

- [x] Estructura básica del proyecto, routing, diseño responsive básico
- [x] 4 proyectos interactivos funcionales con navegación por teclado
- [x] Accesibilidad básica (ARIA, roles)
- [x] Deployment a GitHub Pages con GitHub Actions
- [x] README.md completo
- [x] **Navbar responsive con menú hamburguesa** (12 Nov 2025)
- [x] **Mejoras de responsividad para iPhone y móviles** (12 Nov 2025)
- [x] **Formulario de Contacto Funcional** con EmailJS, validación, honeypot y toast (12 Nov 2025)
- [x] **Dark Mode / Tema Oscuro** con ThemeContext, persistencia y detección del sistema (13 Nov 2025)
- [x] **Meta tags dinámicos por página** con `SEO.jsx` + `react-helmet-async` (14 Nov 2025)
- [x] **JSON-LD** (Person, WebSite)
- [x] **Sitemap.xml y robots.txt**
- [x] **Imagen OG principal** (`public/og-image.png`)
- [x] **Favicons** (SVG, PNG, ICO, apple-touch) generados con `scripts/generate-favicons.mjs` + componente `BrandMark`
- [x] **Toast notifications** con `react-hot-toast`
- [x] **Animaciones con framer-motion**: variantes reutilizables (`utils/animations.js`), `PageTransition`, animaciones de entrada y scroll en todas las páginas, `prefers-reduced-motion`
- [x] **Análisis de limpieza de código** y plan de commits atómicos (26 Sep 2026)

---

## 📝 Notas

- **Actualizar este archivo** al completar tareas
- **Crear branches** para cada feature nueva
- **Commits descriptivos** siguiendo conventional commits
- **Lint + format + build** deben pasar antes de cada commit (desde C4, CI lo exige)
- **Testing** antes de merge a `main`
- **Deploy** solo cuando desarrollo esté estable

---

**Última revisión**: 26 de Septiembre, 2026  
**Mantenido por**: Alberto Zúñiga
