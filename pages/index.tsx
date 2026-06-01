import { GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';
import Project, { ProjectProps } from '../components/Project';
import styles from '../styles/Home.module.scss';

export interface HomeProps {
  readonly projects: ProjectProps[];
}

const capabilities = [
  'Product-minded engineering',
  'Design systems & polished interfaces',
  'Prototyping, shipping, and iteration',
];

export default function Home({projects}: HomeProps): JSX.Element {
  return (
    <Layout
      id={styles.container}
      title="Bryan Pan — Software engineer and creative builder"
      description="Bryan Pan is a Seattle-based software engineer who builds thoughtful products, polished interfaces, and creative technical systems."
    >
      <section id={styles.splash}>
        <div id={styles.splashText}>
          <p className={styles.eyebrow}>BRYAN PAN · SEATTLE, WA</p>
          <h1>I build thoughtful software with a little magic.</h1>
          <p className={styles.intro}>
            I’m a software engineer who loves building for other people, meeting new collaborators,
            and turning ambiguous ideas into calm, useful product experiences.
          </p>
          <div className={styles.actions}>
            <a className="button-link" href="#work">VIEW WORK</a>
            <a href="https://www.linkedin.com/in/blpan/" target="_blank" rel="noreferrer">
              CONNECT ON LINKEDIN
            </a>
          </div>
        </div>

        <aside id={styles.heroCard} aria-label="Bryan Pan profile summary">
          <div id={styles.magic}>
            <Image src="/magic.png" layout="responsive" width="293.96px" height="230.81px" alt="Portrait of Bryan Pan" priority />
          </div>
          <div className={styles.cardCopy}>
            <span>Currently</span>
            <strong>Building human-centered software across product, web, and immersive experiences.</strong>
          </div>
        </aside>

        <div id={styles.developer} className={styles.backgroundText}>DEVELOPER</div>
        <div id={styles.designer} className={styles.backgroundText}>DESIGNER</div>
      </section>

      <section className={styles.capabilities} aria-label="Core capabilities">
        {capabilities.map((capability: string) => (
          <div key={capability}>
            <span />
            <p>{capability}</p>
          </div>
        ))}
      </section>

      <section id="work" className={styles.workContainer}>
        <div id={styles.workHeader}>
          <p className={styles.eyebrow}>WORK</p>
          <h2>Sorcery performed in real life.</h2>
          <p>
            A first pass at reframing the portfolio around professional outcomes: systems that feel polished,
            products that ship, and interfaces with a point of view.
          </p>
        </div>
        <div id={styles.projects}>
          {projects.map((props: ProjectProps) => <Project key={props.title} {...props} />)}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const projects: ProjectProps[] = [
    {
      title: 'Reality Labs product engineering',
      eyebrow: 'Experience',
      body: 'Contributed software craft in a research-heavy product environment where interaction quality, reliability, and cross-functional execution matter.',
      color: '#8b5a89',
      tags: ['Meta', 'Product', 'Systems'],
      cta: 'https://www.linkedin.com/in/blpan/',
      ctaLabel: 'View profile',
    },
    {
      title: 'Portfolio design system',
      eyebrow: 'Brand & web',
      body: 'Translated a high-fidelity visual direction into reusable typography, color, layout, and component patterns for a more mature personal brand.',
      color: '#f6ca56',
      tags: ['Next.js', 'Design system', 'Frontend'],
      cta: '/about',
      ctaLabel: 'About Bryan',
    },
    {
      title: 'Creative technical prototypes',
      eyebrow: 'Practice',
      body: 'Explorations that blend engineering discipline with playful interfaces—the kind of work that makes complex tools feel approachable.',
      color: '#438fd4',
      tags: ['Prototyping', 'UI polish', 'Iteration'],
      cta: 'https://github.com/BryanPan342',
      ctaLabel: 'Open GitHub',
    },
  ];

  return {
    props: {
      projects,
    },
  };
};
