// Función para cargar archivos CSS dinámicamente

function loadCSSFiles() {
  const cssFiles = [
    "class-styles.css",
    "footer-styles.css",
    "nav-styles.css",
    "table-styles.css",
    "tag-styles.css",
    "toggle-styles.css",
  ];
  cssFiles.forEach((file) => {
    const href = "./styles/" + file
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;

    document.head.appendChild(link);
  });
}

// Llamar a la función para cargar los archivos CSS
loadCSSFiles();
