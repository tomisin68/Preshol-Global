import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { portableTextComponents } from '@/components/blog/PortableTextComponents';
import { sanityClient } from '@/lib/sanity/client';
import { urlFor } from '@/lib/sanity/image';
import { postBySlugQuery, postSlugsQuery } from '@/lib/sanity/queries';
import type { PostDetail, PostSlugEntry } from '@/lib/sanity/types';
import styles from './page.module.css';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await sanityClient.fetch<PostSlugEntry[]>(postSlugsQuery);
  return slugs.map((entry) => ({ slug: entry.slug }));
}

async function getPost(slug: string) {
  return sanityClient.fetch<PostDetail | null>(postBySlugQuery, { slug });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || post.excerpt;
  const ogImageSource = post.seo?.ogImage || post.mainImage;

  return {
    title: `${title} | Preshol Global Blog`,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.publishedAt,
      images: ogImageSource ? [urlFor(ogImageSource).width(1200).height(630).url()] : undefined,
    },
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main id="main" className={styles.wrap}>
        <article className={`container ${styles.article}`}>
          <header className={styles.header}>
            {post.categories && post.categories.length > 0 && (
              <span className="section-tag">{post.categories[0].title}</span>
            )}
            <h1>{post.title}</h1>
            <div className={styles.meta}>
              {post.author?.name && <span>{post.author.name}</span>}
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </div>
          </header>

          {post.mainImage && (
            <div className={styles.mainImage}>
              <Image
                src={urlFor(post.mainImage).width(1400).height(800).url()}
                alt={post.title}
                width={1400}
                height={800}
                priority
              />
            </div>
          )}

          <div className={styles.body}>
            <PortableText value={post.body} components={portableTextComponents} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
