"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function DonateSection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal<HTMLDivElement>();

  const donationOptions = [
    { amount: "$10", desc: "Alimenta a un gato por una semana" },
    { amount: "$25", desc: "Cubre vacunas y desparasitacion" },
    { amount: "$50", desc: "Financia una esterilizacion completa" },
    { amount: "$100", desc: "Apoya el rescate y rehabilitacion" },
  ];

  return (
    <section id="donar" className="section-accent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            ref={contentRef}
            className={`reveal-left ${contentVisible ? "visible" : ""}`}
          >
            <span className="section-label">
              Ayudanos a Ayudar
            </span>
            <h2 className="section-title">
              Tu donacion hace la diferencia
            </h2>
            <p className="section-text mb-8">
              Mantener nuestro refugio operativo requiere recursos constantes: comida,
              medicamentos, atencion veterinaria y mantenimiento de las instalaciones.
              Cada aportacion, sin importar el monto, nos ayuda a seguir salvando vidas.
            </p>

            <div className="space-y-6">
              {donationOptions.map((item, index) => (
                <div
                  key={item.amount}
                  className={`flex items-center gap-4 reveal ${contentVisible ? "visible" : ""}`}
                  style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                >
                  <span className="donation-amount">{item.amount}</span>
                  <span className="text-white/70 font-light">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Donation Form */}
          <div
            ref={formRef}
            className={`elegant-form-card reveal-right ${formVisible ? "visible" : ""}`}
          >
            <h3 className="text-2xl font-light tracking-wide mb-8 text-center text-gray-900">
              Haz tu Donacion
            </h3>

            {/* Amount Selection */}
            <div className="grid grid-cols-4 gap-3 mb-8">
              {["$10", "$25", "$50", "$100"].map((amount) => (
                <button
                  key={amount}
                  className="elegant-amount-btn"
                >
                  {amount}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
              <label className="block text-sm font-light text-gray-600 mb-2 tracking-wide uppercase">
                Otra cantidad
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                <input
                  type="number"
                  placeholder="0.00"
                  className="elegant-input pl-8"
                />
              </div>
            </div>

            {/* Frequency */}
            <div className="mb-8">
              <label className="block text-sm font-light text-gray-600 mb-2 tracking-wide uppercase">
                Frecuencia
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button className="elegant-freq-btn active">
                  Unica vez
                </button>
                <button className="elegant-freq-btn">
                  Mensual
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button className="elegant-btn-dark btn-shine w-full py-4">
              Donar Ahora
            </button>

            <p className="text-center text-gray-500 text-xs mt-6 font-light tracking-wide">
              Pago seguro. Tu informacion esta protegida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
