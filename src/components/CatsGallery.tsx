"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const cats = [
  {
    id: 1,
    name: "Luna",
    age: "2 años",
    description: "Cariñosa y juguetona, adora los mimos",
    image: "/imagen6.jpg",
  },
  {
    id: 2,
    name: "Michi",
    age: "1 año",
    description: "Tranquilo y perfecto para apartamentos",
    image: "/imagen7.jpg",
  },
  {
    id: 3,
    name: "Bigotes",
    age: "3 años",
    description: "Aventurero y curioso, muy sociable",
    image: "/imagen8.jpg",
  },
  {
    id: 4,
    name: "Canela",
    age: "6 meses",
    description: "Gatita dulce buscando su primer hogar",
    image: "/imagen9.jpg",
  },
  {
    id: 5,
    name: "Simba",
    age: "4 años",
    description: "Majestuoso y calmado, ideal para familias",
    image: "/imagen10.jpg",
  },
  {
    id: 6,
    name: "Nube",
    age: "8 meses",
    description: "Peludo y adorable, muy cariñoso",
    image: "/imagen11.jpg",
  },
];

export default function CatsGallery() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="gatos" className="section-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 reveal ${headerVisible ? "visible" : ""}`}
        >
          <span className="section-label-dark">
            Encuentra tu compañero
          </span>
          <h2 className="section-title-dark">
            Gatos en Adopcion
          </h2>
          <p className="section-text-dark max-w-2xl mx-auto">
            Conoce a algunos de nuestros adorables gatos que buscan un hogar lleno de amor.
          </p>
        </div>

        {/* Cats Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cats.map((cat, index) => (
            <div
              key={cat.id}
              className={`elegant-card group reveal-scale ${gridVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-72 overflow-hidden card-image">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="elegant-badge">{cat.age}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light text-gray-900 mb-2 tracking-wide">{cat.name}</h3>
                <p className="text-gray-600 text-sm mb-4 font-light">{cat.description}</p>
                <button className="elegant-btn-dark btn-shine w-full">
                  Conocer a {cat.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className={`text-center mt-16 reveal ${ctaVisible ? "visible" : ""}`}
        >
          <button className="elegant-btn-outline-dark btn-shine">
            Ver Todos los Gatos
          </button>
        </div>
      </div>
    </section>
  );
}
