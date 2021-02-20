import React, { useState } from 'react';
import Nav from '../Nav';
import '../styles/Layout.scss';

interface LayoutProps {
  children: JSX.Element;
}

function Layout(props: LayoutProps): JSX.Element {
  const [showNav, setShowNav] = useState(false);

  return (
    <div id={'layout-container'}>
      <button id={'nav-icon'} onClick={() => setShowNav(!showNav)}>
        <div id={showNav ? 'nav-close' : 'nav-open'}/>
      </button>
      <main id={'contents-container'}>
        {showNav ? <Nav /> : props.children}
      </main>
    </div>
  );
}

export default Layout;