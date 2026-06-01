import Image from 'next/image';
import React from 'react';
import styles from '../styles/Navbar.module.scss';
import Link from './Link';

export default function Navbar(): JSX.Element {
  return (
    <header id={styles.navbar}>
      <Link href="/" className={styles.icon}>
        <Image src="/icon.png" layout="responsive" width="53.53px" height="40px" alt="Bryan Pan monogram" />
      </Link>
      <nav id={styles.links} aria-label="Primary navigation">
        <Link href="/#work">WORK</Link>
        <Link href="/about">ABOUT</Link>
        <a href="https://www.linkedin.com/in/blpan/" target="_blank" rel="noreferrer">
          LINKEDIN
        </a>
        <a className="button-link" href="#contact">
          LET&apos;S WORK TOGETHER
        </a>
      </nav>
    </header>
  );
}
