'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : undefined} aria-label="Main navigation">
        <div className="nav-inner">
          <a href="#" className="nav-logo" aria-label="Preshol Global Home">
            <div className="nav-logo-mark" aria-hidden="true">
              <Image
                src="/logo.png"
                alt="Preshol Global Logo"
                width={764}
                height={326}
                style={{ height: '52px', width: 'auto', display: 'block', objectFit: 'contain' }}
              />
            </div>
            <span className="nav-logo-text">
              Preshol <span>Global</span>
            </span>
          </a>

          <div className="nav-links" role="menubar">
            <a href="/#mission" role="menuitem">About</a>
            <a href="/#founder" role="menuitem">Founder</a>
            <a href="/#programs" role="menuitem">Programs</a>
            <a href="/#footprint" role="menuitem">Footprint</a>
            <a href="/#gallery" role="menuitem">Gallery</a>
            <a href="/#testimonials" role="menuitem">Stories</a>
            <Link href="/blog" role="menuitem">Blog</Link>
            <a href="/#contact" className="nav-cta" role="menuitem">Partner With Us</a>
          </div>

          <button
            className={`hamburger${mobileOpen ? ' active' : ''}`}
            id="hamburger"
            aria-label="Open mobile menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav className={`mobile-menu${mobileOpen ? ' open' : ''}`} id="mobileMenu" aria-label="Mobile navigation">
        <a href="/#mission" onClick={closeMobile}>About</a>
        <a href="/#founder" onClick={closeMobile}>Founder</a>
        <a href="/#programs" onClick={closeMobile}>Programs</a>
        <a href="/#footprint" onClick={closeMobile}>Footprint</a>
        <a href="/#gallery" onClick={closeMobile}>Gallery</a>
        <a href="/#testimonials" onClick={closeMobile}>Stories</a>
        <Link href="/blog" onClick={closeMobile}>Blog</Link>
        <a href="/#contact" onClick={closeMobile} style={{ color: 'var(--gold-lt)' }}>Partner With Us</a>
      </nav>
    </>
  );
}
