import React, { useContext, useEffect, useRef, useState } from 'react';
import { animate_progress } from '../../../utils/animations';
import { AppContext } from '../../App';
import '../../styles/Progress.scss';
import ProgressCircle from './ProgressCircle';

export interface ProgressProps {
  size: number;
  handle: (el: number) => void;
}

const generate_threshold_list = (steps: number) => {
  return (Array(steps + 1).fill(0).map((_, i) => i / steps));
};

function Progress(props: ProgressProps): JSX.Element {
  const {size, handle} = props;
  const {isMobile} = useContext(AppContext);
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

  const length = Math.max(sections.current.length * 37 - 12, 0);
  const line_end = sections.current.length * 37 - size;
  const dims = isMobile ? [length, size] : [size, length];
  const dpath = `M ${radius} ${radius} ${isMobile ? 'H' : 'V'} ${line_end}`;

  return (
    <div id={'progress-wrapper'}>
      <div id={'progress-container'}>
        <svg width={dims[0]} height={dims[1]} viewBox={`0 0 ${dims[0]} ${dims[1]}`} className={'progress-line'}>
          <path d={dpath} stroke={'#1919194D'} strokeWidth={2}/>
        </svg>
        {sections.current.map((_, i: number) =>
          <a
            className={'progress-circle-anchor'}
            style={{width: size, height: size}}
            onClick={() => handle(i+1)}
            key={`circle-${i}`}>
            <ProgressCircle size={size} progress={sectionProgress[i]} idx={i} />
          </a>,
        )}
      </div>
    </div>
  );
}

export default Progress;