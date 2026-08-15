"use client";

import { useEffect, useRef } from "react";

interface VideoBackgroundProps {
  src?: string;
  poster?: string;
  className?: string;
}

/**
 * Vídeo de fundo fullscreen com autoplay mudo, pausado quando fora da viewport
 * (economiza CPU/bateria) e desativado por completo em prefers-reduced-motion.
 * Sem `src` (nenhum vídeo real fornecido ainda), o componente não renderiza —
 * quem chama deve fornecer um fallback estático (ver Hero.tsx).
 */
export function VideoBackground({ src, poster, className }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  if (!src) return null;

  return (
    <video
      ref={videoRef}
      className={className}
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
