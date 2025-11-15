# 📋 TODO - Lista de Tareas y Mejoras

**Proyecto**: Portafolio Personal - Alberto Zúñiga  
**Última actualización**: 12 de Noviembre, 2025

---

## 🎯 Leyenda de Prioridades

- 🔴 **ALTA** - Crítico para funcionalidad o experiencia de usuario
- 🟡 **MEDIA** - Importante pero no bloqueante
- 🟢 **BAJA** - Nice to have, mejoras opcionales
- 🔵 **FUTURO** - Ideas para versiones futuras

---

## 🔴 PRIORIDAD ALTA

### 1. Dark Mode / Tema Oscuro ✅
**Prioridad**: 🔴 ALTA  
**Estimación**: 2-3 días  
**Impacto**: ⭐⭐⭐⭐⭐  
**Estado**: ✅ **COMPLETADO** (13 Nov 2025)

**Tareas**:
- [x] Crear `ThemeContext.jsx` para gestión de tema
- [x] Agregar toggle de tema en `Navbar.jsx`
- [x] Implementar persistencia en `localStorage`
- [x] Actualizar `tailwind.config.js` con modo oscuro
- [x] Agregar clases `dark:` a todos los componentes:
  - [x] `Home.jsx`
  - [x] `About.jsx`
  - [x] `Projects.jsx`
  - [x] `Contact.jsx`
  - [x] `CalculatorProject.jsx`
  - [x] `ClockProject.jsx`
  - [x] `CameraProject.jsx`
  - [x] `TicTacToeProject.jsx`
  - [x] `Navbar.jsx`
  - [x] `Footer.jsx`
- [x] Iconos sol/luna para el toggle
- [x] Transición suave entre temas
- [x] Testing en todas las páginas

**Archivos creados/modificados**:
- `src/context/ThemeContext.jsx` - Context para gestión de tema
- `tailwind.config.js` - Configuración de dark mode
- `src/App.jsx` - ThemeProvider wrapper
- `src/components/Navbar.jsx` - Toggle de tema desktop y mobile
- `src/components/Footer.jsx` - Clases dark mode
- `src/pages/*.jsx` - Todas las páginas con soporte dark mode

**Beneficios**:
- ✅ Experiencia de usuario moderna
- ✅ Reduce fatiga visual
- ✅ Muy popular entre desarrolladores
- ✅ Demuestra habilidades con React Context
- ✅ Detecta preferencia del sistema automáticamente
- ✅ Persistencia en localStorage
- ✅ Transiciones suaves entre temas

---

### 2. Navbar Responsive con Menú Hamburguesa ✅
**Prioridad**: 🔴 ALTA  
**Estimación**: 1 día  
**Impacto**: ⭐⭐⭐⭐⭐  
**Estado**: ✅ **COMPLETADO** (12 Nov 2025)

**Tareas**:
- [x] Crear estado para menú móvil abierto/cerrado
- [x] Diseñar ícono hamburguesa (☰)
- [x] Implementar menú desplegable en móviles
- [x] Animación de apertura/cierre
- [x] Cerrar menú al hacer clic en un link
- [x] Breakpoint en `md:` para mostrar/ocultar
- [x] Testing en diferentes tamaños de pantalla
- [x] Iconos SVG para hamburguesa y X
- [x] Transiciones suaves con Tailwind
- [x] ARIA labels para accesibilidad

**Beneficios**:
- **Crítico** para experiencia móvil
- Navbar ahora totalmente funcional en móviles
- Mejora significativa de UX

---

### 3. Formulario de Contacto Funcional ✅
**Prioridad**: 🔴 ALTA  
**Estimación**: 2 días  
**Impacto**: ⭐⭐⭐⭐  
**Estado**: ✅ **COMPLETADO** (12 Nov 2025)

**Tareas**:
- [x] Instalar y configurar EmailJS
- [x] Crear componente de formulario en `Contact.jsx`
- [x] Campos: nombre, email, asunto, mensaje
- [x] Validación de formulario:
  - [x] Email válido
  - [x] Campos requeridos
  - [x] Longitud máxima (1000 chars para mensaje)
  - [x] Longitud mínima para cada campo
