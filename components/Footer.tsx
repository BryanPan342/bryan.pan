import React, { useState } from 'react';
import styles from '../styles/Footer.module.scss';

export default function Footer(): JSX.Element {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
  }

  return (
    <footer id={styles.footer}>
      <h4>WORK WITH ME</h4>
      <p>
        Got an idea? If you have a project in mind,
        please reach out below or send me an email.
        I’ll respond within 24 hours.
      </p>

      <form className={styles.contact} onSubmit={onSubmit} >
        <div style={{display: 'flex', columnGap: '20px' }} >
          <div className={styles.group}>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' placeholder='Name' onChange={(e) => setName(e.target.value)} />  
          </div>
          <div className={styles.group}>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className={styles.group}>
          <label htmlFor='message'>Message</label>
          <textarea name='message' placeholder='Blah blah blah' onChange={(e) => setMessage(e.target.value)} />
        </div>
        <input type='submit' value='SUBMIT' id={styles.submit}/>
      </form >
    </footer>
  );
}