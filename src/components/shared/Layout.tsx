import React from 'react';
import '../styles/Layout.scss';

interface LayoutProps {
  children: JSX.Element;
}

function Layout(props: LayoutProps): JSX.Element {
  return (
    <div id={'layout-container'}>
      <main id={'contents-container'}>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;