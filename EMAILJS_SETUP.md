# 📧 Configuración de EmailJS para el Formulario de Contacto

Este documento explica cómo configurar EmailJS para que el formulario de contacto funcione correctamente.

## 📋 Pasos de Configuración

### 1. Crear una Cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en **"Sign Up"** para crear una cuenta gratuita
3. Verifica tu email

### 2. Agregar un Servicio de Email

1. En el dashboard de EmailJS, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta
5. Copia el **Service ID** (algo como `service_abc123`)

### 3. Crear una Plantilla de Email

1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Usa esta plantilla sugerida:

**Asunto:**
```
Nuevo mensaje de contacto de {{from_name}}
```

**Contenido:**
```
Has recibido un nuevo mensaje desde tu portafolio:

Nombre: {{from_name}}
Email: {{from_email}}
Asunto: {{subject}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde tu portafolio web
```

4. Asegúrate de que los campos del formulario coincidan:
   - `from_name` → nombre
   - `from_email` → email  
   - `subject` → asunto
   - `message` → mensaje

5. Copia el **Template ID** (algo como `template_xyz789`)

### 4. Obtener tu Public Key

1. Ve a **"Account"** → **"General"**
2. Encuentra tu **Public Key** (algo como `abcd1234xyz`)
3. Cópiala

### 5. Configurar el Proyecto

1. Abre el archivo `src/config/emailjs.config.js`
2. Reemplaza los valores con los que copiaste:

```javascript
export const emailConfig = {
  serviceId: "service_abc123",        // Tu Service ID
  templateId: "template_xyz789",      // Tu Template ID
  publicKey: "abcd1234xyz",           // Tu Public Key
};
```

3. Guarda el archivo

## 🧪 Probar el Formulario

1. Ejecuta el proyecto: `npm run dev`
2. Ve a la página de Contacto
3. Completa el formulario con datos de prueba
4. Haz clic en "Enviar Mensaje"
5. Revisa tu email para verificar que llegó el mensaje

## 🔒 Seguridad

- La Public Key de EmailJS es **segura para exponerse** en el cliente
- EmailJS protege tu email real y previene spam
- El campo honeypot ayuda a prevenir bots
- Considera agregar reCAPTCHA para mayor seguridad

## 📊 Límites del Plan Gratuito

- **200 emails/mes** con el plan gratuito
- Si necesitas más, considera actualizar a un plan pago
- Monitorea el uso en el dashboard de EmailJS

## 🐛 Solución de Problemas

### El mensaje no se envía
- Verifica que los IDs en el archivo de configuración sean correctos
- Revisa la consola del navegador para errores
- Asegúrate de tener conexión a internet
- Verifica que el servicio de email esté conectado correctamente

### No recibo los emails
- Revisa la carpeta de spam
- Verifica que el email en el servicio sea correcto
- Revisa la plantilla de email en EmailJS
- Asegúrate de que los nombres de los campos coincidan

### Error de CORS
- EmailJS maneja CORS automáticamente
- Si ves errores de CORS, verifica tu Public Key
- Asegúrate de estar usando `@emailjs/browser` y no la versión antigua

## 📚 Recursos Adicionales

- [Documentación oficial de EmailJS](https://www.emailjs.com/docs/)
- [Tutorial en video](https://www.youtube.com/watch?v=NgWGllOjkbs)
- [GitHub de EmailJS](https://github.com/emailjs/emailjs-sdk)

## ✅ Verificación Rápida

- [ ] Cuenta de EmailJS creada
- [ ] Servicio de email agregado y conectado
- [ ] Plantilla de email creada y configurada
- [ ] Service ID, Template ID y Public Key copiados
- [ ] Archivo `emailjs.config.js` actualizado
- [ ] Formulario probado y funcionando
- [ ] Email de prueba recibido

---

¿Problemas? Revisa la [documentación oficial](https://www.emailjs.com/docs/) o contacta al soporte de EmailJS.
