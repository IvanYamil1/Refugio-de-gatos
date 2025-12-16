"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import CatsGallery from "@/components/CatsGallery";
import AdoptionProcess from "@/components/AdoptionProcess";
import DonateSection from "@/components/DonateSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
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
  };

  if (!showContent) {
    return (
      <div className="elegant-container">
        {/* Top small logo */}
        <span className="top-logo fade-in">
          P A T I T A S&nbsp;&nbsp;&nbsp;F E L I C E S
        </span>

        {/* Center main logo with blur effect */}
        <div className="center-logo fade-in-delay-1">
          {/* Clear layer as base */}
          <h1 className="main-title-clear">
            PATITAS FELICES
          </h1>
          {/* Blurred layer on top - moves like a wave */}
          <span className="main-title-blurred" aria-hidden="true">
            PATITAS FELICES
          </span>
        </div>

        {/* Subtitle */}
        <p className="subtitle fade-in-delay-2">
          Refugio de Gatos
        </p>

        {/* Enter button */}
        {isLoaded && (
          <button
            onClick={() => setShowContent(true)}
            className="elegant-button fade-in"
          >
            Entrar
          </button>
        )}

        {/* Loading text */}
        <span className="loading-text fade-in-delay-3">
          {!isLoaded ? (
            <>Loading...<span className="loading-percentage">{loadingProgress}%</span>completed</>
          ) : (
            "Bienvenido"
          )}
        </span>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section id="inicio" className="hero-section">
          <div className="hero-overlay" />
          <div className="hero-content">
            <span className="hero-subtitle fade-in">Refugio de Gatos</span>
            <h1 className="hero-title fade-in-delay-1">PATITAS FELICES</h1>
            <p className="hero-description fade-in-delay-2">
              Donde cada gato encuentra su hogar perfecto
            </p>
            <div className="hero-buttons fade-in-delay-3">
              <a href="#gatos" onClick={(e) => scrollToSection(e, "gatos")} className="hero-btn-primary">Ver Gatos</a>
              <a href="#adoptar" onClick={(e) => scrollToSection(e, "adoptar")} className="hero-btn-secondary">Adoptar</a>
            </div>
          </div>
          <div className="hero-scroll">
            <span>Scroll</span>
            <div className="scroll-line" />
          </div>
        </section>

        <AboutSection />
        <CatsGallery />
        <AdoptionProcess />
        <DonateSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
