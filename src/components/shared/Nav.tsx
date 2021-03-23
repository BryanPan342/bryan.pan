import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { animate_highlight, animate_routes, animate_toggle } from '../../utils/animations';
import { useWindowSize } from '../../utils/hooks';
import Toggle from './Toggle';
import '../styles/Nav.scss';

const path2Id: {[key: string]: string} = {
  '/': 'home-link',
  '/about': 'about-link',
  '/projects': 'projects-link',
  '/work': 'work-link',
};

export interface NavProps {
  isOn: boolean;
  handleToggle: () => void;
  setShowNav: (x: boolean) => void;
}

function Nav(props: NavProps): JSX.Element {
  const {isOn, handleToggle, setShowNav} = props;

  const size = useWindowSize();
  const path = window.location.pathname;
  const id = path2Id[path];
  const [currentRef, setCurrentRef] = useState<HTMLElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    setCurrentRef(document.getElementById(id));
    animate_toggle();
    animate_routes();
  }, []);

  useEffect(() => {
    if (currentRef) {
      const dim = currentRef.getBoundingClientRect();
      const height = Math.max(dim.height - 50, 15);
      const top = dim.top + (dim.height - height) / 2;
      setStyle({width: dim.width + 10, height, top, left: dim.left - 5});
      animate_highlight();
    }
  }, [currentRef, size]);

  return (
    <nav id={'nav-container'} className={'section'}>
      {currentRef && style && <div style={style} id={'highlight'} />}
      <div id={'routes'} className={'route-animation'}>
        {Object.keys(path2Id).map((url, i) => {
          const page = url.slice(1) ?url.slice(1) : 'home';
          return (
            <Link
              aria-label={page}
              id={`${page}-link`}
              to={url}
              key={`route-${i}`}
              onClick={() => path == url && setShowNav(false)}>
              {page.toUpperCase()}
            </Link>
          );
        })}
        <a id='work-link' href='/assets/Bryan_Pan_Resume.pdf'>RESUME</a>
      </div>
      <Toggle
        isOn={isOn}
        handleToggle={handleToggle}/>
    </nav>
  );
}

export default Nav;