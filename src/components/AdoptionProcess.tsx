"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AdoptionProcess() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal<HTMLDivElement>();

  const steps = [
    {
      number: "01",
      title: "Elige tu Gato",
      description: "Explora nuestros gatos disponibles y encuentra el que mejor se adapte a tu estilo de vida.",
    },
    {
      number: "02",
      title: "Completa la Solicitud",
      description: "Rellena nuestro formulario de adopcion para que podamos conocerte mejor.",
    },
    {
      number: "03",
      title: "Entrevista",
      description: "Tendremos una conversacion para asegurarnos de que sea el match perfecto.",
    },
    {
      number: "04",
      title: "Bienvenido a Casa",
      description: "Firma el contrato de adopcion y lleva a tu nuevo companero a su nuevo hogar.",
    },
  ];

  return (
    <section id="adoptar" className="section-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 reveal ${headerVisible ? "visible" : ""}`}
        >
          <span className="section-label">
            Proceso Simple
          </span>
          <h2 className="section-title">
            Como Adoptar
          </h2>
          <p className="section-text max-w-2xl mx-auto">
            Adoptar un gato es una decision hermosa. Hemos simplificado el proceso para que
            sea facil y seguro tanto para ti como para tu futuro companero.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="steps-container">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`elegant-step-card reveal ${stepsVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <span className="step-number">{step.number}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div
          ref={ctaRef}
          className={`mt-20 text-center reveal-scale ${ctaVisible ? "visible" : ""}`}
        >
          <div className="inline-block border border-white/20 p-12 max-w-2xl">
            <h3 className="text-2xl font-light tracking-wide mb-4">
              Listo para dar el paso?
            </h3>
            <p className="text-white/60 mb-8 font-light">
              Miles de gatos han encontrado hogares amorosos gracias a personas como tu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="elegant-btn-light btn-shine">
                Iniciar Solicitud
              </button>
              <button className="elegant-btn-outline btn-shine">
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
