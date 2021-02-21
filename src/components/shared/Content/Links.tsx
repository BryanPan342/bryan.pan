import React from 'react';

export interface Link {
  link: string;
  description: string;
}

export interface LinksProps {
  links: Link[];
}

function Links(props: LinksProps): JSX.Element {
  const {links} = props;

  return (
    <div className='details links-container'>
      {links.map(({link, description}, i) =>
        <div className='link' key={`${description}-${i}`}>
          <a target='_blank' rel='noreferrer' href={link}>
            {description}
          </a>
        </div>,
      )}
    </div>
  );
}

export default Links;