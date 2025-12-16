import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imagen1.jpg"
          alt="Gato adorable"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <span className="inline-block bg-amber-500/90 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🐾 Refugio de Gatos
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Cada gato merece un <span className="text-amber-400">hogar lleno de amor</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
            En Patitas Felices rescatamos, cuidamos y encontramos familias amorosas para gatos abandonados.
            Únete a nuestra misión de dar una segunda oportunidad a estos pequeños compañeros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#gatos"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 text-center shadow-lg"
            >
              Ver Gatos en Adopción
            </Link>
            <Link
              href="#nosotros"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all border border-white/30 text-center"
            >
              Conoce Nuestra Historia
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-amber-400">500+</p>
              <p className="text-gray-300">Gatos Adoptados</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-amber-400">50+</p>
              <p className="text-gray-300">Gatos en Espera</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-amber-400">10</p>
              <p className="text-gray-300">Años de Experiencia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
