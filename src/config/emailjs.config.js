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
// 
// Consulta EMAILJS_SETUP.md para instrucciones detalladas.

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_YOUR_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_YOUR_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
};

// Plantilla sugerida para EmailJS:
// 
// Asunto: Nuevo mensaje de contacto de {{from_name}}
// 
// Contenido:
// Has recibido un nuevo mensaje desde tu portafolio:
// 
// Nombre: {{from_name}}
// Email: {{from_email}}
// Asunto: {{subject}}
// 
// Mensaje:
// {{message}}
// 
// ---
// Este mensaje fue enviado desde albertozuniga.com
