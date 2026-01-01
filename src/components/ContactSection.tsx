"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [formFocus, setFormFocus] = useState<string | null>(null);

  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visitanos",
      primary: "Calle Ejemplo 123",
      secondary: "Ciudad, CP 12345",
      accent: "Lun - Sab: 10:00 - 18:00",
      color: "from-amber-500/20 to-orange-500/20",
      hoverColor: "group-hover:from-amber-500/30 group-hover:to-orange-500/30",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Escribenos",
      primary: "info@patitasfelices.com",
      secondary: "adopciones@patitasfelices.com",
      accent: "Respondemos en 24h",
      color: "from-rose-500/20 to-pink-500/20",
      hoverColor: "group-hover:from-rose-500/30 group-hover:to-pink-500/30",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Llamanos",
      primary: "+34 123 456 789",
      secondary: "+34 987 654 321",
      accent: "Atencion personalizada",
      color: "from-violet-500/20 to-purple-500/20",
      hoverColor: "group-hover:from-violet-500/30 group-hover:to-purple-500/30",
    },
  ];

  return (
    <section id="contacto" className="contact-section-creative">
      {/* Animated background elements */}
      <div className="contact-bg-pattern" />
      <div className="contact-floating-shapes">
        <div className="floating-paw paw-1" />
        <div className="floating-paw paw-2" />
        <div className="floating-paw paw-3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Creative Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 md:mb-20 reveal ${headerVisible ? "visible" : ""}`}
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-white/40" />
            <span className="contact-label">
              Conectemos
            </span>
            <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-white/40" />
          </div>

          <h2 className="contact-title-creative">
            <span className="block text-white/60 text-lg sm:text-2xl md:text-3xl font-light tracking-wider mb-2">
              Cada mensaje cuenta
            </span>
            <span className="block text-white text-3xl sm:text-4xl md:text-6xl font-light tracking-tight">
              Hablemos
            </span>
          </h2>

          <p className="contact-subtitle mt-4 sm:mt-6 max-w-xl mx-auto text-sm sm:text-base">
            Ya sea para adoptar, colaborar o simplemente saludar,
            <br className="hidden md:block" />
            estamos aqui para ti y para ellos.
          </p>
        </div>

        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left: Contact Methods */}
          <div className={`space-y-4 sm:space-y-6 reveal-left ${contentVisible ? "visible" : ""}`}>
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="contact-method-card group"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${method.color} ${method.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                {/* Content */}
                <div className="relative z-10 flex items-start gap-3 sm:gap-6">
                  {/* Icon container */}
                  <div className={`contact-method-icon ${activeCard === index ? 'active' : ''}`}>
                    {method.icon}
                  </div>

                  {/* Text content */}
                  <div className="flex-1">
                    <h3 className="text-base sm:text-xl font-light text-white mb-1 sm:mb-2 tracking-wide group-hover:text-white transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-white/70 font-light text-sm sm:text-base mb-1 group-hover:text-white/90 transition-colors">
                      {method.primary}
                    </p>
                    <p className="text-white/50 font-light text-xs sm:text-sm mb-2 sm:mb-3 group-hover:text-white/70 transition-colors">
                      {method.secondary}
                    </p>
                    <span className="inline-block text-[10px] sm:text-xs tracking-widest uppercase text-white/40 group-hover:text-white/60 transition-colors">
                      {method.accent}
                    </span>
                  </div>

                  {/* Arrow indicator - hidden on mobile */}
                  <div className="contact-arrow hidden sm:flex opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-6 sm:pt-8 border-t border-white/10">
              <p className="text-white/40 text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">Siguenos</p>
              <div className="flex gap-3 sm:gap-4">
                {['instagram', 'facebook', 'twitter'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="social-link-creative"
                  >
                    {social === 'instagram' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    )}
                    {social === 'facebook' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )}
                    {social === 'twitter' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Creative Form */}
          <div className={`reveal-right ${contentVisible ? "visible" : ""}`} style={{ transitionDelay: "0.2s" }}>
            <div className="contact-form-creative">
              {/* Decorative corner elements */}
              <div className="form-corner form-corner-tl" />
              <div className="form-corner form-corner-br" />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-light text-white tracking-wide">
                      Envianos un mensaje
                    </h3>
                    <p className="text-white/50 text-xs sm:text-sm">Te responderemos pronto</p>
                  </div>
                </div>

                <form className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="form-group-creative">
                      <input
                        type="text"
                        placeholder=" "
                        className="form-input-creative"
                        onFocus={() => setFormFocus('nombre')}
                        onBlur={() => setFormFocus(null)}
                      />
                      <label className={`form-label-creative ${formFocus === 'nombre' ? 'active' : ''}`}>
                        Nombre
                      </label>
                      <div className="form-line" />
                    </div>
                    <div className="form-group-creative">
                      <input
                        type="email"
                        placeholder=" "
                        className="form-input-creative"
                        onFocus={() => setFormFocus('email')}
                        onBlur={() => setFormFocus(null)}
                      />
                      <label className={`form-label-creative ${formFocus === 'email' ? 'active' : ''}`}>
                        Email
                      </label>
                      <div className="form-line" />
                    </div>
                  </div>

                  <div className="form-group-creative">
                    <select
                      className="form-input-creative form-select-creative"
                      onFocus={() => setFormFocus('asunto')}
                      onBlur={() => setFormFocus(null)}
                    >
                      <option value="">Selecciona un asunto</option>
                      <option>Informacion sobre adopcion</option>
                      <option>Quiero ser voluntario</option>
                      <option>Consulta sobre donaciones</option>
                      <option>Reportar gato abandonado</option>
                      <option>Otro</option>
                    </select>
                    <label className={`form-label-creative select-label ${formFocus === 'asunto' ? 'active' : ''}`}>
                      Asunto
                    </label>
                    <div className="form-line" />
                  </div>

                  <div className="form-group-creative">
                    <textarea
                      rows={4}
                      placeholder=" "
                      className="form-input-creative form-textarea-creative"
                      onFocus={() => setFormFocus('mensaje')}
                      onBlur={() => setFormFocus(null)}
                    />
                    <label className={`form-label-creative ${formFocus === 'mensaje' ? 'active' : ''}`}>
                      Tu mensaje
                    </label>
                    <div className="form-line" />
                  </div>

                  <button
                    type="submit"
                    className="contact-submit-btn group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Enviar mensaje
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <div className="btn-bg-sweep" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
