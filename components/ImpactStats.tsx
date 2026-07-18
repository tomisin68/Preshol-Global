'use client';

import { useEffect, useRef } from 'react';

const STATS = [
  { target: 7, suffix: '', label: 'Countries' },
  { target: 1500, suffix: '+', label: 'Lives Impacted' },
  { target: 15, suffix: '', label: 'Mission Trips' },
  { target: 4, suffix: '', label: 'Conferences Hosted' },
];

export default function ImpactStats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const numRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let done = false;

    function countUp(el: HTMLDivElement, target: number, suffix: string) {
      const dur = 1800;
      const step = 16;
      let cur = 0;
      const inc = target / (dur / step);
      const t = setInterval(() => {
        cur = Math.min(cur + inc, target);
        el.textContent = (cur >= 1000 ? Math.round(cur).toLocaleString() : Math.round(cur)) + suffix;
        if (cur >= target) clearInterval(t);
      }, step);
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (!done && entries[0].isIntersecting) {
          done = true;
          STATS.forEach((stat, i) => {
            const el = numRefs.current[i];
            if (el) countUp(el, stat.target, stat.suffix);
          });
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    io.observe(section);

    return () => io.disconnect();
  }, []);

  return (
    <section id="impact" aria-labelledby="impact-heading" ref={sectionRef}>
      <div className="impact-overlay" aria-hidden="true"></div>
      <div className="impact-inner container">
        <span className="section-tag">Our Impact</span>
        <h2 className="impact-title reveal" id="impact-heading">Numbers That Tell a Story</h2>
        <p className="impact-sub reveal">
          Across 7 countries in Africa, each outreach represents restored hope,
          strengthened minds, and thousands of lives empowered for sustainable growth.
        </p>
        <div className="stats-row reveal">
          {STATS.map((stat, i) => (
            <div className="stat-item" key={stat.label}>
              <div
                className="stat-num"
                data-target={stat.target}
                data-suffix={stat.suffix || undefined}
                ref={(el) => {
                  numRefs.current[i] = el;
                }}
              >
                0
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
