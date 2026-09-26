// Configuración de EmailJS
// Las credenciales se leen desde variables de entorno (.env)
//
// Para configurar:
// 1. Copia .env.example a .env
// 2. Llena tus credenciales de EmailJS en .env
// 3. El archivo .env NO se subirá a GitHub (está en .gitignore)
//
// Para producción en GitHub Pages:
// - Configura los secrets en tu repositorio de GitHub
// - O usa la restricción por dominio en EmailJS (opción más simple)

export const emailConfig = {
  serviceId:
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_YOUR_SERVICE_ID",
  templateId:
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_YOUR_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
};

// Plantilla sugerida para EmailJS.
// Los nombres de variable deben coincidir con los atributos `name` de los
// inputs del formulario en Contact.jsx (se envía con emailjs.sendForm):
// name, email, subject, message.
//
// Asunto: Nuevo mensaje de contacto de {{name}}
//
// Contenido:
// Has recibido un nuevo mensaje desde tu portafolio:
//
// Nombre: {{name}}
// Email: {{email}}
// Asunto: {{subject}}
//
// Mensaje:
// {{message}}
//
// ---
// Este mensaje fue enviado desde albertozuniga.com
