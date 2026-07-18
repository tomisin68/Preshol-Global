'use client';

import { useEffect } from 'react';
import type { GalleryImage } from './gallery-data';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const isOpen = currentIndex !== null;
  const current = currentIndex !== null ? images[currentIndex] : null;

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  return (
    <div
      className={`lightbox${isOpen ? ' open' : ''}`}
      id="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button className="lightbox-close" id="lightboxClose" aria-label="Close photo viewer" onClick={onClose}>×</button>
      <button className="lightbox-nav lightbox-prev" id="lightboxPrev" aria-label="Previous photo" onClick={onPrev}>&#8592;</button>
      {/* Original uses a plain <img> so the lightbox can display any gallery
          photo at full viewport size regardless of its rendered thumbnail
          dimensions — keeping that here rather than next/image. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {current && (
        <img className="lightbox-img" id="lightboxImg" src={current.src} alt={current.alt} />
      )}
      <button className="lightbox-nav lightbox-next" id="lightboxNext" aria-label="Next photo" onClick={onNext}>&#8594;</button>
      <div className="lightbox-caption" id="lightboxCaption">{current?.fullCaption ?? ''}</div>
    </div>
  );
}
