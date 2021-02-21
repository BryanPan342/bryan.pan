import React from 'react';

export interface TextListProps {
  heading: string;
  content: string[];
  classList: string;
  split?: boolean;
}

function TextList(props: TextListProps): JSX.Element {
  const {heading, content, classList, split} = props;

  return (
    <div className={`details text-list ${classList}`}>
      <div className={'text-list-heading'}>{heading}</div>
      <div className={`text-list-contents ${split ? 'split' : ''}`}>
        {content.map((c, i) => <div key={`${heading}-${i}`}>{c}</div>)}
      </div>
    </div>
  );
}

export default TextList;