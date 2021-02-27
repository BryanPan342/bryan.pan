import React from 'react';

export interface ImageProps {
  url: string;
  alt: string;
}

function Image(props: ImageProps): JSX.Element {
  const {url, alt} = props;

  return (
    <div className={'details image'}>
      <img src={url} alt={alt}/>
    </div>
  );
}

export default Image;