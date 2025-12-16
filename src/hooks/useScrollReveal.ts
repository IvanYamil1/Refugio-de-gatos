"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollReveal<T extends HTMLElement>({
  threshold = 0.05,
  rootMargin = "0px 0px -100px 0px",
  triggerOnce = true,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let observer: IntersectionObserver | null = null;

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && observer) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(element);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

// Hook for multiple elements with stagger effect
export function useScrollRevealGroup(count: number, options: UseScrollRevealOptions = {}) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(count).fill(false));
  const refs = useRef<(HTMLElement | null)[]>(new Array(count).fill(null));

  useEffect(() => {
    const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", triggerOnce = true } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.indexOf(entry.target as HTMLElement);
          if (index !== -1 && entry.isIntersecting) {
            setVisibleItems((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [count, options]);

  const setRef = (index: number) => (el: HTMLElement | null) => {
    refs.current[index] = el;
  };

  return { setRef, visibleItems };
}
