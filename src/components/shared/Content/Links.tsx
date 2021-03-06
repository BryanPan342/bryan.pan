import React from 'react';

export interface Link {
  link: string;
  description: string;
  graphic?: {url: string};
}

export interface LinksProps {
  links: Link[];
  classList: string;
}

function Links(props: LinksProps): JSX.Element {
  const {links, classList} = props;

  return (
    <div className={`details links-container ${classList}`}>
      {links.map(({link, description, graphic}, i) =>
        <div className={'link'} key={`${description}-${i}`} style={graphic ? {placeSelf: 'center', marginTop: '24px'} : {}}>
          <a className={graphic ? 'graphic' : 'text'} target='_blank' rel='noreferrer' href={link}>
            {graphic
              ? <img className={`svg-link ${graphic}`} alt={description} src={graphic.url}/>
              : description}
          </a>
        </div>,
      )}
    </div>
  );
}

export default Links;