import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/About.module.scss';

const skills = [
  'Frontend architecture',
  'Product engineering',
  'Design systems',
  'Rapid prototyping',
  'Cross-functional collaboration',
  'User-centered polish',
];

const principles = [
  {
    title: 'Make it useful',
    body: 'Start with the human problem, reduce ambiguity, and build the smallest thing that proves value.',
  },
  {
    title: 'Make it beautiful',
    body: 'Use typography, hierarchy, and motion restraint to make software feel calm and intentional.',
  },
  {
    title: 'Make it shippable',
    body: 'Balance craft with pragmatic engineering so ideas become reliable products people can use.',
  },
];

export default function About(): JSX.Element {
  return (
    <Layout
      id={styles.container}
      title="About Bryan Pan"
      description="Learn more about Bryan Pan, a Seattle-based software engineer focused on thoughtful software, polished interfaces, and creative technical systems."
    >
      <section id={styles.splash}>
        <p className={styles.eyebrow}>ABOUT</p>
        <h1>Hi, I’m Bryan [潘博瑞]</h1>
        <p className={styles.bio}>
          I’m a Seattle-based software engineer with experience in product environments like Meta Reality Labs
          and a UCLA foundation. I love building software for others, meeting new people, and drinking coffee.
        </p>
      </section>

      <section className={styles.story}>
        <div>
          <p className={styles.eyebrow}>SKILLS</p>
          <h2>My magical abilities.</h2>
        </div>
        <ul>
          {skills.map((skill: string) => <li key={skill}>{skill}</li>)}
        </ul>
      </section>

      <section className={styles.principles} aria-label="Working principles">
        {principles.map(({body, title}) => (
          <article key={title}>
            <span />
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </section>
    </Layout>
  );
}
