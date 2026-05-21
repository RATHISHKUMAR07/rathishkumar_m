import React from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'About',       href: '#about' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Certs',       href: '#certifications' },
  { label: 'Education',   href: '#education' },
  { label: 'Blogs',       href: '#blogs' },
  { label: 'Contact',     href: '#contact' },
];

export default function Navbar({ meta }) {
  const initials = meta.name.split(' ').map(w => w[0]).join('');
  return (
    <nav className={styles.nav}>
      <a href="#hero" className={styles.logo}>
        {initials}<span>.</span>
      </a>
      <ul className={styles.links}>
        {NAV_LINKS.map(l => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <a className={styles.cta} href={meta.linkedinUrl} target="_blank" rel="noreferrer">
        LinkedIn ↗
      </a>
    </nav>
  );
}
