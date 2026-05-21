import React from 'react';
import SectionWrapper from './SectionWrapper';
import styles from './Running.module.css';

export default function Running() {
  return (
    <SectionWrapper id="endurance" label="Fitness & Running🥇">
      <div className={`${styles.layout} fade-up`}>
        <div className={styles.left}>
          <h2 className={styles.title}>Miles<br />Logged.</h2>
          <p className={styles.intro}>
            When I'm not writing backend code, you'll usually find me training out on the roads. Balancing software development with long-distance running keeps my mind sharp, my body disciplined, and my focus sharp.
          </p>
          <div className={styles.linkContainer}>
            <a 
              href="https://www.strava.com/athletes/rathishkumar" 
              target="_blank" 
              rel="noreferrer" 
              className={styles.stravaBtn}
            >
              Follow my training on Strava
            </a>
          </div>
        </div>
        
        <div className={styles.right}>
          {/* Custom Designed Premium Activity Card */}
          <div className={styles.customCard}>
            <div className={styles.cardHeader}>
              <div className={styles.brandGroup}>
                <span className={styles.stravaIcon}>🧡</span>
                <span className={styles.brandName}>STRAVA TRACKING</span>
              </div>
              <span className={styles.pulseBadge}>● LIVE RECON</span>
            </div>
            
            <div className={styles.metricRow}>
              <div className={styles.metricBlock}>
                <div className={styles.metricLabel}>Target Distance</div>
                <div className={styles.metricValue}>Half Marathon</div>
              </div>
              <div className={styles.metricBlock}>
                <div className={styles.metricLabel}>Weekly Volume</div>
                <div className={styles.metricValue}>Base Training</div>
              </div>
            </div>

            <div className={styles.cardDivider}></div>

            <div className={styles.profileSummary}>
              <div className={styles.avatarPlaceholder}>🏃‍♂️</div>
              <div>
                <div className={styles.runnerName}>Rathish Kumar M</div>
                <div className={styles.runnerLoc}>Bengaluru, India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}