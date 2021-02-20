import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { animate_highlight } from '../utils/animations';
import { useWindowSize } from '../utils/hooks';
import './styles/Nav.scss';

const path2Id: {[key: string]: string} = {
  '/': 'home-link',
  '/about': 'about-link',
  '/projects': 'projects-link',
  '/work': 'work-link',
}

function Nav(): JSX.Element {
  const { height } = useWindowSize();
  const path = window.location.pathname;
  const id = path2Id[path];
  const [currentRef, setCurrentRef] = useState<HTMLElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    setCurrentRef(document.getElementById(id));
  }, []);

  useEffect(() => {
    if (currentRef) {
      const dim = currentRef.getBoundingClientRect();
      setStyle({width: dim.width + 10, height: Math.max(dim.height - 50, 15), top: dim.top + 25, left: dim.left - 5});
      animate_highlight();
    }
  }, [currentRef, height]);

  return (
    <nav id={'nav-container'}>
      { currentRef && style && <div style={style} id={'highlight'} />}
      <div id={'routes'}>
        <Link id='home-link' to='/'>HOME</Link>
        <Link id='about-link' to='/about'>ABOUT</Link>
        <Link id='projects-link' to='/projects'>PROJECTS</Link>
        <Link id='work-link' to='/work'>WORK</Link>
        <a id='work-link' href='/assets/Bryan_Pan_Resume.pdf'>RESUME</a>
      </div>
    </nav>
  );
}

export default Nav;