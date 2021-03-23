import React, { useContext, useEffect, useState } from 'react';
import {animate_content} from '../../utils/animations';
import fullpage from 'fullpage.js';
import { AppContext } from '../App';
import Nav from './Nav';
import '../styles/Layout.scss';
import Progress from './Progress';
import { useWindowSize } from '../../utils/hooks';

interface LayoutProps {
  children: JSX.Element;
}

function Layout(props: LayoutProps): JSX.Element {
  const {width, height} = useWindowSize();
  const {autoNavigate, setAutoNavigate} = useContext(AppContext);
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
      <svg width={width-48} height={2} style={{top: '24px', left: '48px', position: 'fixed', zIndex: 10}}>
        <path d={`M 0 0 H ${width-96}`} stroke="black" strokeWidth={4}/>
      </svg>
      <svg width={width-48} height={2} style={{bottom: '24px', left: '48px', position: 'fixed', zIndex: 10}}>
        <path d={`M 0 0 H ${width-96}`} stroke="black" strokeWidth={4}/>
      </svg>
      <svg width={2} height={height-24} style={{top: '24px', left: '48px', position: 'fixed', zIndex: 10}}>
        <path d={`M 0 0 V ${height-48}`} stroke="black" strokeWidth={4}/>
      </svg>
      <svg width={2} height={height-24} style={{top: '24px', right: '48px', position: 'fixed', zIndex: 10}}>
        <path d={`M 0 0 V ${height-48}`} stroke="black" strokeWidth={4}/>
      </svg>
      {showNav
          ?
            <Nav isOn={autoNavigate} handleToggle={() => setAutoNavigate(!autoNavigate)} setShowNav={setShowNav}/>
          :
            <div id={'fullpage'} className={'contents-container'}>
              {props.children}
            </div>
        }
    </div>
  );
}

export default Layout;