import React from 'react';

export interface TextBlockProps {
  content: string;
  classList: string;
}

function TextBlock(props: TextBlockProps): JSX.Element {
  const {content, classList} = props;

  return (
    <div className={`details text-block ${classList}`}>
      {content}
    </div>
  );
}

export default TextBlock;