"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: imagesRef, isVisible: imagesVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="nosotros" className="section-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <div
            ref={imagesRef}
            className={`grid grid-cols-2 gap-4 reveal-left ${imagesVisible ? "visible" : ""}`}
          >
            <div className="space-y-4">
              <div className="relative h-48 overflow-hidden elegant-image-frame">
                <Image
                  src="/imagen2.jpg"
                  alt="Gato en el refugio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 overflow-hidden elegant-image-frame">
                <Image
                  src="/imagen3.jpg"
                  alt="Voluntarios cuidando gatos"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-64 overflow-hidden elegant-image-frame">
                <Image
                  src="/imagen4.jpg"
                  alt="Gatos jugando"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 overflow-hidden elegant-image-frame">
                <Image
                  src="/imagen5.jpg"
                  alt="Familia adoptando"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={sectionRef} className={`reveal-right ${sectionVisible ? "visible" : ""}`}>
            <span className="section-label">
              Sobre Nosotros
            </span>
            <h2 className="section-title">
              Una Decada Dedicada al Bienestar Felino
            </h2>
            <p className="section-text mb-4">
              Patitas Felices nacio en 2014 con un sueno: crear un refugio donde cada gato abandonado
              pudiera encontrar amor, cuidado y una segunda oportunidad de vida. Lo que comenzo como
              un pequeno esfuerzo se ha convertido en una comunidad vibrante de voluntarios y
              adoptantes comprometidos.
            </p>
            <p className="section-text mb-8">
              Nuestro equipo de profesionales y voluntarios trabaja incansablemente para rescatar,
              rehabilitar y encontrar hogares amorosos para gatos de todas las edades y condiciones.
            </p>

            {/* Stats */}
            <div
              ref={statsRef}
              className={`grid grid-cols-2 gap-6 reveal ${statsVisible ? "visible" : ""}`}
            >
              <div className="elegant-stat stagger-1">
                <span className="stat-number">500+</span>
                <span className="stat-label">Gatos Adoptados</span>
              </div>
              <div className="elegant-stat stagger-2">
                <span className="stat-number">10</span>
                <span className="stat-label">Anos de Experiencia</span>
              </div>
              <div className="elegant-stat stagger-3">
                <span className="stat-number">50+</span>
                <span className="stat-label">Voluntarios Activos</span>
              </div>
              <div className="elegant-stat stagger-4">
                <span className="stat-number">100%</span>
                <span className="stat-label">Dedicacion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
