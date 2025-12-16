"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollTo = (targetPosition: number, duration: number = 1000) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * easeProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      smoothScrollTo(offsetPosition, 1000);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
    }`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="elegant-nav-logo">
            PATITAS FELICES
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#inicio" onClick={(e) => scrollToSection(e, "inicio")} className="elegant-nav-link link-underline">
              Inicio
            </a>
            <a href="#nosotros" onClick={(e) => scrollToSection(e, "nosotros")} className="elegant-nav-link link-underline">
              Nosotros
            </a>
            <a href="#gatos" onClick={(e) => scrollToSection(e, "gatos")} className="elegant-nav-link link-underline">
              Gatos
            </a>
            <a href="#adoptar" onClick={(e) => scrollToSection(e, "adoptar")} className="elegant-nav-link link-underline">
              Adoptar
            </a>
            <a href="#contacto" onClick={(e) => scrollToSection(e, "contacto")} className="elegant-nav-link link-underline">
              Contacto
            </a>
            <a href="#donar" onClick={(e) => scrollToSection(e, "donar")} className="elegant-nav-btn btn-shine">
              Donar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a href="#inicio" onClick={(e) => scrollToSection(e, "inicio")} className="elegant-nav-link">
                Inicio
              </a>
              <a href="#nosotros" onClick={(e) => scrollToSection(e, "nosotros")} className="elegant-nav-link">
                Nosotros
              </a>
              <a href="#gatos" onClick={(e) => scrollToSection(e, "gatos")} className="elegant-nav-link">
                Gatos
              </a>
              <a href="#adoptar" onClick={(e) => scrollToSection(e, "adoptar")} className="elegant-nav-link">
                Adoptar
              </a>
              <a href="#contacto" onClick={(e) => scrollToSection(e, "contacto")} className="elegant-nav-link">
                Contacto
              </a>
              <a href="#donar" onClick={(e) => scrollToSection(e, "donar")} className="elegant-nav-btn inline-block text-center mt-2">
                Donar
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
