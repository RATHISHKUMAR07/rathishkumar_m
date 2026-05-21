import React from 'react';
import styles from './SectionWrapper.module.css';

export default function SectionWrapper({ id, label, children }) {
  return (
    <section id={id} className={styles.sec}>
      <div className={styles.container}>
        <div className={`${styles.eyebrow} fade-up`}>
          <div className={styles.line} />
          <span className={styles.label}>{label}</span>
          <div className={styles.line} />
        </div>
        {children}
      </div>
    </section>
  );
}