- [x] Estados de carga (loading spinner)
- [x] Mensajes de éxito/error con toast
- [x] Limpiar formulario después de enviar
- [x] Captcha básico (honeypot implementado)
- [x] Diseño responsive del formulario
- [x] Contador de caracteres para mensaje
- [x] Archivo de configuración separado
- [x] Documentación de setup completa

**Archivos creados/modificados**:
- `src/pages/Contact.jsx` - Formulario completo con validación
- `src/config/emailjs.config.js` - Configuración de EmailJS
- `EMAILJS_SETUP.md` - Documentación de configuración

**Beneficios**:
- Contacto directo sin abrir cliente de email
- Más profesional que solo links
- Validación robusta del lado del cliente
- Feedback inmediato al usuario
- Prevención de spam con honeypot

---

### 4. Meta Tags Dinámicos por Página (SEO) ✅
**Prioridad**: 🔴 ALTA  
**Estimación**: 1 día  
**Impacto**: ⭐⭐⭐⭐  
**Estado**: ✅ **COMPLETADO** (14 Nov 2025)

**Tareas**:
- [x] Instalar `react-helmet-async`
- [x] Crear componente `SEO.jsx` reutilizable
- [x] Implementar en cada página:
  - [x] Título único
  - [x] Descripción específica
  - [x] Keywords relevantes
  - [x] OG image (pendiente crear imágenes)
  - [x] OG url canónica
- [ ] Crear imágenes OG (1200×630px):
  - [ ] Home
  - [ ] About
  - [ ] Projects
  - [ ] Cada proyecto individual
- [ ] Agregar imágenes a `/public/og/`
- [x] Testing con herramientas SEO:
  - [x] Documentación completa creada
  - [ ] Facebook Sharing Debugger
  - [ ] Twitter Card Validator
  - [ ] LinkedIn Post Inspector

**Archivos creados/modificados**:
- `src/components/SEO.jsx` - Componente reutilizable
- `src/App.jsx` - HelmetProvider configurado
- `src/pages/Home.jsx` - Meta tags dinámicos
- `src/pages/About.jsx` - Meta tags dinámicos
- `src/pages/Projects.jsx` - Meta tags dinámicos
- `src/pages/Contact.jsx` - Meta tags dinámicos
- `src/pages/CalculatorProject.jsx` - Meta tags dinámicos
- `src/pages/ClockProject.jsx` - Meta tags dinámicos
- `src/pages/TicTacToeProject.jsx` - Meta tags dinámicos
- `src/pages/CameraProject.jsx` - Meta tags dinámicos
- `index.html` - Meta tags mejorados con OG completo
- `LINKEDIN_PREVIEW_SETUP.md` - Guía completa de implementación

**Dependencias instaladas**:
```bash
npm install react-helmet-async --legacy-peer-deps
```

**Beneficios**:
- ✅ Mejor posicionamiento en buscadores
- ✅ Previews atractivos al compartir en LinkedIn
- ✅ Compatible con Facebook, Twitter, LinkedIn
- ✅ Meta tags dinámicos por página
- ✅ Profesionalismo
- ⏳ Pendiente: Crear imagen OG (1200×630px)

**Próximos pasos**:
1. Crear imagen OG principal (`/public/og-image.png`)
2. Testear en LinkedIn Post Inspector
3. Opcional: Crear imágenes específicas por página

---

## 🟡 PRIORIDAD MEDIA

### 5. Mejoras de Responsividad para iPhone y Móviles ✅
**Prioridad**: 🟡 MEDIA  
**Estimación**: 2 días  
**Impacto**: ⭐⭐⭐⭐⭐  
**Estado**: ✅ **COMPLETADO** (12 Nov 2025)

