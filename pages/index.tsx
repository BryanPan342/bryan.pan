import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.scss';

export default function Home(): JSX.Element {
  return (
    <Layout id={styles.container}>
      <div id={styles.splash}>
        <h3>BRYAN PAN</h3>
        <h1>Building cool shit with magic.</h1>
      </div>
      <div id={styles['work-container']}>
        <h3>WORK</h3>
        <h1>Selected feats of magic</h1>
      </div>
    </Layout>
  );
}
