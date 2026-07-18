import type { PortableTextBlock } from 'next-sanity';
import type { SanityImageSource } from '@sanity/image-url';

export interface PostAuthor {
  name: string;
  image?: SanityImageSource;
  bio?: PortableTextBlock[];
}

export interface PostCategory {
  title: string;
  slug: string;
}

export interface PostSeo {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImageSource;
}

export interface PostListItem {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  mainImage?: SanityImageSource;
  publishedAt: string;
  author?: PostAuthor;
  categories?: PostCategory[];
}

export interface PostDetail extends PostListItem {
  body: PortableTextBlock[];
  seo?: PostSeo;
}

export interface PostSlugEntry {
  slug: string;
  publishedAt: string;
}
