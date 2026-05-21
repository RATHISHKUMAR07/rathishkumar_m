import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SectionWrapper from './SectionWrapper';
import styles from './Contact.module.css';

export default function Contact({ meta }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // Securely routes form data straight to your email without a backend
    emailjs.sendForm(
      meta.SERVICE_ID,   // No backticks needed, just pass the object variables directly
      meta.TEMPLATE_ID,  
      formRef.current,   // CRITICAL: You must pass your form reference element here as the 3rd argument!
      meta.PUBLIC_KEY    
    )
    .then(() => {
      setSent(true);
      setLoading(false);
    })
    .catch((error) => {
      console.error("EmailJS error log:", error);
      alert("Oops! The email service failed. Please use the direct mail link on the left.");
      setLoading(false);
    });
  }

  return (
    <SectionWrapper id="contact" label="Contact">
      <h2 className={`${styles.title} fade-up`}>Let's work<br />together.</h2>
      <div className={`${styles.layout} fade-up`}>
        <div>
          <p className={styles.intro}>
            Feel free to reach out for any questions or opportunities! Whether
            it's a project, a role, or just a conversation — my inbox is always open.
          </p>
          <div className={styles.links}>
            <a className={styles.linkRow} href={`mailto:${meta.email}`}>
              <div className={styles.icon}>✉️</div>
              <div>
                <div className={styles.linkLabel}>Email</div>
                <div className={styles.linkVal}>{meta.email}</div>
              </div>
            </a>
            <a className={styles.linkRow} href={meta.githubUrl} target="_blank" rel="noreferrer">
              <div className={styles.icon}><GitHubIcon /></div>
              <div>
                <div className={styles.linkLabel}>GitHub</div>
                <div className={styles.linkVal}>@rathishkumar07</div>
              </div>
            </a>
            <a className={styles.linkRow} href={meta.linkedinUrl} target="_blank" rel="noreferrer">
              <div className={styles.icon}><LinkedInIcon /></div>
              <div>
                <div className={styles.linkLabel}>LinkedIn</div>
                <div className={styles.linkVal}>{meta.name}</div>
              </div>
            </a>
          </div>
        </div>
        <div>
          {sent ? (
            <div className={styles.success}>
              <span>✓</span> Message sent! I'll get back to you soon.
            </div>
          ) : (
            <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
              {/* CRITICAL: The 'name' attributes must match your target EmailJS dynamic template variables */}
              <input type="email" name="user_email" placeholder="Your email" required />
              <input type="text"  name="user_name"  placeholder="Your name"  required />
              <input type="text"  name="subject"    placeholder="Subject"    required />
              <textarea name="message" placeholder="Message" rows={4} required />
              <button type="submit" className={styles.submit} disabled={loading}>
                {loading ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}