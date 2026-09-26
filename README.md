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
- **👤 About**: CV interactivo con acordeones expandibles y tablas accesibles
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
- ✅ **GitHub Pages Compatible**: Script de routing para SPA en GitHub Pages
- ✅ **Performance**: Optimizado con Vite y code splitting

---

## 🛠 Tecnologías

### Frontend

- **React** 19.2.0 - Biblioteca UI
- **React Router DOM** 7.9.5 - Enrutamiento SPA
- **Tailwind CSS** 3.4.1 - Framework CSS utility-first
- **Vite** 7.2.2 - Build tool y dev server

### Desarrollo

- **ESLint** 9.39.1 - Linting y calidad de código
- **PostCSS** 8.4.35 - Procesamiento CSS
- **Autoprefixer** 10.4.18 - Prefijos CSS automáticos

### Deployment

- **gh-pages** 6.3.0 - Despliegue a GitHub Pages

---

## 📁 Estructura del Proyecto

```
mi_pagina/
├── public/
│   ├── 404.html              # Página de error para GitHub Pages
│   └── favicon.svg           # Ícono del sitio
├── src/
│   ├── components/
│   │   ├── Footer.jsx        # Componente de pie de página
│   │   └── Navbar.jsx        # Barra de navegación
│   ├── pages/
│   │   ├── Home.jsx          # Página de inicio
│   │   ├── About.jsx         # CV interactivo
│   │   ├── Projects.jsx      # Galería de proyectos
│   │   ├── Contact.jsx       # Página de contacto
│   │   ├── CalculatorProject.jsx
│   │   ├── ClockProject.jsx
│   │   ├── CameraProject.jsx
│   │   └── TicTacToeProject.jsx
│   ├── App.jsx               # Componente raíz con rutas
│   ├── main.jsx              # Punto de entrada
│   └── index.css             # Estilos globales + Tailwind
├── index.html                # HTML principal
├── package.json              # Dependencias y scripts
├── vite.config.js            # Configuración de Vite
├── tailwind.config.js        # Configuración de Tailwind
├── postcss.config.js         # Configuración de PostCSS
├── eslint.config.js          # Configuración de ESLint
├── README.md                 # Este archivo
└── TODO.md                   # Lista de tareas pendientes
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

# Linting
npm run lint            # Ejecuta ESLint

# Preview
npm run preview         # Previsualiza build de producción
```

### Variables de Entorno

No se requieren variables de entorno. Todo está configurado para funcionar out-of-the-box.

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
- Grabación de videos (WebM)
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

El sitio se despliega automáticamente en GitHub Pages:

```bash
npm run deploy
```

Este comando:

1. Ejecuta `npm run build` (genera `/dist`)
2. Despliega `/dist` a la rama `gh-pages`
3. GitHub Pages sirve desde `gh-pages`

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

**Colores personalizados** (`tailwind.config.js`):

```javascript
colors: {
  primary: {
    50: '#e6f3f9',
    100: '#cce7f3',
    200: '#99cfe7',
    300: '#66b7db',
    400: '#339fcf',
    500: '#0073ba',
    600: '#005c95',
    700: '#004570',
    800: '#002e4a',
    900: '#001725',
  }
}
```

**Clases utilitarias** (`index.css`):

- `.btn-primary` - Botón principal
- `.btn-secondary` - Botón secundario
- `.card` - Tarjeta con sombra
- `.section-title` - Título de sección
- `.sr-only` - Solo para lectores de pantalla

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

### Títulos Dinámicos

Cada página actualiza `document.title` con `useEffect`:

```javascript
useEffect(() => {
  document.title = "Página - Alberto Zúñiga";
}, []);
```

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
