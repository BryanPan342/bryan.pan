import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.scss';

export default function Home(): JSX.Element {
  return (
    <Layout id={styles.container}>
      <div id={styles.splash}>
        <div id={styles.designer} className={styles['background-text']}>
          DESIGNER
        </div>
        <div id={styles.developer} className={styles['background-text']}>
          DEVELOPER
        </div>
        <div id={styles['splash-text']}>
          <h3>BRYAN PAN</h3>
          <h1>Building cool shit with magic.</h1>
        </div>
        <div id={styles.magic}>
          <Image src="/magic.png" layout="responsive" width="293.96px" height="230.81px" />
        </div>
      </div>
      <div id={styles['work-container']}>
        <h3>WORK</h3>
        <h1>Selected feats of magic</h1>
      </div>
    </Layout>
  );
}
