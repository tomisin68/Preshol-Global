import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/blog/BlogCard';
import { sanityClient } from '@/lib/sanity/client';
import { postsQuery } from '@/lib/sanity/queries';
import type { PostListItem } from '@/lib/sanity/types';
import styles from './page.module.css';

const TITLE = 'Blog | Preshol Global';
const DESCRIPTION =
  'Stories, insights, and updates from Preshol Global on mental health advocacy, community outreach, and global opportunity guidance across Africa.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    url: 'https://www.presholGlobal.org/blog',
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'Preshol Global',
    images: [
      {
        url: '/images/hero/preshol-hero1.jpeg',
        width: 1280,
        height: 853,
        alt: 'Preshol Global — community outreach across Africa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/images/hero/preshol-hero1.jpeg'],
  },
};

export const revalidate = 60;

export default async function BlogIndexPage() {
  const posts = await sanityClient.fetch<PostListItem[]>(postsQuery);

  return (
    <>
      <Navbar />
      <main id="main" className={styles.wrap}>
        <div className="container">
          <div className={styles.header}>
            <span className="section-tag">The Preshol Global Blog</span>
            <h1>Stories of <em>Impact and Hope</em></h1>
            <p>
              Reflections, updates, and insights from our work restoring hope and opening
              doors across Africa and beyond.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className={styles.empty}>
              No posts published yet — check back soon.
            </p>
          ) : (
            <div className={styles.grid}>
              {posts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
