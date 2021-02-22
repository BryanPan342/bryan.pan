import React, { useEffect, useRef, useState } from 'react';
import { animate_progress } from '../../../utils/animations';
import ProgressCircle from './ProgressCircle';
import '../../styles/Progress.scss';

export interface ProgressProps {
  size: number;
  handle: (el: HTMLElement) => void;
}

const generate_threshold_list = (steps: number) => {
  return (Array(steps + 1).fill(0).map((_, i) => i / steps));
};

function Progress(props: ProgressProps): JSX.Element {
  const {size, handle} = props;
  const radius = size / 2;
  const sections = useRef([]);
  const sectionState = useRef<number[]>([]);
  const [sectionProgress, setSectionProgress] = useState<number[]>([]);

  const steps = 40;
  const thresholds = generate_threshold_list(steps);

  const updateSectionProgress = (index: number, ratio: number) => {
    sectionState.current[index] = ratio * 100;
    setSectionProgress([...sectionState.current]);
  };

  useEffect(() => {
    const section_observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (document.readyState !== 'complete') {
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
    animate_progress();

    return () => section_observer.disconnect();
  }, []);

  return (
    <div id={'progress-container'}>
      <svg width={size} height={Math.max(sections.current.length * 37 - 12, 0)} className={'progress-line'}>
        <line
          x1={radius}
          y1={radius}
          x2={radius}
          y2={sections.current.length * 37 - size}
          stroke={'#1919194D'}
          strokeWidth={2}/>
      </svg>
      {sections.current.map((el, i) =>
        <a
          className={'progress-circle-anchor'}
          style={{width: size, height: size}}
          onClick={() => handle(el)}
          key={`circle-${i}`}>
          <ProgressCircle size={size} progress={sectionProgress[i]} idx={i} />
        </a>,
      )}
    </div>
  );
}

export default Progress;