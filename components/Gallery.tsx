'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from './Lightbox';
import { GALLERY_IMAGES, GALLERY_FILTERS } from './gallery-data';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = () => setLightboxIndex(null);
  const openLightbox = (i: number) => setLightboxIndex(i);
  const prevLightbox = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
  const nextLightbox = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length));

  return (
    <section id="gallery" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="gallery-header reveal">
          <span className="section-tag">Photo Gallery</span>
          <h2 id="gallery-heading">Faces of <em>Impact</em></h2>
        </div>

        <div className="gallery-filters reveal" role="tablist" aria-label="Gallery filters">
          {GALLERY_FILTERS.map((filter) => (
            <button
              key={filter.value}
              className={`filter-btn${activeFilter === filter.value ? ' active' : ''}`}
              data-filter={filter.value}
              role="tab"
              aria-selected={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.icon && (
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><use href={`#${filter.icon}`}></use></svg>
              )}
              {filter.icon ? ` ${filter.label}` : filter.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid" id="galleryGrid">
          {GALLERY_IMAGES.map((img, i) => {
            const show = activeFilter === 'all' || img.country === activeFilter;
            return (
              <figure
                className={`gallery-item ${img.size}`}
                data-country={img.country}
                data-caption={img.fullCaption}
                key={img.src}
                tabIndex={0}
                style={{
                  transition: 'opacity .35s, transform .35s',
                  opacity: show ? 1 : 0.15,
                  transform: show ? 'scale(1)' : 'scale(0.97)',
                  pointerEvents: show ? 'auto' : 'none',
                }}
                onClick={() => openLightbox(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') openLightbox(i);
                }}
              >
                <Image src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" />
                <figcaption className="gallery-item-overlay">
                  <p className="gallery-item-tag">
                    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><use href={`#${img.tagIcon}`}></use></svg> {img.tag}
                  </p>
                  <p className="gallery-item-caption">{img.gridCaption}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      <Lightbox
        images={GALLERY_IMAGES}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevLightbox}
        onNext={nextLightbox}
      />
    </section>
  );
}
