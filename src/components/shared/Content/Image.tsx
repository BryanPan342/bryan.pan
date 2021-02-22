import React from 'react';

export interface ImageProps {
  image: string;
}

function Image(props: ImageProps): JSX.Element {
  const {image} = props;

  return (
    <div className={'details image'} id={image}/>
  );
}

export default Image;