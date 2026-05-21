import React from 'react';
import SectionWrapper from './SectionWrapper';
import styles from './Skills.module.css';

export default function Skills({ skills }) {
  return (
    <SectionWrapper id="skills" label="Technical skills">
      <div className="fade-up">
        {skills.map((cat) => (
          <div key={cat.category} className={styles.category}>
            <div className={styles.catLabel}>{cat.category}</div>
            <div className={styles.pills}>
              {cat.items.map((item) => (
                <span
                  key={item}
                  className={`${styles.pill} ${cat.highlight.includes(item) ? styles.highlighted : ''}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
