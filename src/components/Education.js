import React from 'react';
import SectionWrapper from './SectionWrapper';
import styles from './Education.module.css';

export default function Education({ education }) {
  return (
    <SectionWrapper id="education" label="Education">
      <h2 className={`${styles.title} fade-up`}>A journey of<br />self-discovery &amp; growth.</h2>
      {education.map((e) => (
        <div key={`${e.degree}-${e.period}`} className={`${styles.item} fade-up`}>
          <div className={styles.year}>{e.period}</div>
          <div className={styles.right}>
            <div className={styles.degree}>{e.degree}</div>
            <div className={styles.school}>{e.school}</div>
            <div className={styles.grade}>{e.grade}</div>
            {e.description && <p className={styles.desc}>{e.description}</p>}
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
}
