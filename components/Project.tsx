import React from 'react';
import styles from '../styles/Project.module.scss';
import Link from './Link';

export interface ProjectProps {
  readonly body: string;
  readonly title: string;
  readonly color: string;
  readonly cta?: string;
}

export default function Project({body, color, cta, title}: ProjectProps): JSX.Element {

  return (
    <div className={styles['project-card']}>
      <div className={styles['project-text']}>
        <h4>{title}</h4>
        <p>{body}</p>
        {cta && <Link href={cta}>LEARN MORE</Link>}
      </div>

      <div className={styles['project-art']} style={{backgroundColor: color}}>
      </div>
    </div>
  )
}