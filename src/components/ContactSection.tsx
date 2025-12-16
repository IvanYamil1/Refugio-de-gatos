"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const { ref: formRef, isVisible: formVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contacto" className="section-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 reveal ${headerVisible ? "visible" : ""}`}
        >
          <span className="section-label-dark">
            Contactanos
          </span>
          <h2 className="section-title-dark">
            Tienes Preguntas?
          </h2>
          <p className="section-text-dark max-w-2xl mx-auto">
            Estamos aqui para ayudarte. No dudes en contactarnos por cualquier consulta.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Cards */}
          <div
            className={`elegant-contact-card reveal-scale ${cardsVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="contact-icon">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="contact-title">Visitanos</h3>
            <p className="contact-info">Calle Ejemplo 123</p>
            <p className="contact-info">Ciudad, CP 12345</p>
            <p className="contact-highlight">Lun - Sab: 10:00 - 18:00</p>
          </div>

          <div
            className={`elegant-contact-card reveal-scale ${cardsVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="contact-icon">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="contact-title">Escribenos</h3>
            <p className="contact-info">info@patitasfelices.com</p>
            <p className="contact-info">adopciones@patitasfelices.com</p>
            <p className="contact-highlight">Respondemos en 24h</p>
          </div>

          <div
            className={`elegant-contact-card reveal-scale ${cardsVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="contact-icon">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="contact-title">Llamanos</h3>
            <p className="contact-info">+34 123 456 789</p>
            <p className="contact-info">+34 987 654 321</p>
            <p className="contact-highlight">Atencion personalizada</p>
          </div>
        </div>

        {/* Contact Form */}
        <div
          ref={formRef}
          className={`elegant-form-card max-w-3xl mx-auto reveal ${formVisible ? "visible" : ""}`}
        >
          <h3 className="text-2xl font-light tracking-wide mb-8 text-center text-gray-900">
            Envianos un Mensaje
          </h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-light text-gray-600 mb-2 tracking-wide uppercase">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="elegant-input"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-gray-600 mb-2 tracking-wide uppercase">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="elegant-input"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-light text-gray-600 mb-2 tracking-wide uppercase">
                Asunto
              </label>
              <select className="elegant-input">
                <option>Informacion sobre adopcion</option>
                <option>Quiero ser voluntario</option>
                <option>Consulta sobre donaciones</option>
                <option>Reportar gato abandonado</option>
                <option>Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-light text-gray-600 mb-2 tracking-wide uppercase">
                Mensaje
              </label>
              <textarea
                rows={4}
                placeholder="Escribe tu mensaje aqui..."
                className="elegant-input resize-none"
              />
            </div>
            <button
              type="submit"
              className="elegant-btn-dark btn-shine w-full py-4"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
