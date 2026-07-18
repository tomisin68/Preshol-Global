'use client';

import { useEffect } from 'react';

/**
 * Ports the single IntersectionObserver from index.html (~2549-2558).
 * Adds a `.visible` class to any `.reveal` / `.reveal-left` / `.reveal-right`
 * element once it enters the viewport, then stops observing it (fires once,
 * never re-hides). Call this hook exactly once, from a client component
 * mounted at the page root, after all sections have rendered their markup.
 */
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}
