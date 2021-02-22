import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { animate_highlight, animate_routes, animate_toggle } from '../utils/animations';
import { useWindowSize } from '../utils/hooks';
import Toggle, { ToggleProps } from './shared/Toggle';
import './styles/Nav.scss';

const path2Id: {[key: string]: string} = {
  '/': 'home-link',
  '/about': 'about-link',
  '/projects': 'projects-link',
  '/work': 'work-link',
};

function Nav(props: ToggleProps): JSX.Element {
  const {isOn, handleToggle} = props;

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
      { currentRef && style && <div style={style} id={'highlight'} />}
      <div id={'routes'} className={'route-animation'}>
        <Link id='home-link' to='/'>HOME</Link>
        <Link id='about-link' to='/about'>ABOUT</Link>
        <Link id='projects-link' to='/projects'>PROJECTS</Link>
        <Link id='work-link' to='/work'>WORK</Link>
        <a id='work-link' href='/assets/Bryan_Pan_Resume.pdf'>RESUME</a>
      </div>
      <Toggle 
          isOn={isOn}
          handleToggle={handleToggle}/>
    </nav>
  );
}

export default Nav;