**Tareas**:
- [x] Optimizar página Contact.jsx para móviles
- [x] Mejorar Footer con tamaños responsivos
- [x] Optimizar Home.jsx para pantallas pequeñas
- [x] Ajustar padding y margins para móviles
- [x] Implementar grid responsive (1 col móvil, 2+ desktop)
- [x] Tamaños de texto escalables (text-sm → text-base → text-lg)
- [x] Iconos y botones con tamaños apropiados para touch
- [x] Espaciado optimizado (gaps reducidos en móvil)
- [x] Mostrar información de contacto (email, teléfono)
- [x] Testing en simuladores de iPhone

**Archivos modificados**:
- `src/pages/Contact.jsx` - Grids, padding, texto responsive
- `src/components/Footer.jsx` - Botones y espaciado móvil
- `src/pages/Home.jsx` - Hero, cards, skills responsive

**Beneficios**:
- Experiencia perfecta en iPhone y dispositivos móviles
- Mejor uso del espacio en pantallas pequeñas
- Touch targets apropiados
- Texto legible sin zoom

---

### 6. Animaciones y Transiciones Suaves
**Prioridad**: 🟡 MEDIA  
**Estimación**: 2-3 días  
**Impacto**: ⭐⭐⭐⭐

**Tareas**:
- [ ] Instalar Framer Motion o AOS
- [ ] Animaciones de entrada en páginas:
  - [ ] Fade in general
  - [ ] Slide up para secciones
  - [ ] Stagger para listas de proyectos
- [ ] Transiciones entre rutas
- [ ] Scroll animations:
  - [ ] Fade in cuando elemento entra en viewport
  - [ ] Parallax en Home
- [ ] Animaciones en hover mejoradas
- [ ] Loading skeletons para About.jsx
- [ ] Micro-interacciones en botones
- [ ] Performance: reducir animaciones en móviles

**Dependencias**:
```bash
npm install framer-motion
# o
npm install aos
```

**Beneficios**:
- Experiencia de usuario premium
- Sitio más dinámico y moderno
- Retención de visitantes

---

### 7. Progressive Web App (PWA)
**Prioridad**: 🟡 MEDIA  
**Estimación**: 1-2 días  
**Impacto**: ⭐⭐⭐⭐

**Tareas**:
- [ ] Instalar `vite-plugin-pwa`
- [ ] Crear `manifest.json`:
  - [ ] Nombre de la app
  - [ ] Íconos (192×192, 512×512)
  - [ ] Colores de tema
  - [ ] Display: standalone
- [ ] Configurar Service Worker
- [ ] Estrategia de caché:
  - [ ] Cache-first para assets estáticos
  - [ ] Network-first para páginas
- [ ] Crear íconos en diferentes tamaños
- [ ] Testing de instalación:
  - [ ] Android
  - [ ] iOS (limitado)
  - [ ] Desktop
- [ ] Banner de instalación personalizado
- [ ] Funcionalidad offline básica

**Dependencias**:
```bash
npm install -D vite-plugin-pwa
```

**Beneficios**:
- Instalable como app nativa
- Funciona offline
- Carga más rápida en visitas repetidas
- Destaca entre portafolios

---

### 8. Analytics y Monitoreo
**Prioridad**: 🟡 MEDIA  
**Estimación**: 1 día  
**Impacto**: ⭐⭐⭐

**Tareas**:
- [ ] Configurar Google Analytics 4:
  - [ ] Crear cuenta GA4
  - [ ] Obtener Measurement ID
  - [ ] Instalar gtag en `index.html`
- [ ] Tracking de eventos personalizados:
  - [ ] Clic en proyectos
  - [ ] Descargas de CV (si se agrega)
  - [ ] Uso de calculadora/reloj/cámara
  - [ ] Envío de formulario de contacto
- [ ] Alternativa privacy-friendly: Plausible
- [ ] Dashboard para ver métricas
- [ ] Metas y conversiones
- [ ] Testing de tracking

**Beneficios**:
- Saber cuántas personas visitan tu sitio
- Entender qué proyectos son más populares
- Datos para mejorar contenido
- Profesional para mostrar en entrevistas

---

### 9. Sitemap y robots.txt
**Prioridad**: 🟡 MEDIA  
**Estimación**: 2-3 horas  
**Impacto**: ⭐⭐⭐

