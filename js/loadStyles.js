// Función para cargar archivos CSS dinámicamente
function loadCSSFilesFromDirectory(directory) {
    // Obtener todos los archivos en el directorio
    fetch(directory)
        .then(response => response.text())
        .then(text => {
            // Utilizar una expresión regular para encontrar los archivos CSS
            const cssFiles = text.match(/href="([^"]+\.css)"/g);
            // Cargar cada archivo CSS
            if (cssFiles) {
                cssFiles.forEach(file => {
                    const href = file.match(/href="([^"]+\.css)"/)[1];
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = href;

                    document.head.appendChild(link);
                });
            }
        })
        .catch(error => console.error('Error al cargar archivos CSS:', error));
}

// Llamar a la función para cargar los archivos CSS
loadCSSFilesFromDirectory('styles/');
