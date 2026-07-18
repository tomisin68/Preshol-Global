import Image from 'next/image';
import type { PortableTextComponents } from '@portabletext/react';
import type { SanityImageSource } from '@sanity/image-url';
import { urlFor } from '@/lib/sanity/image';
import styles from './post-body.module.css';

interface PortableTextImageValue {
  asset?: { _ref: string };
  alt?: string;
  caption?: string;
}

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: PortableTextImageValue }) => {
      if (!value?.asset) return null;
      const imageUrl = urlFor(value as SanityImageSource).width(1200).fit('max').url();
      return (
        <span className={styles.image}>
          <Image
            src={imageUrl}
            alt={value.alt || ''}
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 760px"
          />
          {value.caption && <span className={styles.caption}>{value.caption}</span>}
        </span>
      );
    },
  },
  block: {
    h2: ({ children }) => <h2 className={styles.h2}>{children}</h2>,
    h3: ({ children }) => <h3 className={styles.h3}>{children}</h3>,
    normal: ({ children }) => <p className={styles.p}>{children}</p>,
    blockquote: ({ children }) => <blockquote className={styles.quote}>{children}</blockquote>,
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className={styles.link}
        target={value?.href?.startsWith('http') ? '_blank' : undefined}
        rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
  },
};
