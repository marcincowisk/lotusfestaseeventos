"use client";

import { useEffect, useRef } from "react";

/**
 * Hook leve de scroll-reveal via IntersectionObserver — evita depender de uma
 * lib de animação para o caso mais comum (fade + translateY ao entrar na viewport).
 * Uso: const ref = useReveal<HTMLDivElement>(); <div ref={ref} className="reveal">
 */
export function useReveal<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
