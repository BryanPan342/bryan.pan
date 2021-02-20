import React from 'react';
import '../../styles/Text.scss';

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
      <div className={`text-list-heading`}>{heading}</div>
      <div className={`text-list-contents ${split ? 'split' : ''}`}>
        {content.map((c) => <div>{c}</div>)}
      </div>
    </div>
  );
}

export default TextList;