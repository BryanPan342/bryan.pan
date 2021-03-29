import fullpage from 'fullpage.js';
import React, { useContext, useEffect, useState, useRef } from 'react';
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
  const built = useRef(false);
  const sections: Element[] = [];

  const valid_animations = [
    'div.contents-details > div',
    'div.contents-heading',
    'div.contents-description',
    'div.contents-post-description',
    'div.contents-hero',
  ];

  const scrollIntoView = (index: number) => {
    if (built.current) {
      window.fullpage_api.moveTo(index);
    } else {
      window.scrollTo({
        top: sections[index-1].getBoundingClientRect().top,
        behavior: 'smooth',
      });
    }
  };

  const build = () => {
    if (built.current) return;
    new fullpage('#fullpage', {
      licenseKey: 'dfjadskfajsdlkfasdf',
      autoScrolling: true,
      verticalCentered: false,
    });
    built.current = true;
  };

  const destroy = () => {
    if (!built.current) return;
    window.fullpage_api.destroy('all');
    built.current = false;
  };

  useEffect(() => {
    if (!autoScroll) return;

    build();
    return () => {
      destroy();
    };
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

    Array.from(document.getElementsByClassName('section')).forEach(p => {
      sections.push(p);
    });

    if (!showNav && autoScroll) {
      build();
    } else {
      destroy();
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
      <button id={'nav-icon'} aria-label='Navigation' onClick={() => setShowNav(!showNav)}>
        <div id={'nav-icon-display'} aria-hidden='true' className={showNav ? 'open' : ''}>
          <span/>
          <span/>
          <span/>
        </div>
      </button>
      {borderIds.map((id: string) => {
        const isHorizontal = id.includes('horiz');
        const w = isHorizontal ? borderWidth : 2;
        const h = isHorizontal ? 2 : borderHeight;
        return <svg width={w} height={h} id={id} key={id}>{path(isHorizontal)}</svg>;
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