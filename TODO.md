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

### 1. Dark Mode / Tema Oscuro
**Prioridad**: 🔴 ALTA  
**Estimación**: 2-3 días  
**Impacto**: ⭐⭐⭐⭐⭐

**Tareas**:
- [ ] Crear `ThemeContext.jsx` para gestión de tema
- [ ] Agregar toggle de tema en `Navbar.jsx`
- [ ] Implementar persistencia en `localStorage`
- [ ] Actualizar `tailwind.config.js` con modo oscuro
- [ ] Agregar clases `dark:` a todos los componentes:
  - [ ] `Home.jsx`
  - [ ] `About.jsx`
  - [ ] `Projects.jsx`
  - [ ] `Contact.jsx`
  - [ ] `CalculatorProject.jsx`
  - [ ] `ClockProject.jsx`
  - [ ] `CameraProject.jsx`
  - [ ] `TicTacToeProject.jsx`
  - [ ] `Navbar.jsx`
  - [ ] `Footer.jsx`
- [ ] Iconos sol/luna para el toggle
- [ ] Transición suave entre temas
- [ ] Testing en todas las páginas

**Beneficios**:
- Experiencia de usuario moderna
- Reduce fatiga visual
- Muy popular entre desarrolladores
- Demuestra habilidades con React Context

---

### 2. Navbar Responsive con Menú Hamburguesa
**Prioridad**: 🔴 ALTA  
**Estimación**: 1 día  
**Impacto**: ⭐⭐⭐⭐⭐

**Tareas**:
- [ ] Crear estado para menú móvil abierto/cerrado
- [ ] Diseñar ícono hamburguesa (☰)
- [ ] Implementar menú desplegable en móviles
- [ ] Animación de apertura/cierre
- [ ] Cerrar menú al hacer clic en un link
- [ ] Cerrar menú al hacer clic fuera (useEffect)
- [ ] Breakpoint en `md:` para mostrar/ocultar
- [ ] Prevenir scroll cuando menú está abierto
- [ ] Testing en diferentes tamaños de pantalla

**Beneficios**:
- **Crítico** para experiencia móvil
- Actualmente el navbar no es usable en móviles
- Mejora significativa de UX

---

### 3. Formulario de Contacto Funcional
**Prioridad**: 🔴 ALTA  
**Estimación**: 2 días  
**Impacto**: ⭐⭐⭐⭐

**Tareas**:
- [ ] Instalar y configurar EmailJS o Formspree
- [ ] Crear componente de formulario en `Contact.jsx`
- [ ] Campos: nombre, email, asunto, mensaje
- [ ] Validación de formulario:
  - [ ] Email válido
  - [ ] Campos requeridos
  - [ ] Longitud máxima
- [ ] Estados de carga (loading spinner)
- [ ] Mensajes de éxito/error con toast
- [ ] Limpiar formulario después de enviar
- [ ] Captcha básico (honeypot o reCAPTCHA)
- [ ] Diseño responsive del formulario
- [ ] Testing de envío real

**Dependencias**:
```bash
npm install @emailjs/browser
# o
npm install @formspree/react
```

**Beneficios**:
- Contacto directo sin abrir cliente de email
- Más profesional que solo links
- Tracking de mensajes recibidos

---

### 4. Meta Tags Dinámicos por Página (SEO)
**Prioridad**: 🔴 ALTA  
**Estimación**: 1 día  
**Impacto**: ⭐⭐⭐⭐

**Tareas**:
- [ ] Instalar `react-helmet-async`
- [ ] Crear componente `SEO.jsx` reutilizable
- [ ] Implementar en cada página:
  - [ ] Título único
  - [ ] Descripción específica
  - [ ] Keywords relevantes
  - [ ] OG image (crear imágenes por página)
  - [ ] OG url canónica
- [ ] Crear imágenes OG (1200×630px):
  - [ ] Home
  - [ ] About
  - [ ] Projects
  - [ ] Cada proyecto individual
- [ ] Agregar imágenes a `/public/og/`
- [ ] Testing con herramientas SEO:
  - [ ] Facebook Sharing Debugger
  - [ ] Twitter Card Validator
  - [ ] LinkedIn Post Inspector

**Dependencias**:
```bash
npm install react-helmet-async
```

**Beneficios**:
- Mejor posicionamiento en buscadores
- Previews atractivos al compartir en redes sociales
- Profesionalismo

---

## 🟡 PRIORIDAD MEDIA

### 5. Animaciones y Transiciones Suaves
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

### 6. Progressive Web App (PWA)
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

### 7. Analytics y Monitoreo
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

### 8. Sitemap y robots.txt
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

### 9. Mejoras en About.jsx
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

### 10. Filtros y Búsqueda en Proyectos
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

### 11. Internacionalización (i18n)
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

### 12. Blog o Sección de Artículos
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

### 13. Tests Unitarios y E2E
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

### 14. Scroll to Top y Breadcrumbs
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

### 15. Toast Notifications System
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

### 16. Sistema de Autenticación (Admin)
**Prioridad**: 🔵 FUTURO  
**Estimación**: 1 semana  

**Ideas**:
- Panel de administración para editar contenido
- Login con Firebase Auth o Auth0
- CRUD de proyectos desde UI
- Editar About sin tocar código
- Estadísticas privadas

---

### 17. Modo de Presentación
**Prioridad**: 🔵 FUTURO  
**Estimación**: 2 días  

**Ideas**:
- Modo fullscreen para mostrar proyectos
- Navegación con flechas del teclado
- Sin navbar/footer en modo presentación
- Perfecto para entrevistas

---

### 18. Easter Eggs y Juegos Ocultos
**Prioridad**: 🔵 FUTURO  
**Estimación**: Variable  

**Ideas**:
- Konami Code para easter egg
- Mini juego de Snake en consola
- Efectos especiales en fechas especiales
- Modo Matrix con lluvia de código

---

### 19. Integración con GitHub API
**Prioridad**: 🔵 FUTURO  
**Estimación**: 2 días  

**Ideas**:
- Mostrar repos reales de GitHub
- Estadísticas de commits
- Lenguajes más usados
- Contribuciones recientes
- Link directo a código fuente

---

### 20. Versión de Consola
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
| 🔴 ALTA | 4 tareas | 6-9 días |
| 🟡 MEDIA | 6 tareas | 12-15 días |
| 🟢 BAJA | 5 tareas | 17-22 días |
| 🔵 FUTURO | 5 ideas | - |

---

## 🎯 Roadmap Sugerido

### Sprint 1 (1-2 semanas) - Fundamentos
1. Dark Mode
2. Navbar Responsive
3. Formulario de Contacto
4. Meta Tags Dinámicos

### Sprint 2 (2-3 semanas) - Mejoras UX
5. Animaciones
6. PWA
7. Analytics
8. Sitemap/robots.txt

### Sprint 3 (3-4 semanas) - Contenido
9. Mejoras en About
10. Filtros en Proyectos
11. Toast Notifications
12. Scroll to Top

### Sprint 4+ (Opcional) - Avanzado
13. i18n
14. Blog
15. Tests
16. Ideas futuras

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

---

## 📝 Notas

- **Actualizar este archivo** al completar tareas
- **Crear branches** para cada feature nueva
- **Commits descriptivos** siguiendo conventional commits
- **Testing** antes de merge a development
- **Deploy** solo cuando desarrollo esté estable

---

**Última revisión**: 12 de Noviembre, 2025  
**Mantenido por**: Alberto Zúñiga
