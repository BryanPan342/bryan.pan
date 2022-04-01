import { GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';
import Project, { ProjectProps } from '../components/Project';
import styles from '../styles/Home.module.scss';

export interface HomeProps {
  readonly projects: ProjectProps[];
}

export default function Home({projects}: HomeProps): JSX.Element {
  return (
    <Layout id={styles.container}>
      <div id={styles.splash}>
        <div id={styles['splash-text']}>
          <h3>BRYAN PAN</h3>
          <h1>Building cool shit with magic.</h1>
        </div>
        <div id={styles.developer} className={styles['background-text']}>
          DEVELOPER
        </div>
        <div id={styles.designer} className={styles['background-text']}>
          DESIGNER
        </div>
        <div id={styles.magic}>
          <Image src="/magic.png" layout="responsive" width="293.96px" height="230.81px" />
        </div>
      </div>
      <div id={styles['work-container']}>
        <div id={styles['work-header']}>
          <h3>WORK</h3>
          <h1>Selected feats of magic</h1>
        </div>
        <div id={styles.projects}>
          {projects.map((props: ProjectProps) => <Project key={props.title} {...props} />)}
        </div>
      </div>
    </Layout>
  );
}

const dummyProject: ProjectProps = {
  title: 'PROJECT NAME',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ex tortor, commodo in dolor aliquet, tempus fringilla ipsum.',
  color: '#C4C4C4',
  cta: 'bryanpan.co',
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      projects: Array(5).fill(dummyProject),
    },
  };
};
