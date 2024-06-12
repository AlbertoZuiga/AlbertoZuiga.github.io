// Función para cargar archivos js dinámicamente
function loadJsFilesFromDirectory(directory) {
    // Obtener todos los archivos en el directorio
    fetch(directory)
        .then(response => response.text())
        .then(text => {
            // Utilizar una expresión regular para encontrar los archivos js
            const jsFiles = text.match(/href="([^"]+\.js)"/g);
            // Cargar cada archivo js

            const jsDiv = document.getElementById("js")
            if (jsFiles) {
                jsFiles.forEach(file => {
                    const src = file.match(/href="([^"]+\.js)"/)[1];
                    const script = document.createElement('script');
                    // script.rel = 'stylesheet';
                    script.src = src;

                    jsDiv.appendChild(script);
                });
            }
        })
        .catch(error => console.error('Error al cargar archivos js:', error));
}

// Llamar a la función para cargar los archivos js
console.log("Esto es una prueba")
loadJsFilesFromDirectory('./js/');
