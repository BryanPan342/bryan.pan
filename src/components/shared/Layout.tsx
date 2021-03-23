import fullpage from 'fullpage.js';
import React, { useContext, useEffect, useState } from 'react';
import { animate_content } from '../../utils/animations';
import { useWindowSize } from '../../utils/hooks';
import { AppContext } from '../App';
import Nav from './Nav';
import '../styles/Layout.scss';
import Progress from './Progress';


interface LayoutProps {
  children: JSX.Element;
}

function Layout(props: LayoutProps): JSX.Element {
  const {width, height} = useWindowSize();
  const {autoScroll, setAutoScroll} = useContext(AppContext);
  const [showNav, setShowNav] = useState(false);

  const valid_animations = [
    'div.contents-details > div',
    'div.contents-heading',
    'div.contents-description',
    'div.contents-post-description',
  ];

  const scrollIntoView = (index: number) => {
    window.fullpage_api.moveTo(index);
  };

  useEffect(() => {
    new fullpage('#fullpage', {
      licenseKey: 'dfjadskfajsdlkfasdf',
      autoScrolling: true,
      verticalCentered: false,
    });
  }, []);

  useEffect(() => {
    const content_observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate_content(entry.target.classList);
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -100px 0px' });

    const contentsContainer = document.getElementById('contents-container') ?? document;
    contentsContainer.querySelectorAll('div.content-container').forEach((section) => {
      section.querySelectorAll(valid_animations.join(', ')).forEach(p => {
        content_observer.observe(p);
      });
    });

    if (!showNav) {
      window.fullpage_api.reBuild();
    } else {
      window.fullpage_api.destroy('all');
    }

    return () => {
      content_observer.disconnect();
    };
  }, [showNav]);

  const borderWidth = (width ?? window.innerWidth) - 96;
  const borderHeight = (height ?? window.innerHeight) - 48;

  const path = (isHorizontal: boolean) => {
    const d = isHorizontal ? `M 0 0 H ${borderWidth}` : `M 0 0 V ${borderHeight}`;
    return <path d={d} stroke='#191919' strokeWidth={4}/>;
  };

  const borderIds = [
    'border-top-horiz',
    'border-bot-horiz',
    'border-left-vert',
    'border-right-vert',
  ];

  return (
    <div id={'layout-container'}>
      {!showNav && 'children' in props.children.props && <Progress handle={scrollIntoView} size={25} /> }
      <button id={'nav-icon'} onClick={() => setShowNav(!showNav)}>
        <div id={'nav-icon-display'} className={showNav ? 'open' : ''}>
          <span/>
          <span/>
          <span/>
        </div>
      </button>
      {borderIds.map((id: string) => {
        const isHorizontal = id.includes('horiz');
        return isHorizontal
          ? <svg width={borderWidth} height={2} id={id}>{path(isHorizontal)}</svg>
          : <svg width={2} height={borderHeight} id={id}>{path(isHorizontal)}</svg> ;
      })}
      {showNav
        ?
        <Nav isOn={autoScroll} handleToggle={() => setAutoScroll(!autoScroll)} setShowNav={setShowNav}/>
        :
        <main id={'fullpage'} className={'contents-container'}>
          {props.children}
        </main>
      }
    </div>
  );
}

export default Layout;