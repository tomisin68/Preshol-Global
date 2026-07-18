'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface Testimonial {
  text: string;
  name: string;
  country: string;
  avatarLabel: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    text: 'Preshol Global came to our community when we had lost hope. The mental health conversations they facilitated changed how we see ourselves and our futures. We learned that our struggles are valid and that healing is possible.',
    name: 'Community Member',
    country: 'Nigeria Mission',
    avatarLabel: 'Portrait of community member',
  },
  {
    text: 'I never thought someone would guide me toward international opportunities from my small town. The Global Pathway program opened doors I did not even know existed. Today I am pursuing my dreams beyond borders.',
    name: 'Young Beneficiary',
    country: 'Ghana Mission',
    avatarLabel: 'Portrait of young beneficiary',
  },
  {
    text: 'The Youth Leadership Forum gave me clarity and confidence I never had. The facilitators treated us like leaders before we even believed we were. That investment in us will ripple through our entire generation.',
    name: 'Youth Forum Participant',
    country: 'Uganda Mission',
    avatarLabel: 'Portrait of youth forum participant',
  },
  {
    text: 'As a faith community leader, witnessing Preshol Global combine faith, mental health, and practical development was extraordinary. They understand that whole-person healing is the foundation of community transformation.',
    name: 'Community Leader',
    country: "Côte d'Ivoire Mission",
    avatarLabel: 'Portrait of community leader',
  },
];

/** Visible slide count: 2 on desktop (>768px), 1 on mobile — matches the
 * original `getVisible()` breakpoint exactly. */
function getVisible() {
  if (typeof window === 'undefined') return 2;
  return window.innerWidth > 768 ? 2 : 1;
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);
  const [current, setCurrent] = useState(0);
  const currentRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const applyTransform = useCallback((index: number) => {
    const track = trackRef.current;
    const firstSlide = slideRefs.current[0];
    if (!track || !firstSlide) return;
    const slideW = firstSlide.offsetWidth + 32; // includes margin
    track.style.transform = `translateX(-${index * slideW}px)`;
  }, []);

  const update = useCallback(
    (n: number) => {
      const vis = getVisible();
      const max = TESTIMONIALS.length - vis;
      const next = Math.max(0, Math.min(n, max));
      currentRef.current = next;
      setCurrent(next);
      applyTransform(next);
    },
    [applyTransform]
  );

  const startAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const vis = getVisible();
      const max = TESTIMONIALS.length - vis;
      const next = currentRef.current >= max ? 0 : currentRef.current + 1;
      currentRef.current = next;
      setCurrent(next);
      applyTransform(next);
    }, 5000);
  }, [applyTransform]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startAutoPlay]);

  useEffect(() => {
    function onResize() {
      update(currentRef.current);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [update]);

  const goPrev = () => {
    update(current - 1);
    startAutoPlay();
  };
  const goNext = () => {
    update(current + 1);
    startAutoPlay();
  };
  const goTo = (i: number) => {
    update(i);
    startAutoPlay();
  };

  return (
    <section id="testimonials" aria-labelledby="testi-heading">
      <div className="container">
        <div className="testimonials-header reveal">
          <span className="section-tag">Stories of Change</span>
          <h2 id="testi-heading">Real Lives,<br /><em>Real Transformation</em></h2>
        </div>

        <div className="testi-carousel reveal">
          <div className="testi-track" id="testiTrack" ref={trackRef}>
            {TESTIMONIALS.map((t, i) => (
              <blockquote
                className="testi-slide"
                key={t.name}
                ref={(el) => {
                  slideRefs.current[i] = el;
                }}
              >
                <p className="testi-text">{t.text}</p>
                <div className="testi-person">
                  <div className="testi-avatar" role="img" aria-label={t.avatarLabel}></div>
                  <div>
                    <h4>{t.name}</h4>
                    <p className="testi-country">
                      <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-map-pin"></use></svg> {t.country}
                    </p>
                  </div>
                </div>
              </blockquote>
            ))}
          </div>

          <div className="testi-controls">
            <button className="testi-btn" id="testiPrev" aria-label="Previous testimonial" onClick={goPrev}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="testi-dots" id="testiDots">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  className={`testi-dot${i === current ? ' active' : ''}`}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button className="testi-btn" id="testiNext" aria-label="Next testimonial" onClick={goNext}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
