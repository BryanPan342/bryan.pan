import React from 'react';

export interface ImageProps {
  image: string;
}

function Image(props: ImageProps): JSX.Element {
  const {image} = props;

  return (
    <div className={'details image'}>
      <img src={image}/>  
    </div>
  );
}

export default Image;