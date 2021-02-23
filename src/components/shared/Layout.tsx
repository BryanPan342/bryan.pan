import React, { useContext, useEffect, useState } from 'react';
import {animate_content, animate_section} from '../../utils/animations';
import { AppContext } from '../App';
import Nav from '../Nav';
import '../styles/Layout.scss';
import Progress from './Progress';

interface LayoutProps {
  children: JSX.Element;
}

function Layout(props: LayoutProps): JSX.Element {
  const {autoNavigate, setAutoNavigate} = useContext(AppContext);
  const [showNav, setShowNav] = useState(false);

  const sections: Element[] = [];

  const valid_animations = [
    'div.contents-details > div',
    'div.contents-heading',
    'div.contents-description',
    'div.contents-post-description',
  ];

  const scrollIntoView = (el: HTMLElement) => {
    const border = document.getElementById('border-container');
    const splash = document.getElementById('splash-container');
    const [last] = sections.slice(-1);

    const splash_top = splash?.getBoundingClientRect().top ?? 24;
    const el_top = el.getBoundingClientRect().top;
    const last_top = last.getBoundingClientRect().top;

    const add = (splash_top != el_top && last_top != el_top);
    const borderHeight = border?.getBoundingClientRect().top ?? document.body.offsetHeight - el.offsetHeight;

    animate_section(el.getBoundingClientRect().top - borderHeight - splash_top + 24, add);
  };

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

    const section_observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (autoNavigate && entry.isIntersecting && entry.intersectionRatio < .8) {
          scrollIntoView(entry.target);
        }
      });
    }, { rootMargin: '50px 0px 50px 0px' });

    document.querySelectorAll('div.section').forEach(p => {
      sections.push(p);
      section_observer.observe(p);
    });

    return () => {
      content_observer.disconnect();
      section_observer.disconnect();
    };
  }, [showNav]);

  return (
    <div id={'layout-container'}>
      {!showNav && 'children' in props.children.props && <Progress handle={scrollIntoView} size={25} /> }
      <button id={'nav-icon'} onClick={() => setShowNav(!showNav)}>
        <div id={showNav ? 'nav-close' : 'nav-open'}/>
      </button>
      <main id={'border-container'}>
        {showNav ?
          <Nav isOn={autoNavigate} handleToggle={() => setAutoNavigate(!autoNavigate)} setShowNav={setShowNav}/> :
          <div id={'contents-container'}>
            {props.children}
          </div>}
      </main>
    </div>
  );
}

export default Layout;