import React from 'react';
import SectionWrapper from './SectionWrapper';
import styles from './Certifications.module.css';

export default function Certifications({ certifications }) {
  return (
    <SectionWrapper id="certifications" label="Certifications">
      <h2 className={`${styles.title} fade-up`}>Industry-recognised<br />credentials.</h2>
      <div className={`${styles.grid} fade-up`}>
        {certifications.map((c) => (
          <div key={c.name} className={styles.card}>
            <div className={styles.badge}>{c.emoji}</div>
            <div className={styles.name}>{c.name}</div>
            <div className={styles.issuer}>{c.issuer}</div>
            <div className={styles.period}>{c.period}</div>
            <a className={styles.link} href={c.url} target="_blank" rel="noreferrer">
              View certificate →
            </a>
            <div className={styles.tags}>
              {c.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