**Tareas**:
- [ ] Generar `sitemap.xml`:
  - [ ] Todas las rutas principales
  - [ ] Rutas de proyectos
  - [ ] Prioridades y frecuencia de cambio
- [ ] Crear `robots.txt`:
  - [ ] Allow all
  - [ ] Referencia a sitemap
- [ ] Colocar en `/public`
- [ ] Verificar en Google Search Console
- [ ] Enviar sitemap a Google
- [ ] Testing con validadores

**Beneficios**:
- Mejor indexación en buscadores
- Control sobre qué se indexa
- Acelera descubrimiento de páginas

---

### 10. Mejoras en About.jsx
**Prioridad**: 🟡 MEDIA  
**Estimación**: 2 días  
**Impacto**: ⭐⭐⭐⭐

**Tareas**:
- [ ] Timeline visual de experiencia:
  - [ ] Línea vertical con puntos
  - [ ] Fechas destacadas
  - [ ] Descripciones expandibles
- [ ] Sección de certificaciones:
  - [ ] Badges visuales
  - [ ] Links a credenciales
  - [ ] Logos de instituciones
- [ ] Galería de logros/reconocimientos
- [ ] Gráficos de habilidades (barras de progreso)
- [ ] Botón de descarga de CV en PDF
- [ ] Optimizar tablas para móviles
- [ ] Mejorar diseño de acordeones

**Beneficios**:
- CV más visual y atractivo
- Mejor presentación profesional
- Facilita lectura de experiencia

---

### 11. Filtros y Búsqueda en Proyectos
**Prioridad**: 🟡 MEDIA  
**Estimación**: 1 día  
**Impacto**: ⭐⭐⭐

**Tareas**:
- [ ] Agregar categorías a proyectos:
  - [ ] Tags (React, Python, Web APIs, etc.)
  - [ ] Tipo (Frontend, Fullstack, etc.)
  - [ ] Dificultad
- [ ] Implementar filtros:
  - [ ] Botones de categoría
  - [ ] Filtro múltiple
  - [ ] Reset filtros
- [ ] Barra de búsqueda:
  - [ ] Buscar por nombre
  - [ ] Buscar por descripción
  - [ ] Búsqueda en tiempo real
- [ ] Ordenamiento:
  - [ ] Por fecha
  - [ ] Por nombre
  - [ ] Por popularidad (si hay analytics)
- [ ] Contador de resultados
- [ ] Animación al filtrar

**Beneficios**:
- Mejor navegación cuando hay muchos proyectos
- Usuarios encuentran lo que buscan rápido
- Profesional

---

## 🟢 PRIORIDAD BAJA

### 12. Internacionalización (i18n)
**Prioridad**: 🟢 BAJA  
**Estimación**: 3-4 días  
**Impacto**: ⭐⭐⭐

**Tareas**:
- [ ] Instalar `react-i18next`
- [ ] Crear archivos de traducción:
  - [ ] `es.json` (Español)
  - [ ] `en.json` (Inglés)
- [ ] Configurar i18next
- [ ] Traducir todos los textos
- [ ] Selector de idioma en Navbar
- [ ] Persistencia de idioma en localStorage
- [ ] Fechas localizadas
- [ ] Testing en ambos idiomas

**Dependencias**:
```bash
npm install react-i18next i18next
```

**Beneficios**:
- Audiencia internacional
- Mejor para aplicar a empresas extranjeras
- Demuestra habilidades de i18n

---

### 13. Blog o Sección de Artículos
**Prioridad**: 🟢 BAJA  
**Estimación**: 5-7 días  
**Impacto**: ⭐⭐⭐⭐

**Tareas**:
- [ ] Decidir enfoque:
  - Opción A: Blog estático con Markdown
  - Opción B: CMS headless (Contentful, Strapi)
  - Opción C: Integración con Medium/Dev.to
