import React, { useEffect, useState } from 'react';
import Nav from '../Nav';
import {animate_content} from '../../utils/animations';
import '../styles/Layout.scss';

interface LayoutProps {
  children: JSX.Element;
}

function Layout(props: LayoutProps): JSX.Element {
  const [showNav, setShowNav] = useState(false);



  const valid_animations = [
    'div.contents-details > div',
    'div.contents-heading',
    'div.contents-description',
    'div.contents-post-description',
  ];

  useEffect(() => {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate_content(entry.target.classList);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: .2,
    });
    const contentsContainer = document.getElementById('contents-container') ?? document;
    contentsContainer.querySelectorAll('div.content-container').forEach((section) => {
      section.querySelectorAll(valid_animations.join(', ')).forEach(p => {
        observer.observe(p);
      });
    })

  }, []);



  return (
    <div id={'layout-container'}>
      <button id={'nav-icon'} onClick={() => setShowNav(!showNav)}>
        <div id={showNav ? 'nav-close' : 'nav-open'}/>
      </button>
      <main id={'border-container'}>
        {showNav 
          ? <Nav /> 
          : <div id={'contents-container'}>
              {props.children}
            </div>}
      </main>
    </div>
  );
}

export default Layout;