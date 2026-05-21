import React from 'react';
import styles from './Footer.module.css';

const LINKS = [
  { label: 'About',       href: '#about' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Certs',       href: '#certifications' },
  { label: 'Education',   href: '#education' },
  { label: 'Blogs',       href: '#blogs' },
  { label: 'Contact',     href: '#contact' },
];

export default function Footer({ meta }) {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        © {new Date().getFullYear()} | <span>{meta.name}</span> | Built with care❤️
      </p>
      <nav className={styles.nav}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </nav>
    </footer>
  );
}
