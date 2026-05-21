import React, { useEffect, useState } from 'react';
import SectionWrapper from './SectionWrapper';
import BlogCard from './BlogCard';
import styles from './Blogs.module.css';

const MEDIUM_USERNAME = 'rathishkumar022_3872'; // ← update if your Medium username changes

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMediumFeed() {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`
        );

        const data = await response.json();
        console.log(data);
        setPosts((data.items || []).slice(0, 3));
      } catch (err) {
        console.error('Error fetching Medium feed:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMediumFeed();
  }, []);

  return (
    <SectionWrapper id="blogs" label="Blogs">
      <h2 className={styles.blogsTitle}>        Thoughts &amp; tutorials<br />on Medium.
      </h2>

      <a
        href="https://medium.com/@rathishkumar022_3872"
        target="_blank"
        rel="noreferrer"
        className={styles.mediumLink}
      >
        View all blogs →
      </a>

      {loading && (
        <div className={styles.state}>
          <div className={styles.spinner} />
          <span>Loading posts…</span>
        </div>
      )}

      {error && !loading && (
        <div className={styles.state}>
          <span className={styles.errorText}>
            Couldn't load posts right now.{' '}
            <a
              href={`https://medium.com/@${MEDIUM_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className={styles.errorLink}
            >
              View on Medium →
            </a>
          </span>
        </div>
      )}

      {!loading && !error && posts.length > 0 && (
        <div className={styles.blogsGrid}>          {posts.map((post, i) => (
          <BlogCard key={i} post={post} />
        ))}
        </div>
      )}

      {!loading && !error && posts.length === 0 && (
        <div className={styles.state}>
          <span className={styles.errorText}>No posts found yet.</span>
        </div>
      )}
    </SectionWrapper>
  );
}