- [ ] Si Markdown:
  - [ ] Configurar markdown parser
  - [ ] Crear carpeta `/content/blog`
  - [ ] Componente de post individual
  - [ ] Lista de posts con preview
  - [ ] Syntax highlighting para código
  - [ ] Metadata (fecha, autor, tags)
- [ ] Sistema de categorías y tags
- [ ] Búsqueda de artículos
- [ ] RSS feed
- [ ] Comentarios (Disqus o utterances)
- [ ] Compartir en redes sociales

**Beneficios**:
- Muestra conocimientos técnicos
- Mejora SEO significativamente
- Contenido fresco y dinámico
- Personal branding

---

### 14. Tests Unitarios y E2E
**Prioridad**: 🟢 BAJA  
**Estimación**: 4-5 días  
**Impacto**: ⭐⭐⭐

**Tareas**:
- [ ] Configurar Vitest
- [ ] Configurar React Testing Library
- [ ] Tests unitarios:
  - [ ] Calculadora (lógica de operaciones)
  - [ ] TicTacToe (lógica de ganador)
  - [ ] Componentes básicos
- [ ] Tests de integración:
  - [ ] Navegación entre páginas
  - [ ] Formulario de contacto
- [ ] Configurar Playwright para E2E
- [ ] Tests E2E críticos:
  - [ ] Flujo completo de navegación
  - [ ] Uso de proyectos interactivos
  - [ ] Formulario de contacto
- [ ] CI/CD: ejecutar tests en GitHub Actions
- [ ] Coverage reports

