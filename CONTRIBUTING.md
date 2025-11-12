# 🤝 Guía de Contribución

Gracias por tu interés en contribuir a este proyecto. Esta guía te ayudará a entender el flujo de trabajo y las mejores prácticas.

---

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Cómo Contribuir](#cómo-contribuir)
- [Flujo de Git](#flujo-de-git)
- [Estándares de Código](#estándares-de-código)
- [Commit Messages](#commit-messages)
- [Pull Requests](#pull-requests)

---

## 📜 Código de Conducta

- Sé respetuoso con todos los contribuidores
- Acepta críticas constructivas
- Enfócate en lo mejor para el proyecto
- Mantén un ambiente colaborativo

---

## 🚀 Cómo Contribuir

### 1. Fork y Clone

```bash
# Fork desde GitHub UI
git clone https://github.com/TU-USUARIO/AlbertoZuiga.github.io.git
cd AlbertoZuiga.github.io
```

### 2. Configurar Upstream

```bash
git remote add upstream https://github.com/AlbertoZuiga/AlbertoZuiga.github.io.git
git fetch upstream
```

### 3. Instalar Dependencias

```bash
npm install
```

### 4. Crear Branch

```bash
git checkout -b feature/nombre-descriptivo
# o
git checkout -b fix/descripcion-del-bug
```

---

## 🌿 Flujo de Git

### Branches

- `main` - Producción (GitHub Pages)
- `development` - Rama de desarrollo principal
- `feature/*` - Nuevas características
- `fix/*` - Corrección de bugs
- `refactor/*` - Refactorización de código
- `docs/*` - Documentación

### Workflow

```bash
# 1. Asegurarse de estar actualizado
git checkout development
git pull upstream development

# 2. Crear branch desde development
git checkout -b feature/dark-mode

# 3. Hacer cambios y commits
git add .
git commit -m "feat(theme): add dark mode toggle"

# 4. Push a tu fork
git push origin feature/dark-mode

# 5. Abrir Pull Request en GitHub
```

---

## 💻 Estándares de Código

### JavaScript/React

- **ESLint**: Ejecutar `npm run lint` antes de commit
- **Prettier**: Formateo automático (si está configurado)
- **Naming Conventions**:
  - Componentes: `PascalCase` (ej: `DarkModeToggle.jsx`)
  - Funciones: `camelCase` (ej: `handleToggleTheme`)
  - Constantes: `UPPER_SNAKE_CASE` (ej: `API_URL`)
  - Archivos: `PascalCase.jsx` para componentes, `camelCase.js` para utils

### CSS/Tailwind

- Preferir clases de Tailwind sobre CSS custom
- Si necesitas CSS custom, agrégalo en `index.css`
- Usar clases utilitarias definidas (`.btn-primary`, `.card`, etc.)
- Responsive design: mobile-first (`sm:`, `md:`, `lg:`, `xl:`)

### Estructura de Componentes

```jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 1. Component definition
const MyComponent = () => {
  // 2. State
  const [count, setCount] = useState(0);
  
  // 3. Effects
  useEffect(() => {
    document.title = "Mi Componente";
  }, []);
  
  // 4. Event handlers
  const handleClick = () => {
    setCount(count + 1);
  };
  
  // 5. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

// 6. Export
export default MyComponent;
```

---

## 📝 Commit Messages

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

### Formato

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- `feat`: Nueva característica
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Formato, espacios (no afecta código)
- `refactor`: Refactorización (ni fix ni feat)
- `perf`: Mejora de rendimiento
- `test`: Agregar o corregir tests
- `chore`: Tareas de mantenimiento

### Scopes (opcional)

- `theme`: Dark mode, estilos globales
- `navbar`: Componente navbar
- `projects`: Página o lógica de proyectos
- `calculator`: Proyecto calculadora
- `clock`: Proyecto reloj
- `camera`: Proyecto cámara
- `tictactoe`: Proyecto tres en línea
- `a11y`: Accesibilidad
- `seo`: SEO y meta tags
- `i18n`: Internacionalización

### Ejemplos

```bash
# Nueva característica
git commit -m "feat(theme): implement dark mode with context API"

# Bug fix
git commit -m "fix(calculator): resolve division by zero error"

# Documentación
git commit -m "docs(readme): add installation instructions"

# Refactor
git commit -m "refactor(navbar): extract menu items to separate component"

# Performance
git commit -m "perf(projects): add lazy loading for project images"

# Chore
git commit -m "chore(deps): update React to v19.2.0"
```

### Body (opcional)

Para commits complejos, agregar más contexto:

```bash
git commit -m "feat(contact): add functional contact form

- Integrated EmailJS for email sending
- Added form validation with error messages
- Implemented loading states and success/error toasts
- Added honeypot for spam prevention

Closes #42"
```

---

## 🔍 Pull Requests

### Antes de Abrir un PR

- [ ] Código funciona correctamente
- [ ] Ejecutar `npm run lint` sin errores
- [ ] Probar en diferentes navegadores si es posible
- [ ] Probar en móvil/tablet/desktop
- [ ] Actualizar documentación si es necesario
- [ ] Commits siguen Conventional Commits

### Template de PR

```markdown
## Descripción
Breve descripción de los cambios realizados.

## Tipo de Cambio
- [ ] Bug fix
- [ ] Nueva característica
- [ ] Breaking change
- [ ] Documentación

## Checklist
- [ ] El código funciona correctamente
- [ ] Lint pasa sin errores
- [ ] Probado en diferentes navegadores
- [ ] Responsive en móvil/tablet/desktop
- [ ] Documentación actualizada
- [ ] Screenshots/GIFs agregados (si aplica)

## Screenshots
(Si aplica, agregar capturas de pantalla)

## Notas Adicionales
Cualquier información adicional relevante.
```

### Proceso de Review

1. **Automático**: GitHub Actions ejecuta linting (si está configurado)
2. **Manual**: El maintainer revisa el código
3. **Feedback**: Se solicitan cambios si es necesario
4. **Approval**: Se aprueba y mergea a `development`
5. **Testing**: Se prueba en development
6. **Production**: Se mergea a `main` cuando está listo

---

## 🧪 Testing

### Antes de Commit

```bash
# Verificar que el proyecto compila
npm run build

# Ejecutar linting
npm run lint

# Probar en dev
npm run dev
```

### Testing Manual

- Navegar todas las rutas
- Probar funcionalidad en diferentes tamaños de pantalla
- Verificar accesibilidad (navegación por teclado)
- Probar en diferentes navegadores

---

## 📦 Dependencias

### Agregar Nueva Dependencia

```bash
# Dependencia de producción
npm install nombre-paquete

# Dependencia de desarrollo
npm install -D nombre-paquete
```

**Importante**: 
- Justificar por qué es necesaria
- Verificar que sea mantenida activamente
- Revisar el tamaño del bundle
- Documentar en el PR

---

## 🎨 Diseño y UI

### Colores

Usar los colores definidos en `tailwind.config.js`:

```jsx
// Primary colors
className="bg-primary-500 text-white"
className="text-primary-600 hover:text-primary-700"

// Gray scale
className="bg-gray-50 text-gray-900"
```

### Componentes Reutilizables

Antes de crear un nuevo componente, verificar si existe:
- `Navbar.jsx`
- `Footer.jsx`

Clases utilitarias en `index.css`:
- `.btn-primary`
- `.btn-secondary`
- `.card`
- `.section-title`
- `.sr-only`

---

## ♿ Accesibilidad

### Checklist de Accesibilidad

- [ ] Usar elementos semánticos (`<nav>`, `<main>`, `<article>`)
- [ ] Agregar `alt` a todas las imágenes
- [ ] ARIA labels en elementos interactivos
- [ ] Navegación por teclado funcional
- [ ] Contraste de colores suficiente
- [ ] Formularios con labels asociados
- [ ] Focus visible en elementos interactivos

### Navegación por Teclado

Todos los elementos interactivos deben ser accesibles por teclado:
- `Tab` para navegar
- `Enter` o `Space` para activar
- `Escape` para cerrar modales/menús

---

## 🐛 Reportar Bugs

### Información a Incluir

1. **Descripción clara** del problema
2. **Pasos para reproducir**
3. **Comportamiento esperado**
4. **Comportamiento actual**
5. **Screenshots** (si aplica)
6. **Navegador y versión**
7. **Sistema operativo**
8. **Tamaño de pantalla** (si es problema responsive)

### Template de Issue

```markdown
**Descripción del Bug**
Descripción clara y concisa del problema.

**Pasos para Reproducir**
1. Ir a '...'
2. Hacer clic en '...'
3. Ver error

**Comportamiento Esperado**
Lo que debería pasar.

**Screenshots**
Si aplica, agregar screenshots.

**Ambiente**
- Navegador: [ej. Chrome 120]
- OS: [ej. macOS 14]
- Dispositivo: [ej. iPhone 15, Desktop]

**Información Adicional**
Cualquier contexto adicional.
```

---

## 💡 Sugerir Mejoras

Las sugerencias son bienvenidas! Abre un issue con:

1. **Descripción** de la mejora
2. **Justificación** (por qué es útil)
3. **Propuesta** de implementación (si tienes ideas)
4. **Alternativas** consideradas
5. **Impacto** en usuarios/código

---

## 📚 Recursos

- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [React Router Docs](https://reactrouter.com/)
- [Vite Docs](https://vitejs.dev/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

## 🙏 Agradecimientos

Gracias por contribuir! Tu ayuda es muy apreciada. 🎉

---

**Mantenedor**: Alberto Zúñiga  
**Email**: a.zuniga.marinovic@gmail.com  
**Última actualización**: Noviembre 2025
