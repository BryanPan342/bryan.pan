import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/About.module.scss';

export default function Home(): JSX.Element {
  return (
    <Layout id={styles.container}>
      <div id={styles.splash}>
        <h3>ABOUT</h3>
        <h1>Hi, I’m Bryan [潘博瑞]</h1>
      </div>
    </Layout>
  );
}
