import React from 'react';
import SectionWrapper from './SectionWrapper';
import styles from './About.module.css';

export default function About({ meta }) {
  const details = [
    { label: 'Location',         value: meta.location },
    { label: 'Current Role',     value: meta.currentRole },
    { label: 'Company',          value: meta.currentCompany },
    { label: 'Status',           value: meta.availability, green: true },
    { label: 'Education',        value: meta.education },
    { label: 'Focus',            value: meta.focus, isFocusTags: true }, // Added flag for focus section styling
  ];

  return (
    <SectionWrapper id="about" label="About me">
      <div className={`${styles.layout} fade-up`}>
        <div className={styles.left}>
          <h2 className={styles.title}>
            Motivated.<br />Versatile.<br />Always learning.
          </h2>
          <p className={styles.bio}>{meta.about1}</p>
          <p className={styles.bio}>{meta.about2}</p>
        </div>
        <div className={styles.detailGrid}>
          {details.map((d) => (
            <div key={d.label} className={`${styles.detail} ${d.isFocusTags ? styles.focusDetailCard : ''}`}>
              <div className={styles.detailLabel}>{d.label}</div>
              
              {d.isFocusTags ? (
                /* Clean badging architecture for the Focus array */
                <div className={styles.tagContainer}>
                  {d.value.split('·').map((tag) => (
                    <span key={tag.trim()} className={styles.focusBadge}>
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              ) : (
                /* Regular Key-Value Rows */
                <div className={`${styles.detailValue} ${d.green ? styles.green : ''}`}>
                  {d.green ? '● ' : ''}{d.value}
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}