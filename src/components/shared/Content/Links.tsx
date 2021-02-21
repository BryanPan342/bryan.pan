import React from 'react';

export interface Link {
  link: string;
  description: string;
}

export interface LinksProps {
  links: Link[];
  classList: string;
}

function Links(props: LinksProps): JSX.Element {
  const {links, classList} = props;

  return (
    <div className={`details links-container ${classList}`}>
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