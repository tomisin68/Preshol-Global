import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity/image';
import type { PostListItem } from '@/lib/sanity/types';
import styles from './blog.module.css';

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogCard({ post }: { post: PostListItem }) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <div className={styles.cardImg}>
        {post.mainImage ? (
          <Image
            src={urlFor(post.mainImage).width(640).height(420).url()}
            alt={post.title}
            width={640}
            height={420}
          />
        ) : (
          <div className={styles.cardImgFallback} aria-hidden="true" />
        )}
      </div>
      <div className={styles.cardBody}>
        {post.categories && post.categories.length > 0 && (
          <span className={styles.cardTag}>{post.categories[0].title}</span>
        )}
        <h3>{post.title}</h3>
        {post.excerpt && <p>{post.excerpt}</p>}
        <div className={styles.cardMeta}>
          {post.author?.name && <span>{post.author.name}</span>}
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        </div>
      </div>
    </Link>
  );
}
