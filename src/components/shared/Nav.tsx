import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { animate_highlight, animate_routes, animate_toggle } from '../../utils/animations';
import { useWindowSize } from '../../utils/hooks';
import { PAGE, path2Page } from '../../utils/page';
import '../styles/Nav.scss';

import { AboutSplash } from './Splash/About';
import { HomeSplash } from './Splash/Home';
import { ProjectsSplash } from './Splash/Projects';
import { WorkSplash } from './Splash/Work';
import Toggle from './Toggle';

const path2Id: {[key: string]: string} = {
  '/': 'home-link',
  '/about': 'about-link',
  '/projects': 'projects-link',
  '/work': 'work-link',
};

const getHoverProps = (page: PAGE, screen_width: number, screen_height: number) => {
  const height_multiplier = screen_width > 600 ? 5 : 2;
  const width_multiplier  = screen_width > 600 ? 3 : 2;
  const splashDims  = [screen_width / width_multiplier, screen_height / height_multiplier];
  const PAGE_MAP: {[key: string]: JSX.Element} = {
    [PAGE.HOME]: <HomeSplash width={splashDims[0]} height={splashDims[1]} key={'home-splash'} />,
    [PAGE.ABOUT]: <AboutSplash width={splashDims[0]} height={splashDims[1]} key={'about-splash'} />,
    [PAGE.PROJECTS]: <ProjectsSplash width={splashDims[0]} height={splashDims[1]} key={'home-splash'} />,
    [PAGE.WORK]: <WorkSplash width={splashDims[0]} height={splashDims[1]} key={'home-splash'} />,
  };
  return PAGE_MAP[page];
};

export interface NavProps {
  isOn: boolean;
  handleToggle: () => void;
  setShowNav: (x: boolean) => void;
}

function Nav(props: NavProps): JSX.Element {
  const {isOn, handleToggle, setShowNav} = props;

  const size = useWindowSize();
  const [width, height] = [size.width ?? screen.width, size.height ?? screen.height];
  const path = window.location.pathname;
  const id = path2Id[path];
  const curr_page = path2Page(path);
  const [currentRef, setCurrentRef] = useState<HTMLElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [hoverState, setHoverState] = useState<PAGE | null>(null);
  const [splash, setSplash] = useState(getHoverProps(curr_page, width, height));

  useEffect(() => {
    setCurrentRef(document.getElementById(id));
    animate_toggle();
    animate_routes();
  }, []);

  useEffect(() => {
    if (currentRef) {
      const dim = currentRef.getBoundingClientRect();
      const h = Math.max(dim.height - 50, 15);
      const top = dim.top + (dim.height - h) / 2;
      setStyle({width: dim.width + 10, height: h, top, left: dim.left - 5});
      animate_highlight();
    }
  }, [currentRef, size]);

  useEffect(() => {
    const page = !hoverState ? curr_page : hoverState;
    setSplash(getHoverProps(page, width, height));
  }, [hoverState]);

  return (
    <nav id={'nav-container'} className={'section'}>
      <div id={'routes-container'}>
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
                onMouseEnter={() => setHoverState(path2Page(url))}
                onMouseLeave={() => setHoverState(null)}
                onClick={() => path == url && setShowNav(false)}>
                {page.toUpperCase()}
              </Link>
            );
          })}
          <a id='work-link' href='/assets/Bryan_Pan_Resume.pdf'>RESUME</a>
        </div>
      </div>
      <div id={'hero-preview'}>
        {splash}
      </div>
      <Toggle
        isOn={isOn}
        handleToggle={handleToggle}/>
    </nav>
  );
}

export default Nav;