import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { emailConfig } from "../config/emailjs.config";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.title = "Contacto - Alberto Zúñiga";
  }, []);

  // Validación del formulario
  const validateForm = () => {
    const newErrors = {};

    // Validar nombre
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    // Validar asunto
    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es requerido";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "El asunto debe tener al menos 3 caracteres";
    }

    // Validar mensaje
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "El mensaje no puede exceder 1000 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Por favor, corrige los errores del formulario");
      return;
    }

    setIsSubmitting(true);

    try {
      // Configuración de EmailJS desde archivo de configuración
      await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        formRef.current,
        emailConfig.publicKey
      );

      toast.success("¡Mensaje enviado exitosamente! Te responderé pronto.");
      
      // Limpiar formulario
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      toast.error("Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctame directamente por email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    document.title = "Contacto - Alberto Zúñiga";
  }, []);

  return (
    <div className="min-h-screen py-8 sm:py-12 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Improved mobile spacing */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 px-2">
            Contacto
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 px-4">
            ¿Tienes alguna pregunta o propuesta? Me encantaría escucharte
          </p>
        </div>

        {/* Contact Methods Grid - Improved mobile layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          <a
            href="mailto:a.zuniga.marinovic@gmail.com"
            className="card p-6 sm:p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-primary-100 dark:bg-primary-900 rounded-full mb-3 sm:mb-4">
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 text-primary-500 dark:text-primary-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-1 sm:mb-2">Email</h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 break-all px-2">
              a.zuniga.marinovic@gmail.com
            </p>
          </a>

          <a
            href="https://wa.me/56964962736?text=Hola%20Alberto%2C%20te%20contacto%20desde%20tu%20sitio%20web."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="card p-6 sm:p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-50 dark:bg-green-900 rounded-full mb-3 sm:mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 sm:w-8 sm:h-8 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 221.9-99.6 221.9-222 0-59.3-23.2-115-65.4-157.9zM223.9 413.2c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 329.3l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-1 sm:mb-2">WhatsApp</h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">+56 9 6496 2736</p>
          </a>
        </div>

        {/* Social Networks - Improved mobile layout */}
        <div className="card p-6 sm:p-8 mb-6 sm:mb-8 dark:bg-gray-800">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 text-center">
            Redes Sociales
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <a
              href="https://github.com/AlbertoZuiga"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800 dark:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">GitHub</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">@AlbertoZuiga</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/alberto-zuniga-marinovic/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">LinkedIn</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                  alberto-zuniga-marinovic
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Call to Action - Improved mobile spacing */}
        <div className="card p-6 sm:p-8 bg-gradient-to-br from-primary-50 to-primary-100">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">
              Envíame un mensaje
            </h2>
            <p className="text-sm sm:text-base text-gray-700 px-4">
              Completa el formulario y te responderé a la brevedad
            </p>
          </div>

          {/* Formulario de Contacto */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Campo Nombre */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2"
              >
                Nombre <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-sm sm:text-base ${
                  errors.name
                    ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                    : "border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                }`}
                placeholder="Tu nombre completo"
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Campo Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-sm sm:text-base ${
                  errors.email
                    ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                    : "border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                }`}
                placeholder="tu@email.com"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Campo Asunto */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2"
              >
                Asunto <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-sm sm:text-base ${
                  errors.subject
                    ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                    : "border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                }`}
                placeholder="¿De qué quieres hablar?"
                disabled={isSubmitting}
              />
              {errors.subject && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Campo Mensaje */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2"
              >
                Mensaje <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none text-sm sm:text-base ${
                  errors.message
                    ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                    : "border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                }`}
                placeholder="Escribe tu mensaje aquí..."
                disabled={isSubmitting}
              />
              <div className="flex justify-between items-center mt-1">
                <div>
                  {errors.message && (
                    <p className="text-xs sm:text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>
                <p className="text-xs text-gray-500">
                  {formData.message.length}/1000
                </p>
              </div>
            </div>

            {/* Botón de Envío */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 sm:py-3.5 rounded-lg font-semibold text-white transition-all duration-300 text-sm sm:text-base ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary-600 hover:bg-primary-700 transform hover:scale-105 active:scale-95"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  "Enviar Mensaje"
                )}
              </button>
            </div>

            {/* Honeypot para spam */}
            <input
              type="text"
              name="honeypot"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />
          </form>
        </div>

        {/* Toast Container */}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#363636",
              color: "#fff",
            },
            success: {
              iconTheme: {
                primary: "#10b981",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Contact;
