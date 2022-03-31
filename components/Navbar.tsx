import Image from 'next/image';
import React from 'react';
import styles from '../styles/Navbar.module.scss';
import Link from './Link';


export default function Navbar(): JSX.Element {
  return (
    <header id={styles.navbar}>
      <Link href="/" className={styles.icon}>
        <Image src="/icon.png" layout="responsive" width="53.53px" height="40px" />
      </Link>
      <div id={styles.links}>
        <Link href="/about">ABOUT</Link>
        <button>
          CONTACT
        </button>
      </div>
    </header>
  );
}
