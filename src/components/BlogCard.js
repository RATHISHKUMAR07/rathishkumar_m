import React from 'react';
import styles from './BlogCard.module.css';

export default function BlogCard({ post }) {

  const cleanExcerpt = post.description
    ? post.description.replace(/<[^>]+>/g, '').substring(0, 140) + '...'
    : 'Read this article on Medium.';

  const thumbnail =
    post.content?.match(/<img[^>]+src="([^">]+)"/)?.[1] || null;

  return (
    <a
      className={styles.blogCard}
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {thumbnail && (
        <div className={styles.blogThumb}>
          <img src={thumbnail} alt={post.title} />
        </div>
      )}

      <div className={styles.blogBody}>
        <div className={styles.blogDate}>
          {new Date(post.pubDate).toDateString()}
        </div>

        <div className={styles.blogTitle}>
          {post.title}
        </div>

        <div className={styles.blogExcerpt}>
          {cleanExcerpt}
        </div>

        <div className={styles.blogArrow}>
          Read on Medium →
        </div>
      </div>
    </a>
  );
}