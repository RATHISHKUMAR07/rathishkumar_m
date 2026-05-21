import React from 'react';
import SectionWrapper from './SectionWrapper';
import styles from './Experience.module.css';

export default function Experience({ experience }) {
  // Group consecutive roles at the same company together
  const grouped = experience.reduce((acc, role) => {
    const last = acc[acc.length - 1];
    if (last && last.company === role.company) {
      last.roles.push(role);
    } else {
      acc.push({ company: role.company, roles: [role] });
    }
    return acc;
  }, []);

  // Total tenure string per company
  function totalTenure(roles) {
    // Just show earliest period start → latest period end
    const first = roles[roles.length - 1].period.split('—')[0].trim();
    const last  = roles[0].period.split('—')[1]?.trim() || 'Present';
    return `${first} — ${last}`;
  }

  return (
    <SectionWrapper id="experience" label="Experience">
      <h2 className={`${styles.title} fade-up`}>
        My work<br />as a developer.
      </h2>

      {grouped.map((group) => (
        <div key={group.company} className={`${styles.companyBlock} fade-up`}>

          {/* Company header row */}
          <div className={styles.companyHeader}>
            <div className={styles.companyLogo}>
              {group.company.charAt(0)}
            </div>
            <div className={styles.companyInfo}>
              <div className={styles.companyName}>{group.company}</div>
              <div className={styles.companyMeta}>
                Full-time · {group.roles[0].location || 'Bengaluru, Karnataka, India · Hybrid'}
              </div>
              <div className={styles.companyTenure}>{totalTenure(group.roles)}</div>
            </div>
          </div>

          {/* Roles under this company */}
          <div className={styles.rolesTimeline}>
            {group.roles.map((role, i) => (
              <div key={`${role.role}-${role.period}`} className={styles.roleItem}>
                {/* Timeline dot + line */}
                <div className={styles.timelineCol}>
                  <div className={`${styles.dot} ${role.current ? styles.dotActive : ''}`} />
                  {i < group.roles.length - 1 && <div className={styles.line} />}
                </div>

                {/* Role content */}
                <div className={styles.roleContent}>
                  <div className={styles.roleRow}>
                    <div>
                      <div className={styles.roleName}>{role.role}</div>
                      <div className={styles.rolePeriod}>
                        {role.period}
                        {role.current && <span className={styles.currentBadge}>CURRENT</span>}
                      </div>
                    </div>
                  </div>

                  <p className={styles.roleDesc}>{role.description}</p>

                  <div className={styles.tags}>
                    {role.tags.map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      ))}
    </SectionWrapper>
  );
}