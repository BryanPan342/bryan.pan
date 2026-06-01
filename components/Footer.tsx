import React, { useState } from 'react';
import styles from '../styles/Footer.module.scss';

export default function Footer(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (name && email && message) {
      const res = await window.fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.status === 200) {
        setName('');
        setEmail('');
        setMessage('');
      }
    }
  };

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footerIntro}>
        <p>WORK WITH ME</p>
        <h2>Have a product, prototype, or polished interface in mind?</h2>
        <span>
          Tell me what you are building and I’ll respond with questions, next steps, or a good coffee recommendation.
        </span>
      </div>

      <form className={styles.contact} onSubmit={onSubmit}>
        <div className={styles.row}>
          <div className={styles.group}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={name} placeholder="Your name" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className={styles.group}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className={styles.group}>
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="What should we make?" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <input type="submit" value="SUBMIT" className={styles.submit} />
      </form>

      <div className={styles.footerMeta}>
        <strong>BRYAN PAN</strong>
        <div>
          <a href="https://www.linkedin.com/in/blpan/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/BryanPan342" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
