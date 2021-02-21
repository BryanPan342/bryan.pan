import React, { useEffect, useRef, useState } from 'react';

export interface ProgressCircleProps {
  size: number;
  progress: number;
  idx: number;
}

function ProgressCircle(props: ProgressCircleProps): JSX.Element {
  const [offset, setOffset] = useState(100);
  const circleRef = useRef(null);
  const {size, progress, idx} = props;

  const center = size / 2;
  const strokeWidth = 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const normalized_progress = Math.min(progress / 90 * 100, 100);
    const progressOffset = ((100 - normalized_progress) / 100 * circumference);
    setOffset(progressOffset);
    circleRef.current.style = 'transition: stroke-dashoffset 500ms ease-in-out;';
  }, [setOffset, circumference, progress, offset]);

  return (
    <svg className={`progress-circle n-${idx}`} width={size} height={size} transform='rotate(-90)'>
      <circle
        className="svg-circle-bg"
        stroke={'#1919194D'}
        fillOpacity={'0'}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}/>
      <circle
        className="svg-circle"
        stroke={'#191919'}
        fillOpacity={'0'}
        ref={circleRef}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}/>
      <circle
        className="svg-circle-inner"
        fill={'#191919'}
        ref={circleRef}
        cx={center}
        cy={center}
        r={strokeWidth}/>
    </svg>
  );
}

export default ProgressCircle;