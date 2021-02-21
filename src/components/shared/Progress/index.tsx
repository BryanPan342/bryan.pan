import React, { useEffect, useRef, useState } from 'react';
import ProgressCircle from './ProgressCircle';
import '../../styles/Progress.scss';

export interface ProgressProps {
  size: number;
  handle: (el: HTMLElement) => void;
}

const generate_threshold_list = (steps: number) => {
  const thresholds = [];
  for (let i=1.0; i<=steps; i++) {
    let ratio = i/steps;
    thresholds.push(ratio);
  }
  return [...thresholds, 0];
}

function Progress(props: ProgressProps): JSX.Element {
  const {size, handle} = props;
  const sections = useRef([]);
  const sectionState = useRef<number[]>([]);
  const [sectionProgress, setSectionProgress] = useState<number[]>([]);

  const steps = 40;
  const thresholds = generate_threshold_list(steps);

  const updateSectionProgress = (index: number, ratio: number) => {
    sectionState.current[index] = ratio * 100;
    setSectionProgress([...sectionState.current]);
  }

  useEffect(() => {
    const section_observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (document.readyState !== "complete") {
          return;
        }
        let index = 0;
        entry.target.classList.forEach((c) => {
          if (!isNaN(+c)) {
            index = +c + 1;
          }
        });
        updateSectionProgress(index, entry.intersectionRatio);
      });
    }, { threshold: thresholds });

    document.querySelectorAll('div.section').forEach(p => {
      sections.current.push(p);
      sectionState.current.push(0);
      section_observer.observe(p);
    });

    sectionState.current[0] = 100;
    setSectionProgress(sectionState.current);
  }, []);

  return (
    <div id={'progress-container'}>
      {sections.current.map((el, i) => 
        <a onClick={() => handle(el)}>
          <ProgressCircle size={size} progress={sectionProgress[i]} idx={i}/>
        </a>
      )}
    </div>
  );
}

export default Progress;