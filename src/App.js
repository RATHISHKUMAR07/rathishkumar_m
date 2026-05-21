import React, { useEffect } from 'react';
import config from './data/portfolio.config.json';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import About    from './components/About';
import Skills   from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Blogs    from './components/Blogs';
import Contact  from './components/Contact';
import Footer   from './components/Footer';
import Running from './components/Running';

export default function App() {
  // Scroll-reveal: add .visible when element enters viewport
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Navbar  meta={config.meta} />
      <Hero    meta={config.meta} stats={config.stats} />
      <About   meta={config.meta} />
      <Skills  skills={config.skills} />
      <Experience experience={config.experience} />
      <Certifications certifications={config.certifications} />
      <Education education={config.education} />
      <Blogs blogs={config.blogs} />
      <Running />
      <Contact meta={config.meta} />
      <Footer  meta={config.meta} />
    </>
  );
}
