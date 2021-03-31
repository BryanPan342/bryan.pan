import React from 'react';

export interface ImageProps {
  url: string;
  alt: string;
}

function Image(props: ImageProps): JSX.Element {
  const {url, alt} = props;

  return (
    <div className={'details image'}>
      <img className={'image'} style={{opacity: 1}} src={url} alt={alt}/>
    </div>
  );
}

export default Image;