**Dependencias**:
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
npm install -D @playwright/test
```

**Beneficios**:
- Calidad de código profesional
- Confianza al hacer cambios
- Prevención de bugs
- Muy valorado en empresas

---

### 15. Scroll to Top y Breadcrumbs
**Prioridad**: 🟢 BAJA  
**Estimación**: 3-4 horas  
**Impacto**: ⭐⭐

**Tareas**:
- [ ] Botón Scroll to Top:
  - [ ] Aparecer después de scroll
  - [ ] Animación de entrada/salida
  - [ ] Smooth scroll al hacer clic
  - [ ] Ícono de flecha arriba
  - [ ] Fixed position (bottom right)
- [ ] Breadcrumbs:
  - [ ] Componente reutilizable
  - [ ] Generar desde ruta actual
  - [ ] Links navegables
  - [ ] Estilo con separadores (>)
  - [ ] Implementar en proyectos

**Beneficios**:
- Mejor UX en páginas largas
- Navegación más clara
- Pequeños detalles que importan

---

### 16. Toast Notifications System
**Prioridad**: 🟢 BAJA  
**Estimación**: 2-3 horas  
**Impacto**: ⭐⭐⭐

**Tareas**:
- [ ] Instalar `react-hot-toast` o `react-toastify`
- [ ] Configurar provider
- [ ] Estilos personalizados
- [ ] Tipos de toast:
  - [ ] Success (verde)
  - [ ] Error (rojo)
  - [ ] Info (azul)
  - [ ] Warning (amarillo)
- [ ] Usar en:
  - [ ] Formulario de contacto
  - [ ] Copiar al portapapeles
  - [ ] Descarga de capturas de cámara
  - [ ] Resetear juegos
- [ ] Personalización con tema (dark mode)

**Dependencias**:
```bash
npm install react-hot-toast
```

**Beneficios**:
- Feedback visual elegante
- Mejor UX
- Consistencia en notificaciones

---

## 🔵 FUTURO / IDEAS

### 17. Sistema de Autenticación (Admin)
**Prioridad**: 🔵 FUTURO  
**Estimación**: 1 semana  

**Ideas**:
- Panel de administración para editar contenido
- Login con Firebase Auth o Auth0
- CRUD de proyectos desde UI
- Editar About sin tocar código
- Estadísticas privadas

---

### 18. Modo de Presentación
**Prioridad**: 🔵 FUTURO  
**Estimación**: 2 días  

**Ideas**:
- Modo fullscreen para mostrar proyectos
- Navegación con flechas del teclado
- Sin navbar/footer en modo presentación
- Perfecto para entrevistas

---

### 19. Easter Eggs y Juegos Ocultos
**Prioridad**: 🔵 FUTURO  
**Estimación**: Variable  

**Ideas**:
- Konami Code para easter egg
- Mini juego de Snake en consola
- Efectos especiales en fechas especiales
- Modo Matrix con lluvia de código

---

### 20. Integración con GitHub API
**Prioridad**: 🔵 FUTURO  
**Estimación**: 2 días  

**Ideas**:
- Mostrar repos reales de GitHub
- Estadísticas de commits
- Lenguajes más usados
- Contribuciones recientes
- Link directo a código fuente

---

### 21. Versión de Consola
**Prioridad**: 🔵 FUTURO  
**Estimación**: 3 días  

**Ideas**:
- Terminal interactiva en el sitio
- Comandos estilo bash
- `help`, `about`, `projects`, `contact`
- Navegación alternativa para developers
- ASCII art

---

## 📊 Resumen de Prioridades

| Prioridad | Cantidad | Tiempo Total Estimado |
|-----------|----------|----------------------|
| 🔴 ALTA | 1 tarea | 1-2 días |
| 🟡 MEDIA | 7 tareas | 14-18 días |
| 🟢 BAJA | 6 tareas | 17-22 días |
| 🔵 FUTURO | 5 ideas | - |

---

## 🎯 Roadmap Sugerido

### Sprint 1 (1-2 semanas) - Fundamentos ⏳ En Progreso
1. ✅ Dark Mode (Completado - 13 Nov 2025)
2. ✅ Navbar Responsive (Completado)
3. ✅ Formulario de Contacto (Completado)
4. Meta Tags Dinámicos
5. ✅ Mejoras Responsividad iPhone (Completado)

### Sprint 2 (2-3 semanas) - Mejoras UX
6. Animaciones
7. PWA
8. Analytics
9. Sitemap/robots.txt

### Sprint 3 (3-4 semanas) - Contenido
10. Mejoras en About
11. Filtros en Proyectos
12. Toast Notifications
13. Scroll to Top

### Sprint 4+ (Opcional) - Avanzado
14. i18n
15. Blog
16. Tests
17. Ideas futuras

---

## ✅ Completadas

- [x] Estructura básica del proyecto
- [x] Routing con React Router
- [x] Diseño responsive básico
- [x] 4 proyectos interactivos funcionales
- [x] Navegación por teclado en proyectos
- [x] Accesibilidad básica (ARIA, roles)
- [x] SEO básico (meta tags generales)
- [x] Deployment a GitHub Pages
- [x] README.md completo
- [x] TODO.md organizado
- [x] **Navbar responsive con menú hamburguesa** (12 Nov 2025)
- [x] **Mejoras de responsividad para iPhone y móviles** (12 Nov 2025)
  - [x] Contact.jsx optimizado
  - [x] Footer.jsx responsive
  - [x] Home.jsx mobile-friendly
  - [x] Grids y spacing adaptativos
- [x] **Formulario de Contacto Funcional** (12 Nov 2025)
  - [x] Integración con EmailJS
  - [x] Validación completa de campos
  - [x] Toast notifications con react-hot-toast
  - [x] Honeypot anti-spam
  - [x] Estados de carga y error handling
  - [x] Diseño responsive
- [x] **Dark Mode / Tema Oscuro** (13 Nov 2025)
  - [x] ThemeContext con React Context API
  - [x] Toggle sol/luna en Navbar (desktop y mobile)
  - [x] Persistencia en localStorage
  - [x] Detección de preferencia del sistema
  - [x] Clases dark: en todos los componentes y páginas
  - [x] Transiciones suaves (duration-300)
  - [x] Soporte completo en todas las páginas

---

## 📝 Notas

- **Actualizar este archivo** al completar tareas
- **Crear branches** para cada feature nueva
- **Commits descriptivos** siguiendo conventional commits
- **Testing** antes de merge a development
- **Deploy** solo cuando desarrollo esté estable

---

**Última revisión**: 13 de Noviembre, 2025  
**Mantenido por**: Alberto Zúñiga
