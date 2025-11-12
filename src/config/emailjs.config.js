// Configuración de EmailJS
// Para obtener estos valores:
// 1. Crea una cuenta en https://www.emailjs.com/
// 2. Crea un servicio de email (Gmail, Outlook, etc.)
// 3. Crea una plantilla de email
// 4. Obtén tu Public Key desde Account > General
// 
// IMPORTANTE: Este archivo contiene placeholders.
// Reemplaza los valores con tus propias credenciales de EmailJS.
// Consulta EMAILJS_SETUP.md para instrucciones detalladas.

export const emailConfig = {
  serviceId: "service_YOUR_SERVICE_ID", // Reemplaza con tu Service ID
  templateId: "template_YOUR_TEMPLATE_ID", // Reemplaza con tu Template ID
  publicKey: "YOUR_PUBLIC_KEY", // Reemplaza con tu Public Key
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
