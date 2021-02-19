import React from 'react';
import './styles/Layout.scss';

interface LayoutProps {
  children: JSX.Element;
}

function Layout(props: LayoutProps): JSX.Element {
  return (
    <div id={'layout-container'}>
      <div id={'contents-container'}>
        {props.children}
      </div>
    </div>
  );
}

export default Layout;