import React from 'react';
import styles from '../styles/Project.module.scss';

export interface ProjectProps {
  readonly body: string;
  readonly title: string;
  readonly color: string;
  readonly cta?: string;
  readonly ctaLabel?: string;
  readonly eyebrow?: string;
  readonly tags?: string[];
}

export default function Project({body, color, cta, ctaLabel, eyebrow, tags, title}: ProjectProps): JSX.Element {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectText}>
        {eyebrow && <span>{eyebrow}</span>}
        <h4>{title}</h4>
        <p>{body}</p>
        {tags && (
          <ul>
            {tags.map((tag: string) => <li key={tag}>{tag}</li>)}
          </ul>
        )}
        {cta && (
          <a href={cta} target={cta.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
            {ctaLabel ?? 'LEARN MORE'}
          </a>
        )}
      </div>

      <div className={styles.projectArt} style={{backgroundColor: color}}>
        <div />
        <div />
      </div>
    </article>
  );
}
