'use client';

import { useEffect, useRef, useState } from 'react';

const SLIDES = [
  { src: '/images/hero/preshol-hero4.jpeg', position: 'center top' },
  { src: '/images/hero/preshol-hero1.jpeg', position: 'center 30%' },
  { src: '/images/hero/preshol-hero2.jpeg', position: 'center 60%' },
  { src: '/images/hero/preshol-hero3.jpeg', position: 'center 80%' },
  { src: '/images/hero/preshol-hero5.jpeg', position: '40% center' },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [scrollCueHidden, setScrollCueHidden] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (n: number) => {
    setCurrent(((n % SLIDES.length) + SLIDES.length) % SLIDES.length);
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 5500);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 100) setScrollCueHidden(true);
    }
    window.addEventListener('scroll', onScroll, { once: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleDotClick = (i: number) => {
    goTo(i);
    startTimer();
  };

  return (
    <section id="hero" aria-label="Hero — Preshol Global">
      <div className="hero-slides" aria-hidden="true">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero-slide${i === current ? ' active' : ''}`}
            style={{ backgroundImage: `url('${slide.src}')`, backgroundPosition: slide.position }}
          />
        ))}
      </div>
      <div className="hero-overlay" aria-hidden="true"></div>

      <div className="hero-content">
        <p className="hero-eyebrow">Non-Profit · Africa &amp; Beyond · Est. 2020</p>
        <h1 className="hero-headline">
          Healing Hearts.<br />
          Empowering Minds.<br />
          <em>Opening Doors.</em>
        </h1>
        <p className="hero-sub">
          We exist to restore hope, strengthen mental wellbeing, and create pathways
          for individuals — especially young people — to thrive locally and globally.
        </p>
        <div className="hero-btns">
          <a href="#programs" className="btn-primary">Explore Our Work</a>
          <a href="#contact" className="btn-outline">Partner With Us</a>
        </div>
      </div>

      <div className="hero-dots" aria-label="Image navigation">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            className={`hero-dot${i === current ? ' active' : ''}`}
            aria-label={`Slide ${i + 1}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>

      <div className="scroll-cue" aria-hidden="true" style={{ opacity: scrollCueHidden ? 0 : undefined }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 10l5 5 5-5" />
        </svg>
        Scroll
      </div>
    </section>
  );
}
